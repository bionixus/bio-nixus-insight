import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { SEOHead } from '@/components/seo/SEOHead'
import { CTASection } from '@/components/shared/CTASection'
import { Download, Mail, Phone } from 'lucide-react'
import {
  DEFAULT_PRESS_MEDIA_EMAIL,
  DEFAULT_PRESS_MEDIA_PHONE_UK,
  DEFAULT_PRESS_MEDIA_PHONE_US,
} from '@/lib/pressReleaseConstants'

const mediaSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'BioNixus Media Kit',
    description:
      'Official BioNixus logos, brand assets, and press contact information for journalists and partners.',
    url: 'https://www.bionixus.com/media',
    isPartOf: {
      '@type': 'WebSite',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Media', item: 'https://www.bionixus.com/media' },
    ],
  },
]

const LOGO_ASSETS = [
  {
    href: '/bionixus-logo.webp',
    label: 'BioNixus logo (WebP)',
    description: 'Primary wordmark for digital use',
  },
  {
    href: '/logo.svg',
    label: 'BioNixus logo (SVG)',
    description: 'Vector wordmark',
  },
  {
    href: '/bimi-logo.svg',
    label: 'BIMI logo (SVG)',
    description: 'Brand indicator for email',
  },
] as const

export default function Media() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Media Kit & Press Contact | BioNixus"
        description="Download BioNixus logos and brand assets. Press contact for healthcare and pharmaceutical market research announcements."
        canonical="/media"
        jsonLd={mediaSchemas}
      />
      <Navbar />
      <main>
        <div className="container-wide max-w-6xl mx-auto pt-6">
          <BreadcrumbNav
            items={[
              { name: 'Home', href: '/' },
              { name: 'Media', href: '/media' },
            ]}
          />
        </div>

        <section className="relative border-b border-border/60 overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-gold-light to-transparent"
            aria-hidden
          />
          <div className="container-wide section-padding max-w-4xl">
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight">
              Media kit
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Assets and contacts for journalists covering BioNixus press releases and healthcare market
              research programmes. See{' '}
              <Link to="/news" className="font-medium text-primary hover:underline">
                News
              </Link>{' '}
              for official announcements.
            </p>
          </div>
        </section>

        <section className="container-wide section-padding max-w-4xl">
          <h2 className="font-display text-xl font-semibold text-primary mb-4">Brand colour</h2>
          <p className="text-muted-foreground mb-4">
            Primary accent red: <strong className="text-foreground">#b91c1c</strong> (BioNixus red). Navy
            and cream backgrounds match the site design system.
          </p>

          <h2 className="font-display text-xl font-semibold text-primary mb-4 mt-10">Logos</h2>
          <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 m-0">
            {LOGO_ASSETS.map((asset) => (
              <li
                key={asset.href}
                className="rounded-xl border border-border p-5 flex flex-col gap-3"
              >
                <div className="h-16 flex items-center bg-muted/40 rounded-md px-4">
                  <img
                    src={asset.href}
                    alt={`${asset.label} preview`}
                    className="max-h-12 max-w-full object-contain"
                    width={160}
                    height={48}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">{asset.label}</p>
                  <p className="text-sm text-muted-foreground">{asset.description}</p>
                </div>
                <a
                  href={asset.href}
                  download
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mt-auto"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Download
                </a>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-xl font-semibold text-primary mb-4 mt-12">Press contact</h2>
          <ul className="space-y-3 text-[15px] list-none p-0 m-0">
            <li>
              <a
                href={`mailto:${DEFAULT_PRESS_MEDIA_EMAIL}`}
                className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {DEFAULT_PRESS_MEDIA_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={`tel:${DEFAULT_PRESS_MEDIA_PHONE_US.replace(/[^\d+]/g, '')}`}
                className="inline-flex items-center gap-2 text-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" aria-hidden />
                US {DEFAULT_PRESS_MEDIA_PHONE_US}
              </a>
            </li>
            <li>
              <a
                href={`tel:${DEFAULT_PRESS_MEDIA_PHONE_UK.replace(/[^\d+]/g, '')}`}
                className="inline-flex items-center gap-2 text-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" aria-hidden />
                UK {DEFAULT_PRESS_MEDIA_PHONE_UK}
              </a>
            </li>
          </ul>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
