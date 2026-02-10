import { createClient } from '@sanity/client'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'BioNixus2026!'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Auth check
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ') || authHeader.substring(7) !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    // Get overall analytics
    const stats = await sanityServer.fetch(`{
      "totalSent": math::sum(*[_type == "subscriber"].analytics.emailsSent),
      "totalOpens": math::sum(*[_type == "subscriber"].analytics.emailsOpened),
      "totalClicks": math::sum(*[_type == "subscriber"].analytics.emailsClicked),
      "avgOpenRate": math::avg(*[_type == "subscriber" && defined(analytics.openRate)].analytics.openRate),
      "avgClickRate": math::avg(*[_type == "subscriber" && defined(analytics.clickRate)].analytics.clickRate)
    }`)

    // Get top engaged subscribers
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

    // Get inactive subscribers (emails sent but never opened)
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
