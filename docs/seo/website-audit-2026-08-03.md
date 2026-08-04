# BioNixus Website SEO Audit — 2026-08-03

**Automation:** Daily cron (`cursor/website-content-and-ranking-f1ad`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-08-03T04:03Z

---

## Executive summary

| Metric | Value | Δ vs 2026-07-03 |
|--------|------:|-----------------|
| Live pages audited | **386** | +16 |
| Thin pages (<2,000 words) | **186** | −27 |
| 404 errors | **0** | unchanged |
| Fetch errors | **1** | redirect loop on `/quantitative-healthcare-market-research` — **fixed in code** |

**Root cause (error):** Legacy BOFU resolver treated `/quantitative-healthcare-market-research` as `{country}-{industry}-market-research` and redirected to `/healthcare-market-research/quantitative`, which `vercel.json` redirects back — infinite loop.

**Fix:** `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs` + `scripts/test-country-industry-redirects.mjs`.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Issue | Action this run |
|--------|------------:|----:|---------:|-------|-----------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Snippet mismatch | Cairo block live on Egypt blog; Egypt report title + Cairo FAQ added |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | Low snippet appeal | CTR title refresh: "Market Report 2026 \| $5.8B IVD & Hospital Intel" |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | Title + thin (1,970w) | Title → "Pharmaceutical Market Research 2026"; +2 FAQs |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | Thin (1,908w) | +2 biosimilar/HTA/SFDA EES FAQs |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | **Redirect loop** | Standalone exclusion fix |
| `/healthcare-market-research-agency-gcc` | 1,001 | 0.20% | 63.8 | Already 3,309w | No copy change |

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
| `/quantitative-healthcare-market-research` | Redirect loop with `/healthcare-market-research/quantitative` | `STANDALONE_LEGACY_EXCLUSIONS` |

### Near-threshold pages expanded (GSC priority)

| Path | Words (pre) | Gap | Action |
|------|------------:|----:|--------|
| `/egypt-healthcare-market-report` | 1,995 | 5 | Cairo hospitals 2023–2026 FAQ + CTR title |
| `/gcc-pharmaceutical-market-research` | 1,970 | 30 | CTR title + 2 pharma MR FAQs |
| `/gcc-market-access-guide` | 1,908 | 92 | Biosimilar/HTA + SFDA EES FAQs |

### Remaining thin backlog

**186** service/landing URLs still below 2,000 words. Continue batch expansion — prioritize near-threshold gaps (<100 words) and country MR clusters per `docs/seo/bio-450-thin-page-research-briefs.md`.

---

## LLM / chat appearance (GEO)

- `public/llm.txt` — added GCC pharmaceutical/medtech, quantitative methodology, and Egypt/Cairo hospitals sections
- `GeoLLMAnswerBlock` retained on GCC pharma, medtech, and market access pages
- Post-deploy: run `npm run indexnow:priority` for Tier 7 URLs in `scripts/gsc-priority-recrawl.txt`

---

## Post-deploy checklist

1. Verify `/quantitative-healthcare-market-research` returns HTTP 200 (no redirect loop)
2. `npm run indexnow:priority`
3. Re-run `node scripts/audit-thin-pages-bio450.mjs`
4. GSC URL Inspection on GCC pharma, medtech, quantitative, Egypt report
5. Monitor Cairo query CTR on Egypt blog (7-day window)

---

## Files changed (this run)

- `lib/country-industry-redirects.mjs` — `STANDALONE_LEGACY_EXCLUSIONS`
- `scripts/test-country-industry-redirects.mjs` — regression guard
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — CTR title + FAQs
- `src/pages/GccMedicalDevicesMarketReport.tsx` — CTR title
- `src/pages/GccMarketAccessGuide.tsx` — biosimilar/HTA FAQs
- `src/pages/EgyptHealthcareMarketReport.tsx` — Cairo FAQ + CTR title
- `public/llm.txt` — GCC, quantitative, Egypt GEO sections
- `scripts/gsc-priority-recrawl.txt` — Tier 7 priority URLs
