import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { SEOHead } from '@/components/seo/SEOHead'
import { CTASection } from '@/components/shared/CTASection'
import { useInitialData } from '@/contexts/InitialDataContext'
import type { PressReleaseListItem } from '@/types/pressRelease'
import { PRESS_RSS_URL } from '@/lib/pressReleaseConstants'
import { getPressListThumbUrl } from '@/lib/pressReleaseHero'
import { buildCanonicalOrganization } from '@/lib/seo/organization'
import { CalendarDays, Rss } from 'lucide-react'

const CANONICAL = 'https://www.bionixus.com/news'

function formatListDate(iso?: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function buildNewsHubSchemas(postCount: number) {
  return [
    buildCanonicalOrganization(),
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
  const releases: PressReleaseListItem[] =
    routeData.pageType === 'press-index' && Array.isArray(routeData.pressReleases)
      ? (routeData.pressReleases as PressReleaseListItem[])
      : []

  const schemas = buildNewsHubSchemas(releases.length)

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="News & Press Releases | BioNixus Healthcare Market Research"
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

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
