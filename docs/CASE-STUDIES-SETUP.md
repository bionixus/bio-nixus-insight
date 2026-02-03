# Case Studies Setup & Testing

Case studies use a **separate Sanity project** (`gj6cv27f`) and studio. The website shows a grid, contact gate (Formspree), and in-browser PDF viewer.

---

## 1. Environment (already set)

Your `.env` already includes:

```env
VITE_SANITY_CASE_STUDIES_PROJECT_ID=gj6cv27f
VITE_SANITY_CASE_STUDIES_DATASET=production
```

No token is required for public read; add `VITE_SANITY_CASE_STUDIES_API_TOKEN` only if the dataset is private.

---

## 2. CORS for Case Studies project (gj6cv27f)

So the frontend can fetch case studies from Sanity:

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Open the project with ID **gj6cv27f** (BioNixus Case Studies)
3. **API** → **CORS Origins** → **Add CORS origin**
4. Add:
   - `http://localhost:5173` (Vite default)
   - `http://localhost:8082`–`http://localhost:8099` (Vite tries these if 5173 is in use)
   - Your production URL (e.g. `https://bio-nixus-insight.vercel.app`)
5. Save

---

## 3. Run the Case Studies Studio

**First time only** – install studio dependencies:

```bash
cd day-one/apps/studio-case-studies
npm install
```

Then from the repo root:

```bash
npm run studio:case-studies
```

Or from the studio folder: `npm run dev`. Studio will open (e.g. http://localhost:3333). Log in with the Sanity account that owns project **gj6cv27f**.

---

## 4. Create a test case study

1. In the Case Studies studio, create a **Case Study** document.
2. Fill: **Title**, **Slug** (Generate from title), **Excerpt**, **Category**, **Country**, **Cover image** (optional).
3. Upload a **PDF file** (required).
4. Publish.

---

## 5. Test the website

1. **Start the frontend** (from repo root):
   ```bash
   npm run dev
   ```

2. Open **http://localhost:5173/case-studies** (or your dev URL).

3. **Check list**: You should see the case study card(s). If the project has no CORS or no documents, you’ll see “No case studies yet.”

4. **Contact gate**: Click **Request access** on a card. Fill the form (First Name, Last Name, Email, Company; Phone and Message optional). Submit. Formspree should receive the submission with subject “New Form Submission - [First Name] [Last Name]” and request type “Case Study Access Request.”

5. **PDF viewer**: After a successful submit, **View case study** opens. The PDF should render in the modal (scrollable, no download link). Close with **Close**.

6. **Filters**: If you have multiple case studies with different Topic/Country, use the dropdowns to filter.

---

## 6. Troubleshooting

| Issue | What to do |
|-------|------------|
| “No case studies yet” and CORS is set | Confirm project ID in .env is `gj6cv27f` and you have at least one published case study with a PDF. |
| PDF doesn’t load in viewer | Check browser console. If the PDF URL is from Sanity, ensure the asset URL is allowed (no extra auth). |
| Form doesn’t submit | Check Formspree form ID in `CaseStudyContactGate.tsx` (same as main contact form). |
| Studio won’t start | Run `npm install` in `day-one/apps/studio-case-studies`. |

---

## 7. Ports

- **Frontend (Vite):** default `5173`
- **Blog Sanity studio:** often `3333` or `8082`
- **Case Studies studio:** run with `npm run dev` in `studio-case-studies`; Sanity will print the URL (e.g. `3334` if 3333 is in use)
