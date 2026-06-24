#!/usr/bin/env node
/**
 * Bulk IndexNow submit from public/sitemap.xml or a URL list file.
 *
 * Usage:
 *   node scripts/submit-indexnow-batch.mjs                    # full sitemap
 *   node scripts/submit-indexnow-batch.mjs --file scripts/gsc-priority-recrawl.txt
 *   node scripts/submit-indexnow-batch.mjs --limit 50         # first N URLs only
 */
import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { parseSitemapLocs, submitToIndexNow } from './lib/indexnow-submit.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function parseArgs() {
  const args = process.argv.slice(2);
  let file = join(root, 'public', 'sitemap.xml');
  let limit = Infinity;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--file' && args[i + 1]) file = args[++i].startsWith('/') ? args[i] : join(root, args[i]);
    if (args[i] === '--limit' && args[i + 1]) limit = Number(args[++i]);
  }
  return { file, limit };
}

function urlsFromFile(path) {
  const raw = readFileSync(path, 'utf8');
  if (path.endsWith('.xml')) return parseSitemapLocs(raw);
  return raw
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#') && l.startsWith('http'));
}

async function main() {
  const { file, limit } = parseArgs();
  if (!existsSync(file)) {
    console.error(`File not found: ${file}`);
    process.exit(1);
  }

  let urls = urlsFromFile(file);
  if (Number.isFinite(limit) && limit > 0) urls = urls.slice(0, limit);

  console.log(`IndexNow: submitting ${urls.length} URL(s) from ${file}`);
  const result = await submitToIndexNow(urls);

  if (!result.ok) {
    console.error('IndexNow failed:', result.error);
    process.exit(1);
  }

  console.log(`IndexNow OK: ${result.submitted} URL(s) in ${result.batches} batch(es)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
