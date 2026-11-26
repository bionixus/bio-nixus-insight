import { describe, expect, it } from 'vitest'
import {
  fitBrandedSeoTitle,
  normalizeSeoTitle,
  seoTitleCodePoints,
  seoTitleWithBrandOnce,
  SeoTitleOverflowError,
  truncateSeoTitleAtWordBoundary,
} from '@/lib/seo-meta'

const FITS = [
  'Healthcare Market Research Companies Italy 2026 | BioNixus',
  'Healthcare Market Research Companies China 2026 | BioNixus',
  'Pharmaceutical Market Research Argentina | BioNixus',
  'Healthcare Market Research in the Netherlands | BioNixus',
  "Market Research Companies Côte d'Ivoire 2026 | BioNixus",
  'MedTech Market Research Company in the UK | BioNixus',
]

describe('fitBrandedSeoTitle', () => {
  it('returns a branded title that already fits, unchanged', () => {
    for (const title of FITS) {
      expect(seoTitleCodePoints(title)).toBeLessThanOrEqual(60)
      expect(fitBrandedSeoTitle(title, 60, 'BioNixus', 'strict')).toBe(title)
    }
  })

  it('throws in strict mode instead of cutting Italy, China, Argentina, the Netherlands, Côte d’Ivoire, or the United Kingdom', () => {
    const overBudget = [
      'Top Healthcare Market Research Companies in Italy 2026 | BioNixus',
      'Top Healthcare Market Research Companies in China 2026 | BioNixus',
      'Pharmaceutical Market Research Company in Argentina | BioNixus',
      'Healthcare Market Research Company in the Netherlands | BioNixus',
      "Top Market Research Companies in Côte d'Ivoire 2026 | BioNixus",
      'MedTech Market Research Company in United Kingdom (2026) | MHRA Context | BioNixus',
    ]
    for (const title of overBudget) {
      expect(() => fitBrandedSeoTitle(title, 60, 'BioNixus', 'strict')).toThrow(SeoTitleOverflowError)
      try {
        fitBrandedSeoTitle(title, 60, 'BioNixus', 'strict')
      } catch (error) {
        const message = error instanceof Error ? error.message : ''
        expect(message).not.toContain('Companies in | BioNixus')
        expect(message).not.toMatch(/Company in the \| BioNixus"$/)
        expect(message).not.toContain("in Côte | BioNixus")
        expect(message).not.toContain('in United | BioNixus')
      }
    }
  })

  it('falls back for a slug-derived or CMS title without dangling tokens, split countries, or ellipsis', () => {
    const samples = [
      'Skyrizi Tops Julys Pharma Rankings And What It Means For Omnichannel Engagement | BioNixus',
      'Top Healthcare Market Research Companies in Italy 2026 | BioNixus',
      "Top Market Research Companies in Côte d'Ivoire 2026 | BioNixus",
      'MedTech Market Research Company in United Kingdom (2026) | MHRA Context | BioNixus',
      'Healthcare Market Research Company in the Netherlands | BioNixus',
    ]
    for (const title of samples) {
      const result = fitBrandedSeoTitle(title)
      expect(seoTitleCodePoints(result)).toBeLessThanOrEqual(60)
      expect(result).not.toMatch(/\.\.\.|…/)
      expect(result).not.toMatch(/(?:^|\s)(?:in|for|of|the|and|to|at|on|no|de|the|United|Saudi|New|South|Côte|Cote)\s+\|\s+BioNixus$/i)
    }
    expect(seoTitleWithBrandOnce('UK Market Entry Research: GCC and US Playbook 2026')).toBe(
      'UK Market Entry Research: GCC and US Playbook 2026',
    )
  })

  it('drops an unmatched year bracket instead of shipping (2026 | BioNixus', () => {
    const legacy = [
      'Pharmaceutical Companies by Country (2026 Directories) | BioNixus',
      'Pharmaceutical Distributors by Country (2026 Directories) | BioNixus',
    ]
    const expected = [
      'Pharmaceutical Companies by Country | BioNixus',
      'Pharmaceutical Distributors by Country | BioNixus',
    ]
    legacy.forEach((title, index) => {
      const result = fitBrandedSeoTitle(title)
      expect(result).toBe(expected[index])
      expect(result).not.toMatch(/\([^)]*\|/)
      expect(seoTitleCodePoints(result)).toBeLessThanOrEqual(60)
      expect(normalizeSeoTitle(title)).toBe(expected[index])
    })

    const cut = truncateSeoTitleAtWordBoundary(
      'Top Companies in the United Arab Emirates by Industry (2026 Directories)',
      60,
    )
    expect(cut.endsWith('…')).toBe(true)
    expect(cut).not.toContain('(2026')
    const opens = cut.split('(').length - 1
    const closes = cut.split(')').length - 1
    expect(opens).toBe(closes)
  })
})
