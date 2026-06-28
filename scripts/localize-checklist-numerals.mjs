#!/usr/bin/env node
/** Post-process checklist CSV: zh → Chinese numerals, ar → Arabic-Indic digits + بيونكسس */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { toChineseNumerals, toArabicIndicDigits } from './lib/checklist-numerals.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const csvPath = join(__dirname, 'data/home-hardcoded-i18n-checklist-v2.csv');

function parseCsvLine(line) {
  const parts = [];
  let cur = '';
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQ && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else inQ = !inQ;
    } else if (c === ',' && !inQ) {
      parts.push(cur);
      cur = '';
    } else cur += c;
  }
  parts.push(cur);
  return parts;
}

function esc(v) {
  const s = String(v);
  if (s.includes(',') || s.includes('"') || s.includes('\n')) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export function applyNumeralLocalization(content) {
  const raw = content.trim().split('\n');
  const header = raw[0];
  const cols = header.split(',');
  const zhIdx = cols.indexOf('zh');
  const arIdx = cols.indexOf('ar');

  const out = [header];
  for (const line of raw.slice(1)) {
    const p = parseCsvLine(line);
    if (p.length > zhIdx) p[zhIdx] = toChineseNumerals(p[zhIdx]);
    if (p.length > arIdx) p[arIdx] = toArabicIndicDigits(p[arIdx]);
    out.push(p.map(esc).join(','));
  }
  return out.join('\n') + '\n';
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  const localized = applyNumeralLocalization(readFileSync(csvPath, 'utf8'));
  writeFileSync(csvPath, localized);
  console.log('Localized zh numerals + ar digits/BioNixus in', csvPath);
}
