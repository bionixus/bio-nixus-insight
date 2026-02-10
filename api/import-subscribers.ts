import { createClient } from '@sanity/client'
import { parse } from 'csv-parse/sync'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Allow larger CSV files
    },
  },
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { csvData, skipDuplicates = true } = req.body

    if (!csvData) {
      return res.status(400).json({ error: 'No CSV data provided' })
    }

    // Parse CSV
    const records = parse(csvData, {
      columns: true, // Use first row as headers
      skip_empty_lines: true,
      trim: true,
    })

    const results = {
      total: records.length,
      imported: 0,
      skipped: 0,
      errors: [] as any[],
    }

    // Process each record
    for (let i = 0; i < records.length; i++) {
      const record = records[i]

      try {
        // Validate required fields
        if (!record.firstName || !record.lastName || !record.email) {
          results.errors.push({
            row: i + 2, // +2 because: +1 for 0-index, +1 for header row
            email: record.email || 'N/A',
            error: 'Missing required fields (firstName, lastName, email)',
          })
          results.skipped++
          continue
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(record.email)) {
          results.errors.push({
            row: i + 2,
            email: record.email,
            error: 'Invalid email format',
          })
          results.skipped++
          continue
        }

        // Check for duplicates
        if (skipDuplicates) {
          const existing = await sanityServer.fetch(
            `
            *[_type == "subscriber" && email == $email][0]
          `,
            { email: record.email.toLowerCase().trim() }
          )

          if (existing) {
            results.skipped++
            continue
          }
        }

        // Parse segments (comma-separated string to array)
        let segments = ['all']
        if (record.segments) {
          segments = record.segments.split(',').map((s: string) => s.trim())
        }

        // Create subscriber
        await sanityServer.create({
          _type: 'subscriber',
          firstName: record.firstName.trim(),
          lastName: record.lastName.trim(),
          email: record.email.toLowerCase().trim(),
          personalEmail: record.personalEmail?.trim() || null,
          mobile: record.mobile?.trim() || null,
          title: record.title?.trim() || null,
          company: record.company?.trim() || null,
          language: record.language?.toLowerCase() || 'en',
          segments: segments,
          subscribed: record.subscribed === 'false' ? false : true,
          subscribedAt: new Date().toISOString(),
          source: 'csv_import',
          notes: record.notes?.trim() || null,
        })

        results.imported++
      } catch (error: any) {
        results.errors.push({
          row: i + 2,
          email: record.email || 'N/A',
          error: error.message,
        })
        results.skipped++
      }
    }

    return res.status(200).json(results)
  } catch (error: any) {
    console.error('CSV import error:', error)
    return res.status(500).json({ error: error.message })
  }
}
