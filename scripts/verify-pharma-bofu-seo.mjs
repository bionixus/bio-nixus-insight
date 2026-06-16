#!/usr/bin/env node
/**
 * Verifies GCC pharma country BOFU pages include SSR-critical SEO elements:
 * exact-match H1, PharmaCompaniesQuickAnswer, and ItemList JSON-LD.
 *
 * Usage: node scripts/verify-pharma-bofu-seo.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const BOFU_PAGES = [
  { file: 'src/pages/KuwaitPharmaCompanies.tsx', h1: 'Pharmaceutical companies in Kuwait' },
  { file: 'src/pages/OmanPharmaCompanies.tsx', h1: 'Pharmaceutical Companies in Oman' },
  { file: 'src/pages/QatarPharmaCompanies.tsx', h1: 'Pharmaceutical Companies in Qatar' },
  { file: 'src/pages/BahrainPharmaCompanies.tsx', h1: 'Pharmaceutical Companies in Bahrain' },
  { file: 'src/pages/UaePharmaCompanies.tsx', h1: 'Pharmaceutical Companies in the UAE' },
  { file: 'src/pages/SaudiPharmaCompanies.tsx', h1: 'Pharmaceutical Companies in Saudi Arabia' },
  { file: 'src/pages/EgyptPharmaCompanies.tsx', h1: 'Pharmaceutical Companies in Egypt' },
  { file: 'src/pages/IranPharmaCompanies.tsx', h1: 'Pharmaceutical Companies in Iran' },
];

const REQUIRED_PATTERNS = [
  { id: 'quickAnswer', pattern: 'PharmaCompaniesQuickAnswer' },
  { id: 'itemList', pattern: /ItemList|buildPharmaCompaniesItemListLd/ },
];

let failed = false;

for (const page of BOFU_PAGES) {
  const abs = path.join(root, page.file);
  if (!fs.existsSync(abs)) {
    console.error(`MISSING FILE: ${page.file}`);
    failed = true;
    continue;
  }
  const src = fs.readFileSync(abs, 'utf8');
  const label = page.file.replace('src/pages/', '');

  if (!src.includes(page.h1)) {
    console.error(`FAIL ${label}: missing H1 text "${page.h1}"`);
    failed = true;
  }

  for (const req of REQUIRED_PATTERNS) {
    const ok =
      req.pattern instanceof RegExp ? req.pattern.test(src) : src.includes(req.pattern);
    if (!ok) {
      console.error(`FAIL ${label}: missing ${req.id}`);
      failed = true;
    }
  }

  if (
    src.includes(page.h1) &&
    REQUIRED_PATTERNS.every((r) =>
      r.pattern instanceof RegExp ? r.pattern.test(src) : src.includes(r.pattern),
    )
  ) {
    console.log(`OK   ${label}`);
  }
}

if (failed) {
  console.error('\nPharma BOFU SEO verification failed.');
  process.exit(1);
}

console.log('\nAll 8 pharma BOFU pages passed SSR SEO element checks.');
