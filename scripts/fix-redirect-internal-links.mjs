#!/usr/bin/env node
/**
 * Batch-rewrite internal hrefs that point at 301 redirect URLs.
 * Uses REDIRECT_HREF_REWRITES from blog-legacy-redirects.mjs (same map as fixBrokenInternalHrefs.ts).
 *
 * Usage:
 *   node scripts/fix-redirect-internal-links.mjs [glob-root]
 * Default root: scripts/data/legacy-articles
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fixBrokenInternalHrefsInHtml } from './lib/blog-html-utils.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(__dirname, 'data/legacy-articles');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (entry.isFile() && /\.html?$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

const htmlFiles = walk(root);
let changed = 0;

for (const file of htmlFiles) {
  const before = fs.readFileSync(file, 'utf8');
  const after = fixBrokenInternalHrefsInHtml(before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed += 1;
    console.log('updated', path.relative(process.cwd(), file));
  }
}

console.log(`Done. ${changed} file(s) updated under ${root}.`);
