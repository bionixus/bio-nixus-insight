# BIO-471 — Budget Proposal for Board Review

**Date:** 2026-06-22  
**Prepared by:** CEO (agent ed7d77e3-aa6a-4bb0-8a30-24fe727b2870)  
**Status:** Pending board approval  
**Related:** BIO-260 ($700/mo), BIO-316 ($50K/yr scenarios), BIO-471 (tracking framework)

---

## Executive Summary

BioNixus currently operates with **$0/month tracked spend** and no active budget authority. This proposal establishes a phased budget approach with operational controls, real-time tracking, and automated alerts to ensure fiscal discipline while enabling business operations.

**Recommendation:** Approve **Phase 1 ($700/mo)** immediately for essential operations, with board option to activate **Phase 2 ($4,167/mo)** when revenue or funding justifies expanded agent work.

---

## Current State (As of 2026-06-22)

| Metric | Value | Notes |
|---|---:|---|
| **Monthly spend** | $0 | All agents paused, minimal SaaS |
| **Monthly budget** | $0 | No approved authority |
| **Active agents** | 1 (CEO) | All others paused |
| **Cash runway** | Unknown | Need cash balance from CFO |
| **Revenue YTD** | $0 | No client contracts active |

**Risk:** Operating without approved budget creates authorization gaps and prevents proper cost control.

---

## Proposed Budget: Two-Phase Approach

### Phase 1: Survival Mode ($700/mo = $8,400/yr)

**Scope:** Essential SaaS + operations + minimal agent activity  
**Authority:** BIO-260 allocation model  
**Duration:** Until first revenue or board approves Phase 2

| Category | Monthly | Annual | Key Items |
|---|---:|---:|---|
| Agent runtime | $0–$100 | $0–$1,200 | CEO only, minimal runs (<20/mo) |
| SaaS & tools | $200 | $2,400 | Google, domain, Vercel, Sanity, GitHub |
| Operations | $300 | $3,600 | WY registered agent, compliance, contingency |
| Workspace | $200 | $2,400 | Quote-only (frozen until revenue) |
| **Total** | **$700** | **$8,400** | |

**Runway at $700/mo:** 35.7 months (assumes $25K cash on hand from BIO-295)

**Operating constraints:**
- ✅ Website maintenance
- ✅ Email/docs for 6 team members
- ✅ CEO agent for planning/coordination
- ✅ Quote gathering (no contract execution)
- ❌ No marketing spend
- ❌ No Cairo office
- ❌ No insurance bind
- ❌ No contractor delivery

---

### Phase 2: Active Operations ($4,167/mo = $50,000/yr)

**Scope:** Full agent roster + SaaS + ops + minimal BD travel  
**Authority:** BIO-316 Scenario B (pending board approval)  
**Trigger:** Board decision OR first revenue >$20K

| Category | Monthly | Annual | Key Items |
|---|---:|---:|---|
| Agent runtime | $1,500 | $18,000 | CEO, CTO, CFO, CMO, BD active |
| SaaS & tools | $800 | $9,600 | Full stack at paid tiers |
| Operations | $700 | $8,400 | Compliance + contingency |
| BD travel | $500 | $6,000 | Client meetings, minimal events |
| Contingency | $667 | $8,000 | Agent overflow buffer |
| **Total** | **$4,167** | **$50,000** | |

**Runway at $4,167/mo:** 6.0 months (assumes $25K cash on hand)

**Operating capability:**
- ✅ Full agent roster for planning, delivery coordination, BD
- ✅ Full SaaS stack for productivity
- ✅ Minimal BD travel for client meetings
- ✅ CEO strategic planning
- ✅ CTO technical oversight
- ✅ CFO monthly reporting
- ⚠️ Still no marketing campaigns (requires BIO-180 $144K/yr envelope)
- ❌ No contractor delivery (project pass-through funded only)
- ❌ No insurance bind (until revenue supports it)

---

## Budget Control Framework

### 1. Alert Thresholds

| Threshold | Action | Owner |
|---|---|---|
| **80% utilization** | CFO variance report + CEO review | CFO/CEO |
| **100% utilization** | Hard stop, CEO approval for additional spend | CEO |
| **>100% overage** | Immediate freeze, board escalation within 12 hours | Board |

### 2. Spending Authority Matrix

| Amount | Approval Required | Timeline |
|---|---|---|
| <$50 | None (within budget line) | Immediate |
| $50–$200 | CEO sign-off | 24 hours |
| $200–$500 | CEO + CFO co-approval | 48 hours |
| $500–$1,000 | Board notification | 48 hours |
| >$1,000 | Board vote | Next board meeting |

### 3. Monthly Reporting

**Frequency:** 1st business day of each month  
**Owner:** CFO (or CEO if CFO paused)  
**Format:** Budget variance report (see BIO-471 framework)  
**Audience:** Board via Paperclip issue comment

**Report includes:**
- Actual spend vs. budget by category
- Agent run costs and volume
- Variance analysis (>10% deviations)
- Forward forecast for next month
- Alert history
- Recommendations

---

## Implementation Plan

### Immediate (Week 1: June 22–28)

1. **CEO:** Present this proposal to board for approval
2. **Board:** Approve Phase 1 ($700/mo) authority
3. **CEO:** Activate daily budget tracking (see BIO-471 framework)
4. **CFO:** Set up budget tracking CSV in `state/` folder
5. **CEO:** Begin Paperclip API cost monitoring

### Near-term (July 2026)

1. **CFO:** Generate first monthly variance report (July 1)
2. **CTO:** Build automated cost tracking script
3. **CEO:** Query Paperclip API for historical run data
4. **CFO:** Update forecast model with actual run costs
5. **Board:** Review July variance report, decide on Phase 2

### Future (Aug–Sep 2026)

1. **CTO:** Build real-time budget dashboard
2. **CFO:** Implement quarterly budget reviews
3. **CEO:** Annual budget planning for 2027
4. **Board:** Approve Phase 2 if revenue/funding supports it

---

## Risk Analysis

### Phase 1 Risks ($700/mo)

| Risk | Impact | Mitigation |
|---|---|---|
| **CEO agent exceeds $100/mo cap** | Budget overrun | Limit to <20 runs/month, manual review |
| **SaaS vendor price increases** | Budget overrun | Lock annual contracts, use free tiers |
| **No revenue for 12+ months** | Still 35-month runway | Phase 1 sustainable long-term |
| **Emergency needs (insurance, office)** | Cannot fund from $700 | Draw from contingency or defer to revenue |

### Phase 2 Risks ($4,167/mo)

| Risk | Impact | Mitigation |
|---|---|---|
| **Agent costs exceed caps** | Budget overrun | Contingency buffer ($667/mo), pause low-priority agents |
| **No revenue for 6+ months** | Runway depletion | Phase 2 only activates with revenue or funding commitment |
| **All agents active simultaneously** | Cost spike | Stagger agent wakes, prioritize CEO/CTO/CFO |
| **Client delivery needs contractor funds** | Phase 2 doesn't cover delivery | Project pass-through billing, client pays panels/contractors directly |

---

## Comparison to Prior Plans

| Budget Document | Monthly | Annual | Status | CEO Recommendation |
|---|---:|---:|---|---|
| BIO-260 (Survival) | $700 | $8,400 | Approved envelope | **Use for Phase 1** |
| BIO-316 Scenario B (Target) | $4,167 | $50,000 | Board review pending | **Use for Phase 2** |
| BIO-180 (Marketing) | $12,000 | $144,000 | Out of scope | Defer to revenue-funded |
| BIO-295 (Lean) | $50,600 avg | $607,200 | Superseded | No longer viable |

---

## Recommendations

### To Board

1. **Approve Phase 1 ($700/mo) immediately** to establish baseline operations and cost control
2. **Defer Phase 2 ($4,167/mo) decision** until July variance report shows actual run costs
3. **Accept Phase 1 operating constraints**: no marketing, no office, no insurance, no contractors
4. **Review monthly variance reports** on 1st business day of each month
5. **Revisit Phase 2** after first client revenue >$20K OR external funding secures 12+ month runway

### To CEO (Self)

1. **Limit agent runs** to <20/month in Phase 1 to stay under $100 agent cost
2. **Query Paperclip API** for historical run data to refine forecast
3. **Generate daily tracking** in `state/budget-tracking-june-2026.csv`
4. **Post monthly variance reports** on BIO-471 thread for board visibility

### To CFO (When Unpaused)

1. **Generate first variance report** on July 1, 2026
2. **Update forecast model** with actual API run data
3. **Review SaaS invoices** for any overages or price changes
4. **Calculate precise runway** once cash balance confirmed

### To CTO (When Unpaused)

1. **Build automated cost tracker** (Phase 2 implementation)
2. **Set up API webhooks** for real-time cost monitoring
3. **Create budget dashboard** at `state/budget-dashboard.md`

---

## Board Decision Required

**Motion:** Approve Phase 1 budget authority of **$700/month** effective June 22, 2026, with the following conditions:

1. CEO implements budget tracking framework per BIO-471
2. CFO generates monthly variance report by 1st business day of each month
3. All spending follows approval authority matrix (CEO <$200, CEO+CFO <$500, Board >$500)
4. Phase 2 ($4,167/mo) requires separate board approval after July variance review
5. CEO may activate Phase 2 immediately upon securing first revenue contract >$20K OR external funding commitment for 12+ month runway

**Vote:** [ ] Approve  [ ] Reject  [ ] Request revisions

**Board comments:**

---

**CEO sign-off:** ed7d77e3-aa6a-4bb0-8a30-24fe727b2870 — 2026-06-22  
**CFO review:** Pending (agent paused)  
**Board approval:** Pending

---

## Appendices

### A. Budget Tracking Framework

See: `docs/ops/bio-471-budget-tracking-framework.md`

### B. Historical Budget Models

- BIO-260: $700/mo allocation breakdown
- BIO-316: $50K/yr scenario analysis
- BIO-180: $144K/yr marketing plan (deferred)
- BIO-295: $607K/yr lean plan (superseded)

### C. Cost Tracking State Files

- `state/budget-tracking-june-2026.csv` — Daily tracking log
- `state/budget-dashboard.md` — Auto-generated dashboard (future)
- `state/run-history-90d.json` — Paperclip API run data (pending)
- `state/agent-cost-summary.json` — Agent cost aggregation (pending)

---

*Document key: `budget-proposal-board-review` on BIO-471*
