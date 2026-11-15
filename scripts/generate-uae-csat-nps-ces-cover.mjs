/**
 * Cover / hero for
 * /bionixus-industries/insights/customer-satisfaction-surveys-uae-csat-nps-ces
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 *
 *   public/images/blog/customer-satisfaction-surveys-uae-csat-nps-ces-cover.jpg
 *   public/images/blog/customer-satisfaction-surveys-uae-csat-nps-ces-hero.jpg
 *
 *   node scripts/generate-uae-csat-nps-ces-cover.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'customer-satisfaction-surveys-uae-csat-nps-ces-cover.jpg');
const HERO_PATH = path.join(outDir, 'customer-satisfaction-surveys-uae-csat-nps-ces-hero.jpg');
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
    <text x="108" y="86" text-anchor="middle" fill="${GOLD_LIGHT}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">CSAT</text>
    <text x="268" y="48" text-anchor="middle" fill="${GOLD_LIGHT}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">NPS</text>
    <text x="438" y="92" text-anchor="middle" fill="${GOLD_LIGHT}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">CES</text>`
    : '';
  return `
  <svg class="motif" viewBox="0 0 560 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glowU" cx="52%" cy="36%" r="60%">
        <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.24"/>
        <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="560" height="630" fill="url(#glowU)"/>
    <g fill="none" stroke-linecap="round">
      <circle cx="108" cy="168" r="62" stroke="${GOLD}" stroke-opacity="0.18" stroke-width="9"/>
      <path d="M 62 198 A 62 62 0 1 1 164 128" stroke="${GOLD}" stroke-width="10"/>
      <circle cx="108" cy="168" r="5" fill="${GOLD}" stroke="none"/>
      <circle cx="268" cy="132" r="72" stroke="${GOLD_LIGHT}" stroke-opacity="0.16" stroke-width="9"/>
      <path d="M 210 176 A 72 72 0 1 1 336 108" stroke="${GOLD_LIGHT}" stroke-width="10"/>
      <circle cx="268" cy="132" r="5" fill="${GOLD_LIGHT}" stroke="none"/>
      <circle cx="438" cy="176" r="58" stroke="${GOLD}" stroke-opacity="0.18" stroke-width="9"/>
      <path d="M 396 214 A 58 58 0 1 1 490 150" stroke="${GOLD}" stroke-width="10"/>
      <circle cx="438" cy="176" r="5" fill="${GOLD}" stroke="none"/>
    </g>
    ${labels}
    <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.5">
      <rect x="28" y="400" width="32" height="150"/>
      <rect x="68" y="360" width="24" height="190"/>
      <rect x="100" y="420" width="40" height="130"/>
      <rect x="148" y="380" width="28" height="170"/>
      <rect x="184" y="430" width="36" height="120"/>
      <rect x="246" y="200" width="16" height="350"/>
      <rect x="240" y="248" width="28" height="22"/>
      <rect x="236" y="290" width="36" height="30"/>
      <rect x="230" y="340" width="48" height="44"/>
      <rect x="224" y="404" width="60" height="146"/>
      <polygon points="254,118 262,200 246,200"/>
      <rect x="320" y="390" width="30" height="160"/>
      <rect x="356" y="350" width="22" height="200"/>
      <path d="M 400 550 C 404 390, 470 300, 548 278 C 510 380, 500 470, 512 550 Z"/>
      <path d="M 418 430 C 450 360, 510 324, 540 316" fill="none" stroke="${GOLD}" stroke-width="1.8"/>
    </g>
  </svg>`;
}

function html({ withText, logoUri }) {
  const copy = withText
    ? `
    <div class="copy">
      <div>
        <div class="badge">CSAT  ·  NPS  ·  CES  ·  UAE</div>
        <h1>
          <span class="line">Customer satisfaction</span>
          <span class="line">surveys in the UAE:</span>
          <span class="line gold">CSAT, NPS and CES done right</span>
        </h1>
        <div class="rule"></div>
        <p class="sub">Specify the recommend and effort questions  ·  2026</p>
      </div>
      <div class="brand">
        <img class="logo" src="${logoUri}" alt=""/>
        <div class="brand-meta">B2C MARKET RESEARCH</div>
      </div>
    </div>`
    : '';

  return `<!doctype html>
<html><head><meta charset="utf-8"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&amp;family=Inter:wght@700&amp;display=swap"/>
<style>
html,body{margin:0;padding:0;width:1200px;height:630px;overflow:hidden}
body{background:linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 46%, ${NAVY_END} 100%);color:${CREAM};font-family:Inter,'Helvetica Neue',Arial,sans-serif}
.frame{position:relative;width:1200px;height:630px}
.goldbar{position:absolute;inset:0 0 auto 0;height:7px;background:linear-gradient(90deg,${GOLD},${GOLD_LIGHT});z-index:3}
.motif{position:absolute;right:0;top:0;width:54%;height:100%}
.copy{position:relative;z-index:2;width:58%;height:100%;padding:64px 28px 40px 64px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between}
.badge{display:inline-block;padding:8px 16px;border-radius:18px;border:1px solid rgba(245,165,3,.85);background:rgba(245,165,3,.14);color:${GOLD_LIGHT};font-size:13px;font-weight:700;letter-spacing:2px}
h1{margin:26px 0 0;font-family:'Playfair Display',Georgia,'Times New Roman',serif;font-weight:700;font-size:42px;line-height:1.14}
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
  if (heroHtml.includes('<h1') || heroHtml.includes('>CSAT<') || heroHtml.includes('BioNixus')) {
    throw new Error('Hero variant must not contain title, labels or wordmark text');
  }
  await writeJpeg(browser, heroHtml, HERO_PATH);
} finally {
  await browser.close();
}
