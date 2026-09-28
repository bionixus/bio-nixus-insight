# BioNixus website SEO audit — 2026-09-27

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
- **Deep SERP (pos >40, ≥200 impr):** 0.10% CTR on 11,559 impressions.
- **Winning cluster:** `/pharmaceutical-companies-*` at **1.60% CTR**.
- **Insights listicles:** 0.70% CTR (3,148 impr).
- **Japan medical devices report:** 2,511 impr, **0.08% CTR**, pos 44.3 (title/meta iterated 2026-09-26; monitor).

Full narrative: `reports/weekly-report-2026-09-27.md`.

## Production crawl (BIO-449, 2026-09-27)

| Check | Result |
|---|---|
| URLs audited | 697 |
| Thin pages (&lt;2,000 visible words) | **376** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-449-thin-page-inventory.csv`.

Thin backlog is dominated by standalone landings (313), healthcare-market-research spokes (29), AR localized (27), and `/services` children (7). Insights listicles are excluded from BIO-449 scope but remain CTR priorities in GSC.

## Page-1 queries with &lt;1.5% CTR (sample)

High priority for title/meta and answer-first copy: `iqvia competitors`, `pharmaceutical companies in dubai`, `gcc functional service providers market`, `cairo hospitals healthcare`, `best services for pharmaceutical market access besides iqvia`.

## Changes shipped this sprint (branch `cursor/website-content-and-ranking-cfa7`)

1. **`/services`** — `GeoLLMAnswerBlock` + three new FAQs (IQVIA split, LLM visibility, compliance).
2. **`/healthcare-market-research-usa`** — syndicated vs primary section; `dateModified` 2026-09-27.
3. **`/healthcare-market-research-companies`** — budgets/timelines/RFP section; `dateModified` 2026-09-27.
4. **`/egypt-healthcare-market-research`** — Cairo/Alexandria/NAC hospital fieldwork section (Cairo query cluster).
5. **CTR override** — `/insights/top-healthcare-market-research-companies-usa-2026` ranked title + description (527 impr/week).

## Recommended next actions

1. Deploy and run `npm run indexnow:priority`.
2. Continue thin-page batch: `/ar/services`, `/de/services`, service scope pages &lt;1,000 words.
3. US CTR: expand primary-research messaging on USA listicle body (not only meta).
4. Upload fresh GSC export weekly to `data/gsc/current-week/`.
5. Directory matrix waves: 0% indexation in GSC — internal links + IndexNow per `report:directory-gates`.

## DEPLOY CHECKLIST

- `src/data/servicesHubContent.ts`
- `src/pages/Services.tsx`
- `src/pages/HealthcareMarketResearchUsa.tsx`
- `src/pages/HealthcareMarketResearchCompanies2026.tsx`
- `src/pages/HealthcareMarketResearchInEgypt.tsx`
- `src/server/ctr-seo-overrides.js`
- `docs/seo/bio-449-thin-page-inventory.csv` (regenerated)
- `docs/seo/website-audit-2026-09-27.md`
- `reports/weekly-report-2026-09-27.md`
