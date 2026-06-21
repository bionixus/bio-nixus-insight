# BIO-284 Inbox Triage BLUF — 90-day window (15 Jun 2026)

**Scan method:** Resend inbound webhook mirror (296 received messages in retention).  
**Limitation:** Sent-folder / reply-status not verified — `gog` OAuth `invalid_client` for all four GW inboxes; [BrowserAgent](/BIO/agents/browseragent) paused. Treat “unreplied” as *inbound with no visible outbound in webhook data*.

**Inboxes scoped:** `admin@`, `mosama@`, `mohammad.alsaadany@`, `dina.ibrahim@` @bionixus.com

---

## BLUF

One **active revenue opportunity** needs a scheduling reply (Merck Iraq MR). One major proposal thread is **closed** (Bio-Rad). Two **inbound requests** likely need acknowledgment (medical panel signup, RA job application). Remainder is vendor spam / pay-to-play awards — no RFQ action.

---

## RAG summary

| Workstream | RAG | Owner | Next action |
|------------|-----|-------|-------------|
| Merck Iraq market research | **RED** | Mohammad Alsaadany (MEA) | Reply to Murad; propose call slots this week |
| Bio-Rad SA/Turkey proposal | **GREEN** | Mohammad / Dina | Archive — client chose another vendor (26 May) |
| Medical panel signup (Gorsky) | **AMBER** | Mosama / HR | Acknowledge or route to panel ops |
| RA job application (Kulkarni) | **AMBER** | HR / Admin | Acknowledge or decline per hiring freeze |
| Qwoted journalist RFQs | **AMBER** | CMO / Mohammad | Review in Gmail — recurring media opportunities |
| Vendor / scam / list spam | **GREEN** | — | No reply; archive |

---

## Active opportunities & RFQs

### 1. Merck — Market Research Iraq (mohammad.alsaadany@)

- **From:** murad.al-naqshbandi@external.merckgroup.com  
- **Subject:** RE: Fwd: Market Research-Iraq  
- **Received:** 31 May 2026  
- **Status:** Proposal sent 25 May by Mohammad; Murad replied asking to **schedule a call this week** to review options.  
- **Action:** **Reply required** — propose 2–3 afternoon slots; confirm attendees (cc dina.ibrahim@).  
- **Priority:** P1 — active pharma MR pipeline.

### 2. Bio-Rad — SA/Turkey project (dina.ibrahim@)

- **From:** Yulia_Kryuchkova@bio-rad.com  
- **Subject:** RE: BioNixus Bio-Rad Partnership  
- **Received:** 26 May 2026  
- **Status:** **Closed lost** — Bio-Rad moving forward with another provider. Mohammad had followed up 25 May.  
- **Action:** Optional thank-you note; no commercial follow-up unless re-engaged.

### 3. Medical panel — Mila Gorsky MD (mosama@)

- **From:** gorskymila@gmail.com  
- **Subject:** I want to join the medical community or panel  
- **Received:** 30 May 2026  
- **Status:** Inbound application with NPI/credentials; **no outbound visible** in webhook data.  
- **Action:** HR/panel ops to acknowledge or add to panel database.

### 4. Job application — Mandar Kulkarni RA CMC (admin@)

- **From:** makulkarni2026@gmail.com  
- **Subject:** Application for Regulatory Affairs Position  
- **Received:** 29 May 2026 (CV attached)  
- **Status:** **No visible reply** in webhook data.  
- **Action:** HR to respond per current hiring status.

### 5. Qwoted media journalist requests (mohammad.alsaadany@)

- **From:** notifications@qwoted.com (recurring)  
- **Examples:** VeryWell Health, Newsweek, USNews.com, Business Insider  
- **Status:** Platform RFQs for expert commentary — reply status **unknown** without Gmail sent folder.  
- **Action:** CMO or Mohammad to triage in native Gmail if pursuing PR.

---

## No action required (noise / low-quality)

| Inbox | From | Subject | Note |
|-------|------|---------|------|
| mohammad@ | salem@themiddleeastleaders.com | Quick Follow Up on Our Recent Proposal | Pay-to-play award (6,000 AED fee) — decline |
| admin@ | boyd.r@hazeconsult.com | Partnership Opportunity in Pharmaceutical Raw Material Supply | Likely advance-fee scam — do not engage |
| admin@ | luna.violet@… | Re: Dentist Contacts List | List vendor spam |
| admin@ | healthpro-heritage… | Report....ready | SEO cold outreach |
| admin@ | adam@mail.my-b2b-health.co.uk | AXA Health Cover 25% reduction | B2B insurance pitch |
| mosama@ | mmd@aztec301.com | Training 2026 | Training vendor brochure (FYI only) |
| dina@ | LinkedIn / Facebook digests | — | Social notifications |

---

## Coverage gap & unblock path

| Blocker | Owner | Action |
|---------|-------|--------|
| Gmail API OAuth broken (`gog` → `invalid_client`) | Board / CTO | Re-auth `gog` for each inbox OR fix OAuth client secret |
| BrowserAgent paused | Board | Unpause [BrowserAgent](/BIO/agents/browseragent) for browser Gmail if API unavailable |
| Resend webhook ≠ full mailbox | — | Inbound-only; cannot confirm sent replies |

**Recommendation:** Board re-authenticates GW inboxes via `gog auth add` for admin@, mosama@, mohammad.alsaadany@, dina.ibrahim@ — then re-run sent-folder audit for definitive unreplied-RFQ list.

---

## Delegation (if board wants follow-through)

| Item | Suggested owner | Acceptance criteria |
|------|-----------------|---------------------|
| Merck call scheduling | Mohammad Alsaadany | Murad receives proposed slots; call booked |
| Panel signup (Gorsky) | HR / Mosama | Acknowledgment sent within 3 business days |
| RA application (Kulkarni) | HR | Standard rejection or interview path communicated |
| Full Gmail sent-folder audit | BrowserAgent (after unpause) | BLUF updated with confirmed reply status per thread |

---

*Prepared by COO — [BIO-284](/BIO/issues/BIO-284). Parent: [BIO-282](/BIO/issues/BIO-282).*
