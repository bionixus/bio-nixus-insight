#!/usr/bin/env node
/**
 * Photoreal editorial cover for SFDA economic evaluation / budget impact guide.
 * Run: node scripts/generate-sfda-budget-impact-cover.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const OUT = path.join(
  root,
  'public/images/blog/sfda-economic-evaluation-budget-impact-guide-2026-cover.jpg',
);

const PROMPT = [
  'Ultra-realistic editorial photograph, cinematic golden hour lighting, shallow depth of field,',
  'premium healthcare economics magazine cover, 8k, no text, no logos, no watermark.',
  'Riyadh Saudi Arabia skyline at sunset with Kingdom Centre and Al Faisaliyah Tower,',
  'warm amber sky, modern Gulf city lights beginning to glow.',
  'Foreground: elegant glass conference table with semi-transparent holographic overlays:',
  'budget impact bar charts trending upward in navy blue and gold,',
  'pharmacoeconomic cost-effectiveness scatter plot, spreadsheet grid with healthcare SAR currency symbols,',
  'subtle SFDA regulatory document silhouette, stethoscope edge, professional HEOR consultant aesthetic,',
  'McKinsey-style data visualization, clean corporate pharma market access mood.',
].join(' ');

const SEED = 58214;
const MODEL = 'flux';

function buildImageUrl() {
  const encoded = encodeURIComponent(PROMPT);
  return `https://image.pollinations.ai/prompt/${encoded}?width=1600&height=900&seed=${SEED}&model=${MODEL}&nologo=true&enhance=true`;
}

async function postProcess(inputBuf) {
  const base = sharp(inputBuf).resize(1600, 900, { fit: 'cover', position: 'centre' });
  const overlay = Buffer.from(`<svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="vignette" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0a1628" stop-opacity="0.06"/>
        <stop offset="80%" stop-color="#0a1628" stop-opacity="0"/>
        <stop offset="100%" stop-color="#0a1628" stop-opacity="0.48"/>
      </linearGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#vignette)"/>
    <rect x="0" y="0" width="1600" height="4" fill="#c9a227"/>
  </svg>`);

  return base
    .composite([{ input: overlay, top: 0, left: 0 }])
    .jpeg({ quality: 92, progressive: true, mozjpeg: true })
    .toBuffer();
}

async function main() {
  const url = buildImageUrl();
  console.log('Fetching cover from Pollinations (flux, seed', SEED, ')...');
  const res = await fetch(url, {
    headers: { 'User-Agent': 'BioNixus-Cover-Generator/1.0' },
    signal: AbortSignal.timeout(180000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const raw = Buffer.from(await res.arrayBuffer());
  if (raw.length < 5000) throw new Error('Response too small — likely not an image');

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  const processed = await postProcess(raw);
  fs.writeFileSync(OUT, processed);
  const meta = await sharp(OUT).metadata();
  console.log('Wrote', OUT, `(${meta.width}x${meta.height}, ${(processed.length / 1024).toFixed(0)} KB)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
