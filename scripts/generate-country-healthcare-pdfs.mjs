/**
 * Country healthcare sample PDFs.
 * Fill-the-page + chart rules: scripts/pdf-assets/README.md
 * Every A4 page must fill 297mm (no leftover white bands). Charts only from
 * published live-page figures — never invent $ shares, rebates, or beds.
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, 'pdf-assets');
const outDir = path.join(__dirname, '..', 'public', 'downloads');

const JOBS = [
  {
    html: 'usa-healthcare-databook-sample.html',
    pdf: 'usa-healthcare-market-report-2026-sample.pdf',
  },
  {
    html: 'brazil-healthcare-databook-sample.html',
    pdf: 'brazil-healthcare-market-report-2026-sample.pdf',
  },
  {
    html: 'germany-healthcare-databook-sample.html',
    pdf: 'germany-healthcare-market-report-2026-sample.pdf',
  },
  {
    html: 'uk-healthcare-databook-sample.html',
    pdf: 'uk-healthcare-market-report-2026-sample.pdf',
  },
];

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

const only = process.argv.slice(2);
const jobs = only.length ? JOBS.filter((job) => only.some((key) => job.pdf.includes(key) || job.html.includes(key))) : JOBS;
if (!jobs.length) {
  console.error('No matching jobs. Keys:', JOBS.map((j) => j.pdf).join(', '));
  process.exit(1);
}

const browser = await launchBrowser();
for (const job of jobs) {
  const htmlPath = path.join(assetsDir, job.html);
  const outPath = path.join(outDir, job.pdf);
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: outPath,
    printBackground: true,
    preferCSSPageSize: true,
  });
  await page.close();
  const bytes = fs.statSync(outPath).size;
  console.log('Generated:', outPath, `(${Math.round(bytes / 1024)} KB)`);
}
await browser.close();
