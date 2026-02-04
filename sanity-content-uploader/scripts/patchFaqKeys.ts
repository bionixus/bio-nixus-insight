/**
 * Adds missing _key to FAQ and tableOfContents items so Sanity Studio can edit the list.
 * Run: npx ts-node scripts/patchFaqKeys.ts
 */
import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  token: process.env.SANITY_TOKEN!,
  apiVersion: process.env.SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
})

const SLUG = 'healthcare-market-research-uae-guide-2025'

function withKeys<T extends Record<string, unknown>>(items: T[]): (T & { _key: string })[] {
  return items.map((item, i) => ({
    ...item,
    _key: (item as { _key?: string })._key || `item-${i}-${Math.random().toString(36).slice(2, 9)}`,
  }))
}

async function main() {
  const doc = await client.fetch<{
    _id: string
    faq?: Record<string, unknown>[]
    tableOfContents?: Record<string, unknown>[]
  } | null>(
    `*[_type == "blogPost" && slug.current == $slug][0]{ _id, faq, tableOfContents }`,
    { slug: SLUG }
  )
  if (!doc) {
    console.error('Document not found for slug:', SLUG)
    process.exit(1)
  }

  const patch: Record<string, unknown> = {}
  if (Array.isArray(doc.faq) && doc.faq.length > 0) {
    const hasKeys = doc.faq.every((item) => typeof (item as { _key?: string })._key === 'string')
    if (!hasKeys) {
      const faqWithKeys = withKeys(doc.faq)
      patch.faq = faqWithKeys
      console.log('Added _key to', faqWithKeys.length, 'FAQ items')
    }
  }
  if (Array.isArray(doc.tableOfContents) && doc.tableOfContents.length > 0) {
    const hasKeys = doc.tableOfContents.every(
      (item) => typeof (item as { _key?: string })._key === 'string'
    )
    if (!hasKeys) {
      const tocWithKeys = withKeys(doc.tableOfContents)
      patch.tableOfContents = tocWithKeys
      console.log('Added _key to', tocWithKeys.length, 'tableOfContents items')
    }
  }

  if (Object.keys(patch).length === 0) {
    console.log('All items already have _key.')
    return
  }

  await client.patch(doc._id).set(patch).commit()
  console.log('Done. Refresh Sanity Studio.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
