# Website SEO & content audit — 2026-11-06

## Google Search Console (current-week export)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | +137/day |
| Clicks/day | 52 | 450 | +18/day |
| CTR | 1.13% | 3.0% | +0.37 pp |
| Avg. position | 19.5 | 5.0 | +6.3 (improved) |

Full tables: `reports/weekly-report-2026-11-06.md`.

**CTR diagnostics:** Non-US CTR ~1.66%; United States alone ~0.12% CTR on ~35% of impressions — largest structural drag. Mobile CTR ~2.63% vs desktop ~0.74%. Winning cluster remains `/pharmaceutical-companies-*` (~2.21% CTR). Page-1 queries with 0% CTR still include `companies like iqvia`, IQVIA-alternative phrasing, and FMCG directory intents — title/meta tests on `/iqvia-alternative` remain frozen until 2026-12-12 per title-freeze policy.

## Production crawl (2026-11-06)

| Check | Result |
|---|---|
| Service/landing URLs audited | 715 |
| Thin pages (&lt;2,000 words) | **331** |
| 404 URLs in sitemap scope | **0** |
| Phase-2 SEO MAJOR issues | **6** (localized DE/FR blog shells — see P0 below) |

Artifacts: `scripts/data/bio-449-thin-page-audit.json`, `docs/seo/bio-449-thin-page-inventory.csv`, `docs/seo/sitewide-audit-phase2.md`.

## Priority zero — localized blog SSR

`/de/blog/:slug` and `/fr/blog/:slug` (and ES/PT/RU/ZH) returned **generic** SSR with ~150 visible words and **no H1**, while the same slug under `/blog/:slug` rendered full articles (~5,800+ words). Root cause: `fetchRouteData` only matched `/blog/` and `/ar/blog/`, not other locale prefixes.

**Fix in this branch:** locale-aware blog matcher in `src/data/fetchRouteData.ts` + regression test `src/data/__tests__/localized-blog-fetchRouteData.test.ts`.

## Content & LLM (GEO) actions in this branch

1. **GCC medication management** and **Singapore MedTech manufacturing** specialty pages expanded (calendar blocks, FAQs, structure copy) — vitest word-count gate `specialty-gsc-expansion-word-count-nov-2026.test.ts`.
2. **`/brazil-healthcare-market-report`** — GeoLLMAnswerBlock + executive summary depth; `dateModified` 2026-11-06 (top thin URL by GSC impressions).
3. **`/healthcare-market-statistics`** — Americas/Europe benchmark stats + methodology section; `dateModified` 2026-11-06.

## Next sprint (remaining 331 thin URLs)

1. Deploy this branch; run `npm run indexnow:priority`; re-crawl production.
2. Batch-expand country device reports near 1,700 words (`/india-medical-devices-market-report`, `/singapore-medical-devices-market-report`, etc.).
3. Arabic/ZH localized blog SSR word-count pass (mirror DE/FR fix validation).
4. US CTR programme after title freeze lifts (IQVIA comparison cluster).

## Deploy checklist (this change set)

- `src/data/fetchRouteData.ts`
- `src/data/specialtyMarketDemandContent.ts`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/data/healthcareMarketStatistics.ts`
- `src/data/__tests__/localized-blog-fetchRouteData.test.ts`
- `src/lib/seo/__tests__/specialty-gsc-expansion-word-count-nov-2026.test.ts`
- `docs/seo/website-audit-2026-11-06.md`
- `reports/weekly-report-2026-11-06.md` (+ `.data.json`)
- Crawl outputs: `scripts/data/bio-449-thin-page-audit.json`, `docs/seo/bio-449-thin-page-inventory.csv`, `docs/seo/sitewide-audit-phase2.md`, `scripts/data/sitewide-audit-phase2.json`
