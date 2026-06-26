import { chromium } from 'playwright';

const BASE = process.env.SHOT_BASE || 'http://localhost:8096';
const OUT = '/tmp/staging-shots';
const EXEC = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

import { mkdirSync } from 'node:fs';
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  executablePath: EXEC,
  args: [
    '--enable-unsafe-swiftshader',
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--ignore-gpu-blocklist',
    '--no-sandbox',
  ],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

// Pre-set cookie consent so the exit popup is allowed (won't stack on cookie bar).
await page.addInitScript(() => {
  try {
    localStorage.setItem('bionixus-cookie-consent', 'accepted');
  } catch {}
});

await page.goto(`${BASE}/home-staging`, { waitUntil: 'networkidle', timeout: 60000 });
// Give the lazy WebGL hero time to import + render.
await page.waitForTimeout(5000);

// 1) Hero (top of page)
await page.screenshot({ path: `${OUT}/01-hero.png` });

// 2) Full page
await page.screenshot({ path: `${OUT}/02-fullpage.png`, fullPage: true });

// 3) Audience + analytics sections — scroll to "Who we reach"
await page.evaluate(() => {
  const el = Array.from(document.querySelectorAll('h2')).find((h) =>
    /people behind the data/i.test(h.textContent || ''),
  );
  el?.scrollIntoView({ block: 'start' });
});
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/03-audience.png` });

await page.evaluate(() => {
  const el = Array.from(document.querySelectorAll('h2')).find((h) =>
    /delivered across regions/i.test(h.textContent || ''),
  );
  el?.scrollIntoView({ block: 'start' });
});
await page.waitForTimeout(1500);
await page.screenshot({ path: `${OUT}/04-analytics.png` });

// 4) Exit-intent popup — engage (scroll), then fire mouseout through top edge.
await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight * 0.45 }));
await page.waitForTimeout(600);
await page.evaluate(() => {
  const evt = new MouseEvent('mouseout', { clientY: 0, relatedTarget: null, bubbles: true });
  document.dispatchEvent(evt);
});
await page.waitForTimeout(1500);
await page.evaluate(() => window.scrollTo({ top: 0 }));
await page.waitForTimeout(400);
await page.screenshot({ path: `${OUT}/05-exit-popup.png` });

await browser.close();
console.log('screenshots written to', OUT);
