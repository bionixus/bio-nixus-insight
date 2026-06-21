# Flow 4 — Approval Tier & Banking Thresholds (USD)

**Version:** 1.0  
**Date:** 2026-06-15  
**Owner:** CFO  
**Authority:** [BIO-259](/BIO/issues/BIO-259) · [BIO-260](/BIO/issues/BIO-260) · `docs/ops/spend-governance.md`  
**Parent assessment:** [BIO-288](/BIO/issues/BIO-288) · **Implementation:** [BIO-297](/BIO/issues/BIO-297)  
**Status:** Published for routing — **no spend authorized** until board approves [BIO-259](/BIO/issues/BIO-259)

---

## Executive summary

Flow 4 procure-to-pay tiers are now codified in **USD** for the **$700/mo** operating envelope. **Tier 2 floor = $50** — aligned with [BIO-260](/BIO/issues/BIO-260) **C-01** contingency rule (CEO sign-off when a single C-01 draw exceeds $50). **Banking threshold = $250** — matches the largest BIO-260 category cap and requires **CEO co-approval** before payment execution.

**Lenses applied:** Operating leverage · Variance analysis · Break-even analysis · Scenario modeling

---

## Assumptions

| # | Assumption | Source |
|---|---|---|
| A1 | All amounts **USD**; FX converted at payment date for non-USD invoices | CFO standard |
| A2 | Envelope cap **$700/mo** pending board approval | [BIO-259](/BIO/issues/BIO-259) |
| A3 | **No payment executes** until board approves envelope per `spend-governance.md` | Board mandate |
| A4 | “Budget holder” = **BIO-260 line quote owner** (COO or CTO) until Egypt Admin & Finance hired | [BIO-288](/BIO/issues/BIO-288) §1.2 |
| A5 | Project **margin floor** (% ) not yet board-defined — Tier 3 qualitative trigger reserved | Deferred to pricing SOP |
| A6 | Thresholds apply to **agent-only mode** and future Egypt entity; Egypt payroll envelope is separate | [BIO-288](/BIO/issues/BIO-288) |

---

## Tier threshold table

| Tier | Single-transaction band (USD) | Approvers | Payment tag | Flow 4 node |
|---|---|---|---|---|
| **Tier 1** | **$0 – $50.00** | Budget holder (BIO-260 line owner) | **quote-only** unless board has approved envelope *and* line is `spend-authorized-after-board` | ≤ Tier 1 |
| **Tier 2** | **$50.01 – $250.00** | **COO + CFO** | `spend-authorized-after-board` only after Tier 2 approval recorded on issue | Tier 1 → 2 |
| **Tier 3** | **> $250.00** *or* any Tier 3 trigger below | **COO + CFO + CEO + Board confirmation** | Board confirmation required before payment prep | > Tier 2 / capex / floor / new contract |

### Tier 3 qualitative triggers (any amount)

Route to **Tier 3** even if the dollar amount is ≤ $250 when **any** of the following apply:

| Trigger | Example | Rationale |
|---|---|---|
| **Capital expenditure** | Equipment purchase, lease deposit, software perpetual license | Operating leverage — fixed cost |
| **New vendor contract** | First MSA/SOW with a new counterparty | Contract risk |
| **Below margin floor** | Project pricing under defined floor (when set) | Unit economics guardrail |
| **Envelope breach** | Single or recurring commitment would exceed **$700/mo** or any BIO-260 line cap without reallocation | Variance analysis |
| **Recurring commitment** | Any new subscription or retainer not in BIO-260 line table | Requires board amendment per C-02 |
| **Insurance bind** | I-01 bind (quote ceiling **$240/mo**) | Structural gap flagged in BIO-260 |
| **Frozen line spend** | W-01 bind, BIO-216 lease path | Board mandate |

---

## C-01 contingency tie-in (Tier 2 floor)

[BIO-260](/BIO/issues/BIO-260) line **C-01** ($100/mo contingency cap):

| C-01 draw | Tier routing | Additional approval |
|---|---|---|
| **≤ $50** | Tier 1 within C-01 cap | Budget holder logs on issue |
| **> $50** | **Tier 2 minimum** | **CEO sign-off** per C-01 *plus* COO + CFO Tier 2 approval |

**Variance analysis rule (unchanged):** Investigate any category **>10%** over cap or **any single incident > $50** (C-01).

---

## Banking threshold (payment execution)

Separate from approval tier — applies at **Dual authorization (Checker)** before bank release:

| Payment amount (USD) | Checker | Bank co-approval |
|---|---|---|
| **< $250** | CFO (Checker) | Accountant executes after CFO release |
| **≥ $250** | CFO (Checker) | **CEO co-approval on bank** required before execution |

**Maker/Checker:** Accountant (Maker) prepares → CFO (Checker) → CEO (if ≥ banking threshold) → payment executed.

*Note:* Tier 3 approvals may produce payments < $250; banking rule still applies at execution. Tier 2 payments $50.01–$249.99 need CFO checker only after Tier 2 approval.

---

## Paperclip quote-evidence requirement

Before **Tier 2 or Tier 3** approval, the requester **must** post on the Paperclip issue thread:

1. **Quote PDF** or broker/application screenshot (for quote-only lines)
2. **BIO-260 line ID** (e.g. `W-01`, `S-03`, `C-01`)
3. **Amount USD** (single transaction and monthly recurring if applicable)
4. **Vendor name** and quote expiry date
5. **Tier routing** self-assessment (Tier 1 / 2 / 3)

**Tier 1 quote-only:** Evidence on issue required before budget holder approval; no payment.

**Audit trail:** Approvers record approval as an issue comment referencing the quote comment ID. CFO rejects requests missing line ID or quote evidence.

---

## Routing decision tree (summary)

```
Amount ≤ $50 AND no Tier 3 trigger?
  → Tier 1: line owner (quote-only or post-board spend on tagged line)

Amount $50.01–$250 AND no Tier 3 trigger?
  → Tier 2: COO + CFO (+ CEO if C-01 draw > $50)

Amount > $250 OR any Tier 3 trigger?
  → Tier 3: COO + CFO + CEO + Board confirmation

Payment execution ≥ $250?
  → Add CEO bank co-approval after CFO checker
```

---

## Scenario sensitivity

| Scenario | Tier | Banking CEO? | Envelope impact |
|---|---|---|---|
| Google Workspace $48/mo (S-01) | Tier 1 | No | Within SaaS cap |
| Urgent vendor fix $75 (C-01) | Tier 2 + CEO (C-01) | No | Within contingency if approved |
| Hiscox bind $200/mo (I-01) | Tier 2 at bind amount; **Tier 3** if recurring envelope breach | No at $200 | Requires reallocation — BIO-260 gap |
| Hot-desk bind $200/mo (W-01) | Tier 2 | No | Within W-01 cap post-board |
| Legal retainer quote $400/mo (I-02) | Tier 3 (exceeds $250 + new contract) | Yes at first payment ≥$250 | Exceeds I-line accrual cap |
| MQR lease deposit (frozen) | Tier 3 + frozen | Yes | **Not authorized** |

---

## References

- Flowchart: `docs/ops/BioNixus_Egypt_Process_Flowcharts.html` § Flow 4
- Spend governance: `docs/ops/spend-governance.md`
- Line caps: `docs/ops/bio-260-budget-allocation-revision.md`
- CFO assessment: `docs/ops/bio-288-flow4-finance-assessment.md`

---

## Sign-off

| Role | Action | Date |
|---|---|---|
| CFO | Thresholds published; no spend authorized | 2026-06-15 |
| CEO | Thresholds approved for board package ([BIO-259](/BIO/issues/BIO-259#comment-3be6a06c-b68c-47d3-8dd1-10265a4cee91)); no spend authorized | 2026-06-15 |
| Board | Approve [BIO-259 plan rev 4](/BIO/issues/BIO-259#document-plan) via active confirmation card before any Tier 2+ payment | Pending |
