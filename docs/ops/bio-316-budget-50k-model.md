# BIO-316 — $50K Annual Budget Scenarios (Baseline → Target)

**Date:** 15 June 2026  
**Prepared by:** CFO, BioNixus  
**Parent:** [BIO-315](/BIO/issues/BIO-315) — How to decrease annual budget to $50,000  
**Authority baseline:** [BIO-295](/BIO/issues/BIO-295) lean envelope (~$607K/yr · $2.2K/mo pre-revenue · $25K seed)  
**Status:** Model only — **no spend authorized**; quotations only per spend governance

---

## Executive summary (CEO / board)

Board asks for a **$50,000/year** operating envelope — a **~92% reduction** from the endorsed lean authority of **~$607,200/year** ([BIO-295](/BIO/issues/BIO-295)). This is not a trim; it is a **strategy reset** to agent-first survival mode.

| Metric | Lean baseline (BIO-295) | **$50K target** | Delta |
|---|---:|---:|---:|
| **Annual operating envelope** | ~$607,200 | **$50,000** | **−92%** |
| **Avg monthly (flat)** | ~$50,600 | **~$4,167** | −92% |
| **Pre-revenue fixed burn** | ~$2,200/mo | **~$3,500–4,167/mo** | +59–89% vs lean pre-revenue* |
| **Seed envelope** | $25,000 | **$25,000** (unchanged) | — |
| **Runway @ flat $50K/yr spend** | 11.4 mo @ $2.2K | **6.0 mo @ $4,167** | −5.4 mo |
| **Q1 revenue target ($120K)** | Credible (lean path) | **Not credible** (Scenario C) | See §6 |

\*The $50K/year cap is **higher** than current lean pre-revenue burn ($2.2K/mo) when averaged flat — but **eliminates** all revenue-funded variable lines (marketing, contract delivery OPEX, panels). Net effect: less capacity to generate the $120K Q1 target.

**CFO recommendation:** Treat **$50K/year as Scenario B (total ops envelope)** — agent runtime + minimal SaaS + $700/mo ops cap; **zero** marketing spend, **zero** Egypt payroll, **zero** human FTE, delivery **100% project-funded**. Board must **revise or abandon** the $120K Q1 revenue target if this envelope is adopted.

**Lenses applied:** Scenario modeling · Burn rate and runway · Operating leverage · Break-even analysis · Opportunity cost · Variance analysis · Unit economics

---

## Assumptions (stated upfront)

| # | Assumption | Source |
|---|---|---|
| A1 | Lean baseline = **~$607,200/yr** phased envelope from [BIO-295](/BIO/issues/BIO-295) | `lean-seed-burn-model.md` attachment |
| A2 | Pre-revenue lean burn = **~$2,200/mo** fixed (agent-led, no FTE) | BIO-295 §2.1 |
| A3 | Seed capital = **$25,000** (board-facing lean envelope) | BIO-295 §1.2 |
| A4 | $50K target = **$4,167/mo** flat annualized ($50,000 ÷ 12) | BIO-315 acceptance criteria |
| A5 | Sales & marketing full plan ($144K/yr) is **out of scope** at $50K | BIO-180 vs BIO-315 |
| A6 | Egypt xlsx (~$221K Y1) **rejected as authority** | [BIO-288](/BIO/issues/BIO-288) |
| A7 | Agent caps from Paperclip API (2026-06-15): **5 agents · $350/mo total** (all paused) | `GET /agents` |
| A8 | Cash on hand not stated — runway uses **$25K seed only** | Data unavailable |
| A9 | Cursor/subscription costs for human operators **excluded** from $50K (founder tooling) | Explicit scope boundary |

---

## 1. Side-by-side: lean baseline vs $50K target

### 1.1 Annual envelope

| Category | Lean baseline (BIO-295 / BIO-174) | $50K target (Scenario B) | Cut ($) | Cut (%) |
|---|---:|---:|---:|---:|
| Research & analytics (delivery OPEX) | $180,000 | **$0** | −$180,000 | −100% |
| Leadership & admin (agent/API) | $24,000 | **$18,000** | −$6,000 | −25% |
| Sales & marketing | $84,000 | **$0** | −$84,000 | −100% |
| Technology & tools (SaaS) | $24,000 | **$9,600** | −$14,400 | −60% |
| Data & panel (fixed allocation) | $96,000 | **$0** | −$96,000 | −100% |
| Operations & overhead | $8,400 | **$8,400** | $0 | 0% |
| BD / travel (minimal) | (in S&M) | **$6,000** | n/a | Carved from cut S&M |
| Contingency / flex | (in phased caps) | **$8,000** | n/a | Absorbs agent overages |
| Commissions (variable) | ~$39,000 at plan | **$0 from OPEX** | −$39,000 | Revenue-funded only |
| Egypt payroll & office | **Deferred ($0 lean)** | **$0** | $0 | Remains deferred |
| Insurance bind | **Deferred ($0 lean)** | **$0** | $0 | Quote-only |
| Human FTE salaries | **$0 lean** | **$0** | $0 | Remains eliminated |
| **Total** | **~$607,200** | **$50,000** | **−$557,200** | **−92%** |

### 1.2 Monthly view (flat allocation)

| | Lean baseline (avg) | Lean pre-revenue | **$50K target** |
|---|---:|---:|---:|
| Monthly | ~$50,600 | ~$2,200 | **~$4,167** |
| Interpretation | Full-year phased plan | Weeks 1–8 survival | **Flat survival cap** |

---

## 2. Three scenarios at $50,000/year (~$4,167/mo)

Board must choose scope. All scenarios share the **same dollar cap**; they differ in **what is included** and **what is stopped**.

### Scenario A — Agent / runtime only

**Scope:** $50K covers **Paperclip agent runtime caps + essential AI/API usage only**. No SaaS stack, no ops envelope, no contractors.

| Line | Annual | Monthly | Notes |
|---|---:|---:|---|
| Core agent roster (CEO, CTO, CFO, CMO, BD) | $30,000 | $2,500 | ~5 agents × ~$500/mo blended cap |
| Specialist agents (on-demand) | $12,000 | $1,000 | Wake-on-demand; 2–3 med-intensity roles |
| API / token overflow buffer | $8,000 | $667 | Upside case from BIO-154 |
| **Total** | **$50,000** | **$4,167** | |

**Stop-list impact:** Eliminates **all** SaaS ($24K), ops ($8.4K), marketing ($84K), delivery OPEX ($180K), panels ($96K) from company envelope — **$392.4K/yr** removed from authority.

**Operating implication:** Website, CRM, email, CMS **not funded** from this scenario. Founders must self-host or use free tiers outside envelope. **Not viable** as standalone company budget.

---

### Scenario B — Total ops envelope (CEO default hypothesis)

**Scope:** $50K = **total annual operating spend** for agent-first lean company: runtime + minimal SaaS + $700/mo ops cap. Human hires, Egypt, insurance binds, marketing campaigns **out of scope** until revenue-funded separately.

| Line ID | Item | Annual | Monthly | Tag |
|---|---|---:|---:|---|
| R-01 | Agent/API runtime (core roster) | $18,000 | $1,500 | spend-after-board |
| S-01 | Essential SaaS (Google, domain, Vercel, Sanity free→paid, GitHub) | $9,600 | $800 | spend-after-board |
| O-01 | Operations envelope ([BIO-260](/BIO/issues/BIO-260) cap × 12) | $8,400 | $700 | spend-after-board |
| B-01 | BD travel / client meetings (minimal) | $6,000 | $500 | CEO pre-approval |
| C-01 | Contingency / agent overflow | $8,000 | $667 | CEO if >$50 draw |
| **Total** | | **$50,000** | **$4,167** | |

**Agent roster at Scenario B (~$1,500/mo):**

| Agent | Status at $50K | Monthly cap | Annual |
|---|---|---:|---:|
| CEO | **Active** | $500 | $6,000 |
| CTO | **Active** | $400 | $4,800 |
| CFO | **Active** | $200 | $2,400 |
| CMO | **Paused** (BD-only wakes) | $100 | $1,200 |
| BD Manager | **On-demand** | $200 | $2,400 |
| All other agents (29+) | **Paused** | $0 | $0 |
| Overflow buffer | — | $167 avg | $2,000 |
| **Total runtime** | | **~$1,500** | **~$18,000** |

**SaaS at Scenario B (~$800/mo):** Matches BIO-260 S-01–S-06 subset at minimum tiers; Figma/Notion/Zoom overflow **eliminated**.

---

### Scenario C — Full company incl. contractors

**Scope:** Attempt to fund **operations + delivery contractors + minimal marketing** within $50K. **Mathematically infeasible** without destroying Q1 revenue path.

| Line | Scenario B | Add-back attempt | **Max fit in $50K** | Gap vs lean |
|---|---:|---:|---:|---:|
| Ops + SaaS + agents | $36,000 | — | $36,000 | — |
| Contract researchers | $0 | +$150,000 needed | **$8,000** (0.05 FTE-equiv) | −$142,000 |
| Panel / data | $0 | +$96,000 needed | **$0** | −$96,000 |
| Marketing / BD | $6,000 | +$78,000 needed | **$6,000** | −$78,000 |
| Commissions | $0 | +$39,000 at plan | **$0** | −$39,000 |
| **Total demand** | | **~$607,000** | **$50,000** | **−$557,000** |

**Verdict:** Scenario C at $50K = **wind-down or side-project mode**. Cannot deliver $120K Q1 revenue. One Rapid Sprint ($8K) would consume **16%** of entire annual envelope.

---

## 3. Explicit stop-list (dollar impact)

| # | Item | Lean baseline ($/yr) | $50K action | **$ impact saved** | Owner |
|---|---|---:|---|---:|---|
| 1 | Research FTE phased hire | $180,000 (contract equiv) | **Eliminate from OPEX** — project-funded SOW only | **−$180,000** | COO / MR Mgr |
| 2 | Digital marketing & paid ads | $36,000 | **Stop** — organic/BD only | **−$36,000** | CMO |
| 3 | Events & conferences | $6,000–$24,000 | **Stop** all events Q1–Q4 | **−$24,000** | CMO |
| 4 | BD entertainment | $12,000 | **Stop** — travel only per B-01 ($6K) | **−$6,000** | BD |
| 5 | Data & panel fixed allocation | $96,000 | **Displace** — bill to client SOW | **−$96,000** | MR Mgr |
| 6 | Sales commissions (accrual) | ~$39,000 | **Variable only** on cash receipt | **−$39,000** | CFO |
| 7 | Egypt FTE + office (xlsx) | ~$140,495 Y1 | **Eliminate** — remain deferred | **−$140,495** | COO |
| 8 | BIO-152 net-new agents (5 roles) | $4,500/yr at paused caps | **Keep paused** | **−$4,500** | HR / CTO |
| 9 | Non-core agents (29 agents) | unbudgeted wakes | **Pause all** except core 4–5 | **TBD** | CTO |
| 10 | Insurance bind (Hiscox) | $1,920–$2,880/yr | **Stop** — quote-only | **−$2,400** | COO |
| 11 | Cairo hot-desk / MQR lease | $2,400–$3,000/yr | **Stop** — frozen | **−$3,000** | COO |
| 12 | Legal retainer | up to $6,000/yr | **Stop** — quote-only | **−$6,000** | GC |
| 13 | SaaS overflow (Figma, Zoom, Notion) | ~$4,800/yr | **Cut** to free tiers | **−$4,800** | CTO |
| 14 | Technology flex / AI tools | ~$14,400/yr | **Cut 60%** — core only | **−$14,400** | CTO |
| 15 | Admin / EA / accounting hire | deferred | **Eliminate** | $0 (already $0) | COO |
| 16 | Service 4 subscription launch | deferred Q3+ | **Defer** indefinitely | $0 | CEO |
| **Total addressable cuts** | | | | **~$557,000+** | |

---

## 4. Monthly runway math at $50K/year

**Lens: Burn rate and runway · Scenario modeling**

### 4.1 Runway from $25K seed (BIO-295)

| Spend rate | Monthly burn | Runway (months) | Runway (weeks) |
|---|---:|---:|---:|
| Lean pre-revenue ($2.2K/mo) | $2,200 | **11.4** | 49 |
| **$50K/yr flat (Scenario B)** | **$4,167** | **6.0** | 26 |
| $50K/yr + $10K project float | $5,000 | 5.0 | 22 |
| Downside (no revenue, max contingency) | $4,500 | 5.6 | 24 |

**Formula:** `Runway (mo) = Seed ($25,000) ÷ Monthly burn`

### 4.2 Runway sensitivity (Scenario B)

| Variable | Base | −20% | +20% | Breaches 6 mo? |
|---|---:|---:|---:|---|
| Agent runtime | $1,500/mo | $1,200 | $1,800 | +20% → yes (5.0 mo) |
| SaaS stack | $800/mo | $640 | $960 | Absorbed in contingency |
| Contingency draw | $0 | — | $667/mo full | **Yes** — 5.0 mo |
| First revenue delay | Mar wk 8 | — | No Q1 revenue | **11.4 mo** remaining @ $2.2K equivalent spend |

### 4.3 Break-even at $50K envelope

| Metric | Value | Notes |
|---|---:|---|
| Annual fixed envelope | $50,000 | No variable OPEX funded |
| Q1 revenue target | $120,000 | Requires BD + delivery capacity **not in envelope** |
| Min revenue to cover $50K fixed | **$50,000** | 100% margin impossible — need **~$250K+** at 20% net |
| Projects needed @ $40K avg | **1.25** projects/yr | Just to cover fixed ops — **no delivery cost funded** |

**Break-even analysis lens:** At $50K all-in fixed, the company **cannot fund delivery** from OPEX. Every project must be **100% pass-through funded** (client pays panel + contractor costs separately). Lean path allowed **$180K/yr** contract delivery budget.

---

## 5. Comparison to prior envelopes

| Metric | BIO-183 ($7K/mo) | BIO-260 ($700/mo) | BIO-295 lean ($607K/yr) | **BIO-316 ($50K/yr)** |
|---|---:|---:|---:|---:|
| Monthly (normalized) | $7,000 | $700 | ~$50,600 avg | **$4,167** |
| Annualized | $84,000 | $8,400 | ~$607,200 | **$50,000** |
| Marketing funded | Partial | No | $84K/yr | **$0** |
| Delivery OPEX | Yes | No | $180K/yr | **$0** |
| Egypt payroll | Planned | No | Deferred | **Eliminated** |
| Q1 $120K credible? | Yes | No | **Conditional yes** | **No** |

---

## 6. Q1 $120K revenue target — compatibility flag

**CFO determination: INCOMPATIBLE with $50K envelope unless targets are revised.**

| Requirement for $120K Q1 | Cost implied | Funded at $50K? |
|---|---|---|
| BD pipeline (2–3 projects × $40–60K) | CMO + BD time + travel | **Partial** ($6K travel only) |
| Proposal / creds production | Agent + design time | **Yes** (within agent cap) |
| Contract delivery (panels + moderators) | ~$45K variable (BIO-295) | **No** — not in $50K OPEX |
| Marketing / events for visibility | $12K+ Q1 lean | **No** |
| Insurance COI for client MSAs | $160–240/mo bind | **No** — quote-only |
| Founder sales capacity | Founder time (not in $50K) | **Required** — implicit |

**Scenario modeling conclusion:**

| Scenario | Q1 $120K achievable? | Recommended revenue target |
|---|---|---|
| A (runtime only) | **No** | $0–$25K (founder network only) |
| B (total ops — default) | **No** unless pass-through billing | **$40K–$60K** (1 project) |
| C (incl. contractors) | **No** at $50K — needs ~$150K+ OPEX | Revise plan |

**Opportunity cost:** Adopting $50K saves **$557K/yr** vs lean authority but **foregoes ~$70K–$120K** of Q1 revenue capacity. Net present value of cut likely **negative** unless board intent is **pause operations** pending external funding.

---

## 7. Recommendations

1. **Board:** Confirm scope — **Scenario B (total ops)** is the only coherent $50K interpretation. Reject Scenario A (no SaaS) and Scenario C (impossible) as standalone budgets.
2. **CEO:** Revise [2026 Financial Targets](/BIO/issues/BIO-32#document-plan) Q1 revenue to **$40K–$60K** (one project) OR approve a **separate delivery pass-through envelope** (client-funded panels/contractors, not counted in $50K).
3. **CEO:** If $120K Q1 is non-negotiable, **minimum OPEX envelope is ~$150K–$180K/yr** (lean delivery + minimal BD) — not $50K.
4. **CTO:** Implement agent **pause list** — keep CEO, CTO, CFO active; pause remaining 31 agents until revenue gate clears.
5. **CMO:** Confirm BD-led pipeline can close **one** project with **$0 marketing** and **$500/mo travel cap**.
6. **CFO:** Hold all spend execution; refresh board confirmation on [BIO-315](/BIO/issues/BIO-315) before any authority change.

**Material decision:** Adopting $50K/yr requires **CEO sign-off** and board approval via [BIO-279](/BIO/issues/BIO-279) pattern. CFO does not unilaterally approve.

---

## Sign-off

| Role | Action | Date |
|---|---|---|
| CFO | Cut model complete — 3 scenarios, stop-list, runway math | 2026-06-15 |
| CEO | Review + board escalation on [BIO-315](/BIO/issues/BIO-315) | Pending |
| Board | Choose scenario; revise Q1 target if $50K adopted | Pending |

---

*Document key: `budget-50k-model` on [BIO-316](/BIO/issues/BIO-316)*
