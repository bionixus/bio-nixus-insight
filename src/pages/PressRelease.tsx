import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Mail,
  Phone,
  User,
  ArrowUpRight,
  Newspaper,
  Tag,
} from 'lucide-react'
import { fetchPressReleaseBySlug, fetchPressReleases } from '@/lib/sanity-press-release'
import { sanitizeBodyHtml } from '@/lib/sanitize-body-html'
import { optimizeSanityImage } from '@/lib/image-utils'
import SchemaMarkup from '@/components/SchemaMarkup'
import ShareButtons from '@/components/ShareButtons'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://www.bionixus.com'

const RELEASE_TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  'Company News':        { bg: 'hsl(var(--navy-medium) / 0.14)', text: 'hsl(var(--primary))' },
  'Partnership':         { bg: 'hsl(210 80% 92%)',               text: 'hsl(210 80% 28%)' },
  'Product Launch':      { bg: 'hsl(var(--accent) / 0.14)',      text: 'hsl(var(--navy-deep))' },
  'Award & Recognition': { bg: 'hsl(43 90% 92%)',                text: 'hsl(43 80% 28%)' },
  'Research Publication':{ bg: 'hsl(160 60% 90%)',               text: 'hsl(160 60% 22%)' },
  'Industry Analysis':   { bg: 'hsl(280 50% 92%)',               text: 'hsl(280 50% 28%)' },
  'Expansion':           { bg: 'hsl(190 70% 90%)',               text: 'hsl(190 70% 22%)' },
}

function typeStyle(type?: string) {
  if (!type) return { bg: 'hsl(var(--muted))', text: 'hsl(var(--muted-foreground))' }
  return RELEASE_TYPE_COLORS[type] ?? { bg: 'hsl(var(--muted))', text: 'hsl(var(--muted-foreground))' }
}

function isHtmlString(value: string): boolean {
  return /<[a-z][\s\S]*>/i.test(value)
}

export default function PressRelease() {
  const { slug } = useParams<{ slug: string }>()

  const { data: release, isLoading, isError } = useQuery({
    queryKey: ['press-release', slug],
    queryFn: () => fetchPressReleaseBySlug(slug!),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  })

  const { data: allReleases = [] } = useQuery({
    queryKey: ['news'],
    queryFn: fetchPressReleases,
    staleTime: 10 * 60 * 1000,
  })

  const relatedReleases = allReleases
    .filter((r) => r.slug !== slug)
    .slice(0, 3)

  // ── Not found ────────────────────────────────────────────────────────────
  if (!isLoading && (!release || isError)) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <meta name="prerender-status" content="404" />
          <meta name="robots" content="noindex" />
          <title>Press Release Not Found | BioNixus</title>
        </Helmet>
        <Navbar />
        <div className="max-w-screen-xl mx-auto px-6 py-32 text-center">
          <Newspaper className="w-12 h-12 text-muted-foreground/40 mx-auto mb-6" />
          <h1 className="font-display text-2xl font-bold text-foreground mb-3">Press release not found</h1>
          <p className="text-muted-foreground mb-8">This press release may have been removed or the URL is incorrect.</p>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-border hover:border-primary/40 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to newsroom
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  // ── Loading skeleton ──────────────────────────────────────────────────────
  if (isLoading || !release) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="animate-pulse">
          <div className="h-[420px] bg-muted" />
          <div className="max-w-3xl mx-auto px-6 py-12 space-y-4">
            <div className="h-5 w-32 bg-muted rounded" />
            <div className="h-8 bg-muted rounded w-2/3" />
            <div className="h-4 bg-muted/60 rounded" />
            <div className="h-4 bg-muted/60 rounded w-5/6" />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const pageUrl = `${BASE_URL}/news/${release.slug}`
  const metaTitle = release.seoMetaTitle || `${release.title} | BioNixus`
  const metaDescription =
    release.seoMetaDescription || release.excerpt || 'Press release from BioNixus — global healthcare market research network.'
  const socialImage = release.ogImage || release.coverImage
  const colors = typeStyle(release.releaseType)

  return (
    <>
      <SchemaMarkup
        pageType="pressRelease"
        pageUrl={pageUrl}
        language="en"
        headline={release.title}
        description={metaDescription}
        imageUrl={socialImage}
        publishedAt={release.publishedAtIso}
        modifiedAt={release.updatedAtIso || release.publishedAtIso}
        releaseType={release.releaseType}
        keywords={release.tags}
        breadcrumb={[
          { name: 'Home', item: BASE_URL },
          { name: 'Press Releases', item: `${BASE_URL}/news` },
          { name: release.title, item: pageUrl },
        ]}
      />
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={release.seoCanonicalUrl || pageUrl} />
        {release.seoNoIndex && <meta name="robots" content="noindex" />}
        <meta property="og:title" content={release.ogTitle || metaTitle} />
        <meta property="og:description" content={release.ogDescription || metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        {socialImage && <meta property="og:image" content={socialImage} />}
        <meta property="article:published_time" content={release.publishedAtIso || ''} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        {release.coverImage ? (
          <div
            className="relative w-full overflow-hidden bg-navy-deep group"
            style={{ minHeight: '400px', maxHeight: '580px', aspectRatio: '21 / 9' }}
          >
            <img
              src={optimizeSanityImage(release.coverImage, 1400, 600)}
              alt={release.title}
              className="w-full h-full object-cover opacity-[0.5] transition-transform duration-[6000ms] ease-in-out group-hover:scale-[1.03]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={1400}
              height={600}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(220 47% 10% / 0.98) 0%, hsl(220 47% 10% / 0.7) 40%, transparent 70%)' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, hsl(220 47% 10% / 0.5) 0%, transparent 55%)' }} />
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--gold-light)) 55%, transparent 100%)' }} />

            <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-20 pb-10 md:pb-14 z-10 max-w-5xl">
              <Link to="/news" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm mb-6 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to newsroom
              </Link>
              <HeroBadges release={release} colors={colors} />
              <h1 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.18] tracking-[-0.02em] text-white max-w-4xl mb-5 text-balance">
                {release.title}
              </h1>
              <HeroMeta release={release} />
            </div>
          </div>
        ) : (
          <div
            className="relative py-16 md:py-22 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--gold-light)) 55%, transparent 100%)' }} />
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.05]" style={{ background: 'hsl(var(--accent))' }} />
            <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
              <Link to="/news" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm mb-6 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to newsroom
              </Link>
              <HeroBadges release={release} colors={colors} />
              <h1 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white leading-[1.18] tracking-[-0.02em] max-w-4xl mb-5 text-balance">
                {release.title}
              </h1>
              <HeroMeta release={release} />
            </div>
          </div>
        )}

        {/* ── CONTENT — full-width single column ───────────────────────── */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 pt-10 pb-20">

          {/* Tags + Share */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-5 mb-8 border-b border-border">
            {Array.isArray(release.tags) && release.tags.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {release.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-2.5 py-1 bg-muted text-muted-foreground text-[11px] font-medium tracking-[0.04em] uppercase rounded-full border border-border"
                  >
                    <Tag className="w-2.5 h-2.5" aria-hidden />
                    {tag}
                  </span>
                ))}
              </div>
            ) : <div />}
            <ShareButtons url={pageUrl} title={release.title} contentType="blog" slug={slug!} />
          </div>

          {/* Press Contact card — inline, before body */}
          {release.contact && (release.contact.name || release.contact.email || release.contact.phone) && (
            <div
              className="mb-10 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row gap-5 border"
              style={{ background: 'hsl(var(--navy-deep) / 0.03)', borderColor: 'hsl(var(--border))' }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'hsl(var(--primary) / 0.08)' }}
              >
                <User className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-extrabold tracking-[0.12em] uppercase mb-1" style={{ color: 'hsl(var(--accent))' }}>
                  Press Contact
                </p>
                {release.contact.name && (
                  <p className="text-[15px] font-semibold text-foreground">{release.contact.name}</p>
                )}
                {release.contact.jobTitle && (
                  <p className="text-sm text-muted-foreground">{release.contact.jobTitle}</p>
                )}
                <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-2">
                  {release.contact.email && (
                    <a
                      href={`mailto:${release.contact.email}`}
                      className="inline-flex items-center gap-1.5 text-[13px] text-primary hover:text-accent-foreground transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
                      {release.contact.email}
                    </a>
                  )}
                  {release.contact.phone && (
                    <a
                      href={`tel:${release.contact.phone}`}
                      className="inline-flex items-center gap-1.5 text-[13px] text-primary hover:text-accent-foreground transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
                      {release.contact.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ── Article body ───────────────────────────────────────────── */}
          <article className="blog-article-body blog-drop-cap">
            {(() => {
              const { body } = release
              if (typeof body === 'string') {
                return isHtmlString(body) ? (
                  <div dangerouslySetInnerHTML={{ __html: sanitizeBodyHtml(body) }} />
                ) : (
                  <p className="text-[17px] text-muted-foreground leading-[1.82] whitespace-pre-line">{body}</p>
                )
              }
              if (Array.isArray(body)) {
                return (
                  <div className="prose-body text-foreground">
                    <PortableText value={body as PortableTextBlock[]} />
                  </div>
                )
              }
              if (release.excerpt) {
                return (
                  <p className="text-[17px] text-muted-foreground leading-[1.82]">{release.excerpt}</p>
                )
              }
              return null
            })()}
          </article>

          {/* ── About BioNixus boilerplate ─────────────────────────────── */}
          <div className="mt-14 pt-8 border-t border-border">
            <p className="text-[10px] font-extrabold tracking-[0.14em] uppercase mb-3" style={{ color: 'hsl(var(--accent))' }}>
              About BioNixus
            </p>
            <p className="text-[14px] text-muted-foreground leading-[1.8]">
              BioNixus is a global healthcare and pharmaceutical market research network with strong regional
              presence in the GCC and MENA region. The firm delivers qualitative and quantitative research
              programmes for pharmaceutical, medtech, and diagnostics companies navigating market access,
              formulary listing, launch strategy, and competitive intelligence. With 120+ delivered programmes
              across 17 countries, BioNixus combines local fieldwork depth with global research standards.{' '}
              <Link to="/" className="text-primary hover:text-accent-foreground hover:underline transition-colors">
                www.bionixus.com
              </Link>
            </p>
          </div>

          {/* ── More press releases ────────────────────────────────────── */}
          {relatedReleases.length > 0 && (
            <section className="mt-16">
              <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-accent flex-shrink-0" aria-hidden />
                More from our newsroom
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedReleases.map((r) => {
                  const rc = typeStyle(r.releaseType)
                  return (
                    <Link
                      key={r.id}
                      to={`/news/${r.slug}`}
                      className="group block rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all p-5"
                    >
                      {r.releaseType && (
                        <span
                          className="inline-flex px-2 py-0.5 text-[9px] font-extrabold tracking-[0.1em] uppercase rounded-full mb-3"
                          style={{ background: rc.bg, color: rc.text }}
                        >
                          {r.releaseType}
                        </span>
                      )}
                      <p className="text-[13px] font-semibold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-3 mb-2">
                        {r.title}
                      </p>
                      {r.date && (
                        <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" aria-hidden />
                          {r.date}
                        </p>
                      )}
                    </Link>
                  )
                })}
              </div>
              <div className="mt-6 text-center">
                <Link
                  to="/news"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent-foreground transition-colors"
                >
                  View all press releases <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
                </Link>
              </div>
            </section>
          )}

          {/* ── Media CTA ─────────────────────────────────────────────── */}
          <div
            className="mt-14 rounded-2xl p-7 md:p-9 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-[0.1] pointer-events-none" style={{ background: 'hsl(var(--accent))' }} />
            <p className="text-[10px] font-extrabold tracking-[0.14em] uppercase mb-2" style={{ color: 'hsl(var(--accent))' }}>
              Media &amp; Press
            </p>
            <h2 className="font-display text-xl font-bold text-white mb-2 leading-snug">
              Speak with our communications team
            </h2>
            <p className="text-white/60 text-sm mb-5 max-w-lg">
              For interview requests, data inquiries, or media assets, our team is available for press engagements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5"
              style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
            >
              Contact BioNixus
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>

        </div>

        <Footer />
      </div>
    </>
  )
}

// ── Sub-components ──────────────────────────────────────────────────────────

function HeroBadges({
  release,
  colors,
}: {
  release: { releaseType?: string }
  colors: { bg: string; text: string }
}) {
  return (
    <div className="flex items-center flex-wrap gap-2 mb-4">
      <span
        className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-extrabold tracking-[0.12em] uppercase rounded-sm"
        style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
      >
        <Newspaper className="w-3 h-3" aria-hidden />
        Press Release
      </span>
      {release.releaseType && (
        <span
          className="inline-flex px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] uppercase rounded-sm"
          style={{ background: 'hsl(var(--white) / 0.12)', color: '#fff' }}
        >
          {release.releaseType}
        </span>
      )}
    </div>
  )
}

function HeroMeta({ release }: { release: { date?: string; readingTime?: number | null } }) {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {release.date && (
        <div className="flex items-center gap-1.5 text-[13px] text-white/55 pr-4 border-r border-white/20">
          <Calendar className="w-3 h-3 opacity-60" aria-hidden />
          <strong className="text-white/80 font-medium">{release.date}</strong>
        </div>
      )}
      {release.readingTime != null && (
        <div className="flex items-center gap-1.5 text-[13px] text-white/55 px-4">
          <Clock className="w-3 h-3 opacity-60" aria-hidden />
          <strong className="text-white/80 font-medium">{release.readingTime} min read</strong>
        </div>
      )}
    </div>
  )
}
