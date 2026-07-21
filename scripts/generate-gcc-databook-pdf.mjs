import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'pdf-assets', 'gcc-databook-sample.html');
const outPath = path.join(__dirname, '..', 'public', 'downloads', 'gcc-pharma-medtech-databook-2026-sample.pdf');

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage();
await page.goto(`file://${htmlPath}`);
await page.pdf({
  path: outPath,
  printBackground: true,
  preferCSSPageSize: true,
});
await browser.close();
console.log('Generated:', outPath);
