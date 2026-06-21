# BIO-398 — UAE Diabetes Market Data Fact Pack
## For `/diabetes-market-research-uae` copy refresh ([BIO-399](/BIO/issues/BIO-399))

**Prepared by:** Market Research Director, BioNixus  
**Date:** 18 June 2026  
**Parent:** [BIO-392](/BIO/issues/BIO-392) (route live)  
**Source page audited:** `src/pages/DiabetesMarketResearchUae.tsx`

---

## 1. Executive summary (so what)

- **Update epidemiology to IDF 11th Edition (2024 estimates, published 2025).** The page cites “IDF Diabetes Atlas 2023” at ~19% and “4th highest globally.” Current IDF data show **20.7% age-standardised adult prevalence**, **1.27M adults with diabetes**, and **64% undiagnosed** — but the UAE is **not in the global top 10** by age-standardised prevalence (Kuwait 25.6%, Pakistan 31.4% lead the table).
- **Fix obesity stat.** Replace “~31% obesity” with **27.8% national obesity** (MoHAP Obesity Study 2023); use **67.9% overweight + obesity combined** when describing metabolic risk.
- **Prediabetes wording needs precision.** IDF reports **IFG 17.0%** and **IGT 18.2%** separately — do not imply a single “17–19% prediabetes” additive figure without methodology note.
- **Market sizing: cite scope.** BioNixus **USD 380–440M (2026)** is a **BioNixus estimate** for diabetes + metabolic (aligned with `uaeDiabetesMarketReport`). Third-party antidiabetics-only benchmark: Grand View Research **USD 238.8M (2024)** → **USD 366M (2030)** at 7.4% CAGR — useful triangulation, narrower drug-class scope.
- **Differentiation for SEO:** Lead with **undiagnosed burden (64%)**, **MENA-highest regional prevalence context**, **emirate-level obesity variance (22.2% Dubai → 39.1% Ajman/Fujairah)**, and **GLP-1-led market growth** — defensible, recent, and not generic “diabetes is common in GCC” copy.

---

## 2. Methodology

| Lens | Application |
|------|-------------|
| **Triangulation** | Epidemiology: IDF Atlas 11th ed. + MoHAP Obesity Study 2023 + peer-reviewed UAE diabetes literature. Market sizing: BioNixus internal registry + Grand View Research antidiabetics outlook. |
| **Primary vs secondary** | All metrics in this pack are **secondary (public)**. Payer formulary specifics, OBP appetite, and HCP prescribing splits flagged **low-confidence** without BioNixus primary research. |
| **Recency bias check** | Prefer **IDF 2024 estimates (Atlas 11th ed., 2025)** over Atlas 10th (2021/2023). MoHAP obesity data **2023**. Flag any Atlas 2023 citation for replacement. |
| **Survivorship bias** | Competitive landscape lists incumbents only; biosimilar entrants noted where IDF/regulatory context supports. |
| **Signal vs noise** | GLP-1 growth and undiagnosed diabetes are persistent multi-source signals. “4th highest globally” and “88% expatriate patients” are **noise / unsupported** — remove or reframe. |

**Sources consulted (with access dates):**

1. IDF Diabetes Atlas — UAE country page & country summary (accessed 18 Jun 2026)  
   https://diabetesatlas.org/data-by-location/country/united-arab-emirates/  
   https://idf.org/our-network/regions-and-members/middle-east-and-north-africa/members/united-arab-emirates/
2. IDF Diabetes Atlas 11th Edition — NCBI Bookshelf global chapter (accessed 18 Jun 2026)  
   https://www.ncbi.nlm.nih.gov/books/NBK618744/
3. MoHAP Obesity Study 2023 / World Obesity Federation country profile (accessed 18 Jun 2026)  
   https://www.mohap.gov.ae/en/w/obesity-study-2023  
   https://data.worldobesity.org/country/united-arab-emirates-225/
4. Grand View Research — UAE antidiabetics market outlook (accessed 18 Jun 2026)  
   https://www.grandviewresearch.com/horizon/outlook/antidiabetics-market/uae
5. BioNixus internal — `src/data/reportCopyOverrides/uaeDiabetesMarketReport.ts`, `legacyStatTuples.ts` (BioNixus market analysis, 2026)
6. Sulaiman N et al., *Sci Rep* 2018 — IDF-cited UAE diabetes prevalence source  
   https://doi.org/10.1038/s41598-018-24312-3

---

## 3. Claim audit — current page vs verified data

| # | Page claim (location) | Verdict | Verified figure / guidance | Source & date |
|---|----------------------|---------|---------------------------|---------------|
| 1 | “~19% adult diabetes prevalence (IDF Diabetes Atlas 2023)” | **Update** | **20.7%** age-standardised prevalence (adults 20–79), 2024 estimate | IDF Atlas 11th ed., 2025 |
| 2 | “4th highest globally” / “after Kuwait, Mauritius, Kiribati” | **Remove** | UAE **not in top 10** globally. 2024 leaders: Pakistan 31.4%, Marshall Islands 25.7%, Kuwait 25.6% | IDF Atlas 11th ed., Ch. 3 (NCBI) |
| 3 | “~1.1 million” people with diabetes | **Update** | **1,274,200** adults (20–79) with diabetes, 2024 | IDF UAE page |
| 4 | “6.5 million” adult population | **Update** | **7,710,700** adults (20–79), 2024 | IDF UAE page |
| 5 | “~31% obesity rate” | **Update** | **27.8%** obesity (national, adults); **67.9%** overweight + obesity combined | MoHAP Obesity Study 2023 |
| 6 | “17–19% prediabetes / IGT / IFG” (additive) | **Reframe** | IFG **17.0%**; IGT **18.2%** (separate IDF measures — not a single additive %) | IDF UAE page |
| 7 | Proof metric “~19% prevalence, 4th highest” | **Replace** | Use **20.7%** + **64% undiagnosed** or **1.27M adults** | IDF 2024 |
| 8 | “88% expatriate” diabetes patients | **Remove or soften** | UAE **resident population** ~88% expatriate (World Bank/planning stats) — **not validated** as diabetes-patient share. Use “majority expatriate population” only | No diabetes-specific epidemiology source found |
| 9 | “12% UAE nationals” in diabetes population | **Low confidence** | Nationals ~11–17% of total UAE population (varies by source/year) — **do not state as diabetes-patient %** without primary data | Flag for removal |
| 10 | Three payer channels (DHA / DOH-Daman / MOHAP) | **Keep** | Structurally correct for UAE federal + emirate systems | Desk review; revalidate formulary specifics annually |
| 11 | GLP-1 “endocrinologist-only” on DHA/DOH | **Soften** | Plausible prior-auth / specialty patterns but **formulary rules change** — cite as “often require specialist initiation or prior authorisation” | Requires payer desk check per product |
| 12 | OBP / managed-entry “Daman exploring” | **Soften** | Directionally plausible; **no strong public MOU/policy document** found. Frame as “emerging payer interest” or BioNixus advisory-board insight with disclaimer | Low-confidence secondary |
| 13 | GLP-1 self-pay **AED 500–900/month** | **Verify before publish** | Order-of-magnitude plausible for branded semaglutide but **price varies by product, dose, pharmacy** — cite as illustrative range with date | Pharmacy desk check needed |
| 14 | Programme cost **$75K–$200K** | **Keep (labelled)** | BioNixus commercial scope bands — not third-party benchmark | BioNixus positioning |
| 15 | Brand landscape (Novo, Sanofi, Lilly, AZ, Merck) | **Keep** | Directionally accurate for UAE diabetes market structure | Industry desk review |
| 16 | Mounjaro “highest-efficacy… as of 2024” | **Update to 2026** | Tirzepatide registered/available UAE — verify current label vs competitors | MOHAP/DHA registration desk |
| 17 | Ramadan fasting “50–80% of T2DM patients fast” | **Soften** | Literature supports high fasting rates among Muslim patients but **range is study-dependent** — cite “many” or “substantial proportion” | DaR Global Programme / regional studies |
| 18 | “70–80% Muslim” diabetes patients | **Soften** | UAE population majority Muslim — **patient % not independently verified** | Contextual, not hard stat |

---

## 4. Verified metrics — copy-ready (with citations)

### 4.1 Epidemiology (lead with these)

| Metric | Value | Suggested on-page phrasing | Source |
|--------|-------|---------------------------|--------|
| Adult diabetes prevalence (age-standardised) | **20.7%** (2024) | “About **one in five UAE adults** lives with diabetes (IDF, 2024 estimate)” | IDF Atlas 11th ed. |
| Adults with diabetes | **1.27 million** (1,274,200) | “More than **1.2 million adults**” | IDF Atlas 2024 |
| Adult population (20–79) | **7.71 million** | Use only if explaining denominator | IDF Atlas 2024 |
| Undiagnosed diabetes | **64.0%** of people with diabetes | “Roughly **two in three** cases are undiagnosed” — strong SEO differentiator | IDF Atlas 2024 |
| Undiagnosed count | **815,500** adults | Optional secondary stat | IDF Atlas 2024 |
| IFG (impaired fasting glucose) | **17.0%** age-standardised | “A further **~17%** have impaired fasting glucose” | IDF Atlas 2024 |
| IGT (impaired glucose tolerance) | **18.2%** age-standardised | “**~18%** have impaired glucose tolerance” — do not sum with IFG | IDF Atlas 2024 |
| 2050 projection | **1.9 million** adults with diabetes | Forward-looking urgency stat | IDF Atlas 2024 |
| Diabetes-attributable mortality | **10.9%** of deaths (20–79) | Optional policy/health-system stat | IDF Atlas 2024 |
| GDM prevalence | **30.3%** of live births (hyperglycaemia in pregnancy context) | Niche; use in women's health / pregnancy FAQ only | IDF Atlas 2024 |

**Regional context (accurate):** MENA is the **highest-prevalence IDF region** at **19.9%** age-standardised (2024), projected **22.8%** by 2050 — UAE at 20.7% is **high within a high-burden region**, not “4th in the world.”

### 4.2 Obesity & metabolic risk

| Metric | Value | Suggested phrasing | Source |
|--------|-------|-------------------|--------|
| National obesity (adults) | **27.8%** | “More than **one in four** adults lives with obesity” | MoHAP Obesity Study 2023 |
| Overweight + obesity combined | **67.9%** | “Nearly **seven in ten** adults are overweight or obese” | MoHAP / WOF profile |
| Obesity among women / men | **30.6% / 25.1%** | Gender split for patient-journey copy | MoHAP 2023 |
| Obesity by emirate (range) | **22.2%** (Dubai) to **39.1%** (Ajman, Fujairah) | Emirate-specific commercial targeting | MoHAP 2023 |

### 4.3 Market sizing (commercial)

| Metric | Value | Scope note | Source |
|--------|-------|------------|--------|
| UAE diabetes & metabolic market 2026 | **USD 380–440M** | Includes metabolic/obesity adjacency — **BioNixus estimate** | BioNixus market analysis 2026 |
| Forecast 2030 | **~USD 652M** | 14% CAGR 2026–30 | BioNixus estimate |
| UAE antidiabetics market 2024 | **USD 238.8M** | Drug-class revenue only (narrower) | Grand View Research |
| Antidiabetics forecast 2030 | **USD 366.0M** | 7.4% CAGR 2025–30 | Grand View Research |
| Largest drug class 2024 | **GLP-1 receptor agonists** | Fastest-growing segment | Grand View Research |
| Total pharma market (context) | **USD 4.45B (2025)** | Whole market, not diabetes-only | IMARC Group |

**Copy rule:** Never present BioNixus sizing and Grand View antidiabetics figures as the same scope. Preferred hero: BioNixus estimate with label; optional footnote triangulation to GVR antidiabetics.

### 4.4 Health expenditure (optional authority stat)

| Metric | Value | Source |
|--------|-------|--------|
| Total diabetes-related health expenditure | **USD 2,018M** (2024) | IDF Atlas 2024 |
| Per-person diabetes expenditure | **USD 1,584** (2024) | IDF Atlas 2024 |

---

## 5. Payer & access landscape (desk-level, revalidate before hard claims)

| Channel | Authority | Diabetes-relevant notes for copy |
|---------|-----------|----------------------------------|
| **Dubai** | DHA + licensed insurers | Mandatory insurance; Essential Benefits Plan / enhanced plans; formulary + prior auth common for premium agents |
| **Abu Dhabi** | DOH + **Daman** (Thiqa, Enhanced, etc.) | Distinct formulary; Thiqa vs employer-sponsored divergence matters for GLP-1 obesity vs diabetes framing |
| **Northern emirates / federal** | **MOHAP** + SEHA | Public-sector formulary tends **cost-containment** — generics/biosimilars favoured |

**Safe copy pattern:** “Access varies by **emirate and insurer** — DHA (Dubai), DOH/Daman (Abu Dhabi), and MOHAP (federal/northern emirates) apply different formulary and prior-authorisation rules.”

**Avoid:** Product-specific formulary status (e.g. “Farxiga listed for cardiorenal indication on DHA”) unless verified against current EDL/formulary PDFs.

---

## 6. Competitive landscape — verified desk summary

| Company | UAE diabetes positioning | Confidence |
|---------|-------------------------|------------|
| **Novo Nordisk** | Insulin + GLP-1 (Ozempic, Rybelsus, Victoza); market leader in incretin supply narrative | High (public launches, UAE field presence) |
| **Eli Lilly** | Trulicity, Mounjaro/tirzepatide, insulin portfolio; rapid UAE growth frequently cited in trade press | High |
| **Sanofi** | Basal insulin (Lantus/Toujeo), Soliqua; biosimilar pressure on glargine | Medium-high |
| **AstraZeneca** | Farxiga (dapagliflozin) — SGLT2 cardiorenal positioning | High |
| **Merck/MSD** | Januvia (sitagliptin) — mature DPP-4 class | High |
| **Biosimilar insulins** | Biocon/Mylan, Sandoz — public-sector and tender channels | Medium |

---

## 7. Research & recruitment feasibility (for service-offering copy)

| Claim on page | Recommendation |
|---------------|----------------|
| n=50–100 GP + n=40–60 endocrinologist surveys | **Keep** as BioNixus methodology band |
| n=20–30 patient IDIs | **Keep** — aligns with qual best practice |
| Arabic / Hindi-Urdu / English instruments | **Keep** — justified by UAE demographic structure |
| Clinic referral 70–80% vs panel 20–30% success | **Label as BioNixus field experience** — not published benchmark |
| 10–14 weeks, $75K–$200K programme | **Keep** with “indicative scope” disclaimer |

---

## 8. Gaps for Copywriter ([BIO-399](/BIO/issues/BIO-399)) — priority fixes

### P0 — factual errors (fix before publish)

1. Replace all **“19%”** and **“IDF 2023”** → **20.7%**, **IDF Atlas 11th ed. (2024 estimates, 2025 publication)**  
2. **Delete “4th highest globally”** and incorrect country ranking (Mauritius, Kiribati). Replace with: “among the **highest in the MENA region**” or “**~21% age-standardised prevalence**”  
3. Update **1.1M → 1.27M** and **6.5M → 7.7M** adult population if cited  
4. Update obesity **31% → 27.8%** (or use **68% overweight+obesity** for metabolic narrative)  
5. Remove **“88% expatriate diabetes patients”** and **“12% nationals”** unless sourced from BioNixus primary study  

### P1 — strengthen differentiation (SEO)

1. Add **64% undiagnosed** as hero proof metric — rare in competitor pages  
2. Add **emirate obesity variance** (Dubai vs Ajman/Fujairah) for local intent  
3. Cite **GLP-1 as largest/fastest antidiabetics class** (Grand View 2024)  
4. Add **MENA regional #1 prevalence** context (19.9% regional age-standardised)  

### P2 — soften or label

1. OBP / managed-entry claims → “emerging payer interest” + BioNixus primary-research disclaimer  
2. GLP-1 AED pricing → “illustrative; verify at pharmacy” or remove specific band  
3. Ramadan / Muslim patient % → qualitative framing without false precision  

---

## 9. Suggested hero / proof-metric replacements

**Current proof grid:**
- ~19% prevalence, 4th highest ❌  
- 10–14 weeks ✅ (methodology)  
- $75K–$200K ✅ (scope band, label BioNixus)  

**Recommended proof grid:**

| Tile | Headline | Subtext |
|------|----------|---------|
| 1 | **20.7%** | Adult diabetes prevalence (IDF 2024 estimate) |
| 2 | **64%** | Share of diabetes cases undiagnosed (IDF 2024) |
| 3 | **USD 380–440M** | UAE diabetes & metabolic market 2026 (BioNixus analysis) |

---

## 10. Source list (full)

| # | Source | Year | URL |
|---|--------|------|-----|
| 1 | IDF Diabetes Atlas 11th Edition — UAE country data | 2024 est. / 2025 pub. | https://diabetesatlas.org/data-by-location/country/united-arab-emirates/ |
| 2 | IDF — UAE member country summary | 2024 | https://idf.org/our-network/regions-and-members/middle-east-and-north-africa/members/united-arab-emirates/ |
| 3 | IDF Atlas 11th ed. — Global picture (NCBI Bookshelf) | 2025 | https://www.ncbi.nlm.nih.gov/books/NBK618744/ |
| 4 | MoHAP Obesity Study 2023 | 2023 | https://www.mohap.gov.ae/en/w/obesity-study-2023 |
| 5 | World Obesity Federation — UAE profile | 2024 | https://data.worldobesity.org/country/united-arab-emirates-225/ |
| 6 | Grand View Research — UAE antidiabetics outlook | 2024 base | https://www.grandviewresearch.com/horizon/outlook/antidiabetics-market/uae |
| 7 | Sulaiman N et al., Sci Rep | 2018 | https://doi.org/10.1038/s41598-018-24312-3 |
| 8 | BioNixus market analysis / UAE diabetes report | 2026 | Internal (`uaeDiabetesMarketReport.ts`) |

---

## 11. Limitations

- IDF national estimates rely on modelling where in-country survey data are sparse; UAE primary source cited by IDF is Sulaiman et al. 2018 — **recency gap** for national prevalence (flag in methodology footnote).  
- Commercial market sizing (BioNixus vs Grand View) reflects **different scopes** — not directly comparable.  
- Payer formulary, prior-auth, and OBP positions **change frequently** — no substitute for emirate-specific payer primary research before launch decisions.  
- Patient demographic splits (nationality, religion) on the current page are **not supported** by public epidemiology in this audit.

---

*End of fact pack. Hand off to Copywriter for [BIO-399](/BIO/issues/BIO-399).*
