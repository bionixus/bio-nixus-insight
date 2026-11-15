/**
 * Legacy generator. The committed covers for
 * /blog/saudi-hematology-diagnostics-vs-ward-brand-cut come from Gemini:
 *   public/images/blog/saudi-hematology-diagnostics-vs-ward-brand-cut-hero.jpg   1920x1080
 *   public/images/blog/saudi-hematology-diagnostics-vs-ward-brand-cut-cover.jpg  1200x630
 * Do not run this script. It would overwrite the Gemini JPEGs.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');
const HERO_PATH = path.join(outDir, 'saudi-hematology-diagnostics-vs-ward-brand-cut-hero.jpg');
const COVER_PATH = path.join(outDir, 'saudi-hematology-diagnostics-vs-ward-brand-cut-cover.jpg');

const NAVY = '#0C1B33';
const NAVY_DEEP = '#081226';
const GOLD = '#C9A84C';
const GOLD_SOFT = '#E4C97A';
const CREAM = '#F4EBD8';

function heroSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <rect width="1920" height="1080" fill="${NAVY}"/>
  <rect width="1920" height="14" fill="${GOLD}"/>
  <rect y="1066" width="1920" height="14" fill="${GOLD}"/>
  <rect x="948" width="24" height="1080" fill="${NAVY_DEEP}"/>
  <rect x="956" width="8" height="1080" fill="${GOLD}"/>
  <g fill="none" stroke="${GOLD}" stroke-width="3">
    <circle cx="280" cy="360" r="120"/>
    <circle cx="280" cy="360" r="78" stroke="${GOLD_SOFT}"/>
    <circle cx="280" cy="360" r="28" fill="${GOLD}" stroke="none"/>
    <circle cx="560" cy="280" r="86"/>
    <circle cx="560" cy="280" r="48" fill="${GOLD}" fill-opacity="0.18" stroke="${GOLD_SOFT}"/>
    <circle cx="470" cy="560" r="150"/>
    <circle cx="470" cy="560" r="96" stroke="${CREAM}" stroke-opacity="0.55"/>
    <circle cx="470" cy="560" r="36" fill="${GOLD_SOFT}" stroke="none"/>
    <circle cx="720" cy="640" r="70" stroke="${GOLD_SOFT}"/>
    <circle cx="250" cy="760" r="54"/>
  </g>
  <g fill="none" stroke="${GOLD}" stroke-width="3">
    <rect x="1120" y="220" width="560" height="640" rx="28"/>
    <path d="M1120 420 H1680 M1120 620 H1680 M1306 220 V860 M1494 220 V860"/>
    <rect x="1168" y="268" width="90" height="110" rx="12" fill="${GOLD}" fill-opacity="0.2"/>
    <rect x="1354" y="468" width="90" height="110" rx="12" fill="${GOLD_SOFT}" fill-opacity="0.35"/>
    <rect x="1540" y="668" width="90" height="110" rx="12" fill="${CREAM}" fill-opacity="0.2"/>
  </g>
  <circle cx="1680" cy="180" r="18" fill="${GOLD}"/>
  <circle cx="1740" cy="220" r="10" fill="${GOLD_SOFT}"/>
</svg>`;
}

function coverSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${NAVY}"/>
  <rect width="1200" height="10" fill="${GOLD}"/>
  <path d="M0 630 L1200 470 L1200 630 Z" fill="${NAVY_DEEP}"/>
  <g fill="none" stroke="${GOLD}" stroke-width="3">
    <circle cx="210" cy="250" r="92"/>
    <circle cx="210" cy="250" r="52" stroke="${GOLD_SOFT}"/>
    <circle cx="210" cy="250" r="18" fill="${GOLD}" stroke="none"/>
    <circle cx="390" cy="360" r="120"/>
    <circle cx="390" cy="360" r="70" stroke="${CREAM}" stroke-opacity="0.5"/>
    <circle cx="540" cy="210" r="48" stroke="${GOLD_SOFT}"/>
  </g>
  <g transform="translate(680 140)" fill="none" stroke="${GOLD}" stroke-width="3">
    <rect width="380" height="360" rx="22"/>
    <path d="M0 120 H380 M0 240 H380 M126 0 V360 M254 0 V360"/>
    <rect x="28" y="28" width="70" height="64" rx="8" fill="${GOLD}" fill-opacity="0.25"/>
    <rect x="154" y="148" width="70" height="64" rx="8" fill="${GOLD_SOFT}" fill-opacity="0.3"/>
    <rect x="282" y="268" width="70" height="64" rx="8" fill="${CREAM}" fill-opacity="0.18"/>
  </g>
</svg>`;
}

async function writeJpeg(svg, filePath, width, height) {
  const buffer = await sharp(Buffer.from(svg)).resize(width, height).jpeg({ quality: 90, progressive: true }).toBuffer();
  fs.writeFileSync(filePath, buffer);
  const meta = await sharp(buffer).metadata();
  if (meta.width !== width || meta.height !== height) {
    throw new Error(`${filePath} is ${meta.width}x${meta.height}, expected ${width}x${height}`);
  }
  console.log(`${path.relative(root, filePath)} ${meta.width}x${meta.height} ${buffer.length} bytes`);
}

await writeJpeg(heroSvg(), HERO_PATH, 1920, 1080);
await writeJpeg(coverSvg(), COVER_PATH, 1200, 630);
