# BioNixus website SEO audit — 2026-11-28

## GSC snapshot (week ending import in `data/gsc/current-week/`)

| Metric | This week | Target | vs target | Last week | vs last week |
|---|---|---|---|---|---|
| Impressions/day | **4,585** | 15,000 | −10,415 | 4,448 | +137 |
| Clicks/day | **52** | 450 | −398 | 33 | +18 |
| CTR | **1.13%** | 3.0% | −1.87 pp | 0.75% | +0.38 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | 25.8 | **+6.3 (improved)** |

Full tables: `reports/weekly-report-2026-11-28.md`.

### CTR / ranking diagnostics

- **United States:** 34.9% of impressions at **0.12% CTR** — still the largest single-country drag.
- **Excl. US:** **1.66% CTR** — structural mix is healthier than headline.
- **Mobile 2.63% CTR** vs **desktop 0.74%** — snippet and title tests should prioritise desktop/US cohorts.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (619 clicks).
- **Page-1 money queries with 0% CTR:** `companies like iqvia` (pos 3.1), `fmcg companies` (5.6), `pharmaceutical companies in dubai` (6.7), `looking for something better than iqvia` (4.3) — title frozen on `/iqvia-alternative`; body/FAQ/JSON-LD refresh is the lever until a governed title test.
- **LLM / chat appearance:** `public/llms.txt` is current (2026-Q4); buyer entry points include `/iqvia-alternative`, `/market-research-gcc`, and healthcare hub URLs.

## Production crawl (BIO-450, 2026-11-28)

| Check | Result |
|---|---|
| URLs audited | **678** |
| Thin pages (<2,000 visible words in `<main>`) | **305** |
| HTTP 404 | **0** |
| Server errors | **0** |
| `/healthcare-market-research/*` thin | **27** |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv` · raw: `scripts/data/bio-450-thin-page-audit.json`.

Near-threshold URLs (fastest bulk pass): `/turkey-healthcare-market-report` (1973w), `/brazil-healthcare-market-report` (1970w), `/ru/services` (1969w).

High-value BOFU still below threshold: `/market-research-gcc` (1754w), `/healthcare-market-research-usa` (1800w), therapy `/cardiovascular`, `/digital-health`, `/neurology-cns`, `/dermatology`.

## Errors

- **404:** none in sitemap crawl (including legacy `/specialist-physician-panel-uae` checks).
- **SSR:** no new blockers flagged; post-deploy run `npm run build && node scripts/verify-ssr-bundle.mjs`.

## Changes shipped this sprint (cron 2026-11-28)

1. **Near-threshold reports** — Turkey + Brazil healthcare market reports: new FAQ blocks, `dateModified` 2026-11-28.
2. **`/ru/services`** — two Russian service FAQs (EAEU registration context, GDPR/field compliance).
3. **`/market-research-gcc`** — three GCC sequencing/triangulation FAQs + localization methodology paragraph.
4. **Therapy BOFU** — expanded `THIN_THERAPY_EXPANDED_FAQS` for cardiovascular, neurology-cns, digital-health, dermatology (LLM-friendly depth + word-count lift).
5. **Reporting** — `reports/weekly-report-2026-11-28.md` regenerated from current GSC export.

## Recommended next actions

1. **Deploy** and re-crawl thin inventory; run `npm run indexnow:priority` on touched paths.
2. **IQVIA CTR cluster** — governed title test on `/iqvia-alternative` (`verify-title-freeze.mjs --allow-title-change=…`) targeting “companies like iqvia” / “iqvia alternatives” at pos 3–4.
3. **US desktop CTR** — body-first tests on USA listicles (not meta-only).
4. **Thin backlog ~300** — locale insights, med-device reports, `/healthcare-market-research-usa`, `/uae-pharmaceutical-market-research`.
5. Upload fresher GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/data/servicesHubContent.ru.ts`
- `src/data/marketResearchCountryContent.ts`
- `src/data/seo/therapyExpandedPageContent.ts`
- `docs/seo/website-audit-2026-11-28.md`
- `reports/weekly-report-2026-11-28.md`
- `reports/weekly-report-2026-11-28.data.json`
- `scripts/data/bio-450-thin-page-audit.json` (production crawl snapshot)
- `docs/seo/bio-450-thin-page-inventory.csv`