# BioNixus website audit — 2026-09-18

## GSC performance (week ending export in `data/gsc/current-week/`)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02 pp |
| Avg. position | **25.8** | 5.0 | **+2.6** (improved) |

**Structural CTR drag:** United States = 33% of impressions at **0.09% CTR**. Desktop = 86% of device impressions at **0.50% CTR**. Winning cluster: `/pharmaceutical-companies-*` at **1.60% CTR**.

Full narrative: `reports/weekly-report-2026-09-18.md`.

## Production crawl (service landings, &lt;2,000 words in `<main>`)

| Check | Result |
|---|---|
| URLs audited | 697 |
| Thin pages | **376** (pre-deploy baseline) |
| HTTP 404 (sitemap landings) | **0** |

Inventory: `docs/seo/bio-449-thin-page-inventory.csv`.

## Sitewide SEO (1,278 URLs, production)

| Severity | Count |
|---|---|
| PASS | 1,244 |
| MINOR | 26 |
| MAJOR | 8 |

**MAJOR:** DE/FR localized blogs missing H1 (SSR data gap — fixed in code); `/videos/*` thin body (watch pages have H1; transcript expansion optional).

Report: `docs/seo/sitewide-audit-phase2.md`.

## LLM / AI crawler readiness

- `https://www.bionixus.com/llms.txt` on IndexNow priority list.
- Money pages (`iqvia-alternative`, healthcare hubs) already 4k+ SSR words.
- Expanded GSC zero-CTR landings to 2,000+ SSR words (see below).

## Changes shipped this run

1. **Merged 2026-09-17 sprint:** febrile neutropenia, GCC FSP, GCC generic pharma (2,000+ words); `/gcc-biologics-market` 301; video watch SSR preload.
2. **Content (2,000+ SSR words, local verify):** `japan-medical-disposables-market` (~2,178), `japan-neurology-devices-market` (~2,024).
3. **CTR snippets:** research-led titles for Japan disposables and neurology (`src/server/ctr-seo-overrides.js`, `lib/ctr-seo-overrides.mjs`).
4. **DE/FR/ES/PT/RU/ZH blog SSR:** `fetchRouteData` + `preloadRouteChunk` for localized blog posts — restores `<h1>` and body in initial HTML for Sanity posts.
5. **IndexNow:** added Japan priority URLs to `scripts/gsc-priority-recrawl.txt`.

## Recommended next sprint

1. Deploy and run `npm run indexnow:priority`.
2. USA/desktop snippet tests on `iqvia-alternative` and Dubai pharmaceutical-companies cluster.
3. Continue thin-landing backlog (~370); prioritise page-1 zero-CTR queries in weekly report.
4. Company-directory matrix waves: 0% GSC indexation at day 14 — internal links + indexation push.

## DEPLOY CHECKLIST

- `src/data/specialtyMarketDemandContent.ts`
- `src/data/gccSegmentMarketContent.ts`
- `src/data/fetchRouteData.ts`
- `src/lib/preloadRouteChunk.ts`
- `src/routes.tsx`
- `config/legacy-redirects.json`
- `src/server/ctr-seo-overrides.js`
- `lib/ctr-seo-overrides.mjs`
- `scripts/gsc-priority-recrawl.txt`
- `docs/seo/website-audit-2026-09-18.md`
- `reports/weekly-report-2026-09-18.md`
