# Sanity Blog – Project ID, Dataset, Token & Schema

## 1. Sanity Project ID

```
h2whvvpo
```

## 2. Dataset name

```
production
```

## 3. API token (write access)

**I cannot see or create your API token.** You must create it yourself:

1. Go to **https://sanity.io/manage**
2. Open the project **BioNixus Blog** (or the project with ID `h2whvvpo`)
3. Go to **API** → **Tokens**
4. Click **Add API token**
5. Name it (e.g. `Blog write token`)
6. Set permissions to **Editor** (or **Deploy** if you only need read; for creating/updating blog posts use **Editor**)
7. Copy the token and store it securely (e.g. in `.env` as `SANITY_TOKEN` or `VITE_SANITY_API_TOKEN`). It is shown only once.

Use this token only in server-side or build-time code (e.g. `sanity-content-uploader`). Do not commit it to git or expose it in the browser.

---

## 4. Blog schema (summary)

The blog uses three document types: **blogPost**, **author**, **category**.

### 4.1 `blogPost` (document)

| Field | Type | Required | Notes |
|-------|------|----------|--------|
| **seo** | object | no | SEO Settings |
| seo.metaTitle | string | no | 50–60 chars |
| seo.metaDescription | text | no | 150–160 chars |
| seo.focusKeyword | string | no | Primary keyword |
| seo.keywords | array of string | no | Related keywords |
| seo.canonicalUrl | url | no | |
| seo.noIndex | boolean | no | |
| **openGraph** | object | no | Social sharing |
| openGraph.ogTitle | string | no | |
| openGraph.ogDescription | text | no | |
| openGraph.ogImage | image | no | Has `alt` (required on image) |
| **title** | string | **yes** | Article title |
| **slug** | slug | **yes** | From title, max 96 |
| excerpt | text | no | Short summary, 150–200 words |
| publishedAt | datetime | no | |
| updatedAt | datetime | no | |
| author | reference → author | no | |
| mainImage | image | no | Has `alt` (required), `caption` |
| categories | array of reference → category | no | |
| tags | array of string | no | |
| country | string | no | One of: UK, Germany, France, Spain, Italy, UAE, Saudi Arabia, Egypt, Europe, MENA, Other |
| language | string | no | One of: en, de, fr, es, zh, ar |
| readingTime | number | no | Minutes |
| executiveSummary | array of block | no | Portable text, key takeaways |
| tableOfContents | array of object | no | `heading` (string), `anchor` (string) |
| bodyHtml | text | no | Raw HTML; if set, used instead of body |
| body | array | no | Portable text blocks + image, dataVisualization, callout |
| faq | array of object | no | `question` (string), `answer` (text) |
| relatedPosts | array of reference → blogPost | no | |
| ctaSection | object | no | `title`, `description`, `buttonText`, `buttonUrl` |

**body (structured)** array can contain:

- **block**: normal, h2, h3, h4, blockquote; marks: strong, em, code, link (href, nofollow)
- **image**: with alt (required), caption
- **dataVisualization**: title, type (chart | table | infographic), data, source
- **callout**: type (insight | stat | case-study | tip), title, content

### 4.2 `author` (document)

| Field | Type | Required |
|-------|------|----------|
| name | string | **yes** |
| slug | slug | no |
| image | image | no |
| bio | text | no |

### 4.3 `category` (document)

| Field | Type | Required |
|-------|------|----------|
| title | string | **yes** |
| slug | slug | no |
| description | text | no |

---

## Quick copy

- **Project ID:** `h2whvvpo`
- **Dataset:** `production`
- **Token:** Create at https://sanity.io/manage → project → API → Tokens (Editor permission for write access).

Schema source in repo: `day-one/apps/studio/schemaTypes/` (`blogPost.ts`, `author.ts`, `category.ts`).
