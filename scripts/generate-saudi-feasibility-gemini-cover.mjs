/**
 * Cover + hero for
 * /bionixus-industries/insights/feasibility-study-company-saudi-arabia
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 *
 * Both outputs are 1200×630 JPEG:
 *   - *-cover.jpg  titled Open Graph / Twitter / JSON-LD ImageObject card
 *   - *-hero.jpg   text-free artwork for the on-page hero (h1 sits on top)
 *
 *   node scripts/generate-saudi-feasibility-gemini-cover.mjs
 *
 * After the files land, set SAUDI_FEASIBILITY_GEMINI_COVER_PENDING = false
 * in src/data/blog-feasibility-study-saudi-arabia.ts.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'feasibility-study-company-saudi-arabia-cover.jpg');
const HERO_PATH = path.join(outDir, 'feasibility-study-company-saudi-arabia-hero.jpg');
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
  const names = ['Demand', 'Price', 'Cities', 'Channel', 'Competition'];
  const tiles = [
    [36, 348, 150, 100],
    [204, 348, 150, 100],
    [372, 348, 150, 100],
    [120, 468, 150, 92],
    [288, 468, 150, 92],
  ];
  const tileSvg = tiles
    .map(([x, y, w, h], i) => {
      const label = withText
        ? `<text x="${x + w / 2}" y="${y + 68}" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="14" font-weight="700">${names[i]}</text>`
        : '';
      return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#0E1A2C" stroke="${i === 0 ? GOLD_LIGHT : GOLD}" stroke-width="2"/>
        <circle cx="${x + 26}" cy="${y + 28}" r="7" fill="${GOLD}"/>${label}`;
    })
    .join('');
  return `
  <svg class="motif" viewBox="0 0 560 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glowF" cx="50%" cy="38%" r="56%">
        <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="560" height="630" fill="url(#glowF)"/>
    <g stroke="${GOLD_LIGHT}" stroke-opacity="0.09" stroke-width="1">
      ${Array.from({ length: 9 }, (_, i) => `<line x1="24" y1="${70 + i * 58}" x2="536" y2="${70 + i * 58}"/>`).join('')}
      ${Array.from({ length: 7 }, (_, i) => `<line x1="${48 + i * 76}" y1="54" x2="${48 + i * 76}" y2="330"/>`).join('')}
    </g>
    <g transform="translate(168 58)">
      <path d="M 36 48
        L 168 18 L 236 46 L 250 86
        L 228 118 L 268 148 L 274 186
        L 236 228 L 170 268 L 78 274
        L 28 214 L 18 140 Z"
        fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.4"/>
      <circle cx="150" cy="140" r="6" fill="${GOLD}"/>
      <circle cx="58" cy="150" r="4" fill="${GOLD_LIGHT}"/>
      <circle cx="232" cy="150" r="4" fill="${CREAM}"/>
    </g>
    ${tileSvg}
  </svg>`;
}

function html({ withText, logoUri }) {
  const copy = withText
    ? `
    <div class="copy">
      <div>
        <div class="badge">FEASIBILITY  ·  MARKET SECTION  ·  KSA</div>
        <h1>
          <span class="line">Feasibility studies</span>
          <span class="line">in Saudi Arabia:</span>
          <span class="line gold">what the market section must prove</span>
        </h1>
        <div class="rule"></div>
        <p class="sub">Demand, price, channel and competition  ·  2026</p>
      </div>
      <div class="brand">
        <img class="logo" src="${logoUri}" alt=""/>
        <div class="brand-meta">B2B MARKET RESEARCH</div>
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
  if (heroHtml.includes('<h1') || heroHtml.includes('>Demand<') || heroHtml.includes('BioNixus')) {
    throw new Error('Hero variant must not contain title, labels or wordmark text');
  }
  await writeJpeg(browser, heroHtml, HERO_PATH);
} finally {
  await browser.close();
}
