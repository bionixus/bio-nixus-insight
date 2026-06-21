# BIO-435 Day 2 — Copywriter Handoff (2026-06-19)

**Parent:** [BIO-435](/BIO/issues/BIO-435) · **MRM task:** [BIO-442](/BIO/issues/BIO-442)  
**Copywriter task:** [BIO-443](/BIO/issues/BIO-443)  
**MRM validation:** [BIO-442#document-validation](/BIO/issues/BIO-442#document-validation) · `docs/seo/daily/bio-442-data-validation-2026-06-19.md`

## Scoreboard (Day 2 target: 10/10)

| # | Lang | Slug | MRM status |
|---|------|------|------------|
| 1 | en | `market-access-research-uae-2026` | Approved w/ caveats |
| 2 | en | `pharmacoeconomics-consulting-europe-2026` | Approved w/ caveats |
| 3 | en | `oncology-market-research-usa-2026` | Approved w/ caveats |
| 4 | ar | `heor-consulting-saudi-arabia-ar-2026` | Approved w/ caveats |
| 5 | de | `amnog-frueher-nutzen-marktzugang-2026` | Approved |
| 6 | fr | `evaluation-economique-has-france-2026` | Approved w/ caveats |
| 7 | es | `farmacoeconomia-acceso-mercado-espana-2026` | Approved w/ caveats |
| 8 | pt | `avaliacao-tecnologias-conitec-brasil-2026` | Approved w/ caveats |
| 9 | zh | `nmpa-pharmaceutical-market-research-china-2026` | Approved w/ caveats |
| 10 | ru | `eaeu-farmacevticheskiy-dostup-2026` | Approved w/ caveats |

---

## Workflow (per article)

1. Open `scripts/data/{slug}.json` (once scaffolded)
2. Read validated facts in `bio-442-data-validation-2026-06-19.md` (section matching slug)
3. Replace placeholder blocks; 1,800–2,500 words; 5 FAQ `<details>`
4. Add `_mrmValidation` block (see below)
5. Publish: `node scripts/publish-bio435-article.mjs {slug}`

### `_mrmValidation` JSON template

```json
"_mrmValidation": {
  "issue": "BIO-442",
  "doc": "docs/seo/daily/bio-442-data-validation-2026-06-19.md",
  "section": 1,
  "status": "Approved with caveats",
  "validatedAt": "2026-06-19"
}
```

---

## Priority order

1. **EN UAE + AR KSA** — GCC commercial priority (EDE + SFDA EES hooks)
2. **EN Europe + EN USA** — English geo completion
3. **DE, FR, ES** — EU economics cluster (cross-link Day-1 primers)
4. **PT, ZH, RU** — locale depth (CONITEC, NMPA, EAEU)

---

## MRM copy flags (all Day-2 briefs)

- **EDE not MOHAP** for UAE federal pricing/registration (2025+)
- **SFDA EES mandatory 1 Jul 2025** — KSA HEOR article
- **No invented ICERs or market-size point estimates** — use validated ranges
- **CMS/NCCN ≠ FDA** — US oncology article
- **RD 415/2026 effective 18 Jun 2026** — Spain
- **EAEU circulation rule Jan 2026** — Russia article
- Cross-link Day-1 cluster where topics overlap; do not cannibalize Day-1 primary keywords

---

## After all 10 publish

- GEOSpecialist: Day-2 GEO pass
- SEO: `scripts/generate-sitemap.mjs` + schema spot-check
