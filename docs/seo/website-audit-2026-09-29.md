# BioNixus website SEO audit — 2026-09-29

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
- **New top-10 page:** `/iqvia-alternative` (CTR opportunity on “iqvia competitors” queries).

Full narrative: `reports/weekly-report-2026-09-29.md`.

## Production crawl (BIO-450, 2026-09-29)

| Check | Result |
|---|---|
| URLs audited | 658 |
| Thin pages (&lt;2,000 visible words) | **341** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv` (regenerated 2026-09-29).

## Errors

- **404:** none in sitemap crawl.
- **SSR:** service scope pages under `/services/*` remain P0 thin (900–1,600 words pre-fix); reference handbooks alone did not clear the 2,000-word threshold.

## Changes shipped this sprint (branch `cursor/website-content-and-ranking-1176`)

1. **`/services/competitive-intelligence`, `/services/clinical-trial-support`, `/services/qualitative-research`, `/services/kol-stakeholder-mapping`** — expanded reference narratives, GeoLLM answer blocks, hero extensions, and on-page FAQs (schema + visible `<details>`).
2. **`/services/quantitative-research`** — GeoLLM block on premium layout; expanded quant/access reference copy.
3. **`/ru/services`** — Russian GeoLLM hub block + IQVIA/LLM FAQs (parity with `/ar/services`).
4. **Developed-market MedTech landings** — decision blueprint evidence line for hub/report linkage (near-threshold bulk lift).

## Recommended next actions

1. Deploy and run `npm run indexnow:priority`.
2. Thin backlog ~330 — pharmaceutical directory spokes ~1,850–1,980w, therapy subpages, market reports.
3. US CTR: title/body iteration on USA listicles; reduce US impression share drag.
4. Directory matrix waves: 0% GSC indexation — internal links + IndexNow per `report:directory-gates`.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/seo/serviceExpandedPageContent.ts`
- `src/data/seo/serviceMarketReferenceContent.ts`
- `src/pages/ServiceDetail.tsx`
- `src/components/services/PremiumQuantitativeResearch.tsx`
- `src/data/servicesHubContent.ru.ts`
- `src/data/servicesHubContent.ts`
- `src/data/developedMarketMedtechPages.ts`
- `docs/seo/website-audit-2026-09-29.md`
- `reports/weekly-report-2026-09-29.md`
- `scripts/data/bio-450-thin-page-audit.json`
- `docs/seo/bio-450-thin-page-inventory.csv`
