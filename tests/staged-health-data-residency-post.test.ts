import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { fitBrandedSeoTitle } from '@/lib/seo-meta'
import {
  SEO_TITLE,
  buildDocument,
  documentForFile,
  validateStagedDocument,
} from '../scripts/sanity-staged-posts/health-data-residency-gcc-mena-research-2026/build-document.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pkg = path.join(root, 'scripts/sanity-staged-posts/health-data-residency-gcc-mena-research-2026')

describe('staged GCC health-data residency post', () => {
  it('matches the committed JSON and stays unpublished', () => {
    const built = validateStagedDocument(buildDocument())
    const payload = documentForFile(built)
    const committed = JSON.parse(fs.readFileSync(path.join(pkg, 'post.json'), 'utf8'))
    const ndjson = JSON.parse(fs.readFileSync(path.join(pkg, 'post.ndjson'), 'utf8').trim())
    expect(committed).toEqual(payload)
    expect(ndjson).toEqual(payload)
    expect(payload._id.startsWith('drafts.')).toBe(true)
    expect(payload.publishedAt).toBeNull()
    expect(payload.updatedAt).toBeNull()
    expect(payload.factCheckedAt).toBeNull()
    expect(payload.bodyHtml).toBe('')
    expect(fitBrandedSeoTitle(SEO_TITLE, 60, 'BioNixus', 'strict')).toBe(SEO_TITLE)
    expect(payload.seo.metaTitle.length).toBeLessThanOrEqual(60)
    expect(payload.seo.metaDescription.length).toBeLessThanOrEqual(155)
  })

  it('is absent from the sitemap, the news feed, and the hardcoded blog index', () => {
    const slug = 'health-data-residency-gcc-mena-research-2026'
    const sitemap = fs.readFileSync(path.join(root, 'public/sitemap.xml'), 'utf8')
    const feed = fs.readFileSync(path.join(root, 'public/news/feed.xml'), 'utf8')
    const robots = fs.readFileSync(path.join(root, 'src/lib/blog-robots.ts'), 'utf8')
    expect(sitemap.includes(slug)).toBe(false)
    expect(feed.includes(slug)).toBe(false)
    expect(robots.includes(slug)).toBe(false)
  })

  it('dry-runs without writing to Sanity', () => {
    const stdout = execFileSync(process.execPath, [path.join(pkg, 'import.mjs')], {
      cwd: root,
      encoding: 'utf8',
    })
    const report = JSON.parse(stdout)
    expect(report.dryRun).toBe(true)
    expect(report.wroteToSanity).toBe(false)
    expect(report.publishedAt).toBeNull()
    expect(report.commands.publish).toContain('--publish')
    expect(report.commands.createDraft).toContain('--create-draft')
  })
})
