/**
 * Patches the UAE guide article in Sanity with bodyHtml from blogPostData.json.
 * Run from sanity-content-uploader: npx ts-node scripts/patchArticleBody.ts
 */
import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  token: process.env.SANITY_TOKEN!,
  apiVersion: process.env.SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
})

const SLUG = 'healthcare-market-research-uae-guide-2025'

async function main() {
  const dataPath = path.join(__dirname, 'blogPostData.json')
  if (!fs.existsSync(dataPath)) {
    console.error('blogPostData.json not found')
    process.exit(1)
  }
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8')) as { bodyHtml?: string }
  const bodyHtml = typeof data.bodyHtml === 'string' ? data.bodyHtml.trim() : ''
  if (!bodyHtml) {
    console.error('No bodyHtml in blogPostData.json')
    process.exit(1)
  }

  const doc = await client.fetch<{ _id: string; _type: string } | null>(
    `*[_type == "blogPost" && slug.current == $slug][0]{ _id, _type }`,
    { slug: SLUG }
  )
  if (!doc) {
    console.error(`Document with slug "${SLUG}" not found. Create it first with npm run upload.`)
    process.exit(1)
  }

  await client.patch(doc._id).set({ bodyHtml }).commit()
  console.log('Article body updated. View at /blog/' + SLUG)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
