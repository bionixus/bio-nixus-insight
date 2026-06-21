# BIO-435 Day 1 — Copywriter Handoff (2026-06-18)

**Parent:** [BIO-435](/BIO/issues/BIO-435) · **Task:** [BIO-438](/BIO/issues/BIO-438)  
**MRM validation:** [BIO-437#document-validation](/BIO/issues/BIO-437#document-validation) · `docs/seo/daily/bio-437-data-validation-2026-06-18.md`

## Scoreboard (2026-06-18 EOD target: 10/10)

| # | Lang | Slug | Scaffold JSON | Cover | Sanity | MRM |
|---|------|------|---------------|-------|--------|-----|
| ✅ | en | `sfda-economic-evaluation-budget-impact-guide-2026` | — | ✅ | **Live** | — |
| 1 | en | `ema-hta-evidence-requirements-europe-2026` | `scripts/data/…json` | ✅ | ⏳ | Approved w/ caveats |
| 2 | en | `fda-real-world-evidence-market-access-usa-2026` | ✅ | ✅ | ⏳ | Approved w/ caveats |
| 3 | ar | `saudi-healthcare-market-research-guide-ar-2026` | ✅ | ✅ | ⏳ | Approved w/ caveats |
| 4 | pt | `pesquisa-mercado-farmaceutico-brasil-anvisa-2026` | ✅ | ✅ | ⏳ | Approved w/ caveats |
| 5 | de | `pharmamarktforschung-deutschland-2026` | ✅ | ✅ | ⏳ | Approved |
| 6 | fr | `etudes-marche-pharmaceutique-france-2026` | ✅ | ✅ | ⏳ | Approved w/ caveats |
| 7 | es | `investigacion-mercado-farmaceutico-espana-2026` | ✅ | ✅ | ⏳ | Approved w/ caveats |
| 8 | zh | `pharmaceutical-market-research-china-2026` | ✅ | ✅ | ⏳ | Approved w/ caveats |
| 9 | ru | `farmacevticheskie-issledovaniya-rynka-2026` | ✅ | ✅ | ⏳ | Approved w/ caveats |

**Current:** **10/10** live in Sanity (completed 2026-06-18 — see `bio-438-copywriter-completion-2026-06-18.md`).

---

## Workflow (per article)

1. Open `scripts/data/{slug}.json`
2. Read validated facts in `bio-437-data-validation-2026-06-18.md` (section matching slug)
3. Replace all `[COPYWRITER: …]` blocks + FAQ `Placeholder` answers (1,800–2,500 words)
4. Publish: `node scripts/publish-bio435-article.mjs {slug}`
5. Comment slug + language on [BIO-435](/BIO/issues/BIO-435)

Publish script **refuses** placeholder content.

---

## Priority order (Topic Authority lens)

1. **EN Europe + USA** — closes English geo split (2 remaining)
2. **AR (KSA)** — Arabic priority market
3. **PT (Brazil)** — zero-inventory locale + Brazil priority
4. **DE, FR, ES** — EU cluster (MRM cross-validated HTA/pricing)
5. **ZH, RU** — seed zero-inventory hreflang clusters

---

## MRM copy flags (all briefs)

- Use **ranges** for market sizes — no invented point estimates
- Cite **primary regulators** (EC, FDA, SFDA, ANVISA, G-BA, HAS, BOE)
- ES: RD 415/2026 effective **18 Jun 2026**
- USA: separate FDA RWE program from CMS/payer evidence
- EU: JCA clinical only; national pricing remains separate

---

## After all 9 publish

- [BIO-439](/BIO/issues/BIO-439) GEOSpecialist runs LLM/GEO pass
- SEO: re-run `scripts/generate-sitemap.mjs` + verify Article schema on live URLs
