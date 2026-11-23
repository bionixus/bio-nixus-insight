# Sitewide SEO / content audit — 2026-11-23

## GSC snapshot (data/gsc/current-week, 7d)

| Metric | Value | Target | Δ vs prior week |
|---|---:|---:|---|
| Impressions/day | 4,585 | 15,000 | +137 |
| Clicks/day | 52 | 450 | +19 |
| CTR | 1.13% | 3.0% | +0.37 pp |
| Avg position | 19.5 | 5.0 | +6.3 (improved) |

Full narrative: `reports/weekly-report-2026-11-23.md`.

### CTR diagnostics

- **US drag:** 34.9% impressions @ **0.12% CTR** — structural; prioritize title/meta tests on US-intent URLs separately from MENA winners.
- **Winning cluster:** `/pharmaceutical-companies-*` **2.21% CTR**, 28k impr/week — protect URLs; deepen content on Arabic mirrors.
- **Page-1 zero-click:** `companies like iqvia` (pos 3.1), `pharmaceutical companies in dubai`, `fmcg` / `fmcg companies` — answer-first copy + CTR overrides already live on several; monitor 14d post-deploy.
- **Deep-SERP dilution:** pages pos >40 with ≥200 impr @ 0.16% CTR — continue thin-page program (~305 URLs under 2,000 words on production crawl).

## Production crawl (2026-11-23)

`node scripts/audit-thin-pages-bio450.mjs` against https://www.bionixus.com:

| Check | Result |
|---|---|
| URLs audited | 678 |
| HTTP errors | **0** |
| 404 in sitemap | **0** |
| Thin (&lt;2,000 words) | **305** |
| healthcare-market-research thin | 27 |

Top near-miss reports: `/turkey-healthcare-market-report` (1973w), `/brazil-healthcare-market-report` (1970w).

### P0 thin — Arabic pharma directories (pre-fix prod)

| URL | Words | Gap |
|---|---:|---:|
| /ar/pharmaceutical-companies-egypt | 690 | 1,310 |
| /ar/pharmaceutical-companies-uae | 640 | 1,360 |
| /ar/pharmaceutical-companies-saudi-arabia | 626 | 1,374 |
| /ar/pharmaceutical-companies-kuwait | 629 | 1,371 |
| /ar/pharmaceutical-companies-qatar | 615 | 1,385 |
| /ar/pharmaceutical-companies-oman | 602 | 1,398 |

**Shipped this run:** deep Arabic editorial guide (`ArPharmaDeepGuide` + `arPharmaDeepSections.ts`) on all six routes; `dateModified` 2026-11-23; hub link to `/ar/healthcare-market-research` in market-overview block.

**Local SSR word counts (post-change, `dist/server` render):**

| URL | Main words |
|---|---:|
| /ar/pharmaceutical-companies-egypt | 2050 |
| /ar/pharmaceutical-companies-uae | 2000 |
| /ar/pharmaceutical-companies-saudi-arabia | ~1563 |
| /ar/pharmaceutical-companies-kuwait | ~1172 |
| /ar/pharmaceutical-companies-qatar | ~1030 |
| /ar/pharmaceutical-companies-oman | ~997 |
| /turkey-healthcare-market-report | 2054 |
| /brazil-healthcare-market-report | 2032 |

Egypt + UAE hit ≥2,000; remaining AR GCC mirrors need a second content pass (same pattern).

### Next thin batches (unchanged backlog)

1. GCC **retail-companies-*** (~1.1–1.3k words) — add `sections` like pharma directories.
2. **medical-device-companies-{india,singapore}** and remaining healthcare-country hubs 1.6–1.9k.
3. IndexNow on touched URLs after deploy.

## LLM / chat appearance

- Added explicit **buyer-brief** sections (Q&A prose) on AR pharma pages for citeable Arabic answers (regulator, market size, IQVIA complement model).
- Keep **FAQ** + **ItemList** JSON-LD on directories; refresh `dateModified` in Article schema after deploy.

## Actions not in this commit

- Fresh GSC export upload (still using 2026-11-22 CSVs in repo).
- US desktop CTR experiments on FMCG cluster.
- Retail directory expansion (6 GCC/MENA URLs).

## DEPLOY CHECKLIST

- [ ] `src/data/arPharmaDeepSections.ts`
- [ ] `src/components/seo/ArPharmaDeepGuide.tsx`
- [ ] `src/pages/templates/ArPharmaCompaniesDirectoryPage.tsx`
- [ ] `src/data/arPharmaDirectories.ts` (lastmod)
- [ ] `src/pages/TurkeyHealthcareMarketReport.tsx`
- [ ] `src/pages/BrazilHealthcareMarketReport.tsx`
- [ ] `docs/seo/website-audit-2026-11-23.md`
- [ ] `reports/weekly-report-2026-11-23.md`
- [ ] Re-run `audit-thin-pages-bio450.mjs` post-deploy
- [ ] IndexNow batch for AR pharma + TR/BR reports