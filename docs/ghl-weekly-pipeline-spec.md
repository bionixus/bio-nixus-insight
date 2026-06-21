# GHL Weekly Pipeline Export Spec (Q2)

Use this as the CMO source of truth for the weekly Go High Level export referenced by BIO-338.

## Report schedule
- **Name**: GHL weekly pipeline coverage
- **Frequency**: weekly
- **Due**: within 7 days, then each week until Q2 floor gate is satisfied

## Metrics
- weighted pipeline ($)
- new opportunities
- stage movement
- win rate
- weekly delta vs prior week

## Output
- Generate binary spreadsheet or CSV at `docs/ghl/weekly-<DATE>.xlsx` or `.csv`
- Attach output to `BIO-186` monthly scorecard inputs
- Summarize stage movement and pipeline ratio in the comment

## Integration
- Existing BI tool: import by path
- Upload command: `paperclip upload:issue:attachment <issueId> <path>` if Paperclip CLI supports it; otherwise use `curl` to `/api/attachments`

## Context
- BIO-374 is the active blocker for GHL API access
- Once resolved, re-run export and attach file
