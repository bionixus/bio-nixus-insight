/**
 * In-content figures for the article-waves posts (src/data/articleWaves).
 * Original charts drawn only from each article's cited public figures.
 * No people, logos, client names, or uncited numbers.
 * WebP, under the 120 KB in-content budget.
 *
 *   node scripts/generate-wave-article-figures.mjs              # every slug below
 *   node scripts/generate-wave-article-figures.mjs <slug> ...   # selected slugs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog');

const NAVY = '#101C30';
const NAVY_MID = '#22345A';
const GOLD = '#F5A503';
const CREAM = '#F7F4EE';
const INK = '#243044';
const MUTED = '#5C6B82';
const TRACK = '#E7E1D6';
const CARD = '#FFFCF7';
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Inter, 'Helvetica Neue', Arial, sans-serif";

const W = 800;

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function frame({ height, title, footer, body }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${height}" viewBox="0 0 ${W} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${height}" fill="${CREAM}"/>
  <rect width="${W}" height="8" fill="${GOLD}"/>
  <text x="40" y="68" fill="${NAVY}" font-family="${SERIF}" font-size="30" font-weight="700">${esc(title)}</text>
  ${body}
  <text x="40" y="${height - 28}" fill="${GOLD}" font-family="${SERIF}" font-size="20" font-weight="700">BioNixus</text>
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">${esc(footer)}</text>
</svg>`;
}

function barRow({ y, label, valueLabel, value, max, tone = 'navy' }) {
  const maxWidth = W - 80;
  const width = Math.max(18, Math.round((value / max) * maxWidth));
  const fill = tone === 'gold' ? GOLD : NAVY_MID;
  return `
    <text x="40" y="${y}" fill="${INK}" font-family="${SANS}" font-size="22" font-weight="600">${esc(label)}</text>
    <text x="${W - 40}" y="${y}" fill="${NAVY}" font-family="${SERIF}" font-size="28" font-weight="700" text-anchor="end">${esc(valueLabel)}</text>
    <rect x="40" y="${y + 16}" width="${maxWidth}" height="26" rx="13" fill="${TRACK}"/>
    <rect x="40" y="${y + 16}" width="${width}" height="26" rx="13" fill="${fill}"/>`;
}

function card({ x, y, w, h, heading, lines, tone = 'navy' }) {
  const accent = tone === 'gold' ? GOLD : NAVY_MID;
  const text = lines
    .map(
      (line, i) =>
        `<text x="${x + 24}" y="${y + 78 + i * 30}" fill="${INK}" font-family="${SANS}" font-size="19">${esc(line)}</text>`,
    )
    .join('');
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="${CARD}" stroke="${TRACK}" stroke-width="2"/>
    <rect x="${x}" y="${y}" width="8" height="${h}" rx="4" fill="${accent}"/>
    <text x="${x + 24}" y="${y + 42}" fill="${NAVY}" font-family="${SERIF}" font-size="23" font-weight="700">${esc(heading)}</text>
    ${text}`;
}

function arrowDown(x, y) {
  return `<path d="M ${x} ${y} V ${y + 22}" stroke="${GOLD}" stroke-width="4"/>
    <polygon points="${x - 9},${y + 20} ${x},${y + 34} ${x + 9},${y + 20}" fill="${GOLD}"/>`;
}

const FIGURES = {
  'kuwait-drug-pricing-2026-decision-62': [
    {
      file: 'kuwait-drug-pricing-2026-decision-62-chain.webp',
      height: 580,
      title: 'One ceiling price, built step by step',
      footer: 'Kuwait Ministerial Decision 62/2026 · FrontierView summary',
      body: `
        ${card({ x: 40, y: 104, w: 720, h: 92, heading: 'Ex-factory or CIF price', lines: ['Checked against GCC and global prices'], tone: 'gold' })}
        ${arrowDown(400, 204)}
        ${card({ x: 40, y: 246, w: 720, h: 92, heading: 'Wholesale price', lines: ['Capped wholesaler margin added'] })}
        ${arrowDown(400, 346)}
        ${card({ x: 40, y: 388, w: 720, h: 92, heading: 'Approved retail ceiling', lines: ['Capped pharmacy margin; no private sale before pricing'], tone: 'gold' })}`,
    },
    {
      file: 'kuwait-drug-pricing-2026-decision-62-clocks.webp',
      height: 620,
      title: 'Initial assessment clocks, working days',
      footer: 'Kuwait Ministerial Decision 342/2025 registration framework',
      body: `
        ${barRow({ y: 128, label: 'Standard pathway', valueLabel: '90', value: 90, max: 90, tone: 'navy' })}
        ${barRow({ y: 232, label: 'Biosimilar', valueLabel: '60', value: 60, max: 90, tone: 'navy' })}
        ${barRow({ y: 336, label: 'Fast track', valueLabel: '30', value: 30, max: 90, tone: 'gold' })}
        ${barRow({ y: 440, label: 'Gulf Health Council route', valueLabel: '30', value: 30, max: 90, tone: 'gold' })}
        <text x="40" y="540" fill="${MUTED}" font-family="${SANS}" font-size="20">A fast-track request itself is decided within 10 working days.</text>`,
    },
  ],
  'uae-pharmacovigilance-requirements-2026': [
    {
      file: 'uae-pharmacovigilance-requirements-2026-two-changes.webp',
      height: 600,
      title: 'Cheaper to distribute, stricter to monitor',
      footer: 'Emirates Drug Establishment · 2026',
      body: `
        ${card({ x: 40, y: 104, w: 340, h: 380, heading: '3PL storage model', lines: ['July 2026', 'First third-party', 'logistics storage', 'model in the UAE', 'EDE accepting', 'licence applications', 'No resolution number yet'], tone: 'gold' })}
        ${card({ x: 420, y: 104, w: 340, h: 380, heading: 'Pharmacovigilance', lines: ['October 2026', 'QPPV and deputy approval', 'Risk-management plans', 'PSMF and national file', 'PSURs and reporting', 'Patient programmes', 'Transition period'] })}`,
    },
    {
      file: 'uae-pharmacovigilance-requirements-2026-timeline.webp',
      height: 600,
      title: 'Four UAE regulator moves in 2026',
      footer: 'WAM · Gulf News · Mubadala Bio',
      body: `
        <path d="M 120 120 V 470" stroke="${TRACK}" stroke-width="6"/>
        ${[
          ['30 May', 'Price cuts on 168 medicines take effect', GOLD],
          ['29 Jul', '3PL storage model announced', NAVY_MID],
          ['7 Oct', 'Pharmacovigilance guideline briefing', GOLD],
          ['20 Oct', 'Lilly and Mubadala Bio local packaging deal', NAVY_MID],
        ]
          .map(
            ([date, label, fill], i) => `
          <circle cx="120" cy="${140 + i * 106}" r="16" fill="${fill}"/>
          <text x="40" y="${148 + i * 106}" fill="${NAVY}" font-family="${SERIF}" font-size="20" font-weight="700" text-anchor="start">${esc(date.split(' ')[0])}</text>
          <text x="40" y="${172 + i * 106}" fill="${MUTED}" font-family="${SANS}" font-size="16">${esc(date.split(' ')[1])}</text>
          <text x="160" y="${148 + i * 106}" fill="${INK}" font-family="${SANS}" font-size="22" font-weight="600">${esc(label)}</text>`,
          )
          .join('')}`,
    },
  ],
  'japanese-pharmaceutical-companies-middle-east-entry': [
    {
      file: 'japanese-pharmaceutical-companies-middle-east-entry-routes.webp',
      height: 500,
      title: 'Two routes into the Gulf',
      footer: 'Kyorin, January 2026 · Sysmex, December 2025',
      body: `
        ${card({ x: 40, y: 104, w: 340, h: 300, heading: 'Partner route', lines: ['Kyorin Pharmaceutical', 'Exclusive deal with', 'Lunatus for Lasvic', 'Nine countries', 'Partner covers regulatory', 'work, marketing, sales', 'and distribution'], tone: 'gold' })}
        ${card({ x: 420, y: 104, w: 340, h: 300, heading: 'Build route', lines: ['Sysmex', 'Saudi affiliate', 'Regional headquarters', 'in Riyadh', 'MoU for a local', 'reagent factory', ''] })}`,
    },
    {
      file: 'japanese-pharmaceutical-companies-middle-east-entry-saudi-footprint.webp',
      height: 580,
      title: 'Japanese companies in Saudi Arabia, 2025',
      footer: 'Arab News, September 2025 · all sectors',
      body: `
        ${barRow({ y: 128, label: 'Operating in Riyadh', valueLabel: '82', value: 82, max: 82, tone: 'gold' })}
        ${barRow({ y: 248, label: 'Operating in Jeddah', valueLabel: '36', value: 36, max: 82, tone: 'navy' })}
        ${barRow({ y: 368, label: 'Regional headquarters', valueLabel: '18', value: 18, max: 82, tone: 'navy' })}
        <text x="40" y="470" fill="${MUTED}" font-family="${SANS}" font-size="20">Counts cover every sector, not only healthcare.</text>`,
    },
  ],
  'mental-health-market-research-saudi-arabia': [
    {
      file: 'mental-health-market-research-saudi-arabia-treatment-gap.webp',
      height: 600,
      title: 'People with a disorder who got no care',
      footer: 'Saudi National Mental Health Survey 2013–2016 · LJMH 2026',
      body: `
        ${barRow({ y: 128, label: 'Saudi Arabia', valueLabel: '86.1%', value: 86.1, max: 100, tone: 'gold' })}
        ${barRow({ y: 228, label: 'USA', valueLabel: '55%', value: 55, max: 100, tone: 'navy' })}
        ${barRow({ y: 328, label: 'Western Europe', valueLabel: '50%', value: 50, max: 100, tone: 'navy' })}
        ${barRow({ y: 428, label: 'High-income country median', valueLabel: '50%', value: 50, max: 100, tone: 'navy' })}
        <text x="40" y="530" fill="${MUTED}" font-family="${SANS}" font-size="19">Share of people with a 12-month disorder who used no services.</text>`,
    },
    {
      file: 'mental-health-market-research-saudi-arabia-telepsychiatry.webp',
      height: 620,
      title: 'Telepsychiatry among 500 Saudi providers',
      footer: 'Frontiers in Psychiatry, May 2025 · online survey',
      body: `
        <text x="40" y="128" fill="${INK}" font-family="${SANS}" font-size="22" font-weight="600">500 surveyed  ·  369 aware (73.8%)  ·  235 had practised</text>
        ${barRow({ y: 200, label: 'Perceived patient access', valueLabel: '75.2%', value: 75.2, max: 100, tone: 'gold' })}
        ${barRow({ y: 300, label: 'Practice satisfaction', valueLabel: '57.6%', value: 57.6, max: 100, tone: 'navy' })}
        ${barRow({ y: 400, label: 'Provider access to systems', valueLabel: '46.6%', value: 46.6, max: 100, tone: 'navy' })}
        <text x="40" y="510" fill="${MUTED}" font-family="${SANS}" font-size="19">Mean domain scores, percent. Only 12.6% of respondents were consultants.</text>`,
    },
  ],
  'market-entry-research-singapore-southeast-asia': [
    {
      file: 'market-entry-research-singapore-southeast-asia-october-signals.webp',
      height: 620,
      title: 'October 2026: five Southeast Asia signals',
      footer: 'EDB · Horizon3 · DFAT · CNA',
      body: `
        <path d="M 120 120 V 520" stroke="${TRACK}" stroke-width="6"/>
        ${[
          ['2 Oct', 'Pandora opens Asia headquarters in Singapore', GOLD],
          ['8 Oct', 'Revolut commits nearly S$350m to Singapore', NAVY_MID],
          ['16 Oct', 'Indonesia delays import halal rule to 2028', GOLD],
          ['19 Oct', 'Horizon3 sets up ASEAN headquarters', NAVY_MID],
          ['Nov', 'ASEAN DEFA signing planned in Manila', GOLD],
        ]
          .map(
            ([date, label, fill], i) => `
          <circle cx="120" cy="${140 + i * 92}" r="16" fill="${fill}"/>
          <text x="40" y="${148 + i * 92}" fill="${NAVY}" font-family="${SERIF}" font-size="20" font-weight="700">${esc(date.split(' ')[0])}</text>
          <text x="40" y="${172 + i * 92}" fill="${MUTED}" font-family="${SANS}" font-size="16">${esc(date.split(' ')[1] ?? '')}</text>
          <text x="160" y="${148 + i * 92}" fill="${INK}" font-family="${SANS}" font-size="22" font-weight="600">${esc(label)}</text>`,
          )
          .join('')}`,
    },
    {
      file: 'market-entry-research-singapore-southeast-asia-indonesia-halal-dates.webp',
      height: 620,
      title: 'Indonesia halal certification deadlines',
      footer: 'DFAT summary of Government Regulation 40/2026',
      body: `
        ${barRow({ y: 128, label: 'Food, drink, cosmetics, supplements', valueLabel: '2028', value: 2, max: 13, tone: 'gold' })}
        ${barRow({ y: 228, label: 'OTC medicines, class B devices', valueLabel: '2029', value: 3, max: 13, tone: 'navy' })}
        ${barRow({ y: 328, label: 'Prescription medicines, class C devices', valueLabel: '2034', value: 8, max: 13, tone: 'navy' })}
        ${barRow({ y: 428, label: 'Class D medical devices', valueLabel: '2039', value: 13, max: 13, tone: 'navy' })}
        <text x="40" y="530" fill="${MUTED}" font-family="${SANS}" font-size="19">Bar length shows years from 2026. Imported food and drink: 18 October 2028.</text>`,
    },
  ],
};

const slugs = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(FIGURES);
fs.mkdirSync(outDir, { recursive: true });

for (const slug of slugs) {
  const figures = FIGURES[slug];
  if (!figures) throw new Error(`No figure definitions for ${slug}`);
  for (const figure of figures) {
    const svg = frame(figure);
    const out = path.join(outDir, figure.file);
    await sharp(Buffer.from(svg), { density: 144 })
      .resize(W, figure.height)
      .webp({ quality: 82 })
      .toFile(out);
    const kb = Math.round(fs.statSync(out).size / 1024);
    if (kb > 120) throw new Error(`${figure.file} is ${kb} KB, over the 120 KB budget`);
    console.log(`${figure.file}  ${kb} KB`);
  }
}
