# Sanity Content Upload Script

## Prerequisites

1. **Install dependencies:**
   ```bash
   npm install
   ```
   (Run from the `sanity-content-uploader` package root.)

2. **Configure environment variables:**
   Create `.env` file in the package root with:
   ```
   SANITY_PROJECT_ID=h2whvvpo
   SANITY_DATASET=production
   SANITY_TOKEN=skCrWA5fcpR5eXSbZKJn4hMfKMXAT9HccNrCtqwzTuNxIFPG3HxxuDy5kWExIyM7Lynoi2gtuz8MfZsfwjCxKSCEI1bwhkzXHmJiva5f2OmGoXJ6hKFKq1aS3WcykgBeRDYD7DB8r1XIhrNSeCBOVs4RBKhfd3Fj6AyAi6x3YuAAdFd9wa3O
   SANITY_API_VERSION=2024-01-01
   ```

3. **Get Sanity Write Token:**
   - Go to https://sanity.io/manage
   - Select your project (BioNixus Blog: `h2whvvpo`)
   - Navigate to API → Tokens
   - Click "Add API token"
   - Name it "Content Upload Script"
   - Set permissions to "Editor"
   - Copy the token to `.env`

## Usage

### Basic Upload

From the `sanity-content-uploader` directory:
```bash
npm run upload
```

### Step-by-Step Process

The script will:
1. ✅ Load blog post data from `scripts/blogPostData.json`
2. ✅ Create/find author (Mohammad Ashour)
3. ✅ Create/find categories (Market Research, Healthcare, UAE)
4. ✅ Check for existing post
5. ✅ Upload/update blog post to Sanity
6. ✅ Display success message with document ID

### Expected Output

```
================================================================================
🚀 Starting Blog Post Upload to Sanity
================================================================================

Step 1: Processing Author
  👤 Creating/finding author: Mohammad Ashour
  ✓ Author created: author-mohammad-ashour-xyz

Step 2: Processing Categories
  📁 Creating/finding category: Market Research
  ✓ Category created: category-market-research-abc
  📁 Creating/finding category: Healthcare
  ✓ Category created: category-healthcare-def

Step 3: Checking for Existing Post
  ✓ No existing post found

Step 4: Preparing Blog Post Document
  ✓ Document prepared

Step 5: Uploading to Sanity
  ✓ Post created successfully!

================================================================================
✅ Upload Complete!
================================================================================

Document ID: blogPost-healthcare-research-uae-12345
Document Type: blogPost
Title: Healthcare Market Research in UAE: The Definitive Guide
Slug: healthcare-market-research-uae-guide-2025

View in Sanity Studio:
https://h2whvvpo.sanity.studio/desk/blogPost;blogPost-12345
```

## Troubleshooting

### Error: "Missing project ID"
- Check `.env` file exists in `sanity-content-uploader/`
- Verify `SANITY_PROJECT_ID` is set correctly

### Error: "Unauthorized"
- Generate new API token with Editor permissions
- Update `SANITY_TOKEN` in `.env`

### Error: "Document not found"
- Ensure your Sanity schema includes `blogPost` type
- Run `npx sanity schema deploy` in your Sanity studio project (`day-one/apps/studio`)

## Customization

### Modify Blog Post Data

Edit `scripts/blogPostData.json` to change:
- SEO settings
- Content
- FAQ items
- CTA section

### Add Images

The script currently uses placeholders. To upload real images:

1. Uncomment image upload code in `uploadImage()` function
2. Provide image URLs or local paths
3. Script will handle upload to Sanity CDN

## Advanced Usage

### Upload Multiple Posts

Create `scripts/uploadMultiplePosts.ts`:
```typescript
import { uploadBlogPost } from './uploadBlogPost'
import * as fs from 'fs'
import * as path from 'path'

async function uploadMultiple() {
  const postsDir = path.join(__dirname, 'posts')
  const files = fs.readdirSync(postsDir)

  for (const file of files) {
    if (file.endsWith('.json')) {
      const postData = JSON.parse(
        fs.readFileSync(path.join(postsDir, file), 'utf-8')
      )
      await uploadBlogPost(postData)
    }
  }
}

uploadMultiple()
```

Run with:
```bash
npx ts-node scripts/uploadMultiplePosts.ts
```

## Safety Features

- ✅ Checks for existing posts before creating duplicates
- ✅ Creates references (author, categories) automatically
- ✅ Validates required fields
- ✅ Provides detailed error messages
- ✅ Color-coded console output for easy monitoring

## Next Steps

After successful upload:

1. **View in Sanity Studio**
   - Open your Sanity Studio (e.g. `npm run studio` from project root)
   - Navigate to Blog Posts
   - Find your newly created post

2. **Publish**
   - Review content
   - Click "Publish" button

3. **Preview on Website**
   - Visit your site
   - Navigate to `/blog/healthcare-market-research-uae-guide-2025`

## Support

For issues:
1. Check Sanity Studio for validation errors
2. Verify schema matches upload data structure
3. Review console output for detailed error messages
