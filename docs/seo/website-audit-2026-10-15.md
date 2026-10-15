# Website SEO audit — 2026-10-15

## GSC snapshot (data/gsc/current-week)

| Metric | This week | Target | vs last week |
|--------|-----------|--------|--------------|
| Impressions/day | 4,585 | 15,000 | +137 |
| Clicks/day | 52 | 450 | +19 |
| CTR | 1.13% | 3.0% | +0.37 pp |
| Avg. position | 19.5 | 5.0 | +6.3 (improved) |

Full scorecard: `reports/weekly-report-2026-10-15.md`.

## Crawl (BIO-448, production baseline pre-deploy)

- **937** service/landing URLs audited
- **478** thin (&lt;2,000 words in `<main>`)
- **0** HTTP 404 in sitemap crawl
- **0** fetch errors

Inventory: `docs/seo/bio-448-thin-page-inventory.json`.

## Actions shipped this run

1. **Arabic pharma directories** — `bodySections` for UAE, Saudi, Oman, Qatar (Egypt/Kuwait from 2026-10-14 batch); template renders long-form Arabic SSR blocks.
2. **Singapore IVD** — depth + CTR meta override for GSC query “singapore ivd market access” (pos ~1.7, 0 clicks).
3. **Saudi retail BOFU** — hero + uniqueness depth via `industryCommercialExpandedContent` enhancements.
4. **About** — AI/search citation block for LLM discoverability; links to `llms.txt` and IQVIA alternative hub.
5. **llms.txt** — Arabic pharma URLs + Singapore IVD entry.
6. **Statistics / Brazil / India device reports** — carried from 2026-10-14 content batch (cherry-picked).

## CTR priorities (page-1, &lt;1.5% CTR)

- `companies like iqvia` / `iqvia alternatives` → `/iqvia-alternative` (title already CTR-optimized)
- `pharmaceutical companies in dubai` → `/pharmaceutical-companies-dubai` + `/pharmaceutical-companies-uae`
- `fmcg` cluster → FMCG matrix pages + internal links from winning pharma directories
- **US desktop drag** — 34.9% impressions @ 0.12% CTR; continue snippet tests on USA listicles

## Next deploy steps

1. `npm run build` && deploy
2. `npm run indexnow:priority` for changed URLs
3. Re-run `node scripts/audit-thin-pages-bio448.mjs` — expect **−6** thin AR pharma URLs + Singapore IVD + Saudi retail + About

## DEPLOY CHECKLIST (files touched)

- `src/data/arPharmaDirectories.ts`, `src/data/arPharmaBodySectionsGcc.ts`
- `src/pages/templates/ArPharmaCompaniesDirectoryPage.tsx`
- `src/data/specialtyMarketDemandContent.ts`, `src/server/ctr-seo-overrides.js`
- `src/data/industryCommercialExpandedContent.ts`
- `src/pages/About.tsx`, `src/pages/about/aboutPageCopy.en.ts`, `aboutPageCopy.types.ts`
- `src/data/healthcareMarketStatistics.ts`, `src/pages/HealthcareMarketStatistics.tsx`, Brazil/India reports
- `public/llms.txt`, `scripts/generate-sitemap.mjs`
- `docs/seo/bio-448-thin-page-inventory.*`, `reports/weekly-report-2026-10-15.md`, `docs/seo/website-audit-2026-10-15.md`
