#!/usr/bin/env node
/**
 * Photoreal editorial cover for MENA & Europe healthcare MR firms blog post.
 * Run: node scripts/generate-mena-europe-mr-firms-cover.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  buildPollinationsUrl,
  fetchPollinationsImage,
  postProcessPhotorealCover,
  seedFromSlug,
} from './lib/generate-photoreal-blog-cover.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const SLUG = 'top-healthcare-market-research-firms-mena-europe';
const OUT = path.join(root, 'public/images/blog', `${SLUG}-cover.jpg`);

const PROMPT = [
  'Ultra-realistic editorial photograph, cinematic lighting, shallow depth of field,',
  'premium healthcare business magazine cover, 8k, no text, no logos, no watermark.',
  'Split-composition Gulf and European healthcare market research mood:',
  'left side Dubai and Riyadh skyline at golden hour with warm desert light,',
  'right side modern European cityscape with glass healthcare campus and river,',
  'foreground elegant conference table with blurred laptop showing anonymized charts,',
  'stethoscope, world map pin markers on MENA and Europe, professional pharma consulting aesthetic,',
  'navy blue and gold color grading, McKinsey-style corporate intelligence atmosphere.',
].join(' ');

async function main() {
  const seed = seedFromSlug(SLUG);
  const url = buildPollinationsUrl(PROMPT, seed, 'flux', { width: 1200, height: 630 });
  console.log('Fetching cover (flux, seed', seed, ')...');
  const raw = await fetchPollinationsImage(url);
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  const processed = await postProcessPhotorealCover(raw, { width: 1200, height: 630 });
  fs.writeFileSync(OUT, processed);
  console.log('Wrote', OUT, `(${(processed.length / 1024).toFixed(0)} KB)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
