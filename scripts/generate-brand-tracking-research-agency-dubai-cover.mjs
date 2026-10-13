/**
 * Cover / hero for
 * /bionixus-industries/insights/brand-tracking-research-agency-dubai
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 *
 *   public/images/blog/brand-tracking-research-agency-dubai-cover.jpg
 *   public/images/blog/brand-tracking-research-agency-dubai-hero.jpg
 *
 *   node scripts/generate-brand-tracking-research-agency-dubai-cover.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'brand-tracking-research-agency-dubai-cover.jpg');
const HERO_PATH = path.join(outDir, 'brand-tracking-research-agency-dubai-hero.jpg');
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

function motif() {
  return `
  <svg class="motif" viewBox="0 0 560 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glowTrack" cx="58%" cy="32%" r="58%">
        <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.26"/>
        <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="560" height="630" fill="url(#glowTrack)"/>
    <g fill="none" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="318" cy="198" r="46" stroke="${GOLD}" stroke-opacity="0.22" stroke-width="8"/>
      <circle cx="318" cy="198" r="78" stroke="${GOLD_LIGHT}" stroke-opacity="0.16" stroke-width="7"/>
      <circle cx="318" cy="198" r="112" stroke="${GOLD}" stroke-opacity="0.12" stroke-width="6"/>
      <circle cx="318" cy="198" r="146" stroke="${GOLD_LIGHT}" stroke-opacity="0.1" stroke-width="5"/>
      <path d="M 318 198 L 412 118" stroke="${GOLD}" stroke-width="4"/>
      <circle cx="318" cy="198" r="7" fill="${GOLD}" stroke="none"/>
      <circle cx="412" cy="118" r="8" fill="${GOLD_LIGHT}" stroke="none"/>
    </g>
    <path d="M 36 268 C 92 250, 128 292, 176 274 C 230 254, 262 214, 318 228 C 372 242, 410 198, 468 188 C 508 180, 532 196, 552 184"
      fill="none" stroke="${GOLD}" stroke-width="5" stroke-linecap="round"/>
    <path d="M 36 268 C 92 250, 128 292, 176 274 C 230 254, 262 214, 318 228 C 372 242, 410 198, 468 188 C 508 180, 532 196, 552 184 L 552 318 L 36 318 Z"
      fill="${GOLD}" fill-opacity="0.08" stroke="none"/>
    <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.4">
      <rect x="48" y="430" width="28" height="128"/>
      <rect x="84" y="390" width="22" height="168"/>
      <rect x="114" y="448" width="36" height="110"/>
      <rect x="158" y="410" width="24" height="148"/>
      <rect x="190" y="464" width="32" height="94"/>
      <rect x="248" y="248" width="18" height="310"/>
      <rect x="240" y="300" width="34" height="26"/>
      <rect x="234" y="348" width="46" height="36"/>
      <rect x="226" y="406" width="62" height="52"/>
      <rect x="218" y="478" width="78" height="80"/>
      <polygon points="257,176 266,248 248,248"/>
      <rect x="330" y="404" width="30" height="154"/>
      <rect x="368" y="368" width="22" height="190"/>
      <path d="M 408 558 C 414 400, 478 314, 548 292 C 512 392, 504 478, 518 558 Z"/>
      <path d="M 428 448 C 458 372, 516 336, 546 328" fill="none" stroke="${GOLD}" stroke-width="1.8"/>
    </g>
  </svg>`;
}

function html({ withText, logoUri }) {
  const copy = withText
    ? `
    <div class="copy">
      <div>
        <div class="badge">CUSTOM  ·  SYNDICATED  ·  UAE</div>
        <h1>
          <span class="line">Brand tracking in</span>
          <span class="line">Dubai and the UAE:</span>
          <span class="line gold">a tracker that moves budgets</span>
        </h1>
        <div class="rule"></div>
        <p class="sub">Custom tracker versus syndicated data  ·  2026</p>
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
    ${motif()}
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
  if (heroHtml.includes('<h1') || heroHtml.includes('CUSTOM') || heroHtml.includes('BioNixus')) {
    throw new Error('Hero variant must not contain title, labels or wordmark text');
  }
  await writeJpeg(browser, heroHtml, HERO_PATH);
} finally {
  await browser.close();
}
