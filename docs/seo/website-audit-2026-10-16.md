# BioNixus website SEO audit — 2026-10-16

## GSC snapshot (week ending import in `data/gsc/current-week/`)

| Metric | This week | Target | vs target | Last week | vs last week |
|---|---|---|---|---|---|
| Impressions/day | **4,585** | 15,000 | −10,415 | 4,448 | +137 |
| Clicks/day | **52** | 450 | −398 | 33 | +18 |
| CTR | **1.13%** | 3.0% | −1.87 pp | 0.75% | +0.37 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | 25.8 | improved |

### CTR diagnostics

- **United States:** 34.9% of impressions at **0.12% CTR** — largest single-country drag.
- **Desktop:** 0.74% CTR on ~80% of device impressions; **mobile 2.63%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (27,999 impr).
- **Company-directory matrix:** **1.91% CTR** (55,333 impr).
- **Insights listicles:** 0.84% CTR (12,011 impr) — CTR test backlog.
- **Page-1 zero-CTR:** `companies like iqvia` (pos 3.1), `fmcg` / `fmcg companies`, Dubai pharma queries — body + answer-first copy, not title-only (freeze rules).

Full narrative: `reports/weekly-report-2026-10-16.md`.

## Production crawl (BIO-448, 2026-10-16)

| Check | Result |
|---|---|
| URLs audited | 937 |
| Thin pages (&lt;2,000 visible words) | **478** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-448-thin-page-inventory.csv`.

**High-impression thin (GSC crosswalk):** `/brazil-healthcare-market-report` (1,554 impr), `/healthcare-market-statistics` (956), `/india-medical-devices-market-report` (1,143), `/ar/pharmaceutical-companies-egypt` (547), `/ar/pharmaceutical-companies-kuwait` (276).

## Errors

- **404:** none in sitemap crawl.
- **Technical:** run `npm run audit:sitewide:phase2` post-deploy for title/meta/schema spot checks.

## Changes shipped this sprint (branch `cursor/website-content-and-ranking-2d17`)

1. **Arabic pharma directories (6 GCC/MENA URLs)** — market-structure sections, channel narrative, growth drivers, fieldwork notes; `modifiedDate` 2026-10-16 (`arPharmaDirectoryExpansion.ts`, `ArPharmaCompaniesDirectoryPage.tsx`).
2. **`/healthcare-market-statistics`** — regulatory & access benchmark region, GeoLLM answer block, `last updated` 2026-10-16.
3. **`/brazil-healthcare-market-report`** — SUS/ANS funnel paragraph, GeoLLM block, `dateModified` 2026-10-16.
4. **`/healthcare-market-research-italy`** — FAQ for AI citation / primary-research positioning (near-threshold word count).
5. **Reports:** `reports/weekly-report-2026-10-16.md`, refreshed BIO-448 inventory.

## LLM / chat appearance

- GeoLLM blocks added on statistics hub and Brazil healthcare report; Arabic directories include explicit primary-research vs IQVIA positioning for Arabic queries.
- Ensure `public/llms.txt` and `/iqvia-alternative` stay in IndexNow priority after deploy.

## Recommended next actions

1. Deploy; `npm run indexnow:priority`; re-crawl BIO-448 (expect AR pharma + statistics + Brazil over 2k words).
2. Thin backlog ~470 — insights listicles, `/market-research/*` scopes, retail/FMCG directories 1,200–1,900w.
3. US CTR: deepen USA listicle body copy (impressions without clicks).
4. Directory matrix waves: indexation gates still failing — internal links + IndexNow per `report:directory-gates`.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/arPharmaDirectoryExpansion.ts`
- `src/data/arPharmaDirectories.ts`
- `src/pages/templates/ArPharmaCompaniesDirectoryPage.tsx`
- `src/data/healthcareMarketStatistics.ts`
- `src/pages/HealthcareMarketStatistics.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/HealthcareMarketResearchItaly.tsx`
- `docs/seo/website-audit-2026-10-16.md`
- `docs/seo/bio-448-thin-page-inventory.json`
- `docs/seo/bio-448-thin-page-inventory.csv`
- `reports/weekly-report-2026-10-16.md`
- `reports/weekly-report-2026-10-16.data.json`
