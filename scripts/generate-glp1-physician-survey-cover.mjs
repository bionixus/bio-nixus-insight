/**
 * Cover + hero for /blog/glp-1-physician-survey-saudi-arabia.
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 *
 *   public/images/blog/glp-1-physician-survey-saudi-arabia-cover.jpg  (1200×630 titled OG)
 *   public/images/blog/glp-1-physician-survey-saudi-arabia-hero.jpg   (1200×630 text-free)
 *
 *   node scripts/generate-glp1-physician-survey-cover.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'glp-1-physician-survey-saudi-arabia-cover.jpg');
const HERO_PATH = path.join(outDir, 'glp-1-physician-survey-saudi-arabia-hero.jpg');
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
    <text x="48" y="168" fill="#7F93AE" font-family="Inter, Helvetica, Arial, sans-serif" font-size="11" font-weight="700">ENDO</text>
    <text x="48" y="204" fill="#7F93AE" font-family="Inter, Helvetica, Arial, sans-serif" font-size="11" font-weight="700">GP</text>`
    : '';
  return `
  <svg class="motif" viewBox="0 0 560 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glowG" cx="58%" cy="34%" r="54%">
        <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="560" height="630" fill="url(#glowG)"/>
    <g transform="translate(48 70)">
      <rect x="0" y="22" width="280" height="368" rx="20" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2.2"/>
      <rect x="86" y="6" width="108" height="34" rx="10" fill="${GOLD}"/>
      <rect x="28" y="70" width="224" height="10" rx="5" fill="${CREAM}" fill-opacity="0.2"/>
      <rect x="28" y="98" width="180" height="10" rx="5" fill="${CREAM}" fill-opacity="0.14"/>
      <rect x="88" y="148" width="176" height="16" rx="4" fill="${GOLD}" fill-opacity="0.9"/>
      <rect x="88" y="184" width="72" height="16" rx="4" fill="${CREAM}" fill-opacity="0.22"/>
      <rect x="28" y="230" width="224" height="8" rx="4" fill="${CREAM}" fill-opacity="0.12"/>
      <rect x="28" y="256" width="224" height="8" rx="4" fill="${CREAM}" fill-opacity="0.12"/>
      <rect x="28" y="282" width="168" height="8" rx="4" fill="${CREAM}" fill-opacity="0.12"/>
      <circle cx="48" cy="336" r="9" fill="none" stroke="${GOLD}" stroke-width="2"/>
      <circle cx="88" cy="336" r="9" fill="${GOLD}"/>
      <circle cx="128" cy="336" r="9" fill="none" stroke="${GOLD_LIGHT}" stroke-width="2"/>
      ${labels}
    </g>
    <g transform="translate(360 200)">
      <rect x="0" y="0" width="164" height="210" rx="12" fill="${CREAM}"/>
      <rect x="0" y="0" width="164" height="24" rx="12" fill="${GOLD}"/>
      <path d="M 20 56 H 140 M 20 86 H 128 M 20 116 H 146 M 20 146 H 104" stroke="${NAVY}" stroke-opacity="0.3" stroke-width="3.2" stroke-linecap="round"/>
    </g>
    <g transform="translate(456 64) rotate(-18)">
      <rect x="0" y="0" width="16" height="156" rx="8" fill="${CREAM}"/>
      <rect x="0" y="0" width="16" height="38" rx="8" fill="${GOLD}"/>
      <polygon points="8,170 2,154 14,154" fill="${GOLD_LIGHT}"/>
    </g>
    <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-opacity="0.6" stroke-width="1.2" transform="translate(300 448)">
      <rect x="0" y="78" width="30" height="84"/>
      <rect x="36" y="48" width="24" height="114"/>
      <rect x="66" y="16" width="20" height="146"/>
      <polygon points="76,16 86,-8 96,16"/>
      <rect x="94" y="60" width="40" height="102"/>
      <circle cx="140" cy="48" r="14"/>
      <rect x="160" y="84" width="26" height="78"/>
    </g>
  </svg>`;
}

function html({ withText, logoUri }) {
  const copy = withText
    ? `
    <div class="copy">
      <div>
        <div class="badge">GLP-1  ·  PHYSICIAN SURVEY  ·  KSA</div>
        <h1>
          <span class="line">What Saudi physicians</span>
          <span class="line">say about GLP-1s</span>
          <span class="line gold">Designing a prescriber survey</span>
        </h1>
        <div class="rule"></div>
        <p class="sub">A 2026 methods guide for brand teams</p>
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
  if (heroHtml.includes('<h1') || heroHtml.includes('>ENDO<') || heroHtml.includes('BioNixus')) {
    throw new Error('Hero variant must not contain title, labels or wordmark text');
  }
  await writeJpeg(browser, heroHtml, HERO_PATH);
} finally {
  await browser.close();
}
