#!/usr/bin/env node
/**
 * Quarterly GEO asset refresh helper.
 *
 * - Stamps llms.txt / llms-full.txt with current quarter
 * - Validates markdown links in llms files against static routes in routes.tsx
 * - Regenerates public/sitemap.xml
 * - Prints a summary for Paperclip run comments
 *
 * Usage: node scripts/refresh-geo-assets.mjs [--dry-run] [--quarter 2026-Q2]
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const routesPath = join(root, 'src/routes.tsx');
const llmsPaths = [
  join(root, 'public/llms.txt'),
  join(root, 'public/llms-full.txt'),
];

const BASE = 'https://www.bionixus.com';
const dryRun = process.argv.includes('--dry-run');
const quarterArg = process.argv.find((a) => a.startsWith('--quarter='))?.split('=')[1];

function currentQuarterLabel(date = new Date()) {
  if (quarterArg) return quarterArg;
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const q = Math.ceil(month / 3);
  return `${year}-Q${q}`;
}

function stampLine(quarter) {
  const today = new Date().toISOString().slice(0, 10);
  return `# Last GEO refresh: ${quarter} (${today})`;
}

function upsertStamp(content, quarter) {
  const line = stampLine(quarter);
  const lines = content.split('\n');
  const stampIdx = lines.findIndex((l) => l.startsWith('# Last GEO refresh:'));
  if (stampIdx >= 0) {
    if (lines[stampIdx] === line) return { content, changed: false };
    lines[stampIdx] = line;
    return { content: lines.join('\n'), changed: true };
  }
  // Insert after first heading line (# BioNixus)
  const insertAt = lines[0]?.startsWith('#') ? 1 : 0;
  lines.splice(insertAt, 0, line, '');
  return { content: lines.join('\n'), changed: true };
}

function extractRoutes() {
  const src = readFileSync(routesPath, 'utf8');
  const paths = new Set();
  for (const m of src.matchAll(/\{\s*path:\s*'([^']+)'/g)) {
    const p = m[1];
    if (!p.includes(':') && !p.includes('*')) paths.add(p);
  }
  return paths;
}

function extractLlmsUrls(content) {
  const urls = [];
  for (const m of content.matchAll(/\]\((https:\/\/www\.bionixus\.com[^)]+)\)/g)) {
    urls.push(m[1]);
  }
  return urls;
}

function pathFromUrl(url) {
  try {
    return new URL(url).pathname.replace(/\/$/, '') || '/';
  } catch {
    return null;
  }
}

function main() {
  const quarter = currentQuarterLabel();
  console.log(`\n=== GEO refresh helper (${quarter})${dryRun ? ' [DRY RUN]' : ''} ===\n`);

  const routes = extractRoutes();
  const stampChanges = [];

  for (const file of llmsPaths) {
    if (!existsSync(file)) {
      console.warn(`SKIP missing: ${file}`);
      continue;
    }
    const before = readFileSync(file, 'utf8');
    const { content: after, changed } = upsertStamp(before, quarter);
    if (changed) {
      stampChanges.push(file);
      if (!dryRun) writeFileSync(file, after, 'utf8');
      console.log(`${dryRun ? 'WOULD UPDATE' : 'UPDATED'} stamp in ${file.replace(root + '/', '')}`);
    } else {
      console.log(`OK stamp current in ${file.replace(root + '/', '')}`);
    }
  }

  const llmsTxt = readFileSync(llmsPaths[0], 'utf8');
  const llmsUrls = [...new Set(extractLlmsUrls(llmsTxt))];
  const missingRoutes = [];
  const redirectOnly = [];

  for (const url of llmsUrls) {
    const p = pathFromUrl(url);
    if (!p) continue;
    if (routes.has(p)) continue;
    // Allow blog/case-study paths not in static routes (Sanity-driven)
    if (p.startsWith('/blog/') || p.startsWith('/case-studies/')) continue;
    missingRoutes.push({ url, path: p });
  }

  console.log(`\nllms.txt links checked: ${llmsUrls.length}`);
  if (missingRoutes.length) {
    console.log('\nWARN — paths in llms.txt not found in routes.tsx (may be redirects or dynamic):');
    for (const { url, path: p } of missingRoutes) {
      console.log(`  - ${p}  (${url})`);
    }
  } else {
    console.log('All static llms.txt paths resolve in routes.tsx (or are dynamic blog/case-study).');
  }

  if (!dryRun) {
    console.log('\nRegenerating sitemap...');
    execSync('node scripts/generate-sitemap.mjs', { cwd: root, stdio: 'inherit' });
  } else {
    console.log('\nDRY RUN — skipping sitemap regeneration');
  }

  console.log('\n--- Summary for Paperclip comment ---');
  console.log(`Quarter: ${quarter}`);
  console.log(`Stamp files changed: ${stampChanges.length ? stampChanges.map((f) => f.replace(root + '/', '')).join(', ') : 'none'}`);
  console.log(`llms.txt URL count: ${llmsUrls.length}`);
  console.log(`Unresolved static paths: ${missingRoutes.length}`);
  console.log('Next: CMO content sign-off → PR → deploy → AI citation spot-check\n');
}

main();
