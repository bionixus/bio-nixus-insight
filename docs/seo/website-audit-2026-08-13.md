# Website SEO audit — 2026-08-13

**Branch:** `cursor/website-content-and-ranking-ce89`  
**Production crawl (pre-deploy baseline):** `node scripts/audit-thin-pages-bio450.mjs` against https://www.bionixus.com  
**Recorded:** 2026-08-13 (cron automation)

## Executive summary

| Metric | Value | vs 2026-08-12 |
|--------|-------|----------------|
| URLs audited | 503 | — |
| Live pages | 503 | — |
| Thin pages (<2,000 words) | **250** | −18 |
| 404 errors | **0** | — |
| Fetch errors | **0** | — |
| HMR therapy/country thin | 27 | −6 |

**SSR health:** No 404s or fetch failures. Money pages (`/gcc-medical-devices-market-report` 2,686w, `/japan-medical-devices-market-report` 3,335w, `/iqvia-alternative` 4,002w) remain above threshold.

## GSC highlights (current-week export in `data/gsc/current-week/Pages.csv`)

| Page / query cluster | Impressions | CTR | Position | Action this run |
|----------------------|-------------|-----|----------|-----------------|
| `pharmaceutical-companies-egypt` | 2,707 | 2.03% | 5.77 | Winning — maintain |
| `gcc-medical-devices-market-report` | 3,241 | 0% | 54.07 | Content OK; CTR override exists — monitor |
| `japan-medical-devices-market-report` | 3,376 | 0.03% | 46.94 | Content OK; CTR override exists — monitor |
| `insights/top-market-research-companies-italy-2026` | 977 | 0% | 40.66 | CTR override added |
| `italy-portable-diagnostic-devices-market` | 971 | 0% | 51.9 | Major content expansion |
| `gcc-generic-pharmaceuticals-market` | 718 | 0% | 60.62 | Major content expansion |
| `iqvia-alternative` | 402 | 0.25% | 8.54 | Already 4,002w — CTR title exists |
| `china-medical-devices-market-report` | 1,575 | 0.25% | 18.24 | CTR override exists |
| `gcc-market-access-guide` | 598 | 0.67% | 41.46 | FAQ expansion + CTR override exists |

## Fixes applied (this run)

### P1 — Ultra-thin high-impression pages

| URL | Before | Fix |
|-----|--------|-----|
| `/italy-portable-diagnostic-devices-market` | 572w | Expanded intro, market structure, signal grid, 7 FAQs |
| `/italy-medical-device-connectivity-market` | 560w | Expanded intro, market structure, signal grid, 7 FAQs |
| `/gcc-generic-pharmaceuticals-market` | 869w | Expanded intro, market structure, 5 FAQs |

### P2 — Near-threshold quick wins (gap ≤100)

| URL | Before | Fix |
|-----|--------|-----|
| `/spain-medtech-market-research` | 1,998w | Extra AEMPS/regional procurement FAQ |
| `/denmark-medtech-market-research` | 1,996w | Extra Amgros/regional FAQ |
| `/malaysia-medtech-market-research` | 1,987w | Extra MDA FAQ |
| `/poland-medtech-market-research` | 1,969w | Extra NFZ FAQ |
| `/healthcare-market-research-italy` | 1,947w | AIFA CTS/CPR FAQ |
| `/healthcare-market-research-china` | 1,903w | NRDL/VBP FAQ |
| `/pharmaceutical-market-research-qatar` | 1,907w | National Health Strategy FAQ |
| `/pharmaceutical-companies-iran` | 1,871w | 2 distributor/sanctions FAQs |
| `/gcc-market-access-guide` | 1,927w | 4 additional FAQ entries |
| `/bionixus-vs-iqvia-mena` | 1,914w | FAQ section + CTR meta refresh |

### P2 — Therapy hub pages (still below threshold on prod)

Added expanded FAQs in `therapyExpandedPageContent.ts` for cardiovascular, neurology-cns, digital-health, biosimilars.

### P2 — CTR / LLM visibility

New CTR overrides in `src/server/ctr-seo-overrides.js`:

- `/insights/top-market-research-companies-italy-2026`
- `/italy-portable-diagnostic-devices-market`
- `/italy-medical-device-connectivity-market`
- `/gcc-generic-pharmaceuticals-market`
- `/bionixus-vs-iqvia-mena`
- `/bionixus-market-research-middle-east`

## Remaining backlog

1. **~230 pages** still below 2,000 words after near-threshold fixes (post-deploy re-audit required)
2. **Insights listicles** excluded from thin-page audit script — run separate crawl for `/insights/*`
3. **High-impression 0% CTR** on `/gcc-medical-devices-market-report` and `/japan-medical-devices-market-report` — content sufficient; focus on SERP title/snippet iteration and IndexNow
4. Fresh GSC export week ending 2026-08-18

## Post-deploy checklist

- [ ] Deploy branch to production
- [ ] Re-run `node scripts/audit-thin-pages-bio450.mjs` — confirm thin count drops (target: <230)
- [ ] `npm run indexnow:priority` for changed URLs
- [ ] URL Inspection for top 10 changed URLs below

### Priority re-index URLs

1. `/italy-portable-diagnostic-devices-market`
2. `/italy-medical-device-connectivity-market`
3. `/gcc-generic-pharmaceuticals-market`
4. `/spain-medtech-market-research`
5. `/denmark-medtech-market-research`
6. `/insights/top-market-research-companies-italy-2026`
7. `/gcc-market-access-guide`
8. `/bionixus-vs-iqvia-mena`
9. `/healthcare-market-research/therapy/biosimilars`
10. `/healthcare-market-research/therapy/neurology-cns`
