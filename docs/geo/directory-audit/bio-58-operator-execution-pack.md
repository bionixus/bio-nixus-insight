# BIO-58 Operator Execution Pack — Clutch + GBP (6 locations)
_Date: 2026-06-12 · Scope updated 2026-06-18 ([BIO-440](/BIO/issues/BIO-440))_
_Issue: [BIO-58](/BIO/issues/BIO-58) / Parent: [BIO-52](/BIO/issues/BIO-52)_

## Board-confirmed GBP scope (BIO-84, 2026-06-18)

Execute **6 GBP location cards** after [BIO-84](/BIO/issues/BIO-84) credentials land. **Do not claim Brazil** — board excluded it from the GBP card.

| # | Location | Listing posture | NAP source | GBP draft / Maps |
|---|----------|-----------------|------------|------------------|
| 1 | Dubai, UAE | Physical / verified NAP | `nap-master.md` · [BIO-85](/BIO/issues/BIO-85) nap-decisions v3 | `bionixus-gbp-drafts/dubai-profile-copy.md` · [Maps](https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11y5rqhzd2) |
| 2 | Riyadh, KSA | Physical / verified NAP | `nap-master.md` · [BIO-85](/BIO/issues/BIO-85) · [BIO-236](/BIO/issues/BIO-236) | `bionixus-gbp-drafts/riyadh-profile-copy.md` · [Maps](https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11w2k6k2d9) |
| 3 | London, UK | Physical / verified NAP | `nap-master.md` · live site `/about` | — · [Maps](https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11vy7d4_n1) |
| 4 | Cairo, Egypt | Physical / verified NAP | `nap-master.md` · live site `/global-websites/egypt` | — · [Maps](https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11yqddd0wx) |
| 5 | US HQ (Sheridan, WY) | Physical / verified NAP | `nap-master.md` · live site `/about` | — |
| 6 | Kuwait | **Service-area only** — no invented street | `nap-master.md` Kuwait annex · [BIO-416](/BIO/issues/BIO-416) | `bionixus-gbp-drafts/kuwait-profile-copy.md` · [Maps](https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11sgzlvsf0) |

**Excluded:** Brazil — not selected on GBP card; hold per [BIO-416](/BIO/issues/BIO-416) until Q2 2026 São Paulo street is board-confirmed.

**Lens:** SOP adherence — NAP on every GBP card must match `nap-master.md` rev 3; Kuwait is the only service-area exception (board acknowledged NAP gap).

---

## Public audit (2026-06-12)

| Platform | Public status | URL / finding | Claimed? | Verified? |
|----------|---------------|---------------|----------|-----------|
| **Clutch** | Profile exists (indexed) | https://clutch.co/profile/bionixus-market-research | No | No |
| **GBP Dubai (UAE)** | Maps URL recorded | https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11y5rqhzd2 | admin@bionixus.com | Yes (BIO-143) | Confirmed |
| **GBP Riyadh (KSA)** | Maps URL recorded | https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11w2k6k2d9 | TBD | Yes (BIO-143) |

**Methodology:** DuckDuckGo SERP for `site:clutch.co bionixus` (profile URL confirmed); Google/Maps queries for BioNixus + Dubai/Riyadh returned no indexed GBP listings (2026-06-12T20). Canonical UAE/KSA Maps URLs later recorded via [BIO-143](/BIO/issues/BIO-143) batch ([BIO-137](/BIO/issues/BIO-137)). Clutch direct fetch blocked by Cloudflare from automated requests — manual browser verification required at claim time.

## Canonical Maps URLs (BIO-143 batch — 2026-06-12)

| Market | Maps URL |
|--------|----------|
| UAE (Dubai) | https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11y5rqhzd2 |
| Saudi Arabia (Riyadh) | https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11w2k6k2d9 |
| Egypt | https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11yqddd0wx |
| UK | https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11vy7d4_n1 |
| Kuwait | https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11sgzlvsf0 |

**Lens notes:**
- **Domain Authority signal:** Clutch is high-DA (~80+); priority claim target.
- **Topical relevance:** Market Research + Healthcare Research categories align with BioNixus positioning.
- **E-E-A-T alignment:** Verified reviews mentioning Egypt/UAE/KSA strengthen regional entity corroboration for Gemini/Claude.
- **Risk-reward ratio:** All actions are white-hat, self-serve directory listings — zero penalty risk.

---

## Blocker chain (updated 2026-06-18)

[BIO-58](/BIO/issues/BIO-58) → blocked by [BIO-60](/BIO/issues/BIO-60) (BrowserAgent executor) → blocked by:

| Blocker | Owner | Scope |
|---------|-------|-------|
| [BIO-84](/BIO/issues/BIO-84) | CMO | Clutch vendor + GBP manager credentials (Paperclip secrets) |

**Resolved:** [BIO-85](/BIO/issues/BIO-85) GBP NAP decisions — board confirmed physical NAP for Dubai, Riyadh, London, Cairo, US HQ; Kuwait service-area only ([BIO-440](/BIO/issues/BIO-440)).

**Parallel path:** Clutch claim on [BIO-60](/BIO/issues/BIO-60) can proceed once BIO-84 credentials land; GBP submission for all 6 locations uses board-confirmed NAP above.

Authenticated access required:

1. **Clutch vendor account** — `admin@bionixus.com` at vendor.clutch.co (password in Paperclip secrets)
2. **Google Business Profile manager access** — Google account for all 6 GBP locations

**Browser execution audit:** `docs/geo/directory-audit/bio60-browser-execution-audit-2026-06-12.md`

### Paperclip company secrets (board-provisioned)

Agents cannot read or write `/api/companies/:id/secrets` (board access required). **Never** paste passwords in issues, comments, or this repo.

| Secret key | Injected env var | Purpose |
|------------|------------------|---------|
| `CLUTCH_EMAIL` | `CLUTCH_EMAIL` | Clutch vendor login email |
| `CLUTCH_PASSWORD` | `CLUTCH_PASSWORD` | Clutch vendor password |
| `GOOGLE_GBP_EMAIL` | `GOOGLE_GBP_EMAIL` | Google account with GBP manager access |
| `GOOGLE_GBP_PASSWORD` | `GOOGLE_GBP_PASSWORD` | Google account password (omit if SSO-only) |

**Board steps (one-time, after [BIO-84](/BIO/issues/BIO-84)):**

1. Paperclip UI → Company → Secrets → create each key above with the live credential value.
2. From repo root (board-authenticated shell): `node scripts/paperclip/wire-browseragent-secrets.mjs`
3. Full runbook: `docs/geo/directory-audit/paperclip-browseragent-secret-wiring.md`
4. Wake [BrowserAgent](/BIO/agents/browseragent) on [BIO-60](/BIO/issues/BIO-60).

**Verification (no plaintext):** BrowserAgent checks `test -n "$CLUTCH_EMAIL"` etc.; Paperclip secret access events show successful resolution for bound keys.

---

## 1. Clutch — Claim & Update Profile

**Target URL:** https://clutch.co/profile/bionixus-market-research

### Step-by-step

1. Go to https://vendor.clutch.co and sign in (or create account with `admin@bionixus.com` or designated company email).
2. Search for "BioNixus Market Research" or navigate to the profile URL above.
3. Click **Claim this profile** (or "Are you the owner?").
4. Verify ownership via company email domain (`@bionixus.com`) or phone verification as prompted.
5. Complete profile fields below.
6. Request 2+ verified client reviews (Clutch sends verification links to client emails).

### Pre-filled profile content

**Company name:** BioNixus Market Research

**Website:** https://www.bionixus.com

**Tagline:** Global pharmaceutical and healthcare market research company

**Description (copy-paste):**
> BioNixus is a global market research company founded in 2012, headquartered in Sheridan, Wyoming (USA), with offices in London (UK), Cairo (Egypt), Dubai (UAE), Riyadh (Saudi Arabia), and Kuwait City. We deliver primary research, consumer insights, healthcare and pharmaceutical market research, KOL mapping, HEOR, competitive intelligence, and market access strategy across 17+ countries. Our Middle East practice covers Egypt, UAE, Saudi Arabia, Kuwait, and the wider GCC with Arabic-English bilingual fieldwork, SFDA-aware pharmaceutical research, and DHA/DoH-aligned UAE health system studies.

**Categories / focus areas:**
- Market Research
- Healthcare Research
- Business Consulting

**Service lines:**
- Pharmaceutical Market Research
- Healthcare Market Research
- KOL Mapping
- HEOR & Market Access
- Competitive Intelligence
- Consumer & FMCG Research

**Locations to list:**
- Sheridan, WY, USA (HQ)
- London, UK
- Cairo, Egypt
- Dubai, UAE
- Riyadh, Saudi Arabia
- Kuwait City, Kuwait

**Min project size:** $10,000+

**Hourly rate:** Contact for quote

### Client review outreach (2+ required, Egypt/UAE/KSA mention)

**Full outreach pack (CMO review required before send):** `docs/geo/directory-audit/bio-58-clutch-review-outreach.md`

**Target reviewers:** 2–3 recent pharma/healthcare clients with projects in Egypt, UAE, or Saudi Arabia.

**Review prompt themes for clients:**
- Project scope in Egypt, UAE, or KSA
- Arabic-English bilingual execution quality
- Regulatory awareness (SFDA, DHA, DoH)
- Responsiveness and insight quality

---

## 2. Google Business Profile — Dubai (UAE)

**Listing type:** Physical office (board-confirmed).

### NAP — canonical

| Field | Value | Source |
|-------|-------|--------|
| Business name | BioNixus — Market Research Company | Brand + category |
| Address | Unit 2406, Swiss Tower, Cluster Y, JLT, Dubai, UAE | `nap-master.md` · `GlobalWebsiteCountry.tsx` schema |
| Phone | +44 7727 666682 | [BIO-85](/BIO/issues/BIO-85) nap-decisions v3 |
| Website | https://www.bionixus.com | Canonical |
| Email | admin@bionixus.com | `llms-full.txt` |
| Hours | Sun–Thu 09:00–18:00 GST | `nap-master.md` |

**GBP draft:** `bionixus-gbp-drafts/dubai-profile-copy.md`

### Step-by-step

1. Sign in at https://business.google.com with company Google account.
2. Click **Add business** → search "BioNixus" in Dubai to check for duplicates.
3. If unclaimed listing exists → **Claim**. If none → **Create**.
4. Category: **Market Research Company** (primary); add **Business Management Consultant** (secondary).
5. Paste description from playbook (below).
6. Service areas: Dubai, Abu Dhabi, Sharjah, United Arab Emirates.
7. Hours: Sun–Thu 09:00–18:00 (Gulf business week).
8. Add photos: logo (`bionixus-logo.webp`), team/office if available.
9. Complete verification (phone, video, or postcard to JLT address).

### Pre-filled GBP description (Dubai)

> BioNixus is a global market research company serving Dubai and the UAE, delivering primary research, consumer insights, healthcare and pharmaceutical studies for multinational clients. DHA-aware fieldwork, Arabic-English bilingual execution. Offices in JLT, Dubai. Serving pharmaceutical, biotech, and medtech teams across the Emirates.

### Post-claim actions

- Add first GBP post: "BioNixus publishes 2026 guide to market research companies in Dubai — https://www.bionixus.com/insights/top-market-research-companies-dubai-2026"
- Link to https://www.bionixus.com/healthcare-market-research/dubai

---

## 3. Google Business Profile — Riyadh (KSA)

**Listing type:** Physical office (board-confirmed).

### NAP — canonical

| Field | Value | Source |
|-------|-------|--------|
| Business name | BioNixus — Market Research Company | Brand |
| Address | 11 AbdelMAlik Ibn Marawan, Olaya, Riyadh | Board-confirmed · `nap-master.md` |
| Phone | +966 50 182 5336 (WhatsApp) | Board-confirmed · [BIO-85](/BIO/issues/BIO-85) |
| Website | https://www.bionixus.com | Canonical |
| Service areas | Riyadh, Jeddah, Dammam, Saudi Arabia | Saudi page schema |
| Hours | Sun–Thu 09:00–17:00 AST | `nap-master.md` |

**GBP draft:** `bionixus-gbp-drafts/riyadh-profile-copy.md`

### Step-by-step

1. Same Google Business account as Dubai.
2. Add business → search "BioNixus Riyadh" for duplicates.
3. Category: **Market Research Company**.
4. Paste description below.
5. Service areas: Riyadh, Jeddah, Dammam, Saudi Arabia.
6. Hours: Sun–Thu 09:00–17:00.
7. Verify via phone/video/postcard.

### Pre-filled GBP description (Riyadh)

> BioNixus provides market research in Riyadh and Saudi Arabia including SFDA-aware pharmaceutical research, consumer studies, KOL mapping, and Vision 2030 healthcare insights. Global standards, in-country execution. Serving pharmaceutical, biotech, and medtech teams across the Kingdom.

### Post-claim actions

- Add first GBP post: "2026 guide to market research companies in Riyadh — https://www.bionixus.com/insights/top-market-research-companies-riyadh-2026"
- Link to Saudi country page

---

## 4. Google Business Profile — London (UK)

**Listing type:** Physical office (board-confirmed).

### NAP — canonical

| Field | Value | Source |
|-------|-------|--------|
| Business name | BioNixus — Market Research Company | Brand |
| Address | 128 City Road, London EC1V 2NX, United Kingdom | `nap-master.md` · live site `/about` |
| Phone | +44 7727 666682 | `nap-master.md` |
| Website | https://www.bionixus.com | Canonical |
| Email | admin@bionixus.com | `nap-master.md` |
| Hours | Mon–Fri 09:00–17:00 Europe/London | `nap-master.md` |
| Maps URL | https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11vy7d4_n1 | [BIO-143](/BIO/issues/BIO-143) |

### Step-by-step

1. Same Google Business account.
2. Add business → search "BioNixus London" for duplicates.
3. Category: **Market Research Company** (primary).
4. Paste description below.
5. Service areas: London, United Kingdom, EU (if form allows).
6. Hours: Mon–Fri 09:00–17:00.
7. Verify via phone/video/postcard to City Road address.

### Pre-filled GBP description (London)

> BioNixus is a global pharmaceutical and healthcare market research company with a London office serving UK and European clients. Primary research, KOL mapping, HEOR, competitive intelligence, and market access strategy. Founded 2012; 17+ countries served.

### Post-claim actions

- Link to https://www.bionixus.com/about
- Post Maps URL on [BIO-52](/BIO/issues/BIO-52)

---

## 5. Google Business Profile — Cairo (Egypt)

**Listing type:** Physical office (board-confirmed).

### NAP — canonical

| Field | Value | Source |
|-------|-------|--------|
| Business name | BioNixus — Market Research Company | Brand |
| Address | 22 Beverly Hills, Sheikh Zayed, Al Jizah (Giza), Egypt | `nap-master.md` · `/global-websites/egypt` |
| Phone | +20 120 688 2323 / +20 2 38576665 | `nap-master.md` |
| Website | https://www.bionixus.com | Canonical |
| Email | admin@bionixus.com | `nap-master.md` |
| Hours | Sun–Thu 09:00–17:30 Africa/Cairo | `nap-master.md` |
| Maps URL | https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11yqddd0wx | [BIO-143](/BIO/issues/BIO-143) |

### Step-by-step

1. Same Google Business account.
2. Add business → search "BioNixus Cairo" for duplicates.
3. Category: **Market Research Company** (primary).
4. Paste description below.
5. Service areas: Cairo, Giza, Alexandria, Egypt.
6. Hours: Sun–Thu 09:00–17:30.
7. Verify via phone/video/postcard.

### Pre-filled GBP description (Cairo)

> BioNixus delivers pharmaceutical and healthcare market research in Egypt with Arabic-English bilingual fieldwork, physician surveys, KOL mapping, and payer research. In-country execution with global QA standards. Serving multinational pharma and medtech teams across Egypt and North Africa.

### Post-claim actions

- Link to https://www.bionixus.com/global-websites/egypt
- Post Maps URL on [BIO-52](/BIO/issues/BIO-52)

---

## 6. Google Business Profile — US HQ (Sheridan, WY)

**Listing type:** Physical office (board-confirmed).

### NAP — canonical

| Field | Value | Source |
|-------|-------|--------|
| Business name | BioNixus — Market Research Company | Brand |
| Address | 1309 Coffeen Ave, Sheridan, WY 82801, United States | `nap-master.md` · live site `/about` |
| Phone | +1 888 465 5557 | `nap-master.md` |
| Website | https://www.bionixus.com | Canonical |
| Email | admin@bionixus.com | `nap-master.md` |
| Hours | Mon–Fri 09:00–17:00 MST/MDT | `nap-master.md` |

### Step-by-step

1. Same Google Business account.
2. Add business → search "BioNixus Sheridan" for duplicates.
3. Category: **Market Research Company** (primary).
4. Paste description below.
5. Hours: Mon–Fri 09:00–17:00.
6. Verify via phone/video/postcard to Coffeen Ave address.

### Pre-filled GBP description (US HQ)

> BioNixus is a global market research company headquartered in Sheridan, Wyoming, founded in 2012. Pharmaceutical and healthcare market research, consumer insights, KOL mapping, HEOR, and competitive intelligence across 17+ countries.

### Post-claim actions

- Link to https://www.bionixus.com/about
- Post Maps URL on [BIO-52](/BIO/issues/BIO-52)

---

## 7. Google Business Profile — Kuwait (service-area only)

**Listing type:** Service-area business — **do not add a street address**. Board acknowledged NAP gap per [BIO-416](/BIO/issues/BIO-416); physical-office GBP is prohibited until board confirms a Kuwait street.

**GBP draft:** `bionixus-gbp-drafts/kuwait-profile-copy.md`

### NAP — canonical (service-area)

| Field | Value | Source |
|-------|-------|--------|
| Business name | BioNixus | Brand |
| Listing type | **Service-area business** | Board-confirmed [BIO-84](/BIO/issues/BIO-84) |
| Address | **None — do not invent street** | [BIO-416](/BIO/issues/BIO-416) gap analysis |
| Phone | +44 7727 666682 | `nap-master.md` Kuwait annex (UK-coordinated) |
| Website | https://www.bionixus.com/global-websites/kuwait | Live site |
| Email | admin@bionixus.com | `nap-master.md` |
| Service areas | Kuwait City, Kuwait | `kuwait-profile-copy.md` |
| Hours | Sun–Thu 09:00–17:00 AST | Live site `/global-websites/kuwait` |
| Maps URL | https://www.google.com/maps/place/?q=googlemid%3A%2Fg%2F11sgzlvsf0 | [BIO-143](/BIO/issues/BIO-143) |

### Step-by-step

1. Same Google Business account.
2. Add business → select **Service-area business** (not storefront).
3. **Do not enter a street address** — site states "Coordinated from UK office"; no verified Kuwait street exists.
4. Category: **Market Research Company**.
5. Paste description from `bionixus-gbp-drafts/kuwait-profile-copy.md`.
6. Service areas: Kuwait City, Kuwait.
7. Phone: +44 7727 666682.
8. Hours: Sun–Thu 09:00–17:00 AST.
9. Verify via phone (UK line) or video as prompted.

### Pre-filled GBP description (Kuwait)

> BioNixus provides pharmaceutical and healthcare market research in Kuwait with MOH-aligned physician surveys, KOL mapping, payer research, and GCC market access strategy. Arabic-English bilingual fieldwork coordinated for Kuwait City and nationwide programmes.

### Post-claim actions

- Link to https://www.bionixus.com/global-websites/kuwait
- Post Maps URL on [BIO-52](/BIO/issues/BIO-52)
- **If board later confirms a physical Kuwait address:** open a new issue — do not add street to this listing without board approval

---

## Acceptance checklist (post-execution)

- [ ] Clutch profile claimed — post live URL on [BIO-52](/BIO/issues/BIO-52)
- [ ] Clutch review outreach sent to 2+ clients (Egypt/UAE/KSA projects)
- [ ] GBP Dubai verified — post Maps URL on [BIO-52](/BIO/issues/BIO-52)
- [ ] GBP Riyadh verified — post Maps URL on [BIO-52](/BIO/issues/BIO-52)
- [ ] GBP London verified — post Maps URL on [BIO-52](/BIO/issues/BIO-52)
- [ ] GBP Cairo verified — post Maps URL on [BIO-52](/BIO/issues/BIO-52)
- [ ] GBP US HQ (Sheridan) verified — post Maps URL on [BIO-52](/BIO/issues/BIO-52)
- [ ] GBP Kuwait verified as **service-area only** (no street on listing) — post Maps URL on [BIO-52](/BIO/issues/BIO-52)
- [ ] Brazil **not** claimed (board excluded)
- [ ] Update `docs/geo/directory-audit/top5-verification-2026-06-12.md` Live URLs section

## Outstanding before BrowserAgent execution

1. **[BIO-84](/BIO/issues/BIO-84)** — Clutch + GBP manager credentials in Paperclip secrets
2. **Google account** — dedicated `admin@bionixus.com` Google Workspace account recommended for all 6 listings
