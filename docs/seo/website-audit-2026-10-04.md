# BioNixus website SEO audit — 2026-10-04

## GSC snapshot (week ending import in `data/gsc/current-week/`)

| Metric | This week | Target | vs target | Last week | vs last week |
|---|---|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −10,552 | 4,785 | −337 |
| Clicks/day | 33 | 450 | −417 | 37 | −4 |
| CTR | **0.75%** | 3.0% | −2.25 pp | 0.77% | −0.02 pp |
| Avg. position | **25.8** | 5.0 | +20.8 | 28.4 | **+2.6 improved** |

### CTR diagnostics

- **United States:** 33% of impressions at **0.09% CTR** — largest single-country drag.
- **Desktop:** 0.50% CTR (86% of device impressions); **mobile 2.23%** CTR.
- **Winning cluster:** `/pharmaceutical-companies-*` at **1.60% CTR** (8,756 impr).
- **Deep-SERP dilution:** pages pos &gt;40 with ≥200 impr → **0.10% CTR** (Japan/GCC device reports).
- **Money queries (page-1, &lt;1.5% CTR):** `iqvia competitors` (pos 6.3), `gcc functional service providers market` (pos 4.6), Brazil health/pharma news cluster, Cairo hospitals, Dubai pharma company intents.
- **New top-10 page by clicks:** `/iqvia-alternative` — continue CTR title/meta monitoring.

Full narrative: `reports/weekly-report-2026-10-04.md`.

## Production crawl (BIO-448, 2026-10-04)

| Check | Result |
|---|---|
| URLs audited | 939 |
| Thin pages (&lt;2,000 visible words) | **507** |
| HTTP 404 | **0** |
| Server errors | **0** |
| Pass (≥2,000 words) | 432 |

Inventory: `docs/seo/bio-448-thin-page-inventory.csv`.

### High-impression thin URLs (priority queue)

| Path | Words (prod) | GSC impr (week) | Pos |
|---|---|---|---|
| `/brazil-healthcare-market-report` | 1,917 | 1,070 | 41.1 |
| `/pharmaceutical-companies-iran` | 1,969 | 882 | 6.3 |
| `/pharmaceutical-companies-iraq` | 1,945 | 869 | 6.4 |
| `/services/competitive-intelligence` | 961 → **2,011 SSR** | 303 | 63.6 |
| `/gcc-functional-service-providers-market` | 712 → **2,051 SSR** | 108 | 24.7 |

## Errors

- **404:** none in sitemap crawl.
- **Arabic blog stubs:** several `/ar/blog/*` URLs show &lt;20 SSR words in crawl — Sanity/CMS hydration risk; track separately from service landings.

## Changes shipped this sprint (branch `cursor/website-content-and-ranking-01de`)

1. **`/services/competitive-intelligence`** — GeoLLM answer block, 8 expanded FAQs (details/summary), hero extension copy for LLM/chat citation.
2. **`/gcc-functional-service-providers-market`** — structure narrative + 5 FAQs (targets GSC “gcc functional service providers market”).
3. **Near-threshold GSC pages** — `/pharmaceutical-companies-iran`, `/pharmaceutical-companies-iraq`, `/brazil-healthcare-market-report` content + `dateModified` 2026-10-04.
4. **Weekly report** — `reports/weekly-report-2026-10-04.md` regenerated from GSC CSVs.

## LLM / AI citation recommendations

1. Keep **GeoLLMAnswerBlock** on high-intent service and hub pages; extend to `kol-stakeholder-mapping` and `quantitative-research` non-premium paths if still &lt;2k words post-deploy.
2. **US CTR:** body-copy tests on USA listicles — meta-only changes underperform at 0.09% US CTR.
3. **IQVIA cluster:** monitor `/iqvia-alternative` after title wave; link from competitive-intelligence FAQ.
4. Post-deploy: `npm run indexnow:priority` and re-crawl `node scripts/audit-thin-pages-bio448.mjs`.

## DEPLOY CHECKLIST

- `src/data/seo/serviceExpandedPageContent.ts`
- `src/pages/ServiceDetail.tsx`
- `src/data/specialtyMarketDemandContent.ts`
- `src/pages/IranPharmaCompanies.tsx`
- `src/pages/IraqPharmaCompanies.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `docs/seo/website-audit-2026-10-04.md`
- `docs/seo/bio-448-thin-page-inventory.json` (regenerated crawl)
- `reports/weekly-report-2026-10-04.md`
