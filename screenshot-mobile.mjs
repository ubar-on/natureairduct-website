import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, 'temporary screenshots');

if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || 'mobile';

const existing = fs.readdirSync(screenshotDir).filter(f => f.startsWith('screenshot-'));
let nextNum = 1;
for (const f of existing) {
  const match = f.match(/^screenshot-(\d+)/);
  if (match) nextNum = Math.max(nextNum, parseInt(match[1]) + 1);
}

const filename = `screenshot-${nextNum}-${label}.png`;
const filePath = path.join(screenshotDir, filename);

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: filePath, fullPage: true });
  console.log(`Screenshot saved: ${filePath}`);
  await browser.close();
})();
