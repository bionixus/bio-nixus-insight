# Website SEO audit — 2026-08-12

**Branch:** `cursor/website-content-and-ranking-4b84`  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` against https://www.bionixus.com  
**Recorded:** 2026-08-12 (cron automation)

## Executive summary

| Metric | Value | vs 2026-08-11 |
|--------|-------|----------------|
| URLs audited | 503 | +9 |
| Live pages | 503 | — |
| Thin pages (<2,000 words) | **268** | −7 |
| 404 errors | **0** | — |
| Fetch errors | **0** | — |
| HMR therapy/country thin | 33 | — |

**SSR health:** No 404s or fetch failures. High-impression money pages (`/gcc-medical-devices-market-report`, `/japan-medical-devices-market-report`, `/iqvia-alternative`, `/heor-consulting-saudi-arabia`) are above the 2,000-word threshold.

## GSC baseline (Jun 22 export — refresh due week ending 2026-08-18)

| Signal | Value | Action |
|--------|-------|--------|
| Site impressions (7d) | ~20,684 | Target 15,000/day |
| Site CTR | ~0.82% | Target 3% |
| Avg position | ~30 | Target 5 |
| `cairo hospitals healthcare` | 16,826 impr, 0% CTR, pos 4.9 | Title/meta fixed Jun 28 — monitor |
| `gcc-pharmaceutical-market-research` | 3,592 impr, 0% CTR | CTR override added |
| `gcc-medical-devices-market-report` | 6,126 impr, 0.1% CTR | Already 2,334w — CTR override exists |
| `iqvia-alternative` | pos 7.2 | 2,099w — OK |
| `pharmaceutical-companies-*` cluster | pos 6–12 | SSR eager imports verified Aug 11 |

## Issues found & fixes applied (this run)

### P1 — Thin high-traffic report pages missing intelligence blocks

| URL | Before | Fix |
|-----|--------|-----|
| `/uae-healthcare-market-report` | 1,392w | Render `MarketIntelligenceSections` (uae) |
| `/saudi-arabia-medical-devices-market-report` | 1,499w | Render `MarketIntelligenceSections` (saudi-arabia, medical-devices) |
| `/gcc-anesthesia-surgical-market-report` | 1,445w | `GeoLLMAnswerBlock` + `MarketIntelligenceSections` (gcc) |

### P1 — Thin HMR country landing pages

Added `CountryMarketReferenceGuide` (~1,900w SSR) to:

- `/healthcare-market-research-kuwait` (1,468w → target 2,000+)
- `/healthcare-market-research-in-uae` (1,318w)
- `/healthcare-market-research-france` (1,492w)
- `/healthcare-market-research-qatar` (1,420w)
- `/healthcare-market-research-oman` (1,362w)
- `/healthcare-market-research-jordan` (1,355w)

### P2 — Thin therapy hub pages

| URL | Before | Fix |
|-----|--------|-----|
| `/healthcare-market-research/therapy/cardiovascular` | 1,526w | Map `cardiovascular` → cardio tail in `therapyMarketReferenceContent.ts` |
| `/healthcare-market-research/therapy/neurology-cns` | 1,527w | New neurology tail + expanded FAQs |
| `/healthcare-market-research/therapy/digital-health` | 1,529w | New digital-health tail + expanded FAQs |
| `/healthcare-market-research/therapy/dermatology` | 1,511w | New dermatology tail + expanded FAQs |
| `/healthcare-market-research/therapy/biosimilars` | 1,626w | New biosimilars tail + expanded FAQs |

### P2 — CTR / LLM visibility

New CTR overrides in `src/server/ctr-seo-overrides.js`:

- `/gcc-pharmaceutical-market-research`
- `/uae-healthcare-market-report`
- `/saudi-arabia-medical-devices-market-report`
- `/healthcare-market-research-kuwait`
- `/gcc-anesthesia-surgical-market-report`

## Remaining backlog (next cron)

1. **193 pages** still >500 words below threshold — batch via `scripts/generate-bio450-research-briefs.mjs`
2. **17 thin market-report pages** with `MarketIntelligenceSections` already rendered — need supplemental FAQ blocks or country-specific prose
3. **Near-threshold** (gap ≤100): 23 URLs — quick wins on next pass
4. Fresh GSC export (week ending 2026-08-18) — update `docs/seo/gsc-weekly-measurement.md`
5. Post-deploy: `npm run indexnow:priority` for changed URLs

## Post-deploy checklist

- [ ] Deploy branch to production
- [ ] Re-run `node scripts/audit-thin-pages-bio450.mjs` — confirm thin count drops
- [ ] URL Inspection → Request indexing for changed URLs (top 10 below)
- [ ] `npm run indexnow:priority` in production
- [ ] GSC export week ending 2026-08-18

### Priority re-index URLs

1. `/uae-healthcare-market-report`
2. `/saudi-arabia-medical-devices-market-report`
3. `/gcc-anesthesia-surgical-market-report`
4. `/healthcare-market-research-kuwait`
5. `/healthcare-market-research-in-uae`
6. `/healthcare-market-research-france`
7. `/gcc-pharmaceutical-market-research`
8. `/healthcare-market-research/therapy/cardiovascular`
9. `/healthcare-market-research/therapy/dermatology`
10. `/healthcare-market-research/therapy/biosimilars`
