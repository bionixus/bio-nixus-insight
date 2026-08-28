# Website SEO & Content Audit — 2026-08-28

**Branch:** `cursor/website-content-and-ranking-d8eb`  
**Production base:** `https://www.bionixus.com`

## GSC performance (week ending 2026-08-28)

| Metric | This week | Target | vs target | Last week | WoW |
|--------|-----------|--------|-----------|-----------|-----|
| Impressions/day | **4,448** | 15,000 | −10,552 | 4,785 | −337 |
| Clicks/day | **33** | 450 | −417 | 37 | −4 |
| CTR | **0.75%** | 3.0% | −2.25pp | 0.77% | −0.02pp |
| Avg position | **25.8** | 5.0 | +20.8 | 28.4 | **+2.6 (improved)** |

### CTR mix diagnostics

| Slice | CTR | Notes |
|-------|-----|-------|
| Excl. United States | **1.08%** | US = 33% impr @ **0.09% CTR** (biggest drag) |
| Mobile | **2.23%** | 14% of device impressions |
| Desktop | **0.50%** | 86% of device impressions |
| `/pharmaceutical-companies-*` cluster | **1.60%** | Winning directory cluster (140 clicks / 8,756 impr) |
| `/japan-medical-devices-market-report` | **0.08%** @ pos 44.3 | Deep-SERP dilution |
| Insights listicle cluster | **0.70%** | 22 clicks / 3,148 impr |

### Page-1 queries with 0% CTR (priority CTR sprint)

`iqvia competitors`, `cairo hospitals healthcare 2023-2026`, `pharmaceutical companies in dubai`, `febrile neutropenia market`, `japan neurology devices market`, `japan medical disposables market`, `gcc biologics market`, `nupco tender`, `turkey diabetes market`, `singapore ivd market access` — CTR overrides added/updated this run.

## Production crawl summary

| Check | Result |
|-------|--------|
| Thin pages (<2,000 words) | **349** / 655 service landings audited |
| 404 errors | **0** |
| Sitewide SEO MAJOR | **8** (all localized blog SSR + video watch preload — fixed this run) |
| Sitewide PASS | 1,201 / 1,234 URLs |

### Thin pages by cluster

| Cluster | Thin count |
|---------|------------|
| standalone-landing | 295 |
| healthcare-market-research | 29 |
| ar-localized | 18 |
| services | 7 |

## Fixes delivered this run

### P0 — SSR / crawl errors (MAJOR)

1. **`fetchRouteData.ts`** — Added Sanity fetch for `/de|fr|zh|es|pt|ru/blog/:slug` (was returning empty shell → missing H1, ~108 words).
2. **`preloadRouteChunk.ts`** — Preload `VideoWatchPage` and all localized blog paths before `renderToString` (fixes `/videos/:slug` missing H1).

### P1 — Thin content expansion (near-threshold + GSC demand)

**Specialty demand pages** (target GSC page-1 queries + LLM retrieval):

- `/febrile-neutropenia-market` — expanded market structure, signal grid, FAQs, `GeoLLMAnswerBlock`
- `/singapore-ivd-market-access` — cluster lab access depth, signal grid, FAQs, GEO block
- `/japan-neurology-devices-market` — stroke/KOL structure, signal grid, FAQs, GEO block
- `/japan-medical-disposables-market` — nursing/tender structure, signal grid, FAQs, GEO block

**MedTech near-threshold** (`developedMarketMedtechPages.ts` marketParagraphs):

- `/spain-medical-devices-market-report` (~1,521w → expanded)
- `/south-korea-medical-devices-market-report` (~1,587w → expanded)
- `/singapore-medical-devices-market-report` (~1,641w → expanded)
- `/uk-medical-devices-market-report` (~1,794w → expanded)

### P2 — CTR / snippet optimisation

New/updated overrides in `lib/ctr-seo-overrides.mjs` (synced to `src/server/ctr-seo-overrides.js`):

- Japan neurology, disposables, general surgical devices
- Dubai pharmaceutical companies intent
- Turkey diabetes / healthcare
- GCC biologics, Egypt Kantar-alternative listicle

### P3 — LLM / chat appearance

- `GeoLLMAnswerBlock` wired into `SpecialtyMarketDemandPage` template via optional `geoAnswer` field (QAPage schema + answer-first H2).

## Next sprint priorities

1. **Deploy** → post-deploy thin audit (target <320 thin from 349)
2. **USA title/meta iteration** — 33% impressions @ 0.09% CTR
3. **Batch `services/*` and segment-market** thin URLs (~210 remaining standalone)
4. **Fresh GSC export** week ending 2026-09-04
5. `npm run indexnow:priority` after deploy

## DEPLOY CHECKLIST

- [ ] `src/data/fetchRouteData.ts`
- [ ] `src/lib/preloadRouteChunk.ts`
- [ ] `src/data/specialtyMarketDemandContent.ts`
- [ ] `src/pages/templates/SpecialtyMarketDemandPage.tsx`
- [ ] `src/data/developedMarketMedtechPages.ts`
- [ ] `lib/ctr-seo-overrides.mjs`
- [ ] `src/server/ctr-seo-overrides.js`
- [ ] `docs/seo/website-audit-2026-08-28.md`
- [ ] GSC URL Inspection: `/de/blog/*`, `/fr/blog/*`, `/videos/*`, specialty pages above
- [ ] `npm run indexnow:priority`
