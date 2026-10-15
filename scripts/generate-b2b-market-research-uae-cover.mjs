/**
 * Cover + hero for
 * /bionixus-industries/insights/b2b-market-research-uae
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 *
 * Both outputs are 1200×630 JPEG:
 *   - *-cover.jpg  titled Open Graph / Twitter / JSON-LD ImageObject card
 *   - *-hero.jpg   text-free artwork for the on-page hero (h1 sits on top)
 *
 *   node scripts/generate-b2b-market-research-uae-cover.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'b2b-market-research-uae-cover.jpg');
const HERO_PATH = path.join(outDir, 'b2b-market-research-uae-hero.jpg');
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
  const nodes = [
    [168, 168, 'Specify'],
    [392, 148, 'Pay'],
    [286, 292, 'Use'],
  ];
  const nodeSvg = nodes
    .map(([x, y, name]) => {
      const label = withText
        ? `<text x="${x}" y="${y + 38}" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">${name}</text>`
        : '';
      return `<circle cx="${x}" cy="${y}" r="28" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.4"/>
        <circle cx="${x}" cy="${y}" r="8" fill="${GOLD}"/>${label}`;
    })
    .join('');
  return `
  <svg class="motif" viewBox="0 0 560 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glowB2b" cx="52%" cy="34%" r="58%">
        <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="560" height="630" fill="url(#glowB2b)"/>
    <g fill="none" stroke="${GOLD_LIGHT}" stroke-opacity="0.1" stroke-width="1">
      ${Array.from({ length: 8 }, (_, i) => `<circle cx="286" cy="210" r="${54 + i * 28}"/>`).join('')}
    </g>
    <g stroke="${GOLD}" stroke-width="2.2" stroke-linecap="round" fill="none">
      <line x1="168" y1="168" x2="392" y2="148"/>
      <line x1="392" y1="148" x2="286" y2="292"/>
      <line x1="286" y1="292" x2="168" y2="168"/>
    </g>
    ${nodeSvg}
    <g fill="#0C1728" stroke="${GOLD}" stroke-width="1.6">
      <rect x="72" y="392" width="52" height="168" rx="6"/>
      <rect x="140" y="348" width="44" height="212" rx="6"/>
      <rect x="200" y="418" width="58" height="142" rx="6"/>
      <rect x="276" y="372" width="36" height="188" rx="6"/>
      <rect x="328" y="430" width="70" height="130" rx="6"/>
      <path d="M 416 560 L 428 430 L 470 392 L 512 430 L 528 560 Z"/>
    </g>
    <g fill="${GOLD}">
      <circle cx="96" cy="420" r="4"/>
      <circle cx="162" cy="388" r="4"/>
      <circle cx="228" cy="448" r="4"/>
      <circle cx="294" cy="404" r="4"/>
      <circle cx="362" cy="456" r="4"/>
      <circle cx="470" cy="412" r="5"/>
    </g>
  </svg>`;
}

function html({ withText, logoUri }) {
  const copy = withText
    ? `
    <div class="copy">
      <div>
        <div class="badge">NAMED SAMPLE  ·  UAE  ·  DUBAI</div>
        <h1>
          <span class="line">B2B market research</span>
          <span class="line">in the UAE:</span>
          <span class="line gold">reaching decision-makers</span>
        </h1>
        <div class="rule"></div>
        <p class="sub">Methods, recruitment and cost  ·  2026</p>
      </div>
      <div class="brand">
        <img class="logo" src="${logoUri}" alt=""/>
        <div class="brand-meta">B2B MARKET RESEARCH</div>
      </div>
    </div>`
    : '';

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
h1{margin:26px 0 0;font-family:Georgia,'Times New Roman',serif;font-weight:700;font-size:42px;line-height:1.14}
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
  if (heroHtml.includes('<h1') || heroHtml.includes('>Specify<') || heroHtml.includes('BioNixus')) {
    throw new Error('Hero variant must not contain title, labels or wordmark text');
  }
  await writeJpeg(browser, heroHtml, HERO_PATH);
} finally {
  await browser.close();
}
