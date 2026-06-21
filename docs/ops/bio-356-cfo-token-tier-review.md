# BIO-356 — CFO review: token-optimization model tier cost table

**Version:** 1.0  
**Date:** 2026-06-16  
**Owner:** CFO  
**Parent:** [BIO-353](/BIO/issues/BIO-353) · [plan document](/BIO/issues/BIO-353#document-plan)  
**Implementation child:** [BIO-355](/BIO/issues/BIO-355)  
**Authority:** [BIO-317](/BIO/issues/BIO-317) token proxy · [BIO-316](/BIO/issues/BIO-316) Scenario B envelope

**Lenses applied:** Unit economics · Variance analysis · Scenario modeling · Operating leverage · Opportunity cost · Break-even analysis

---

## Executive summary (CEO / board)

**Verdict: APPROVED WITH MINOR REVISIONS** — the [BIO-353 plan](/BIO/issues/BIO-353#document-plan) model tier matrix is directionally correct and financially sound. PRE should embed this review’s revised table (§4) in the `token-optimization` skill before mass sync finalizes.

At API-metered rates (**$3/M input · $15/M output**, Sonnet-class per [BIO-317](/BIO/issues/BIO-317)), June MTD org burn (**52.8M in / 3.5M out · 497 heartbeats**) implies **~$211/mo** if fully billed — within the **$200/mo API overflow buffer** ([BIO-317](/BIO/issues/BIO-317) §3) but with **<5% headroom**. Tier discipline is therefore a **variance-control** measure, not optional hygiene.

**Board-gated (Tier 3):** org-wide adapter binding to thinking-high; cloud API-metered migration; concurrency >3 combined with premium default models ([BIO-317](/BIO/issues/BIO-317) §5).

---

## Assumptions

| # | Assumption | Source |
|---|---|---|
| A1 | Token proxy: **$3/M input · $15/M output** (Sonnet-class) | [BIO-317](/BIO/issues/BIO-317) footnote ¹ |
| A2 | June MTD actuals: **52.8M input · 3.5M output · 497 heartbeats** | [BIO-317](/BIO/issues/BIO-317) org snapshot |
| A3 | Local adapter today: **$0 API ledger**; analysis is **forward-looking** for cloud migration | [BIO-317](/BIO/issues/BIO-317) |
| A4 | Tier multipliers (planning): Fast ≈ **0.4×** medium $/token; Thinking-high ≈ **3×** medium on same task | Industry proxy — not invoiced |
| A5 | Heartbeat mix (planning): ~**40%** triage/dispatch · ~**35%** standard IC · ~**10%** deep arch · ~**10%** bulk · ~**5%** review | CFO estimate from open-issue patterns |
| A6 | Envelope: **$50K/yr Scenario B**; API overflow **$200/mo** | [BIO-316](/BIO/issues/BIO-316) · [BIO-317](/BIO/issues/BIO-317) |

---

## 1. Baseline unit economics (June MTD)

| Metric | Value | $ @ proxy rates |
|---|---:|---:|
| Input tokens | 52,800,000 | $158.40 |
| Output tokens | 3,500,000 | $52.50 |
| **Total API-equivalent** | — | **$210.90/mo** |
| Heartbeats | 497 | — |
| **Avg $/heartbeat** | 106K in · 7K out | **$0.42** |

**Variance analysis:** Actual June burst **exceeds** the $200/mo overflow buffer by **~$11 (5%)** — acceptable only because local adapter is unmetered. On API billing, June behavior would trigger buffer breach without tier discipline or roster freeze.

---

## 2. Tier-by-tier dollar impact (API-metered)

Planning rates applied to **average heartbeat** ($0.42). Violation = using a higher-cost posture than the table specifies.

| Task class (plan) | Prescribed posture | $/heartbeat (planning) | Anti-pattern posture | Anti-pattern $/hb | **Uplift if violated** |
|---|---|---:|---|---:|---:|
| Triage / dispatch | Fast | **$0.17** | Thinking-high | $1.26 | **+$1.09 (+640%)** |
| Standard IC | Medium | **$0.42** | Thinking-high / Opus | $1.26 | **+$0.84 (+200%)** |
| Deep architecture | Thinking-high | **$1.26** | Medium (under-tier) | $0.42 | −$0.84 (quality/rework risk) |
| Bulk mechanical | Fast + narrow | **$0.10** | Medium + full context | $0.42 | **+$0.32 (+320%)** |
| Review / approval | Medium | **$0.42** | Re-implement | $0.84+ | **+$0.42+ (+100%)** |

**Unit economics insight:** Triage violations are the **highest marginal waste** — thinking models on inbox scans burn 6×+ vs fast tier with no revenue upside.

---

## 3. Scenario modeling — monthly org cost

Base = June actuals ($211/mo). Scenarios apply violation rates to heartbeat mix.

| Scenario | Assumption | Est. monthly API $ | vs $200 buffer | vs June base |
|---|---|---:|---:|---:|
| **Base** | Current behavior, metered | $211 | +5% breach | — |
| **Compliant** | Tier table followed; 30% triage cost cut | **$148** | −26% headroom | −30% |
| **Moderate violations** | 25% triage on thinking; 10% IC on thinking | **$268** | +34% breach | +27% |
| **Poor discipline** | 50% triage on thinking; 20% IC on thinking; bulk unfocused | **$340** | +70% breach | +61% |
| **Full roster + poor discipline** | 34 agents unpaused, same rates × 3× volume | **$1,020+** | Envelope breach | N/A |

**Break-even analysis:** At $200/mo buffer, org can afford **~475 medium-class heartbeats/mo** at $0.42 — roughly **today’s volume with zero headroom**. Any roster expansion or tier slippage requires board-funded buffer increase ([BIO-316](/BIO/issues/BIO-316) Scenario A: $667/mo token line).

**Operating leverage:** Fixed subscription seats ($20–40/mo) are cheap; **variable token cost scales linearly with heartbeats × tier multiplier**. Growth in agent count without tier discipline worsens unit economics.

---

## 4. Revised tier table (for PRE skill embed)

Approved for inclusion in `token-optimization` SKILL.md. Changes vs [BIO-353 plan](/BIO/issues/BIO-353#document-plan): (1) triage locked to **Fast only**; (2) added planning $/hb column; (3) added board-gate flag.

| Task class | When | Model posture | Planning $/hb @ API rates | Anti-pattern | Board gate |
|---|---|---|---|---|---|
| **Triage / dispatch** | Queue sort, status checks, comment ack | **Fast only** | ~$0.17 | Thinking on inbox scan | No |
| **Standard IC** | Feature fix, content draft, routine API | Medium (default) | ~$0.42 | Opus/thinking for trivial edits | No |
| **Deep architecture** | Security, migrations, multi-system design | Thinking-high | ~$1.26 | Medium on one-way-door changes | **Yes** if default binding |
| **Bulk mechanical** | Mass rename, template fill, scripted sync | Fast + narrow prompt | ~$0.10 | Re-explaining entire codebase | No |
| **Review / approval** | Plan sign-off, diff review | Medium | ~$0.42 | Re-implementing instead of reviewing | No |

**Escalation rule (new):** When task class is ambiguous, default to **Medium** — escalate to Thinking-high only with explicit one-way-door rationale in the issue comment.

---

## 5. Board-gated tiers and spend triggers

| Action | Tier (Flow 4) | Rationale |
|---|---|---|
| Org-wide adapter default → thinking-high | **Tier 3** | >$250/mo recurring API risk · envelope breach |
| Migrate from local subscription → API-metered cloud agents | **Tier 3** | Structural cost shift · [BIO-317](/BIO/issues/BIO-317) deferred |
| Increase concurrency >3 with premium models | **Tier 3** | [BIO-317](/BIO/issues/BIO-317) §5 — token risk without revenue offset |
| Per-issue thinking-high on deep architecture | **No gate** | Prescribed tier; monitor via monthly variance |
| Skill-only guidance (BIO-355) | **No spend** | Behavior discipline; $0 authorization |

Per [flow4-approval-tier-thresholds.md](flow4-approval-tier-thresholds.md): no payment executes until board approves envelope.

---

## 6. Recommendations

1. **PRE ([BIO-355](/BIO/issues/BIO-355)):** Embed §4 revised table verbatim in skill; cite BIO-317 proxy rates in skill assumptions footnote.
2. **CEO:** Accept CFO approval; keep [BIO-353](/BIO/issues/BIO-353) open until PRE evidence + this review are linked.
3. **CTO (when adapter restored):** Model bindings stay skill-guided; any org-wide binding change → board package.
4. **CFO (monthly):** Variance check — if API-equivalent burn >**$200/mo** or >**10%** above compliant scenario ($148), escalate to CEO with roster/tier remediation options.

---

## 7. Sign-off

| Role | Decision | Date |
|---|---|---|
| CFO | **Approved with revisions** (§4 table for skill) | 2026-06-16 |
| CEO | Pending — close [BIO-356](/BIO/issues/BIO-356) chain | — |
| PRE | Implement revised table in [BIO-355](/BIO/issues/BIO-355) | — |
