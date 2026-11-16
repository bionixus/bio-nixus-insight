# BioNixus website SEO audit — 2026-11-16

## GSC snapshot (week ending 2026-11-16)

| Metric | This week | Target | vs target | vs prior week (11-15) |
|---|---|---|---|---|
| Impressions/day | **4,585** | 15,000 | −10,415 | +137 |
| Clicks/day | **52** | 450 | −398 | +19 |
| CTR | **1.13%** | 3.0% | −1.87 pp | +0.38 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | ▲ +6.3 closer to #1 |

Full narrative: `reports/weekly-report-2026-11-16.md`.

### CTR / LLM appearance priorities

- **United States:** ~35% of impressions at **0.12% CTR** — largest country-level drag; expand US primary-research body copy (not meta-only).
- **Desktop:** 0.74% CTR on ~80% of device impressions; mobile **2.63%** — titles/descriptions must read well in short mobile snippets.
- **IQVIA cluster:** `companies like iqvia` pos **3.1**, **0% CTR** — title/meta iteration on `/iqvia-alternative` (global competitor intent + MENA proof).
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** — protect and cross-link from thin hubs.
- **Device-report drag:** Japan/GCC device reports still dilute mix when included in headline averages.

## Production crawl (BIO-450, 2026-11-16)

| Check | Result |
|---|---|
| URLs audited | **678** |
| Thin pages (&lt;2,000 visible words) | **305** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv` · JSON: `scripts/data/bio-450-thin-page-audit.json`.

**404:** none in sitemap crawl — no new 404 content pages required this run.

## Changes shipped this run (branch `cursor/website-ranking-content-audit-07fd`)

1. **GSC report** — `reports/weekly-report-2026-11-16.md` + data JSON.
2. **CTR** — `/iqvia-alternative` title/meta + static `public/conf/iqvia-alternative.html` for “companies like iqvia” (pos 3.1, 0% CTR).
3. **Thin-page expansion** — USA healthcare landing, USA pharmaceutical landing, GCC market research hub, digital-health and neurology therapy reference copy.
4. **Regenerated crawl** — BIO-450 audit artefacts (678 URLs).

## Recommended next actions

1. Deploy branch; `npm run indexnow:priority` on USA + GCC + iqvia URLs.
2. Thin backlog **305** — therapy hubs, developed-market reports, near-threshold (&lt;50w gap) bulk batch.
3. FMCG directory cluster: page-1 queries under **1.5% CTR** — title tests on top country FMCG spokes.
4. Upload fresh GSC export weekly to `data/gsc/current-week/`.
5. `npm run report:directory-gates` after deploy for matrix indexation gates.

## DEPLOY CHECKLIST

- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `data/seo/title-freeze.json`
- `public/conf/iqvia-alternative.html`
- `src/pages/HealthcareMarketResearchUsa.tsx`
- `src/pages/UsaPharmaceuticalMarketResearch.tsx`
- `src/data/marketResearchCountryContent.ts`
- `src/data/seo/therapyMarketReferenceContent.ts`
- `docs/seo/website-audit-2026-11-16.md`
- `reports/weekly-report-2026-11-16.md`
- `reports/weekly-report-2026-11-16.data.json`
- `scripts/data/bio-450-thin-page-audit.json`
- `docs/seo/bio-450-thin-page-inventory.csv`