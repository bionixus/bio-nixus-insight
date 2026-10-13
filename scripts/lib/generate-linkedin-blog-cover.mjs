/**
 * LinkedIn / OG blog covers: 1200×630 Playwright JPEGs, navy/gold BioNixus.
 *
 * Rules:
 *   - 1.91:1, under 300 KB
 *   - 80px safe zone on every edge
 *   - Short headline only; no drug trademarks, patients, stats, or CTA verbs
 *   - Headline ≥40px, loaded Playfair + Inter, no letter-spacing hacks
 *   - Cover has title; hero is the same artwork with no type
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

export const NAVY = '#101C30';
export const NAVY_MID = '#1A2C4A';
export const NAVY_END = '#243652';
export const GOLD = '#F5A503';
export const GOLD_LIGHT = '#F7C948';
export const CREAM = '#F8F6F2';

const DEFAULT_LOGO = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'public/bionixus-logo.png');

export async function tintLogo(hex = CREAM, logoPng = DEFAULT_LOGO) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const { data, info } = await sharp(logoPng).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
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

/**
 * @param {{
 *   badge: string;
 *   lines: [string, string];
 *   goldLine: string;
 *   sub: string;
 *   motifSvg: string;
 *   logoUri: string;
 *   withText: boolean;
 * }} opts
 */
export function linkedInCoverHtml({ badge, lines, goldLine, sub, motifSvg, logoUri, withText }) {
  const copy = withText
    ? `
    <div class="copy">
      <div>
        <div class="badge">${badge}</div>
        <h1>
          <span class="line">${lines[0]}</span>
          <span class="line">${lines[1]}</span>
          <span class="line gold">${goldLine}</span>
        </h1>
        <div class="rule"></div>
        <p class="sub">${sub}</p>
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
    ${motifSvg}
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
  return { dest, width: meta.width, height: meta.height, bytes: size };
}

/**
 * @param {{
 *   badge: string;
 *   lines: [string, string];
 *   goldLine: string;
 *   sub: string;
 *   motifSvg: string;
 *   coverPath: string;
 *   heroPath?: string;
 *   logoPng?: string;
 *   browser?: import('playwright').Browser;
 * }} opts
 */
export async function generateLinkedInBlogPair(opts) {
  const logoUri = await tintLogo(CREAM, opts.logoPng || DEFAULT_LOGO);
  const ownsBrowser = !opts.browser;
  const browser = opts.browser || (await chromium.launch());
  fs.mkdirSync(path.dirname(opts.coverPath), { recursive: true });
  try {
    const coverHtml = linkedInCoverHtml({ ...opts, logoUri, withText: true });
    const cover = await writeJpeg(browser, coverHtml, opts.coverPath);
    console.log(`Written: ${opts.coverPath} (1200×630, ${(cover.bytes / 1024).toFixed(1)} KB)`);
    let hero = null;
    if (opts.heroPath) {
      const heroHtml = linkedInCoverHtml({ ...opts, logoUri, withText: false });
      if (heroHtml.includes('<h1') || heroHtml.includes(opts.goldLine) || heroHtml.includes('BioNixus')) {
        throw new Error('Hero variant must not contain title, labels or wordmark text');
      }
      hero = await writeJpeg(browser, heroHtml, opts.heroPath);
      console.log(`Written: ${opts.heroPath} (1200×630, ${(hero.bytes / 1024).toFixed(1)} KB)`);
    }
    return { cover, hero };
  } finally {
    if (ownsBrowser) await browser.close();
  }
}

export function glowMotif(inner, id = 'glow') {
  return `
  <svg class="motif" viewBox="0 0 560 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="${id}" cx="46%" cy="24%" r="62%">
        <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.28"/>
        <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="560" height="630" fill="url(#${id})"/>
    ${inner}
  </svg>`;
}
