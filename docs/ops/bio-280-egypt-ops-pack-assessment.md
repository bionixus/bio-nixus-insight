# Egypt Ops Pack — COO Consolidated Assessment (2026-06-15)

**Parent:** [BIO-280](/BIO/issues/BIO-280) · **Aligned flowcharts:** [BIO-281](/BIO/issues/BIO-281) · **Authoritative spend:** [BIO-259](/BIO/issues/BIO-259) / [BIO-260](/BIO/issues/BIO-260)

## Board directive

Study attachments; **do not follow blindly**. Some documents are draft, dummy, or describe an aspirational human org — validate before operationalizing.

---

## Structural conflict #1 (CEO escalated → board)

**Source:** [BIO-288](/BIO/issues/BIO-288) CFO assessment · **Board decision:** [BIO-300](/BIO/issues/BIO-300) (`in_review`)

The Egypt **Hiring Budget Lean xlsx** and **[BIO-260](/BIO/issues/BIO-260) $700/mo envelope are mutually exclusive** as simultaneous authoritative budgets:

| Metric | Egypt xlsx (52 EGP/USD) | BIO-260 | Multiple |
|---|---:|---:|---:|
| Phase 1 burn (4 FTE, M1) | **~$10,888/mo** | $700/mo | **15.6×** |
| Steady state (10 FTE, M12) | **~$13,437/mo** | $700/mo | **19.2×** |
| Year-1 operating total | **~$140,495** | **$8,400** | **16.7×** |
| Recommended Y1 funding (+ buffer) | **~$221,115** | $8,400 | **26.3×** |

**COO gate:** No Egypt headcount execution ([BIO-289](/BIO/issues/BIO-289) Flow 5) until [BIO-300](/BIO/issues/BIO-300) resolves survival vs Egypt launch vs defer. Egypt xlsx excluded from [BIO-259](/BIO/issues/BIO-259) $700 confirmation per CEO scope lock.

---

## Consolidated adopt / revise / reject matrix

| Attachment / artifact | Domain | Verdict | Owner assessment | Notes |
|---|---|---|---|---|
| `BioNixus_Egypt_Process_Flowcharts.html` (aligned, repo) | Flowcharts | **Adopt** | [BIO-281](/BIO/issues/BIO-281) done | Agent-org RACI applied; repo `docs/ops/BioNixus_Egypt_Process_Flowcharts.html` |
| Flow 4 (original board HTML) | Finance process | **Reject** | [BIO-288](/BIO/issues/BIO-288) done | Superseded by BIO-281 alignment (GM/Finance/Owner roles) |
| Flow 4 (aligned HTML) — process controls | Finance process | **Adopt** | [BIO-288](/BIO/issues/BIO-288) done | Maker/checker + board gate; Tier 1/2/3 thresholds in `docs/ops/flow4-approval-tier-thresholds.md` ([BIO-297](/BIO/issues/BIO-297)) |
| `BioNixus_Egypt_Hiring_Budget_Lean.xlsx` | Finance / HR | **Reject** (as authority) / **Revise** (scenario) | [BIO-288](/BIO/issues/BIO-288) done | Structural conflict #1; defer as Scenario: Egypt Phase 2 only if board funds separately |
| `BioNixus_Egypt_Compensation_Incentive_Plan.docx` | Finance / HR | **Revise** | [BIO-288](/BIO/issues/BIO-288) done | Framework OK; inactive until separate Egypt envelope approved |
| Research Process SOP, New Project Readiness, Gantt RACI | Research delivery | **Revise** | [BIO-285](/BIO/issues/BIO-285) done | Adopt process substance; remap human Director/Admin/Ops → agent RACI (`docs/ops/bio-285-flow1-research-sop-assessment.md`) |
|| BD / CRM flows (Flows 2–3) | BD / sales | **Revise** | [BIO-286](/BIO/issues/BIO-286) done | Flow 2: GHL enrichment schema needed; Flow 3: Adopt w/revisions (GHL API, loss taxonomy, stage alignment) — `docs/ops/bio-286-flows2-3-bd-assessment.md` |
| Newsletter nurture loop (Flow 3) | Marketing | **Revise** | [BIO-287](/BIO/issues/BIO-287) done | Manual nurture OK; automated recycle deferred until spend auth + Resend automations |
| Job Descriptions, Onboarding/Offboarding, Performance Appraisal, Working Hours, Work Regulations | HR / talent | **Pending** | [BIO-289](/BIO/issues/BIO-289) blocked → [BIO-300](/BIO/issues/BIO-300) | Gate on structural conflict #1 before hire-only vs agent mapping |
| Pharmacovigilance AE SOP, Data Protection, DPA | Compliance | **Pending** | [BIO-290](/BIO/issues/BIO-290) todo | Substance looks real; confirm client obligations |
| Supplier/Vendor Agreement, Freelance Agreement, COI, Disciplinary, Work Regulations | Legal | **Pending** | [BIO-291](/BIO/issues/BIO-291) todo | Filename/content mismatch observed; templates until Counsel sign-off |

---

## Pack inventory (22 files on BIO-280)

| Cluster | Attachments | Verdict |
|---|---|---|
| **Flowcharts** | `BioNixus_Egypt_Process_Flowcharts.html` | **Adopt (aligned)** — [BIO-281](/BIO/issues/BIO-281) |
| **Research delivery** | Research Process SOP, New Project Readiness, Project Plan Gantt RACI | **Revise** — [BIO-285](/BIO/issues/BIO-285) |
| **Compliance / PV** | Pharmacovigilance AE SOP, Data Protection, Data Processing Agreement | **Pending** — [BIO-290](/BIO/issues/BIO-290) |
| **Legal templates** | Supplier/Vendor Agreement, Freelance Field Interviewer Agreement, COI, Disciplinary, Work Regulations | **Pending** — [BIO-291](/BIO/issues/BIO-291) |
| **HR / talent** | Job Descriptions, Onboarding/Offboarding, Performance Appraisal (×2 dup), Working Hours, Compensation | **Pending / gated** — [BIO-289](/BIO/issues/BIO-289) blocked on [BIO-300](/BIO/issues/BIO-300) |
| **Finance** | Hiring Budget Lean xlsx, Compensation Incentive Plan | **Reject / Revise** — [BIO-288](/BIO/issues/BIO-288); see structural conflict #1 |

---

## Cross-cutting gaps (RACI / Theory of Constraints)

1. **Org model mismatch** — Egypt pack assumes human FTE hierarchy; Paperclip agent org is current operating reality. Human JD titles ≠ agent names without explicit mapping table.
2. **Budget authority (binding constraint)** — Flow 4 process adopted; Egypt payroll xlsx rejected as authority until [BIO-300](/BIO/issues/BIO-300) board decision. **Relieving this constraint unlocks HR/talent assessments.**
3. **Duplicate attachments** — Performance Appraisal and Freelancer Onboarding uploaded twice; dedupe before adoption.
4. **Single source of truth** — Aligned flowcharts lead; SOPs/checklists follow after domain reviews complete.

---

## Delegated reviews (child issues)

| Flow / domain | Issue | Owner | Status |
|---|---|---|---|
| Flow 1 — New project | [BIO-285](/BIO/issues/BIO-285) | Market Research Manager | **done** |
| Flows 2–3 — BD / CRM | [BIO-286](/BIO/issues/BIO-286) | Business Development Manager | **done** |
| Flow 3 — Newsletter nurture | [BIO-287](/BIO/issues/BIO-287) | CMO | **done** |
| Flow 4 — Finance & approvals | [BIO-288](/BIO/issues/BIO-288) | CFO | **done** |
| Flow 5 — Talent & onboarding | [BIO-289](/BIO/issues/BIO-289) | HR Director | **blocked** → [BIO-300](/BIO/issues/BIO-300) |
| Compliance & data governance | [BIO-290](/BIO/issues/BIO-290) | Research Compliance Specialist | todo |
| Legal templates | [BIO-291](/BIO/issues/BIO-291) | General Counsel | todo |
| Board — Egypt vs survival fork | [BIO-300](/BIO/issues/BIO-300) | CEO | in_review |

---

## COO synthesis status

| Workstream | RAG | Blocker | Next action | Owner |
|---|---|---|---|---|
| Flow 4 / finance | **Green** | None | Thresholds live ([BIO-297](/BIO/issues/BIO-297)); no spend authorized | CFO |
| Egypt budget fork | **Red** | Board decision pending | Resolve via [BIO-300](/BIO/issues/BIO-300) confirmation | CEO / Board |
| Domain assessments (4 remaining) | **Amber** | Capacity / queue | Children execute in parallel; no Egypt hires until BIO-300 | Domain owners |
| BIO-280 rollup | **Amber** | 4 child assessments pending | Publish final matrix when children complete | COO |

**Lenses applied:** Theory of Constraints (budget fork = binding constraint) · Critical path (BIO-300 gates BIO-289) · RACI clarity · Leading indicators (6/7 domain reviews still open)

---

*Updated by COO — [BIO-280](/BIO/issues/BIO-280). CFO detail: `docs/ops/bio-288-flow4-finance-assessment.md`.*
