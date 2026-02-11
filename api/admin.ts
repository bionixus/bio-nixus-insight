import { createClient } from '@sanity/client'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'BioNixus2026!'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN?.trim(),
})

// ─── Auth helper ───
function checkAuth(req: any, res: any): boolean {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ') || authHeader.substring(7) !== ADMIN_PASSWORD) {
    res.status(401).json({ error: 'Unauthorized' })
    return false
  }
  return true
}

export default async function handler(req: any, res: any) {
  const { action } = req.query

  // ─── verify: POST only, no auth header needed (it's the login check) ───
  if (action === 'verify') {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
    const { password } = req.body
    if (password === ADMIN_PASSWORD) {
      return res.status(200).json({ success: true })
    }
    return res.status(401).json({ error: 'Invalid password' })
  }

  // All other actions require auth
  if (!checkAuth(req, res)) return

  // ─── subscribers: GET ───
  if (action === 'subscribers') {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
    return handleSubscribers(req, res)
  }

  // ─── bulk-actions: POST ───
  if (action === 'bulk-actions') {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
    return handleBulkActions(req, res)
  }

  // ─── calculate-engagement: POST ───
  if (action === 'calculate-engagement') {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
    return handleCalculateEngagement(req, res)
  }

  // ─── analytics: GET ───
  if (action === 'analytics') {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
    return handleAnalytics(req, res)
  }

  return res.status(400).json({ error: 'Unknown action. Use ?action=subscribers|bulk-actions|calculate-engagement|analytics|verify' })
}

// ═══════════════════════════════════════════════════════════════════
// Subscribers handler (was api/admin/subscribers.ts)
// ═══════════════════════════════════════════════════════════════════
async function handleSubscribers(req: any, res: any) {
  try {
    const {
      page = '1',
      perPage = '50',
      search = '',
      status = 'all',
      segment = 'all',
      verified = 'all',
      engagement = 'all',
    } = req.query

    const pageNum = parseInt(page)
    const perPageNum = parseInt(perPage)
    const offset = (pageNum - 1) * perPageNum

    const conditions = ['_type == "subscriber"']

    if (search) {
      conditions.push(`(
        firstName match "*${search}*" ||
        lastName match "*${search}*" ||
        email match "*${search}*" ||
        company match "*${search}*"
      )`)
    }

    if (status === 'subscribed') {
      conditions.push('subscribed == true')
    } else if (status === 'unsubscribed') {
      conditions.push('subscribed == false')
    }

    if (segment !== 'all') {
      conditions.push(`"${segment}" in segments`)
    }

    if (verified === 'verified') {
      conditions.push('emailVerified == true')
    } else if (verified === 'unverified') {
      conditions.push('emailVerified == false')
    }

    if (engagement !== 'all') {
      conditions.push(`engagementLevel == "${engagement}"`)
    }

    const whereClause = conditions.join(' && ')

    const subscribers = await sanityServer.fetch(`
      *[${whereClause}] | order(subscribedAt desc) [${offset}...${offset + perPageNum}] {
        _id,
        firstName,
        lastName,
        email,
        personalEmail,
        mobile,
        title,
        company,
        language,
        segments,
        subscribed,
        emailVerified,
        subscribedAt,
        unsubscribedAt,
        source,
        engagementScore,
        engagementLevel
      }
    `)

    const total = await sanityServer.fetch(`count(*[${whereClause}])`)

    const stats = await sanityServer.fetch(`{
      "total": count(*[_type == "subscriber"]),
      "subscribed": count(*[_type == "subscriber" && subscribed == true]),
      "verified": count(*[_type == "subscriber" && emailVerified == true]),
      "unverified": count(*[_type == "subscriber" && emailVerified == false]),
      "thisMonth": count(*[_type == "subscriber" && subscribedAt > "${new Date(new Date().setDate(1)).toISOString()}"])
    }`)

    return res.status(200).json({
      subscribers,
      pagination: {
        page: pageNum,
        perPage: perPageNum,
        total,
        totalPages: Math.ceil(total / perPageNum),
      },
      stats,
    })
  } catch (error: any) {
    console.error('Dashboard error:', error)
    return res.status(500).json({ error: 'Failed to fetch subscribers' })
  }
}

// ═══════════════════════════════════════════════════════════════════
// Bulk actions handler (was api/admin/bulk-actions.ts)
// ═══════════════════════════════════════════════════════════════════
async function handleBulkActions(req: any, res: any) {
  const { action, subscriberIds, data } = req.body

  if (!action || !subscriberIds || !Array.isArray(subscriberIds) || subscriberIds.length === 0) {
    return res.status(400).json({ error: 'Action and subscriber IDs are required' })
  }

  try {
    let affected = 0

    for (const id of subscriberIds) {
      try {
        switch (action) {
          case 'delete':
            await sanityServer
              .patch(id)
              .set({
                subscribed: false,
                unsubscribedAt: new Date().toISOString(),
              })
              .commit()
            affected++
            break

          case 'hard_delete':
            await sanityServer.delete(id)
            affected++
            break

          case 'resubscribe':
            await sanityServer
              .patch(id)
              .set({
                subscribed: true,
                unsubscribedAt: null,
              })
              .commit()
            affected++
            break

          case 'add_segment':
            if (!data?.segment) break
            const subAdd = await sanityServer.fetch(
              `*[_type == "subscriber" && _id == $id][0]{ segments }`,
              { id }
            )
            const currentSegments = subAdd?.segments || []
            if (!currentSegments.includes(data.segment)) {
              await sanityServer
                .patch(id)
                .set({ segments: [...currentSegments, data.segment] })
                .commit()
            }
            affected++
            break

          case 'remove_segment':
            if (!data?.segment) break
            const subRemove = await sanityServer.fetch(
              `*[_type == "subscriber" && _id == $id][0]{ segments }`,
              { id }
            )
            const filteredSegments = (subRemove?.segments || []).filter(
              (s: string) => s !== data.segment
            )
            await sanityServer
              .patch(id)
              .set({ segments: filteredSegments })
              .commit()
            affected++
            break

          case 'replace_segments':
            if (!data?.segments || !Array.isArray(data.segments)) break
            await sanityServer
              .patch(id)
              .set({ segments: data.segments })
              .commit()
            affected++
            break

          case 'change_language':
            if (!data?.language) break
            await sanityServer
              .patch(id)
              .set({ language: data.language })
              .commit()
            affected++
            break

          case 'verify':
            await sanityServer
              .patch(id)
              .set({
                emailVerified: true,
                verifiedAt: new Date().toISOString(),
              })
              .commit()
            affected++
            break

          case 'unverify':
            await sanityServer
              .patch(id)
              .set({ emailVerified: false })
              .unset(['verifiedAt'])
              .commit()
            affected++
            break

          default:
            break
        }
      } catch (err) {
        console.error(`Failed to process subscriber ${id}:`, err)
      }
    }

    return res.status(200).json({ success: true, affected })
  } catch (error: any) {
    console.error('Bulk action error:', error)
    return res.status(500).json({ error: 'Bulk action failed' })
  }
}

// ═══════════════════════════════════════════════════════════════════
// Calculate engagement handler (was api/admin/calculate-engagement.ts)
// ═══════════════════════════════════════════════════════════════════
async function handleCalculateEngagement(req: any, res: any) {
  try {
    const subscribers = await sanityServer.fetch(`
      *[_type == "subscriber" && subscribed == true] {
        _id,
        analytics,
        subscribedAt
      }
    `)

    let updated = 0

    for (const subscriber of subscribers) {
      const { score, level } = calculateEngagementScore(
        subscriber.analytics || {},
        subscriber.subscribedAt
      )

      await sanityServer
        .patch(subscriber._id)
        .set({
          engagementScore: score,
          engagementLevel: level
        })
        .commit()

      updated++
    }

    return res.status(200).json({
      success: true,
      updated,
      message: `Engagement scores calculated for ${updated} subscribers`
    })
  } catch (error: any) {
    console.error('Engagement calculation error:', error)
    return res.status(500).json({ error: error.message })
  }
}

function calculateEngagementScore(
  analytics: any,
  subscribedAt: string
): { score: number; level: string } {
  let score = 0
  const now = new Date()
  const subscribeDate = new Date(subscribedAt)

  const emailsSent = analytics.emailsSent || 0
  const emailsOpened = analytics.emailsOpened || 0
  const emailsClicked = analytics.emailsClicked || 0

  // 1. Open rate (0-40 points)
  if (emailsSent > 0) {
    const openRate = (emailsOpened / emailsSent) * 100
    score += Math.min(40, openRate)
  }

  // 2. Click rate (0-30 points)
  if (emailsSent > 0) {
    const clickRate = (emailsClicked / emailsSent) * 100
    score += Math.min(30, clickRate * 1.5)
  }

  // 3. Recency bonus (0-20 points)
  if (analytics.lastEmailOpened) {
    const lastOpenDate = new Date(analytics.lastEmailOpened)
    const daysSinceLastOpen = Math.floor((now.getTime() - lastOpenDate.getTime()) / (1000 * 60 * 60 * 24))

    if (daysSinceLastOpen <= 7) score += 20
    else if (daysSinceLastOpen <= 30) score += 15
    else if (daysSinceLastOpen <= 90) score += 10
    else if (daysSinceLastOpen <= 180) score += 5
  }

  // 4. Consistency bonus (0-10 points)
  if (emailsSent >= 3) {
    const consistencyRate = (emailsOpened / emailsSent) * 100
    if (consistencyRate >= 75) score += 10
    else if (consistencyRate >= 50) score += 7
    else if (consistencyRate >= 25) score += 4
  }

  score = Math.min(100, Math.max(0, score))

  let level = 'inactive'
  if (score >= 70) level = 'high'
  else if (score >= 40) level = 'medium'
  else if (score >= 15) level = 'low'

  return { score: Math.round(score), level }
}

// ═══════════════════════════════════════════════════════════════════
// Analytics handler (was api/admin/analytics.ts)
// ═══════════════════════════════════════════════════════════════════
async function handleAnalytics(req: any, res: any) {
  try {
    const stats = await sanityServer.fetch(`{
      "totalSent": math::sum(*[_type == "subscriber"].analytics.emailsSent),
      "totalOpens": math::sum(*[_type == "subscriber"].analytics.emailsOpened),
      "totalClicks": math::sum(*[_type == "subscriber"].analytics.emailsClicked),
      "avgOpenRate": math::avg(*[_type == "subscriber" && defined(analytics.openRate)].analytics.openRate),
      "avgClickRate": math::avg(*[_type == "subscriber" && defined(analytics.clickRate)].analytics.clickRate)
    }`)

    const topEngaged = await sanityServer.fetch(`
      *[_type == "subscriber" && subscribed == true && analytics.emailsOpened > 0]
      | order(analytics.emailsOpened desc) [0...10] {
        _id,
        firstName,
        lastName,
        email,
        analytics
      }
    `)

    const inactive = await sanityServer.fetch(`
      *[_type == "subscriber" && subscribed == true && analytics.emailsSent > 0 && analytics.emailsOpened == 0]
      | order(analytics.emailsSent desc) [0...20] {
        _id,
        firstName,
        lastName,
        email,
        analytics,
        subscribedAt
      }
    `)

    return res.status(200).json({
      ...stats,
      avgOpenRate: stats.avgOpenRate?.toFixed(2) || 0,
      avgClickRate: stats.avgClickRate?.toFixed(2) || 0,
      topEngaged,
      inactive,
    })
  } catch (error: any) {
    console.error('Analytics error:', error)
    return res.status(500).json({ error: error.message })
  }
}
