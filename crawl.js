// Crawls docs.cycode.com using a saved session and writes each page as markdown.
// Usage: node crawl.js
// Run login.js first to create session.json.

const { chromium } = require('playwright');
const TurndownService = require('turndown');
const fs = require('fs');
const path = require('path');

const SESSION_FILE = path.join(__dirname, 'session.json');
const OUTPUT_DIR = path.join(__dirname, 'docs');
const START_URL = 'https://docs.cycode.com/';
const DOMAIN = 'docs.cycode.com';
const CONCURRENCY = 3;

const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });

// Remove nav, sidebar, footer, and other chrome — keep only doc content
td.remove(['nav', 'header', 'footer', 'script', 'style', 'aside', '[role="navigation"]']);

function urlToFilePath(url) {
  const u = new URL(url);
  let p = u.pathname.replace(/\/$/, '') || '/index';
  p = p.replace(/[^a-zA-Z0-9/_-]/g, '_');
  return path.join(OUTPUT_DIR, p + '.md');
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
    const u = new URL(url);
    return u.hostname === DOMAIN;
  } catch {
    return false;
  }
}

async function extractLinks(page) {
  return page.$$eval('a[href]', (els) =>
    els.map((a) => a.href).filter(Boolean)
  );
}

async function extractMainContent(page) {
  // Try common doc platform selectors in priority order
  const selectors = [
    'article',
    'main',
    '[role="main"]',
    '.markdown-body',
    '.content',
    '.docs-content',
    '#content',
  ];
  for (const sel of selectors) {
    const el = await page.$(sel);
    if (el) {
      return el.innerHTML();
    }
  }
  return page.$eval('body', (b) => b.innerHTML);
}

(async () => {
  if (!fs.existsSync(SESSION_FILE)) {
    console.error('No session.json found. Run: node login.js');
    process.exit(1);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: SESSION_FILE });

  const visited = new Set();
  const queue = [normalizeUrl(START_URL)];
  let pageCount = 0;

  async function crawlOne(url) {
    if (visited.has(url)) return;
    visited.add(url);

    const page = await context.newPage();
    try {
      const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

      // Skip non-HTML or error responses
      const ct = response?.headers()['content-type'] ?? '';
      if (!ct.includes('text/html') || (response?.status() ?? 200) >= 400) return;

      // If we got redirected off-domain (e.g. back to OAuth), skip
      const finalUrl = page.url();
      if (!isCrawlable(finalUrl)) {
        console.log(`  Skipping off-domain redirect: ${url} -> ${finalUrl}`);
        return;
      }

      const title = await page.title();
      const html = await extractMainContent(page);
      const markdown = td.turndown(html);

      const filePath = urlToFilePath(url);
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, `# ${title}\n\nSource: ${url}\n\n---\n\n${markdown}\n`);

      pageCount++;
      console.log(`[${pageCount}] ${url}`);

      // Collect new links
      const links = await extractLinks(page);
      for (const link of links) {
        const norm = normalizeUrl(link);
        if (norm && isCrawlable(norm) && !visited.has(norm)) {
          queue.push(norm);
        }
      }
    } catch (err) {
      console.warn(`  Error on ${url}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  // Process queue with limited concurrency
  while (queue.length > 0) {
    const batch = [];
    while (batch.length < CONCURRENCY && queue.length > 0) {
      const url = queue.shift();
      if (!visited.has(url)) batch.push(crawlOne(url));
    }
    await Promise.all(batch);
  }

  await browser.close();
  console.log(`\nDone. ${pageCount} pages saved to ${OUTPUT_DIR}/`);
})();
