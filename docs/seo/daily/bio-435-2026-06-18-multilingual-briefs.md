# BIO-435 Multilingual Blog Briefs — 2026-06-18

**Workflow:** SEO brief → Market Research Manager data validation → Copywriter draft → GEOSpecialist LLM pass → `scripts/publish-*.mjs` or `sanity-content-uploader/scripts/uploadBlogPost.ts`

**Shared requirements (all languages):**
- 1,800–2,500 words bodyHtml
- H1 + 6–8 H2 sections with `id` anchors matching `tableOfContents`
- 5 FAQ items in `<details>/<summary>` HTML
- `seo.metaTitle` ≤60 chars, `seo.metaDescription` ~155 chars
- 3–5 internal links to live BioNixus URLs (hub `/healthcare-market-research` within first 200 words)
- Cover image via `scripts/generate-blog-cover.mjs` or sanity-blog-cover skill; descriptive alt text
- `language` field set to locale code
- No keyword stuffing; E-E-A-T citations to regulators/payers where applicable

---

## EN — Europe (slot 2/3)

| Field | Value |
|-------|-------|
| **Title** | EMA HTA Evidence Requirements for Pharmaceutical Market Access in Europe (2026) |
| **Slug** | `ema-hta-evidence-requirements-europe-2026` |
| **Focus keyword** | healthcare market research europe |
| **Secondary** | EMA HTA regulation, joint clinical assessment EU, pharmaceutical market access Europe |
| **Intent** | Informational → commercial (EU market access / medical affairs) |
| **H2 outline** | EU HTA Regulation timeline · Joint Clinical Assessment vs Joint Scientific Consultation · Real-world evidence expectations · Country-level pricing divergence (DE/FR/ES) · How primary research supports HTA dossiers · BioNixus EU fieldwork · FAQ |
| **Internal links** | `/healthcare-market-research/europe`, `/healthcare-market-research/germany`, `/healthcare-market-research/france`, `/heor-consulting` |
| **MRM data needs** | JCA rollout dates, EMA reference sources, exemplar therapy areas |

---

## EN — USA (slot 3/3)

| Field | Value |
|-------|-------|
| **Title** | FDA Real-World Evidence for Market Access: A 2026 Guide for Pharma Teams |
| **Slug** | `fda-real-world-evidence-market-access-usa-2026` |
| **Focus keyword** | pharmaceutical market research USA |
| **Secondary** | FDA real world evidence guidance, RWE market access USA, HEOR United States |
| **Intent** | Informational → commercial |
| **H2 outline** | FDA RWE framework update · Payer vs FDA evidence needs · Claims/EHR/RWD sources · Design pitfalls for US launches · Linking RWE to pricing & access · BioNixus US programs · FAQ |
| **Internal links** | `/healthcare-market-research/united-states`, `/real-world-evidence`, `/contact` |
| **MRM data needs** | FDA guidance citations, CMS/payer context (directional) |

---

## AR — Saudi Arabia priority

| Field | Value |
|-------|-------|
| **Title** | دليل أبحاث السوق الصحي في المملكة العربية السعودية 2026 |
| **Slug** | `saudi-healthcare-market-research-guide-ar-2026` |
| **Focus keyword** | أبحاث السوق الصحي السعودية |
| **Secondary** | أبحاث السوق الدوائية السعودية، SFDA، NUPCO |
| **Intent** | Commercial/informational (RTL layout) |
| **H2 outline** | مشهد الرعاية الصحية 2030 · SFDA وNUPCO · منهجيات البحث الكمي والنوعي · مجالات علاجية ذات أولوية · تجنب الأخطاء الشائعة · BioNixus في السعودية · FAQ |
| **Internal links** | `/ar/healthcare-market-research/saudi-arabia`, `/sfda-market-access-strategy-saudi-arabia` |
| **MRM data needs** | Vision 2030 stats, SFDA/NUPCO process accuracy |

---

## DE — Germany

| Field | Value |
|-------|-------|
| **Title** | Pharmamarktforschung Deutschland 2026: AMNOG, G-BA und Evidenzanforderungen |
| **Slug** | `pharmamarktforschung-deutschland-2026` |
| **Focus keyword** | pharmamarktforschung deutschland |
| **Secondary** | Gesundheitsmarktforschung Deutschland, AMNOG Marktzugang |
| **Internal links** | `/de/healthcare-market-research/germany`, `/healthcare-market-research/germany` |

---

## FR — France

| Field | Value |
|-------|-------|
| **Title** | Études de marché pharmaceutique en France 2026 : HAS, accès et recherche |
| **Slug** | `etudes-marche-pharmaceutique-france-2026` |
| **Focus keyword** | études de marché pharmaceutique france |
| **Secondary** | recherche santé france, accès au marché HAS |
| **Internal links** | `/fr/healthcare-market-research/france` |

---

## ES — Spain

| Field | Value |
|-------|-------|
| **Title** | Investigación de mercado farmacéutico en España 2026: guía para equipos de acceso |
| **Slug** | `investigacion-mercado-farmaceutico-espana-2026` |
| **Focus keyword** | investigación de mercado farmacéutico |
| **Secondary** | estudios de mercado salud españa, acceso mercado farmacéutico |
| **Internal links** | `/es/healthcare-market-research/spain` |

---

## PT — Brazil priority

| Field | Value |
|-------|-------|
| **Title** | Pesquisa de mercado farmacêutico no Brasil 2026: ANVISA, CONITEC e lançamento |
| **Slug** | `pesquisa-mercado-farmaceutico-brasil-anvisa-2026` |
| **Focus keyword** | pesquisa de mercado farmacêutico brasil |
| **Secondary** | ANVISA registro, CONITEC incorporação, pesquisa mercado saúde brasil |
| **Intent** | Informational → commercial (LATAM launch teams) |
| **H2 outline** | Panorama do mercado 2026 · ANVISA e registro · CONITEC e incorporação · Pesquisa primária com médicos e pagadores · Erros comuns em estudos locais · BioNixus Brasil · FAQ |
| **Internal links** | `/healthcare-market-research/brazil`, `/top-market-research-companies-brazil-2026` |
| **MRM data needs** | ANVISA/CONITEC process steps, Brazil market sizing (directional, cited) |

---

## ZH — Chinese

| Field | Value |
|-------|-------|
| **Title** | 2026年医药市场研究指南：全球药企亚太证据策略 |
| **Slug** | `pharmaceutical-market-research-china-2026` |
| **Focus keyword** | 医药市场研究 |
| **Secondary** | 制药市场研究, 医疗健康市场调研 |
| **Internal links** | `/zh/healthcare-market-research` |

---

## RU — Russian

| Field | Value |
|-------|-------|
| **Title** | Фармацевтические исследования рынка 2026: методология и доступ на рынок |
| **Slug** | `farmacevticheskie-issledovaniya-rynka-2026` |
| **Focus keyword** | фармацевтические исследования рынка |
| **Secondary** | маркетинговые исследования фарма, исследование рынка здравоохранения |
| **Internal links** | `/ru/healthcare-market-research` |

---

## Publish checklist (Copywriter)

Scaffolds, covers, and publish script are ready for Day 1:

1. Edit `scripts/data/{slug}.json` — replace all `[COPYWRITER: ...]` blocks and FAQ `Placeholder` answers (1,800–2,500 words total)
2. Publish: `node scripts/publish-bio435-article.mjs {slug}` (refuses publish if placeholders remain)
3. Manifest: `scripts/data/bio435-day1-manifest.json` · Covers: `public/images/blog/bio435-day1/`
4. Comment on [BIO-435](/BIO/issues/BIO-435) with slug + language after each publish
