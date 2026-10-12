# BioNixus website SEO audit — 2026-10-12

## GSC snapshot (week in `data/gsc/current-week/`)

| Metric | This week | Target | vs target | Last week | vs last week |
|---|---|---|---|---|---|
| Impressions/day | **4,585** | 15,000 | −10,415 | 4,448 | +137 |
| Clicks/day | **52** | 450 | −398 | 33 | +18 |
| CTR | **1.13%** | 3.0% | −1.87 pp | 0.75% | +0.38 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | 25.8 | ▲ +6.3 (improved) |

Full tables: `reports/weekly-report-2026-10-12.md`.

### CTR diagnostics (structural)

- **United States:** 34.9% of impressions at **0.12% CTR** — still the largest drag.
- **Excl. US (Countries.csv):** **1.66% CTR** — rest-of-world mix is healthier.
- **Desktop:** 0.74% CTR on ~80% of device impressions; **mobile 2.63%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (619 clicks / 27,999 impr).
- **Page-1 money queries with 0% CTR:** `companies like iqvia` (pos 3.1), `iqvia alternatives` (pos 4.0), `looking for something better than iqvia` (pos 4.3) — `/iqvia-alternative` title frozen; body already >2k words; test in-SERP snippet alignment and internal links from directory pages.
- **FMCG head terms** (pos 4–7, hundreds of impr): meta/body tests on FMCG directory landings — see weekly report CTR table.

## Production crawl (BIO-448, 2026-10-12)

| Check | Result |
|---|---|
| Service/landing URLs audited | **937** |
| Thin pages (&lt;2,000 visible words in `<main>`) | **478** |
| HTTP 404 | **0** |
| Fetch errors | **0** |

Inventory: `docs/seo/bio-448-thin-page-inventory.csv` / `.json`.

### High-impression thin URLs (GSC crosswalk)

| Impressions (week) | Words (pre-fix) | Path |
|---:|---:|---|
| 1,554 | 1,966 | `/brazil-healthcare-market-report` |
| 1,143 | 1,694 | `/india-medical-devices-market-report` |
| 956 | 1,647 | `/healthcare-market-statistics` |
| 547 | 688 | `/ar/pharmaceutical-companies-egypt` |
| 276 | 627 | `/ar/pharmaceutical-companies-kuwait` |

Backlog remains: AR blog stubs, `/zh/insights`, utility pages (`/media`, `/videos`), near-threshold listicles (1,970–1,999w).

## Errors

- **404:** none in sitemap crawl.
- **SSR:** no new regressions flagged this run; post-deploy run `npm run audit:sitewide:phase2` and `npm run verify:ssr-bundle`.

## Changes shipped this sprint (branch `cursor/website-content-and-ranking-c1f5`)

1. **Arabic pharma directories (6 GCC/MENA paths)** — long-form regulatory/channel sections via `arPharmaDirectoryDeepContent.ts`; `dateModified` 2026-10-12.
2. **`/healthcare-market-statistics`** — new cited stats, FAQ (`<details>`) + FAQPage JSON-LD, LLM citation block; `dateModified` 2026-10-12.
3. **`/brazil-healthcare-market-report`** — regional manufacturing/hospital hub section; schema `dateModified` 2026-10-12.
4. **`/india-medical-devices-market-report`** — procurement/Ayushman/import channel section; schema `dateModified` 2026-10-12.
5. **Reporting** — `reports/weekly-report-2026-10-12.md`; refreshed BIO-448 inventory.

## LLM / chat appearance

- Prefer stable URLs already in `public/llms.txt` (`/iqvia-alternative`, `/account-level-market-research`, `/healthcare-market-research`).
- New FAQ + explicit “for AI assistants” copy on `/healthcare-market-statistics` to improve extractable answers for market-size questions.
- Arabic directories now answer “شركات الأدوية في …” with regulator and channel context, not table-only stubs.

## Recommended next actions

1. Deploy; `npm run indexnow:priority`; re-crawl `node scripts/audit-thin-pages-bio448.mjs`.
2. Thin backlog ~470 — Sanity AR blog stubs, `/zh/insights`, `/market-research/*` scope pages &lt;800w.
3. US desktop CTR: body tests on USA listicle + FMCG hubs (not title-only on frozen URLs).
4. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/arPharmaDirectoryDeepContent.ts`
- `src/data/arPharmaDirectories.ts`
- `src/pages/templates/ArPharmaCompaniesDirectoryPage.tsx`
- `src/data/healthcareMarketStatistics.ts`
- `src/pages/HealthcareMarketStatistics.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/IndiaMedicalDevicesMarketReport.tsx`
- `docs/seo/website-audit-2026-10-12.md`
- `reports/weekly-report-2026-10-12.md`
- `docs/seo/bio-448-thin-page-inventory.csv`
- `docs/seo/bio-448-thin-page-inventory.json`
