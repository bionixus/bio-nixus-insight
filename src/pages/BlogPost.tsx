import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { sanitizeBodyHtml } from '@/lib/sanitize-body-html';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { Helmet } from 'react-helmet-async';
import { fetchSanityPostBySlug, type RelatedPostsData } from '@/lib/sanity-blog';
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

/** Render string body as HTML (sanitized). Plain text is escaped by the sanitizer. */
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

import { isSanityConfigured } from '@/lib/sanity';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInitialData } from '@/contexts/InitialDataContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, BarChart3, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';
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

const GCC_PHARMA_2026_SLUG = 'gcc-pharmaceuticals-market-2026';
const AI_VS_HUMAN_2026_SLUG = 'ai-vs-human-insight-validating-quantitative-data-2026-pharma-research';
const CHINA_HEALTHCARE_2026_SLUG = 'healthcare-overview-china-market-2026';
const CHINA_HEALTHCARE_2026_META_DESCRIPTION =
  '深度解析中国医疗健康市场2026关键趋势：医保支付改革、创新药与生物药商业化、医院与基层诊疗结构变化、AI医疗与数字化转型落地路径，以及老龄化驱动的长期需求。为制药企业、投资机构与行业决策者提供可执行的市场洞察与战略参考。';
const AI_VS_HUMAN_EXEC_SUMMARY_TEXT =
  'In 2026, winning pharmaceutical insight models combine AI speed with human judgment. AI should process scale, detect anomalies, and surface patterns; expert teams should validate context, challenge assumptions, and prioritize strategic action. The executive standard is simple: AI-first analysis with mandatory human decision checkpoints. This reduces risk, improves decision quality, and accelerates launch, market access, and growth execution.';

function PremiumGcc2026Enhancement() {
  const kpiCards = [
    { label: 'Estimated GCC Pharma Market', value: '$38.4B', note: '2026 directional estimate', icon: TrendingUp },
    { label: 'Average Growth Range', value: '7-10%', note: 'annual momentum across GCC', icon: BarChart3 },
    { label: 'Policy Pressure Points', value: '4', note: 'registration, pricing, access, supply', icon: ShieldCheck },
  ];

  const countryBars = [
    { country: 'Saudi Arabia', width: 96, share: '42%' },
    { country: 'UAE', width: 78, share: '24%' },
    { country: 'Kuwait', width: 52, share: '11%' },
    { country: 'Qatar', width: 44, share: '9%' },
    { country: 'Bahrain + Oman', width: 34, share: '14%' },
  ];

  return (
    <section className="mb-10 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-5 md:p-7">
      <h2 className="text-2xl font-display font-semibold text-foreground mb-2">
        GCC Pharma 2026 dashboard
      </h2>
      <p className="text-sm md:text-base text-muted-foreground mb-6">
        Quick visual brief for strategy teams who need signal density, not long walls of text.
      </p>

      <div className="grid gap-3 md:grid-cols-3 mb-6">
        {kpiCards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.label} className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{card.label}</p>
                <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
              </div>
              <p className="text-2xl font-display font-semibold text-foreground mt-2">{card.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{card.note}</p>
            </article>
          );
        })}
      </div>

      <div className="grid gap-5 lg:grid-cols-2 mb-6">
        <article className="rounded-xl border border-border bg-card p-4">
          <h3 className="text-base font-semibold text-foreground mb-3">
            Premium trend view (2023-2026 index)
          </h3>
          <div className="rounded-lg border border-border bg-background p-3">
            <svg viewBox="0 0 520 220" role="img" aria-label="GCC pharmaceutical market trend index chart" className="w-full h-auto">
              <defs>
                <linearGradient id="gccTrendFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary) / 0.45)" />
                  <stop offset="100%" stopColor="hsl(var(--primary) / 0.05)" />
                </linearGradient>
              </defs>
              <line x1="40" y1="20" x2="40" y2="185" stroke="hsl(var(--muted-foreground) / 0.35)" strokeWidth="1" />
              <line x1="40" y1="185" x2="495" y2="185" stroke="hsl(var(--muted-foreground) / 0.35)" strokeWidth="1" />
              <path d="M40 165 L160 150 L280 126 L400 92 L495 62 L495 185 L40 185 Z" fill="url(#gccTrendFill)" />
              <path d="M40 165 L160 150 L280 126 L400 92 L495 62" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" />
              <circle cx="40" cy="165" r="4" fill="hsl(var(--primary))" />
              <circle cx="160" cy="150" r="4" fill="hsl(var(--primary))" />
              <circle cx="280" cy="126" r="4" fill="hsl(var(--primary))" />
              <circle cx="400" cy="92" r="4" fill="hsl(var(--primary))" />
              <circle cx="495" cy="62" r="4" fill="hsl(var(--primary))" />
              <text x="34" y="204" fontSize="12" fill="hsl(var(--muted-foreground))">2023</text>
              <text x="154" y="204" fontSize="12" fill="hsl(var(--muted-foreground))">2024</text>
              <text x="274" y="204" fontSize="12" fill="hsl(var(--muted-foreground))">2025</text>
              <text x="394" y="204" fontSize="12" fill="hsl(var(--muted-foreground))">2026</text>
            </svg>
          </div>
        </article>

        <article className="rounded-xl border border-border bg-card p-4">
          <h3 className="text-base font-semibold text-foreground mb-3">
            Country momentum split
          </h3>
          <ul className="space-y-3">
            {countryBars.map((item) => (
              <li key={item.country}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-foreground">{item.country}</span>
                  <span className="text-muted-foreground">{item.share}</span>
                </div>
                <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${item.width}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="grid gap-3 md:grid-cols-2 mb-6">
        <img
          src="/images/quant-hcp-survey-executive.png"
          alt="Executive healthcare survey dashboard for GCC pharmaceutical market strategy"
          className="w-full h-52 object-cover rounded-xl border border-border"
          loading="lazy"
          decoding="async"
          width={640}
          height={320}
        />
        <img
          src="/images/quant-ai-validation-lab.png"
          alt="AI assisted validation workflow image for pharmaceutical data quality in GCC markets"
          className="w-full h-52 object-cover rounded-xl border border-border"
          loading="lazy"
          decoding="async"
          width={640}
          height={320}
        />
      </div>

      <article className="rounded-xl border border-primary/30 bg-primary/5 p-4">
        <h3 className="text-base font-semibold text-foreground mb-3">Action checklist for leadership teams</h3>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" aria-hidden="true" />
            Build a 90-day country-priority sequence (Saudi -&gt; UAE -&gt; Kuwait/Qatar) with budget gates.
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" aria-hidden="true" />
            Localize evidence strategy early for HTA and payer conversations, not after registration.
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" aria-hidden="true" />
            Track competitor formulary movement monthly to avoid late-cycle pricing surprises.
          </li>
        </ul>
        <div className="mt-4 text-sm">
          <Link to="/gcc-market-access-guide" className="text-primary font-medium hover:underline">
            See the full GCC market access guide
          </Link>
        </div>
      </article>
    </section>
  );
}

/** Portable text block renderers – match McKinsey prose-body styles */
const portableTextComponents = {
  block: {
    h2: ({ children, value }: { children?: React.ReactNode, value?: any }) => (
      <h2 id={slugifyHeading(value)} className="text-xl font-display font-semibold mt-10 mb-4 pb-0 border-l-4 border-primary pl-4 text-primary">
        {children}
      </h2>
    ),
    h3: ({ children, value }: { children?: React.ReactNode, value?: any }) => (
      <h3 id={slugifyHeading(value)} className="text-lg font-display font-semibold text-foreground mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children, value }: { children?: React.ReactNode, value?: any }) => (
      <h4 id={slugifyHeading(value)} className="text-base font-display font-semibold text-primary mt-0 mb-3">
        {children}
      </h4>
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
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc pl-6 my-5 space-y-2">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal pl-6 my-5 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-foreground">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-foreground">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em>{children}</em>
    ),
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
}

/** Use in-app navigation for same-site CTAs; keep external URLs as plain anchors. */
function resolveCtaHref(buttonUrl: string): { kind: 'internal'; to: string } | { kind: 'external'; href: string } {
  const raw = (buttonUrl || '').trim();
  if (!raw) return { kind: 'external', href: '#' };
  if (raw.startsWith('/')) return { kind: 'internal', to: raw };
  try {
    const u = new URL(raw);
    const host = u.hostname.replace(/^www\./i, '');
    if (host === 'bionixus.com') {
      const path = `${u.pathname}${u.search}${u.hash}` || '/';
      return { kind: 'internal', to: path };
    }
  } catch {
    /* not a valid absolute URL */
  }
  return { kind: 'external', href: raw };
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

function getExecutiveSummaryToRender(
  post: BlogPostType,
  slug: string | undefined,
): string | PortableTextBlock[] | null {
  if (slug === AI_VS_HUMAN_2026_SLUG) return AI_VS_HUMAN_EXEC_SUMMARY_TEXT;
  const summary = post.executiveSummary;
  if (Array.isArray(summary)) return summary.length > 0 ? summary : null;
  if (typeof summary === 'string') return summary.trim() ? summary : null;
  return null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const { data: routeData } = useInitialData();
  const isGccPharma2026 = slug === GCC_PHARMA_2026_SLUG;

  const ssrBlogBundle =
    Boolean(slug) &&
    routeData.pageType === 'blog-post' &&
    routeData.blogSlug === slug;

  const { data: sanityPost, isLoading, isError } = useQuery({
    queryKey: ['sanity-post', slug],
    queryFn: () => fetchSanityPostBySlug(slug!),
    enabled: Boolean(slug) && (isSanityConfigured() || ssrBlogBundle),
    initialData: ssrBlogBundle ? (routeData.blogPost as BlogPostType | null) : undefined,
  });

  const initialRelated: RelatedPostsData | undefined =
    ssrBlogBundle && routeData.relatedPosts
      ? (routeData.relatedPosts as RelatedPostsData)
      : undefined;

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
  const executiveSummary = post ? getExecutiveSummaryToRender(post, slug) : null;

  if (!slug) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="section-padding container-wide">
          <p className="text-muted-foreground">Invalid article.</p>
          <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to articles
          </Link>
        </main>
        <Footer />
      </div>
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
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="section-padding container-wide">
          <p className="text-muted-foreground">Article not found.</p>
          <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to articles
          </Link>
        </main>
        <Footer />
      </div>
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
  const finalMetaDescription = slug === CHINA_HEALTHCARE_2026_SLUG
    ? CHINA_HEALTHCARE_2026_META_DESCRIPTION
    : metaDescription;
  const socialTitle = post.ogTitle || metaTitle;
  const socialDescription = post.ogDescription || finalMetaDescription;
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
        description={finalMetaDescription}
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
        <meta name="description" content={finalMetaDescription} />
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
      <Navbar />
      <main className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to articles
          </Link>

          <article>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {post.category && (
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              )}
              {post.country && (
                <span className="text-sm text-muted-foreground">{post.country}</span>
              )}
              {post.date && (
                <span className="text-sm text-muted-foreground">{post.date}</span>
              )}
              {post.readingTime != null && (
                <span className="text-sm text-muted-foreground">
                  {post.readingTime} min read
                </span>
              )}
              {Array.isArray(post.tags) && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
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

            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              {post.title}
            </h1>

            {/* Author row */}
            {post.authorName && (
              <div className="flex items-center gap-2 mb-4">
                {post.authorImage && (
                  <img
                    src={optimizeSanityImage(post.authorImage, 64, 64)}
                    alt={post.authorName}
                    className="w-8 h-8 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={32}
                    height={32}
                  />
                )}
                <span className="text-sm font-medium text-foreground">{post.authorName}</span>
              </div>
            )}

            <div className="mb-6">
              <ShareButtons
                url={pageUrl}
                title={post.title}
                contentType="blog"
                slug={slug!}
              />
            </div>

            {post.coverImage && (
              <div className="aspect-[16/10] rounded-xl overflow-hidden mb-8 bg-muted">
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

            {isGccPharma2026 && <PremiumGcc2026Enhancement />}

            {Array.isArray(post.tableOfContents) && post.tableOfContents.length > 0 && (
              <nav className="mb-8 p-4 rounded-lg bg-muted/50 border border-border">
                <h2 className="text-sm font-semibold text-foreground mb-3">On this page</h2>
                <ul className="space-y-1.5 text-sm">
                  {post.tableOfContents.map((item, i) => (
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

            {executiveSummary && (
                <section className="mb-8 p-5 rounded-lg border border-primary/20 bg-primary/5">
                  <h2 className="text-lg font-display font-semibold text-primary mb-3">
                    Executive summary
                  </h2>
                  <div className="prose-body text-foreground leading-relaxed">
                    {typeof executiveSummary === 'string' ? (
                      <div dangerouslySetInnerHTML={{ __html: sanitizeBodyHtml(executiveSummary) }} />
                    ) : (
                      <PortableText
                        value={executiveSummary as PortableTextBlock[]}
                        components={portableTextComponents}
                      />
                    )}
                  </div>
                </section>
              )}

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

            <section className="mt-10 rounded-xl border border-border bg-muted/30 p-5">
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                Explore related healthcare market research pages
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                For deeper regional insight, explore our healthcare market research framework and country coverage.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  to="/healthcare-market-research"
                  className="px-3 py-2 rounded-md border border-border bg-background text-sm hover:border-primary/40 transition-colors"
                >
                  EMEA healthcare market research hub
                </Link>
                <Link
                  to="/healthcare-market-research/saudi-arabia"
                  className="px-3 py-2 rounded-md border border-border bg-background text-sm hover:border-primary/40 transition-colors"
                >
                  pharmaceutical market research in Saudi Arabia
                </Link>
                <Link
                  to="/healthcare-market-research/uae"
                  className="px-3 py-2 rounded-md border border-border bg-background text-sm hover:border-primary/40 transition-colors"
                >
                  healthcare market research in the UAE
                </Link>
                <Link
                  to="/healthcare-market-research/therapy/oncology"
                  className="px-3 py-2 rounded-md border border-border bg-background text-sm hover:border-primary/40 transition-colors"
                >
                  oncology market research in MENA and Europe
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl border border-border bg-card p-5">
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                More healthcare insight pages
              </h2>
              <div className="grid md:grid-cols-2 gap-2">
                {blogRecoveryPaths.slice(0, 12).map((path) => (
                  <Link key={path} to={path} className="text-primary hover:underline break-all text-sm">
                    {formatInsightTopicFromPath(path)}
                  </Link>
                ))}
              </div>
            </section>

            {Array.isArray(post.faq) && post.faq.length > 0 && (
              <section className="mt-12" aria-label="FAQ">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Frequently asked questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {post.faq.map((item, i) => (
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

            {post.ctaSection &&
              (post.ctaSection.title ||
                post.ctaSection.description ||
                post.ctaSection.buttonText ||
                post.ctaSection.buttonUrl) && (
                <Card className="mt-12 border-primary/20 bg-primary/5">
                  <CardHeader>
                    {post.ctaSection.title && (
                      <CardTitle className="text-xl">{post.ctaSection.title}</CardTitle>
                    )}
                    {post.ctaSection.description && (
                      <CardDescription className="text-base mt-1 text-muted-foreground">
                        {post.ctaSection.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                  {post.ctaSection.buttonText && post.ctaSection.buttonUrl && (
                    <CardContent>
                      <Button asChild>
                        {(() => {
                          const target = resolveCtaHref(post.ctaSection!.buttonUrl!);
                          if (target.kind === 'internal') {
                            return <Link to={target.to}>{post.ctaSection!.buttonText}</Link>;
                          }
                          return (
                            <a href={target.href} target="_blank" rel="noopener noreferrer">
                              {post.ctaSection!.buttonText}
                            </a>
                          );
                        })()}
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
            date={post.publishedAtIso || post.date}
            country={post.country}
            tags={post.tags}
            initialRelated={initialRelated}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
