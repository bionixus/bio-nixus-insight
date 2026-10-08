# Website SEO audit — 2026-10-08

## Google Search Console (week ending 2026-10-08)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | +137 |
| Clicks/day | 52 | 450 | +18 |
| CTR | 1.13% | 3.0% | +0.37 pp |
| Avg. position | 19.5 | 5.0 | improved (was 25.8) |

**Structural CTR notes**

- **United States:** ~35% of impressions at **0.12% CTR** — largest country-level drag.
- **Desktop:** 0.74% CTR vs **mobile 2.63%** — title/meta and SERP snippet tests should prioritise desktop-visible queries.
- **Winning cluster:** `/pharmaceutical-companies-*` at **~2.21% CTR**.
- **IQVIA comparison cluster:** `companies like iqvia` at **position 3.1**, **64 impressions**, **0% CTR** → title/H1 test shipped this sprint.

Full narrative: `reports/weekly-report-2026-10-08.md`.

## Crawl health (BIO-448, production)

- **937** service/landing URLs audited (2,000-word threshold).
- **479** thin | **0** HTTP 404 | **458** pass.
- Inventory: `docs/seo/bio-448-thin-page-inventory.csv`

## Errors fixed this sprint

1. **Locale trailing-slash redirect pollution** — `/de/` and `/es/` were 301ing to `/de?path=de%2F` (indexed in GSC). `path` is now stripped as SSR noise in `seo-noise-query.mjs` and `api/indexnow-key.ts`.
2. **IQVIA CTR** — `/iqvia-alternative` title, meta, H1 aligned to query “companies like IQVIA”.
3. **Thin content** — expanded `/real-world-evidence` (protocol, syndicated vs primary, governance); near-threshold copy on Denmark listicle and Brazil pharma directory.

## LLM / AEO visibility

- FAQ and Organization JSON-LD remain on hub service pages; IQVIA static page retains FAQPage + Service schema.
- After deploy: `npm run indexnow:priority` and monitor AI referral in GSC / `npm run aeo:report`.

## Backlog (next cron)

1. **~479 thin URLs** — priority: `/ar/blog` stubs (~13w), locale insight hubs, medtech/real-estate listicle matrix (~850w each).
2. **US CTR** — body copy tests on high-impression US directory pages (not meta-only).
3. **Re-crawl:** `node scripts/audit-thin-pages-bio448.mjs`

## DEPLOY CHECKLIST

- `seo-noise-query.mjs`
- `api/indexnow-key.ts`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `data/seo/title-freeze.json`
- `public/conf/iqvia-alternative.html`
- `server.js`
- `src/pages/RealWorldEvidence.tsx`
- `src/pages/TopMarketResearchCompaniesDenmark2026.tsx`
- `src/pages/BrazilPharmaCompanies.tsx`
- `docs/seo/bio-448-thin-page-inventory.json` (generated)
- `reports/weekly-report-2026-10-08.md` (generated)
- `docs/seo/website-audit-2026-10-08.md`
