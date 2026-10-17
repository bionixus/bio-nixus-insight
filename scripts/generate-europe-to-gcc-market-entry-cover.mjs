/**
 * Cover + hero for
 * /bionixus-industries/insights/europe-to-gcc-market-entry-research
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 *
 * Both outputs are 1200×630 JPEG:
 *   - *-cover.jpg  titled Open Graph / Twitter / JSON-LD ImageObject card
 *   - *-hero.jpg   text-free artwork for the on-page hero (h1 sits on top)
 *
 *   node scripts/generate-europe-to-gcc-market-entry-cover.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'europe-to-gcc-market-entry-research-cover.jpg');
const HERO_PATH = path.join(outDir, 'europe-to-gcc-market-entry-research-hero.jpg');
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
  const names = ['UAE', 'KSA', 'Qatar', 'Kuwait', 'Oman', 'Bahrain'];
  const tiles = [
    [48, 368, 148, 88],
    [212, 368, 148, 88],
    [376, 368, 148, 88],
    [48, 472, 148, 88],
    [212, 472, 148, 88],
    [376, 472, 148, 88],
  ];
  const tileSvg = tiles
    .map(([x, y, w, h], i) => {
      const label = withText
        ? `<text x="${x + w / 2}" y="${y + 58}" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="15" font-weight="700">${names[i]}</text>`
        : '';
      return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#0E1A2C" stroke="${i < 2 ? GOLD_LIGHT : GOLD}" stroke-width="2"/>
        <circle cx="${x + 26}" cy="${y + 26}" r="7" fill="${GOLD}"/>${label}`;
    })
    .join('');
  return `
  <svg class="motif" viewBox="0 0 560 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glowE" cx="42%" cy="34%" r="58%">
        <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="560" height="630" fill="url(#glowE)"/>
    <g stroke="${GOLD_LIGHT}" stroke-opacity="0.09" stroke-width="1">
      ${Array.from({ length: 9 }, (_, i) => `<line x1="24" y1="${64 + i * 56}" x2="536" y2="${64 + i * 56}"/>`).join('')}
      ${Array.from({ length: 7 }, (_, i) => `<line x1="${48 + i * 76}" y1="48" x2="${48 + i * 76}" y2="300"/>`).join('')}
    </g>
    <g fill="none" stroke="${GOLD}" stroke-width="2.4" stroke-linecap="round">
      <path d="M 64 92 C 148 78, 220 118, 268 156"/>
      <path d="M 64 156 C 156 148, 228 176, 292 214"/>
      <path d="M 64 220 C 150 214, 216 236, 300 268"/>
    </g>
    <g>
      <circle cx="64" cy="92" r="5" fill="${GOLD_LIGHT}"/>
      <circle cx="64" cy="156" r="5" fill="${GOLD}"/>
      <circle cx="64" cy="220" r="5" fill="${CREAM}"/>
    </g>
    <g transform="translate(286 58)">
      <path d="M 36 48
        L 92 28 L 148 44 L 176 86
        L 168 128 L 198 156 L 188 198
        L 142 228 L 86 236 L 42 206
        L 22 156 L 28 102 Z"
        fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.4"/>
      <circle cx="96" cy="118" r="6" fill="${GOLD}"/>
      <circle cx="64" cy="162" r="4" fill="${GOLD_LIGHT}"/>
      <circle cx="138" cy="168" r="4" fill="${CREAM}"/>
    </g>
    ${tileSvg}
  </svg>`;
}

function html({ withText, logoUri }) {
  const copy = withText
    ? `
    <div class="copy">
      <div>
        <div class="badge">MARKET ENTRY  ·  EUROPE → GCC  ·  2026</div>
        <h1>
          <span class="line">Europe-to-GCC</span>
          <span class="line">market entry research:</span>
          <span class="line gold">what European brands need to know</span>
        </h1>
        <div class="rule"></div>
        <p class="sub">Six states, VAT, G-Mark, channel and price</p>
      </div>
      <div class="brand">
        <img class="logo" src="${logoUri}" alt=""/>
        <div class="brand-meta">B2B MARKET RESEARCH</div>
      </div>
    </div>`
    : `
    <div class="hero-brand">
      <img class="logo" src="${logoUri}" alt=""/>
    </div>`;

  return `<!doctype html>
<html><head><meta charset="utf-8"/>
<style>
html,body{margin:0;padding:0;width:1200px;height:630px;overflow:hidden}
body{background:linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 46%, ${NAVY_END} 100%);color:${CREAM};font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}
.frame{position:relative;width:1200px;height:630px}
.goldbar{position:absolute;inset:0 0 auto 0;height:7px;background:linear-gradient(90deg,${GOLD},${GOLD_LIGHT});z-index:3}
.motif{position:absolute;right:0;top:0;width:54%;height:100%}
.copy{position:relative;z-index:2;width:58%;height:100%;padding:64px 28px 40px 64px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between}
.badge{display:inline-block;padding:8px 16px;border-radius:18px;border:1px solid rgba(245,165,3,.85);background:rgba(245,165,3,.14);color:${GOLD_LIGHT};font-size:13px;font-weight:700;letter-spacing:2px}
h1{margin:26px 0 0;font-family:Georgia,'Times New Roman',serif;font-weight:700;font-size:40px;line-height:1.14}
h1 .line{display:block}
h1 .gold{color:${GOLD_LIGHT}}
.rule{width:72px;height:4px;border-radius:2px;background:${GOLD};margin:20px 0 16px}
.sub{margin:0;font-size:18px;font-weight:700;color:${CREAM};opacity:.92;max-width:500px}
.logo{display:block;width:168px;height:auto}
.brand-meta{margin-top:8px;color:#7F93AE;font-size:12px;font-weight:700;letter-spacing:1.8px}
.hero-brand{position:absolute;left:64px;bottom:48px;z-index:2}
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
  await page.setContent(pageHtml, { waitUntil: 'domcontentloaded', timeout: 15_000 });
  await page.evaluate(() => document.fonts.ready).catch(() => undefined);
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
  if (heroHtml.includes('<h1') || heroHtml.includes('>UAE<') || heroHtml.includes('BioNixus')) {
    throw new Error('Hero variant must not contain title, labels or wordmark text');
  }
  await writeJpeg(browser, heroHtml, HERO_PATH);
} finally {
  await browser.close();
}
