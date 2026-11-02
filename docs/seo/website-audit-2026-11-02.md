# Website SEO & content audit — 2026-11-02

**Automation:** cron SEO audit · **Branch:** `cursor/website-seo-content-audit-68dd`

## GSC snapshot (`data/gsc/current-week/` → `reports/weekly-report-2026-11-02.md`)

| Metric | This week | Target | vs target | vs last week |
|---|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 | +137/day |
| Clicks/day | 52 | 450 | −398 | +19/day |
| CTR | 1.13% | 3.0% | −1.87 pp | +0.37 pp |
| Avg. position | 19.5 | 5.0 | +14.5 vs target | improved +6.3 |

**CTR structure:** United States = **34.9%** of impressions at **0.12% CTR** (largest drag). Mobile **2.63%** vs desktop **0.74%**. Winning cluster: `/pharmaceutical-companies-*` at **2.21% CTR**. Deep-rank pages (pos >40, ≥200 impr) = **0.16% CTR**.

## Production crawl (BIO-449, pre-deploy)

- **715** service/landing URLs on `https://www.bionixus.com`
- **331** thin pages (&lt;2,000 visible main words)
- **0** 404 on audited sitemap scope
- Inventory: `docs/seo/bio-449-thin-page-inventory.csv`

**Note:** Four GSC priority specialty URLs remain thin on production until this branch deploys; local SSR tests confirm ≥2,000 words post-change.

## Errors

- No production 404s on service/landing crawl.
- Arabic blog URLs still show **13–24** visible SSR words — CMS/hydration gap; track separately from specialty expansion.

## Shipped in this run

1. **Merged** Nov 1 specialty long-form stack (`specialtyMarketDemandLongForm.ts`, `#deep-dive`, full SSR preload for all specialty slugs).
2. **≥2,000 SSR words** (vitest) on:
   - `/japan-medical-disposables-market`
   - `/italy-portable-diagnostic-devices-market`
   - `/gcc-medication-management-market`
   - `/singapore-ivd-market-access`
3. **`dateModified` → 2026-11-02** on expanded specialty pages + Singapore inlink sources.
4. **Internal link:** `/gcc-pharma-market-report-2026` → `/middle-east-biologics-market` for **gcc biologics market** (pos ~6.2, 0% CTR).

## LLM / chat appearance

- `public/llms.txt` already lists the four expanded specialty URLs (GEO refresh on deploy: bump stamp to 2026-11-02).

## Recommendations (next)

1. **Deploy** + `npm run indexnow:priority` for the four specialty URLs.
2. **Title freeze** (until 2026-12-12): no title tests on frozen IQVIA/competitor URLs; continue meta/answer-block work elsewhere.
3. **US CTR:** enrich above-fold answers on high-impression US landing pages (not title-frozen).
4. **Arabic blog SSR:** restore full article body in initial HTML for `/ar/blog/*`.
5. **Next thin-page batch:** `febrile-neutropenia-market`, `mek-inhibitors-market`, `japan-neurology-devices-market`, `italy-medical-device-connectivity-market` (GSC page-1, 0% CTR).

## DEPLOY CHECKLIST

- [ ] `src/data/specialtyMarketDemandLongForm.ts`
- [ ] `src/data/specialtyMarketDemandContent.ts`
- [ ] `src/pages/templates/SpecialtyMarketDemandPage.tsx`
- [ ] `src/lib/preloadRouteChunk.ts`
- [ ] `scripts/data/specialty-market-demand-sitemap.mjs`
- [ ] `scripts/verify-specialty-ssr-word-count.mjs`
- [ ] `src/lib/seo/__tests__/specialty-demand-ssr-word-count.test.ts`
- [ ] `src/pages/GccPharmaMarketReport2026.tsx`
- [ ] `docs/seo/website-audit-2026-11-02.md`
- [ ] `reports/weekly-report-2026-11-02.md`
- [ ] Prebuild regenerates `public/sitemap.xml`
