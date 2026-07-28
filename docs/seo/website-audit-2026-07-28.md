# Website SEO audit — 2026-07-28

## Production crawl (`scripts/audit-thin-pages-bio450.mjs`)

| Metric | Value |
|--------|------:|
| URLs audited | 387 |
| Live (200) | 386 |
| Thin (&lt;2,000 words) | 186 |
| 404 | 0 |
| Fetch/redirect errors | 1 |

### Critical error

| URL | Issue | Fix (this branch) |
|-----|--------|-------------------|
| `/quantitative-healthcare-market-research` | Redirect loop with `/healthcare-market-research/quantitative` (legacy BOFU resolver + `vercel.json`) | `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs` |

### Near-threshold pages (P0 word count)

| Path | Words | Gap | Action |
|------|------:|----:|--------|
| `/egypt-healthcare-market-report` | 1,995 | 5 | Cairo hospital cluster copy + hub links |
| `/gcc-pharmaceutical-market-research` | 1,970 | 30 | CTR title/meta + FAQ |
| `/gcc-market-access-guide` | 1,908 | 92 | SFDA EES + UAE HTA FAQs |

Remaining **186** thin URLs: batch by cluster per `docs/seo/bio-450-thin-page-inventory.csv`.

## GSC snapshot (export 2026-06-22 — refresh after deploy)

### High impressions, low CTR (priority)

| Query / page | Impressions | CTR | Notes |
|--------------|------------:|----:|-------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | 0% | Blog Cairo block + Egypt report cross-link |
| `/gcc-pharmaceutical-market-research` | 3,592 | 0% | Title now matches “GCC pharmaceutical market research” |
| `/gcc-medical-devices-market-report` | 6,126 | 0.1% | Prior SSR fix on prod; monitor position |
| `/healthcare-market-research` | 4,045 | 0.27% | Hub meta description iteration |
| `/gcc-market-access-guide` | 3,058 | 0.46% | GEO FAQs for SFDA EES / UAE HTA |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | Blocked by redirect loop until deploy |

### Strong performers (maintain)

- Pharma company country pages (Kuwait, Oman, UAE): ~1.3–1.6% CTR, positions 6–9.
- Brand query `bionixus`: 47% CTR, position 1.

## LLM / chat appearance (GEO)

- Answer-first `GeoLLMAnswerBlock` on GCC pharma and market access guides.
- FAQ sections use `<details>`/`<summary>` (accessible, crawlable).
- JSON-LD: Article, FAQPage, BreadcrumbList on updated landings.

## Post-deploy checklist

1. Verify `curl -sI https://www.bionixus.com/quantitative-healthcare-market-research` → single 200 (no loop).
2. `node scripts/audit-thin-pages-bio450.mjs` — expect 0 errors; thin count should drop for P0 URLs.
3. `npm run indexnow:priority` (if configured).
4. Export fresh GSC Performance report (queries + pages) for CTR validation.
