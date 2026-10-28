# BioNixus website SEO audit — 2026-10-28

**Automation:** Daily cron (`cursor/website-content-and-ranking-e22c`)

## GSC snapshot (week in `data/gsc/current-week/`)

| Metric | This week | Target | vs target | Last week | vs last week |
|---|---|---|---|---|---|
| Impressions/day | **4,585** | 15,000 | −10,415 | 4,448 | +137 |
| Clicks/day | **52** | 450 | −398 | 33 | +19 |
| CTR | **1.13%** | 3.0% | −1.87 pp | 0.75% | +0.38 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | 25.8 | +6.3 (improved) |

### CTR diagnostics

- **United States:** ~35% of impressions at **0.12% CTR** — still the largest single-country drag.
- **Desktop:** 0.74% CTR on ~80% of device impressions; **mobile 2.63%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (619 clicks / 28k impr).
- **Company-directory matrix:** **1.91% CTR** (1,057 clicks / 55k impr).
- **Page-1 zero-CTR opportunities:** `companies like iqvia` (pos 3.1), `iqvia alternatives` (pos 4.0), `singapore ivd market access` (pos 1.7), `gcc biologics market` (pos 6.2) — body/LLM copy and answer blocks; **IQVIA URL titles frozen until 2026-12-12**.

Full tables: `reports/weekly-report-2026-10-28.md`.

## Production crawl (BIO-449, 2026-10-28)

| Check | Result |
|---|---|
| URLs audited | 711 |
| Thin pages (&lt;2,000 visible words) | **332** (−2 vs 2026-10-27) |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-449-thin-page-inventory.csv`.

## Errors

- **404:** none in sitemap crawl.
- **SSR:** no new regressions flagged pre-deploy; run `npm run audit:sitewide:phase2` post-deploy.

## Changes shipped this sprint

1. **Developed-country healthcare MR landings** — depth sections (decision blueprint + payer/access) for Netherlands, Spain, Canada, Sweden, Poland, Turkey, and USA standalone pages via `healthcareMrCountryDepthContent.ts`.
2. **Thin therapy pages** — extra `ReportPremiumSection` modules for dermatology, neurology-CNS, digital health, and cardiovascular routes.
3. **Turkey healthcare market report** — executive primary-research paragraph + `dateModified` 2026-10-28.
4. **IQVIA alternative static page** — `dateModified` bump for LLM recency (body already targets “companies like IQVIA” intent).
5. **Weekly report** — regenerated `reports/weekly-report-2026-10-28.md`.

## Recommended next actions

1. Deploy; `npm run indexnow:priority`; re-crawl (target **&lt;300** thin).
2. Near-threshold standalone reports (Turkey/Brazil healthcare ~1,970w) — one paragraph each or shared report enrichment.
3. US CTR: expand `/insights/top-healthcare-market-research-companies-usa-2026` body (not title-only); reduce US impression share drag.
4. Directory matrix: run `npm run report:directory-gates`; kill spokes &lt;10 impr/day at day 90.
5. Refresh GSC export weekly into `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/seo/healthcareMrCountryDepthContent.ts`
- `src/components/seo/HealthcareMrCountryDepthSections.tsx`
- `src/pages/HealthcareMarketResearch{Netherlands,Spain,Canada,Sweden,Poland,Turkey,Usa}.tsx`
- `src/pages/healthcare-research/TherapyPage.tsx`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `public/conf/iqvia-alternative.html`
- `docs/seo/website-audit-2026-10-28.md`
- `docs/seo/bio-449-thin-page-inventory.csv` (regenerated crawl)
- `scripts/data/bio-449-thin-page-audit.json`
- `reports/weekly-report-2026-10-28.md`
- `reports/weekly-report-2026-10-28.data.json`
