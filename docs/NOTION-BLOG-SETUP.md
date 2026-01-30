# How to link Notion articles to Topic and Country

This app filters the blog/insights section by **Topic** (category) and **Country**. To feed it from Notion, your Notion database and API mapping must expose those two fields.

---

## 1. Create a Notion database for blog articles

Create a **full-page database** or **inline database** in Notion (e.g. named “Blog” or “Articles”) with these properties:

| Notion property name | Notion type   | Purpose                          |
|----------------------|---------------|----------------------------------|
| **Title**            | Title         | Article title                    |
| **Slug**             | URL or Text   | URL path, e.g. `my-article`     |
| **Excerpt**          | Text          | Short summary                    |
| **Date**             | Date          | Publish date                     |
| **Topic**            | **Select**    | **Topic filter** (category)      |
| **Country**          | **Select**    | **Country filter**               |
| **Cover**            | Files & media | Card image (optional)            |

---

## 2. Link articles to Topic and Country (Select options)

- **Topic** and **Country** are **Select** properties. The options you create there are exactly what appear in the app’s filters.

### Topic (Select)

Add one option per topic you want in the “Topic” filter, for example:

- Market Access  
- Digital Health  
- Oncology  

When you add/edit an article, set **Topic** to one of these. That value is used as the **topic** in the app and in the Topic filter.

### Country (Select)

Add one option per country/region you want in the “Country” filter, for example:

- Europe  
- USA  
- UK  

When you add/edit an article, set **Country** to one of these. That value is used as the **country** in the app and in the Country filter.

You can use the same option names as in your current i18n (e.g. Europe, USA, UK) so filters stay consistent, or add more (e.g. Germany, France).

---

## 3. Map Notion API response to the app

The app expects each post in this shape (see `src/types/blog.ts`):

- `id` – Notion page id  
- `slug` – from Slug  
- `title` – from Title  
- `excerpt` – from Excerpt  
- `date` – from Date (formatted string)  
- **`category`** – from **Topic** (this is the “topic” in the UI and filter)  
- **`country`** – from **Country** (this is the “country” in the UI and filter)  
- `coverImage` – from Cover (optional)  

A ready-made mapper is in `src/lib/notion-blog.ts`:

- **`notionPageToBlogPost(pageId, properties)`** – maps one Notion page to one `BlogPost`.  
- It reads **Topic** → `category`, **Country** → `country`.

Use it when you fetch your Notion database and convert each page to a `BlogPost`, then pass the array to `<BlogSection posts={posts} />`.

---

## 4. Summary

- In **Notion**: use **Topic** (Select) and **Country** (Select) on each article.  
- In **code**: map **Topic** → `category`, **Country** → `country` (e.g. via `notionPageToBlogPost`).  
- The existing Topic and Country filters in the app will then work with your Notion-driven articles.
