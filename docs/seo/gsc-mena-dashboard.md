# GSC MENA dashboard — qualified traffic baseline

**Purpose:** Measure “2x impressions, clicks, CTR” on **MENA money geos**, not US/India noise.  
**Latest export:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (Web, **Last 3 months**, 2026-06-22)  
**Prior export:** `bionixus.com-Performance-on-Search-2026-06-16.zip`  
**Coverage export:** `docs/seo/exports/bionixus.com-Coverage-2026-06-22/`

---

## Saved views to create in Google Search Console

Create these under **Performance → Search results → + New** (save as named views):

| View name | Filters |
|-----------|---------|
| `Global excl India` | All countries **except India** — primary CTR recovery measurement view |
| `MENA money geos` | Country: **Egypt**, **Kuwait**, **UAE**, **Saudi Arabia** |
| `MENA BOFU pages` | Page contains: `/pharmaceutical-companies-` OR `/market-research-saudi` OR `/market-research-uae` OR `/egypt-pharmaceutical` OR `/uae-pharmaceutical` |
| `MENA country MR pages` | Page contains: `/healthcare-market-research/` OR `/market-research-uae` OR `/market-research-ksa` OR `/market-research-kuwait` OR `/market-research-egypt` OR `/market-research-qatar` OR `/market-research-oman` OR `/market-research-bahrain` |
| `Healthcare hub cluster` | Page contains: `/healthcare-market-research` OR `/gcc-pharma` OR `/gcc-medical-devices` OR `/gcc-pharmaceutical-market-research` |
| `Insights listicles` | Page contains: `/insights/top-` |
| `Noise baseline` | Country: **United States** OR **India** (track separately; do not optimize for volume) |

**Date range:** Last 28 days for weekly reviews; Last 3 months for trend checks.

---

## MENA baseline (3-month, export 2026-06-22)

| Segment | Clicks | Impressions | CTR | Avg pos | Δ vs Jun 16 |
|---------|--------|-------------|-----|---------|-------------|
| Egypt | 144 | 3,464 | 4.16% | 7.6 | +22 clicks |
| UAE | 113 | 6,646 | 1.70% | 14.3 | +19 clicks |
| Kuwait | 55 | 2,671 | 2.06% | 7.5 | +8 clicks |
| Saudi Arabia | 47 | 8,639 | **0.54%** | 42.0 | +6 clicks, +1.3k impr |
| **MENA total (4 geos)** | **359** | **21,420** | **1.68%** | — | **+55 clicks** |
| United States | 33 | 55,520 | 0.06% | 15.6 | Noise — ignore |
| India | 138 | 13,232 | 1.04% | 34.2 | Noise — ignore |

**Site-wide last 7 days (Chart.csv, Jun 14–20):** 150 clicks · 20,684 impressions · 0.73% CTR (Jun 14 still lagging — GSC processing).

### Top pages (3-month)

| Page | Clicks | Impressions | CTR | Position |
|------|--------|-------------|-----|----------|
| `/pharmaceutical-companies-kuwait` | 93 | 6,190 | 1.50% | 7.1 |
| `/blog/healthcare-overview-egypt-market-2026` | 86 | 25,073 | 0.34% | 5.5 |
| `/pharmaceutical-companies-oman` | 85 | 5,410 | 1.57% | 6.5 |
| `/pharmaceutical-companies-uae` | 71 | 5,443 | 1.30% | 9.0 |
| `/pharmaceutical-companies-saudi-arabia` | 48 | 3,657 | 1.31% | 8.7 |

Kuwait BOFU is now the **#1 click driver** site-wide. Egypt blog has **86 clicks** total but the Cairo query still converts at **0%**.

### 12-week 2x targets (MENA-filtered)

| Metric | Baseline (Jun 22) | Target |
|--------|-------------------|--------|
| MENA clicks (3mo) | 359 | **≥720** |
| MENA clicks (28d rolling) | ~150–180 | **≥300–360** |
| MENA impressions (3mo) | 21,420 | **≥42,000** |
| MENA blended CTR | 1.68% | **≥3.5%** |
| Cairo query clicks | **0** (16,826 impr) | **≥50 / 28d** |
| KSA country CTR | 0.54% | **≥1.5%** |

---

## Country MR query tracker (baseline Jun 22, 3-month)

Track weekly in GSC **Queries** filtered by page URL or query contains country + “market research”:

| Country | Target query pattern | Baseline impr | Baseline clicks | Baseline pos | Primary URL |
|---------|---------------------|---------------|-----------------|--------------|-------------|
| UAE / Dubai | `healthcare market research * dubai` | ~1,500+ cluster | 0 | 18–26 | `/pharmaceutical-market-research-dubai`, `/insights/top-healthcare-market-research-companies-dubai-2026` |
| Saudi Arabia | `saudi healthcare market research` | 76 | 0 | 50.9 | `/healthcare-market-research/saudi-arabia`, `/market-research-saudi-arabia-pharmaceutical` |
| Egypt | `market research companies in egypt` | 156 | 1 | 14.5 | `/blog/top-market-research-companies-egypt-2026`, `/healthcare-market-research/egypt` |
| Kuwait | `healthcare market research kuwait` | (track) | — | — | `/healthcare-market-research/kuwait`, `/market-research-kuwait` |
| Qatar | `healthcare market research qatar` | (track) | — | — | `/healthcare-market-research/qatar`, `/market-research-qatar` |
| Oman | `pharmaceutical companies in oman` (MR proxy) | 101 | 8 | 5.3 | `/healthcare-market-research/oman`, `/pharmaceutical-companies-oman` |
| Bahrain | `healthcare market research bahrain` | (track) | — | — | `/healthcare-market-research/bahrain`, `/market-research-bahrain` |
| Hub (global) | `healthcare market research` | 200 | 2 | 38.9 | `/healthcare-market-research` |
| Locked long-tail | `healthcare market research agency gcc` | (not in export) | — | — | `/healthcare-market-research-agency-gcc` |

**12-week MR cluster targets:** MENA MR page clicks ≥120; hub pos ≤15; Dubai cluster clicks ≥25; locked long-tails ≥2 appearing in query export.

---

## Priority query baselines

| Query | Impressions | Clicks | CTR | Position | Target URL |
|-------|-------------|--------|-----|----------|------------|
| `cairo hospitals healthcare 2023-2026` | **16,826** | **0** | **0%** | **4.9** | `/blog/healthcare-overview-egypt-market-2026` |
| `pharmaceutical companies in kuwait` | 228 | 5 | 2.19% | 8.58 | `/pharmaceutical-companies-kuwait` |
| `pharmaceutical companies in oman` | 101 | 8 | 7.92% | 5.27 | `/pharmaceutical-companies-oman` |
| `bionixus` | 95 | 45 | 47.37% | 1.01 | `/` |

---

## Google coverage snapshot (2026-06-22)

Trend (Chart.csv): indexed pages grew **65 → 757** (Jun 2026); not-indexed **174 → 178** (stable recently).

| Reason | Pages | Action |
|--------|------:|--------|
| Crawled - currently not indexed | 50 | Enrich thin pages; IndexNow + internal links |
| Discovered - currently not indexed | 27 | Request indexing; sitemap + IndexNow |
| Not found (404) | 15 | Fix or 301 in `vercel.json` / routes |
| Page with redirect | 31 | Remove from sitemap sources if alias |
| Blocked by robots.txt | 33 | Expected `/api/` — verify not BOFU paths |
| Excluded by noindex | 7 | Audit CMS + `blog-robots.ts` |
| Server error (5xx) | 1 | Monitor post SSR fix; run `verify:ssr-bundle` |
| Soft 404 | 4 | Expand content or consolidate |

**Bing:** Submit sitemap in Bing Webmaster Tools; run `npm run indexnow:batch` after deploys. SSR 500 outage (Jun 2026) likely caused bulk Bing crawl failures — recovery via IndexNow + recrawl.

---

## Weekly recording table

| Week ending | MENA clicks (7d) | MENA impr (7d) | MENA CTR | Cairo query clicks | Cairo query impr | Notes |
|-------------|------------------|-----------------|---------|-------------------|------------------|-------|
| 2026-06-16 | (3mo) 304 | (3mo) 18,267 | 1.66% | 0 | 15,829 | Baseline |
| 2026-06-22 | (3mo) **359** | (3mo) **21,420** | 1.68% | **0** | **16,826** | Performance export; site 7d = 150 clicks |
| 2026-06-23 | — | — | — | — | — | Global Country MR sprint deployed; review A/B 2026-07-06 |

---

## Commands

```bash
# After deploy or SEO edits
npm run indexnow:priority    # top 20 MENA BOFU URLs
npm run indexnow:batch       # full sitemap (617 URLs)
npm run indexnow:matrix      # industry matrix waves
npm run verify:pharma-bofu-seo
npm run verify:ssr-bundle
```

Manual: GSC → URL Inspection → Request indexing on pages changed in the current sprint (see `scripts/gsc-priority-recrawl.txt`).
