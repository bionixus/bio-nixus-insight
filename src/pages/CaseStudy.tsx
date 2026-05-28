import { lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { Helmet } from 'react-helmet-async';
import { fetchCaseStudyBySlug } from '@/lib/sanity-case-studies';
import { isCaseStudiesConfigured } from '@/lib/sanity-case-studies';
import { buildSeoDescription, seoTitleWithBrandOnce, dedupePipeBioNixusTail, formatSlugAsPageHeading } from '@/lib/seo-meta';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInitialData } from '@/contexts/InitialDataContext';
import type { CaseStudy as CaseStudyType } from '@/types/caseStudy';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import SchemaMarkup from '@/components/SchemaMarkup';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { getOgLocale, getOgLocaleAlternates } from '@/lib/seo';
import { optimizeSanityImage } from '@/lib/image-utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowUpRight, Calendar, Clock, List, MapPin } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

const PdfCarousel = lazy(() =>
  import('@/components/PdfCarousel').then((module) => ({ default: module.PdfCarousel })),
);

/** Server-side-safe SEO boosts when Sanity fields are sparse (CMS still wins when set). */
const CASE_STUDY_SLUG_SEO_FALLBACKS: Record<
  string,
  {
    seoMetaTitle?: string;
    seoMetaDescription?: string;
    ogTitle?: string;
    ogDescription?: string;
  }
> = {
  'gcc-oncology-market': {
    seoMetaTitle: 'GCC oncology market intelligence case study',
    seoMetaDescription:
      'Regional oncology pharmaceutical research across Saudi Arabia, the UAE, Kuwait, and the wider Gulf — competitive benchmarking, prescribing signals, payer dynamics, and KOL-aligned evidence for oncology launches.',
    ogTitle: 'GCC oncology market intelligence — BioNixus case study',
    ogDescription:
      'Executive-ready oncology market intelligence for the GCC: bilingual field programs, tumour-area analytics, and access-focused reporting for pharma and biologics portfolios.',
  },
};

const BIONIXUS_ORIGIN = 'https://www.bionixus.com';

function sanitizeBodyHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi, '')
    .replace(/\s(on\w+)=["'][^"']*["']/gi, '')
    .replace(/\s(on\w+)=\{[^}]*\}/gi, '')
    .replace(/\s(href|src)=["']\s*javascript:[^"']*["']/gi, '');
}

function normalizeCaseStudyAbsoluteUrl(raw: string | undefined, fallbackAbsolute: string): string {
  const fb = fallbackAbsolute.trim();
  if (!raw?.trim()) return fb;
  let s = raw.trim().replace(/^http:\/\//i, 'https://');
  s = s.replace(/^https:\/\/bionixus\.com(\/|$)/i, 'https://www.bionixus.com$1');
  try {
    const u = new URL(s);
    if (u.hostname === 'bionixus.com') u.hostname = 'www.bionixus.com';
    if (u.pathname !== '/' && u.pathname.endsWith('/')) {
      u.pathname = u.pathname.replace(/\/+$/, '') || '/';
    }
    return `${u.origin}${u.pathname}${u.search}`;
  } catch {
    return fb;
  }
}

function caseStudyCanonicalAbsoluteUrl(slug: string, cmsCanonical: string | undefined): string {
  const defaultAbs = `${BIONIXUS_ORIGIN}/case-studies/${slug}`;
  const normalizedCms = normalizeCaseStudyAbsoluteUrl(cmsCanonical, defaultAbs);
  try {
    const cmsUrl = new URL(normalizedCms);
    const wantUrl = new URL(defaultAbs);
    if (cmsUrl.pathname !== wantUrl.pathname) return defaultAbs;
    return `${cmsUrl.origin}${cmsUrl.pathname}${cmsUrl.search}`;
  } catch {
    return defaultAbs;
  }
}

function caseStudyOgIsoTimestamps(caseStudy: CaseStudyType): { published?: string; modified?: string } {
  const coerce = (input: string | undefined): string | undefined => {
    if (!input?.trim()) return undefined;
    const raw = input.trim();
    const d = raw.includes('T')
      ? new Date(raw)
      : /^\d{4}-\d{2}-\d{2}$/.test(raw)
        ? new Date(`${raw}T12:00:00Z`)
        : new Date(raw);
    return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
  };
  const published = coerce(caseStudy.publishedAtIso);
  const modified = coerce(caseStudy.updatedAtIso) ?? published;
  return { published, modified };
}

const portableTextComponents = {
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mt-12 mb-5 border-l-[3px] border-accent pl-4 font-display text-xl font-semibold tracking-tight text-primary first:mt-0">
        {children}
      </h2>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mt-12 mb-5 border-l-[3px] border-accent pl-4 font-display text-xl font-semibold tracking-tight text-primary first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mt-10 mb-3 font-display text-lg font-semibold text-foreground">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-primary/35 pl-5 my-6 text-muted-foreground italic leading-relaxed">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4 leading-[1.75] text-[17px] text-foreground">{children}</p>
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
        className="font-medium text-primary underline decoration-primary/35 underline-offset-2 hover:no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

function CaseStudyGccOncologyNav() {
  return (
    <aside
      className="mb-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.04] via-background to-accent/[0.06] p-5 lg:p-6 shadow-sm ring-1 ring-border/70"
      aria-label="GCC oncology research navigation"
    >
      <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary">
        Oncology &amp; GCC context
      </p>
      <p className="mb-4 text-[15px] leading-relaxed text-foreground">
        This case study complements our{' '}
        <Link
          to="/healthcare-market-research"
          className="font-semibold text-primary underline underline-offset-2 hover:no-underline"
        >
          EMEA healthcare market research hub
        </Link>{' '}
        and oncology research coverage — use these routes for methodology depth, tenders, and country playbooks referenced
        in the decks below.
      </p>
      <ul className="grid gap-2.5 sm:grid-cols-2 list-none p-0">
        <li>
          <Link
            to="/healthcare-market-research/therapy/oncology"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden /> Oncology therapy research hub
          </Link>
        </li>
        <li>
          <Link
            to="/gcc-pharmaceutical-market-research"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden /> GCC pharmaceutical market research
          </Link>
        </li>
        <li>
          <Link to="/blog/kol-mapping-pharma-middle-east" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden /> KOL mapping — Middle East
          </Link>
        </li>
        <li>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden /> All BioNixus case studies
          </Link>
        </li>
      </ul>
    </aside>
  );
}

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const cs = (t as { caseStudiesPage?: Record<string, string> }).caseStudiesPage ?? {};
  const { data: routeData } = useInitialData();
  const ssrCaseStudyBundle =
    Boolean(slug) &&
    routeData.pageType === 'case-study' &&
    routeData.caseStudySlug === slug;

  const { data: caseStudy, isLoading, isError } = useQuery({
    queryKey: ['case-study', slug],
    queryFn: () => fetchCaseStudyBySlug(slug!),
    enabled: Boolean(slug) && isCaseStudiesConfigured(),
    initialData: ssrCaseStudyBundle ? (routeData.caseStudy as CaseStudyType | null) : undefined,
  });

  if (!slug) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="section-padding container-wide">
          <h1 className="text-2xl font-display font-semibold text-foreground mb-4">Case study</h1>
          <p className="text-muted-foreground">Invalid case study.</p>
          <Link to="/case-studies" className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline">
            <ArrowLeft className="w-4 h-4" /> {cs.backToHome ?? 'Back to case studies'}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoading && caseStudy === undefined) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="section-padding container-wide">
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3 text-balance">
            {formatSlugAsPageHeading(slug)} — BioNixus case study
          </h1>
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
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3 text-balance">
            {slug ? `${formatSlugAsPageHeading(slug)} — BioNixus case study` : 'Case study'}
          </h1>
          <p className="text-muted-foreground">Case study not found.</p>
          <Link to="/case-studies" className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline">
            <ArrowLeft className="w-4 h-4" /> {cs.backToHome ?? 'Back to case studies'}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const slugFallback = CASE_STUDY_SLUG_SEO_FALLBACKS[slug] ?? {};
  const csBrand = 'BioNixus Case Studies';
  const canonicalUrl = caseStudyCanonicalAbsoluteUrl(slug, caseStudy.seoCanonicalUrl);

  const metaTitle = seoTitleWithBrandOnce(
    caseStudy.seoMetaTitle || slugFallback.seoMetaTitle || caseStudy.title,
    csBrand,
  );
  const metaDescription = buildSeoDescription({
    preferred: caseStudy.seoMetaDescription || slugFallback.seoMetaDescription,
    bodySource: caseStudy.body || caseStudy.excerpt || caseStudy.title,
    fallback: caseStudy.excerpt || caseStudy.title,
  });
  const socialTitle = dedupePipeBioNixusTail(caseStudy.ogTitle || slugFallback.ogTitle || metaTitle);
  const socialDescription = caseStudy.ogDescription || slugFallback.ogDescription || metaDescription;
  const socialImage = caseStudy.ogImage || caseStudy.coverImage;
  const resolvedOgImageUrl = socialImage || 'https://www.bionixus.com/og-image.png';
  const ogTimes = caseStudyOgIsoTimestamps(caseStudy);

  const displayTags =
    slug === 'gcc-oncology-market' && (!caseStudy.tags || caseStudy.tags.length === 0)
      ? ['Oncology', 'GCC', 'Market research', 'Pharmaceutical intelligence']
      : caseStudy.tags ?? [];

  const faqEntities =
    Array.isArray(caseStudy.faq)
      ? caseStudy.faq
          .filter((item) => Boolean(item.question && item.answer))
          .map((item) => ({ question: item.question!, answer: item.answer! }))
      : [];

  return (
    <div className="min-h-screen bg-background">
      <OpenGraphMeta
        title={socialTitle}
        description={socialDescription}
        image={resolvedOgImageUrl}
        url={canonicalUrl}
        type="article"
        locale={getOgLocale(language)}
        alternateLocales={getOgLocaleAlternates(language)}
        siteName="BioNixus"
        imageAlt={caseStudy.title}
        twitterSite="@BioNixus"
        article={{
          publishedTime: ogTimes.published,
          modifiedTime: ogTimes.modified,
          author: caseStudy.authorName || 'BioNixus Research Team',
          section: caseStudy.category || 'Case studies',
          tags: displayTags,
        }}
      />
      <SchemaMarkup
        pageType="case-study"
        pageUrl={canonicalUrl}
        language={language}
        headline={caseStudy.title}
        description={metaDescription}
        imageUrl={resolvedOgImageUrl}
        ogImageWidth={1600}
        ogImageHeight={720}
        articleSection={(caseStudy.category || 'Case studies').trim()}
        keywords={displayTags.length > 0 ? [...displayTags] : undefined}
        authorName={caseStudy.authorName || 'BioNixus Research Team'}
        breadcrumb={[
          { name: 'Home', item: `${BIONIXUS_ORIGIN}/` },
          { name: 'Case studies', item: `${BIONIXUS_ORIGIN}/case-studies` },
          { name: caseStudy.title, item: canonicalUrl },
        ]}
        publishedAt={caseStudy.publishedAtIso}
        modifiedAt={caseStudy.updatedAtIso || caseStudy.publishedAtIso}
        faqItems={faqEntities}
      />
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="robots"
          content={
            caseStudy.seoNoIndex
              ? 'noindex,nofollow'
              : 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'
          }
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Navbar />
      <main>
        {caseStudy.coverImage ? (
          <div className="relative w-full overflow-hidden bg-[hsl(220_47%_10%)] min-h-[360px] max-h-[520px]">
            <img
              src={optimizeSanityImage(caseStudy.coverImage, 1600, 720)}
              alt={`${caseStudy.title} — case study cover`}
              className="h-full w-full object-cover opacity-[0.5]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={1600}
              height={720}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(220_47%_10%_/_0.96)] via-[hsl(220_47%_10%_/_0.55)] to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[hsl(220_47%_10%_/_0.4)] via-transparent to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/65 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8 pt-14 md:px-10 md:pb-10">
              <div className="container-wide mx-auto max-w-4xl">
                <Link
                  to="/case-studies"
                  className="mb-5 inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <ArrowLeft className="h-3.5 w-3.5 shrink-0" aria-hidden /> {cs.backToHome ?? 'Case studies'}
                </Link>
                <BreadcrumbNav
                  items={[
                    { name: 'Home', href: '/' },
                    { name: 'Case studies', href: '/case-studies' },
                    { name: caseStudy.title, href: `/case-studies/${slug}` },
                  ]}
                  className="mb-6 border-0 bg-transparent px-0 py-0 text-white/65 [&_span]:text-white/95 [&_a]:text-white/70 [&_a]:hover:text-white"
                />
                {caseStudy.category ? (
                  <span className="mb-3 inline-flex items-center rounded px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] bg-accent text-[hsl(220_47%_10%)]">
                    {caseStudy.category}
                  </span>
                ) : null}
                <h1 className="font-display text-3xl font-bold tracking-[-0.02em] text-white text-balance md:text-4xl lg:text-[2.6rem] leading-[1.15] md:leading-tight max-w-4xl">
                  {caseStudy.title}
                </h1>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 pt-5 text-[13px] text-white/60">
                  {caseStudy.country ? (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 opacity-70 shrink-0" aria-hidden /> {caseStudy.country}
                    </span>
                  ) : null}
                  {caseStudy.date ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 opacity-70 shrink-0" aria-hidden /> {caseStudy.date}
                    </span>
                  ) : null}
                  {caseStudy.readingTime != null ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 opacity-70 shrink-0" aria-hidden /> {caseStudy.readingTime} min read
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <section className="relative overflow-hidden border-b border-border/80 bg-gradient-to-br from-[hsl(var(--navy-deep))] to-[hsl(var(--navy-medium))] px-6 py-14 md:px-10 md:py-[4.25rem]">
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-accent/50 via-accent/25 to-transparent" />
            <div className="container-wide mx-auto max-w-4xl">
              <Link
                to="/case-studies"
                className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white/85"
              >
                <ArrowLeft className="h-3.5 w-3.5 shrink-0" aria-hidden /> {cs.backToHome ?? 'Case studies'}
              </Link>
              <BreadcrumbNav
                items={[
                  { name: 'Home', href: '/' },
                  { name: 'Case studies', href: '/case-studies' },
                  { name: caseStudy.title, href: `/case-studies/${slug}` },
                ]}
                className="mb-8 border-0 bg-transparent px-0 py-0 text-white/65 [&_span]:text-white/95 [&_a]:text-white/70 [&_a]:hover:text-white"
              />
              {caseStudy.category ? (
                <span className="mb-3 inline-flex rounded px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] bg-accent text-[hsl(220_47%_10%)]">
                  {caseStudy.category}
                </span>
              ) : null}
              <h1 className="font-display text-3xl font-bold tracking-tight text-white text-balance md:text-4xl lg:text-[2.6rem] leading-[1.15] md:leading-tight max-w-4xl">
                {caseStudy.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 pt-6 text-[13px] text-white/55">
                {caseStudy.country ? (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 opacity-70 shrink-0" aria-hidden /> {caseStudy.country}
                  </span>
                ) : null}
                {caseStudy.date ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 opacity-70 shrink-0" aria-hidden /> {caseStudy.date}
                  </span>
                ) : null}
                {caseStudy.readingTime != null ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 opacity-70 shrink-0" aria-hidden /> {caseStudy.readingTime} min read
                  </span>
                ) : null}
              </div>
            </div>
          </section>
        )}

        <div className="section-padding pb-24">
          <div className="container-wide mx-auto max-w-4xl">
            <article className="-mt-8 relative z-[1] rounded-3xl border border-border/80 bg-background/95 p-7 shadow-[0_40px_100px_-40px_rgb(15_23_42/_0.2)] ring-1 ring-border/50 backdrop-blur-sm sm:p-10 md:p-12">
              <div className="mb-10 flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <ShareButtons url={canonicalUrl} title={caseStudy.title} contentType="case-study" slug={slug!} />
                {caseStudy.authorName ? (
                  <div className="flex items-center gap-2">
                    {caseStudy.authorImage ? (
                      <img
                        src={optimizeSanityImage(caseStudy.authorImage, 96, 96)}
                        alt={caseStudy.authorName}
                        className="h-9 w-9 rounded-full border border-border object-cover"
                        width={36}
                        height={36}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-[hsl(220_47%_10%)]">
                        {caseStudy.authorName.charAt(0)}
                      </div>
                    )}
                    <span className="text-sm font-medium text-foreground">{caseStudy.authorName}</span>
                  </div>
                ) : null}
                {displayTags.length > 0 ? (
                  <div className="flex w-full basis-full flex-wrap gap-1.5 sm:order-3">
                    {displayTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              {typeof window !== 'undefined' && caseStudy.pdfUrl ? (
                <div className="mb-10">
                  <Suspense fallback={<p className="text-sm text-muted-foreground">{cs.pdfCarouselLoading ?? 'Loading PDF preview…'}</p>}>
                    <PdfCarousel pdfUrl={caseStudy.pdfUrl} />
                  </Suspense>
                </div>
              ) : null}

              {slug === 'gcc-oncology-market' ? <CaseStudyGccOncologyNav /> : null}

              {Array.isArray(caseStudy.tableOfContents) && caseStudy.tableOfContents.length > 0 ? (
                <nav
                  className="mb-10 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted/65 to-muted/25"
                  aria-label="Case study table of contents"
                >
                  <div className="flex items-center gap-2 border-b border-border/80 px-5 py-3.5 bg-background/55">
                    <List className="h-4 w-4 text-accent shrink-0" aria-hidden />
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.09em] text-primary">Contents</span>
                    <span className="ml-auto text-[11px] text-muted-foreground">{caseStudy.tableOfContents!.length} sections</span>
                  </div>
                  <ul className="space-y-0 divide-y divide-border/70 p-5">
                    {caseStudy.tableOfContents!.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.anchor ? `#${item.anchor}` : '#'}
                          className="flex items-start gap-3 py-2.5 text-sm font-medium text-primary transition-colors hover:text-accent-foreground"
                        >
                          <span className="mt-0.5 inline-flex h-6 min-w-[1.5rem] shrink-0 items-center justify-center rounded-md bg-accent/15 text-[11px] font-bold text-primary">
                            {i + 1}
                          </span>
                          <span>{item.heading ?? ''}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ) : null}

              {Array.isArray(caseStudy.executiveSummary) && caseStudy.executiveSummary.length > 0 ? (
                <section className="mb-10 rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.05] via-background to-accent/[0.04] px-6 py-6 lg:px-7 lg:py-7">
                  <h2 className="mb-4 font-display text-lg font-bold text-primary">Executive summary</h2>
                  <div className="prose-body text-[17px] leading-[1.75] text-foreground">
                    <PortableText
                      value={caseStudy.executiveSummary as PortableTextBlock[]}
                      components={portableTextComponents}
                    />
                  </div>
                </section>
              ) : null}

              {caseStudy.excerpt ? (
                <p className="mb-10 text-lg leading-relaxed text-muted-foreground md:text-xl">{caseStudy.excerpt}</p>
              ) : null}

              {caseStudy.body ? (
                <div className="prose prose-lg prose-neutral max-w-none dark:prose-invert">
                  <div
                    className="prose-body text-[17px] leading-[1.82] text-foreground"
                    dangerouslySetInnerHTML={{ __html: sanitizeBodyHtml(caseStudy.body) }}
                  />
                </div>
              ) : null}

              {faqEntities.length > 0 ? (
                <section className="mt-14" aria-label="Case study FAQs">
                  <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-primary">Frequently asked questions</h2>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{faqEntities.length} questions</span>
                  </div>
                  <div className="divide-y divide-border border-y border-border">
                    {faqEntities.map((item, i) => (
                      <details key={i} className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-5 text-left text-[15px] font-semibold text-primary hover:text-accent-foreground [&::-webkit-details-marker]:hidden">
                          <span>{item.question}</span>
                          <svg
                            className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </summary>
                        <div className="pb-5 text-[15px] leading-relaxed text-muted-foreground">{item.answer}</div>
                      </details>
                    ))}
                  </div>
                </section>
              ) : null}

              {caseStudy.ctaSection &&
              (caseStudy.ctaSection.title ||
                caseStudy.ctaSection.description ||
                caseStudy.ctaSection.buttonText ||
                caseStudy.ctaSection.buttonUrl) ? (
                  <aside className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-[hsl(var(--navy-deep))] to-[hsl(var(--navy-medium))] p-8 text-white md:p-10 relative">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-accent/5 blur-2xl" />
                    <div className="relative space-y-4">
                      {caseStudy.ctaSection.title ? (
                        <h2 className="font-display text-2xl font-bold md:text-3xl max-w-xl">{caseStudy.ctaSection.title}</h2>
                      ) : null}
                      {caseStudy.ctaSection.description ? (
                        <p className="max-w-xl text-[15px] leading-relaxed text-white/65">{caseStudy.ctaSection.description}</p>
                      ) : null}
                      {caseStudy.ctaSection.buttonText && caseStudy.ctaSection.buttonUrl ? (
                        <a
                          href={caseStudy.ctaSection.buttonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-bold text-[hsl(220_47%_10%)] shadow-md transition-transform hover:-translate-y-0.5"
                        >
                          {caseStudy.ctaSection.buttonText}
                          <ArrowUpRight className="h-4 w-4" aria-hidden />
                        </a>
                      ) : null}
                    </div>
                  </aside>
                ) : null}

              <div className="mt-14 rounded-2xl border border-dashed border-border/90 bg-muted/15 p-6 text-center md:p-8">
                <p className="mb-5 text-muted-foreground text-sm md:text-[15px] leading-relaxed max-w-xl mx-auto">
                  Prefer a briefing call on this mandate or oncology fieldwork logistics for the GCC? Our team aligns design to SFDA-era evidence needs and payer expectations.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-[hsl(220_47%_10%)]">
                    Book a GCC oncology consult
                  </Link>
                  <Link to="/insights" className="text-sm font-semibold text-primary underline underline-offset-2 hover:no-underline">
                    View latest insights briefs
                  </Link>
                </div>
              </div>

              {caseStudy.authorName ? (
                <footer className="mt-12 flex gap-5 rounded-2xl border border-border bg-card/40 p-5 md:p-6">
                  {caseStudy.authorImage ? (
                    <img
                      src={optimizeSanityImage(caseStudy.authorImage, 128, 128)}
                      alt={caseStudy.authorName}
                      width={72}
                      height={72}
                      className="h-[4.25rem] w-[4.25rem] shrink-0 rounded-xl border border-border object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center rounded-xl bg-accent font-display text-xl font-bold text-[hsl(220_47%_10%)]">
                      {caseStudy.authorName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h2 className="font-display font-semibold text-foreground">{caseStudy.authorName}</h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">Specialist advisor on GCC pharmaceutical and oncology market programmes at BioNixus.</p>
                  </div>
                </footer>
              ) : null}
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
