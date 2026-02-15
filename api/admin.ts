import { createClient } from '@sanity/client'
import { GoogleAuth } from 'google-auth-library'
import crypto from 'crypto'

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

  // ─── track-share: POST, public (no auth – called by anonymous visitors) ───
  if (action === 'track-share') {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
    return handleTrackShare(req, res)
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

  // ─── reset-newsletter: POST ───
  if (action === 'reset-newsletter') {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
    return handleResetNewsletter(req, res)
  }

  // ─── update-newsletter-segments: POST ───
  if (action === 'update-newsletter-segments') {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
    return handleUpdateNewsletterSegments(req, res)
  }

  // ─── share-analytics: GET ───
  if (action === 'share-analytics') {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
    return handleShareAnalytics(req, res)
  }

  // ─── failed-emails: GET ───
  if (action === 'failed-emails') {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
    return handleFailedEmails(req, res)
  }

  // ─── delete-failed-emails: POST ───
  if (action === 'delete-failed-emails') {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
    return handleDeleteFailedEmails(req, res)
  }

  // ─── sync-resend: POST — pull open/click/bounce data from Resend API ───
  if (action === 'sync-resend') {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
    return handleSyncResend(req, res)
  }

  // ─── gsc-rankings: GET ───
  if (action === 'gsc-rankings') {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
    return handleGscRankings(req, res)
  }

  return res.status(400).json({ error: 'Unknown action' })
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
        subscribedAt,
        _createdAt
      }
    `)

    let updated = 0
    const BATCH = 50 // Sanity transaction limit

    for (let i = 0; i < subscribers.length; i += BATCH) {
      const chunk = subscribers.slice(i, i + BATCH)
      let tx = sanityServer.transaction()

      for (const sub of chunk) {
        const { score, level } = calculateEngagementScore(
          sub.analytics || {},
          sub.subscribedAt || sub._createdAt
        )
        tx = tx.patch(sub._id, (p: any) =>
          p.set({ engagementScore: score, engagementLevel: level })
        )
      }

      await tx.commit()
      updated += chunk.length
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

/**
 * Engagement score (0-100) based on:
 *   1. Open rate        → 0-40 pts
 *   2. Click rate       → 0-30 pts  (clicks weighted 1.5×)
 *   3. Recency bonus    → 0-20 pts  (how recently they opened)
 *   4. Consistency bonus → 0-10 pts  (3+ emails, opened ≥25%)
 *
 * Levels:
 *   - "new"      → never received an email yet
 *   - "inactive" → received email(s) but score < 15
 *   - "low"      → score 15-39
 *   - "medium"   → score 40-69
 *   - "high"     → score ≥ 70
 */
function calculateEngagementScore(
  analytics: any,
  subscribedAt?: string
): { score: number; level: string } {
  const emailsSent = analytics?.emailsSent || 0
  const emailsOpened = analytics?.emailsOpened || 0
  const emailsClicked = analytics?.emailsClicked || 0

  // If they've never been sent an email, they're "new" not "inactive"
  if (emailsSent === 0) {
    return { score: 0, level: 'new' }
  }

  let score = 0
  const now = Date.now()

  // 1. Open rate (0-40 points)
  const openRate = (emailsOpened / emailsSent) * 100
  score += Math.min(40, openRate)

  // 2. Click rate (0-30 points) — clicks weighted 1.5×
  const clickRate = (emailsClicked / emailsSent) * 100
  score += Math.min(30, clickRate * 1.5)

  // 3. Recency bonus (0-20 points)
  if (analytics?.lastEmailOpened) {
    const lastOpenDate = new Date(analytics.lastEmailOpened).getTime()
    const daysSinceLastOpen = Math.floor((now - lastOpenDate) / (1000 * 60 * 60 * 24))

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

  score = Math.min(100, Math.max(0, Math.round(score)))

  let level = 'inactive'
  if (score >= 70) level = 'high'
  else if (score >= 40) level = 'medium'
  else if (score >= 15) level = 'low'

  return { score, level }
}

// ═══════════════════════════════════════════════════════════════════
// Sync Resend — pull all email event data from Resend API
// Groups by recipient email, counts sent/opened/clicked, updates Sanity
// ═══════════════════════════════════════════════════════════════════
async function handleSyncResend(_req: any, res: any) {
  const RESEND_KEY = process.env.RESEND_API_KEY
  if (!RESEND_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY not configured' })
  }

  try {
    // 1. Fetch ALL emails from Resend (paginated via cursor)
    type ResendEmail = {
      id: string
      to: string[]
      subject: string
      last_event: string
      created_at: string
    }

    const allEmails: ResendEmail[] = []
    let cursor: string | undefined
    let page = 0
    const PAGE_SIZE = 100

    while (true) {
      page++
      const url = new URL('https://api.resend.com/emails')
      url.searchParams.set('limit', String(PAGE_SIZE))
      if (cursor) url.searchParams.set('cursor', cursor)

      const resp = await fetch(url.toString(), {
        headers: { Authorization: `Bearer ${RESEND_KEY}` },
      })

      if (!resp.ok) {
        const text = await resp.text()
        console.error(`Resend API error (page ${page}):`, text)
        break
      }

      const json = await resp.json() as { data: ResendEmail[], pagination?: { cursor?: string, has_more?: boolean } }
      allEmails.push(...(json.data || []))

      // Pagination via cursor
      if (json.pagination?.has_more && json.pagination.cursor) {
        cursor = json.pagination.cursor
      } else {
        break
      }

      // Safety: max 20 pages (2000 emails)
      if (page >= 20) break
    }

    console.log(`[sync-resend] Fetched ${allEmails.length} emails from Resend across ${page} page(s)`)

    if (allEmails.length === 0) {
      return res.status(200).json({ success: true, message: 'No emails found in Resend', synced: 0 })
    }

    // 2. Group by recipient email address
    // Event hierarchy: sent < delivered < delivery_delayed < opened < clicked
    // bounced and complained are terminal
    type EmailStats = {
      emailsSent: number
      emailsOpened: number
      emailsClicked: number
      lastEmailSent: string | null
      lastEmailOpened: string | null
      lastEmailClicked: string | null
      bounced: boolean
    }

    const byEmail = new Map<string, EmailStats>()

    for (const email of allEmails) {
      const recipients = email.to || []
      for (const addr of recipients) {
        const lowerAddr = addr.toLowerCase().trim()
        if (!byEmail.has(lowerAddr)) {
          byEmail.set(lowerAddr, {
            emailsSent: 0,
            emailsOpened: 0,
            emailsClicked: 0,
            lastEmailSent: null,
            lastEmailOpened: null,
            lastEmailClicked: null,
            bounced: false,
          })
        }
        const stats = byEmail.get(lowerAddr)!
        const event = email.last_event
        const ts = email.created_at

        // Every email counts as "sent" (even if it bounced later)
        stats.emailsSent++
        if (!stats.lastEmailSent || ts > stats.lastEmailSent) stats.lastEmailSent = ts

        // "opened" means it was opened (also true if clicked, since click implies open)
        if (event === 'opened' || event === 'clicked') {
          stats.emailsOpened++
          if (!stats.lastEmailOpened || ts > stats.lastEmailOpened) stats.lastEmailOpened = ts
        }

        if (event === 'clicked') {
          stats.emailsClicked++
          if (!stats.lastEmailClicked || ts > stats.lastEmailClicked) stats.lastEmailClicked = ts
        }

        if (event === 'bounced') {
          stats.bounced = true
        }
      }
    }

    console.log(`[sync-resend] ${byEmail.size} unique recipient emails found`)

    // 3. Fetch all active subscribers from Sanity (email → _id mapping)
    const subscribers: { _id: string; email: string; subscribedAt?: string; _createdAt: string }[] =
      await sanityServer.fetch(`*[_type == "subscriber" && subscribed == true]{ _id, email, subscribedAt, _createdAt }`)

    const subByEmail = new Map<string, typeof subscribers[0]>()
    for (const sub of subscribers) {
      subByEmail.set(sub.email.toLowerCase().trim(), sub)
    }

    // 4. Merge and update Sanity in batches
    const BATCH = 50
    let synced = 0
    let skipped = 0
    const entriesToUpdate: { sub: typeof subscribers[0]; stats: EmailStats }[] = []

    for (const [email, stats] of byEmail) {
      const sub = subByEmail.get(email)
      if (!sub) {
        skipped++
        continue
      }
      entriesToUpdate.push({ sub, stats })
    }

    for (let i = 0; i < entriesToUpdate.length; i += BATCH) {
      const chunk = entriesToUpdate.slice(i, i + BATCH)
      let tx = sanityServer.transaction()

      for (const { sub, stats } of chunk) {
        // Compute engagement score with the synced stats
        const { score, level } = calculateEngagementScore(stats, sub.subscribedAt || sub._createdAt)

        tx = tx.patch(sub._id, (p: any) =>
          p
            .setIfMissing({ analytics: {} })
            .set({
              'analytics.emailsSent': stats.emailsSent,
              'analytics.emailsOpened': stats.emailsOpened,
              'analytics.emailsClicked': stats.emailsClicked,
              ...(stats.lastEmailSent ? { 'analytics.lastEmailSent': stats.lastEmailSent } : {}),
              ...(stats.lastEmailOpened ? { 'analytics.lastEmailOpened': stats.lastEmailOpened } : {}),
              ...(stats.lastEmailClicked ? { 'analytics.lastEmailClicked': stats.lastEmailClicked } : {}),
              ...(stats.emailsSent > 0
                ? { 'analytics.openRate': Math.round((stats.emailsOpened / stats.emailsSent) * 10000) / 100 }
                : {}),
              ...(stats.emailsSent > 0
                ? { 'analytics.clickRate': Math.round((stats.emailsClicked / stats.emailsSent) * 10000) / 100 }
                : {}),
              engagementScore: score,
              engagementLevel: level,
            })
        )
      }

      await tx.commit()
      synced += chunk.length
      console.log(`[sync-resend] Updated ${synced}/${entriesToUpdate.length} subscribers`)
    }

    // 5. Also recalculate scores for subscribers NOT in Resend (they stay "new")
    const subIdsUpdated = new Set(entriesToUpdate.map(e => e.sub._id))
    const remaining = subscribers.filter(s => !subIdsUpdated.has(s._id))

    for (let i = 0; i < remaining.length; i += BATCH) {
      const chunk = remaining.slice(i, i + BATCH)
      let tx = sanityServer.transaction()
      for (const sub of chunk) {
        tx = tx.patch(sub._id, (p: any) =>
          p.set({ engagementScore: 0, engagementLevel: 'new' })
        )
      }
      await tx.commit()
    }

    return res.status(200).json({
      success: true,
      message: `Synced ${synced} subscribers from ${allEmails.length} Resend emails. ${skipped} emails had no matching subscriber. ${remaining.length} subscribers marked as "new" (no emails sent).`,
      totalResendEmails: allEmails.length,
      uniqueRecipients: byEmail.size,
      synced,
      skipped,
      newSubscribers: remaining.length,
    })
  } catch (error: any) {
    console.error('Sync Resend error:', error)
    return res.status(500).json({ error: error.message })
  }
}

// ═══════════════════════════════════════════════════════════════════
// Analytics handler — pulls from BOTH newsletter stats AND subscriber analytics
// ═══════════════════════════════════════════════════════════════════
async function handleAnalytics(_req: any, res: any) {
  try {
    // Newsletter-level stats (primary source — always accurate)
    const newsletterStats = await sanityServer.fetch(`{
      "totalSent": math::sum(*[_type == "newsletter" && status == "sent"].stats.totalSent),
      "totalSuccess": math::sum(*[_type == "newsletter" && status == "sent"].stats.successCount),
      "totalFailed": math::sum(*[_type == "newsletter" && status == "sent"].stats.failedCount),
      "totalOpens": math::sum(*[_type == "newsletter" && status == "sent"].stats.openCount),
      "totalClicks": math::sum(*[_type == "newsletter" && status == "sent"].stats.clickCount),
      "totalBounces": math::sum(*[_type == "newsletter" && status == "sent"].stats.bounceCount),
      "totalComplaints": math::sum(*[_type == "newsletter" && status == "sent"].stats.complaintCount),
      "newsletterCount": count(*[_type == "newsletter" && status == "sent"])
    }`)

    // Subscriber-level stats (secondary — populated by webhooks)
    const subscriberStats = await sanityServer.fetch(`{
      "subTotalSent": math::sum(*[_type == "subscriber"].analytics.emailsSent),
      "subTotalOpens": math::sum(*[_type == "subscriber"].analytics.emailsOpened),
      "subTotalClicks": math::sum(*[_type == "subscriber"].analytics.emailsClicked)
    }`)

    // Use the best available data
    const totalSent = newsletterStats.totalSent || subscriberStats.subTotalSent || 0
    const totalSuccess = newsletterStats.totalSuccess || totalSent
    const totalFailed = newsletterStats.totalFailed || 0
    const totalOpens = newsletterStats.totalOpens || subscriberStats.subTotalOpens || 0
    const totalClicks = newsletterStats.totalClicks || subscriberStats.subTotalClicks || 0
    const totalBounces = newsletterStats.totalBounces || 0

    const avgOpenRate = totalSuccess > 0 ? ((totalOpens / totalSuccess) * 100).toFixed(1) : '0'
    const avgClickRate = totalSuccess > 0 ? ((totalClicks / totalSuccess) * 100).toFixed(1) : '0'
    const bounceRate = totalSent > 0 ? ((totalBounces / totalSent) * 100).toFixed(1) : '0'

    // Failed email count
    const failedEmailCount = await sanityServer.fetch(`count(*[_type == "failedEmail"])`)

    // Per-newsletter breakdown (last 10 sent)
    const newsletters = await sanityServer.fetch(`
      *[_type == "newsletter" && status == "sent"] | order(sentAt desc) [0...10] {
        _id, title, sentAt, targetSegments, stats
      }
    `)

    // Top engaged subscribers
    const topEngaged = await sanityServer.fetch(`
      *[_type == "subscriber" && subscribed == true && defined(analytics) && analytics.emailsOpened > 0]
      | order(analytics.emailsOpened desc) [0...10] {
        _id, firstName, lastName, email, analytics
      }
    `)

    // Inactive subscribers (sent but never opened)
    const inactive = await sanityServer.fetch(`
      *[_type == "subscriber" && subscribed == true && defined(analytics) && analytics.emailsSent > 0 && (analytics.emailsOpened == 0 || !defined(analytics.emailsOpened))]
      | order(analytics.emailsSent desc) [0...20] {
        _id, firstName, lastName, email, analytics, subscribedAt
      }
    `)

    return res.status(200).json({
      totalSent,
      totalSuccess,
      totalFailed,
      totalOpens,
      totalClicks,
      totalBounces,
      avgOpenRate,
      avgClickRate,
      bounceRate,
      failedEmailCount,
      newsletterCount: newsletterStats.newsletterCount || 0,
      newsletters,
      topEngaged,
      inactive,
    })
  } catch (error: any) {
    console.error('Analytics error:', error)
    return res.status(500).json({ error: error.message })
  }
}

// ═══════════════════════════════════════════════════════════════════
// Failed Emails handler
// ═══════════════════════════════════════════════════════════════════
async function handleFailedEmails(_req: any, res: any) {
  try {
    const failedEmails = await sanityServer.fetch(`
      *[_type == "failedEmail"] | order(timestamp desc) [0...200] {
        _id, newsletterId, newsletterTitle, email, subscriberId, reason, eventType, timestamp
      }
    `)
    const total = await sanityServer.fetch(`count(*[_type == "failedEmail"])`)
    return res.status(200).json({ failedEmails, total })
  } catch (error: any) {
    console.error('Failed emails error:', error)
    return res.status(500).json({ error: error.message })
  }
}

// ═══════════════════════════════════════════════════════════════════
// Delete Failed Emails + optionally hard-delete subscriber
// ═══════════════════════════════════════════════════════════════════
async function handleDeleteFailedEmails(req: any, res: any) {
  const { failedEmailIds, alsoDeleteSubscribers } = req.body

  if (!Array.isArray(failedEmailIds) || failedEmailIds.length === 0) {
    return res.status(400).json({ error: 'failedEmailIds array is required' })
  }

  try {
    let deletedRecords = 0
    let deletedSubscribers = 0

    // Get subscriber IDs before deleting records (if also deleting subscribers)
    let subscriberIds: string[] = []
    if (alsoDeleteSubscribers) {
      const records = await sanityServer.fetch(
        `*[_type == "failedEmail" && _id in $ids]{ subscriberId }`,
        { ids: failedEmailIds }
      )
      subscriberIds = [...new Set(records.map((r: any) => r.subscriberId).filter(Boolean))] as string[]
    }

    // Delete failed email records in batches
    for (let i = 0; i < failedEmailIds.length; i += 50) {
      const batch = failedEmailIds.slice(i, i + 50)
      let tx = sanityServer.transaction()
      for (const id of batch) {
        tx = tx.delete(id)
      }
      await tx.commit()
      deletedRecords += batch.length
    }

    // Optionally hard-delete the subscribers too
    if (alsoDeleteSubscribers && subscriberIds.length > 0) {
      for (let i = 0; i < subscriberIds.length; i += 50) {
        const batch = subscriberIds.slice(i, i + 50)
        let tx = sanityServer.transaction()
        for (const id of batch) {
          tx = tx.delete(id)
        }
        await tx.commit()
        deletedSubscribers += batch.length
      }
    }

    return res.status(200).json({
      success: true,
      deletedRecords,
      deletedSubscribers,
    })
  } catch (error: any) {
    console.error('Delete failed emails error:', error)
    return res.status(500).json({ error: error.message })
  }
}

// ═══════════════════════════════════════════════════════════════════
// Reset Newsletter handler
// ═══════════════════════════════════════════════════════════════════
async function handleResetNewsletter(req: any, res: any) {
  const { newsletterId } = req.body

  if (!newsletterId) {
    return res.status(400).json({ error: 'Newsletter ID is required' })
  }

  try {
    await sanityServer
      .patch(newsletterId)
      .set({ status: 'draft' })
      .unset(['sentAt', 'stats'])
      .commit()

    return res.status(200).json({ success: true, message: 'Newsletter reset to draft' })
  } catch (error: any) {
    console.error('Reset newsletter error:', error)
    return res.status(500).json({ error: error.message })
  }
}

// ═══════════════════════════════════════════════════════════════════
// Update Newsletter Segments handler
// ═══════════════════════════════════════════════════════════════════
async function handleUpdateNewsletterSegments(req: any, res: any) {
  const { newsletterId, segments } = req.body

  if (!newsletterId) {
    return res.status(400).json({ error: 'Newsletter ID is required' })
  }
  if (!Array.isArray(segments)) {
    return res.status(400).json({ error: 'Segments must be an array' })
  }

  try {
    await sanityServer
      .patch(newsletterId)
      .set({ targetSegments: segments })
      .commit()

    return res.status(200).json({ success: true, message: 'Segments updated', segments })
  } catch (error: any) {
    console.error('Update newsletter segments error:', error)
    return res.status(500).json({ error: error.message })
  }
}

// ═══════════════════════════════════════════════════════════════════
// Share Analytics handler
// ═══════════════════════════════════════════════════════════════════
async function handleShareAnalytics(_req: any, res: any) {
  try {
    // Summary stats
    const summary = await sanityServer.fetch(`{
      "total": count(*[_type == "shareEvent"]),
      "byPlatform": {
        "linkedin": count(*[_type == "shareEvent" && platform == "linkedin"]),
        "twitter": count(*[_type == "shareEvent" && platform == "twitter"]),
        "facebook": count(*[_type == "shareEvent" && platform == "facebook"]),
        "whatsapp": count(*[_type == "shareEvent" && platform == "whatsapp"]),
        "copy": count(*[_type == "shareEvent" && platform == "copy"])
      },
      "byContentType": {
        "blog": count(*[_type == "shareEvent" && contentType == "blog"]),
        "caseStudy": count(*[_type == "shareEvent" && contentType == "case-study"])
      }
    }`)

    // Top shared content
    const topContent = await sanityServer.fetch(`
      *[_type == "shareEvent"] {
        contentSlug,
        contentTitle,
        contentType
      } | order(contentSlug asc)
    `)

    // Aggregate top content by slug
    const slugCounts: Record<string, { title: string; type: string; count: number }> = {}
    for (const item of topContent) {
      const key = `${item.contentType}:${item.contentSlug}`
      if (!slugCounts[key]) {
        slugCounts[key] = { title: item.contentTitle || item.contentSlug, type: item.contentType, count: 0 }
      }
      slugCounts[key].count++
    }
    const topShared = Object.values(slugCounts)
      .sort((a, b) => b.count - a.count)
      .slice(0, 10)

    // Shares by country (top 15)
    const countryEvents = await sanityServer.fetch(`
      *[_type == "shareEvent" && defined(country) && country != "unknown"] {
        country
      }
    `)
    const countryCounts: Record<string, number> = {}
    for (const item of countryEvents) {
      countryCounts[item.country] = (countryCounts[item.country] || 0) + 1
    }
    const byCountry = Object.entries(countryCounts)
      .map(([country, count]) => ({ country, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 15)

    // Recent events (last 50)
    const recentEvents = await sanityServer.fetch(`
      *[_type == "shareEvent"] | order(timestamp desc) [0...50] {
        _id,
        platform,
        contentType,
        contentSlug,
        contentTitle,
        country,
        city,
        timestamp,
        anonymousId
      }
    `)

    return res.status(200).json({
      summary,
      topShared,
      byCountry,
      recentEvents,
    })
  } catch (error: any) {
    console.error('Share analytics error:', error)
    return res.status(500).json({ error: error.message })
  }
}

// ═══════════════════════════════════════════════════════════════════
// Track Share handler (public – no auth required)
// ═══════════════════════════════════════════════════════════════════
function hashIp(ip: string): string {
  return crypto.createHash('sha256').update(ip).digest('hex').slice(0, 16)
}

async function handleTrackShare(req: any, res: any) {
  try {
    const { platform, contentType, contentSlug, contentTitle, anonymousId } =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body

    if (!platform || !contentType || !contentSlug) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Vercel provides geo headers automatically
    const country =
      req.headers['x-vercel-ip-country'] ||
      req.headers['cf-ipcountry'] ||
      'unknown'
    const city = req.headers['x-vercel-ip-city'] || ''
    const userAgent = req.headers['user-agent'] || ''
    const rawIp =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.headers['x-real-ip'] ||
      req.socket?.remoteAddress ||
      ''

    const doc = {
      _type: 'shareEvent',
      platform,
      contentType,
      contentSlug,
      contentTitle: contentTitle || '',
      country: decodeURIComponent(country),
      city: decodeURIComponent(city),
      userAgent: userAgent.slice(0, 500),
      ipHash: rawIp ? hashIp(rawIp) : '',
      timestamp: new Date().toISOString(),
      anonymousId: anonymousId || '',
    }

    await sanityServer.create(doc)

    return res.status(200).json({ success: true })
  } catch (err: any) {
    console.error('track-share error:', err.message)
    // Return 200 anyway – tracking should never break UX
    return res.status(200).json({ success: false })
  }
}

// ═══════════════════════════════════════════════════════════════════
// GSC Rankings handler — Google Search Console keyword tracking
// ═══════════════════════════════════════════════════════════════════
// GSC supports domain properties (sc-domain:) and URL prefix properties (https://)
// Try domain first, fall back to URL prefix
const GSC_SITE_URLS = [
  'sc-domain:bionixus.com',
  'https://www.bionixus.com',
  'https://bionixus.com',
]

function getGoogleAuth() {
  const clientEmail = process.env.GSC_CLIENT_EMAIL
  const privateKey = process.env.GSC_PRIVATE_KEY?.replace(/\\n/g, '\n')

  if (!clientEmail || !privateKey) {
    throw new Error('GSC_CLIENT_EMAIL and GSC_PRIVATE_KEY environment variables are required')
  }

  return new GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  })
}

async function handleGscRankings(req: any, res: any) {
  try {
    const {
      days = '28',
      limit = '50',
      page,
      country,
      device,
      query: searchQuery,
      sort = 'clicks',
      groupByPage,
    } = req.query

    // Date range (GSC data has ~3 day lag)
    const endDate = new Date()
    endDate.setDate(endDate.getDate() - 3)
    const startDate = new Date(endDate)
    startDate.setDate(startDate.getDate() - parseInt(days))

    const fmtDate = (d: Date) => d.toISOString().split('T')[0]

    // Dimensions
    const dimensions: string[] = ['query']
    if (page || groupByPage === 'true') dimensions.push('page')

    // Filters
    const filters: any[] = []
    if (page) filters.push({ dimension: 'page', operator: 'contains', expression: page })
    if (country) filters.push({ dimension: 'country', operator: 'equals', expression: country.toUpperCase() })
    if (device) filters.push({ dimension: 'device', operator: 'equals', expression: device.toUpperCase() })
    if (searchQuery) filters.push({ dimension: 'query', operator: 'contains', expression: searchQuery })

    const dimensionFilterGroups: any[] = []
    if (filters.length > 0) dimensionFilterGroups.push({ groupType: 'and', filters })

    // Authenticate and call GSC API
    const auth = getGoogleAuth()
    const client = await auth.getClient()
    const accessToken = await client.getAccessToken()

    const body: Record<string, any> = {
      startDate: fmtDate(startDate),
      endDate: fmtDate(endDate),
      dimensions,
      rowLimit: Math.min(parseInt(limit), 1000),
      startRow: 0,
    }
    if (dimensionFilterGroups.length > 0) body.dimensionFilterGroups = dimensionFilterGroups

    // Try each site URL format until one works
    let response: Response | null = null
    let usedSiteUrl = ''
    for (const siteUrl of GSC_SITE_URLS) {
      const encodedSite = encodeURIComponent(siteUrl)
      const apiUrl = `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`

      const attempt = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      if (attempt.ok) {
        response = attempt
        usedSiteUrl = siteUrl
        break
      }
      // If 403, try next format; for other errors, return immediately
      if (attempt.status !== 403) {
        const errText = await attempt.text()
        console.error('GSC API error:', attempt.status, errText)
        return res.status(attempt.status).json({ error: 'Google Search Console API error', details: errText })
      }
    }

    if (!response) {
      return res.status(403).json({
        error: 'No accessible GSC property found',
        details: `Tried: ${GSC_SITE_URLS.join(', ')}. Ensure the service account email is added as a user in Google Search Console.`,
      })
    }

    const data = await response.json() as { rows?: { keys: string[]; clicks: number; impressions: number; ctr: number; position: number }[] }

    // Map to clean format
    const rankings = (data.rows || []).map((row) => ({
      query: row.keys[0],
      ...(dimensions.includes('page') && { page: row.keys[1] }),
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: (row.ctr * 100).toFixed(1) + '%',
      position: row.position.toFixed(1),
    }))

    // Sort
    if (['clicks', 'impressions', 'position'].includes(sort)) {
      rankings.sort((a: any, b: any) => {
        const aVal = parseFloat(String(a[sort]))
        const bVal = parseFloat(String(b[sort]))
        return sort === 'position' ? aVal - bVal : bVal - aVal
      })
    }

    return res.status(200).json({
      site: usedSiteUrl,
      dateRange: { start: fmtDate(startDate), end: fmtDate(endDate) },
      totalKeywords: rankings.length,
      rankings,
    })
  } catch (error: any) {
    console.error('GSC rankings error:', error)
    return res.status(500).json({ error: error.message })
  }
}
