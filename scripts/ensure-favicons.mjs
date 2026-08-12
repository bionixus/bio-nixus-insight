#!/usr/bin/env node
/**
 * Inject /icons/bnx-* red-heart favicon tags into all public HTML files.
 * Safe to re-run (replaces any prior favicon / apple-touch links).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ensureFaviconTags } from '../lib/faviconHead.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicRoot = path.resolve(__dirname, '../public')

function walkHtmlFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walkHtmlFiles(full, out)
    else if (entry.isFile() && entry.name.endsWith('.html')) out.push(full)
  }
  return out
}

const files = walkHtmlFiles(publicRoot)
let updated = 0
let skipped = 0

for (const file of files) {
  const before = fs.readFileSync(file, 'utf8')
  if (!/<head[\s>]/i.test(before)) {
    skipped++
    continue
  }
  const after = ensureFaviconTags(before)
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8')
    updated++
    console.log(`favicon: ${path.relative(path.resolve(__dirname, '..'), file)}`)
  }
}

console.log(`ensure-favicons: ${files.length} html, ${updated} updated, ${skipped} skipped`)
