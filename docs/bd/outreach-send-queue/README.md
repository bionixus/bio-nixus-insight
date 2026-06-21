# Outreach Send Queue

Per-contact rendered drafts ready for external send. **Do not send without passing the validator.**

## Workflow

1. Render template tokens from CRM into a new file: `{sequence}-{touch}-{company_slug}-{YYYY-MM-DD}.md`
2. Add frontmatter:

```yaml
---
status: draft
sequence: A
touch: 1
company: Example Pharma
verified_snippet_id: ACC-01
peer_outcome_verified: false
calendar_utm_campaign: seq_a_t1_discovery_15min
---
```

3. Set `status: ready_to_send` only after BD verification flags are complete.
4. Run:

```bash
node scripts/bd/validate-outreach-send-queue.mjs --file docs/bd/outreach-send-queue/your-file.md
```

5. COO external-send release must be recorded on [BIO-79](/BIO/issues/BIO-79) before first external send.

See [outreach-source-verification-sop.md](../bio-119/outreach-source-verification-sop.md) and [calendar-link-registry.md](../bio-119/calendar-link-registry.md).
