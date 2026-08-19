# Website SEO audit — 2026-08-19

**Branch:** `cursor/website-content-and-ranking-44a5`  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-08-19T04:01Z (pre-deploy baseline)  
**GSC export:** `data/gsc/current-week/` (Aug 3–9 window)

## Executive summary

| Metric | Current (7d) | Target | Gap |
|--------|--------------|--------|-----|
| Impressions/day | **4,785** | 15,000 | −68% |
| Clicks/day | **37** | 450 | −92% |
| CTR | **0.77%** | 3.0% | −2.23pp |
| Avg position | **28.4** | 5.0 | +23.4 |

**Site health:** 502 URLs audited, **0 errors**, **0 404s**, **249 thin pages** (<2,000 words).

**Winning cluster:** `/pharmaceutical-companies-{country}` — positions 5–10, healthy CTR (Egypt 2.03%, Oman 2.5%, Iran 2.24%).

**High-impression underperformers (GSC):**

| URL | Impressions (7d) | CTR | Pos | Action this sprint |
|-----|------------------|-----|-----|-------------------|
| `/japan-medical-devices-market-report` | 3,376 | 0.03% | 46.9 | Already expanded (3,942w prod); monitor CTR post-deploy |
| `/gcc-market-access-guide` | 598 | 0.67% | 41.5 | +MedTech access section + 2 FAQs |
| `/china-medical-devices-market-report` | 1,575 | 0.25% | 18.2 | Prior sprint expansion; IndexNow |
| `/brazil-healthcare-market-report` | 826 | 0.24% | 34.8 | Backlog |
| `/bionixus-vs-iqvia-mena` | 131 | 0% | 7.2 | +GeoLLM block + FAQ + CTR override |
| `/iqvia-alternative` | 402 | 0.25% | 8.5 | Existing conf page; cross-link maintained |

**Money queries (page-1, CTR <1.5%):** `iqvia competitors` (pos 6.1), `companies like iqvia` (pos 9.8), `pharmaceutical companies in uae` (pos 7.0), `gcc generic injectables market` (pos 7.3), `best services for pharmaceutical market access besides iqvia` (pos 7.1).

## Production crawl — thin pages & errors

| Status | Count |
|--------|-------|
| Live pages | 502 |
| Thin (<2,000w) | **249** |
| 404 | **0** |
| HTTP errors | **0** |
| Near-threshold (gap ≤100) | **18** |

### Near-threshold pages expanded this run

| Path | Pre words | Gap | Change |
|------|-----------|-----|--------|
| `/spain-medtech-market-research` | 1,998 | 2 | +1 AEMPS/NG-EU FAQ |
| `/denmark-medtech-market-research` | 1,996 | 4 | +1 Nordic procurement FAQ |
| `/malaysia-medtech-market-research` | 1,987 | 13 | +1 ASEAN hub FAQ |
| `/poland-medtech-market-research` | 1,969 | 31 | +2 AOTMiT/public–private FAQs |
| `/gcc-market-access-guide` | 1,927 | 73 | +MedTech access section + 2 FAQs |
| `/bionixus-vs-iqvia-mena` | 1,914 | 86 | +GeoLLM block + 6 FAQs + FAQPage schema |
| `/brazil-pharmaceutical-market-research` | 1,973 | 27 | +1 SUS/ANS segmentation FAQ |
| `/healthcare-market-research-italy` | 1,947 | 53 | +1 AIFA 648/96 FAQ |
| `/healthcare-market-research/therapy/neurology-cns` | 1,768 | 232 | +3 FAQs + reference paragraph |
| `/healthcare-market-research/therapy/digital-health` | 1,822 | 178 | +3 FAQs + reference paragraph |

### Remaining thin backlog

**~239** service/landing URLs still below 2,000 words after this sprint. Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` — prioritize GCC segment tails, Italy/Japan specialty device pages, and locale insights listicles.

## LLM / chat appearance

- `/bionixus-vs-iqvia-mena`: added `#quick-answer` GeoLLM citation block + FAQPage JSON-LD for AI crawlers
- Therapy neurology-cns and digital-health: expanded reference guide + FAQ merge for AEO depth
- CTR overrides synced for `/bionixus-vs-iqvia-mena` in `src/server/ctr-seo-overrides.js` and `lib/ctr-seo-overrides.mjs`

## Post-deploy checklist

- [ ] Deploy branch and re-run `node scripts/audit-thin-pages-bio450.mjs` — target thin count **<240**
- [ ] `npm run indexnow:priority` for GSC priority URLs
- [ ] GSC URL Inspection on `/bionixus-vs-iqvia-mena`, `/gcc-market-access-guide`, near-threshold medtech pages
- [ ] Add `data/gsc/previous-week/` export next Monday for week-over-week reporting

## Files changed

- `src/data/developedMarketMedtechPages.ts`
- `src/data/seo/therapyExpandedPageContent.ts`
- `src/data/seo/therapyMarketReferenceContent.ts`
- `src/pages/GccMarketAccessGuide.tsx`
- `src/pages/BrazilPharmaceuticalMarketResearch.tsx`
- `src/pages/HealthcareMarketResearchItaly.tsx`
- `public/conf/bionixus-vs-iqvia-mena.html`
- `src/server/ctr-seo-overrides.js`
- `lib/ctr-seo-overrides.mjs`
- `docs/seo/website-audit-2026-08-19.md`
