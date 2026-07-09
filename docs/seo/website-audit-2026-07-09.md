# BioNixus Website SEO Audit — 2026-07-09

**Automation:** Daily cron (`cursor/website-content-and-ranking-b83d`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-09T04:02Z  
**Local SSR verify:** post-build `render()` word counts @ 2026-07-09T04:16Z

---

## Executive summary

| Metric | Value | Δ vs 2026-07-03 |
|--------|------:|-----------------|
| Live pages audited | **383** | +13 |
| Thin pages (<2,000 words) | **184** | −29 |
| 404 errors | **0** | unchanged |
| Fetch errors | **1** | `/quantitative-healthcare-market-research` redirect loop — **fixed in code** (deploy pending) |

**Root cause (fetch error):** `resolveLegacyCountryIndustryMarketResearchRedirect` matched `/quantitative-healthcare-market-research` as `{country}-healthcare-market-research` and 301'd to `/healthcare-market-research/quantitative`, while `vercel.json` 301'd back — infinite loop.  
**Fix:** `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs`.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Action this run |
|--------|------------:|----:|---------:|-----------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Cairo block + GeoLLM on `/egypt-healthcare-market-report` |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | Already expanded (SSR ~2,458w) — monitor |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | CTR meta refresh + NUPCO FAQ → **~2,159w** SSR |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | SFDA EES section + meta refresh → **~2,071w** SSR |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | Redirect loop fix → **~3,205w** SSR |
| `/healthcare-market-research/saudi-arabia` | 1,851 | 0.11% | 45.6 | Backlog — global country MR pages |

### MENA money geos (3-month)

| Country | Clicks | Impressions | CTR |
|---------|-------:|------------:|----:|
| Egypt | 144 | 3,464 | **4.16%** |
| UAE | 113 | 6,646 | 1.70% |
| Saudi Arabia | 47 | 8,639 | **0.54%** |
| Kuwait | 55 | 2,671 | 2.06% |

---

## Production crawl — thin pages & errors

### 404 inventory

**0 URLs** in sitemap scope.

### Fetch error (fixed pre-deploy)

| Path | Issue | Fix |
|------|-------|-----|
| `/quantitative-healthcare-market-research` | Redirect loop (fetch failed) | `STANDALONE_LEGACY_EXCLUSIONS` |

### Near-threshold pages expanded (GSC priority)

| Path | Words (prod pre) | Words (local SSR post) | Action |
|------|----------------:|------------------------:|--------|
| `/egypt-healthcare-market-report` | 1,995 | **~2,589** | Cairo hospitals block + GeoLLMAnswerBlock |
| `/gcc-pharmaceutical-market-research` | 1,970 | **~2,159** | CTR title/meta + NUPCO tender FAQ |
| `/gcc-market-access-guide` | 1,908 | **~2,071** | SFDA EES section + CTR meta |
| `/healthcare-market-research-italy` | 1,947 | **~2,140** | AIFA CTS innovation section + FAQ |
| `/quantitative-healthcare-market-research` | 0 (loop) | **~3,205** | Redirect loop fix |

### Remaining thin backlog

**184** service/landing URLs still below 2,000 words in production (pre-deploy). Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` — prioritize global country MR pages and near-threshold gaps (<100 words).

---

## LLM / chat appearance (GEO)

- `GeoLLMAnswerBlock` added on `/egypt-healthcare-market-report` (Cairo hospitals query cluster)
- Retained on GCC pharma, medtech, and market access pages
- Cairo hospital clusters + FAQ (`details`/`summary`) synced from blog block for retrieval consistency
- `public/llms.txt` already cites Egypt blog for Cairo query — report page now reinforces entity

---

## Post-deploy checklist

1. Verify `/quantitative-healthcare-market-research` returns **200** (no redirect loop)
2. `npm run indexnow:priority` — ping GSC priority URLs
3. Re-run `node scripts/audit-thin-pages-bio450.mjs` after deploy propagates
4. GSC URL Inspection on expanded pages above
5. Monitor Cairo query CTR on blog + Egypt report (7-day window)

---

## Files changed (this run)

- `lib/country-industry-redirects.mjs` — `STANDALONE_LEGACY_EXCLUSIONS` for quantitative guide
- `src/pages/EgyptHealthcareMarketReport.tsx` — Cairo hospitals + GeoLLM block
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — CTR meta + NUPCO FAQ
- `src/pages/GccMarketAccessGuide.tsx` — SFDA EES section + CTR meta
- `src/pages/HealthcareMarketResearchItaly.tsx` — AIFA CTS section + FAQ
