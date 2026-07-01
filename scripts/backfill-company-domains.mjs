#!/usr/bin/env node
/**
 * Backfill companyDomain on all subscribers missing the field.
 * Usage: node scripts/backfill-company-domains.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'

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

const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.co.uk',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'msn.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'aol.com',
  'protonmail.com',
  'proton.me',
  'mail.com',
  'zoho.com',
  'yandex.com',
  'gmx.com',
  'gmx.de',
  'web.de',
  'mail.ru',
])

function getCompanyDomain(email) {
  const normalized = email.trim().toLowerCase()
  const at = normalized.lastIndexOf('@')
  if (at < 1) return normalized
  const domain = normalized.slice(at + 1)
  if (FREE_EMAIL_DOMAINS.has(domain)) return normalized
  return domain
}

const token = process.env.SANITY_API_TOKEN?.trim()
if (!token) {
  console.error('SANITY_API_TOKEN is required (set in .env or environment)')
  process.exit(1)
}

const sanity = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token,
})

const subscribers = await sanity.fetch(
  `*[_type == "subscriber" && (!defined(companyDomain) || companyDomain == "")] { _id, email }`
)

console.log(`Found ${subscribers.length} subscribers to backfill`)

if (subscribers.length === 0) {
  console.log('Nothing to update.')
  process.exit(0)
}

let updated = 0
for (let i = 0; i < subscribers.length; i += 50) {
  const batch = subscribers.slice(i, i + 50)
  let tx = sanity.transaction()
  for (const sub of batch) {
    tx = tx.patch(sub._id, { set: { companyDomain: getCompanyDomain(sub.email) } })
  }
  await tx.commit()
  updated += batch.length
  console.log(`Updated ${updated}/${subscribers.length}`)
}

console.log('Done.')
