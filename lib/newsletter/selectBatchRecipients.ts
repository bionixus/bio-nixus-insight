import type { SanityClient } from '@sanity/client'
import { getCompanyDomain } from './companyDomain'

export interface BatchSubscriber {
  _id: string
  email: string
  firstName?: string
  lastName?: string
  company?: string
  companyDomain?: string
  language?: string
  engagementScore?: number
  analytics?: {
    emailsSent?: number
    lastEmailSent?: string
  }
}

export interface BatchSkipCounts {
  alreadySent: number
  domainCooldown: number
  domainDuplicate: number
  dailyCap: number
}

export interface BatchSelectionResult {
  toSend: BatchSubscriber[]
  skipped: BatchSkipCounts
  remainingAfterBatch: number
  totalEligible: number
}

export interface BatchSelectionOptions {
  dailyMax?: number
  cooldownHours?: number
  /** Subscriber document IDs explicitly queued for this newsletter. */
  manualRecipientIds?: string[]
  excludeSegments?: string[]
}

function clampDailyMax(raw: number | undefined): number {
  const n = raw ?? parseInt(process.env.NEWSLETTER_DAILY_SEND_MAX || '85', 10)
  if (Number.isNaN(n)) return 85
  return Math.min(90, Math.max(80, n))
}

function getCooldownHours(raw: number | undefined): number {
  const n = raw ?? parseInt(process.env.NEWSLETTER_COMPANY_COOLDOWN_HOURS || '12', 10)
  return Number.isNaN(n) ? 12 : n
}

function pickBestFromDomain(candidates: BatchSubscriber[]): BatchSubscriber {
  return candidates.sort((a, b) => {
    const aSent = a.analytics?.emailsSent ?? 0
    const bSent = b.analytics?.emailsSent ?? 0
    if (aSent !== bSent) return aSent - bSent

    const aLast = a.analytics?.lastEmailSent ? new Date(a.analytics.lastEmailSent).getTime() : 0
    const bLast = b.analytics?.lastEmailSent ? new Date(b.analytics.lastEmailSent).getTime() : 0
    if (aLast !== bLast) return aLast - bLast

    return (b.engagementScore ?? 0) - (a.engagementScore ?? 0)
  })[0]
}

export async function selectBatchRecipients(
  sanity: SanityClient,
  newsletterId: string,
  targetSegments: string[],
  options: BatchSelectionOptions = {}
): Promise<BatchSelectionResult> {
  const dailyMax = clampDailyMax(options.dailyMax)
  const cooldownHours = getCooldownHours(options.cooldownHours)
  const cooldownSince = new Date(Date.now() - cooldownHours * 60 * 60 * 1000).toISOString()
  const manualIds = options.manualRecipientIds?.filter(Boolean) ?? []
  const excludeSegments = options.excludeSegments?.filter(Boolean) ?? []

  const hasNoVerifySegment = targetSegments.some(
    (s) => s === 'pharma_cold_leads' || s === 'test_list'
  )

  const excludeClause =
    excludeSegments.length > 0
      ? ` && count((segments[@ in $excludeSegments])) == 0`
      : ''

  const subscribers: BatchSubscriber[] = await sanity.fetch(
    `*[_type == "subscriber" && subscribed == true && count((segments[@ in $targetSegments])) > 0${excludeClause} && (
      emailVerified == true ||
      ($hasNoVerifySegment && ("pharma_cold_leads" in segments || "test_list" in segments))
    )] {
      _id, email, firstName, lastName, company, companyDomain, language,
      engagementScore, analytics
    }`,
    {
      targetSegments,
      excludeSegments,
      hasNoVerifySegment: hasNoVerifySegment || false,
    }
  )

  const manualSubscribers: BatchSubscriber[] =
    manualIds.length > 0
      ? await sanity.fetch(
          `*[_type == "subscriber" && _id in $manualIds && subscribed == true] {
            _id, email, firstName, lastName, company, companyDomain, language,
            engagementScore, analytics
          }`,
          { manualIds }
        )
      : []

  const alreadySentIds = new Set<string>(
    await sanity.fetch(
      `*[_type == "newsletterDelivery" && newsletter._ref == $newsletterId && status == "sent"].subscriber._ref`,
      { newsletterId }
    )
  )

  const recentDomainRows: { companyDomain: string }[] = await sanity.fetch(
    `*[_type == "newsletterDelivery" && status == "sent" && sentAt > $since && defined(companyDomain)] {
      companyDomain
    }`,
    { since: cooldownSince }
  )
  const cooldownDomains = new Set(recentDomainRows.map((r) => r.companyDomain))

  const skipped: BatchSkipCounts = {
    alreadySent: 0,
    domainCooldown: 0,
    domainDuplicate: 0,
    dailyCap: 0,
  }

  const manualToSend: BatchSubscriber[] = []
  const manualIdSet = new Set(manualIds)

  for (const sub of manualSubscribers) {
    if (alreadySentIds.has(sub._id)) {
      skipped.alreadySent++
      continue
    }
    sub.companyDomain = sub.companyDomain || getCompanyDomain(sub.email)
    manualToSend.push(sub)
  }

  const domainBuckets = new Map<string, BatchSubscriber[]>()

  for (const sub of subscribers) {
    if (manualIdSet.has(sub._id)) continue

    if (alreadySentIds.has(sub._id)) {
      skipped.alreadySent++
      continue
    }

    const domain = sub.companyDomain || getCompanyDomain(sub.email)
    sub.companyDomain = domain

    if (cooldownDomains.has(domain)) {
      skipped.domainCooldown++
      continue
    }

    const bucket = domainBuckets.get(domain) || []
    bucket.push(sub)
    domainBuckets.set(domain, bucket)
  }

  const onePerDomain: BatchSubscriber[] = []
  for (const [, bucket] of domainBuckets) {
    if (bucket.length === 1) {
      onePerDomain.push(bucket[0])
    } else {
      onePerDomain.push(pickBestFromDomain(bucket))
      skipped.domainDuplicate += bucket.length - 1
    }
  }

  onePerDomain.sort((a, b) => {
    const aLast = a.analytics?.lastEmailSent ? new Date(a.analytics.lastEmailSent).getTime() : 0
    const bLast = b.analytics?.lastEmailSent ? new Date(b.analytics.lastEmailSent).getTime() : 0
    return aLast - bLast
  })

  const segmentEligible = onePerDomain.length
  const manualCount = manualToSend.length
  const totalEligible = manualCount + segmentEligible

  const manualSlice = manualToSend.slice(0, dailyMax)
  const remainingSlots = Math.max(0, dailyMax - manualSlice.length)
  const segmentSlice = onePerDomain.slice(0, remainingSlots)
  const toSend = [...manualSlice, ...segmentSlice]

  if (totalEligible > dailyMax) {
    skipped.dailyCap = totalEligible - dailyMax
  }

  return {
    toSend,
    skipped,
    remainingAfterBatch: Math.max(0, totalEligible - toSend.length),
    totalEligible,
  }
}
