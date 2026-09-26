# Website SEO audit — 2026-09-26

## GSC snapshot (week ending 2026-09-26)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02 pp |
| Avg. position | **25.8** | 5.0 | +2.6 (improved) |

**Structural CTR notes:** US = 33% impressions @ **0.09% CTR**; ex-US CTR **1.08%**. Winning cluster: `/pharmaceutical-companies-*` @ **1.60% CTR**. Drag: `/japan-medical-devices-market-report` (2,511 impr, **0.08% CTR**, pos 44).

Full report: `reports/weekly-report-2026-09-26.md`

## Production crawl (BIO-450)

| Check | Result |
|---|---|
| URLs audited | 657 |
| HTTP errors | **0** |
| 404s | **0** |
| Thin pages (&lt;2,000 words) | **347** |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv`

## Shipped this run

1. **Near-threshold MedTech pages** — added market-context paragraphs (Brazil, Switzerland, Spain, Denmark, Poland, Malaysia).
2. **`/services`** — GeoLLMAnswerBlock + 3 FAQs (minimum engagement, IQVIA comparison, mixed-mode fieldwork).
3. **`/ru/services`** — additional FAQ for Russia/EAEU + global programme harmonisation.
4. **`/pharmaceutical-companies-iran` & `/pharmaceutical-companies-uk`** — FAQ expansion + `dateModified` 2026-09-26.
5. **`/japan-medical-devices-market-report`** — title/meta CTR iteration (market size + segment intent); `dateModified` 2026-09-26.
6. **`/iqvia-alternative`** — title/meta aligned to “IQVIA competitors” query (static HTML + SSR fallback title).

## Next priorities

1. Deploy; run `npm run indexnow:priority` for changed URLs.
2. Thin backlog **~340** after deploy — insights listicles, `/ar/services`, pharma spokes &lt;1,900w.
3. Upload fresh GSC export weekly to `data/gsc/current-week/`.
4. Page-1 zero-CTR queries: Cairo hospitals blog meta (server override exists), Dubai pharma directories, GCC FSP hub.

## DEPLOY CHECKLIST

- `src/data/developedMarketMedtechPages.ts`
- `src/data/servicesHubContent.ts`
- `src/data/servicesHubContent.ru.ts`
- `src/pages/Services.tsx`
- `src/pages/JapanMedicalDevicesMarketReport.tsx`
- `src/pages/IranPharmaCompanies.tsx`
- `src/pages/UkPharmaCompanies.tsx`
- `public/conf/iqvia-alternative.html`
- `server.js`
- `docs/seo/website-audit-2026-09-26.md`
- `reports/weekly-report-2026-09-26.md`
