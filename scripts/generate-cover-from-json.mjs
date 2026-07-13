#!/usr/bin/env node
/**
 * Generate a photoreal blog cover from a scripts/data/<slug>.json file's
 * `coverImagePrompt`, writing to public/images/blog/<slug>-cover.jpg.
 * Usage: node scripts/generate-cover-from-json.mjs <slug>
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  buildPollinationsUrl,
  seedFromSlug,
  fetchPollinationsImage,
  postProcessPhotorealCover,
} from './lib/generate-photoreal-blog-cover.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const slug = process.argv[2];
if (!slug) {
  console.error('Usage: node scripts/generate-cover-from-json.mjs <slug>');
  process.exit(1);
}

const dataPath = path.join(root, 'scripts/data', `${slug}.json`);
const outPath = path.join(root, 'public/images/blog', `${slug}-cover.jpg`);

async function main() {
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const prompt = data.coverImagePrompt;
  if (!prompt) throw new Error(`No coverImagePrompt in ${dataPath}`);

  const seed = seedFromSlug(slug);
  const url = buildPollinationsUrl(prompt, seed, 'flux', { width: 1600, height: 900 });
  console.log('Fetching cover from Pollinations (flux, seed', seed, ')...');
  const raw = await fetchPollinationsImage(url);
  const processed = await postProcessPhotorealCover(raw, { width: 1600, height: 900 });
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, processed);
  console.log('Wrote', outPath, `(${(processed.length / 1024).toFixed(0)} KB)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
