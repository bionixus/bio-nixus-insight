/**
 * In-content figures for /blog/thiqa-obesity-reimbursement-abu-dhabi.
 * Original charts from the article's cited public figures.
 * No people, logos, client names, or uncited prices.
 * WebP, under the 120 KB in-content budget.
 *
 *   node scripts/generate-thiqa-obesity-figures.mjs
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

function frame({ height, title, body }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${height}" viewBox="0 0 ${W} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${height}" fill="${CREAM}"/>
  <rect width="${W}" height="8" fill="${GOLD}"/>
  <text x="40" y="68" fill="${NAVY}" font-family="${SERIF}" font-size="30" font-weight="700">${esc(title)}</text>
  ${body}
  <text x="40" y="${height - 28}" fill="${GOLD}" font-family="${SERIF}" font-size="20" font-weight="700">BioNixus</text>
  <text x="148" y="${height - 28}" fill="${MUTED}" font-family="${SANS}" font-size="18">Thiqa obesity reimbursement · 2026</text>
</svg>`;
}

function barRow({ y, label, valueLabel, width, maxWidth, tone }) {
  const fill = tone === 'gold' ? GOLD : NAVY_MID;
  return `
    <text x="40" y="${y}" fill="${INK}" font-family="${SANS}" font-size="22" font-weight="600">${esc(label)}</text>
    <text x="${W - 40}" y="${y}" fill="${NAVY}" font-family="${SERIF}" font-size="28" font-weight="700" text-anchor="end">${esc(valueLabel)}</text>
    <rect x="40" y="${y + 16}" width="${maxWidth}" height="26" rx="13" fill="${TRACK}"/>
    <rect x="40" y="${y + 16}" width="${Math.max(18, width)}" height="26" rx="13" fill="${fill}"/>`;
}

const figures = [
  {
    file: 'thiqa-obesity-reimbursement-abu-dhabi-bmi.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'Thiqa BMI eligibility bands',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="156" fill="${GOLD}" font-size="22" font-weight="700">01</text>
          <text x="124" y="156" fill="${NAVY}" font-size="26" font-weight="700">BMI 30.0–34.9</text>
          <text x="76" y="198" fill="${MUTED}" font-size="20">One listed complication — stricter “severe” rules</text>

          <rect x="40" y="256" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="256" width="10" height="132" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="304" fill="${NAVY_MID}" font-size="22" font-weight="700">02</text>
          <text x="124" y="304" fill="${NAVY}" font-size="26" font-weight="700">BMI 35.0–39.9</text>
          <text x="76" y="346" fill="${MUTED}" font-size="20">One listed complication — looser clinical thresholds</text>

          <rect x="40" y="404" width="720" height="132" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="404" width="10" height="132" rx="5" fill="${GOLD}"/>
          <text x="76" y="452" fill="${GOLD}" font-size="22" font-weight="700">03</text>
          <text x="124" y="452" fill="${NAVY}" font-size="26" font-weight="700">BMI 40.0 and above</text>
          <text x="76" y="494" fill="${MUTED}" font-size="20">No obesity-related complication required</text>
        </g>`,
    }),
  },
  {
    file: 'thiqa-obesity-reimbursement-abu-dhabi-timeline.webp',
    height: 640,
    svg: frame({
      height: 640,
      title: 'Four-month Thiqa coverage funnel',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="720" height="100" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="108" width="10" height="100" rx="5" fill="${GOLD}"/>
          <text x="76" y="150" fill="${GOLD}" font-size="20" font-weight="700">Month 1</text>
          <text x="176" y="150" fill="${NAVY}" font-size="24" font-weight="700">One-month trial</text>
          <text x="76" y="184" fill="${MUTED}" font-size="18">Enrol, record baseline weight, test tolerability</text>

          <rect x="40" y="224" width="720" height="100" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="224" width="10" height="100" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="266" fill="${NAVY_MID}" font-size="20" font-weight="700">Months 2–4</text>
          <text x="216" y="266" fill="${NAVY}" font-size="24" font-weight="700">Up to three months’ supply</text>
          <text x="76" y="300" fill="${MUTED}" font-size="18">Continue if both parties agree treatment may prove effective</text>

          <rect x="40" y="340" width="720" height="100" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="340" width="10" height="100" rx="5" fill="${GOLD}"/>
          <text x="76" y="382" fill="${GOLD}" font-size="20" font-weight="700">Month 4</text>
          <text x="176" y="382" fill="${NAVY}" font-size="24" font-weight="700">&gt;5% loss + activity</text>
          <text x="76" y="416" fill="${MUTED}" font-size="18">Effectiveness test before the first period is reimbursed</text>

          <rect x="40" y="456" width="720" height="100" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="456" width="10" height="100" rx="5" fill="${NAVY_MID}"/>
          <text x="76" y="498" fill="${NAVY_MID}" font-size="20" font-weight="700">After gate</text>
          <text x="196" y="498" fill="${NAVY}" font-size="24" font-weight="700">Thiqa app, then direct billing</text>
          <text x="76" y="532" fill="${MUTED}" font-size="18">Lifestyle-fail-but-5% gets no first-period reimbursement</text>
        </g>`,
    }),
  },
  {
    file: 'thiqa-obesity-reimbursement-abu-dhabi-prevalence.webp',
    height: 620,
    svg: frame({
      height: 620,
      title: 'Published adult obesity rates',
      body: `
        ${barRow({ y: 120, label: 'UAE NHS 2017–18, adults 18–69 (measured)', valueLabel: '27.8%', width: 501, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 210, label: 'WHO GHO 2024, adults 18+ (age-standardised)', valueLabel: '31.6%', width: 569, maxWidth: 720, tone: 'navy' })}
        ${barRow({ y: 300, label: 'Abu Dhabi, MOHAP Obesity Study 2023', valueLabel: '35.9%', width: 647, maxWidth: 720, tone: 'gold' })}
        ${barRow({ y: 390, label: 'Emirati adults (World Obesity, NHS-based)', valueLabel: '36.9%', width: 665, maxWidth: 720, tone: 'navy' })}
        <text x="40" y="500" fill="${MUTED}" font-family="${SANS}" font-size="20">UAE NHS 2017–18 · World Obesity 2024 · WHO GHO via Our World in Data</text>
        <text x="40" y="538" fill="${MUTED}" font-family="${SANS}" font-size="20">Different methods — do not average into Thiqa demand</text>`,
    }),
  },
  {
    file: 'thiqa-obesity-reimbursement-abu-dhabi-comorbidities.webp',
    height: 700,
    svg: frame({
      height: 700,
      title: 'Which complications qualify',
      body: `
        <g font-family="${SANS}">
          <rect x="40" y="108" width="350" height="210" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <text x="64" y="148" fill="${GOLD}" font-size="20" font-weight="700">Qualifies both bands</text>
          <text x="64" y="188" fill="${NAVY}" font-size="22">Hypertension</text>
          <text x="64" y="224" fill="${NAVY}" font-size="22">NAFLD / NASH</text>
          <text x="64" y="260" fill="${NAVY}" font-size="22">Ischaemic heart disease</text>
          <text x="64" y="296" fill="${MUTED}" font-size="18">Pickwickian syndrome too</text>

          <rect x="410" y="108" width="350" height="210" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <text x="434" y="148" fill="${NAVY_MID}" font-size="20" font-weight="700">OSA threshold shifts</text>
          <text x="434" y="188" fill="${NAVY}" font-size="22">BMI 30–34.9: AHI &gt; 30</text>
          <text x="434" y="224" fill="${NAVY}" font-size="22">BMI 35–39.9: any OSA</text>
          <text x="434" y="260" fill="${MUTED}" font-size="18">Pulmonologist rules also</text>
          <text x="434" y="296" fill="${MUTED}" font-size="18">loosen in the higher band</text>

          <rect x="40" y="338" width="720" height="250" rx="18" fill="${CARD}" stroke="${TRACK}"/>
          <rect x="40" y="338" width="10" height="250" rx="5" fill="${GOLD}"/>
          <text x="76" y="384" fill="${GOLD}" font-size="22" font-weight="700">Does not qualify on Appendix 4</text>
          <text x="76" y="432" fill="${NAVY}" font-size="24">Chronic kidney disease — does not qualify in either band</text>
          <text x="76" y="476" fill="${NAVY}" font-size="24">GORD with or without oesophagitis — does not qualify</text>
          <text x="76" y="520" fill="${NAVY}" font-size="24">Type 2 diabetes is not listed as an obesity-OMM qualifier</text>
          <text x="76" y="556" fill="${MUTED}" font-size="18">A diabetes GLP-1 pathway is a different document</text>
        </g>`,
    }),
  },
  {
    file: 'thiqa-obesity-reimbursement-abu-dhabi-brief.webp',
    height: 760,
    svg: frame({
      height: 760,
      title: 'What a 2026 Thiqa brief should measure',
      body: `
        <g font-family="${SANS}" font-size="24" fill="${INK}">
          <text x="56" y="140">1. Thiqa entitlement versus resident prevalence</text>
          <text x="56" y="200">2. BMI-band and comorbidity eligibility</text>
          <text x="56" y="260">3. Certified-prescriber capacity</text>
          <text x="56" y="320">4. Four-month trial-to-reimbursement conversion</text>
          <text x="56" y="380">5. Sahatna, wearables and activity exceptions</text>
          <text x="56" y="440">6. Persistence, drop-off and re-enrolment</text>
          <text x="56" y="500">7. Thiqa versus Dubai versus self-pay</text>
        </g>
        <text x="40" y="600" fill="${MUTED}" font-family="${SANS}" font-size="20">Drawn from the public evidence gaps in this article</text>
        <text x="40" y="640" fill="${MUTED}" font-family="${SANS}" font-size="20">Report as share of treated patients, not a UAE market-size total</text>`,
    }),
  },
];

fs.mkdirSync(outDir, { recursive: true });
for (const figure of figures) {
  const outPath = path.join(outDir, figure.file);
  await sharp(Buffer.from(figure.svg), { density: 144 })
    .webp({ quality: 82, effort: 6 })
    .toFile(outPath);
  const meta = await sharp(outPath).metadata();
  const { size } = fs.statSync(outPath);
  console.log(`Written: ${path.relative(root, outPath)} (${meta.width}×${meta.height}, ${(size / 1024).toFixed(1)} KB)`);
}
