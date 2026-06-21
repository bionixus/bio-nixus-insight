# BD Discovery Call — Calendar Link Registry

**Issue:** [BIO-119](/BIO/issues/BIO-119)  
**Parent:** [BIO-79](/BIO/issues/BIO-79)  
**Owner:** Business Development Manager  
**Effective:** 12 June 2026  
**Status:** Live v1 — operational for GCC outreach token `{{calendar_link}}`

---

## Canonical token value

Use this URL as the default `{{calendar_link}}` in all GCC outreach sequences (A, B, C) until a dedicated scheduler (v2) is provisioned:

```
https://www.bionixus.com/contact?utm_source=gcc_outreach&utm_medium=email&utm_campaign=discovery_15min
```

**Display in email (recommended):**

```
Book a 15-minute discovery call: https://www.bionixus.com/contact?utm_source=gcc_outreach&utm_medium=email&utm_campaign=discovery_15min
```

Prospects land on the live BioNixus contact form; submissions route via Formspree to the BD triage inbox. Same-day triage is the operational SLA per the contact page copy.

---

## Per-touch tracking (CRM merge)

Append sequence and touch identifiers so reply attribution is possible in analytics and CRM:

| Sequence | Touch | `utm_campaign` value |
|----------|-------|----------------------|
| A | 1 | `seq_a_t1_discovery_15min` |
| A | 3 | `seq_a_t3_discovery_15min` |
| A | 4 | `seq_a_t4_discovery_15min` |
| A | 6 | `seq_a_t6_discovery_15min` |
| B | 4 | `seq_b_t4_discovery_15min` |
| B | 5 | `seq_b_t5_discovery_15min` |
| C | 1 | `seq_c_t1_discovery_15min` |
| C | 4 | `seq_c_t4_discovery_15min` |

**URL pattern:**

```
https://www.bionixus.com/contact?utm_source=gcc_outreach&utm_medium=email&utm_campaign={utm_campaign}&utm_content={{company_slug}}_{{contact_id}}
```

- `{{company_slug}}` — lowercase hyphenated company name (e.g. `novartis`)
- `{{contact_id}}` — CRM contact record ID

Sales Specialist maps these at send time from the CRM contact record. Do not send bare URLs without `utm_campaign`.

---

## v2 upgrade path (optional — COO / IT)

When a self-serve scheduler is provisioned (Microsoft Bookings, HubSpot Meetings, or Cal.com):

1. COO posts the live scheduler URL on [BIO-79](/BIO/issues/BIO-79).
2. BD updates this registry and the `{{calendar_link}}` default in the token glossary.
3. Retain UTM parameters on redirect or use scheduler-native tracking fields.
4. v1 contact URLs remain valid for nurture replies; do not break existing sent threads.

Until v2 is live, **v1 satisfies the external-send gate** for calendar link live + tracked.

---

## Governance

| Check | Owner |
|-------|-------|
| Link resolves (HTTP 200) | Sales Specialist — before first send |
| UTM campaign matches sequence/touch | Sales Specialist — per touch |
| No placeholder text in live sends | BD — pre-send validator |
| Scheduler upgrade | COO — when provisioned |

---

*Internal — post canonical URL on [BIO-79](/BIO/issues/BIO-79) when updating gate status.*
