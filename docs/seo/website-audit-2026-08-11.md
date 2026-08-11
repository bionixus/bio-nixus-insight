# Website SEO Audit — 2026-08-11

**Branch:** `cursor/website-content-and-ranking-42ff`  
**Production crawl:** `https://www.bionixus.com` via `scripts/audit-thin-pages-bio450.mjs`  
**GSC baseline:** Jul 2026 (~3,700 impr/day, 0.82% CTR, pos ~30)

## Executive summary

| Metric | Production (pre-deploy) | After this PR (local SSR verify) |
|--------|-------------------------|----------------------------------|
| URLs audited | 494 | — |
| Thin pages (<2,000w) | **275** | Reduced on 15 priority URLs |
| 404 errors | **0** | 0 |
| Fetch errors | **0** | 0 |
| P0 SSR regression | **9 pharma BOFU pages ~19w** | **2,345–3,353w** (eager imports) |

## P0 — SSR regression (fixed)

Production crawl showed **~16–20 words** in `<main>` for all `/pharmaceutical-companies-*` pages — classic `React.lazy()` + `Suspense` SSR fallback. These pages rank pos 6–12 in GSC but Google/LLM crawlers could not read list content.

**Fix:** Eager imports in `src/routes/lazyReportPages.ts`; removed `suspensePage()` wrappers in `src/routes.tsx`. Added pharma BOFU paths to `scripts/verify-ssr-bundle.mjs`.

| Path | Prod words | Local SSR words |
|------|------------|-----------------|
| `/pharmaceutical-companies-egypt` | 19 | 2,345 |
| `/pharmaceutical-companies-uae` | 19 | 2,604 |
| `/pharmaceutical-companies-saudi-arabia` | 20 | 2,706 |
| `/pharmaceutical-companies-kuwait` | 20 | 3,353 |

## CTR / impression priorities (GSC)

High-impression, low-CTR URLs targeted with **CTR overrides** (`src/server/ctr-seo-overrides.js`):

| Path | GSC signal | Action |
|------|------------|--------|
| `/gcc-pharmaceutical-market-research` | ~3,592 impr, 0% CTR | New title/description override |
| `/heor-consulting-saudi-arabia` | pos ~50 on "heor consulting" | New title/description override |
| `/healthcare-market-research-in-uae` | Dubai cluster | New title/description override |
| `/iqvia-alternative` | pos ~7.2 | Existing override (static `public/conf/iqvia-alternative.html`) |

## Thin page expansion (this PR)

Added `CountryMarketReferenceGuide` (~1,900w unique SSR content) to thin healthcare country landings:

| Path | Prod words | Expected post-deploy |
|------|------------|----------------------|
| `/healthcare-market-research-in-uae` | 1,318 | ~3,200+ |
| `/healthcare-market-research-jordan` | 1,355 | ~3,200+ |
| `/healthcare-market-research-oman` | 1,362 | ~3,200+ |
| `/healthcare-market-research-qatar` | 1,420 | ~3,200+ |
| `/healthcare-market-research-kuwait` | 1,468 | ~3,200+ |
| `/healthcare-market-research-germany` | 1,528 | ~3,200+ |
| `/healthcare-market-research-france` | 1,492 | ~3,200+ |

Updated `dateModified` on `/gcc-pharmaceutical-market-research` schema to 2026-08-11.

## Remaining backlog (not in this PR)

- **268 thin pages** still below 2,000 words after priority fixes
- **34 thin** `/healthcare-market-research/*` hub country + therapy pages (1,500–1,900w)
- **Locale hubs** (`/de`, `/zh`, `/ar/strategic-portfolio`) — utility/thin by design or need locale copy sprint
- **`/bionixus-industries/insights/*`** — BlogPost lazy SSR (~16w); route through static or eager pattern
- **MedTech BOFU** near threshold (gap &lt;100w): batch FAQ supplement via `developedMarketMedtechPages`

## LLM / chat appearance

- `GeoLLMAnswerBlock` present on expanded country pages
- FAQ `<details>/<summary>` preserved for accessibility
- JSON-LD: Service, FAQPage, BreadcrumbList on country landings
- Post-deploy: run `npm run indexnow:priority` for Tier 7 URLs in `scripts/gsc-priority-recrawl.txt`

## Post-deploy checklist

1. Deploy branch to production
2. Re-run production thin audit: `node scripts/audit-thin-pages-bio450.mjs`
3. View-source verify pharma BOFU pages show full list HTML
4. `npm run indexnow:priority` (prod credentials)
5. GSC URL Inspection on Tier 7 URLs
6. Fresh GSC export week ending 2026-08-18

## DEPLOY CHECKLIST — files changed

- `src/routes/lazyReportPages.ts`
- `src/routes.tsx`
- `src/server/ctr-seo-overrides.js`
- `src/pages/HealthcareMarketResearchInUae.tsx`
- `src/pages/HealthcareMarketResearchInJordan.tsx`
- `src/pages/HealthcareMarketResearchInOman.tsx`
- `src/pages/HealthcareMarketResearchInQatar.tsx`
- `src/pages/HealthcareMarketResearchInKuwait.tsx`
- `src/pages/HealthcareMarketResearchGermany.tsx`
- `src/pages/HealthcareMarketResearchFrance.tsx`
- `src/pages/GccPharmaceuticalMarketResearch.tsx`
- `scripts/verify-ssr-bundle.mjs`
- `scripts/gsc-priority-recrawl.txt`
- `scripts/data/bio-450-thin-page-audit.json` (audit snapshot)
- `docs/seo/bio-450-thin-page-inventory.csv` (audit snapshot)
- `docs/seo/website-audit-2026-08-11.md`
