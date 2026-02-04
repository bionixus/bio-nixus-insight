# Complete Upload System Usage Guide

## Features

✅ **Image Upload** - Automatically uploads and optimizes images to Sanity CDN
✅ **Batch Processing** - Upload multiple blog posts at once
✅ **Dry-Run Mode** - Preview changes without actually uploading
✅ **Progress Tracking** - Real-time statistics and colored output
✅ **Error Handling** - Graceful failures with detailed error messages
✅ **Auto-Creation** - Automatically creates authors and categories if missing

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment

Create `.env`:
```
SANITY_PROJECT_ID=abc123xyz
SANITY_DATASET=production
SANITY_TOKEN=skXXXXXXXXXXXXXXXXXX
SANITY_API_VERSION=2024-01-01
```

### 3. Upload Single Post
```bash
# Real upload
npm run upload

# Dry-run (preview only)
npm run upload:dry-run
```

### 4. Batch Upload
```bash
# Real upload
npm run upload:batch

# Dry-run (preview only)
npm run batch:dry-run
```

---

## Single Post Upload

### Prepare Data

Edit `scripts/blogPostData.json` with your content.

### Add Images

**From URL:**
```json
{
  "mainImage": {
    "url": "https://example.com/image.jpg",
    "alt": "Image description",
    "caption": "Optional caption"
  }
}
```

**From Local File:**
```json
{
  "mainImage": {
    "localPath": "/path/to/image.jpg",
    "alt": "Image description"
  }
}
```

### Run Upload
```bash
npm run upload
```

### Expected Output
```
================================================================================
🚀 Starting Blog Post Upload to Sanity
================================================================================

Step 1: Processing Author
  👤 Processing author: Mohammad Ashour
    ✓ Author found: author-mohammad-abc123

Step 2: Processing Categories
  📁 Processing category: Market Research
    ✓ Category found: category-market-research-xyz

Step 3: Processing Main Image
  📸 Uploading image: Modern UAE hospital corridor...
    → Downloading from URL: https://images.unsplash.com/...
    → Optimizing image...
    → Optimized to 245KB
    → Uploading to Sanity CDN...
    ✓ Image uploaded: image-abc123-1920x1080-jpg

Step 4: Processing Open Graph Image
  📸 Uploading image: Healthcare professionals reviewing data...
    ✓ Image uploaded: image-def456-1200x630-jpg

Step 5: Processing Body Images
  📸 Uploading image: UAE healthcare facility...
    ✓ Image uploaded: image-ghi789-1200x600-jpg

Step 6: Checking for Existing Post
    ✓ No existing post found

Step 7: Preparing Blog Post Document
    ✓ Document prepared

Step 8: Uploading to Sanity
    ✓ Post created successfully!

================================================================================
✅ Upload Complete!
================================================================================

Document ID: blogPost-healthcare-uae-abc123
Title: Healthcare Market Research in UAE
Slug: healthcare-market-research-uae-guide-2025

View in Sanity Studio:
https://your-project.sanity.studio/desk/blogPost;blogPost-abc123

--------------------------------------------------------------------------------
Statistics:
  Authors created: 0
  Authors found: 1
  Categories created: 0
  Categories found: 3
  Images uploaded: 3
  Images failed: 0
  Posts created: 1
  Posts updated: 0
--------------------------------------------------------------------------------
```

---

## Batch Upload

### Prepare Multiple Posts

Create JSON files in `scripts/posts/`:
```
scripts/posts/
├── post-1-uae-healthcare.json
├── post-2-pharmacoeconomics.json
├── post-3-clinical-trials.json
└── post-4-kol-mapping.json
```

### Run Batch Upload
```bash
npm run upload:batch
```

### Expected Output
```
================================================================================
📦 Batch Blog Post Upload to Sanity
================================================================================

Found 4 blog post(s) to upload:

  1. post-1-uae-healthcare.json
  2. post-2-pharmacoeconomics.json
  3. post-3-clinical-trials.json
  4. post-4-kol-mapping.json

--------------------------------------------------------------------------------

📄 Processing 1/4: post-1-uae-healthcare.json

[... individual post upload progress ...]

  ✓ post-1-uae-healthcare.json uploaded successfully

  ⏳ Waiting 2 seconds before next upload...

--------------------------------------------------------------------------------

📄 Processing 2/4: post-2-pharmacoeconomics.json

[... upload progress ...]

================================================================================
📊 Batch Upload Summary
================================================================================

Total posts: 4
✓ Successful: 4
✗ Failed: 0
⊘ Skipped: 0
⏱ Duration: 47 seconds

Success rate: 100%
```

---

## Dry-Run Mode

### What It Does

- ✅ Validates all data
- ✅ Shows what would be uploaded
- ✅ Tests image URLs (downloads but doesn't upload)
- ✅ Checks for existing posts
- ❌ Does NOT make any changes to Sanity

### How to Use
```bash
# Single post dry-run
npm run upload:dry-run

# Batch dry-run
npm run batch:dry-run
```

### Dry-Run Output
```
═══════════════════════════════════════════════
🔍 DRY RUN MODE - No Changes Will Be Made
═══════════════════════════════════════════════
🚀 Starting Blog Post Upload to Sanity
═══════════════════════════════════════════════

Step 1: Processing Author
  👤 Processing author: Mohammad Ashour
    [DRY RUN] Would use existing author

Step 3: Processing Main Image
  [DRY RUN] Would upload image: Modern UAE hospital...

...

Step 8: Uploading to Sanity
    [DRY RUN] Would create post
    [DRY RUN] Document prepared successfully

    Document Preview:
    - Title: Healthcare Market Research in UAE
    - Slug: healthcare-market-research-uae-guide-2025
    - Word count: ~12450
    - FAQ items: 5
    - Categories: 3
    - Tags: 8

💡 This was a dry run. Run without --dry-run to actually upload.
```

---

## Image Upload Details

### Supported Sources

1. **Remote URLs** (http/https)
2. **Local files** (absolute or relative paths)

### Image Optimization

Automatically applied:
- ✅ Resize to max 2000x2000px
- ✅ Convert to JPEG
- ✅ Compress to 85% quality
- ✅ Progressive encoding

### Disable Optimization
```json
{
  "mainImage": {
    "url": "https://example.com/image.jpg",
    "alt": "Image description",
    "optimize": false
  }
}
```

### Image in Body Content
```json
{
  "body": [
    {
      "_type": "image",
      "imageUrl": "https://example.com/chart.png",
      "alt": "Market growth chart",
      "caption": "UAE healthcare market projections 2025-2030"
    }
  ]
}
```

---

## Troubleshooting

### Error: "Missing project ID"

**Cause:** `.env` file missing or incorrect

**Solution:**
```bash
# Check .env exists
ls -la .env

# Verify contents
cat .env

# Should contain:
SANITY_PROJECT_ID=your_id_here
SANITY_DATASET=production
SANITY_TOKEN=your_token_here
```

### Error: "Unauthorized"

**Cause:** Invalid or expired Sanity token

**Solution:**
1. Go to https://sanity.io/manage
2. Select your project
3. Navigate to API → Tokens
4. Generate new token with **Editor** permissions
5. Update `.env` with new token

### Error: "Image download failed"

**Cause:** Invalid URL or network issue

**Solution:**
1. Verify image URL in browser
2. Check URL is publicly accessible
3. Try using local file instead:
```json
   {
     "localPath": "./images/photo.jpg",
     "alt": "Description"
   }
```

### Error: "Post already exists"

**Behavior:** Script will UPDATE existing post

**To prevent:**
1. Use dry-run first to check
2. Modify slug to create new post
3. Or delete existing post in Sanity Studio

### Images Not Uploading

**Cause:** Missing sharp dependency

**Solution:**
```bash
npm install sharp --save
```

---

## Advanced Usage

### Custom Author Per Post
```json
{
  "author": {
    "name": "Dr. Sarah Ahmed",
    "slug": "sarah-ahmed",
    "email": "sarah@bionixus.com",
    "title": "Senior Market Research Consultant"
  }
}
```

### Multiple Categories
```json
{
  "categories": [
    {"title": "Market Research", "slug": "market-research"},
    {"title": "UAE", "slug": "uae"},
    {"title": "Oncology", "slug": "oncology"}
  ]
}
```

### Related Posts (by slug)
```json
{
  "relatedPosts": [
    "healthcare-market-research-uae-guide-2025",
    "pharmacoeconomics-gcc-practical-guide"
  ]
}
```

---

## Best Practices

### 1. Always Dry-Run First
```bash
npm run upload:dry-run
```

Review output before real upload.

### 2. Optimize Images Before Upload

- Use high-quality source images (1600px+ width)
- Script will optimize automatically
- Reduces storage costs

### 3. Validate JSON Before Upload
```bash
# Use online JSON validator or:
node -e "console.log(JSON.parse(require('fs').readFileSync('scripts/blogPostData.json')))"
```

### 4. Batch Upload During Off-Hours

- Uploads take time (2-3 min per post with images)
- Run during non-peak hours
- Monitor progress

### 5. Keep Backups
```bash
# Backup before batch upload
cp -r scripts/posts scripts/posts-backup-$(date +%Y%m%d)
```

---

## Performance Tips

### Large Images

For images > 5MB:
1. Pre-optimize before upload
2. Or let script optimize (slower but automatic)

### Batch Uploads

- Script adds 2-second delay between posts
- Prevents rate limiting
- Total time ≈ (posts × 2.5 minutes)

### Concurrent Uploads

Not recommended - may hit rate limits.
Use sequential batch upload instead.

---

## Next Steps

1. ✅ Complete `.env` configuration
2. ✅ Test with dry-run mode
3. ✅ Upload single post
4. ✅ Create batch post files
5. ✅ Run batch upload
6. ✅ Verify in Sanity Studio
7. ✅ Publish posts

---

## Support

**Issues?**
1. Check this guide first
2. Run in dry-run mode
3. Review console error messages
4. Verify .env configuration
5. Test with minimal post data

**Common Solutions:**
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Update dependencies: `npm update`
- Check Sanity Studio for schema mismatches
