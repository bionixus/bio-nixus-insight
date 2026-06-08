import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Calendar, Tag, Newspaper } from 'lucide-react'
import { fetchPressReleases } from '@/lib/sanity-press-release'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'

const BASE_URL = 'https://www.bionixus.com'
const PAGE_URL = `${BASE_URL}/press-releases`

const RELEASE_TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  'Company News':       { bg: 'hsl(var(--navy-medium) / 0.12)', text: 'hsl(var(--primary))' },
  'Partnership':        { bg: 'hsl(210 80% 92%)',               text: 'hsl(210 80% 28%)' },
  'Product Launch':     { bg: 'hsl(var(--accent) / 0.12)',      text: 'hsl(var(--navy-deep))' },
  'Award & Recognition':{ bg: 'hsl(43 90% 92%)',                text: 'hsl(43 80% 28%)' },
  'Research Publication':{ bg: 'hsl(160 60% 90%)',              text: 'hsl(160 60% 22%)' },
  'Industry Analysis':  { bg: 'hsl(280 50% 92%)',               text: 'hsl(280 50% 28%)' },
  'Expansion':          { bg: 'hsl(190 70% 90%)',               text: 'hsl(190 70% 22%)' },
}

function typeStyle(type?: string) {
  if (!type) return { bg: 'hsl(var(--muted))', text: 'hsl(var(--muted-foreground))' }
  return RELEASE_TYPE_COLORS[type] ?? { bg: 'hsl(var(--muted))', text: 'hsl(var(--muted-foreground))' }
}

export default function PressReleases() {
  const { data: releases = [], isLoading } = useQuery({
    queryKey: ['press-releases'],
    queryFn: fetchPressReleases,
    staleTime: 5 * 60 * 1000,
  })

  const years = useMemo(() => {
    const ys = new Set(
      releases.map((r) => (r.publishedAtIso ? new Date(r.publishedAtIso).getFullYear().toString() : ''))
    )
    ys.delete('')
    return ['All', ...Array.from(ys).sort((a, b) => Number(b) - Number(a))]
  }, [releases])

  const [activeYear, setActiveYear] = useState('All')
  const [activeType, setActiveType] = useState('All')

  const releaseTypes = useMemo(() => {
    const ts = new Set(releases.map((r) => r.releaseType ?? ''))
    ts.delete('')
    return ['All', ...Array.from(ts).sort()]
  }, [releases])

  const filtered = useMemo(() => {
    return releases.filter((r) => {
      const year = r.publishedAtIso ? new Date(r.publishedAtIso).getFullYear().toString() : ''
      const matchYear = activeYear === 'All' || year === activeYear
      const matchType = activeType === 'All' || r.releaseType === activeType
      return matchYear && matchType
    })
  }, [releases, activeYear, activeType])

  return (
    <>
      <SchemaMarkup
        pageType="pressRelease"
        pageUrl={PAGE_URL}
        language="en"
        headline="BioNixus Press Releases — Newsroom"
        description="Latest press releases from BioNixus: company news, partnerships, research publications, and healthcare market intelligence announcements."
        breadcrumb={[
          { name: 'Home', item: BASE_URL },
          { name: 'Press Releases', item: PAGE_URL },
        ]}
      />
      <Helmet>
        <title>Press Releases | BioNixus Newsroom</title>
        <meta name="description" content="Latest press releases from BioNixus: company news, partnerships, research publications, and healthcare market intelligence announcements." />
        <link rel="canonical" href={PAGE_URL} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}>
          <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--gold-light)) 55%, transparent 100%)' }} />
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-[0.05]" style={{ background: 'hsl(var(--accent))' }} />
          <div className="absolute bottom-0 left-1/3 w-96 h-48 rounded-full opacity-[0.04]" style={{ background: 'hsl(var(--gold-light))' }} />
          <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-24 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border" style={{ background: 'hsl(var(--accent) / 0.12)', borderColor: 'hsl(var(--accent) / 0.25)' }}>
              <Newspaper className="w-3.5 h-3.5" style={{ color: 'hsl(var(--accent))' }} aria-hidden />
              <span className="text-[10px] font-extrabold tracking-[0.14em] uppercase" style={{ color: 'hsl(var(--accent))' }}>Newsroom</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-[-0.02em] max-w-2xl mb-4">
              Press Releases
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              News, partnerships, research publications, and announcements from BioNixus.
            </p>
          </div>
        </div>

        {/* ── FILTERS ──────────────────────────────────────────────────── */}
        <div className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-16 z-30">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 py-3.5 overflow-x-auto">
              {/* Year filter */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <Calendar className="w-3.5 h-3.5 text-muted-foreground" aria-hidden />
                <div className="flex gap-1">
                  {years.map((y) => (
                    <button
                      key={y}
                      onClick={() => setActiveYear(y)}
                      className="px-3 py-1 text-[12px] font-semibold rounded-md transition-all"
                      style={
                        activeYear === y
                          ? { background: 'hsl(var(--primary))', color: '#fff' }
                          : { background: 'transparent', color: 'hsl(var(--muted-foreground))' }
                      }
                    >
                      {y}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type filter */}
              {releaseTypes.length > 1 && (
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <Tag className="w-3.5 h-3.5 text-muted-foreground" aria-hidden />
                  <div className="flex gap-1 flex-wrap">
                    {releaseTypes.map((t) => (
                      <button
                        key={t}
                        onClick={() => setActiveType(t)}
                        className="px-3 py-1 text-[12px] font-semibold rounded-md transition-all"
                        style={
                          activeType === t
                            ? { background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }
                            : { background: 'transparent', color: 'hsl(var(--muted-foreground))' }
                        }
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── RELEASE LIST ─────────────────────────────────────────────── */}
        <main className="max-w-screen-xl mx-auto px-6 md:px-10 py-12 md:py-16">
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-7 animate-pulse">
                  <div className="h-4 w-28 bg-muted rounded mb-4" />
                  <div className="h-6 bg-muted rounded mb-3 w-3/4" />
                  <div className="h-4 bg-muted/60 rounded mb-2" />
                  <div className="h-4 bg-muted/60 rounded w-5/6" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24">
              <Newspaper className="w-10 h-10 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-lg font-semibold text-muted-foreground">No press releases found</p>
              <p className="text-sm text-muted-foreground/70 mt-1">Try adjusting the filters above.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((release) => {
                const colors = typeStyle(release.releaseType)
                return (
                  <Link
                    key={release.id}
                    to={`/press-releases/${release.slug}`}
                    className="group block rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200 overflow-hidden"
                  >
                    {release.coverImage && (
                      <div className="relative overflow-hidden h-44">
                        <img
                          src={release.coverImage}
                          alt={release.title}
                          className="w-full h-full object-cover transition-transform duration-[3000ms] ease-in-out group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(var(--card)) 0%, transparent 55%)' }} />
                      </div>
                    )}
                    <div className="p-6 md:p-7">
                      <div className="flex items-center gap-2.5 mb-4">
                        {release.releaseType && (
                          <span
                            className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-extrabold tracking-[0.1em] uppercase rounded-full"
                            style={{ background: colors.bg, color: colors.text }}
                          >
                            {release.releaseType}
                          </span>
                        )}
                        {release.date && (
                          <span className="flex items-center gap-1 text-[12px] text-muted-foreground">
                            <Calendar className="w-3 h-3" aria-hidden />
                            {release.date}
                          </span>
                        )}
                      </div>

                      <h2 className="font-display text-[1.05rem] font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-3">
                        {release.title}
                      </h2>

                      {release.excerpt && (
                        <p className="text-[13.5px] text-muted-foreground leading-[1.7] mb-5 line-clamp-3">
                          {release.excerpt}
                        </p>
                      )}

                      <div
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors group-hover:gap-2.5"
                        style={{ color: 'hsl(var(--accent))' }}
                      >
                        Read release
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}

          {/* Bottom CTA */}
          {!isLoading && filtered.length > 0 && (
            <div
              className="mt-16 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}
            >
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-[0.07]" style={{ background: 'hsl(var(--accent))' }} />
              <p className="text-[10px] font-extrabold tracking-[0.14em] uppercase mb-3" style={{ color: 'hsl(var(--accent))' }}>
                Media Enquiries
              </p>
              <h2 className="font-display text-2xl font-bold text-white mb-3">Press & media contact</h2>
              <p className="text-white/60 text-base max-w-md mx-auto mb-6">
                For press enquiries, interview requests, or media assets, contact the BioNixus communications team.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
              >
                Contact us
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  )
}
