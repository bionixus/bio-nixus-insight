# BioNixus website SEO audit — 2026-10-09

## GSC snapshot (week in `data/gsc/current-week/`)

| Metric | This week | Target | vs target | Last week | vs last week |
|---|---|---|---|---|---|
| Impressions/day | **4,585** | 15,000 | −10,415 | 4,448 | +137 |
| Clicks/day | **52** | 450 | −398 | 33 | +18 |
| CTR | **1.13%** | 3.0% | −1.87 pp | 0.75% | +0.37 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | 25.8 | **+6.3 (improved)** |

Full narrative: `reports/weekly-report-2026-10-09.md`.

### CTR diagnostics

- **United States:** 34.9% of impressions at **0.12% CTR** — still the largest structural drag.
- **Desktop:** 0.74% CTR on ~80% of device impressions; **mobile 2.63%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (27,999 impr).
- **Insights listicles:** 0.84% CTR — room for body-copy + FAQ depth on near-threshold URLs.
- **Money queries on page 1 with 0% CTR:** `companies like iqvia` (pos 3.1), `iqvia alternatives` (pos 4.0), `which firms specialize in healthcare technology market research?` (pos 3.8) — landing `/iqvia-alternative` (4,145w, passes thin threshold); continue US desktop snippet tests.

## Production crawl (BIO-448, 2026-10-09)

| Check | Result |
|---|---|
| URLs audited | 937 |
| Thin pages (&lt;2,000 visible words) | **479** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-448-thin-page-inventory.csv`.

### High-impression thin URLs (priority backlog)

| Impressions (7d) | Words | Path |
|---:|---:|---|
| 1,554 | 1,966 | `/brazil-healthcare-market-report` |
| 1,143 | 1,694 | `/india-medical-devices-market-report` |
| 956 | 1,647 | `/healthcare-market-statistics` |
| 614 | 1,681 | `/singapore-medical-devices-market-report` |
| 547 | 688 | `/ar/pharmaceutical-companies-egypt` |

## Changes shipped this sprint (branch `cursor/website-content-and-ranking-3fde`)

1. **`/brazil-healthcare-market-report`** — therapy spend table, hospital procurement network, BioNixus capabilities, GeoLLM answer block; `dateModified` 2026-10-09.
2. **`/india-medical-devices-market-report`** — CDSCO device registration steps, hospital/key manufacturer intelligence, GeoLLM block; `dateModified` 2026-10-09.
3. **`/insights/top-market-research-companies-qatar-2026`** — landscape + FAQ depth for MoPH/HMC intent; `dateModified` 2026-10-09.
4. **`/about`** — expanded global presence copy for IQVIA-alternative positioning (LLM + US CTR body signal).
5. **Weekly report** — `reports/weekly-report-2026-10-09.md` generated from current GSC export.

## Recommended next actions

1. Deploy; run `npm run indexnow:priority` for Brazil, India devices, Qatar listicle, About.
2. Thin backlog **479** — prioritise `/ar/pharmaceutical-companies-egypt`, `/healthcare-market-statistics`, Arabic blog stubs.
3. US CTR: test desktop title/meta on FMCG hub pages (`fmcg` @ pos 6.4, 0.91% CTR).
4. Upload fresh GSC export weekly; shift `previous-week/` ← `current-week/` before import.

## DEPLOY CHECKLIST

- `src/data/marketIntelligence/americas.ts`
- `src/data/marketIntelligence/asiaPacific.ts`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/IndiaMedicalDevicesMarketReport.tsx`
- `src/data/topCompanies/gcc/qatar.general.en.ts`
- `src/pages/about/aboutPageCopy.en.ts`
- `docs/seo/website-audit-2026-10-09.md`
- `reports/weekly-report-2026-10-09.md`
- `reports/weekly-report-2026-10-09.data.json`
- `docs/seo/bio-448-thin-page-inventory.csv` (regenerated)
- `docs/seo/bio-448-thin-page-inventory.json` (regenerated)
