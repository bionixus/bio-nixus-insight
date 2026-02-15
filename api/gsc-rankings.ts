import { GoogleAuth } from 'google-auth-library'

const SITE_URL = 'https://www.bionixus.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || ''

// ─── Auth helper ───
function checkAuth(req: any, res: any): boolean {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ') || authHeader.substring(7) !== ADMIN_PASSWORD) {
    res.status(401).json({ error: 'Unauthorized' })
    return false
  }
  return true
}

// ─── Google Auth ───
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

// ─── Types ───
interface GscRow {
  keys: string[]
  clicks: number
  impressions: number
  ctr: number
  position: number
}

interface GscResponse {
  rows?: GscRow[]
  responseAggregationType?: string
}

interface RankingEntry {
  query: string
  page?: string
  clicks: number
  impressions: number
  ctr: string
  position: string
}

// ─── Handler ───
export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!checkAuth(req, res)) return

  try {
    const {
      days = '28',
      limit = '50',
      page,
      country,
      device,
      query: searchQuery,
      sort = 'clicks',
    } = req.query

    // Date range
    const endDate = new Date()
    endDate.setDate(endDate.getDate() - 3) // GSC data has ~3 day lag
    const startDate = new Date(endDate)
    startDate.setDate(startDate.getDate() - parseInt(days))

    const formatDate = (d: Date) => d.toISOString().split('T')[0]

    // Build dimensions — always include query, optionally page
    const dimensions: string[] = ['query']
    if (page || req.query.groupByPage === 'true') {
      dimensions.push('page')
    }

    // Build dimension filters
    const dimensionFilterGroups: any[] = []
    const filters: any[] = []

    if (page) {
      filters.push({
        dimension: 'page',
        operator: 'contains',
        expression: page,
      })
    }
    if (country) {
      filters.push({
        dimension: 'country',
        operator: 'equals',
        expression: country.toUpperCase(),
      })
    }
    if (device) {
      filters.push({
        dimension: 'device',
        operator: 'equals',
        expression: device.toUpperCase(),
      })
    }
    if (searchQuery) {
      filters.push({
        dimension: 'query',
        operator: 'contains',
        expression: searchQuery,
      })
    }

    if (filters.length > 0) {
      dimensionFilterGroups.push({
        groupType: 'and',
        filters,
      })
    }

    // Call GSC API
    const auth = getGoogleAuth()
    const client = await auth.getClient()
    const accessToken = await client.getAccessToken()

    const encodedSite = encodeURIComponent(SITE_URL)
    const apiUrl = `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`

    const body: Record<string, any> = {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      dimensions,
      rowLimit: Math.min(parseInt(limit), 1000),
      startRow: 0,
    }

    if (dimensionFilterGroups.length > 0) {
      body.dimensionFilterGroups = dimensionFilterGroups
    }

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('GSC API error:', response.status, errText)
      return res.status(response.status).json({
        error: 'Google Search Console API error',
        details: errText,
      })
    }

    const data: GscResponse = await response.json()

    // Map to clean format
    const rankings: RankingEntry[] = (data.rows || []).map((row) => ({
      query: row.keys[0],
      ...(dimensions.includes('page') && { page: row.keys[1] }),
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: (row.ctr * 100).toFixed(1) + '%',
      position: row.position.toFixed(1),
    }))

    // Sort
    const sortKey = sort as keyof RankingEntry
    if (['clicks', 'impressions', 'position'].includes(sort)) {
      rankings.sort((a, b) => {
        const aVal = parseFloat(String(a[sortKey]))
        const bVal = parseFloat(String(b[sortKey]))
        return sort === 'position' ? aVal - bVal : bVal - aVal
      })
    }

    return res.status(200).json({
      site: SITE_URL,
      dateRange: {
        start: formatDate(startDate),
        end: formatDate(endDate),
      },
      totalKeywords: rankings.length,
      rankings,
    })
  } catch (error: any) {
    console.error('GSC rankings error:', error)
    return res.status(500).json({ error: error.message })
  }
}
