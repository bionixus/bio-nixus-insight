# BioNixus website SEO audit — 2026-10-03

## GSC snapshot (week in `data/gsc/current-week/`)

| Metric | This week | Target | vs target |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −10,552 |
| Clicks/day | 33 | 450 | −417 |
| CTR | **0.75%** | 3.0% | −2.25 pp |
| Avg. position | **25.8** | 5.0 | +20.8 |

### CTR diagnostics

- **United States:** 33% of impressions at **0.09% CTR** — largest single-country drag.
- **Desktop:** 0.50% CTR (86% of device impressions); **mobile 2.23%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **1.60% CTR**.
- **Money query:** `iqvia competitors` ~pos 6.3, **0% CTR** — title/meta iteration on `/iqvia-alternative`.
- **Device-report drag:** `/japan-medical-devices-market-report` and `/gcc-medical-devices-market-report` remain deep-SERP diluters.

Full scorecard: `reports/weekly-report-2026-10-03.md`.

## Production crawl (BIO-448, 2026-10-03)

| Check | Result |
|---|---|
| URLs audited | 939 |
| Thin pages (&lt;2,000 visible words) | **507** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-448-thin-page-inventory.json`.

### Priority thin URLs by GSC impressions (still &lt;2k words)

| Impressions (7d) | Words | Path |
|---:|---:|---|
| 1,070 | 1,917 | `/brazil-healthcare-market-report` |
| 882 | 1,969 | `/pharmaceutical-companies-iran` |
| 869 | 1,945 | `/pharmaceutical-companies-iraq` |
| 303 | 961 | `/services/competitive-intelligence` |
| 297 | 1,616 | `/services/market-access` |

### PRIORITY ZERO — video watch pages

`/videos/*` previously shipped **empty `<main>`** in view-source (lazy route not preloaded). Fixed via `preloadRouteChunk` + long-form watch guides.

## Errors

- **404:** none in sitemap crawl.
- **SSR:** video watch routes repaired; re-verify after deploy with view-source on `/videos/consumer-b2b-market-research`.

## Changes shipped this sprint (branch `cursor/website-content-and-ranking-8f85`)

1. **Video SSR** — preload `/videos/:slug`; `videoWatchGuideContent.ts` + expanded `VideoWatchPage` (guides + FAQs).
2. **CTR** — `/iqvia-alternative` title/meta: lead with “IQVIA Competitors” (`lib/ctr-seo-overrides.mjs`, `public/conf/iqvia-alternative.html`).
3. **Thin-page lifts** — Brazil healthcare report section; Iran/Iraq pharma directory research sections + FAQs.
4. **LLM / AEO** — `/services/competitive-intelligence` GeoLLM block + expanded FAQs (visible `<details>`).
5. **Reports** — `reports/weekly-report-2026-10-03.md`; BIO-448 inventory refreshed.

## Recommended next actions

1. Deploy; `npm run indexnow:priority`.
2. Thin backlog **~500** — service scope pages &lt;1,000 words; near-threshold device reports.
3. US CTR: body tests on USA listicles; reduce US impression share drag.
4. Re-crawl post-deploy: `node scripts/audit-thin-pages-bio448.mjs`.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/lib/preloadRouteChunk.ts`
- `src/data/videoWatchGuideContent.ts`
- `src/pages/VideoWatchPage.tsx`
- `src/data/fetchRouteData.ts`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `public/conf/iqvia-alternative.html`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/IranPharmaCompanies.tsx`
- `src/pages/IraqPharmaCompanies.tsx`
- `src/pages/ServiceDetail.tsx`
- `src/data/seo/serviceExpandedPageContent.ts`
- `docs/seo/website-audit-2026-10-03.md`
- `docs/seo/bio-448-thin-page-inventory.json`
- `reports/weekly-report-2026-10-03.md`
