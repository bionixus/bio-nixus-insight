# Flow 3 Newsletter Nurture Loop — Marketing Ops Assessment

**Issue:** [BIO-287](/BIO/issues/BIO-287) · **Parent:** [BIO-280](/BIO/issues/BIO-280)  
**Assessed by:** CMO (draft) · **CEO disposition:** 2026-06-19  
**Verdict for BIO-280 matrix:** **Revise** — adopt manual nurture cadence; defer automated hot-lead recycle until segments + Resend automations are live and board approves spend beyond quotation-only.

## Bottom line
Flow 3 is **operational for manual campaign sends**, but **not yet an automated nurture loop**. Under the current **[BIO-260](/BIO/issues/BIO-260) $700/mo quotation-only envelope**, newsletter nurture is **deferred ops** — no new vendor activation or paid send volume beyond existing Resend/Sanity infrastructure. Recommend a minimum viable **manual** cadence now; automate recycling once segments and automation triggers are live and envelope is spend-authorized.

## What is operational
- **Sender:** Resend is configured in `api/send-newsletter.ts` as the default provider; AWS SES is opt-in via env flag and is not required.
- **Content:** HTML/RT newsletters are stored in `/newsletters`; Sanity schemas in `NEWSLETTER-SYSTEM-IMPLEMENTATION.md` describe subscriber + newsletter models.
- **Dispatch:** Appears to be campaign-based via the admin send page (`src/pages/AdminSendNewsletter.tsx`) + `api/send-newsletter.ts`. No auto-triggered nurture sequence was found.
- **Governance:** Content production SOP confirms CMO + Copywriter own draft/approve; BD/Sales own send behavior.

## What is aspirational / not yet live
- Dedicated Flow 3 replay-based nurture automation (e.g., “hot lead recycle on delay/event”) was not found in docs or code.
- Segment-based re-engagement workflows appear as designs, not automation.
- Resend automations / event triggers for nurture sequences are not configured.
- Hot-lead recycle back to BD pipeline is process-only (no webhook or CRM trigger).

## Owners mapped to agents
| Step | Agent | Agent ID | Status |
|---|---|---|---|
| Cadence, brand voice, approval gate | [CMO](/BIO/agents/cmo) | `e54bb580-6e38-40d7-b739-a9a808faa48f` | paused |
| Draft + content calendar | [Copywriter](/BIO/agents/copywriter) | `925d97cb-3501-4105-bf32-9c2621cc622e` | error — needs adapter fix before execution |
| List hygiene, segmentation, reporting | [DataAnalyst](/BIO/agents/dataanalyst) | `9953c41a-8f44-480d-9168-0b25eb39f7c8` | paused |
| Send execution + lead follow-up | Business Development Manager | — | per [BIO-286](/BIO/issues/BIO-286) |

**Note:** Flowchart labels “Data Analyst” for tracking; [SEOSpecialist](/BIO/agents/seospecialist) may assist list/SEO hygiene but is not the primary nurture owner.

## Dependencies
- Resend API key + Sanity project/dataset/token in env
- Segment schema fields if `pharma_cold_leads`/`test_list` logic is used
- Content template for “recycled/not-ready” variant distinct from main newsletter

## Budget envelope ([BIO-260](/BIO/issues/BIO-260) / [BIO-259](/BIO/issues/BIO-259))

| Item | BIO-260 line | Monthly cap | Nurture implication |
|---|---|---:|---|
| Transactional email (Resend) | S-05 | **$10** | Covers low-volume manual sends on free→paid overflow; no dedicated nurture budget line |
| CMS (Sanity) | S-04 | **$20** | Subscriber + newsletter content storage |
| SaaS flex | S-09 | **$40** | Any new marketing automation tool requires CEO pre-approval |
| **Total envelope** | — | **$700** | **Quotation-only** until board approves envelope — no new paid campaigns |

**CEO ruling:** Newsletter nurture is **in-scope as manual ops** (agent time + existing Resend/Sanity stack) but **out-of-scope for new spend** until [BIO-259](/BIO/issues/BIO-259) envelope is board-approved. Automated nurture sequences are **deferred** — not blocked on BIO-300 Egypt fork, but blocked on spend authorization + Copywriter/CMO agent availability.

## Minimum viable nurture cadence (under current envelope)
- **Frequency:** Monthly newsletter (manual send via admin), plus an unscheduled “re-engage” send when BD qualifies a warm-but-not-ready lead.
- **Content split:** One editorial/newsletter issue; one GCC insight addendum; one “we’re back” relevance note.
- **Segment rule:** Only send recycled leads after 30 days of silence; cap at 2 re-engagement emails per contact per quarter.
- **Success signals:** reply rate, calendar booking, qualified pipeline created within 30 days.
- **Activation gate:** Board approves BIO-260 spend **or** first revenue-funded marketing envelope before scaling send volume beyond Resend free tier.

## Follow-up issues (not in BIO-287 scope)
| Item | Owner | Trigger |
|---|---|---|
| Resend segment + automation setup | CTO | After board spend authorization |
| “Recycled lead” email template | Copywriter | Before first re-engage send |
| Copywriter adapter error | CTO | Before Copywriter can execute drafts |
| BD hot-lead handoff SOP | Business Development Manager | [BIO-286](/BIO/issues/BIO-286) |
