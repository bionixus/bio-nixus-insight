import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useQuery } from '@tanstack/react-query'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { SEOHead } from '@/components/seo/SEOHead'
import { CTASection } from '@/components/shared/CTASection'
import { useInitialData } from '@/contexts/InitialDataContext'
import { fetchSanityPressReleases } from '@/lib/sanity-press'
import { isSanityConfigured } from '@/lib/sanity'
import type { PressReleaseListItem } from '@/types/pressRelease'
import { PRESS_RSS_URL } from '@/lib/pressReleaseConstants'
import { getPressListThumbUrl } from '@/lib/pressReleaseHero'
import { CalendarDays, Rss } from 'lucide-react'
import { ALSAADANY_AUTHOR, ALSAADANY_JOB_TITLE } from '@/data/editorialAuthors'
import { inTheMediaNewestFirst, type InTheMediaItem } from '@/data/inTheMedia'
import { formatListDate } from '@/lib/formatListDate'

const CANONICAL = 'https://www.bionixus.com/news'

const MEDIA_TYPE_LABEL: Record<NonNullable<InTheMediaItem['type']>, string> = {
  'guest-article': 'Guest article',
  mention: 'Mention',
  interview: 'Interview',
  quote: 'Quote',
}

function mediaByline(item: InTheMediaItem): string | null {
  const authors = (item.authors ?? []).map((name) => name.trim()).filter(Boolean)
  if (authors.length === 0) return null
  if (authors.length === 1 && authors[0] === ALSAADANY_AUTHOR.name) {
    return `by ${ALSAADANY_AUTHOR.name}, ${ALSAADANY_JOB_TITLE}, BioNixus`
  }
  return `by ${authors.join(', ')}`
}

export function InTheMediaSection({ items }: { items: readonly InTheMediaItem[] }) {
  const sorted = inTheMediaNewestFirst(items)
  if (sorted.length === 0) return null
  return (
    <section
      id="in-the-media"
      aria-labelledby="in-the-media-heading"
      className="container-wide section-padding max-w-5xl border-t border-border/70"
    >
      <h2
        id="in-the-media-heading"
        className="font-display text-2xl md:text-3xl font-semibold text-primary tracking-tight"
      >
        In the media
      </h2>
      <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
        Guest articles and interviews published by other outlets. The headline links to the original article.
      </p>
      <ul className="mt-8 divide-y divide-border/70 list-none p-0 m-0">
        {sorted.map((item) => {
          const byline = mediaByline(item)
          return (
            <li key={item.id} className="py-8 first:pt-0">
              <article>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {formatListDate(item.date)}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{item.publicationName}</p>
                <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold text-primary">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4 decoration-primary/40"
                  >
                    {item.headline}
                  </a>
                </h3>
                {item.type ? (
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {MEDIA_TYPE_LABEL[item.type]}
                  </p>
                ) : null}
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">{item.summary}</p>
                {byline ? <p className="mt-3 text-sm text-foreground">{byline}</p> : null}
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function buildNewsHubSchemas(postCount: number) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'BioNixus News and Press Releases',
      description:
        'Official corporate announcements from BioNixus Global. Press releases on global market research, market access, and published industry intelligence.',
      url: CANONICAL,
      publisher: {
        '@type': 'Organization',
        name: 'BioNixus',
        url: 'https://www.bionixus.com',
      },
      ...(postCount > 0
        ? {
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: postCount,
              name: 'Press releases',
            },
          }
        : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
        { '@type': 'ListItem', position: 2, name: 'News', item: CANONICAL },
      ],
    },
  ]
}

export default function NewsHub() {
  const { data: routeData } = useInitialData()
  const ssrReleases: PressReleaseListItem[] | undefined =
    routeData.pageType === 'press-index' && Array.isArray(routeData.pressReleases)
      ? (routeData.pressReleases as PressReleaseListItem[])
      : undefined

  // SSR only seeds the very first route; on client-side navigation to /news
  // there is no press-index data, so fetch the list from Sanity directly.
  const { data: fetchedReleases } = useQuery({
    queryKey: ['sanity-press-releases'],
    queryFn: fetchSanityPressReleases,
    enabled: isSanityConfigured(),
    initialData: ssrReleases,
    staleTime: 60_000,
  })

  const releases: PressReleaseListItem[] = fetchedReleases ?? ssrReleases ?? []
  const mediaItems = inTheMediaNewestFirst()

  const schemas = buildNewsHubSchemas(releases.length)

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="News & Press Releases | BioNixus"
        description="Official corporate announcements from BioNixus Global. Press releases for journalists and partners, with links to healthcare and industry insights."
        canonical="/news"
        jsonLd={schemas}
      />
      <Helmet>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="BioNixus News"
          href={PRESS_RSS_URL}
        />
      </Helmet>
      <Navbar />
      <main>
        <div className="container-wide max-w-6xl mx-auto pt-6">
          <BreadcrumbNav
            items={[
              { name: 'Home', href: '/' },
              { name: 'News', href: '/news' },
            ]}
          />
        </div>

        <section className="relative border-b border-border/60 overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-gold-light to-transparent"
            aria-hidden
          />
          <div className="container-wide section-padding">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary/80 mb-3">
              Newsroom
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight">
              News
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
              Official corporate announcements from BioNixus Global. For expert analysis and research
              methodology, visit our{' '}
              <Link to="/blog" className="font-medium text-primary underline underline-offset-2 hover:no-underline">
                healthcare insights blog
              </Link>
              {' '}or our{' '}
              <Link
                to="/bionixus-industries/insights"
                className="font-medium text-primary underline underline-offset-2 hover:no-underline"
              >
                industry insights blog
              </Link>
              .
            </p>
            <p className="mt-4">
              <a
                href={PRESS_RSS_URL}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Rss className="h-4 w-4" aria-hidden />
                RSS feed for journalists
              </a>
              {' · '}
              <Link to="/media" className="text-sm font-medium text-primary hover:underline">
                Media kit
              </Link>
              {mediaItems.length > 0 ? (
                <>
                  {' · '}
                  <Link to="/news#in-the-media" className="text-sm font-medium text-primary hover:underline">
                    In the media
                  </Link>
                </>
              ) : null}
            </p>
          </div>
        </section>

        <section className="container-wide section-padding max-w-5xl">
          {releases.length === 0 ? (
            <p className="text-muted-foreground">
              No press releases are published yet. Check back soon or{' '}
              <Link to="/contact" className="text-primary font-medium hover:underline">
                contact our team
              </Link>
              .
            </p>
          ) : (
            <ul className="divide-y divide-border/70 list-none p-0 m-0">
              {releases.map((item) => {
                const thumb = getPressListThumbUrl(item)
                return (
                  <li key={item._id} className="py-8 first:pt-0">
                    <article>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                        {item.dateline}
                      </p>
                      <h2 className="font-display text-xl md:text-2xl font-semibold text-primary">
                        <Link
                          to={`/news/${item.slug}`}
                          className="hover:underline underline-offset-4 decoration-primary/40"
                        >
                          {item.headline}
                        </Link>
                      </h2>
                      {item.subheadline?.trim() ? (
                        <p className="mt-2 text-muted-foreground leading-relaxed max-w-3xl">
                          {item.subheadline.trim()}
                        </p>
                      ) : null}
                      <p className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        {item.publishedAtIso ? (
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                            {formatListDate(item.publishedAtIso)}
                          </span>
                        ) : null}
                        <Link
                          to={`/news/${item.slug}`}
                          className="font-medium text-primary hover:underline"
                        >
                          Read release
                        </Link>
                      </p>
                      {thumb ? (
                        <Link to={`/news/${item.slug}`} className="mt-4 block max-w-md group">
                          <div className="relative overflow-hidden rounded-xl border border-border/50 shadow-sm transition-shadow group-hover:shadow-md group-hover:border-[#C9A84C]/30">
                            <div
                              className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                              aria-hidden
                            />
                            <img
                              src={thumb}
                              alt={item.heroImageAlt || item.headline}
                              width={400}
                              height={225}
                              className="object-cover w-full aspect-[16/9]"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        </Link>
                      ) : null}
                    </article>
                  </li>
                )
              })}
            </ul>
          )}
        </section>

        <InTheMediaSection items={mediaItems} />

        <CTASection variant="service" />
      </main>
      <Footer />
    </div>
  )
}
