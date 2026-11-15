/**
 * Cover + hero for
 * /bionixus-industries/insights/uk-market-entry-research
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 *
 * Both outputs are 1200×630 JPEG:
 *   - *-cover.jpg  titled Open Graph / Twitter / JSON-LD ImageObject card
 *   - *-hero.jpg   text-free artwork for the on-page hero (h1 sits on top)
 *
 *   node scripts/generate-uk-market-entry-research-cover.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'uk-market-entry-research-cover.jpg');
const HERO_PATH = path.join(outDir, 'uk-market-entry-research-hero.jpg');
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
  const names = ['England', 'Scotland', 'Wales', 'N. Ireland'];
  const tiles = [
    [48, 430, 228, 72],
    [292, 430, 228, 72],
    [48, 518, 228, 72],
    [292, 518, 228, 72],
  ];
  const tileSvg = tiles
    .map(([x, y, w, h], i) => {
      const label = withText
        ? `<text x="${x + w / 2}" y="${y + 46}" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="16" font-weight="700">${names[i]}</text>`
        : '';
      return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#0E1A2C" stroke="${i === 0 ? GOLD_LIGHT : GOLD}" stroke-width="2"/>
        <circle cx="${x + 28}" cy="${y + 24}" r="7" fill="${GOLD}"/>${label}`;
    })
    .join('');

  const nodes = [
    [96, 118, 'GCC'],
    [196, 86, 'US'],
    [312, 128, 'UK'],
  ];
  const nodeSvg = nodes
    .map(([cx, cy, label], i) => {
      const text = withText
        ? `<text x="${cx}" y="${cy + 28}" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">${label}</text>`
        : '';
      return `<circle cx="${cx}" cy="${cy}" r="${i === 2 ? 16 : 12}" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.4"/>
        <circle cx="${cx}" cy="${cy}" r="5" fill="${i === 2 ? GOLD_LIGHT : GOLD}"/>${text}`;
    })
    .join('');

  return `
  <svg class="motif" viewBox="0 0 560 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glowU" cx="48%" cy="28%" r="58%">
        <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="560" height="630" fill="url(#glowU)"/>
    <g stroke="${GOLD_LIGHT}" stroke-opacity="0.09" stroke-width="1">
      ${Array.from({ length: 8 }, (_, i) => `<line x1="24" y1="${48 + i * 44}" x2="536" y2="${48 + i * 44}"/>`).join('')}
      ${Array.from({ length: 6 }, (_, i) => `<line x1="${64 + i * 80}" y1="40" x2="${64 + i * 80}" y2="280"/>`).join('')}
    </g>
    <g fill="none" stroke="${GOLD}" stroke-width="2.4" stroke-linecap="round">
      <path d="M 96 118 C 132 104, 164 92, 196 86"/>
      <path d="M 196 86 C 236 94, 276 112, 312 128"/>
      <path d="M 96 118 C 168 148, 248 168, 312 128"/>
    </g>
    ${nodeSvg}
    <g transform="translate(318 48)">
      <path d="M 86 28
        L 118 46 L 132 86 L 124 128
        L 138 168 L 128 214 L 102 248
        L 78 268 L 70 232 L 52 214
        L 44 168 L 28 148 L 36 108
        L 48 72 L 70 44 Z"
        fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.4"/>
      <circle cx="88" cy="118" r="6" fill="${GOLD}"/>
      <circle cx="72" cy="168" r="4" fill="${GOLD_LIGHT}"/>
      <circle cx="108" cy="178" r="4" fill="${CREAM}"/>
      <circle cx="92" cy="78" r="4" fill="${GOLD_LIGHT}"/>
    </g>
    ${tileSvg}
  </svg>`;
}

function html({ withText, logoUri }) {
  const copy = withText
    ? `
    <div class="copy">
      <div>
        <div class="badge">MARKET ENTRY  ·  GCC / US → UK  ·  2026</div>
        <h1>
          <span class="line">UK market entry research:</span>
          <span class="line">a guide for GCC</span>
          <span class="line gold">and US companies</span>
        </h1>
        <div class="rule"></div>
        <p class="sub">Four nations, 20% VAT, UKCA or CE and price</p>
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
  if (
    heroHtml.includes('<h1') ||
    heroHtml.includes('>England<') ||
    heroHtml.includes('>GCC<') ||
    heroHtml.includes('BioNixus')
  ) {
    throw new Error('Hero variant must not contain title, labels or wordmark text');
  }
  await writeJpeg(browser, heroHtml, HERO_PATH);
} finally {
  await browser.close();
}
