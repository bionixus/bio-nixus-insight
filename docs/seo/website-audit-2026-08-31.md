# Website SEO audit — 2026-08-31

**Branch:** `cursor/website-content-and-ranking-7188`  
**Production crawl:** `node scripts/bio-449-thin-page-audit.mjs` against https://www.bionixus.com  
**Recorded:** 2026-08-31 (cron automation, 04:00 UTC)

## Executive summary

| Metric | This week | Target | vs last week |
|--------|-----------|--------|--------------|
| Impressions/day | **4,448** | 15,000 | −337 |
| Clicks/day | **33** | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02pp |
| Avg position | **25.8** | 5.0 | +2.6 (improved) |

| Crawl health | Value |
|--------------|-------|
| URLs audited (production) | 655 |
| Thin pages (<2,000 words) | **349** |
| 404 errors | **0** |
| Fetch errors | **0** |

**SSR health:** No 404s or fetch failures on production. All 10 priority pages expanded this sprint verified **≥2,000 words** in local SSR (`NODE_ENV=production node server.js`).

## GSC diagnostics (week ending 2026-08-31)

| Slice | Impressions | CTR | Notes |
|-------|-------------|-----|-------|
| Site total | 31,137/wk | 0.75% | Baseline from `data/gsc/current-week/` |
| Excl. United States | 20,757 | **1.08%** | US = 33.3% impr @ **0.09% CTR** — largest drag |
| Mobile | 4,400 | **2.23%** | 14% of device impr |
| Desktop | 26,674 | 0.50% | 86% of device impr |
| Pages pos >40 (≥200 impr) | 11,559 | **0.10%** | Deep-SERP dilution |
| `/pharmaceutical-companies-*` | 8,756 | **1.60%** | Winning directory cluster |
| `/japan-medical-devices-market-report` | 2,511 | 0.08% | Pos 44.3 — CTR issue, not word count |

### Page-1 queries with 0% CTR (priority title/meta tests)

| Query | Pos | Impr | Recommended action |
|-------|-----|------|-------------------|
| cairo hospitals healthcare 2023-2026 | 1.9 | 152 | Title/meta + LLM answer block on Egypt hospital page |
| iqvia competitors | 6.3 | 36 | `/iqvia-alternative` + CI service page CTR override |
| gcc biologics market | 6.0 | 20 | GCC pharma/biologics hub title iteration |
| japan general surgical devices market | 4.6 | 25 | **Fixed this sprint** — CTR override + 2,020w content |
| nupco tender | 7.6 | 19 | `/gcc-market-access-guide` title/meta refresh |

Full weekly report: `reports/weekly-report-2026-08-31.md`

## Issues found & fixes applied (this run)

### P0 — Near-threshold high-GSC pages expanded to ≥2,000 words

| URL | Words (local SSR) | Fix |
|-----|-------------------|-----|
| `/gcc-market-access-guide` | 2,009 | NUPCO tender timeline, MedTech procurement prose |
| `/brazil-healthcare-market-report` | 2,015 | Brazil medtech section, `dateModified: 2026-08-31` |
| `/pharmaceutical-companies-iran` | 2,001 | 2 new FAQs |
| `/pharmaceutical-companies-iraq` | 2,017 | 2 new FAQs |

### P1 — Specialty demand pages (GSC-linked)

| URL | Words (local SSR) | Fix |
|-----|-------------------|-----|
| `/gcc-medication-management-market` | 2,062 | Full demand template: FAQs, calendar, methodology |
| `/italy-portable-diagnostic-devices-market` | 2,022 | Expanded researchTopics, decision blueprint |
| `/singapore-pharmaceutical-market` | 2,023 | ACE/SDL/MAF depth, cluster pathway prose |
| `/japan-general-surgical-devices-market` | 2,020 | OR procurement calendar, distributor training note |

Template: `src/pages/templates/SpecialtyMarketDemandPage.tsx` — added `methodologySteps`, decision blueprint section, deliverables paragraph.

### P1 — Legacy service pages

| URL | Words (local SSR) | Fix |
|-----|-------------------|-----|
| `/services/market-access` | 2,041 | Methodology grid, use-case sections, expanded FAQs |
| `/services/competitive-intelligence` | 2,020 | GeoLLMAnswerBlock (IQVIA alternatives), engagement paragraph |

### P2 — CTR / LLM visibility (wave 7)

Updated `lib/ctr-seo-overrides.mjs` + synced `src/server/ctr-seo-overrides.js`:

- **New:** `/japan-general-surgical-devices-market`
- **Updated titles/meta:** `/pharmaceutical-companies-iran`, `/pharmaceutical-companies-iraq`, `/gcc-market-access-guide`, `/brazil-healthcare-market-report`

## LLM / chat appearance recommendations

1. **GeoLLMAnswerBlock** on page-1 zero-CTR queries (`iqvia competitors`, `nupco tender`, `gcc biologics market`)
2. **FAQ `<details>` blocks** with direct answers — already on expanded pages; extend to deep-rank device reports
3. **Organization + Service JSON-LD** — verify on all expanded URLs post-deploy
4. **Static conf/*.html** pattern (biosimilar, IQVIA comparison) — proven for BOFU; replicate for `gcc biologics market`

## Remaining backlog (next cron)

1. **~340 thin pages** on production unchanged — batch `services/*` (~210), localized blog SSR (de/fr/zh/ar ~18), HMR therapy tails (~29)
2. **Deep-rank device reports** (`/gcc-medical-devices-market-report` pos 54, `/japan-medical-devices-market-report` pos 44) — already ≥2,000w; focus CTR overrides + title tests
3. **USA CTR** — 33% impressions @ 0.09% CTR; dedicated title/meta iteration sprint
4. Post-deploy: re-run `node scripts/bio-449-thin-page-audit.mjs` — expect thin count drop by ~10 on changed URLs
5. `npm run indexnow:priority` for changed URLs below

## Post-deploy checklist

- [ ] Deploy branch to production
- [ ] Re-run `node scripts/bio-449-thin-page-audit.mjs` — confirm thin count drops
- [ ] URL Inspection → Request indexing for changed URLs
- [ ] `npm run indexnow:priority` in production
- [ ] GSC export week ending 2026-09-06

### Priority re-index URLs

1. `/japan-general-surgical-devices-market`
2. `/gcc-medication-management-market`
3. `/singapore-pharmaceutical-market`
4. `/italy-portable-diagnostic-devices-market`
5. `/services/competitive-intelligence`
6. `/services/market-access`
7. `/gcc-market-access-guide`
8. `/brazil-healthcare-market-report`
9. `/pharmaceutical-companies-iran`
10. `/pharmaceutical-companies-iraq`

## DEPLOY CHECKLIST (files changed)

- `src/data/specialtyMarketDemandContent.ts`
- `src/pages/templates/SpecialtyMarketDemandPage.tsx`
- `src/pages/GccMarketAccessGuide.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/IranPharmaCompanies.tsx`
- `src/pages/IraqPharmaCompanies.tsx`
- `src/pages/ServiceDetail.tsx`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `docs/seo/website-audit-2026-08-31.md`
- `reports/weekly-report-2026-08-31.md`
