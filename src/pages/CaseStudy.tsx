import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { Helmet } from 'react-helmet-async';
import { fetchCaseStudyBySlug } from '@/lib/sanity-case-studies';
import { isCaseStudiesConfigured } from '@/lib/sanity-case-studies';
import { buildSeoDescription, normalizeSeoTitle } from '@/lib/seo-meta';
import { useLanguage } from '@/contexts/LanguageContext';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { getOgLocale, getOgLocaleAlternates } from '@/lib/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PdfCarousel } from '@/components/PdfCarousel';
import { ArrowLeft } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ShareButtons from '@/components/ShareButtons';

function sanitizeBodyHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ADD_ATTR: ['class', 'style', 'id'],
    ALLOWED_TAGS: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'br', 'hr',
      'ul', 'ol', 'li', 'strong', 'em', 'b', 'i', 'a', 'blockquote',
      'table', 'thead', 'tbody', 'tr', 'th', 'td', 'sub', 'sup',
    ],
    ALLOW_DATA_ATTR: false,
  });
}

const portableTextComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-xl font-display font-semibold mt-10 mb-4 pb-0 border-l-4 border-primary pl-4 text-primary">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-lg font-display font-semibold text-foreground mt-8 mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-primary pl-4 my-4 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4 text-foreground">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => <em>{children}</em>,
    link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => (
      <a
        href={value?.href}
        className="text-primary underline hover:no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const cs = (t as { caseStudiesPage?: Record<string, string> }).caseStudiesPage ?? {};

  const { data: caseStudy, isLoading, isError } = useQuery({
    queryKey: ['case-study', slug],
    queryFn: () => fetchCaseStudyBySlug(slug!),
    enabled: Boolean(slug) && isCaseStudiesConfigured(),
  });

  if (!slug) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="section-padding container-wide">
          <p className="text-muted-foreground">Invalid case study.</p>
          <Link to="/case-studies" className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline">
            <ArrowLeft className="w-4 h-4" /> {cs.backToHome ?? 'Back to case studies'}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="section-padding container-wide">
          <p className="text-muted-foreground">Loading case study…</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!caseStudy || isError) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="section-padding container-wide">
          <p className="text-muted-foreground">Case study not found.</p>
          <Link to="/case-studies" className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline">
            <ArrowLeft className="w-4 h-4" /> {cs.backToHome ?? 'Back to case studies'}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const pageUrl = `https://www.bionixus.com/case-studies/${slug}`;
  const metaTitle = normalizeSeoTitle(caseStudy.seoMetaTitle || caseStudy.title, 'BioNixus Case Studies');
  const metaDescription = buildSeoDescription({
    preferred: caseStudy.seoMetaDescription,
    bodySource: caseStudy.body || caseStudy.excerpt || caseStudy.title,
    fallback: caseStudy.excerpt || caseStudy.title,
  });
  const socialTitle = caseStudy.ogTitle || metaTitle;
  const socialDescription = caseStudy.ogDescription || metaDescription;
  const socialImage = caseStudy.ogImage || caseStudy.coverImage;

  return (
    <div className="min-h-screen bg-background">
      <OpenGraphMeta
        title={socialTitle}
        description={socialDescription}
        image={socialImage || 'https://www.bionixus.com/og-image.png'}
        url={pageUrl}
        type="article"
        locale={getOgLocale(language)}
        alternateLocales={getOgLocaleAlternates(language)}
      />
      <Helmet>
        <title>{normalizeSeoTitle(`${metaTitle} | BioNixus Case Studies`, 'BioNixus Case Studies')}</title>
        <meta name="description" content={metaDescription} />
        {caseStudy.seoNoIndex && <meta name="robots" content="noindex,nofollow" />}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={socialTitle} />
        <meta property="og:description" content={socialDescription} />
        <meta property="og:url" content={pageUrl} />
        {socialImage && <meta property="og:image" content={socialImage} />}
        {socialImage && <meta property="og:image:width" content="1200" />}
        {socialImage && <meta property="og:image:height" content="630" />}
        {caseStudy.date && <meta property="article:published_time" content={caseStudy.date} />}
        {caseStudy.category && <meta property="article:section" content={caseStudy.category} />}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={socialTitle} />
        <meta name="twitter:description" content={socialDescription} />
        {socialImage && <meta name="twitter:image" content={socialImage} />}

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Navbar />
      <main className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> {cs.backToHome ?? 'Back to case studies'}
          </Link>

          <article>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {caseStudy.category && (
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {caseStudy.category}
                </span>
              )}
              {caseStudy.country && (
                <span className="text-sm text-muted-foreground">{caseStudy.country}</span>
              )}
              {caseStudy.date && (
                <span className="text-sm text-muted-foreground">{caseStudy.date}</span>
              )}
              {caseStudy.readingTime != null && (
                <span className="text-sm text-muted-foreground">
                  {caseStudy.readingTime} min read
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              {caseStudy.title}
            </h1>

            <div className="mb-4">
              <ShareButtons
                url={pageUrl}
                title={caseStudy.title}
                contentType="case-study"
                slug={slug!}
              />
            </div>

            {/* Author + tags row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {caseStudy.authorName && (
                <div className="flex items-center gap-2">
                  {caseStudy.authorImage && (
                    <img
                      src={caseStudy.authorImage}
                      alt={caseStudy.authorName}
                      className="w-8 h-8 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width={32}
                      height={32}
                    />
                  )}
                  <span className="text-sm font-medium text-foreground">{caseStudy.authorName}</span>
                </div>
              )}
              {Array.isArray(caseStudy.tags) && caseStudy.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {caseStudy.pdfUrl && (
              <div className="mb-10">
                <PdfCarousel pdfUrl={caseStudy.pdfUrl} />
              </div>
            )}

            {caseStudy.coverImage && (
              <div className="aspect-[16/10] rounded-xl overflow-hidden mb-8 bg-muted">
                <img
                  src={caseStudy.coverImage}
                  alt={caseStudy.title || 'Case study cover image'}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={800}
                />
              </div>
            )}

            {/* Table of Contents */}
            {Array.isArray(caseStudy.tableOfContents) && caseStudy.tableOfContents.length > 0 && (
              <nav className="mb-8 p-4 rounded-lg bg-muted/50 border border-border">
                <h2 className="text-sm font-semibold text-foreground mb-3">On this page</h2>
                <ul className="space-y-1.5 text-sm">
                  {caseStudy.tableOfContents.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.anchor ? `#${item.anchor}` : undefined}
                        className="text-primary hover:underline"
                      >
                        {item.heading ?? ''}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* Executive Summary */}
            {Array.isArray(caseStudy.executiveSummary) && caseStudy.executiveSummary.length > 0 && (
              <section className="mb-8 p-5 rounded-lg border border-primary/20 bg-primary/5">
                <h2 className="text-lg font-display font-semibold text-primary mb-3">
                  Executive summary
                </h2>
                <div className="prose-body text-foreground leading-relaxed">
                  <PortableText
                    value={caseStudy.executiveSummary as PortableTextBlock[]}
                    components={portableTextComponents}
                  />
                </div>
              </section>
            )}

            {caseStudy.excerpt && (
              <p className="text-muted-foreground leading-relaxed mb-8">
                {caseStudy.excerpt}
              </p>
            )}

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {caseStudy.body ? (
                <div
                  className="prose-body text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: sanitizeBodyHtml(caseStudy.body) }}
                />
              ) : null}
            </div>

            {/* FAQ */}
            {Array.isArray(caseStudy.faq) && caseStudy.faq.length > 0 && (
              <section className="mt-12" aria-label="FAQ">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Frequently asked questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {caseStudy.faq.map((item, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left">
                        {item.question || 'Question'}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer || ''}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}

            {/* CTA Section */}
            {caseStudy.ctaSection &&
              (caseStudy.ctaSection.title ||
                caseStudy.ctaSection.description ||
                caseStudy.ctaSection.buttonText ||
                caseStudy.ctaSection.buttonUrl) && (
                <Card className="mt-12 border-primary/20 bg-primary/5">
                  <CardHeader>
                    {caseStudy.ctaSection.title && (
                      <CardTitle className="text-xl">{caseStudy.ctaSection.title}</CardTitle>
                    )}
                    {caseStudy.ctaSection.description && (
                      <CardDescription className="text-base mt-1 text-muted-foreground">
                        {caseStudy.ctaSection.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                  {caseStudy.ctaSection.buttonText && caseStudy.ctaSection.buttonUrl && (
                    <CardContent>
                      <Button asChild>
                        <a
                          href={caseStudy.ctaSection.buttonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {caseStudy.ctaSection.buttonText}
                        </a>
                      </Button>
                    </CardContent>
                  )}
                </Card>
              )}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
