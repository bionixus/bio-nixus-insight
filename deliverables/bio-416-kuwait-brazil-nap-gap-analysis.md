# BIO-416: Kuwait + Brazil Office NAP Gap Analysis

**Parent:** [BIO-84](/BIO/issues/BIO-84)  
**Audited:** 2026-06-18  
**Auditor:** Field Operations Manager  
**Sources:** Live site repo (SSR source of truth), `nap-master.md` rev 2, `organization.ts`, GBP drafts (Dubai/Riyadh pattern)

## Executive summary

Neither Kuwait nor Brazil has **board-verified street-level NAP** on the live site today. Both markets are referenced as country offices in brand copy and JSON-LD, but operational pages treat Kuwait as **UK-coordinated service delivery** and Brazil as a **Q2 2026 São Paulo opening** with no published address. **GBP wave-2 should not claim physical storefront listings** for either market until the board confirms street addresses (or explicitly approves service-area-only listings).

**Lens applied:** SOP adherence — directory NAP must match verified on-site facts; deviations require board approval before GBP claim.

---

## Audit methodology

| Step | Action | Date |
|------|--------|------|
| 1 | Crawled site sources: `/about`, `/contact`, `/global-websites/kuwait`, Organization JSON-LD (`src/lib/seo/organization.ts`), `ContactSection`, press release (`bionixus-brazil-office-latam-expansion-2026`) | 2026-06-18 |
| 2 | Compared against `nap-master.md` rev 2 (5-office verified set: HQ, London, Cairo, Dubai, Riyadh) | 2026-06-18 |
| 3 | Checked marketing claims on insights/listicle pages for NAP drift | 2026-06-18 |
| 4 | Drafted GBP copy files under `bionixus-gbp-drafts/` (service-area posture; no invented streets) | 2026-06-18 |

**Note:** `/global-websites/brazil` does not exist — Brazil is absent from `globalWebsitesData.ts` region directory.

---

## Gap table — Kuwait

| NAP field | `nap-master.md` rev 2 | Live site (verified source) | Gap | GBP recommendation |
|-----------|----------------------|----------------------------|-----|-------------------|
| **Street address** | ❌ Not in 5-office set | ❌ None. `/global-websites/kuwait` contact block: *"BioNixus - Kuwait Operations (Coordinated from UK office)"* — no street | **CRITICAL** — marketing pages cite "Kuwait City office" without street | **Service-area only** until board supplies street |
| **City / locality** | — | `Kuwait City` in `ContactSection` regional list; JSON-LD `addressCountry: KW` only (no locality in page schema) | Partial — city named in contact, not in Kuwait page schema | Service area: Kuwait City, Kuwait |
| **Phone** | — | `+44 7727 666682` (UK line) on Kuwait global page + schema | No Kuwait local (+965) number published | Use **+44 7727 666682** (mirror Dubai/BIO-85 pattern) pending board |
| **Hours** | — | Sun–Thu 09:00–17:00 AST (`/global-websites/kuwait`) | Present on global page only | Same hours on GBP if service-area approved |
| **Email** | `admin@bionixus.com` (global) | `admin@bionixus.com` on Kuwait page | ✅ Aligned | Use global email |
| **About page office card** | — | ❌ Not listed (only HQ + London) | Drift vs brand "country office" claim | Ops: do not add to About until street confirmed |
| **Organization schema** | — | `addressLocality: Kuwait City` — **no street** (`organization.ts`) | City-only stub | Do not promote to full PostalAddress without board sign-off |

### Kuwait — physical office vs service-area

| Option | Evidence for | Evidence against | Ops recommendation |
|--------|--------------|------------------|-------------------|
| **Physical office GBP** | Brand book, listicle pages ("Kuwait City office") | No street on any verified page; explicit "Coordinated from UK office" | **Do not claim** until board confirms street + optional +965 line |
| **Service-area GBP** | Kuwait global page UK phone + AST hours; Dubai precedent (+44 for UAE) | Weaker entity graph than storefront | **Recommended interim** for wave-2 after BIO-84 credentials land |

---

## Gap table — Brazil

| NAP field | `nap-master.md` rev 2 | Live site (verified source) | Gap | GBP recommendation |
|-----------|----------------------|----------------------------|-----|-------------------|
| **Street address** | ❌ Not in 5-office set | ❌ None. Press release announces São Paulo office **Q2 2026** — no street, suite, or CEP | **CRITICAL** — opening announced, address unpublished | **Hold GBP** until inauguration address confirmed |
| **City / locality** | — | `São Paulo` in `organization.ts` JSON-LD only | City-only stub | Service area: São Paulo, Brazil (when listing approved) |
| **Phone** | — | ❌ No Brazil (+55) number on contact/global pages | No local line | Interim: **+44 7727 666682** or **+1 888 465 5557** — **board must choose** |
| **Hours** | — | ❌ Not published for Brazil | Missing | Default Mon–Fri 09:00–17:00 **America/Sao_Paulo** once board confirms |
| **Email** | `admin@bionixus.com` | Global contact only | ✅ Aligned | Use global email |
| **Global website page** | — | ❌ No `/global-websites/brazil` route | No Brazil contact block | CMO/web: add page when NAP confirmed |
| **Contact section** | — | ❌ Brazil not in "Regional Representation" list | Omitted vs brand book | Add after address confirmation |
| **Press / news** | — | [São Paulo office Q2 2026](https://www.bionixus.com/news/bionixus-brazil-office-latam-expansion-2026) | Narrative only — no NAP | Use as market-intent signal, not directory NAP |

### Brazil — physical office vs service-area

| Option | Evidence for | Evidence against | Ops recommendation |
|--------|--------------|------------------|-------------------|
| **Physical office GBP** | Press release, brand book, listicles ("São Paulo") | No address; Q2 2026 opening still pending detail | **Hold** until post-opening board confirmation |
| **Service-area GBP** | LATAM delivery from existing hubs | No on-site Brazil contact block; opening not yet operational | **Secondary option** if board wants LATAM visibility before street is public |

---

## Cross-market NAP drift (marketing vs ops)

| Claim location | Kuwait assertion | Brazil assertion | Ops status |
|----------------|------------------|------------------|------------|
| Brand book v3 / `llms.txt` | Country office | Country office | ⚠️ Aspirational — not ops-verified |
| Insights listicles (2026) | "Kuwait City office" | "São Paulo" / "offices in … Brazil" | ⚠️ Overstates verified NAP |
| `nap-master.md` short description | Named in office list | Named in office list | ⚠️ Copy block ahead of verification |
| Verified 5-office set | Excluded | Excluded | ✅ Correct for directory submissions |

**Action for CMO (out of BIO-416 scope):** Align listicle/office copy with verified NAP or publish confirmed addresses on `/about` + global pages first.

---

## Recommended verified NAP (interim — pending board)

Values below are **site-audited** where marked ✅ and **proposed** where board must confirm.

### Kuwait (service-area interim)

| Field | Interim value | Status |
|-------|---------------|--------|
| Listing type | Service-area business | Proposed |
| Business name | BioNixus | ✅ |
| Category | Market Research Company | ✅ |
| Phone | +44 7727 666682 | ✅ on Kuwait global page |
| Email | admin@bionixus.com | ✅ |
| Hours | Sun–Thu 09:00–17:00 AST | ✅ on Kuwait global page |
| Service areas | Kuwait City, Kuwait | Proposed |
| Street | *None — coordinated from UK* | Board must affirm or supply |

### Brazil (hold until Q2 opening)

| Field | Interim value | Status |
|-------|---------------|--------|
| Listing type | **Hold** — revisit post Q2 2026 opening | Board gate |
| City anchor | São Paulo, Brazil | ✅ schema + press only |
| Phone | TBD (+55 local vs +44/+1 hub) | Board gate |
| Hours | TBD America/Sao_Paulo | Board gate |
| Street | TBD at inauguration | Board gate |

---

## Board decisions required (for [BIO-84](/BIO/issues/BIO-84))

1. **Kuwait:** Confirm **service-area-only** GBP with UK phone (+44 7727 666682) **OR** provide verified Kuwait street address (+965 phone if applicable).
2. **Brazil:** Provide **São Paulo street address + CEP + local phone** when office opens; approve interim service-area listing yes/no before opening.
3. **Marketing alignment:** Approve correcting "physical office" claims on listicle pages if service-area posture is final.

---

## Deliverables produced

| Artifact | Path |
|----------|------|
| Gap analysis (this file) | `deliverables/bio-416-kuwait-brazil-nap-gap-analysis.md` |
| NAP master rev 3 annex | `nap-master.md` |
| GBP draft — Kuwait | `bionixus-gbp-drafts/kuwait-profile-copy.md` |
| GBP draft — Brazil | `bionixus-gbp-drafts/brazil-profile-copy.md` |

---

## QA / handoff

| Check | Status |
|-------|--------|
| Site audit complete (About, contact, schema, Kuwait global) | ✅ |
| Compared to `nap-master.md` rev 2 | ✅ |
| Gap table with physical vs service-area | ✅ |
| GBP drafts (no invented streets) | ✅ |
| GBP login/claim | ❌ Out of scope — blocked on BIO-84 secrets |

**Handoff:** Market Research Manager / board on [BIO-84](/BIO/issues/BIO-84) for NAP confirmation before wave-2 GBP submission.
