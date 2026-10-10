# BioNixus website SEO audit — 2026-10-10

## GSC snapshot (week ending import in `data/gsc/current-week/`)

| Metric | This week | Target | vs target | Last week | vs last week |
|---|---|---|---|---|---|
| Impressions/day | **4,585** | 15,000 | −10,415 | 4,448 | +137 |
| Clicks/day | **52** | 450 | −398 | 33 | +18 |
| CTR | **1.13%** | 3.0% | −1.87 pp | 0.75% | +0.37 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | 25.8 | **+6.3 (improved)** |

### CTR diagnostics

- **United States:** ~35% of impressions at **0.12% CTR** — largest single-country drag.
- **Desktop:** 0.74% CTR on ~80% of device impressions; **mobile 2.63%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (619 clicks / week).
- **Insights listicles:** 0.84% CTR — title/meta and answer-first copy still underperform on page-1 IQVIA queries (`companies like iqvia` pos 3.1, 0% CTR).
- **Deep SERP bucket:** pages with position &gt;40 and ≥200 impressions dilute headline CTR to 0.16% on that slice.

Full narrative: `reports/weekly-report-2026-10-10.md`.

## Production crawl (BIO-448, 2026-10-10)

| Check | Result |
|---|---|
| URLs audited | **937** |
| Thin pages (&lt;2,000 visible words in `<main>`) | **479** |
| HTTP 404 | **0** |
| Server errors | **0** |
| Pass (≥2,000 words) | **458** |

Inventory: `docs/seo/bio-448-thin-page-inventory.csv`, `docs/seo/bio-448-thin-page-inventory.json`.

### Priority thin backlog (post-deploy targets)

1. **Arabic pharma directories** (`/ar/pharmaceutical-companies-*`) — were ~600–690w; expanded in this sprint with GeoLLM + market-context sections.
2. **`/healthcare-market-statistics`** — was 1,647w; expanded with GeoLLM, usage guide, FAQ, and additional cited stats.
3. **Arabic blog stubs** (`/ar/blog/*` with &lt;100w) — Sanity/CMS body content; requires republish in Sanity, not SSR template alone.
4. **Near-threshold directory pages** (1,990–1,999w) — e.g. `/pharmaceutical-companies-brazil`; small FAQ additions in batch.

## Errors

- **404:** none in sitemap crawl.
- **SSR:** no new regressions flagged in this pass; run `npm run audit:sitewide:phase2` post-deploy.

## LLM / chat visibility

- GeoLLM answer blocks added or reinforced on **Arabic pharma directories** and **healthcare statistics hub** (FAQPage + Dataset schema).
- Continue CTR body-copy tests on USA desktop for FMCG and IQVIA-alternative landings (GSC page-1, 0% CTR queries).

## Changes shipped this sprint (branch `cursor/website-content-and-ranking-b697`)

1. **`/ar/pharmaceutical-companies-*` (6 GCC/MENA directories)** — depth content (`arPharmaDirectoryDepth.ts`), GeoLLM, five market-context sections per country, extra FAQs; `dateModified` 2026-10-10.
2. **`/healthcare-market-statistics`** — GeoLLM, “How teams use this dataset”, FAQ (`<details>`), ConversionCTA, Egypt/Italy/Brazil stats, `dateModified` 2026-10-10.
3. **`/pharmaceutical-companies-brazil`** — additional FAQ (GLP-1 / obesity channel) to cross 2,000w threshold.
4. **Reports:** `reports/weekly-report-2026-10-10.md`; regenerated BIO-448 inventory.

## Recommended next actions

1. Deploy and run `npm run indexnow:priority`.
2. Re-crawl: `node scripts/audit-thin-pages-bio448.mjs` — confirm AR pharma + statistics hub pass 2,000w.
3. Sanity: republish thin **Arabic blog** posts with full article body (≥2,000w) or noindex stubs until published.
4. US CTR sprint: answer-first paragraphs on `/iqvia-alternative`, FMCG hubs, and Dubai pharma directory for page-1 queries with 0% CTR.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/arPharmaDirectoryDepth.ts` (new)
- `src/data/arPharmaDirectories.ts`
- `src/pages/templates/ArPharmaCompaniesDirectoryPage.tsx`
- `src/data/healthcareMarketStatistics.ts`
- `src/data/healthcareMarketStatisticsFaq.ts` (new)
- `src/pages/HealthcareMarketStatistics.tsx`
- `src/pages/BrazilPharmaCompanies.tsx`
- `docs/seo/website-audit-2026-10-10.md`
- `docs/seo/bio-448-thin-page-inventory.json` (regenerated crawl)
- `docs/seo/bio-448-thin-page-inventory.csv` (regenerated crawl)
- `reports/weekly-report-2026-10-10.md`
