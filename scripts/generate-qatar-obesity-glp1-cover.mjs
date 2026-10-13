/**
 * Cover / hero for /blog/qatar-obesity-glp1-market-research.
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 *
 *   public/images/blog/qatar-obesity-glp1-market-research-cover.jpg  (1200×630 titled OG card)
 *   public/images/blog/qatar-obesity-glp1-market-research-hero.jpg   (1200×630 text-free hero)
 *
 *   node scripts/generate-qatar-obesity-glp1-cover.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'qatar-obesity-glp1-market-research-cover.jpg');
const HERO_PATH = path.join(outDir, 'qatar-obesity-glp1-market-research-hero.jpg');
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
      <radialGradient id="glowQ" cx="48%" cy="28%" r="58%">
        <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.30"/>
        <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="glassQ" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${GOLD_LIGHT}" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="${NAVY}" stop-opacity="0.1"/>
      </linearGradient>
    </defs>
    <rect width="560" height="630" fill="url(#glowQ)"/>
    <path d="M 0 548 C 90 512, 210 572, 340 528 S 500 520, 560 548 V 630 H 0 Z" fill="#0A1422"/>
    <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.5">
      <rect x="86" y="268" width="36" height="280" rx="3"/>
      <rect x="132" y="198" width="48" height="350" rx="3"/>
      <rect x="190" y="238" width="28" height="310" rx="3"/>
      <polygon points="156,118 184,198 128,198"/>
      <rect x="228" y="168" width="58" height="380" rx="3"/>
      <rect x="238" y="184" width="38" height="52" fill="url(#glassQ)" stroke="none"/>
      <rect x="238" y="248" width="38" height="52" fill="url(#glassQ)" stroke="none"/>
      <rect x="296" y="288" width="22" height="260" rx="3"/>
    </g>
    <g transform="translate(348 168)">
      <rect x="18" y="36" width="52" height="148" rx="26" fill="${CREAM}"/>
      <rect x="18" y="36" width="52" height="54" rx="26" fill="${GOLD}"/>
      <rect x="38" y="8" width="12" height="36" rx="3" fill="${GOLD_LIGHT}"/>
      <circle cx="44" cy="8" r="7" fill="${CREAM}"/>
    </g>
    <g transform="translate(430 292)">
      <ellipse cx="46" cy="36" rx="46" ry="18" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.4"/>
      <rect x="8" y="36" width="76" height="86" rx="18" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2.2"/>
      <ellipse cx="46" cy="122" rx="46" ry="18" fill="#16263C" stroke="${GOLD}" stroke-width="2.4"/>
      <ellipse cx="46" cy="36" rx="18" ry="8" fill="${GOLD}" fill-opacity="0.28" stroke="${GOLD}" stroke-width="1.4"/>
    </g>
  </svg>`;
}

function html({ withText, logoUri }) {
  const copy = withText
    ? `
    <div class="copy">
      <div>
        <div class="badge">OBESITY  ·  GLP-1  ·  QATAR</div>
        <h1>
          <span class="line">Qatar's GLP-1 moment:</span>
          <span class="line">Wegovy, oral approval</span>
          <span class="line gold">and what to research next</span>
        </h1>
        <div class="rule"></div>
        <p class="sub">Access, HMC cover and the oral option  ·  2026</p>
      </div>
      <div class="brand">
        <img class="logo" src="${logoUri}" alt=""/>
        <div class="brand-meta">HEALTHCARE MARKET RESEARCH</div>
      </div>
    </div>`
    : '';

  return `<!doctype html>
<html><head><meta charset="utf-8"/>
<style>
html,body{margin:0;padding:0;width:1200px;height:630px;overflow:hidden}
body{
  background:linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 46%, ${NAVY_END} 100%);
  color:${CREAM};
  font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
}
.frame{position:relative;width:1200px;height:630px}
.goldbar{position:absolute;inset:0 0 auto 0;height:7px;background:linear-gradient(90deg,${GOLD},${GOLD_LIGHT});z-index:3}
.motif{position:absolute;right:0;top:0;width:54%;height:100%}
.copy{position:relative;z-index:2;width:58%;height:100%;padding:64px 28px 40px 64px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between}
.badge{display:inline-block;padding:8px 16px;border-radius:18px;border:1px solid rgba(245,165,3,.85);background:rgba(245,165,3,.14);color:${GOLD_LIGHT};font-size:13px;font-weight:700;letter-spacing:2.4px}
h1{margin:26px 0 0;font-family:Georgia,'Times New Roman',serif;font-weight:700;font-size:38px;line-height:1.22;letter-spacing:0.4px;word-spacing:3px;font-kerning:normal;font-feature-settings:"liga" 0}
h1 .line{display:block}
h1 .gold{color:${GOLD_LIGHT}}
.rule{width:72px;height:4px;border-radius:2px;background:${GOLD};margin:20px 0 16px}
.sub{margin:0;font-size:17px;font-weight:700;color:${CREAM};opacity:.92;max-width:520px;letter-spacing:0.3px;word-spacing:2px}
.logo{display:block;width:168px;height:auto}
.brand-meta{margin-top:8px;color:#7F93AE;font-size:12px;font-weight:700;letter-spacing:2.2px}
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
  if (heroHtml.includes('<h1') || heroHtml.includes('Wegovy') || heroHtml.includes('BioNixus')) {
    throw new Error('Hero variant must not contain title, labels or wordmark text');
  }
  await writeJpeg(browser, heroHtml, HERO_PATH);
} finally {
  await browser.close();
}
