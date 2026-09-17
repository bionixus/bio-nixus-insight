# BioNixus website audit — 2026-09-17

## GSC performance (week ending export in `data/gsc/current-week/`)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02 pp |
| Avg. position | **25.8** | 5.0 | **+2.6** (improved) |

**Structural CTR drag:** United States = 33% of impressions at **0.09% CTR**. Desktop = 86% of device impressions at **0.50% CTR**. Winning cluster: `/pharmaceutical-companies-*` at **1.60% CTR**.

Full narrative: `reports/weekly-report-2026-09-17.md`.

## Production crawl (service landings, &lt;2,000 words in `<main>`)

| Check | Result |
|---|---|
| URLs audited | 697 |
| Thin pages | **376** |
| HTTP 404 (sitemap landings) | **0** |
| Off-sitemap 404 | **`/gcc-biologics-market`** → fixed via 301 to `/gcc-biopharmaceuticals-market` |

Inventory: `docs/seo/bio-449-thin-page-inventory.csv`.

## Sitewide SEO (1,278 URLs)

| Severity | Count |
|---|---|
| PASS | 1,243 |
| MINOR | 26 |
| MAJOR | 9 |

**MAJOR (follow-up):** DE/FR localized blogs missing H1 in crawl; `/videos/*` watch pages shipped without SSR body (preload gap — fixed in code).

Report: `docs/seo/sitewide-audit-phase2.md`.

## Changes shipped this run

1. **Content (2,000+ word target):** expanded SSR copy on `febrile-neutropenia-market` (~2,005 words), `gcc-functional-service-providers-market` (~2,059), `gcc-generic-pharmaceuticals-market` (~2,010) — verified on local production server SSR.
2. **CTR / snippets:** research-led titles and descriptions for febrile neutropenia and GCC FSP (`src/server/ctr-seo-overrides.js`).
3. **404 / alias:** `config/legacy-redirects.json` — `/gcc-biologics-market` → biopharmaceuticals hub.
4. **LLM / crawler HTML:** `/videos/:slug` eager-loaded (no lazy Suspense) + `preloadRouteChunk` preload — watch pages now ship `<h1>` in SSR.

## Recommended next sprint

1. Deploy and run `npm run indexnow:priority` (Tier 1b URLs added).
2. USA/desktop snippet tests on `iqvia-alternative` and pharmaceutical-companies Dubai cluster.
3. DE/FR blog template H1 in SSR.
4. Continue thin-landing backlog (~370); prioritise GSC page-1 zero-CTR queries in weekly report.

## DEPLOY CHECKLIST

- `src/data/specialtyMarketDemandContent.ts`
- `src/data/gccSegmentMarketContent.ts`
- `src/lib/preloadRouteChunk.ts`
- `config/legacy-redirects.json`
- `src/server/ctr-seo-overrides.js`
- `lib/ctr-seo-overrides.mjs`
- `scripts/gsc-priority-recrawl.txt`
- `docs/seo/website-audit-2026-09-17.md`
- `reports/weekly-report-2026-09-17.md`
- `docs/seo/sitewide-audit-phase2.md` (regenerated)
- `docs/seo/bio-449-thin-page-inventory.csv` (regenerated)
