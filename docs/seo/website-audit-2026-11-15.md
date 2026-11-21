# Website SEO audit — 2026-11-15

## GSC snapshot (data/gsc/current-week, report `reports/weekly-report-2026-11-15.md`)

| Metric | Value | Target | WoW |
|--------|-------|--------|-----|
| Impressions/day | 4,585 | 15,000 | +137 vs prev |
| Clicks/day | 52 | 450 | +18 |
| CTR | 1.13% | 3.0% | +0.37 pp |
| Avg position | 19.5 | 5.0 | improved vs 25.8 |

**Structural CTR drags:** United States 34.9% of impressions at **0.12% CTR**; desktop 80% of device impressions at 0.74% CTR. Winning cluster remains `pharmaceutical-companies-*` (~2.21% CTR).

**Page-1, sub-1.5% CTR queries (sample):** `companies like iqvia` (pos ~3.1, 64 impr, 0% CTR), `fmcg` / `fmcg companies`, UAE/Dubai pharma navigational queries, IQVIA-comparison intents.

## Production crawl (`scripts/audit-thin-pages-bio450.mjs`)

| Check | Result |
|-------|--------|
| URLs audited | 678 |
| Thin (<2000 SSR words) | **305** |
| HTTP 404 | **0** |
| Fetch errors | **0** |

**Already above threshold (high GSC exposure):** `/gcc-medical-devices-market-report` (3524w), `/japan-medical-devices-market-report` (4147w), `/iqvia-alternative` (4408w).

**Near threshold (resolved in this sprint):** `/turkey-healthcare-market-report`, `/brazil-healthcare-market-report` — FAQ expansion.

**Priority thin backlog (GSC + commercial weight):** `/healthcare-market-research-usa` (was 1800w), `/uk-medical-devices-market-report`, `/egypt-medical-devices-market-report`, therapy hubs under `/healthcare-market-research/therapy/*`, `/market-research-gcc`.

## Errors fixed

- `npm run seo:check` failed on `/de/` and `/es/` trailing-slash redirects; checker updated to canonical `/de` and `/es` paths.

## Shipped this run

1. Turkey + Brazil healthcare reports — extra FAQ (devices/procurement), `dateModified` 2026-11-15.
2. USA healthcare market research — deliverables section, IQVIA-alternative FAQ, `dateModified` 2026-11-15.
3. Egypt + UK medical devices reports — UHI/NHS primary-research sections, `dateModified` 2026-11-15.
4. CTR override — `/iqvia-alternative` title/description aligned to “companies like IQVIA” query.

## LLM / AI citation recommendations

- Keep **GeoLLMAnswerBlock** + FAQ JSON-LD on money pages; syndicated-vs-primary copy on USA hub already names IQVIA/Nielsen split.
- IndexNow after deploy: USA hub, Egypt/UK device reports, Turkey/Brazil healthcare reports, `/iqvia-alternative`.
- Upload fresh GSC export to `data/gsc/current-week/` weekly (stale export reused today).

## Next sprint

1. Batch therapy hubs (cardiovascular, digital-health, neurology) — all ~180–1900w.
2. US listicles body CTR (`/insights/top-healthcare-market-research-companies-usa-2026`).
3. Re-crawl post-deploy; target **<280** thin pages.
4. Title/meta tests for FMCG cluster page-1 queries.

## Deploy checklist

- `scripts/seo-hard-check.mjs`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/HealthcareMarketResearchUsa.tsx`
- `src/pages/EgyptMedicalDevicesMarketReport.tsx`
- `src/pages/UkMedicalDevicesMarketReport.tsx`
- `docs/seo/website-audit-2026-11-15.md`
- `reports/weekly-report-2026-11-15.md`
- `scripts/data/bio-450-thin-page-audit.json` (regenerated snapshot)