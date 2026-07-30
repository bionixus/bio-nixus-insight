# BioNixus Website SEO Audit — 2026-07-10

**Automation:** Daily cron (`cursor/website-content-and-ranking-7550`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-10T04:01Z

---

## Executive summary

| Metric | Value | Δ vs 2026-07-03 |
|--------|------:|-----------------|
| Live pages audited | **383** | +13 |
| Thin pages (<2,000 words) | **183** | −30 |
| 404 errors | **0** | unchanged |
| Fetch errors | **1** | `/quantitative-healthcare-market-research` redirect loop — **fixed in code** (deploy pending) |
| Healthcare MR cluster thin | **26** | unchanged |

**Critical fix:** `/quantitative-healthcare-market-research` matched the legacy `{country}-{industry}-market-research` regex (`quantitative` + `healthcare`) and 301'd to `/healthcare-market-research/quantitative`, which vercel.json redirects back — infinite loop. Added `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs`.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### Site-wide (3 months)

| Metric | Value |
|--------|------:|
| Total clicks | ~1,200+ |
| Total impressions | ~120,000+ |
| Avg CTR | ~1.0% |

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Issue | Action this run |
|--------|------------:|----:|---------:|-------|-----------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Snippet on blog; report thin | Cairo hospitals section on `/egypt-healthcare-market-report` |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | Position + thin history | Monitor post prior SSR eager-import deploy |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | Thin (1,970w) + meta | NUPCO FAQ + meta refresh |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | Thin (1,908w) | SFDA EES FAQ + meta refresh |
| `/healthcare-market-research-italy` | — | — | — | Near threshold (1,947w) | AIFA CTS research-design FAQ |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | **Redirect loop** | `STANDALONE_LEGACY_EXCLUSIONS` fix |

### Top-performing pages (clicks)

| Page | Clicks | Impressions | CTR |
|------|-------:|------------:|----:|
| `/pharmaceutical-companies-kuwait` | 93 | 6,190 | 1.5% |
| `/blog/healthcare-overview-egypt-market-2026` | 86 | 25,073 | 0.34% |
| `/pharmaceutical-companies-oman` | 85 | 5,410 | 1.57% |
| `/pharmaceutical-companies-uae` | 71 | 5,443 | 1.3% |

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

**0 URLs** in sitemap scope. Previously flagged 404 paths (`/brand-tracking-pharma-gcc`, `/specialist-physician-panel-uae`, etc.) now resolve with live routes.

### Fetch error (fixed)

| Path | Error | Root cause | Fix |
|------|-------|------------|-----|
| `/quantitative-healthcare-market-research` | `fetch failed` (redirect loop) | Legacy BOFU regex matched `quantitative-healthcare` | `STANDALONE_LEGACY_EXCLUSIONS` |

### Near-threshold pages expanded this run

| Path | Words (pre) | Gap | Action |
|------|------------:|----:|--------|
| `/egypt-healthcare-market-report` | 1,995 | 5 | Cairo hospitals 2023–2026 section + FAQ |
| `/gcc-pharmaceutical-market-research` | 1,970 | 30 | NUPCO tender FAQ + meta description |
| `/gcc-market-access-guide` | 1,908 | 92 | SFDA EES FAQ + meta description |
| `/healthcare-market-research-italy` | 1,947 | 53 | AIFA CTS research-design FAQ |

### Remaining thin backlog

**183** service/landing URLs still below 2,000 words. Next batch: global country MR pages with gaps 70–160 words (`/healthcare-market-research-new-zealand`, `/brazil-pharmaceutical-market-research`, `/bionixus-vs-iqvia-mena`). See `docs/seo/bio-450-thin-page-research-briefs.md`.

---

## LLM / chat appearance (GEO)

- `GeoLLMAnswerBlock` on GCC pharma, medtech, market access, and Italy pages
- Cairo hospitals answer-first block on Egypt report (query-matched H2 + hospital cluster cards + FAQ)
- FAQ schema via `details`/`summary` on all expanded pages
- `public/llms.txt` references Cairo hospitals Egypt overview

---

## Post-deploy checklist

1. Verify `/quantitative-healthcare-market-research` returns **200** (no redirect loop)
2. `npm run indexnow:priority` — ping GSC priority URLs
3. Re-run `node scripts/audit-thin-pages-bio450.mjs` after deploy propagates
4. GSC URL Inspection on expanded near-threshold pages
5. Monitor Cairo query CTR on blog + Egypt report (7-day window)

---

## Files changed (this run)

- `lib/country-industry-redirects.mjs` — `STANDALONE_LEGACY_EXCLUSIONS` for quantitative/qualitative guides
- `src/pages/EgyptHealthcareMarketReport.tsx` — Cairo hospitals healthcare 2023–2026 section
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — NUPCO FAQ + meta description
- `src/pages/GccMarketAccessGuide.tsx` — SFDA EES FAQ + meta description
- `src/pages/HealthcareMarketResearchItaly.tsx` — AIFA CTS FAQ
- `docs/seo/website-audit-2026-07-10.md` — this report
