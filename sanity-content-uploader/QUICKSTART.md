# Quick Start: Upload Blog Post to Sanity

## 1. Setup (One-time)

```bash
# From repo root, go to uploader package
cd sanity-content-uploader

# Install dependencies
npm install

# Create .env file (or copy from .env.example)
echo "SANITY_PROJECT_ID=h2whvvpo" > .env
echo "SANITY_DATASET=production" >> .env
echo "SANITY_TOKEN=skCrWA5fcpR5eXSbZKJn4hMfKMXAT9HccNrCtqwzTuNxIFPG3HxxuDy5kWExIyM7Lynoi2gtuz8MfZsfwjCxKSCEI1bwhkzXHmJiva5f2OmGoXJ6hKFKq1aS3WcykgBeRDYD7DB8r1XIhrNSeCBOVs4RBKhfd3Fj6AyAi6x3YuAAdFd9wa3O" >> .env
echo "SANITY_API_VERSION=2024-01-01" >> .env
```

## 2. Get Your Sanity Token

1. Visit: https://sanity.io/manage
2. Select your project (BioNixus Blog)
3. Go to: API → Tokens
4. Click: "Add API token"
5. Name: "Upload Script"
6. Permissions: "Editor"
7. Copy token into `.env` as `SANITY_TOKEN=...`

## 3. Run Upload

```bash
npm run upload
```

## 4. Verify

1. Check console for success message
2. Open Sanity Studio (`npm run studio` from project root)
3. Navigate to Blog Posts
4. Find your post
5. Click "Publish"

## Done! 🎉

Your blog post is now in Sanity and ready to display on your website at `/blog/healthcare-market-research-uae-guide-2025`.
