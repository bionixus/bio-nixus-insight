# GSC weekly export drop-off

Paste fresh Google Search Console CSV exports here for the weekly report
(`node scripts/gsc-weekly-report.mjs`, output goes to `reports/`).

## Where to put files

- `current-week/Dates.csv`, `current-week/Queries.csv`, `current-week/Pages.csv`
- `previous-week/Dates.csv`, `previous-week/Queries.csv`, `previous-week/Pages.csv`
  (the prior comparable week — same number of days, shifted back 7 days)

## How to export from Search Console

Search Console → **Performance** → set the date range → **Export** → **Download CSV**.
That download is a zip containing `Queries.csv`, `Pages.csv`, `Dates.csv`,
`Countries.csv`, `Devices.csv`, and others — only the three named above are
needed here. Keep the exact filenames; the parser matches on them.

Do the same for the prior 7-day window and drop those three files into
`previous-week/` for the week-over-week comparison.

## Leads

Lead-submission data lives in Formspree only — the site's qualification and
gated-asset forms POST directly from the browser with no server-side
logging, so there is no local record to read by default. To get real
numbers in the "Leads" section of the weekly report, add
`data/leads/leads.csv` with columns `date, source_page, budget, timeline`
(one row per submission), or wire up a real capture mechanism (e.g. a
server-side endpoint that logs submissions, or a Formspree → webhook →
storage integration) — ask before assuming which.
