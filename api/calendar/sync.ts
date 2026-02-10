import { createClient } from '@sanity/client'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'BioNixus2026!'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN?.trim(),
})

async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Find newsletters without calendar entries
    const newsletters = await sanityServer.fetch(`
      *[_type == "newsletter" && status == "sent" && defined(sentAt)] {
        _id,
        title,
        sentAt,
        targetSegments
      }
    `)

    // Find blog posts without calendar entries
    const posts = await sanityServer.fetch(`
      *[_type == "post" && defined(publishedAt)] {
        _id,
        title,
        publishedAt,
        author
      }
    `)

    let created = 0

    // Create calendar entries for sent newsletters
    for (const newsletter of newsletters) {
      // Check if calendar entry already exists
      const existing = await sanityServer.fetch(`
        *[_type == "contentCalendar" && linkedContent.newsletter._ref == $id][0]
      `, { id: newsletter._id })

      if (!existing) {
        await sanityServer.create({
          _type: 'contentCalendar',
          title: newsletter.title || 'Newsletter',
          type: 'newsletter',
          scheduledDate: newsletter.sentAt,
          status: 'published',
          publishedAt: newsletter.sentAt,
          targetAudience: newsletter.targetSegments || [],
          linkedContent: {
            newsletter: {
              _type: 'reference',
              _ref: newsletter._id
            }
          }
        })
        created++
      }
    }

    // Create calendar entries for published posts
    for (const post of posts) {
      const existing = await sanityServer.fetch(`
        *[_type == "contentCalendar" && linkedContent.post._ref == $id][0]
      `, { id: post._id })

      if (!existing) {
        await sanityServer.create({
          _type: 'contentCalendar',
          title: post.title || 'Blog Post',
          type: 'blog',
          scheduledDate: post.publishedAt,
          status: 'published',
          publishedAt: post.publishedAt,
          linkedContent: {
            post: {
              _type: 'reference',
              _ref: post._id
            }
          },
          author: post.author ? {
            _type: 'reference',
            _ref: post.author._ref
          } : undefined
        })
        created++
      }
    }

    return res.status(200).json({
      success: true,
      created,
      message: `Created ${created} calendar entries`
    })
  } catch (error: any) {
    console.error('Sync error:', error)
    return res.status(500).json({ error: error.message })
  }
}

export default function authHandler(req: any, res: any) {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ') || authHeader.substring(7) !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  return handler(req, res)
}
