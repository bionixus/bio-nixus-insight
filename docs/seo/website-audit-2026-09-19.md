# Website audit — 2026-09-19

## GSC snapshot (week ending 2026-09-19)

| Metric | This week | Target | vs last week |
|---|---:|---:|---:|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02 pp |
| Avg. position | **25.8** | 5.0 | +2.6 (improved) |

**Structural CTR:** excl. US **1.08%**; US only **0.09%** (33% of impressions). Mobile **2.23%** vs desktop **0.50%**.

**Winning cluster:** `/pharmaceutical-companies-*` — **1.60% CTR**, 8,756 impressions.

**Drag buckets:** pages pos >40 (≥200 impr) **0.10% CTR**; Japan + GCC device reports excluded → site mix **0.73%**.

Full scorecard: `reports/weekly-report-2026-09-19.md`.

## Production crawl (2026-09-19)

| Check | Result |
|---|---|
| Sitemap URLs audited (phase-2) | 1,278 |
| SEO PASS / MINOR / MAJOR | 1,245 / 26 / 7 |
| Service/landing thin (&lt;2,000 words) | **514** |
| Sitemap 404s | **0** |

### MAJOR issues (7)

- Missing H1 on **localized DE/FR blog** posts (SSR preload gap — fixed in `preloadRouteChunk.ts` this run).
- Missing H1 + low internal links on **`/videos/*` watch pages** (SSR preload gap — fixed this run).

## Shipped this run (branch `cursor/website-content-and-ranking-1bff`)

### P0 content (GSC page-1, zero-CTR queries)

Expanded to decision-grade depth (target ≥2,000 SSR words):

- `/febrile-neutropenia-market` — FN / G-CSF protocol & GCC tender intelligence
- `/japan-medical-disposables-market` — nursing, infection control, group purchasing
- `/gcc-functional-service-providers-market` — FSP vs full-service in Gulf trials
- `/iqvia-alternative-saudi-arabia` — KSA complement to `/iqvia-alternative` + `deepDive` section

### Engineering / LLM visibility

- Localized blog SSR preload: `/de|fr|es|pt|ru|zh/blog/*`
- Video watch page SSR preload: `/videos/:slug`
- IQVIA KSA: optional `deepDive` block on competitor template for long-form citeable copy

## CTR actions (next deploy)

| Query (pos) | Page | Action |
|---|---|---|
| iqvia competitors (6.3) | `/iqvia-alternative` | Title/meta iteration; US desktop snippet test |
| febrile neutropenia market (8.5) | `/febrile-neutropenia-market` | Content + FAQ depth (this run) |
| gcc functional service providers (4.6) | `/gcc-functional-service-providers-market` | Content depth (this run) |
| japan medical disposables (9.6) | `/japan-medical-disposables-market` | Content depth (this run) |
| pharmaceutical companies in dubai | pharma / Dubai cluster | Cross-link from UAE hubs |

After deploy: `npm run indexnow:priority` and re-run `node scripts/audit-thin-pages-bio448.mjs`.

## DEPLOY CHECKLIST

- `src/data/specialtyMarketDemandContent.ts`
- `src/data/competitorAlternatives.ts`
- `src/pages/templates/CompetitorAlternativePage.tsx`
- `src/lib/preloadRouteChunk.ts`
- `src/routes/lazyReportPages.ts`
- `src/routes/lazyReportPages.ssr.ts`
- `docs/seo/website-audit-2026-09-19.md`
- `docs/seo/bio-448-thin-page-inventory.csv` (refreshed audit output)
- `docs/seo/sitewide-audit-phase2.md`
- `reports/weekly-report-2026-09-19.md`
