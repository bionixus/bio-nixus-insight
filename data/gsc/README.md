# GSC weekly export drop-off

Paste fresh Google Search Console CSV exports here for the weekly report
(`npm run report:weekly`, output goes to `reports/`).

## Weekly loop (every Monday)

1. Move the files in `current-week/` to `previous-week/` (overwrite).
2. Export the **last 7 days** from Search Console (see below) and drop the CSVs into
   `current-week/`.
3. Run `npm run report:weekly`. The report compares the two windows, shows a
   "Excl. bot/irrelevant queries" line, and feeds `scripts/directory-matrix-gates.mjs`.
4. Any window length works (7, 28, 32 days); per-day figures are derived from the
   number of rows in `Chart.csv`.

## Where to put files

- `current-week/Chart.csv` (the dated series; a file named `Dates.csv` also works),
  `current-week/Queries.csv`, `current-week/Pages.csv`
- `current-week/Countries.csv`, `current-week/Devices.csv` (optional — enables CTR mix
  diagnostics in the weekly report: excl US, desktop/mobile, deep-rank pages)
- `previous-week/…` — the same files for the prior comparable window (same number of
  days, shifted back by one window)

## How to export from Search Console

Search Console → **Performance** → set the date range → **Export** → **Download CSV**.
That download is a zip containing `Queries.csv`, `Pages.csv`, `Chart.csv`,
`Countries.csv`, `Devices.csv`, and others. Keep the exact filenames; the parser
matches on them.

## Excluded (bot) queries

`scripts/gsc-weekly-report.mjs` removes `cairo hospitals healthcare 2023-2026` (a scraper
query: ~6,000 impressions, 0 clicks in Sep 2026) from the "excl." traffic line and from
the position/CTR tables. Add more with `node scripts/gsc-weekly-report.mjs
--exclude-query "another query"` (repeatable). Edit `DEFAULT_EXCLUDED_QUERIES` in the
script to make an exclusion permanent.

## Leads

Every form posts to HighLevel (`/api/highlevel-lead` → `src/server/highlevelLead.ts`);
only "Book a 30-minute scoping call" requests also go to Formspree. To populate the
"Leads" section of the weekly report, export HighLevel contacts weekly to
`data/leads/leads.csv` with columns `date, source_page, budget, timeline, request_type`
(one row per submission). `request_type` values: `Scoping Call Request`,
`Research Enquiry (below minimum)`, or the asset / newsletter type.
