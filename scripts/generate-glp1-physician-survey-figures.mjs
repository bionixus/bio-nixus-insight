/**
 * In-content figures for /blog/glp-1-physician-survey-saudi-arabia.
 * Original charts from the article's cited public figures.
 * No people, logos, client names, or prices. Brand palette matches the
 * Saudi obesity shortlist figures (navy / gold).
 *
 *   node scripts/generate-glp1-physician-survey-figures.mjs
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
const GOLD_SOFT = '#F8D48A';
const CREAM = '#F7F4EE';
const INK = '#243044';
const MUTED = '#5C6B82';
const TRACK = '#E7E1D6';
const CARD = '#FFFcf7';
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Inter, 'Helvetica Neue', Arial, sans-serif";

const W = 800;

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** @param {{ height: number; title: string; body: string }} opts */
function frame({ height, title, body }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${height}" viewBox="0 0 ${W} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${height}" fill="${CREAM}"/>
  <rect width="${W}" height="8" fill="${GOLD}"/>
  <text x="40" y="68" fill="${NAVY}" font-family="${SERIF}" font-size="36" font-weight="700">${esc(title)}</text>
  ${body}
  <text x="40" y="${height - 28}" fill="${GOLD}" font-family="${SERIF}" font-size="20" font-weight="700">BioNixus</text>
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">GLP-1 physician survey · KSA · 2026</text>
</svg>`;
}

function barRow({ y, label, valueLabel, width, maxWidth, tone }) {
  const fill = tone === 'gold' ? GOLD : NAVY_MID;
  return `
    <text x="40" y="${y}" fill="${INK}" font-family="${SANS}" font-size="26" font-weight="600">${esc(label)}</text>
    <text x="${W - 40}" y="${y}" fill="${NAVY}" font-family="${SERIF}" font-size="32" font-weight="700" text-anchor="end">${esc(valueLabel)}</text>
    <rect x="40" y="${y + 16}" width="${maxWidth}" height="28" rx="14" fill="${TRACK}"/>
    <rect x="40" y="${y + 16}" width="${Math.max(18, width)}" height="28" rx="14" fill="${fill}"/>`;
}

const figures = [
  {
    file: 'glp-1-physician-survey-saudi-arabia-published-surveys.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Four published Saudi surveys',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="100" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="100" rx="5" fill="${GOLD}"/>
          <text x="76" y="150" fill="${NAVY}" font-size="26" font-weight="700">AlOtaibi et al., 2025 · 92 clinicians</text>
          <text x="76" y="184" fill="${MUTED}" font-size="22">National anti-obesity prescribing, May–August 2024</text>

          <rect x="40" y="224" width="720" height="100" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="224" width="10" height="100" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="266" fill="${NAVY}" font-size="26" font-weight="700">Alrasheed et al., 2026 · 399 physicians</text>
          <text x="76" y="300" fill="${MUTED}" font-size="22">Nationwide KAP on SGLT-2 and GLP-1, 2024–25</text>

          <rect x="40" y="340" width="720" height="100" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="340" width="10" height="100" rx="5" fill="${NAVY}"/>
          <text x="76" y="382" fill="${NAVY}" font-size="26" font-weight="700">Turjoman et al., 2025 · 51 physicians</text>
          <text x="76" y="416" fill="${MUTED}" font-size="22">National Guard, Madinah, GLP-1 KAP</text>

          <rect x="40" y="456" width="720" height="100" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="456" width="10" height="100" rx="5" fill="${GOLD_SOFT}"/>
          <text x="76" y="498" fill="${NAVY}" font-size="26" font-weight="700">ACTION-IO Saudi Arabia, 2021 · 200 HCPs</text>
          <text x="76" y="532" fill="${MUTED}" font-size="22">Plus 1,000 people with obesity, fielded 2018</text>
        </g>`,
    }),
  },
  {
    file: 'glp-1-physician-survey-saudi-arabia-first-line.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'First-line medicine, 92 clinicians',
      body: `
        ${barRow({ y: 130, label: 'Semaglutide', valueLabel: '45.7%', width: (45.7 / 50) * 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 230, label: 'Tirzepatide', valueLabel: '26.1%', width: (26.1 / 50) * 720, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 330, label: 'Liraglutide', valueLabel: '25.0%', width: (25.0 / 50) * 720, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 430, label: 'Orlistat', valueLabel: '3.3%', width: (3.3 / 50) * 720, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="540" fill="${MUTED}" font-family="${SANS}" font-size="22">AlOtaibi et al., 2025, Table 3. Convenience sample.</text>`,
    }),
  },
  {
    file: 'glp-1-physician-survey-saudi-arabia-specialty-gap.webp',
    height: 560,
    svg: frame({
      height: 560,
      title: 'Always or often prescribe AOMs',
      body: `
        ${barRow({ y: 140, label: 'Endocrinologists (n=20)', valueLabel: '65.0%', width: (65.0 / 70) * 720, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 270, label: 'Family physicians (n=71)', valueLabel: '14.1%', width: (14.1 / 70) * 720, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="420" fill="${MUTED}" font-family="${SANS}" font-size="22">AlOtaibi et al., 2025, Table 3. Always or often.</text>
        <text x="40" y="456" fill="${MUTED}" font-family="${SANS}" font-size="22">Not a national prescribing share.</text>`,
    }),
  },
  {
    file: 'glp-1-physician-survey-saudi-arabia-kap.webp',
    height: 600,
    svg: frame({
      height: 600,
      title: 'Nationwide KAP, 399 physicians',
      body: `
        ${barRow({ y: 130, label: 'Adequate GLP-1 knowledge', valueLabel: '78.4%', width: (78.4 / 100) * 720, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 230, label: 'Appropriate practice', valueLabel: '75.4%', width: (75.4 / 100) * 720, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 330, label: 'Positive attitude', valueLabel: '23.6%', width: (23.6 / 100) * 720, maxWidth: 720, tone: 'gold' })}
        <text x="40" y="450" fill="${MUTED}" font-family="${SANS}" font-size="22">Alrasheed et al., 2026. GLP-1 knowledge KR-20 = 0.37.</text>
        <text x="40" y="486" fill="${MUTED}" font-family="${SANS}" font-size="22">90.0% said availability and access were always a barrier.</text>`,
    }),
  },
  {
    file: 'glp-1-physician-survey-saudi-arabia-design-checklist.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'Eight design rules',
      body: `
        ${[
          'Set specialty quotas, then report them separately',
          'Quota region and sector, not only Riyadh',
          'Record prescription authority first',
          'Keep class, molecule and line of therapy apart',
          'Measure availability, cost and insurance by payer',
          'Size the smallest decision cell, not the total',
          'Field in Arabic and English, and time the interview',
          'State what the study will not claim',
        ]
          .map((label, index) => {
            const y = 112 + index * 68;
            return `<rect x="40" y="${y}" width="720" height="56" rx="14" fill="${CARD}" stroke="${TRACK}"/>
              <circle cx="78" cy="${y + 28}" r="16" fill="${index === 0 ? GOLD : GOLD_SOFT}"/>
              <text x="78" y="${y + 34}" text-anchor="middle" fill="${NAVY}" font-family="${SANS}" font-size="16" font-weight="700">${index + 1}</text>
              <text x="112" y="${y + 36}" fill="${NAVY}" font-family="${SANS}" font-size="22" font-weight="600">${esc(label)}</text>`;
          })
          .join('\n')}`,
    }),
  },
];

fs.mkdirSync(outDir, { recursive: true });

for (const figure of figures) {
  const outPath = path.join(outDir, figure.file);
  await sharp(Buffer.from(figure.svg))
    .resize(W, figure.height)
    .webp({ quality: 82, effort: 6 })
    .toFile(outPath);
  const meta = await sharp(outPath).metadata();
  const { size } = fs.statSync(outPath);
  const kb = size / 1024;
  console.log(`${figure.file} ${meta.width}×${meta.height} ${kb.toFixed(1)} KB`);
  if (kb > 120) {
    console.error(`OVER BUDGET: ${figure.file} is ${kb.toFixed(1)} KB (max 120)`);
    process.exitCode = 1;
  }
}
