# BioNixus website SEO audit — 2026-11-04

## GSC snapshot (week ending import in `data/gsc/current-week/`)

| Metric | This week | Target | vs target | Last week | vs last week |
|---|---|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 | 4,448 | +137 |
| Clicks/day | 52 | 450 | −398 | 33 | +19 |
| CTR | **1.13%** | 3.0% | −1.87 pp | 0.75% | +0.38 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | 25.8 | ▲ improved |

Full narrative: `reports/weekly-report-2026-11-04.md`.

### CTR diagnostics (priority fixes)

- **United States:** ~35% of impressions at **~0.12% CTR** — largest country drag; body + snippet work on USA hubs remains P0 (title freeze on some USA URLs until 2026-12-12).
- **Mobile vs desktop:** Mobile CTR ~2.6% vs desktop ~0.7% — keep mobile-first SSR depth; desktop meta/body tests still underperforming.
- **Winning cluster:** `/pharmaceutical-companies-*` at **~2.21% CTR** — continue internal links from thin spokes.
- **Zero-CTR page-1 queries:** Japan disposables, GCC medication management, Italy portable diagnostics, MEK/FN oncology access, IQVIA-alternative intents — addressed via specialty page expansion this sprint.

## Production crawl (BIO-449, 2026-11-04)

| Check | Result |
|---|---|
| URLs audited (service/landing scope) | 715 |
| Thin pages (&lt;2,000 visible words) | **331** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-449-thin-page-inventory.csv`, `scripts/data/bio-449-thin-page-audit.json`.

## Errors

- **404:** none in sitemap crawl (legacy ROUTE_MISSING URLs from 2026 briefs are resolved on production).
- **SSR:** Fixed lazy-chunk preload gap for **all** specialty market demand routes (`preloadRouteChunk.ts`) so GSC/LLM crawlers receive full HTML without Suspense fallback.

## Changes shipped this sprint (branch `cursor/website-ranking-content-audit-7bb7`)

1. **Eight GSC P0 specialty pages** expanded to **≥2,000 SSR words** with geo answers, decision blueprints, long-form sections, and FAQ depth:
   - `/japan-medical-disposables-market`
   - `/japan-neurology-devices-market`
   - `/singapore-ivd-market-access`
   - `/mek-inhibitors-market`
   - `/febrile-neutropenia-market`
   - `/italy-portable-diagnostic-devices-market`
   - `/italy-medical-device-connectivity-market`
   - `/gcc-medication-management-market`
2. **`SpecialtyMarketDemandPage` template** — decision framework, proof metrics, long-form deep dive, geo/LLM short answers.
3. **Vitest** — `specialty-market-demand-gsc-p0-nov-2026.test.ts` guards SSR word count and schema `dateModified`.
4. **Sitemap** — `lastmod` 2026-11-04 for expanded specialty URLs; regenerated `public/sitemap.xml`.
5. **CTR** — `/febrile-neutropenia-market` meta aligned to research intent (150–160 chars).
6. **Weekly report** — `reports/weekly-report-2026-11-04.md` regenerated.

## Recommended next actions

1. Deploy; run `npm run indexnow:priority` for the eight specialty URLs.
2. Re-run `node scripts/bio-449-thin-page-audit.mjs` post-deploy to confirm production word counts.
3. US CTR: expand USA listicle/body copy (not meta-only); respect title freeze calendar.
4. Thin backlog ~323 remaining — prioritize BOFU `/market-research-*` and Arabic blog SSR pages.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/specialtyMarketDemandContent.ts`
- `src/data/specialtyMarketDemandLongForm.ts`
- `src/pages/templates/SpecialtyMarketDemandPage.tsx`
- `src/lib/preloadRouteChunk.ts`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `scripts/data/specialty-market-demand-sitemap.mjs`
- `public/sitemap.xml`
- `src/lib/seo/__tests__/specialty-market-demand-gsc-p0-nov-2026.test.ts`
- `docs/seo/website-audit-2026-11-04.md`
- `reports/weekly-report-2026-11-04.md`
- `reports/weekly-report-2026-11-04.data.json`
