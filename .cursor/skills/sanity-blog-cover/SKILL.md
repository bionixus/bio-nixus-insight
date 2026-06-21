---
name: sanity-blog-cover
description: Generate and attach BioNixus Sanity blog post cover images — photoreal (Pollinations) or premium SVG template. Use when creating or refreshing blog cover art for Sanity blogPost documents, Q2 pharma insights, SFDA/market-access guides, or when the user asks for a blog hero image, cover photo, or mainImage for a Sanity post.
---

# Sanity Blog Cover — BioNixus

Generate 1200×630 (or 1600×900 cropped) JPEG covers for Sanity `blogPost` documents, then upload and patch `mainImage` / `coverImage`.

**Authority:** [BIO-433](/BIO/issues/BIO-433) · **Child implementation:** [BIO-434](/BIO/issues/BIO-434)

## When to use

Trigger when the user or task asks to:
- Create or refresh a **Sanity blog post cover** / hero image
- Generate a **photoreal editorial cover** for a pharma / market-access article
- Attach `mainImage` to an existing `blogPost` slug
- Batch-generate Q2 2026 pharma insight covers

## Decision tree: photoreal vs SVG template

| Choose | When | Output style |
|--------|------|--------------|
| **Photoreal (Pollinations)** | Thought leadership, country guides, HEOR/market-access, editorial magazine feel, Riyadh/GCC skyline, clinical scenes | Cinematic photo, no baked-in text |
| **SVG template** | Q2 pharma news batch, FDA/EMA approval tickers, therapy-area badges, sponsor line needed on image | BioNixus navy/gold branded layout with title overlay |

**Default for new long-form guides (SFDA, NUPCO, country market access):** photoreal.

**Default for Q2 pharma approval/news posts:** either works; batch scripts use SVG via `generate-blog-cover.mjs`; legacy editorial batch uses photoreal via `generate-q2-pharma-photoreal-covers.mjs`.

## Workflow (single post)

1. **Gather metadata** from the brief or `scripts/data/<slug>.json`:
   - `slug`, `title`, `category`, `country`, `therapeuticArea`, `actionType`, alt-text intent
2. **Pick path** (decision tree above).
3. **Generate locally** → write JPEG under `public/images/blog/` (see path conventions below).
4. **Verify** file exists, ≥5 KB, correct dimensions (1200×630 or 1600×900).
5. **Upload + patch Sanity** (requires `SANITY_TOKEN` in `.env`):
   - One-off: `node scripts/bio-415-cover-update.mjs` (patch by post id)
   - By slug + schema fields: `node scripts/refresh-q2-blog-covers-and-schema.mjs --slug <slug>`
   - Publish new post with cover: `node scripts/publish-sfda-budget-impact-guide-2026.mjs` (pattern reference)
   - Sanity MCP: upload asset → patch `blogPost` `mainImage` + `alt`
6. **Report** output path, asset `_id`, and suggested alt text in the issue comment.

## Path conventions

```
public/images/blog/q2-2026-pharma/{slug}-cover.jpg   # Q2 batch + SFDA guide
public/images/blog/{slug}-cover.jpg                  # flat (legacy / one-offs)
```

Always match the path expected by the publish/refresh script for that slug.

## Photoreal generation

**Shared library:** `scripts/lib/generate-photoreal-blog-cover.mjs`

**SFDA budget impact sample:**

```bash
node scripts/generate-sfda-budget-impact-cover.mjs
```

**Q2 batch (all or one slug):**

```bash
node scripts/generate-q2-pharma-photoreal-covers.mjs --all
node scripts/generate-q2-pharma-photoreal-covers.mjs --slug foundayo-orforglipron-fda-approval-2026
```

Prompt rules (photoreal):
- Start with the shared style prefix (8k, no text, no logos, no watermark).
- Scene = topic-specific: therapy setting, Gulf skyline, HEOR desk, regulatory mood.
- Seed: use `seedFromSlug(slug)` for reproducibility, or fixed seed for hero posts.
- Model: `flux` (default); `turbo` for faster drafts.
- Post-process: vignette + BioNixus gold top bar (automatic in lib).

## SVG template generation

**Library:** `scripts/lib/generate-blog-cover.mjs`

**Single post:**

```bash
node scripts/generate-sfda-cover.mjs
```

Programmatic API:

```javascript
import { generateBlogCover } from './lib/generate-blog-cover.mjs';

await generateBlogCover({
  title: 'Article Title',
  subtitle: 'Saudi Arabia pharmaceutical market access',
  sponsor: 'BioNixus',
  therapeuticArea: 'Market Access / Regulatory',
  actionType: 'Budget Impact',
  slug: 'my-post-slug',
  outPath: 'public/images/blog/q2-2026-pharma/my-post-slug-cover.jpg',
});
```

## Sanity attach (after local JPEG exists)

**Option A — refresh script (preferred for Q2 slugs):**

```bash
node scripts/refresh-q2-blog-covers-and-schema.mjs --slug <slug>
```

**Option B — direct patch (known post id):**

```bash
node scripts/bio-415-cover-update.mjs
```

**Option C — publish script pattern:** see `scripts/publish-sfda-budget-impact-guide-2026.mjs` (`uploadImage` + `client.patch`).

**Alt text:** descriptive, keyword-natural, ≤125 chars. Example:
`SFDA budget impact model planning for Saudi pharmaceutical market access 2026`

## Prompt authoring checklist

When writing a new photoreal prompt from blog metadata:

- [ ] Country/city skyline or clinic setting matches `country` field
- [ ] Visual metaphor matches topic (HEOR charts, infusion suite, formulary tablet, etc.)
- [ ] No text/logos/watermarks in prompt (text added on site, not in image)
- [ ] Professional healthcare tone — no stock-photo clichés (glowing hands, etc.)
- [ ] Alt text drafted separately for Sanity `mainImage.alt`

## Reference files

| File | Role |
|------|------|
| `scripts/lib/generate-photoreal-blog-cover.mjs` | Pollinations fetch + sharp post-process |
| `scripts/lib/generate-blog-cover.mjs` | SVG premium template |
| `scripts/generate-sfda-budget-impact-cover.mjs` | SFDA photoreal hero (reference implementation) |
| `scripts/generate-q2-pharma-photoreal-covers.mjs` | Q2 photoreal batch |
| `scripts/generate-sfda-cover.mjs` | SFDA SVG template variant |
| `scripts/data/q2-2026-cover-prompts.mjs` | Slug → prompt map for Q2 batch |
| `scripts/refresh-q2-blog-covers-and-schema.mjs` | Upload + patch Sanity |
| `scripts/bio-415-cover-update.mjs` | Patch existing post by id |
| `sanity-content-uploader/scripts/updateBIO415Cover.mjs` | Uploader-package variant |

## Agent sync

CMO and Copywriter receive this skill via:

```bash
node scripts/paperclip/sync-html-deliverable-skills.mjs          # dry-run
node scripts/paperclip/sync-html-deliverable-skills.mjs --execute  # CEO permission
```

## Done checklist

- [ ] JPEG on disk at expected path
- [ ] Dimensions verified
- [ ] Alt text written
- [ ] Sanity asset uploaded + `mainImage` patched (or handoff note if token missing)
- [ ] Issue comment: paths, asset id, style chosen (photoreal vs SVG), reviewer tag (@CMO)
