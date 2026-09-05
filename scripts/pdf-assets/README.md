# Country healthcare sample PDFs

Source HTML for the gated sample reports in `public/downloads/`:

| HTML | PDF |
| --- | --- |
| `usa-healthcare-databook-sample.html` | `usa-healthcare-market-report-2026-sample.pdf` |
| `uk-healthcare-databook-sample.html` | `uk-healthcare-market-report-2026-sample.pdf` |
| `brazil-healthcare-databook-sample.html` | `brazil-healthcare-market-report-2026-sample.pdf` |
| `germany-healthcare-databook-sample.html` | `germany-healthcare-market-report-2026-sample.pdf` |

Shared chrome: `databook-shared.css`. Generator: `scripts/generate-country-healthcare-pdfs.mjs`.

## Fill-the-page rule (do not regress)

Every inner page is a **solid A4 slab** (`210mm × 297mm`). Do not leave leftover white bands, large empty margins, or “cracks” between blocks.

1. Wrap inner-page content in `.page` → `.page-body` → `.fill` → `.chart-card` + `.fill-facts`.
2. `.page` is a column flex. `.fill` grows so leftover height is a **solid slab**, never white paper.
3. Keep the chart compact (do not stretch four thin bars across 80mm of empty track — that creates cracks). Put leftover height into the navy `.fill-facts` KPI rail.
4. Do not use `justify-content: space-between` on page body.
5. Footer (`.foot`) is the last flex child, not absolutely positioned over empty paper.
6. Cover and closing pages fill with navy plus a `.cover-viz` panel. Do not leave a blank navy void.
7. Never overflow onto a second accidental page.

## Charts

Add premium CSS/SVG charts **only from published live-page figures**.

- Use published midpoints of printed bands (e.g. oncology USD 145–165B → $155B). Label that they are midpoints.
- Scale bars to a named 100% (largest published value on that chart). Say so in `.chart-note`.
- Rank-only bars (Brazil therapy FAQ) must say they are **rank illustrations, not share**.
- Do not invent therapy dollar sizes, rebate percentages, hospital beds, or blended midpoints when the live page prints two series.
- Do not plot series with incompatible units on the same axis without a caption (e.g. Asklepios group beds vs a single university hospital).
- Firm totals on closing pages stay **127+ / 118 / 48 / 15**.

## Regeneration

```bash
node scripts/generate-country-healthcare-pdfs.mjs
# or one country:
node scripts/generate-country-healthcare-pdfs.mjs usa
```

Requires Playwright + Chrome/Chromium. Output overwrites `public/downloads/*-healthcare-market-report-2026-sample.pdf`.
