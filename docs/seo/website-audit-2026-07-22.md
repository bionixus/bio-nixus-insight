# BioNixus Website SEO Audit — 2026-07-22

**Automation:** Daily cron (`cursor/website-content-and-ranking-e45a`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-22T04:01Z

---

## Executive summary

| Metric | Value | Δ vs 2026-07-03 |
|--------|------:|-----------------|
| Live pages audited | **386** | +16 |
| Thin pages (<2,000 words) | **186** | −27 |
| 404 errors (sitemap scope) | **0** | unchanged |
| Fetch errors | **1** | **fixed in code** (`/quantitative-healthcare-market-research` redirect loop) |

**Critical fix:** Legacy BOFU resolver treated `/quantitative-healthcare-market-research` as `quantitative` + `healthcare` country-industry URL → 301 to `/healthcare-market-research/quantitative`, which vercel.json redirected back — infinite loop, 1,665 GSC impressions wasted.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### Site-wide (3-month)

| Metric | Value |
|--------|------:|
| Top page impressions | Egypt blog **25,073**; Kuwait pharma cos **6,190** |
| Highest-impression zero/low CTR query | `cairo hospitals healthcare 2023-2026` — **16,826 impr, 0% CTR**, pos 4.9 |
| US impression inflation | **55,520 impr, 0.06% CTR** — track MENA separately |

### MENA money geos (3-month)

| Country | Clicks | Impressions | CTR |
|---------|-------:|------------:|----:|
| Egypt | 144 | 3,464 | **4.16%** |
| UAE | 113 | 6,646 | 1.70% |
| Saudi Arabia | 47 | 8,639 | **0.54%** |
| Kuwait | 55 | 2,671 | 2.06% |

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Action this run |
|--------|------------:|----:|---------:|-----------------|
| `cairo hospitals healthcare 2023-2026` (query) | 16,826 | **0%** | 4.9 | Egypt report Cairo hospitals FAQ + blog monitor |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | Meta title refresh (SFDA + $5.8B hook) |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | +NUPCO tender defence FAQs |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | +SFDA EES sequencing FAQs |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | **Redirect loop fixed** |
| `/healthcare-market-research-agency-gcc` | 1,001 | 0.20% | 63.8 | Already 3,309w — monitor only |

### Top pages by clicks (3-month)

| Page | Clicks | Impressions | CTR |
|------|-------:|------------:|----:|
| `/pharmaceutical-companies-kuwait` | 93 | 6,190 | 1.50% |
| `/blog/healthcare-overview-egypt-market-2026` | 86 | 25,073 | 0.34% |
| `/pharmaceutical-companies-oman` | 85 | 5,410 | 1.57% |
| `/pharmaceutical-companies-uae` | 71 | 5,443 | 1.30% |
| `/gcc-market-access-guide` | 14 | 3,058 | 0.46% |

---

## Production crawl — thin pages & errors

### 404 inventory

**0 URLs** in sitemap scope (prior 404 backlog pages now live).

### Fetch error (fixed)

| Path | Issue | Fix |
|------|-------|-----|
| `/quantitative-healthcare-market-research` | Redirect loop with `/healthcare-market-research/quantitative` | `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs` |

### Near-threshold pages expanded this run

| Path | Words (pre) | Gap | Action |
|------|------------:|----:|--------|
| `/egypt-healthcare-market-report` | 1,995 | 5 | Cairo hospitals infrastructure FAQ |
| `/gcc-pharmaceutical-market-research` | 1,970 | 30 | NUPCO tender + biosimilar defence FAQs |
| `/gcc-market-access-guide` | 1,908 | 92 | SFDA EES + sequencing FAQs |
| `/healthcare-market-research-italy` | 1,947 | 53 | Launch sequencing section + 2 FAQs |
| `/healthcare-market-research-new-zealand` | 1,930 | 70 | PHARMAC sequencing section + 2 FAQs |

### Remaining thin backlog

**186** service/landing URLs still below 2,000 words. Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` — prioritize global country MR pages with gap ≥200 words.

---

## LLM / chat appearance (GEO)

- `GeoLLMAnswerBlock` retained on GCC pharma, medtech, market access, Italy, and NZ pages
- Answer-first FAQ blocks added for NUPCO, SFDA EES, and developed-market launch sequencing — structured for retrieval in ChatGPT, Perplexity, and Google AI Overviews
- Quantitative methodology page will again serve full SSR HTML post-deploy (redirect loop blocked crawlers)

---

## Post-deploy checklist

1. `npm run indexnow:priority` — ping GSC priority URLs
2. Re-run `node scripts/audit-thin-pages-bio450.mjs` — confirm quantitative page returns 200
3. GSC URL Inspection on `/quantitative-healthcare-market-research`, `/gcc-medical-devices-market-report`
4. Monitor Cairo query CTR on `/blog/healthcare-overview-egypt-market-2026` (7-day window)

---

## Files changed (this run)

- `lib/country-industry-redirects.mjs` — exclude standalone quantitative page from legacy BOFU regex
- `src/pages/EgyptHealthcareMarketReport.tsx` — Cairo hospitals FAQ
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — NUPCO tender FAQs
- `src/pages/GccMarketAccessGuide.tsx` — SFDA EES FAQs
- `src/pages/HealthcareMarketResearchItaly.tsx` — launch sequencing + FAQs
- `src/pages/HealthcareMarketResearchNewZealand.tsx` — PHARMAC sequencing + FAQs
- `src/pages/GccMedicalDevicesMarketReport.tsx` — CTR meta refresh
- `docs/seo/website-audit-2026-07-22.md` — this report
