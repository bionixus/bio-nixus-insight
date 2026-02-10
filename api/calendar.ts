import { createClient } from '@sanity/client'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'BioNixus2026!'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN?.trim(),
})

function checkAuth(req: any, res: any): boolean {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ') || authHeader.substring(7) !== ADMIN_PASSWORD) {
    res.status(401).json({ error: 'Unauthorized' })
    return false
  }
  return true
}

export default async function handler(req: any, res: any) {
  if (!checkAuth(req, res)) return

  const { action } = req.query

  // ─── sync: POST – sync newsletters/posts to calendar ───
  if (action === 'sync') {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
    return handleSync(req, res)
  }

  // ─── Default: events CRUD ───
  return handleEvents(req, res)
}

// ═══════════════════════════════════════════════════════════════════
// Sync handler (was api/calendar/sync.ts)
// ═══════════════════════════════════════════════════════════════════
async function handleSync(req: any, res: any) {
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

// ═══════════════════════════════════════════════════════════════════
// Events CRUD handler (was api/calendar/events.ts)
// ═══════════════════════════════════════════════════════════════════
async function handleEvents(req: any, res: any) {
  // ─── POST: Create a new calendar event ───
  if (req.method === 'POST') {
    try {
      const { title, type, scheduledDate, status, priority, description, tags, targetAudience, recurringEvent } = req.body

      if (!title || !type || !scheduledDate) {
        return res.status(400).json({ error: 'title, type, and scheduledDate are required' })
      }

      const doc: any = {
        _type: 'contentCalendar',
        title,
        type,
        scheduledDate,
        status: status || 'idea',
        priority: priority || 'medium',
      }

      if (description) doc.description = description
      if (tags && tags.length > 0) doc.tags = tags
      if (targetAudience && targetAudience.length > 0) doc.targetAudience = targetAudience
      if (recurringEvent) doc.recurringEvent = recurringEvent

      const created = await sanityServer.create(doc)
      return res.status(201).json({ success: true, event: created })
    } catch (error: any) {
      console.error('Calendar create error:', error)
      return res.status(500).json({ error: error.message })
    }
  }

  // ─── PATCH: Update an existing calendar event ───
  if (req.method === 'PATCH') {
    try {
      const { eventId, ...updates } = req.body

      if (!eventId) {
        return res.status(400).json({ error: 'eventId is required' })
      }

      if (updates.status === 'published' && !updates.publishedAt) {
        updates.publishedAt = new Date().toISOString()
      }

      const updated = await sanityServer.patch(eventId).set(updates).commit()
      return res.status(200).json({ success: true, event: updated })
    } catch (error: any) {
      console.error('Calendar update error:', error)
      return res.status(500).json({ error: error.message })
    }
  }

  // ─── DELETE: Remove a calendar event ───
  if (req.method === 'DELETE') {
    try {
      const eventId = req.body?.eventId || req.query?.eventId
      if (!eventId) {
        return res.status(400).json({ error: 'eventId is required' })
      }
      await sanityServer.delete(eventId)
      return res.status(200).json({ success: true, deleted: eventId })
    } catch (error: any) {
      console.error('Calendar delete error:', error)
      return res.status(500).json({ error: error.message })
    }
  }

  // ─── GET: Fetch calendar events ───
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { start, end, type } = req.query

    let conditions = ['_type == "contentCalendar"']

    if (start) {
      conditions.push(`scheduledDate >= "${start}"`)
    }

    if (end) {
      conditions.push(`scheduledDate <= "${end}"`)
    }

    if (type && type !== 'all') {
      conditions.push(`type == "${type}"`)
    }

    const whereClause = conditions.join(' && ')

    const calendarEvents = await sanityServer.fetch(`
      *[${whereClause}] | order(scheduledDate asc) {
        _id,
        title,
        type,
        scheduledDate,
        status,
        description,
        priority,
        tags,
        targetAudience,
        publishedAt,
        linkedContent,
        author->{
          name,
          _id
        },
        recurringEvent
      }
    `)

    const newsletters = await sanityServer.fetch(`
      *[_type == "newsletter" && defined(scheduledFor)] {
        _id,
        title,
        scheduledFor,
        sentAt,
        status,
        targetSegments,
        stats
      }
    `)

    const posts = await sanityServer.fetch(`
      *[_type == "post" && defined(publishedAt)] {
        _id,
        title,
        publishedAt,
        category,
        country,
        author->{
          name
        }
      }
    `)

    const newsletterEvents = newsletters.map((n: any) => ({
      _id: `newsletter-${n._id}`,
      sourceId: n._id,
      title: n.title || 'Untitled Newsletter',
      type: 'newsletter',
      scheduledDate: n.scheduledFor,
      status: n.status === 'sent' ? 'published' : n.status,
      publishedAt: n.sentAt,
      targetAudience: n.targetSegments,
      stats: n.stats,
      isAutoGenerated: true
    }))

    const postEvents = posts.map((p: any) => ({
      _id: `post-${p._id}`,
      sourceId: p._id,
      title: p.title || 'Untitled Post',
      type: 'blog',
      scheduledDate: p.publishedAt,
      status: 'published',
      publishedAt: p.publishedAt,
      author: p.author,
      category: p.category,
      country: p.country,
      isAutoGenerated: true
    }))

    const allEvents = [
      ...calendarEvents,
      ...newsletterEvents,
      ...postEvents
    ].sort((a: any, b: any) =>
      new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime()
    )

    return res.status(200).json({
      events: allEvents,
      stats: {
        total: allEvents.length,
        byType: {
          newsletter: allEvents.filter((e: any) => e.type === 'newsletter').length,
          blog: allEvents.filter((e: any) => e.type === 'blog').length,
          social: allEvents.filter((e: any) => e.type === 'social').length,
          report: allEvents.filter((e: any) => e.type === 'report').length,
          campaign: allEvents.filter((e: any) => e.type === 'campaign').length,
          announcement: allEvents.filter((e: any) => e.type === 'announcement').length
        },
        byStatus: {
          idea: allEvents.filter((e: any) => e.status === 'idea').length,
          draft: allEvents.filter((e: any) => e.status === 'draft').length,
          scheduled: allEvents.filter((e: any) => e.status === 'scheduled').length,
          published: allEvents.filter((e: any) => e.status === 'published').length
        }
      }
    })
  } catch (error: any) {
    console.error('Calendar fetch error:', error)
    return res.status(500).json({ error: error.message })
  }
}
