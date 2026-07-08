# BioNixus Website SEO Audit — 2026-07-08

**Automation:** Daily cron (`cursor/website-content-and-ranking-f296`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-08T04:37Z

---

## Executive summary

| Metric | Value | Δ vs 2026-07-03 |
|--------|------:|-----------------|
| Live pages audited | **383** | +13 |
| Thin pages (<2,000 words) | **183** | −30 |
| 404 errors (sitemap scope) | **0** | unchanged |
| Fetch errors | **1** | `/quantitative-healthcare-market-research` redirect loop — **fixed in code** |

**Root cause (fetch error):** Legacy BOFU regex in `lib/country-industry-redirects.mjs` matched `/quantitative-healthcare-market-research` as `{country}-healthcare-market-research` → redirected to `/healthcare-market-research/quantitative`, which `vercel.json` redirected back — infinite loop.

**Fix:** `STANDALONE_LEGACY_EXCLUSIONS` for `/quantitative-healthcare-market-research`.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Action this run |
|--------|------------:|----:|---------:|-----------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Cairo hospital section + GeoLLMAnswerBlock on `/egypt-healthcare-market-report` |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | Monitor post prior SSR eager-import fix |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | CTR meta refresh + NUPCO FAQ |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | CTR meta refresh + SFDA EES copy |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | Redirect loop fix |

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

### Near-threshold pages expanded (GSC priority)

| Path | Words (pre) | Gap | Action |
|------|------------:|----:|--------|
| `/egypt-healthcare-market-report` | 1,995 | 5 | GeoLLMAnswerBlock + Cairo hospitals section |
| `/gcc-pharmaceutical-market-research` | 1,970 | 30 | NUPCO tender FAQ + CTR meta |
| `/gcc-market-access-guide` | 1,908 | 92 | SFDA EES paragraph + CTR meta |
| `/healthcare-market-research-italy` | 1,947 | 53 | AIFA CTS FAQ + nota limitativa copy |

### Remaining thin backlog

**183** service/landing URLs still below 2,000 words. Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` — prioritize global country MR pages and near-threshold gaps (<100 words).

---

## LLM / chat appearance (GEO)

- `GeoLLMAnswerBlock` added to `/egypt-healthcare-market-report`
- Retained on `/gcc-pharmaceutical-market-research`, `/gcc-market-access-guide`, `/healthcare-market-research-italy`
- Answer-first `<details>/<summary>` FAQ blocks on all expanded pages

---

## Post-deploy checklist

1. Verify `/quantitative-healthcare-market-research` returns HTTP 200 (no redirect loop)
2. `npm run indexnow:priority`
3. Re-run `node scripts/audit-thin-pages-bio450.mjs`
4. GSC URL Inspection on expanded GSC priority URLs
5. Monitor Cairo query CTR on Egypt report + blog (7-day window)

---

## Files changed (this run)

- `lib/country-industry-redirects.mjs` — `STANDALONE_LEGACY_EXCLUSIONS` for quantitative guide
- `src/pages/EgyptHealthcareMarketReport.tsx` — GeoLLM + Cairo hospitals section
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — NUPCO FAQ + CTR meta
- `src/pages/GccMarketAccessGuide.tsx` — SFDA EES copy + CTR meta
- `src/pages/HealthcareMarketResearchItaly.tsx` — AIFA CTS FAQ + nota limitativa copy
