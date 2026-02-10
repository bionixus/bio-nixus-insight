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
      status = 'all',
      segment = 'all',
      verified = 'all',
    } = req.query

    // Build query
    let query = '*[_type == "subscriber"'

    const conditions: string[] = []

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

    if (conditions.length > 0) {
      query += ' && ' + conditions.join(' && ')
    }

    query += '] | order(subscribedAt desc)'

    const subscribers = await sanityServer.fetch(query)

    // Convert to CSV
    const headers = [
      'First Name',
      'Last Name',
      'Work Email',
      'Personal Email',
      'Mobile',
      'Title',
      'Company',
      'Language',
      'Segments',
      'Subscribed',
      'Email Verified',
      'Subscribed At',
      'Source',
      'Notes',
    ]

    const rows = subscribers.map((sub: any) => [
      sub.firstName || '',
      sub.lastName || '',
      sub.email || '',
      sub.personalEmail || '',
      sub.mobile || '',
      sub.title || '',
      sub.company || '',
      sub.language || 'en',
      (sub.segments || []).join(', '),
      sub.subscribed ? 'Yes' : 'No',
      sub.emailVerified ? 'Yes' : 'No',
      sub.subscribedAt ? new Date(sub.subscribedAt).toISOString().split('T')[0] : '',
      sub.source || '',
      sub.notes || '',
    ])

    // Generate CSV
    const csvContent = [
      headers.join(','),
      ...rows.map((row: string[]) =>
        row
          .map((cell: string) =>
            typeof cell === 'string' && (cell.includes(',') || cell.includes('"'))
              ? `"${cell.replace(/"/g, '""')}"`
              : cell
          )
          .join(',')
      ),
    ].join('\n')

    // Set headers for file download
    res.setHeader('Content-Type', 'text/csv')
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="subscribers-${new Date().toISOString().split('T')[0]}.csv"`
    )
    res.send(csvContent)
  } catch (error: any) {
    console.error('Export error:', error)
    return res.status(500).json({ error: 'Export failed' })
  }
}
