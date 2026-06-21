# BIO-332 Wave 1 Send Execution Playbook

**Issue:** [BIO-332](/BIO/issues/BIO-332)  
**Status:** Pre-execution — awaiting gate clearance  
**Owner:** Sales Specialist (sends) + BD Manager (logging)  
**Last updated:** 21 June 2026 04:04 UTC+3

---

## Pre-Send Checklist (MANDATORY)

Before ANY Touch 2 or Touch 3 sends, confirm all three gates are cleared:

### Gate 1: COO External-Send Approval (BIO-79) 🔴 BLOCKING

- [ ] COO has reviewed and approved the external-send gate per BIO-79
- [ ] Approval comment posted to BIO-332 thread OR BIO-79 marked as complete
- [ ] All governance requirements documented in BIO-79 are satisfied

**Status:** NOT CLEARED — BLOCKS ALL SENDS

**Unblock owner:** COO  
**Unblock action:** Review outreach queue samples (3 accounts: AstraZeneca, Novo Nordisk, Novartis recommended) and approve external communication

---

### Gate 2: Contact Verification Complete 🟡 IN PROGRESS

- [ ] Novo Nordisk: GCC MA/Commercial Director name confirmed (LinkedIn profile verified)
- [ ] Sanofi: Specialty care GCC lead name confirmed (LinkedIn profile verified)
- [ ] Pfizer: Ahmed Dawoud LinkedIn profile verified as current Pfizer GCC MA role
- [ ] MSD: Market Access/HEOR lead name confirmed (LinkedIn profile verified)
- [ ] AstraZeneca: Hatem Werdany role confirmed as current Country President
- [ ] Novartis: Ahmed Bahgat Elredainy role confirmed as current Director Market Access GCC
- [ ] Eli Lilly: Dr. Ghassan Safi role confirmed as current GM Saudi Arabia
- [ ] J&J: Ahmed Roshdy role confirmed + GCC scope verified
- [ ] Roche: Primary contact strategy finalized (GM vs MA Lead)
- [ ] AbbVie: MA Director KSA hire status checked (defer send if unfilled)

**Status:** 4/10 accounts need contact identification or verification

**Unblock owner:** BD Manager  
**Unblock action:** Execute contact research per `docs/bd/bio-332-contact-verification-research-brief.md`  
**Deadline:** 24 June 2026 (T-2 days before Touch 3 sends)

---

### Gate 3: Insight Snippet Verification Complete 🔴 BLOCKING

- [ ] AstraZeneca: Rare disease payer signal verified and sourced
- [ ] Novo Nordisk: Obesity/diabetes payer signal verified and sourced
- [ ] Novartis: Immunology payer signal verified and sourced
- [ ] Sanofi: Specialty care/insulin tender signal verified and sourced
- [ ] Eli Lilly: Obesity/diabetes payer signal verified and sourced
- [ ] Pfizer: Oncology payer/NUPCO signal verified and sourced
- [ ] Roche: Diagnostics-pharma integrated access signal verified and sourced
- [ ] MSD: Vaccine access/localization signal verified and sourced
- [ ] AbbVie: Immunology pricing/biosimilar signal verified and sourced (DEFERRED if hire unfilled)
- [ ] J&J: Immunology biosimilar defense signal verified and sourced

**Status:** 0/10 accounts verified (10/10 if AbbVie deferred)

**Unblock owner:** BD/Data Analyst  
**Unblock action:** Verify each insight snippet has primary research source or public payer document citation  
**Deadline:** 24 June 2026 (before Touch 3 sends)

---

## Touch 2 Send Protocol (LinkedIn Connections)

**Target send date:** 22 June 2026 (Day 1)  
**Prerequisites:** Gates 1 + 2 cleared  
**Owner:** Sales Specialist

### Account-by-Account Send Instructions

For each account, the Sales Specialist will:

1. **Locate the outreach file:**
   - File path: `docs/bd/outreach-send-queue/seq-b-t2-{company}-2026-06-21.md`
   - Example: `seq-b-t2-astrazeneca-2026-06-21.md`

2. **Verify frontmatter status:**
   - Check `contact_name` field is populated (not "pending_verification")
   - Check `status` field is "draft" (ready to send)
   - Check `verified_contact: true` OR `contact_verification_status: verified` (for accounts with pending flags)

3. **Extract connection request message:**
   - Copy the LinkedIn connection message from the "Connection Request" section
   - Verify character count ≤300 (already checked in drafts, but double-confirm)

4. **Execute LinkedIn send:**
   - Open LinkedIn and search for the contact name + company
   - Send connection request with the exact message from the outreach file
   - **DO NOT MODIFY** the message text (it is already optimized)

5. **Update frontmatter:**
   - Change `status: draft` to `status: sent`
   - Add `sent_date: 2026-06-22`
   - Add `sent_by: [Sales Specialist name]`

6. **Log in GHL pipeline (within 24h):**
   - Account name: [Company name]
   - Stage: Outbound
   - Activity: Touch 2 — LinkedIn connection sent
   - Date: 2026-06-22
   - Contact: [Contact name from outreach file]
   - Notes: "Sequence B Touch 2 — peer-to-peer connection request"

### Send Order (Prioritized by ICP + Contact Verification Status)

**Batch 1 — Verified contacts (send first):**
1. AstraZeneca (Hatem Werdany) — if role confirmed
2. Novartis (Ahmed Bahgat Elredainy) — if role confirmed
3. Eli Lilly (Dr. Ghassan Safi) — if role confirmed
4. Pfizer (Ahmed Dawoud) — if LinkedIn profile verified
5. J&J (Ahmed Roshdy) — if role confirmed

**Batch 2 — Newly verified contacts (send after Batch 1):**
6. Novo Nordisk — once name identified and verified
7. Sanofi — once name identified and verified
8. MSD — once name identified and verified
9. Roche — once primary contact strategy finalized

**Deferred:**
10. AbbVie — ONLY send if MA Director KSA hire is confirmed by 22 June; otherwise DEFER to Wave 2

### Quality Control

Before ANY send, the Sales Specialist MUST verify:
- [ ] Contact name matches LinkedIn profile exactly (spelling, title, company)
- [ ] LinkedIn profile shows current employment at target company
- [ ] No typos or formatting errors in connection message
- [ ] Character count ≤300
- [ ] No product pitch or calendar link in message (violates Sequence B cold-touch guidelines)

---

## Touch 3 Send Protocol (Insight-Led Emails)

**Target send date:** 26 June 2026 (Day 5)  
**Prerequisites:** Gates 1 + 2 + 3 ALL cleared  
**Owner:** Sales Specialist

### Account-by-Account Send Instructions

For each account, the Sales Specialist will:

1. **Locate the outreach file:**
   - File path: `docs/bd/outreach-send-queue/seq-b-t3-{company}-2026-06-26.md`
   - Example: `seq-b-t3-astrazeneca-2026-06-26.md`

2. **Verify frontmatter status:**
   - Check `contact_name` field is populated
   - Check `verified_snippet_id` field is populated (not "pending_BD_data_confirmation")
   - Check `peer_outcome_verified: true` (insight snippet has been verified by BD/Data)
   - Check `status` field is "draft"

3. **Extract email components:**
   - Subject line: Choose ONE of the A/B test options (Sales Specialist discretion based on account context)
   - Email body: Copy from "Email Body" section
   - Verify all personalization tokens (`{{first_name}}`, `{{insight_snippet}}`, etc.) have been replaced with actual values

4. **Execute email send:**
   - From: admin@bionixus.com (BioNixus official email)
   - To: [Contact email — look up from LinkedIn or company website if not in outreach file]
   - Subject: [Selected A/B test subject line]
   - Body: [Exact email body from outreach file]
   - Signature: Include BioNixus email signature (Alex Morgan, Business Development)

5. **Update frontmatter:**
   - Change `status: draft` to `status: sent`
   - Add `sent_date: 2026-06-26`
   - Add `sent_by: [Sales Specialist name]`
   - Add `subject_line_used: [Chosen A/B option]`

6. **Log in GHL pipeline (within 24h):**
   - Account name: [Company name]
   - Stage: Outbound
   - Activity: Touch 3 — Insight-led email sent
   - Date: 2026-06-26
   - Contact: [Contact name + email]
   - Notes: "Sequence B Touch 3 — [therapy area] insight snippet for [country]"

### Send Order (Prioritized by ICP + Insight Verification Status)

Send in the same order as Touch 2, but ONLY for accounts where:
- Touch 2 LinkedIn connection has been sent (prerequisite)
- Insight snippet is verified (Gate 3 cleared)
- Contact name and email are confirmed

**Expected send sequence:**
1. AstraZeneca → Novo Nordisk → Novartis → Sanofi → Eli Lilly → Pfizer → Roche → MSD → J&J
2. AbbVie: DEFERRED unless MA Director hire confirmed

### Quality Control

Before ANY send, the Sales Specialist MUST verify:
- [ ] Contact email is correct (primary source: LinkedIn or company website)
- [ ] All personalization tokens replaced with actual values (no `{{placeholders}}` remain)
- [ ] Insight snippet is specific, verified, and sourced (check `verified_snippet_id` field)
- [ ] No typos or formatting errors in email body
- [ ] BioNixus email signature is complete and formatted correctly
- [ ] No promotional language or aggressive sales pitch (violates Sequence B insight-led approach)
- [ ] Calendar link UTM campaign parameter matches `calendar_utm_campaign` frontmatter field

---

## Pipeline Logging Requirements (BIO-80)

**Requirement:** All outreach activity MUST be logged in GHL pipeline within 24 hours of send.

**Minimum data per Touch:**
- Account name (company)
- Contact name
- Contact email (Touch 3 only)
- Activity type (Touch 2 LinkedIn OR Touch 3 Email)
- Send date
- Stage: "Outbound"
- Notes: Brief context (sequence, touch number, content angle)

**Response tracking:**
- Touch 2 response: LinkedIn connection accepted (yes/no/pending)
- Touch 3 response: Email opened (tracked via UTM if possible), email replied (yes/no/pending)
- Discovery call: Scheduled date + time if booked

**Success metrics (by 30 June):**
- ≥3 discovery calls booked
- ≥$120K proposal-stage pipeline

---

## Escalation & Contingency Protocols

### If Gate 1 (COO Approval) Not Cleared by 22 June:

**Action:** BD Manager escalates to CEO  
**Rationale:** BIO-332 is CEO revenue unblock after Q1 miss — send delays directly impact Q2 targets  
**Contingency:** Defer all sends by 1 week (new Touch 2 date: 29 June, new Touch 3 date: 3 July)  
**Impact:** Misses 30 June discovery call target; Q2 revenue target at risk

### If Gate 2 (Contact Verification) Not Complete by 22 June:

**Action for accounts with verified contacts:** Proceed with Touch 2 for verified accounts only (partial Wave 1 launch)  
**Action for accounts without verified contacts:**
- Option A: Pivot to GM-level outreach (modify Touch 2 message to reflect GM targeting)
- Option B: Defer account to Wave 2 (next sequence cohort)
- Option C: Send generic title-based outreach (lower quality, not recommended)

**Decision owner:** BD Manager + Sales Lead (joint call)

### If Gate 3 (Insight Snippet Verification) Not Complete by 26 June:

**Action:** Touch 3 sends are DEFERRED for accounts without verified snippets  
**Contingency:** Touch 2 (LinkedIn) still proceeds on 22 June; Touch 3 delayed until snippets verified  
**Impact:** Breaks the 5-day sequence cadence; reduces Touch 3 effectiveness

**Fallback for Touch 3 (if snippets not verified by 30 June):**
- Send generic market intelligence offer (no specific insight snippet)
- Quality downgrade: Reduces credibility and reply rate
- NOT RECOMMENDED unless absolutely necessary for timeline

### If AbbVie MA Director Hire Not Filled by 22 June:

**Action:** DEFER AbbVie to Wave 2  
**Monitor:** Weekly LinkedIn + AbbVie careers page check  
**Pivot date:** 15 July 2026 (if still unfilled, remove from Q2 targets and move to Q3 pipeline)

---

## Post-Send Monitoring & Response Handling

### Touch 2 (LinkedIn) Response Tracking:

**Expected response timeframe:** 24-72 hours

**Response scenarios:**
1. **Connection accepted:** Update GHL pipeline → "Connected" stage → Monitor for LinkedIn message or profile view
2. **Connection pending (no action):** Wait 7 days → If still pending, mark as "No response" in GHL
3. **Connection rejected:** Mark in GHL → DO NOT re-attempt same channel → Proceed with Touch 3 email only

**LinkedIn message replies (after connection accepted):**
- Sales Specialist forwards to BD Manager for qualification
- BD Manager replies within 24 hours with discovery call calendar link
- Log reply + discovery call outcome in GHL

### Touch 3 (Email) Response Tracking:

**Expected response timeframe:** 48-96 hours

**Response scenarios:**
1. **Email reply (any content):** BD Manager responds within 24 hours → Qualify BANT → Send discovery call calendar link or proposal
2. **Email opened but no reply (tracked via UTM):** Wait 5 days → If no reply, log as "Opened, no response" in GHL
3. **Email bounced:** BD Manager verifies contact email → Re-send to corrected email OR pivot to LinkedIn DM
4. **Out-of-office auto-reply:** Note return date in GHL → Follow up after return date with brief check-in email

**Discovery call booking:**
- Use Calendly link with UTM campaign parameter: `seq_b_t3_discovery_15min`
- Log in GHL immediately upon booking
- BD Manager conducts discovery call → Qualify BANT → Advance to proposal stage if ≥3/4 BANT criteria met

---

## Success Metrics & Reporting

**Wave 1 targets (by 30 June):**
- ≥3 discovery calls booked from 10 accounts
- ≥$120K proposal-stage pipeline (cumulative from discovery calls → qualified opportunities)

**Weekly reporting (Mondays):**
- Touch 2 sent: X/10 accounts
- Touch 2 response rate: X% (connections accepted / sent)
- Touch 3 sent: X/10 accounts
- Touch 3 response rate: X% (replies / sent)
- Discovery calls booked: X (target: ≥3)
- Proposal-stage pipeline: $XXX,XXX (target: ≥$120K)

**Reporting owner:** BD Manager  
**Distribution:** CEO, COO, Sales Lead (per BIO-332 issue visibility)

---

## Appendix: Quick Reference Links

- **Outreach queue files:** `docs/bd/outreach-send-queue/seq-b-t2-*.md` and `seq-b-t3-*.md`
- **Tracking dashboard:** `docs/bd/bio-332-wave1-outreach-tracking.md`
- **Contact research brief:** `docs/bd/bio-332-contact-verification-research-brief.md`
- **Account briefs:** `docs/bd/bio-72/tier1-gcc-top10-account-briefs.md`
- **Sequence templates:** `docs/bd/gcc-outreach-sequence-templates.md`
- **External-send gate:** BIO-79 (issue link)
- **Pipeline reporting spec:** BIO-80 (issue link)

---

*Playbook version: 1.0 — Created 21 June 2026 04:04 UTC+3*  
*Next review: After gate clearance or if send dates shift*
