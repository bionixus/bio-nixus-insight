# Website SEO audit — 2026-09-12

**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-09-12T04:03Z  
**GSC week:** `data/gsc/current-week/` → `reports/weekly-report-2026-09-12.md`

## Headline metrics vs targets

| Metric | This week | Target | vs last week |
|--------|-----------|--------|--------------|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | 0.75% | 3.0% | −0.02pp |
| Avg. position | 25.8 | 5.0 | +2.6 (improved) |

## Crawl health

| Check | Count |
|-------|------:|
| URLs audited | 658 |
| HTTP errors | **0** |
| 404 (not in sitemap) | **0** |
| Thin service/landing (&lt;2,000 words) | **349** |
| HMR thin (`/healthcare-market-research/*`) | 29 |

No broken URLs in sitemap; backlog is **content depth**, not crawl errors.

## CTR / ranking priorities

1. **USA drag:** 33% impressions @ **0.09% CTR** — iterate `/insights/top-healthcare-market-research-companies-usa-2026` (CTR wave 18).
2. **IQVIA cluster:** `iqvia competitors` @ pos 6.3, **0% CTR** — title leads “IQVIA Competitors” on `/iqvia-alternative`; expand `/services/competitive-intelligence` for LLM/chat citations.
3. **Deep-SERP dilution:** `/japan-medical-devices-market-report` 2,511 impr @ pos 44 — content/position work separate from thin-landing batch.
4. **Query drops:** Italy microservices/connectivity, GCC FSP, GCC generic injectables, GCC clinical trials — expand specialty pages + IndexNow after deploy.
5. **Winning cluster:** `/pharmaceutical-companies-*` @ **1.60% CTR** — protect; near-threshold spokes (Iran, Iraq, India, UK) get +copy.

## Changes in this sprint (2026-09-12)

- **Specialty template:** methodology block, programme timeline, `GeoLLMAnswerBlock` on all specialty demand pages (+~800–1,000 SSR words each).
- **Content:** Italy portable diagnostics, febrile neutropenia, GCC FSP — signal grids, calendars, FAQs.
- **Medtech:** extra methodology paragraph on all developed-market MedTech landings.
- **Services:** competitive intelligence — LLM answer block + FAQ section (JSON-LD via SchemaMarkup).
- **CTR wave 18:** `lib/ctr-seo-overrides.mjs` (+ mirror `src/server/ctr-seo-overrides.js`).
- **Iran directory:** cross-links + `dateModified` 2026-09-12.

## Post-deploy checklist

1. Merge & deploy branch `cursor/website-content-and-ranking-5e3c`.
2. Re-run production thin crawl; expect specialty + CI URLs to drop from thin list.
3. IndexNow wave 18 URLs (iqvia-alternative, gcc-functional-service-providers-market, USA listicle, competitive-intelligence).
4. Refresh GSC exports into `data/gsc/current-week/` next cron.

## DEPLOY CHECKLIST (files changed)

- `src/pages/templates/SpecialtyMarketDemandPage.tsx`
- `src/data/specialtyMarketMethodology.ts`
- `src/data/specialtyMarketDemandContent.ts`
- `src/data/developedMarketMedtechPages.ts`
- `src/data/seo/serviceExpandedPageContent.ts`
- `src/pages/ServiceDetail.tsx`
- `src/pages/IranPharmaCompanies.tsx`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `docs/seo/website-audit-2026-09-12.md`
- `reports/weekly-report-2026-09-12.md` (+ `.data.json`)
