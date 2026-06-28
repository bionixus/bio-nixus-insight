import { CalendarDays } from 'lucide-react'
import type { PressRelease } from '@/types/pressRelease'
import { getPressHeroDisplayUrl } from '@/lib/pressReleaseHero'
import { PressReleaseShareBar } from '@/components/press-release/PressReleaseShareBar'

type PressReleaseHeroProps = {
  release: PressRelease
  pageUrl: string
}

function formatPublishedDate(iso?: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function PressReleaseHero({ release, pageUrl }: PressReleaseHeroProps) {
  const heroUrl = getPressHeroDisplayUrl(release)
  const heroAlt =
    heroUrl && release.slug === 'bionixus-brazil-office-latam-expansion-2026'
      ? 'BioNixus corporate press image — global healthcare and pharmaceutical market research with Latin America expansion'
      : release.heroImageAlt || release.headline

  const publishedLabel = formatPublishedDate(release.publishedAtIso || release.publishedAt)

  return (
    <header className="relative overflow-hidden bg-[#06101F] text-white" aria-labelledby="press-headline">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 72% 38%, rgba(12,27,51,1) 0%, transparent 70%),
            radial-gradient(ellipse 50% 45% at 12% 88%, rgba(14,165,160,0.10) 0%, transparent 50%),
            radial-gradient(ellipse 35% 30% at 88% 12%, rgba(201,168,76,0.08) 0%, transparent 40%),
            linear-gradient(180deg, #06101F 0%, #081628 100%)
          `,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A84C] via-[#E4CC7A] to-transparent opacity-90"
        aria-hidden
      />

      <div className="container-wide section-padding relative pb-12 md:pb-16 pt-2">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:gap-14 lg:items-center">
          <div className="min-w-0">
            <p className="mb-4 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
              <span className="h-px w-7 bg-[#C9A84C]/40" aria-hidden />
              Press release
            </p>
            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-white/45">
              {release.dateline}
            </p>
            <h1
              id="press-headline"
              className="font-display text-3xl md:text-4xl lg:text-[2.65rem] font-light leading-[1.12] tracking-tight text-[#FFFEFB] max-w-3xl"
            >
              {release.headline}
            </h1>
            {release.subheadline?.trim() ? (
              <p className="mt-5 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-white/55">
                {release.subheadline.trim()}
              </p>
            ) : null}
            {publishedLabel ? (
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/40">
                <CalendarDays className="h-4 w-4 shrink-0 text-[#C9A84C]/80" aria-hidden />
                Published {publishedLabel}
              </p>
            ) : null}
            <div className="mt-8 pt-6 border-t border-white/10 max-w-xl">
              <PressReleaseShareBar
                url={pageUrl}
                title={release.headline}
                slug={release.slug}
                variant="dark"
              />
            </div>
          </div>

          {heroUrl ? (
            <figure className="relative min-w-0 m-0">
              <div
                className="pointer-events-none absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-[#C9A84C]/20 via-transparent to-[#0EA5A0]/10 blur-2xl opacity-60"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03] shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
                <div
                  className="absolute top-0 left-14 right-14 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-50"
                  aria-hidden
                />
                <img
                  src={heroUrl}
                  alt={heroAlt}
                  width={1400}
                  height={700}
                  className="aspect-[2/1] w-full object-cover"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              {release.heroCaption?.trim() ? (
                <figcaption className="mt-3 text-sm text-white/40 text-center lg:text-left">
                  {release.heroCaption.trim()}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>
      </div>
    </header>
  )
}
