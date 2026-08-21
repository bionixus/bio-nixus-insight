# Website SEO audit — 2026-08-21

**Branch:** `cursor/website-content-and-ranking-adfa`  
**Production crawl (pre-deploy):** `node scripts/audit-thin-pages-bio450.mjs` against https://www.bionixus.com  
**Recorded:** 2026-08-21 (cron automation)

## Executive summary

| Metric | Value | vs 2026-08-19 |
|--------|-------|----------------|
| URLs audited | 502 | −1 |
| Live pages | 502 | — |
| Thin pages (<2,000 words) | **251** | +2 |
| 404 errors | **0** | — |
| Fetch errors | **0** | — |
| HMR therapy/country thin | 27 | −6 |

**SSR health:** No 404s or fetch failures. All indexable sprint pages verified ≥2,000 words in local SSR post-build.

## GSC baseline (Aug 2026 export — memory)

| Signal | Value | Target |
|--------|-------|--------|
| Impressions/day | ~4,785 | 15,000/day |
| CTR | ~0.77% | 3% |
| Avg position | ~28.4 | 5 |
| japan-medical-devices-market-report | 3,376 impr, 0.03% CTR, pos 46.9 | CTR override exists |
| gcc-market-access-guide | 598 impr, 0.67% CTR, pos 41.5 | Expanded + CTR override |
| pharmaceutical-companies-* cluster | pos 5–10 | Healthy CTR |
| iqvia-alternative / bionixus-vs-iqvia | pos 7–8 | LLM + comparison content |

## Issues found & fixes applied (this run)

### P1 — Near-threshold MedTech pages (gap ≤35 words)

Added `NEAR_THRESHOLD_MEDTECH_EXTRA_FAQS` in `developedMarketMedtechPages.ts`:

| URL | Prod words | Local SSR |
|-----|------------|-----------|
| `/brazil-medtech-market-research` | 1,999 | 2,057 ✓ |
| `/switzerland-medtech-market-research` | 1,998 | 2,050 ✓ |
| `/spain-medtech-market-research` | 1,996 | 2,051 ✓ |
| `/denmark-medtech-market-research` | 1,994 | 2,044 ✓ |
| `/malaysia-medtech-market-research` | 1,985 | 2,037 ✓ |
| `/poland-medtech-market-research` | 1,967 | 2,015 ✓ |

### P1 — High-traffic access & comparison pages

| URL | Prod words | Fix | Local SSR |
|-----|------------|-----|-----------|
| `/gcc-market-access-guide` | 1,927 | MedTech access section + 3 FAQs; dateModified 2026-08-21 | 2,311 ✓ |
| `/bionixus-vs-iqvia-mena` | 1,914 | GeoLLM quick answer + 4 FAQ blocks in static HTML | 2,189 ✓ |

### P2 — Therapy hub pages

Expanded `therapyMarketReferenceContent.ts` tails + unique FAQs in `therapyExpandedPageContent.ts`:

| URL | Prod words | Local SSR |
|-----|------------|-----------|
| `/healthcare-market-research/therapy/neurology-cns` | 1,766 | 2,005 ✓ |
| `/healthcare-market-research/therapy/digital-health` | 1,820 | 2,046 ✓ |
| `/healthcare-market-research/therapy/cardiovascular` | 1,846 | 2,030 ✓ |
| `/healthcare-market-research/therapy/biosimilars` | 1,896 | 2,013 ✓ |

### P2 — Services hub

| URL | Prod words | Fix | Local SSR |
|-----|------------|-----|-----------|
| `/services` | 1,847 | +3 SERVICE_FAQ entries | 2,003 ✓ |

### P2 — CTR / LLM visibility

CTR overrides added/updated in `src/server/ctr-seo-overrides.js` (+ `lib/ctr-seo-overrides.mjs`):

- `/turkey-healthcare-market-report`
- `/bionixus-vs-iqvia-mena`
- `/brazil-pharmaceutical-market-research`
- `/healthcare-market-research-italy`
- `/pharmaceutical-companies-iran` (title refresh)
- `/pharmaceutical-companies-iraq` (description refresh)

`public/llms.txt` GEO refresh date → 2026-08-21.

## Remaining backlog (next cron)

1. **~238 thin pages** still >50 words below threshold — batch GCC segment + Italy/Japan specialty tails
2. Post-deploy thin-page audit (target **<245** thin from 251 baseline)
3. Fresh GSC export — update `docs/seo/gsc-weekly-measurement.md`
4. Post-deploy: `npm run indexnow:priority` for changed URLs

## DEPLOY CHECKLIST

- [ ] `src/data/developedMarketMedtechPages.ts`
- [ ] `src/data/seo/therapyExpandedPageContent.ts`
- [ ] `src/data/seo/therapyMarketReferenceContent.ts`
- [ ] `src/data/servicesHubContent.ts`
- [ ] `src/pages/GccMarketAccessGuide.tsx`
- [ ] `public/conf/bionixus-vs-iqvia-mena.html`
- [ ] `src/server/ctr-seo-overrides.js`
- [ ] `lib/ctr-seo-overrides.mjs`
- [ ] `public/llms.txt`
- [ ] `docs/seo/website-audit-2026-08-21.md`
- [ ] Post-deploy: `npm run indexnow:priority`
