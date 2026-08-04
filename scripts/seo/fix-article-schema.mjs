/**
 * Adds the required `image` to Article JSON-LD and a `url` to the nested
 * author/publisher Organization nodes.
 *
 * Google requires `image` for Article rich results; 74 report pages declared
 * Article without it, which failed rich-results validation sitewide.
 *
 * Usage: node scripts/seo/fix-article-schema.mjs [--dry]
 */
import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const DEFAULT_IMAGE = 'https://www.bionixus.com/og-image.png';
const ORG_URL = 'https://www.bionixus.com';
const dryRun = process.argv.includes('--dry');

const files = execSync(`rg -l "'@type': 'Article'" src --glob '*.tsx' --glob '*.ts'`, {
  encoding: 'utf8',
})
  .trim()
  .split('\n')
  .filter(Boolean);

/** Returns the index just past the object literal that starts at `start` ('{'). */
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

let changedFiles = 0;
let imagesAdded = 0;
let urlsAdded = 0;

for (const file of files) {
  const original = readFileSync(file, 'utf8');
  let text = original;
  let cursor = 0;

  while (true) {
    const marker = text.indexOf("'@type': 'Article'", cursor);
    if (marker === -1) break;

    const objectStart = text.lastIndexOf('{', marker);
    const objectEnd = endOfObject(text, objectStart);
    if (objectEnd === -1) break;

    let block = text.slice(objectStart, objectEnd + 1);
    const before = block;
    const indent = (block.match(/\n(\s+)'@type': 'Article'/) ?? [, '    '])[1];

    if (!/\n\s*image:/.test(block)) {
      block = block.replace(
        /(\n\s*'@type': 'Article',)/,
        `$1\n${indent}image: '${DEFAULT_IMAGE}',`,
      );
      imagesAdded += 1;
    }

    // Add url to author/publisher Organization nodes that lack it.
    block = block.replace(
      /((?:author|publisher):\s*\{[^{}]*?'@type':\s*'Organization',\s*name:\s*'[^']*',)(?![^{}]*\burl:)/g,
      (match) => {
        urlsAdded += 1;
        return `${match} url: '${ORG_URL}',`;
      },
    );

    text = text.slice(0, objectStart) + block + text.slice(objectEnd + 1);
    cursor = objectStart + block.length;
    if (block === before) cursor = marker + 20;
  }

  if (text !== original) {
    changedFiles += 1;
    if (!dryRun) writeFileSync(file, text);
  }
}

console.log(
  `${dryRun ? '[dry run] ' : ''}${changedFiles} files updated — ${imagesAdded} image fields, ${urlsAdded} Organization url fields.`,
);
