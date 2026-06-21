# BIO-52 CEO Credential Briefing

**Date:** 2026-06-12  
**Parent:** [BIO-49](/BIO/issues/BIO-49) → [BIO-52](/BIO/issues/BIO-52)  
**Prepared by:** Executive Assistant

## BLUF

**BIO-52 has zero live directory publishes yet.** All five acceptance criteria remain open. Three credential gates block parallel workstreams; board responses on pending interaction cards are the only unblock path today.

**Fastest win if you have 10 minutes:** Manual LinkedIn publish using prepared copy (Option 3 on [BIO-83](/BIO/issues/BIO-83)) — no engineering dependency.

---

## Status dashboard (R/Y/G)

| Workstream | Status | Owner | Blocker issue | Board action |
|------------|--------|-------|---------------|--------------|
| **LinkedIn** specialties + description | 🔴 Blocked | [BrowserAgent](/BIO/agents/browseragent) on [BIO-63](/BIO/issues/BIO-63) | [BIO-83](/BIO/issues/BIO-83) `in_review` | Respond to pending interaction card: secrets vs manual publish |
| **Wikidata** entity + P1 properties | 🔴 Blocked | [SEOSpecialist](/BIO/agents/seospecialist) on [BIO-56](/BIO/issues/BIO-56) | [BIO-107](/BIO/issues/BIO-107) `in_review` | Add `WIKIDATA_USERNAME` + `WIKIDATA_PASSWORD` (bot password) to Paperclip secrets |
| **Clutch + GBP** Dubai/Riyadh | 🔴 Blocked | [BacklinkingSpecialist](/BIO/agents/backlinkingspecialist) on [BIO-58](/BIO/issues/BIO-58) | [BIO-84](/BIO/issues/BIO-84) + [BIO-85](/BIO/issues/BIO-85) `in_review` | Clutch/GBP credentials + NAP decisions (phones, Riyadh address type) |
| **LinkedIn copy prep** | 🟢 Ready | CMO | — | Copy at `docs/geo/bio52-linkedin-update.md` |
| **Clutch profile (public)** | 🟡 Live, unclaimed | — | — | https://clutch.co/profile/bionixus-market-research |
| **Wikidata Q139888256** | 🔴 Invalid | — | — | Do **not** enrich; create new item per [BIO-56](/BIO/issues/BIO-56) |

---

## Delegation path correction (BIO-57 → BIO-63)

The [CEO recovery comment](/BIO/issues/BIO-52#comment-bd7d97ae-13ef-40a2-b192-62d07f1f7fc9) assigned LinkedIn publish to Executive Assistant via [BIO-57](/BIO/issues/BIO-57). CMO subsequently **cancelled BIO-57** as duplicate; active execution is [BIO-63](/BIO/issues/BIO-63) (BrowserAgent), blocked on [BIO-83](/BIO/issues/BIO-83).

No EA re-assignment needed unless board chooses manual publish (CEO/board executes directly).

---

## Decision 1 — LinkedIn ([BIO-83](/BIO/issues/BIO-83))

**Target:** https://www.linkedin.com/company/bionixus  
**Copy source:** `docs/geo/bio52-linkedin-update.md`

### What to publish

**Specialties (12):** Healthcare Market Research, Pharmaceutical Market Research, Market Research Egypt, Market Research UAE, Market Research Saudi Arabia, Market Research Dubai, Market Research Riyadh, KOL Mapping, HEOR, Market Access Strategy, Consumer Market Research, Competitive Intelligence

**Description opening line:**
> BioNixus is a global market research company specializing in healthcare, pharmaceutical, and consumer research across the Middle East, Africa, Europe, and North America. We deliver primary research, KOL mapping, HEOR, and market access strategy for pharmaceutical, biotech, and medical device teams.

### Options (pick one on BIO-83 interaction card)

| Option | Time | After you confirm |
|--------|------|-------------------|
| **A. Paperclip secrets** | ~5 min setup | Add `LINKEDIN_EMAIL` + `LINKEDIN_PASSWORD` → run extended `wire-browseragent-secrets.mjs` → mark BIO-83 done → BrowserAgent resumes BIO-63 |
| **B. Manual publish** | ~10 min | Edit LinkedIn page → post live URL on BIO-52 → close BIO-63 LinkedIn scope |
| **C. Dedicated admin** | ~15 min | Provision `@bionixus.com` page admin → deliver via secrets (same as A) |

**Security:** Never post passwords in issue comments.

---

## Decision 2 — Wikidata ([BIO-107](/BIO/issues/BIO-107))

**Confirmed:** Q139888256 does not exist (404 + API `missing`).

**Required secrets:**
- `WIKIDATA_USERNAME` — Wikidata account
- `WIKIDATA_PASSWORD` — Bot password from [Special:BotPasswords](https://www.wikidata.org/wiki/Special:BotPasswords) (not account password)

**After provisioning:** Wake SEOSpecialist on BIO-56 → run `scripts/geo/create-bionixus-wikidata.py` → post live QID on BIO-52.

---

## Decision 3 — Clutch + GBP ([BIO-84](/BIO/issues/BIO-84) / [BIO-85](/BIO/issues/BIO-85))

**Required secrets:**
- `CLUTCH_EMAIL` + `CLUTCH_PASSWORD`
- `GOOGLE_GBP_EMAIL` + `GOOGLE_GBP_PASSWORD`

**Required NAP decisions:**
- Live UAE phone for Dubai GBP
- Riyadh listing type: physical address vs service-area-only
- Live KSA phone for Riyadh GBP

**Draft copy ready:** `bionixus-gbp-drafts/dubai-profile-copy.md`, `bionixus-gbp-drafts/riyadh-profile-copy.md`

**After provisioning:** Run `node scripts/paperclip/wire-browseragent-secrets.mjs` → mark BIO-84 done → BacklinkingSpecialist resumes BIO-58.

---

## Recommended sequence (Eisenhower)

1. **Urgent + Important:** Respond to BIO-83 interaction (LinkedIn — fastest GEO signal, copy ready)
2. **Important:** BIO-107 Wikidata secrets (unblocks entity graph work)
3. **Important:** BIO-84/BIO-85 Clutch/GBP credentials + NAP (longer verification cycle)

---

## Acceptance criteria tracker ([BIO-52](/BIO/issues/BIO-52))

- [ ] Wikidata statements live — blocked on BIO-107
- [ ] Clutch claimed — blocked on BIO-84
- [ ] LinkedIn updated — blocked on BIO-83
- [ ] GBP Dubai verified — blocked on BIO-84/BIO-85
- [ ] GBP Riyadh verified — blocked on BIO-84/BIO-85
- [ ] Comment on BIO-49 with all live URLs — pending above

---

## Next actions by owner

| Owner | Action |
|-------|--------|
| **Board / CEO** | Resolve pending interaction cards on BIO-83, BIO-107, BIO-84 |
| **BrowserAgent** | Resume BIO-63 after BIO-83 closes |
| **SEOSpecialist** | Resume BIO-56 after BIO-107 closes |
| **BacklinkingSpecialist** | Resume BIO-58 after BIO-84/BIO-85 close |
| **CMO** | Collect live URLs → comment on BIO-49 when all criteria met |
