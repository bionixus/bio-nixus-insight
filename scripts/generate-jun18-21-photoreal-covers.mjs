#!/usr/bin/env node
/**
 * Generate bespoke photoreal covers for Jun 18–21 Market Access articles.
 * One unique Pollinations prompt per article — not SVG templates.
 *
 * Run: node scripts/generate-jun18-21-photoreal-covers.mjs --all
 *      node scripts/generate-jun18-21-photoreal-covers.mjs --slug ema-hta-evidence-requirements-europe-2026
 *      node scripts/generate-jun18-21-photoreal-covers.mjs --all --force
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { getCoverSpecs } from './data/jun18-21-photoreal-cover-prompts.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const OUT_DIR = path.join(root, 'public/images/blog/jun18-21-market-access');
const MODEL = 'flux';
const DELAY_MS = 2500;

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    all: args.includes('--all'),
    slug: args.includes('--slug') ? args[args.indexOf('--slug') + 1] : null,
    force: args.includes('--force'),
    skip: new Set(
      (args.includes('--skip')
        ? args[args.indexOf('--skip') + 1]?.split(',').map((s) => s.trim()).filter(Boolean)
        : []) ?? [],
    ),
  };
}

function buildImageUrl(prompt, seed) {
  const encoded = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${encoded}?width=1600&height=900&seed=${seed}&model=${MODEL}&nologo=true&enhance=true`;
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

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchImage(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'BioNixus-Cover-Generator/1.0' },
    signal: AbortSignal.timeout(180000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) throw new Error('Response too small — likely not an image');
  return buf;
}

async function main() {
  const { all, slug, force, skip } = parseArgs();
  if (!all && !slug) {
    console.error('Usage: --all | --slug <slug> [--force] [--skip slug1,slug2]');
    process.exit(1);
  }

  let specs = getCoverSpecs(slug);
  if (skip.size) specs = specs.filter((s) => !skip.has(s.slug));

  fs.mkdirSync(OUT_DIR, { recursive: true });

  let ok = 0;
  let fail = 0;
  let skipped = 0;

  for (let i = 0; i < specs.length; i++) {
    const spec = specs[i];
    const outPath = path.join(OUT_DIR, `${spec.slug}-cover.jpg`);

    if (!force && fs.existsSync(outPath)) {
      console.log(`[${i + 1}/${specs.length}] skip (exists): ${spec.slug}`);
      skipped += 1;
      continue;
    }

    console.log(`\n[${i + 1}/${specs.length}] ${spec.slug}`);
    console.log(`  seed ${spec.seed}, generating photoreal cover...`);

    try {
      const raw = await fetchImage(buildImageUrl(spec.prompt, spec.seed));
      const processed = await postProcess(raw);
      fs.writeFileSync(outPath, processed);
      console.log(`  ✓ ${outPath} (${Math.round(processed.length / 1024)} KB)`);
      ok += 1;
    } catch (e) {
      console.error(`  ✗ ${e.message}`);
      fail += 1;
    }

    if (i < specs.length - 1) await sleep(DELAY_MS);
  }

  console.log(`\nDone: ${ok} generated, ${skipped} skipped, ${fail} failed`);
  if (fail) process.exitCode = 1;
  if (ok) console.log('\nUpload: node scripts/refresh-jun18-21-photoreal-covers.mjs --all');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
