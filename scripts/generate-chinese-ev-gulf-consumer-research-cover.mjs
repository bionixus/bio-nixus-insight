/**
 * Cover + hero for
 * /bionixus-industries/insights/chinese-ev-brands-saudi-uae-consumer-research
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 *
 * Both outputs are 1200×630 JPEG:
 *   - *-cover.jpg  titled Open Graph / Twitter / JSON-LD ImageObject card
 *   - *-hero.jpg   text-free artwork for the on-page hero (h1 sits on top)
 *
 *   node scripts/generate-chinese-ev-gulf-consumer-research-cover.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'chinese-ev-brands-saudi-uae-consumer-research-cover.jpg');
const HERO_PATH = path.join(outDir, 'chinese-ev-brands-saudi-uae-consumer-research-hero.jpg');
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
      <radialGradient id="glowEv" cx="52%" cy="34%" r="58%">
        <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="560" height="630" fill="url(#glowEv)"/>
    <g fill="none" stroke="${GOLD_LIGHT}" stroke-opacity="0.14" stroke-width="1">
      ${Array.from({ length: 6 }, (_, i) => `<circle cx="286" cy="196" r="${48 + i * 28}"/>`).join('')}
    </g>
    <g fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2">
      <path d="M 92 168
        C 128 112, 176 98, 214 126
        C 248 152, 236 198, 268 214
        C 298 230, 318 198, 348 186
        C 392 168, 428 188, 448 228
        C 466 264, 452 302, 418 318
        C 378 336, 332 318, 296 338
        C 258 358, 248 402, 206 416
        C 158 432, 108 404, 88 352
        C 72 308, 68 224, 92 168 Z"/>
    </g>
    <g fill="none" stroke="${GOLD}" stroke-width="2.4" stroke-linecap="round">
      <path d="M 168 248 C 214 232, 258 246, 304 268 C 348 288, 392 292, 428 274"/>
    </g>
    <g fill="${GOLD}">
      <circle cx="168" cy="248" r="7"/>
      <circle cx="304" cy="268" r="8"/>
      <circle cx="428" cy="274" r="7"/>
    </g>
    <g fill="${GOLD_LIGHT}">
      <circle cx="168" cy="248" r="3"/>
      <circle cx="304" cy="268" r="3.5"/>
      <circle cx="428" cy="274" r="3"/>
    </g>
    <g transform="translate(118 392)">
      <rect x="0" y="18" width="292" height="118" rx="16" fill="#0C1728" stroke="${GOLD}" stroke-width="2"/>
      <rect x="118" y="0" width="56" height="22" rx="6" fill="#0C1728" stroke="${GOLD}" stroke-width="2"/>
      <rect x="22" y="38" width="52" height="78" rx="8" fill="#132033" stroke="${GOLD_LIGHT}" stroke-width="1.6"/>
      <rect x="86" y="38" width="52" height="78" rx="8" fill="#132033" stroke="${GOLD}" stroke-width="1.6"/>
      <rect x="150" y="38" width="52" height="78" rx="8" fill="#132033" stroke="${GOLD}" stroke-width="1.6"/>
      <rect x="214" y="38" width="52" height="78" rx="8" fill="#132033" stroke="${GOLD_LIGHT}" stroke-width="1.6"/>
      <rect x="30" y="86" width="36" height="22" rx="3" fill="${GOLD}"/>
      <rect x="94" y="70" width="36" height="38" rx="3" fill="${GOLD}"/>
      <rect x="158" y="54" width="36" height="54" rx="3" fill="${GOLD_LIGHT}"/>
      <rect x="222" y="46" width="36" height="62" rx="3" fill="${GOLD}"/>
    </g>
  </svg>`;
}

function html({ withText, logoUri }) {
  const copy = withText
    ? `
    <div class="copy">
      <div>
        <div class="badge">AUTOMOTIVE  ·  KSA / UAE  ·  2026</div>
        <h1>
          <span class="line">Chinese EV brands</span>
          <span class="line">in the Gulf:</span>
          <span class="line gold">research before launch</span>
        </h1>
        <div class="rule"></div>
        <p class="sub">Consideration, charging, TCO and aftersales</p>
      </div>
      <div class="brand">
        <img class="logo" src="${logoUri}" alt=""/>
        <div class="brand-meta">PRIMARY MARKET RESEARCH</div>
      </div>
    </div>`
    : `
    <div class="copy">
      <div></div>
      <div class="brand">
        <img class="logo" src="${logoUri}" alt=""/>
      </div>
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
    ${motif()}
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
  if (heroHtml.includes('<h1') || heroHtml.includes('Chinese EV') || heroHtml.includes('BioNixus')) {
    throw new Error('Hero variant must not contain title, labels or wordmark text');
  }
  await writeJpeg(browser, heroHtml, HERO_PATH);
} finally {
  await browser.close();
}
