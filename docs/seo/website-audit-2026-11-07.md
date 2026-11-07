# BioNixus website SEO audit — 2026-11-07

## GSC snapshot (32-day window in `data/gsc/current-week/`)

| Metric | This week | Target | vs target |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 |
| Clicks/day | 51.6 | 450 | −398 |
| CTR | **1.13%** | 3.0% | −1.87 pp |
| Avg. position | **19.5** | 5.0 | +14.5 |

### CTR diagnostics (from weekly report)

- **United States:** 34.9% of impressions at **0.12% CTR** — still the largest structural drag.
- **Desktop:** 0.74% CTR on ~80% of device impressions; **mobile 2.63%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR**.
- **Device reports:** GCC/Japan pages now thick on production; Japan pos ~18.6 with thin GSC volume this window.

Full narrative: `reports/weekly-report-2026-11-07.md`.

## Production crawl (BIO-449 thin audit, 2026-11-07)

| Check | Result |
|---|---|
| URLs audited | 715 |
| Thin pages (&lt;2,000 visible words) | **331** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-449-thin-page-inventory.csv` (regenerated).

### P0 technical — localized blog SSR

DE/FR/ES/PT/RU/ZH `/blog/:slug` routes were resolving as `pageType: generic` in `fetchRouteData`, yielding ~150-word SSR shells (no article body for Google/LLM crawlers). **Fixed:** unified localized blog matcher delegates to `fetchBlogPostRouteData` for all locale prefixes.

### Near-threshold content upgrades (this sprint)

- `/healthcare-market-research-netherlands` — primary vs syndicated + IQVIA-alternative depth
- `/healthcare-market-research-italy` — same pattern (AIFA/SSR context)
- `/turkey-healthcare-market-report` — GeoLLM block + FAQ expansion, `dateModified` 2026-11-07
- `/brazil-healthcare-market-report` — GeoLLM block + FAQ expansion, `dateModified` 2026-11-07

## Errors

- **404:** none in sitemap crawl.
- **Thin localized blogs (pre-fix):** `/de/blog/*`, `/fr/blog/*` ~149w SSR; AR encoded-slug posts with missing Sanity bodies remain thin (content backlog).

## Recommended next actions

1. Deploy; `npm run indexnow:priority`; re-crawl DE/FR blogs — expect ≥2k words where Sanity/hardcoded body exists.
2. Batch remaining **~323** thin standalone landings (service scope pages &lt;1,000w highest priority).
3. US CTR: body copy on USA listicles and FMCG directory pages ranking page 1 with &lt;1.5% CTR.
4. Upload fresh GSC export to `data/gsc/current-week/` every Monday.

## DEPLOY CHECKLIST

- `src/data/fetchRouteData.ts`
- `src/pages/HealthcareMarketResearchNetherlands.tsx`
- `src/pages/HealthcareMarketResearchItaly.tsx`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `scripts/generate-sitemap.mjs`
- `public/sitemap.xml` (regenerated)
- `docs/seo/website-audit-2026-11-07.md`
- `docs/seo/bio-449-thin-page-inventory.csv`
- `scripts/data/bio-449-thin-page-audit.json`
- `reports/weekly-report-2026-11-07.md`
