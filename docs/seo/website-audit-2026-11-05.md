# BioNixus website SEO audit — 2026-11-05

## GSC snapshot (week ending 2026-11-05)

| Metric | This week | Target | vs target | Last week | vs last week |
|---|---|---|---|---|---|
| Impressions/day | **4,585** | 15,000 | −10,415 | 4,448 | +137 |
| Clicks/day | **52** | 450 | −398 | 33 | +18 |
| CTR | **1.13%** | 3.0% | −1.87 pp | 0.75% | +0.37 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | 25.8 | **+6.3 (improved)** |

Full narrative: `reports/weekly-report-2026-11-05.md`.

### CTR / ranking diagnostics

- **United States:** 34.9% of impressions at **0.12% CTR** — still the largest drag; do not rewrite frozen IQVIA titles until **2026-12-12**.
- **Excl. US:** **1.66% CTR** — core non-US mix is healthy.
- **Mobile 2.63% CTR** vs **desktop 0.74%** — desktop SERP snippets and deep-rank pages need ongoing work.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (619 clicks / week).
- **Page-1 zero-click queries:** `companies like iqvia` (pos 3.1), `iqvia alternatives`, `gcc medication management market`, `japan medical disposables market`, `febrile neutropenia market`, `singapore ivd market access` — land on specialty or competitor pages; expand body + GeoLLM blocks (shipped this sprint for eight specialty URLs).

### LLM / chat appearance

- Added **GeoLLMAnswerBlock** + long-form **field guide** sections on eight GSC-priority specialty pages (SSR-verified ≥2,000 words each).
- Competitor cluster (`/iqvia-alternative`, listicles) already carries answer-first blocks — continue US body-copy tests on `/insights/top-healthcare-market-research-companies-usa-2026`.

## Production crawl (BIO-449, 2026-11-05)

| Check | Result |
|---|---|
| URLs audited | **715** |
| Thin pages (&lt;2,000 words) | **331** |
| HTTP 404 | **0** |
| Fetch errors | **0** |

Inventory: `docs/seo/bio-449-thin-page-inventory.csv`, JSON: `scripts/data/bio-449-thin-page-audit.json`.

**Near-term thin backlog:** Arabic blog SSR (`/ar/blog/*`), locale hubs (`/ar/strategic-portfolio`, `/zh/insights`), BOFU `/market-research-*` spokes, developed-market MedTech landings at 1,900–1,999 words.

## Errors

- **404:** none in sitemap crawl.
- **Technical:** run `npm run audit:sitewide:phase2` post-deploy for title/meta/schema spot checks.

## Changes shipped this sprint (branch `cursor/website-ranking-content-audit-0b9b`)

1. **Eight specialty GSC URLs** — long-form patches + GeoLLM answer blocks (`specialtyMarketDemandGscExpansions.ts`); `dateModified` / sitemap `lastmod` **2026-11-05**.
2. **`SpecialtyMarketDemandPage` template** — renders geo answer + narrative field guide for LLM/Google body depth.
3. **`preloadRouteChunk.ts`** — preloads all specialty demand routes (hydration stability).
4. **Vitest gate** — `specialty-market-demand-word-count.test.ts` enforces ≥2,000 SSR words on the eight URLs.
5. **Weekly report** — `reports/weekly-report-2026-11-05.md` (generated).

## Recommended next actions

1. **Deploy** → `npm run indexnow:priority` → re-run `node scripts/bio-449-thin-page-audit.mjs` on production for the eight URLs.
2. **US CTR:** expand USA listicle body (not meta-only); reduce 0.12% US CTR drag.
3. **Thin backlog:** next 25 URLs from `docs/seo/bio-449-thin-page-inventory.csv` (P0 &lt;1,000 words).
4. **Directory matrix:** continue IndexNow waves per `npm run report:directory-gates`.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/specialtyMarketDemandContent.ts`
- `src/data/specialtyMarketDemandGscExpansions.ts`
- `src/pages/templates/SpecialtyMarketDemandPage.tsx`
- `src/lib/preloadRouteChunk.ts`
- `scripts/build-specialty-gsc-expansions.mjs`
- `scripts/data/specialty-market-demand-sitemap.mjs`
- `public/sitemap.xml`
- `src/lib/seo/__tests__/specialty-market-demand-word-count.test.ts`
- `src/lib/seo/__tests__/singapore-ivd-market-access.test.ts`
- `docs/seo/website-audit-2026-11-05.md`
- `reports/weekly-report-2026-11-05.md`
- `scripts/data/bio-449-thin-page-audit.json`
- `docs/seo/bio-449-thin-page-inventory.csv`
