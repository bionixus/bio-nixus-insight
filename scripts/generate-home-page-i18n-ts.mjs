#!/usr/bin/env node
/** Generate src/lib/homePageHardcoded.ts from home-hardcoded-i18n-checklist-v2.csv */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const csvPath = join(__dirname, 'data/home-hardcoded-i18n-checklist-v2.csv');
const outPath = join(__dirname, '../src/lib/homePageHardcoded.ts');

const LANGS = ['en', 'de', 'fr', 'es', 'pt', 'ru', 'zh', 'ar'];

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

function escTs(s) {
  return JSON.stringify(s);
}

const raw = readFileSync(csvPath, 'utf8').trim().split('\n');
const cols = raw[0].split(',');
const colIdx = Object.fromEntries(cols.map((c, i) => [c, i]));

/** @type {Record<number, Record<string, string>>} */
const byId = {};
for (const line of raw.slice(1)) {
  const p = parseCsvLine(line);
  const id = Number(p[colIdx.ID]);
  byId[id] = {
    english: p[colIdx.English],
    ...Object.fromEntries(LANGS.map((l) => [l, p[colIdx[l] ?? l]])),
  };
}

function langCol(lang) {
  return lang === 'en' ? colIdx.English : colIdx[lang];
}

function L(id, lang) {
  const row = byId[id];
  if (!row) return '';
  return lang === 'en' ? row.english : row[lang] ?? row.english ?? '';
}

function buildLocale(lang) {
  const pathwayCards = [];
  for (let card = 1; card <= 9; card++) {
    const baseId = 38 + (card - 1) * 4 + 1;
    const cardCopy = {
      title: L(baseId, lang),
      description: L(baseId + 1, lang),
    };
    const label = byId[baseId + 2]?.english?.includes('Country') || byId[baseId + 2]?.Field === 'label'
      ? L(baseId + 2, lang)
      : undefined;
    // Re-parse by section for reliability
    pathwayCards.push(cardCopy);
  }

  // Rebuild pathway cards from CSV section names
  const cards = [];
  let current = null;
  for (const line of raw.slice(1)) {
    const p = parseCsvLine(line);
    const section = p[colIdx.Section];
    const field = p[colIdx.Field];
    const m = section.match(/^Pathway card (\d+)$/);
    if (!m) continue;
    const n = Number(m[1]);
    if (!cards[n - 1]) cards[n - 1] = {};
    if (field === 'title') cards[n - 1].title = p[langCol(lang)];
    if (field === 'description') cards[n - 1].description = p[langCol(lang)];
    if (field === 'label') cards[n - 1].label = p[langCol(lang)];
    if (field === 'hint') cards[n - 1].hint = p[langCol(lang)];
  }

  return {
    compliance: {
      badges: [L(1, lang), L(2, lang), L(3, lang), L(4, lang), L(5, lang)],
    },
    heroDashboard: {
      heading: L(6, lang),
      status: L(7, lang),
      calloutValue: L(8, lang),
      calloutLabel: L(9, lang),
      calloutCagr: L(10, lang),
      legendGlobal: L(11, lang),
      legendRegional: L(12, lang),
      metrics: [
        { label: L(13, lang), value: L(8, lang), sub: L(14, lang) },
        { label: L(15, lang), value: lang === 'zh' ? '约七千二百亿美元' : lang === 'ar' ? '~٧٢٠ مليار دولار' : '~$720B', sub: L(14, lang) },
        { label: L(16, lang), value: lang === 'zh' ? '约四千八百亿美元' : lang === 'ar' ? '~٤٨٠ مليار دولار' : '~$480B', sub: L(14, lang) },
      ],
    },
    globalReach: {
      signals: [L(17, lang), L(18, lang), L(19, lang), L(20, lang)],
    },
    industriesGateway: {
      h2: L(21, lang),
      intro: L(22, lang),
      stats: [
        { value: lang === 'zh' ? '一百二十七+' : lang === 'ar' ? '١٢٧+' : '127+', label: L(23, lang) },
        { value: lang === 'zh' ? '十六' : lang === 'ar' ? '١٦' : '16', label: L(24, lang) },
        { value: lang === 'zh' ? '七' : lang === 'ar' ? '٧' : '7', label: L(25, lang) },
      ],
      exploreAll: L(26, lang),
      insightsLink: L(27, lang),
      exploreSegment: L(28, lang),
    },
    industrySegments: {
      pharma: { label: L(29, lang), tagline: L(30, lang), navLabel: L(29, lang) },
      b2b: { label: L(31, lang), tagline: L(32, lang), navLabel: L(31, lang) },
      b2c: { label: L(33, lang), tagline: L(34, lang), navLabel: L(33, lang) },
    },
    pathways: {
      h2: L(35, lang),
      introFull: L(36, lang),
      introPart1:
        lang === 'en'
          ? 'BioNixus runs healthcare market research globally — with country-level depth across the Americas, Europe, and the Middle East. Use these '
          : undefined,
      introLinkHealthcare: lang === 'en' ? 'healthcare market research' : undefined,
      introPart2: lang === 'en' ? ' pathways for launch, market access, and growth. Compare methods in our ' : undefined,
      introLinkHub: lang === 'en' ? 'market research' : undefined,
      introPart3: lang === 'en' ? ' hub.' : undefined,
      moreSummary: L(37, lang),
      moreLinksTemplate: L(38, lang),
    },
    pathwayCards: cards.map((c) => {
      const out = { title: c.title, description: c.description };
      if (c.label) out.label = c.label;
      if (c.hint) out.hint = c.hint;
      return out;
    }),
    visualBriefing: {
      heading: L(73, lang),
      figures: [
        { alt: L(74, lang), caption: L(75, lang) },
        { alt: L(76, lang), caption: L(77, lang) },
      ],
    },
    overviewVideo: {
      title: L(78, lang),
      description: L(79, lang),
      transcript: L(80, lang),
      fallbackLabel: L(81, lang),
    },
    cta: {
      researchProposalHeadline: L(82, lang),
      body: L(83, lang),
      requestProposal: L(84, lang),
      emailUs: L(85, lang),
      mailtoSubject: L(86, lang),
      phoneRegionLabels: [L(87, lang), L(88, lang), L(89, lang)],
    },
    testimonials: {
      marquee: L(90, lang),
      altTemplate: L(91, lang),
    },
    heroTrust: {
      primary: L(92, lang),
      stats: L(93, lang),
    },
    videoEmbed: {
      transcriptLabel: L(94, lang),
    },
  };
}

const locales = Object.fromEntries(LANGS.map((lang) => [lang, buildLocale(lang)]));

function serialize(obj, indent = 2) {
  const pad = ' '.repeat(indent);
  if (obj === null || typeof obj !== 'object') return escTs(obj);
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';
    return `[\n${obj.map((v) => `${pad}${serialize(v, indent + 2)}`).join(',\n')}\n${' '.repeat(indent - 2)}]`;
  }
  const entries = Object.entries(obj).filter(([, v]) => v !== undefined);
  return `{\n${entries
    .map(([k, v]) => `${pad}${/^[a-zA-Z_$][\w$]*$/.test(k) ? k : escTs(k)}: ${serialize(v, indent + 2)}`)
    .join(',\n')}\n${' '.repeat(indent - 2)}}`;
}

const ts = `/** Auto-generated from scripts/data/home-hardcoded-i18n-checklist-v2.csv — do not edit by hand */
import type { Language } from './i18n';

export type HomePathwayCardCopy = {
  title: string;
  description: string;
  label?: string;
  hint?: string;
};

export type HomePageHardcodedCopy = {
  compliance: { badges: [string, string, string, string, string] };
  heroDashboard: {
    heading: string;
    status: string;
    calloutValue: string;
    calloutLabel: string;
    calloutCagr: string;
    legendGlobal: string;
    legendRegional: string;
    metrics: [
      { label: string; value: string; sub: string },
      { label: string; value: string; sub: string },
      { label: string; value: string; sub: string },
    ];
  };
  globalReach: { signals: [string, string, string, string] };
  industriesGateway: {
    h2: string;
    intro: string;
    stats: [{ value: string; label: string }, { value: string; label: string }, { value: string; label: string }];
    exploreAll: string;
    insightsLink: string;
    exploreSegment: string;
  };
  industrySegments: {
    pharma: { label: string; tagline: string; navLabel: string };
    b2b: { label: string; tagline: string; navLabel: string };
    b2c: { label: string; tagline: string; navLabel: string };
  };
  pathways: {
    h2: string;
    introFull: string;
    introPart1?: string;
    introLinkHealthcare?: string;
    introPart2?: string;
    introLinkHub?: string;
    introPart3?: string;
    moreSummary: string;
    moreLinksTemplate: string;
  };
  pathwayCards: HomePathwayCardCopy[];
  visualBriefing: {
    heading: string;
    figures: [{ alt: string; caption: string }, { alt: string; caption: string }];
  };
  overviewVideo: {
    title: string;
    description: string;
    transcript: string;
    fallbackLabel: string;
  };
  cta: {
    researchProposalHeadline: string;
    body: string;
    requestProposal: string;
    emailUs: string;
    mailtoSubject: string;
    phoneRegionLabels: [string, string, string];
  };
  testimonials: {
    marquee: string;
    altTemplate: string;
  };
  heroTrust: {
    primary: string;
    stats: string;
  };
  videoEmbed: {
    transcriptLabel: string;
  };
};

export const homePageHardcoded: Record<Language, HomePageHardcodedCopy> = ${serialize(locales, 2)};

export type HomePageTranslations = { homePage: HomePageHardcodedCopy };
`;

writeFileSync(outPath, ts);
console.log('Wrote', outPath);
