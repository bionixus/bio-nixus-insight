# GCC Keyword Gap Measurement Loop (30/60/90)

Date: 2026-03-17  
Scope: Keywords and URLs defined in:
- `docs/seo/gcc-keyword-gap-universe.csv`
- `docs/seo/gcc-keyword-gap-scored.csv`
- `docs/seo/gcc-keyword-url-mapping.csv`
- `docs/seo/gcc-keyword-action-plan.md`

## KPI Framework

### Primary SEO KPIs
- Impressions (target keywords)
- Clicks (target keywords)
- CTR (query + page level)
- Average position (query + page level)
- Ranking distribution:
  - Top 3
  - Positions 4-10
  - Positions 11-20

### Business KPIs
- Organic sessions to target URLs
- Form submissions from target URLs (`requestType`, `formVariant`, `sourcePage`)
- Qualified conversion rate (organic form submissions / organic sessions)

### Supporting KPIs
- Indexed page count for new URLs
- Internal links to each target URL
- Referring domains to pillar pages

## Data Sources
- Google Search Console (query + page performance)
- GA4 (organic session + conversion attribution)
- Existing form payload fields (`sourcePage`, `sourceUrl`, UTM fields)

## Query Groups to Track

1. **BOFU agency**
   - `healthcare market research agency gcc`
   - `pharma market research company saudi arabia`
   - `pharma market research company uae`
2. **Market access country**
   - `market access research uae`
   - `market access research kuwait`
   - `market access research qatar`
3. **Fieldwork**
   - `healthcare fieldwork middle east`
   - `healthcare fieldwork gcc`
4. **RWE/HEOR**
   - `real world evidence gcc`
   - `heor consulting saudi arabia`
   - `budget impact model saudi arabia`
5. **Therapy + geo**
   - `oncology market research saudi arabia`
   - `diabetes market research uae`

## 30/60/90 Cadence

### Day 0-30
- Publish first wave pages from top 25 backlog.
- Refresh high-intent existing pages.
- Add internal anchors from:
  - `/healthcare-market-research`
  - `/bionixus-market-research-middle-east`
  - `/gcc-market-access-guide`
  - `/quantitative-healthcare-market-research`
- Build baseline report:
  - query impressions/clicks/CTR/position
  - organic sessions and conversions for all target URLs

### Day 31-60
- Review early winners and laggards:
  - Winners: impressions growth > 25% and avg position improving.
  - Laggards: impressions present but CTR < 1.2% or avg position > 20.
- For laggards:
  - test title/meta variants,
  - strengthen opening 120 words with exact intent phrasing,
  - add 2-3 contextual internal links from high-authority pages.
- Publish second wave of missing P1 pages.

### Day 61-90
- Consolidate cannibalizing pages (one primary keyword per URL).
- Add FAQ and proof sections to high-impression low-CTR pages.
- Expand link equity to pages still outside top 10.
- Produce 90-day review:
  - keyword movers into top 10
  - conversion impact by query group
  - next-quarter keep/cut/scale recommendations

## Reporting Template (Weekly)

For each tracked URL:
- Primary keyword
- Impressions (WoW)
- Clicks (WoW)
- CTR (WoW)
- Avg position (WoW)
- Organic sessions (WoW)
- Organic form submissions (WoW)
- Action taken this week
- Planned action next week

## Guardrails
- Keep canonical URLs stable during testing.
- Do not append UTM query parameters to internal links.
- Keep one dominant keyword target per URL to avoid cannibalization.
- Measure changes in 14-day windows before major title/meta revisions.

