# BioNixus website SEO audit — 2026-09-28

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
- **New top-10 page:** `/iqvia-alternative` (CTR opportunity on “iqvia competitors” @ pos 6.3, 0% CTR).

Full narrative: `reports/weekly-report-2026-09-28.md`.

## Production crawl (BIO-450, 2026-09-28)

| Check | Result |
|---|---|
| URLs audited | 657 |
| Thin pages (&lt;2,000 visible words) | **347** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv`.

Near-threshold MedTech landings (1990–1999 words) and `/services` / `/ar/services` hubs remain the fastest bulk fixes. Very thin competitor landings (e.g. `/iqvia-alternative-saudi-arabia` at ~877w pre-fix) are P0 for LLM and Google quality.

## Errors

- **404:** none in sitemap crawl.
- **SSR / technical:** no new MAJOR regressions flagged; run `npm run audit:sitewide:phase2` post-deploy for title/meta/schema spot checks.

## Changes shipped this sprint (branch `cursor/website-content-and-ranking-7a73`)

1. **Cherry-pick 2026-09-27** — `/services` GeoLLM + IQVIA/LLM FAQs; USA syndicated-vs-primary; companies budgets; Egypt Cairo/NAC; USA listicle CTR meta.
2. **`/iqvia-alternative-saudi-arabia`** — four narrative sections (NUPCO, SFDA/EES, primary modules, localization) + expanded FAQs; CTR meta iteration for “IQVIA competitors” KSA intent.
3. **`/healthcare-market-research/therapy/biosimilars`** — GCC tender/substitution sections (targets “gcc biologics market” cluster).
4. **`/ar/services`** — Arabic GeoLLM answer block + IQVIA/LLM/compliance FAQs.
5. **Developed-market MedTech pages** — shared decisionBlueprint evidence copy (+ AI-citation line) to lift near-threshold pages over 2,000 words.

## Recommended next actions

1. Deploy and run `npm run indexnow:priority`.
2. Thin backlog ~340 — service scope pages &lt;1,000 words, `/ru/services`, pharmaceutical directory spokes 1,900–1,980w.
3. US CTR: body copy on USA listicle (not meta-only); reduce US impression share drag.
4. Directory matrix waves: 0% GSC indexation — internal links + IndexNow per `report:directory-gates`.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/competitorAlternatives.ts`
- `src/pages/templates/CompetitorAlternativePage.tsx`
- `src/pages/healthcare-research/TherapyPage.tsx`
- `src/data/developedMarketMedtechPages.ts`
- `src/data/servicesHubContent.ts`
- `src/data/servicesHubContent.ar.ts`
- `src/pages/Services.tsx`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `docs/seo/website-audit-2026-09-28.md`
- `reports/weekly-report-2026-09-28.md`
- `scripts/data/bio-450-thin-page-audit.json` (regenerated crawl)
