# BioNixus Website SEO Audit — 2026-07-07

**Automation:** Daily cron (`cursor/website-content-and-ranking-2727`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-07T04:01Z

---

## Executive summary

| Metric | Value | Δ vs 2026-07-03 |
|--------|------:|-----------------|
| Live pages audited | **383** | +13 |
| Thin pages (<2,000 words) | **181** | −32 |
| 404 errors | **0** | unchanged |
| Fetch errors | **1** | `/quantitative-healthcare-market-research` redirect loop — **fixed in code** |
| SSR shells (~17 words) | **0** on GSC priority reports | gcc-medtech now **2,334w** live |

**Critical fix this run:** `resolveLegacyCountryIndustryMarketResearchRedirect` mis-parsed `/quantitative-healthcare-market-research` as legacy BOFU (`quantitative` + `healthcare`) and looped with `vercel.json` (`/healthcare-market-research/quantitative` ↔ canonical). Added `STANDALONE_LEGACY_EXCLUSIONS` guard.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### Site totals (3-month window)

| Metric | Value |
|--------|------:|
| Total clicks | ~1,200+ |
| Total impressions | ~120k+ |
| Branded CTR (`bionixus`) | **47.4%** |
| MENA pharma BOFU avg CTR | **1.3–2.3%** |

### MENA money geos

| Country | Clicks | Impressions | CTR |
|---------|-------:|------------:|----:|
| Egypt | 144 | 3,464 | **4.16%** |
| UAE | 113 | 6,646 | 1.70% |
| Saudi Arabia | 47 | 8,639 | **0.54%** |
| Kuwait | 55 | 2,671 | 2.06% |

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Issue | Action this run |
|--------|------------:|----:|---------:|-------|-----------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Snippet mismatch | Cairo block live on Egypt blog — monitor 7-day CTR |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | Was SSR shell | **2,334w** live — no copy change |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | Thin (1,970w) + meta | Title CTR refresh + NUPCO FAQ + biosimilar copy |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | Thin (1,908w) | Meta refresh + NUPCO tender calendar paragraph |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | **Redirect loop** | Exclusion guard — restores 200 + full SSR |
| `/healthcare-market-research-agency-gcc` | 1,001 | 0.20% | 63.8 | — | **3,309w** — no copy change |
| `/bionixus-market-research-middle-east` | 2,269 | 0.18% | 34.4 | — | **2,093w** — no copy change |

### Top-performing pages (CTR benchmarks)

| Page | Clicks | Impressions | CTR |
|------|-------:|------------:|----:|
| `/pharmaceutical-companies-kuwait` | 93 | 6,190 | **1.50%** |
| `/pharmaceutical-companies-oman` | 85 | 5,410 | **1.57%** |
| `/pharmaceutical-companies-uae` | 71 | 5,443 | 1.30% |
| `/blog/healthcare-overview-egypt-market-2026` | 86 | 25,073 | 0.34% |

---

## Production crawl — thin pages & errors

### 404 inventory

**0 URLs** in sitemap scope. Previously flagged routes (`/specialist-physician-panel-uae`, `/msl-insight-research-middle-east`, `/brand-tracking-pharma-gcc`, etc.) are live in `src/routes.tsx`.

### Fetch error (fixed)

| Path | Status | Root cause | Fix |
|------|--------|------------|-----|
| `/quantitative-healthcare-market-research` | Redirect loop | Legacy BOFU resolver + vercel.json bidirectional 301 | `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs` |

### Near-threshold pages expanded this run

| Path | Words (pre) | Action |
|------|------------:|--------|
| `/egypt-healthcare-market-report` | 1,995 | `GeoLLMAnswerBlock` (UHI, EDA, Cairo hospitals) |
| `/gcc-pharmaceutical-market-research` | 1,970 | CTR title + NUPCO tender FAQ |
| `/gcc-market-access-guide` | 1,908 | CTR meta + NUPCO 2026 tender calendar paragraph |
| `/healthcare-market-research-italy` | 1,947 | AIFA CTS/CPR research FAQ |

### Remaining thin backlog

**181** service/landing URLs still below 2,000 words. Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` — prioritize:

1. Near-threshold global country MR pages (gap <100w): China, Bahrain, New Zealand, Brazil pharma
2. `/healthcare-market-research/*` cluster (26 thin)
3. Locale insight listicles (`/pt/insights/*`, `/es/insights/*`)

---

## LLM / chat appearance (GEO)

| Pattern | Status |
|---------|--------|
| `GeoLLMAnswerBlock` on GCC pharma, medtech, market access | Live |
| Egypt healthcare report answer block | **Added** |
| FAQ `<details>/<summary>` on access guide | Live |
| JSON-LD FAQPage on expanded pages | Live |
| Cairo hospitals answer-first block on Egypt blog | Live (monitor CTR) |

**Chat retrieval priorities:** Answer-first blocks with cited market sizes, authority names (SFDA, MOHAP, EDA, NUPCO), and explicit BioNixus methodology statements improve Perplexity/ChatGPT citation rates.

---

## Post-deploy checklist

1. Verify `/quantitative-healthcare-market-research` returns **200** (no redirect loop)
2. `npm run indexnow:priority` — ping GSC priority URLs
3. Re-run `node scripts/audit-thin-pages-bio450.mjs` after deploy propagates
4. GSC URL Inspection on `/quantitative-healthcare-market-research`, `/gcc-pharmaceutical-market-research`
5. Monitor Cairo query CTR on `/blog/healthcare-overview-egypt-market-2026` (7-day window)

---

## Files changed (this run)

- `lib/country-industry-redirects.mjs` — redirect loop guard
- `src/pages/EgyptHealthcareMarketReport.tsx` — GeoLLMAnswerBlock
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — CTR meta + NUPCO FAQ
- `src/pages/GccMarketAccessGuide.tsx` — CTR meta + NUPCO tender copy
- `src/pages/HealthcareMarketResearchItaly.tsx` — AIFA CTS/CPR FAQ
- `docs/seo/website-audit-2026-07-07.md` — this report
