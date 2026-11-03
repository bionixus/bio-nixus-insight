# Website SEO & content audit — 2026-11-03

**Automation:** cron SEO audit · **Branch:** `cursor/website-ranking-content-audit-500a`

## GSC snapshot (`data/gsc/current-week/` → `reports/weekly-report-2026-11-03.md`)

| Metric | This week | Target | vs target | vs last week |
|---|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 | +137/day |
| Clicks/day | 52 | 450 | −398 | +19/day |
| CTR | 1.13% | 3.0% | −1.87 pp | +0.37 pp |
| Avg. position | 19.5 | 5.0 | +14.5 vs target | improved +6.3 |

**CTR structure:** United States = **34.9%** of impressions at **0.12% CTR** (largest drag). Mobile **2.63%** vs desktop **0.74%**. Winning cluster: `/pharmaceutical-companies-*` at **2.21% CTR**. Deep-rank pages (pos >40, ≥200 impr) = **0.16% CTR**.

## Production crawl (BIO-449, 2026-11-03 UTC)

- **715** service/landing URLs on `https://www.bionixus.com`
- **331** thin pages (&lt;2,000 visible main words)
- **0** 404 on audited sitemap scope
- Inventory: `docs/seo/bio-449-thin-page-inventory.csv`, JSON: `scripts/data/bio-449-thin-page-audit.json`

**High-impression thin (English, near threshold):** `/brazil-healthcare-market-report` (~1,970 words), `/india-medical-devices-market-report`, `/healthcare-market-statistics` — expand in next country-report batch.

## Errors

- **404:** none on service/landing sitemap crawl.
- **500:** none on `/pt/methodology` at audit time (HTTP 200).
- **Arabic blog SSR:** `/ar/blog/*` still **13–24** visible main words — CMS/SSR gap; track separately from specialty expansion.

## Shipped in this run

1. **Cherry-picked** Nov 2 stack: `specialtyMarketDemandLongForm.ts`, `#deep-dive`, specialty SSR preload, four URLs ≥2k (Japan disposables, Italy POCT, GCC medication management, Singapore IVD).
2. **Expanded +2k SSR words** (vitest) on GSC page-1 / 0% CTR specialty batch:
   - `/febrile-neutropenia-market`
   - `/mek-inhibitors-market`
   - `/japan-neurology-devices-market`
   - `/italy-medical-device-connectivity-market`
3. **CTR / snippet:** research-intent titles and meta via `ctr-seo-overrides.js` for the four URLs above (removed fabricated “market size” language on febrile neutropenia).
4. **`dateModified` → 2026-11-03** on the four expanded specialty pages.
5. **`public/llms.txt`** GEO refresh stamp + four new specialty deep-dive URLs for LLM crawlers.
6. **Weekly report** regenerated: `reports/weekly-report-2026-11-03.md`.

## LLM / chat appearance

- Prefer citing **primary-research** positioning (no invented market-size totals on specialty pages).
- After deploy: request indexing for the eight GSC specialty URLs (`npm run indexnow:priority` when available).

## Recommendations (next)

1. **Deploy** this branch; re-run `node scripts/bio-449-thin-page-audit.mjs` on production to confirm eight specialty URLs ≥2k.
2. **Title freeze** (until 2026-12-12): no title tests on frozen IQVIA/competitor URLs.
3. **US CTR:** above-fold answer blocks on high-impression US landings (not title-frozen).
4. **Arabic blog SSR:** full article body in initial HTML for `/ar/blog/*`.
5. **Next thin batch:** high-impression country reports just under 2k words + `/healthcare-market-statistics`.

## DEPLOY CHECKLIST

- [ ] `src/data/specialtyMarketDemandLongForm.ts`
- [ ] `src/data/specialtyMarketDemandContent.ts`
- [ ] `src/server/ctr-seo-overrides.js`
- [ ] `src/lib/seo/__tests__/specialty-demand-ssr-word-count.test.ts`
- [ ] `scripts/verify-specialty-ssr-word-count.mjs`
- [ ] `public/llms.txt`
- [ ] `docs/seo/website-audit-2026-11-03.md`
- [ ] `reports/weekly-report-2026-11-03.md`
- [ ] Prebuild regenerates `public/sitemap.xml` (lastmod on touched URLs)
