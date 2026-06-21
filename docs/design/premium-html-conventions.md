# BioNixus Premium HTML Conventions

**Version 1.0 — June 2026**  
**Owner:** Creative Art Director · **Parent:** [BIO-237](/BIO/issues/BIO-237) · **Brand source:** [BIO-38](/BIO/issues/BIO-38) · **Reference corpus:** [BIO-210](/BIO/issues/BIO-210) · **Brand assets:** [BIO-210#document-bionixus-brand-assets](/BIO/issues/BIO-210#document-bionixus-brand-assets) · **Proposal skill:** [Admin](/BIO/agents/admin) `bionixus-proposal-generator`

Canonical design spec for standalone HTML client deliverables: proposals, credentials decks, portfolio appendices, briefing decks, and one-pagers. These are **print-first A4 documents** — not website pages.

---

## 1. Design system scope

| Context | Typography | Primary palette | Use |
|---------|------------|-----------------|-----|
| **Premium print HTML** (this doc) | EB Garamond + Barlow + Barlow Condensed | Navy `#002244`, Blue `#0069A3`, Gold `#B8862D` | Client proposals, credentials, portfolio, briefing decks, one-pagers |
| **Website / digital product** | Playfair Display + Inter (Brand Book v3) | Navy `#101C30`, Gold `#F5A503` | bionixus.com, SSR pages, marketing site |

Do not mix web tokens into print deliverables without CMO approval. The print fork aligns to the [BIO-210](/BIO/issues/BIO-210) reference corpus and McKinsey-style pharma deck lineage.

**Design lenses applied:** Brand consistency · Typography & readability · Visual hierarchy & composition · Production quality · Accessibility in design.

---

## 2. Color tokens (print fork)

### 2.1 Core palette — 60-30-10 rule

| Token | Hex | Role | % of layout |
|-------|-----|------|-------------|
| `--navy` | `#002244` | Headings, cover gradient, authority blocks | ~60% (structure) |
| `--blue` | `#0069A3` | Section labels, links, chart series 1 | ~30% (support) |
| `--gold` | `#B8862D` | Rules, kickers, emphasis accents | ~10% (accent) |
| `--off-white` | `#FAFAF8` | Page background, note blocks | surface |
| `--text` | `#152232` | Body copy | — |
| `--text-muted` | `#6B7684` | Ledes, captions, meta labels | — |

### 2.2 Extended tokens

```css
:root {
  --navy-deep:   #001833;
  --blue-light:  #3A8BC0;
  --gold-light:  #D4A84B;
  --cool-white:  #F3F5F7;
  --rule:        #D0D6DE;
  --paper:       #FDFCFA;
  --paper-screen:#FFFFFF;
}
```

### 2.3 Contrast & accessibility

- Body text on `--paper`: **≥ 7:1** (AAA) against `#152232`.
- Muted text `--text-muted` on `--paper`: **≥ 4.5:1** (AA).
- Gold accent on navy cover: use `--gold-light` (#D4A84B) for small type; never gold-on-cream for body copy.
- **Color-blind safe charts:** pair color with shape, pattern, or direct labels. Primary series: navy; secondary: blue; tertiary: gold. Avoid red/green-only encoding.
- Never convey meaning by color alone — add icons, labels, or patterns.

### 2.4 FMCG / franchise fork (optional)

| Token | Hex |
|-------|-----|
| `--ink` | `#1A3A2A` |
| `--cream` | `#FAF6EF` |
| `--amber` | `#C8832A` |

Fonts: Cormorant Garamond + DM Sans. Use only when buyer is non-healthcare (F&B, retail, franchise). See `template-proposal-pharma.html` as the default pharma fork.

---

## 3. Typography

### 3.1 Font stacks

| Role | Family | CSS variable | Weights |
|------|--------|--------------|---------|
| Display / titles | EB Garamond | `--serif` | 400, 500, 600 (italic for `<em>` emphasis) |
| Body / UI | Barlow | `--sans` | 400, 500, 600 |
| Labels / kickers | Barlow Condensed | `--cond` | 500, 600 |
| Data / section nums | IBM Plex Mono | `--mono` | 400, 500 |

Google Fonts import:

```html
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet"/>
```

### 3.2 Type scale (print)

| Element | Size | Weight | Line height | Max width |
|---------|------|--------|-------------|-----------|
| Cover H1 | 38–44px | 500 serif | 1.05 | — |
| Section H2 (`.section-title`) | 26–30px | 500 serif | 1.15 | — |
| Section lede (`.section-lede`) | 14–15px | 400 sans | 1.65 | 640px (~65 chars) |
| Body | 13–13.5px | 400 sans | 1.65 | 75 chars |
| Section num (`.section-num`) | 10–11px | 600 cond | 1.2 | — |
| Meta / caption | 9–11px | 400–600 | 1.4 | — |

### 3.3 Hierarchy rules

- **One `<h1>` per document** — on cover only.
- Interior sections use `<h2 class="section-title">` with `<em>` for serif italic emphasis — not bold.
- Section numbers: `02 — Research design` (condensed, uppercase, blue).
- Title emphasis pattern: `Decision-ready sizing for<br><em>interventional cardiology devices.</em>`

---

## 4. Spacing & layout

### 4.1 Page grid

| Property | Value |
|----------|-------|
| A4 page | 210mm × 297mm |
| Interior padding | 48px 56px (`.page`) |
| Document max-width (screen) | 920px (`.document` wrapper) |
| Section gap | 18–24px between rule and title; 20px title to lede |
| Cover padding | 48px 56px 40px |

### 4.2 Composition

- **Visual hierarchy:** cover gradient → gold kicker → serif H1 → muted subhead → meta strip.
- **Negative space:** lede max-width 640px; avoid full-bleed body text blocks.
- **F-pattern:** section num + title left-aligned; supporting content below; CTAs bottom-right on closing pages.

Shared spacing tokens:

```css
--space-xs: 8px;
--space-sm: 12px;
--space-md: 20px;
--space-lg: 32px;
--space-xl: 48px;
--radius: 3px;
```

---

## 5. Print rules

### 5.1 Required CSS

```css
@page { size: A4; margin: 0; }

.page {
  width: 210mm;
  min-height: 297mm;
  page-break-after: always;
  break-after: page;
}

.page:last-child {
  page-break-after: auto;
}

@media print {
  body { background: #fff; padding: 0; }
  .document { margin: 0; border: none; box-shadow: none; max-width: none; }
  .page { margin: 0 !important; box-shadow: none; border-radius: 0; }
}

body {
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
```

### 5.2 Export guidance

| Output | Method | Notes |
|--------|--------|-------|
| PDF | Chrome/Edge → Print → Save as PDF | Enable "Background graphics" |
| PDF (high-res stamps) | Use `bionixus-stamp-us-hires.png` | Swap before print export |
| Screen preview | Open HTML in browser | `.document` wrapper adds shadow |

### 5.3 Page-break discipline

- Each major section = one `.page` section.
- Avoid breaking inside `.fee-table` rows, `.timeline` blocks, signature blocks.
- Use `page-break-inside: avoid` on `.sig`, `.stat-grid`, `.case-card`.

---

## 6. Component library

| Component | Class | Usage |
|-----------|-------|-------|
| Document shell | `.document` | Screen wrapper around all `.page` sections |
| Cover | `.cover` | Full-bleed navy gradient, white type |
| Cover kicker | `.cover-kicker` | Condensed gold uppercase label |
| Meta strip | `.meta` | 3-column client/year/ref grid on cover |
| Section label | `.section-num` | `01 — Objectives & context` |
| Section title | `.section-title` | Serif H2 with optional `<em>` |
| Lead paragraph | `.section-lede` | Muted, max-width constrained |
| Page rule | `.page-rule` + `.page-rule-text` | Gold bar + condensed label |
| Note / callout | `.note` | Gold left border, off-white fill |
| Fee table | `.fee-table` | Right-align currency columns |
| Timeline | `.timeline` | Week blocks with milestones |
| Stat grid | `.stat-grid` | 3–4 KPI tiles |
| Signature block | `.sigg` | Two-column; see `shared/signature-block.html` |
| Closing CTA | `.page--closing` | Dark background optional |

---

## 7. Document types & templates

Gold-standard templates live in `deliverables/html/templates/`:

| Type | Template file | Section scaffold |
|------|---------------|------------------|
| Proposal (pharma MR) | `template-proposal-pharma.html` | Cover → Letter → 01–08 sections → Signatures |
| Credentials deck | `template-credentials-pharma.html` | Cover → Contents → Heritage → Practice → Relationships → MENA → Back |
| Portfolio appendix | `template-portfolio.html` | Cover → Snapshot → Capabilities → Cases → Geography → Contact |
| Briefing deck | `template-briefing-deck.html` | Cover + 4 slide pages + CTA |
| One-pager | `template-one-pager.html` | Single A4 summary sheet |

Clone the nearest template; replace `{{PLACEHOLDER}}` tokens; never invent layout from scratch.

---

## 8. Naming & metadata

**Title tag:** `BioNixus — {Topic} | {Client} {Year}`

**Filename:** `bionixus-{client-slug}-{topic-slug}-{type}-{year}.html`

- Lowercase, hyphenated, no spaces or underscores.
- Types: `proposal`, `credentials`, `portfolio`, `briefing`, `one-pager`.
- Draft versions: append `-v2`, `-v3` before `.html`.

**Alt text:** Descriptive on every `<img>`. Include subject + context (e.g. `alt="BioNixus logo — healthcare market research"`).

---

## 9. Brand assets

Copy from [BIO-210](/BIO/issues/BIO-210) attachments into the same folder as the output HTML:

| File | Use |
|------|-----|
| `bionixus-logo.png` | Cover, running header |
| `bionixus-seal.png` | Cover / letterhead (decorative) |
| `bionixus-stamp-us.png` | Signature block |
| `bionixus-stamp-egypt-web.png` | Signature block |
| `signature-alsaadany.png` | Signature line |

Paths must be **relative** to the HTML file. Never hotlink external stamp/signature URLs.

---

## 10. Data visualization (when charts appear)

**Lens:** Tufte data-ink ratio · Data visualization fitness · Accessibility.

- Choose chart type by data shape: comparisons → bar; trends → line; part-of-whole → stacked bar (not pie unless ≤4 slices).
- Label axes; never truncate Y-axis without explicit annotation.
- Annotate insights directly on chart — minimize legends when possible.
- Use `--navy`, `--blue`, `--gold` series with distinct dash/pattern fallbacks.

---

## 11. Guardrails

- **Standalone HTML only** — inline CSS; no React/Tailwind/build step for client delivery.
- **No external send** without GeneralCounsel review and CEO approval.
- **No invented pricing** — use `[TBD — CFO input]` until commercial terms confirmed.
- **No fabricated client logos** without explicit assets.
- **Synthetic data only** in templates and samples — no real client research findings.

---

## 12. Implementation handoff

When engineering needs to serve templates on-site (e.g. `/conf/` routes):

1. Route to Front End Engineer via [CTO](/BIO/agents/cto) with this spec + template paths.
2. Specify: SSR not required for static conf decks; SEO meta only if public-facing.
3. Provide acceptance criteria: print CSS intact, relative asset paths, WCAG AA contrast.

---

## 13. Related files

| Path | Purpose |
|------|---------|
| `deliverables/html/templates/` | Gold-standard HTML templates |
| `deliverables/html/templates/shared/tokens.css` | Reference token file (inline into templates) |
| `deliverables/html/templates/shared/signature-block.html` | Drop-in signature component |
| `deliverables/html/samples/` | Filled smoke examples |
| `public/conf/clinical-diagnostics-market-assessment-proposal.html` | Live reference implementation (redacted public deck) |
| `docs/ops/html-deliverables-agent-wiring.md` | Repo path, naming, agent skill assignments |
| [BIO-210 plan](/BIO/issues/BIO-210#document-plan) | Admin proposal skill plan + reference corpus |
| [BIO-210 brand assets](/BIO/issues/BIO-210#document-bionixus-brand-assets) | Stamps, seal, signature block (Admin canonical doc) |
| Company skill `bionixus-proposal-generator` | [Admin-authored](/BIO/agents/admin) · Paperclip Company → Skills · `~/.cursor/skills/bionixus-proposal-generator` |
