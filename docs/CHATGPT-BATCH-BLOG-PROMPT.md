# ChatGPT Prompt: Batch 20 Blog Articles for BioNixus Sanity Blog

Copy the entire **Prompt** section below into ChatGPT. Use the **Output format** so you can paste the result into a Google Sheet (one row per article, columns as below) or export as JSON and give it back for Sanity import.

---

## Prompt (copy from here)

You are an expert healthcare and pharmaceutical market research content writer. Your task is to create **20 blog articles** for BioNixus (EMEA healthcare market research firm). Each article must target **one main keyword** and follow the **Sanity blogPost schema** below. Content must be **McKinsey-style**: clear structure, data-backed, executive-friendly, with a short executive summary, scannable headings, and concise paragraphs.

### Most important keywords (one per article)

Use these 20 keywords as the **primary focus keyword** for each article (one keyword per article, in this order):

1. healthcare market research Europe  
2. pharmaceutical market research UK  
3. physician surveys healthcare  
4. hospital market research  
5. market access Europe pharmaceutical  
6. competitive intelligence pharma  
7. healthcare insights MENA  
8. clinical trials market research  
9. oncology market research Europe  
10. digital health market research  
11. healthcare quantitative research  
12. KOL research pharmaceutical  
13. healthcare qualitative research  
14. market research UAE healthcare  
15. Saudi Arabia pharmaceutical market  
16. healthcare consulting Europe  
17. biotech market research  
18. HTA market access research  
19. healthcare surveys physicians  
20. life sciences market research  

### Sanity blogPost structure (BioNixus)

Each article must conform to this structure. All fields are for the **blogPost** document type.

**Required / core**

- **title** (string): Article title, SEO-friendly, include the main keyword naturally. Max ~60 chars for SEO.
- **slug** (string): URL slug, lowercase, hyphens only, e.g. `healthcare-market-research-europe`. No spaces. Derived from title.
- **excerpt** (string): Short summary, 2–4 sentences, 150–200 words. Include main keyword.
- **bodyHtml** (string): **Full article body in HTML.** This is the main content. Must be **McKinsey style** (see below). Use only: `<p>`, `<h2>`, `<h3>`, `<h4>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<em>`, `<a href="...">`. Escape any quotes inside HTML attributes. No `<script>`, no inline styles. Length: 800–1500 words per article.
- **focusKeyword** (string): The one main keyword for this article (from the list above).
- **language** (string): Must be exactly one of: `en` | `de` | `fr` | `es` | `zh` | `ar`. Use `en` for all 20 unless specified otherwise.
- **publishedAt** (string): ISO 8601 date-time, e.g. `2025-02-01T10:00:00.000Z`. Space articles across recent months.

**SEO (optional but recommended)**

- **metaTitle** (string): 50–60 chars, include focus keyword.
- **metaDescription** (string): 150–160 chars, include focus keyword and a clear value proposition.
- **keywords** (array of strings): 5–10 related keywords/phrases, e.g. `["market research UK", "pharma insights", ...]`.

**Filtering / taxonomy**

- **country** (string): Exactly one of: `UK` | `Germany` | `France` | `Spain` | `Italy` | `UAE` | `Saudi Arabia` | `Egypt` | `Europe` | `MENA` | `Other`. Choose the most relevant for the article topic.
- **tags** (array of strings): 3–8 tags, e.g. `["market access", "oncology", "Europe"]`.
- **categoryTitle** (string): For import mapping. One of: `Market Access` | `Digital Health` | `Oncology` | `Clinical Trials` | `Healthcare Research` | `Other`. (In Sanity this is a reference; we use title here to match later.)

**Content extras (optional but recommended)**

- **executiveSummary** (string): Plain text, 2–4 bullet points or short paragraphs. Key takeaways. Will be stored as block content; provide as a single text with line breaks.
- **tableOfContents** (array of objects): `[ { "heading": "Introduction", "anchor": "introduction" }, { "heading": "Methods", "anchor": "methods" }, ... ]`. Anchors must match id or slug of headings in bodyHtml (e.g. `<h2 id="introduction">`).
- **readingTime** (number): Integer, estimated minutes to read (e.g. 5–8).
- **faq** (array of objects): 3–5 items. `[ { "question": "...", "answer": "..." }, ... ]`.
- **ctaSection** (object): `{ "title": "...", "description": "...", "buttonText": "...", "buttonUrl": "https://bionixus.com/..." }`.

**Not needed for batch (can be filled in Sanity later)**

- author (reference)  
- mainImage (image)  
- openGraph (ogTitle, ogDescription, ogImage)  
- categories (array of references)  
- relatedPosts  

### McKinsey style for bodyHtml

- **Opening:** One short paragraph stating the issue and why it matters (2–4 sentences).
- **Structure:** Use `<h2>` for main sections, `<h3>` for subsections. Headings should be clear and scannable.
- **Paragraphs:** Short (2–4 sentences). One idea per paragraph. Lead with the conclusion or key point.
- **Lists:** Use `<ul>` or `<ol>` for 3+ items; keeps content scannable.
- **Tone:** Professional, data-oriented, no fluff. Use “we” sparingly; focus on the reader and the market.
- **Evidence:** Include 1–2 concrete numbers or trends where plausible (e.g. “X% of physicians…”, “market growth of Y…”).
- **Close:** Short summary or forward-looking sentence; no lengthy repetition.
- **HTML only:** Use `<p>`, `<h2>`, `<h3>`, `<h4>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<em>`, `<a href="...">`. Add `id` to `<h2>`/`<h3>` to match tableOfContents anchors (e.g. `<h2 id="introduction">`).

### Output format

Produce your response as a **JSON array** of exactly 20 objects. Each object is one article. Use the exact field names below so the output can be pasted into a Google Sheet (one row per article, one column per field) or saved as a `.json` file for import.

**Required fields per article (use these keys):**

```json
{
  "title": "string",
  "slug": "string",
  "excerpt": "string",
  "bodyHtml": "string (full McKinsey-style HTML)",
  "focusKeyword": "string",
  "language": "en",
  "publishedAt": "ISO 8601 string",
  "metaTitle": "string",
  "metaDescription": "string",
  "keywords": ["string"],
  "country": "string",
  "tags": ["string"],
  "categoryTitle": "string",
  "executiveSummary": "string",
  "tableOfContents": [{"heading": "string", "anchor": "string"}],
  "readingTime": number,
  "faq": [{"question": "string", "answer": "string"}],
  "ctaSection": {"title": "string", "description": "string", "buttonText": "string", "buttonUrl": "string"}
}
```

**Important for bodyHtml in JSON:** Escape double quotes inside the HTML as `\"` and keep newlines as `\n` (or minify to one line). Ensure the JSON is valid so it can be parsed programmatically.

**Deliver:**  
1. The full JSON array of 20 articles.  
2. Optionally, a CSV-style header row and one row per article (tab or comma separated) so the user can paste into Google Sheets. Use a single column for bodyHtml and escape tabs/newlines in that column (e.g. replace with space or “ | ” for Sheets).

---

## After you have the output

1. **For Google Sheets:** Paste the CSV-style rows (header + 20 rows) into a new sheet. Keep bodyHtml in one column; you may need to widen it or wrap text.
2. **For Sanity import:** Save the JSON array to a file (e.g. `batch-blog-articles.json`) and share it. A script or Sanity tool can then map these objects to `blogPost` documents (including mapping `categoryTitle` to a category reference and setting a default author if needed).

---

## Quick reference: allowed values

| Field           | Allowed values |
|----------------|----------------|
| language       | `en`, `de`, `fr`, `es`, `zh`, `ar` |
| country        | `UK`, `Germany`, `France`, `Spain`, `Italy`, `UAE`, `Saudi Arabia`, `Egypt`, `Europe`, `MENA`, `Other` |
| categoryTitle  | `Market Access`, `Digital Health`, `Oncology`, `Clinical Trials`, `Healthcare Research`, `Other` |
