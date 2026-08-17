# Website SEO audit — 2026-08-17

**Branch:** `cursor/website-content-and-ranking-a51a`  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` against https://www.bionixus.com  
**Recorded:** 2026-08-17 (cron automation)

## Executive summary

| Metric | Value | vs 2026-08-12 |
|--------|-------|----------------|
| URLs audited | 503 | — |
| Live pages | 503 | — |
| Thin pages (<2,000 words) | **250** | −18 |
| 404 errors | **0** | — |
| Fetch errors | **0** | — |
| HMR therapy/country thin | 27 | −6 |

**SSR health:** No 404s or fetch failures. Money pages `/gcc-medical-devices-market-report` and `/japan-medical-devices-market-report` remain above 2,000 words (content OK; position/CTR fixes are metadata and indexing).

## GSC snapshot (current-week export, week ending 2026-08-17)

| Signal | Value | Target | Action |
|--------|-------|--------|--------|
| Impressions/day | ~4,785 | 15,000/day | Expand high-impression clusters; refresh CTR titles |
| Clicks/day | ~37 | 450/day | Fix page-1 0% CTR queries (pharma companies, iqvia competitors) |
| CTR | ~0.77% | 3% | CTR overrides on BOFU + comparison pages |
| Avg position | ~28.4 | 5 | Thin-page expansion + internal links |
| `/japan-medical-devices-market-report` | 3,376 impr, 0.03% CTR, pos 46.9 | — | CTR override exists; re-index post-deploy |
| `/gcc-market-access-guide` | 598 impr, 0.67% CTR, pos 41.5 | — | Content + medtech section expanded |
| `/pharmaceutical-companies-*` cluster | pos 5–10, healthy CTR | — | Maintain; cross-link hubs |

## Issues found & fixes applied (this run)

### P1 — Near-threshold medtech pages (gap ≤31)

Added supplemental FAQs in `src/data/developedMarketMedtechPages.ts`:

| URL | Before | Fix |
|-----|--------|-----|
| `/spain-medtech-market-research` | 1,998w | AEMPS + SNS regional procurement FAQ |
| `/denmark-medtech-market-research` | 1,996w | Medicinrådet / Amgros reimbursement FAQ |
| `/malaysia-medtech-market-research` | 1,987w | MDA + MOH/private channel + ASEAN FAQs |
| `/poland-medtech-market-research` | 1,969w | NFZ reimbursement + segment demand FAQs |

### P1 — Therapy hub pages (still below threshold)

Expanded `THIN_THERAPY_EXPANDED_FAQS` in `src/data/seo/therapyExpandedPageContent.ts`:

- `/healthcare-market-research/therapy/cardiovascular` (+3 FAQs)
- `/healthcare-market-research/therapy/neurology-cns` (+2 FAQs)
- `/healthcare-market-research/therapy/digital-health` (+2 FAQs)
- `/healthcare-market-research/therapy/biosimilars` (+2 FAQs)

### P1 — High-impression thin / near-threshold service pages

| URL | Before | Fix |
|-----|--------|-----|
| `/gcc-market-access-guide` | 1,927w | MedTech access section + 2 FAQs |
| `/bionixus-vs-iqvia-mena` | 1,914w | Static HTML FAQ block + CTR title/meta |
| `/pharmaceutical-companies-iran` | 1,905w | +3 FAQ items, dateModified |
| `/healthcare-market-research-italy` | 1,947w | +2 FAQ items (648/96, regional SSR) |
| `/brazil-pharmaceutical-market-research` | 1,973w | +2 FAQ items (SUS/ANS, LGPD) |

### P2 — CTR / LLM visibility

New CTR override in `src/server/ctr-seo-overrides.js`:

- `/bionixus-vs-iqvia-mena` — title/meta aligned to comparison + IQVIA competitor intent

## Remaining backlog (next cron)

1. **~230 pages** still >100 words below threshold — batch via research briefs
2. **17 near-threshold** URLs (gap 42–97) — Italy country hub, China/Turkey reports, locale listicles
3. Post-deploy thin-page re-audit — target **<230** thin pages
4. `npm run indexnow:priority` in production for changed URLs
5. Upload `data/gsc/previous-week/` export for week-over-week report deltas

## Post-deploy checklist

- [ ] Deploy branch to production
- [ ] Re-run `node scripts/audit-thin-pages-bio450.mjs` — confirm thin count drops
- [ ] URL Inspection → Request indexing for priority URLs below
- [ ] `npm run indexnow:priority` in production

### Priority re-index URLs

1. `/spain-medtech-market-research`
2. `/denmark-medtech-market-research`
3. `/malaysia-medtech-market-research`
4. `/poland-medtech-market-research`
5. `/gcc-market-access-guide`
6. `/bionixus-vs-iqvia-mena`
7. `/pharmaceutical-companies-iran`
8. `/healthcare-market-research-italy`
9. `/brazil-pharmaceutical-market-research`
10. `/healthcare-market-research/therapy/cardiovascular`
