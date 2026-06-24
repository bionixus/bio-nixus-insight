#!/usr/bin/env node
/**
 * Expand thin GCC pharmaceutical market guide body in production Sanity.
 *
 *   node scripts/expand-saudi-gcc-pharmaceutical-guide-2026.mjs           # dry-run
 *   node scripts/expand-saudi-gcc-pharmaceutical-guide-2026.mjs --execute
 */

import { createClient } from '@sanity/client';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

function loadEnv() {
  const envPath = join(dirname(fileURLToPath(import.meta.url)), '../.env');
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const eq = t.indexOf('=');
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    let v = t.slice(eq + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    if (!process.env[k]) process.env[k] = v;
  }
}

loadEnv();

const execute = process.argv.includes('--execute');
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_TOKEN;
const projectId = process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo';
const dataset = process.env.VITE_SANITY_DATASET || 'production';

const DOC_ID = 'june26-saudi-arabia-gcc-pharmaceutical-market-guide-202';
const SLUG = 'saudi-arabia-gcc-pharmaceutical-market-guide-2026';
const BODY_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  'content/saudi-gcc-pharmaceutical-market-guide-2026-body.html',
);

function withKeys(items) {
  return items.map((item, i) => ({
    ...item,
    _key: item._key || `k-${i}-${Math.random().toString(36).slice(2, 9)}`,
  }));
}

function wordCount(html) {
  return html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
}

function readingTimeMinutes(words) {
  return Math.max(12, Math.round(words / 220));
}

const tableOfContents = [
  { heading: 'How to enter the GCC market in 2026', anchor: 'geo-answer-gcc-pharma-2026' },
  { heading: 'GCC pharmaceutical market landscape', anchor: 'gcc-market-landscape' },
  { heading: 'Saudi Arabia: SFDA and Vision 2030', anchor: 'saudi-arabia-sfda' },
  { heading: 'UAE: EDE and GCC-DR harmonisation', anchor: 'uae-ede-gcc-dr' },
  { heading: 'GCC-DR registration sequencing', anchor: 'gcc-dr-platform' },
  { heading: 'Kuwait, Qatar, Bahrain, and Oman', anchor: 'kuwait-qatar-bahrain-oman' },
  { heading: 'Pricing and reimbursement', anchor: 'pricing-reimbursement' },
  { heading: 'Local partnerships and distribution', anchor: 'partnerships-distribution' },
  { heading: 'Market entry roadmap', anchor: 'market-sequencing' },
  { heading: 'BioNixus GCC support', anchor: 'bionixus-gcc' },
  { heading: 'FAQ', anchor: 'faq' },
];

const faq = [
  {
    question: 'Is GCC-DR registration enough to sell in all six GCC countries?',
    answer:
      'No. GCC-DR harmonises much of the technical dossier, but each member state maintains national registration, pricing, and procurement steps. SFDA approval alone does not automatically list a product in the UAE, Kuwait, Qatar, Bahrain, or Oman.',
  },
  {
    question: 'Should we launch in Saudi Arabia or the UAE first?',
    answer:
      'Most hospital and specialty portfolios anchor in Saudi Arabia because of NUPCO volume and population scale. The UAE is often prioritised for regional headquarters, free-zone manufacturing, or portfolios with strong private-sector uptake. Many companies pursue parallel preparation with staggered submissions.',
  },
  {
    question: 'How long does SFDA fast-track approval take in 2026?',
    answer:
      'Timelines depend on therapeutic category, dossier completeness, and priority designation. Fast-track routes for qualifying medicines can be materially shorter than standard reviews, but teams should plan for labeling, local agent setup, and NUPCO engagement in parallel — not after approval.',
  },
  {
    question: 'What payer research is needed beyond registration?',
    answer:
      'UAE emirate formularies (DoH, DHA), Saudi NUPCO tender criteria, IRP positioning, and hospital P&T expectations require primary research. Desk-based epidemiology alone rarely survives committee scrutiny for innovative therapies.',
  },
  {
    question: 'Does BioNixus support multi-country GCC launch planning?',
    answer:
      'Yes. BioNixus conducts quantitative and qualitative research across GCC markets, including physician surveys, payer interviews, KOL mapping, and launch tracking. See the GCC market access guide or request a briefing at bionixus.com/contact.',
  },
];

const executiveSummary = [
  {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        marks: [],
        text: 'Key takeaways for GCC pharmaceutical market entry in 2026',
      },
    ],
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    level: 1,
    children: [
      {
        _type: 'span',
        text: 'Saudi Arabia remains the anchor market for most specialty portfolios — SFDA fast-track and NUPCO procurement require parallel regulatory and tender planning.',
      },
    ],
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    level: 1,
    children: [
      {
        _type: 'span',
        text: 'UAE federal registration via EDE does not replace emirate-level DoH and DHA formulary work; harmonisation with GCC-DR saves dossier effort but not payer research.',
      },
    ],
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    level: 1,
    children: [
      {
        _type: 'span',
        text: 'GCC-DR is a sequencing tool for Kuwait, Qatar, Bahrain, and Oman — national pricing and tender rules still differ materially from Saudi and UAE benchmarks.',
      },
    ],
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    level: 1,
    children: [
      {
        _type: 'span',
        text: 'Primary research on IRP corridors, budget impact, and hospital P&T expectations should begin 18–24 months before anticipated listing.',
      },
    ],
  },
];

const ctaSection = {
  title: 'Plan your GCC pharmaceutical market entry briefing',
  description:
    'BioNixus supports market access research, payer interviews, and launch tracking across Saudi Arabia, the UAE, and the wider GCC.',
  buttonText: 'Request a commercial briefing',
  buttonUrl: 'https://www.bionixus.com/contact',
};

async function main() {
  const bodyHtml = readFileSync(BODY_PATH, 'utf8').trim();
  const words = wordCount(bodyHtml);
  const readingTime = readingTimeMinutes(words);

  const patch = {
    bodyHtml,
    readingTime,
    updatedAt: new Date().toISOString(),
    tableOfContents: withKeys(tableOfContents),
    faq: withKeys(faq),
    executiveSummary,
    ctaSection,
    'mainImage.alt':
      'GCC pharmaceutical market entry guide — Saudi SFDA and UAE EDE regulatory landscape 2026',
    'mainImage.caption': 'GCC pharmaceutical market access and registration strategy',
  };

  console.log(`Document: ${DOC_ID}`);
  console.log(`Slug: ${SLUG}`);
  console.log(`Body: ${bodyHtml.length} chars, ~${words} words, readingTime ${readingTime} min`);
  console.log(`TOC items: ${tableOfContents.length}, FAQ items: ${faq.length}`);

  if (!execute) {
    console.log('\nDry run — pass --execute to patch production.');
    return;
  }

  if (!token) {
    console.error('Missing SANITY_API_TOKEN in .env');
    process.exit(1);
  }

  const client = createClient({
    projectId,
    dataset,
    token,
    apiVersion: '2024-01-01',
    useCdn: false,
  });

  const existing = await client.fetch(
    `*[_type == "blogPost" && (_id == $id || slug.current == $slug)][0]{ _id, title, "bodyLen": length(bodyHtml) }`,
    { id: DOC_ID, slug: SLUG },
  );

  if (!existing) {
    console.error('Document not found in production.');
    process.exit(1);
  }

  console.log(`Found: ${existing._id} — current body ${existing.bodyLen} chars`);

  const result = await client.patch(existing._id).set(patch).commit({ autoGenerateArrayKeys: true });
  console.log('Patched:', result._id, 'rev', result._rev);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
