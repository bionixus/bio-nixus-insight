/**
 * Cover / hero for /blog/hematology-market-research-saudi-arabia.
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 *
 *   public/images/blog/hematology-market-research-saudi-arabia-cover.jpg  (1200×630 titled OG card)
 *   public/images/blog/hematology-market-research-saudi-arabia-hero.jpg   (1200×630 text-free hero)
 *
 *   node scripts/generate-hematology-ksa-research-cover.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'hematology-market-research-saudi-arabia-cover.jpg');
const HERO_PATH = path.join(outDir, 'hematology-market-research-saudi-arabia-hero.jpg');
const LOGO_PNG = path.join(root, 'public/bionixus-logo.png');

const NAVY = '#101C30';
const NAVY_MID = '#1A2C4A';
const NAVY_END = '#243652';
const GOLD = '#F5A503';
const GOLD_LIGHT = '#F7C948';
const CREAM = '#F8F6F2';

async function tintLogo(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const { data, info } = await sharp(LOGO_PNG).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const lum = (out[i] + out[i + 1] + out[i + 2]) / 3;
    out[i] = r;
    out[i + 1] = g;
    out[i + 2] = b;
    out[i + 3] = lum < 200 ? out[i + 3] : 0;
  }
  const png = await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
  return `data:image/png;base64,${png.toString('base64')}`;
}

function motif(withText) {
  const labels = withText
    ? `
    <text x="176" y="548" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">Hydroxyurea</text>
    <text x="318" y="548" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">HSCT</text>
    <text x="460" y="548" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">Gene therapy</text>`
    : '';
  return `
  <svg class="motif" viewBox="0 0 560 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glowH" cx="48%" cy="28%" r="58%">
        <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.28"/>
        <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="560" height="630" fill="url(#glowH)"/>
    <path d="M 0 558 C 140 522, 260 586, 390 542 S 520 534, 560 560 V 630 H 0 Z" fill="#0A1422"/>
    <g fill="none" stroke="${GOLD_LIGHT}" stroke-width="2.2" opacity="0.9">
      <path d="M 86 92 C 118 58, 168 58, 200 92 C 232 126, 282 126, 314 92"/>
      <path d="M 86 92 C 118 126, 168 126, 200 92 C 232 58, 282 58, 314 92"/>
      <circle cx="86" cy="92" r="6" fill="${GOLD}"/>
      <circle cx="200" cy="92" r="6" fill="${GOLD}"/>
      <circle cx="314" cy="92" r="6" fill="${GOLD}"/>
    </g>
    <g fill="#0C1728" stroke="${GOLD}" stroke-width="2.4">
      <path d="M 118 210 C 86 168, 168 150, 196 198 C 226 248, 148 254, 118 210 Z"/>
      <path d="M 268 188 C 236 146, 318 128, 346 176 C 376 226, 298 232, 268 188 Z"/>
      <ellipse cx="420" cy="196" rx="46" ry="34"/>
    </g>
    <g>
      <rect x="118" y="318" width="116" height="196" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
      <rect x="260" y="286" width="116" height="228" rx="16" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2.2"/>
      <rect x="402" y="338" width="116" height="176" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
      <circle cx="176" cy="392" r="22" fill="${GOLD}" fill-opacity="0.2" stroke="${GOLD}" stroke-width="2"/>
      <rect x="166" y="430" width="20" height="48" rx="6" fill="${GOLD}"/>
      <path d="M 318 348 L 334 392 H 302 Z" fill="${GOLD_LIGHT}"/>
      <rect x="308" y="400" width="20" height="72" rx="4" fill="${GOLD}"/>
      <rect x="444" y="372" width="32" height="88" rx="16" fill="${CREAM}"/>
      <rect x="444" y="372" width="32" height="28" rx="16" fill="${GOLD}"/>
    </g>
    ${labels}
  </svg>`;
}

function html({ withText, logoUri }) {
  const copy = withText
    ? `
    <div class="copy">
      <div>
        <div class="badge">HEMATOLOGY  ·  SAUDI ARABIA  ·  2026</div>
        <h1>
          <span class="line">Saudi hematology research:</span>
          <span class="line">sickle cell, thalassemia</span>
          <span class="line gold">and gene therapy before launch</span>
        </h1>
        <div class="rule"></div>
        <p class="sub">Access layers, eligibility and payer evidence</p>
      </div>
      <div class="brand">
        <img class="logo" src="${logoUri}" alt=""/>
        <div class="brand-meta">HEALTHCARE MARKET RESEARCH</div>
      </div>
    </div>`
    : '';

  return `<!doctype html>
<html><head><meta charset="utf-8"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&amp;family=Inter:wght@700&amp;display=swap"/>
<style>
html,body{margin:0;padding:0;width:1200px;height:630px;overflow:hidden}
body{
  background:linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 46%, ${NAVY_END} 100%);
  color:${CREAM};
  font-family:Inter,'Helvetica Neue',Arial,sans-serif;
}
.frame{position:relative;width:1200px;height:630px}
.goldbar{position:absolute;inset:0 0 auto 0;height:7px;background:linear-gradient(90deg,${GOLD},${GOLD_LIGHT});z-index:3}
.motif{position:absolute;right:0;top:0;width:54%;height:100%}
.copy{position:relative;z-index:2;width:58%;height:100%;padding:64px 28px 40px 64px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between}
.badge{display:inline-block;padding:8px 16px;border-radius:18px;border:1px solid rgba(245,165,3,.85);background:rgba(245,165,3,.14);color:${GOLD_LIGHT};font-size:13px;font-weight:700;letter-spacing:2px}
h1{margin:26px 0 0;font-family:'Playfair Display',Georgia,'Times New Roman',serif;font-weight:700;font-size:40px;line-height:1.14}
h1 .line{display:block}
h1 .gold{color:${GOLD_LIGHT}}
.rule{width:72px;height:4px;border-radius:2px;background:${GOLD};margin:20px 0 16px}
.sub{margin:0;font-size:18px;font-weight:700;color:${CREAM};opacity:.92;max-width:500px}
.logo{display:block;width:168px;height:auto}
.brand-meta{margin-top:8px;color:#7F93AE;font-size:12px;font-weight:700;letter-spacing:1.8px}
</style></head>
<body>
  <div class="frame">
    <div class="goldbar"></div>
    ${motif(withText)}
    ${copy}
  </div>
</body></html>`;
}

async function writeJpeg(browser, pageHtml, dest) {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(pageHtml, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1200, height: 630 } });
  await page.close();
  await sharp(png).jpeg({ quality: 90, progressive: true, mozjpeg: true }).toFile(dest);
  const meta = await sharp(dest).metadata();
  const { size } = fs.statSync(dest);
  if (meta.width !== 1200 || meta.height !== 630) {
    throw new Error(`${dest} is ${meta.width}×${meta.height}, expected 1200×630`);
  }
  if (size > 300 * 1024) {
    throw new Error(`${dest} is ${(size / 1024).toFixed(1)} KB, over the 300 KB OG budget`);
  }
  console.log(`Written: ${path.relative(root, dest)} (${meta.width}×${meta.height}, ${(size / 1024).toFixed(1)} KB)`);
}

fs.mkdirSync(outDir, { recursive: true });
const logoUri = await tintLogo(CREAM);
const browser = await chromium.launch();
try {
  await writeJpeg(browser, html({ withText: true, logoUri }), COVER_PATH);
  const heroHtml = html({ withText: false, logoUri });
  if (heroHtml.includes('<h1') || heroHtml.includes('>Hydroxyurea<') || heroHtml.includes('BioNixus')) {
    throw new Error('Hero variant must not contain title, labels or wordmark text');
  }
  await writeJpeg(browser, heroHtml, HERO_PATH);
} finally {
  await browser.close();
}
