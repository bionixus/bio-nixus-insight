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
    // Get all subscribers
    const subscribers = await sanityServer.fetch(`
      *[_type == "subscriber" && subscribed == true] {
        _id,
        analytics,
        subscribedAt
      }
    `)

    let updated = 0

    // Calculate and update engagement scores
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

export default function authHandler(req: any, res: any) {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ') || authHeader.substring(7) !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  return handler(req, res)
}

// Mirrors logic from src/lib/engagement-score.ts
function calculateEngagementScore(
  analytics: any,
  subscribedAt: string
): { score: number; level: string } {
  let score = 0
  const now = new Date()
  const subscribeDate = new Date(subscribedAt)
  const daysSinceSubscribed = Math.floor((now.getTime() - subscribeDate.getTime()) / (1000 * 60 * 60 * 24))

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
