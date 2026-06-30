# BioNixus Website SEO Audit — 2026-06-30

**Automation:** Daily cron (`cursor/website-content-and-ranking-5159`)  
**GSC export baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-06-30T04:02Z

---

## Executive summary

| Metric | Value | Δ vs 2026-06-29 |
|--------|------:|-----------------|
| Live pages audited | **363** | — |
| Thin pages (&lt;2,000 words) | **235** | −2 (post prior deploy batch) |
| 404 errors | **0** | unchanged |
| Server errors (5xx) | **0** | unchanged |
| MENA impressions (3-month GSC) | **21,420** | baseline |
| MENA CTR (3-month GSC) | **1.68%** | below 3.5% target |
| Site-wide CTR (Jun 14–20, 7d) | **0.73%** | visibility without snippet appeal |

**Actions delivered this run:** expanded near-threshold UAE/Egypt industry BOFU pages; added GeoLLM answer blocks to Kantar and IQVIA static comparison pages; deepened GCC market access (biosimilars/HTA), GCC medical devices (IVD/prefilled syringes), GCC pharmaceutical research, and Egypt market research pages; refreshed healthcare hub and KSA healthcare meta titles for CTR.

---

## Google Search Console — impressions & CTR

### MENA money geos (3-month, Jun 22 export)

| Country | Clicks | Impressions | CTR | Avg pos |
|---------|-------:|------------:|----:|--------:|
| Egypt | 144 | 3,464 | **4.16%** | 7.6 |
| UAE | 113 | 6,646 | 1.70% | 14.3 |
| Kuwait | 55 | 2,671 | 2.06% | 7.5 |
| Saudi Arabia | 47 | 8,639 | **0.54%** | **42.0** |
| **MENA total** | **359** | **21,420** | **1.68%** | — |

### High-impression / low-CTR priority queue

| Page / query | Impressions | CTR | Action this run |
|--------------|------------:|----:|-----------------|
| `cairo hospitals healthcare` (query) | 16,826 | **0%** | Egypt blog title refresh (backlog) |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | **IVD + prefilled syringes section added** |
| `/healthcare-market-research` | 4,045 | **0.27%** | **Hub meta title/description refreshed** |
| `/gcc-market-access-guide` | 3,058 | 0.46% | **Biosimilars/HTA section + 2 FAQs** |
| `/healthcare-market-research/saudi-arabia` | 1,851 | **0.11%** | KSA dedicated page meta refresh |
| `/healthcare-market-research-in-saudi-arabia` | — | — | **Title/meta CTR optimisation** |
| `/kantar-health-alternative-gcc` | — | — | **GeoLLM block added** (was 1,987w) |
| `/bionixus-vs-iqvia-mena` | — | — | **GeoLLM block added** (was 1,914w) |

---

## Production crawl — thin pages & errors

### Errors

| Type | Count |
|------|------:|
| 404 | 0 |
| 5xx | 0 |

### Near-threshold pages addressed (pre-deploy baseline)

| Path | Words (prod) | Gap | Fix |
|------|-------------:|----:|-----|
| `/uae-medtech-market-research` | 1,998 | 2 | +2 regulatory paragraphs (UAE medtech) |
| `/uae-consumer-health-market-research` | 1,995 | 5 | +2 regulatory paragraphs |
| `/egypt-medtech-market-research` | 1,994 | 6 | +2 regulatory paragraphs |
| `/egypt-consumer-health-market-research` | 1,989 | 11 | +2 regulatory paragraphs |
| `/kantar-health-alternative-gcc` | 1,987 | 13 | GeoLLM HTML section |
| `/uae-biotech-market-research` | 1,970 | 30 | +2 regulatory paragraphs |
| `/egypt-biotech-market-research` | 1,956 | 44 | +2 regulatory paragraphs |
| `/market-research-in-egypt` | 1,933 | 67 | +1 market context para, +3 FAQs |
| `/bionixus-vs-iqvia-mena` | 1,914 | 86 | GeoLLM HTML section |
| `/gcc-market-access-guide` | 1,728 | 272 | Biosimilars/HTA section + FAQs |
| `/gcc-pharmaceutical-market-research` | 1,656 | 344 | NUPCO/biosimilar dynamics section |

### Remaining thin backlog

**235 pages** still below 2,000 words after this batch. Next priority queue: `/clinical-diagnostics-market-research`, `/gcc-pharmaceutical-market-research` (verify post-deploy), `/healthcare-market-research-usa`, `/services`, and next 25 from `docs/seo/bio-450-thin-page-inventory.csv`.

---

## LLM / chat retrieval (GEO)

- GeoLLM answer blocks added/refreshed on Kantar alternative, IQVIA comparison, healthcare hub, KSA healthcare, GCC access, GCC devices.
- Static HTML comparison pages (`public/conf/*.html`) use semantic `<article>`, `<h2>`, structured lists for AI crawler parsing.
- FAQ schema maintained on expanded pages.

---

## Post-deploy checklist

1. Re-run `SITE_AUDIT_BASE_URL=https://www.bionixus.com node scripts/audit-thin-pages-bio450.mjs`
2. Submit updated URLs via IndexNow batch
3. Monitor GSC CTR on `/healthcare-market-research`, `/gcc-medical-devices-market-report`, KSA pages (14-day window)
4. Continue thin-page batch from bio-450 inventory (target: −25 thin pages next sprint)
