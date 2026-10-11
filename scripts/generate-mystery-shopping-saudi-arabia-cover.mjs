#!/usr/bin/env node
/**
 * Branded 1200×630 cover for mystery-shopping-companies-saudi-arabia-2026.
 * Original vector illustration in the BioNixus navy/gold cover palette: a shopfront,
 * a visit scorecard, a magnifier and west-to-east visit pins for Jeddah, Riyadh and
 * Dammam. No people and no third-party marks.
 *
 * Run: node scripts/generate-mystery-shopping-saudi-arabia-cover.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { escapeXml } from './lib/q2-cover-layouts.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const SLUG = 'mystery-shopping-companies-saudi-arabia-2026';
const outPath = path.join(root, 'public/images/blog', `${SLUG}-cover.jpg`);

const NAVY_DEEP = '#0b1324';
const NAVY = '#15233f';
const NAVY_CARD = '#1f3a64';
const GOLD = '#c9a227';
const GOLD_LIGHT = '#e8d48a';
const CREAM = '#f8f6f1';
const MUTED = '#9eb0c8';
const SLATE = '#5a6d85';
const SERIF = "'Noto Serif Display', 'Noto Serif', Georgia, serif";
const SANS = "Inter, 'Source Sans 3', 'Liberation Sans', Helvetica, Arial, sans-serif";

function pin(x, y, label) {
  return `
    <g transform="translate(${x} ${y})">
      <path d="M0 0 C-14 -18 -16 -26 -16 -32 A16 16 0 1 1 16 -32 C16 -26 14 -18 0 0 Z" fill="${GOLD}" />
      <circle cx="0" cy="-32" r="6" fill="${NAVY_DEEP}" />
      <text x="0" y="30" text-anchor="middle" fill="${CREAM}" font-family="${SANS}" font-size="15" font-weight="600">${escapeXml(label)}</text>
    </g>`;
}

function awningStripes(x, y, width, height, count) {
  const stripe = width / count;
  let out = '';
  for (let i = 0; i < count; i += 1) {
    const sx = x + i * stripe;
    const fill = i % 2 === 0 ? GOLD : CREAM;
    const opacity = i % 2 === 0 ? 0.85 : 0.18;
    out += `<rect x="${sx}" y="${y}" width="${stripe}" height="${height}" fill="${fill}" fill-opacity="${opacity}" />`;
    out += `<path d="M${sx} ${y + height} a${stripe / 2} ${stripe / 3} 0 0 0 ${stripe} 0 Z" fill="${fill}" fill-opacity="${opacity}" />`;
  }
  return out;
}

function scorecardRow(x, y, passed, barWidth) {
  const icon = passed
    ? `<circle cx="${x}" cy="${y}" r="11" fill="${GOLD}" /><path d="M${x - 5} ${y} l3.5 4 l6.5 -8" stroke="${NAVY_DEEP}" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round" />`
    : `<circle cx="${x}" cy="${y}" r="11" fill="none" stroke="#c98a7a" stroke-width="2.4" /><path d="M${x - 4} ${y - 4} l8 8 M${x + 4} ${y - 4} l-8 8" stroke="#c98a7a" stroke-width="2.4" stroke-linecap="round" />`;
  return `${icon}<rect x="${x + 22}" y="${y - 5}" width="${barWidth}" height="10" rx="5" fill="${NAVY_CARD}" fill-opacity="0.22" />`;
}

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${NAVY_DEEP}" />
      <stop offset="100%" stop-color="${NAVY}" />
    </linearGradient>
    <radialGradient id="glow" cx="18%" cy="16%" r="55%">
      <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.22" />
      <stop offset="100%" stop-color="${GOLD}" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="goldBar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${GOLD}" />
      <stop offset="50%" stop-color="${GOLD_LIGHT}" />
      <stop offset="100%" stop-color="${GOLD}" />
    </linearGradient>
    <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.3" fill="${CREAM}" fill-opacity="0.07" />
    </pattern>
    <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000" flood-opacity="0.45" />
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />
  <rect width="1200" height="630" fill="url(#glow)" />
  <rect x="660" y="0" width="540" height="630" fill="url(#dots)" />
  <rect x="0" y="0" width="1200" height="4" fill="url(#goldBar)" />

  <!-- Copy -->
  <rect x="56" y="58" width="300" height="28" rx="4" fill="${GOLD}" fill-opacity="0.12" stroke="${GOLD}" stroke-width="1" />
  <text x="70" y="77" fill="${GOLD}" font-family="${SANS}" font-size="12" font-weight="700" letter-spacing="1.7">INDUSTRY INSIGHTS · RETAIL &amp; CX</text>
  <text x="56" y="124" fill="${GOLD}" font-family="${SERIF}" font-size="21" font-weight="700">BioNixus Industry Insights</text>
  <rect x="56" y="144" width="246" height="32" rx="6" fill="${NAVY_CARD}" filter="url(#cardShadow)" />
  <text x="72" y="166" fill="#ffffff" font-family="${SANS}" font-size="13" font-weight="700" letter-spacing="0.8">SAUDI ARABIA · 2026 GUIDE</text>

  <text x="56" y="262" fill="${CREAM}" font-family="${SERIF}" font-size="58" font-weight="700" letter-spacing="-0.5">Mystery Shopping</text>
  <text x="56" y="330" fill="${CREAM}" font-family="${SERIF}" font-size="58" font-weight="700" letter-spacing="-0.5">in Saudi Arabia</text>
  <text x="56" y="384" fill="${MUTED}" font-family="${SANS}" font-size="22" font-weight="500">How to run a programme that holds up</text>
  <text x="56" y="420" fill="${GOLD_LIGHT}" font-family="${SANS}" font-size="17" font-weight="600">PDPL-aware design · visits per outlet · scorecards</text>

  <rect x="56" y="520" width="56" height="3" fill="${GOLD}" />
  <text x="56" y="552" fill="${GOLD_LIGHT}" font-family="${SANS}" font-size="17" font-weight="600">bionixus.com</text>
  <text x="56" y="584" fill="${SLATE}" font-family="${SANS}" font-size="13" letter-spacing="1.3">SAUDI ARABIA · GCC · CUSTOMER EXPERIENCE RESEARCH</text>

  <!-- Visit route, west to east -->
  <path d="M722 128 Q803 138 885 116 Q968 124 1052 112" stroke="${GOLD_LIGHT}" stroke-opacity="0.7" stroke-width="2.5" stroke-dasharray="7 8" fill="none" />
  ${pin(722, 128, 'Jeddah')}
  ${pin(885, 116, 'Riyadh')}
  ${pin(1052, 112, 'Dammam')}

  <!-- Shopfront -->
  <rect x="742" y="200" width="246" height="34" rx="5" fill="${GOLD}" fill-opacity="0.14" stroke="${GOLD}" stroke-opacity="0.8" stroke-width="1.5" />
  <rect x="790" y="213" width="70" height="8" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.75" />
  <rect x="870" y="213" width="70" height="8" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.35" />
  ${awningStripes(712, 242, 306, 34, 9)}
  <rect x="724" y="276" width="282" height="214" rx="4" fill="${CREAM}" fill-opacity="0.05" stroke="${GOLD_LIGHT}" stroke-opacity="0.55" stroke-width="2" />
  <rect x="744" y="300" width="86" height="96" rx="3" fill="${NAVY_CARD}" fill-opacity="0.55" stroke="${GOLD_LIGHT}" stroke-opacity="0.5" stroke-width="1.5" />
  <line x1="744" y1="348" x2="830" y2="348" stroke="${GOLD_LIGHT}" stroke-opacity="0.45" stroke-width="1.5" />
  <rect x="754" y="326" width="16" height="20" rx="2" fill="${GOLD}" fill-opacity="0.7" />
  <rect x="776" y="320" width="16" height="26" rx="2" fill="${MUTED}" fill-opacity="0.6" />
  <rect x="798" y="330" width="22" height="16" rx="2" fill="${CREAM}" fill-opacity="0.45" />
  <rect x="756" y="368" width="20" height="26" rx="2" fill="${MUTED}" fill-opacity="0.5" />
  <rect x="782" y="374" width="16" height="20" rx="2" fill="${GOLD}" fill-opacity="0.55" />
  <rect x="846" y="318" width="64" height="172" rx="3" fill="${NAVY_DEEP}" fill-opacity="0.6" stroke="${GOLD_LIGHT}" stroke-opacity="0.55" stroke-width="1.5" />
  <circle cx="898" cy="408" r="4" fill="${GOLD_LIGHT}" />

  <!-- Magnifier -->
  <circle cx="742" cy="514" r="40" fill="${GOLD_LIGHT}" fill-opacity="0.08" stroke="${GOLD_LIGHT}" stroke-width="7" />
  <line x1="713" y1="543" x2="684" y2="574" stroke="${GOLD_LIGHT}" stroke-width="11" stroke-linecap="round" />
  <path d="M724 500 a22 22 0 0 1 22 -16" stroke="${CREAM}" stroke-opacity="0.55" stroke-width="3" fill="none" stroke-linecap="round" />

  <!-- Visit scorecard -->
  <g filter="url(#cardShadow)">
    <rect x="944" y="300" width="208" height="262" rx="16" fill="${CREAM}" />
  </g>
  <rect x="944" y="300" width="208" height="46" rx="16" fill="${NAVY_CARD}" />
  <rect x="944" y="330" width="208" height="16" fill="${NAVY_CARD}" />
  <text x="964" y="329" fill="#ffffff" font-family="${SANS}" font-size="12" font-weight="700" letter-spacing="1.6">VISIT SCORECARD</text>
  ${scorecardRow(972, 376, true, 140)}
  ${scorecardRow(972, 414, true, 118)}
  ${scorecardRow(972, 452, false, 128)}
  ${scorecardRow(972, 490, true, 104)}
  <circle cx="972" cy="530" r="11" fill="none" stroke="${NAVY_CARD}" stroke-width="2.4" />
  <path d="M972 523 v7 l5 4" stroke="${NAVY_CARD}" stroke-width="2.4" fill="none" stroke-linecap="round" />
  <rect x="994" y="525" width="86" height="10" rx="5" fill="${GOLD}" fill-opacity="0.65" />
</svg>`;

async function main() {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  await sharp(Buffer.from(svg))
    .resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 90, progressive: true, mozjpeg: true })
    .toFile(outPath);
  const meta = await sharp(outPath).metadata();
  console.log(`Cover saved: ${outPath} (${meta.width}×${meta.height}, ${fs.statSync(outPath).size} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
