// scripts/uploadBlogPost.ts
import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'
import axios from 'axios'
import * as mime from 'mime-types'
import sharp from 'sharp'

// Load environment variables
dotenv.config()

/** Ensure array items have Sanity _key for list editing in Studio */
function withKeys<T extends Record<string, unknown>>(items: T[]): (T & { _key: string })[] {
  return items.map((item, i) => ({
    ...item,
    _key: (item as { _key?: string })._key || `item-${i}-${Math.random().toString(36).slice(2, 9)}`,
  }))
}

/** Convert portable text bio (array of blocks) to plain string for author.bio (schema is text) */
function bioToText(bio: unknown): string | undefined {
  if (typeof bio === 'string' && bio.trim() !== '') return bio
  if (!Array.isArray(bio)) return undefined
  const parts: string[] = []
  for (const block of bio) {
    if (block && typeof block === 'object' && Array.isArray((block as { children?: unknown[] }).children)) {
      for (const child of (block as { children: { text?: string }[] }).children) {
        if (child?.text) parts.push(child.text)
      }
    }
  }
  return parts.length ? parts.join(' ') : undefined
}

// Initialize Sanity client
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  token: process.env.SANITY_TOKEN!,
  apiVersion: process.env.SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
})

// Check for dry-run mode
const isDryRun = process.argv.includes('--dry-run') || process.argv.includes('-d')

// Color coding for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
}

function log(message: string, color: keyof typeof colors = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

// Track statistics
const stats = {
  imagesUploaded: 0,
  imagesFailed: 0,
  categoriesCreated: 0,
  categoriesFound: 0,
  authorsCreated: 0,
  authorsFound: 0,
  postsCreated: 0,
  postsUpdated: 0,
}

// ============================================================================
// IMAGE UPLOAD FUNCTIONALITY
// ============================================================================

interface ImageUploadOptions {
  url?: string
  localPath?: string
  alt: string
  caption?: string
  optimize?: boolean
}

async function uploadImageToSanity(options: ImageUploadOptions): Promise<Record<string, unknown> | null> {
  try {
    const { url, localPath, alt, caption, optimize = true } = options

    if (isDryRun) {
      log(`  [DRY RUN] Would upload image: ${alt.substring(0, 50)}...`, 'dim')
      return {
        _type: 'image',
        alt,
        caption,
        asset: {
          _type: 'reference',
          _ref: 'dry-run-image-id',
        },
      }
    }

    log(`  📸 Uploading image: ${alt.substring(0, 50)}...`, 'cyan')

    let imageBuffer: Buffer

    // Download from URL or read from local path
    if (url) {
      log(`    → Downloading from URL: ${url}`, 'dim')
      const response = await axios.get(url, {
        responseType: 'arraybuffer',
        timeout: 30000,
        maxContentLength: 10 * 1024 * 1024, // 10MB max
      })
      imageBuffer = Buffer.from(response.data)
    } else if (localPath) {
      log(`    → Reading from local path: ${localPath}`, 'dim')
      if (!fs.existsSync(localPath)) {
        throw new Error(`Local image not found: ${localPath}`)
      }
      imageBuffer = fs.readFileSync(localPath)
    } else {
      throw new Error('Either url or localPath must be provided')
    }

    // Optimize image if requested
    if (optimize) {
      log(`    → Optimizing image...`, 'dim')
      imageBuffer = await sharp(imageBuffer)
        .resize(2000, 2000, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .jpeg({ quality: 85, progressive: true })
        .toBuffer()

      const sizeKB = Math.round(imageBuffer.length / 1024)
      log(`    → Optimized to ${sizeKB}KB`, 'dim')
    }

    // Determine mime type
    const mimeType = url
      ? mime.lookup(url) || 'image/jpeg'
      : mime.lookup(localPath!) || 'image/jpeg'

    // Upload to Sanity
    log(`    → Uploading to Sanity CDN...`, 'dim')
    const asset = await client.assets.upload('image', imageBuffer, {
      contentType: mimeType,
      filename: alt.replace(/[^a-z0-9]/gi, '-').toLowerCase() + '.jpg',
    })

    log(`    ✓ Image uploaded: ${asset._id}`, 'green')
    stats.imagesUploaded++

    return {
      _type: 'image',
      alt,
      caption,
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    }
  } catch (error) {
    log(`    ✗ Image upload failed: ${error}`, 'red')
    stats.imagesFailed++
    return null
  }
}

// ============================================================================
// AUTHOR MANAGEMENT (schema: name, slug, image, bio as text)
// ============================================================================

interface AuthorData {
  name: string
  slug: string
  bio?: unknown
  image?: ImageUploadOptions
  email?: string
  title?: string
  credentials?: string
}

async function createOrUpdateAuthor(authorData: AuthorData): Promise<string> {
  try {
    log(`  👤 Processing author: ${authorData.name}`, 'cyan')

    const existingAuthor = await client.fetch<{ _id: string } | null>(
      `*[_type == "author" && slug.current == $slug][0]`,
      { slug: authorData.slug }
    )

    if (existingAuthor) {
      log(`    ✓ Author found: ${existingAuthor._id}`, 'green')
      stats.authorsFound++
      if (isDryRun) log(`    [DRY RUN] Would use existing author`, 'dim')
      return existingAuthor._id
    }

    let authorImage: Record<string, unknown> | null = null
    if (authorData.image) {
      authorImage = await uploadImageToSanity(authorData.image)
    }

    if (isDryRun) {
      log(`    [DRY RUN] Would create author`, 'dim')
      stats.authorsCreated++
      return 'dry-run-author-id'
    }

    const author = await client.create({
      _type: 'author',
      name: authorData.name,
      slug: {
        _type: 'slug',
        current: authorData.slug,
      },
      bio: bioToText(authorData.bio) ?? undefined,
      image: authorImage ?? undefined,
    })

    log(`    ✓ Author created: ${author._id}`, 'green')
    stats.authorsCreated++
    return author._id
  } catch (error) {
    log(`    ✗ Error with author: ${error}`, 'red')
    throw error
  }
}

// ============================================================================
// CATEGORY MANAGEMENT (schema: title, slug, description — no color)
// ============================================================================

interface CategoryData {
  title: string
  slug: string
  description?: string
  color?: string
}

async function createOrUpdateCategory(categoryData: CategoryData): Promise<string> {
  try {
    log(`  📁 Processing category: ${categoryData.title}`, 'cyan')

    const existingCategory = await client.fetch<{ _id: string } | null>(
      `*[_type == "category" && slug.current == $slug][0]`,
      { slug: categoryData.slug }
    )

    if (existingCategory) {
      log(`    ✓ Category found: ${existingCategory._id}`, 'green')
      stats.categoriesFound++
      if (isDryRun) log(`    [DRY RUN] Would use existing category`, 'dim')
      return existingCategory._id
    }

    if (isDryRun) {
      log(`    [DRY RUN] Would create category`, 'dim')
      stats.categoriesCreated++
      return 'dry-run-category-id'
    }

    const category = await client.create({
      _type: 'category',
      title: categoryData.title,
      slug: {
        _type: 'slug',
        current: categoryData.slug,
      },
      description: categoryData.description ?? '',
    })

    log(`    ✓ Category created: ${category._id}`, 'green')
    stats.categoriesCreated++
    return category._id
  } catch (error) {
    log(`    ✗ Error with category: ${error}`, 'red')
    throw error
  }
}

// ============================================================================
// IMAGE PROCESSING IN BODY CONTENT
// ============================================================================

async function processBodyImages(body: unknown[]): Promise<unknown[]> {
  if (!body || !Array.isArray(body)) return body

  const processedBody: unknown[] = []

  for (const block of body) {
    const b = block as { _type?: string; imageUrl?: string; alt?: string; caption?: string }
    if (b._type === 'image' && b.imageUrl) {
      const uploadedImage = await uploadImageToSanity({
        url: b.imageUrl,
        alt: b.alt || 'Article image',
        caption: b.caption,
        optimize: true,
      })
      if (uploadedImage) processedBody.push(uploadedImage)
    } else {
      processedBody.push(block)
    }
  }

  return processedBody
}

// ============================================================================
// MAIN BLOG POST UPLOAD
// ============================================================================

export async function uploadBlogPost(
  postData: Record<string, unknown>,
  options: { silent?: boolean } = {}
) {
  try {
    if (!options.silent) {
      log('\n' + '='.repeat(80), 'bright')
      if (isDryRun) {
        log('🔍 DRY RUN MODE - No Changes Will Be Made', 'yellow')
        log('='.repeat(80), 'bright')
      }
      log('🚀 Starting Blog Post Upload to Sanity', 'bright')
      log('='.repeat(80) + '\n', 'bright')
    }

    // Step 1: Create/get author
    if (!options.silent) log('Step 1: Processing Author', 'yellow')

    const authorPayload = postData.author as AuthorData | undefined
    const authorData: AuthorData = {
      name: authorPayload?.name ?? 'Mohammad Ashour',
      slug: authorPayload?.slug ?? 'mohammad-ashour',
      bio: authorPayload?.bio ?? [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Transform Care Digital Project Director at AstraZeneca with over 10 years of experience in pharmaceutical market research, AI-powered healthcare insights, and digital transformation. Founder of BioNixus Healthcare Market Research, specializing in pharmacoeconomics, HTA, and clinical trials consulting across UAE, Saudi Arabia, and GCC markets.',
            },
          ],
        },
      ],
      image: authorPayload?.image,
    }

    const authorId = await createOrUpdateAuthor(authorData)

    // Step 2: Create/get categories
    if (!options.silent) log('\nStep 2: Processing Categories', 'yellow')
    const categoryIds: { _type: string; _ref: string }[] = []

    const categories: CategoryData[] = (postData.categories as CategoryData[]) ?? [
      { title: 'Market Research', slug: 'market-research', description: 'Healthcare and pharmaceutical market research insights, methodologies, and best practices' },
      { title: 'Healthcare', slug: 'healthcare', description: 'Healthcare industry analysis, trends, and strategic insights' },
      { title: 'UAE', slug: 'uae', description: 'UAE-specific healthcare, pharmaceutical, and regulatory content' },
    ]

    for (const cat of categories) {
      const catId = await createOrUpdateCategory(cat)
      categoryIds.push({ _ref: catId, _type: 'reference' })
    }

    // Step 3: Upload main image
    if (!options.silent) log('\nStep 3: Processing Main Image', 'yellow')
    const mainImageData = postData.mainImage as { url?: string; localPath?: string; alt?: string; caption?: string } | undefined
    let mainImage: Record<string, unknown> | null = null
    if (mainImageData) {
      mainImage = await uploadImageToSanity({
        url: mainImageData.url,
        localPath: mainImageData.localPath,
        alt: mainImageData.alt ?? (postData.title as string),
        caption: mainImageData.caption,
        optimize: true,
      })
    }

    // Step 4: Upload Open Graph image
    if (!options.silent) log('\nStep 4: Processing Open Graph Image', 'yellow')
    const openGraph = postData.openGraph as { ogImage?: { url?: string; localPath?: string; alt?: string } } | undefined
    let ogImage: Record<string, unknown> | null = null
    if (openGraph?.ogImage) {
      ogImage = await uploadImageToSanity({
        url: openGraph.ogImage.url,
        localPath: openGraph.ogImage.localPath,
        alt: openGraph.ogImage.alt ?? (postData.title as string),
        optimize: true,
      })
    }

    // Step 5: Process body content images
    if (!options.silent) log('\nStep 5: Processing Body Images', 'yellow')
    const bodyArray = Array.isArray(postData.body) ? (postData.body as unknown[]) : []
    const processedBody = await processBodyImages(bodyArray)

    // Step 6: Check if post already exists
    if (!options.silent) log('\nStep 6: Checking for Existing Post', 'yellow')
    const slugCurrent = (postData.slug as { current?: string })?.current
    if (!slugCurrent) throw new Error('postData.slug.current is required')

    const existingPost = await client.fetch<{ _id: string } | null>(
      `*[_type == "blogPost" && slug.current == $slug][0]`,
      { slug: slugCurrent }
    )

    if (existingPost) {
      log(`    ⚠ Post already exists: ${existingPost._id}`, 'yellow')
      if (isDryRun) log(`    [DRY RUN] Would update existing post`, 'dim')
    } else {
      log(`    ✓ No existing post found`, 'green')
    }

    // Step 7: Prepare blog post document (with _keys and bodyHtml)
    if (!options.silent) log('\nStep 7: Preparing Blog Post Document', 'yellow')

    const seo = postData.seo as Record<string, unknown> | undefined
    const bodyHtml =
      typeof postData.bodyHtml === 'string' && postData.bodyHtml.trim() !== ''
        ? postData.bodyHtml
        : undefined

    const blogPost = {
      _type: 'blogPost',

      seo: seo
        ? {
            metaTitle: seo.metaTitle,
            metaDescription: seo.metaDescription,
            focusKeyword: seo.focusKeyword,
            keywords: seo.keywords ?? [],
            canonicalUrl: seo.canonicalUrl,
            noIndex: seo.noIndex ?? false,
          }
        : undefined,

      openGraph: {
        ogTitle: openGraph?.ogTitle,
        ogDescription: openGraph?.ogDescription,
        ogImage: ogImage ?? undefined,
      },

      title: postData.title,
      slug: postData.slug,
      excerpt: postData.excerpt,
      publishedAt: postData.publishedAt ?? new Date().toISOString(),
      updatedAt: postData.updatedAt ?? new Date().toISOString(),
      readingTime: postData.readingTime,

      mainImage: mainImage ?? undefined,

      author: { _type: 'reference', _ref: authorId },
      categories: categoryIds,
      tags: postData.tags ?? [],

      executiveSummary: Array.isArray(postData.executiveSummary)
        ? withKeys(postData.executiveSummary as Record<string, unknown>[])
        : postData.executiveSummary,
      tableOfContents: Array.isArray(postData.tableOfContents)
        ? withKeys(postData.tableOfContents as Record<string, unknown>[])
        : postData.tableOfContents,
      body: processedBody,
      bodyHtml: bodyHtml ?? undefined,

      faq: Array.isArray(postData.faq) ? withKeys(postData.faq as Record<string, unknown>[]) : postData.faq,

      relatedPosts: postData.relatedPosts ?? [],
      ctaSection: postData.ctaSection,
    }

    // Step 8: Upload to Sanity
    if (!options.silent) log('\nStep 8: Uploading to Sanity', 'yellow')

    if (isDryRun) {
      log(`    [DRY RUN] Would ${existingPost ? 'update' : 'create'} post`, 'dim')
      log(`    [DRY RUN] Document prepared successfully`, 'green')
      log('\n    Document Preview:', 'cyan')
      log(`    - Title: ${blogPost.title}`, 'dim')
      log(`    - Slug: ${(blogPost.slug as { current?: string })?.current}`, 'dim')
      log(`    - Word count: ~${Math.round(JSON.stringify(blogPost.body).length / 5)}`, 'dim')
      log(`    - FAQ items: ${Array.isArray(blogPost.faq) ? blogPost.faq.length : 0}`, 'dim')
      log(`    - Categories: ${categoryIds.length}`, 'dim')
      log(`    - Tags: ${Array.isArray(blogPost.tags) ? blogPost.tags.length : 0}`, 'dim')
      return { _id: 'dry-run-post-id', ...blogPost }
    }

    let result: { _id: string; _type: string; title?: string; slug?: { current: string } }
    if (existingPost) {
      result = (await client.patch(existingPost._id).set(blogPost).commit()) as typeof result
      log(`    ✓ Post updated successfully!`, 'green')
      stats.postsUpdated++
    } else {
      result = (await client.create(blogPost)) as typeof result
      log(`    ✓ Post created successfully!`, 'green')
      stats.postsCreated++
    }

    // Step 9: Summary
    if (!options.silent) {
      log('\n' + '='.repeat(80), 'bright')
      log('✅ Upload Complete!', 'green')
      log('='.repeat(80), 'bright')
      if (!isDryRun) {
        log(`\nDocument ID: ${result._id}`, 'cyan')
        log(`Document Type: ${result._type}`, 'cyan')
        log(`Title: ${result.title}`, 'cyan')
        log(`Slug: ${(result.slug as { current?: string })?.current}`, 'cyan')
        const projectId = process.env.SANITY_PROJECT_ID || 'your-project'
        log(`\nView in Sanity Studio:`, 'yellow')
        log(`https://${projectId}.sanity.studio/desk/blogPost;${result._id}`, 'blue')
      }
      log('\n' + '-'.repeat(80), 'dim')
      log('Statistics:', 'bright')
      log(`  Authors created: ${stats.authorsCreated}`, 'cyan')
      log(`  Authors found: ${stats.authorsFound}`, 'cyan')
      log(`  Categories created: ${stats.categoriesCreated}`, 'cyan')
      log(`  Categories found: ${stats.categoriesFound}`, 'cyan')
      log(`  Images uploaded: ${stats.imagesUploaded}`, 'cyan')
      log(`  Images failed: ${stats.imagesFailed}`, stats.imagesFailed > 0 ? 'red' : 'cyan')
      log(`  Posts created: ${stats.postsCreated}`, 'cyan')
      log(`  Posts updated: ${stats.postsUpdated}`, 'cyan')
      log('-'.repeat(80) + '\n', 'dim')
    }

    return result
  } catch (error) {
    if (!options.silent) {
      log('\n' + '='.repeat(80), 'bright')
      log('❌ Upload Failed!', 'red')
      log('='.repeat(80), 'bright')
      log(`\nError: ${error}`, 'red')
      if (error instanceof Error) log(`\nStack trace:`, 'red')
      if (error instanceof Error && error.stack) log(error.stack, 'red')
    }
    throw error
  }
}

// ============================================================================
// CLI EXECUTION
// ============================================================================

async function main() {
  try {
    if (!process.env.SANITY_PROJECT_ID) {
      log('\n❌ Error: SANITY_PROJECT_ID not set in .env file', 'red')
      process.exit(1)
    }
    if (!process.env.SANITY_DATASET) {
      log('\n❌ Error: SANITY_DATASET not set in .env file', 'red')
      process.exit(1)
    }
    if (!process.env.SANITY_TOKEN) {
      log('\n❌ Error: SANITY_TOKEN not set in .env file', 'red')
      log('\nGenerate a token at: https://sanity.io/manage', 'yellow')
      process.exit(1)
    }

    log('Loading blog post data...', 'cyan')
    const postDataPath = path.join(__dirname, 'blogPostData.json')
    if (!fs.existsSync(postDataPath)) {
      log(`\n❌ Error: Blog post data file not found at ${postDataPath}`, 'red')
      log(`\nPlease create 'scripts/blogPostData.json' with your blog post content.`, 'yellow')
      process.exit(1)
    }

    const postData = JSON.parse(fs.readFileSync(postDataPath, 'utf-8')) as Record<string, unknown>
    log('✓ Blog post data loaded\n', 'green')

    if (isDryRun) {
      log('═'.repeat(80), 'yellow')
      log('  DRY RUN MODE ENABLED', 'yellow')
      log('  No changes will be made to Sanity', 'yellow')
      log('  This is a preview of what would happen', 'yellow')
      log('═'.repeat(80) + '\n', 'yellow')
    }

    await uploadBlogPost(postData)
  } catch (error) {
    log(`\n❌ Fatal error: ${error}`, 'red')
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}
