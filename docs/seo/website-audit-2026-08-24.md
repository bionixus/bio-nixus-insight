# BioNixus Website SEO Audit — 2026-08-24

## Executive summary

| Metric | Production (pre-deploy) | Target | Status |
|--------|-------------------------|--------|--------|
| Impressions/day | ~4,448 | 15,000 | ▼ 70% below target |
| CTR | 0.75% | 3.0% | ▼ 75% below target |
| Avg position | 25.8 | 5.0 | ▼ deep SERP |
| Thin pages (<2,000 words) | 250 / 502 | 0 | In progress |
| 404 errors (sitemap URLs) | 0 | 0 | ✅ |
| Crawl errors | 0 | 0 | ✅ |
| MAJOR SEO issues | 4 | 0 | Fixed in this sprint |

## Priority zero fix: localized blog SSR

**Issue:** `/de/blog/*`, `/fr/blog/*`, `/es/blog/*`, `/pt/blog/*`, `/ru/blog/*`, `/zh/blog/*` returned generic SSR shells with **no H1 and no article body** in view-source. Google and LLM crawlers could not read German/French content without executing JavaScript.

**Fix:** Unified locale blog post handling in `src/data/fetchRouteData.ts` so all localized blog routes receive `blog-post` initial data (same as `/blog/:slug` and `/ar/blog/:slug`).

**Verified locally:** `/de/blog/gesundheitsmarkt-deutschland-2026` now SSR-renders H1 + 3,264 words in `<main>`.

## Production crawl (2026-08-24)

```
Total audited: 502 service/landing URLs
Thin pages:    250 (49.8%)
404 / errors:  0
```

### Near-threshold wins (this sprint)

| URL | Before | After (local SSR) |
|-----|--------|-------------------|
| `/brazil-medtech-market-research` | 1,999 | 2,043 ✅ |
| `/switzerland-medtech-market-research` | 1,998 | 2,043 ✅ |
| `/bionixus-vs-iqvia-mena` | 1,914 | 2,031 ✅ |
| `/gcc-market-access-guide` | 1,935 | 2,016 ✅ |
| `/pharmaceutical-companies-iran` | 1,911 | 2,005 ✅ |
| `/de/blog/gesundheitsmarkt-deutschland-2026` | ~0 (no SSR) | 3,264 ✅ |

### Remaining thin clusters (next sprint)

- `services/*` subpages and `/services` hub (~153-word gap on hub)
- Segment market pages (`/segment-market/*`) — largest batch (~180 URLs)
- Therapy pages: `digital-health`, `neurology-cns`, `cardiovascular`, `biosimilars`
- Country healthcare reports under 2,000 words

## GSC / CTR diagnostics (week ending 2026-08-19)

| Slice | CTR | Action |
|-------|-----|--------|
| Site average | 0.75% | Title/meta CTR sprint |
| USA only | 0.09% | Biggest drag — 33% of impressions |
| Mobile | 2.23% | Strong; protect mobile UX |
| Desktop | 0.50% | Title tests + depth on high-impr URLs |
| `/pharmaceutical-companies-*` cluster | 1.60% | **Winning formula** — replicate |
| Page-1 queries @ 0% CTR | 20+ | New CTR overrides added |

### Page-1 queries with 0% CTR (priority title tests)

| Query | Pos | Impr | Landing page |
|-------|-----|------|--------------|
| iqvia competitors | 6.3 | 36 | `/iqvia-alternative` |
| pharmaceutical companies in dubai | 8.9 | 35 | `/pharmaceutical-companies-uae` |
| nupco tender | 7.6 | 19 | `/blog/nupco-saudi-arabia-tendering-guide` |
| gcc biologics market | 6.0 | 20 | `/gcc-pharmaceutical-market-research` |
| cairo hospitals healthcare 2023-2026 | 1.9 | 152 | Egypt blog (CTR override live) |

## LLM / AEO improvements (this sprint)

1. **FAQPage JSON-LD** on `/bionixus-vs-iqvia-mena` static HTML + visible `<details>` FAQ block
2. **`<main>` semantic wrapper** on iqvia comparison page for crawler word-count accuracy
3. **Expanded therapy FAQs** (`digital-health`, `neurology-cns`, `cardiovascular`, `biosimilars`) for chat-extractable Q&A
4. **Services hub FAQs** — IQVIA alternative positioning + LLM-ready deliverable formats
5. **GCC market access guide** — 3 additional committee/tender FAQs

## Sitewide SEO audit (1,113 URLs)

| Severity | Count |
|----------|-------|
| PASS | 1,088 |
| MINOR | 21 |
| MAJOR | 4 → **0 after deploy** |

MAJOR issues were missing H1 on localized German/French blog routes — resolved by SSR fix above.

## Post-deploy checklist

1. `npm run indexnow:priority` after deploy propagates
2. Re-run `node scripts/audit-thin-pages-bio450.mjs` — target **<240** thin pages
3. GSC URL inspection: `/de/blog/gesundheitsmarkt-deutschland-2026`, `/bionixus-vs-iqvia-mena`
4. Monitor page-1 CTR for `iqvia competitors` and `pharmaceutical companies dubai` (14-day window)
5. Fresh GSC export week ending **2026-08-31**

## Files changed

- `src/data/fetchRouteData.ts` — locale blog SSR
- `src/data/developedMarketMedtechPages.ts` — near-threshold MedTech FAQs
- `src/data/seo/therapyExpandedPageContent.ts` — therapy FAQ depth
- `src/data/servicesHubContent.ts` — services hub FAQs
- `src/pages/IranPharmaCompanies.tsx`, `IraqPharmaCompanies.tsx` — country FAQ depth
- `src/pages/GccMarketAccessGuide.tsx` — access FAQs
- `lib/ctr-seo-overrides.mjs`, `src/server/ctr-seo-overrides.js` — CTR overrides
- `public/conf/bionixus-vs-iqvia-mena.html` — FAQ + main + schema
- `docs/seo/website-audit-2026-08-24.md` — this report
