# GCC Outreach Sequence Templates — Sequences A, B, C

**Issue:** BIO-73  
**Source plan:** [BIO-43 GCC BD Plan](/BIO/issues/BIO-43#document-plan) Section 7  
**Version:** 1.2  
**Date:** 12 June 2026  
**Author:** Copywriter  
**Status:** CFO frozen proof points + rate-card gate applied ([BIO-117](/BIO/issues/BIO-117)) — pending CMO re-review and COO external-send approval

**Revision reference:** [BIO-79 external-send-gate](/BIO/issues/BIO-79#document-external-send-gate) (12 consolidated items applied 12 Jun 2026); [BIO-117 CFO sign-off](/BIO/issues/BIO-117#document-cfo-signoff) (frozen 127+/48 language + pricing removal applied 12 Jun 2026)

---

## Governance

| Gate | Owner | Requirement |
|------|-------|-------------|
| External send | COO | No sequence may be deployed until COO approves final templates |
| Voice compliance | CMO | Brand voice, proof points, and CTA alignment |
| Pricing references | CFO | Any quoted ranges must match approved rate card before use in live outreach |
| Account research (Seq B Touch 1) | BD / Business Development | Account brief must be completed before Touch 2 |
| Proof-point numbers | CFO | Frozen 127+/48 blocks inlined per [BIO-117](/BIO/issues/BIO-117) — do not edit without CFO refresh |
| Collateral links | CMO | `{{one_pager_link}}` and `{{intelligence_link}}` must be live, tracked assets |
| Calendar link | BD Manager | `{{calendar_link}}` must be live and token-tracked per contact |
| Source verification | BD / Data Analyst | `{{insight_snippet}}` and `{{peer_outcome}}` field-confirmed before send |
| Regional NAP | CMO | Signature and office references must match verified GCC NAP (see below) |

**Do not send externally until COO and CMO sign off and all prerequisite gates are green.**

### Verified GCC NAP (outreach use)

| Field | Approved value |
|-------|----------------|
| Brand line | BioNixus \| Medical Intelligence for Healthcare Growth |
| GCC offices | Saudi Arabia · United Arab Emirates · Kuwait |
| Regional offices | London, United Kingdom · Cairo, Egypt |
| Global HQ | Sheridan, Wyoming, United States |
| Contact email | admin@bionixus.com |

Use GCC office references only where regional presence is relevant. Do not invent local phone numbers or street addresses in outreach copy.

---

## Personalization Token Glossary

Replace tokens at send time. Tokens in `{{double_braces}}` are required unless noted optional in the account brief.

| Token | Description | Example / default |
|-------|-------------|-------------------|
| `{{first_name}}` | Prospect first name | Sarah |
| `{{last_name}}` | Prospect last name | Al-Rashid |
| `{{company}}` | Prospect company | Novartis |
| `{{title}}` | Prospect job title | Head of Market Access GCC |
| `{{therapy_area}}` | Target therapy area | oncology |
| `{{country}}` | Primary GCC market | Saudi Arabia |
| `{{access_body}}` | Relevant payer/regulator | NUPCO |
| `{{content_asset}}` | Inbound trigger asset | GCC Market Access Guide |
| `{{content_page}}` | URL or page title visited | NUPCO tender intelligence page |
| `{{insight_snippet}}` | One-line therapy/country data point | BD/Data-confirmed before send |
| `{{peer_outcome}}` | Anonymised similar-brand result | reduced tender-cycle surprises by structuring payer evidence ahead of NUPCO planning |
| `{{proof_point_line}}` | Legacy token — **do not use in send bodies**; proof points are frozen inline per touch (see CFO blocks below) | — |
| `{{sender_name}}` | Sender full name | Alex Morgan |
| `{{sender_title}}` | Sender title | Business Development, BioNixus |
| `{{sender_phone}}` | Sender direct line (if used) | BD Manager to supply |
| `{{calendar_link}}` | 15-min booking URL | `https://www.bionixus.com/contact?utm_source=gcc_outreach&utm_medium=email&utm_campaign=discovery_15min` — per-touch UTM variants in `docs/bd/bio-119/calendar-link-registry.md` |
| `{{one_pager_link}}` | GCC Access Snapshot PDF | https://www.bionixus.com/market-reports/gcc-oncology-market-report |
| `{{intelligence_link}}` | Relevant GCC intel asset | https://www.bionixus.com/market-reports/competitive-intelligence-pharma-gcc |
| `{{intel_highlight_1}}` | Intel asset bullet 1 | CMO/SEO-verified point |
| `{{intel_highlight_2}}` | Intel asset bullet 2 | CMO/SEO-verified point |
| `{{intel_highlight_3}}` | Intel asset bullet 3 (optional) | CMO/SEO-verified point |
| `{{proposal_name}}` | Prior proposal title | GCC Launch Readiness — {{therapy_area}} |
| `{{launch_program}}` | Known launch or access milestone | 2027 {{therapy_area}} launch |
| `{{incumbent_vendor}}` | Current research vendor if known | Kantar |
| `{{prior_sender_name}}` | Prior BD sender (Seq B T6 only) | Alex Morgan |

**Sender defaults:** Business Development for all operational outreach; BD Manager for strategic accounts; CEO/COO only for Sequence B Touch 6 after qualification.

### CFO frozen proof-point blocks (BIO-117 — do not edit without CFO refresh)

| Block | Use in | Frozen language |
|-------|--------|-----------------|
| A — Full | Sequence A Touch 1 | We have delivered **127+ healthcare research projects** for **48 global clients**, with offices in Saudi Arabia, UAE, and Kuwait. |
| A — Short | Sequence B Touch 6 | **127+ projects delivered** for **48 global clients**. |
| B — Short | Sequence B Touch 3 | We are a specialist healthcare research firm (**127+ projects**, offices in KSA, UAE, and Kuwait), not a syndicated data provider. |
| C — Extended | One-pagers only (not email bodies) | 17+ countries · 14+ therapeutic areas · 127+ projects · 48 global clients |

Source: `docs/bd/bio-117-cfo-gcc-outreach-signoff.md`

**Standard signature block** (append to every email body; do not repeat contact lines inside message text):

```
{{sender_name}}
{{sender_title}}
BioNixus | Medical Intelligence for Healthcare Growth
admin@bionixus.com
```

---

## Sequence A — Market Access Leader (Post-Content Engagement)

**Trigger:** Downloaded GCC access guide, visited NUPCO/DHA pages, or webinar attendee.  
**Primary persona:** Market Access Lead (Head of MA GCC, Pricing & Reimbursement Manager).  
**Objective:** Convert warm intent into a 15-minute discovery call, then GCC Access Snapshot scoping conversation.  
**AIDA arc:** Acknowledge interest (Attention) → local access depth (Interest) → tender-risk proof pattern (Desire) → call / one-pager (Action).

---

### Touch 1 — Day 0 | Email

**Angle:** Acknowledge interest; offer 15-min access landscape call.  
**CTA:** Book a 15-minute call.

**Subject line options (A/B test):**
1. `{{access_body}} evidence planning for {{therapy_area}} in {{country}}`
2. `Following your interest in {{content_asset}}`
3. `{{country}} {{therapy_area}} access — payer landscape note`

**Body:**

```
Hi {{first_name}},

You recently engaged with our {{content_asset}} — given your role in market access at {{company}}, a short conversation on {{country}} payer evidence may be useful.

BioNixus conducts primary payer and regulator research across the GCC — including {{access_body}}, SFDA, DHA, and MOHAP pathways — for global pharma teams planning market access and tender evidence strategies. We have delivered 127+ healthcare research projects for 48 global clients, with offices in Saudi Arabia, UAE, and Kuwait.

Would a 15-minute call next week help you pressure-test your {{country}} access assumptions for {{launch_program}}?

{{calendar_link}}

If timing is tight, reply with your priority market and therapy area — I will send a relevant one-page landscape summary instead.

{{sender_name}}
{{sender_title}}
BioNixus | Medical Intelligence for Healthcare Growth
admin@bionixus.com
```

**Personalization notes:**
- Lead with the specific content trigger — never open with a generic pitch.
- If `{{content_page}}` is known instead of `{{content_asset}}`, swap the first sentence accordingly.
- If therapy area or launch program is unknown, ask in the CTA rather than guessing.
- Do not quote project fees in Touch 1.

---

### Touch 2 — Day 4 | LinkedIn

**Angle:** Connect + share relevant therapy/country insight.  
**CTA:** Accept connection; optional reply to insight.

**Connection request (300 char max):**

```
Hi {{first_name}} — I work with GCC market access teams on payer evidence for {{therapy_area}} in {{country}}. Saw your interest in {{content_asset}}. Happy to share a useful data point if we connect.
```

**Follow-up message (after connection accepted):**

```
Thanks for connecting, {{first_name}}.

One pattern we are seeing in {{country}} {{therapy_area}} access: brands that map {{access_body}} evidence requirements early reduce last-minute dossier gaps at tender stage. {{insight_snippet}}

If useful, I can share how teams structure a 6–8 week GCC Access Snapshot before a full multi-country programme. No pitch — just the framework.

{{sender_name}}
```

**Personalization notes:**
- `{{insight_snippet}}` must be verified by BD/Data Analyst before send.
- Keep the connection note under 300 characters.

---

### Touch 3 — Day 10 | Email

**Angle:** Case pattern — how brands reduce {{access_body}} tender surprises.  
**CTA:** Reply to discuss applicability to {{company}}.

**Subject line options:**
1. `How brands reduce {{access_body}} tender surprises`
2. `{{therapy_area}} access in {{country}} — a pattern worth sharing`
3. `Before your next {{access_body}} planning cycle`

**Body:**

```
Hi {{first_name}},

Global teams preparing {{therapy_area}} access in {{country}} often find payer evidence requirements diverge from central dossiers — especially at {{access_body}}.

A pattern we see work:

1. **Map payer evidence requirements early** — interview 8–12 {{access_body}}/MOH stakeholders before internal dossier planning milestones
2. **Pressure-test tender narrative** — validate price corridor and clinical-economic story against local comparator practice
3. **Build a refresh cadence** — access rules shift; point-in-time evidence goes stale within 12–18 months

BioNixus applied this approach for a global specialty pharma brand in the GCC immunology space — outcome: {{peer_outcome}}.

If {{company}} is navigating {{launch_program}}, I am happy to walk through what a scoped {{country}} access diagnostic would look like — 15 minutes, no obligation.

Reply with your priority market, or book here: {{calendar_link}}

{{sender_name}}
{{sender_title}}
BioNixus | Medical Intelligence for Healthcare Growth
admin@bionixus.com
```

**Personalization notes:**
- Swap `NUPCO` for `DHA/DOH` or `CAP` when `{{country}}` is UAE or Kuwait.
- `{{peer_outcome}}` must be BD/COO-confirmed and anonymised before send.
- Do not name the client in the case pattern unless COO approves.

---

### Touch 4 — Day 18 | Phone / LinkedIn

**Angle:** Direct meeting request.  
**CTA:** Confirm 20-minute meeting.

**LinkedIn message (if no email reply):**

```
Hi {{first_name}} — I have reached out by email on {{country}} {{therapy_area}} access. Rather than add more inbox noise: would a 20-minute call the week of {{meeting_week}} be useful to compare notes on {{access_body}} evidence planning?

If not the right time, a one-line reply helps me close the loop.

{{sender_name}}
```

**Phone talk track (voicemail / live):**

```
Hi {{first_name}}, this is {{sender_name}} from BioNixus. I have sent a couple of notes on {{country}} market access for {{therapy_area}} following your interest in {{content_asset}}. I would value 20 minutes to understand your {{access_body}} timeline for {{launch_program}} and share one relevant insight from our GCC work. My number is {{sender_phone}}. You can also book directly at {{calendar_link}}. Thanks.
```

**Personalization notes:**
- Phone attempt: one call + one voicemail max before reverting to email.
- Reference prior touches explicitly — this is a warm follow-up, not cold outreach.
- `{{meeting_week}}` and `{{sender_phone}}` supplied at send time from CRM.

---

### Touch 5 — Day 28 | Email (Break-Up)

**Angle:** Offer GCC Access Snapshot one-pager; graceful close.  
**CTA:** Download one-pager or reply "not now."

**Subject line options:**
1. `Closing the loop — GCC Access Snapshot for {{country}}`
2. `Last note: {{therapy_area}} access one-pager`
3. `Should I step back for now?`

**Body:**

```
Hi {{first_name}},

I have not heard back, so I will keep this brief.

If {{company}} is still shaping {{country}} access strategy for {{therapy_area}}, our GCC Access Snapshot one-pager outlines a typical 6–8 week scope: payer interviews, pathway mapping, and tender-risk flags for {{access_body}}. Download here: {{one_pager_link}}

**What it covers:**
- {{country}} regulator and payer landscape for {{therapy_area}}
- Evidence gaps global dossiers commonly miss
- Indicative timeline for a single-country diagnostic

If the timing is not right, reply "not now" and I will pause outreach. If priorities shift later, you have a direct line to me.

{{sender_name}}
{{sender_title}}
BioNixus | Medical Intelligence for Healthcare Growth
admin@bionixus.com
```

**Personalization notes:**
- Break-up emails should feel consultative, not guilt-driven.
- Do not include pricing in this touch until CFO rate card is approved (see operational checklist).

---

## Sequence B — Cold Tier-1 Account

**Trigger:** ICP-fit Tier-1 account with no prior engagement.  
**Primary personas:** Market Access Lead, GCC Commercial Director, Regional Insights Manager.  
**Objective:** Earn a discovery call through insight-led outreach; escalate to exec intro only when BANT-qualified.  
**AIDA arc:** Research credibility (Attention) → no-pitch connect (Interest) → therapy insight (Desire) → peer proof + multi-thread (Action).

---

### Touch 1 — Day 0 | Research (Internal — Not Sent)

**Angle:** Account brief — launches, incumbents, hypothesis.  
**Owner:** Business Development.

**Account brief template (complete before Touch 2):**

```markdown
## Account Brief — {{company}}

**Date researched:** [DATE]
**Researcher:** [NAME]
**ICP score:** [0–12] — Qualified / Nurture / Deprioritise

### Firmographic fit
- GCC presence: [KSA / UAE / both / hub only]
- Therapy focus: {{therapy_area}}
- Estimated GCC-addressable research spend: [RANGE — BD estimate]

### Active milestones (≤18 months)
- {{launch_program}}
- Access / tender events: [DETAIL]
- Known pipeline assets: [DETAIL — public sources only]

### Incumbent vendors
- {{incumbent_vendor}} — scope if known: [DETAIL]
- Last RFP / renewal signal: [DATE or UNKNOWN]

### Contact map
| Name | Title | Channel | Hypothesis |
|------|-------|---------|------------|
| {{first_name}} {{last_name}} | {{title}} | Email / LinkedIn | [WHY THIS PERSON] |
| [Secondary — MA] | | | |
| [Secondary — Commercial] | | | |

### Outreach hypothesis
[One sentence: why BioNixus, why now, which entry offer fits]

### Proof to use (verify before Touch 3 send)
- Insight snippet: {{insight_snippet}} — [SOURCE: BD/Data confirmation required]
- Peer outcome: {{peer_outcome}} — [anonymised — COO approval required]

### Do-not-send flags
- [ ] Active RFP in flight with incumbent
- [ ] Do-not-contact request on file
- [ ] Wrong persona identified
- [ ] {{insight_snippet}} not yet verified
- [ ] {{peer_outcome}} not yet confirmed
```

---

### Touch 2 — Day 1 | LinkedIn

**Angle:** Connect with personalised note — no pitch.  
**CTA:** Accept connection.

**Connection request (300 char max):**

```
Hi {{first_name}} — I follow {{company}}'s GCC work in {{therapy_area}}. I support market access and launch research across KSA/UAE at BioNixus. Would value connecting with peers in the space.
```

**Alternative (if launch is public knowledge):**

```
Hi {{first_name}} — I work with GCC pharma teams on access evidence ahead of launches like {{launch_program}}. Not pitching — just connecting with {{title}} peers in the region.
```

**Personalization notes:**
- No product mention, no calendar link, no "I'd love to pick your brain."
- Reference only publicly available launch/access news.

---

### Touch 3 — Day 5 | Email

**Angle:** Insight-led — payer signal on their therapy in GCC.  
**CTA:** Reply with interest or pass to the right colleague.

**Subject line options:**
1. `{{therapy_area}} access in {{country}} — payer signal for {{company}}`
2. `GCC {{therapy_area}} — {{access_body}} landscape for {{first_name}}`
3. `{{company}} + {{country}} market access planning`

**Body:**

```
Hi {{first_name}},

I have been following {{company}}'s position in {{therapy_area}} across the GCC. One development worth flagging for your {{country}} planning:

{{insight_snippet}}

BioNixus conducts primary research for global pharma teams in markets where payer reality diverges from EU/US dossiers — SFDA, {{access_body}}, DHA, and MOHAP included. We are a specialist healthcare research firm (127+ projects, offices in KSA, UAE, and Kuwait), not a syndicated data provider.

If this is relevant to {{launch_program}}, I can share a short framework for scoping a {{country}} access diagnostic. If someone else owns this at {{company}}, happy to be redirected.

{{sender_name}}
{{sender_title}}
BioNixus | Medical Intelligence for Healthcare Growth
admin@bionixus.com
```

**Personalization notes:**
- `{{insight_snippet}}` is mandatory and must be sourced — never fabricate statistics.
- Keep email under 150 words excluding signature.

---

### Touch 4 — Day 12 | Email

**Angle:** Peer proof — anonymised similar-brand outcome.  
**CTA:** 15-minute call to compare approach.

**Subject line options:**
1. `How a peer brand approached {{country}} {{therapy_area}} access`
2. `Anonymised GCC case — {{therapy_area}}`
3. `Re: {{therapy_area}} in {{country}}`

**Body:**

```
Hi {{first_name}},

A global specialty pharma team with a similar GCC footprint faced the same challenge: strong central evidence, but local payer committees asking for budget-impact and comparator context that global models did not answer.

They commissioned a focused GCC access programme — payer interviews, pathway mapping, and tender narrative testing — and achieved {{peer_outcome}}.

If {{company}} is weighing a comparable move ahead of {{launch_program}}, a 15-minute call could clarify what a right-sized first step looks like.

{{calendar_link}}

{{sender_name}}
{{sender_title}}
BioNixus | Medical Intelligence for Healthcare Growth
admin@bionixus.com
```

**Personalization notes:**
- Do not identify the peer brand unless COO approves named reference.
- `{{peer_outcome}}` must be BD/COO-confirmed before send.
- If Touch 3 got a reply, customise Touch 4 to reference their response.

---

### Touch 5 — Day 21 | Multi-Thread Email

**Angle:** Reach MA + commercial if no response from primary contact.  
**CTA:** Intro call with whichever stakeholder owns the milestone.

**Subject line (primary — bump):**
`Re: {{therapy_area}} access — still useful?`

**Subject line (secondary — MA thread):**
`{{company}} — {{country}} payer evidence for {{therapy_area}}`

**Subject line (tertiary — commercial thread):**
`{{company}} GCC launch readiness — {{therapy_area}}`

**Body (secondary — Market Access persona):**

```
Hi [MA_CONTACT_NAME],

I have been in touch with {{first_name}} about {{therapy_area}} access planning in {{country}}. In case this sits with market access on your side:

BioNixus helps teams inform {{access_body}} evidence planning before internal submission milestones — primary payer interviews, BIA/CEA inputs, and tender narrative testing. We work from offices in KSA, UAE, and Kuwait.

Would a 15-minute intro be useful? {{calendar_link}}

If you are not the right owner, a quick redirect is appreciated.

{{sender_name}}
{{sender_title}}
BioNixus | Medical Intelligence for Healthcare Growth
admin@bionixus.com
```

**Body (tertiary — Commercial persona):**

```
Hi [COMMERCIAL_CONTACT_NAME],

{{company}}'s GCC commercial teams often need local competitive and launch-readiness evidence that global syndicated data does not cover.

We recently supported a peer brand on {{peer_outcome}} ahead of a {{therapy_area}} launch in {{country}}.

Happy to share the approach in a short call if {{launch_program}} is on your 2026–27 roadmap.

{{sender_name}}
{{sender_title}}
BioNixus | Medical Intelligence for Healthcare Growth
admin@bionixus.com
```

**Personalization notes:**
- Maximum three parallel threads (primary bump + MA + commercial).
- `{{peer_outcome}}` must be confirmed before tertiary thread send.
- Log all threads in CRM to avoid duplicate outreach.

---

### Touch 6 — Day 35 | CEO / COO Intro (Qualified Accounts Only)

**Gate:** BANT ≥3/4 and ICP score ≥7. COO must approve exec send.

**Angle:** Strategic account — executive touch.  
**CTA:** Senior-level exploratory conversation.

**Subject line:**
`BioNixus × {{company}} — GCC {{therapy_area}} research`

**Body (CEO/COO sender):**

```
Dear {{first_name}},

{{sender_name}} (CEO/COO, BioNixus) — my colleague {{prior_sender_name}} has been in touch about {{company}}'s GCC priorities in {{therapy_area}}.

BioNixus is a specialist healthcare and pharmaceutical market research firm with offices in Saudi Arabia, UAE, Kuwait, and Egypt. We help global brands build payer-grade evidence for markets where SFDA, {{access_body}}, and DHA requirements diverge from EU/US dossiers. 127+ projects delivered for 48 global clients.

Given {{launch_program}} and {{company}}'s footprint in the GCC, I would welcome a brief conversation on whether a scoped access or launch-readiness programme would add value this planning cycle.

Would {{meeting_options}} work for a 20-minute call?

{{sender_name}}
CEO / COO
BioNixus | Medical Intelligence for Healthcare Growth
admin@bionixus.com
```

**Personalization notes:**
- Exec touch only after BD documents qualification in CRM.
- CEO/COO should not send without reading account brief (Touch 1).
- `{{meeting_options}}` supplied at send time.

---

## Sequence C — Post-Proposal Nurture (Lost or Stalled)

**Trigger:** Proposal lost, stalled beyond 30 days, or no decision communicated.  
**Primary personas:** Same as original proposal thread.  
**Objective:** Capture win/loss learning; stay top-of-mind with relevant intelligence; re-open ahead of fiscal planning.  
**AIDA arc:** Feedback (Attention) → value-add intel (Interest) → fiscal-cycle re-engage (Action).

---

### Touch 1 — Day 7 | Email — Win/Loss Feedback

**Angle:** Feedback request.  
**CTA:** 5-minute reply or 10-minute call.

**Subject line options:**
1. `Feedback on {{proposal_name}} — your input welcomed`
2. `{{company}} proposal — one brief question`
3. `Improving our GCC programmes — {{proposal_name}}`

**Body:**

```
Hi {{first_name}},

Thank you for considering BioNixus for {{proposal_name}}. We understand priorities shift — no pressure to revisit the scope now.

To help us improve, would you share brief feedback?

1. What drove the decision (timing, budget, incumbent, scope fit, other)?
2. Was there a capability or evidence type you needed that we did not address?
3. Should we stay in touch ahead of your next fiscal or planning cycle?

A short reply is enough. If easier, book 10 minutes: {{calendar_link}}

Your input directly shapes how we scope GCC programmes for peers in {{therapy_area}}.

Thank you,
{{sender_name}}
{{sender_title}}
BioNixus | Medical Intelligence for Healthcare Growth
admin@bionixus.com
```

**Personalization notes:**
- Tone: gracious, not defensive.
- If proposal is stalled (not lost), adjust opening: "I wanted to check whether {{proposal_name}} is still active on your side."

---

### Touch 2 — Day 30 | Email — GCC Intelligence Share

**Angle:** Share new GCC intelligence relevant to their therapy.  
**CTA:** Download / read; optional reply.

**Subject line options:**
1. `New {{therapy_area}} intelligence for {{country}}`
2. `GCC update — relevant to {{company}}`
3. `Thought this might be useful for {{therapy_area}} planning`

**Body:**

```
Hi {{first_name}},

We recently published updated GCC intelligence on {{therapy_area}} in {{country}} — covering {{access_body}} pathway shifts and payer evidence trends.

Link: {{intelligence_link}}

Highlights:
- {{intel_highlight_1}}
- {{intel_highlight_2}}
- {{intel_highlight_3}}

No ask attached — sharing because it maps to the {{proposal_name}} scope we discussed. If it raises questions for {{launch_program}}, I am happy to clarify.

{{sender_name}}
{{sender_title}}
BioNixus | Medical Intelligence for Healthcare Growth
admin@bionixus.com
```

**Personalization notes:**
- `{{intelligence_link}}` and highlight bullets must be live and verified before send.
- Do not re-pitch the proposal in this touch.

---

### Touch 3 — Day 90 | Email — Fiscal Planning Re-Engage

**Angle:** Re-engage ahead of next fiscal planning cycle.  
**CTA:** 15-minute planning call.

**Subject line options:**
1. `{{company}} — planning cycle check-in`
2. `Ahead of FY planning — {{therapy_area}} in GCC`
3. `Re-opening the conversation on {{country}} access`

**Body:**

```
Hi {{first_name}},

As {{company}} heads into FY27 or H2 planning, teams often re-baseline GCC research budgets for {{therapy_area}} — especially where {{access_body}} rules or launch timelines have moved since we last spoke.

Three ways BioNixus typically supports that planning conversation:

1. **GCC Access Snapshot** — single-country payer diagnostic (6–8 weeks)
2. **Launch Landscape Diagnostic** — competitive map + pathway for 2 GCC markets
3. **Fieldwork-only GCC** — HCP quant when design is set but local execution is the gap

If {{proposal_name}} is worth revisiting with updated scope, I would welcome 15 minutes to align on timing and next steps. Pricing and scope bands are shared after a brief discovery call — we do not quote fixed fees in initial outreach.

{{calendar_link}}

If priorities have moved on, a quick "not this cycle" helps me respect your inbox.

{{sender_name}}
{{sender_title}}
BioNixus | Medical Intelligence for Healthcare Growth
admin@bionixus.com
```

**Personalization notes:**
- Reference win/loss feedback from Touch 1 if received.
- Package names align with BIO-43 Section 4.1 entry offers.
- Do not include pricing or indicative budget ranges until CFO rate card is approved (see operational checklist).

---

## Operational Checklist (Per Sequence)

### Before first send
- [ ] COO approved template set
- [ ] CMO voice compliance sign-off (post-revision)
- [x] CFO frozen proof-point blocks inlined (127+/48 — [BIO-117](/BIO/issues/BIO-117))
- [ ] CRM tokens mapped to contact record
- [ ] `{{calendar_link}}` live and token-tracked per contact
- [ ] `{{one_pager_link}}` published (Sequence A Touch 5)
- [ ] `{{intelligence_link}}` and intel highlights verified (Sequence C Touch 2)
- [ ] `{{insight_snippet}}` and `{{peer_outcome}}` field-confirmed by BD/Data — no unverified stats
- [ ] GCC NAP facts verified against governance table
- [x] Pricing/rate language removed from all send bodies until CFO rate card signed ([BIO-117](/BIO/issues/BIO-117))

### Pre-send verification (per touch)
- [ ] No `[[optional_brackets]]`, `[SOURCE NEEDED]`, or drafting placeholders in send queue
- [ ] Account brief complete (Sequence B before Touch 2)
- [ ] Legal terminology reviewed — market research framing only; no regulatory-service or submission-guarantee language
- [ ] Role title uses approved "Business Development" sender convention

### Per-touch logging (Business Development)
- [ ] Send date recorded
- [ ] Channel logged
- [ ] Reply / meeting outcome captured
- [ ] Next touch scheduled or sequence exited

### Exit rules
- **Positive reply at any touch:** Exit sequence; move to discovery / qualified stage.
- **"Not now" reply:** Pause 90 days; add to nurture list.
- **Opt-out / unsubscribe:** Remove from all sequences immediately.
- **Sequence B Touch 6:** Only if BANT-qualified; otherwise extend Sequence B at Touch 5 with quarterly nurture.

### Pricing gate (all sequences)
Until CFO rate card is approved, do not insert pricing, indicative budget bands, or fee ranges in any live send. Sequence A Touch 5 and Sequence C Touch 3 are intentionally pricing-free; add approved rate language only after CFO sign-off and CMO/COO release.

---

## Review Sign-Off

| Reviewer | Role | Status | Date |
|----------|------|--------|------|
| Copywriter | Draft author | Complete | 2026-06-12 |
| Copywriter | CMO revision list applied (v1.1) | Complete | 2026-06-12 |
| CMO | Voice compliance re-review | Pending | |
| CFO | Proof-point + rate-card gates | Approved ([BIO-117](/BIO/issues/BIO-117); templates v1.2) | 2026-06-12 |
| COO | External send approval | Pending | |
| BD Manager | Operational fit | Pending | |

---

*Internal use only. Do not distribute externally until COO approval is recorded.*
