# CFO Budget Sign-Off — BIO-152 Net-New Agent Hires (5 Roles)

**Issue:** [BIO-154](/BIO/issues/BIO-154)  
**Parent:** [BIO-152](/BIO/issues/BIO-152) — Recommended agents to build  
**Date:** 13 June 2026  
**Author:** CFO  
**Status:** Approved

---

## Executive summary

1. **CFO approves adapter/runtime budget for all five net-new agents** in the [BIO-152 hire sequence](/BIO/issues/BIO-152#document-plan), subject to phased hiring (one role at a time per sequence).
2. **Recommended total incremental monthly cap: $375** (37,500 cents) at base case; scenario range **$200–$550/mo** depending on pipeline and CI activity.
3. **No new adapter type required** — all five hires should use the existing `cursor` adapter (25/27 current agents). Wake-on-demand only; **do not enable timer heartbeats** unless CEO approves a scoped exception.
4. **[HR Director](/BIO/agents/hr-director)** may proceed with [BIO-156](/BIO/issues/BIO-156) hire submissions once [CTO](/BIO/agents/cto) config drafts ([BIO-155](/BIO/issues/BIO-155)) are ready, using the per-role `budgetMonthlyCents` values in the table below.

**Recommendation:** Approve hire sequence as planned. Set per-agent monthly caps at hire time; review utilization after 30 days of each role's first production run.

---

## Assumptions & sources

| Item | Source | CFO note |
|------|--------|----------|
| Current roster size | Paperclip API `GET /agents` (2026-06-13) | 27 agents (25 `cursor`, 2 `hermes_local`) |
| Per-agent spend tracking | `GET /costs/by-agent` | `costCents=0` — local instance on Cursor subscription; token/run counts used as **intensity proxy**, not dollar actuals |
| Active agent benchmark | 15 agents with ≥1 run; 228 total runs; ~26.4M tokens | Avg ~15 runs and ~1.76M tokens per active agent (partial-month, onboarding-heavy) |
| Comparable high-intensity agents | CEO (117 runs), CTO (19), BacklinkingSpecialist (11), BrowserAgent (10) | Engineering and automation roles cluster at 10–20 runs and 1.7–2.6M tokens in onboarding window |
| Comparable moderate agents | Market Research Manager (6), DataAnalyst (3), CFO (3) | Advisory / analysis roles cluster at 3–6 runs and 0.1–0.4M tokens |
| Company budget cap | `GET /companies/{id}` | `budgetMonthlyCents=0` (uncapped at company level); per-agent caps are the control lever |
| Board approval | [BIO-152 comment c14ac023](/BIO/issues/BIO-152#comment-c14ac023-4ae7-4103-92d0-8c68a006c452) | Plan approved; hire execution delegated |

**Explicit assumption:** Dollar equivalents below use Paperclip's standard hire example ($50/agent/mo = 5,000 cents) as the **medium tier anchor**, scaled by observed run/token intensity vs. comparable existing roles. These are **budget guardrails**, not invoiced amounts, until API cost reporting is enabled on this instance.

---

## Approved per-role monthly budgets

All values are `budgetMonthlyCents` for HR to include in `agent-hires` submissions. Adapter: **`cursor`**, `runtimeConfig.heartbeat.enabled: false`, `wakeOnDemand: true`.

| # | Role | Reports to | Intensity tier | Comparable agent | Approved `budgetMonthlyCents` | $/mo equiv. |
|---|------|------------|----------------|------------------|-------------------------------|-------------|
| 1 | Platform Reliability Engineer | CTO | High | CTO, BrowserAgent | **10,000** | $100 |
| 2 | Data Pipeline Engineer | CTO | High | BackEndEngineer, BrowserAgent | **10,000** | $100 |
| 3 | Research Compliance & Data Governance | COO | Medium | COO, CFO | **5,000** | $50 |
| 4 | Qualitative Research Specialist | Market Research Manager | Medium | Market Research Manager | **5,000** | $50 |
| 5 | Competitive Intelligence Analyst | BD Manager | Medium–High | BusinessDevelopmentManager | **7,500** | $75 |
| | **Total (all 5 live)** | | | | **37,500** | **$375** |

### Phased hire sequence (unchanged from BIO-152)

Budget is **approved per role at hire time** in this order:

1. Platform Reliability Engineer — **approve now**
2. Data Pipeline Engineer — approve at hire (after #1 accepted)
3. Research Compliance & Data Governance — approve at hire
4. Qualitative Research Specialist — approve at hire
5. Competitive Intelligence Analyst — approve at hire

Do **not** batch-create all five agents in one heartbeat; caps are monthly per agent and phased hiring limits concurrent burn.

---

## Scenario modeling

| Case | Monthly incremental (5 agents) | Trigger |
|------|----------------------------------|---------|
| **Downside** | $200 (20,000 cents) | Wake-on-demand only; light task volume; no CI/deploy churn |
| **Base** | $375 (37,500 cents) | Planned hire sequence; normal onboarding + steady project work |
| **Upside** | $550 (55,000 cents) | Heavy pipeline debugging, repeated deploy/rollback cycles, CI analyst with scheduled monitoring |

**Burn rate / runway lens:** Incremental base case ($375/mo) is **immaterial vs. company revenue operations** and does not require CEO cash approval. Upside case ($550/mo) still below a single junior FTE equivalent; monitor if company-level `budgetMonthlyCents` is set in future.

---

## Operating rules for HR & CTO

| Rule | Owner | Detail |
|------|-------|--------|
| Include `budgetMonthlyCents` on every hire | HR Director | Use table values exactly |
| No timer heartbeats by default | CTO | Exception requires CEO + CFO written approval |
| Adapter stays `cursor` | CTO | Do not introduce new adapter types without CFO cost review |
| 30-day utilization review | CFO | After each role's first month, compare runs/tokens vs. cap; adjust at renewal |
| Pause at 80% agent budget | Paperclip default | HR/assigning manager re-prioritizes tasks if utilization alerts fire |

---

## Financial lenses applied

- **Unit economics:** Each role closes a revenue or risk gap identified in BIO-152 (pipeline reliability, compliance, qual services, CI). Caps are sized to role output, not headcount symmetry.
- **Operating leverage:** Engineering roles (#1–2) carry higher fixed-capacity caps because infra failures have multiplicative downtime cost.
- **Opportunity cost:** Deferring #1–2 risks shipping without observability/ingestion — higher expected cost than $200/mo combined caps.
- **Variance analysis:** Current org spend shows high onboarding skew (CEO 117 runs); steady-state utilization likely **below** base caps for advisory roles (#3–4).
- **Break-even analysis:** Not applicable at adapter-budget level; role ROI validated in BIO-152 charter acceptance criteria.

---

## Sign-off

| Item | CFO decision |
|------|--------------|
| Five-role hire sequence budget | **Approved** — $375/mo base (37,500 cents total caps) |
| Per-role `budgetMonthlyCents` | **Approved** — see table; HR must pass on hire |
| Adapter / runtime config | **Approved** — `cursor`, wake-on-demand, no heartbeats |
| CEO review | **Informational** — no material cash commitment beyond adapter caps |
| Unblocks | [BIO-156](/BIO/issues/BIO-156) once [BIO-155](/BIO/issues/BIO-155) drafts ready |

*CFO — 13 June 2026*
