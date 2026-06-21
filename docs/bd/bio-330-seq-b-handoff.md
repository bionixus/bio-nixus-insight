# BIO-330 Sequence B Wave 1 — Sales Specialist Handoff

**Issue:** [BIO-330](/BIO/issues/BIO-330)  
**Parent plan:** [BIO-43 GCC BD Plan](/BIO/issues/BIO-43)  
**Date:** 21 June 2026  
**Status:** Outreach files drafted — verification and send coordination required

---

## Execution Summary

**Completed:**
- ✅ All 20 outreach files drafted (10 Tier-1 accounts × 2 touches: T2 LinkedIn + T3 Email)
- ✅ Files follow Sequence B template structure with verification checklists
- ✅ Personalization based on account briefs (BIO-72)
- ✅ CFO frozen proof-point block (B — Short) integrated

**Pending before send:**
1. Contact verification for 4 accounts (Sanofi, MSD, AbbVie, Pfizer — see below)
2. BD/Data insight snippet verification for all 10 T3 emails
3. Validation script run for each file
4. COO external-send gate final confirmation (BIO-79/BIO-125)
5. Sales Specialist send coordination

---

## Outreach File Inventory

### Touch 2 (LinkedIn Connection Requests) — Send Day 1 (2026-06-22)

| # | Company | File | Contact Status |
|---|---------|------|----------------|
| 1 | AstraZeneca | `seq-b-t2-astrazeneca-2026-06-21.md` | ✅ Hatem Werdany verified |
| 2 | Novo Nordisk | `seq-b-t2-novo-nordisk-2026-06-21.md` | ✅ Contact identified |
| 3 | Novartis | `seq-b-t2-novartis-2026-06-21.md` | ✅ Ahmed Bahgat Elredainy verified |
| 4 | Sanofi | `seq-b-t2-sanofi-2026-06-21.md` | ⚠️ Contact TBD — Specialty Care GCC Lead |
| 5 | Eli Lilly | `seq-b-t2-eli-lilly-2026-06-21.md` | ✅ Felipe Borges dos Reis verified |
| 6 | Pfizer | `seq-b-t2-pfizer-2026-06-21.md` | ⚠️ Ahmed Dawoud — profile verification needed |
| 7 | Roche | `seq-b-t2-roche-2026-06-21.md` | ✅ Mohamed Elzohiery or Sameh Essa (choose 1) |
| 8 | MSD | `seq-b-t2-msd-2026-06-21.md` | ⚠️ Contact TBD — GCC Commercial post-MoU |
| 9 | AbbVie | `seq-b-t2-abbvie-2026-06-21.md` | ⚠️ Contact TBD — MA Director KSA hiring |
| 10 | J&J | `seq-b-t2-jnj-2026-06-21.md` | ✅ Ahmed Roshdy verified |

### Touch 3 (Insight-Led Emails) — Send Day 5 (2026-06-26)

| # | Company | File | Insight Snippet Status |
|---|---------|------|------------------------|
| 1 | AstraZeneca | `seq-b-t3-astrazeneca-2026-06-26.md` | ⚠️ Rare disease SFDA/NUPCO signal needed |
| 2 | Novo Nordisk | `seq-b-t3-novo-nordisk-2026-06-26.md` | ⚠️ Obesity/NUPCO localization signal needed |
| 3 | Novartis | `seq-b-t3-novartis-2026-06-26.md` | ⚠️ Immunology SFDA/NUPCO signal needed |
| 4 | Sanofi | `seq-b-t3-sanofi-2026-06-26.md` | ⚠️ Specialty care GCC access signal needed |
| 5 | Eli Lilly | `seq-b-t3-eli-lilly-2026-06-26.md` | ⚠️ Obesity/diabetes SFDA signal needed |
| 6 | Pfizer | `seq-b-t3-pfizer-2026-06-26.md` | ⚠️ Oncology NUPCO signal needed |
| 7 | Roche | `seq-b-t3-roche-2026-06-26.md` | ⚠️ Oncology/diagnostics signal needed |
| 8 | MSD | `seq-b-t3-msd-2026-06-26.md` | ⚠️ Vaccine localization signal needed |
| 9 | AbbVie | `seq-b-t3-abbvie-2026-06-26.md` | ⚠️ Immunology biosimilar defense signal needed |
| 10 | J&J | `seq-b-t3-jnj-2026-06-26.md` | ⚠️ Immunology biosimilar HEOR signal needed |

**All files location:** `docs/bd/outreach-send-queue/`

---

## Critical Pre-Send Verification Tasks

### 1. Contact Identification & Verification (Sales Specialist + BD)

**Owner:** Sales Specialist (LinkedIn research) + BD Manager (CRM cross-check)  
**Deadline:** Before Touch 2 send (Day 1 = 2026-06-22)

**Action required:**

- **Sanofi:** Identify Specialty Care GCC Lead (LinkedIn/org chart research)
- **MSD:** Identify GCC Commercial Lead post-Lifera MoU
- **AbbVie:** Monitor AbbVie careers for MA Director KSA hire (active recruitment)
- **Pfizer:** Verify Ahmed Dawoud profile is current Pfizer GCC MA role

**Verification checklist per contact:**
- [ ] LinkedIn profile shows current employment at target company
- [ ] Title/role matches or approximates target role in file frontmatter
- [ ] Public signals referenced in connection note are accurate
- [ ] No recent role change (< 3 months) that suggests transition instability

### 2. Insight Snippet Verification (BD Manager + Data Analyst)

**Owner:** BD Manager (source selection) + Data Analyst (fact-check)  
**Deadline:** Before Touch 3 send (Day 5 = 2026-06-26)

**Requirements per BIO-43 governance:**
- Must be a specific, recent payer/access signal for the therapy area and country
- Must be BD/Data-confirmed from reliable source (no fabricated claims)
- Must relate to SFDA, NUPCO, DHA pathway/pricing/formulary
- Source must be documented in snippet verification log

**Suggested insight snippet structure (50–80 words):**

> "Recent [Access Body] [therapy area] pathway update: [specific signal]. This affects [brand category] evidence requirements for [country] listing/pricing, particularly around [specific gap: localization, HEOR, comparator, budget impact]."

**Example:**

> "Recent SFDA rare disease pathway update (Q1 2026): orphan drug designation now requires Saudi-specific burden-of-illness data for accelerated review. This affects first-in-class rare disease brands seeking KSA listing, particularly around local epidemiology and unmet need quantification for NUPCO pricing negotiations."

**Action:** Create 10 verified snippets and replace `{{insight_snippet — PENDING BD/DATA CONFIRMATION}}` in each T3 file.

### 3. Validation Script Execution (BD Manager)

**Owner:** BD Manager  
**Deadline:** Immediately after contact and snippet verification

**Command per file:**

```bash
node scripts/bd/validate-outreach-send-queue.mjs --file docs/bd/outreach-send-queue/[filename].md
```

**Expected validation checks:**
- Frontmatter completeness (status, contact name, verified_snippet_id)
- Character count ≤300 for LinkedIn notes
- Word count ≤150 (excluding signature) for emails
- No unverified placeholder text ({{...}} tokens resolved)
- COO gate flag present

**Action:** Run validation on all 20 files. Fix any errors before updating status to `ready_to_send`.

### 4. COO External-Send Gate Confirmation

**Owner:** BD Manager  
**Deadline:** Before any external send

**Action:** Confirm BIO-79 (or BIO-125 mirror) approval is complete and recorded. If not, escalate to COO for review of Tier-1 account briefs and Sequence B content before proceeding.

---

## Send Coordination Protocol (Sales Specialist)

### Touch 2 (LinkedIn Connection Requests)

**Channel:** LinkedIn (Sales Specialist personal account)  
**Send date:** Day 1 = 2026-06-22  
**Window:** 09:00–11:00 local time (Riyadh UTC+3 / Dubai UTC+4)

**Send checklist per account:**
1. Open verified contact's LinkedIn profile
2. Copy connection note verbatim from file (character count pre-validated)
3. Send connection request
4. Log send in CRM: timestamp, contact name, LinkedIn profile URL
5. Monitor acceptance within 72 hours

**Do NOT send if:**
- Contact verification incomplete (Sanofi, MSD, AbbVie, Pfizer pending)
- Validation script failed for that file
- COO gate not confirmed

### Touch 3 (Insight-Led Emails)

**Channel:** Email (admin@bionixus.com via Sales Specialist)  
**Send date:** Day 5 = 2026-06-26  
**Condition:** Only if Touch 2 LinkedIn connection was **accepted**. If not accepted, delay Touch 3 by 7 days and retry after acceptance.

**Send checklist per account:**
1. Verify Touch 2 connection accepted (check LinkedIn)
2. Verify insight snippet is populated and verified (no PENDING placeholders)
3. Copy email body verbatim from file (word count pre-validated)
4. Use subject line Option 2 (recommended in each file)
5. Send via admin@bionixus.com with Sales Specialist signature
6. Log send in CRM: timestamp, contact email, subject line
7. Add calendar link UTM tracking: `?utm_campaign={calendar_utm_campaign from frontmatter}`

**Do NOT send if:**
- Touch 2 connection not accepted
- Insight snippet still PENDING or unverified
- Validation script failed for that file

---

## Pipeline Logging & Reporting

**Owner:** BD Manager  
**Deadline:** Weekly (Monday 09:00 UTC+3)

**Required logging per BIO-43 acceptance criteria:**

1. **Outreach activity log:**
   - Total accounts reached: 10
   - Total touches executed: 20 (T2 LinkedIn + T3 Email)
   - Connection acceptance rate: [track after Day 3]
   - Email open rate: [track after Day 7]

2. **Pipeline update to BIO-43:**
   - New leads qualified: [count after Day 14]
   - Discovery calls booked: [target ≥3 by June 30]
   - Proposal-stage opportunities: [target ≥$120K by Q2 close]

3. **Monthly GCC pipeline report (BIO-80):**
   - Use template: `docs/bd/gcc-pipeline-report-template.md`
   - Section 5 (Top Accounts in Motion): Include Sequence B wave 1 accounts
   - Section 6 (Blockers & Risks): Note contact identification delays (Sanofi, MSD, AbbVie, Pfizer)

---

## Governance & Escalation

| Blocker | Owner | Action |
|---------|-------|--------|
| Contact identification >48h delay | Sales Specialist | Escalate to BD Manager for CRM/network research |
| Insight snippet verification impossible | Data Analyst | Escalate to BD Manager for alternative insight or generic access landscape |
| Validation script persistent failure | BD Manager | Escalate to Engineering or manual verification |
| COO gate not confirmed | BD Manager | Escalate to COO with account briefs (BIO-72) |
| LinkedIn connection decline pattern >30% | Sales Specialist | Escalate to BD Manager for connection note revision |

---

## Success Metrics (per BIO-43)

**By June 30, 2026:**
- ✅ Outreach log completed: 20 touches × 10 accounts
- ⏳ ≥3 discovery calls booked from Sequence B wave 1
- ⏳ ≥$120K proposal-stage pipeline attributed to GCC outbound

**Handoff to Sales Specialist for touches 4+ (peer proof, case study, etc.) after Touch 3 completion.**

---

**Next action:** Sales Specialist to review this handoff and confirm contact identification timeline for the 4 pending accounts.

**File location:** `docs/bd/bio-330-seq-b-handoff.md`
