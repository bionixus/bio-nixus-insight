interface SubscriberAnalytics {
  emailsSent?: number
  emailsOpened?: number
  emailsClicked?: number
  lastEmailOpened?: string
  lastEmailClicked?: string
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
export function calculateEngagementScore(
  analytics: SubscriberAnalytics,
  subscribedAt?: string
): { score: number; level: string } {
  const emailsSent = analytics.emailsSent || 0
  const emailsOpened = analytics.emailsOpened || 0
  const emailsClicked = analytics.emailsClicked || 0

  // Never been sent an email → "new" (not inactive)
  if (emailsSent === 0) {
    return { score: 0, level: 'new' }
  }

  let score = 0
  const now = Date.now()

  // 1. Open rate (0-40 points)
  score += Math.min(40, (emailsOpened / emailsSent) * 100)

  // 2. Click rate (0-30 points, weighted 1.5×)
  score += Math.min(30, (emailsClicked / emailsSent) * 100 * 1.5)

  // 3. Recency bonus (0-20 points)
  if (analytics.lastEmailOpened) {
    const daysSince = Math.floor(
      (now - new Date(analytics.lastEmailOpened).getTime()) / 86400000
    )
    if (daysSince <= 7) score += 20
    else if (daysSince <= 30) score += 15
    else if (daysSince <= 90) score += 10
    else if (daysSince <= 180) score += 5
  }

  // 4. Consistency bonus (0-10 points)
  if (emailsSent >= 3) {
    const rate = (emailsOpened / emailsSent) * 100
    if (rate >= 75) score += 10
    else if (rate >= 50) score += 7
    else if (rate >= 25) score += 4
  }

  score = Math.min(100, Math.max(0, Math.round(score)))

  let level = 'inactive'
  if (score >= 70) level = 'high'
  else if (score >= 40) level = 'medium'
  else if (score >= 15) level = 'low'

  return { score, level }
}
