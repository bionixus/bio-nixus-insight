#!/usr/bin/env node
/**
 * Assign batch_* segments (one company per segment) to subscribers.
 * Usage: node scripts/generate-company-batch-segments.mjs [audienceSegment]
 * Example: node scripts/generate-company-batch-segments.mjs market_research
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

function loadDotEnv() {
  const envPath = path.join(root, '.env')
  if (!fs.existsSync(envPath)) return
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const eq = t.indexOf('=')
    if (eq === -1) continue
    const k = t.slice(0, eq).trim()
    let v = t.slice(eq + 1).trim()
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1)
    }
    if (!process.env[k]) process.env[k] = v
  }
}

loadDotEnv()

const audienceSegment = process.argv[2] || 'market_research'
const adminPassword = process.env.ADMIN_PASSWORD
const baseUrl = process.env.VITE_BASE_URL || 'https://www.bionixus.com'

if (!adminPassword) {
  console.error('ADMIN_PASSWORD required in .env')
  process.exit(1)
}

const res = await fetch(`${baseUrl}/api/admin?action=generate-company-batch-segments`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${adminPassword}`,
  },
  body: JSON.stringify({ audienceSegment }),
})

const data = await res.json()
if (!res.ok) {
  console.error(data.error || 'Failed')
  process.exit(1)
}

console.log(`Updated ${data.updated} subscribers → ${data.totalBatches} company batch segments`)
if (data.batches?.length) {
  console.log('Top batches:')
  for (const b of data.batches.slice(0, 10)) {
    console.log(`  ${b.segment}: ${b.subscriberCount} contacts`)
  }
}
