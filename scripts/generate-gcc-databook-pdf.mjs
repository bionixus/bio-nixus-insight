import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'pdf-assets', 'gcc-databook-sample.html');
const outDir = path.join(__dirname, '..', 'public', 'downloads');
const outPath = path.join(outDir, 'gcc-pharma-medtech-databook-2026-sample.pdf');

const chromeCandidates = [
  process.env.PLAYWRIGHT_CHROME,
  process.env.CHROME_PATH,
  '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
].filter(Boolean);

async function launchBrowser() {
  for (const executablePath of chromeCandidates) {
    if (fs.existsSync(executablePath)) {
      console.log('Using Chrome:', executablePath);
      return chromium.launch({ executablePath });
    }
  }
  console.log('Using Playwright bundled Chromium');
  return chromium.launch();
}

fs.mkdirSync(outDir, { recursive: true });

const browser = await launchBrowser();
const page = await browser.newPage();
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle', timeout: 60000 });
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: outPath,
  printBackground: true,
  preferCSSPageSize: true,
});
await browser.close();
console.log('Generated:', outPath);
