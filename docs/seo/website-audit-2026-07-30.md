# Website SEO Audit — 2026-07-30

**Branch:** `cursor/website-content-and-ranking-72b3`  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` (SITE_AUDIT_BASE_URL=https://www.bionixus.com)

## Executive summary

| Metric | Count | Notes |
|--------|------:|-------|
| URLs audited | 387 | Service/landing pages from sitemap |
| Live pages (200) | 386 | |
| Thin pages (<2000 words) | 186 | Down from 213 (2026-07-03 baseline) |
| 404 pages | 0 | |
| Crawl errors | 1 | `/quantitative-healthcare-market-research` redirect loop — **fixed in this PR** |

## GSC impressions & CTR (export 2026-06-22)

### Top performers (clicks)
| Page | Clicks | Impressions | CTR | Position |
|------|-------:|------------:|----:|---------:|
| pharmaceutical-companies-kuwait | 93 | 6,190 | 1.5% | 7.1 |
| blog/healthcare-overview-egypt-market-2026 | 86 | 25,073 | 0.34% | 5.5 |
| pharmaceutical-companies-oman | 85 | 5,410 | 1.57% | 6.5 |
| pharmaceutical-companies-uae | 71 | 5,443 | 1.3% | 9.0 |

### High-impression, near-zero CTR (P0 fixes this sprint)
| Query / Page | Impressions | CTR | Action |
|--------------|------------:|----:|--------|
| cairo hospitals healthcare 2023-2026 | 16,826 | 0% | Title/meta refresh + Cairo FAQ block (BlogPost) |
| gcc-pharmaceutical-market-research | 3,592 | 0% | Meta title + 2 FAQs (market size, NUPCO tenders) |
| gcc-medical-devices-market-report | 6,126 | 0.1% | Meta title + 2 IVD/prefilled FAQs |
| quantitative-healthcare-market-research | 1,665 | 0.18% | Redirect loop fix |
| healthcare-market-research | 4,045 | 0.27% | Hub — monitor post-deploy |

## Errors fixed

### Redirect loop: `/quantitative-healthcare-market-research`
- **Cause:** Legacy BOFU resolver matched `quantitative` + `healthcare` → `/healthcare-market-research/quantitative`, while `vercel.json` redirects that path back to the standalone guide.
- **Fix:** `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs` + regression test `scripts/test-country-industry-redirects.mjs`.

## Thin-page batch (near threshold, expanded this sprint)
| Page | Pre-gap | Change |
|------|--------:|--------|
| egypt-healthcare-market-report | 5 words | + Cairo hospitals FAQ |
| gcc-pharmaceutical-market-research | 30 words | + 2 FAQs, meta refresh |
| healthcare-market-research-italy | 53 words | + AIFA/SSR FAQ |
| kantar-health-alternative-gcc | 13 words | + Kantar Egypt healthcare FAQ (static conf) |
| gcc-medical-devices-market-report | — | + 2 FAQs, meta refresh |

## Remaining backlog
- **~182 thin pages** still below 2000-word threshold — batch by cluster (healthcare MR country pages, medtech reports, localized insights).
- Fresh GSC export needed post-deploy to validate CTR lift.
- Run `npm run indexnow:priority` in production after merge.

## LLM / chat appearance
- FAQ schema preserved on all edited pages (`details`/`summary` HTML on static conf pages).
- `GeoLLMAnswerBlock` present on GCC pharma and medtech reports.
- Egypt blog uses forced SSR meta overrides for cairo-hospitals query intent.
