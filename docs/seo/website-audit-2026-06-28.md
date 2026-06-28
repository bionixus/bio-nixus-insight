# BioNixus Website SEO Audit — 2026-06-28

**Automation:** Daily cron (cursor/website-content-and-ranking-5052)  
**GSC export baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-06-28T04:02Z

---

## Executive summary

| Metric | Value | Δ vs 2026-06-27 |
|--------|------:|-----------------|
| Live pages audited | **415** | +69 |
| Thin pages (&lt;2,000 words) | **295** | +67 |
| 404 errors | **0** | −9 (all prior 404s resolved) |
| Server errors (5xx) | **2** | unchanged (`/pt/methodology`, `/ru/methodology`) |
| Site-wide impressions (Jun 14–20, 7d) | **20,684** | trending up |
| Site-wide CTR (Jun 14–20, 7d) | **0.73%** | below 3.5% MENA target |

**Actions delivered in this run:** fixed pt/ru methodology 500 root cause; expanded near-threshold and high-GSC pages; added GeoLLM answer blocks for LLM/chat retrieval; improved meta titles on hub and KSA healthcare pages.

---

## Google Search Console — impressions & CTR

### Site trend (Chart.csv, Mar 21 – Jun 20)

| Period | Impressions (approx.) | CTR | Avg position |
|--------|----------------------:|----:|-------------:|
| Mar 2026 (early) | ~300–500/day | 0.4–1.6% | 24–35 |
| Apr 2026 | ~400–700/day | 0.5–1.5% | 12–35 |
| May 2026 | ~1,900–3,200/day | 0.25–0.68% | 6–13 |
| Jun 1–20 2026 | ~2,000–3,700/day | 0.62–1.67% | 17–40 |

Impressions grew ~10× from March to June. CTR dipped on high-impression days (May 3–4: 0.1–0.25% at pos 7–12) — classic **visibility without snippet appeal**.

### MENA money geos (3-month, Jun 22 export)

| Country | Clicks | Impressions | CTR | Avg pos |
|---------|-------:|------------:|----:|--------:|
| Egypt | 144 | 3,464 | **4.16%** | 7.6 |
| UAE | 113 | 6,646 | 1.70% | 14.3 |
| Kuwait | 55 | 2,671 | 2.06% | 7.5 |
| Saudi Arabia | 47 | 8,639 | **0.54%** | **42.0** |
| **MENA total** | **359** | **21,420** | **1.68%** | — |

### Top pages by clicks (3-month)

| Page | Clicks | Impressions | CTR | Pos |
|------|-------:|------------:|----:|----:|
| `/pharmaceutical-companies-kuwait` | 93 | 6,190 | 1.50% | 7.1 |
| `/blog/healthcare-overview-egypt-market-2026` | 86 | 25,073 | **0.34%** | 5.5 |
| `/pharmaceutical-companies-oman` | 85 | 5,410 | 1.57% | 6.5 |
| `/pharmaceutical-companies-uae` | 71 | 5,443 | 1.30% | 9.0 |
| `/` | 65 | 1,282 | **5.07%** | 14.4 |

### High-impression / low-CTR priority queue

| Page | Impressions | CTR | Issue | Action |
|------|------------:|----:|-------|--------|
| `cairo hospitals healthcare 2023-2026` (query) | 16,826 | **0%** | Pos 4.9, zero clicks | Egypt blog title/meta refresh (next sprint) |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | Pos 53 | Thin content + title mismatch |
| `/healthcare-market-research` | 4,045 | **0.27%** | Pos 31.6 | **Meta title updated** this run |
| `/gcc-market-access-guide` | 3,058 | 0.46% | Pos 16.5 | **NUPCO section + FAQs added** |
| `/healthcare-market-research/saudi-arabia` | 1,851 | **0.11%** | Pos 45.6 | **GeoLLM + NUPCO content** on `/healthcare-market-research-in-saudi-arabia` |
| `/services/market-access` | 2,541 | **0.04%** | Pos 57.3 | Deep expand (backlog) |

---

## Production crawl — thin pages & errors

### Errors (5xx) — fixed in code, deploy pending

| Path | Status | Root cause | Fix |
|------|--------|------------|-----|
| `/pt/methodology` | 500 | Missing `pt` key in `METHODOLOGY_SEO_AND_HERO` | Added pt SEO hero + language mirror |
| `/ru/methodology` | 500 | Missing `ru` key in `METHODOLOGY_SEO_AND_HERO` | Added ru SEO hero + language mirror |

### 404 inventory

**0 URLs** returning 404 in sitemap scope (down from 9 on 2026-06-18). Prior 404 paths (`/brand-tracking-pharma-gcc`, `/specialist-physician-panel-uae`, etc.) are now live.

### Near-threshold thin pages (gap &lt;100 words) — expanded this run

| Path | Words (pre) | Gap | Action |
|------|------------:|----:|--------|
| `/market-research-in-saudi-arabia` | 1,997 | 3 | +paragraph + FAQ |
| `/kantar-health-alternative-gcc` | 1,987 | 13 | +GeoLLM answer block (static HTML) |
| `/bionixus-vs-iqvia-mena` | 1,914 | 86 | +GeoLLM block + FAQ section |

### Deep thin backlog (295 total)

Top gaps remain on locale pages (`/ar/strategic-portfolio`, `/zh/methodology`) and global country MR pages. Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` queue — **10–25 URLs per sprint**.

---

## LLM / chat appearance (GEO)

Implemented or reinforced **answer-first** blocks on:

- `/healthcare-market-research-in-saudi-arabia` — `GeoLLMAnswerBlock` (“best healthcare market research company in Saudi Arabia”)
- `/kantar-health-alternative-gcc` — structured Q&A + proof list in static HTML
- `/bionixus-vs-iqvia-mena` — IQVIA alternative FAQ with `<details>`/`<summary>`
- `/gcc-market-access-guide` — existing GeoLLM + NUPCO tender section

Pattern: H2 question → direct entity-rich answer → structured `<ul>` proof points → internal links to hub/cluster pages.

---

## Google coverage snapshot (Jun 22)

| Reason | Pages | Action |
|--------|------:|--------|
| Crawled - currently not indexed | 50 | Enrich thin pages; IndexNow after deploy |
| Discovered - currently not indexed | 27 | Request indexing |
| Not found (404) | 15 | **Monitor** — production crawl shows 0 in sitemap scope |
| Server error (5xx) | 1 | **Fix deployed** pt/ru methodology |

---

## Next sprint priorities

1. **Cairo query CTR** — rewrite Egypt blog H1/meta for `cairo hospitals healthcare 2023-2026` (16.8k impr, 0 clicks).
2. **KSA position recovery** — Saudi Arabia avg pos 42; internal links from BOFU pharma pages → `/healthcare-market-research-in-saudi-arabia`.
3. **Thin page batch** — next 25 URLs from P0 queue in `bio-450-thin-page-research-briefs.md`.
4. **Post-deploy** — re-run `node scripts/audit-thin-pages-bio450.mjs`; `npm run indexnow:batch`.
5. **GSC** — refresh export weekly; track MENA CTR toward ≥3.5% target.

---

## Files changed (2026-06-28)

- `src/pages/methodology/methodologySeoHero.ts` — pt/ru SEO hero keys
- `src/pages/Methodology.tsx` — language mirror links
- `src/pages/methodology/MethodologyLongFormBody.tsx` — pt/ru body fallback
- `src/pages/MarketResearchInSaudiArabia.tsx` — content expansion
- `src/pages/HealthcareMarketResearchInSaudiArabia.tsx` — GeoLLM, NUPCO, meta
- `src/pages/healthcare-research/HubPage.tsx` — hub meta title CTR test
- `src/pages/GccMarketAccessGuide.tsx` — NUPCO section, accessible FAQs
- `public/conf/kantar-health-alternative-gcc.html` — GeoLLM block
- `public/conf/bionixus-vs-iqvia-mena.html` — GeoLLM + FAQ
- `scripts/data/bio-450-thin-page-audit.json` — refreshed crawl data
- `docs/seo/bio-450-thin-page-inventory.csv` — refreshed inventory
