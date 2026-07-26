# Website SEO audit — 2026-07-26

**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-26T04:00Z  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last full export)

## Executive summary

| Signal | Value | Notes |
|--------|------:|-------|
| URLs audited | 387 | Sitemap + service/landing scope |
| Live 200 pages | 386 | |
| Thin pages (&lt;2,000 words in `<main>`) | **186** | Down from 188 on 2026-07-25 inventory |
| Sitemap 404s | **0** | |
| Fetch errors | **1** | `/quantitative-healthcare-market-research` — redirect loop (fixed this sprint) |

## Impressions & CTR (GSC, 3-month Web)

| Asset | Impressions | Clicks | CTR | Position | Action |
|-------|------------:|-------:|----:|---------:|--------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | 0 | 0% | 4.9 | Cairo FAQ + answer-first copy on Egypt blog block |
| `/gcc-pharmaceutical-market-research` | 3,592 | 0 | 0% | — | NUPCO tender FAQs + GeoLLM block |
| `/gcc-market-access-guide` | 3,058 | 14 | 0.46% | 16.5 | SFDA EES + NUPCO sequencing FAQs |
| `/quantitative-healthcare-market-research` | 1,665 | 3 | 0.18% | 30.3 | **Redirect loop fix** (legacy BOFU resolver) |
| `/gcc-medical-devices-market-report` | 6,126 | 6 | 0.10% | 53.2 | Next batch — medtech cluster |
| Site top pages (Kuwait/Oman pharma cos.) | 5k+ each | 1.3–1.6% CTR | 6–9 | Hold — performing |

**MENA 3-month (Jun 22 export):** 359 clicks / 21,420 impressions across EG, KW, UAE, KSA filters.

## Technical / crawl errors

1. **Redirect loop (P0):** `vercel.json` sends `/healthcare-market-research/quantitative` → `/quantitative-healthcare-market-research`, while `resolveLegacyCountryIndustryMarketResearchRedirect` treated the latter as `quantitative-healthcare` legacy BOFU → hub `/quantitative` → loop. **Fix:** `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs`.
2. **Transient fetch failure:** Audit user-agent occasionally times out on quantitative URL while loop active; re-run post-deploy.

## Thin-page sprint (this run)

| URL | Words (prod) | Gap | Change |
|-----|-------------:|----:|--------|
| `/egypt-healthcare-market-report` | 1,995 | 5 | Cairo hospitals + UHI FAQ |
| `/gcc-pharmaceutical-market-research` | 1,970 | 30 | NUPCO tender research FAQs |
| `/gcc-market-access-guide` | 1,908 | 92 | SFDA EES + NUPCO FAQs |
| `/healthcare-market-research-italy` | 1,947 | 53 | AIFA CTS + regional SSR FAQs |

Remaining **~182** thin URLs — continue cluster batches (therapy BOFU, medtech reports, localized insights).

## Google & LLM / chat visibility

- **Answer-first blocks:** `GeoLLMAnswerBlock` on GCC pharma hub; Cairo block on Egypt 2026 blog.
- **Structured data:** FAQPage JSON-LD updated on GCC market access guide (EES questions).
- **IndexNow:** After deploy, run `npm run indexnow:priority` for URLs in `scripts/gsc-priority-recrawl.txt`.

## Post-deploy verification

```bash
node scripts/test-country-industry-redirects.mjs
curl -sI -L -o /dev/null -w "%{http_code} %{url_effective}\n" https://www.bionixus.com/quantitative-healthcare-market-research
SITE_AUDIT_BASE_URL=https://www.bionixus.com node scripts/audit-thin-pages-bio450.mjs
```

Expected: quantitative URL ends **200** at `/quantitative-healthcare-market-research`; thin count drops on upgraded URLs.
