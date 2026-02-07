# Social Media Meta Tags Solution for Sanity Blog & Case Studies

## Problem
When sharing blog articles or case studies on social media (Facebook, Twitter, LinkedIn), they show the same meta tags and image from the homepage instead of post-specific content.


## Root Cause
Social media crawlers (bots) don't execute JavaScript. Since this is a React SPA, they only see the static HTML in `index.html`, not the dynamic content from Sanity.

## Solution Overview
We implemented a **dual-approach solution** that:
1. ✅ Works with your existing Sanity.IO setup (blog and case studies - no changes to Sanity)
2. ✅ Serves dynamic meta tags to social media bots
3. ✅ Maintains fast performance for regular users


## How It Works

### For Regular Users:
- React app loads normally
- `react-helmet-async` dynamically updates meta tags from Sanity data
- Fast, client-side rendering

### For Social Media Bots:
1. **Middleware** (`middleware.js`) detects bot user-agents
2. **Redirects** bot to appropriate serverless function (`/api/blog/[slug].js` or `/api/case-studies/[slug].js`)
3. **Serverless function** fetches post/case study data directly from Sanity
4. **Generates** static HTML with proper meta tags
5. **Bot sees** correct title, description, and image

## Files Modified/Created

### 1. `src/App.tsx`
- Added `<HelmetProvider>` wrapper

### 2. `src/pages/BlogPost.tsx`
- Added `<Helmet>` component with dynamic meta tags from Sanity data
- Uses existing post data: `title`, `excerpt`, `coverImage`, `date`, `category`

### 3. `src/pages/CaseStudy.tsx`
- Added `<Helmet>` component with dynamic meta tags from Sanity data  
- Uses existing case study data: `title`, `excerpt`, `coverImage`, `date`, `category`

### 4. `middleware.js` (New)
- Detects social media crawlers
- Redirects them to the appropriate serverless function (blog or case studies)

### 5. `api/blog/[slug].js` (New)
- Fetches blog post data from Sanity (project h2whvvpo)
- Generates HTML with proper Open Graph and Twitter Card meta tags

### 6. `api/case-studies/[slug].js` (New)
- Fetches case study data from Sanity (project gj6cv27f)
- Generates HTML with proper Open Graph and Twitter Card meta tags

## Environment Variables Required

Make sure these are set in your Vercel dashboard (they should already be in your `.env`):

```bash
# Blog posts (project h2whvvpo)
VITE_SANITY_PROJECT_ID=h2whvvpo
VITE_SANITY_DATASET=production
VITE_SANITY_API_TOKEN=  # Optional, only if dataset is private

# Case Studies (project gj6cv27f)
VITE_SANITY_CASE_STUDIES_PROJECT_ID=gj6cv27f
VITE_SANITY_CASE_STUDIES_DATASET=production
```

## Testing

### Test with Facebook Debugger:
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your URL: `https://bionixus.com/blog/your-post-slug` or `https://bionixus.com/case-studies/your-case-slug`
3. Click "Scrape Again"
4. Should now show post-specific title, description, and image

### Test with Twitter Card Validator:
1. Go to: https://cards-dev.twitter.com/validator
2. Enter your blog post URL
3. Should show correct Twitter Card

### Test with LinkedIn:
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter your blog post URL
3. Should show correct preview

## Deployment

1. **Commit and push** all changes
2. **Vercel will automatically deploy** the middleware and serverless function
3. **Test with the debuggers** above

## What's Safe with Sanity

✅ **No Changes to Sanity Schema**  
✅ **No Changes to How Data is Fetched**  
✅ **No Changes to Your Sanity Studio**  
✅ **Serverless function reads from Sanity (read-only)**  
✅ **Your existing blog writing workflow is unchanged**

The solution only **reads** from Sanity to generate meta tags for bots. Your content creation workflow in Sanity Studio remains exactly the same.

## Troubleshooting

### If social previews still show homepage:
1. Check that environment variables are set in Vercel dashboard
2. Clear social media cache:
   - Facebook: Use the debug tool and click "Scrape Again"
   - Twitter: Card validator automatically refreshes
   - LinkedIn: Use the post inspector

### If middleware isn't working:
- Check Vercel deployment logs
- Verify middleware.js was deployed
- Test with curl: `curl -A "facebookexternalhit/1.1" https://bionixus.com/blog/your-slug`

## Next Steps

After deployment, share a blog post on social media and verify:
- ✅ Shows correct post title
- ✅ Shows correct post excerpt/description
- ✅ Shows correct post cover image
- ✅ Links to correct URL

---

**Note**: The first share after deployment might use cached data. Use the debugging tools above to force a refresh.
