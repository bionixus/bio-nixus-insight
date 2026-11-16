import { describe, expect, it } from 'vitest'
import { fitBrandedSeoTitle, seoTitleCodePoints, SeoTitleOverflowError } from '@/lib/seo-meta'

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
      expect(fitBrandedSeoTitle(title)).toBe(title)
    }
  })

  it('throws instead of cutting Italy, China, Argentina, the Netherlands, Côte d’Ivoire, or the United Kingdom', () => {
    const overBudget = [
      'Top Healthcare Market Research Companies in Italy 2026 | BioNixus',
      'Top Healthcare Market Research Companies in China 2026 | BioNixus',
      'Pharmaceutical Market Research Company in Argentina | BioNixus',
      'Healthcare Market Research Company in the Netherlands | BioNixus',
      "Top Market Research Companies in Côte d'Ivoire 2026 | BioNixus",
      'MedTech Market Research Company in United Kingdom (2026) | MHRA Context | BioNixus',
    ]
    for (const title of overBudget) {
      expect(() => fitBrandedSeoTitle(title)).toThrow(SeoTitleOverflowError)
      try {
        fitBrandedSeoTitle(title)
      } catch (error) {
        const message = error instanceof Error ? error.message : ''
        expect(message).not.toContain('Companies in | BioNixus')
        expect(message).not.toMatch(/Company in the \| BioNixus"$/)
        expect(message).not.toContain("in Côte | BioNixus")
        expect(message).not.toContain('in United | BioNixus')
      }
    }
  })
})
