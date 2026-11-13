# BioNixus website audit — 2026-11-13

## GSC snapshot (repo CSV: `data/gsc/current-week/`)

| Metric | Value | Target |
|--------|-------|--------|
| Impressions/day | 4,585 | 15,000 |
| Clicks/day | 52 | 450 |
| CTR | 1.13% | 3.0% |
| Avg. position | 19.5 | 5.0 |

**Week-over-week:** impressions +137/day, clicks +19/day, CTR +0.37pp, position improved ~6.3 ranks vs last week.

**Structural CTR drag:** United States 0.12% CTR on 34.9% of impressions; desktop 0.74% vs mobile 2.63%.

**Winning cluster:** `/pharmaceutical-companies-*` at 2.21% CTR.

## Production crawl (service/landing ≥2000 words)

| Check | Count |
|-------|------:|
| URLs audited | 678 |
| Thin pages (&lt;2000 words) | 305 |
| HTTP 404 | 0 |
| Fetch errors | 0 |

Down from 347 thin pages on 2026-09-28 baseline JSON.

## Shipped this run (branch `cursor/website-ranking-and-content-157f`)

1. **India medical devices report** — CDSCO device registration steps, hospital grid, GEO answer block, `dateModified` 2026-11-13.
2. **Singapore medical devices report** — HSA device steps, hospital grid, GEO answer block, `dateModified` 2026-11-13.
3. **`/retail-companies-saudi-arabia`** — Four market-structure sections, expanded channel copy, FAQ/fieldwork/sources (was ~1,261 words SSR).

## Next batch (thin + impressions)

- Remaining **~302** thin service/landing URLs after deploy verification.
- US listicle body copy for **0.12% US CTR**.
- Page-1 queries at **&lt;1.5% CTR** (see `reports/weekly-report-2026-11-13.md`) — title/meta tests on FMCG and IQVIA-alternative URLs.
- Upload fresh GSC export to `data/gsc/current-week/` (files currently Aug–Sep 2026).

## DEPLOY CHECKLIST

- `src/data/marketIntelligence/asiaPacific.ts`
- `src/data/industryCompanyDirectories.ts`
- `src/pages/IndiaMedicalDevicesMarketReport.tsx`
- `src/pages/SingaporeMedicalDevicesMarketReport.tsx`
- `docs/seo/bio-450-thin-page-inventory.csv` (regenerated locally)
- `scripts/data/bio-450-thin-page-audit.json` (regenerated locally)
- `reports/weekly-report-2026-11-13.md` (generated)

Post-deploy: `npm run indexnow:priority` for changed URLs; re-crawl word counts for India, Singapore, retail Saudi.
