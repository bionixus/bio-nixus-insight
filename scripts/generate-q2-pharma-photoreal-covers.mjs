#!/usr/bin/env node
/**
 * Generate photorealistic Q2 2026 blog covers (legacy editorial style).
 * Uses Pollinations image API + sharp post-processing.
 *
 * Run: node scripts/generate-q2-pharma-photoreal-covers.mjs --all
 *      node scripts/generate-q2-pharma-photoreal-covers.mjs --slug foundayo-orforglipron-fda-approval-2026
 * Upload: node scripts/refresh-q2-blog-covers-and-schema.mjs --all  (after covers exist)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { getAllTopicsWithPrompts } from './data/q2-2026-cover-prompts.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const coverDir = path.join(root, 'public/images/blog/q2-2026-pharma');

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    all: args.includes('--all'),
    slug: args.includes('--slug') ? args[args.indexOf('--slug') + 1] : null,
    model: args.includes('--model') ? args[args.indexOf('--model') + 1] : 'flux',
  };
}

/**
 * @param {string} prompt
 * @param {number} seed
 * @param {string} model
 */
function buildImageUrl(prompt, seed, model) {
  const encoded = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${encoded}?width=1200&height=630&seed=${seed}&model=${model}&nologo=true&enhance=true`;
}

/**
 * Subtle BioNixus brand bar (matches legacy premium feel without full SVG template).
 * @param {Buffer} inputBuf
 */
async function postProcess(inputBuf) {
  const base = sharp(inputBuf).resize(1200, 630, { fit: 'cover', position: 'centre' });
  const overlay = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0a1628" stop-opacity="0"/>
        <stop offset="100%" stop-color="#0a1628" stop-opacity="0.55"/>
      </linearGradient>
    </defs>
    <rect x="0" y="520" width="1200" height="110" fill="url(#bar)"/>
    <rect x="0" y="0" width="1200" height="3" fill="#c9a227"/>
  </svg>`);

  return base
    .composite([{ input: overlay, top: 0, left: 0 }])
    .jpeg({ quality: 90, progressive: true, mozjpeg: true })
    .toBuffer();
}

/**
 * @param {string} url
 */
async function fetchImage(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'BioNixus-Cover-Generator/1.0' },
    signal: AbortSignal.timeout(120000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for image`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) throw new Error('Response too small — likely not an image');
  return buf;
}

async function main() {
  const { all, slug, model } = parseArgs();
  if (!all && !slug) {
    console.error('Usage: --all | --slug <slug> [--model flux|turbo]');
    process.exit(1);
  }

  let topics = getAllTopicsWithPrompts();
  if (slug) topics = topics.filter((t) => t.slug === slug);
  fs.mkdirSync(coverDir, { recursive: true });

  let ok = 0;
  let fail = 0;

  for (const topic of topics) {
    const outPath = path.join(coverDir, `${topic.slug}-cover.jpg`);
    const url = buildImageUrl(topic.prompt, topic.seed, model);
    console.log(`\n[${topic.id}] ${topic.slug}`);
    console.log(`  Generating photoreal cover (seed ${topic.seed})...`);

    try {
      const raw = await fetchImage(url);
      const processed = await postProcess(raw);
      fs.writeFileSync(outPath, processed);
      console.log(`  ✓ ${outPath} (${Math.round(processed.length / 1024)} KB)`);
      ok += 1;
    } catch (e) {
      console.error(`  ✗ ${e.message}`);
      fail += 1;
    }
  }

  console.log(`\nDone: ${ok} ok, ${fail} failed`);
  if (fail) process.exitCode = 1;
  if (ok && !fail) {
    console.log('\nUpload to Sanity: npm run refresh:q2-covers');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
