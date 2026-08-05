# Website SEO audit — 2026-08-05

**Branch:** `cursor/website-content-and-ranking-ff05`  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` (2026-08-05T04:03Z)

## GSC baseline (Jun 22 export — refresh post-deploy)

| Metric | Baseline (7d / 3mo) | Target |
|--------|---------------------|--------|
| Impressions/day | ~3,700 | 15,000 |
| Clicks/day | ~30 | 45+ (3% CTR on 15k impr) |
| CTR | 0.82% | 3% |
| Avg position | ~30 | 5 |

**High-impression, low-CTR queries (action this sprint):**

| Query | Impressions | CTR | Position | Primary URL |
|-------|-------------|-----|----------|-------------|
| cairo hospitals healthcare 2023–2026 | 16,826 | 0% | 4.9 | `/blog/healthcare-overview-egypt-market-2026` |
| gcc-pharmaceutical-market-research | 3,592 | 0% | — | `/gcc-pharmaceutical-market-research` |
| gcc-medical-devices-market-report | 6,126 | 0.1% | — | `/gcc-medical-devices-market-report` |
| quantitative-healthcare-market-research | 1,665 | — | — | `/quantitative-healthcare-market-research` |

## Production crawl summary

| Check | Result |
|-------|--------|
| URLs audited | 530 |
| Live (200) | 530 |
| Thin (<2,000 words) | **291** |
| 404 | **0** |
| Errors | **0** |
| `/healthcare-market-research/*` thin | 34 |

**Near-threshold wins (gap ≤ 100 words) addressed this run:**

- `/china-medtech-market-research` (gap 3) — NMPA UDI FAQ
- `/egypt-healthcare-market-report` (gap 5) — Cairo hospitals FAQ + title/meta CTR
- `/singapore-medtech-market-research` (gap 5) — ACE SDL/MAF FAQ
- `/new-zealand-medtech-market-research` (gap 16) — PHARMAC device FAQ
- `/south-korea-medtech-market-research` (gap 18) — HIRA evaluation FAQ
- `/gcc-pharmaceutical-market-research` (gap 30) — GCC pharma FAQs + title refresh
- `/italy-medtech-market-research` (gap 36) — regional PTR FAQ

## Changes delivered (2026-08-05)

1. **Cherry-picked Aug 3–4 backlog** not yet on `main`: GCC/Egypt/Qatar/China/Brazil targeted FAQs, Cairo GSC block expansion, `llm.txt` GEO sections, Tier 7 recrawl URLs, Kantar GCC FAQ.
2. **MedTech BOFU expansion** — `supplementalFaqs` on `developedMarketMedtechPages.ts` for China, Singapore, Italy, New Zealand, South Korea.
3. **GCC medtech report** — biosimilar/HTA + SFDA EES FAQs; schema `dateModified` 2026-08-05.
4. **IndexNow Tier 8** — near-threshold MedTech URLs in `scripts/gsc-priority-recrawl.txt`.
5. **`llm.txt`** — MedTech near-threshold APAC/EU page block for LLM/chat retrieval.

## LLM / GEO checklist

- [x] `public/llm.txt` — GCC, quantitative, Egypt/Cairo, Qatar, MedTech BOFU URLs
- [x] Answer-first FAQ blocks on high-GSC pages (details/summary pattern)
- [x] Entity salience: BioNixus + canonical URLs in FAQ answers
- [ ] Post-deploy: `npm run indexnow:priority` on production credentials

## Remaining backlog

- **~284 thin pages** still below 2,000 words — batch by cluster (country MR matrix, PT/ES listicles, `/services` hub).
- Fresh GSC export (week ending 2026-08-05) to validate CTR on Cairo + GCC pharma/medtech title changes.
- Re-run thin-page audit post-deploy to confirm near-threshold pages cross 2,000 words.

## Deploy checklist

- `public/llm.txt`
- `public/conf/kantar-health-alternative-gcc.html`
- `scripts/gsc-priority-recrawl.txt`
- `src/data/egyptHealthcare2026CairoSeo.ts`
- `src/data/developedMarketMedtechPages.ts`
- `src/pages/EgyptHealthcareMarketReport.tsx`
- `src/pages/GccPharmaceuticalMarketResearch.tsx`
- `src/pages/GccMedicalDevicesMarketReport.tsx`
- `src/pages/HealthcareMarketResearchItaly.tsx`
- `src/pages/HealthcareMarketResearchNewZealand.tsx`
- `src/pages/HealthcareMarketResearchChina.tsx`
- `src/pages/ChinaHealthcareMarketReport.tsx`
- `src/pages/QatarPharmaceuticalMarketResearch.tsx`
- `src/pages/BrazilPharmaceuticalMarketResearch.tsx`
- `docs/seo/website-audit-2026-08-05.md`
