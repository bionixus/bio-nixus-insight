#!/usr/bin/env node
/**
 * Generate BIO-448 research briefs from thin-page inventory.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const inv = JSON.parse(fs.readFileSync(path.join(root, 'docs/seo/bio-448-thin-page-inventory.json'), 'utf8'));
const outMd = path.join(root, 'docs/seo/bio-448-thin-page-research-briefs.md');
const outBriefCsv = path.join(root, 'docs/seo/bio-448-thin-page-research-briefs.csv');

const KEYWORD_MAP = {
  '/uae-market-access-research': 'market access research uae',
  '/kuwait-market-access-research': 'market access research kuwait',
  '/qatar-market-access-research': 'market access research qatar',
  '/saudi-payer-market-access-research': 'saudi payer market access research',
  '/healthcare-fieldwork-middle-east': 'healthcare fieldwork middle east',
  '/pharma-fieldwork-uae': 'pharma fieldwork uae',
  '/pharma-fieldwork-saudi-arabia': 'pharma fieldwork saudi arabia',
  '/pharma-fieldwork-egypt': 'pharma fieldwork egypt',
  '/heor-consulting-saudi-arabia': 'heor consulting saudi arabia',
  '/budget-impact-model-saudi-arabia': 'budget impact model saudi arabia',
  '/patient-support-program-research-gcc': 'patient support program research gcc',
  '/gcc-hcp-recruitment-market-research': 'physician recruitment saudi arabia',
  '/real-world-evidence-gcc': 'real world evidence gcc',
  '/real-world-evidence': 'real world evidence pharmaceutical',
  '/market-research-uae': 'pharma market research uae',
  '/market-research-ksa': 'pharma market research ksa',
  '/market-research-saudi': 'pharma market research saudi arabia',
  '/market-research-kuwait': 'pharma market research kuwait',
  '/market-research-egypt': 'pharma market research egypt',
  '/uae-pharmaceutical-market-research': 'pharma market research company uae',
  '/market-research-saudi-arabia-pharmaceutical': 'pharma market research company saudi arabia',
  '/bionixus-market-research-middle-east': 'healthcare market research company middle east',
  '/gcc-pharmaceutical-market-research': 'gcc pharmaceutical market research',
  '/healthcare-market-research-agency-gcc': 'healthcare market research agency gcc',
  '/sfda-market-access-strategy-saudi-arabia': 'sfda market access strategy saudi arabia',
  '/physician-survey-saudi-arabia': 'physician survey saudi arabia',
  '/kol-mapping-saudi-arabia-oncology': 'kol mapping saudi arabia oncology',
  '/biosimilar-market-entry-saudi-arabia': 'biosimilar market entry saudi arabia',
  '/mena-pharma-market-data': 'mena pharma market data',
};

const CLUSTER_DEFAULTS = {
  ksa: {
    stats: [
      'Saudi Arabia healthcare spend exceeded SAR 200B in FY2025 budget allocations (KPMG Saudi budget commentary, 2025).',
      'NUPCO centralized procurement governs a large share of hospital pharmaceutical spend — tender timing drives launch sequencing.',
    ],
    regulatory: ['SFDA (sfda.gov.sa)', 'NUPCO', 'SFDA Economic Evaluation System (EES) mandatory from 1 Jul 2025'],
    competitors: ['IQVIA MENA', 'Kantar Health (legacy)', 'local boutique fieldwork shops'],
    links: ['/healthcare-market-research/saudi-arabia', '/blog/sfda-drug-registration-guide', '/saudi-arabia-healthcare-market-report', '/heor-consulting-saudi-arabia'],
  },
  uae: {
    stats: [
      'UAE mandatory health insurance covers most residents; emirate-level formulary rules (DHA vs DOH) split access pathways.',
      'Federal MOHAP registration plus emirate policies shape launch sequencing — avoid treating UAE as a single payer.',
    ],
    regulatory: ['MOHAP', 'DHA (Dubai)', 'DOH Abu Dhabi', 'Emirates Drug Establishment (EDE) federal pricing pathway (2025+)'],
    competitors: ['IQVIA', 'local GCC agencies', 'global syndicated data vendors'],
    links: ['/healthcare-market-research/uae', '/blog/market-access-strategy-uae', '/uae-healthcare-market-report', '/uae-market-access-research'],
  },
  kuwait: {
    stats: ['Kuwait MOH procurement and hospital committees gate formulary decisions; smaller absolute market vs KSA/UAE but high per-capita spend.'],
    regulatory: ['Kuwait MOH', 'Central Agency for Public Tenders'],
    competitors: ['IQVIA', 'regional fieldwork agencies'],
    links: ['/healthcare-market-research/kuwait', '/kuwait-market-access-research', '/healthcare-market-research'],
  },
  qatar: {
    stats: ['Qatar HMC and private sector dual-track access; Hamad formulary processes influence public sector uptake.'],
    regulatory: ['MOPH Qatar', 'Hamad Medical Corporation formulary'],
    competitors: ['IQVIA', 'GCC boutique agencies'],
    links: ['/healthcare-market-research/qatar', '/qatar-market-access-research', '/healthcare-market-research'],
  },
  egypt: {
    stats: ['Egypt is MENA\'s largest population base; EDA registration and private-sector out-of-pocket dynamics dominate access.'],
    regulatory: ['EDA (Egyptian Drug Authority)', 'UHIA / public procurement where applicable'],
    competitors: ['Kantar', 'Ipsos Egypt', 'local agencies'],
    links: ['/healthcare-market-research/egypt', '/egypt-pharmaceutical-market-research', '/blog/top-market-research-companies-egypt-2026'],
  },
  gcc: {
    stats: ['GCC pharmaceutical market commonly cited in low tens of billions USD range — use ranges with source attribution only.'],
    regulatory: ['Country-specific regulators (SFDA, MOHAP, MOH Kuwait, MOPH Qatar)'],
    competitors: ['IQVIA MENA', 'Kantar Health', 'ZS Associates (access consulting)'],
    links: ['/bionixus-market-research-middle-east', '/gcc-pharmaceutical-market-research', '/healthcare-market-research'],
  },
};

function inferGeo(pathname) {
  if (/saudi|ksa|sfda|nupco|biosimilar/.test(pathname)) return 'ksa';
  if (/uae|dubai|abu-dhabi/.test(pathname)) return 'uae';
  if (/kuwait/.test(pathname)) return 'kuwait';
  if (/qatar/.test(pathname)) return 'qatar';
  if (/egypt|eda/.test(pathname)) return 'egypt';
  if (/gcc|middle-east|mena/.test(pathname)) return 'gcc';
  return 'gcc';
}

function primaryKeyword(pathname, title, h1) {
  if (KEYWORD_MAP[pathname]) return KEYWORD_MAP[pathname];
  const slug = pathname.replace(/^\/(ar|de|es|fr|zh|pt|ru)\//, '/').replace(/\//g, ' ').replace(/-/g, ' ').trim();
  if (pathname.startsWith('/healthcare-market-research/therapy/')) {
    const therapy = pathname.split('/').pop().replace(/-/g, ' ');
    return `${therapy} market research gcc`;
  }
  if (pathname.startsWith('/healthcare-market-research/services/')) {
    const svc = pathname.split('/').pop().replace(/-/g, ' ');
    return `pharmaceutical ${svc} middle east`;
  }
  if (pathname.startsWith('/ar/')) return `${slug} (Arabic locale)`;
  return slug || (h1 || title || '').toLowerCase().slice(0, 80);
}

function tier(pathname, wordCount) {
  if (inv.notFoundPages.some((p) => p.pathname === pathname)) return 'P0-404';
  if (pathname.startsWith('/healthcare-market-research')) return 'P0';
  if (Object.keys(KEYWORD_MAP).includes(pathname)) return 'P0';
  if (pathname.startsWith('/insights')) return 'P2';
  if (/automotive|retail|hospitality|telecom|energy|media|education|fmcg|technology|real-estate|public-sector|biotech|medtech|consumer-health/.test(pathname)) return 'P3';
  if (pathname.startsWith('/global-websites')) return 'P2';
  if (wordCount < 600) return 'P1';
  return 'P1';
}

function briefBlock(row) {
  const geo = inferGeo(row.pathname);
  const defaults = CLUSTER_DEFAULTS[geo] || CLUSTER_DEFAULTS.gcc;
  const kw = primaryKeyword(row.pathname, row.title, row.h1);
  const gap = Math.max(0, 2000 - row.wordCount);
  const links = [...new Set([...defaults.links, row.pathname.startsWith('/healthcare-market-research') ? '/healthcare-market-research' : null].filter(Boolean))];

  return {
    pathname: row.pathname,
    url: row.url,
    status: row.status,
    wordCount: row.wordCount,
    gap,
    tier: tier(row.pathname, row.wordCount),
    primaryKeyword: kw,
    localStats: defaults.stats,
    regulatory: defaults.regulatory,
    competitors: defaults.competitors,
    internalLinks: links,
    copyNotes: [
      `Expand by ~${gap} words to reach 2,000-word threshold.`,
      'Use decision framework: Why it matters → What the evidence says → What to do next.',
      'Add proof/metrics block with cited ranges only (see content-accuracy-standards.md).',
      'Minimum 5 contextual internal links in body (not footer-only).',
      'Link to /healthcare-market-research hub within first 200 words.',
    ],
  };
}

const thinRows = inv.thinPages.map(briefBlock);
const notFoundBriefs = inv.notFoundPages.map((r) => ({
  pathname: r.pathname,
  url: r.url,
  status: 404,
  tier: 'P0-404',
  primaryKeyword: KEYWORD_MAP[r.pathname] || r.pathname.replace(/\//g, ' ').trim(),
  action: 'CTO: create route + SSR page or 301 to nearest live equivalent',
}));

const p0 = thinRows.filter((b) => b.tier === 'P0' || b.tier === 'P0-404');
const p1 = thinRows.filter((b) => b.tier === 'P1');
const p2 = thinRows.filter((b) => b.tier === 'P2');
const p3 = thinRows.filter((b) => b.tier === 'P3');

function mdBrief(b, i) {
  return `### ${i + 1}. \`${b.pathname}\` (${b.wordCount}w → need +${b.gap}w)

- **URL:** ${b.url}
- **Primary keyword:** ${b.primaryKeyword}
- **Local stats (cite in copy):**
${b.localStats.map((s) => `  - ${s}`).join('\n')}
- **Regulatory refs:** ${b.regulatory.join('; ')}
- **Competitor angles:** Position vs ${b.competitors.join(', ')} on GCC-native fieldwork, bilingual execution, access/HEOR depth, proposal speed.
- **Internal link targets:** ${b.internalLinks.map((l) => `\`${l}\``).join(', ')}
- **Copywriter notes:** ${b.copyNotes.join(' ')}
`;
}

const md = [
  '# BIO-448: Thin Page Audit + Research Briefs',
  '',
  `**Issue:** [BIO-448](/BIO/issues/BIO-448) · **Parent:** [BIO-447](/BIO/issues/BIO-447) · **Generated:** ${inv.generatedAt.slice(0, 10)}`,
  '',
  '## Executive summary',
  '',
  `- **Audited:** ${inv.totals.audited} service/landing URLs (production crawl, \`<main>\` word count).`,
  `- **Thin (<2,000w):** ${inv.totals.thin} pages need expansion.`,
  `- **Pass (≥2,000w):** ${inv.totals.pass} pages.`,
  `- **404 / missing routes:** ${inv.totals.notFound} URLs flagged for CTO.`,
  `- **Priority:** P0 GCC pharma cluster (${p0.length} URLs incl. 404s) → Copywriter expansion first; P2/P3 batched via cluster templates below.`,
  '',
  '## Methodology',
  '',
  '- **Crawl source:** `public/sitemap.xml` + known gap URLs (`/specialist-physician-panel-uae`, `/msl-insight-research-middle-east`).',
  '- **Production base:** https://www.bionixus.com (SSR HTML, 2026-06-18 crawl).',
  '- **Word count:** Visible text inside `<main>` after stripping scripts/styles/tags.',
  '- **Threshold:** 2,000 words per issue scope.',
  '- **Triangulation:** Keyword mapping cross-checked against `docs/seo/gcc-keyword-url-mapping.csv` and prior sitewide audits (BIO-449/450).',
  '- **Limitations:** Word count excludes nav/footer; Arabic locale pages may under-count if RTL content is split across components; `/insights/*` listicles included in inventory but deprioritized vs pharma BOFU.',
  '',
  '## 404 inventory — CTO handoff',
  '',
  '| Path | Primary keyword | Action |',
  '|---|---|---|',
  ...notFoundBriefs.map((b) => `| \`${b.pathname}\` | ${b.primaryKeyword} | ${b.action} |`),
  '',
  '## Priority tiers',
  '',
  '| Tier | Count | Definition | Owner |',
  '|---|---:|---|---|',
  `| P0 | ${thinRows.filter((b) => b.tier === 'P0').length} | GCC pharma BOFU + /healthcare-market-research/* | Copywriter |`,
  `| P0-404 | ${notFoundBriefs.length} | Sitemap/SEO gaps — no live page | CTO |`,
  `| P1 | ${p1.length} | Other thin service/landing pages | Copywriter (batch 2) |`,
  `| P2 | ${p2.length} | /insights/* and /global-websites/* listicles | Copywriter (batch 3) |`,
  `| P3 | ${p3.length} | Non-pharma vertical landers (automotive, retail, etc.) | Defer / sunset review |`,
  '',
  '## P0 research briefs (Copywriter-ready)',
  '',
  ...p0.filter((b) => b.tier === 'P0').map((b, i) => mdBrief(b, i)),
  '',
  '## P1 sample (first 15 — full list in CSV)',
  '',
  ...p1.slice(0, 15).map((b, i) => mdBrief(b, i)),
  '',
  '## Cluster templates (P2/P3 batch expansion)',
  '',
  '### /insights/* top-companies listicles (58 thin)',
  '- **Primary keyword pattern:** `top healthcare market research companies {country} 2026`',
  '- **Local stats:** Use country healthcare spend ranges from official budget/regulator sites only; flag >18mo sources.',
  '- **Regulatory:** Country MOH/regulator + data privacy (GDPR for EU readers).',
  '- **Competitors:** IQVIA, Kantar, Ipsos, local agencies — factual HQ/presence only.',
  '- **Internal links:** `/healthcare-market-research`, `/bionixus-market-research-middle-east`, country hub, `/contact`.',
  '',
  '### /global-websites/* legacy (14 thin)',
  '- **Action:** 301 to `/healthcare-market-research/{country}` where mapped; otherwise expand with country-specific proof blocks.',
  '',
  '### Non-pharma vertical pages (P3)',
  '- **Recommendation:** Confirm with CEO whether to expand, noindex, or retire — outside core pharma ICP.',
  '',
  '## Copywriter handoff checklist',
  '',
  '1. Start with P0 pages sorted by `gap_words` descending in `bio-448-thin-page-research-briefs.csv`.',
  '2. Target **2,000–2,500 words**; preserve existing H1/title intent.',
  '3. Apply `docs/seo/content-accuracy-standards.md` — ranges + named sources only.',
  '4. Add FAQ block (5× `<details>`) where missing.',
  '5. Re-run `node scripts/audit-thin-pages-bio448.mjs` after deploy to verify word count.',
  '',
  '## Source list',
  '',
  '- KPMG Saudi Arabia FY2025 budget commentary (healthcare allocation) — 2025',
  '- SFDA Economic Evaluation System circular — effective 1 Jul 2025',
  '- MOHAP / DHA / DOH public guidance — current',
  '- `docs/seo/gcc-keyword-url-mapping.csv` — keyword targets',
  '- `docs/seo/thin-page-upgrade-scorecard.md` — prior upgrade patterns',
  '',
].join('\n');

fs.writeFileSync(outMd, md);

const csvHeader = ['tier', 'pathname', 'url', 'word_count', 'gap_words', 'primary_keyword', 'regulatory_refs', 'internal_links', 'competitors'];
const csvRows = [
  csvHeader.join(','),
  ...thinRows.map((b) =>
    [b.tier, b.pathname, b.url, b.wordCount, b.gap, b.primaryKeyword, b.regulatory.join('|'), b.internalLinks.join('|'), b.competitors.join('|')]
      .map((v) => `"${String(v).replace(/"/g, '""')}"`)
      .join(','),
  ),
  ...notFoundBriefs.map((b) =>
    ['P0-404', b.pathname, b.url, 0, 2000, b.primaryKeyword, 'ROUTE_MISSING', '', ''].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(','),
  ),
];
fs.writeFileSync(outBriefCsv, csvRows.join('\n'));

console.log(`Wrote ${outMd}`);
console.log(`Wrote ${outBriefCsv}`);
console.log(`Briefs: P0=${p0.length} P1=${p1.length} P2=${p2.length} P3=${p3.length} 404=${notFoundBriefs.length}`);
