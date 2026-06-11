import type { PressRelease, PressReleaseListItem } from '@/types/pressRelease'

type PressVisibilityFields = {
  embargo?: string
  publishedAt?: string
  publishedAtIso?: string
  seo?: { noIndex?: boolean }
}

/** True when the release may appear on hub, RSS, sitemap, and public detail URL. */
export function isPressReleasePublic(
  release: PressVisibilityFields | null | undefined,
  now: Date = new Date(),
): boolean {
  if (!release) return false
  if (release.seo?.noIndex === true) return false

  const publishedRaw = release.publishedAtIso ?? release.publishedAt
  if (!publishedRaw) return false
  const published = new Date(publishedRaw)
  if (Number.isNaN(published.getTime()) || published > now) return false

  if (release.embargo) {
    const embargo = new Date(release.embargo)
    if (!Number.isNaN(embargo.getTime()) && embargo > now) return false
  }

  return true
}

export function filterPublicPressReleases<T extends PressVisibilityFields>(
  releases: T[],
  now: Date = new Date(),
): T[] {
  return releases.filter((r) => isPressReleasePublic(r, now))
}

export function assertPublicPressRelease(
  release: PressRelease | null | undefined,
  now: Date = new Date(),
): PressRelease | null {
  if (!release || !isPressReleasePublic(release, now)) return null
  return release
}
