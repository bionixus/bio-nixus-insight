# Website SEO audit — 2026-09-20

## GSC snapshot (7-day, `data/gsc/current-week/`)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02 pp |
| Avg. position | **25.8** | 5.0 | +2.6 (improved) |

### CTR diagnostics

- **United States:** 33% of impressions, **0.09% CTR** — largest structural drag.
- **Excl. US:** 1.08% CTR on 20,757 impressions.
- **Mobile:** 2.23% CTR vs **desktop 0.50%** (86% of device impressions on desktop).
- **Winning cluster:** `/pharmaceutical-companies-*` at **1.60% CTR** (140 clicks / 8,756 impr).
- **Deep-SERP dilution:** pages with pos >40 and ≥200 impr → 0.10% CTR (11,559 impr).

Full scorecard: `reports/weekly-report-2026-09-20.md`.

## Production crawl (2026-09-20)

| Check | Result |
|---|---|
| Sitemap URLs audited (phase-2) | 1,278 |
| SEO PASS / MINOR / MAJOR | 1,244 / 26 / **8** |
| Service/landing thin (&lt;2,000 words) | **347** / 657 audited |
| Sitemap 404s | **0** |
| Thin-page errors | **0** |

### MAJOR issues (8)

- **DE/FR localized blogs (6):** missing H1 in raw HTML — root cause: `/de/blog/:slug` and `/fr/blog/:slug` were not hydrated in `fetchRouteData` for SSR. **Fixed** in this branch.
- **Video watch pages (2):** missing H1 in raw HTML — lazy route not preloaded for SSR. **Fixed** via `preloadRouteChunk` video importers.

## GSC page-1 / zero-CTR priorities (content shipped this run)

| URL | Pre-expansion words | Action |
|---|---|---|
| `/febrile-neutropenia-market` | 549 → **2,038** SSR words | Long-form guide + FAQs (GSC: febrile neutropenia market) |
| `/gcc-functional-service-providers-market` | 719 → **2,058** SSR words | Long-form guide + FAQs (GSC: gcc functional service providers) |
| `/japan-medical-disposables-market` | 552 → **2,009** SSR words | Long-form guide + FAQs (GSC: japan medical disposables market) |
| `/iqvia-alternative-saudi-arabia` | 877 → **2,010** SSR words | Long-form guide (GSC: iqvia competitors / KSA complement) |
| `/iqvia-alternative` | 4,122 | Already deep; in top-10 pages by clicks — monitor CTR on title test |

## LLM / AI search

- Expanded **GeoLLM** blocks remain on competitor pages; Saudi IQVIA page adds explicit canonical guidance for models.
- Specialty pages add structured **FAQ + Service + Breadcrumb** JSON-LD via existing template.
- Prefer **primary-research positioning** (no fabricated market-size tables) on specialty expansions — aligns with crawler trust.

## Next actions

1. Deploy and run `npm run indexnow:priority` for the four expanded URLs.
2. Re-run `node scripts/audit-thin-pages-bio450.mjs` post-deploy; target ≥2,000 words on P0 URLs.
3. Continue thin-landing backlog (**347** URLs); prioritise `/healthcare-market-research/*` cluster (29 thin).
4. USA desktop CTR tests on `/iqvia-alternative` and pharmaceutical-companies spokes.
5. Refresh GSC exports weekly into `data/gsc/current-week/` for automated reports.
