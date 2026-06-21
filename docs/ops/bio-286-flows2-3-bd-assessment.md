# BIO-286 — Flows 2–3 BD Assessment vs CRM Reality

**Issue:** [BIO-286](/BIO/issues/BIO-286)  
**Parent:** [BIO-280](/BIO/issues/BIO-280) Egypt Ops Pack Assessment  
**Owner:** Business Development Manager  
**Date:** 21 June 2026  
**Status:** Assessment complete — verdict matrix attached

---

## Objective

Validate **Flows 2 & 3** (commercial/BD portions only — newsletter loop already assessed in [BIO-287](/BIO/issues/BIO-287)) against current BD process and CRM state.

**Acceptance criteria:**
- Post assessment: stage-gate owners match agent org (BDM, COO, CEO margin floor)
- Flag steps that assume tooling/CRM not yet live
- **Adopt / revise / reject** for any BD-related checklist content in the Egypt pack
- Identify blockers for operationalizing the pipeline (tools, data, approvals)

---

## Flow 2 — Existing-Client Enrichment: Assessment

### Flow description (from Egypt pack aligned flowcharts)

Retention and upsell workflow:
1. Post-project review & feedback (Market Research Manager)
2. Update CRM: account, satisfaction, repeat rate (Business Development Manager)
3. Account plan: needs & whitespace (COO)
4. Schedule check-in / QBR (COO + Business Development Manager)
5. **Decision:** Opportunity identified?
   - **No** → Nurture: newsletter, periodic check-in (CMO)
   - **Yes** → Draft proposal / expanded SOW (COO + Business Development Manager)
6. **Decision:** Pricing at/above margin floor?
   - **No** → Below-floor approval gate (COO + CEO)
   - **Yes** → Send proposal (Business Development Manager)
7. **Decision:** Won?
   - **No** → Log reason (Business Development Manager) → back to nurture
   - **Yes** → New SOW feeds Flow 1 (New Project workflow)

### Current BD reality check

**✅ ALIGNED:**
- **Stage-gate owners:** COO owns account planning, BDM drives proposals, CEO approves below-margin pricing — matches agent RACI
- **Process flow logic:** Repeatable clients do get post-project feedback, and upsell opportunities are identified
- **Nurture recycle:** Clients who aren't ready for immediate upsell are returned to newsletter nurture (CMO owns via [BIO-287](/BIO/issues/BIO-287))

**🟡 PARTIALLY ALIGNED:**
- **CRM updates:** Flow assumes BDM updates CRM after each project with satisfaction, repeat rate. **Reality:** No evidence of systematic CRM logging for existing clients yet. GHL pipeline exists ([BIO-338](/BIO/issues/BIO-338)) but is primarily tracking *new* outbound opportunities (Sequence B, BIO-332), not post-delivery account enrichment.
- **Account plans:** Flow assumes COO creates formal account plans for whitespace analysis. **Reality:** Ad-hoc; no documented account planning SOP or CRM field structure for "needs & whitespace" yet.
- **QBR scheduling:** Flow assumes scheduled check-ins/QBRs. **Reality:** Reactive; no calendar-based account management cadence observed in current operations.

**🔴 GAPS / TOOLING NOT LIVE:**
- **CRM account enrichment fields:** Flow requires CRM to track satisfaction scores, repeat rate, account plan notes, whitespace analysis. **Current GHL schema:** Focused on pipeline stages for *new* opportunities ([BIO-338](/BIO/issues/BIO-338)), not post-delivery account health metrics.
- **Margin floor:** Flow references "pricing at/above margin floor" with COO+CEO gate. **Reality:** Margin floor is **TBD** (noted in Egypt flowchart footer as "Project margin floor TBD"). No operational margin floor policy exists yet; CFO must define before operationalizing this gate.
- **Proposal loss reason logging:** Flow assumes BDM logs "reason" when proposals are lost. **Reality:** No structured loss-reason taxonomy in GHL or issue tracker yet.

**VERDICT:** **Revise** — process logic is sound, but operationalization requires:
1. GHL CRM schema extension for account health metrics (satisfaction, repeat rate, whitespace notes)
2. COO account planning SOP + QBR calendar template
3. CFO margin floor policy publication (blocks Flow 2 & 3 below-floor gates)
4. BDM proposal loss-reason taxonomy for CRM logging

---

## Flow 3 — Cold Outreach · Lead & Pipeline: Assessment

### Flow description (from Egypt pack aligned flowcharts)

Outbound BD engine (BDM + COO) with CMO-owned newsletter nurture loop:
1. Define ICP / target list (CMO + Business Development Manager)
2. Prospect research & qualification (Business Development Manager)
3. Outreach: cold call / email / LinkedIn (Business Development Manager)
4. **Decision:** Interested?
   - **Yes** → Discovery call (COO + Sales Specialist)
   - **No** → Add to nurture list (CMO)
5. **Decision:** Qualified? need · budget · timing (COO)
   - **No** → Add to nurture list (CMO)
   - **Yes** → Proposal / SOW (COO + Business Development Manager)
6. Negotiation (Business Development Manager)
7. **Decision:** Won?
   - **No** → Log reason (Business Development Manager) → Add to nurture list (CMO)
   - **Yes** → New SOW feeds Flow 1 (New Project workflow)
8. Newsletter nurture loop (recycling not-yet-ready prospects) — **assessed separately in [BIO-287](/BIO/issues/BIO-287)**

### Current BD reality check

**✅ ALIGNED:**
- **ICP definition:** Flow assumes BDM+CMO define ICP. **Reality:** [BIO-43](/BIO/issues/BIO-43) GCC BD Plan §3.3 defines 7-dimension ICP scoring framework (max 14 points). [BIO-72](/BIO/issues/BIO-72) Top 10 account briefs apply this ICP with ≥7 qualified threshold. **ACTIVE AND OPERATIONALIZED.**
- **Prospect research:** Flow assumes BDM researches accounts. **Reality:** [BIO-72](/BIO/issues/BIO-72) documents deep account briefs for Top 10 GCC pharma accounts (BANT hypotheses, incumbents, entry offers, ICP scores). **ACTIVE.**
- **Outreach channels:** Flow assumes cold call / email / LinkedIn. **Reality:** [BIO-332](/BIO/issues/BIO-332) Sequence B uses LinkedIn Touch 2 + Email Touch 3. Outreach templates exist in `docs/bd/outreach-send-queue/` with frontmatter validation. **ACTIVE.**
- **Discovery call owner:** Flow assigns COO + Sales Specialist. **Reality:** BIO-332 playbook confirms Sales Specialist conducts initial discovery, BD Manager qualifies BANT, COO escalates for qualified opportunities. **ALIGNED.**
- **Qualification (BANT):** Flow references "need · budget · timing" qualification by COO. **Reality:** BIO-72 account briefs document full BANT (Budget, Authority, Need, Timing) for each account. BIO-332 playbook requires ≥3/4 BANT criteria met to advance to proposal stage. **ALIGNED.**
- **Stage-gate owners:** BDM drives outreach/negotiation, COO qualifies, CEO margin floor (implied from Flow 2). **ALIGNED WITH AGENT ORG.**

**🟡 PARTIALLY ALIGNED:**
- **Nurture list handoff:** Flow assumes BDM adds unqualified/lost prospects to CMO's nurture list. **Reality:** [BIO-287](/BIO/issues/BIO-287) confirms CMO owns newsletter nurture, but handoff mechanism (BDM → CMO) is manual. No CRM field or automation for "add to nurture segment" yet.
- **Pipeline logging:** Flow assumes BDM logs all activity in CRM. **Reality:** [BIO-338](/BIO/issues/BIO-338) weekly GHL pipeline export exists (weighted pipeline, stage movement, win rate). BIO-332 playbook requires GHL logging within 24h of send. **Active but manual**; no API automation yet (blocked by [BIO-374](/BIO/issues/BIO-374)).
- **Loss reason logging:** Same gap as Flow 2 — no structured loss-reason taxonomy in GHL yet.

**🔴 GAPS / TOOLING NOT LIVE:**
- **CRM pipeline stage mapping:** Flow assumes CRM stages align with Flow 3 steps (Prospect → Outreach → Interested → Qualified → Proposal → Negotiation → Won/Lost). **Reality:** GHL stage names exist ([ghl-stage-probability-map.json](../ops/ghl-stage-probability-map.json)) with probability weights for weighted pipeline calculation, but stage names are generic ("Qualified", "Booked", "Proposal", "Negotiation"). **Gap:** No explicit "Interested but not qualified" stage for recycling to nurture.
- **CRM → Nurture segment automation:** Flow assumes seamless handoff from BDM (lost/unqualified) to CMO (nurture segment). **Reality:** Manual process. [BIO-287](/BIO/issues/BIO-287) notes "automated recycle deferred until spend auth + Resend automations" — **DEFERRED.**
- **Margin floor policy:** Same gap as Flow 2 — margin floor is **TBD** (CFO blocker).
- **GHL API access:** BIO-332 playbook and [BIO-338](/BIO/issues/BIO-338) weekly export require manual GHL logging. **Blocker:** [BIO-374](/BIO/issues/BIO-374) — GHL API credentials not yet wired to CMO/HermesEngineer. API wiring script exists (`scripts/paperclip/wire-ghl-secrets.mjs`), but requires board to add `GHL_API_KEY` + `GHL_LOCATION_ID` secrets first.

**VERDICT:** **Adopt with revisions** — Flow 3 is **actively operationalized** (BIO-43, BIO-72, BIO-332 all live), but requires:
1. CRM stage taxonomy alignment (add "Interested not qualified" stage for nurture recycle)
2. Automated BDM → CMO nurture handoff (deferred until Resend automations + spend approval per BIO-287)
3. CFO margin floor policy publication (blocks below-floor gate)
4. Board approval of GHL API access ([BIO-374](/BIO/issues/BIO-374)) to automate weekly pipeline exports

---

## Cross-Flow Blockers (Flows 2 & 3)

| Blocker | Flow 2 impact | Flow 3 impact | Owner | Unblock action | Linked issue |
|---------|---------------|---------------|-------|----------------|--------------|
| **Margin floor policy (TBD)** | Blocks COO+CEO below-floor approval gate | Blocks COO+CEO below-floor approval gate | CFO | Publish margin floor % or $ threshold in `docs/ops/margin-floor-policy.md` | *None yet — needs new issue* |
| **GHL API access** | N/A (Flow 2 less dependent on CRM) | Blocks automated pipeline reporting; manual logging is workaround | Board + CTO | Board adds GHL secrets → CTO runs `wire-ghl-secrets.mjs` | [BIO-374](/BIO/issues/BIO-374) |
| **CRM account enrichment schema** | Blocks systematic account health tracking (satisfaction, repeat rate, whitespace) | N/A | COO + BDM | Define GHL custom fields for account health metrics; document in `docs/ops/ghl-account-enrichment-schema.md` | *None yet — needs new issue* |
| **Loss reason taxonomy** | Blocks structured proposal loss analysis | Blocks structured opportunity loss analysis | BDM | Define 5–10 standard loss reasons (price, timing, incumbent, etc.); add to GHL as dropdown | *None yet — needs new issue* |
| **Nurture segment automation** | Nurture recycle works but is manual | Nurture recycle works but is manual | CMO | Deferred until Resend automations + spend approval (per BIO-287) | [BIO-287](/BIO/issues/BIO-287) |

---

## Egypt Pack Checklist Content: Adopt / Revise / Reject

The Egypt ops pack does not include separate "BD checklists" beyond the flowcharts. The flowcharts themselves (Flows 2–3) are the primary BD/CRM artifacts in the pack.

**Verdict on Flows 2–3 as documented in Egypt pack aligned flowcharts:**

| Flow | Verdict | Rationale | Next action |
|------|---------|-----------|-------------|
| **Flow 2 — Existing-Client Enrichment** | **Revise** | Process logic is sound and agent-RACI-aligned, but assumes CRM tooling (account health metrics, QBR scheduling, margin floor policy) not yet operationalized. | COO creates account enrichment SOP + GHL schema extension; CFO publishes margin floor policy. |
| **Flow 3 — Cold Outreach · Lead & Pipeline** | **Adopt with revisions** | Already actively operationalized via BIO-43, BIO-72, BIO-332. Requires minor CRM stage taxonomy alignment and margin floor policy publication. | BDM aligns GHL stage names with Flow 3 steps; CFO publishes margin floor policy. GHL API access (BIO-374) unblocks automation. |

---

## Recommended Next Actions (Prioritized)

| Priority | Action | Owner | Blocker cleared | Issue link |
|----------|--------|-------|-----------------|------------|
| **P0** | Publish margin floor policy | CFO | Unblocks Flow 2 & 3 below-floor gates | *Create: BIO-xxx* |
| **P0** | Board approves GHL API access + adds secrets | Board + CTO | Unblocks automated pipeline reporting (BIO-338, BIO-374) | [BIO-374](/BIO/issues/BIO-374) |
| **P1** | Define GHL account enrichment schema + custom fields | COO + BDM | Unblocks Flow 2 systematic account health tracking | *Create: BIO-xxx* |
| **P1** | Define GHL loss reason taxonomy (5–10 standard reasons) | BDM | Unblocks Flow 2 & 3 loss analysis | *Create: BIO-xxx* |
| **P2** | Align GHL stage names with Flow 3 steps | BDM | Clarifies CRM → nurture recycle path | *Update: BIO-338 or new child* |
| **P2** | Create COO account planning SOP + QBR calendar template | COO | Operationalizes Flow 2 account planning step | *Create: BIO-xxx* |
| **P3** | Automate BDM → CMO nurture segment handoff (Resend) | CMO | Deferred until Resend automations approved (BIO-287) | [BIO-287](/BIO/issues/BIO-287) |

---

## Summary: Adopt / Revise / Reject Matrix

| Flow / artifact | Domain | Verdict | Agent-RACI aligned? | Tooling gaps? | Notes |
|-----------------|--------|---------|---------------------|---------------|-------|
| **Flow 2 — Existing-Client Enrichment** | BD / sales | **Revise** | ✅ Yes | 🔴 Yes (CRM schema, margin floor) | Process logic sound; requires CRM extension + CFO policy |
| **Flow 3 — Cold Outreach · Lead & Pipeline (BD portion)** | BD / sales | **Adopt with revisions** | ✅ Yes | 🟡 Partial (API access, margin floor) | Already operationalized (BIO-43, BIO-72, BIO-332); minor CRM + policy gaps remain |
| **Flow 3 — Newsletter nurture loop (CMO portion)** | Marketing | **Revise** | ✅ Yes | 🔴 Yes (automation deferred) | Assessed separately in [BIO-287](/BIO/issues/BIO-287) |

**Overall verdict:** Both flows are **agent-RACI-aligned** and follow sound BD process logic. Flow 3 is **actively operationalized** with live ICP, account briefs, and outreach sequences. Flow 2 requires **CRM schema extension and SOPs** before full operationalization. **Cross-flow blocker:** CFO margin floor policy (P0) and GHL API access (P0) block automation.

---

## Gaps Summary (Theory of Constraints lens)

**Binding constraint:** CFO margin floor policy publication — blocks both Flow 2 and Flow 3 below-floor approval gates.

**Secondary constraints:**
1. GHL API access (BIO-374) — blocks automated pipeline reporting; manual logging is current workaround
2. CRM account enrichment schema — blocks Flow 2 systematic account health tracking
3. Loss reason taxonomy — blocks structured loss analysis for both flows

**Relieving the binding constraint (margin floor policy)** unlocks:
- Flow 2 & 3 below-floor proposal approval workflow
- CFO involvement in pricing governance per agent RACI
- Pricing consistency across BD and client enrichment channels

---

*Assessment completed by Business Development Manager — 21 June 2026. Cross-referenced with live BD operations: [BIO-43](/BIO/issues/BIO-43), [BIO-72](/BIO/issues/BIO-72), [BIO-332](/BIO/issues/BIO-332), [BIO-338](/BIO/issues/BIO-338), [BIO-374](/BIO/issues/BIO-374), [BIO-287](/BIO/issues/BIO-287).*
