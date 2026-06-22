# Approved Email Templates Registry

**Policy:** [Email Approval Policy (BIO-651)](/docs/ops/email-approval-policy.md)  
**Owner:** CEO  
**Last Updated:** 22 June 2026

---

## Purpose

This directory contains **ONLY** board-approved email templates that have been explicitly authorized for external use. Templates stored here have passed board review for:
- Brand alignment
- Legal compliance
- Strategic fit
- Accuracy verification
- Risk assessment

---

## Directory Structure

```
docs/ops/approved-email-templates/
├── README.md (this file)
├── YYYY-MM-DD-template-name-APPROVED.html (HTML template)
├── YYYY-MM-DD-template-name-APPROVED.md (approval metadata)
└── [future approved templates]
```

---

## Approval Status Summary

| Template Name | Status | Approval Issue | Date | Valid Until |
|---------------|--------|----------------|------|-------------|
| GHE T-90 Save-the-Date | **PENDING APPROVAL** | To be created | - | - |
| GHE T-60 Email Follow-Up | **PENDING APPROVAL** | To be created | - | - |
| GHE T-45 CEO/COO Strategic Intro | **PENDING APPROVAL** | To be created | - | - |
| GHE T-30 Meeting Confirmation | **PENDING APPROVAL** | To be created | - | - |
| GHE T-14 Final Confirmation | **PENDING APPROVAL** | To be created | - | - |
| GHE Day 1 Post-Meeting Thank You | **PENDING APPROVAL** | To be created | - | - |
| GHE Day 7 Post-Meeting Follow-Up | **PENDING APPROVAL** | To be created | - | - |
| Welcome Email | **PENDING APPROVAL** | To be created | - | - |
| Email Verification | **PENDING APPROVAL** | To be created | - | - |

---

## Templates Requiring Immediate Board Review

The following templates exist in the codebase but **MUST NOT BE USED** until board-approved:

1. **`docs/bd/bio-615-outreach-email-templates.md`** — Global Health Exhibition email sequence (7 templates)
2. **`preview-welcome-email.html`** — Welcome email for new subscribers
3. **`preview-verification-email.html`** — Email verification message

**Action Required:** Create approval issues for each template per Email Approval Policy workflow.

---

## How to Use Approved Templates

Once a template is approved and stored in this directory:

1. **Verify approval metadata** — Check the `.md` file for approval date, issue, and use case restrictions
2. **Follow token guidelines** — Only use approved personalization tokens listed in metadata
3. **Log usage** — Post on original approval issue when template is used
4. **Request re-approval** — If using template for significantly different context than original approval

**Never modify approved templates.** Content changes require new approval cycle.

---

## Template Approval Request Process

To request board approval for a new email template:

1. Create Paperclip issue: `Email Approval: [Template Name]`
2. Include all required fields per Email Approval Policy
3. Attach complete HTML template
4. Assign to CEO for board review
5. Wait for explicit "APPROVED" comment before use

See [Email Approval Policy](../email-approval-policy.md) for complete workflow.

---

## Template Versioning

When an approved template is updated:
- Original approved version remains in directory with original date
- New version gets new filename with new approval date
- Old version metadata updated with "Superseded by: [new version]"

Example:
```
2026-06-22-welcome-email-APPROVED.html (superseded)
2026-07-15-welcome-email-v2-APPROVED.html (current)
```

---

## Compliance Reminder

**Using unapproved templates is a policy violation.**

All external emails must use board-approved templates from this directory OR have individual approval via Paperclip issue per Email Approval Policy (BIO-651).

Violations result in immediate project pause and agent access revocation.

---

## Questions?

Contact CEO or review [Email Approval Policy](../email-approval-policy.md).
