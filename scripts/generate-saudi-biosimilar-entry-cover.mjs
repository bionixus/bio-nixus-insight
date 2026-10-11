/**
 * Images for /blog/biosimilar-market-entry-research-saudi-arabia (both 1200×630 JPEG):
 * - `-cover.jpg`: titled card for Open Graph, Twitter and the JSON-LD ImageObject.
 * - `-hero.jpg`: the same artwork with no text, used as the on-page hero and blog card image,
 *   because BlogPost.tsx lays the h1 over the cover and baked-in text would clash with it.
 * Brand palette from src/index.css; display type is Playfair Display (falls back to Georgia),
 * labels are Inter. The right-hand panel plots the SFDA Pricing Rules caps (Articles 6 and 7,
 * effective 14 January 2021) as a share of the reference biologic's original price.
 *
 *   node scripts/generate-saudi-biosimilar-entry-cover.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'biosimilar-market-entry-research-saudi-arabia-cover.jpg');
const HERO_PATH = path.join(outDir, 'biosimilar-market-entry-research-saudi-arabia-hero.jpg');

const NAVY_DEEP = '#101C30';
const NAVY_MEDIUM = '#22345A';
const NAVY_END = '#283F5E';
const GOLD = '#F5A503';
const GOLD_LIGHT = '#F7C948';
const CREAM = '#F8F6F2';
const MUTED = '#9EB0C8';
const SERIF = "'Playfair Display', Georgia, 'Times New Roman', serif";
const SANS = "Inter, 'Helvetica Neue', Arial, sans-serif";

const PANEL = { x: 724, y: 104, w: 404, h: 424 };
const BAR_X = PANEL.x + 32;
const BAR_MAX = PANEL.w - 64;

/** Share of the reference biologic's price before the first biosimilar was registered. */
const PRICE_STEPS = [
  { label: 'Reference biologic', value: '100', pct: 100, biosimilar: false },
  { label: 'Reference after 1st biosimilar', value: '80', pct: 80, biosimilar: false },
  { label: '1st biosimilar', value: '≤75', pct: 75, biosimilar: true },
  { label: '2nd biosimilar', value: '≤65', pct: 65, biosimilar: true },
  { label: '3rd biosimilar onward', value: '≤55', pct: 55, biosimilar: true },
];

/** @param {{ withText: boolean }} options */
function priceStepsSvg({ withText }) {
  return PRICE_STEPS.map((step, i) => {
    const top = PANEL.y + 82 + i * 62;
    const barY = top + 14;
    const width = Math.round((BAR_MAX * step.pct) / 100);
    const fill = step.biosimilar ? `fill="url(#goldBar)"` : `fill="${CREAM}" fill-opacity="0.30"`;
    const labels = withText
      ? `<text x="${BAR_X}" y="${top + 4}" fill="${CREAM}" fill-opacity="0.9" font-family="${SANS}" font-size="14" font-weight="600">${step.label}</text>
        <text x="${BAR_X + BAR_MAX}" y="${top + 4}" text-anchor="end" fill="${step.biosimilar ? GOLD_LIGHT : CREAM}" font-family="${SANS}" font-size="15" font-weight="700">${step.value}</text>`
      : `<rect x="${BAR_X}" y="${top - 7}" width="${step.label.length * 6.2}" height="8" rx="4" fill="${CREAM}" fill-opacity="0.45"/>`;
    return `${labels}
        <rect x="${BAR_X}" y="${barY}" width="${width}" height="16" rx="8" ${fill}/>`;
  }).join('\n');
}

const TITLE_BLOCK = `<rect x="72" y="70" width="430" height="34" rx="17" fill="${GOLD}" fill-opacity="0.12" stroke="${GOLD}" stroke-opacity="0.8"/>
  <text x="94" y="92" fill="${GOLD_LIGHT}" font-family="${SANS}" font-size="13.5" font-weight="700" letter-spacing="2.4">BIOSIMILARS · SFDA 2026 · SAUDI ARABIA</text>

  <text font-family="${SERIF}" font-weight="700" font-size="54" letter-spacing="-0.6">
    <tspan x="72" y="188" fill="${CREAM}">Biosimilar entry in</tspan>
    <tspan x="72" y="254" fill="${CREAM}">Saudi Arabia after</tspan>
    <tspan x="72" y="320" fill="${GOLD_LIGHT}">SFDA’s 2026 guideline</tspan>
  </text>

  <rect x="72" y="356" width="76" height="4" rx="2" fill="${GOLD}"/>
  <text x="72" y="404" fill="${CREAM}" fill-opacity="0.92" font-family="${SANS}" font-size="25" font-weight="600">What to study before the tender</text>
  <text x="72" y="440" fill="${MUTED}" font-family="${SANS}" font-size="19.5" font-weight="500">Interchangeability, price tiers and the evidence buyers ask for</text>

  <text x="72" y="560" fill="${GOLD}" font-family="${SERIF}" font-size="27" font-weight="700">BioNixus Insights</text>
  <text x="72" y="592" fill="#7F93AE" font-family="${SANS}" font-size="14" font-weight="600" letter-spacing="2.2">HEALTHCARE &amp; PHARMACEUTICAL MARKET RESEARCH</text>`;

/** @param {{ withText: boolean }} options */
const coverSvg = ({ withText }) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${NAVY_DEEP}"/>
      <stop offset="55%" stop-color="${NAVY_MEDIUM}"/>
      <stop offset="100%" stop-color="${NAVY_END}"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="18%" r="55%">
      <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="goldBar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${GOLD}"/>
      <stop offset="55%" stop-color="${GOLD_LIGHT}"/>
      <stop offset="100%" stop-color="${GOLD}"/>
    </linearGradient>
    <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.3" fill="${CREAM}" fill-opacity="0.07"/>
    </pattern>
    <radialGradient id="dotFade" cx="82%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
      <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <mask id="dotMask"><rect width="1200" height="630" fill="url(#dotFade)"/></mask>
    <filter id="panelShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#dots)" mask="url(#dotMask)"/>
  <circle cx="1130" cy="560" r="230" fill="none" stroke="${GOLD_LIGHT}" stroke-opacity="0.10" stroke-width="1.5"/>
  <circle cx="1130" cy="560" r="300" fill="none" stroke="${GOLD_LIGHT}" stroke-opacity="0.06" stroke-width="1.5"/>
  <rect x="0" y="0" width="1200" height="6" fill="url(#goldBar)"/>

  ${withText ? TITLE_BLOCK : ''}

  <g filter="url(#panelShadow)">
    <rect x="${PANEL.x}" y="${PANEL.y}" width="${PANEL.w}" height="${PANEL.h}" rx="22" fill="${NAVY_DEEP}" fill-opacity="0.72" stroke="${GOLD_LIGHT}" stroke-opacity="0.38"/>
  </g>
  ${
    withText
      ? `<text x="${PANEL.x + 32}" y="${PANEL.y + 40}" fill="${GOLD_LIGHT}" font-family="${SANS}" font-size="12.5" font-weight="700" letter-spacing="2.4">SFDA PRICE CAPS · % OF REFERENCE</text>`
      : `<rect x="${PANEL.x + 32}" y="${PANEL.y + 30}" width="232" height="9" rx="4.5" fill="${GOLD_LIGHT}" fill-opacity="0.7"/>`
  }
  <rect x="${PANEL.x + 32}" y="${PANEL.y + 56}" width="${PANEL.w - 64}" height="1" fill="${CREAM}" fill-opacity="0.16"/>

  ${priceStepsSvg({ withText })}
  ${
    withText
      ? `<text x="${PANEL.x + 32}" y="${PANEL.y + PANEL.h - 22}" fill="${MUTED}" font-family="${SANS}" font-size="11.5" font-weight="500">SFDA Pricing Rules, Articles 6 and 7 (2021)</text>`
      : ''
  }
</svg>`;

fs.mkdirSync(outDir, { recursive: true });
for (const [outPath, withText] of [
  [COVER_PATH, true],
  [HERO_PATH, false],
]) {
  await sharp(Buffer.from(coverSvg({ withText })), { density: 144 })
    .resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 90, progressive: true, mozjpeg: true })
    .toFile(outPath);
  const meta = await sharp(outPath).metadata();
  const { size } = fs.statSync(outPath);
  console.log(`Written: ${path.relative(root, outPath)} (${meta.width}×${meta.height}, ${(size / 1024).toFixed(1)} KB)`);
}
