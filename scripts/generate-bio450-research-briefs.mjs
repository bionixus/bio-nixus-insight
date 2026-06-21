#!/usr/bin/env node
/**
 * Generate copywriter-ready research briefs from BIO-450 thin-page audit JSON.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const auditPath = path.join(root, 'scripts/data/bio-450-thin-page-audit.json');
const keywordCsv = path.join(root, 'docs/seo/gcc-keyword-url-mapping.csv');
const outMd = path.join(root, 'docs/seo/bio-450-thin-page-research-briefs.md');

const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'));

function parseCsv(text) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map((line) => {
    const cols = [];
    let cur = '';
    let inQ = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') inQ = !inQ;
      else if (c === ',' && !inQ) {
        cols.push(cur);
        cur = '';
      } else cur += c;
    }
    cols.push(cur);
    const row = {};
    headers.forEach((h, i) => (row[h] = cols[i] || ''));
    return row;
  });
}

const keywordRows = parseCsv(fs.readFileSync(keywordCsv, 'utf8'));
const urlToKeyword = new Map();
for (const row of keywordRows) {
  if (!row.target_url) continue;
  try {
    const p = new URL(row.target_url).pathname;
    urlToKeyword.set(p, row);
  } catch {
    /* skip */
  }
}

const OUT_OF_SCOPE = new Set([
  '/media',
  '/news',
  '/blog',
  '/case-studies',
  '/market-reports',
  '/sitemap',
  '/privacy',
  '/terms',
  '/contact',
  '/contacts',
  '/faq',
  '/resources',
  '/conf',
]);

const REGULATORY = {
  KSA: 'SFDA (registration), CHI/CCHI (coverage), NUPCO (public procurement), Yaqeen (RWE)',
  UAE: 'MOHAP/DHA/DOH (licensing), Daman/Thiqa (coverage), federal pricing circulars',
  Kuwait: 'MOH Kuwait, KDDC, public tender cycles',
  Qatar: 'MOPH, Hamad formulary, NHIC',
  Egypt: 'EDA, UPA, NHRA pricing committees',
  GCC: 'SFDA, MOHAP, MOPH, KDDC — country-specific payer pathways',
  MiddleEast: 'GCC regulators + Egypt/Jordan/Lebanon payer mix',
};

const COMPETITORS =
  'IQVIA MENA, Kantar Health (legacy), GfK (Egypt legacy), local boutique agencies (Synapse, PSRC, Middle East Research Group)';

const HUB_LINKS = [
  '/healthcare-market-research',
  '/bionixus-market-research-middle-east',
  '/gcc-pharmaceutical-market-research',
  '/contact',
];

function inferGeo(pathname) {
  if (pathname.includes('saudi') || pathname.includes('-ksa') || pathname.includes('/ksa')) return 'KSA';
  if (pathname.includes('uae') || pathname.includes('dubai') || pathname.includes('emirates')) return 'UAE';
  if (pathname.includes('kuwait')) return 'Kuwait';
  if (pathname.includes('qatar')) return 'Qatar';
  if (pathname.includes('egypt')) return 'Egypt';
  if (pathname.includes('gcc') || pathname.includes('middle-east')) return 'GCC';
  return 'MiddleEast';
}

function inferPrimaryKeyword(pathname, title, h1, mapped) {
  if (mapped?.keyword) return mapped.keyword;
  if (h1) return h1.replace(/\s*\|\s*BioNixus.*$/i, '').trim();
  const slug = pathname.replace(/^\//, '').replace(/\//g, ' ');
  return slug.replace(/-/g, ' ');
}

function inferStats(geo) {
  const stats = {
    KSA: 'Saudi pharma market ~USD 11–13B (2024–2025 est., IQVIA/GCC trade press); Vision 2030 localization targets; CHI unified claims growth',
    UAE: 'UAE pharma ~USD 4–5B; Dubai/Abu Dhabi dual licensing; mandatory health insurance penetration >98% in Dubai (DHA, 2024)',
    Kuwait: 'Kuwait pharma import-dependent; MOH tender cycles drive access timelines',
    Qatar: 'Qatar health spend per capita among highest in GCC (WHO GCC profile, 2023)',
    Egypt: 'Egypt largest Arab pharma market by volume; EGP pricing reforms ongoing (2024–2025)',
    GCC: 'GCC pharma ~USD 35B+ combined (trade estimates 2024); localization and HTA adoption accelerating',
    MiddleEast: 'MENA pharma growth 6–8% CAGR range (secondary analyst consensus 2023–2025)',
  };
  return stats[geo] || stats.MiddleEast;
}

function internalLinks(pathname) {
  const links = [...HUB_LINKS];
  if (pathname.startsWith('/healthcare-market-research/')) {
    links.push('/healthcare-market-research/services/market-access', '/methodology');
  }
  if (pathname.includes('saudi')) {
    links.push('/market-research-saudi', '/sfda-market-access-strategy-saudi-arabia', '/saudi-payer-market-access-research');
  }
  if (pathname.includes('uae')) {
    links.push('/market-research-uae', '/uae-market-access-research', '/pharmaceutical-market-research-dubai');
  }
  if (pathname.includes('oncology')) {
    links.push('/kol-mapping-saudi-arabia-oncology', '/healthcare-market-research/therapy/oncology');
  }
  if (pathname.includes('market-access')) {
    links.push('/gcc-market-access-guide', '/budget-impact-model-saudi-arabia');
  }
  return [...new Set(links)].slice(0, 6);
}

function competitorAngle(pathname, mapped) {
  if (pathname.includes('iqvia')) return 'Position BioNixus as faster GCC fieldwork, local payer literacy, transparent pricing vs IQVIA enterprise bundles';
  if (pathname.includes('kantar')) return 'Highlight healthcare-native methodology post-Kantar portfolio changes; GCC Arabic fieldwork depth';
  if (pathname.includes('gfk')) return 'Egypt/local panel access vs legacy GfK exit; pricing sensitivity expertise';
  if (mapped?.cluster === 'bofu-agency') return 'Agency-intent comparison: regional presence, therapy expertise, access + research integration';
  if (pathname.startsWith('/healthcare-market-research/services/')) return 'Service-line depth vs generalist agencies; link to case studies and methodology';
  return `Differentiate on GCC/MENA fieldwork speed, payer-aware research design, integrated access support (${COMPETITORS})`;
}

function expansionOutline(pathname, gap) {
  const sections = [
    'Executive framing (Why it matters → Evidence → Next step)',
    'Local market context with cited stats (2–3 data points)',
    'Regulatory/payer workflow section',
    'BioNixus methodology + deliverables table',
    'FAQ block (5–7 questions, 100–150 words each)',
    'Competitor/alternative comparison (neutral tone)',
    'Internal links + CTA',
  ];
  if (gap > 800) sections.splice(2, 0, 'Therapy/use-case subsection', 'Case study or proof block');
  return sections;
}

function briefFor(row) {
  const mapped = urlToKeyword.get(row.pathname);
  const geo = inferGeo(row.pathname);
  const keyword = inferPrimaryKeyword(row.pathname, row.title, row.h1, mapped);
  const gap = row.gap ?? 0;
  const priority = mapped?.primary_action === 'create' ? 'P0-create' : gap < 200 ? 'P2-near-threshold' : gap < 600 ? 'P1-expand' : 'P0-deep-expand';
  const scope = OUT_OF_SCOPE.has(row.pathname) ? 'out-of-scope-index' : 'service-landing';

  return {
    pathname: row.pathname,
    wordCount: row.wordCount,
    gap,
    priority,
    scope,
    keyword,
    geo,
    stats: inferStats(geo),
    regulatory: REGULATORY[geo],
    competitors: competitorAngle(row.pathname, mapped),
    internalLinks: internalLinks(row.pathname),
    expansionOutline: expansionOutline(row.pathname, gap),
    copywriterNote: mapped?.notes || `Add ~${gap} words using executive English format; avoid invented statistics — cite public sources with dates.`,
  };
}

const thinBriefs = audit.thin.map(briefFor);
const notFoundBriefs = audit.notFound.map((row) => ({
  pathname: row.pathname,
  status: 404,
  keyword: urlToKeyword.get(row.pathname)?.keyword || row.pathname.replace(/^\//, '').replace(/-/g, ' '),
  action: 'CTO: create route + SSR page or 301 to nearest live equivalent',
  mapped: urlToKeyword.get(row.pathname) || null,
}));

const inScope = thinBriefs.filter((b) => b.scope !== 'out-of-scope-index');
const p0 = inScope.filter((b) => b.priority.startsWith('P0'));
const p1 = inScope.filter((b) => b.priority === 'P1-expand');
const p2 = inScope.filter((b) => b.priority === 'P2-near-threshold');

let md = `# BIO-450: Thin Page Audit + Research Briefs

**Parent:** [BIO-447](/BIO/issues/BIO-447) · **Issue:** [BIO-450](/BIO/issues/BIO-450)  
**Generated:** ${audit.summary.generatedAt}  
**Method:** Production crawl of sitemap + extra paths; SSR-visible word count from \`<main>\` text; threshold **2,000 words**.

## Executive summary

- **${audit.summary.livePages}** live service/landing URLs audited; **${audit.summary.thinPages}** below 2,000 words (**${inScope.length}** in copy expansion scope after excluding index/utility pages).
- **${audit.summary.healthcareMarketResearchThin}** thin pages in \`/healthcare-market-research/*\` cluster — highest SEO priority for [BIO-451](/BIO/issues/BIO-451).
- **${audit.notFound.length}** URLs return **404** (7 mapped in keyword plan; **2** flagged in issue scope: \`/specialist-physician-panel-uae\`, \`/msl-insight-research-middle-east\`) → escalate to CTO.
- Near-threshold pages (gap <200w): **${p2.length}** — quick Copywriter pass.
- Deep-expand pages (gap ≥600w): **${p0.length}** — full brief sections below.

## Methodology & limitations

| Item | Detail |
|------|--------|
| Data source | \`public/sitemap.xml\` + manual 404 checks (${audit.summary.totalAudited} paths) |
| Word count | Visible text inside \`<main>\` after HTML strip (production SSR) |
| Threshold | 2,000 words per [BIO-447](/BIO/issues/BIO-447) scope |
| Triangulation | Stats from IQVIA/GCC trade press, WHO GCC profiles, MOH/SFDA public pages — **verify dates before publish** |
| Limitation | Locale duplicates (\`/ar/*\`, \`/de/*\`) counted separately; programmatic \`/market-reports/*\` excluded (separate verify script) |
| Recency | Crawl ${audit.summary.generatedAt.slice(0, 10)}; re-run post [BIO-451](/BIO/issues/BIO-451) deploy for [BIO-452](/BIO/issues/BIO-452) |

## 404 inventory → CTO

| Path | Primary keyword (planned) | Recommended motion |
|------|---------------------------|-------------------|
`;

for (const nf of notFoundBriefs) {
  const motion = nf.mapped?.primary_action || 'create';
  md += `| \`${nf.pathname}\` | ${nf.keyword} | ${motion} — ${nf.mapped?.notes || 'net-new landing page'} |\n`;
}

md += `
## Priority queue for Copywriter ([BIO-451](/BIO/issues/BIO-451))

### P0 — Deep expand (gap ≥600 words) — ${p0.length} pages

`;

for (const b of p0.sort((a, c) => c.gap - a.gap).slice(0, 60)) {
  md += briefSection(b);
}

if (p0.length > 60) md += `\n*…${p0.length - 60} additional P0 pages — see CSV inventory for full list.*\n`;

md += `\n### P1 — Moderate expand (200–599 word gap) — ${p1.length} pages\n\n`;
for (const b of p1.sort((a, c) => c.gap - a.gap)) {
  md += briefSection(b, true);
}

md += `\n### P2 — Near threshold (<200 word gap) — ${p2.length} pages\n\n`;
md += `Quick expansion: add FAQ pair + proof block + internal links. Pages:\n\n`;
for (const b of p2.sort((x, y) => x.gap - y.gap)) {
  md += `- \`${b.pathname}\` — **${b.wordCount}** words (gap **${b.gap}**)\n`;
}

md += `\n## Out of scope (index/utility — no 2,000-word target)\n\n`;
for (const b of thinBriefs.filter((x) => x.scope === 'out-of-scope-index')) {
  md += `- \`${b.pathname}\` (${b.wordCount} words)\n`;
}

md += `\n## Source list (public, verify before publish)\n\n`;
md += `- IQVIA / GCC pharmaceutical market estimates (2024–2025 trade summaries)\n`;
md += `- WHO Eastern Mediterranean / GCC health expenditure profiles (2023)\n`;
md += `- SFDA, MOHAP, DHA, MOPH official guidance pages (regulatory workflow)\n`;
md += `- BioNixus internal: \`docs/seo/gcc-keyword-url-mapping.csv\`, \`docs/seo/gcc-keyword-gap-scored.csv\`\n`;

fs.writeFileSync(outMd, md);
console.log(`Wrote ${outMd} (${thinBriefs.length} briefs, ${notFoundBriefs.length} 404 flags)`);

function briefSection(b, compact = false) {
  if (compact) {
    return `\n#### \`${b.pathname}\` (${b.wordCount}w → +${b.gap})\n- **Keyword:** ${b.keyword}\n- **Stats:** ${b.stats}\n- **Regulatory:** ${b.regulatory}\n- **Competitor angle:** ${b.competitors}\n- **Internal links:** ${b.internalLinks.map((l) => `\`${l}\``).join(', ')}\n`;
  }
  return `
#### \`${b.pathname}\`
- **Current:** ${b.wordCount} words (gap **${b.gap}**)
- **Primary keyword:** ${b.keyword}
- **Geo:** ${b.geo}
- **Local stats (secondary — verify):** ${b.stats}
- **Regulatory refs:** ${b.regulatory}
- **Competitor angle:** ${b.competitors}
- **Internal link targets:** ${b.internalLinks.map((l) => `\`${l}\``).join(', ')}
- **Expansion outline:** ${b.expansionOutline.join(' → ')}
- **Copywriter note:** ${b.copywriterNote}
`;
}
