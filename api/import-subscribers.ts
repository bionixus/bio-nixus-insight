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
      sizeLimit: '10mb',
    },
  },
  maxDuration: 60, // Allow up to 60s for large imports (Pro plan) or 10s (Hobby)
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
  return null
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

    // ─── Pre-process CSV ───────────────────────────────────────
    // Strip BOM, normalize line endings
    let cleanCsv = csvData.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')

    // Fix duplicate column names in the header row
    const firstNewline = cleanCsv.indexOf('\n')
    if (firstNewline === -1) {
      return res.status(400).json({ error: 'CSV has no data rows' })
    }

    const headerLine = cleanCsv.substring(0, firstNewline)
    const dataLines = cleanCsv.substring(firstNewline + 1)

    const headerCols = headerLine.split(',').map((h: string) => h.trim())
    const seenCols: Record<string, number> = {}
    const fixedHeaders = headerCols.map((name: string) => {
      if (!seenCols[name]) {
        seenCols[name] = 1
        return name
      }
      seenCols[name]++
      return `${name}_${seenCols[name]}`
    })

    cleanCsv = fixedHeaders.join(',') + '\n' + dataLines

    // ─── Parse CSV ─────────────────────────────────────────────
    const records: CsvRecord[] = parse(cleanCsv, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      relax_column_count: true,
      relax_quotes: true,
      bom: true,
    })

    const results = {
      total: records.length,
      imported: 0,
      skipped: 0,
      duplicates: 0,
      errors: [] as any[],
      segmentWarnings: [] as string[],
      debug: {
        headersDetected: fixedHeaders,
        firstRecordKeys: records.length > 0 ? Object.keys(records[0]) : [],
      },
    }

    // ─── Batch duplicate check ─────────────────────────────────
    // Fetch ALL existing subscriber emails in one query to avoid N+1
    let existingEmails = new Set<string>()
    if (skipDuplicates) {
      const allEmails = records
        .map((r) => r.email?.toLowerCase().trim())
        .filter(Boolean) as string[]

      // Query in batches of 200 to avoid query size limits
      for (let i = 0; i < allEmails.length; i += 200) {
        const batch = allEmails.slice(i, i + 200)
        const existing: { email: string }[] = await sanityServer.fetch(
          `*[_type == "subscriber" && email in $emails]{ email }`,
          { emails: batch }
        )
        existing.forEach((e) => existingEmails.add(e.email.toLowerCase()))
      }
    }

    // ─── Prepare documents for batch creation ──────────────────
    interface SubscriberDoc {
      _type: string
      firstName: string
      lastName: string | null
      email: string
      personalEmail: string | null
      mobile: string | null
      title: string | null
      company: string | null
      language: string
      segments: string[]
      subscribed: boolean
      subscribedAt: string
      emailVerified: boolean
      verifiedAt: string
      source: string
      notes: string | null
    }

    const docsToCreate: SubscriberDoc[] = []

    for (let i = 0; i < records.length; i++) {
      const record = records[i]

      // Validate required fields
      if (!record.firstName || !record.email) {
        results.errors.push({
          row: i + 2,
          email: record.email || 'N/A',
          error: 'Missing required fields (firstName, email)',
        })
        results.skipped++
        continue
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const email = record.email.toLowerCase().trim()
      if (!emailRegex.test(email)) {
        results.errors.push({
          row: i + 2,
          email: record.email,
          error: 'Invalid email format',
        })
        results.skipped++
        continue
      }

      // Check duplicates against pre-fetched set
      if (skipDuplicates && existingEmails.has(email)) {
        results.duplicates++
        results.skipped++
        continue
      }

      // Also check for duplicates within the CSV itself
      if (existingEmails.has(email)) {
        results.duplicates++
        results.skipped++
        continue
      }
      existingEmails.add(email) // track within-CSV duplicates too

      // Parse and normalize segments
      let segments: string[] = ['all']
      if (record.segments) {
        const rawSegments = record.segments
          .split(',')
          .map((s: string) => s.trim())
          .filter(Boolean)
        const normalized: string[] = []

        for (const raw of rawSegments) {
          const mapped = normalizeSegment(raw)
          if (mapped) {
            if (!normalized.includes(mapped)) {
              normalized.push(mapped)
            }
          } else {
            const warning = `Unknown segment "${raw}" (auto-mapped to "all")`
            if (!results.segmentWarnings.includes(warning)) {
              results.segmentWarnings.push(warning)
            }
          }
        }

        if (normalized.length > 0) {
          segments = normalized
        }
      }

      docsToCreate.push({
        _type: 'subscriber',
        firstName: record.firstName.trim(),
        lastName: record.lastName?.trim() || null,
        email,
        personalEmail: record.personalEmail?.trim() || null,
        mobile: record.mobile?.trim() || null,
        title: record.title?.trim() || null,
        company: record.company?.trim() || null,
        language: record.language?.toLowerCase() || 'en',
        segments,
        subscribed: record.subscribed === 'false' ? false : true,
        subscribedAt: new Date().toISOString(),
        emailVerified: true,
        verifiedAt: new Date().toISOString(),
        source: 'csv_import',
        notes: record.notes?.trim() || null,
      })
    }

    // ─── Batch create using Sanity transactions ────────────────
    // Process in batches of 50 to stay within transaction limits
    const BATCH_SIZE = 50
    for (let i = 0; i < docsToCreate.length; i += BATCH_SIZE) {
      const batch = docsToCreate.slice(i, i + BATCH_SIZE)

      try {
        let transaction = sanityServer.transaction()
        for (const doc of batch) {
          transaction = transaction.create(doc)
        }
        await transaction.commit()
        results.imported += batch.length
      } catch (batchError: any) {
        // If batch fails, try one-by-one as fallback
        for (const doc of batch) {
          try {
            await sanityServer.create(doc)
            results.imported++
          } catch (error: any) {
            results.errors.push({
              row: 'N/A',
              email: doc.email,
              error: error.message,
            })
            results.skipped++
          }
        }
      }
    }

    return res.status(200).json(results)
  } catch (error: any) {
    console.error('CSV import error:', error)
    return res.status(500).json({ error: error.message })
  }
}
