import { optimizeSanityImage } from '@/lib/image-utils'
import type { PressRelease, PressReleaseListItem } from '@/types/pressRelease'

type PressHeroFields = Pick<
  PressRelease,
  'slug' | 'heroImage' | 'heroImageAlt' | 'headline'
>

/** Local premium hero assets when Sanity art is not on-brand. */
const HERO_OVERRIDES: Record<string, { src: string; alt: string }> = {
  'bionixus-brazil-office-latam-expansion-2026': {
    src: '/images/press/bionixus-brazil-latam-press-2026-cover.jpg',
    alt: 'BioNixus corporate press image — global healthcare and pharmaceutical market research with Latin America expansion',
  },
}

export function resolvePressReleaseHero(
  release: PressHeroFields,
): { url: string; alt: string; isSanityCdn: boolean } | null {
  const override = HERO_OVERRIDES[release.slug]
  if (override) {
    return { url: override.src, alt: override.alt, isSanityCdn: false }
  }
  if (release.heroImage) {
    return {
      url: release.heroImage,
      alt: release.heroImageAlt?.trim() || release.headline,
      isSanityCdn: release.heroImage.includes('cdn.sanity.io'),
    }
  }
  return null
}

export function getPressHeroDisplayUrl(
  release: PressHeroFields,
  width = 1400,
  height = 700,
): string | undefined {
  const hero = resolvePressReleaseHero(release)
  if (!hero) return undefined
  if (hero.isSanityCdn) {
    return optimizeSanityImage(hero.url, width, height) || undefined
  }
  return hero.url
}

export function getPressHeroPreloadUrlForRelease(
  release: Pick<PressRelease, 'slug' | 'heroImage' | 'heroImageAlt' | 'headline'> | null | undefined,
): string | undefined {
  if (!release) return undefined
  return getPressHeroDisplayUrl(release, 1400, 700)
}

export function getPressListThumbUrl(item: PressReleaseListItem): string | undefined {
  return getPressHeroDisplayUrl(item, 400, 225)
}
