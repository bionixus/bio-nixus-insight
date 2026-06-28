# GSC weekly measurement — baseline & routine

**Baseline export:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (Web, last 3 months)  
**Recorded:** 2026-06-22

## Daily chart interpretation (do not panic on last 2 days)

| Period | Clicks | Impressions | Note |
|--------|--------|-------------|------|
| Jun 9–10 (peak) | 83 | 6,916 | Best 2-day window |
| Jun 14–20 (last 7d) | **150** | **20,684** | Jun 14 pos 30.8 — likely incomplete |
| Jun 17 (best day) | **39** | 3,615 | Strongest single day in window |
| 3-month MENA (4 geos) | **359** | **21,420** | +55 clicks vs Jun 16 baseline |

Jun 14 average position **30.8** (vs ~20–23 prior days) suggests incomplete/processing data, not a ranking collapse.

**Action:** Re-export on **Jun 18–19** and compare Jun 13–14 revisions before reacting.

## Country segmentation (3-month `Countries.csv`)

| Country | Clicks | Impressions | CTR |
|---------|--------|-------------|-----|
| Egypt | 144 | 3,464 | 4.16% |
| India | 138 | 13,232 | 1.04% |
| UAE | 113 | 6,646 | 1.70% |
| Kuwait | 55 | 2,671 | 2.06% |
| UK | 52 | 6,853 | 0.76% |
| Saudi Arabia | 47 | 8,639 | 0.54% |
| United States | 33 | **55,520** | **0.06%** |

Low-intent India impression volume inflates totals. Track **`Global excl India`** (primary recovery view), **MENA money geos** (Egypt, Kuwait, UAE, KSA), and US/EU/APAC separately.

**CTR recovery deploy (2026-06-28):** After deploy, request GSC re-index for:
- `/blog/healthcare-overview-egypt-market-2026`
- `/blog/healthcare-overview-kuwait-market-2026`
- `/gcc-pharmaceutical-market-research`
- `/gcc-medical-devices-market-report`
- `/gcc-pharma-market-report-2026`
- `/healthcare-market-research`
- `/services/market-access`
- `/healthcare-market-research/saudi-arabia`
- `/healthcare-market-research/uae`
- `/usa-healthcare-market-report`, `/uk-healthcare-market-report`, `/canada-healthcare-market-report`

**MENA dashboard:** See [gsc-mena-dashboard.md](./gsc-mena-dashboard.md) for saved GSC views, 2x targets, and coverage export (2026-06-22).  
**Biweekly iteration log:** [biweekly-iteration-log-2026-06-22.md](./biweekly-iteration-log-2026-06-22.md)  
**Bing recovery:** [bing-recovery-checklist.md](./bing-recovery-checklist.md)

## Priority query baselines

| Query | Impressions | Clicks | CTR | Position | Target URL |
|-------|-------------|--------|-----|----------|------------|
| `cairo hospitals healthcare 2023-2026` | **16,826** | **0** | **0%** | **4.9** | `/blog/healthcare-overview-egypt-market-2026` |
| `pharmaceutical companies in kuwait` | 228 | 5 | 2.19% | 8.58 | `/pharmaceutical-companies-kuwait` |
| `pharmaceutical companies in oman` | 101 | 8 | 7.92% | 5.27 | `/pharmaceutical-companies-oman` |
| `bionixus` (branded) | 95 | 45 | 47.4% | 1.01 | `/` |

## Weekly export checklist (every Monday)

1. GSC → Performance → **Last 7 days** + **Last 3 months** (Web)
2. Export **Chart**, **Queries**, **Pages**, **Countries**
3. Save as `bionixus.com-Performance-on-Search-YYYY-MM-DD.zip` in `docs/seo/exports/` (create folder if missing)
4. Record in this file (table below):

| Week ending | Site clicks (7d) | Site impr (7d) | Cairo query clicks | Cairo query impr | Kuwait query pos | Oman query pos | Notes |
|-------------|------------------|----------------|--------------------|------------------|------------------|----------------|-------|
| 2026-06-16 | 180 (from chart) | 20,321 | 0 (3mo) | 15,829 | 8.94 | 5.55 | Baseline |
| 2026-06-22 | 150 (7d) | 20,684 | 0 (3mo) | 16,826 | 8.58 | 5.27 | MENA 3mo: 359 clicks (+18%); Cairo still 0% CTR |
| 2026-06-23 | — | — | — | — | — | — | Global Country MR sprint: 7 matrix countries, MENA configs, Dubai cluster |

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
