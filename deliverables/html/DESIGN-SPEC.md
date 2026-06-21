# BioNixus Premium HTML — Design Spec

**Version:** 1.0 · **Issue:** [BIO-239](/BIO/issues/BIO-239) · **Parent:** [BIO-237](/BIO/issues/BIO-237)  
**Brand source:** [BIO-38](/BIO/issues/BIO-38) brand book v1.2 · **Reference corpus:** [BIO-210](/BIO/issues/BIO-210) attachments · **Brand assets doc:** [BIO-210#document-bionixus-brand-assets](/BIO/issues/BIO-210#document-bionixus-brand-assets) · **Skill:** [Admin](/BIO/agents/admin) `bionixus-proposal-generator` ([BIO-211](/BIO/issues/BIO-211))

This document is the company-standard HTML/CSS conventions for client-facing deliverables: proposals, credentials decks, portfolio appendices, briefing decks, and one-pagers.

---

## 1. Design lenses applied

| Lens | Application in this library |
|------|-----------------------------|
| **Visual hierarchy & composition** | Cover = focal point (figure-ground); interior sections use gold rule + section number for proximity grouping; negative space on lede blocks |
| **Typography & readability** | EB Garamond (display) + Barlow (body); 45–75ch line length on lede; hierarchy via size/weight/case not decoration |
| **Color theory & brand** | 60-30-10 navy/off-white/gold; WCAG AA on body text (#152232 on #FDFCFA); gold for accent rules only |
| **Data visualization** | Chart palette: navy → steel → blue-light → muted (color-blind safe sequence); axes labeled; no truncated scales |
| **Information design** | Inverted pyramid in letter + lede; scannable section numbers; progressive disclosure in appendix pages |
| **Brand consistency** | Single pharma fork tokens; template clones over one-off layouts |
| **Accessibility** | 13.5px+ body; never color-only meaning in tables; alt text on stamps/seals |
| **Production quality** | A4 print shell; `print-color-adjust: exact`; relative asset paths for bundling |

---

## 2. Document shell

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>BioNixus — {Topic} | {Client} {Year}</title>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Barlow:wght@400;600&family=Barlow+Condensed:wght@500&family=IBM+Plex+Mono:wght@400&display=swap" rel="stylesheet"/>
  <style>/* inline preferred for standalone client files */</style>
</head>
<body>
  <div class="document">
    <section class="page cover">…</section>
    <section class="page">…</section>
  </div>
</body>
</html>
```

**Title tag:** `BioNixus — {Topic} | {Client} {Year}`

**Filename:** `bionixus-{client-slug}-{topic-slug}-{type}-{year}.html` (lowercase, hyphenated)

---

## 3. Color palette (pharma / diagnostics fork)

Primary deliverable fork for healthcare MR. FMCG green and MDF navy variants documented in skill `reference/scaffold.md`.

| Token | Hex | Role | 60-30-10 |
|-------|-----|------|----------|
| `--navy` | `#002244` | Headings, cover gradient base | 60% dominant |
| `--navy-deep` | `#001833` | Cover gradient dark stop | |
| `--blue` | `#0069A3` | Section labels, title emphasis | |
| `--blue-light` | `#3A8BC0` | Links, chart series 2 | |
| `--steel` | `#4A6FA5` | Chart series 3 | |
| `--gold` | `#B8862D` | Rules, kicker, highlights | 10% accent |
| `--gold-light` | `#D4A84B` | Cover title emphasis | |
| `--off-white` | `#FAFAF8` | Secondary surfaces | 30% secondary |
| `--paper` | `#FDFCFA` | Page background | |
| `--text` | `#152232` | Body (contrast ≥ 12:1 on paper) | |
| `--text-muted` | `#6B7684` | Lede, captions, labels | |

**Chart / data series (color-blind safe):** `#002244`, `#0069A3`, `#4A6FA5`, `#6B7684` — never rely on red/green alone.

Website brand book (Playfair + Inter) applies to **bionixus.com** only. **Client HTML deliverables** use EB Garamond + Barlow per [BIO-210](/BIO/issues/BIO-210) reference corpus.

---

## 4. Typography

| Role | Family | Size | Weight | Notes |
|------|--------|------|--------|-------|
| Cover H1 | EB Garamond | 42px | 500 | One per document; `<em>` for italic emphasis |
| Section H2 | EB Garamond | 28px | 500 | `.section-title` |
| Body | Barlow | 13.5px | 400 | Line-height 1.65 |
| Lede | Barlow | 15px | 400 | `.section-lede`, muted color |
| Section label | Barlow Condensed | 10px | 600 | `02 — Research design` pattern |
| Meta / table header | Barlow Condensed | 9–11px | 500 | Letter-spacing 0.18–0.25em uppercase |
| Data / code | IBM Plex Mono | 11–12px | 400 | Fees, reference codes |

**Rules:**

- Emphasis in titles: `<em>` italic serif — not bold (typographic color).
- Maximum comfortable line length: **75 characters** on lede and body blocks.
- Minimum body size: **13.5px** (print); never below 12px for captions.

---

## 5. Spacing scale

4px base grid. Page padding: **48px vertical × 56px horizontal** on A4 interior pages.

| Token | Value | Use |
|-------|-------|-----|
| `--space-2` | 8px | Tight inline gaps |
| `--space-3` | 12px | Below section labels |
| `--space-4` | 16px | Paragraph spacing |
| `--space-5` | 24px | Block separation |
| `--space-7` | 48px | Page vertical padding |
| `--space-8` | 56px | Page horizontal padding |

**Document wrapper:** max-width **920px** on screen; full bleed A4 in print.

---

## 6. Layout components

| Component | Class | Notes |
|-----------|-------|-------|
| Document wrapper | `.document` | Screen shadow + border |
| A4 page | `.page` | `page-break-after: always` |
| Cover | `.cover` | Dark gradient, white type |
| Section header | `.section-num` + `.section-title` | Gold rule optional via `.page-rule` |
| Letter block | `.page.letter` | Addressee + date |
| Fee table | `.fee-table` | Right-align currency; zebra optional |
| Timeline | `.timeline` | Week blocks; label every milestone |
| Signature block | `.sigg` | See `templates/signature-block.html` in skill |
| CTA closing | `.page--closing` | Dark bg optional |

**Cover meta strip:** 3-column grid `.meta` with uppercase labels.

---

## 7. Print rules

```css
@page { size: A4; margin: 0; }

.page {
  width: 210mm;
  height: 297mm;
  page-break-after: always;
  break-after: page;
}

body {
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

@media print {
  .document { margin: 0; box-shadow: none; border: none; }
  body { background: #fff; padding: 0; }
}
```

- Export PDF via browser print (Chrome recommended) or headless print pipeline.
- Backgrounds and gradients **must** render — do not remove `print-color-adjust`.
- Each `.page` = one printed sheet.

---

## 8. Template library

| File | Type | Pages (typical) |
|------|------|-----------------|
| `templates/template-proposal-pharma-mr.html` | Full MR proposal | 8–12 |
| `templates/template-credentials-pharma.html` | Credentials Volume II | 5–7 |
| `templates/template-portfolio.html` | Portfolio appendix | 4–6 |
| `templates/template-briefing-deck.html` | Pre-proposal briefing | 4–6 slides |
| `templates/template-one-pager.html` | Executive summary | 1 |

Clone nearest template; replace `{{PLACEHOLDER}}` tokens. Do not refactor to React/Tailwind for client sends.

---

## 9. Assets

Copy into `html/assets/` or alongside output HTML:

| Asset | Use |
|-------|-----|
| `bionixus-logo.png` | Cover, running header |
| `bionixus-seal.png` | Cover decoration |
| `bionixus-stamp-us.png` | Signature block |
| `bionixus-stamp-egypt-web.png` | Signature block |
| `signature-alsaadany.png` | Signature line |

Never hotlink external URLs for stamps/signatures in client-facing docs.

---

## 10. Governance

- **Legal:** Route proposals with terms/fees to GeneralCounsel before external send.
- **Brand:** New palette forks or logo changes require CMO sign-off ([BIO-38](/BIO/issues/BIO-38)).
- **Synthetic data only** in templates and smoke tests — no real client pricing in shared repo copies.

---

## 11. Implementation handoff (engineering)

If a template is published to a site route:

- SSR pages use site tokens (Playfair/Inter) — **do not** mix pharma proposal CSS into `src/` without explicit fork flag.
- Static proposal routes may serve from `public/conf/` or `deliverables/html/` with Express static.
- Alt text required on all informational images; PDF export path documented per template.

**Shared CSS extract:** `shared/bionixus-premium-base.css` (tokens + print shell only — full proposal CSS remains inline in template clones).
