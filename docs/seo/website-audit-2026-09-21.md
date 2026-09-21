# Website SEO audit — 2026-09-21

## GSC snapshot (week ending 2026-09-21)

| Metric | This week | Target | vs last week |
|---|---:|---:|---|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02 pp |
| Avg. position | **25.8** | 5.0 | +2.6 (improved) |

**Structural CTR drag:** United States 33% of impressions at **0.09% CTR**; desktop **0.50% CTR** on 86% of device impressions. Ex-US page mix CTR ~0.98%.

**Winning cluster:** `/pharmaceutical-companies-*` at **1.60% CTR** (140 clicks / 8,756 impr).

**Money queries still at 0% CTR on page 1:** `iqvia competitors` (pos 6.3, 36 impr), `gcc functional service providers market`, `febrile neutropenia market`, `japan medical disposables market` (expanded pages live on prior deploy — monitor).

## Production crawl (thin pages, 2000-word threshold)

- **657** sitemap URLs audited live
- **347** thin (&lt;2,000 SSR words) — unchanged inventory scale vs 2026-09-20
- **0** sitemap 404s, **0** fetch errors
- **29** thin pages in `/healthcare-market-research*` cluster

Full inventory: `docs/seo/bio-450-thin-page-inventory.csv` (generated `node scripts/audit-thin-pages-bio450.mjs`).

## Technical / schema (sitewide phase-2 baseline)

Last full metadata pass (`docs/seo/sitewide-audit-phase2.md`) predates Sep 2026; re-run `npm run audit:sitewide:phase2` after deploy. Known recurring MAJOR patterns: video watch pages (missing H1), some `/ar` blog SSR gaps (addressed on branch `cursor/website-content-and-ranking-3f80` — verify on production).

## Shipped this run (branch `cursor/website-content-and-ranking-3440`)

1. **CTR — `/iqvia-alternative`:** Title/meta aligned to “IQVIA competitors” query cluster (`public/conf/iqvia-alternative.html`, `lib/ctr-seo-overrides.mjs`, `src/server/ctr-seo-overrides.js`).
2. **Thin content — MedTech BOFU:** Completed truncated service blurbs (+ country regulatory depth) for Brazil, Spain, Switzerland, Denmark (`src/data/developedMarketMedtechPages.ts`) — lifts all 18 developed-market MedTech pages.
3. **Thin content — Bahrain healthcare:** +biosimilars / NHRA HTA section (`HealthcareMarketResearchInBahrain.tsx`).
4. **Thin content — biosimilars therapy hub:** Dedicated hero + tender/substitution modules (`TherapyPage.tsx`).
5. **LLM discovery:** `public/llms.txt` refresh date.

## Post-deploy checklist

- [ ] `npm run indexnow:priority` (include `/iqvia-alternative`, `/healthcare-market-research-bahrain`, `/healthcare-market-research/therapy/biosimilars`, top MedTech URLs)
- [ ] GSC URL Inspection on `/iqvia-alternative` title/meta change
- [ ] Re-crawl thin inventory; target next batch: `/services`, `/ar/services`, pharmaceutical-companies spokes 1,900–1,980 words
- [ ] Directory matrix waves still **0% GSC indexation** — investigate internal links + Search Console coverage (see `reports/weekly-report-2026-09-21.md`)

## LLM / chat appearance

- Canonical agent entry: `/llms.txt`, `/iqvia-alternative`, `/healthcare-market-research`, `/account-level-market-research`
- Ensure AI crawlers allowed in `robots.txt` (GPTBot, ClaudeBot, PerplexityBot) — unchanged this run
