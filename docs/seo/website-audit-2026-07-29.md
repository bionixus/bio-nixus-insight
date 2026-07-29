# Website SEO audit — 2026-07-29

## Production crawl (`scripts/audit-thin-pages-bio450.mjs`)

| Metric | Value |
|--------|------:|
| URLs audited | 387 |
| Live (200) | 386 |
| Thin (&lt;2,000 words) | 186 |
| 404 | 0 |
| Fetch/redirect errors | 1 |

### Critical error (fixed on branch — deploy to clear prod)

| URL | Issue | Fix |
|-----|--------|-----|
| `/quantitative-healthcare-market-research` | Redirect loop with `/healthcare-market-research/quantitative` | `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs` + regression test |

### P0 thin / CTR (this run)

| Path | Pre-run words | Action |
|------|---------------|--------|
| `/egypt-healthcare-market-report` | 1,995 | Cairo hospital cluster links + overview/hub cross-links |
| `/gcc-pharmaceutical-market-research` | 1,970 | NUPCO/MOHAP tender FAQ (GEO + word count) |
| `/healthcare-market-research-italy` | 1,947 | AIFA CTS / SSR timeline FAQ |
| `/bionixus-vs-iqvia-mena` | 1,914 | IQVIA competitors title/meta + FAQ block |
| `/gcc-medical-devices-market-report` | 2,334 (OK) | Meta CTR tweak (prefilled syringes) |

Remaining **~182** thin URLs after P0 clears: continue cluster batches via `docs/seo/bio-450-thin-page-inventory.csv`.

## GSC snapshot (export 2026-06-22 — refresh after deploy)

| Query / page | Impressions | CTR | Priority |
|--------------|------------:|----:|----------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | 0% | Egypt report + blog overview |
| `/gcc-medical-devices-market-report` | 6,126 | 0.1% | IVD / prefilled meta |
| `/gcc-pharmaceutical-market-research` | 3,592 | 0% | Title + FAQ iteration |
| `/healthcare-market-research` | 4,045 | 0.27% | Hub meta (prior commit) |
| `/gcc-market-access-guide` | 3,058 | 0.46% | SFDA EES / UAE HTA FAQs (prior commit) |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | Redirect fix + IndexNow |

## LLM / chat appearance (GEO)

- Answer-first blocks on GCC pharma, med devices, and market access guides.
- FAQ sections use `<details>`/`<summary>` on static and React landings.
- JSON-LD: Article, FAQPage, BreadcrumbList on updated URLs.

## Post-deploy checklist

1. `curl -sI https://www.bionixus.com/quantitative-healthcare-market-research` → single 200.
2. `node scripts/audit-thin-pages-bio450.mjs` — 0 errors; re-count P0 paths.
3. `npm run indexnow:priority` (includes quantitative URL).
4. Fresh GSC Performance export (queries + pages) for CTR validation.
