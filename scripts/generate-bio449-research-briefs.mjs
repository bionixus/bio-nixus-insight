#!/usr/bin/env node
/**
 * Generate BIO-449 research briefs from thin-page audit + GCC keyword mapping.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const audit = JSON.parse(
  fs.readFileSync(path.join(root, 'scripts/data/bio-449-thin-page-audit.json'), 'utf8'),
);
const outMd = path.join(root, 'docs/seo/bio-449-thin-page-research-briefs.md');

const KEYWORD_BY_PATH = {
  '/healthcare-market-research-agency-gcc': 'healthcare market research agency gcc',
  '/market-research-saudi-arabia-pharmaceutical': 'pharma market research company saudi arabia',
  '/uae-pharmaceutical-market-research': 'pharma market research company uae',
  '/bionixus-market-research-middle-east': 'healthcare market research company middle east',
  '/uae-market-access-research': 'market access research uae',
  '/kuwait-market-access-research': 'market access research kuwait',
  '/qatar-market-access-research': 'market access research qatar',
  '/uae-pricing-reimbursement-strategy': 'pricing reimbursement strategy uae',
  '/healthcare-fieldwork-middle-east': 'healthcare fieldwork middle east',
  '/healthcare-fieldwork-gcc': 'healthcare fieldwork gcc',
  '/pharma-fieldwork-saudi-arabia': 'pharma fieldwork saudi arabia',
  '/pharma-fieldwork-uae': 'pharma fieldwork uae',
  '/patient-support-program-research-gcc': 'patient support program research',
  '/patient-journey-research-gcc': 'patient journey research gcc',
  '/patient-adherence-research-middle-east': 'patient adherence research middle east',
  '/real-world-evidence-gcc': 'real world evidence gcc',
  '/heor-consulting-saudi-arabia': 'heor consulting saudi arabia',
  '/budget-impact-model-saudi-arabia': 'budget impact model saudi arabia',
  '/gcc-hcp-recruitment-market-research': 'physician recruitment saudi arabia',
  '/specialist-physician-panel-uae': 'specialist physician panel uae',
  '/brand-tracking-pharma-gcc': 'brand tracking pharma gcc',
  '/respiratory-market-access-gcc': 'respiratory market access gcc',
  '/msl-insight-research-middle-east': 'msl insight research middle east',
  '/commercial-effectiveness-pharma-middle-east': 'commercial effectiveness pharma middle east',
  '/market-research-uae': 'market research uae',
  '/market-research-ksa': 'market research ksa',
  '/market-research-saudi': 'market research saudi arabia',
  '/market-research-kuwait': 'market research kuwait',
  '/market-research-egypt': 'market research egypt',
  '/saudi-payer-market-access-research': 'saudi payer market access research',
  '/healthcare-market-research/services/quantitative-research': 'quantitative healthcare market research',
  '/healthcare-market-research/services/qualitative-research': 'qualitative healthcare market research',
  '/healthcare-market-research/services/physician-insights': 'physician insights research',
  '/healthcare-market-research/services/kol-mapping': 'kol mapping pharmaceutical',
  '/healthcare-market-research/services/market-access': 'pharmaceutical market access research',
  '/healthcare-market-research/therapy/oncology': 'oncology market research',
  '/healthcare-market-research/therapy/diabetes': 'diabetes market research',
  '/healthcare-market-research/therapy/respiratory': 'respiratory market research',
  '/healthcare-market-research/therapy/cardiology': 'cardiology market research',
  '/healthcare-market-research/therapy/vaccines': 'vaccines market research',
  '/healthcare-market-research/therapy/rare-diseases': 'rare disease market research',
  '/healthcare-market-research/therapy/aesthetic-medicine': 'aesthetic medicine market research',
  '/services': 'healthcare market research services',
  '/services/quantitative-research': 'quantitative market research',
  '/services/qualitative-research': 'qualitative market research',
  '/services/market-access': 'market access consulting',
  '/services/kol-stakeholder-mapping': 'kol stakeholder mapping',
  '/services/competitive-intelligence': 'pharmaceutical competitive intelligence',
  '/services/clinical-trial-support': 'clinical trial support research',
};

const REGULATORY = {
  KSA: 'SFDA (Saudi Food and Drug Authority) registration and Economic Evaluation Studies guidelines (July 2024); NUPCO procurement; MOH formulary',
  UAE: 'MOHAP, DHA, DOH Abu Dhabi licensing; mandatory health insurance (DHA/HAAD frameworks); HAAD/SHA pricing',
  Kuwait: 'Kuwait MOH Drug Registration; Central Agency for Public Tenders; KIMS formulary',
  Qatar: 'MOPH registration; HMC formulary; mandatory health insurance (Seha)',
  GCC: 'GCC Central Committee for Drug Registration (GCC-DR); country-specific pricing and tendering',
  Egypt: 'EDA (Egyptian Drug Authority); Universal Health Insurance Authority (UHIA)',
  MiddleEast: 'Country-specific regulators (SFDA, MOHAP, EDA, MOH Kuwait/Qatar); no single GCC HTA body',
};

const LOCAL_STATS = {
  KSA: 'Saudi pharmaceutical market commonly cited in USD 8–11B range (2024–2026 industry estimates); Vision 2030 healthcare localization targets; >70% import dependency for medicines (industry reports)',
  UAE: 'UAE pharma market estimated USD 3–4B; mandatory insurance covers ~98% population (DHA); Abu Dhabi and Dubai dual-payer systems',
  Kuwait: 'Kuwait pharma market ~USD 1B; high per-capita healthcare spend; centralized MOH procurement',
  Qatar: 'Qatar healthcare spend ~3% of GDP; HMC as dominant provider; small but high-value market',
  GCC: 'Combined GCC pharma market often cited USD 15–20B+ (2024–2026 ranges); KSA and UAE represent majority share',
  Egypt: 'Egypt pharma market among largest in MENA; EGP pricing controls; UHIA rollout expanding coverage',
  MiddleEast: 'MENA pharma market growth commonly cited 5–8% CAGR (industry reports); regulatory divergence across markets',
};

const COMPETITORS = {
  agency: 'IQVIA, Kantar (legacy), local boutiques (Aware Research, InfoMine), in-house MA teams',
  fieldwork: 'Local fieldwork networks, CRO panel vendors, IQVIA/Omnicom field teams',
  heor: 'IQVIA HEOR, local HEOR boutiques, academic consultancies; global models often fail local committee review',
  marketAccess: 'Consultancies (ADVANCE, local MA firms), Big 4 health practices, in-house access teams',
  therapy: 'Syndicated data (IQVIA MIDAS where available), therapy-specific consultancies, local KOL networks',
};

const INTERNAL_LINKS = {
  hub: '/healthcare-market-research',
  gccGuide: '/gcc-market-access-guide',
  agency: '/healthcare-market-research-agency-gcc',
  middleEast: '/bionixus-market-research-middle-east',
  methodology: '/methodology',
  contact: '/contact',
  saudiHub: '/healthcare-market-research/saudi-arabia',
  uaeHub: '/healthcare-market-research/united-arab-emirates',
  heor: '/heor-consulting-saudi-arabia',
  budgetImpact: '/budget-impact-model-saudi-arabia',
  rwe: '/real-world-evidence-gcc',
  fieldwork: '/healthcare-fieldwork-middle-east',
};

function geoForPath(pathname) {
  if (pathname.includes('saudi') || pathname.includes('ksa')) return 'KSA';
  if (pathname.includes('uae')) return 'UAE';
  if (pathname.includes('kuwait')) return 'Kuwait';
  if (pathname.includes('qatar')) return 'Qatar';
  if (pathname.includes('egypt')) return 'Egypt';
  if (pathname.includes('gcc') || pathname.includes('agency-gcc')) return 'GCC';
  if (pathname.includes('middle-east')) return 'MiddleEast';
  return 'GCC';
}

function competitorForPath(pathname) {
  if (pathname.includes('heor') || pathname.includes('budget-impact') || pathname.includes('rwe'))
    return COMPETITORS.heor;
  if (pathname.includes('fieldwork')) return COMPETITORS.fieldwork;
  if (pathname.includes('market-access') || pathname.includes('payer')) return COMPETITORS.marketAccess;
  if (pathname.includes('/therapy/')) return COMPETITORS.therapy;
  return COMPETITORS.agency;
}

function briefBlock(row) {
  const kw = KEYWORD_BY_PATH[row.pathname] || row.h1 || row.title.split('|')[0].trim();
  const geo = geoForPath(row.pathname);
  const gap = Math.max(0, 2000 - row.wordCount);
  const status = row.notFound ? '404 — route missing (CTO)' : row.thin ? `THIN (${row.wordCount}w, need +${gap})` : `OK (${row.wordCount}w)`;

  return `### ${row.pathname}

| Field | Detail |
|-------|--------|
| **Status** | ${status} |
| **Primary keyword** | ${kw} |
| **Current word count** | ${row.wordCount} (main content, production crawl ${audit.summary.generatedAt.slice(0, 10)}) |
| **Target** | ≥2,000 words visible SSR copy |
| **Local stats (use ranges)** | ${LOCAL_STATS[geo] || LOCAL_STATS.GCC} |
| **Regulatory refs** | ${REGULATORY[geo] || REGULATORY.GCC} |
| **Competitor angles** | ${competitorForPath(row.pathname)} — differentiate on local execution, committee-ready outputs, cross-functional translation |
| **Internal link targets** | Hub: \`${INTERNAL_LINKS.hub}\`; GCC guide: \`${INTERNAL_LINKS.gccGuide}\`; Agency: \`${INTERNAL_LINKS.agency}\`; Contact: \`${INTERNAL_LINKS.contact}\`; Related geo hub where applicable |
| **Copywriter sections to add** | Executive decision block (Why → Evidence → Next step); 3–5 proof metrics with ranges; FAQ (5–6 Q&A, \`<details>\`/\`<summary>\`); country/therapy-specific regulatory paragraph; competitor comparison table (factual, no superlatives); CTA with proposal link |
| **MRM accuracy gate** | No invented point estimates; cite SFDA/MOH/NUPCO or label BioNixus estimate; flag data >18 months old |
`;
}

const p1Paths = [
  '/healthcare-market-research-agency-gcc',
  '/market-research-saudi-arabia-pharmaceutical',
  '/uae-pharmaceutical-market-research',
  '/bionixus-market-research-middle-east',
  '/uae-market-access-research',
  '/kuwait-market-access-research',
  '/qatar-market-access-research',
  '/healthcare-fieldwork-middle-east',
  '/pharma-fieldwork-saudi-arabia',
  '/pharma-fieldwork-uae',
  '/patient-support-program-research-gcc',
  '/real-world-evidence-gcc',
  '/heor-consulting-saudi-arabia',
  '/budget-impact-model-saudi-arabia',
  '/gcc-hcp-recruitment-market-research',
  '/market-research-uae',
  '/market-research-ksa',
  '/market-research-saudi',
  '/market-research-kuwait',
  '/market-research-egypt',
  '/saudi-payer-market-access-research',
];

const hmrPaths = audit.thin
  .filter((r) => r.cluster === 'healthcare-market-research')
  .map((r) => r.pathname);

const servicesPaths = audit.thin.filter((r) => r.cluster === 'services').map((r) => r.pathname);

const notFoundPaths = audit.notFound.map((r) => r.pathname);

const p1Rows = p1Paths.map((p) => audit.rows.find((r) => r.pathname === p) || { pathname: p, wordCount: 0, thin: true, notFound: true, h1: '', title: '' });
const hmrRows = hmrPaths.map((p) => audit.rows.find((r) => r.pathname === p));
const servicesRows = servicesPaths.map((p) => audit.rows.find((r) => r.pathname === p));

const md = [
  '# BIO-449 — Thin Page Audit & Research Briefs',
  '',
  `**Parent:** [BIO-447](/BIO/issues/BIO-447) · **Generated:** ${audit.summary.generatedAt.slice(0, 10)} · **Auditor:** Market Research Director`,
  '',
  '## Executive summary',
  '',
  `- **271** service/landing URLs crawled from sitemap + known gaps; **${audit.summary.thinCount}** below 2,000-word threshold; **${audit.summary.notFoundCount}** return 404.`,
  '- **P1 BOFU cluster** (21 live pages): all thin except `/healthcare-market-research/saudi-arabia` (2,507w). Highest gap: `/healthcare-market-research-agency-gcc` (424w).',
  '- **9 missing routes** need CTO implementation before copy can ship (includes `/specialist-physician-panel-uae`, `/msl-insight-research-middle-east`).',
  '- **13 healthcare-market-research subpages** (therapy + services) thin — expand with therapy-specific regulatory context and hub cross-links.',
  '- **Copywriter handoff:** P1 briefs below are ready; full CSV inventory at `docs/seo/bio-449-thin-page-inventory.csv`.',
  '',
  '## Methodology',
  '',
  '- **Crawl:** Production HTML fetched 2026-06-18 from `public/sitemap.xml` + 2 known 404 URLs from SEO reports.',
  '- **Word count:** Visible text extracted from `<main>` (fallback `<article>`); nav/footer excluded.',
  '- **Threshold:** <2,000 words = thin (aligned with programmatic report standard).',
  '- **Keyword mapping:** Cross-referenced with `docs/seo/gcc-keyword-gap-scored.csv` (P1 tier) and `gcc-keyword-action-plan.md`.',
  '- **Limitations:** Does not count JSON-LD or meta tags; Arabic `/ar/*` pages audited separately (17 thin); blog and `/market-reports/*` excluded per scope.',
  '- **Lenses applied:** TAM/SAM scoping (GCC ranges only), triangulation (regulatory + industry sources), recency bias check (flag pre-2024 data).',
  '',
  '## 404 routes — flag for CTO',
  '',
  'These URLs are in sitemap or keyword plan but return 404. Copywriter briefs prepared; implementation required first.',
  '',
  ...notFoundPaths.map((p) => `- \`${p}\` — primary keyword: **${KEYWORD_BY_PATH[p] || 'TBD'}**`),
  '',
  '**CTO action:** Add routes in `src/routes.tsx` + page components (several already exist as orphaned TSX files).',
  '',
  '## P1 BOFU pages — full research briefs',
  '',
  ...p1Rows.flatMap((r) => [briefBlock(r), '']),
  '## Healthcare-market-research subpages — research briefs',
  '',
  ...hmrRows.flatMap((r) => [briefBlock(r), '']),
  '## /services cluster — research briefs',
  '',
  ...servicesRows.flatMap((r) => [briefBlock(r), '']),
  '## Remaining thin pages',
  '',
  `See \`docs/seo/bio-449-thin-page-inventory.csv\` for all **${audit.summary.thinCount}** thin URLs including:`,
  '',
  `- **${audit.summary.thinByCluster['standalone-landing'] || 0}** standalone landing pages`,
  `- **${audit.summary.thinByCluster['ar-localized'] || 0}** Arabic localized pages`,
  `- **${audit.summary.thinByCluster['global-websites'] || 0}** global-websites legacy pages`,
  '',
  'Prioritize P1 above; P2 = localized `/ar/*` mirrors of P1 pages; P3 = legacy `/global-websites/*` (redirect candidates).',
  '',
  '## Recommendations',
  '',
  '1. **Copywriter:** Expand P1 BOFU pages first (Track A/B from GCC action plan) using briefs above; target 2,000–2,500 words.',
  '2. **CTO:** Implement 9 missing routes; several page components already exist in `src/pages/`.',
  '3. **SEO:** After expansion, re-run `node scripts/bio-449-thin-page-audit.mjs` to verify word counts.',
  '4. **CEO/Board:** No paid data sources required; all stats use public regulatory docs + industry ranges.',
  '',
  '## Sources',
  '',
  '- SFDA Economic Evaluation Studies guidelines (July 2024)',
  '- GCC keyword gap analysis (`docs/seo/gcc-keyword-gap-scored.csv`, 2026-03-17)',
  '- BioNixus content accuracy standards (`docs/seo/content-accuracy-standards.md`)',
  '- Production crawl audit (`scripts/data/bio-449-thin-page-audit.json`, 2026-06-18)',
  '',
].join('\n');

fs.writeFileSync(outMd, md);
console.log(`Wrote ${outMd} (${md.split('\n').length} lines)`);
