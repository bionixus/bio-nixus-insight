# BIO-282 Inbox Triage Briefing

**Date:** 2026-06-15  
**Owner:** COO  
**Parent:** [BIO-282](/BIO/issues/BIO-282) · Execution: [BIO-284](/BIO/issues/BIO-284)  
**Data source:** Resend inbound capture API (296 messages, 2026-05-25 → 2026-05-31)

---

## BLUF

**One hot sales thread needs a reply today:** Merck Iraq (Murad Al-Naqshbandi) asked Mohammad to schedule a proposal review call **any afternoon this week** (email received 2026-05-31). Proposal was sent 2026-05-25; no outbound reply visible in capture since his message.

**Coverage gap:** Resend inbound only captured ~6 days of mail routed through Resend MX — **not** full Google Workspace Sent/Archive for 90 days. A BrowserAgent Gmail session (or GW API) is required to certify “no unreplied RFQs” across the full window.

---

## Unreplied RFQs / active quote threads

| Priority | Inbox | From | Subject | Received | Status | Owner / next action |
|----------|-------|------|---------|----------|--------|---------------------|
| 🔴 **P1** | mohammad.alsaadany@ | murad.al-naqshbandi@external.merckgroup.com | RE: Fwd: Market Research-Iraq | 2026-05-31 | **Awaiting BioNixus reply** — client wants call this week to review proposal options | **Mohammad** (+ Dina cc): send calendar invite for afternoon slot (Iraq time). Confirm which proposal tier to discuss. |
| 🟡 P2 | mohammad.alsaadany@ | salem@themiddleeastleaders.com | Quick Follow Up on Our Recent Proposal | 2026-05-28 | Follow-up on “Elite Leadership Award 2026 Dubai” sponsorship/award pitch (not MR RFQ) | **CEO/Mohammad:** decline or ignore unless board wants paid award placement. |
| 🟢 Closed | dina.ibrahim@ | Yulia_Kryuchkova@bio-rad.com | RE: BioNixus Bio-Rad Partnership | 2026-05-26 | **Lost** — Bio-Rad chose another provider for SA/Turkey project | No reply needed; archive. |

---

## Opportunities (non-RFQ)

| Priority | Inbox | From | Subject | Received | Notes | Owner |
|----------|-------|------|---------|----------|-------|-------|
| 🟡 | mohammad.alsaadany@ | notifications@qwoted.com | Mergermarket: CEOs of Healthcare Companies interview | 2026-05-27 | Media/PR — submit by **15 Jun 2026** via Qwoted | CommunicationsPRDirector / CEO |
| 🟡 | mohammad.alsaadany@ | notifications@qwoted.com | Daily journalist requests (multiple) | ongoing | PR pipeline — not BD RFQs | CMO / Comms |
| 🟡 | mosama@bionixus.com | gorskymila@gmail.com | I want to join the medical community or panel | 2026-05-30 | MSK oncologist seeking paid survey/panel work; CV attached | FieldOperationsManager / Research |
| ⚪ | admin@bionixus.com | makulkarni2026@gmail.com | RA CMC job application | 2026-05-29 | Hiring inquiry — not sales | HR Director |
| ⚪ | admin@bionixus.com | mmd@aztec301.com | Training 2026 | 2026-05-31 | Training vendor brochure (attachment) | Ignore unless L&D interest |

---

## Spam / ignore (do not reply)

- **admin@:** healthpro-heritage.it12@outlook.com “Report....ready” — SEO cold outreach
- **admin@:** boyd.r@hazeconsult.com “Partnership Opportunity in Pharmaceutical Raw Material Supply” — advance-funding scam pattern
- **admin@:** luna.violet@industrynetworksolutions.com “Dentist Contacts List” — list broker spam
- **admin@:** biotechpharmamarketing.com / deepli.net — SEO vendor pitches
- **mosama@:** bulk AI/affiliate/Zoom replay marketing (100+ messages in window)

---

## Per-inbox summary (Resend capture window)

| Inbox | Messages captured | RFQ/quote threads | Actionable opportunities |
|-------|-------------------|-------------------|--------------------------|
| admin@bionixus.com | 21 | 0 genuine RFQs | 0 (spam + job app) |
| mosama@bionixus.com | 160 | 0 | 1 (HCP panel recruitment) |
| mohammad.alsaadany@bionixus.com | 71 | **2** (Merck + award follow-up) | Qwoted PR |
| dina.ibrahim@bionixus.com | 31 | 0 open (Bio-Rad closed) | LinkedIn noise only |

---

## Methodology & limitations

1. **Source:** Resend `GET /emails/receiving` — paginated 296 messages. This reflects mail **routed to Resend inbound**, not necessarily every GW folder (Sent, Archive, delegated inboxes).
2. **Window:** Oldest captured message **2026-05-25** — **not** the requested 90-day lookback. Pre-2026-05-25 RFQs would not appear here.
3. **Reply detection:** Outbound Resend send log shows mostly newsletter/verification traffic; **GW-sent replies from mohammad@/mosama@ personal SMTP are not visible** in Resend. Merck thread marked unreplied because client’s 2026-05-31 message is the latest visible leg and requests scheduling.
4. **Recommendation:** For board-grade 90-day certification, delegate [BrowserAgent](/BIO/agents/browseragent) with `GOOGLE_GBP_EMAIL` / GW admin credentials to scan each inbox Sent + Inbox (requires board unpause).

---

## Next actions

| # | Action | Owner | Due |
|---|--------|-------|-----|
| 1 | Reply to Murad (Merck Iraq) — propose 2–3 afternoon slots this week + Teams/Zoom link | Mohammad Alsaadany | **2026-06-16** |
| 2 | Board decision: Middle East Leaders award pitch — pursue or archive | CEO | Optional |
| 3 | Route Gorsky HCP panel inquiry to field ops if recruiting | FieldOperationsManager | 2026-06-18 |
| 4 | Full 90-day GW inbox audit via BrowserAgent (if board needs certification) | COO → BrowserAgent | Blocked on BrowserAgent pause + GW creds |
