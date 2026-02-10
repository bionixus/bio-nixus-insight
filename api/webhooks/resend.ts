import { createClient } from '@sanity/client'
import crypto from 'crypto'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Verify webhook signature (Resend provides this)
  const signature = req.headers['resend-signature']
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET

  if (webhookSecret) {
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(JSON.stringify(req.body))
      .digest('hex')

    if (signature !== expectedSignature) {
      return res.status(401).json({ error: 'Invalid signature' })
    }
  }

  const event = req.body

  try {
    // Extract subscriber ID from email tags
    const subscriberId = event.data?.tags?.find((t: any) => t.name === 'subscriber_id')?.value

    if (!subscriberId) {
      console.log('No subscriber ID in webhook event')
      return res.status(200).json({ received: true })
    }

    const subscriber = await sanityServer.fetch(`
      *[_type == "subscriber" && _id == $id][0]
    `, { id: subscriberId })

    if (!subscriber) {
      console.log('Subscriber not found:', subscriberId)
      return res.status(200).json({ received: true })
    }

    const analytics = subscriber.analytics || {}

    switch (event.type) {
      case 'email.sent':
        // Email successfully sent
        await sanityServer
          .patch(subscriberId)
          .set({
            'analytics.emailsSent': (analytics.emailsSent || 0) + 1,
            'analytics.lastEmailSent': new Date().toISOString()
          })
          .commit()
        break

      case 'email.delivered':
        // Email delivered to inbox
        break

      case 'email.opened': {
        // Email opened by subscriber
        const newOpens = (analytics.emailsOpened || 0) + 1
        const openRate = ((newOpens / (analytics.emailsSent || 1)) * 100).toFixed(2)

        const openedAnalytics = {
          ...analytics,
          emailsOpened: newOpens,
          lastEmailOpened: new Date().toISOString(),
          openRate: parseFloat(openRate),
        }
        const { score: openScore, level: openLevel } = calculateEngagement(openedAnalytics, subscriber.subscribedAt)

        await sanityServer
          .patch(subscriberId)
          .set({
            'analytics.emailsOpened': newOpens,
            'analytics.lastEmailOpened': new Date().toISOString(),
            'analytics.openRate': parseFloat(openRate),
            engagementScore: openScore,
            engagementLevel: openLevel,
          })
          .commit()
        break
      }

      case 'email.clicked': {
        // Link clicked in email
        const newClicks = (analytics.emailsClicked || 0) + 1
        const clickRate = ((newClicks / (analytics.emailsSent || 1)) * 100).toFixed(2)

        const clickedAnalytics = {
          ...analytics,
          emailsClicked: newClicks,
          lastEmailClicked: new Date().toISOString(),
          clickRate: parseFloat(clickRate),
        }
        const { score: clickScore, level: clickLevel } = calculateEngagement(clickedAnalytics, subscriber.subscribedAt)

        await sanityServer
          .patch(subscriberId)
          .set({
            'analytics.emailsClicked': newClicks,
            'analytics.lastEmailClicked': new Date().toISOString(),
            'analytics.clickRate': parseFloat(clickRate),
            engagementScore: clickScore,
            engagementLevel: clickLevel,
          })
          .commit()
        break
      }

      case 'email.bounced':
        // Email bounced (hard or soft)
        // Mark for review or unsubscribe
        await sanityServer
          .patch(subscriberId)
          .set({
            notes: `${subscriber.notes || ''}\n[${new Date().toISOString()}] Email bounced: ${event.data?.bounce_type}`
          })
          .commit()
        break

      case 'email.complained':
        // Subscriber marked as spam
        await sanityServer
          .patch(subscriberId)
          .set({
            subscribed: false,
            unsubscribedAt: new Date().toISOString(),
            notes: `${subscriber.notes || ''}\n[${new Date().toISOString()}] Marked as spam`
          })
          .commit()
        break
    }

    return res.status(200).json({ received: true })
  } catch (error: any) {
    console.error('Webhook error:', error)
    return res.status(500).json({ error: error.message })
  }
}

// Calculate engagement score (0-100) and level
// Mirrors logic from src/lib/engagement-score.ts
function calculateEngagement(analytics: any, subscribedAt?: string): { score: number; level: string } {
  let score = 0

  const emailsSent = analytics?.emailsSent || 0
  const emailsOpened = analytics?.emailsOpened || 0
  const emailsClicked = analytics?.emailsClicked || 0

  // 1. Open rate (0-40 points)
  if (emailsSent > 0) {
    const openRate = (emailsOpened / emailsSent) * 100
    score += Math.min(40, openRate)
  }

  // 2. Click rate (0-30 points)
  if (emailsSent > 0) {
    const clickRate = (emailsClicked / emailsSent) * 100
    score += Math.min(30, clickRate * 1.5) // Clicks are more valuable
  }

  // 3. Recency bonus (0-20 points)
  if (analytics?.lastEmailOpened) {
    const now = Date.now()
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

  // Determine level
  let level = 'inactive'
  if (score >= 70) level = 'high'
  else if (score >= 40) level = 'medium'
  else if (score >= 15) level = 'low'

  return { score, level }
}
