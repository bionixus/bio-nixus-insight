# BioNixus Website SEO Audit — 2026-08-26

## GSC performance (week ending 2026-08-26)

| Metric | This week | Target | vs Last Week |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | -337 |
| Clicks/day | 33 | 450 | -4 |
| CTR | 0.75% | 3.0% | -0.02pp |
| Avg. position | 25.8 | 5.0 | +2.6 (improved) |

### CTR mix diagnostics

| Slice | CTR | Notes |
|---|---|---|
| Excl. USA | 1.08% | US = 33% impr @ 0.09% CTR (biggest drag) |
| Mobile | 2.23% | 14% of device impressions |
| Desktop | 0.50% | 86% of device impressions |
| /pharmaceutical-companies-* | 1.60% | Winning directory cluster |
| Pages pos >40 (≥200 impr) | 0.10% | Deep-SERP dilution |
| /japan-medical-devices-market-report | 0.08% @ pos 44 | Largest single-page CTR drag |

## Production crawl (thin-page audit)

| Check | Result |
|---|---|
| URLs audited | 502 |
| Thin pages (<2,000 words) | 250 |
| 404 errors | 0 |
| Server errors | 0 |
| Near-threshold (<50 word gap) | 10 |

## Changes shipped this sprint

### Content depth (thin-page remediation)

1. **Medtech near-threshold** — Added market-context paragraphs to Brazil, Switzerland, Spain, Denmark, Malaysia, Poland medtech BOFU pages (`developedMarketMedtechPages.ts`).
2. **GCC market access guide** — Added launch-sequencing section + 3 FAQs (SFDA EES, MedTech vs pharma, country sequencing).
3. **Iran/Iraq pharma directories** — Added 3 FAQs each for therapeutic areas, manufacturing outlook, and access pathways.
4. **Services hub** — Added 4 FAQs (IQVIA comparison, industries, multilingual fieldwork, deliverables).
5. **Therapy hubs** — Expanded dermatology (+4 FAQs) and biosimilars (+2 FAQs) in `therapyExpandedPageContent.ts`.
6. **IQVIA comparison page** — Added visible FAQ section + FAQPage JSON-LD to static HTML (`conf/bionixus-vs-iqvia-mena.html`).

### CTR / LLM ranking

| Path | Change |
|---|---|
| `/pharmaceutical-companies-uae` | Title leads with "Dubai & UAE" for dubai pharma queries |
| `/iqvia-alternative` | Title leads with "IQVIA Competitors" for pos-6 zero-CTR query |
| `/bionixus-vs-iqvia-mena` | New CTR override + static HTML title/meta/FAQ for LLM citation |
| `/pharmaceutical-companies-iran` | CTR override added |
| `/pharmaceutical-companies-iraq` | CTR override added |

## Page-1 queries still at 0% CTR (monitor post-deploy)

- cairo hospitals healthcare 2023-2026 (pos 1.9, 152 impr) — blog override exists
- iqvia competitors (pos 6.3, 36 impr) — title test shipped
- pharmaceutical companies in dubai (pos 8.9, 35 impr) — UAE title updated
- nupco tender (pos 7.6, 19 impr) — blog override exists
- pharma companies in dubai (pos 6.8, 20 impr) — UAE title updated

## Next sprint priorities

1. Post-deploy thin audit — target <240 thin pages
2. USA title/meta iteration (0.09% CTR on 33% of impressions)
3. Batch `/services/*` and segment-market thin URLs (~210 remaining)
4. Japan + GCC device report content depth (pos 40+ drag bucket)
5. `npm run indexnow:priority` after deploy

## DEPLOY CHECKLIST

- `src/data/developedMarketMedtechPages.ts`
- `src/data/seo/therapyExpandedPageContent.ts`
- `src/data/servicesHubContent.ts`
- `src/pages/GccMarketAccessGuide.tsx`
- `src/pages/IranPharmaCompanies.tsx`
- `src/pages/IraqPharmaCompanies.tsx`
- `src/server/ctr-seo-overrides.js`
- `lib/ctr-seo-overrides.mjs`
- `public/conf/bionixus-vs-iqvia-mena.html`
- `docs/seo/website-audit-2026-08-26.md`
- `scripts/data/bio-450-thin-page-audit.json` (audit artifact)
- `reports/weekly-report-2026-08-26.md` (GSC report)
