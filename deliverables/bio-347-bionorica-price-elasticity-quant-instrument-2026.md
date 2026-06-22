# BioNorica Egypt — HCP Price Elasticity Study
## Quantitative Instrument Design Pack (BIO-347)

**Client:** Bionorica EG (Dr. Hossam ElFaramawy, Head of Marketing)  
**Prepared by:** BioNixus Data Analytics  
**Date:** 22 June 2026  
**Status:** Draft for field programming — calibrate price ladders at kickoff with client price scenarios  
**Parent:** [BIO-345](/BIO/issues/BIO-345) · **Qual companion:** `deliverables/bio-345-bionorica-price-elasticity-qual-methodology-2026.md`

---

## 1. Executive summary

This pack specifies the **quantitative elasticity modules** embedded in the same HCP session as the qualitative block defined in BIO-345. Each module is specialty-aligned, brand-specific, and programmed for tablet/CAPI delivery after the qual warm-up (moderators remain blinded to client target prices during qual).

**Deliverables in this pack:**

| # | Module | Purpose |
|---|--------|---------|
| 1 | Gabor-Granger price ladder | Direct purchase/prescribing intent curve vs price |
| 2 | Van Westendorp (PSM) | Acceptable price range (too cheap / cheap / expensive / too expensive) |
| 3 | Discrete-choice vignettes (optional) | Competitive substitution at fixed price scenarios |
| 4 | Power / precision note | Sample tiers 100 / 200 / 300 per brand |
| 5 | Dashboard metric tree | Elasticity outputs for commercial planning |

**Session fit (time budget):**

| Session | Brands | Quant block | Minutes |
|---------|--------|-------------|---------|
| ENT | Sinupret Forte | GG + PSM + DCE (1 vignette set) | 20–25 |
| PED combined | Sinupret Syrup, Bronchipret | Per-brand GG + PSM; shared DCE block | ~25 min each brand |
| URO | Canephron | GG + PSM + DCE | 20–25 |

**Kickoff dependency:** Final EGP ladder rungs and competitive-set SKUs require Bionorica handoff (current list price, planned increase scenarios, and MOH tender price where applicable). Section 3 uses **illustrative rungs** anchored to Egypt herbal Rx pack-price bands; programming locks after kickoff sign-off.

---

## 2. Design principles

1. **Neutrality sequencing:** Quant module starts only after qual close (BIO-345 §6.7). No client target prices in qual warm-up.
2. **Pack-price framing:** All prices shown as **EGP per standard pack** (client-defined pack size at kickoff). Course-of-therapy helper text available on-screen (“≈ X EGP per 7-day course”).
3. **Channel context priming:** One screener-confirmed practice setting (MOH hospital / private hospital / clinic-retail) carried into analysis weights; not re-asked per question.
4. **Randomized ladder order:** Gabor-Granger price points presented in **random order** per respondent to reduce anchoring.
5. **Brand isolation (PED):** Complete Syrup quant block before Bronchipret quant block; separate response vectors (`SYR_*`, `BRO_*` variables).
6. **Pre-launch handling (Bronchipret):** GG/PSM use **hypothetical launch price** framing; DCE compares planned SKU vs incumbents (§5.3).

---

## 3. Gabor-Granger price ladder specifications

### 3.1 Method

For each brand, show **7 price points** (P1–P7) in random order. At each price, ask:

> *“If [BRAND] were available at **[PRICE] EGP** per pack in your typical practice setting, what share of your eligible patients would you **start on or continue** this brand in the next month?”*

**Response:** 0–100% slider (5-point increments) + validation: sum of “would prescribe” + “would not” = 100%.

**Derived outputs:**

- **Demand curve:** Mean intended prescribing share by price
- **GG breakpoint:** Lowest price where mean share ≥ 50% (primary) and ≥ 70% (secondary loyalty threshold)
- **Arc elasticity (local):** Between adjacent rungs: `ε = (ΔQ/Q) / (ΔP/P)` where Q = mean prescribing share

### 3.2 Illustrative price ladders (calibrate at kickoff)

Set **P4 = current list price (CLP)** at kickoff. Ladder spans −30% to +40% of CLP in equal log-spaced steps where possible; round to nearest 5 EGP.

| Rung | Sinupret Forte (ENT) | Sinupret Syrup (PED) | Bronchipret (PED) | Canephron (URO) |
|------|----------------------|----------------------|-------------------|-----------------|
| P1 (−30%) | 98 EGP | 72 EGP | 84 EGP | 95 EGP |
| P2 (−20%) | 112 EGP | 82 EGP | 96 EGP | 108 EGP |
| P3 (−10%) | 126 EGP | 92 EGP | 108 EGP | 122 EGP |
| **P4 (CLP)** | **140 EGP** | **102 EGP** | **120 EGP** | **135 EGP** |
| P5 (+10%) | 154 EGP | 112 EGP | 132 EGP | 149 EGP |
| P6 (+20%) | 168 EGP | 122 EGP | 144 EGP | 162 EGP |
| P7 (+40%) | 196 EGP | 143 EGP | 168 EGP | 189 EGP |

*Illustrative only — replace CLP and rungs with Bionorica-confirmed figures.*

**Pack definitions (programming labels):**

| Brand | Pack label | Typical course |
|-------|------------|----------------|
| Sinupret Forte | 20 DR tabs | 7–14 days acute / chronic maintenance |
| Sinupret Syrup | 100 ml bottle | 5–7 days pediatric course |
| Bronchipret | 100 ml syrup (planned) | 5–7 days pediatric cough |
| Canephron | 60 DR tabs | 14–28 days UTI prophylaxis course |

### 3.3 Competitive set by specialty (for DCE + qual crosswalk)

Used in discrete-choice vignettes (§5) and as **substitution labels** in GG follow-up probe.

| Specialty | Primary brand | Competitive set (max 4 in DCE) | Role |
|-----------|---------------|--------------------------------|------|
| ENT | Sinupret Forte | Mucosolvan, Telfast, Avamys, local herbal ENT combo | Rx + OTC-adjacent sinus care |
| PED (Syrup) | Sinupret Syrup | Prospan, Mucosolvan pediatric, Ventolin syrup (adjunct), local herbal cough | Pediatric respiratory |
| PED (Bronchipret) | Bronchipret (planned) | Prospan, Mucosolvan pediatric, Pulmicort neb (severe), Sinupret Syrup | Pre-launch vs incumbents |
| URO | Canephron | Cystex, Ural, Monurol, cranberry OTC brands | UTI / urology herbal |

**Kickoff action:** Bionorica confirms SKU list, MOH formulary status, and share-of-prescriptions priors for DCE attribute levels.

### 3.4 GG follow-up (single question per brand)

After ladder completion:

> *“At what price (EGP per pack) would you **stop initiating** new patients on [BRAND]?”*

Open numeric + “Would not stop / not applicable” option. Used to validate GG breakpoint vs stated threshold (triangulation with qual `PRICE_THRESH` code).

---

## 4. Van Westendorp (Price Sensitivity Meter) module

### 4.1 Question set (per brand)

Four cumulative questions — standard PSM wording adapted for **prescriber-as-agent** (physician estimates patient/channel acceptance):

| # | Question | Variable |
|---|----------|----------|
| Q1 | Below what price would you question the **quality or efficacy** of [BRAND]? | `PSM_TooCheap` |
| Q2 | At what price does [BRAND] seem **inexpensive / good value** for your typical patient? | `PSM_Cheap` |
| Q3 | At what price does [BRAND] begin to seem **expensive** but you would still prescribe for appropriate patients? | `PSM_Expensive` |
| Q4 | Above what price would you **rarely or never** prescribe [BRAND] regardless of clinical fit? | `PSM_TooExpensive` |

**Input:** Numeric EGP; soft bounds P1–P7 min/max from GG ladder ±20%; flag outliers >3 SD for QC review.

### 4.2 Derived PSM outputs

| Metric | Definition | Dashboard use |
|--------|------------|---------------|
| **OPP** (Optimal Price Point) | Intersection: “Too cheap” vs “Too expensive” | Target price band centre |
| **IDP** (Indifference Price Point) | Intersection: “Cheap” vs “Expensive” | Acceptable mid-range |
| **PMC** (Point of Marginal Cheapness) | “Cheap” vs “Too expensive” | Floor price |
| **PME** (Point of Marginal Expensiveness) | “Expensive” vs “Too cheap” | Ceiling price |
| **Acceptable range** | PMC – PME | Price corridor for planning |

### 4.3 PED combined-session note

Run full PSM block for **Sinupret Syrup**, then full PSM block for **Bronchipret**. Do not reuse Syrup responses for Bronchipret. Allow 60-second reset prompt between blocks.

---

## 5. Discrete-choice vignettes (optional module)

### 5.1 When to include

**Recommended for Tier B and C** (n ≥ 200 per brand). Optional at Tier A (n=100) if session time exceeds 75 min — Field Ops to monitor fatigue in pilot (n=4).

### 5.2 Design

**3 choice tasks × 3 alternatives** per brand (including “No prescription / watchful waiting” for Bronchipret pre-launch). Attributes:

| Attribute | Levels (example — ENT) |
|-----------|------------------------|
| Brand | Sinupret Forte, Mucosolvan, Avamys, Herbal combo |
| Price (EGP/pack) | Low / Mid / High scenario (fixed per task from client scenarios S1–S3) |
| Evidence strength | Strong RCT / Moderate / Traditional use |
| Patient affordability | Most patients afford / Many struggle / MOH list only |

**Choice question:**

> *“Which product would you prescribe for this patient?”* (single select)

**Scenarios S1–S3 (client-defined at kickoff):**

| Scenario | Description | Example price multiplier |
|----------|-------------|--------------------------|
| S1 | Current market | 1.0× CLP |
| S2 | Planned increase | 1.15× CLP |
| S3 | Aggressive increase | 1.30× CLP |

### 5.3 Bronchipret pre-launch variant

- Sinupret Forte/Syrup/Canephron: all alternatives are **market-available**.
- Bronchipret: include **hypothetical Bronchipret** card with stated launch efficacy claim (client-approved label copy only) vs Prospan, Mucosolvan pediatric, Sinupret Syrup.
- Add attribute: **Launch familiarity** — “New brand you have not prescribed” vs “Brand you know from other markets”.

### 5.4 DCE outputs

- **Share of preference** by brand at each scenario (simulated market share)
- **Cross-price substitution matrix:** Δ share of competitor j when brand i price increases S1→S2
- **WTP ratio:** Sinupret Forte vs Mucosolvan from paired tasks (logit coefficients)

---

## 6. Power and precision note (sample tiers 100 / 200 / 300)

### 6.1 Primary estimand

**Mean prescribing share at client planned price P*** (from kickoff scenario S2), estimated via Gabor-Granger interpolation at P*.

### 6.2 Precision assumptions

| Parameter | Assumption | Source |
|-----------|------------|--------|
| Confidence level | 95% | Standard |
| Design effect (DEFF) | 1.25 | Clustered quotas (geo × setting) |
| Expected share at P* | 55% (conservative) | Prior HCP pricing studies |
| Max acceptable CI half-width | ±8 pp (Tier A), ±6 pp (Tier B), ±5 pp (Tier C) | Client decision risk |

### 6.3 Required n (per brand, independent)

Using binomial CI for proportion with DEFF adjustment: `n_eff = DEFF × z² × p(1−p) / ME²`

| Tier | n per brand | ME on share at P* (approx.) | Subgroup cuts feasible? |
|------|-------------|-----------------------------|-------------------------|
| **A — 100** | 100 | ±10 pp | National only; limited setting splits |
| **B — 200** | 200 | ±7 pp | **Recommended** — setting (3) × volume tercile with pooling |
| **C — 300** | 300 | ±6 pp | Setting + volume + KOL booster; governorate rare cells |

### 6.4 Elasticity slope precision

For arc elasticity between P4 and P5 (+10% price step), with σ_share ≈ 15 pp:

| Tier | n | SE(Δshare) | Detectable Δshare (80% power, α=0.05) |
|------|---|------------|----------------------------------------|
| 100 | 100 | ~3.0 pp | ~8 pp change |
| 200 | 200 | ~2.1 pp | ~6 pp change |
| 300 | 300 | ~1.7 pp | ~5 pp change |

**Interpretation:** Tier A supports **directional** elasticity and national curves; Tier B supports **commercial scenario modelling** with setting splits; Tier C supports **segment-level** pricing (KOL vs volume, Cairo vs Alexandria contrasts).

### 6.5 PED cohort correlation

Sinupret Syrup and Bronchipret share the same pediatrician (n_ped sessions = tier n, not 2n). **Analysis:** treat brands as separate estimands with **same-respondent correlation** (GEE or clustered SE with physician ID). Power for **within-physician cross-brand comparison** (RQ: defend Syrup vs Bronchipret first) is **higher** than independent samples — paired t-test on n=100/200/300 achieves ME ±6/4/3 pp on paired share difference.

### 6.6 Non-response and QC

Plan **12% over-recruit** for no-shows and QC fail. Exclusion rules: straight-lining GG ladder (identical shares all rungs), completion <80% quant module, moderation neutrality flag.

---

## 7. Dashboard metric tree

```
BioNorica Price Elasticity Dashboard
├── Executive summary
│   ├── Recommended price band by brand (OPP–PME from PSM)
│   ├── Planned scenario S2: projected share vs current (GG interpolation)
│   └── Revenue sensitivity index (client volume inputs × share delta)
│
├── Brand modules (×4)
│   ├── Sinupret Forte (ENT)
│   ├── Sinupret Syrup (PED)
│   ├── Bronchipret (PED)
│   └── Canephron (URO)
│       ├── Demand curve (GG): share vs EGP — interactive
│       ├── PSM chart: cumulative distributions + OPP/IDP/PMC/PME
│       ├── Elasticity table: local ε at each rung; arc ε P4→P5, P4→P6
│       ├── Stated threshold: open-ended stop-initiate price (histogram)
│       └── DCE (if fielded): share of preference by scenario S1–S3
│
├── Segmentation cuts
│   ├── Practice setting (MOH / private hospital / clinic-retail)
│   ├── Prescribing volume tercile
│   ├── Geography (Cairo / Alexandria / other urban)
│   └── Experience (current prescriber vs lapsed)
│
├── Competitive dynamics
│   ├── Substitution matrix (DCE or qual-coded SUBST_SWITCH overlay)
│   └── Cross-brand PED view: Syrup vs Bronchipret paired elasticity
│
├── Qual–quant triangulation (post-field, with QualitativeResearchSpecialist)
│   ├── Theme overlay on GG breakpoints (PRICE_THRESH quotes)
│   └── Contradiction flag: high stated loyalty + low GG share at P5
│
└── Data export
    ├── Respondent-level de-identified CSV
    └── Scenario simulator inputs (CLP, S2, S3 sliders for client workshop)
```

**KPI definitions:**

| KPI | Formula | Decision use |
|-----|---------|--------------|
| `share_at_plan` | GG interpolated share at P(S2) | Volume impact of planned increase |
| `breakpoint_50` | min price where mean share ≥ 50% | Walk-away threshold |
| `elasticity_arc_10pct` | ε from P4 to P5 | Short-run price sensitivity |
| `psm_range_width` | PME − PMC | Negotiation band with MOH/private payers |
| `substitution_leakage` | DCE share loss to alt #1 at S2 | Competitive risk |

---

## 8. Programming specification

### 8.1 Variable naming

| Prefix | Brand |
|--------|-------|
| `SF_` | Sinupret Forte |
| `SYR_` | Sinupret Syrup |
| `BRO_` | Bronchipret |
| `CAN_` | Canephron |

Example: `SF_GG_P4_share`, `SYR_PSM_TooExpensive`, `BRO_DCE_T2_choice`.

### 8.2 Survey flow (ENT example)

1. Screener / quotas (pre-session)
2. Qual block (moderator-led, not in CAPI)
3. **CAPI handoff:** “Structured pricing questions — ~20 minutes”
4. SF_GG ladder (7 rungs, randomized)
5. SF_GG stop-initiate open numeric
6. SF_PSM (4 questions)
7. SF_DCE (3 tasks) — if tier ≥ B
8. Session close

### 8.3 Localization

- Arabic primary; English clinician option if respondent prefers (≤15% expected)
- EGP formatted with thousands separator; no USD in field instrument
- Compliance footer: research purpose, no inducement to prescribe

---

## 9. Handoffs and next steps

| Owner | Action |
|-------|--------|
| **Bionorica (kickoff)** | Confirm CLP, S2/S3 scenarios, competitive SKU list, pack sizes |
| **FieldOperationsManager** | CAPI build from this spec; pilot n=4 timing check |
| **Research Compliance Specialist** | HCP-facing wording review (prescriber-as-agent PSM) |
| **QualitativeResearchSpecialist** | Mixed-methods synthesis memo post-field ([BIO-347 handoff target](/BIO/issues/BIO-347)) |
| **Market Research Manager** | Instrument sign-off before field launch |

**Pilot acceptance criteria (W2, n=4):**

- [ ] Median quant block ≤ 25 min (ENT/URO) / ≤ 50 min total PED both brands
- [ ] ≤5% GG straight-line flags
- [ ] PSM logical ordering violations <10% (auto-prompt re-entry)
- [ ] Moderator confirms no qual price leakage before CAPI handoff

---

## Appendix A — Gabor-Granger CAPI question text (English master)

**Stem (per rung):**

> You told us you see approximately [N] patients per month who could appropriately receive **[BRAND]** for [CONDITION INDICATION].
>
> If **[BRAND]** were priced at **[PRICE] EGP** per pack in your practice, what percentage of those patients would you prescribe **[BRAND]**?

**Scale:** 0% — 100% (slider)

**Condition labels:**

| Brand | Condition prompt |
|-------|------------------|
| Sinupret Forte | acute or chronic rhinosinusitis / upper respiratory congestion |
| Sinupret Syrup | pediatric upper respiratory symptoms suitable for herbal syrup |
| Bronchipret | pediatric cough/bronchitis suitable for herbal syrup (when available) |
| Canephron | UTI prophylaxis or adjunct herbal therapy |

---

## Appendix B — Analysis plan summary

1. **Clean:** Remove failed QC; winsorize PSM at 1st/99th percentile within brand
2. **GG curve:** LOESS or linear interpolation between rungs; bootstrap 95% CI on share at P*
3. **PSM:** Kernel smoothing (Silverman) for cumulative curves; report OPP/IDP/PMC/PME
4. **Elasticity:** Report arc ε at each step; meta-analyse across settings if n ≥ 30 per cell
5. **DCE:** Multinomial logit (MNL) or mixed logit if Tier C; simulation at S1–S3
6. **Triangulation:** Join qual codes `PRICE_THRESH`, `SUBST_SWITCH` to quant breakpoints by respondent ID

---

*Document version: 1.0 — BIO-347 quant instrument design pack*
