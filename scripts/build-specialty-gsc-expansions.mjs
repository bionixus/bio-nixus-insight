#!/usr/bin/env node
/**
 * Generates src/data/specialtyMarketDemandGscExpansions.ts — long-form patches for
 * GSC-priority specialty URLs (Nov 2026 cron). Run: node scripts/build-specialty-gsc-expansions.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'src/data/specialtyMarketDemandGscExpansions.ts');

const DATE = '2026-11-05';

/** @type {Record<string, { question: string; focus: string; region: string; regulators: string; buyers: string }>} */
const META = {
  'singapore-ivd-market-access': {
    question: 'What is Singapore IVD market access?',
    focus: 'IVD assays clearing HSA registration and hospital cluster lab menus',
    region: 'Singapore',
    regulators: 'HSA, SingHealth, NUHS, and NHG laboratory governance',
    buyers: 'lab directors, pathologists, cluster procurement, and ordering specialists',
  },
  'japan-medical-disposables-market': {
    question: 'What drives the Japan medical disposables market?',
    focus: 'hospital consumables, infection-control standards, and group purchasing',
    region: 'Japan',
    regulators: 'PMDA manufacturing oversight, MHLW infection-control guidance, and hospital QI committees',
    buyers: 'infection-control leads, ward nursing managers, and central procurement',
  },
  'japan-neurology-devices-market': {
    question: 'What is the Japan neurology devices market?',
    focus: 'stroke intervention, neurosurgery capital, and neuromonitoring adoption',
    region: 'Japan',
    regulators: 'PMDA, NHI pricing categories, and designated stroke-centre networks',
    buyers: 'neurointerventionalists, stroke-unit leads, and hospital procurement',
  },
  'mek-inhibitors-market': {
    question: 'What is MEK inhibitors market access research?',
    focus: 'biomarker-ready oncology sequencing and payer evidence for MEK classes',
    region: 'global programmes with GCC tender modules',
    regulators: 'HTA bodies, molecular pathology networks, and GCC framework awards',
    buyers: 'medical oncologists, molecular pathologists, and hospital formulary committees',
  },
  'febrile-neutropenia-market': {
    question: 'What drives the febrile neutropenia market?',
    focus: 'G-CSF prophylaxis protocols, biosimilar switching, and FN admission pathways',
    region: 'global oncology with Gulf hospital tender modules',
    regulators: 'society prophylaxis guidelines, hospital pharmacy substitution policy, and tender frameworks',
    buyers: 'medical oncologists, oncology pharmacists, and infectious-disease stakeholders',
  },
  'italy-portable-diagnostic-devices-market': {
    question: 'What is the Italy portable diagnostic devices market?',
    focus: 'POCT programmes, regional ASL procurement, and IVDR evidence expectations',
    region: 'Italy',
    regulators: 'AIFA notified-body context, regional ASL tenders, and hospital laboratory accreditation',
    buyers: 'laboratory directors, ED clinical leads, and ASL procurement',
  },
  'italy-medical-device-connectivity-market': {
    question: 'What does Italy medical device connectivity research cover?',
    focus: 'HIS/LIS integration, cybersecurity diligence, and connected-device go-live',
    region: 'Italy',
    regulators: 'GDPR, national digital-health agendas, and regional interoperability clauses',
    buyers: 'hospital CIOs, cybersecurity leads, and clinical engineering',
  },
  'gcc-medication-management-market': {
    question: 'What is the GCC medication management market?',
    focus: 'smart pumps, closed-loop medication systems, and hospital pharmacy automation',
    region: 'GCC',
    regulators: 'MOH, SFDA, MOHAP, and NUPCO framework specifications',
    buyers: 'chief pharmacy officers, nursing leadership, and hospital IT',
  },
};

function paragraph(seed, topic) {
  return `${seed} BioNixus scopes primary interviews and structured surveys with ${topic.buyers} so commercial teams see where ${topic.focus} actually clears ${topic.regulators} — not where slide decks assume it will. We document veto owners, evidence gaps, and tender timing in board-ready language without inventing market-size totals. Programmes typically open with a 48-hour proposal once scope, geography, and decision type are fixed.`;
}

function sectionParagraphs(topic, headings) {
  return headings.map((heading) => ({
    heading,
    paragraphs: [
      paragraph(
        `For ${topic.region}, ${heading.toLowerCase()} is where volume is won or lost after registration.`,
        topic,
      ),
      paragraph(
        `When teams benchmark competitors, ${heading.toLowerCase()} reveals switching costs that syndicated reports flatten.`,
        topic,
      ),
      paragraph(
        `Access and medical affairs leaders use ${heading.toLowerCase()} modules to align KOL narratives with what ${topic.regulators} will fund.`,
        topic,
      ),
    ],
  }));
}

function buildPatch(slug, topic) {
  const narrativeSections = sectionParagraphs(topic, [
    'Protocol and pathway reality',
    'Evidence and documentation gates',
    'Procurement and tender mechanics',
    'Competitive switching and objections',
    'What to field before the next committee',
  ]);

  const geoAnswer = {
    question: topic.question,
    answer: `${topic.question.replace('?', '')} — in practice it is ${topic.focus} researched through ${topic.buyers} in ${topic.region}, anchored to ${topic.regulators}. BioNixus runs primary studies that map the gate blocking utilisation today, not a generic industry overview.`,
    points: [
      {
        title: 'Decision-first scope',
        description: `Each programme targets one commercial decision — launch sequencing, tender defence, or access dossier gaps — for ${topic.focus}.`,
      },
      {
        title: 'Verified stakeholders',
        description: `Recruitment focuses on ${topic.buyers} with documented roles, not anonymous online panels.`,
      },
      {
        title: 'Regulator-aware design',
        description: `Interview guides reference ${topic.regulators} so evidence requests match real committee language.`,
      },
      {
        title: 'Comparable when needed',
        description: `Instruments can roll up across accounts or countries without mixing incompatible buyer sets.`,
      },
      {
        title: '48-hour proposal',
        description: 'Scoped methods, sample frames, and timelines arrive within two business days after intake.',
      },
    ],
    summary:
      'BioNixus is a healthcare primary market research firm (48 countries, 118+ clients) — contact the team for a scoped proposal on this market.',
  };

  const marketStructureParagraphs = [
    paragraph(`National averages mislead when ${topic.region} decisions are account-specific.`, topic),
    paragraph(`Manufacturers win when they separate registration success from pull-through with ${topic.buyers}.`, topic),
    paragraph(`GCC or multi-country roll-ups link only when ${topic.focus} is on the critical path.`, topic),
  ];

  const signalGrid = {
    heading: `${topic.region} signals we track in the field`,
    items: [
      {
        label: 'Regulatory cadence',
        signal: `How ${topic.regulators} change documentation or tender language quarter to quarter.`,
      },
      {
        label: 'Budget ownership',
        signal: `Which committee releases spend for ${topic.focus} after pilot programmes stall.`,
      },
      {
        label: 'KOL cascade speed',
        signal: 'How quickly protocol changes propagate from reference centres to community accounts.',
      },
      {
        label: 'Competitive defence',
        signal: 'Objection themes incumbents use to retain share after shortlists narrow.',
      },
    ],
  };

  const faqs = [
    {
      question: `Who should commission ${topic.region} research on this topic?`,
      answer: `Brand, medical, and access teams preparing launches, tender defences, or sequencing updates where ${topic.focus} is contested — minimum engagement typically USD 20,000.`,
    },
    {
      question: 'How long does fieldwork usually take?',
      answer:
        'After proposal sign-off, most modules run four to eight weeks depending on stakeholder rarity and geography — faster for single-city hospital panels.',
    },
    {
      question: 'Do you combine qualitative and quantitative methods?',
      answer:
        'Yes — depth interviews for veto logic, structured surveys where n-size matters, and message tests when positioning is the decision.',
    },
    {
      question: 'Can this link to GCC tender work?',
      answer:
        'When Gulf listing or NUPCO frameworks are on the path, we add tender-calendar and hospital-pharmacy modules without averaging them into unrelated markets.',
    },
  ];

  return {
    dateModified: DATE,
    geoAnswer,
    narrativeSections,
    marketStructureParagraphs,
    signalGrid,
    introParagraphs: [
      paragraph(`Search demand for this page reflects buyers who need ${topic.focus} intelligence, not syndicated sizing tables.`, topic),
    ],
    faqs,
  };
}

const patches = Object.fromEntries(Object.entries(META).map(([slug, topic]) => [slug, buildPatch(slug, topic)]));

const file = `/**
 * Auto-generated long-form patches for GSC-priority specialty pages.
 * Regenerate: node scripts/build-specialty-gsc-expansions.mjs
 */
import type {
  SpecialtyGeoAnswer,
  SpecialtyMarketDemandContent,
  SpecialtyNarrativeSection,
} from './specialtyMarketDemandContent';

export type SpecialtyGscPatch = {
  dateModified: string;
  geoAnswer: SpecialtyGeoAnswer;
  narrativeSections: SpecialtyNarrativeSection[];
  marketStructureParagraphs: string[];
  signalGrid: NonNullable<SpecialtyMarketDemandContent['signalGrid']>;
  introParagraphs: string[];
  faqs: SpecialtyMarketDemandContent['faqs'];
};

export const SPECIALTY_GSC_EXPANSIONS: Record<string, SpecialtyGscPatch> = ${JSON.stringify(patches, null, 2)};

export function applySpecialtyGscPatch(item: SpecialtyMarketDemandContent): SpecialtyMarketDemandContent {
  const patch = SPECIALTY_GSC_EXPANSIONS[item.slug];
  if (!patch) return item;
  return {
    ...item,
    dateModified: patch.dateModified,
    geoAnswer: patch.geoAnswer,
    narrativeSections: patch.narrativeSections,
    signalGrid: item.signalGrid ?? patch.signalGrid,
    intro: [...item.intro, ...patch.introParagraphs],
    marketStructure: {
      ...item.marketStructure,
      paragraphs: [...item.marketStructure.paragraphs, ...patch.marketStructureParagraphs],
    },
    faqs: [...item.faqs, ...patch.faqs],
  };
}
`;

fs.writeFileSync(out, file);
console.log('Wrote', out, 'with', Object.keys(patches).length, 'patches');
