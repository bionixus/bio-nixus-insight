# Email Approval Quick Reference Card

**Policy:** [BIO-651](/BIO/issues/BIO-651) Email Approval Policy  
**Effective:** 22 June 2026  
**Print & Post:** Visible reminder for all agents

---

## 🚨 CRITICAL RULE

**NO EXTERNAL EMAILS WITHOUT BOARD APPROVAL**

Zero tolerance. Zero exceptions.

---

## ✅ Quick Checklist — Before Sending ANY External Email

- [ ] **Paperclip approval issue created?**  
  Title: "Email Approval: [Purpose] — [Recipient Company]"

- [ ] **Required fields documented?**
  - [ ] Sender email (e.g., admin@bionixus.com)
  - [ ] Complete HTML template (inline or attached)
  - [ ] Recipient details (name, company, email)
  - [ ] Send date/time (YYYY-MM-DD HH:MM)
  - [ ] Business justification (2-3 sentences)

- [ ] **Board "APPROVED" comment exists on issue?**  
  Search issue comments for "APPROVED"

- [ ] **Email matches approved template exactly?**  
  No deviations allowed

- [ ] **Ready to log send outcome?**  
  Post timestamp + recipients on approval issue after send

**If ANY box is unchecked → DO NOT SEND**

---

## 📋 Required Documentation (No Shortcuts)

### 1. Sender Email Address
Example: `admin@bionixus.com`

### 2. Complete HTML Template
NOT a reference or summary. The FULL HTML code that will be sent.

### 3. Recipient Details
| Field | Example |
|-------|---------|
| Name | John Smith |
| Company | AstraZeneca |
| Email | john.smith@astrazeneca.com |
| Role | Market Access Director |

### 4. Send Date & Time
Example: `28 July 2026, 09:00 GMT+3`

### 5. Business Justification
2-3 sentences explaining:
- Why this email is necessary
- What business goal it supports
- Why timing matters

Example:
> "First touch in 7-email sequence for Global Health Exhibition attendance (Riyadh, Oct 2026). BioNixus has limited meeting slots; T-90 save-the-date allows target accounts to prioritize meetings before schedules fill. Campaign targets 8 pharma companies with active GCC market access needs."

---

## 🔄 Approval Workflow (3 Steps)

```
STEP 1: CREATE ISSUE
↓
Create Paperclip issue: "Email Approval: [Purpose] — [Company]"
Include all 5 required fields
Assign to CEO
↓

STEP 2: WAIT FOR APPROVAL
↓
Board reviews (target: 48 hours)
Board posts "APPROVED" or "CHANGES REQUESTED" or "REJECTED"
↓

STEP 3: SEND & LOG
↓
Send email exactly as approved
Post send outcome on approval issue:
- Timestamp sent
- Recipients confirmed
- Any delivery issues
```

---

## ⚠️ What Counts as "External"?

**External (requires approval):**
- ✓ Client emails (proposals, updates, deliverables)
- ✓ Prospect emails (cold outreach, follow-ups)
- ✓ Vendor emails (RFQs, contracts, support)
- ✓ Partner emails (collaboration, referrals)
- ✓ Marketing emails (newsletters, announcements)
- ✓ Transactional emails (welcome, verification, password reset)
- ✓ Support emails (customer service, technical assistance)

**Internal (no approval needed):**
- ✗ Emails to @bionixus.com addresses
- ✗ Internal Slack messages
- ✗ Paperclip comments/notifications

**Rule of Thumb:** If recipient domain is NOT @bionixus.com → requires approval

---

## 🚫 What Happens If I Violate?

**First Violation:**
1. Immediate project pause
2. Agent access revocation
3. Board escalation
4. Incident report required

**Repeat Violations:**
- Permanent removal from email-sending privileges

**No warnings. No exceptions.**

---

## ⏱️ Approval Timeline

| Request Type | Board Response Time |
|--------------|---------------------|
| **Standard** | Within 48 hours |
| **Urgent** | Within 24 hours (requires `priority: urgent` label + justification) |

**If approval delayed beyond your send date:**
- Email cannot be sent on original date
- Reschedule or cancel
- Do NOT send without approval

---

## 📁 Approved Templates

Once a template is board-approved and stored in:
```
docs/ops/approved-email-templates/
```

You MAY reuse it for similar sends IF:
- [ ] Recipient company type matches original approval
- [ ] Personalization tokens filled correctly
- [ ] No content changes beyond approved tokens
- [ ] You log usage on original approval issue

You MUST request new approval IF:
- [ ] Different recipient type (e.g., approved for pharma, now sending to payer)
- [ ] Email context differs significantly
- [ ] Business case has changed

---

## 📞 Questions?

**Policy document:** `docs/ops/email-approval-policy.md`  
**Pending templates:** `docs/ops/pending-email-template-approvals.md`  
**Completion summary:** `docs/ops/bio-651-completion-summary.md`

**Contact:** CEO for policy questions or urgent approvals

---

## ✍️ Policy Acknowledgment Required

All agents must post on [BIO-651](/BIO/issues/BIO-651):

```
I acknowledge that I have read and understand the Email Approval Policy (BIO-651).
I will not send any external emails without explicit board approval.

Agent: [Your Agent Name]
Date: [YYYY-MM-DD]
```

**Not acknowledged = cannot send emails**

---

## 🎯 Remember

1. **Board approval FIRST**
2. **Complete documentation ALWAYS**
3. **No deviations from approved template**
4. **Log send outcome on approval issue**
5. **Zero tolerance for violations**

---

**When in doubt, DON'T SEND. Create approval issue instead.**

---

*Policy effective immediately. Print this reference card and keep it visible.*
