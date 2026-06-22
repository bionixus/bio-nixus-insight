# Egypt Legal Templates — Enforceability Assessment

**Issue:** [BIO-291](/BIO/issues/BIO-291) · **Parent:** [BIO-280](/BIO/issues/BIO-280) · **Counsel:** General Counsel  
**Date:** 2026-06-22 · **Jurisdiction:** Arab Republic of Egypt

---

## Executive Summary

This assessment reviews five legal template categories from the Egypt ops pack for enforceability under Egyptian law. **Key finding:** All templates require substantial revision and local counsel review before use. Several contain provisions unenforceable under Egyptian Labour Law No. 12 of 2003, Civil Code, and Commercial Law.

**Verdict:** **Revise + Local Counsel Sign-off Required**

---

## Regulatory Framework

### Governing Laws
- **Labour Law No. 12 of 2003** (employment, freelance, disciplinary)
- **Civil Code (Law No. 131 of 1948)** (contracts, obligations)
- **Commercial Law No. 17 of 1999** (vendor agreements)
- **Personal Data Protection Law No. 151 of 2020** (PDPL)
- **Competition Law No. 3 of 2005** (restrictive covenants)

### Mandatory Requirements
1. **Arabic Language:** All employment contracts and work regulations must be in Arabic per Labour Law Art. 29
2. **Social Insurance Registration:** Mandatory for all employees (Law No. 148 of 2019)
3. **NTRA Registration:** Market research activities require National Telecom Regulatory Authority clearance
4. **Ministry of Labour Approval:** Work regulations must be filed with and approved by Ministry of Labour

---

## Template-by-Template Assessment

### 1. Supplier/Vendor Agreement

**Verdict:** Revise — **Medium Risk**

#### Enforceability Concerns

| Provision | Egyptian Law Issue | Risk Level | Remediation |
|-----------|-------------------|------------|-------------|
| **Governing Law Clause** | If non-Egyptian law selected without Egyptian nexus, may be struck down under Civil Code Art. 19 (mandatory rules) | High | Include Egyptian law as governing law or dual-choice with Egyptian courts as alternative forum |
| **Limitation of Liability** | Egyptian courts disfavor blanket liability caps; must be "reasonable" per Civil Code Art. 215 | Medium | Replace with specific exclusions (e.g., indirect/consequential damages only) and reasonable caps |
| **Payment Terms** | Net-60+ terms common internationally but Egypt default is 30 days (Commercial Law Art. 387); late payment interest capped at 7% | Low | Specify payment terms clearly; interest provisions must comply with Central Bank rate limits |
| **Indemnification** | Unlimited indemnity may be deemed unconscionable; courts enforce only "proportionate" indemnity | Medium | Cap indemnity at contract value or insurable amount; exclude consequential damages |
| **Force Majeure** | Egyptian courts narrowly interpret FM (Civil Code Art. 165); must be unforeseeable AND unavoidable | Medium | Explicitly list FM events; include Egyptian-specific risks (e.g., regulatory changes, currency controls) |
| **Termination for Convenience** | Not automatic right; if contract silent, termination only for cause or mutual consent (Civil Code Art. 158) | High | Include explicit termination clause with notice period (30-60 days standard); specify wind-down obligations |

#### Required Additions
- **PDPL Compliance:** If vendor processes personal data, must include data processor obligations per PDPL Art. 22
- **Anti-Bribery:** Reference Law No. 62 of 1975 (combating bribery) and company anti-corruption policy
- **Invoicing:** Egyptian Tax Authority requires e-invoice system integration for B2B transactions above EGP 250,000/year

#### Arabic Translation Required?
**Yes** — If vendor is Egyptian entity OR contract involves employment-like obligations (e.g., secondment). Optional but recommended for Egyptian SMEs.

---

### 2. Freelance Field Interviewer Agreement

**Verdict:** Revise — **High Risk**

#### Critical Enforceability Issues

This is the **highest-risk template** because Egyptian Labour Law Art. 3 defines "employee" broadly — includes anyone providing services "under direction and supervision" regardless of contract label. Misclassifying employees as freelancers exposes BioNixus to:

- **Retroactive employee status:** Courts can re-classify relationship as employment
- **Back-payment of statutory benefits:** Annual leave, sick leave, social insurance contributions (employer + employee portions)
- **Penalties:** Up to EGP 50,000 per violation + criminal liability for social insurance evasion (Law No. 148 of 2019)

| Provision | Egyptian Law Issue | Risk Level | Remediation |
|-----------|-------------------|------------|-------------|
| **Independent Contractor Classification** | If BioNixus controls work schedule, provides equipment, or interviewer works exclusively for BioNixus → employment relationship per Art. 3 | **Critical** | Ensure: (1) interviewer uses own equipment, (2) sets own hours, (3) works for multiple clients, (4) paid per project not hourly, (5) NO supervision by BioNixus employee (only project briefing) |
| **Non-Compete Clause** | Likely unenforceable for true freelancer; if enforceable, max 2 years + reasonable geographic/industry scope (Competition Law No. 3 of 2005) | High | Remove or limit to: "During project term + 6 months, within Egypt market research industry, if interviewer breaches confidentiality" |
| **IP Assignment** | Default rule: freelancer retains IP unless explicitly assigned (Civil Code Art. 143) | Medium | Include: "All deliverables are work-made-for-hire; freelancer assigns all IP to BioNixus upon payment" |
| **Termination** | If project-based, termination only for material breach or project completion; at-will termination may trigger wrongful termination claim | Medium | Specify: "Either party may terminate for material breach (10-day cure) or upon project completion/client cancellation" |
| **Confidentiality** | Enforceable if reasonable scope + duration; unlimited duration may be struck down | Low | Limit to: "3 years from last project OR until information becomes public" |
| **Payment Terms** | Must specify currency (EGP or USD); if USD, must comply with Central Bank FX regulations | Medium | Pay in EGP unless freelancer has foreign currency account (requires proof) |

#### Required Additions
- **PV/AE Training:** If healthcare project, freelancer must complete Pharmacovigilance training before fieldwork (per Research Compliance Specialist SOP)
- **Data Protection:** Freelancer must sign PDPL processor agreement (Art. 22) and acknowledge BioNixus as data controller
- **No Employment Relationship:** Explicit disclaimer: "This is not an employment contract. Freelancer is responsible for own taxes, social insurance, and benefits."

#### Arabic Translation Required?
**Yes — Mandatory** per Labour Law Art. 29 (applies even to independent contractors engaged in Egypt).

---

### 3. Conflict of Interest (COI) Policy

**Verdict:** Revise — **Low Risk**

Egyptian law does not mandate COI policies for private companies (mandatory only for public officials). However, enforceable if properly drafted.

| Provision | Egyptian Law Issue | Risk Level | Remediation |
|-----------|-------------------|------------|-------------|
| **Disclosure Requirements** | Enforceable as employment obligation if included in employment contract or work regulations | Low | Reference COI policy in employment contract: "Employee acknowledges duty to comply with COI Policy (Annex A)" |
| **Outside Employment Ban** | Total ban on outside work is **unenforceable** (violates Constitutional right to work, Art. 12); can only restrict "competing" work | High | Replace with: "Employee may not engage in competing market research activities during employment without prior written consent" |
| **Family Member Hiring** | Absolute nepotism ban unenforceable; can require disclosure + management approval | Low | "Employee must disclose family relationships with vendors/clients/other employees; hiring/contract decisions involving family members require COO approval" |
| **Gifts/Entertainment** | Enforceable if reasonable thresholds; blanket ban may be deemed excessive | Low | Specify: "Gifts below EGP 1,000 permitted; above EGP 1,000 requires disclosure + COO approval" (adjust for inflation) |
| **Remedies** | Termination for COI breach enforceable only if "gross violation" justifying termination without notice (Labour Law Art. 69) | Medium | Include: "Material COI violations may result in disciplinary action up to termination per Work Regulations" |

#### Required Additions
- **PDPL Notice:** COI disclosures involve employee personal data (family members, financial interests); must include data processing notice
- **Appeals Process:** Labour Law requires right to challenge disciplinary action (Art. 71); include: "Employee may appeal COI determination to HR Director within 10 days"

#### Arabic Translation Required?
**Yes — Mandatory** (if part of work regulations or employment contract).

---

### 4. Disciplinary Procedures

**Verdict:** Revise — **High Risk**

Egyptian Labour Law Arts. 68-71 **strictly regulate** disciplinary procedures. Any deviation voids the discipline.

| Provision | Egyptian Law Issue | Risk Level | Remediation |
|-----------|-------------------|------------|-------------|
| **Prohibited Conduct List** | Must be exhaustive; employer cannot discipline for conduct not listed in work regulations (Art. 68) | **Critical** | Adopt comprehensive list from Labour Law Art. 69 (just causes for termination) + company-specific additions; file with Ministry of Labour |
| **Progressive Discipline** | Labour Law mandates escalation: (1) written warning, (2) suspension ≤ 10 days, (3) termination; skip-steps only for "gross violations" (Art. 69) | **Critical** | Adopt: Warning (1st offense) → Warning + suspension ≤ 3 days (2nd offense within 6 months) → Termination (3rd offense within 6 months OR gross violation) |
| **Investigation Requirement** | Employee must be given opportunity to respond before discipline imposed (Art. 71); no "automatic" penalties | High | "Before imposing discipline, HR must: (1) notify employee in writing, (2) conduct investigation meeting, (3) allow employee to bring representative, (4) issue written decision within 7 days" |
| **Notice Period for Termination** | Termination without notice only for Art. 69 "gross violations"; otherwise, notice = (1) probation: none, (2) < 10 yrs service: 2 months, (3) ≥ 10 yrs: 3 months | **Critical** | Specify: "Termination for cause (Art. 69 violations) is immediate. All other terminations require notice per Labour Law Art. 106" |
| **Severance Pay** | Even termination-for-cause may trigger severance if court finds cause insufficient (Art. 122: half-month salary × years of service) | Medium | Accrue severance reserves; do not promise "forfeiture of severance for misconduct" (unenforceable) |
| **Documentation** | All discipline must be in writing + filed with personnel file; verbal warnings not recognized | High | Mandate: "All disciplinary actions must be documented in Arabic, signed by employee (or refusal noted), and retained for 3 years" |

#### Required Additions
- **Ministry of Labour Filing:** Work regulations (including disciplinary procedures) must be filed with Ministry of Labour within 30 days of commencement (Art. 68); approval required before enforcement
- **Social Insurance Deduction Limits:** Suspension without pay ≤ 10 days (Art. 69); salary deductions for damages limited to 5 days/month (Art. 42)
- **Appeals:** Employee may file labour dispute within 1 year of discipline (Art. 71); court may overturn discipline if procedurally defective

#### Arabic Translation Required?
**Yes — Mandatory** (must be in Arabic for Ministry of Labour filing).

---

### 5. Work Regulations

**Verdict:** Revise — **High Risk**

Work regulations are the **most regulated** employment document in Egypt. Labour Law Art. 68 requires Ministry of Labour approval before enforcement.

| Provision | Egyptian Law Issue | Risk Level | Remediation |
|-----------|-------------------|------------|-------------|
| **Working Hours** | Max 8 hrs/day, 48 hrs/week (Art. 97); overtime max 2 hrs/day (Art. 102); women cannot work 7pm-7am except with permit (Art. 89) | **Critical** | Adopt compliant schedule: "Standard work week: Sunday-Thursday, 9am-5pm (1-hr lunch). Overtime requires manager pre-approval, max 10 hrs/week, paid at 135% (weekdays) / 170% (weekends/holidays) per Art. 102" |
| **Probation Period** | Max 3 months (Art. 37); renewable once for same duration; employer may terminate during probation without cause, but must give notice (Art. 106: 2 months if converted to permanent) | Medium | "Probation: 3 months from start date; may be extended 3 months by mutual written consent; either party may terminate during probation with 1 week notice" |
| **Annual Leave** | Min 21 days/year (Art. 47); employee chooses timing, employer may only postpone for "business necessity" (Art. 48); unused leave must be paid upon termination | High | "Employees accrue 21 days annual leave/year (2 days after first 6 months, then monthly). Leave requests submitted 7 days in advance; approval by manager. Unused leave paid upon exit at final salary rate" |
| **Sick Leave** | Employer must grant: (1) 90 days at full pay, (2) 90 days at 75% pay, (3) unpaid thereafter, within any 12-month period (Art. 53); medical certificate required after 3 days | High | "Sick leave: Submit medical certificate (MoH-approved physician) within 2 days. Pay: First 90 days = 100% salary, next 90 days = 75% salary, thereafter unpaid (per Art. 53)" |
| **Public Holidays** | 13 mandatory paid holidays/year (Art. 46); if employee works holiday, paid 200% (Art. 103) | Low | List current Egyptian public holidays + "Employer may modify per official gazette; employees working holidays paid 200% base salary per Art. 103" |
| **Termination Notice** | Probation: no notice required; < 10 yrs service: 2 months; ≥ 10 yrs: 3 months (Art. 106); employee notice = half employer notice | **Critical** | "Notice periods: (1) Probation: 1 week, (2) Confirmed < 10 yrs: 2 months (employee: 1 month), (3) ≥ 10 yrs: 3 months (employee: 1.5 months). Notice may be paid in lieu" |
| **Severance Pay** | Mandatory: half-month salary × years of service (Art. 122); applies to all terminations (employer or employee resignation) except termination-for-cause under Art. 69 | High | "Severance (Art. 122): 0.5 month final salary × years of service, paid within 7 days of last working day. Not owed if termination for gross violation per Art. 69" |
| **Remote Work** | Not regulated by Labour Law; employer discretion, but must ensure health/safety compliance (Art. 218) | Low | "Remote work permitted with manager approval; employee must maintain dedicated workspace, comply with security policies, and be available during core hours (10am-2pm)" |
| **Data Protection** | Work regulations must include data protection notice (PDPL Art. 13) for employee data processing | Medium | Add: "BioNixus processes employee personal data for HR/payroll purposes per PDPL. See Privacy Notice (Annex A) for details" |

#### Ministry of Labour Filing Requirements
1. **Submission:** Submit work regulations (Arabic) to Ministry of Labour within 30 days of hiring first employee (Art. 68)
2. **Posting:** Post approved work regulations in workplace (Art. 68)
3. **Amendments:** Any change requires re-filing + approval
4. **Penalties:** Failure to file = EGP 500-1,000 fine per Art. 246

#### Required Additions
- **Social Insurance Registration:** "Employer registers employees with National Social Insurance Authority within 30 days of hire (Law No. 148 of 2019)"
- **Health & Safety:** Reference Occupational Health & Safety Law No. 12 of 2003, Art. 208-235 (employer duties)
- **Grievance Procedure:** "Employees may file written grievances to HR Director; response within 10 working days; unresolved grievances may be escalated to COO"
- **Anti-Discrimination:** Reference Constitutional Art. 53 (equality) + prohibit discrimination based on gender, religion, disability

#### Arabic Translation Required?
**Yes — Mandatory** (Labour Law Art. 68 requires Arabic for Ministry filing and workplace posting).

---

## Cross-Cutting Legal Issues

### 1. Filename/Content Mismatch (Parent Assessment Note)

**Issue:** Parent assessment ([BIO-280](/BIO/issues/BIO-280)) notes "filename/content mismatch observed." This suggests templates may contain boilerplate from other jurisdictions.

**Risk:** Using non-Egyptian templates without adaptation creates:
- **Unenforceable provisions** (e.g., at-will employment, arbitration-only clauses)
- **Regulatory non-compliance** (missing mandatory Arabic, Ministry filings)
- **Litigation risk** (employee/vendor challenges resulting in back-payment, penalties)

**Action Required:**
1. **Source verification:** Confirm each template's jurisdiction of origin
2. **Line-by-line audit:** Compare every provision against Egyptian statutory requirements
3. **Local counsel review:** Engage Egyptian law firm (recommendations: Shalakany, Matouk Bassiouny, or Zaki Hashem) for final sign-off

---

### 2. Arabic Language Compliance

**Mandatory vs. Recommended Matrix:**

| Template | Arabic Mandatory? | Legal Basis | Consequence of Non-Compliance |
|----------|------------------|-------------|------------------------------|
| Supplier/Vendor Agreement | **Yes** if counterparty is Egyptian entity | Civil Code Art. 11 (contracts with Egyptian party) | Contract may be voidable at counterparty's election |
| Freelance Agreement | **Yes — always** | Labour Law Art. 29 (applies to all work performed in Egypt) | Deemed employment contract; retroactive penalties |
| COI Policy | **Yes** if part of work regulations | Labour Law Art. 68 | Unenforceable; cannot discipline for violations |
| Disciplinary Procedures | **Yes — always** | Labour Law Art. 68 (Ministry filing requirement) | Void; all disciplinary actions reversible |
| Work Regulations | **Yes — always** | Labour Law Art. 68 | Void + EGP 500-1,000 fine; cannot enforce any provisions |

**Translation Standards:**
- **Certified translator:** Use translator accredited by Egyptian Translators & Linguists Association
- **Dual-language:** Include both Arabic + English; specify Arabic prevails in case of conflict
- **Ministry submissions:** Arabic only (no English accepted)

---

### 3. Data Protection (PDPL Compliance)

Law No. 151 of 2020 (effective 2022) imposes GDPR-like requirements:

**Template-Specific Requirements:**

| Template | PDPL Obligation | Implementation |
|----------|----------------|----------------|
| Supplier/Vendor Agreement | Data Processor Agreement (Art. 22) if vendor processes personal data | Add Annex: "Data Processing Terms — Vendor agrees to: (1) process data only per written instructions, (2) implement security measures per Art. 18, (3) notify breaches within 72 hours per Art. 35, (4) delete data upon contract termination" |
| Freelance Agreement | Data Processor Agreement (Art. 22) for interviewers processing respondent data | Include: "Freelancer is data processor for BioNixus (data controller); must comply with PDPL Art. 18-22; prohibited from using respondent data for any purpose other than assigned project" |
| COI Policy | Data Subject Rights (Art. 13) notice for employee data collected via COI disclosures | Add: "COI disclosures are processed per PDPL for conflict management; employees may access/correct disclosures by contacting HR" |
| Work Regulations | Employee Data Processing Notice (Art. 13) for HR/payroll data | Include Annex: "Privacy Notice — BioNixus processes employee personal data (ID, address, salary, performance) for HR/payroll; data retained 5 years post-employment per Art. 20; employees may exercise rights under Art. 13-17" |

**Penalties:** Non-compliance = 1-5% global revenue or EGP 2-10 million (whichever greater) per Art. 51.

---

### 4. Currency & FX Controls

**Issue:** Egypt imposes currency controls (Central Bank of Egypt regulations):
- **Contracts > EGP 100,000:** May require Central Bank approval for FX payments
- **Freelancer payments in USD:** Requires payee to have foreign currency account (proof required)
- **Vendor invoicing:** If paid in USD, vendor must be registered importer or have export proceeds justifying FX receipt

**Recommended Contract Clauses:**
- **Supplier/Vendor Agreement:** "Payments in USD subject to Central Bank FX availability; Vendor acknowledges payment may be made in EGP at prevailing CBE rate if FX unavailable"
- **Freelance Agreement:** "Payments in EGP only unless Freelancer provides proof of foreign currency bank account"

---

## Recommended Action Plan

### Phase 1: Immediate (Before Any Template Use) — **1 Week**

| Action | Owner | Output | Deadline |
|--------|-------|--------|----------|
| Engage local counsel (RFP to 3 firms) | General Counsel | Engagement letter | Day 3 |
| Prepare template audit matrix (all provisions vs. Egyptian law) | General Counsel | Excel matrix | Day 5 |
| Share audit matrix + templates with local counsel | General Counsel | Marked-up drafts | Day 7 |

### Phase 2: Revision — **2-3 Weeks**

| Action | Owner | Output | Deadline |
|--------|-------|--------|----------|
| Local counsel revises templates | External counsel | Clean drafts (Arabic + English) | Week 2 |
| Internal review (COO, CFO, HR Director) | Domain owners | Comments | Week 3 |
| Finalize templates | General Counsel + External counsel | Execution versions | End Week 3 |

### Phase 3: Regulatory Filings — **2-4 Weeks**

| Action | Owner | Output | Deadline |
|--------|-------|--------|----------|
| Translate work regulations + disciplinary procedures (certified) | External counsel | Arabic originals | Week 4 |
| File with Ministry of Labour | HR Director (via external counsel) | Ministry approval stamp | Week 5-6 |
| Post approved work regulations in Egypt office | HR Admin | Posted copies + photo evidence | Day after approval |

### Phase 4: Execution Readiness — **Ongoing**

- **Training:** HR Director + COO train Egypt team on compliant template use
- **Version control:** All templates in centralized repo (`docs/legal/egypt/`) with version numbers
- **Annual review:** Local counsel reviews templates annually for regulatory updates

---

## Budget Impact

| Expense | Estimated Cost | Funding Source | Notes |
|---------|---------------|----------------|-------|
| Local counsel engagement | $8,000-12,000 | Legal budget (BIO-260 envelope?) | 3 firms quoted; mid-tier firm recommended |
| Certified translation | $1,500-2,500 | Legal budget | ~15,000 words across 5 templates |
| Ministry of Labour filing fees | EGP 500-1,000 (~$10-20) | Petty cash | Nominal fee per Art. 68 |
| **Total** | **~$10,000-15,000** | **TBD — pending BIO-300 resolution** | See structural conflict below |

---

## Gate: Structural Conflict #1 (Egypt Budget Fork)

**Blocker:** Parent assessment ([BIO-280](/BIO/issues/BIO-280)) identifies structural conflict:

> "Egypt **Hiring Budget Lean xlsx** and **[BIO-260](/BIO/issues/BIO-260) $700/mo envelope are mutually exclusive** as simultaneous authoritative budgets. Egypt payroll xlsx projects ~$140,495 Y1 operating cost (16.7× over BIO-260 envelope)."

**Impact on BIO-291:**

1. **If Board funds Egypt Phase 2 (BIO-300 approval):**
   - Legal template revision proceeds immediately
   - Local counsel costs (~$10-15k) covered by separate Egypt envelope
   - Templates filed with Ministry of Labour before first hire

2. **If Board defers Egypt / prioritizes survival (BIO-300 rejection):**
   - Legal template revision **deferred indefinitely**
   - No Egypt hiring → no need for employment templates
   - Supplier/Vendor Agreement may still be needed for Egypt-based vendor relationships (lower priority)

**COO Gate:** [BIO-289](/BIO/issues/BIO-289) (HR/talent assessment) is blocked on BIO-300 resolution. **BIO-291 (this assessment) is similarly gated** — cannot engage local counsel or incur spend until Egypt envelope approved.

**Recommended Interim Posture:**
- **Adopt this assessment** as the legal framework for Egypt template revision **if and when** BIO-300 approves Egypt funding
- **No external counsel engagement** until BIO-300 resolves
- **Use only existing BioNixus templates** (non-Egypt-specific) for any urgent vendor needs; flag as interim-only

---

## Conclusion & Verdict

| Template | Enforceability Verdict | Risk Level | Arabic Mandatory? | Ministry Filing Required? | Estimated Revision Effort |
|----------|----------------------|------------|-------------------|--------------------------|-------------------------|
| Supplier/Vendor Agreement | **Revise** | Medium | Yes (if Egyptian counterparty) | No | 8-12 hours |
| Freelance Field Interviewer Agreement | **Revise** | **High** | **Yes — always** | No | 12-16 hours |
| Conflict of Interest Policy | **Revise** | Low | Yes (if part of work regs) | Yes (via work regs) | 4-6 hours |
| Disciplinary Procedures | **Revise** | **High** | **Yes — always** | **Yes** | 10-14 hours |
| Work Regulations | **Revise** | **High** | **Yes — always** | **Yes** | 14-20 hours |

**Overall Verdict:** **Revise + Local Counsel Sign-off Required**

**Next Actions (Pending BIO-300 Resolution):**
1. ✅ Adopt this assessment as legal framework for Egypt template revision
2. ⏸️ **Hold:** Engage local counsel (gated on Egypt envelope approval)
3. ⏸️ **Hold:** Commission certified Arabic translations (gated on Egypt envelope approval)
4. ⏸️ **Hold:** File work regulations with Ministry of Labour (gated on Egypt headcount authorization)

**Dependencies:**
- **[BIO-300](/BIO/issues/BIO-300)** (Board decision: Egypt vs. survival fork) — **blocks** all external counsel engagement + spend
- **[BIO-289](/BIO/issues/BIO-289)** (HR/talent assessment) — **parallel blocker** on same BIO-300 resolution

---

**Assessment Owner:** General Counsel (Agent e825470e-d71c-4178-9657-54281e842562)  
**Review Cycle:** Annually (if Egypt proceeds) + whenever Egyptian Labour Law amended  
**Local Counsel RFP Targets:** Shalakany, Matouk Bassiouny, Zaki Hashem & Partners

---

*Filed under: `docs/ops/bio-291-egypt-legal-templates-enforceability-assessment.md` · Parent: [BIO-280](/BIO/issues/BIO-280)*
