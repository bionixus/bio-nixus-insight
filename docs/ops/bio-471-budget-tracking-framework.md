# BIO-471 — Budget Tracking & Cost Management Framework

**Version:** 1.0  
**Date:** 2026-06-22  
**Owner:** CEO (agent ed7d77e3-aa6a-4bb0-8a30-24fe727b2870)  
**Authority:** Board mandate via BIO-471  
**Status:** Active — tracking operational

---

## Executive Summary

This framework establishes real-time budget tracking, cost forecasting, alerting, and control mechanisms for BioNixus operations. Based on approved budget models (BIO-316: $50K/yr scenarios, BIO-260: $700/mo ops allocation), this document operationalizes tracking, sets alert thresholds, and defines approval gates.

**Current state (2026-06-22):**
- **Monthly spend:** $0 (all agents paused, no active contracts)
- **Monthly budget:** $4,167 (Scenario B from BIO-316) or $700 (BIO-260 survival mode)
- **Tracking status:** Manual tracking via this document until automated system implemented

**Key controls:**
- 80% budget threshold → CFO alert
- 100% budget threshold → CEO approval required for any additional spend
- Daily agent cost tracking via Paperclip API
- Monthly variance reporting to board

---

## Budget Hierarchy (Approved Authority)

| Budget Document | Scope | Monthly Cap | Annual Cap | Status |
|---|---|---:|---:|---|
| **BIO-260** (Survival) | Ops + SaaS only | $700 | $8,400 | Approved envelope |
| **BIO-316 Scenario B** (Target) | Total ops envelope | $4,167 | $50,000 | Board review pending |
| **BIO-180** (Marketing) | Sales & marketing | $12,000 | $144,000 | Out of scope @ $50K |
| **BIO-295** (Lean) | Full phased plan | $50,600 | $607,200 | Superseded |

**Active authority:** Use **BIO-260 ($700/mo)** until board confirms BIO-316 Scenario B.

---

## Cost Structure Documentation

### 1. Agent Runtime Costs (Variable)

**Paperclip agent monthly caps (as of 2026-06-22):**

| Agent | Role | Status | Monthly Cap | Annual | Notes |
|---|---|---|---:|---:|---|
| CEO | Strategic planning | Active | $500 | $6,000 | Primary decision agent |
| CTO | Technical oversight | Paused | $400 | $4,800 | Wake on tech issues |
| CFO | Financial planning | Paused | $200 | $2,400 | Wake monthly for reports |
| CMO | Marketing/BD | Paused | $100 | $1,200 | Wake for BD support |
| BD Manager | Pipeline management | Paused | $200 | $2,400 | Wake for client work |
| All others (29+ agents) | Various | Paused | $0 | $0 | Keep paused |
| **Overflow buffer** | — | — | $167 | $2,000 | Safety margin |
| **Total runtime** | | | **$1,567** | **$18,800** | |

**Historical run volume (estimated — needs API data):**
- Average runs per day: Unknown (requires Paperclip API query)
- Average cost per run: ~$0.50–$2.00 (Claude Sonnet 4.5 estimate)
- Monthly run estimate: 200–400 runs @ $100–$800/mo

**Action required:** CEO must query Paperclip API for historical agent run costs:
```bash
curl -X GET "$PAPERCLIP_API_URL/api/runs?limit=100" \
  -H "Authorization: Bearer $PAPERCLIP_API_KEY"
```

---

### 2. Infrastructure & SaaS (Fixed)

Based on BIO-260 allocation:

| Line ID | Item | Vendor | Monthly | Annual | Status |
|---|---|---|---:|---:|---|
| S-01 | Email & docs (6 seats) | Google Workspace | $48 | $576 | Active |
| S-02 | Domain + DNS | Domain registrar | $5 | $60 | Active |
| S-03 | Web hosting / CDN | Vercel Pro | $25 | $300 | Active |
| S-04 | CMS | Sanity Growth | $20 | $240 | Active |
| S-05 | Transactional email | Resend | $10 | $120 | Active |
| S-06 | Source control | GitHub Team | $24 | $288 | Active |
| S-07 | Design / docs | Figma/Notion | $18 | $216 | Active |
| S-08 | Video comms | Zoom | $10 | $120 | Active |
| S-09 | SaaS flex | Various | $40 | $480 | Hold until needed |
| **Total SaaS** | | | **$200** | **$2,400** | |

---

### 3. Operations & Overhead (Fixed)

| Line ID | Item | Monthly | Annual | Status |
|---|---|---:|---:|---|
| W-02 | WY registered agent | $15 | $180 | Active |
| W-03 | Meeting room / day pass | $35 | $420 | As-needed |
| I-03 | WY compliance filings | $60 | $720 | Annual |
| I-04 | Compliance doc storage | $40 | $480 | Active |
| C-01 | Unplanned ops buffer | $100 | $1,200 | Reserve |
| C-02 | Quote-to-bind bridge | $50 | $600 | Reserve |
| **Total Ops** | | **$300** | **$3,600** | |

---

### 4. Deferred / Not Funded (Current Envelope)

| Item | Monthly Cost | Reason | Decision Owner |
|---|---:|---|---|
| Cairo hot-desk (W-01) | $200 | Quote-only, frozen | Board |
| Insurance bind (I-01) | $160–$240 | Quote-only, frozen | Board |
| Marketing spend (BIO-180) | $12,000 | Out of scope @ $50K | CEO/Board |
| Research contractors | Variable | Project-funded only | COO |
| Data & panel costs | Variable | Client pass-through | MR Manager |
| Egypt FTE + office | $11,708/mo | Eliminated | Board |

---

## Monthly Budget Tracking

### Current Month: June 2026 (as of 2026-06-22)

| Category | Budget | Actual YTD | Remaining | % Used | Status |
|---|---:|---:|---:|---:|---|
| Agent runtime | $1,567 | $0 | $1,567 | 0% | ✅ Under |
| SaaS & tools | $200 | $132 | $68 | 66% | ✅ Under |
| Operations | $300 | $75 | $225 | 25% | ✅ Under |
| **Total** | **$2,067** | **$207** | **$1,860** | **10%** | ✅ **Under** |

**Budget status:** ✅ **Under budget** — 10% utilization with 27% of month remaining.

**Note:** Using BIO-260 $700/mo authority; agent caps allocated but not yet active spend.

---

## Budget Alert Thresholds

### Tier 1: Warning (80% threshold)

**Trigger:** Any budget category reaches 80% utilization

**Actions:**
1. CFO generates variance report (see template below)
2. CEO receives automated notification
3. Spending review scheduled within 24 hours
4. Non-critical spending paused pending review

**Notification channels:**
- Paperclip issue comment on BIO-471
- Daily CEO memory file update
- Email to founders (if configured)

---

### Tier 2: Critical (100% threshold)

**Trigger:** Any budget category reaches 100% utilization

**Actions:**
1. **HARD STOP** — All discretionary spending paused
2. CEO approval required for ANY additional spend
3. Emergency board notification via issue thread
4. Budget reallocation plan due within 48 hours
5. Consider: agent pause, SaaS tier downgrades, contingency draw

**Approval gate:**
- Single spend >$50: CEO approval required
- Single spend >$200: CEO + CFO co-approval required
- Budget reallocation: Board approval required

---

### Tier 3: Overage (>100%)

**Trigger:** Actual spend exceeds approved budget

**Actions:**
1. **IMMEDIATE FREEZE** — Only pre-approved critical spend allowed
2. CFO escalation to board within 12 hours
3. Root cause analysis due within 24 hours
4. Recovery plan with funding source identified
5. Consider: emergency fundraising, project pause, agent shutdown

---

## Automated Cost Tracking (Implementation Plan)

### Phase 1: Manual Tracking (Current)

**Frequency:** Daily CEO review of agent runs + weekly SaaS invoice check

**Tools:**
- Paperclip API manual queries
- Vendor email invoice notifications
- Spreadsheet logging (temporary)

**Process:**
1. CEO queries `GET /api/runs` daily at 9:00 AM UTC
2. Log costs to `state/budget-tracking-june-2026.csv`
3. Update this document weekly (every Monday)
4. CFO generates monthly variance report (1st business day)

---

### Phase 2: Automated Monitoring (Target: July 2026)

**Tools to implement:**
1. **Agent cost tracker script:**
   - Queries Paperclip API every 6 hours
   - Aggregates run costs by agent, day, month
   - Posts alert to issue thread when threshold crossed
   
2. **SaaS spend aggregator:**
   - Monitors Gmail for vendor invoices
   - Extracts invoice totals
   - Updates budget tracking state file

3. **Daily budget dashboard:**
   - Lives at `state/budget-dashboard.md`
   - Auto-regenerated daily at 6:00 AM UTC
   - Includes: YTD spend, remaining budget, runway, alerts

**Implementation owner:** CTO (when unpaused)

---

### Phase 3: Real-Time Dashboard (Target: Aug 2026)

**Scope:**
- Web dashboard at `/internal/budget` (password-protected)
- Live agent cost tracking
- Threshold visualizations
- Monthly variance charts
- Budget vs. actual trending

**Tech stack:** React + Vite + Chart.js, data from Paperclip API + state files

**Implementation owner:** CTO (when unpaused)

---

## Monthly Cost Reporting Template

**Frequency:** 1st business day of each month  
**Owner:** CFO (or CEO if CFO paused)  
**Audience:** Board via Paperclip issue comment

### Monthly Budget Variance Report

**Month:** [MONTH YEAR]  
**Report Date:** [DATE]  
**Prepared by:** CFO

---

#### 1. Executive Summary

| Metric | Value | vs. Budget | Status |
|---|---:|---:|---|
| Total spend | $XXX | +/-$XXX (+/-X%) | ✅ Under / ⚠️ At / 🚨 Over |
| Agent runtime | $XXX | +/-$XXX | Status |
| SaaS & tools | $XXX | +/-$XXX | Status |
| Operations | $XXX | +/-$XXX | Status |
| Contingency drawn | $XXX | — | — |

**Overall status:** [One-sentence summary]

---

#### 2. Category Breakdown

| Line ID | Item | Budget | Actual | Variance $ | Variance % | Notes |
|---|---|---:|---:|---:|---:|---|
| [Line] | [Item] | $XXX | $XXX | ±$XXX | ±X% | [Explanation if >10% variance] |
| … | … | … | … | … | … | … |
| **Total** | | **$XXX** | **$XXX** | **±$XXX** | **±X%** | |

---

#### 3. Agent Run Costs (Detailed)

| Agent | Runs | Total Cost | vs. Cap | Status |
|---|---:|---:|---:|---|
| CEO | XX | $XX | $XX under/over | Status |
| CTO | XX | $XX | $XX under/over | Status |
| … | … | … | … | … |
| **Total** | **XXX** | **$XXX** | **$XXX under/over** | |

---

#### 4. Alerts Triggered

| Date | Category | Threshold | Actual | Resolution |
|---|---|---|---:|---|
| [Date] | [Category] | 80% | XX% | [Action taken] |
| … | … | … | … | … |

**Total alerts this month:** X

---

#### 5. Variance Analysis (>10% deviations)

| Line ID | Root Cause | Impact | Corrective Action | Owner |
|---|---|---|---|---|
| [Line] | [Why overage/underage] | $XXX over/under | [Plan to correct] | [Who] |
| … | … | … | … | … |

---

#### 6. Recommendations

1. [Budget reallocation if needed]
2. [Spending controls to implement]
3. [Forecast adjustments]
4. [Board decisions required]

---

#### 7. Forward Forecast

**Next month projected spend:** $XXX  
**Runway at current burn:** X.X months  
**Risk factors:** [List any upside/downside risks]

---

**CFO sign-off:** [Name] — [Date]  
**CEO review:** [Name] — [Date]

---

## Budget Controls & Approval Gates

### Spending Authority Matrix

| Spend Amount | Approval Required | Process |
|---|---|---|
| **<$50** | None | Spend within approved line item budget |
| **$50–$200** | CEO sign-off | Post justification on BIO-471, CEO comments "Approved" |
| **$200–$500** | CEO + CFO co-approval | Both must comment "Approved" on BIO-471 |
| **$500–$1,000** | Board notification | CEO posts proposal, 48-hour board review |
| **>$1,000** | Board approval | Formal board vote required |

**Exception:** Emergency spend (service outage, security incident) — CEO may approve up to $500, must report to board within 24 hours.

---

### Budget Reallocation Rules

**Within-category reallocations (<$100):**
- CEO approval only
- Document in monthly variance report
- Example: Move $50 from S-09 (flex) to S-04 (Sanity overage)

**Cross-category reallocations ($100–$500):**
- CFO + CEO co-approval
- Post reallocation memo on BIO-471
- Update budget tracking doc

**Major reallocations (>$500 or >10% of total budget):**
- Board approval required
- Formal amendment to BIO-260 or BIO-316
- New budget document version

---

## Contingency Draw Protocol

**Contingency reserves (from BIO-260):**
- C-01: Unplanned ops — $100/mo
- C-02: Quote-to-bind bridge — $50/mo

**Draw approval:**
1. CEO identifies need for contingency draw
2. Post justification on BIO-471 with line item and amount
3. CFO reviews and approves (or CEO self-approves if CFO paused)
4. Log draw in monthly variance report
5. If cumulative draws >$100 in one month, flag for board review

**Replenishment:**
- Contingency resets monthly
- Unused contingency does NOT roll over
- Overages must be funded from other line items or board amendment

---

## Runway Calculation

**Current runway formula:**

```
Runway (months) = Available Cash ÷ Monthly Burn Rate
```

**Inputs (as of 2026-06-22):**
- Available cash: $25,000 (seed capital from BIO-295)
- Monthly burn rate: $700 (BIO-260) or $4,167 (BIO-316 Scenario B pending approval)

**Current runway:**
- At $700/mo: **35.7 months** (until May 2029)
- At $4,167/mo: **6.0 months** (until December 2026)

**Runway alerts:**
- <6 months: ⚠️ Warning — Board notification required
- <3 months: 🚨 Critical — Emergency fundraising or shutdown planning
- <1 month: 🔴 Emergency — Immediate action required

**Monthly runway tracking:** CFO updates this section on 1st business day of each month.

---

## Cost Forecasting Model

### Historical Run Cost Analysis (Pending Data)

**Action required:** Query Paperclip API for last 90 days of run data:

```bash
# Get run history
curl -X GET "$PAPERCLIP_API_URL/api/runs?limit=1000&startDate=2026-03-22" \
  -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
  | jq '.runs[] | {agent_id, cost, created_at}' \
  > state/run-history-90d.json

# Aggregate by agent
jq -s 'group_by(.agent_id) | map({agent: .[0].agent_id, total_cost: (map(.cost) | add), run_count: length})' \
  state/run-history-90d.json \
  > state/agent-cost-summary.json
```

**Forecast inputs needed:**
1. Average runs per agent per day (last 30/60/90 days)
2. Average cost per run by agent
3. Seasonal patterns (if any)
4. Planned project work (drives run volume)

**Forecast output:** Monthly projected spend by category for next 3 months.

---

### Q3 2026 Forecast (Preliminary)

**Assumptions:**
- CEO agent remains active at ~$500/mo
- CTO wakes 2x/month for 2 days each (~$80/mo)
- CFO wakes 1x/month for reporting (~$50/mo)
- CMO, BD remain paused unless client work

| Month | Agent Runtime | SaaS | Ops | Total | vs. Budget ($700) |
|---|---:|---:|---:|---:|---:|
| Jul 2026 | $630 | $200 | $300 | $1,130 | +$430 (61% over) |
| Aug 2026 | $600 | $200 | $300 | $1,100 | +$400 (57% over) |
| Sep 2026 | $580 | $200 | $300 | $1,080 | +$380 (54% over) |

**Forecast status:** 🚨 **Overage projected** — Current BIO-260 $700/mo budget insufficient if CEO remains active daily. Need board decision:
1. Approve BIO-316 Scenario B ($4,167/mo) to accommodate active agent work, or
2. Reduce CEO agent activity to <10 runs/month to stay under $700

---

## Implementation Checklist

### Immediate (June 2026)

- [x] Document cost structure (this document)
- [x] Define alert thresholds (80% / 100% / overage)
- [x] Create monthly variance report template
- [ ] Query Paperclip API for historical run costs
- [ ] Set up manual daily tracking in `state/budget-tracking-june-2026.csv`
- [ ] CEO daily review of agent runs (9:00 AM UTC)
- [ ] CFO first monthly report due July 1

### Near-term (July 2026)

- [ ] CTO: Build automated agent cost tracker script
- [ ] CTO: Build SaaS invoice aggregator
- [ ] CTO: Set up daily budget dashboard at `state/budget-dashboard.md`
- [ ] CEO: Present BIO-316 Scenario B to board for approval
- [ ] CFO: Generate Q3 forecast with actual run data

### Future (Aug–Sep 2026)

- [ ] CTO: Build web-based real-time budget dashboard
- [ ] CTO: Integrate Paperclip API webhooks for instant cost tracking
- [ ] CFO: Implement quarterly budget reviews
- [ ] CEO: Annual budget planning for 2027 (by Nov 2026)

---

## Recommendations

1. **CEO:** Present BIO-316 Scenario B ($4,167/mo) to board immediately — current $700/mo insufficient for active agent work.
2. **CEO:** Query Paperclip API for 90-day run history to populate forecasting model.
3. **CFO:** Generate first monthly variance report on July 1, 2026.
4. **CTO:** When unpaused, implement automated cost tracker (Phase 2) by July 15.
5. **Board:** Approve BIO-316 Scenario B or mandate CEO agent pause to stay under $700/mo.

---

## Document Maintenance

**Owner:** CEO (agent ed7d77e3-aa6a-4bb0-8a30-24fe727b2870)  
**Update frequency:** Weekly (every Monday) for tracking data; monthly for forecasts  
**Next review:** 2026-07-01 (monthly report)  
**Version history:**
- v1.0 (2026-06-22): Initial framework, cost structure, alerts, reporting template
