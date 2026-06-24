# Media rollout measurement baseline

Track weekly for 4–6 weeks after each phase. Baseline date: **2026-03-18**.

## Phase 1 pages

- `/` (homepage)
- `/market-research`
- `/healthcare-market-research-agency-gcc`
- `/real-world-evidence-gcc`
- `/contact`

## Metrics to log

### Search (Google Search Console)

| Week | Page | Impressions | Clicks | CTR | Avg position |
|------|------|-------------|--------|-----|--------------|
| W0 baseline | | | | | |
| W1 | | | | | |
| W2 | | | | | |
| W3 | | | | | |
| W4 | | | | | |

### Engagement (GA4 or equivalent)

| Week | Page | Avg engagement time | Scroll depth (90%) | CTA click rate | Form starts |
|------|------|---------------------|--------------------|----------------|-------------|
| W0 baseline | | | | | |
| W1 | | | | | |

### Core Web Vitals (GSC + PageSpeed)

| Week | Page | LCP | CLS | INP | Notes |
|------|------|-----|-----|-----|-------|
| W0 baseline | | | | | |
| W1 | | | | | |

## Success criteria

- Engagement time and CTA click rate increase on Phase 1 pages.
- No CWV regression (LCP within +200ms of baseline; CLS ≤ 0.1).
- Organic impressions stable or improving after 4 weeks.

## Phase 2 pages (after Phase 1 review)

- `/case-studies`
- `/case-studies/*`
- Remaining `StrategicServicePage` routes

## Review cadence

- **Weekly:** export GSC + GA4 for Phase 1 URLs.
- **Week 4:** decide Phase 2 expansion vs. asset swaps based on engagement deltas.
