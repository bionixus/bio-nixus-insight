# GSC monitor: "top market research companies in saudi arabia"

**Canonical money URL:** `https://www.bionixus.com/insights/top-market-research-companies-saudi-arabia-2026`  
**Saudi hub:** `https://www.bionixus.com/healthcare-market-research/saudi-arabia`  
**Healthcare sibling (watch for cannibalization):** `https://www.bionixus.com/insights/top-healthcare-market-research-companies-saudi-arabia-2026`

## Baseline (week of 2026-08-15)

| Metric | Query | Money page | Healthcare sibling |
|--------|-------|------------|-------------------|
| Position | 10.45 (~page 3) | 8.8 | 12.63 |
| CTR | — | 2.82% | — |
| Impressions | — | 71 | 63 |

**Prior week (reference):** query pos 4.56; money page pos 6.94, CTR 5.88%, 68 impr.

## Success targets (4 weeks post-deploy)

| Metric | Target |
|--------|--------|
| Query position | ≤ 5 |
| Money page CTR | ≥ 4% |
| Healthcare sibling | Stable impressions; should **not** rank for exact head term |

## Post-deploy checklist (run once after ship)

1. Deploy to production (Vercel).
2. **Google Search Console → URL Inspection** → Request indexing for:
   - `/insights/top-market-research-companies-saudi-arabia-2026`
   - `/healthcare-market-research/saudi-arabia`
3. Confirm live title: `Top Market Research Companies in Saudi Arabia (2026)` (view-source `<title>`).
4. Confirm `dateModified` in Article JSON-LD is `2026-08-22`.
5. Confirm Saudi hub hero links to money listicle within first 200 words.

## Weekly log (12 weeks)

| Week ending | Query pos | Money pos | Money CTR | Money impr | Healthcare pos | Healthcare impr | Notes |
|-------------|-----------|-----------|-----------|------------|----------------|-----------------|-------|
| 2026-08-22 | | | | | | | Deploy: CTR title/meta, hub links, cluster demotion |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

## GSC filters to use

- **Performance → Search results**
  - Query contains: `top market research companies in saudi arabia`
  - Page filter: money URL only (compare vs healthcare sibling separately)
- Watch for impression share shifting from healthcare sibling back to money URL.

## Changes shipped (2026-08-22)

- Exact-query SERP title/meta via CTR overrides
- `dateModified` bump on money listicle
- Saudi hub body link + `HealthcareNavCard` to money listicle
- Healthcare / Riyadh / GCC / industry-matrix siblings link up to general Saudi listicle above the fold
- Removed stale `ksaGeneralEn` registry entry (301 + dedicated page own canonical URL)
