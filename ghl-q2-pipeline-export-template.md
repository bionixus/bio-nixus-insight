# BIO-338 CMO weekly GHL weighted pipeline export template (Q2)

Purpose: provide a repeatable export spec the CMO can execute once BIO-374 unblocks GHL API access.

## Weekly pipeline extract
- CRM: Go High Level
- Frequency: weekly
- Attach to: BIO-186 monthly scorecard inputs

## Required fields
- opportunity_id
- opportunity_name
- company
- stage
- amount
- weighted_amount
- probability_pct
- owner
- created_date
- expected_close_date
- last_stage_change_date
- source_channel
- region
- service_line

## Stage mapping + weights
- Qualified: 10%
- Consultation Booked: 25%
- Consultation Complete / Proposal Sent: 45%
- Negotiation: 65%
- Closed Won: 100%
- Closed Lost: 0%

## New opportunities filter
- created_date >= last export run date
- exclude archived/duplicate entries

## Win rate formula
- Closed Won / (Closed Won + Closed Lost) within rolling 30 days

## Output format
- CSV with headers above
- Summary block: total pipeline, weighted pipeline, new opps count, win rate

## Acceptance
- One-click reusable export path when BIO-374 is complete
- Verified headers + stage weights against BIO-196 guidance
