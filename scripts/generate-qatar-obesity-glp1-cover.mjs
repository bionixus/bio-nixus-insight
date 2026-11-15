/**
 * Cover / hero for /blog/qatar-obesity-glp1-market-research.
 *
 * Hand-authored BioNixus HTML (navy #101C30, gold #F5A503, repo logo)
 * rendered with Playwright and encoded as JPEG with sharp.
 * No stock photos, no reused site images, no third-party image generators.
 *
 * LinkedIn / OG rules applied here:
 *   - 1200×630 (1.91:1), JPEG under 300 KB — LinkedIn link-preview spec
 *   - 80px safe zone on every edge (feed crop + mobile letterbox)
 *   - Short headline only; og:title carries the SEO title under the image
 *   - No drug trademarks, logos, patients, BMI stats, or medical claims
 *   - No CTA verbs ("click", "download") — editorial share card, not an ad
 *   - Headline ≥40px, cream on navy, loaded web fonts (no letter-spacing hacks)
 *
 *   public/images/blog/qatar-obesity-glp1-market-research-cover.jpg  (titled OG card)
 *   public/images/blog/qatar-obesity-glp1-market-research-hero.jpg   (text-free hero)
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

/** Doha West Bay silhouette + generic pen and tablet. No brand shapes. */
function motif() {
  return `
  <svg class="motif" viewBox="0 0 560 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glowQ" cx="46%" cy="24%" r="62%">
        <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.28"/>
        <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="glassQ" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${GOLD_LIGHT}" stop-opacity="0.26"/>
        <stop offset="100%" stop-color="${NAVY}" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <rect width="560" height="630" fill="url(#glowQ)"/>
    <path d="M 0 552 C 80 518, 190 578, 310 534 S 470 522, 560 554 V 630 H 0 Z" fill="#0A1422"/>
    <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.6">
      <rect x="72" y="292" width="28" height="260" rx="3"/>
      <rect x="108" y="198" width="46" height="354" rx="3"/>
      <rect x="118" y="214" width="26" height="40" fill="url(#glassQ)" stroke="none"/>
      <rect x="118" y="268" width="26" height="40" fill="url(#glassQ)" stroke="none"/>
      <rect x="118" y="322" width="26" height="40" fill="url(#glassQ)" stroke="none"/>
      <rect x="162" y="248" width="22" height="304" rx="3"/>
      <polygon points="131,132 149,198 113,198"/>
      <rect x="192" y="168" width="54" height="384" rx="3"/>
      <rect x="204" y="186" width="30" height="46" fill="url(#glassQ)" stroke="none"/>
      <rect x="204" y="246" width="30" height="46" fill="url(#glassQ)" stroke="none"/>
      <rect x="254" y="288" width="20" height="264" rx="3"/>
      <rect x="282" y="228" width="36" height="324" rx="3"/>
    </g>
    <g transform="translate(348 156)">
      <rect x="22" y="40" width="48" height="136" rx="24" fill="${CREAM}"/>
      <rect x="22" y="40" width="48" height="48" rx="24" fill="${GOLD}"/>
      <rect x="40" y="12" width="12" height="32" rx="3" fill="${GOLD_LIGHT}"/>
      <circle cx="46" cy="12" r="6" fill="${CREAM}"/>
    </g>
    <g transform="translate(428 286)">
      <rect x="10" y="28" width="72" height="18" rx="9" fill="${CREAM}"/>
      <circle cx="28" cy="37" r="7" fill="${GOLD}"/>
      <circle cx="46" cy="37" r="7" fill="${GOLD_LIGHT}"/>
      <circle cx="64" cy="37" r="7" fill="${GOLD}"/>
      <rect x="22" y="58" width="48" height="64" rx="10" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
      <ellipse cx="46" cy="122" rx="28" ry="10" fill="#16263C" stroke="${GOLD_LIGHT}" stroke-width="1.8"/>
    </g>
  </svg>`;
}

function html({ withText, logoUri }) {
  const copy = withText
    ? `
    <div class="copy">
      <div>
        <div class="badge">QATAR  ·  OBESITY  ·  GLP-1</div>
        <h1>
          <span class="line">Qatar GLP-1</span>
          <span class="line">market research</span>
          <span class="line gold">Injectable to oral</span>
        </h1>
        <div class="rule"></div>
        <p class="sub">Access, entitlement and channel · 2026</p>
      </div>
      <div class="brand">
        <img class="logo" src="${logoUri}" alt=""/>
        <div class="brand-meta">HEALTHCARE MARKET RESEARCH</div>
      </div>
    </div>`
    : '';

  return `<!doctype html>
<html><head><meta charset="utf-8"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&amp;family=Inter:wght@600;700&amp;display=swap"/>
<style>
html,body{margin:0;padding:0;width:1200px;height:630px;overflow:hidden}
body{
  background:linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 46%, ${NAVY_END} 100%);
  color:${CREAM};
  font-family:Inter,Arial,sans-serif;
}
.frame{position:relative;width:1200px;height:630px}
.goldbar{position:absolute;inset:0 0 auto 0;height:6px;background:linear-gradient(90deg,${GOLD},${GOLD_LIGHT});z-index:3}
.motif{position:absolute;right:0;top:0;width:48%;height:100%}
.copy{
  position:relative;z-index:2;width:56%;height:100%;
  padding:80px 40px 80px 80px;box-sizing:border-box;
  display:flex;flex-direction:column;justify-content:space-between;
}
.badge{
  display:inline-block;padding:8px 16px;border-radius:18px;
  border:1px solid rgba(245,165,3,.85);background:rgba(245,165,3,.14);
  color:${GOLD_LIGHT};font-size:13px;font-weight:700;letter-spacing:1.6px;
}
h1{
  margin:22px 0 0;
  font-family:'Playfair Display',Georgia,'Times New Roman',serif;
  font-weight:700;font-size:46px;line-height:1.16;
  letter-spacing:0;word-spacing:0;
}
h1 .line{display:block}
h1 .gold{color:${GOLD_LIGHT}}
.rule{width:72px;height:4px;border-radius:2px;background:${GOLD};margin:22px 0 16px}
.sub{margin:0;font-size:18px;font-weight:600;color:${CREAM};opacity:.92;max-width:460px}
.logo{display:block;width:168px;height:auto}
.brand-meta{margin-top:8px;color:#7F93AE;font-size:12px;font-weight:700;letter-spacing:1.6px}
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
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 });
  await page.setContent(pageHtml, { waitUntil: 'networkidle' });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise((resolve) => setTimeout(resolve, 250));
  });
  const png = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1200, height: 630 } });
  await page.close();
  await sharp(png)
    .resize(1200, 630, { fit: 'fill' })
    .jpeg({ quality: 88, progressive: true, mozjpeg: true })
    .toFile(dest);
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
  if (heroHtml.includes('<h1') || heroHtml.includes('Injectable') || heroHtml.includes('BioNixus')) {
    throw new Error('Hero variant must not contain title, labels or wordmark text');
  }
  await writeJpeg(browser, heroHtml, HERO_PATH);
} finally {
  await browser.close();
}
