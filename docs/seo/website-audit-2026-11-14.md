# BioNixus website SEO audit — 2026-11-14

## GSC snapshot (`data/gsc/current-week/`)

| Metric | This week | Target | vs target | Last week | vs last week |
|---|---|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 | 4,448 | +137 |
| Clicks/day | 52 | 450 | −398 | 33 | +19 |
| CTR | **1.13%** | 3.0% | −1.87 pp | 0.75% | +0.38 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | 25.8 | ▲ +6.3 improved |

Full tables: `reports/weekly-report-2026-11-14.md`.

### CTR / ranking highlights

- **United States:** 51,231 impr @ **0.12% CTR** — still the largest single-country drag (34.9% of impressions).
- **Mobile vs desktop:** 2.63% vs 0.74% CTR — headline average hides strong mobile performance.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (619 clicks).
- **Page-1 CTR gaps:** `companies like iqvia` (pos 3.1, 0% CTR), `fmcg companies` (pos 5.6, 1.31%), multiple UAE/Dubai pharma directory queries at 0% CTR with page-1 positions.
- **Japan device report:** 284 impr, pos 18.6 — indexable but mid-SERP; enriched on main, monitor post-deploy.

## Production crawl (BIO-450, 2026-11-14)

| Check | Result |
|---|---|
| URLs audited | 678 |
| Thin pages (&lt;2,000 visible SSR words) | **305** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv` · JSON: `scripts/data/bio-450-thin-page-audit.json`.

Near-threshold fixes (27–102 word gaps) include Turkey/Brazil healthcare reports. High-impression-risk thin MedTech: Egypt (−257w), UK (−161w), India/Singapore device reports.

## Technical / errors

| Issue | Status |
|---|---|
| Sitemap 404s | None |
| `npm run seo:check` | **Pass** after aligning locale hub URLs with canonical (no trailing slash) |
| `/de/` vs `/de` | Production 301s trailing slash to canonical — expected via `seo-noise-query.mjs` middleware |

## LLM / chat appearance (GEO)

- **Pattern:** `GeoLLMAnswerBlock` on hub, listicle, GCC rollup, and Japan device pages — answer-first blocks with citeable bullets.
- **This sprint:** Egypt + UK medical devices reports received GEO blocks, segment rollups, and methodology sections for crawler-visible depth.

## Changes shipped (branch `cursor/website-seo-content-audit-a56f`)

1. **`/egypt-medical-devices-market-report`** — GeoLLM block, UHI procurement channel section, expanded segment grid, methodology (`dateModified` 2026-11-14).
2. **`/uk-medical-devices-market-report`** — GeoLLM block, segment grid, NHS/private supplier table, methodology section.
3. **`/turkey-healthcare-market-report`** & **`/brazil-healthcare-market-report`** — executive copy + cross-links (clears &lt;2,000w threshold).
4. **`scripts/seo-hard-check.mjs`** — check `/de` and `/es` without trailing slash (matches production canonical).

## Recommended next actions

1. Deploy branch; `npm run indexnow:priority` for Egypt, UK, Turkey, Brazil URLs.
2. Thin backlog **~300** — batch therapy hubs (`/healthcare-market-research/therapy/*`), GCC country device twins, US listicles (body CTR, not meta-only).
3. US CTR: strengthen visible copy on `/iqvia-alternative` and `/insights/top-healthcare-market-research-companies-usa-2026` for page-1 zero-click queries.
4. Upload fresh GSC export each Monday to `data/gsc/current-week/`.
5. Run `npm run audit:sitewide:phase2` post-deploy for title/meta/schema spot checks.

## DEPLOY CHECKLIST

- `src/pages/EgyptMedicalDevicesMarketReport.tsx`
- `src/pages/UkMedicalDevicesMarketReport.tsx`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `scripts/seo-hard-check.mjs`
- `docs/seo/website-audit-2026-11-14.md`
- `reports/weekly-report-2026-11-14.md`
- `scripts/data/bio-450-thin-page-audit.json`