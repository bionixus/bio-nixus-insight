# BIO-260 — CFO Detailed Operating Budget Allocation ($700/mo)

**Version:** 1.0  
**Date:** 2026-06-15  
**Owner:** CFO  
**Parent:** [BIO-259](/BIO/issues/BIO-259) — Board-mandated $700/mo envelope  
**Authority:** `docs/ops/spend-governance.md`  
**Status:** Pending board approval — **no spend authorized**

---

## Executive summary (non-financial stakeholders)

BioNixus proposes a **$700 USD/month** all-in operating envelope for a **5–6 person** team ($117–$140 per person per month). This is a **90% reduction** from the prior [BIO-183](/BIO/issues/BIO-183) $7,000/mo ops plan. The envelope is designed for **remote-first, quote-gathering, zero-contract-execution** mode until the board approves.

**CFO recommendation:** Approve the envelope as a **survival-floor budget** for quote gathering and essential SaaS only. **Do not authorize** Cairo lease signature or insurance bind within this envelope without either (a) deferring hot-desk and insurance to client-revenue-funded tranches, or (b) approving a supplemental line item. Full minimum insurance bind alone is **$160–$240/mo** ([BIO-192](/BIO/issues/BIO-192)), which consumes **23–34%** of the entire envelope.

**Lens applied:** Scenario modeling · Break-even analysis · Operating leverage · Variance analysis · Opportunity cost

---

## Assumptions (stated upfront)

| # | Assumption | Source |
|---|---|---|
| A1 | Team size 5–6 FTE-equivalent (founders + agents); no new permanent hires | [BIO-259 plan](/BIO/issues/BIO-259#document-plan) |
| A2 | All figures USD; accrual basis for annualized items | CFO standard |
| A3 | Exchange rate risk excluded (USD-denominated vendors only) | Board mandate |
| A4 | Sales & marketing ($144K/yr per [BIO-180](/BIO/issues/BIO-180)) is **out of scope** — separate envelope | BIO-180 plan |
| A5 | Agent/compute runs on local laptop — **$0 cloud agent infra** in this envelope | `docs/ops/concurrency-policy.md` |
| A6 | Insurance quote range from Hiscox package: **$160–$240/mo** amortized | `docs/ops/bio-192-insurance-quote-comparison.md` |
| A7 | Cairo hot-desk market quotes: **$150–$250/mo** per seat (shared desk) | BIO-183 co-working research |
| A8 | **No line may spend until board approves the full $700 envelope** | `docs/ops/spend-governance.md` |

---

## Authorization tags (mandatory)

| Tag | Meaning | Agent action permitted |
|---|---|---|
| **quote-only** | RFPs, non-binding estimates, broker applications without payment | Gather quotes; post evidence on issue thread |
| **spend-authorized-after-board** | Line approved *within* envelope; payment only after board approves [BIO-259](/BIO/issues/BIO-259) | Execute payment after board confirmation recorded |
| **frozen** | Cancelled per board mandate | No quotes, no spend |

---

## Line-item allocation (monthly caps)

### Category 1 — Workspace ($250/mo cap)

| Line ID | Item | Vendor / path | Monthly cap | Tag | Quote owner | CFO tracking field |
|---|---|---|---:|---|---|---|
| W-01 | Cairo hot-desk / co-working | District, GrEEK Campus, MQR (quotes only) | **$200** | quote-only | COO | Quote log + selected vendor |
| W-02 | WY registered agent + virtual mail | Northwest Registered Agent / equiv | **$15** | spend-authorized-after-board | COO | Annual invoice ÷ 12 |
| W-03 | Ad-hoc meeting room / day pass | On-demand (Cairo or virtual) | **$35** | spend-authorized-after-board | COO | Receipt log |
| | **Category subtotal** | | **$250** | | | |

**Notes:** W-01 spend is **frozen** ([BIO-216](/BIO/issues/BIO-216) MQR lease cancelled). Quotes may be collected; signature requires board + CFO variance check against $200 cap.

---

### Category 2 — SaaS & essential tools ($200/mo cap)

| Line ID | Item | Vendor | Monthly cap | Tag | Quote owner | CFO tracking field |
|---|---|---|---:|---|---|---|
| S-01 | Email & docs (6 seats) | Google Workspace Business Starter (~$8/seat) | **$48** | spend-authorized-after-board | CTO | Google Admin billing |
| S-02 | Domain + DNS | Registrar (bionixus.com) | **$5** | spend-authorized-after-board | CTO | Renewal date |
| S-03 | Web hosting / CDN | Vercel Pro or equivalent | **$25** | spend-authorized-after-board | CTO | Invoice |
| S-04 | CMS | Sanity (Growth tier estimate) | **$20** | spend-authorized-after-board | CTO | Usage dashboard |
| S-05 | Transactional email | Resend (free tier → paid overflow) | **$10** | spend-authorized-after-board | CTO | Monthly send count |
| S-06 | Source control | GitHub Team (6 seats) | **$24** | spend-authorized-after-board | CTO | Org billing |
| S-07 | Design / docs overflow | Figma / Notion (1–2 seats) | **$18** | spend-authorized-after-board | COO | Seat audit |
| S-08 | Video / comms overflow | Zoom paid tier or equivalent | **$10** | spend-authorized-after-board | COO | Invoice |
| S-09 | SaaS flex (new tool ≤ cap) | Any — CEO pre-approval required | **$40** | spend-authorized-after-board | CTO | One-line approval log |
| | **Category subtotal** | | **$200** | | | |

**Per-person SaaS:** $200 ÷ 6 = **$33.33/person/mo** — consistent with "essential productivity only."

---

### Category 3 — Insurance & legal ($100/mo cap)

| Line ID | Item | Vendor / path | Monthly cap | Tag | Quote owner | CFO tracking field |
|---|---|---|---:|---|---|---|
| I-01 | E&O + GL + Cyber package | Hiscox (primary) / Embroker (alt) | **$0** (quote ceiling **$240/mo**) | quote-only | COO | Quote PDF + exclusion checklist |
| I-02 | Legal retainer / MSA review | External counsel (quotes) | **$0** (quote ceiling **$500/mo**) | quote-only | GeneralCounsel | SOW + hourly cap |
| I-03 | Annual compliance filings (WY) | State filing fees amortized | **$60** | spend-authorized-after-board | COO | Filing receipt |
| I-04 | Compliance / policy doc storage | Internal / low-cost vault | **$40** | spend-authorized-after-board | ResearchCompliance | Invoice |
| | **Category subtotal** | | **$100** | | | |

**Structural gap (CFO flag):** I-01 bind at Hiscox midpoint (**~$200/mo**) would require **reallocating $100/mo from workspace or SaaS**, or increasing the envelope. Under the current $700 cap, **insurance bind and Cairo hot-desk cannot both execute in full.**

---

### Category 4 — Contingency ($150/mo cap)

| Line ID | Item | Monthly cap | Tag | Approval rule | CFO tracking field |
|---|---|---:|---|---|---|
| C-01 | Unplanned ops (vendor overage, FX fee, urgent fix) | **$100** | spend-authorized-after-board | CEO sign-off if single draw > **$50** | Incident log |
| C-02 | Quote-to-bind bridge (insurance or workspace top-up) | **$50** | spend-authorized-after-board | Board amendment required if recurring | Bridge memo |
| | **Category subtotal** | **$150** | | | |

---

## Total envelope check

| Category | Monthly cap |
|---|---:|
| Workspace | $250 |
| SaaS & tools | $200 |
| Insurance & legal | $100 |
| Contingency | $150 |
| **Grand total** | **$700** |

Annualized: **$8,400/yr** · Per-person (6 FTE): **$1,400/yr** or **$117/mo**

✅ Lines sum to **≤ $700** · ✅ Each line tagged quote-only or spend-authorized-after-board

---

## Monthly variance tracking template (CFO)

Post on the **1st business day** of each month on [BIO-259](/BIO/issues/BIO-259) (or successor tracking issue):

| Line ID | Budget | Actual | Variance $ | Variance % | Notes |
|---|---:|---:|---:|---:|---|
| W-01 | — | — | — | — | quote-only; no spend |
| W-02 | 15 | | | | |
| … | | | | | |
| **Total** | **700** | | | | |

**Variance analysis rule:** Investigate any category **>10%** over cap or **any single incident >$50** (C-01).

---

## Scenario modeling

| Scenario | Monthly spend | Runway impact | Trigger |
|---|---:|---|---|
| **Base (approved envelope, remote-first)** | $700 | 12 × cash ÷ $700 = months runway | Board approves BIO-259 |
| **Downside (SaaS overage + no revenue)** | $850 | Runway −14% vs base | S-09 flex + C-01 draws |
| **Upside (first client + bind insurance)** | $900–$950 | Requires envelope amendment or revenue offset | Client MSA signed |

*Runway formula uses **burn rate and runway** lens — CFO must maintain live cash balance; this document does not state cash on hand (data unavailable).*

---

## Sensitivity analysis (key variables)

| Variable | Base | −20% | +20% | Envelope breach? |
|---|---:|---:|---:|---|
| SaaS seats (6 → 5 or 7) | $200 | $167 | $233 | +20% → **yes** (need S-09 cut) |
| Hot-desk (W-01) | $200 | $160 | $240 | +20% → **yes** at bind |
| Insurance bind (I-01) | $0 spend / $200 quote | — | $240 | Bind → **yes** without reallocation |
| Contingency draw | $0–$150 | — | Full $150 | Absorbed if other lines under |

---

## Comparison to prior envelope

| Metric | BIO-183 ($7K/mo) | BIO-260 ($700/mo) | Δ |
|---|---:|---:|---|
| Monthly cap | $7,000 | $700 | **−90%** |
| Annualized | $84,000 | $8,400 | −$75,600 |
| Insurance target | $1,000/mo ($12K/yr) | $0 bind / $100 compliance | Deferred |
| Workspace | MQR lease path | Quote-only hot-desk | Frozen |
| Per-person ops | ~$1,167–1,400 | ~$117–140 | −90% |

**Opportunity cost:** Maintaining $700/mo preserves cash but **delays** client-ready insurance COI and Cairo presence — both were on the critical path in BIO-183. Revenue-first bind remains the break-even path.

---

## Frozen / cancelled lines (do not spend)

| Item | Status | Reference |
|---|---|---|
| MQR Cairo Business Park lease + deposit | **frozen** | [BIO-216](/BIO/issues/BIO-216), [BIO-261](/BIO/issues/BIO-261) |
| Hiscox insurance bind | **frozen** (quotes OK) | [BIO-192](/BIO/issues/BIO-192) |
| All BIO-216 child execution payments | **cancelled** | [BIO-261](/BIO/issues/BIO-261) |

---

## Recommendations

1. **Board:** Approve the $700/mo envelope as **Phase 0 — survival + quote gathering** with explicit acknowledgment that **full insurance bind and Cairo lease are deferred**.
2. **CEO:** Escalate via `request_confirmation` on [BIO-259](/BIO/issues/BIO-259) using this document as the CFO allocation revision.
3. **COO:** Continue **quote-only** on W-01 and I-01; post 3 workspace quotes and refreshed Hiscox/Embroker bindable quotes on issue thread.
4. **CTO:** On board approval, activate S-01 through S-06 only; hold S-09 flex until first variance review.
5. **CFO:** First monthly variance report due **1st business day after board approval**.

**Material decision:** Any recurring spend that would push run-rate above **$700/mo** requires CEO escalation and board amendment — not CFO unilateral approval.

---

## Sign-off

| Role | Action | Date |
|---|---|---|
| CFO | Allocation drafted; structural insurance/workspace gap flagged | 2026-06-15 |
| CEO | Board escalation | Pending |
| Board | Envelope approve / reject | Pending |
