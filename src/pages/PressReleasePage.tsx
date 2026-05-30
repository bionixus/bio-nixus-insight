import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import OpenGraphMeta from '@/components/OpenGraphMeta'
import SchemaMarkup from '@/components/SchemaMarkup'
import { PressReleaseHero } from '@/components/press-release/PressReleaseHero'
import { PressReleaseBody } from '@/components/press-release/PressReleaseBody'
import { RelatedReportCallout } from '@/components/press-release/RelatedReportCallout'
import { PressBoilerplate } from '@/components/press-release/PressBoilerplate'
import { CTASection } from '@/components/shared/CTASection'
import { useInitialData } from '@/contexts/InitialDataContext'
import type { PressRelease } from '@/types/pressRelease'
import { buildSeoDescription, normalizeSeoTitle, seoTitleWithBrandOnce } from '@/lib/seo-meta'
import { resolveRelatedReportPath } from '@/lib/resolveRelatedReportPath'
import {
  DEFAULT_PRESS_MEDIA_EMAIL,
  DEFAULT_PRESS_MEDIA_PHONE_UK,
  DEFAULT_PRESS_MEDIA_PHONE_US,
} from '@/lib/pressReleaseConstants'
import { ArrowLeft, Mail, Phone } from 'lucide-react'

const ORIGIN = 'https://www.bionixus.com'

function pressOgImage(release: PressRelease): string {
  const raw =
    release.openGraph?.ogImageUrl ||
    release.heroImage ||
    `${ORIGIN}/og-image.png`
  return raw.startsWith('/') ? `${ORIGIN}${raw}` : raw
}

export default function PressReleasePage() {
  const { slug } = useParams<{ slug: string }>()
  const { data: routeData } = useInitialData()

  const release: PressRelease | null =
    routeData.pageType === 'press-post' && routeData.pressRelease
      ? (routeData.pressRelease as PressRelease)
      : null

  if (!release || !slug) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Press release not found | BioNixus</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Navbar />
        <main className="container-wide section-padding max-w-2xl">
          <h1 className="font-display text-2xl font-semibold text-primary mb-4">Press release not found</h1>
          <p className="text-muted-foreground mb-6">
            This release may be under embargo, unpublished, or the URL may be incorrect.
          </p>
          <Link to="/news" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to News
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const pageUrl = `${ORIGIN}/news/${release.slug}`
  const metaTitle = seoTitleWithBrandOnce(
    release.seo?.metaTitle?.trim() || release.headline,
  )
  const documentTitle = normalizeSeoTitle(metaTitle, 'BioNixus')
  const metaDescription = buildSeoDescription({
    preferred:
      release.seo?.metaDescription?.trim() ||
      release.openGraph?.ogDescription?.trim() ||
      release.subheadline?.trim(),
    fallback: `${release.headline}. ${release.dateline}. BioNixus press release.`,
  })
  const socialTitle = release.openGraph?.ogTitle?.trim() || release.headline
  const socialDescription =
    release.openGraph?.ogDescription?.trim() || metaDescription
  const ogImage = pressOgImage(release)
  const related = resolveRelatedReportPath(release.relatedReportSlug)

  const publishedIso = release.publishedAtIso || release.publishedAt
  const modifiedIso = release.updatedAtIso || publishedIso

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{documentTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
      </Helmet>
      <OpenGraphMeta
        title={socialTitle}
        description={socialDescription}
        image={ogImage}
        url={pageUrl}
        type="article"
        locale="en_GB"
        siteName="BioNixus"
        imageAlt={release.heroImageAlt || release.headline}
        twitterSite="@BioNixus"
        article={{
          publishedTime: publishedIso,
          modifiedTime: modifiedIso,
          author: 'BioNixus',
          section: 'Press release',
        }}
      />
      <SchemaMarkup
        pageType="press-release"
        pageUrl={pageUrl}
        language="en"
        headline={release.headline}
        description={metaDescription}
        imageUrl={ogImage}
        publishedAt={publishedIso}
        modifiedAt={modifiedIso}
        dateline={release.dateline}
        relatedReportUrl={related ? `${ORIGIN}${related.href}` : undefined}
        breadcrumb={[
          { name: 'Home', item: `${ORIGIN}/` },
          { name: 'News', item: `${ORIGIN}/news` },
          { name: release.headline, item: pageUrl },
        ]}
      />
      <Navbar />
      <main>
        <div className="container-wide max-w-6xl mx-auto pt-6">
          <BreadcrumbNav
            items={[
              { name: 'Home', href: '/' },
              { name: 'News', href: '/news' },
              { name: release.headline, href: `/news/${release.slug}` },
            ]}
          />
        </div>

        <article>
          <PressReleaseHero release={release} />
          <div className="container-wide section-padding max-w-5xl">
            <p className="mb-8 text-[15px] text-muted-foreground max-w-3xl">
              For context on BioNixus programmes, see our{' '}
              <Link
                to="/healthcare-market-research"
                className="font-medium text-primary underline underline-offset-2 hover:no-underline"
              >
                healthcare market research hub
              </Link>
              .
            </p>
            <PressReleaseBody body={release.body} />
            <RelatedReportCallout relatedReportSlug={release.relatedReportSlug} />
            <PressBoilerplate boilerplate={release.boilerplate} />

            <section
              className="mt-10 rounded-xl border border-border bg-muted/30 p-6 max-w-3xl"
              aria-label="Press contact"
            >
              <h2 className="font-display text-lg font-semibold text-primary mb-3">Media contact</h2>
              <ul className="space-y-2 text-[15px] list-none p-0 m-0">
                <li>
                  <a
                    href={`mailto:${DEFAULT_PRESS_MEDIA_EMAIL}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    <Mail className="h-4 w-4 shrink-0" aria-hidden />
                    {DEFAULT_PRESS_MEDIA_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${DEFAULT_PRESS_MEDIA_PHONE_US.replace(/[^\d+]/g, '')}`}
                    className="inline-flex items-center gap-2 text-foreground hover:text-primary"
                  >
                    <Phone className="h-4 w-4 shrink-0" aria-hidden />
                    US {DEFAULT_PRESS_MEDIA_PHONE_US}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${DEFAULT_PRESS_MEDIA_PHONE_UK.replace(/[^\d+]/g, '')}`}
                    className="inline-flex items-center gap-2 text-foreground hover:text-primary"
                  >
                    <Phone className="h-4 w-4 shrink-0" aria-hidden />
                    UK {DEFAULT_PRESS_MEDIA_PHONE_UK}
                  </a>
                </li>
              </ul>
              <p className="mt-3 text-sm">
                <Link to="/media" className="font-medium text-primary hover:underline">
                  Logos and media kit
                </Link>
              </p>
            </section>
          </div>
        </article>

        <div className="container-wide pb-8">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All press releases
          </Link>
        </div>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
