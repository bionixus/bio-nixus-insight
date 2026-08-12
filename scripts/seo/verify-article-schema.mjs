/**
 * Reports Article JSON-LD blocks that would fail Google rich-results validation:
 * a missing `image`, or an author/publisher Organization without `url`.
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { collectSourceFiles } from './source-files.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
// Test fixtures intentionally construct incomplete Article literals to verify
// the SEOHead backfill logic fills in the missing fields -- they are not real
// page output, so they would be permanent false positives here.
const files = [...collectSourceFiles(join(root, 'src'))].filter(
  (file) => !/__tests__|\.test\.tsx?$/.test(file) && readFileSync(file, 'utf8').includes("'@type': 'Article'"),
);

function endOfObject(text, start) {
  let depth = 0;
  for (let i = start; i < text.length; i += 1) {
    if (text[i] === '{') depth += 1;
    else if (text[i] === '}') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

const missingImage = [];
const missingOrgUrl = [];

for (const file of files) {
  const text = readFileSync(file, 'utf8');
  let cursor = 0;
  while (true) {
    const marker = text.indexOf("'@type': 'Article'", cursor);
    if (marker === -1) break;
    const start = text.lastIndexOf('{', marker);
    const end = endOfObject(text, start);
    if (end === -1) break;
    const block = text.slice(start, end + 1);

    if (!/\n\s*image:/.test(block) && !/\bimage:/.test(block)) missingImage.push(file);

    for (const match of block.matchAll(/(author|publisher):\s*\{/g)) {
      const orgStart = start + match.index + match[0].length - 1;
      const orgEnd = endOfObject(text, orgStart);
      const org = text.slice(orgStart, orgEnd + 1);
      // An '@id' reference points at the canonical Organization node, so it does
      // not need to repeat url.
      const identified = /'@id':/.test(org) || /\burl:/.test(org);
      if (/'@type':\s*'Organization'/.test(org) && !identified) {
        missingOrgUrl.push(`${file} (${match[1]})`);
      }
    }
    cursor = end + 1;
  }
}

console.log(`Article blocks missing image: ${missingImage.length}`);
for (const file of [...new Set(missingImage)]) console.log(`  - ${file}`);
console.log(`author/publisher Organization missing url: ${missingOrgUrl.length}`);
for (const entry of [...new Set(missingOrgUrl)].slice(0, 20)) console.log(`  - ${entry}`);

if (missingImage.length > 0 || missingOrgUrl.length > 0) process.exit(1);
console.log('Article schema OK.');
