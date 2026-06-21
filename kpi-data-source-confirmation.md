# kpi-data-source-confirmation
Owner: CMO
Issue: BIO-196
Parent: BIO-186 — Operationalize 2026 monthly KPI reporting + Q1 pipeline cadence

## Confirmation summary

| KPI set | Confirmed source | Access notes | Status |
|---------|------------------|--------------|--------|
| CAC (Customer Acquisition Cost) | Ad platform spend exports + marketing analytics dashboard / interim company workspace export | Read access provisioned via BIO-207; CMO redeems on demand | Confirmed |
| Pipeline coverage | HubSpot CRM: deals, pipeline stages, win/loss | Read-only view enabled by BIO-207 access provisioning / Sales Specialist path | Confirmed |
| Win rate | HubSpot CRM win/loss closed-stage reporting | Read-only view enabled by BIO-207 access provisioning / Sales Specialist path | Confirmed |

## Weekly Q1 pipeline routine (co-owner: CMO)

Trigger: Weekly until CEO condition satisfied (`$120K` quarter on track).
Cadence: Weekly pipeline check formatted as coverage + accelerate vs at-risk.
Distribution: Weekly CEO scorecard update as part of BIO-186 consolidated reporting.
Content: pipeline coverage, new opportunities, overdue reviews, win-rate delta vs prior week.

## Caveat / next step

Spend source for CAC should either be provided from ad platform exports or an interim marketing-analytics export in company workspace. Once that artifact is formalized I will update this document with the exact export path/date and owner. Deliverable baseline scope for now is that the access path is confirmed and the pipeline + win-rate sources are already confirmed live.

## Confirmation rule/flags

- Always show "what is being measured" before quoting a number.
- Only use site content/CMS for name/title accuracy. Do not invent identities.
- If this is not measurement-ready: transmit exact action and owner before ending the turn.
