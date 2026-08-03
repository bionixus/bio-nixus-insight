# AEO Off-Site Citation Seeding Playbook

Owned pages make BioNixus **eligible** to be named by an answer engine. Off-site
corroboration is what gets us **actually named**. This is the half of the AEO
programme that is not code, and it runs in parallel with the country page
rollout.

## The non-negotiable rule: byte-identical entity strings

Every off-site profile must use exactly these values. If a directory lists
"Bionixus Ltd" founded 2013, entity resolution splits and both records get
weaker, not stronger.

| Field | Exact value |
| --- | --- |
| Name | `BioNixus` |
| Founding date | `2012` |
| Founding location | London, United Kingdom |
| Website | `https://www.bionixus.com` |
| US address | 1309 Coffeen Ave, Sheridan, WY 82801, US |
| UK address | 128 City Road, London EC1V 2NX, GB |
| US phone | `+1-888-465-5557` |
| UK phone | `+44-7727-666682` |
| Email | `admin@bionixus.com` |

Source of truth: `src/lib/seo/organization.ts`. If any of the above changes,
change it there first, run `npm run sync:org-schema`, then update every profile
below.

## Sequenced by leverage

### 1. Wikidata entity — highest leverage per hour

Several answer engines consume Wikidata directly for entity resolution, and it
is free.

Create an item with, at minimum:

- `instance of` (P31): business
- `industry` (P452): market research
- `inception` (P571): 2012
- `headquarters location` (P159): Sheridan, Wyoming
- `official website` (P856): https://www.bionixus.com
- `country` (P17): United States

Then add the Wikidata URL to `ORG_SAME_AS` in `src/lib/seo/organization.ts` and
re-run `npm run sync:org-schema`.

> Wikidata requires notability-adjacent sourcing. Add the item only once there
> are independent references to cite (directory listings, press, published
> client work). Creating an unsourced item invites deletion, which is worse
> than not having one.

### 2. Industry directory profiles

These are the exact sources retrieved for "top market research companies in
{country}" queries, which makes them disproportionately valuable.

- **GreenBook (GRIT) directory** — the most-cited MR directory
- **Quirk's** company listing
- **ESOMAR** directory
- **MRS** (Market Research Society, UK) — relevant to the London office

For each: complete the profile fully, select every country and methodology
category we genuinely serve, and use the exact entity strings above.

### 3. Review platforms

Third-party reviews corroborate the `aggregateRating` now published in the
Organization schema, and feed `sameAs`.

- **G2** — category: Market Research Services
- **Clutch** — B2B services, market research
- **Trustpilot**

Only solicit reviews from real clients. Fabricated or incentivised reviews are
both a compliance risk and trivially detectable by an engine cross-checking
sources.

### 4. Crunchbase and LinkedIn consistency

Both already exist in some form. Audit them against the table above —
particularly founding year and headquarters, which are the two fields most
likely to have drifted. LinkedIn is already in `ORG_SAME_AS`; add Crunchbase
once verified.

### 5. Third-party listicle placement

Getting BioNixus into other people's "top firms in {country}" articles carries
the highest citation weight because it is independent corroboration of exactly
the claim our own pages make. Highest effort of anything here.

Target, per priority market: trade publications, regional pharma business
press, and established MR blogs. Lead with the differentiator that is actually
verifiable — in-country primary fieldwork in GCC and MENA markets that the
global networks service from regional hubs.

### 6. Community seeding

Genuine, disclosed participation in relevant Reddit and Quora threads. Disclose
affiliation every time. Undisclosed promotion violates platform rules and, if
detected, damages the entity we are trying to build.

## What we deliberately do not do

- No invented awards, rankings, client counts or review scores. The Organization
  schema currently omits `award` entirely because there is no real one to cite.
  AEO built on fabricated proof collapses the first time an engine cross-checks
  it, and takes the legitimate signals down with it.
- No purchased links or paid placement disguised as editorial.

## Measuring whether any of this worked

Off-site work is slow and easy to fool yourself about. Use the tracker:

```bash
npm run aeo:baseline                              # before seeding starts
npm run aeo:track -- --label post-offsite-q1      # after each wave
npm run aeo:report -- --compare baseline post-offsite-q1
```

The comparison prints which specific query/country/engine combinations we
gained and lost, which is the only honest way to attribute movement to a wave
of seeding.
