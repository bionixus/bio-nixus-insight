# Website SEO / GEO Audit — 2026-07-13

**Branch:** `cursor/website-content-and-ranking-dca8`  
**Production crawl:** 2026-07-13T04:02Z (`scripts/audit-thin-pages-bio450.mjs`)

## Executive summary

| Metric | Value | Prior (2026-07-03) | Change |
|--------|-------|---------------------|--------|
| URLs audited | 384 | 371 | +13 |
| Live pages | 383 | 370 | +13 |
| Thin pages (&lt;2,000 words) | **186** | 213 | **−27** |
| Sitemap 404s | **0** | 0 | — |
| Fetch errors | **1** | 1 | redirect loop (fixed in this sprint) |

## Critical error fixed

### `/quantitative-healthcare-market-research` redirect loop

- **Symptom:** Production returned infinite 301 between `/quantitative-healthcare-market-research` and `/healthcare-market-research/quantitative` (1,665 GSC impressions, 0.18% CTR).
- **Root cause:** Legacy BOFU resolver in `lib/country-industry-redirects.mjs` matched `quantitative-healthcare-market-research` as `{country}-healthcare-market-research` and redirected to the hub path; `vercel.json` redirected back to the standalone URL.
- **Fix:** Added `STANDALONE_LEGACY_EXCLUSIONS` for `/quantitative-healthcare-market-research`. Regression test: `scripts/test-country-industry-redirects.mjs`.

## GSC impressions & CTR highlights (export 2026-06-22)

| Query / URL | Impressions | CTR | Position | Action this sprint |
|-------------|-------------|-----|----------|-------------------|
| cairo hospitals healthcare 2023-2026 | 16,826 | 0% | 4.9 | Cairo block + GeoLLM on `/egypt-healthcare-market-report` |
| `/gcc-medical-devices-market-report` | 6,126 | 0.1% | 53.2 | Title/meta CTR refresh (SFDA, hospital procurement) |
| `/gcc-pharmaceutical-market-research` | 3,592 | 0% | — | Title refresh + NUPCO tender FAQ |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | SFDA EES FAQ + JSON-LD |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | Redirect loop fix |
| `/healthcare-market-research` | 4,045 | 0.27% | 31.6 | Monitor post-deploy |

**Top CTR performers (reference):** branded `bionixus` (47% CTR), Oman/Kuwait pharma company queries (2–8% CTR).

## 404 inventory

All nine paths previously flagged in BIO-450 brief now return **HTTP 200** on production (verified 2026-07-13):

- `/brand-tracking-pharma-gcc`, `/commercial-effectiveness-pharma-middle-east`, `/healthcare-fieldwork-gcc`, `/patient-adherence-research-middle-east`, `/patient-journey-research-gcc`, `/respiratory-market-access-gcc`, `/specialist-physician-panel-uae`, `/uae-pricing-reimbursement-strategy`, `/msl-insight-research-middle-east`

## Thin-page expansion (this sprint)

Near-threshold English pages expanded above 2,000 words or with GEO/CTR blocks:

| Path | Words (pre) | Gap | Change |
|------|-------------|-----|--------|
| `/egypt-healthcare-market-report` | 1,995 | 5 | GeoLLM + Cairo hospitals 2023–2026 section |
| `/gcc-pharmaceutical-market-research` | 1,970 | 30 | NUPCO FAQ + title CTR |
| `/healthcare-market-research-italy` | 1,947 | 53 | AIFA biosimilar FAQ |
| `/healthcare-market-research-new-zealand` | 1,930 | 70 | PHARMAC Factors FAQ |
| `/gcc-market-access-guide` | 1,908 | 92 | SFDA EES FAQ + schema |

**Remaining thin pages:** 186 (down from 213). Next near-threshold queue: `/brazil-pharmaceutical-market-research` (71w), `/bionixus-vs-iqvia-mena` (86w), `/china-healthcare-market-report` (93w).

## LLM / chat appearance

- `GeoLLMAnswerBlock` added to `/egypt-healthcare-market-report` (Cairo + UHI + EDA answer-first).
- Existing GeoLLM on `/gcc-pharmaceutical-market-research` and `/gcc-medical-devices-market-report` retained.
- FAQ blocks use `<details>/<summary>` for crawlable Q&A (GCC access SFDA EES, NUPCO, PHARMAC, AIFA).

## Post-deploy checklist

1. Verify `curl -sL https://www.bionixus.com/quantitative-healthcare-market-research` returns **200** (not 301 loop).
2. `npm run indexnow:priority` — list updated with quantitative + gcc-medtech + egypt report.
3. Re-run `node scripts/audit-thin-pages-bio450.mjs` after deploy.
4. Monitor Cairo query CTR (7-day GSC window).
