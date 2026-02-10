interface SubscriberAnalytics {
  emailsSent?: number
  emailsOpened?: number
  emailsClicked?: number
  lastEmailOpened?: string
  lastEmailClicked?: string
}

export function calculateEngagementScore(
  analytics: SubscriberAnalytics,
  subscribedAt: string
): { score: number; level: string } {
  
  let score = 0
  const now = new Date()
  const subscribeDate = new Date(subscribedAt)
  const daysSinceSubscribed = Math.floor((now.getTime() - subscribeDate.getTime()) / (1000 * 60 * 60 * 24))

  // Base points for activity
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
    score += Math.min(30, clickRate * 1.5) // Clicks are more valuable
  }

  // 3. Recency bonus (0-20 points)
  if (analytics.lastEmailOpened) {
    const lastOpenDate = new Date(analytics.lastEmailOpened)
    const daysSinceLastOpen = Math.floor((now.getTime() - lastOpenDate.getTime()) / (1000 * 60 * 60 * 24))
    
    if (daysSinceLastOpen <= 7) {
      score += 20 // Very recent
    } else if (daysSinceLastOpen <= 30) {
      score += 15 // Recent
    } else if (daysSinceLastOpen <= 90) {
      score += 10 // Somewhat recent
    } else if (daysSinceLastOpen <= 180) {
      score += 5 // Old
    }
    // 0 points if more than 180 days
  }

  // 4. Consistency bonus (0-10 points)
  if (emailsSent >= 3) {
    // If they've opened at least 50% of emails
    const consistencyRate = (emailsOpened / emailsSent) * 100
    if (consistencyRate >= 75) {
      score += 10
    } else if (consistencyRate >= 50) {
      score += 7
    } else if (consistencyRate >= 25) {
      score += 4
    }
  }

  // Normalize score to 0-100
  score = Math.min(100, Math.max(0, score))

  // Determine engagement level
  let level = 'inactive'
  if (score >= 70) {
    level = 'high' // 🔥 Highly Engaged
  } else if (score >= 40) {
    level = 'medium' // ✅ Engaged
  } else if (score >= 15) {
    level = 'low' // ⚠️ Low Engagement
  }
  // else: inactive 😴

  return { score: Math.round(score), level }
}
