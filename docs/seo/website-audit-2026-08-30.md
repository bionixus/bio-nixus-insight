# Website SEO Audit — 2026-08-30

## GSC performance (week ending 2026-08-30 export)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02pp |
| Avg position | **25.8** | 5.0 | +2.6 (improved) |

### CTR diagnostics

- **USA**: 33% of impressions @ **0.09% CTR** — largest structural drag
- **Excl. US**: 1.08% CTR
- **Mobile**: 2.23% CTR vs desktop 0.50%
- **Winning cluster**: `/pharmaceutical-companies-*` @ **1.60% CTR**
- **Deep-SERP dilution**: pages pos >40 with ≥200 impr @ 0.10% CTR

### Page-1 queries with 0% CTR (CTR wave 6 targets)

`iqvia competitors`, `saudi arabia biosimilar market`, `gcc biologics market`, `febrile neutropenia market`, `pharmaceutical companies in dubai`, `singapore ivd market access`, `gcc functional service providers market`, `turkey diabetes market`, `gcc vaccine market`

## Production crawl (2026-08-30 pre-deploy)

| Check | Result |
|---|---|
| URLs audited | 655 |
| Thin pages (<2000 words) | **349** |
| 404 errors | **0** |
| HTTP errors | **0** |
| Sitewide MAJOR issues | **8** (6 localized blog missing H1 + 2 video pages) |

## Post-fix local crawl (2026-08-30, localhost build)

| Check | Result |
|---|---|
| Thin pages | **335** (−14 vs production baseline) |
| 404 errors | **0** |
| MAJOR (excl. fetch timeouts) | **0** localized blog H1 issues fixed |
| Key pages now ≥2000 words | `/biosimilar-market-entry-saudi-arabia` (2007), `/bionixus-vs-iqvia-mena` (2086) |

## Fixes delivered (this sprint)

### P0 — SSR / crawlability (from 2026-08-29 + verified)

- `fetchRouteData.ts` + `preloadRouteChunk.ts`: localized blog post SSR for `/de|fr|zh|es|pt|ru/blog/:slug` (fixes 6 MAJOR missing-H1 URLs)
- German blog post verified: **3,264 words**, **1 H1** in SSR HTML

### Content depth

- **Static conf pages**: biosimilar Saudi guide + IQVIA MENA comparison — FAQ blocks, `<main>` semantic wrapper, dateModified 2026-08-30
- **Specialty pages**: Singapore IVD market access, GCC FSP market — expanded intros, signal grids, calendar blocks, FAQs
- **Prior sprint carry-over**: MedTech near-threshold, GCC biologics section, pharma BOFU depth, services hub depth

### CTR wave 6 (2026-08-30)

- `/biosimilar-market-entry-saudi-arabia` — Saudi biosimilar query
- `/market-reports/gcc-biosimilars-market-report` — GCC biologics market
- `/market-reports/turkey-diabetes-market-report` — Turkey diabetes market
- `/singapore-ivd-market-access` — Singapore IVD market access
- `/market-reports/gcc-vaccines-market-report` — GCC vaccine market
- `/bionixus-vs-iqvia-mena` — IQVIA competitors MENA

## LLM / chat appearance

- FAQ `<details>` blocks on biosimilar and IQVIA comparison static pages (crawler-readable without JS)
- Expanded factual sections on Singapore IVD and GCC FSP specialty pages for AEO/LLM citation
- Organization + Service + FAQ schema preserved on SSR routes

## Remaining backlog (~335 thin pages)

1. Localized blog posts (ar/de/fr) still thin until Sanity body content ships
2. `services/*` and `segment-market/*` cluster (~210 URLs)
3. Near-threshold medtech country pages (post-deploy verify)
4. Video watch pages missing H1 (2 MAJOR)

## Next sprint priorities

1. **Deploy** — post-deploy production thin audit (target <320 from 349)
2. USA title/meta iteration for 0.09% CTR slice
3. Batch `services/*` thin URLs
4. `npm run indexnow:priority` after deploy
5. Fresh GSC export week ending 2026-09-06

## DEPLOY CHECKLIST

- `src/data/fetchRouteData.ts`
- `src/lib/preloadRouteChunk.ts`
- `src/data/specialtyMarketDemandContent.ts`
- `src/data/developedMarketMedtechPages.ts`
- `src/data/pharmaCompaniesDepthContent.ts`
- `src/data/serviceDetailDepthContent.ts`
- `src/data/servicesHubContent.ts`
- `src/pages/GccMarketAccessGuide.tsx`
- `src/pages/ServiceDetail.tsx`
- `src/pages/Services.tsx`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `public/conf/biosimilar-market-entry-saudi-arabia.html`
- `public/conf/bionixus-vs-iqvia-mena.html`
- `docs/seo/website-audit-2026-08-30.md`
- `reports/weekly-report-2026-08-30.md`
