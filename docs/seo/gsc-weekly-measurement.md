# GSC weekly measurement — baseline & routine

**Baseline export:** `bionixus.com-Performance-on-Search-2026-06-16.zip` (Web, last 3 months)  
**Recorded:** 2026-06-16

## Daily chart interpretation (do not panic on last 2 days)

| Period | Clicks | Impressions | Note |
|--------|--------|-------------|------|
| Jun 9–10 (peak) | 83 | 6,916 | Best 2-day window |
| Jun 11–12 | 43 | 6,441 | Normal weekday softening |
| Jun 13–14 | 28 | 4,176 | **Sat–Sun + GSC 48–72h lag** |
| Last 7d vs prior 7d | **180** vs 161 | **20,321** vs 17,511 | **Week-over-week up** |

Jun 14 average position **30.8** (vs ~20–23 prior days) suggests incomplete/processing data, not a ranking collapse.

**Action:** Re-export on **Jun 18–19** and compare Jun 13–14 revisions before reacting.

## Country segmentation (3-month `Countries.csv`)

| Country | Clicks | Impressions | CTR |
|---------|--------|-------------|-----|
| Egypt | 122 | 2,962 | 4.1% |
| India | 121 | 10,979 | 1.1% |
| UAE | 94 | 5,426 | 1.7% |
| UK | 47 | 6,375 | 0.7% |
| Kuwait | 47 | 2,508 | 1.9% |
| Saudi Arabia | 41 | 7,371 | 0.6% |
| United States | 27 | **49,163** | **0.05%** |

Low-intent US/India impression volume inflates totals. Track **MENA money geos** (Egypt, Kuwait, UAE, KSA) separately from site-wide impressions.

## Priority query baselines

| Query | Impressions | Clicks | CTR | Position | Target URL |
|-------|-------------|--------|-----|----------|------------|
| `cairo hospitals healthcare 2023-2026` | 15,829 | 0 | 0% | 4.81 | `/blog/healthcare-overview-egypt-market-2026` |
| `pharmaceutical companies in oman` | 89 | 7 | 7.87% | 5.55 | `/pharmaceutical-companies-oman` |
| `pharmaceutical companies in kuwait` | 213 | 5 | 2.35% | 8.94 | `/pharmaceutical-companies-kuwait` |
| `bionixus` (branded) | 86 | 40 | 46.5% | 1.01 | `/` |

## Weekly export checklist (every Monday)

1. GSC → Performance → **Last 7 days** + **Last 3 months** (Web)
2. Export **Chart**, **Queries**, **Pages**, **Countries**
3. Save as `bionixus.com-Performance-on-Search-YYYY-MM-DD.zip` in `docs/seo/exports/` (create folder if missing)
4. Record in this file (table below):

| Week ending | Site clicks (7d) | Site impr (7d) | Cairo query clicks | Cairo query impr | Kuwait query pos | Oman query pos | Notes |
|-------------|------------------|----------------|--------------------|------------------|------------------|----------------|-------|
| 2026-06-16 | 180 (from chart) | 20,321 | 0 (3mo) | 15,829 | 8.94 | 5.55 | Baseline; Jun 13–14 likely incomplete |

5. Filter Performance by **Egypt, Kuwait, UAE, Saudi Arabia** — if MENA holds while US/India dip, site-wide drop is noise.
6. URL Inspection on top 3 pages after any title/meta change → Request indexing.
7. Run `npm run verify:pharma-bofu-seo` after BOFU page edits.

## Live SERP audit (2026-06-16)

| Check | Result |
|-------|--------|
| `/blog/healthcare-overview-egypt-market-2026` `<title>` | OK — matches `Cairo Hospitals Healthcare 2023–2026` override |
| Meta description | Fixed — was double-encoding `&` as `&amp;amp;`; now uses "and" |
| Visible H1 | CMS title — Cairo query block adds matching **H2** above fold |
| `cairo` in first screen | Added via `EgyptHealthcare2026CairoBlock` component |

**Manual:** Request indexing in GSC after deploy. Re-export chart Jun 18–19.


- Weekday clicks ≥ **25/day** (chart baseline)
- `cairo hospitals healthcare 2023-2026`: **CTR > 0%**, clicks > 0
- Country BOFU pages: position ≤ **10**, CTR ≥ **2%** on Kuwait/Oman
- Site clicks ↑ even if raw impressions ↓ (healthier query mix)
