# Website SEO audit — 2026-08-27

**Branch:** `cursor/website-content-and-ranking-6d9b`  
**Production crawl:** `node scripts/bio-449-thin-page-audit.mjs` + `npm run audit:sitewide:phase2`  
**GSC week:** `reports/weekly-report-2026-08-27.md`  
**Recorded:** 2026-08-27 (cron automation)

## Executive summary

| Metric | Value | vs prior week |
|--------|-------|---------------|
| Impressions/day | 4,448 | −337 (−7.6%) |
| Clicks/day | 33 | −4 |
| CTR | **0.75%** | −0.02pp (target 3%) |
| Avg position | **25.8** | +2.6 improved |
| Thin pages (<2,000w) | **278** | +28 vs 2026-08-26 |
| 404 errors | **0** | — |
| Sitewide MAJOR issues | **7** | all missing H1 on de/fr blog stubs |

**SSR health:** P0 bug found — `/de/blog/:slug`, `/fr/blog/:slug`, and other localized blog routes were not fetching Sanity content server-side, rendering ~108-word stubs with empty H1. Fixed in `fetchRouteData.ts`.

## GSC highlights (week ending 2026-08-27)

| Signal | Value | Action taken |
|--------|-------|--------------|
| USA slice | 33% impr @ **0.09% CTR** | Largest CTR drag — title iteration backlog |
| Excl. USA | 1.08% CTR | Healthy non-US mix |
| Mobile | 2.23% CTR @ pos 8.9 | Strong mobile performance |
| Desktop | 0.50% CTR @ pos 33.8 | Desktop title/meta iteration needed |
| `/pharmaceutical-companies-*` | 1.60% CTR | Winning cluster — maintain |
| `/iqvia-alternative` | 1.28% CTR @ 391 impr | Entered top-10 by clicks |
| `/blog/nupco-saudi-arabia-tendering-guide` | **0% CTR @ 483 impr** | CTR title iteration |
| `/japan-medical-devices-market-report` | 0.08% CTR @ 2,511 impr | Deep rank (pos 44) |
| Page-1 0% CTR queries | 40+ flagged | CTR overrides added/updated |

## Issues found & fixes applied (this run)

### P0 — Localized blog SSR data fetch missing

| URL pattern | Before | Fix |
|-------------|--------|-----|
| `/de/blog/:slug` | ~108w, empty H1 | Added `fetchBlogPostRouteData` matcher in `fetchRouteData.ts` |
| `/fr/blog/:slug` | ~142w, empty H1 | Same fix |
| `/zh\|es\|pt\|ru/blog/:slug` | Thin stubs | Same fix |

Resolves all 7 sitewide MAJOR issues (missing H1 on German/French blog posts).

### P1 — Near-threshold MedTech pages expanded

Added 3 market paragraphs each to push over 2,000-word threshold:

- `/brazil-medtech-market-research` (1,999w → target 2,100+)
- `/switzerland-medtech-market-research` (1,998w)
- `/spain-medtech-market-research` (1,996w)
- `/denmark-medtech-market-research` (1,994w)
- `/malaysia-medtech-market-research` (1,985w)
- `/poland-medtech-market-research` (1,967w)

### P1 — Thin specialty demand pages expanded

| URL | Fix |
|-----|-----|
| `/singapore-ivd-market-access` | marketStructure + signalGrid + 4 FAQs |
| `/japan-neurology-devices-market` | marketStructure expanded (5 paragraphs) |
| `/japan-medical-disposables-market` | marketStructure expanded (5 paragraphs) |
| `/febrile-neutropenia-market` | marketStructure + 4 FAQs |

### P2 — Therapy hub reference content

Expanded tails in `therapyMarketReferenceContent.ts`:

- `/healthcare-market-research/therapy/biosimilars`
- `/healthcare-market-research/therapy/cardiovascular`
- `/healthcare-market-research/therapy/digital-health`
- `/healthcare-market-research/therapy/neurology-cns`

### P2 — CTR / LLM visibility

New/updated CTR overrides in `lib/ctr-seo-overrides.mjs` + `src/server/ctr-seo-overrides.js`:

- `/blog/nupco-saudi-arabia-tendering-guide` — 483 impr, 0% CTR
- `/singapore-ivd-market-access`
- `/japan-neurology-devices-market`
- `/japan-medical-disposables-market`
- `/insights/top-market-research-companies-dubai-2026`
- `/insights/top-healthcare-market-research-companies-dubai-2026`

## Remaining backlog

1. **~270 thin pages** still below 2,000 words — batch via services/* and segment-market clusters
2. **USA title/meta iteration** — 0.09% CTR on 33% of impressions
3. **Deep-rank device reports** — Japan/GCC at pos 40+ diluting CTR mix
4. Fresh GSC export week ending 2026-08-30
5. Post-deploy: `npm run indexnow:priority`

## DEPLOY CHECKLIST

- [ ] `src/data/fetchRouteData.ts` — localized blog SSR fix
- [ ] `src/data/developedMarketMedtechPages.ts` — 6 country expansions
- [ ] `src/data/specialtyMarketDemandContent.ts` — 4 specialty page expansions
- [ ] `src/data/seo/therapyMarketReferenceContent.ts` — 4 therapy tails
- [ ] `lib/ctr-seo-overrides.mjs` — CTR wave
- [ ] `src/server/ctr-seo-overrides.js` — CTR sync
- [ ] `docs/seo/website-audit-2026-08-27.md` — this report
- [ ] Post-deploy: re-run thin audit, `npm run indexnow:priority`
