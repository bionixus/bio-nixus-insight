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

    // Build query
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

    // Get subscribers
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

    // Get total count
    const total = await sanityServer.fetch(`count(*[${whereClause}])`)

    // Get stats
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
