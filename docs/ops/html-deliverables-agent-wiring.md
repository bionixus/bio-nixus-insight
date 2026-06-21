# HTML deliverables — repo conventions & agent skill wiring

**Issues:** [BIO-240](/BIO/issues/BIO-240) · Parent [BIO-237](/BIO/issues/BIO-237) · Design [BIO-239](/BIO/issues/BIO-239) · SOP [BIO-241](/BIO/issues/BIO-241)

## Admin lineage ([BIO-210](/BIO/issues/BIO-210)) — canonical references

The proposal workflow originates from [Admin](/BIO/agents/admin) under [BIO-210](/BIO/issues/BIO-210). **Always consult these before generating client HTML:**

| Reference | Link | Contents |
|-----------|------|----------|
| **Implementation plan** | [BIO-210 plan](/BIO/issues/BIO-210#document-plan) | Reference corpus table, skill deliverables, acceptance criteria |
| **Brand assets kit** | [BIO-210 brand assets](/BIO/issues/BIO-210#document-bionixus-brand-assets) | Stamps, seal, signature PNGs, signature-block tuning values, typography/colors |
| **Reference HTML attachments** | [BIO-210 attachments](/BIO/issues/BIO-210) | Merck pharma, Bio-Rad diagnostics, FMCG credentials, portfolio, briefing deck, franchise, MDF proposals |
| **Skill (Admin-authored)** | `bionixus-proposal-generator` | `~/.cursor/skills/bionixus-proposal-generator/` — see [BIO-211](/BIO/issues/BIO-211) delivery thread |

**Skill file map** (load `SKILL.md` first):

| Path | Purpose |
|------|---------|
| `SKILL.md` | Triggers, workflow, guardrails, output naming |
| `reference/scaffold.md` | Section scaffolds for 8 industry forks |
| `reference/brand-assets.md` | Mirrors [BIO-210 brand assets doc](/BIO/issues/BIO-210#document-bionixus-brand-assets) |
| `reference/html-conventions.md` | CSS palettes, print rules, slide format |
| `templates/signature-block.html` | Nilewood MDF signature cluster |
| `scripts/analyze-proposal.mjs` | Extract sections from reference HTML |
| `scripts/build-outline.mjs` | Generate new-industry outline |

**Registry:** company skill key `local/6597aded2d/bionixus-proposal-generator` — already synced to Admin; extend to other content agents via [BIO-242](/BIO/issues/BIO-242).

## Output path & naming

| Item | Convention |
|------|------------|
| **Root** | `deliverables/html/` at repo root |
| **Client outputs** | `deliverables/html/bionixus-{client-slug}-{topic-slug}-{type}-{year}.html` |
| **Templates (clone only)** | `deliverables/html/templates/template-{type}-{fork}.html` |
| **Shared assets** | `deliverables/html/templates/shared/` (`tokens.css`, `signature-block.html`) |
| **Smoke / QA samples** | `deliverables/html/samples/` (synthetic data only) |
| **Working outlines** | `tmp/bionixus-{client}-proposal-outline-{year}.md` until HTML exists |

**Type slugs:** `proposal`, `credentials`, `portfolio`, `briefing-deck`, `one-pager`, `case-study`, `newsletter`

**Rules:** lowercase, hyphenated, no spaces or underscores. One canonical HTML file per deliverable version.

## Design spec (read before generating)

1. [BIO-210 plan](/BIO/issues/BIO-210#document-plan) + [brand assets doc](/BIO/issues/BIO-210#document-bionixus-brand-assets) — Admin canonical references
2. Company skill **`bionixus-proposal-generator`** (`SKILL.md` + `reference/`) — authored by [Admin](/BIO/agents/admin) on [BIO-211](/BIO/issues/BIO-211)
3. `deliverables/html/DESIGN-SPEC.md` — print shell, tokens, components ([BIO-239](/BIO/issues/BIO-239))
4. `docs/design/premium-html-conventions.md` — lenses, accessibility, chart rules
5. Clone nearest template from `deliverables/html/templates/` — do not invent layout from scratch

## Company skill registry

| Skill | Slug | Company key | Source |
|-------|------|-------------|--------|
| **BioNixus proposal generator** | `bionixus-proposal-generator` | `local/6597aded2d/bionixus-proposal-generator` | [Admin-authored](/BIO/agents/admin) · [BIO-210](/BIO/issues/BIO-210) · `~/.cursor/skills/bionixus-proposal-generator` |

**When to load:** Any task producing proposals, credentials decks, portfolio appendices, briefing decks, or client SOW-style HTML.

**Skill workflow:** Intake → pick industry fork → clone reference → fill variables → GC review → save under `deliverables/html/`.

Install/update in Paperclip UI: **Company → Skills → bionixus-proposal-generator**.

## Agent assignments

| Agent | Skill | Repo responsibility |
|-------|-------|---------------------|
| [BusinessDevelopmentManager](/BIO/agents/businessdevelopmentmanager) | `bionixus-proposal-generator` | Draft proposal HTML from pipeline tasks |
| [Copywriter](/BIO/agents/copywriter) | `bionixus-proposal-generator` | Narrative copy inside HTML scaffolds |
| [CMO](/BIO/agents/cmo) | `bionixus-proposal-generator` | Marketing one-pagers, case studies, newsletter HTML |
| [Admin](/BIO/agents/admin) | `bionixus-proposal-generator` *(primary owner)* | Skill author; contract-adjacent proposal packs; see [BIO-210](/BIO/issues/BIO-210) |
| [CreativeArtDirector](/BIO/agents/creativeartdirector-2) | *(no skill — design owner)* | Maintain templates in `deliverables/html/templates/` |
| [CTO](/BIO/agents/cto) | — | Repo structure, skill wiring, static serve paths |

All content agents must **emit branded HTML** alongside any markdown/PDF draft when the deliverable is client-facing or leaves the org externally ([BIO-241](/BIO/issues/BIO-241) SOP).

## Sync skills to agents

Requires `agents:create` permission (CEO or board). Dry-run lists targets; `--execute` applies.

```bash
node scripts/paperclip/sync-html-deliverable-skills.mjs
node scripts/paperclip/sync-html-deliverable-skills.mjs --execute
```

Manual API (per agent):

```bash
curl -sS -X POST "$PAPERCLIP_API_URL/api/agents/<agent-id>/skills/sync" \
  -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"desiredSkills": ["bionixus-proposal-generator", "paperclip"]}'
```

Preserve existing skills — sync is additive; pass the full desired set for each agent.

## Legal & send gates

1. **GeneralCounsel** — terms, data handling, claims before external send
2. **CEO / COO** — strategic proposals and pricing visibility
3. **CFO** — commercial terms and fee tables

Never attach client HTML to external email without GC review status noted in the issue thread.

## Related paths

```
deliverables/
├── README.md
└── html/
    ├── DESIGN-SPEC.md
    ├── templates/
    │   ├── template-proposal-pharma-mr.html
    │   └── shared/
    ├── samples/
    └── shared/
        └── bionixus-premium-base.css
docs/design/premium-html-conventions.md
docs/ops/html-deliverables-agent-wiring.md   ← this file
```

Template library ([BIO-239](/BIO/issues/BIO-239) done): `template-proposal-pharma.html`, `template-proposal-pharma-mr.html`, `template-credentials-pharma.html`, `template-portfolio.html`, `template-briefing-deck.html`, `template-one-pager.html`.
