# BioNixus website SEO audit — 2026-11-11

## GSC snapshot (week in `data/gsc/current-week/`)

| Metric | This week | Target | vs target |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 |
| Clicks/day | 52 | 450 | −398 |
| CTR | **1.13%** | 3.0% | −1.87 pp |
| Avg. position | **19.5** | 5.0 | +14.5 |

Week-over-week: impressions +137/day, clicks +18/day, CTR +0.37 pp, position improved 6.3 ranks vs last week.

### CTR diagnostics

- **United States:** 34.9% of impressions at **0.12% CTR** — largest single-country drag.
- **Mobile:** 2.63% CTR vs desktop **0.74%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR**.
- **Deep SERP drag:** pages at position >40 with ≥200 impressions = **0.16% CTR** (27,726 impr).
- **High-impression underperformers:** `/china-medical-devices-market-report` (9,603 impr, 0.11% CTR), `/gcc-market-access-guide` (4,164 impr, 0.29% CTR), `/bionixus-market-research-middle-east` (2,180 impr, 0.60% CTR @ pos 50).

Full narrative: `reports/weekly-report-2026-11-11.md`.

## Production crawl (BIO-450, 2026-11-11)

| Check | Result |
|---|---|
| URLs audited | 678 |
| Thin pages (<2,000 visible words) | **305** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv`.

## Sitewide technical audit (phase 2)

| Result | Count |
|---|---|
| PASS | 1,291 |
| MINOR | 30 |
| MAJOR | **4** |

**MAJOR (pre-deploy on production):** missing SSR `<h1>` on localized blog URLs:

- `/de/blog/amnog-frueher-nutzen-marktzugang-2026`
- `/de/blog/deutsche-pharmaunternehmen-2026-pipeline-updates`
- `/fr/blog/etudes-marche-pharmaceutique-france-2026`
- `/fr/blog/evaluation-economique-has-france-2026`

Root cause: `fetchRouteData` did not prefetch Sanity post bodies for `/{de,fr,es,pt,ru,zh}/blog/:slug` routes (generic shell only).

## Changes shipped this sprint (branch `cursor/search-ranking-and-content-4921`)

1. **`fetchRouteData`** — SSR prefetch for `de|fr|es|pt|ru|zh` blog article paths (fixes MAJOR H1/body gap for crawlers and LLMs).
2. **CTR title/meta iteration** — `/iqvia-alternative`, `/pharmaceutical-companies-dubai`, `/china-medical-devices-market-report`, `/gcc-market-access-guide`, `/bionixus-market-research-middle-east`, `/healthcare-market-research-usa` (+ mirror `public/conf/iqvia-alternative.html`).
3. **Thin / near-threshold depth** — Turkey healthcare report executive section; USA healthcare syndicated-vs-primary copy; Middle East hub LLM paragraph; Spain/Switzerland/Denmark MedTech decision copy.
4. **Regenerated** — `reports/weekly-report-2026-11-11.md`, BIO-450 crawl JSON, sitewide phase-2 audit.

## Recommended next actions

1. Deploy and run `npm run indexnow:priority`.
2. Re-crawl localized DE/FR blog URLs post-deploy; expect 4 MAJOR → PASS.
3. Thin backlog **~305** — prioritize service scope pages <1,200 words and healthcare hub country pages 1,600–1,950w.
4. US CTR: expand body copy on top USA listicle pages (meta-only changes insufficient at 0.12% national CTR).
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/fetchRouteData.ts`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `public/conf/iqvia-alternative.html`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BionixusMarketResearchMiddleEast.tsx`
- `src/pages/HealthcareMarketResearchUsa.tsx`
- `src/data/developedMarketMedtechPages.ts`
- `docs/seo/website-audit-2026-11-11.md`
- `reports/weekly-report-2026-11-11.md`
- `scripts/data/bio-450-thin-page-audit.json`
- `docs/seo/sitewide-audit-phase2.md`
- `scripts/data/sitewide-audit-phase2.json`
