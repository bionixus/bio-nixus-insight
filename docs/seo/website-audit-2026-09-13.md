# Website SEO audit — 2026-09-13

**Branch:** `cursor/website-content-and-ranking-4a5b`  
**Production crawl:** `node scripts/bio-449-thin-page-audit.mjs` against https://www.bionixus.com  
**GSC week:** `node scripts/gsc-weekly-report.mjs` → `reports/weekly-report-2026-09-13.md`

## Executive summary

| Metric | This week | Target | vs last week |
|--------|-----------|--------|--------------|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02pp |
| Avg position | **25.8** | 5.0 | +2.6 (improved) |

| Crawl (pre-deploy) | Value |
|---------------------|-------|
| URLs audited (service/landing) | 698 |
| Thin pages (&lt;2,000 words) | **378** |
| 404 errors | **0** |
| Specialty demand pages thin | 19 / 19 |

**SSR health:** No production 404s on sitemap service URLs. USA remains largest CTR drag (33% impressions @ 0.09% CTR). Winning cluster: `pharmaceutical-companies-*` @ 1.60% CTR.

## Issues & fixes (this run)

### P1 — Specialty GSC demand pages (all &lt;1,200w on production)

| Fix | Scope |
|-----|--------|
| Template uplift | `SpecialtyMarketDemandPage` + `specialtyMarketMethodology.ts` — GeoLLM answer block, methodology, deliverables, engagement timeline, +4 supplementary FAQs per page |
| Content depth | Expanded `/gcc-functional-service-providers-market` (GSC query pos 4.6 @ 0% CTR) |

**Post-deploy expectation:** 19 specialty URLs should exceed 2,000 SSR words each.

### P1 — Near-threshold MedTech landings (1,900–1,999w)

Added regulatory + market paragraphs for: Brazil, Switzerland, Spain, Denmark, Poland, Malaysia (`developedMarketMedtechPages.ts`).

### P2 — CTR / snippet tests (wave 19)

Updated `lib/ctr-seo-overrides.mjs` + `src/server/ctr-seo-overrides.js`:

- `/iqvia-alternative` — “IQVIA competitors / companies like IQVIA”
- `/gcc-functional-service-providers-market`
- `/gcc-clinical-trials-market` (new override)
- `/heor-consulting`

## Remaining backlog

1. ~300+ standalone landings still thin after specialty deploy — continue medtech/pharma spoke batches
2. Deep-SERP drag: `/japan-medical-devices-market-report` (2,511 impr, pos 44) — position work separate from thin-content batch
3. Query drops (Italy microservices, GCC FSP, GCC injectables, GCC clinical trials) — monitor after deploy + IndexNow
4. Post-deploy: re-run `bio-449-thin-page-audit.mjs` and `indexnow:priority` for changed URLs

## DEPLOY CHECKLIST

- [ ] `src/data/specialtyMarketMethodology.ts` (new)
- [ ] `src/pages/templates/SpecialtyMarketDemandPage.tsx`
- [ ] `src/data/specialtyMarketDemandContent.ts`
- [ ] `src/data/developedMarketMedtechPages.ts`
- [ ] `lib/ctr-seo-overrides.mjs`
- [ ] `src/server/ctr-seo-overrides.js`
- [ ] `docs/seo/website-audit-2026-09-13.md`
- [ ] `reports/weekly-report-2026-09-13.md`
- [ ] `scripts/data/bio-449-thin-page-audit.json` (crawl artifact)
