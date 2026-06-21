# Daily LLM Prompt Monitoring — BIO-222

**Parent issue:** [BIO-222](/BIO/issues/BIO-222)  
**Paperclip routine:** Daily GEO prompt citation follow-up  
**Cadence:** Every day at 08:00 Africa/Cairo (06:00 UTC)  
**Owner:** [@GEOSpecialist](/BIO/agents/geospecialist)  
**Reviewer:** [@CMO](/BIO/agents/cmo) (weekly rollup)

Tracks BioNixus visibility across **ChatGPT**, **Gemini**, and **Claude** for 10 priority GEO prompts (GCC + Egypt healthcare/pharma market research queries).

---

## Tracking table structure

Each daily run produces one row per prompt with platform scores aligned to the BIO-222 source table:

| Column | Description |
|--------|-------------|
| **Prompt** | Exact query string (from `prompt-set-bio222.csv`) |
| **Funnel tag** | `top_of_funnel` or `middle_of_funnel` |
| **Mentioned brands** | Comma-separated brands named in responses (BioNixus first if present) |
| **ChatGPT** | Citation/visibility score (`+N` or numeric); blank if not checked |
| **Gemini** | Same |
| **Claude** | Same |
| **Language** | Locale used when querying (default `English (US)`) |
| **Location** | Simulated user location for the query session |
| **Actions** | Link to stored response captures |
| **Feedback** | Day-over-day delta notes, anomalies, recommended content actions |

**Score semantics:** Match the upstream monitoring tool convention from BIO-222 — higher = more citations/visibility for BioNixus in that engine's answer. Record raw numbers; compute deltas in the daily report.

---

## Daily heartbeat procedure (GEOSpecialist)

1. **Load prompt set** — `docs/geo/daily-prompt-monitoring/prompt-set-bio222.csv`
2. **Capture responses** — For each prompt × platform (30 checks):
   - Run the prompt in the target LLM UI with the specified **Language** and **Location** settings
   - Record: BioNixus mentioned (Y/N), cited URL if any, position (first/top3/top5/none), all brands mentioned
   - Save screenshot or export to `docs/geo/daily-prompt-monitoring/captures/YYYY-MM-DD/{prompt_id}-{platform}.md`
3. **Write daily CSV** — `docs/geo/daily-prompt-monitoring/daily/YYYY-MM-DD.csv`
4. **Generate report** — `npm run geo:daily-report -- --date YYYY-MM-DD` (or run script directly)
5. **Post issue comment** on the routine child issue with:
   - Status summary table (10 prompts)
   - High-priority deltas vs prior day (≥3 point swing or mention gained/lost)
   - Recommended actions tagged by domain lens (entity salience, answer-engine fit, freshness)
6. **Escalate to CMO** if BioNixus drops out of top-5 on ≥3 prompts in a single day

---

## File layout

```
docs/geo/daily-prompt-monitoring/
├── prompt-set-bio222.csv          # Canonical 10 prompts
├── baseline-seed-bio222.csv       # Seed scores from BIO-222 issue
├── daily-runbook.md               # This file
├── daily-report-template.md       # Report skeleton
├── daily/
│   └── YYYY-MM-DD.csv             # One file per day
├── captures/
│   └── YYYY-MM-DD/                # Response evidence per prompt/platform
└── weekly/
    └── YYYY-Www-summary.md        # Optional Monday rollup
```

---

## Daily CSV schema

```csv
date,prompt_id,prompt,funnel_tag,platform,language,location,bionixus_mentioned,bionixus_cited,cited_url,citation_score,position,brands_mentioned,sentiment,delta_vs_prior,feedback,captured_at
```

---

## Relationship to SoM monitoring (BIO-48)

| Program | Scope | Cadence |
|---------|-------|---------|
| **BIO-222 daily** | 10 priority prompts × 3 engines | Daily |
| **BIO-48 SoM gold set** | 60 queries × 5 engines × 3 runs | Monthly baseline |

Use BIO-222 for operational daily visibility on the highest-intent GCC/Egypt queries. Feed significant deltas into the monthly SoM report.

---

## Priority actions by score pattern

| Pattern | Lens | Action |
|---------|------|--------|
| Claude high, ChatGPT/Gemini low | Entity salience | Strengthen structured data + llms.txt for underperforming engine |
| All engines zero | Answer-engine fit | Add quotable FAQ block on matching `/insights/*` guide |
| Score dropped ≥5 day-over-day | Freshness signal | Refresh guide publish date + cross-links |
| Competitor gained, BioNixus static | Citation graph | Route PR/directory work to CMO (BIO-52 pipeline) |
