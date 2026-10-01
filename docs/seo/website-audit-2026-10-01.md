# BioNixus website SEO audit — 2026-10-01

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
- **Deep SERP dilution:** pages with position >40 (≥200 impr) at **0.10% CTR**.
- **Money queries still 0% CTR on page 1:** `iqvia competitors` (pos 6.3), `pharmaceutical companies in dubai`, `gcc biologics market`.

Full narrative: `reports/weekly-report-2026-10-01.md`.

## Production crawl (BIO-448, 2026-10-01)

| Check | Result |
|---|---|
| Sitemap service/landing URLs audited | **939** |
| Thin pages (&lt;2,000 visible words) | **507** |
| HTTP 404 | **0** |
| Near-threshold (1,900–1,999 words) | **28** |

Inventory: `docs/seo/bio-448-thin-page-inventory.csv`.

## Technical / meta audit (phase 2)

| Check | Result |
|---|---|
| URLs in sitemap | 1,274 |
| PASS | 1,240 |
| MAJOR | **8** (missing H1: 6× locale DE/FR blog, 2× `/videos/:slug` empty SSR shell) |

Report: `docs/seo/sitewide-audit-phase2.md`.

## Changes shipped this run

1. **P0 SSR — locale blogs:** `fetchRouteData` now loads Sanity posts for `/de|fr|es|pt|ru|zh/blog/:slug` (was generic → empty H1).
2. **P0 SSR — video watch pages:** `preloadRouteChunk` preloads `VideoWatchPage` for `/videos/:slug` (production had ~7 words in HTML).
3. **CTR:** `/iqvia-alternative` title iteration for “iqvia competitors” / “companies like IQVIA” query match.
4. **Thin / LLM depth:** `/market-research-gcc` (+2 GCC FAQs), `/healthcare-market-research-companies` (+2 procurement/LLM FAQs), `/ru/services` (+1 IQVIA comparison FAQ).
5. **Guard:** `verify-ssr-bundle` includes video + DE blog paths.

## Recommended next actions

1. Deploy; `npm run indexnow:priority`.
2. Thin backlog **507** — prioritize GSC priority URLs still &lt;2k (`/market-research-gcc`, `/pricing`, `/account-level-market-research`).
3. US CTR: body tests on homepage + USA listicle (meta alone will not fix 0.09% US CTR).
4. Directory matrix: waves still **0%** GSC indexation — internal links + IndexNow per `report:directory-gates`.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/fetchRouteData.ts`
- `src/lib/preloadRouteChunk.ts`
- `lib/ctr-seo-overrides.mjs`
- `src/data/marketResearchCountryContent.ts`
- `src/pages/HealthcareMarketResearchCompanies2026.tsx`
- `src/data/servicesHubContent.ru.ts`
- `scripts/verify-ssr-bundle.mjs`
- `docs/seo/website-audit-2026-10-01.md`
- `docs/seo/sitewide-audit-phase2.md`
- `docs/seo/bio-448-thin-page-inventory.json`
- `reports/weekly-report-2026-10-01.md`
