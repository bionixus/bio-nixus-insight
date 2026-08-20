# SEO / LLM audit — 2026-08-20 (cron automation)

## GSC snapshot (Aug 3–9, 2026)

| Metric | Value |
|--------|-------|
| Clicks (7d) | 219 |
| Impressions (7d) | ~29,474 |
| CTR | ~0.74% |
| Avg position | ~27–32 |

**Winning cluster:** `/pharmaceutical-companies-{country}` — positions 5–10, CTR 1.5–2.5%.

**High-impression / zero-click pages (priority fixes this run):**

| Page | Impressions | CTR | Position | Action |
|------|-------------|-----|----------|--------|
| `/gcc-medical-devices-market-report` | 3,241 | 0% | 54 | CTR meta already optimized; ranking recovery (internal links, IndexNow) |
| `/japan-medical-devices-market-report` | 3,376 | 0.03% | 47 | Content depth OK (~6k words); ranking |
| `/insights/top-market-research-companies-italy-2026` | 977 | 0% | 41 | CTR title/meta refresh |
| `/italy-portable-diagnostic-devices-market` | 971 | 0% | 52 | Expanded to 2000+ words + CTR meta |
| `/gcc-generic-pharmaceuticals-market` | 718 | 0% | 61 | Expanded copy + CTR meta |
| `/blog/healthcare-overview-egypt-market-2026` | 369 | 0% | 9.5 | Cairo query pos 1.82 — CTR meta refresh |
| `/healthcare-market-research` | 762 | 0% | 48 | Hub title/meta refresh |

## Live sitewide audit (sitemap 1,113 URLs)

| Check | Result |
|-------|--------|
| 404 in sitemap | **0** |
| Fetch errors | **0** |
| Pages ≥ 2000 words | 642 |
| Thin pages (< 2000 words) | 471 |

Previously reported 404s (`/insights/top-healthcare-market-research-companies-{dubai,abu-dhabi,kuwait}-2026`) now return **200** with 2,900–4,400 words.

## Changes deployed this run

1. **Thin page content** — Italy portable diagnostics, Italy device connectivity, GCC medication management, GCC generic pharmaceuticals expanded with market structure, signal grids, and FAQs.
2. **Market report enrichment** — GCC vaccines, Kuwait biosimilars, and Gulf country vaccines/biosimilars reports wired via `reportEnrichmentRegistry.ts`.
3. **CTR overrides** — Egypt healthcare overview, Italy MR listicle, Italy specialty pages, GCC generic/medication management, Abu Dhabi healthcare MR, Middle East pharma hub, healthcare MR hub.
4. **LLM visibility** — `public/llms.txt` refreshed with high-traffic URLs.

## LLM / AEO notes

- `public/llms.txt` and `docs/llms.txt` list services, therapy areas, and BOFU pages for crawler discovery.
- JSON-LD: Service, FAQ, BreadcrumbList on expanded pages via existing templates.
- Run `npm run aeo:baseline` when API keys are configured to track citation share.

## Next weekly actions

1. GSC re-export → update `data/gsc/current-week/`
2. URL Inspection + IndexNow on CTR-changed URLs
3. Continue thin-page sprint: `/market-reports/country/*` hub pages (~400 words each)
4. Ranking recovery for GCC/Japan med devices (internal links from pharma BOFU cluster)
