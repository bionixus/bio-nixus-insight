# BioNixus Deliverables

Production-ready client-facing HTML documents and design assets.

## Canonical references ([BIO-354](/BIO/issues/BIO-354) / New Documents)

Before generating proposals or quotations, load these in order:

1. **`bionixus-proposal-quotation` skill** — mandatory workflow; bans ready-made templates
2. **`bionixus-html-documents` skill** — design system from New Documents project
3. **[New Documents manifest](../docs/ops/bionixus-new-documents-project.md)** — corpus path, reference table, agent wiring
4. **Reference HTML** in `/Users/selim/Documents/01_BioNixus/BioNixus New Documents/` — clone nearest real document

Legacy: [BIO-210](/BIO/issues/BIO-210) attachments and `bionixus-proposal-generator` scaffolds (`reference/` only).

## Structure

```
deliverables/
├── README.md
└── html/
    ├── DESIGN-SPEC.md          # Print shell, tokens, components (design owner)
    ├── templates/              # DEPRECATED — see templates/DEPRECATED.md
    │   ├── template-proposal-pharma.html
    │   ├── template-proposal-pharma-mr.html
    │   ├── template-credentials-pharma.html
    │   ├── template-portfolio.html
    │   ├── template-briefing-deck.html
    │   ├── template-one-pager.html
    │   └── shared/
    │       ├── tokens.css
    │       └── signature-block.html
    ├── shared/
    │   └── bionixus-premium-base.css
    └── samples/                # Filled smoke examples (synthetic data only)
        └── bionixus-acme-medtech-*-2026.*
```

Template library maintained by [CreativeArtDirector](/BIO/agents/creativeartdirector-2) per [BIO-239](/BIO/issues/BIO-239).

## Naming

`bionixus-{client-slug}-{topic-slug}-{type}-{year}.html`

Examples:
- `bionixus-acme-medtech-gcc-catheter-market-sizing-proposal-2026.html`
- `bionixus-credentials-pharma-healthcare.html`

Full rules: [`docs/ops/html-deliverables-agent-wiring.md`](../docs/ops/html-deliverables-agent-wiring.md)

## Design spec

| Doc | Purpose |
|-----|---------|
| [BIO-210 brand assets](/BIO/issues/BIO-210#document-bionixus-brand-assets) | Stamps, seal, signature PNGs (Admin canonical) |
| [`bionixus-proposal-generator` skill](/BIO/issues/BIO-210) | Workflow + `reference/` scaffolds (Admin-authored) |
| [`html/DESIGN-SPEC.md`](html/DESIGN-SPEC.md) | Tokens, typography, spacing, print CSS |
| [`docs/design/premium-html-conventions.md`](../docs/design/premium-html-conventions.md) | Lenses, accessibility, data viz |

## Workflow

1. Load company skills **`bionixus-proposal-quotation`** + **`bionixus-html-documents`** (Paperclip → Company Skills).
2. Review nearest reference HTML in **BioNixus New Documents** folder — do **not** clone `html/templates/`.
3. Replace client-specific content; preserve structure and print CSS from the reference.
4. Save output under `deliverables/html/`.
5. Copy brand assets from New Documents folder when bundling.
6. Route to [GeneralCounsel](/BIO/agents/generalcounsel) before external send.

## Agent wiring

See [`docs/ops/html-deliverables-agent-wiring.md`](../docs/ops/html-deliverables-agent-wiring.md) for skill assignments and sync script.

## Company skill

| Skill | Slug | Use when |
|-------|------|----------|
| BioNixus proposal & quotation | `bionixus-proposal-quotation` | **All new** proposals, quotations, credentials, decks |
| BioNixus HTML documents | `bionixus-html-documents` | Design system, print/PDF, portfolio layout |
| BioNixus proposal generator (legacy) | `bionixus-proposal-generator` | Section scaffolds + analyze scripts only |

Source: [Admin-authored skill](/BIO/agents/admin) · [BIO-210](/BIO/issues/BIO-210) · `~/.cursor/skills/bionixus-proposal-generator` · Registry: Paperclip Company → Skills.
