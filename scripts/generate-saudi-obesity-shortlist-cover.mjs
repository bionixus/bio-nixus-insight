/**
 * Images for /blog/who-does-obesity-market-research-saudi-arabia (both 1200×630 JPEG):
 * - `-cover.jpg`: titled card for Open Graph, Twitter and the JSON-LD ImageObject.
 * - `-hero.jpg`: the same artwork with no text, used as the on-page hero and blog card,
 *   because BlogPost.tsx lays the h1 over the image.
 * Scene: a Riyadh skyline with an abstract GLP-1 research motif (peptide ring, oral tablet,
 * unbranded pen). No people, logos, client names, prices, or provider bars.
 * Brand palette from src/index.css. Display type is Playfair Display (falls back to Georgia).
 *
 *   node scripts/generate-saudi-obesity-shortlist-cover.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const COVER_PATH = path.join(outDir, 'who-does-obesity-market-research-saudi-arabia-cover.jpg');
const HERO_PATH = path.join(outDir, 'who-does-obesity-market-research-saudi-arabia-hero.jpg');

const NAVY_DEEP = '#101C30';
const NAVY_MID = '#1A2C4A';
const NAVY_END = '#243652';
const GOLD = '#F5A503';
const GOLD_LIGHT = '#F7C948';
const CREAM = '#F8F6F2';
const MUTED = '#9EB0C8';
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Inter, 'Helvetica Neue', Arial, sans-serif";

const TITLE_BLOCK = `
  <rect x="64" y="78" width="392" height="36" rx="18" fill="${GOLD}" fill-opacity="0.14" stroke="${GOLD}" stroke-opacity="0.85"/>
  <text x="86" y="102" fill="${GOLD_LIGHT}" font-family="${SANS}" font-size="14" font-weight="700" letter-spacing="2.2">OBESITY · GLP-1 · SAUDI ARABIA</text>
  <text font-family="${SERIF}" font-weight="700" font-size="52" letter-spacing="-0.5">
    <tspan x="64" y="196" fill="${CREAM}">Who does obesity</tspan>
    <tspan x="64" y="258" fill="${CREAM}">market research in</tspan>
    <tspan x="64" y="320" fill="${GOLD_LIGHT}">Saudi Arabia?</tspan>
  </text>
  <rect x="64" y="352" width="72" height="4" rx="2" fill="${GOLD}"/>
  <text x="64" y="400" fill="${CREAM}" fill-opacity="0.92" font-family="${SANS}" font-size="24" font-weight="600">A 2026 shortlist of eight providers</text>
  <text x="64" y="548" fill="${GOLD}" font-family="${SERIF}" font-size="26" font-weight="700">BioNixus Insights</text>
  <text x="64" y="578" fill="#7F93AE" font-family="${SANS}" font-size="13" font-weight="600" letter-spacing="1.8">HEALTHCARE MARKET RESEARCH</text>`;

function peptide(cx, cy) {
  const dots = Array.from({ length: 9 }, (_, i) => {
    const t = i / 8;
    return {
      x: cx - 78 + t * 156,
      y: cy + Math.sin(t * Math.PI * 2) * 46,
    };
  });
  const d = dots.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
  const circles = dots
    .map(
      (p, i) =>
        `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${i % 2 === 0 ? 8 : 6}" fill="${i % 2 === 0 ? GOLD : CREAM}"/>`,
    )
    .join('');
  return `<path d="${d}" fill="none" stroke="${GOLD_LIGHT}" stroke-width="2.2" stroke-linecap="round"/>${circles}`;
}

/** Geometric Riyadh silhouette: split-crown tower, sphere tower, and plain blocks. No labels. */
function skyline() {
  const baseline = 620;
  const blocks = [
    [620, 64, 96],
    [692, 34, 140],
    [734, 52, 108],
    [796, 26, 168],
    [830, 58, 120],
    [898, 36, 150],
    [944, 24, 176],
    [978, 62, 112],
    [1050, 48, 132],
    [1108, 56, 100],
  ];
  const rects = blocks
    .map(([x, w, h]) => {
      const y = baseline - h;
      return `<rect x="${x}" y="${y}" width="${w}" height="${h + 20}" rx="2"/>`;
    })
    .join('');
  const crownX = 796;
  const crownTop = baseline - 168;
  const sphereX = 956;
  const sphereTop = baseline - 176;
  return `<g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-opacity="0.7" stroke-width="1.4">
    ${rects}
    <polygon points="${crownX},${crownTop + 36} ${crownX + 13},${crownTop - 18} ${crownX + 26},${crownTop + 36}"/>
    <circle cx="${sphereX}" cy="${sphereTop - 8}" r="16" fill="#0C1728"/>
  </g>`;
}

function motif() {
  return `
    <circle cx="910" cy="268" r="176" fill="none" stroke="${GOLD}" stroke-opacity="0.28" stroke-width="1.5"/>
    <circle cx="910" cy="268" r="132" fill="#101C30" fill-opacity="0.35" stroke="${GOLD_LIGHT}" stroke-opacity="0.85" stroke-width="2.5"/>
    ${peptide(910, 268)}
    <g transform="translate(690 360)">
      <ellipse cx="46" cy="28" rx="46" ry="28" fill="${CREAM}" stroke="${GOLD}" stroke-width="3"/>
      <path d="M 18 28 H 74" stroke="${GOLD}" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
    </g>
    <g transform="translate(1088 168)">
      <rect x="18" y="36" width="36" height="132" rx="18" fill="${CREAM}"/>
      <rect x="18" y="36" width="36" height="46" rx="16" fill="${GOLD}"/>
      <rect x="30" y="8" width="12" height="32" rx="3" fill="${GOLD_LIGHT}"/>
      <path d="M 36 0 L 42 10 H 30 Z" fill="${CREAM}"/>
    </g>`;
}

/** @param {{ withText: boolean }} options */
function coverSvg({ withText }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${NAVY_DEEP}"/>
      <stop offset="48%" stop-color="${NAVY_MID}"/>
      <stop offset="100%" stop-color="${NAVY_END}"/>
    </linearGradient>
    <radialGradient id="glow" cx="76%" cy="42%" r="48%">
      <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.28"/>
      <stop offset="70%" stop-color="${GOLD}" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="goldBar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${GOLD}"/>
      <stop offset="100%" stop-color="${GOLD_LIGHT}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g fill="none" stroke="${GOLD_LIGHT}" stroke-opacity="0.12" stroke-width="1.2">
    <path d="M -20 470 C 220 390, 480 520, 760 430 S 1180 360, 1240 410"/>
    <path d="M -20 510 C 260 430, 520 560, 800 470 S 1200 400, 1240 450"/>
  </g>
  ${skyline()}
  ${motif()}
  <rect x="0" y="0" width="1200" height="7" fill="url(#goldBar)"/>
  ${withText ? TITLE_BLOCK : ''}
</svg>`;
}

fs.mkdirSync(outDir, { recursive: true });
for (const [outPath, withText] of [
  [COVER_PATH, true],
  [HERO_PATH, false],
]) {
  const svg = coverSvg({ withText });
  if (!withText && /<text[\s>]/.test(svg)) {
    throw new Error('Hero variant must not contain text');
  }
  await sharp(Buffer.from(svg))
    .resize(1200, 630, { fit: 'fill' })
    .jpeg({ quality: 90, progressive: true, mozjpeg: true })
    .toFile(outPath);
  const meta = await sharp(outPath).metadata();
  const { size } = fs.statSync(outPath);
  if (meta.width !== 1200 || meta.height !== 630) {
    throw new Error(`${outPath} is ${meta.width}×${meta.height}, expected 1200×630`);
  }
  if (size > 300 * 1024) {
    throw new Error(`${outPath} is ${(size / 1024).toFixed(1)} KB, over the 300 KB OG budget`);
  }
  console.log(`Written: ${path.relative(root, outPath)} (${meta.width}×${meta.height}, ${(size / 1024).toFixed(1)} KB)`);
}
