import { createClient } from '@sanity/client'
import { parse } from 'csv-parse/sync'

const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN?.trim(),
})

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Allow larger CSV files
    },
  },
}

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'BioNixus2026!'

// Canonical segment values
const VALID_SEGMENTS = [
  'all',
  'pharma_clients',
  'hospital_admins',
  'trial_participants',
  'market_research',
  'kols',
  'healthcare_providers',
  'pharma_cold_leads',
  'test_list',
]

// Map common variations/aliases to canonical values
const SEGMENT_ALIASES: Record<string, string> = {
  market_research_leads: 'market_research',
  market_research: 'market_research',
  pharma_clients: 'pharma_clients',
  pharmaceutical_clients: 'pharma_clients',
  hospital_admins: 'hospital_admins',
  hospital_administrators: 'hospital_admins',
  trial_participants: 'trial_participants',
  clinical_trial_participants: 'trial_participants',
  kols: 'kols',
  key_opinion_leaders: 'kols',
  healthcare_providers: 'healthcare_providers',
  pharma_cold_leads: 'pharma_cold_leads',
  test_list: 'test_list',
  all: 'all',
  all_subscribers: 'all',
}

function normalizeSegment(raw: string): string | null {
  const key = raw.trim().toLowerCase().replace(/[\s-]+/g, '_')
  if (SEGMENT_ALIASES[key]) return SEGMENT_ALIASES[key]
  if (VALID_SEGMENTS.includes(key)) return key
  return null // unrecognized
}

interface CsvRecord {
  firstName?: string
  lastName?: string
  email?: string
  personalEmail?: string
  mobile?: string
  title?: string
  company?: string
  language?: string
  segments?: string
  notes?: string
  subscribed?: string
  [key: string]: string | undefined
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Auth check
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ') || authHeader.substring(7) !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const { csvData, skipDuplicates = true } = req.body

    if (!csvData) {
      return res.status(400).json({ error: 'No CSV data provided' })
    }

    // Parse CSV with duplicate column handling
    // The `columns` callback deduplicates headers by appending _2, _3, etc.
    const seenCols: Record<string, number> = {}
    const records: CsvRecord[] = parse(csvData, {
      columns: (headers: string[]) => {
        return headers.map((h: string) => {
          const name = h.trim()
          if (!seenCols[name]) {
            seenCols[name] = 1
            return name
          }
          seenCols[name]++
          return `${name}_${seenCols[name]}` // e.g., "title_2"
        })
      },
      skip_empty_lines: true,
      trim: true,
      relax_column_count: true, // tolerate rows with fewer/more columns
      relax_quotes: true, // tolerate improperly quoted fields
    })

    const results = {
      total: records.length,
      imported: 0,
      skipped: 0,
      duplicates: 0,
      errors: [] as any[],
      segmentWarnings: [] as string[],
    }

    // Process each record
    for (let i = 0; i < records.length; i++) {
      const record = records[i]

      try {
        // Validate required fields
        if (!record.firstName || !record.email) {
          results.errors.push({
            row: i + 2, // +2 because: +1 for 0-index, +1 for header row
            email: record.email || 'N/A',
            error: 'Missing required fields (firstName, email)',
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
            `*[_type == "subscriber" && email == $email][0]`,
            { email: record.email.toLowerCase().trim() }
          )

          if (existing) {
            results.duplicates++
            results.skipped++
            continue
          }
        }

        // Parse and normalize segments
        let segments: string[] = ['all']
        if (record.segments) {
          const rawSegments = record.segments.split(',').map((s: string) => s.trim()).filter(Boolean)
          const normalized: string[] = []

          for (const raw of rawSegments) {
            const mapped = normalizeSegment(raw)
            if (mapped) {
              if (!normalized.includes(mapped)) {
                normalized.push(mapped)
              }
            } else {
              // Track unrecognized segment but don't fail
              const warning = `Row ${i + 2}: Unknown segment "${raw}" ignored`
              if (!results.segmentWarnings.includes(warning)) {
                results.segmentWarnings.push(warning)
              }
            }
          }

          if (normalized.length > 0) {
            segments = normalized
          }
        }

        // Create subscriber
        await sanityServer.create({
          _type: 'subscriber',
          firstName: record.firstName.trim(),
          lastName: record.lastName?.trim() || null,
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
