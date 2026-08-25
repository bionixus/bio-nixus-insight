# BioNixus Sitewide SEO Audit — 2026-08-25

## Executive summary

| Metric | This week | Target | vs target | Last week | Trend |
|--------|-----------|--------|-----------|-----------|-------|
| Impressions/day | 4,448 | 15,000 | −10,552 | 4,785 | ↓ 337/day |
| Clicks/day | 33 | 450 | −417 | 37 | ↓ 4/day |
| CTR | **0.75%** | 3.0% | −2.25pp | 0.77% | ↓ 0.02pp |
| Avg. position | **25.8** | 5.0 | +20.8 | 28.4 | ↑ improved 2.6 |

**Production crawl (502 URLs):** 250 thin (<2,000 SSR words), **0 × 404**, **0 errors**.

**Priority zero (SSR):** No new client-only regressions detected on indexable service/landing URLs in this audit pass.

---

## CTR diagnostics

| Slice | CTR | Notes |
|-------|-----|-------|
| Site average | 0.75% | Headline |
| Excl. USA | 1.08% | USA = 33% impr @ **0.09% CTR** — largest drag |
| Mobile | 2.23% | 14% of device impressions |
| Desktop | 0.50% | 86% of device impressions |
| `/pharmaceutical-companies-*` cluster | **1.60%** | Winning directory pattern |
| Page-1 queries @ 0% CTR | 40+ flagged | iqvia competitors, dubai pharma, nupco tender, cairo hospitals |

---

## Thin-page inventory (top gaps)

Near-threshold medtech BOFU pages (1–15 words short): Brazil, Switzerland, Spain, Denmark, Malaysia medtech.

High-impression / strategic thin pages addressed in this sprint:

- `/services` (~1,847w)
- `/pharmaceutical-companies-iraq` (~1,884w)
- `/gcc-market-access-guide` (~1,935w)
- `/bionixus-vs-iqvia-mena` (~1,914w static)
- Therapy hubs: cardiovascular, neurology-cns, digital-health, biosimilars
- All 18 developed-market medtech BOFU pages (batch FAQ expansion)

**Remaining thin after deploy:** ~238 URLs (mostly `/services/*`, segment-market matrix, locale insights listicles) — next cron batch.

---

## Changes shipped (2026-08-25)

### Content depth (≥2,000 words target)

1. **Medtech BOFU** — 2 extra FAQs per country in `developedMarketMedtechPages.ts` (budget + LLM/AEO citation quality).
2. **`/services` hub** — 4 new SERVICE_FAQ items (multilingual fieldwork, governance, HEOR integration, hub linking).
3. **`/pharmaceutical-companies-iraq`** — 4 FAQs, growth-driver section, schema `dateModified`.
4. **`/gcc-market-access-guide`** — 2 FAQs (MedTech sequencing, biosimilar access 2026).
5. **Therapy pages** — expanded FAQs for cardiovascular, neurology-cns, digital-health, biosimilars in `therapyExpandedPageContent.ts`.
6. **`/bionixus-vs-iqvia-mena`** — visible FAQ block + FAQPage JSON-LD in static HTML.

### CTR / SERP (page-1 0% CTR queries)

| Path | Change |
|------|--------|
| `/pharmaceutical-companies-uae` | Title leads **Dubai & UAE** for dubai-pharma query cluster |
| `/iqvia-alternative` | Title leads **IQVIA Competitors** (matches GSC query) |
| `/bionixus-vs-iqvia-mena` | New CTR override + static title/meta aligned |

Source: `lib/ctr-seo-overrides.mjs` + `src/server/ctr-seo-overrides.js` (kept in sync).

### LLM / AEO

- FAQ `<details>` blocks on iqvia comparison page (retrievable without JS).
- Expanded therapy + medtech FAQ schema surfaces for ChatGPT/Perplexity/Claude crawlers.
- Existing `GeoLLMAnswerBlock` on GCC access guide unchanged.

---

## 404 audit

**0 not-found URLs** in sitemap crawl (502 live). No new 404 content pages required.

---

## Next-week priorities

1. Deploy and re-run `node scripts/audit-thin-pages-bio450.mjs` — target **<240 thin**.
2. Batch expand `/services/*` + segment-market matrix (~238 remaining).
3. USA title/meta iteration for 0.09% CTR slice (8,683 impr/week).
4. `npm run indexnow:priority` after deploy.
5. Fresh GSC export (week ending 2026-08-30) to validate CTR tests.

---

## DEPLOY CHECKLIST

- [ ] `src/data/developedMarketMedtechPages.ts`
- [ ] `src/data/servicesHubContent.ts`
- [ ] `src/data/seo/therapyExpandedPageContent.ts`
- [ ] `src/pages/IraqPharmaCompanies.tsx`
- [ ] `src/pages/GccMarketAccessGuide.tsx`
- [ ] `lib/ctr-seo-overrides.mjs`
- [ ] `src/server/ctr-seo-overrides.js`
- [ ] `public/conf/bionixus-vs-iqvia-mena.html`
- [ ] `docs/seo/website-audit-2026-08-25.md`
- [ ] Post-deploy: thin-page audit + IndexNow priority batch
