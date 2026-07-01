# BioNixus Website SEO Audit — 2026-07-01

**Automation:** Daily cron (`cursor/website-content-and-ranking-8793`)  
**GSC export baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-01T04:01Z

---

## Executive summary

| Metric | Value | Δ vs 2026-06-30 |
|--------|------:|-----------------|
| Live pages audited | **363** | unchanged |
| Thin pages (<2,000 words) | **226** | −9 |
| 404 errors | **0** | unchanged |
| Server errors (5xx) | **0** | unchanged |
| Site-wide impressions (Jun 14–20, 7d) | **20,684** | trending up |
| Site-wide CTR (Jun 14–20, 7d) | **0.73%** | below 3.5% MENA target |

**Actions delivered this run:** GeoLLM answer blocks on Kantar/IQVIA static pages; expanded GCC market access guide (biosimilars/HTA); expanded GCC medical devices (IVD/prefilled syringes); expanded `/services/market-access` and `/gcc-pharmaceutical-market-research` (NUPCO/biosimilar); hub meta title CTR refresh.

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

| Page / query | Impressions | CTR | Issue | Action this run |
|--------------|------------:|----:|-------|-----------------|
| `cairo hospitals healthcare 2023-2026` (query) | 16,826 | **0%** | Pos 4.9, zero clicks | Prior sprint: BlogPost + CairoBlock deployed; monitor |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | Pos 53 | **+IVD/prefilled syringes section**; title already IVD-optimised |
| `/healthcare-market-research` | 4,045 | **0.27%** | Pos 31.6 | **Meta title/description CTR refresh** |
| `/gcc-market-access-guide` | 3,058 | 0.46% | Pos 16.5 | **+Biosimilars/HTA section** |
| `/services/market-access` | 2,541 | **0.04%** | Pos 57.3 | **+Expanded modules + FAQ** |
| `/gcc-pharmaceutical-market-research` | — | — | Thin 1,656w | **+NUPCO/biosimilar section** |
| `/kantar-health-alternative-gcc` | — | — | Thin 1,987w | **+GeoLLM article block** |
| `/bionixus-vs-iqvia-mena` | — | — | Thin 1,914w | **+GeoLLM article block** |

### Top pages by clicks (3-month)

| Page | Clicks | Impressions | CTR | Pos |
|------|-------:|------------:|----:|----:|
| `/pharmaceutical-companies-kuwait` | 93 | 6,190 | 1.50% | 7.1 |
| `/blog/healthcare-overview-egypt-market-2026` | 86 | 25,073 | 0.34% | 5.5 |
| `/pharmaceutical-companies-oman` | 85 | 5,410 | 1.57% | 6.5 |
| `/pharmaceutical-companies-uae` | 71 | 5,443 | 1.30% | 9.0 |
| `/` | 65 | 1,282 | 5.07% | 14.4 |

---

## Production crawl — thin pages & errors

### Errors

| Type | Count |
|------|------:|
| 404 | **0** |
| 5xx | **0** |

### Near-threshold pages addressed

| Path | Words (pre) | Action |
|------|------------:|--------|
| `/kantar-health-alternative-gcc` | 1,987 | GeoLLM `<article>` block in static HTML |
| `/bionixus-vs-iqvia-mena` | 1,914 | GeoLLM `<article>` block in static HTML |

### Deep thin backlog (226 total)

Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` — next 25 URLs by GSC impression × gap_words.

---

## LLM / chat appearance (GEO)

Reinforced answer-first blocks on:

- `/kantar-health-alternative-gcc` — static HTML GeoLLM article
- `/bionixus-vs-iqvia-mena` — static HTML GeoLLM article
- `/gcc-market-access-guide` — existing GeoLLMAnswerBlock + biosimilars/HTA prose
- `/gcc-medical-devices-market-report` — existing GeoLLMAnswerBlock + IVD section
- `/services/market-access` — GeoLLMAnswerBlock + expanded FAQ (`SERVICE_EXPANDED_FAQS`)

---

## Next sprint

1. Post-deploy: re-run `node scripts/audit-thin-pages-bio450.mjs`; verify near-threshold pages cross 2,000w
2. IndexNow batch for updated URLs (`npm run indexnow:priority`)
3. Thin page batch: next 25 from bio-450 inventory (locale pages, developed-market MR hubs)
4. Monitor Cairo query CTR after Egypt blog title refresh
5. KSA internal links from pharma BOFU pages to `/healthcare-market-research-in-saudi-arabia`
