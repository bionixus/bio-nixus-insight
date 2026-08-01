# BioNixus Website SEO Audit — 2026-08-01

**Automation:** Daily cron (`cursor/website-content-and-ranking-4f63`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months — refresh post-deploy)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-08-01T04:02Z

---

## Executive summary

| Metric | Value | Δ vs 2026-07-03 |
|--------|------:|-----------------|
| Live pages audited | **386** | +16 |
| Thin pages (<2,000 words) | **184** | −29 |
| 404 errors | **0** | unchanged |
| Fetch errors | **1** | `/quantitative-healthcare-market-research` redirect loop — **fixed in code** |
| GCC medtech report | **2,334w** | above threshold (was SSR shell) |

**Root cause (error):** Legacy BOFU redirect regex matched `/quantitative-healthcare-market-research` as `{country}-{industry}-market-research` and redirected to `/healthcare-market-research/quantitative`, which Vercel 301s back — infinite loop.

**Fix:** `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs` + regression test `scripts/test-country-industry-redirects.mjs`.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Issue | Action this run |
|--------|------------:|----:|---------:|-------|-----------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Snippet mismatch | Cairo block live on Egypt blog; Egypt report FAQ added |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | Position + title | **2,334w** — above threshold; IndexNow priority |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | Thin + title | CTR title refresh + FAQ → ~2,020w target |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | Thin (1,908w) | +2 HTA/biosimilar FAQs → ~2,050w target |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | **Redirect loop** | Exclusion fix + IndexNow priority |
| `/healthcare-market-research` | 4,045 | 0.27% | 31.6 | Hub position | Monitor — no copy change |

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

### Critical error (fixed)

| Path | Issue | Fix |
|------|-------|-----|
| `/quantitative-healthcare-market-research` | Redirect loop (status 0) | `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs` |

### Near-threshold pages expanded (this run)

| Path | Words (pre) | Action |
|------|------------:|--------|
| `/egypt-healthcare-market-report` | 1,995 | +Cairo hospitals FAQ |
| `/gcc-pharmaceutical-market-research` | 1,970 | +FAQ + CTR title refresh |
| `/healthcare-market-research-italy` | 1,947 | +AIFA access FAQ |
| `/gcc-market-access-guide` | 1,908 | +SFDA EES + HTA FAQs |

### Remaining thin backlog

**184** service/landing URLs still below 2,000 words. Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` — prioritize global country MR pages and near-threshold gaps (<100 words).

Top near-threshold after this run: `/kantar-health-alternative-gcc` (1,987w), `/pt/insights/*` Brazil listicles (~1,956–1,958w).

---

## LLM / chat appearance (GEO)

- `public/llm.txt` — added GCC, Egypt, and quantitative healthcare sections with canonical URLs and query targets
- `GeoLLMAnswerBlock` retained on GCC pharma, medtech, and market access pages
- Egypt blog Cairo block (`EgyptHealthcare2026CairoBlock`) serves query-matched copy for `cairo hospitals healthcare 2023-2026`
- Post-deploy: `/quantitative-healthcare-market-research` will expose full methodology guide in initial HTML

---

## Post-deploy checklist

1. `npm run indexnow:priority` — ping GSC priority URLs (quantitative + gcc-medical-devices added)
2. Re-run `node scripts/audit-thin-pages-bio450.mjs` after deploy propagates
3. GSC URL Inspection on `/quantitative-healthcare-market-research`, `/gcc-pharmaceutical-market-research`
4. Monitor Cairo query CTR on `/blog/healthcare-overview-egypt-market-2026` (7-day window)
5. Fresh GSC export — validate CTR lift on GCC pharma title refresh

---

## Files changed (this run)

- `lib/country-industry-redirects.mjs` — `STANDALONE_LEGACY_EXCLUSIONS` for quantitative page
- `scripts/test-country-industry-redirects.mjs` — redirect regression tests
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — CTR title + FAQ
- `src/pages/EgyptHealthcareMarketReport.tsx` — Cairo hospitals FAQ
- `src/pages/HealthcareMarketResearchItaly.tsx` — AIFA access FAQ
- `src/pages/GccMarketAccessGuide.tsx` — biosimilar/HTA FAQs
- `public/llm.txt` — GCC, Egypt, quantitative sections
- `scripts/gsc-priority-recrawl.txt` — quantitative + gcc-medical-devices URLs
