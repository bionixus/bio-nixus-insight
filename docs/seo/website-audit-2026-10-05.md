# BioNixus website SEO audit — 2026-10-05

## GSC snapshot (week in `data/gsc/current-week/`)

| Metric | This week | Target | vs target |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 |
| Clicks/day | 52 | 450 | −398 |
| CTR | **1.13%** | 3.0% | −1.87 pp |
| Avg. position | **19.5** | 5.0 | +14.5 (improved vs 25.8 prior week) |

### CTR diagnostics

- **United States:** ~35% of impressions at **0.12% CTR** — still the largest drag; body + SERP tests needed on USA listicles and hub pages.
- **Mobile CTR 2.63%** vs desktop **0.74%** — maintain mobile-first content depth; desktop titles/meta underperforming.
- **Winning cluster:** `/pharmaceutical-companies-*` at **~2.21% CTR** (619 clicks / 27,999 impr).
- **Money queries with 0% CTR on page 1:** `companies like iqvia` (pos 3.1), `iqvia alternatives` (pos 4.0), `egyptian pharmaceutical companies` (pos 3.3) — landing pages must expose direct answers in HTML (SSR).
- **Device-report drag:** Japan/GCC device reports still dilute mix when included in headline averages.

Full narrative: `reports/weekly-report-2026-10-04.md` (refresh when new GSC export lands).

## Production crawl (BIO-448, 2026-10-05)

| Check | Result |
|---|---|
| URLs audited | 937 |
| Thin pages (&lt;2,000 visible words) | **489** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-448-thin-page-inventory.csv`.

**Thin + meaningful GSC impressions (≥200/week):** Brazil healthcare report (~1,926w), India/Singapore device reports (~1,650w), `/healthcare-market-statistics` (~1,647w), `/ar/pharmaceutical-companies-egypt` (~608w), retail Saudi (~1,175w), Egypt healthcare research (~1,510w), Oman FMCG (~1,262w).

**P0 stubs:** `/ar/blog/*` and locale insight hubs remain &lt;300w — SSR blog body or noindex until Sanity Arabic body ships.

## Errors

- **404:** none in sitemap crawl.
- **Technical:** no new SSR regressions flagged this run; post-deploy run `npm run audit:sitewide:phase2`.

## Changes this sprint (branch `cursor/website-content-and-ranking-f03e`)

1. **`/ar/pharmaceutical-companies-egypt`** (+ Kuwait) — Arabic long-form market/regulatory/distribution sections for LLM + Google depth.
2. **`/healthcare-market-statistics`** — new stats (India/Singapore devices), FAQ (`<details>`), `dateModified` 2026-10-05.
3. **`/india-medical-devices-market-report`**, **`/singapore-medical-devices-market-report`**, **`/brazil-healthcare-market-report`** — access/procurement narrative blocks.
4. **`/market-research-healthcare`** — English primary-vs-syndicated + GCC/Egypt governance expansion (IQVIA alternative internal link).

## Recommended next actions

1. Deploy; `npm run indexnow:priority`.
2. Thin backlog **~485** — service scope pages &lt;1,000w, `/ar/blog` stubs, near-threshold reports 1,900–1,980w.
3. US CTR: test title/meta + first-paragraph answer blocks on USA directory pages.
4. Upload fresh GSC export to `data/gsc/current-week/` weekly; `npm run report:weekly`.

## DEPLOY CHECKLIST

- `src/data/arPharmaDirectoryLongForm.ts`
- `src/components/seo/ArPharmaDirectoryLongFormSections.tsx`
- `src/pages/templates/ArPharmaCompaniesDirectoryPage.tsx`
- `src/data/arPharmaDirectories.ts`
- `src/data/reportAccessChannelNarratives.ts`
- `src/components/report-premium/ReportAccessChannelSection.tsx`
- `src/pages/IndiaMedicalDevicesMarketReport.tsx`
- `src/pages/SingaporeMedicalDevicesMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/data/healthcareMarketStatistics.ts`
- `src/pages/HealthcareMarketStatistics.tsx`
- `src/data/marketResearchHealthcareExpansion.ts`
- `src/pages/MarketResearchHealthcare.tsx`
- `docs/seo/website-audit-2026-10-05.md`
- `docs/seo/bio-448-thin-page-inventory.{csv,json}`
