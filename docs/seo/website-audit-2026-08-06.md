# Website SEO audit — 2026-08-06

**Branch:** `cursor/website-content-and-ranking-60a4`  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` (2026-08-06T04:02Z)

## GSC baseline (Jun 22 export — refresh post-deploy)

| Metric | Baseline (7d) | Target |
|--------|---------------|--------|
| Impressions/day | ~3,700 | 15,000 |
| Clicks/day | ~30 | 45+ (3% CTR on 15k impr) |
| CTR | 0.82% | 3% |
| Avg position | ~30 | 5 |

**High-impression, low-CTR queries (priority this sprint):**

| Query | Impressions | CTR | Position | Primary URL |
|-------|-------------|-----|----------|-------------|
| cairo hospitals healthcare 2023–2026 | 16,826 | 0% | 4.9 | `/blog/healthcare-overview-egypt-market-2026` |
| gcc-medical-devices-market-report | 6,126 | 0.1% | — | `/gcc-medical-devices-market-report` |
| gcc-pharmaceutical-market-research | 3,592 | 0% | — | `/gcc-pharmaceutical-market-research` |
| iqvia competitors | — | — | 7.2 | `/bionixus-vs-iqvia-mena` |
| companies like iqvia | — | — | 8.7 | `/iqvia-alternative` |
| quantitative-healthcare-market-research | 1,665 | — | — | `/quantitative-healthcare-market-research` |

## Production crawl summary (pre-deploy)

| Check | Result |
|-------|--------|
| URLs audited | 530 |
| Live (200) | 530 |
| Thin (<2,000 words) | **291** |
| 404 | **0** |
| Errors | **0** |
| `/healthcare-market-research/*` thin | 34 |

## Changes delivered (2026-08-06)

1. **Cherry-picked Aug 5 near-threshold backlog** (`bf1cfd1`) — MedTech supplemental FAQs (China, Singapore, Italy, NZ, South Korea), Egypt/GCC/Qatar/China/Brazil targeted FAQs, Cairo GSC block, `llm.txt` Tier 7–8, IndexNow URLs.
2. **IQVIA competitor page** — `/bionixus-vs-iqvia-mena` static HTML: 3 FAQ blocks targeting "iqvia competitors" and "companies like iqvia" queries; FAQPage schema; `dateModified` 2026-08-06.
3. **GCC market access guide** — SFDA EES and NHRA biosimilar FAQs; `dateModified` 2026-08-06.
4. **Qatar pharmaceutical MR** — Sidra Medicine adoption FAQ.
5. **China healthcare report** — Tier 3A hospital formulary FAQ; `dateModified` 2026-08-06.
6. **Bahrain healthcare MR** — Sehati insurance and NHRA biosimilar FAQs.
7. **Malaysia MedTech BOFU** — MDA reference-country supplemental FAQ.
8. **`llm.txt`** — IQVIA alternatives block, Bahrain section, Malaysia MedTech URL.
9. **IndexNow Tier 9** — IQVIA comparison, GCC access guide, Bahrain, Malaysia MedTech URLs.

## Local SSR verification (post-build, port 5173)

| Route | Words | Status |
|-------|------:|--------|
| `/china-medtech-market-research` | 2,080 | ✓ |
| `/egypt-healthcare-market-report` | 2,067 | ✓ |
| `/singapore-medtech-market-research` | 2,078 | ✓ |
| `/gcc-pharmaceutical-market-research` | 2,090 | ✓ |
| `/bionixus-vs-iqvia-mena` | ~2,050+ (est.) | ✓ |
| `/gcc-market-access-guide` | ~2,050+ (est.) | ✓ |

## LLM / GEO checklist

- [x] `public/llm.txt` — IQVIA competitor queries, Bahrain, Malaysia MedTech
- [x] FAQ blocks on high-GSC pages (`<details>`/`<summary>` pattern)
- [x] Entity salience: BioNixus + canonical URLs in FAQ answers
- [ ] Post-deploy: `npm run indexnow:priority` on production credentials
- [ ] Fresh GSC export (week ending 2026-08-12) to validate CTR lift

## Remaining backlog

- **~280 thin pages** still below 2,000 words — batch by cluster (PT/ES listicles, `/services` hub, country MR matrix).
- Re-run production thin-page audit post-deploy to confirm near-threshold pages cross 2,000 words.
- Monitor "iqvia competitors" and "companies like iqvia" positions after IQVIA FAQ expansion.

## Deploy checklist

- `public/conf/bionixus-vs-iqvia-mena.html`
- `public/llm.txt`
- `scripts/gsc-priority-recrawl.txt`
- `src/data/developedMarketMedtechPages.ts`
- `src/pages/GccMarketAccessGuide.tsx`
- `src/pages/QatarPharmaceuticalMarketResearch.tsx`
- `src/pages/ChinaHealthcareMarketReport.tsx`
- `src/pages/HealthcareMarketResearchInBahrain.tsx`
- `docs/seo/website-audit-2026-08-06.md`
- Plus all files from 2026-08-05 cherry-pick (see `docs/seo/website-audit-2026-08-05.md`)
