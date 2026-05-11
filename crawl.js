// Crawls docs.cycode.com using a saved session and pushes each page as markdown
// directly to GitHub — nothing is written to disk.
//
// Usage: node crawl.js
// Requires:
//   - session.json (run login.js first)
//   - GITHUB_TOKEN env var with repo scope

const { chromium } = require('playwright');
const TurndownService = require('turndown');
const { Octokit } = require('@octokit/rest');
const path = require('path');
const fs = require('fs');

const SESSION_FILE = path.join(__dirname, 'session.json');
const START_URL = 'https://docs.cycode.com/';
const DOMAIN = 'docs.cycode.com';
const CONCURRENCY = 3;

const GITHUB_OWNER = 'hackeral-cycode';
const GITHUB_REPO = 'cycode-docs-crawler';
const GITHUB_BRANCH = 'main';
const GITHUB_DOCS_PATH = 'docs';

const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
td.remove(['nav', 'header', 'footer', 'script', 'style', 'aside', '[role="navigation"]']);

function urlToRepoPath(url) {
  const u = new URL(url);
  let p = u.pathname.replace(/\/$/, '') || '/index';
  p = p.replace(/[^a-zA-Z0-9/_-]/g, '_');
  return `${GITHUB_DOCS_PATH}${p}.md`;
}

function normalizeUrl(url) {
  try {
    const u = new URL(url);
    u.hash = '';
    u.search = '';
    return u.href.replace(/\/$/, '') || START_URL;
  } catch {
    return null;
  }
}

function isCrawlable(url) {
  try {
    return new URL(url).hostname === DOMAIN;
  } catch {
    return false;
  }
}

async function extractLinks(page) {
  return page.$$eval('a[href]', (els) => els.map((a) => a.href).filter(Boolean));
}

async function extractMainContent(page) {
  const selectors = ['article', 'main', '[role="main"]', '.markdown-body', '.content', '.docs-content', '#content'];
  for (const sel of selectors) {
    const el = await page.$(sel);
    if (el) return el.innerHTML();
  }
  return page.$eval('body', (b) => b.innerHTML);
}

const COMMIT_BATCH_SIZE = 100;
const BLOB_DELAY_MS = 150; // sequential, one blob at a time

async function createBlobWithRetry(octokit, content) {
  while (true) {
    try {
      const { data: blob } = await octokit.git.createBlob({
        owner: GITHUB_OWNER, repo: GITHUB_REPO,
        content: Buffer.from(content).toString('base64'),
        encoding: 'base64',
      });
      return blob.sha;
    } catch (err) {
      if (err.status === 403 && err.response?.headers?.['retry-after']) {
        const wait = parseInt(err.response.headers['retry-after'], 10) * 1000;
        console.log(`\n  Rate limited — waiting ${wait / 1000}s...`);
        await new Promise((r) => setTimeout(r, wait));
      } else {
        throw err;
      }
    }
  }
}

// Push all collected files to GitHub in batched commits using the Git Data API
async function pushToGitHub(octokit, files) {
  console.log(`\nPushing ${files.length} files to GitHub in batches of ${COMMIT_BATCH_SIZE}...`);

  const date = new Date().toISOString().split('T')[0];
  const totalBatches = Math.ceil(files.length / COMMIT_BATCH_SIZE);

  const { data: ref } = await octokit.git.getRef({
    owner: GITHUB_OWNER, repo: GITHUB_REPO, ref: `heads/${GITHUB_BRANCH}`,
  });
  let currentCommitSha = ref.object.sha;

  for (let b = 0; b < totalBatches; b++) {
    const batch = files.slice(b * COMMIT_BATCH_SIZE, (b + 1) * COMMIT_BATCH_SIZE);
    console.log(`\nBatch ${b + 1}/${totalBatches} — creating ${batch.length} blobs sequentially...`);

    const treeItems = [];
    for (const { repoPath, content } of batch) {
      const sha = await createBlobWithRetry(octokit, content);
      treeItems.push({ path: repoPath, mode: '100644', type: 'blob', sha });
      process.stdout.write(`\r  ${treeItems.length}/${batch.length} blobs`);
      await new Promise((r) => setTimeout(r, BLOB_DELAY_MS));
    }
    console.log();

    const { data: currentCommit } = await octokit.git.getCommit({
      owner: GITHUB_OWNER, repo: GITHUB_REPO, commit_sha: currentCommitSha,
    });
    const { data: newTree } = await octokit.git.createTree({
      owner: GITHUB_OWNER, repo: GITHUB_REPO,
      base_tree: currentCommit.tree.sha,
      tree: treeItems,
    });
    const start = b * COMMIT_BATCH_SIZE + 1;
    const end = b * COMMIT_BATCH_SIZE + batch.length;
    const { data: newCommit } = await octokit.git.createCommit({
      owner: GITHUB_OWNER, repo: GITHUB_REPO,
      message: `chore: crawl docs.cycode.com (${date}, pages ${start}-${end})`,
      tree: newTree.sha,
      parents: [currentCommitSha],
    });
    await octokit.git.updateRef({
      owner: GITHUB_OWNER, repo: GITHUB_REPO,
      ref: `heads/${GITHUB_BRANCH}`,
      sha: newCommit.sha,
    });
    currentCommitSha = newCommit.sha;
    console.log(`  Committed ${newCommit.sha.slice(0, 7)}`);
  }

  console.log(`\nDone — ${totalBatches} commit(s) pushed to GitHub.`);
}

(async () => {
  if (!fs.existsSync(SESSION_FILE)) {
    console.error('No session.json found. Run: node login.js');
    process.exit(1);
  }
  if (!process.env.GITHUB_TOKEN) {
    console.error('GITHUB_TOKEN env var is required.');
    process.exit(1);
  }

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: SESSION_FILE });

  const visited = new Set();
  const queue = [normalizeUrl(START_URL)];
  const pages = []; // { repoPath, content } — kept in memory only

  async function crawlOne(url) {
    if (visited.has(url)) return;
    visited.add(url);

    const page = await context.newPage();
    try {
      const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

      const ct = response?.headers()['content-type'] ?? '';
      if (!ct.includes('text/html') || (response?.status() ?? 200) >= 400) return;

      const finalUrl = page.url();
      if (!isCrawlable(finalUrl)) {
        console.log(`  Skipping off-domain redirect: ${url}`);
        return;
      }

      const title = await page.title();
      const html = await extractMainContent(page);
      const markdown = td.turndown(html);
      const repoPath = urlToRepoPath(url);

      pages.push({ repoPath, content: `# ${title}\n\nSource: ${url}\n\n---\n\n${markdown}\n` });
      console.log(`[${pages.length}] ${url}`);

      const links = await extractLinks(page);
      for (const link of links) {
        const norm = normalizeUrl(link);
        if (norm && isCrawlable(norm) && !visited.has(norm)) queue.push(norm);
      }
    } catch (err) {
      console.warn(`  Error on ${url}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  while (queue.length > 0) {
    const batch = [];
    while (batch.length < CONCURRENCY && queue.length > 0) {
      const url = queue.shift();
      if (!visited.has(url)) batch.push(crawlOne(url));
    }
    await Promise.all(batch);
  }

  await browser.close();
  console.log(`\nCrawled ${pages.length} pages.`);

  if (pages.length > 0) {
    await pushToGitHub(octokit, pages);
  }
})();
