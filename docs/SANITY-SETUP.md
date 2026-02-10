# Sanity CMS Setup for BioNixus Blog

Connect Sanity to power the blog/insights section on [https://bio-nixus-insight.vercel.app/](https://bio-nixus-insight.vercel.app/).

---

## 1. Create a Sanity Project

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Create a new project (or use existing)
3. Note your **Project ID** (BioNixus Blog: `h2whvvpo`, Case Studies: `gj6cv27f`)

---

## 2. Create a Post Schema

In your Sanity studio, add a `post` type with these fields:

| Field       | Type   | Required | Notes                          |
|------------|--------|----------|--------------------------------|
| title      | string | yes      | Post title                     |
| slug       | slug   | yes      | URL slug (slug.current)        |
| excerpt    | text   | no       | Short summary                  |
| publishedAt| datetime| no      | Publish date                   |
| category   | string or reference | no | Topic filter (Market Access, Oncology, etc.) |
| country    | string or reference | no | Country filter (UK, Germany, etc.) |
| mainImage  | image  | no       | Cover image                    |
| body       | text   | no       | Full article (HTML supported)  |
| language   | string | no       | en, de, fr, es, zh, ar. Empty = show in all locales |

**Blog image dimensions:** The site displays cover images in a **16:10** aspect ratio. For best quality, upload images at **1200×750 px** or **1600×1000 px** (16:10). Hotspot is enabled so you can set the focal point in Sanity.

Example schema (add to `schemas/post.ts`):

```javascript
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'country', title: 'Country', type: 'string' },
    { name: 'mainImage', title: 'Main image', type: 'image' },
  ],
}
```

---

## 3. Create an API Token

1. Go to [sanity.io/manage](https://sanity.io/manage) → your project
2. **API** → **Tokens** → **Add API token**
3. Name: e.g. `BioNixus Blog Read`
4. Permissions: **Viewer** (read-only)
5. Copy the token (starts with `sk...`)

---

## 4. Add Environment Variables

### Local development

Create `.env` in the project root (copy from `.env.example`):

```env
VITE_SANITY_PROJECT_ID=h2whvvpo
VITE_SANITY_DATASET=production
VITE_SANITY_API_TOKEN=
SANITY_API_TOKEN=skCrWA5fcpR5eXSbZKJn4hMfKMXAT9HccNrCtqwzTuNxIFPG3HxxuDy5kWExIyM7Lynoi2gtuz8MfZsfwjCxKSCEI1bwhkzXHmJiva5f2OmGoXJ6hKFKq1aS3WcykgBeRDYD7DB8r1XIhrNSeCBOVs4RBKhfd3Fj6AyAi6x3YuAAdFd9wa3O
RESEND_API_KEY=re_XaGvfMdJ_E16Vs44Ewh9eTCFCAzjqJ6cW
RESEND_WEBHOOK_SECRET=whsec_8cEHGAUUEpxYo40mudctJG2Wn/FLbIBX
ADMIN_PASSWORD=BioNixus2026!
VITE_BASE_URL=https://bionixus.com
```

### Vercel

1. Go to [vercel.com](https://vercel.com) → your project **bio-nixus-insight**
2. **Settings** → **Environment Variables**
3. Add:
   - `VITE_SANITY_PROJECT_ID` = `h2whvvpo`
   - `VITE_SANITY_DATASET` = `production`
   - `SANITY_API_TOKEN` = (write token from Sanity manage)
   - `RESEND_API_KEY` = (from Resend dashboard)
   - `RESEND_WEBHOOK_SECRET` = (from Resend webhook settings)
   - `ADMIN_PASSWORD` = `BioNixus2026!`
   - `VITE_BASE_URL` = `https://bionixus.com`
4. **Save** and redeploy

---

## 5. CORS (if needed)

If your site is on a different domain than Sanity (e.g. bio-nixus-insight.vercel.app):

1. Go to [sanity.io/manage](https://sanity.io/manage) → your project
2. **API** → **CORS Origins**
3. Add: `https://bio-nixus-insight.vercel.app`
4. Add for local dev: `http://localhost:8082`

---

## 6. Change Website URL Later

Yes, you can change the website URL later:

1. **Vercel**: Add a custom domain (e.g. bionixus.com) in Vercel project settings
2. **Sanity CORS**: Add the new domain in Sanity CORS origins
3. Environment variables stay the same (project ID, dataset, token)

---

## 7. Fallback Behavior

- When Sanity env vars are **not set**: blog uses i18n placeholder content
- When Sanity env vars **are set**: blog fetches from Sanity; if fetch fails, i18n fallback is used

---

## 8. Articles per language

Each post has a **Language** field (English, Deutsch, Français, etc.). The website shows only articles whose language matches the current site locale. Posts with **no language set** are shown in all languages.

### Manual translation

- Create one post per language: e.g. one post in English (language: English), then duplicate and translate for Deutsch (language: Deutsch). Use the same slug if you want one URL per language, or different slugs (e.g. `our-services` vs `unsere-leistungen`).

### Automatic translation (optional)

Sanity does not translate content automatically. You can add it in one of these ways:

1. **Sanity Action** – Custom “Translate to [language]” button in the Studio that calls an API (e.g. [DeepL](https://www.deepl.com/pro-api) or [Google Cloud Translation](https://cloud.google.com/translate)) and fills title/excerpt/body for the target language. Requires a small script in `day-one/apps/studio` and an API key.
2. **External workflow** – Export content, translate in bulk (e.g. DeepL, Phrase, Lokalise), then import or paste translations into Sanity.
3. **Third‑party plugins** – Search the [Sanity plugin directory](https://www.sanity.io/plugins) for “translation” or “i18n” to see community solutions.
