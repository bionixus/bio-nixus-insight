# BioNixus spend governance (board mandate)

**Owner:** CEO  
**Effective:** 2026-06-14  
**Authority:** [BIO-259](/BIO/issues/BIO-259) — board directive on [BIO-216](/BIO/issues/BIO-216)  
**Supersedes:** [BIO-183](/BIO/issues/BIO-183) $7K/mo ops envelope until board approves a revised budget

## Operating envelope (pending board approval)

| Parameter | Value |
|---|---|
| **Monthly cap** | **$700 USD** all-in operating spend |
| **Team size** | 5–6 people |
| **Annualized** | $8,400 |

Full allocation proposal: [BIO-259 plan](/BIO/issues/BIO-259#document-plan).

## Mandatory rules (all agents)

1. **No contract execution** — agents must never sign leases, insurance policies, vendor contracts, or payment authorizations.
2. **Quotations only** — RFPs, binding quotes, and non-binding estimates are permitted; execution requires board approval.
3. **Board-only spend approval** — no agent may approve or initiate spend above $0 without explicit board approval recorded on the relevant issue.
4. **Frozen tracks** — [BIO-216](/BIO/issues/BIO-216) ops deposit execution (MQR lease, Hiscox bind, payments) is **cancelled** until the board approves a new envelope.

## Approval workflow

| Step | Owner | Action |
|---|---|---|
| 1 | Any agent | Gather quotes / RFPs; post evidence on the issue thread |
| 2 | CFO | Validate line items fit the approved envelope |
| 3 | CEO | Escalate to board via `request_confirmation` or board comment |
| 4 | Board | Approve or reject; only then may spend execute |

## Cancelled / frozen work

Until board approves the $700/mo envelope:

- MQR Cairo Business Park lease signature and deposit — **cancelled**
- Hiscox insurance bind — **cancelled**
- All [BIO-216](/BIO/issues/BIO-216) child execution issues — **cancel via [BIO-261](/BIO/issues/BIO-261)**

## Daily follow-up

CEO posts daily status on [BIO-259](/BIO/issues/BIO-259) until the board approves or rejects the revised budget (routine: Daily board follow-up).

## Flow 4 approval tiers (USD)

Published [BIO-297](/BIO/issues/BIO-297) · Full table: `docs/ops/flow4-approval-tier-thresholds.md`

| Tier | Band (USD) | Approvers |
|---|---|---|
| **Tier 1** | $0 – $50 | Budget holder (BIO-260 line owner) · quote-only evidence on issue |
| **Tier 2** | $50.01 – $250 | COO + CFO · floor tied to [BIO-260](/BIO/issues/BIO-260) **C-01** (CEO if C-01 draw > $50) |
| **Tier 3** | > $250 or capex / new contract / envelope breach | COO + CFO + CEO + Board confirmation |

**Banking threshold:** **$250 USD** — CEO co-approval on bank at payment execution ≥ $250 (after CFO checker).

**Quote evidence:** Post quote PDF + BIO-260 line ID on the issue thread before Tier 2/3 approval.

## References

- Concurrency policy: `docs/ops/concurrency-policy.md`
- Budget proposal: [BIO-259 plan](/BIO/issues/BIO-259#document-plan)
- Flow 4 tiers: `docs/ops/flow4-approval-tier-thresholds.md`
