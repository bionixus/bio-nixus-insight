# Email Approval Policy — External Communications

**Policy ID:** BIO-651  
**Version:** 1.0  
**Effective Date:** 22 June 2026  
**Owner:** CEO  
**Authority:** Board directive via [BIO-651](/BIO/issues/BIO-651)  
**Classification:** MANDATORY — zero tolerance for non-compliance

---

## Executive Summary

**NO external emails** may be sent by any agent, employee, or contractor without explicit board approval. This policy applies to ALL communications sent to recipients outside BioNixus, including but not limited to: client outreach, vendor communications, partnership inquiries, marketing emails, and transactional messages.

**Violation consequences:** Immediate project pause, agent access revocation, and escalation to board.

---

## Scope

### In Scope — Requires Board Approval

All emails sent to external recipients, including:
- **Business development outreach** (prospect/client emails, cold outreach, event follow-ups)
- **Client communications** (proposals, project updates, deliverables, invoices)
- **Vendor/supplier communications** (RFQs, purchase orders, contract negotiations)
- **Partnership inquiries** (collaboration requests, joint ventures, referral partnerships)
- **Marketing emails** (newsletters, announcements, product updates)
- **Transactional emails** (welcome emails, password resets, order confirmations)
- **Support/service emails** (customer support responses, technical assistance)

### Out of Scope — Internal Only

- **Internal team communications** (emails between BioNixus employees/agents)
- **Internal notifications** (Paperclip notifications, Slack messages, internal docs)

**Clarification:** If the email recipient's domain is NOT `@bionixus.com` or an internal system, it requires approval.

---

## Policy Requirements

### 1. Board Approval Requirement

Before ANY external email is sent, the requesting agent MUST:

1. **Create a Paperclip issue** requesting email approval with:
   - **Email purpose** (1-2 sentence summary)
   - **Target recipient(s)** (name, company, email address)
   - **Email content** (full HTML template or plain text)
   - **Sender email address** (e.g., `admin@bionixus.com`, `bd@bionixus.com`)
   - **Send date/time** (when the email will be sent)
   - **Business justification** (why this email is necessary)

2. **Post the complete HTML template** as a Paperclip issue comment or document attachment

3. **Wait for explicit board approval** via issue comment before sending

### 2. Required Documentation

Every email approval request MUST include:

| Required Field | Description | Example |
|----------------|-------------|---------|
| **Email Subject** | Exact subject line | `Global Health Exhibition — Riyadh, October 2026` |
| **Sender Email** | BioNixus email address to use | `admin@bionixus.com` |
| **Recipient(s)** | Full name, company, email | `John Smith, AstraZeneca, john.smith@astrazeneca.com` |
| **HTML Template** | Complete email HTML (not a reference) | Attached as `.html` file or inline in issue comment |
| **Send Timing** | Exact date and time | `28 July 2026, 09:00 GMT+3` |
| **Business Case** | Why this email is necessary | `T-90 save-the-date for Global Health Exhibition outreach` |
| **Related Issue** | Parent project/campaign issue | `BIO-615` |

### 3. Template Approval

- **Every HTML template** must be reviewed and approved by the board before first use
- **Template changes** (even minor copy edits) require re-approval
- **Approved templates** must be stored in `docs/ops/approved-email-templates/` with approval date and issue reference

### 4. Approval Response Time

- Board will respond to email approval requests within **48 hours** (2 business days)
- Urgent requests (< 48hr turnaround) MUST be flagged with `priority: urgent` label and explicit justification

---

## Approval Process Workflow

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Agent identifies need to send external email             │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Agent creates Paperclip issue with:                      │
│    - Email purpose & business justification                 │
│    - Complete HTML template                                 │
│    - Recipient details (name, company, email)               │
│    - Sender email address                                   │
│    - Send date/time                                         │
│                                                              │
│    Issue title format:                                      │
│    "Email Approval: [Purpose] — [Recipient Company]"        │
│                                                              │
│    Example:                                                 │
│    "Email Approval: GHE T-90 Save-the-Date — AstraZeneca"  │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. Agent assigns issue to CEO (ed7d77e3-aa6a-4bb0-8a30...)  │
│    OR posts in board channel for review                     │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. Board reviews:                                           │
│    - Email content (accuracy, tone, branding)               │
│    - Recipient appropriateness                              │
│    - Business justification                                 │
│    - Timing                                                 │
└────────────────────┬────────────────────────────────────────┘
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
  ┌───────────────┐     ┌───────────────┐
  │ 5a. APPROVED  │     │ 5b. REJECTED  │
  │               │     │    or         │
  │ Board posts:  │     │ CHANGES REQ'D │
  │ "APPROVED"    │     │               │
  │ comment on    │     │ Board posts:  │
  │ issue         │     │ rejection     │
  │               │     │ reason or     │
  │               │     │ requested     │
  │               │     │ changes       │
  └───────┬───────┘     └───────┬───────┘
          │                     │
          ▼                     ▼
  ┌───────────────┐     ┌───────────────┐
  │ 6a. Agent     │     │ 6b. Agent     │
  │ sends email   │     │ revises and   │
  │ exactly as    │     │ resubmits     │
  │ approved      │     │ (return to    │
  │               │     │ step 2)       │
  │ Agent logs:   │     │               │
  │ - Send time   │     │               │
  │ - Recipients  │     │               │
  │ - Outcome     │     │               │
  └───────────────┘     └───────────────┘
```

---

## Compliance Requirements

### Agent Responsibilities

1. **NEVER send external emails without board approval** — no exceptions
2. **Check issue status** before sending (approval comment must exist)
3. **Send email exactly as approved** — no deviations from approved template
4. **Log send confirmation** on approval issue (timestamp, recipients, send outcome)
5. **Report violations** immediately if discovered

### Board Approval Criteria

Board will evaluate email requests on:
- **Brand alignment** (tone, messaging, visual identity)
- **Legal compliance** (privacy, anti-spam, disclosure requirements)
- **Strategic fit** (does this email support company goals?)
- **Risk assessment** (reputational risk, client relationship risk)
- **Accuracy** (fact-checking claims, data, references)

### Non-Compliance Actions

| Violation | Action |
|-----------|--------|
| Email sent without approval | Immediate project pause + agent access revocation + board escalation |
| Approval request missing required fields | Request rejected; agent must resubmit complete request |
| Email content deviates from approved template | Incident report required; future requests subject to enhanced review |
| Repeated violations (2+) | Permanent removal from email-sending privileges |

---

## Approved Email Templates Registry

All board-approved email templates MUST be stored in:

```
docs/ops/approved-email-templates/
├── YYYY-MM-DD-template-name-APPROVED.html
└── YYYY-MM-DD-template-name-APPROVED.md (metadata)
```

### Template Metadata Format

Each approved template must have a companion `.md` file:

```markdown
# Approved Email Template — [Template Name]

**Approval Date:** YYYY-MM-DD  
**Approval Issue:** [BIO-XXX](/BIO/issues/BIO-XXX)  
**Template File:** `YYYY-MM-DD-template-name-APPROVED.html`  
**Approved By:** Board (via CEO comment on BIO-XXX)  
**Valid Until:** [Expiry date or "Indefinite"]  
**Use Cases:** [Specific scenarios where this template may be used]

## Personalization Tokens Allowed

- `{{first_name}}`
- `{{company}}`
- `{{therapy_area}}`
[etc.]

## Restrictions

- Subject line MUST remain: "..."
- Sender email MUST be: admin@bionixus.com
- CTA links MUST point to: [approved URLs]
```

---

## Exemptions and Edge Cases

### Pre-Approved Template Use

Once a template is board-approved and stored in `docs/ops/approved-email-templates/`:
- Agents MAY use that template for similar future sends **IF**:
  1. Recipient company type matches original approval use case
  2. Personalization tokens are filled correctly
  3. No content changes beyond approved token substitution
  4. Agent logs use on original approval issue

- Agents MUST request new approval IF:
  1. Recipient is a different company type (e.g., approved for pharma, now sending to payer)
  2. Email timing/context differs significantly
  3. Business case has changed

### Urgent/Time-Sensitive Requests

For truly urgent requests (< 24hr approval needed):
1. Create approval issue with `priority: urgent` label
2. Post in board channel with `@board` mention
3. Explain urgency justification in issue description
4. Provide backup plan if approval is delayed

**Note:** "Urgent" does not override the approval requirement. If board does not approve in time, the email CANNOT be sent.

---

## Technical Controls (Future)

The following technical controls are RECOMMENDED for implementation:

1. **Email gateway approval check** — API validates Paperclip issue approval before allowing SMTP send
2. **Template version control** — Git-based template storage with approval tags
3. **Automated compliance alerts** — Paperclip bot monitors for unapproved sends
4. **Approval dashboard** — Real-time view of pending/approved/rejected email requests

**Implementation:** To be scoped in separate technical issue after this policy is board-approved.

---

## Policy Review and Updates

- **Review Frequency:** Quarterly (or after significant organizational changes)
- **Amendment Authority:** Board only (via Paperclip issue)
- **Version Control:** All policy changes require new version number and effective date

---

## References

- Policy authority: [BIO-651](/BIO/issues/BIO-651)
- Approval tier thresholds: `docs/ops/flow4-approval-tier-thresholds.md`
- Spend governance: `docs/ops/spend-governance.md`
- Example email templates: `docs/bd/bio-615-outreach-email-templates.md`

---

## Quick Reference — Email Approval Checklist

Before sending ANY external email, confirm:

- [ ] Paperclip approval issue created with required fields
- [ ] Complete HTML template attached to issue
- [ ] Recipient details provided (name, company, email)
- [ ] Sender email address specified
- [ ] Business justification documented
- [ ] Board approval comment exists on issue (search for "APPROVED")
- [ ] Email content matches approved template exactly
- [ ] Send timestamp and outcome logged on approval issue

**If ANY checkbox is unchecked, DO NOT SEND THE EMAIL.**

---

## Policy Acknowledgment

All agents with email-sending capabilities must acknowledge this policy via Paperclip issue comment:

```
I acknowledge that I have read and understand the Email Approval Policy (BIO-651).
I will not send any external emails without explicit board approval.

Agent: [Agent Name]
Date: [YYYY-MM-DD]
```

---

**Policy effective immediately. No grandfathering for in-progress email campaigns.**

