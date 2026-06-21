# BIO-285 — Flow 1 (New Project) + Research SOP Assessment vs Agent Org

**Date:** 2026-06-18  
**Owner:** Market Research Manager  
**Parent:** [BIO-280](/BIO/issues/BIO-280) · **Aligned flowchart:** [BIO-281](/BIO/issues/BIO-281) · **COO rollup:** `docs/ops/bio-280-egypt-ops-pack-assessment.md`  
**Status:** Assessment only — **no SOP implementation authorized**

---

## Executive summary (CEO / COO)

Flow 1’s **process substance** (nine lifecycle stages, QC back-check targets, healthcare PV gate, version-controlled instruments, audit trail) is **directionally sound** and aligns with the agent-org flowchart in [BIO-281](/BIO/issues/BIO-281). All three Egypt research attachments, however, assume a **human FTE hierarchy** (Research Manager, Director / Country Lead, Operations Manager, Admin) that does **not** match the current Paperclip operating model.

**Conflict statement (explicit):** The attachments treat **“Director”** and **“Country Lead”** as accountable signatories. There is **no hired Research Director** and no Egypt Country Lead in the agent org. Per board directive on [BIO-280](/BIO/issues/BIO-280), JD titles are **aspirational** until [BIO-300](/BIO/issues/BIO-300) / hire approval resolves the Egypt vs survival fork. **Do not operationalize Director-level sign-offs as a human hire requirement today.**

**MRM recommendation:**

| Attachment | Verdict | Rationale |
|---|---|---|
| `BioNixus_Egypt_Research_Process_SOP_Manual.docx` | **Revise** | Adopt process steps; replace human role titles with agent RACI |
| `BioNixus_Egypt_New_Project_Readiness_Checklist.docx` | **Revise** | Adopt checklist structure; remap owners and sign-off lines |
| `BioNixus_Egypt_Project_Plan_Gantt_RACI.xlsx` | **Revise** | Adopt lifecycle + RACI framework; replace roles; flag Gantt as illustrative template |

**Lenses applied:** RACI clarity · MECE segmentation (lifecycle stages) · Primary vs secondary (SOP = process authority; flowchart = org authority) · Signal vs noise (QC %, AE SLA are durable standards; 30-day Gantt is template noise) · Survivorship bias check (no failed-project learnings captured)

---

## Assumptions (stated upfront)

| # | Assumption | Source |
|---|---|---|
| A1 | Authoritative org model = **Paperclip agent org** per aligned flowchart | [BIO-281](/BIO/issues/BIO-281) |
| A2 | **“Research Director” / “Director” / “Country Lead”** = aspirational human titles, **not** current accountable roles | [BIO-280](/BIO/issues/BIO-280) board directive |
| A3 | Egypt human headcount pack is **gated** on [BIO-300](/BIO/issues/BIO-300); agent mapping is current-state | `bio-280-egypt-ops-pack-assessment.md` |
| A4 | Healthcare PV/AE SOP assessed separately on [BIO-290](/BIO/issues/BIO-290); cross-referenced here for Flow 1 gate only | Delegated compliance review |
| A5 | Assessment uses **aligned** flowchart (`docs/ops/BioNixus_Egypt_Process_Flowcharts.html`), not the original board upload | [BIO-281](/BIO/issues/BIO-281) |

---

## 1. Flow 1 (aligned flowchart) vs SOP lifecycle

### 1.1 Step alignment matrix

| Flow 1 step (BIO-281) | SOP Manual § | Gantt / Lifecycle sheet | Alignment |
|---|---|---|---|
| Project set-up & design | §1 Project Set-up & Design | Stage 1 | **Strong** — objectives, plan, risks |
| Plan sign-off gate | §1 Sign-off: Research Manager + Director | Gate: plan signed off by Director | **Revise roles** — gate → Market Research Manager (no Director) |
| Sampling plan | §2 Sampling | Stage 2 | **Strong** |
| Instrument development & scripting | §3 Instrument Development | Stage 3 | **Strong** — version control, pilot |
| Pilot / soft launch | §3 Pilot/soft-launch | Stage 4 (Gantt) | **Strong** |
| Fieldwork | §4 Fieldwork | Stage 5 | **Strong** — consent, quotas, freelancer standards |
| Healthcare? → PV/AE training gate | §0 Healthcare note; §4 AE escalation | RACI: AE handling row | **Strong** — maps to Research Compliance Specialist |
| QC & back-checks | §5 QC (10–15% target) | Stage 6 | **Strong** — reject & replace loop matches flowchart |
| Data processing & analysis | §6 Data Processing | Stage 7 | **Strong** — second-analyst check |
| Reporting & recommendations | §7 Reporting | Stage 8 | **Revise** — “Director” senior review → MRM senior-review gate |
| Senior review gate | §7 Senior review (RM/Director) | Gate: senior review | **Revise roles** |
| Deliver to client | §7 Deliver & capture feedback | — | **Add** — explicit COO + MRM in flowchart, not in SOP |
| Archiving & retention | §8 Archiving | Stage 9 | **Revise owner** — Compliance agent, not generic “Compliance & Quality owner” |
| Quality records & audit | §9 Quality Records | — | **Strong** — KPIs listed; owner → Research Compliance Specialist |

### 1.2 Gaps (flowchart ↔ SOP)

| Gap | Risk | Required fix |
|---|---|---|
| SOP omits **client delivery / feedback** as distinct step | COO account handoff unclear | Add §7b or merge into reporting with COO as I/C |
| SOP **Operations Manager owns SOPs** | Wrong accountable party in agent org | Revise to: MRM owns research delivery SOPs; Research Compliance Specialist owns compliance overlays; COO owns cross-functional escalation |
| Checklist **Admin** owns SOW/budget setup | No Egypt Admin FTE | Map to Accountant (maker) + COO (accountable) per Flow 4 |
| Gantt **30 working-day** template | Misread as standard SLA | Label as illustrative; require per-project rescoping on issue thread |
| No **Paperclip issue-thread** hook for plan/QC sign-offs | Audit trail outside governance | Add: post plan PDF + gate sign-off comment on project issue before fieldwork |

---

## 2. Per-document verdicts

### 2.1 Research Process SOP Manual — **Revise**

**Adopt (substance):**
- Nine-stage lifecycle MECE across design → archive
- QC back-check target **10–15% per interviewer**
- Instrument version control; pilot before full launch
- Healthcare AE escalation cross-reference (~24h client SLA)
- ESOMAR / EphMRA-BHBIA framing; PDPL anonymisation in §6
- KPIs in §9: on-time delivery, error rate, back-check pass rate, AE SLA

**Reject / flag (aspirational or draft):**
- **“Director”** as plan approver and senior reviewer — aspirational human hire
- **“Operations Manager owns these SOPs day-to-day”** — Egypt FTE title; current owner = Field Operations Manager (execution) + MRM (research process)
- **“Compliance & Quality owner”** — generic; map to Research Compliance Specialist agent
- No agent names, no Paperclip audit hooks

**Verdict:** **Revise** — keep process body; publish agent-org edition as repo markdown (future implementation task, not BIO-285 scope).

---

### 2.2 New Project Readiness Checklist — **Revise**

**Adopt (structure):**
- Six-section kickoff: set-up, team, compliance, training/tools, communication, sign-off
- Healthcare PV/AE training gate before fieldwork
- Ethics committee, NDAs, PDPL consent text checks
- Risk log with mitigations

**Reject / flag (aspirational or draft):**
- **Director** as accountable on plan approval, capacity, client escalation, material-project reporting, kickoff sign-off line
- **Admin** for SOW/project code — no Egypt Admin; use Accountant + COO
- **Operations** generic — use Field Operations Manager
- **Compliance** generic — use Research Compliance Specialist
- Sign-off block requires three human signatures — replace with agent gate comments on Paperclip issue

**Verdict:** **Revise** — adopt checklist items; replace Owner column and sign-off block with agent RACI from §3 below.

---

### 2.3 Project Plan Gantt + RACI xlsx — **Revise**

**Adopt (framework):**
- **Lifecycle** sheet: stage definitions mirror SOP and flowchart
- **RACI** sheet: one-A-per-step discipline; AE handling row for healthcare
- **Gantt** sheet: editable Start/Days with gate diamonds — useful **template**

**Reject / flag (aspirational or draft):**
- **Country Lead / Director** column — aspirational Egypt leadership; accountable steps should default to **COO** (client/material) or **Market Research Manager** (research quality)
- **Research Manager** column — maps to Market Research Manager agent (not a human RM hire)
- **Analyst** — maps to Data Analyst agent
- **Operations** — maps to Field Operations Manager
- **BD / Client contact** — maps to Business Development Manager + COO on material accounts
- 30-day illustrative timeline with overlapping QC/fieldwork bars — **template only**, not validated SLA
- Footer: *“Adapt per project and per the lean team”* — encodes Egypt lean headcount assumption ([BIO-300](/BIO/issues/BIO-300) gated)

**Verdict:** **Revise** — adopt sheets as templates; replace RACI column headers with agent names; add cover note that Gantt durations are project-specific inputs.

---

## 3. Agent RACI mapping (current operating state)

**Rule:** One **Accountable (A)** per step. **Do not** insert Research Director or Country Lead unless CEO hire approved.

| Stage / step | Accountable (A) | Responsible (R) | Consulted (C) | Informed (I) |
|---|---|---|---|---|
| Project set-up & design | Market Research Manager | Market Research Manager | COO, Data Analyst | Business Development Manager |
| Plan sign-off gate | Market Research Manager | Market Research Manager | COO (if material / below-margin) | CEO |
| Sampling plan | Field Operations Manager | Field Operations Manager | Market Research Manager | Research Compliance Specialist |
| Instrument development & scripting | Market Research Manager | Market Research Manager | Qualitative Research Specialist (if qual) | Field Operations Manager |
| Pilot / soft launch | Field Operations Manager | Field Operations Manager | Market Research Manager | — |
| Fieldwork | Field Operations Manager | Field Operations Manager | Market Research Manager | Research Compliance Specialist |
| QC & back-checks | Field Operations Manager | Field Operations Manager | Research Compliance Specialist | Market Research Manager |
| Data processing & analysis | Data Analyst | Data Analyst | Market Research Manager | COO |
| Reporting & recommendations | Market Research Manager | Market Research Manager | Data Analyst | COO |
| Senior review gate | Market Research Manager | Market Research Manager | COO (material deliverables) | CEO |
| Deliver to client & feedback | COO | Market Research Manager | Business Development Manager | CEO |
| Archiving & retention | Research Compliance Specialist | Research Compliance Specialist | Field Operations Manager | COO |
| Adverse-event handling (healthcare) | Research Compliance Specialist | Research Compliance Specialist | Field Operations Manager | COO, client via BD |
| SOW / project code / budget setup | COO | Accountant | Business Development Manager | CFO |
| Quality records & audit sample | Research Compliance Specialist | Research Compliance Specialist | Market Research Manager | COO |

### Human title → agent mapping (do not use JD titles operationally)

| Attachment title | Current agent | Notes |
|---|---|---|
| Research Manager | Market Research Manager | Same function; agent is current A/R |
| Director / Country Lead | **None** — use COO for client/material; MRM for research gates | Aspirational until hire |
| Operations / Operations Manager | Field Operations Manager | Field execution & QC |
| Analyst | Data Analyst | Processing & tabulation |
| Compliance & Quality owner | Research Compliance Specialist | PV, PDPL, audit |
| Admin | Accountant (R) + COO (A) | No Egypt Admin FTE |
| BD / Client contact | Business Development Manager | COO joins on strategic accounts |

---

## 4. Concrete revisions required (implementation deferred)

| # | Document | Revision | Owner (future) |
|---|---|---|---|
| R1 | SOP Manual | Replace all human titles with §3 agent RACI; add Paperclip issue-thread gates for plan, QC, senior review | MRM + COO |
| R2 | SOP Manual | Split ownership: MRM = research delivery SOPs; Research Compliance Specialist = compliance overlays | MRM |
| R3 | SOP Manual | Add explicit **client delivery / feedback** step with COO | MRM |
| R4 | Readiness Checklist | Replace Owner column per §3; remove Director sign-off line | MRM |
| R5 | Readiness Checklist | SOW/budget row → Accountant (R), COO (A) | COO |
| R6 | Gantt xlsx | Rename RACI columns to agent names; remove Country Lead/Director column | MRM |
| R7 | Gantt xlsx | Add cover note: durations illustrative; rescope per project on issue | MRM |
| R8 | All three | Cross-link aligned flowchart HTML as org authority over attachment RACI | COO |
| R9 | All three | Cross-link PV/AE SOP when [BIO-290](/BIO/issues/BIO-290) completes | Research Compliance Specialist |
| R10 | COO rollup | Update `bio-280-egypt-ops-pack-assessment.md` research row to **Revise** | COO |

**Out of scope for BIO-285:** Editing docx/xlsx files, hiring Research Director, Egypt FTE execution ([BIO-289](/BIO/issues/BIO-289) blocked on [BIO-300](/BIO/issues/BIO-300)).

---

## 5. Implications for BioNixus

1. **Operationalize Flow 1 via aligned flowchart + agent RACI**, not raw Egypt attachments — substance is portable after role swap.
2. **MRM owns research quality gates** (plan, senior review) today — no Director backstop; COO steps in on material client risk.
3. **Field Operations Manager is binding constraint on delivery quality** — QC loop and freelancer standards are well-specified; ensure capacity before accepting concurrent projects.
4. **Research Compliance Specialist is a hard gate for healthcare** — training-current check must not be skipped; aligns with [BIO-290](/BIO/issues/BIO-290).
5. **Egypt pack remains scenario documentation** until [BIO-300](/BIO/issues/BIO-300) — do not staff checklist “Admin” or “Director” rows as hire triggers.

---

## 6. Source list

| Source | Type | Recency |
|---|---|---|
| `BioNixus_Egypt_Research_Process_SOP_Manual.docx` | Secondary — internal SOP | 2026-06-14 upload |
| `BioNixus_Egypt_New_Project_Readiness_Checklist.docx` | Secondary — internal checklist | 2026-06-14 upload |
| `BioNixus_Egypt_Project_Plan_Gantt_RACI.xlsx` | Secondary — internal template | 2026-06-14 upload |
| `docs/ops/BioNixus_Egypt_Process_Flowcharts.html` | Primary — aligned org authority | 2026-06-15 ([BIO-281](/BIO/issues/BIO-281)) |
| `docs/ops/bio-280-egypt-ops-pack-assessment.md` | Secondary — COO rollup | 2026-06-15 |
| Paperclip agent registry API | Primary — current org | 2026-06-18 |

---

*Assessment by Market Research Manager — [BIO-285](/BIO/issues/BIO-285). Hand off to COO for [BIO-280](/BIO/issues/BIO-280) rollup update (R10).*
