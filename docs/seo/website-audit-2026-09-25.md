# BioNixus Website SEO Audit — 2026-09-25

**Automation:** Daily cron (`website-content-and-ranking`)  
**GSC data:** `reports/weekly-report-2026-09-25.md` (derived from latest exports + chart)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-09-25T04:16Z

---

## Executive summary

| Metric | Value | Notes |
|--------|------:|-------|
| Live pages audited | **657** | Sitemap scope + known gaps |
| Thin pages (<2,000 words) | **347** | Down from 213 in Jul audit after URL growth |
| 404 errors | **0** | No missing routes in scope |
| Fetch errors | **0** | — |
| `/healthcare-market-research` thin subpages | **29** | Therapy + country BOFU backlog |

### Google Search Console — impressions & CTR (7-day, 2026-09-25 report)

| Metric | This week | Target | vs target |
|--------|----------:|-------:|----------|
| Impressions/day | **4,448** | 15,000 | −10,552 |
| Clicks/day | **33** | 450 | −417 |
| CTR | **0.75%** | 3.0% | −2.25 pp |
| Avg. position | **25.8** | 5.0 | +20.8 (improved 2.6 vs last week) |

**Structural CTR drag:** United States = **33.3%** of impressions at **0.09%** CTR. Excl. US CTR = **1.08%**. Mobile CTR **2.23%** vs desktop **0.50%**.

**Winning cluster:** `/pharmaceutical-companies-*` = **1.60%** CTR (140 clicks / 8,756 impr).

**Deep-SERP drag:** `/japan-medical-devices-market-report` — 2,511 impr, **0.08%** CTR, pos **44.3**.

### Page-1 queries with 0% CTR (priority meta tests)

| Query | Pos | Impr (7d) | Action this run |
|-------|----:|----------:|-----------------|
| `cairo hospitals healthcare 2023-2026` | 1.9 | 152 | CTR title/meta refresh (hyphenated query match) |
| `iqvia competitors` | 6.3 | 36 | IQVIA alternative meta + `companies like IQVIA` in description |
| `pharmaceutical companies in kuwait` | 5.4 | 14 | Monitor existing ranked-list title |
| `best services for pharmaceutical market access besides iqvia` | 7.9 | 14 | IQVIA alternative page (FAQ + body already target) |

---

## Production crawl — thin pages & errors

### 404 inventory

**0 URLs** in audit scope (including `/specialist-physician-panel-uae`, `/msl-insight-research-middle-east`).

### Near-threshold fixes deployed (this run)

| Path | Pre (words) | Gap | Action |
|------|------------:|----:|--------|
| `/brazil-medtech-market-research` | 1,996 | 4 | Market paragraph + GeoLLMAnswerBlock on all developed-market MedTech pages |
| `/switzerland-medtech-market-research` | 1,995 | 5 | Regional procurement paragraph |
| `/spain-medtech-market-research` | 1,993 | 7 | Autonomous-community paragraph |
| `/denmark-medtech-market-research` | 1,991 | 9 | Nordic procurement paragraph |
| `/malaysia-medtech-market-research` | 1,982 | 18 | ASEAN hub paragraph |
| `/poland-medtech-market-research` | 1,964 | 36 | NFZ/private split paragraph |
| `/pharmaceutical-companies-iran` | 1,984 | 16 | Hospital/distributor channel paragraph |
| `/pharmaceutical-companies-uk` | 1,973 | 27 | ICB formulary paragraph |
| `/ru/services` | 1,977 | 23 | Additional Russian FAQ (field quality) |

### Remaining thin backlog

**347** URLs still below 2,000 words. Continue `docs/seo/bio-450-thin-page-research-briefs.md` — prioritize gap &lt;100 words, then GSC high-impression pages (Japan/GCC device reports, `/services` hub EN).

---

## LLM / chat appearance (GEO)

- **GeoLLMAnswerBlock** added to all developed-market MedTech service pages (`DevelopedMarketMedtechPage` → `StrategicServicePage`) with country-specific Q&A + WebPage schema.
- Static `/iqvia-alternative` retains FAQPage JSON-LD and answer-first body copy for `IQVIA competitors` / `companies like IQVIA`.
- Egypt blog CTR override aligns title with exact query `cairo hospitals healthcare 2023-2026`.

---

## Post-deploy checklist

1. `npm run indexnow:priority` — ping priority URLs after deploy
2. Re-run `node scripts/audit-thin-pages-bio450.mjs` on production
3. GSC URL Inspection: `/iqvia-alternative`, `/blog/healthcare-overview-egypt-market-2026`, `/brazil-medtech-market-research`
4. Upload fresh GSC export to `docs/seo/exports/` (last full export: 2026-06-22)

---

## Files changed (this run)

- `src/pages/templates/StrategicServicePage.tsx` — optional `geoLLM` prop
- `src/pages/templates/DevelopedMarketMedtechPage.tsx` — GeoLLMAnswerBlock wiring
- `src/data/developedMarketMedtechPages.ts` — near-threshold market copy (6 countries)
- `src/pages/IranPharmaCompanies.tsx`, `src/pages/UkPharmaCompanies.tsx` — channel paragraphs
- `src/data/servicesHubContent.ru.ts` — RU services FAQ expansion
- `lib/ctr-seo-overrides.mjs`, `src/server/ctr-seo-overrides.js` — IQVIA + Egypt CTR
- `public/conf/iqvia-alternative.html` — meta description sync
- `docs/seo/website-audit-2026-09-25.md` — this report
- `scripts/data/bio-450-thin-page-audit.json`, `docs/seo/bio-450-thin-page-inventory.csv` — crawl outputs
