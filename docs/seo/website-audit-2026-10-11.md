# BioNixus website SEO audit — 2026-10-11

## GSC snapshot (week in `data/gsc/current-week/`)

| Metric | This week | Target | vs target | Last week | vs last week |
|---|---|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 | 4,448 | +137 |
| Clicks/day | 52 | 450 | −398 | 33 | +18 |
| CTR | **1.13%** | 3.0% | −1.87 pp | 0.75% | +0.38 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | 25.8 | **+6.3 improved** |

Full narrative: `reports/weekly-report-2026-10-11.md`.

### CTR / ranking diagnostics

- **United States:** ~35% of impressions at **0.12% CTR** — still the largest drag; page-1 queries (FMCG, Dubai pharma, IQVIA alternatives) show 0% CTR on several money terms.
- **Mobile vs desktop:** Mobile **2.63% CTR** vs desktop **0.74%** — titles/meta and US landing relevance remain the main lever on desktop.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (619 clicks / 27,999 impr).
- **Insights listicles:** **0.84% CTR** — room for body + FAQ depth and CTR meta iteration.
- **Device-report drag:** Japan/GCC device reports still dilute headline CTR when included in mix.

## Production crawl (BIO-448, 2026-10-11)

| Check | Result |
|---|---|
| Service/landing URLs audited | **937** |
| Thin pages (&lt;2,000 visible words) | **479** |
| HTTP **404** | **0** |
| Pass (≥2,000 words) | **458** |

Inventory: `docs/seo/bio-448-thin-page-inventory.csv`, `docs/seo/bio-448-thin-page-inventory.json`.

Top thin URLs by GSC impressions (pre-deploy): `/brazil-healthcare-market-report` (~1,966w), `/india-medical-devices-market-report` (~1,694w), `/healthcare-market-statistics` (~1,647w), `/ar/pharmaceutical-companies-egypt` (~688w).

## Errors

- **404:** none in sitemap crawl.
- **SSR:** no new regressions flagged in this pass; post-deploy run `npm run audit:sitewide:phase2` for title/meta/schema spot checks.

## Changes shipped this sprint (branch `cursor/website-content-and-ranking-f839`)

1. **Arabic pharma directories (`/ar/pharmaceutical-companies-*`)** — long-form Arabic market, regulatory, distribution, and BioNixus sections; company-type breakdown; +3 FAQs per country; hub link to `/healthcare-market-research` in hero; `dateModified` 2026-10-11.
2. **`/brazil-healthcare-market-report`** — executive summary depth (devices segment + internal links); schema `dateModified` 2026-10-11.
3. **`/india-medical-devices-market-report`** — channel/regulatory paragraph (Ayushman, CDSCO, NPPA); schema `dateModified` 2026-10-11.
4. **`/healthcare-market-statistics`** — +3 sourced global stats, LLM/citation guidance copy, FAQ (`<details>`) + FAQPage schema, CTA band; `dateModified` 2026-10-11.

## LLM / chat appearance

- FAQ and Dataset/Article schema reinforced on statistics page; Arabic directories carry expanded FAQ JSON-LD.
- Continue citing **account-level** differentiation on pages targeting “companies like IQVIA” (`/iqvia-alternative` CTR meta already names competitors).

## Recommended next actions

1. Deploy; `npm run indexnow:priority`.
2. Re-crawl: `node scripts/audit-thin-pages-bio448.mjs` — expect AR pharma + near-threshold reports to flip to pass.
3. Thin backlog ~470 → focus **Sanity Arabic blog stubs**, `/zh/insights`, utility pages &lt;1,000w.
4. US desktop CTR: map page-1 zero-CTR queries to landing URLs; test title/body on FMCG and Dubai pharma hubs.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/arPharmaDirectoryNarratives.ts` (new)
- `src/data/arPharmaDirectories.ts`
- `src/pages/templates/ArPharmaCompaniesDirectoryPage.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/IndiaMedicalDevicesMarketReport.tsx`
- `src/data/healthcareMarketStatistics.ts`
- `src/pages/HealthcareMarketStatistics.tsx`
- `docs/seo/website-audit-2026-10-11.md`
- `reports/weekly-report-2026-10-11.md`
- `docs/seo/bio-448-thin-page-inventory.csv` (regenerated)
- `docs/seo/bio-448-thin-page-inventory.json` (regenerated)
