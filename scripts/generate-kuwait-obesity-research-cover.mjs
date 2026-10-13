/**
 * Cover / hero for /blog/obesity-market-research-kuwait.
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 *
 *   public/images/blog/obesity-market-research-kuwait-cover.jpg  (1200×630 titled OG card)
 *   public/images/blog/obesity-market-research-kuwait-hero.jpg   (1200×630 text-free hero)
 *
 *   node scripts/generate-kuwait-obesity-research-cover.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'obesity-market-research-kuwait-cover.jpg');
const HERO_PATH = path.join(outDir, 'obesity-market-research-kuwait-hero.jpg');
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
    <text x="318" y="522" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">Public</text>
    <text x="406" y="522" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">Expat</text>
    <text x="494" y="522" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">Self-pay</text>`
    : '';
  return `
  <svg class="motif" viewBox="0 0 560 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glowK" cx="42%" cy="30%" r="58%">
        <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.28"/>
        <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="560" height="630" fill="url(#glowK)"/>
    <path d="M 0 548 C 130 516, 250 576, 370 536 S 520 528, 560 552 V 630 H 0 Z" fill="#0A1422"/>
    <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.7">
      <rect x="88" y="210" width="14" height="338" rx="4"/>
      <circle cx="95" cy="318" r="44"/>
      <circle cx="95" cy="318" r="18" fill="${GOLD}" fill-opacity="0.2" stroke="${GOLD}" stroke-width="2"/>
      <rect x="166" y="128" width="18" height="420" rx="4"/>
      <circle cx="175" cy="268" r="66"/>
      <ellipse cx="175" cy="268" rx="66" ry="18" fill="none" stroke="${GOLD}" stroke-width="2.4"/>
      <circle cx="175" cy="268" r="26" fill="${GOLD}" fill-opacity="0.16" stroke="${GOLD}" stroke-width="1.6"/>
      <rect x="246" y="250" width="10" height="298" rx="3"/>
      <polygon points="251,168 258,252 244,252"/>
    </g>
    <g>
      <rect x="286" y="304" width="64" height="196" rx="10" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
      <rect x="374" y="252" width="64" height="248" rx="10" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2.2"/>
      <rect x="462" y="336" width="64" height="164" rx="10" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
      <rect x="302" y="322" width="32" height="8" rx="2" fill="${GOLD}"/>
      <rect x="390" y="270" width="32" height="8" rx="2" fill="${GOLD_LIGHT}"/>
      <rect x="478" y="354" width="32" height="8" rx="2" fill="${GOLD}"/>
    </g>
    <g transform="translate(468 64) rotate(16)">
      <rect x="0" y="10" width="30" height="128" rx="15" fill="${CREAM}"/>
      <rect x="0" y="10" width="30" height="42" rx="15" fill="${GOLD}"/>
      <rect x="10" y="-18" width="10" height="30" rx="2" fill="${GOLD_LIGHT}"/>
      <path d="M15 -30 L21 -16 H9 Z" fill="${CREAM}"/>
    </g>
    ${labels}
  </svg>`;
}

function html({ withText, logoUri }) {
  const copy = withText
    ? `
    <div class="copy">
      <div>
        <div class="badge">OBESITY  ·  GLP-1  ·  KUWAIT</div>
        <h1>
          <span class="line">Kuwait obesity research:</span>
          <span class="line">who funds GLP-1s</span>
          <span class="line gold">and what payers need to see</span>
        </h1>
        <div class="rule"></div>
        <p class="sub">Funding routes, tenders and evidence  ·  2026</p>
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
body{
  background:linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 46%, ${NAVY_END} 100%);
  color:${CREAM};
  font-family:Inter,'Helvetica Neue',Arial,sans-serif;
}
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
  if (/<h1|<text[\s>]|badge|brand-meta/.test(heroHtml) === false) {
    /* hero omits the copy block; motif labels are also omitted */
  }
  if (heroHtml.includes('<h1') || heroHtml.includes('>Public<') || heroHtml.includes('BioNixus')) {
    throw new Error('Hero variant must not contain title, labels or wordmark text');
  }
  await writeJpeg(browser, heroHtml, HERO_PATH);
} finally {
  await browser.close();
}
