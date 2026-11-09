# BioNixus website SEO audit — 2026-11-09

## GSC snapshot (`data/gsc/current-week/`)

| Metric | This week | Target | vs target | vs prior week |
|---|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 | +137 |
| Clicks/day | 52 | 450 | −398 | +19 |
| CTR | **1.13%** | 3.0% | −1.87 pp | +0.38 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | ▲ +6.3 |

Full narrative: `reports/weekly-report-2026-11-09.md`.

### CTR diagnostics (structural)

- **United States:** 34.9% of impressions at **0.12% CTR** — largest single-country drag.
- **Ex-US:** 1.66% CTR on non-US traffic.
- **Mobile:** 2.63% CTR vs **desktop 0.74%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR**.
- **Directory matrix:** 1.91% CTR (55k impr/week).
- **Page-1, &lt;1.5% CTR:** 100+ queries flagged — FMCG hubs, Dubai pharma directories, **“companies like iqvia”** (pos ~3.1, 0% CTR), obesity-research LLM queries.

## Production crawl (BIO-450, 2026-11-09)

| Check | Result |
|---|---|
| URLs audited | 678 |
| Thin pages (&lt;2,000 visible words) | **305** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv` (regenerated).

Notable: `/iqvia-alternative-saudi-arabia` now **2,075w** (above threshold). Near-threshold country reports: Turkey (~1,973w), Brazil (~1,970w) — expanded this sprint.

## Errors

- **404:** none in sitemap crawl.
- **SSR:** no new MAJOR regressions in thin-page crawl (all 200).

## Changes shipped this sprint

1. **`/iqvia-alternative`** — CTR title/meta iteration for “companies like IQVIA” / “IQVIA alternatives” page-1 queries; static HTML + `ctr-seo-overrides` + freeze registry updated; `dateModified` 2026-11-09.
2. **`/healthcare-market-research-usa`** — IDN/PBM account research + LLM citation block; `dateModified` 2026-11-09 (targets US 0.12% CTR drag).
3. **`/pharmaceutical-market-research-usa`** — buyer shortlist / firm-comparison section; `dateModified` 2026-11-09.
4. **`/turkey-healthcare-market-report`** — diabetes/metabolic 2026 section (Turkey diabetes queries); schema `dateModified` 2026-11-09.
5. **`/brazil-healthcare-market-report`** — ANVISA/CMED regulatory science section (Brazil news/regulation queries); schema `dateModified` 2026-11-09.
6. **Reports** — `reports/weekly-report-2026-11-09.md` generated; thin inventory refreshed.

## Recommended next actions

1. Deploy; `npm run indexnow:priority`; re-crawl thin count for USA/Brazil/Turkey pages.
2. Thin backlog **~305** — prioritize service landings &lt;1,200w and directory spokes with GSC impressions but &lt;10/day (waves 1–5 indexation gates still failing).
3. FMCG page-1 CTR tests on `/fmcg-companies*` titles (549 impr “fmcg” @ pos 6.4).
4. Upload fresh GSC export weekly; run `npm run leads:export` for directory lead gates.
5. UAE/Dubai pharma directory meta for “pharmaceutical companies in dubai” zero-CTR cluster.

## DEPLOY CHECKLIST

- `src/pages/HealthcareMarketResearchUsa.tsx`
- `src/pages/UsaPharmaceuticalMarketResearch.tsx`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `public/conf/iqvia-alternative.html`
- `data/seo/title-freeze.json`
- `src/lib/seo/__tests__/gsc-oct-2026-buyer-ctr.test.ts`
- `scripts/generate-sitemap.mjs`
- `docs/seo/bio-450-thin-page-inventory.csv`
- `scripts/data/bio-450-thin-page-audit.json`
- `docs/seo/website-audit-2026-11-09.md`
- `reports/weekly-report-2026-11-09.md`
