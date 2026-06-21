# BioNixus New Documents — canonical proposal corpus

**Connected:** [BIO-354](/BIO/issues/BIO-354) · **Owner:** [CTO](/BIO/agents/cto)

## Project location

| Field | Value |
|-------|-------|
| **Local path** | `/Users/selim/Documents/01_BioNixus/BioNixus New Documents` |
| **Project skill** | `bionixus-html-documents` at `.cursor/skills/bionixus-html-documents/` |
| **Company skill** | `bionixus-proposal-quotation` — mandatory for all proposal and quotation HTML |
| **Legacy skill** | `bionixus-proposal-generator` — section scaffolds only; do not use for template cloning |

This folder is the **single source of truth** for BioNixus client proposals, credentials decks, portfolio, briefing decks, brand assets, and print/PDF conventions.

## Mandatory review order (proposals & quotations)

Before drafting or editing any client proposal or commercial quotation HTML:

1. **`bionixus-proposal-quotation` skill** (`~/.cursor/skills/bionixus-proposal-quotation/SKILL.md`)
2. **`bionixus-html-documents` skill** (New Documents `.cursor/skills/bionixus-html-documents/SKILL.md`)
3. **`bionixus-brand-assets.md`** (stamps, seal, signature tuning)
4. **`bionixus-signature-block.template.html`** (formal authorization pages)
5. **Nearest reference HTML** from the corpus table below — clone structure and CSS from a real delivered document, not from repo templates

## Reference corpus

| File | Industry / type |
|------|-----------------|
| `bionixus-merck-iraq-rare-disease-market-research-proposal-2026.html` | Pharma MR |
| `bionixus-biorad-qc-ih-market-assessment-proposal-2026.html` | Diagnostics / QC-IH |
| `bionixus-bionorica-price-elasticity-proposal-2026.html` | Pharma HCP / price elasticity |
| `bionixus-credentials-pharma-healthcare.html` | Pharma credentials insert |
| `bionixus-credentials-fmcg.html` | FMCG credentials insert |
| `bionixus-portfolio.html` | Portfolio (golden layout template) |
| `bionixus-biorad-briefing-deck-2026.html` | Briefing deck |
| `teaspoon-franchise-proposal.html` | Franchise / non-healthcare |
| `nilewood-mdf-proposal.html` | MDF / materials + signature block |

Supporting guides in the same folder:

- `.cursor/skills/bionixus-html-documents/print-pdf.md` — print fidelity and headless PDF
- `bionixus-brand-assets.md` — stamp/signature asset dimensions

## Output conventions

| Item | Convention |
|------|------------|
| **New client HTML** | `deliverables/html/bionixus-{client}-{topic}-{type}-{year}.html` in the BioNixus repo |
| **Working copy** | May start in New Documents folder during draft; promote to `deliverables/html/` before issue attachment |
| **Hosted previews** | `*-site/index.html` pattern (see `bionixus-portfolio-site/`, `bionixus-credentials-pharma-healthcare-site/`) |

## Deprecated — do not use

| Path | Reason |
|------|--------|
| `deliverables/html/templates/template-*.html` | Superseded by New Documents reference HTML ([BIO-354](/BIO/issues/BIO-354)) |
| `scripts/build-*-proposal.mjs` that read `template-proposal-*.html` | Rewrite to clone nearest New Documents reference |
| Inventing layout from scratch | Always fork nearest reference HTML in New Documents |

Templates remain in repo for historical diff only. **Agents must not clone them for new work.**

## Agent wiring

| Agent | Skills |
|-------|--------|
| [BusinessDevelopmentManager](/BIO/agents/businessdevelopmentmanager) | `bionixus-proposal-quotation`, `bionixus-html-documents`, `paperclip` |
| [Copywriter](/BIO/agents/copywriter) | same |
| [CMO](/BIO/agents/cmo) | same |
| [Admin](/BIO/agents/admin) | same + `bionixus-proposal-generator` (scaffold reference) |
| [CTO](/BIO/agents/cto) | wiring + skill registry |

Sync script: `node scripts/paperclip/sync-html-deliverable-skills.mjs --execute` (CEO permission).

## Governance

- **Never send externally** without [GeneralCounsel](/BIO/agents/generalcounsel) review and CEO approval
- **Never invent pricing** — use `[TBD — CFO input]` until [CFO](/BIO/agents/cfo) confirms commercial terms
- **One canonical draft per negotiation thread** — version in filename (`-v2`), not orphaned copies
