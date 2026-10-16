/**
 * Cover + hero for
 * /bionixus-industries/insights/government-customer-satisfaction-research-saudi-arabia
 *
 * Hand-authored BioNixus HTML composition (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 *
 * Both outputs are 1200×630 JPEG:
 *   - *-cover.jpg  titled Open Graph / Twitter / JSON-LD ImageObject card
 *   - *-hero.jpg   text-free artwork for the on-page hero (h1 sits on top)
 *
 *   node scripts/generate-government-customer-satisfaction-saudi-arabia-cover.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'government-customer-satisfaction-research-saudi-arabia-cover.jpg');
const HERO_PATH = path.join(outDir, 'government-customer-satisfaction-research-saudi-arabia-hero.jpg');
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
  const steps = [
    [96, 478, 'Ask'],
    [236, 478, 'Serve'],
    [376, 478, 'Score'],
  ];
  const stepSvg = steps
    .map(([x, y, name], i) => {
      const label = withText
        ? `<text x="${x}" y="${y + 42}" text-anchor="middle" fill="${CREAM}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="700">${name}</text>`
        : '';
      return `<circle cx="${x}" cy="${y}" r="26" fill="#0E1A2C" stroke="${i === 2 ? GOLD_LIGHT : GOLD}" stroke-width="2.4"/>
        <circle cx="${x}" cy="${y}" r="7" fill="${GOLD}"/>${label}`;
    })
    .join('');
  const gaugeLabel = withText
    ? `<text x="286" y="268" text-anchor="middle" fill="${GOLD_LIGHT}" font-family="Georgia, 'Times New Roman', serif" font-size="28" font-weight="700">CSAT</text>`
    : '';
  return `
  <svg class="motif" viewBox="0 0 560 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glowGov" cx="50%" cy="32%" r="58%">
        <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="560" height="630" fill="url(#glowGov)"/>
    <g fill="none" stroke="${GOLD_LIGHT}" stroke-opacity="0.12" stroke-width="1">
      ${Array.from({ length: 6 }, (_, i) => `<circle cx="286" cy="210" r="${48 + i * 26}"/>`).join('')}
    </g>
    <g fill="none" stroke="${GOLD}" stroke-width="3" stroke-linecap="round">
      <path d="M 118 210 A 78 78 0 0 1 274 210"/>
      <path d="M 298 210 A 78 78 0 0 1 454 210"/>
    </g>
    <g fill="#0C1728" stroke="${GOLD}" stroke-width="1.8">
      <rect x="168" y="210" width="44" height="132" rx="4"/>
      <rect x="348" y="210" width="44" height="132" rx="4"/>
      <path d="M 196 210 Q 286 132 376 210"/>
    </g>
    <circle cx="286" cy="210" r="54" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="3"/>
    <path d="M 248 226 A 42 42 0 0 1 324 226" fill="none" stroke="${GOLD}" stroke-width="7" stroke-linecap="round"/>
    ${gaugeLabel}
    <g stroke="${GOLD}" stroke-width="2.2" fill="none">
      <line x1="96" y1="478" x2="236" y2="478"/>
      <line x1="236" y1="478" x2="376" y2="478"/>
    </g>
    ${stepSvg}
    <g fill="${GOLD}">
      <rect x="430" y="392" width="18" height="72" rx="3"/>
      <rect x="456" y="368" width="18" height="96" rx="3"/>
      <rect x="482" y="344" width="18" height="120" rx="3"/>
      <rect x="508" y="320" width="18" height="144" rx="3"/>
    </g>
  </svg>`;
}

function html({ withText, logoUri }) {
  const copy = withText
    ? `
    <div class="copy">
      <div>
        <div class="badge">GOVERNMENT CSAT  ·  KSA  ·  2026</div>
        <h1>
          <span class="line">Government customer</span>
          <span class="line">satisfaction survey</span>
          <span class="line gold">Saudi Arabia</span>
        </h1>
        <div class="rule"></div>
        <p class="sub">Vision 2030  ·  DGA  ·  Absher  ·  Tawakkalna</p>
      </div>
      <div class="brand">
        <img class="logo" src="${logoUri}" alt=""/>
        <div class="brand-meta">PUBLIC-SECTOR RESEARCH</div>
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
  if (heroHtml.includes('<h1') || heroHtml.includes('>Ask<') || heroHtml.includes('CSAT') || heroHtml.includes('BioNixus')) {
    throw new Error('Hero variant must not contain title, labels or wordmark text');
  }
  await writeJpeg(browser, heroHtml, HERO_PATH);
} finally {
  await browser.close();
}
