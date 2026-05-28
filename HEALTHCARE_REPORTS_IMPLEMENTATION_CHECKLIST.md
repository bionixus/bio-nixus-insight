# Healthcare market reports — implementation checklist

Tracks delivery against [`CURSOR_PROMPT_HEALTHCARE_REPORTS.md`](./CURSOR_PROMPT_HEALTHCARE_REPORTS.md).

**Live hub:** [https://www.bionixus.com/market-reports](https://www.bionixus.com/market-reports)

**Full URL list (81 routes):** [`MARKET_REPORTS_LIVE_URLS.md`](./MARKET_REPORTS_LIVE_URLS.md)

**Verify:** `npx tsc --noEmit` · `npm run generate-sitemap` · `npm run verify:market-reports`

---

## Implemented

### Constraints

- [x] Do not modify `Navbar`, `Footer`, or `Index` for this feature
- [x] TypeScript compiles (`npx tsc --noEmit`)

### Core deliverables (prompt “What you are building”)

- [x] **Data layer** — `src/data/healthcareReportTypes.ts`, `src/data/healthcareReportData.ts` (**89** reports)
- [x] **Shared content** — `src/data/healthcareReportContent.ts` (11 therapy + 9 market blocks)
- [x] **Report template** — `src/pages/HealthcareReportPage.tsx` (8 sections + schema)
- [x] **Hub** — `src/pages/HealthcareReportsHub.tsx` → `/market-reports`
- [x] **Therapy category** — `src/pages/HealthcareReportsByTherapy.tsx` → `/market-reports/therapy/:therapyAreaSlug`
- [x] **Country category** — `src/pages/HealthcareReportsByCountry.tsx` → `/market-reports/country/:marketSlug`

### Part 1 — Data (`healthcareReportData.ts`)

- [x] `ReportEntry` / `ReportFAQ` types in `healthcareReportTypes.ts`
- [x] **89** report rows (`SPECS` + `attachRelated`) including GCC/MENA specialty therapy × country matrix
- [x] All slug tables from prompt (oncology, diabetes, CV, immunology, respiratory, rare, neurology, specialty × markets)
- [x] Six extra reports beyond tables (still meets 60+ minimum)
- [x] **6 FAQs** per report (`src/data/healthcareReportFaqs.ts` — `buildHealthcareFaqs`)
- [x] FAQ themes: market size, regulatory, reimbursement, therapy classes, drivers, BioNixus
- [x] **5** `relatedSlugs` per report (`attachRelated`)
- [x] FAQ answers clamped **100–160 words** (`clampWords` in `healthcareReportFaqs.ts`)
- [x] **summaryPara1** (80–120) and **summaryPara2** (60–90) via `fitWordRange`
- [x] `marketAccessNotes` from `sum1Tail`; `fieldIntelligenceParagraph`, `commercialOutlookParagraph`, `methodologyParagraph` from sum1Tail + therapy/market snippets
- [x] Per-slug access bullets — `src/data/healthcareReportAccessBullets.ts` (`getAccessBullets`)

### Part 2 — Shared content

- [x] 11 therapy slugs in `THERAPY_AREA_CONTENT`
- [x] 9 market slugs in `MARKET_CONTENT` (gcc + 8 countries including turkey)
- [x] Institution/regulator detail in market copy (SFDA, NUPCO, MOHAP, etc.)

### Part 3 — Template sections

- [x] Breadcrumb + hero + “Published by BioNixus · Updated May 2026”
- [x] Executive summary + 3-stat grid + summary paragraphs + standalone/GCC links
- [x] Therapy market context (3 paragraphs)
- [x] Regulatory & reimbursement (3 paragraphs)
- [x] Key market access intelligence (bullets via `getAccessBullets`)
- [x] Field intelligence + commercial outlook + methodology blocks (before FAQ)
- [x] FAQ block + `FAQPage` JSON-LD
- [x] Related reports grid
- [x] CTA → `/contact`
- [x] Canonical `https://www.bionixus.com/market-reports/{slug}`
- [x] JSON-LD: `BreadcrumbList`, `Article`, `FAQPage`

### Part 4–6 — Hub & category pages

- [x] Hub: hero, therapy chips, geography filter, GCC/MENA vs Turkey grouping, SEO + schema
- [x] Therapy: filter by `therapyAreaSlug`, H1 pattern, overview, cards, back link
- [x] Country: filter by `marketSlug`, regulatory chip, standalone healthcare/devices links, cards, back link

### Part 7 — Routes

- [x] Four routes in `src/routes.tsx` (before `/blog`)

### Part 8 — Site map page

- [x] `marketReportLinks` in `src/pages/SiteMapPage.tsx` (hub + therapy/country hubs + standalone reports)
- [x] Therapy hubs: neurology-cns, biosimilars, digital-health, vaccines, dermatology
- [x] Country hubs: kuwait, qatar, bahrain, oman

### Internal linking

- [x] Hub / therapy / country list all reports
- [x] Cross-links via `relatedSlugs` + `src/lib/healthcareReportLinks.tsx`
- [x] `/healthcare-market-research` hub links to `/market-reports` (`HubPage.tsx`)
- [x] Inbound links from standalone pages:
  - `SaudiArabiaHealthcareMarketReport.tsx`
  - `UaeHealthcareMarketReport.tsx`
  - `GccPharmaMarketReport2026.tsx`
  - `EgyptHealthcareMarketReport.tsx`

### Sitemap & crawl

- [x] `scripts/generate-sitemap.mjs` emits hub, therapy/country hubs, and all report URLs
- [x] URLs present in `public/sitemap.xml`

### Quality tooling

- [x] `npm run verify:market-reports` — `scripts/verify-market-report-word-count.mjs` (Vite SSR load of `REPORT_ENTRIES`)

### File creation order (prompt §11)

- [x] Steps 1–11 effectively complete (plus helpers: `healthcareReportFaqs.ts`, `healthcareReportAccessBullets.ts`, `healthcareReportLinks.tsx`, `healthcareReportTypes.ts`)

---

## Pending / optional

### Content quality

- [ ] Spot-check live HTML word count vs script estimate (template chrome variance)
- [ ] Optional: hand-author FAQs on each `ReportEntry` instead of generated-only FAQs

### UX (not required by prompt)

- [ ] Add `/contact` CTA on hub, therapy hub, and country hub (template already has CTA)

### Repo hygiene

- [ ] Commit or relocate `CURSOR_PROMPT_HEALTHCARE_REPORTS.md` if it should live in version control
- [ ] Commit this checklist when ready

### Post-launch verification

- [ ] Crawl `/market-reports` and sample 5 report URLs in Search Console after deploy
- [ ] Confirm no duplicate canonicals vs `/healthcare-market-research/*` for same intent
- [ ] Re-run thin-content / duplicate-content exports after content QA pass

---

## Quick file map

| Role | Path |
|------|------|
| Spec | `CURSOR_PROMPT_HEALTHCARE_REPORTS.md` |
| Types | `src/data/healthcareReportTypes.ts` |
| 60 reports | `src/data/healthcareReportData.ts` |
| Therapy/market copy | `src/data/healthcareReportContent.ts` |
| FAQs | `src/data/healthcareReportFaqs.ts` |
| Access bullets | `src/data/healthcareReportAccessBullets.ts` |
| Cross-links | `src/lib/healthcareReportLinks.tsx` |
| Report page | `src/pages/HealthcareReportPage.tsx` |
| Hub | `src/pages/HealthcareReportsHub.tsx` |
| Therapy index | `src/pages/HealthcareReportsByTherapy.tsx` |
| Country index | `src/pages/HealthcareReportsByCountry.tsx` |
| Healthcare research hub | `src/pages/healthcare-research/HubPage.tsx` |
| Routes | `src/routes.tsx` |
| Sitemap generator | `scripts/generate-sitemap.mjs` |
| Word-count verify | `scripts/verify-market-report-word-count.mjs` |
| Live URL inventory | `MARKET_REPORTS_LIVE_URLS.md` |

---

*Last updated: content QA pass (clampWords, fitWordRange, access bullets, field intelligence, verify script).*
