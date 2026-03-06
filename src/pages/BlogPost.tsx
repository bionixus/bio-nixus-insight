import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { Helmet } from 'react-helmet-async';
import { fetchSanityPostBySlug } from '@/lib/sanity-blog';
import { optimizeSanityImage } from '@/lib/image-utils';
import { buildSeoDescription, normalizeSeoTitle } from '@/lib/seo-meta';
import RelatedPosts from '@/components/RelatedPosts';
import SchemaMarkup from '@/components/SchemaMarkup';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { getOgLocale, getOgLocaleAlternates } from '@/lib/seo';
import { blogRecoveryPaths } from '@/lib/internalLinkRecovery';

/** Helper to convert PortableText block to a URL-friendly slug */
function slugifyHeading(value: any): string {
  if (!value || !Array.isArray(value.children)) return '';
  const text = value.children.map((child: { text?: string }) => child.text || '').join('');
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function formatInsightTopicFromPath(path: string): string {
  const acronymMap: Record<string, string> = {
    ai: 'AI',
    cms: 'CMS',
    doh: 'DOH',
    dha: 'DHA',
    emea: 'EMEA',
    fda: 'FDA',
    gcc: 'GCC',
    gdpr: 'GDPR',
    gcp: 'GCP',
    hcv: 'HCV',
    hipaa: 'HIPAA',
    hta: 'HTA',
    ich: 'ICH',
    kcc: 'KCC',
    kfda: 'KFDA',
    kims: 'KIMS',
    kol: 'KOL',
    ksa: 'KSA',
    mena: 'MENA',
    moh: 'MOH',
    mohap: 'MOHAP',
    nice: 'NICE',
    nupco: 'NUPCO',
    sfda: 'SFDA',
    uae: 'UAE',
    uk: 'UK',
    us: 'US',
  };

  const slug = path.startsWith('/blog/') ? path.slice('/blog/'.length) : path;
  const decoded = decodeURIComponent(slug);
  const words = decoded
    .replace(/[-_]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) return path;

  return words
    .map((word) => {
      // Keep non-latin words untouched (for Arabic and others)
      if (!/[a-zA-Z]/.test(word)) return word;
      const lower = word.toLowerCase();
      if (acronymMap[lower]) return acronymMap[lower];
      if (/^[A-Z0-9]+$/.test(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

/** Detect if string looks like HTML (contains tags). */
function isHtmlString(s: string): boolean {
  const t = s.trim();
  return t.length > 0 && /<[a-z\d/]/i.test(t);
}

/** Extract plain text from portable text blocks (for fallback HTML detection). */
function portableTextToPlainString(blocks: PortableTextBlock[]): string {
  return (blocks || [])
    .map((block) => {
      if (block._type !== 'block' || !('children' in block) || !Array.isArray(block.children)) {
        return ''
      }
      return (block.children as { _type?: string; text?: string }[])
        .map((c) => (c && c._type === 'span' && typeof c.text === 'string' ? c.text : ''))
        .join('')
    })
    .join('\n')
}

/** Render string body as HTML (sanitized). Safe for plain text too – DOMPurify escapes it. */
function renderStringBody(body: string) {
  const sanitized = sanitizeBodyHtml(body);
  return (
    <div
      className="prose-body text-foreground leading-relaxed"
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
}

/** Fallback HTML body for UAE guide when Sanity does not return body/bodyHtml */
const UAE_GUIDE_SLUG = 'healthcare-market-research-uae-guide-2025'
const UAE_GUIDE_BODY_HTML = `<p>The United Arab Emirates has emerged as the healthcare innovation hub of the Middle East, with government spending exceeding AED 27 billion annually. For pharmaceutical companies seeking market entry or expansion in the GCC region, understanding healthcare market research in UAE is essential.</p>

<h2 id="uae-healthcare-landscape">Understanding the UAE Healthcare Landscape</h2>

<p>The UAE healthcare market reached USD 22 billion in 2024, with projections to hit USD 26.8 billion by 2030. The pharmaceutical segment accounts for USD 4.2 billion, growing at 5.1% annually. Three main regulatory bodies govern healthcare across the Emirates: <strong>MOHAP</strong> (Ministry of Health and Prevention), <strong>DHA</strong> (Dubai Health Authority), and <strong>DOH</strong> (Department of Health – Abu Dhabi). Each has distinct requirements for market research and clinical engagement.</p>

<h2 id="why-market-research-matters">Why Healthcare Market Research Matters</h2>

<p>Effective market research enables pharmaceutical companies to:</p>
<ul>
<li>Assess market size and growth trajectories across UAE and GCC</li>
<li>Understand physician prescribing behaviour and treatment pathways</li>
<li>Identify key opinion leaders (KOLs) and stakeholder networks</li>
<li>Support market access, pricing, and reimbursement strategies</li>
<li>Design clinical trials and real-world evidence programmes</li>
</ul>

<p>Without robust local insights, market entry and launch strategies risk misalignment with regional practices and regulations.</p>

<h2 id="research-methodologies">Key Research Methodologies</h2>

<p>Common approaches used in UAE and GCC healthcare market research include:</p>
<ul>
<li><strong>Quantitative physician surveys</strong> – Online and telephone surveys with defined sample sizes (e.g. n=50–80) across specialties and emirates</li>
<li><strong>Qualitative in-depth interviews (IDIs)</strong> – One-to-one interviews with KOLs and treating physicians</li>
<li><strong>Focus groups</strong> – Moderated discussions with healthcare professionals</li>
<li><strong>Secondary data and desk research</strong> – Analysis of prescribing data, epidemiology, and regulatory filings</li>
<li><strong>Advisory boards and workshops</strong> – Structured sessions with payers, clinicians, and policymakers</li>
</ul>

<p>Research is typically conducted in <strong>English and Arabic</strong>; 62% of UAE physicians prefer Arabic-language clinical materials for nuanced discussions, so bilingual design improves response quality.</p>

<h2 id="best-practices">Best Practices &amp; Recommendations</h2>

<p>To maximise the value of healthcare market research in the UAE:</p>
<ul>
<li>Engage local partners or consultants with GCC regulatory and cultural expertise</li>
<li>Plan for 8–12 weeks from project initiation to deliverables, including IRB/ethics approvals where required</li>
<li>Balance English and Arabic in materials and interviews where appropriate</li>
<li>Ensure sample design covers key emirates and public vs private settings</li>
<li>Align deliverables with market access, brand, and medical affairs teams</li>
</ul>

<p>BioNixus supports pharmaceutical and life sciences clients with end-to-end healthcare market research across UAE, Saudi Arabia, Egypt, and the wider MENA region—from study design and fieldwork to analysis and strategic recommendations.</p>`

/** Sanitize HTML for blog body: allow common content tags, id/class/style for headings and links */
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

import { isSanityConfigured } from '@/lib/sanity';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Clock, Calendar, MapPin, BookOpen, ChevronRight, Lightbulb, ArrowRight, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ShareButtons from '@/components/ShareButtons';
import type { BlogPost as BlogPostType } from '@/types/blog';

/** Reading progress bar – fixed at top of viewport */
function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const el = document.documentElement;
    const scrollTop = el.scrollTop || document.body.scrollTop;
    const scrollHeight = el.scrollHeight - el.clientHeight;
    if (scrollHeight > 0) {
      setProgress(Math.min(100, (scrollTop / scrollHeight) * 100));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary via-primary/80 to-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/** Portable text block renderers – clean, interactive design */
const portableTextComponents = {
  block: {
    h2: ({ children, value }: { children?: React.ReactNode, value?: any }) => (
      <h2
        id={slugifyHeading(value)}
        className="group text-2xl font-display font-bold mt-12 mb-5 text-foreground relative scroll-mt-6 flex items-center gap-3"
      >
        <span className="inline-block w-1 h-7 rounded-full bg-gradient-to-b from-primary to-accent shrink-0" />
        <span>{children}</span>
        <a href={`#${slugifyHeading(value)}`} className="opacity-0 group-hover:opacity-50 transition-opacity text-primary ml-1" aria-label="Link to section">
          #
        </a>
      </h2>
    ),
    h3: ({ children, value }: { children?: React.ReactNode, value?: any }) => (
      <h3
        id={slugifyHeading(value)}
        className="text-lg font-display font-semibold text-foreground mt-8 mb-3 scroll-mt-6"
      >
        {children}
      </h3>
    ),
    h4: ({ children, value }: { children?: React.ReactNode, value?: any }) => (
      <h4
        id={slugifyHeading(value)}
        className="text-base font-display font-semibold text-primary/90 mt-6 mb-3 scroll-mt-6"
      >
        {children}
      </h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="relative my-6 pl-5 pr-4 py-4 rounded-r-lg border-l-4 border-primary bg-primary/[0.03] text-muted-foreground italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-5 text-foreground leading-[1.8] text-[0.95rem]">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="my-6 space-y-3 pl-0 list-none">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="my-6 space-y-3 pl-0 list-none counter-reset-list"
        style={{ counterReset: 'list-counter' }}
      >
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-3 text-foreground leading-[1.8] text-[0.95rem] pl-1">
        <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li
        className="flex items-start gap-3 text-foreground leading-[1.8] text-[0.95rem] pl-1"
        style={{ counterIncrement: 'list-counter' }}
      >
        <span
          className="mt-[0.35rem] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold"
          aria-hidden="true"
        >
          <span className="before-content" style={{ content: 'counter(list-counter)' }} />
        </span>
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="text-muted-foreground">{children}</em>
    ),
    link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => (
      <a
        href={value?.href}
        className="text-primary font-medium underline decoration-primary/30 underline-offset-2 hover:decoration-primary/80 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
}

function getBodyToRender(
  post: BlogPostType,
  slug: string | undefined
): string | PortableTextBlock[] | null {
  const hasBody =
    post.body != null &&
    post.body !== '' &&
    !(Array.isArray(post.body) && post.body.length === 0)
  if (hasBody) return post.body as string | PortableTextBlock[]
  if (slug === UAE_GUIDE_SLUG) return UAE_GUIDE_BODY_HTML
  return null
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();

  const { data: sanityPost, isLoading, isError } = useQuery({
    queryKey: ['sanity-post', slug],
    queryFn: () => fetchSanityPostBySlug(slug!),
    enabled: Boolean(slug) && isSanityConfigured(),
  });

  // Resolve fallback post (e.g. fallback-0, fallback-1) from i18n
  const fallbackPost: BlogPostType | null =
    slug?.startsWith('fallback-') && t.blog.items
      ? (() => {
        const i = parseInt(slug.replace('fallback-', ''), 10);
        const item = t.blog.items[i];
        if (!item) return null;
        return {
          id: `fallback-${i}`,
          slug: `fallback-${i}`,
          title: item.title,
          excerpt: item.excerpt,
          date: item.date,
          category: item.category,
          country: item.country,
          coverImage: 'coverImage' in item && typeof item.coverImage === 'string' ? item.coverImage : undefined,
        };
      })()
      : null;

  const post = sanityPost ?? fallbackPost;

  // Set document meta tags for social sharing (client-side, for SPA navigation)
  useEffect(() => {
    if (!post) return;

    const title = post.ogTitle || post.metaTitle || post.title;
    const description = post.ogDescription || post.metaDescription || post.excerpt || '';
    const rawImage = post.ogImage || post.coverImage;
    const image = rawImage
      ? rawImage.includes('cdn.sanity.io')
        ? `${rawImage}${rawImage.includes('?') ? '&' : '?'}w=1200&h=630&fit=crop&auto=format`
        : rawImage
      : 'https://bionixus.com/og-image.png';
    const pageUrl = `https://bionixus.com/blog/${slug}`;

    document.title = `${title} | BioNixus`;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:url', pageUrl);
    setMeta('property', 'og:type', 'article');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);
  }, [post, slug]);

  if (!slug) {
    return (
      <>
        <Helmet>
          <title>Article Not Found | BioNixus</title>
          <meta name="prerender-status" content="404" />
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="min-h-screen bg-background" data-route-status="404">
          <Navbar />
          <main className="section-padding container-wide">
            <p className="text-muted-foreground">Invalid article.</p>
            <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to articles
            </Link>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  if (isLoading && !fallbackPost) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="section-padding container-wide">
          <p className="text-muted-foreground">Loading article...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post && (isError || !sanityPost)) {
    return (
      <>
        <Helmet>
          <title>Article Not Found | BioNixus</title>
          <meta name="prerender-status" content="404" />
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="min-h-screen bg-background" data-route-status="404">
          <Navbar />
          <main className="section-padding container-wide">
            <p className="text-muted-foreground">Article not found.</p>
            <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to articles
            </Link>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const pageUrl = `https://www.bionixus.com/blog/${slug}`;
  const bodySourceForMeta = typeof post.body === 'string' ? post.body : post.excerpt || post.title;
  const metaTitle = normalizeSeoTitle(post.seoMetaTitle || post.title, 'BioNixus');
  const metaDescription = buildSeoDescription({
    preferred: post.seoMetaDescription,
    bodySource: bodySourceForMeta,
    fallback: post.excerpt || post.title,
  });
  const socialTitle = post.ogTitle || metaTitle;
  const socialDescription = post.ogDescription || metaDescription;
  const socialImage = post.ogImage || post.coverImage;

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
      <SchemaMarkup
        pageType="blog"
        pageUrl={pageUrl}
        language={language}
        headline={post.title}
        description={metaDescription}
        imageUrl={socialImage}
        authorName={post.authorName || 'BioNixus Research Team'}
        publishedAt={post.publishedAtIso}
        modifiedAt={post.updatedAtIso || post.publishedAtIso}
        breadcrumb={[
          { name: 'Home', item: 'https://www.bionixus.com/' },
          { name: 'Blog', item: 'https://www.bionixus.com/blog' },
          { name: post.title, item: pageUrl },
        ]}
        faqItems={
          Array.isArray(post.faq)
            ? post.faq
              .filter((item) => Boolean(item.question && item.answer))
              .map((item) => ({ question: item.question!, answer: item.answer! }))
            : []
        }
      />
      <Helmet>
        {/* Dynamic meta tags for this specific blog post */}
        <title>{normalizeSeoTitle(`${metaTitle} | BioNixus`, 'BioNixus')}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BioNixus" />
        <meta property="og:title" content={socialTitle} />
        <meta property="og:description" content={socialDescription} />
        <meta property="og:url" content={pageUrl} />
        {socialImage && <meta property="og:image" content={socialImage} />}
        {socialImage && <meta property="og:image:width" content="1200" />}
        {socialImage && <meta property="og:image:height" content="630" />}
        {socialImage && <meta property="og:image:alt" content={post.title} />}
        {post.date && <meta property="article:published_time" content={post.date} />}
        {post.category && <meta property="article:section" content={post.category} />}
        {post.authorName && <meta property="article:author" content={post.authorName} />}
        {Array.isArray(post.tags) && post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BioNixus" />
        <meta name="twitter:title" content={socialTitle} />
        <meta name="twitter:description" content={socialDescription} />
        {socialImage && <meta name="twitter:image" content={socialImage} />}

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />

      </Helmet>
      <ReadingProgressBar />
      <Navbar />
      <main className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" /> Back to articles
          </Link>

          <article>
            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {post.category && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full tracking-wide uppercase">
                  {post.category}
                </span>
              )}
              {post.country && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                  <MapPin className="w-3 h-3" />
                  {post.country}
                </span>
              )}
              {post.date && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
              )}
              {post.readingTime != null && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                  <Clock className="w-3 h-3" />
                  {post.readingTime} min read
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-[2.5rem] md:leading-tight font-display font-bold text-foreground mb-5 tracking-tight">
              {post.title}
            </h1>

            {/* Tags */}
            {Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-primary/[0.06] text-primary/80 text-xs font-medium rounded-md border border-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author row + share */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-border">
              {post.authorName && (
                <div className="flex items-center gap-3">
                  {post.authorImage ? (
                    <img
                      src={optimizeSanityImage(post.authorImage, 64, 64)}
                      alt={post.authorName}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/10"
                      loading="lazy"
                      decoding="async"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                      {post.authorName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <span className="text-sm font-semibold text-foreground block">{post.authorName}</span>
                    {post.date && <span className="text-xs text-muted-foreground">{post.date}</span>}
                  </div>
                </div>
              )}
              <ShareButtons
                url={pageUrl}
                title={post.title}
                contentType="blog"
                slug={slug!}
              />
            </div>

            {/* Cover image */}
            {post.coverImage && (
              <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-muted shadow-sm ring-1 ring-border/50">
                <img
                  src={optimizeSanityImage(post.coverImage, 768, 480)}
                  alt={post.title || 'Article cover image'}
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={768}
                  height={480}
                />
              </div>
            )}

            {/* Table of contents */}
            {Array.isArray(post.tableOfContents) && post.tableOfContents.length > 0 && (
              <nav className="mb-10 rounded-xl bg-gradient-to-b from-muted/60 to-muted/30 border border-border/60 overflow-hidden">
                <div className="flex items-center gap-2 px-5 pt-4 pb-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <h2 className="text-sm font-semibold text-foreground tracking-wide uppercase">Contents</h2>
                </div>
                <ul className="px-5 pb-4 space-y-0.5">
                  {post.tableOfContents.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.anchor ? `#${item.anchor}` : undefined}
                        className="group flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/[0.04] px-2 -mx-2"
                      >
                        <span className="text-xs font-mono text-primary/40 group-hover:text-primary/70 w-5 text-right shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{item.heading ?? ''}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* Executive summary */}
            {post.executiveSummary && (
              Array.isArray(post.executiveSummary) ? post.executiveSummary.length > 0 : typeof post.executiveSummary === 'string' && (post.executiveSummary as string).trim()
            ) && (
                <section className="mb-10 rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.04] to-transparent p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-accent" />
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-display font-bold text-foreground">
                      Executive Summary
                    </h2>
                  </div>
                  <div className="prose-body text-foreground leading-relaxed text-[0.95rem]">
                    {typeof post.executiveSummary === 'string' ? (
                      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.executiveSummary as string) }} />
                    ) : (
                      <PortableText
                        value={post.executiveSummary as PortableTextBlock[]}
                        components={portableTextComponents}
                      />
                    )}
                  </div>
                </section>
              )}

            {/* Article body */}
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {(() => {
                const body = getBodyToRender(post, slug)
                if (typeof body === 'string') return renderStringBody(body)
                if (Array.isArray(body)) {
                  const blocks = body as PortableTextBlock[]
                  const asText = portableTextToPlainString(blocks)
                  if (asText.trim() && isHtmlString(asText)) return renderStringBody(asText)
                  return (
                    <div className="prose-body text-foreground leading-relaxed">
                      <PortableText value={blocks} components={portableTextComponents} />
                    </div>
                  )
                }
                return (
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {post.excerpt}
                  </p>
                )
              })()}
            </div>

            {/* Related research links */}
            <section className="mt-12 rounded-xl border border-border/60 bg-gradient-to-br from-muted/40 to-background p-6">
              <h2 className="text-lg font-display font-bold text-foreground mb-2">
                Explore related healthcare market research
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                For deeper regional insight, explore our healthcare market research framework and country coverage.
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {[
                  { to: '/healthcare-market-research', label: 'EMEA healthcare market research hub' },
                  { to: '/healthcare-market-research/saudi-arabia', label: 'Pharmaceutical market research in Saudi Arabia' },
                  { to: '/healthcare-market-research/uae', label: 'Healthcare market research in the UAE' },
                  { to: '/healthcare-market-research/therapy/oncology', label: 'Oncology market research in MENA and Europe' },
                ].map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="group flex items-center gap-2 px-4 py-3 rounded-lg border border-border bg-background text-sm font-medium hover:border-primary/30 hover:bg-primary/[0.03] transition-all"
                  >
                    <span className="flex-1">{label}</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </section>

            {/* More insight pages */}
            <section className="mt-6 rounded-xl border border-border/60 bg-card p-6">
              <h2 className="text-lg font-display font-bold text-foreground mb-4">
                More healthcare insight pages
              </h2>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                {blogRecoveryPaths.slice(0, 12).map((path) => (
                  <Link
                    key={path}
                    to={path}
                    className="group flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 text-primary/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    <span className="break-words">{formatInsightTopicFromPath(path)}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* FAQ section */}
            {Array.isArray(post.faq) && post.faq.length > 0 && (
              <section className="mt-12" aria-label="FAQ">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Frequently Asked Questions
                  </h2>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {post.faq.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="border border-border/60 rounded-lg px-5 data-[state=open]:bg-muted/30 data-[state=open]:border-primary/20 transition-colors overflow-hidden"
                    >
                      <AccordionTrigger className="text-left text-[0.95rem] font-medium hover:no-underline hover:text-primary py-4">
                        {item.question || 'Question'}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-[0.9rem] leading-relaxed pb-5">
                        {item.answer || ''}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}

            {/* CTA section */}
            {post.ctaSection &&
              (post.ctaSection.title ||
                post.ctaSection.description ||
                post.ctaSection.buttonText ||
                post.ctaSection.buttonUrl) && (
                <Card className="mt-12 border-0 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.15),transparent_60%)]" />
                  <CardHeader className="relative">
                    {post.ctaSection.title && (
                      <CardTitle className="text-xl text-primary-foreground">{post.ctaSection.title}</CardTitle>
                    )}
                    {post.ctaSection.description && (
                      <CardDescription className="text-base mt-1 text-primary-foreground/80">
                        {post.ctaSection.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                  {post.ctaSection.buttonText && post.ctaSection.buttonUrl && (
                    <CardContent className="relative">
                      <Button asChild variant="secondary" size="lg" className="group font-semibold">
                        <a
                          href={post.ctaSection!.buttonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {post.ctaSection!.buttonText}
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                        </a>
                      </Button>
                    </CardContent>
                  )}
                </Card>
              )}
          </article>

          {/* Related posts + prev/next navigation */}
          <RelatedPosts
            currentSlug={slug!}
            category={post.category}
            date={post.date}
            country={post.country}
            tags={post.tags}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
