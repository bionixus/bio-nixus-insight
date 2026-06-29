# BioNixus Website SEO Audit — 2026-06-29

**Automation:** Daily cron (cursor/website-content-and-ranking-f4ab)  
**GSC export baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-06-29T04:02Z

---

## Executive summary

| Metric | Value | Δ vs 2026-06-28 |
|--------|------:|-----------------|
| Live pages audited | **363** | −52 (audit scope filter) |
| Thin pages (&lt;2,000 words) | **233** | −62 |
| 404 errors | **0** | unchanged |
| Server errors (5xx) | **0** | −2 (pt/ru methodology fix deployed) |
| Site-wide impressions (Jun 14–20, 7d) | **20,684** | stable |
| Site-wide CTR (Jun 14–20, 7d) | **0.73%** | below 3.5% MENA target |

**Actions delivered in this run:** expanded near-threshold BOFU pages (UAE/Egypt medtech & consumer health); deepened high-GSC pages (GCC medical devices report, GCC market access guide); Cairo blog title/meta query-match refresh; GeoLLM blocks on Kantar and IQVIA comparison pages; Egypt market research FAQs.

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

| Page / query | Impressions | CTR | Issue | Action (this run) |
|--------------|------------:|----:|-------|-------------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | Pos 4.9, zero clicks | **Title/meta lowercase query match** in BlogPost + server.js |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | Pos 53 | **IVD/prefilled syringes section** + title refresh |
| `/healthcare-market-research` | 4,045 | **0.27%** | Pos 31.6 | Hub title → "Healthcare Market Research Company" |
| `/gcc-market-access-guide` | 3,058 | 0.46% | Pos 16.5 | **Biosimilars/HTA section** (+272w depth) |
| `/healthcare-market-research/saudi-arabia` | 1,851 | **0.11%** | Pos 45.6 | Backlog — internal links from BOFU pages |

---

## Production crawl — thin pages & errors

### Errors

| Type | Count | Notes |
|------|------:|-------|
| 404 | **0** | All prior 404 paths resolved |
| 5xx | **0** | pt/ru methodology fix live |

### Near-threshold pages expanded (gap &lt;100 words)

| Path | Words (pre) | Gap | Action |
|------|------------:|----:|--------|
| `/uae-medtech-market-research` | 1,998 | 2 | +uniqueness paragraphs (BOFU enhancement) |
| `/uae-consumer-health-market-research` | 1,995 | 5 | +uniqueness paragraphs |
| `/egypt-medtech-market-research` | 1,994 | 6 | +uniqueness paragraphs |
| `/egypt-consumer-health-market-research` | 1,989 | 11 | +uniqueness paragraphs |
| `/kantar-health-alternative-gcc` | 1,987 | 13 | +GeoLLM answer block (static HTML) |
| `/bionixus-vs-iqvia-mena` | 1,914 | 86 | +GeoLLM block + FAQ section |
| `/market-research-in-egypt` | 1,933 | 67 | +3 FAQs (Cairo/healthcare context) |

### Deep thin backlog

**233 pages** remain below 2,000 words. Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` — **10–25 URLs per sprint**.

---

## LLM / chat appearance (GEO)

Reinforced **answer-first** blocks on:

- `/kantar-health-alternative-gcc` — "best Kantar Health alternative for GCC pharmaceutical research"
- `/bionixus-vs-iqvia-mena` — "best IQVIA alternative for MENA healthcare market research" + FAQ
- `/gcc-medical-devices-market-report` — existing GeoLLM + new IVD/prefilled syringes depth
- `/gcc-market-access-guide` — existing GeoLLM + biosimilars/HTA section

Pattern: H2 question → direct entity-rich answer → structured proof list → internal links to hub/cluster pages.

---

## Next sprint priorities

1. **Post-deploy re-crawl** — verify near-threshold pages cross 2,000w; run `npm run indexnow:batch`.
2. **KSA position recovery** — Saudi Arabia avg pos 42; internal links from pharma BOFU → `/healthcare-market-research-in-saudi-arabia`.
3. **Cairo query CTR** — monitor GSC for `cairo hospitals healthcare 2023-2026` CTR > 0% after title deploy.
4. **Thin page batch** — next 25 URLs from P0 queue in `bio-450-thin-page-research-briefs.md`.
5. **GSC export refresh** — weekly; track MENA CTR toward ≥3.5% target.

---

## Files changed (2026-06-29)

- `src/data/industryCommercialExpandedContent.ts` — UAE/Egypt medtech & consumer-health BOFU expansions
- `src/pages/GccMedicalDevicesMarketReport.tsx` — IVD/prefilled syringes section, meta title
- `src/pages/GccMarketAccessGuide.tsx` — biosimilars/HTA section, TOC
- `src/pages/MarketResearchInEgypt.tsx` — 3 new FAQs
- `src/pages/BlogPost.tsx` — Cairo blog query-match title/meta
- `server.js` — Cairo blog SSR title/meta override
- `src/pages/healthcare-research/HubPage.tsx` — hub meta title CTR test
- `public/conf/kantar-health-alternative-gcc.html` — GeoLLM block
- `public/conf/bionixus-vs-iqvia-mena.html` — GeoLLM + FAQ
- `scripts/data/bio-450-thin-page-audit.json` — refreshed crawl data
- `docs/seo/bio-450-thin-page-inventory.csv` — refreshed inventory
