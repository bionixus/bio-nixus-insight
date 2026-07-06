# BioNixus Website SEO Audit — 2026-07-06

**Automation:** Daily cron (`cursor/website-content-and-ranking-bbd2`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-06T04:01Z

---

## Executive summary

| Metric | Value | Δ vs 2026-07-03 |
|--------|------:|-----------------|
| Live pages audited | **383** | +13 |
| Thin pages (<2,000 words) | **182** | −31 |
| 404 errors | **0** | unchanged |
| Fetch errors | **1** | redirect loop on `/quantitative-healthcare-market-research` (**fixed this run**) |
| GCC medtech SSR | **2,334 words** | was 17w pre-SSR fix — **deployed** |

**Critical fix:** `resolveLegacyCountryIndustryMarketResearchRedirect` mis-parsed `/quantitative-healthcare-market-research` as `{country}-healthcare-market-research`, causing a 301 loop with `vercel.json`. Excluded standalone paths + added legacy redirects for `/healthcare-market-research/quantitative` and `/qualitative`.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Issue | Action this run |
|--------|------------:|----:|---------:|-------|-----------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Snippet mismatch | Answer-first Cairo block + meta refresh on Egypt blog |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | Was SSR shell | **2,334w live** — monitor CTR post-recrawl |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | Near threshold (1,970w) | Title/meta CTR refresh + +50w tender research copy |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | Near threshold (1,908w) | Meta refresh (biosimilar/NUPCO/HTA) + integrated calendar copy |
| `/blog/healthcare-overview-egypt-market-2026` | 25,073 | 0.34% | 5.54 | Cairo query cluster | Cairo hospitals block above fold |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | **Redirect loop** | Standalone path exclusion + legacy redirects |

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

### Fetch error (fixed)

`/quantitative-healthcare-market-research` returned `fetch failed` (redirect loop). Root cause: legacy BOFU redirect resolver treated `quantitative` as a country slug.

### Near-threshold pages expanded this run

| Path | Words (pre) | Action |
|------|------------:|--------|
| `/gcc-pharmaceutical-market-research` | 1,970 | CTR title/meta + tender committee paragraph |
| `/gcc-market-access-guide` | 1,908 | Meta refresh + NUPCO/HTA calendar paragraph |
| `/egypt-healthcare-market-report` | 1,995 | Cairo hospital corridor sentence |

### Remaining thin backlog

**182** service/landing URLs still below 2,000 words. Continue via `docs/seo/bio-450-thin-page-research-briefs.md` — prioritize global country MR pages with gaps <100 words (Italy, New Zealand, Brazil pharma, etc.).

---

## LLM / chat appearance (GEO)

- `GeoLLMAnswerBlock` on GCC pharma, medtech, and market access pages
- Egypt blog: Cairo hospitals FAQ schema + answer-first block for retrieval
- GCC medtech report now exposes full executive summary + FAQ in initial HTML (2,334w SSR)

---

## Post-deploy checklist

1. `npm run indexnow:priority` — ping GSC priority URLs
2. Re-run `node scripts/audit-thin-pages-bio450.mjs` after deploy propagates
3. GSC URL Inspection on `/quantitative-healthcare-market-research`, `/gcc-pharmaceutical-market-research`
4. Monitor Cairo query CTR on `/blog/healthcare-overview-egypt-market-2026` (7-day window)
5. Verify `/quantitative-healthcare-market-research` returns HTTP 200 (no redirect loop)

---

## Files changed (this run)

- `lib/country-industry-redirects.mjs` — exclude standalone `/quantitative-healthcare-market-research`
- `config/legacy-redirects.json` — canonical redirects for quantitative/qualitative hub slugs
- `scripts/generate-sitemap.mjs` — exclude redirect sources from sitemap
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — CTR meta + copy expansion
- `src/pages/GccMarketAccessGuide.tsx` — CTR meta + NUPCO calendar copy
- `src/pages/EgyptHealthcareMarketReport.tsx` — threshold copy
- `src/pages/BlogPost.tsx` — Egypt blog meta description
- `src/components/blog/EgyptHealthcare2026CairoBlock.tsx` — answer-first Cairo snippet
