# BIO-317 — Minimum agent roster at $4.2K/mo ($50K/yr)

**Version:** 1.0  
**Date:** 2026-06-15  
**Owner:** CTO  
**Parent:** [BIO-315](/BIO/issues/BIO-315) — $50K annual budget target  
**Parallel:** [BIO-316](/BIO/issues/BIO-316) — CFO cut model  
**Authority baseline:** [BIO-295](/BIO/issues/BIO-295) lean envelope (~$607K/yr → **92% cut** to $50K/yr)

---

## Executive summary

At **$50K/year (~$4,167/mo)**, BioNixus cannot operate 34 agents. The minimum viable roster is **4 executives always eligible to run** (CEO, CTO, CFO, COO) plus **2 on-demand IC engineers** (FrontEndEngineer, BackEndEngineer), with **22 specialists archived (paused)** and **6 agents recommended for decommission**. Paperclip currently tracks **$0 API spend** (local Cursor subscription runs); the binding constraint is **concurrency (3 slots)** and **wake discipline**, not marginal cloud dollars.

**CTO recommendation:** Adopt this roster under **Scenario B** (total ops envelope ~$4,167/mo per [BIO-316](/BIO/issues/BIO-316)). Keep the **concurrency gate at 3**; do not un-pause marketing, BD, or browser specialists until board confirms revenue-funded expansion.

---

## 1. Agent inventory (2026-06-15)

**Org snapshot:** 34 agents · 4 `running` · 2 `idle` · 28 `paused` · 497 subscription heartbeats MTD · 52.8M input / 3.5M output tokens (unmetered locally)

| Agent | Status | Role | Budget cap/mo | Est. runtime/mo¹ | Runs MTD | Open issues | Action |
|---|---|---|---:|---:|---:|---:|---|
| CEO | running | ceo | $0 | $20 | 231 | 9 | **KEEP** |
| CFO | running | general | $0 | $20 | 58 | 5 | **KEEP** |
| COO | running | general | $0 | $20 | 35 | 7 | **KEEP** |
| CTO | running | cto | $0 | $20 | 40 | 6 | **KEEP** |
| FrontEndEngineer | paused | engineer | $0 | $0² | 0 | 0 | **WAKE ON DEMAND** |
| BackEndEngineer | paused | engineer | $0 | $0² | 0 | 0 | **WAKE ON DEMAND** |
| CMO | paused | cmo | $0 | $0 | 15 | 12 | PAUSE |
| BusinessDevelopmentManager | paused | general | $0 | $0 | 10 | 5 | PAUSE |
| BrowserAgent | paused | general | $0 | $0 | 13 | 3 | PAUSE |
| Market Research Manager | paused | researcher | $0 | $0 | 8 | 1 | PAUSE |
| HR Director | paused | general | $0 | $0 | 14 | 3 | PAUSE |
| Accountant | paused | general | $0 | $0 | 0 | 4 | PAUSE |
| GeneralCounsel | paused | general | $0 | $0 | 6 | 2 | PAUSE |
| Copywriter | paused | general | $0 | $0 | 11 | 0 | PAUSE |
| BacklinkingSpecialist | paused | researcher | $0 | $0 | 13 | 2 | PAUSE |
| SEOSpecialist | idle | researcher | $0 | $0 | 12 | 1 | PAUSE |
| GEOSpecialist | paused | researcher | $0 | $0 | 5 | 1 | PAUSE |
| FieldOperationsManager | idle | general | $0 | $0 | 9 | 0 | PAUSE |
| DataAnalyst | paused | researcher | $0 | $0 | 3 | 0 | PAUSE |
| DataPipelineEngineer | paused | engineer | $100 | $0 | 0 | 0 | PAUSE |
| PlatformReliabilityEngineer | paused | engineer | $100 | $0 | 0 | 0 | PAUSE |
| ResearchComplianceSpecialist | paused | general | $50 | $0 | 0 | 2 | PAUSE |
| QualitativeResearchSpecialist | paused | researcher | $50 | $0 | 0 | 0 | PAUSE |
| CompetitiveIntelligenceAnalyst | paused | researcher | $50 | $0 | 0 | 0 | PAUSE |
| MediaBuyer | paused | general | $0 | $0 | 0 | 2 | PAUSE |
| ExecutiveAssistant | paused | general | $0 | $0 | 0 | 1 | PAUSE |
| SalesSpecialist | paused | general | $0 | $0 | 0 | 0 | PAUSE |
| CreativeArtDirector 2 | paused | designer | $0 | $0 | 0 | 0 | **REMOVE** |
| CommunicationsPRDirector | paused | general | $0 | $0 | 2 | 0 | **REMOVE** |
| RecruitmentSpecialist | paused | general | $0 | $0 | 0 | 0 | **REMOVE** |
| SocialMediaManager | paused | general | $0 | $0 | 0 | 0 | **REMOVE** |
| HermesEngineer | paused | engineer | $0 | $0 | 0 | 0 | **REMOVE** |
| Admin | paused | general | $0 | $0 | 2 | 0 | **REMOVE** |

¹ **Est. runtime/mo** uses planning rates, not Paperclip ledger (ledger = $0 on local adapter). Active seat = **$20/mo Cursor Pro**; paused = **$0**. If board moves to API-metered cloud agents, apply token proxy: ~$3/M input + $15/M output (Sonnet-class) — June burst ≈ **$210** total org-wide if fully API-billed.

² Engineers billed only in months they are unpaused for ≥1 heartbeat week.

**Configured agent budget caps today:** $350/mo aggregate (DataPipelineEngineer $100, PlatformReliabilityEngineer $100, three researchers × $50). All **spent = $0**. Caps are inert while agents are paused.

---

## 2. Keep / pause / remove at $4.2K/mo cap

### KEEP — executive core (4)

| Agent | Rationale |
|---|---|
| CEO | Queue owner, concurrency gate, board interface |
| CFO | Budget authority, [BIO-316](/BIO/issues/BIO-316) cut model, spend governance |
| COO | Ops triage, frozen-track cancellations |
| CTO | Technical roster, engineering delegation, platform |

**Estimated adapter cost:** 4 × $20 = **$80/mo** if each holds a seat; **$20–40/mo** if 1–2 shared seats with serial heartbeats (recommended at this budget).

### WAKE ON DEMAND — engineering ICs (2)

| Agent | When to unpause |
|---|---|
| FrontEndEngineer | SSR/UI issues ([BIO-251](/BIO/issues/BIO-251) landing pages, [BIO-253](/BIO/issues/BIO-253) GA4) |
| BackEndEngineer | API/data pipeline, server-side fetch, integrations |

**Rule:** Unpause **one engineer at a time**; never exceed CEO concurrency gate. Re-pause when issue closes.

### PAUSE — archive mode (22)

Retain agent configs and instructions for future revenue-funded expansion. **No heartbeats, no wakes** except CEO explicit dispatch. Includes all marketing (CMO tree), BD, browser, research specialists, HR/legal/accounting, and idle agents (SEOSpecialist, FieldOperationsManager).

### REMOVE — decommission candidates (6)

| Agent | Reason |
|---|---|
| CreativeArtDirector 2 | Duplicate role; 0 runs, 0 open issues |
| CommunicationsPRDirector | 2 runs; CMO paused; no active PR track |
| RecruitmentSpecialist | 0 runs; hiring frozen under $50K |
| SocialMediaManager | 0 runs; no owned issues |
| HermesEngineer | 0 runs; Hermes setup complete or deferred |
| Admin | Redundant with ExecutiveAssistant + CEO ops |

**Action owner:** CEO approves decommission; CTO executes agent removal via Paperclip admin after board accepts envelope.

---

## 3. Monthly cost envelope (CTO slice)

Aligned with **Scenario B** ([BIO-316](/BIO/issues/BIO-316)) — total ops envelope within **$4,167/mo**:

| Line | Monthly | Notes |
|---|---:|---|
| Cursor adapter (1–2 shared seats) | $20–40 | Serial heartbeats; max 3 concurrent |
| Minimal SaaS (domain, hosting, CMS, email) | $132 | Prorated from [BIO-260](/BIO/issues/BIO-260) S-category essentials |
| API overflow buffer (if cloud migration) | $200 | Unused today; reserve for metered runs |
| Agent budget caps (dormant) | $0–350 | Keep caps at $0 until expansion |
| **Subtotal — CTO roster slice** | **~$352–372/mo** | Well inside $4.2K |
| **Remaining for CFO human/SaaS/ops lines** | **~$3,795/mo** | CFO owns in [BIO-316](/BIO/issues/BIO-316) |

At $50K/year, **agent roster is not the cost driver** — local subscription mode makes **time and concurrency** the scarce resources.

---

## 4. Stall impact — open work if roster frozen

### Currently in progress (3 slots — will finish, then freeze)

| Issue | Assignee | Impact if not re-woken |
|---|---|---|
| [BIO-317](/BIO/issues/BIO-317) | CTO | Completes this heartbeat |
| [BIO-316](/BIO/issues/BIO-316) | CFO | CFO cut model stalls if CFO paused |
| [BIO-282](/BIO/issues/BIO-282) | CEO | Email triage stalls |

### High/critical work that **stalls indefinitely** under minimum roster

| Domain | Paused assignee | Sample blocked/high issues | Stall severity |
|---|---|---|---|
| Marketing / GEO | CMO, BrowserAgent, BacklinkingSpecialist, GEOSpecialist | [BIO-52](/BIO/issues/BIO-52), [BIO-58](/BIO/issues/BIO-58), [BIO-222](/BIO/issues/BIO-222) (critical) | **High** — directory/GEO pipeline stops |
| BD / revenue | BusinessDevelopmentManager | [BIO-88](/BIO/issues/BIO-88), [BIO-286](/BIO/issues/BIO-286) | **High** — pipeline enrichment stops |
| Engineering delivery | FrontEndEngineer, BackEndEngineer (paused) | [BIO-251](/BIO/issues/BIO-251), [BIO-253](/BIO/issues/BIO-253) | **Medium** — wake on demand unblocks |
| Legal / compliance | GeneralCounsel, ResearchComplianceSpecialist | [BIO-209](/BIO/issues/BIO-209), [BIO-221](/BIO/issues/BIO-221) | **Medium** — templates frozen (acceptable at $50K) |
| HR / hiring | HR Director | [BIO-289](/BIO/issues/BIO-289), [BIO-307](/BIO/issues/BIO-307) (critical) | **Low** — intentionally frozen |
| Finance ops | Accountant | [BIO-232](/BIO/issues/BIO-232) + cancel chain | **Low** — board-halted deposit work |
| Media / ads | MediaBuyer | [BIO-255](/BIO/issues/BIO-255) | **Low** — ads frozen per spend governance |

### CTO-owned blocked issues (need engineer wake or board gate)

| Issue | Blocker | Next owner |
|---|---|---|
| [BIO-261](/BIO/issues/BIO-261) | Board spend gate | CEO cancel tree |
| [BIO-251](/BIO/issues/BIO-251) | Awaiting FE capacity | CEO queue → FrontEndEngineer |
| [BIO-120](/BIO/issues/BIO-120) | Board secret gate | CEO → BrowserAgent (stays paused at $50K) |
| [BIO-253](/BIO/issues/BIO-253) | FE + analytics | CEO queue → FrontEndEngineer |

**Net:** $50K roster supports **governance + budget reset + selective engineering**. It does **not** support parallel marketing, BD, browser, or research tracks.

---

## 5. Concurrency policy recommendation

**Keep CEO gate at 3 concurrent executions.** Do not increase unless board explicitly overrides per `docs/ops/concurrency-policy.md`.

| Parameter | $50K recommendation | Rationale |
|---|---|---|
| Max concurrent slots | **3** | Laptop RAM + budget discipline |
| Running agents eligible | 4 executives + 0–1 IC | Queue, not parallel org wake |
| Bulk `/wakeup` | **Prohibited** | Prevents 34-agent stampede |
| On completion | Pull **one** queued item | Serial replacement |
| Board override | Document on [BIO-315](/BIO/issues/BIO-315) | Time-boxed only |

At $4.2K/mo, increasing concurrency **increases token burn without revenue offset** — reject unless board funds API-metered cloud agents separately.

---

## 6. Implementation sequence (post board approval)

1. **CEO** confirms scope A/B/C on [BIO-315](/BIO/issues/BIO-315).
2. **CFO + CEO** merge [BIO-316](/BIO/issues/BIO-316) cut model with this roster.
3. **CTO** sets all non-core agents to `paused`; zero out dormant `budgetMonthlyCents` caps.
4. **CEO** decommissions 6 remove-list agents after board sign-off.
5. **CEO** re-queues only P0/P1 issues assignable to executive core + on-demand engineers.

---

## 7. Decision record

| Decision | Choice | Alternatives considered |
|---|---|---|
| Minimum roster size | 4 exec + 2 on-demand IC | 2-agent (CEO+CTO only) — rejected: no CFO/COO ops |
| Marketing agents | Full pause | Keep CMO running — rejected: 12 open issues × $0 revenue |
| Concurrency | Stay at 3 | Raise to 5 — rejected: RAM + token risk |
| Cost model | Shared Cursor seats | Per-agent API billing — deferred until cloud migration |

---

## References

- Concurrency policy: `docs/ops/concurrency-policy.md`
- Spend governance: `docs/ops/spend-governance.md`
- CEO plan: [BIO-315 plan](/BIO/issues/BIO-315#document-plan)
- Lean authority: [BIO-295](/BIO/issues/BIO-295)
