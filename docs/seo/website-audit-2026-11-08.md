# Website SEO audit — 2026-11-08

## Google Search Console (week ending 2026-11-08)

| Metric | Value | Target | Δ vs last week |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | +137 |
| Clicks/day | 52 | 450 | +18 |
| CTR | 1.13% | 3.0% | +0.37 pp |
| Avg. position | 19.5 | 5.0 | +6.3 (improved) |

**Diagnostics:** US CTR remains 0.12% (51k impr/week). Mobile CTR 2.63% vs desktop 0.74%. Winning cluster: `/pharmaceutical-companies-*` at 2.21% CTR. Page-1 queries with &lt;1.5% CTR include **fmcg**, **companies like iqvia**, **iqvia alternatives**, and Dubai/UAE pharma directory intents.

Full scorecard: `reports/weekly-report-2026-11-08.md`.

## Production crawl

| Check | Result |
|---|---|
| Sitemap URLs crawled | 1,325 |
| SEO phase-2 MAJOR | **4** (all missing H1 on localized blog URLs) |
| SEO phase-2 PASS | 1,291 |
| Thin service/landing pages (&lt;2,000 SSR words) | **305** |
| HTTP 404 | **0** |
| Fetch errors | **0** |

Thin inventory: `docs/seo/bio-450-thin-page-inventory.csv`  
Sitewide audit: `docs/seo/sitewide-audit-phase2.md`

## Fixes shipped this run

1. **P0 SSR — localized blog posts:** `fetchRouteData` now loads `blog-post` data for `/de|fr|es|pt|ru|zh|ar/blog/:slug`, so crawlers and LLMs receive full article HTML + H1 (was client-only shell on `/de/blog/*` and `/fr/blog/*`).
2. **Thin report uplift:** Turkey and Brazil healthcare reports — hospital network tables, extra epidemiology rows (+`dateModified` 2026-11-08).
3. **China hub:** `/healthcare-market-research-china` — NRDL/VBP access FAQ + commercial-pathway copy (+ device report inlink).
4. **CTR / LLM snippet:** `/iqvia-alternative` meta description now leads with “Companies like IQVIA” while keeping the frozen title; static HTML + title-freeze updated.

## Next sprint (not in this PR)

- **~300** remaining thin landings — prioritize service-scope pages &lt;1k words with GSC impressions.
- **US snippet recovery** — desktop title/meta tests on high-impression, low-CTR US URLs.
- **FMCG page-1 CTR** — title tests for `fmcg` / `fmcg companies` queries (pos 4–6, &lt;1.5% CTR).
- **Directory matrix indexation** — waves 1–5 still fail 14-day 80% GSC indexation gate (`npm run report:directory-gates`).
- After deploy: `npm run indexnow:priority` and re-run `node scripts/audit-thin-pages-bio450.mjs`.

## DEPLOY CHECKLIST

- `src/data/fetchRouteData.ts`
- `src/data/marketIntelligence/mena.ts`
- `src/data/marketIntelligence/americas.ts`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/HealthcareMarketResearchChina.tsx`
- `src/server/ctr-seo-overrides.js`
- `lib/ctr-seo-overrides.mjs`
- `data/seo/title-freeze.json`
- `public/conf/iqvia-alternative.html`
- `src/lib/seo/__tests__/japan-iqvia-china-snippets-nov-2026.test.ts`
- `docs/seo/website-audit-2026-11-08.md`
- `reports/weekly-report-2026-11-08.md`
- `docs/seo/sitewide-audit-phase2.md`
- `docs/seo/bio-450-thin-page-inventory.csv` (regenerated)
- `public/sitemap.xml` (lastmod bumps)
