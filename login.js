// Run this once to log in and save your session.
// Usage: node login.js
// A browser window will open — log in, then press Enter in this terminal.

const { chromium } = require('playwright');
const path = require('path');

const SESSION_FILE = path.join(__dirname, 'session.json');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Opening docs.cycode.com — log in, then come back here and press Enter.');
  await page.goto('https://docs.cycode.com/');

  await new Promise((resolve) => {
    process.stdin.resume();
    process.stdin.once('data', resolve);
    process.stdout.write('Press Enter once you are fully logged in...');
  });

  await context.storageState({ path: SESSION_FILE });
  console.log(`Session saved to ${SESSION_FILE}`);
  await browser.close();
  process.exit(0);
})();
