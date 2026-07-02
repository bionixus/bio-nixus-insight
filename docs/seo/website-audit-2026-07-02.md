# BioNixus Website SEO Audit — 2026-07-02

**Branch:** `cursor/website-content-and-ranking-c278`  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs`  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/`

## Executive summary

| Metric | Value | vs 2026-07-01 |
|--------|-------|----------------|
| Live service/landing URLs | 362 | +1 |
| Thin pages (&lt;2,000 words) | 227 | +1 |
| 404 errors (live crawl) | 0 | unchanged |
| Fetch errors | 1 (`/quantitative-healthcare-market-research` transient) | unchanged |
| Healthcare MR cluster thin | 17 | unchanged |

**Critical finding:** Two high-impression URLs rendered only ~17 words in production SSR because `React.lazy()` + `Suspense` prevented full HTML hydration on first paint: `/gcc-medical-devices-market-report` (6,126 GSC impressions, 0.1% CTR) and `/bionixus-market-research-middle-east` (2,269 impressions, 0.18% CTR). **Fixed** by eager-importing these routes in `src/routes.tsx`.

## GSC impressions & CTR highlights (Jun 2026 export, 3-month)

### Top pages by impressions (weak CTR = priority)

| Page | Clicks | Impressions | CTR | Position | Action |
|------|--------|-------------|-----|----------|--------|
| `/blog/healthcare-overview-egypt-market-2026` | 86 | 25,073 | 0.34% | 5.5 | Cairo query cluster — Egypt BOFU expanded |
| `/gcc-medical-devices-market-report` | 6 | 6,126 | 0.10% | 53.2 | **SSR fix** + IVD/prefilled syringes section |
| `/healthcare-market-research` | 11 | 4,045 | 0.27% | 31.6 | Already ≥2,000w — meta refreshed prior sprint |
| `/gcc-market-access-guide` | 14 | 3,058 | 0.46% | 16.5 | **+biosimilars/HTA section** |
| `/bionixus-market-research-middle-east` | 4 | 2,269 | 0.18% | 34.4 | **SSR fix** |
| `/pharmaceutical-market-research-dubai` | — | ~1.5k cluster | ~0% queries | ~20 | **+Dubai agency section** (static HTML) |

### Zero-click high-impression queries

| Query | Impressions | CTR | Target page |
|-------|-------------|-----|-------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | 0% | Egypt BOFU + Cairo fieldwork section |
| `healthcare market research companies in dubai` | 241 | 0% | `/pharmaceutical-market-research-dubai` |
| `healthcare market research company in dubai` | 202 | 0% | Same + `/uae-pharmaceutical-market-research` |
| `healthcare market research` | 200 | 1.0% | Hub (pos 38.9) |

## Coverage issues (GSC Coverage export)

| Issue | Count | Status |
|-------|-------|--------|
| 404 Not found | 15 | Historical — live crawl shows 0 |
| Crawled – not indexed | 50 | IndexNow batch queued |
| Page with redirect | 31 | Expected (locale/legacy) |
| Blocked by robots.txt | 33 | Admin/utility — intentional |

## Changes deployed this sprint

1. **SSR fix:** `BionixusMarketResearchMiddleEast`, `GccMedicalDevicesMarketReport` — removed lazy loading for full initial HTML.
2. **Content expansion:**
   - `/gcc-market-access-guide` — biosimilars & HTA evidence section (~280 words)
   - `/gcc-medical-devices-market-report` — IVD & prefilled syringes section (~220 words)
   - `/uae-pharmaceutical-market-research` — Dubai emirate execution depth (~200 words)
   - `/egypt-pharmaceutical-market-research` — Cairo/UHI fieldwork section (~200 words)
   - `public/conf/pharmaceutical-market-research-dubai.html` — healthcare MR agencies in Dubai section (~180 words)
   - `public/conf/kantar-health-alternative-gcc.html` — brand tracking FAQ (+80 words, crosses 2,000w)
3. **Meta CTR refresh:** UAE and Egypt pharma BOFU meta descriptions.
4. **IndexNow:** `scripts/gsc-priority-recrawl.txt` Tier 0 URLs added.

## Remaining thin-page backlog (next sprint)

227 pages below 2,000 words. Next batch (near-threshold + GSC value):

- `/kantar-health-alternative-gcc` — verify post-expansion ≥2,000w
- `/pharmaceutical-market-research-dubai` — verify static HTML ≥2,000w post-deploy
- `/gcc-pharmaceutical-market-research` (1,656w)
- `/healthcare-market-research-agency-gcc` (thin)
- `/quantitative-healthcare-market-research` — investigate transient fetch failure

## LLM / chat appearance

GeoLLMAnswerBlock retained on hub, country, BOFU, and report pages. Static `conf/*.html` articles continue to supply machine-retrievable `<article>` blocks for Kantar/IQVIA/Dubai comparisons independent of React bundle load order.

## Verification commands

```bash
node scripts/audit-thin-pages-bio450.mjs
npm run build
npm run indexnow:priority   # after production deploy
```
