import type { PressRelease } from '@/types/pressRelease'
import { optimizeSanityImage } from '@/lib/image-utils'

type PressReleaseHeroProps = {
  release: PressRelease
}

export function PressReleaseHero({ release }: PressReleaseHeroProps) {
  const heroUrl = release.heroImage
    ? optimizeSanityImage(release.heroImage, 1400, 700)
    : undefined

  return (
    <header
      className="relative overflow-hidden border-b border-border/60"
      aria-labelledby="press-headline"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, hsl(var(--navy-deep) / 0.04) 0%, hsl(var(--cream)) 42%, hsl(var(--background)) 100%)',
        }}
        aria-hidden
      />
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-gold-light to-transparent opacity-90"
        aria-hidden
      />

      <div className="container-wide section-padding pb-10 md:pb-14 relative">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary/80 mb-4">
          Press release
        </p>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
          {release.dateline}
        </p>
        <h1
          id="press-headline"
          className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-primary max-w-4xl"
        >
          {release.headline}
        </h1>
        {release.subheadline?.trim() ? (
          <p className="mt-5 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            {release.subheadline.trim()}
          </p>
        ) : null}

        {heroUrl ? (
          <figure className="mt-10 max-w-5xl">
            <img
              src={heroUrl}
              alt={release.heroImageAlt || release.headline}
              width={1400}
              height={700}
              className="w-full rounded-lg border border-border/50 shadow-sm object-cover"
              fetchPriority="high"
              decoding="async"
            />
            {release.heroCaption?.trim() ? (
              <figcaption className="mt-2 text-sm text-muted-foreground">{release.heroCaption}</figcaption>
            ) : null}
          </figure>
        ) : null}
      </div>
    </header>
  )
}
