/**
 * Cover + hero for
 * /bionixus-industries/insights/nielsen-alternative-saudi-arabia
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 *
 * Both outputs are 1200×630 JPEG:
 *   - *-cover.jpg  titled Open Graph / Twitter / JSON-LD ImageObject card
 *   - *-hero.jpg   text-free artwork for the on-page hero (h1 sits on top)
 *
 *   node scripts/generate-nielsen-alternative-saudi-arabia-cover.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'nielsen-alternative-saudi-arabia-cover.jpg');
const HERO_PATH = path.join(outDir, 'nielsen-alternative-saudi-arabia-hero.jpg');
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
  const leftLabel = withText
    ? `<text x="118" y="318" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">Audit</text>`
    : '';
  const rightLabel = withText
    ? `<text x="430" y="318" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">Custom</text>`
    : '';
  const joinLabel = withText
    ? `<text x="274" y="178" text-anchor="middle" fill="${GOLD_LIGHT}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="12" font-weight="700">Combine</text>`
    : '';
  return `
  <svg class="motif" viewBox="0 0 560 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glowN" cx="48%" cy="42%" r="58%">
        <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="560" height="630" fill="url(#glowN)"/>
    <g stroke="${GOLD_LIGHT}" stroke-opacity="0.08" stroke-width="1">
      ${Array.from({ length: 9 }, (_, i) => `<line x1="28" y1="${48 + i * 32}" x2="532" y2="${48 + i * 32}"/>`).join('')}
    </g>
    <g transform="translate(48 72)">
      <rect x="0" y="0" width="188" height="228" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
      <rect x="22" y="168" width="22" height="36" rx="4" fill="${GOLD}" fill-opacity="0.85"/>
      <rect x="54" y="132" width="22" height="72" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.7"/>
      <rect x="86" y="108" width="22" height="96" rx="4" fill="${CREAM}" fill-opacity="0.35"/>
      <rect x="118" y="84" width="22" height="120" rx="4" fill="${GOLD}" fill-opacity="0.55"/>
      <rect x="150" y="120" width="22" height="84" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.4"/>
      ${leftLabel}
    </g>
    <g transform="translate(324 72)">
      <rect x="0" y="0" width="188" height="228" rx="16" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2.2"/>
      <circle cx="56" cy="78" r="16" fill="none" stroke="${GOLD}" stroke-width="2.4"/>
      <circle cx="132" cy="78" r="16" fill="none" stroke="${GOLD_LIGHT}" stroke-width="2.4"/>
      <circle cx="94" cy="148" r="16" fill="none" stroke="${CREAM}" stroke-width="2.4"/>
      <path d="M 70 86 C 84 112, 104 112, 118 86" fill="none" stroke="${GOLD}" stroke-width="1.8"/>
      <path d="M 68 92 C 80 124, 94 128, 94 132" fill="none" stroke="${GOLD_LIGHT}" stroke-width="1.8"/>
      <path d="M 120 92 C 110 124, 98 128, 94 132" fill="none" stroke="${CREAM}" stroke-opacity="0.7" stroke-width="1.8"/>
      ${rightLabel}
    </g>
    <g fill="none" stroke="${GOLD}" stroke-width="2.4" stroke-linecap="round">
      <path d="M 236 186 C 256 168, 292 168, 324 186"/>
    </g>
    <circle cx="236" cy="186" r="6" fill="${GOLD}"/>
    <circle cx="324" cy="186" r="6" fill="${GOLD_LIGHT}"/>
    ${joinLabel}
    <g>
      <rect x="48" y="360" width="150" height="92" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
      <rect x="214" y="360" width="150" height="92" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
      <rect x="380" y="360" width="132" height="92" rx="12" fill="#0E1A2C" stroke="${CREAM}" stroke-opacity="0.45" stroke-width="2"/>
      <circle cx="74" cy="388" r="7" fill="${GOLD}"/>
      <circle cx="240" cy="388" r="7" fill="${GOLD_LIGHT}"/>
      <circle cx="406" cy="388" r="7" fill="${CREAM}"/>
      ${
        withText
          ? `<text x="123" y="424" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">Modern trade</text>
             <text x="289" y="424" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">Traditional</text>
             <text x="446" y="424" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">E-commerce</text>`
          : ''
      }
    </g>
    <g>
      <rect x="48" y="472" width="232" height="92" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
      <rect x="296" y="472" width="216" height="92" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
      <rect x="70" y="508" width="120" height="10" rx="5" fill="${GOLD}" fill-opacity="0.5"/>
      <rect x="70" y="528" width="88" height="10" rx="5" fill="${GOLD_LIGHT}" fill-opacity="0.4"/>
      <rect x="318" y="508" width="108" height="10" rx="5" fill="${CREAM}" fill-opacity="0.28"/>
      <rect x="318" y="528" width="148" height="10" rx="5" fill="${GOLD}" fill-opacity="0.35"/>
    </g>
  </svg>`;
}

function html({ withText, logoUri }) {
  const copy = withText
    ? `
    <div class="copy">
      <div>
        <div class="badge">RETAIL MEASUREMENT  ·  KSA  ·  2026</div>
        <h1>
          <span class="line">Nielsen alternative</span>
          <span class="line">Saudi Arabia:</span>
          <span class="line gold">syndicated vs custom</span>
        </h1>
        <div class="rule"></div>
        <p class="sub">Keep the audit  ·  add the shopper file</p>
      </div>
      <div class="brand">
        <img class="logo" src="${logoUri}" alt=""/>
        <div class="brand-meta">B2C MARKET RESEARCH</div>
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
  if (heroHtml.includes('<h1') || heroHtml.includes('>Audit<') || heroHtml.includes('BioNixus')) {
    throw new Error('Hero variant must not contain title, labels or wordmark text');
  }
  await writeJpeg(browser, heroHtml, HERO_PATH);
} finally {
  await browser.close();
}
