# BioNixus Website SEO Audit — 2026-07-11

**Automation:** Daily cron (`cursor/website-content-and-ranking-91f0`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-11T04:03Z

---

## Executive summary

| Metric | Value | Δ vs 2026-07-03 |
|--------|------:|-----------------|
| Live pages audited | **383** | +13 |
| Thin pages (<2,000 words) | **183** | −30 |
| 404 errors (sitemap scope) | **0** | unchanged |
| Fetch errors | **1** | redirect loop on `/quantitative-healthcare-market-research` — **fixed in code** |

**Root cause (fetch error):** `/quantitative-healthcare-market-research` matched legacy `{country}-{industry}-market-research` regex (`quantitative` + `healthcare`) and redirected to `/healthcare-market-research/quantitative`, which `vercel.json` redirects back — infinite loop.  
**Fix:** `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs`.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Action this run |
|--------|------------:|----:|---------:|-----------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Cairo hospital section + FAQ on `/egypt-healthcare-market-report` |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | SSR eager imports deployed — monitor CTR |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | Meta refresh + NUPCO/biosimilar FAQ → **~2,099w** SSR |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | SFDA EES FAQ + HTA copy → **~2,067w** SSR |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | Redirect loop fix → page serves **~3,205w** SSR |
| `/healthcare-market-research` | 4,045 | 0.27% | 31.6 | Hub already deep — monitor position |

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

**0 URLs** in sitemap scope (unchanged).

### Fetch error (fixed)

| Path | Pre (prod) | Post (local SSR) |
|------|------------|------------------:|
| `/quantitative-healthcare-market-research` | fetch failed (redirect loop) | **~3,205w** |

### Near-threshold pages expanded this run

| Path | Words (pre) | Words (post SSR) | Action |
|------|------------:|-----------------:|--------|
| `/egypt-healthcare-market-report` | 1,995 | **~2,283** | Cairo hospitals 2023–2026 section + FAQ |
| `/gcc-pharmaceutical-market-research` | 1,970 | **~2,099** | NUPCO/biosimilar FAQ + meta refresh |
| `/gcc-market-access-guide` | 1,908 | **~2,067** | SFDA EES FAQ + HTA paragraph |
| `/healthcare-market-research-italy` | 1,947 | **~2,083** | AIFA CTS FAQ + IRCCS access paragraph |

### Remaining thin backlog

**183** service/landing URLs still below 2,000 words. Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` — prioritize global country MR pages and gaps <100 words.

---

## LLM / chat appearance (GEO)

- `GeoLLMAnswerBlock` retained on GCC pharma, medtech, market access, and Italy country pages
- Cairo hospital clusters synced from `egyptHealthcare2026CairoSeo.ts` on Egypt report (matches blog block for query alignment)
- FAQ schema updated on expanded pages via `<details>/<summary>` and `FAQPage` JSON-LD
- `/quantitative-healthcare-market-research` now crawlable with full executive summary in initial HTML

---

## Post-deploy checklist

1. `npm run indexnow:priority` — ping GSC priority URLs
2. Re-run `node scripts/audit-thin-pages-bio450.mjs` after deploy propagates
3. GSC URL Inspection on `/quantitative-healthcare-market-research` (confirm 200, no redirect loop)
4. Monitor Cairo query CTR on `/egypt-healthcare-market-report` and blog (7-day window)

---

## Files changed (this run)

- `lib/country-industry-redirects.mjs` — `STANDALONE_LEGACY_EXCLUSIONS` for quantitative/qualitative guides
- `src/pages/EgyptHealthcareMarketReport.tsx` — Cairo hospitals section + FAQ
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — NUPCO/biosimilar FAQ + meta refresh
- `src/pages/GccMarketAccessGuide.tsx` — SFDA EES FAQ + HTA copy
- `src/pages/HealthcareMarketResearchItaly.tsx` — AIFA CTS FAQ + IRCCS paragraph
