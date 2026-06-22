# Pending Email Template Approvals

**Policy:** [Email Approval Policy (BIO-651)](/docs/ops/email-approval-policy.md)  
**Status:** Awaiting Board Review  
**Created:** 22 June 2026

---

## Executive Summary

The following email templates exist in the BioNixus codebase and **MUST NOT BE USED** until board-approved per Email Approval Policy (BIO-651). Each template requires a dedicated approval issue with complete HTML, recipient details, and business justification.

**Immediate Action Required:** Board must review and approve (or reject) all templates before any external emails can be sent.

---

## Templates Requiring Approval

### 1. Global Health Exhibition Email Sequence (BIO-615)

**Source:** `docs/bd/bio-615-outreach-email-templates.md`  
**Campaign:** Global Health Exhibition Riyadh, October 2026  
**Target Audience:** 8 pharma companies (AstraZeneca, Novo Nordisk, Novartis, Sanofi, Eli Lilly, Pfizer, Roche, MSD)

| # | Template Name | Send Date | Recipients | Approval Status |
|---|---------------|-----------|------------|-----------------|
| 1 | T-90 Save-the-Date Email | 28 July 2026 | 8 accounts (verified contacts) | ❌ **UNAPPROVED** |
| 2 | T-60 LinkedIn Outreach | 27 Aug 2026 | Non-responders + new accounts | ❌ **UNAPPROVED** |
| 3 | T-60 Email Follow-Up | 27 Aug 2026 | Non-responders from T-90 | ❌ **UNAPPROVED** |
| 4 | T-45 CEO/COO Strategic Intro | 11 Sept 2026 | Top 3 accounts (AZ, Novo, Lilly) | ❌ **UNAPPROVED** |
| 5 | T-30 Meeting Confirmation + One-Pager | 26 Sept 2026 | Confirmed meetings | ❌ **UNAPPROVED** |
| 6 | T-14 Final Confirmation | 12 Oct 2026 | Confirmed meetings | ❌ **UNAPPROVED** |
| 7 | Day 1 Post-Meeting Thank You | Within 24hr post-meeting | Meeting attendees | ❌ **UNAPPROVED** |
| 8 | Day 7 Post-Meeting Follow-Up | 7 days post-meeting | Non-responders | ❌ **UNAPPROVED** |

**Business Case:** First major international exhibition attendance for BioNixus. 8 target pharma accounts with GCC market access needs. Campaign spans 3 months (July–October 2026).

**Risk:** If approvals delayed beyond July 2026, T-90 send window will be missed, reducing exhibition ROI.

**Next Steps:**
- [ ] Board reviews all 8 templates in BIO-615 email sequence
- [ ] CEO creates individual approval issues for each send (or batch approval for full sequence)
- [ ] COO confirms contact verification complete before T-90 send (per template line 28)
- [ ] CMO confirms GCC Access Snapshot one-pager ready by T-30 (per template line 308)

---

### 2. Welcome Email Template

**Source:** `preview-welcome-email.html`  
**Purpose:** Automated welcome email for new newsletter subscribers  
**Send Trigger:** Email verification complete  
**Sender:** `admin@bionixus.com` (assumed; not specified in template)

**Template Summary:**
- **Subject:** "Welcome to BioNixus Healthcare Insights"
- **Recipient Placeholder:** `Sarah` (example; token not specified)
- **Key Content:**
  - Welcome message
  - What to expect (5 bullet points: monthly insights, reports, analysis, updates, customized content)
  - Resource links (blog, case studies, contact)
  - 2 CTAs: "Explore More" (main site), "Book a Meeting" (contact page)
  - Unsubscribe link in footer

**Approval Status:** ❌ **UNAPPROVED**

**Concerns for Board Review:**
- No personalization tokens specified (who is "Sarah"?)
- Sender email not specified
- Automated send trigger not defined
- No A/B test variant
- GDPR/privacy compliance not documented

**Next Steps:**
- [ ] Document complete email metadata (sender, recipients, send trigger)
- [ ] Define personalization tokens (`{{first_name}}`)
- [ ] Board approves or requests changes
- [ ] Once approved, move to `docs/ops/approved-email-templates/`

---

### 3. Email Verification Template

**Source:** `preview-verification-email.html`  
**Purpose:** Transactional email for email verification  
**Send Trigger:** User submits email on website form  
**Sender:** `admin@bionixus.com` (assumed; not specified in template)

**Approval Status:** ❌ **UNAPPROVED**

**Note:** File needs to be read to document content. May contain verification link/token that requires security review.

**Next Steps:**
- [ ] Read and document email verification template content
- [ ] Security review for verification token handling
- [ ] Board approves transactional email copy
- [ ] Document required personalization tokens
- [ ] Once approved, move to `docs/ops/approved-email-templates/`

---

## Priority Recommendations

### Immediate (Next 48 Hours)

1. **Board reviews GHE T-90 template** (BIO-615, send date 28 July 2026)
   - Critical path: Only 36 days until send date
   - Approval needed by 26 July to allow for contact verification and CRM setup

2. **Board clarifies approval workflow**
   - Individual issue per template? OR batch approval for full sequences?
   - Who posts "APPROVED" comment — CEO, board member, specific role?

### Short-term (Next 2 Weeks)

3. **Board reviews remaining GHE templates** (T-60, T-45, T-30, T-14, Day 1, Day 7)
   - Templates can be approved in advance of send dates
   - Allows BDM to execute campaign without approval bottlenecks

4. **Board reviews transactional templates** (welcome, verification)
   - Lower urgency if no active subscriber campaigns
   - Required before website contact form goes live

---

## Template Approval Issue Template

For efficient board review, use this issue template:

```markdown
Title: Email Approval: [Template Name] — [Recipient Type]

## Email Details

**Template Name:** [e.g., GHE T-90 Save-the-Date]
**Campaign:** [e.g., Global Health Exhibition Riyadh 2026 (BIO-615)]
**Send Date:** [YYYY-MM-DD HH:MM GMT]
**Sender Email:** [e.g., admin@bionixus.com]
**Recipients:** [Count + type, e.g., "8 verified pharma contacts"]

## Recipient Examples

| Company | Contact Name | Email | Role |
|---------|--------------|-------|------|
| AstraZeneca | [From BIO-72] | [From CRM] | Market Access Director |
| Novo Nordisk | [From BIO-72] | [From CRM] | GCC Lead |
| [etc.] | | | |

## Business Justification

[2-3 sentences: Why is this email necessary? What business goal does it support?]

Example:
> First touch in 7-email sequence for Global Health Exhibition attendance (Riyadh, Oct 2026). BioNixus has limited meeting slots; T-90 save-the-date allows target accounts to prioritize BioNixus meetings before schedules fill. Campaign targets 8 pharma companies with active GCC market access needs.

## HTML Template

See attachment: [filename.html]

OR inline:

```html
[Full HTML template here]
```

## Personalization Tokens

| Token | Source | Example Value |
|-------|--------|---------------|
| `{{first_name}}` | CRM contact record | Hatem |
| `{{company}}` | Account name | AstraZeneca |
| [etc.] | | |

## Approval Request

Board: Please review and respond with one of:
- ✅ **APPROVED** — may send as-is
- ⚠️ **CHANGES REQUESTED** — specify required changes
- ❌ **REJECTED** — explain reason

Approval needed by: [date]

---

Related: [Parent campaign issue]
Policy: Email Approval Policy (BIO-651)
```

---

## Compliance Checkpoints

Before any template is sent:
- [ ] Board approval comment exists on Paperclip issue
- [ ] Template stored in `docs/ops/approved-email-templates/` with approval metadata
- [ ] Sender email address matches approved address
- [ ] Recipient list matches approved scope (company types, geographies)
- [ ] Personalization tokens filled correctly
- [ ] Send logged on approval issue (timestamp, actual recipients, outcome)

**Zero tolerance:** Any send without approval results in project pause and agent access revocation.

---

## Questions for Board

1. **Batch approval?** — Can we approve the full GHE 8-template sequence as a package? Or individual approval per send?
2. **Pre-approval window?** — How far in advance can templates be approved? (e.g., approve Oct templates in June?)
3. **Urgent requests?** — If an urgent email opportunity arises (< 24hr), what is the expedited approval path?
4. **Template versioning?** — If we need to make minor copy edits (typo fix, updated stat), does that require full re-approval?
5. **Automated transactionals?** — Do transactional emails (verification, password reset) require per-send approval or one-time template approval?

---

**Status:** All templates on hold pending board approval per BIO-651 Email Approval Policy.

**Next Action:** CEO to create approval issues OR board to batch-approve GHE sequence.
