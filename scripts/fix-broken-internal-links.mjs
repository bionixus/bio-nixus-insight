#!/usr/bin/env node
/**
 * Batch-rewrite Ahrefs-flagged broken internal hrefs in static HTML sources.
 * Usage: node scripts/fix-broken-internal-links.mjs [--check]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizeInternalLinks } from './lib/blog-html-utils.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const checkOnly = process.argv.includes('--check');

const BROKEN_PATTERNS = [
  /market-reports\/gcc-pharma-market-report-2026/,
  /market-reports\/(saudi-arabia|uae|kuwait|egypt|qatar|china|europe|germany)-pharma-market-report-2026/,
  /href="\/blog[\s<]/,
  /href="\/gcc-(diabetes|biosimilars|digital-health|vaccines|neurology-cns|immunology-biologics|respiratory|rare-diseases)-market-report"/,
];

function walkHtml(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkHtml(full, out);
    else if (name.endsWith('.html')) out.push(full);
  }
  return out;
}

const dirs = [
  path.join(root, 'scripts/data/legacy-articles'),
  path.join(root, 'scripts/data/q2-2026-articles'),
].filter((d) => fs.existsSync(d));

const files = dirs.flatMap((d) => walkHtml(d));
let changed = 0;
let remaining = [];

for (const file of files) {
  const before = fs.readFileSync(file, 'utf8');
  const after = normalizeInternalLinks(before);
  const hits = BROKEN_PATTERNS.filter((re) => re.test(after));
  if (hits.length) remaining.push({ file, hits: hits.map(String) });
  if (after !== before) {
    changed += 1;
    if (!checkOnly) fs.writeFileSync(file, after);
  }
}

console.log(`${checkOnly ? 'Would update' : 'Updated'} ${changed} HTML file(s).`);
if (remaining.length) {
  console.log(`Remaining broken patterns in ${remaining.length} file(s):`);
  for (const { file, hits } of remaining) {
    console.log(`  ${path.relative(root, file)}: ${hits.join(', ')}`);
  }
  process.exit(1);
}
console.log('No remaining Ahrefs broken-link patterns in scripts/data HTML sources.');
