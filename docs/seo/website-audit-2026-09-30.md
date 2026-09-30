# BioNixus website SEO audit — 2026-09-30

## GSC snapshot (week ending import in `data/gsc/current-week/`)

| Metric | This week | Target | vs target |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −10,552 |
| Clicks/day | 33 | 450 | −417 |
| CTR | **0.75%** | 3.0% | −2.25 pp |
| Avg. position | **25.8** | 5.0 | +20.8 |

### CTR diagnostics

- **United States:** 33% of impressions at **0.09% CTR** — largest single-country drag.
- **Desktop:** 0.50% CTR on 86% of device impressions; **mobile 2.23%** CTR.
- **Winning cluster:** `/pharmaceutical-companies-*` at **1.60% CTR**.
- **Insights listicles:** 0.70% CTR (3,148 impr).
- **Page-1 opportunity:** `iqvia competitors` @ pos 6.3 with **0% CTR** on `/iqvia-alternative`.

Full narrative: `reports/weekly-report-2026-09-30.md`.

## Production crawl (2026-09-30)

| Check | Result |
|---|---|
| URLs audited (BIO-450 sitemap) | 655 |
| Thin pages (&lt;2,000 visible words in `<main>`) | **339** |
| HTTP 404 | **0** |
| Server errors | **0** |
| Sitewide phase-2 (full sitemap) | 1274 URLs — **8 MAJOR** (6 DE/FR blogs missing H1 in HTML, 2 video watch URLs empty SSR) |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv`.

## Priority-zero SSR fixes (shipped this run)

1. **Locale blog posts** (`/de/blog/*`, `/fr/blog/*`, etc.) — `fetchRouteData` did not load Sanity post data on the server, so HTML shipped the loading skeleton without `<h1>`. Added localized blog slug handling.
2. **`/videos/:slug`** — `VideoWatchPage` was client-only lazy without an SSR barrel; HTML was an empty Suspense shell. Switched to eager import so watch pages render full transcripts in view-source.

## Content & LLM ranking (shipped this run)

1. **`/iqvia-alternative`** — CTR title leads with “IQVIA Competitors” for the head query.
2. **`/ru/services`** — Russian GeoLLM answer block + IQVIA/LLM FAQs (mirrors English/Arabic hubs).
3. **Developed-market MedTech landings** — seventh FAQ on AI citation for every country scope page.
4. **`/healthcare-market-research-companies`** — two buyer/LLM FAQs to cross the 2,000-word threshold.
5. **Company directory template** — shared “How to cite this directory” section for AI assistants across pharma directory spokes.

## Recommended next actions

1. Deploy and run `npm run indexnow:priority`.
2. Thin backlog ~330 — pharmaceutical directory spokes 1,850–1,980w, locale insight hubs &lt;500w.
3. US CTR: body copy on USA listicle and homepage hero tests (meta-only changes insufficient at 0.09% US CTR).
4. Upload fresh GSC export weekly to `data/gsc/current-week/`.
5. Re-crawl post-deploy; expect MAJOR count → 0 for DE/FR blogs and video watch URLs.

## DEPLOY CHECKLIST

- `src/data/fetchRouteData.ts`
- `src/routes.tsx`
- `src/pages/VideoWatchPage.tsx` (unchanged logic; routing SSR fix)
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `src/data/developedMarketMedtechPages.ts`
- `src/data/servicesHubContent.ts`
- `src/data/servicesHubContent.ru.ts`
- `src/pages/templates/CompanyDirectoryPage.tsx`
- `src/pages/HealthcareMarketResearchCompanies2026.tsx`
- `docs/seo/website-audit-2026-09-30.md`
- `reports/weekly-report-2026-09-30.md`
