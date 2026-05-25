import { useParams, Link, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { sanitizeBodyHtml } from '@/lib/sanitize-body-html';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { Helmet } from 'react-helmet-async';
import { fetchSanityPostBySlug, type RelatedPostsData } from '@/lib/sanity-blog';
import { optimizeSanityImage } from '@/lib/image-utils';
import { buildSeoDescription, normalizeSeoTitle, formatSlugAsPageHeading } from '@/lib/seo-meta';
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

  const slug = path.startsWith('/ar/blog/')
    ? path.slice('/ar/blog/'.length)
    : path.startsWith('/blog/')
      ? path.slice('/blog/'.length)
      : path;
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
  const sanitized = sanitizeBodyHtml(body)
    .replace(/<table/g, '<div class="prose-table-wrap"><table')
    .replace(/<\/table>/g, '</table></div>');
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
import { useEffect } from 'react';
import { ArrowLeft, BarChart3, CheckCircle2, ShieldCheck, TrendingUp, Calendar, Clock, MapPin, AlignLeft, List, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ShareButtons from '@/components/ShareButtons';
import type { BlogPost as BlogPostType } from '@/types/blog';

const GCC_PHARMA_2026_SLUG = 'gcc-pharmaceuticals-market-2026';
const AI_VS_HUMAN_2026_SLUG = 'ai-vs-human-insight-validating-quantitative-data-2026-pharma-research';
const CHINA_HEALTHCARE_2026_SLUG = 'healthcare-overview-china-market-2026';
const CHINA_HEALTHCARE_2026_META_DESCRIPTION =
  '深度解析中国医疗健康市场2026关键趋势：医保支付改革、创新药与生物药商业化、医院与基层诊疗结构变化、AI医疗与数字化转型落地路径，以及老龄化驱动的长期需求。为制药企业、投资机构与行业决策者提供可执行的市场洞察与战略参考。';

/**
 * SEO recovery overrides for the Egypt healthcare 2026 blog post.
 * Targets the "cairo hospitals healthcare 2023-2026" query, which had
 * 15,532 impressions @ 0% CTR in GSC because the CMS title/description
 * did not match the search intent. These constants force a CTR-optimized
 * `<title>`, meta description, og:title, og:description on every render —
 * without requiring a Sanity CMS sync.
 */
const EGYPT_HEALTHCARE_2026_SLUG = 'healthcare-overview-egypt-market-2026';
const EGYPT_HEALTHCARE_2026_TITLE = 'Cairo Hospitals & Egypt Healthcare Market 2026 | BioNixus';
const EGYPT_HEALTHCARE_2026_META_DESCRIPTION =
  'Egypt healthcare market 2026: Cairo hospital data, EDA pharmaceutical landscape, payer trends, and physician insights from BioNixus market research.';
const EGYPT_HEALTHCARE_2026_OG_TITLE =
  'Egypt Healthcare Market 2026 — Cairo Hospitals, Pharma & Physician Data';
const EGYPT_HEALTHCARE_2026_OG_DESCRIPTION =
  'Full Egypt healthcare overview for 2026 — Cairo hospital landscape, EDA regulation, pharmaceutical market size, and primary physician research from BioNixus.';

/** Arabic blog URLs must not reuse the English Sanity meta description (duplicate meta audit). */
const ARABIC_BLOG_META_DESCRIPTION_BY_SLUG: Record<string, string> = {
  'quantitative-market-research-and-market-access':
    'ملخص عربي: أبحاث السوق الكمية وتأثيرها على الوصول إلى السوق للدواء—رؤى للشركات في الشرق الأوسط ودول الخليج من BioNixus.',
};
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

/** Portable text block renderers – premium editorial style */
const portableTextComponents = {
  block: {
    h2: ({ children, value }: { children?: React.ReactNode, value?: any }) => (
      <h2 id={slugifyHeading(value)} className="blog-prose-h2 text-2xl font-display font-bold leading-snug tracking-tight text-primary mb-5">
        {children}
      </h2>
    ),
    h3: ({ children, value }: { children?: React.ReactNode, value?: any }) => (
      <h3 id={slugifyHeading(value)} className="text-xl font-display font-semibold text-foreground mt-8 mb-3 tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children, value }: { children?: React.ReactNode, value?: any }) => (
      <h4 id={slugifyHeading(value)} className="text-base font-display font-semibold text-primary mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="blog-pull-quote">
        <p className="font-display text-xl italic leading-relaxed text-primary m-0">{children}</p>
      </blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-5 text-foreground text-[17px] leading-[1.82]">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="my-5 space-y-2.5 pl-0 list-none">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal pl-6 my-5 space-y-2.5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-[17px] text-foreground leading-[1.75] flex items-start gap-2.5 before:content-[''] before:mt-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent before:flex-shrink-0">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-[17px] text-foreground leading-[1.75]">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-primary">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="font-display italic">{children}</em>
    ),
    link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => (
      <a
        href={value?.href}
        className="text-primary underline underline-offset-2 hover:no-underline font-medium"
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
  const { pathname } = useLocation();
  const isArBlog = pathname.startsWith('/ar/blog');
  const blogIndexPath = isArBlog ? '/ar/blog' : '/blog';
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

  useEffect(() => {
    const bar = document.getElementById('blog-rp');
    if (!bar) return;
    const update = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      if (total <= 0) return;
      bar.style.width = `${(window.scrollY / total) * 100}%`;
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [post]);

  if (!slug) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="px-6 py-16 max-w-3xl mx-auto">
          <h1 className="text-2xl font-display font-semibold text-foreground mb-4">BioNixus blog article</h1>
          <p className="text-muted-foreground">Invalid article.</p>
          <Link to={blogIndexPath} className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline">
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
        {/* Skeleton loader */}
        <div className="animate-pulse">
          <div className="w-full bg-primary/10" style={{ minHeight: '420px' }} />
          <div className="max-w-screen-xl mx-auto px-6 pt-8 grid lg:grid-cols-[1fr_272px] gap-10">
            <div className="space-y-4">
              <div className="h-3 bg-muted rounded w-24" />
              <div className="h-6 bg-muted rounded w-3/4" />
              <div className="h-6 bg-muted rounded w-1/2" />
              <div className="h-px bg-muted my-6" />
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`h-4 bg-muted rounded ${i % 3 === 2 ? 'w-3/4' : 'w-full'}`} />
              ))}
            </div>
            <div className="hidden lg:block space-y-3">
              <div className="h-48 bg-muted rounded-xl" />
              <div className="h-32 bg-muted rounded-xl" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post && (isError || !sanityPost)) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="px-6 py-16 max-w-3xl mx-auto">
          <Link to={blogIndexPath} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to insights
          </Link>
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3 text-balance">
            {slug ? `${formatSlugAsPageHeading(slug)} — BioNixus` : 'BioNixus insight'}
          </h1>
          <p className="text-muted-foreground mb-4">Article not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const pathClean = (pathname.split('?')[0] || '/blog').replace(/\/+$/, '') || '/blog';
  const pageUrl =
    (post.seoCanonicalUrl && String(post.seoCanonicalUrl).trim()) ||
    `https://www.bionixus.com${pathClean.startsWith('/') ? pathClean : `/${pathClean}`}`;
  const bodySourceForMeta = typeof post.body === 'string' ? post.body : post.excerpt || post.title;
  const metaTitle = normalizeSeoTitle(post.seoMetaTitle || post.title, 'BioNixus');
  const metaDescription = buildSeoDescription({
    preferred: post.seoMetaDescription,
    bodySource: bodySourceForMeta,
    fallback: post.excerpt || post.title,
  });
  const arBlogMetaOverride =
    isArBlog && slug && ARABIC_BLOG_META_DESCRIPTION_BY_SLUG[slug]
      ? buildSeoDescription({
          preferred: ARABIC_BLOG_META_DESCRIPTION_BY_SLUG[slug],
          fallback: metaDescription,
        })
      : null;
  const isEgyptHealthcare2026 = slug === EGYPT_HEALTHCARE_2026_SLUG;
  const finalMetaDescription = isEgyptHealthcare2026
    ? EGYPT_HEALTHCARE_2026_META_DESCRIPTION
    : slug === CHINA_HEALTHCARE_2026_SLUG
      ? CHINA_HEALTHCARE_2026_META_DESCRIPTION
      : arBlogMetaOverride ?? metaDescription;
  const finalMetaTitle = isEgyptHealthcare2026
    ? normalizeSeoTitle(EGYPT_HEALTHCARE_2026_TITLE, 'BioNixus')
    : metaTitle;
  const socialTitle = isEgyptHealthcare2026
    ? EGYPT_HEALTHCARE_2026_OG_TITLE
    : post.ogTitle || metaTitle;
  const socialDescription = isEgyptHealthcare2026
    ? EGYPT_HEALTHCARE_2026_OG_DESCRIPTION
    : post.ogDescription || finalMetaDescription;
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
        headline={isEgyptHealthcare2026 ? EGYPT_HEALTHCARE_2026_OG_TITLE : post.title}
        description={finalMetaDescription}
        imageUrl={socialImage}
        authorName={post.authorName || 'BioNixus Research Team'}
        authorUrl={post.authorLinkedIn || 'https://www.linkedin.com/in/mohammad-alsaadany'}
        authorJobTitle={post.authorTitle || undefined}
        publishedAt={post.publishedAtIso}
        modifiedAt={post.updatedAtIso || post.publishedAtIso}
        breadcrumb={
          language === 'ar' && isArBlog
            ? [
                { name: 'الرئيسية', item: 'https://www.bionixus.com/ar' },
                { name: 'المدونة العربية', item: 'https://www.bionixus.com/ar/blog' },
                { name: post.title, item: pageUrl },
              ]
            : [
                { name: 'Home', item: 'https://www.bionixus.com/' },
                { name: 'Blog', item: 'https://www.bionixus.com/blog' },
                { name: post.title, item: pageUrl },
              ]
        }
        faqItems={
          Array.isArray(post.faq)
            ? post.faq
              .filter((item) => Boolean(item.question && item.answer))
              .map((item) => ({ question: item.question!, answer: item.answer! }))
            : []
        }
        itemList={slug === 'top-healthcare-market-research-firms-saudi-arabia' ? {
          name: 'Healthcare market research firms in Saudi Arabia',
          items: [
            { name: 'BioNixus', description: 'Regional healthcare and pharmaceutical market research specialist; Saudi fieldwork, SFDA-aware design, Arabic-first instruments.' },
            { name: 'IQVIA', description: 'Global healthcare data, analytics, and research network; RWE and enterprise-scale delivery.' },
            { name: 'Ipsos', description: 'Global full-service research network with a healthcare practice; large-scale quantitative and patient research.' },
            { name: 'M3 Global Research', description: 'Large verified physician panel for HCP recruitment and online quantitative fieldwork.' },
            { name: 'SixthFactor Consulting', description: 'Regional GCC custom research consultancy; validate healthcare-specific experience separately.' },
          ],
        } : undefined}
      />
      <Helmet>
        {/* Dynamic meta tags for this specific blog post */}
        <title>{isEgyptHealthcare2026 ? finalMetaTitle : normalizeSeoTitle(`${finalMetaTitle} | BioNixus`, 'BioNixus')}</title>
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
        <link rel="canonical" href={post.seoCanonicalUrl || pageUrl} />

      </Helmet>

      {/* Reading progress */}
      <div id="blog-rp" className="blog-reading-progress" style={{ width: '0%' }} />

      <Navbar />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        {post.coverImage ? (
          <div
            className="relative w-full overflow-hidden bg-navy-deep group"
            style={{ minHeight: '380px', maxHeight: '560px', aspectRatio: '21 / 9' }}
          >
            <img
              src={optimizeSanityImage(post.coverImage, 1400, 600)}
              alt={post.title || 'Article cover image'}
              className="w-full h-full object-cover opacity-[0.55] transition-transform duration-[6000ms] ease-in-out group-hover:scale-[1.03]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={1400}
              height={600}
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(220 47% 10% / 0.97) 0%, hsl(220 47% 10% / 0.65) 38%, transparent 72%)' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, hsl(220 47% 10% / 0.45) 0%, transparent 55%)' }} />
            {/* Gold top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--gold-light)) 55%, transparent 100%)' }} />

            <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-8 md:pb-10 z-10">
              <Link to={blogIndexPath} className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm mb-5 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to insights
              </Link>

              {post.category && (
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 text-[10px] font-extrabold tracking-[0.12em] uppercase rounded-sm" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}>
                    {post.category}
                  </span>
                </div>
              )}

              <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.18] tracking-[-0.02em] text-white max-w-4xl mb-5 text-balance">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center">
                {post.authorName && (
                  <div className="flex items-center gap-2.5 pr-4 border-r border-white/20 mr-0">
                    {post.authorImage ? (
                      <img src={optimizeSanityImage(post.authorImage, 56, 56)} alt={post.authorName} className="w-7 h-7 rounded-full object-cover flex-shrink-0" width={28} height={28} loading="eager" />
                    ) : (
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}>
                        {post.authorName.charAt(0)}
                      </div>
                    )}
                    <div>
                      <span className="text-[13px] font-medium text-white/85 block">{post.authorName}</span>
                      {post.authorTitle && <span className="text-[11px] text-white/45 block">{post.authorTitle}</span>}
                    </div>
                  </div>
                )}
                {post.date && (
                  <div className="flex items-center gap-1.5 text-[13px] text-white/55 px-4 border-r border-white/20">
                    <Calendar className="w-3 h-3 opacity-60" aria-hidden />
                    <strong className="text-white/80 font-medium">{post.date}</strong>
                  </div>
                )}
                {post.readingTime != null && (
                  <div className="flex items-center gap-1.5 text-[13px] text-white/55 px-4 border-r border-white/20">
                    <Clock className="w-3 h-3 opacity-60" aria-hidden />
                    <strong className="text-white/80 font-medium">{post.readingTime} min</strong>
                  </div>
                )}
                {post.country && (
                  <div className="flex items-center gap-1.5 text-[13px] text-white/55 px-4">
                    <MapPin className="w-3 h-3 opacity-60" aria-hidden />
                    <strong className="text-white/80 font-medium">{post.country}</strong>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Text-only hero — no cover image */
          <div className="relative py-14 md:py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}>
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--gold-light)) 55%, transparent 100%)' }} />
            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-[0.06]" style={{ background: 'hsl(var(--accent))' }} />
            <div className="max-w-screen-xl mx-auto px-6 md:px-10">
              <Link to={blogIndexPath} className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm mb-6 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to insights
              </Link>
              {post.category && (
                <div className="mb-4">
                  <span className="inline-flex px-3 py-1 text-[10px] font-extrabold tracking-[0.12em] uppercase rounded-sm" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}>
                    {post.category}
                  </span>
                </div>
              )}
              <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.18] tracking-[-0.02em] max-w-4xl mb-5 text-balance">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center">
                {post.authorName && (
                  <div className="flex items-center gap-2.5 pr-4 border-r border-white/20">
                    {post.authorImage ? (
                      <img src={optimizeSanityImage(post.authorImage, 56, 56)} alt={post.authorName} className="w-7 h-7 rounded-full object-cover" width={28} height={28} loading="eager" />
                    ) : (
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}>
                        {post.authorName.charAt(0)}
                      </div>
                    )}
                    <span className="text-[13px] font-medium text-white/85">{post.authorName}</span>
                  </div>
                )}
                {post.date && (
                  <div className="flex items-center gap-1.5 text-[13px] text-white/55 px-4 border-r border-white/20">
                    <Calendar className="w-3 h-3 opacity-60" aria-hidden />
                    <strong className="text-white/80 font-medium">{post.date}</strong>
                  </div>
                )}
                {post.readingTime != null && (
                  <div className="flex items-center gap-1.5 text-[13px] text-white/55 px-4 border-r border-white/20">
                    <Clock className="w-3 h-3 opacity-60" aria-hidden />
                    <strong className="text-white/80 font-medium">{post.readingTime} min</strong>
                  </div>
                )}
                {post.country && (
                  <div className="flex items-center gap-1.5 text-[13px] text-white/55 px-4">
                    <MapPin className="w-3 h-3 opacity-60" aria-hidden />
                    <strong className="text-white/80 font-medium">{post.country}</strong>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── CONTENT GRID ──────────────────────────────────────────────── */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_272px] gap-10 lg:gap-14 pt-8 pb-20 items-start">

            {/* ── ARTICLE MAIN ───────────────────────────────────────────── */}
            <article>

              {/* Tags + Share toolbar */}
              <div className="flex items-center justify-between flex-wrap gap-3 pb-5 mb-7 border-b border-border">
                {Array.isArray(post.tags) && post.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-muted text-muted-foreground text-[11px] font-medium tracking-[0.04em] uppercase rounded-full border border-border hover:bg-accent/10 hover:border-accent/30 hover:text-foreground transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : <div />}
                <ShareButtons url={pageUrl} title={post.title} contentType="blog" slug={slug!} />
              </div>

              {/* Executive summary */}
              {executiveSummary && (
                <aside
                  className="relative mb-8 py-5 px-5 bg-primary/[0.025] border border-primary/[0.08] overflow-hidden"
                  style={{ borderLeft: '4px solid hsl(var(--accent))', borderRadius: '0 12px 12px 0' }}
                  aria-label="Executive summary"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(var(--accent))' }}>
                      <AlignLeft className="w-3.5 h-3.5" style={{ color: 'hsl(var(--navy-deep))' }} aria-hidden />
                    </div>
                    <span className="text-[11px] font-extrabold tracking-[0.1em] uppercase text-primary">Executive Summary</span>
                  </div>
                  <div className="font-display text-[17px] italic leading-[1.72] text-foreground">
                    {typeof executiveSummary === 'string' ? (
                      <div dangerouslySetInnerHTML={{ __html: sanitizeBodyHtml(executiveSummary) }} />
                    ) : (
                      <PortableText value={executiveSummary as PortableTextBlock[]} components={portableTextComponents} />
                    )}
                  </div>
                </aside>
              )}

              {/* Table of contents — inline grid */}
              {Array.isArray(post.tableOfContents) && post.tableOfContents.length > 0 && (
                <nav className="mb-8 rounded-xl overflow-hidden border border-border" aria-label="Table of contents">
                  <div className="flex items-center gap-2 px-5 py-3.5 bg-muted/70 border-b border-border">
                    <List className="w-3.5 h-3.5 text-accent" aria-hidden />
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-primary">Contents</span>
                    <span className="ml-auto text-[11px] text-muted-foreground">{post.tableOfContents.length} sections</span>
                  </div>
                  <div className="p-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 bg-background/60">
                    {post.tableOfContents.map((item, i) => (
                      <a
                        key={i}
                        href={item.anchor ? `#${item.anchor}` : undefined}
                        className="flex items-start gap-2 text-[13px] text-primary hover:text-accent-foreground transition-colors group leading-snug"
                      >
                        <span className="blog-toc-num group-hover:bg-accent transition-colors">{i + 1}</span>
                        {item.heading ?? ''}
                      </a>
                    ))}
                  </div>
                </nav>
              )}

              {/* GCC 2026 premium dashboard enhancement */}
              {isGccPharma2026 && <PremiumGcc2026Enhancement />}

              {/* Egypt 2026 topical intro — places key internal links in the first 200 words
                  so Google sees the hub + service relationships immediately on this high-impression page. */}
              {isEgyptHealthcare2026 && (
                <aside
                  className="mb-8 rounded-xl border border-primary/15 bg-primary/[0.025] p-5 lg:p-6"
                  aria-label="Egypt healthcare market quick navigation"
                >
                  <p className="text-[11px] font-extrabold tracking-[0.12em] uppercase text-primary mb-3">
                    Egypt healthcare 2026 — quick navigation
                  </p>
                  <p className="text-[15px] text-foreground leading-relaxed mb-3">
                    This overview covers the Egyptian healthcare market in 2026 — Cairo hospital
                    landscape, Egyptian Drug Authority (EDA) regulation, pharmaceutical market size,
                    and physician research signals. Continue to the{' '}
                    <Link to="/healthcare-market-research" className="text-primary font-semibold underline underline-offset-2 hover:no-underline">
                      EMEA healthcare market research hub
                    </Link>{' '}
                    for the full research framework, or jump to a related Egypt resource below.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 mt-3 list-none p-0">
                    <li>
                      <Link
                        to="/pharmaceutical-companies-egypt"
                        className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden /> Pharmaceutical companies in Egypt
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/market-research-egypt"
                        className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden /> Market research in Egypt
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog/top-market-research-companies-egypt-2026"
                        className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden /> Top market research companies in Egypt (2026)
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/healthcare-market-research/egypt"
                        className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden /> Egypt country research methodology
                      </Link>
                    </li>
                  </ul>
                </aside>
              )}

              {/* Article body */}
              <div className="blog-article-body blog-drop-cap">
                {(() => {
                  const body = getBodyToRender(post, slug);
                  if (typeof body === 'string') return renderStringBody(body);
                  if (Array.isArray(body)) {
                    const blocks = body as PortableTextBlock[];
                    const asText = portableTextToPlainString(blocks);
                    if (asText.trim() && isHtmlString(asText)) return renderStringBody(asText);
                    return (
                      <div className="prose-body text-foreground">
                        <PortableText value={blocks} components={portableTextComponents} />
                      </div>
                    );
                  }
                  return (
                    <p className="text-[17px] text-muted-foreground leading-[1.82] whitespace-pre-line">
                      {post.excerpt}
                    </p>
                  );
                })()}
              </div>

              {/* Related research links */}
              <section className="mt-10 rounded-2xl border border-border bg-muted/20 p-5 lg:p-6">
                <h2 className="font-display text-lg font-bold text-foreground mb-1 flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4 text-accent flex-shrink-0" aria-hidden />
                  Explore related research
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  For deeper regional insight, explore our healthcare market research framework and country coverage.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { to: '/healthcare-market-research', label: 'EMEA healthcare market research hub' },
                    { to: '/healthcare-market-research/saudi-arabia', label: 'Pharma market research in Saudi Arabia' },
                    { to: '/healthcare-market-research/uae', label: 'Healthcare market research in the UAE' },
                    { to: '/healthcare-market-research/therapy/oncology', label: 'Oncology market research in MENA' },
                  ].map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      className="inline-flex items-center gap-1 px-3 py-1.5 border border-border bg-background rounded-md text-sm font-medium text-foreground hover:border-accent/50 hover:bg-accent/5 hover:text-foreground transition-all"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </section>

              {/* More insights links */}
              <section className="mt-6 rounded-2xl border border-border bg-card p-5 lg:p-6">
                <h2 className="font-display text-base font-bold text-foreground mb-4">More healthcare insight pages</h2>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {blogRecoveryPaths.slice(0, 12).map((path) => (
                    <Link key={path} to={path} className="text-primary hover:text-accent-foreground hover:underline text-sm transition-colors truncate">
                      {formatInsightTopicFromPath(path)}
                    </Link>
                  ))}
                </div>
              </section>

              {/* FAQ — uses <details>/<summary> so answers are always in server-rendered HTML */}
              {Array.isArray(post.faq) && post.faq.length > 0 && (
                <section className="mt-12" aria-label="Frequently asked questions">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-primary mb-6 flex items-center gap-3">
                    <span className="inline-flex px-2 py-0.5 text-[10px] font-extrabold tracking-[0.1em] uppercase rounded-sm" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}>FAQ</span>
                    Frequently asked questions
                  </h2>
                  <div className="w-full divide-y divide-border border-t border-border">
                    {post.faq.map((item, i) => (
                      <details key={i} className="group">
                        <summary className="flex items-center justify-between cursor-pointer text-left text-[15px] font-semibold text-primary hover:text-accent-foreground py-5 list-none [&::-webkit-details-marker]:hidden">
                          <span>{item.question || 'Question'}</span>
                          <svg className="w-4 h-4 shrink-0 ml-2 text-muted-foreground transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                        </summary>
                        <div className="text-[15px] text-muted-foreground leading-relaxed pb-5">
                          {item.answer || ''}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA Card — premium gradient */}
              {post.ctaSection &&
                (post.ctaSection.title || post.ctaSection.description || post.ctaSection.buttonText || post.ctaSection.buttonUrl) && (
                  <div
                    className="mt-12 rounded-2xl p-7 md:p-9 relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}
                  >
                    {/* Decorative orbs */}
                    <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-[0.07] pointer-events-none" style={{ background: 'hsl(var(--accent))' }} />
                    <div className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full opacity-[0.05] pointer-events-none" style={{ background: 'hsl(var(--accent))' }} />

                    {post.ctaSection.title && (
                      <>
                        <p className="text-[10px] font-extrabold tracking-[0.16em] uppercase mb-3" style={{ color: 'hsl(var(--accent))' }}>
                          Expert Consultation
                        </p>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-snug tracking-tight mb-3 max-w-lg">
                          {post.ctaSection.title}
                        </h2>
                      </>
                    )}
                    {post.ctaSection.description && (
                      <p className="text-[15px] leading-relaxed text-white/60 mb-7 max-w-lg">
                        {post.ctaSection.description}
                      </p>
                    )}
                    {post.ctaSection.buttonText && post.ctaSection.buttonUrl && (
                      (() => {
                        const target = resolveCtaHref(post.ctaSection!.buttonUrl!);
                        const btnClass = "inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-md transition-all hover:-translate-y-0.5 hover:shadow-lg";
                        const btnStyle = { background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' };
                        return target.kind === 'internal' ? (
                          <Link to={target.to} className={btnClass} style={btnStyle}>
                            {post.ctaSection!.buttonText}
                            <ArrowUpRight className="w-4 h-4" aria-hidden />
                          </Link>
                        ) : (
                          <a href={target.href} target="_blank" rel="noopener noreferrer" className={btnClass} style={btnStyle}>
                            {post.ctaSection!.buttonText}
                            <ArrowUpRight className="w-4 h-4" aria-hidden />
                          </a>
                        );
                      })()
                    )}
                  </div>
                )}

              {/* Author card */}
              {post.authorName && (
                <div className="mt-10 p-5 flex gap-4 items-start bg-background border border-border rounded-2xl shadow-sm">
                  {post.authorImage ? (
                    <img
                      src={optimizeSanityImage(post.authorImage, 96, 96)}
                      alt={post.authorName}
                      className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-border"
                      width={56} height={56} loading="lazy" decoding="async"
                    />
                  ) : (
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-display text-xl font-bold border-2"
                      style={{ background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--navy-medium)) 100%)', color: 'hsl(var(--accent))', borderColor: 'hsl(var(--accent) / 0.2)' }}
                    >
                      {post.authorName.charAt(0)}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-extrabold tracking-[0.1em] uppercase mb-0.5" style={{ color: 'hsl(var(--accent))' }}>Research Author</p>
                    <p className="text-[15px] font-semibold text-primary">
                      {post.authorLinkedIn ? (
                        <a href={post.authorLinkedIn} target="_blank" rel="noopener noreferrer" className="hover:underline">{post.authorName}</a>
                      ) : post.authorName}
                    </p>
                    {post.authorTitle && <p className="text-sm text-muted-foreground mb-1">{post.authorTitle}</p>}
                    {post.authorLinkedIn && (
                      <a href={post.authorLinkedIn} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary/70 hover:text-primary transition-colors">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        LinkedIn Profile
                      </a>
                    )}
                    {post.updatedAtIso && post.updatedAtIso !== post.publishedAtIso && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Updated {new Date(post.updatedAtIso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </article>

            {/* ── STICKY SIDEBAR ─────────────────────────────────────────── */}
            <aside className="hidden lg:block sticky top-20 space-y-4" aria-label="Article sidebar">

              {/* Table of contents */}
              {Array.isArray(post.tableOfContents) && post.tableOfContents.length > 0 && (
                <nav className="rounded-xl overflow-hidden border border-border shadow-sm" aria-label="Article sections">
                  <div className="flex items-center gap-2 px-4 py-3" style={{ background: 'hsl(var(--primary))' }}>
                    <List className="w-3.5 h-3.5" style={{ color: 'hsl(var(--accent))' }} aria-hidden />
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-white">On this page</span>
                  </div>
                  <div className="py-2 bg-background">
                    {post.tableOfContents.map((item, i) => (
                      <a
                        key={i}
                        href={item.anchor ? `#${item.anchor}` : undefined}
                        className="block px-4 py-2 text-[13px] text-muted-foreground border-l-2 border-transparent hover:border-accent hover:bg-accent/5 hover:text-primary transition-all"
                      >
                        {item.heading ?? ''}
                      </a>
                    ))}
                  </div>
                </nav>
              )}

              {/* Sidebar CTA */}
              <div
                className="rounded-xl p-5 relative overflow-hidden"
                style={{ background: 'linear-gradient(160deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}
              >
                <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-[0.1] pointer-events-none" style={{ background: 'hsl(var(--accent))' }} />
                <p className="text-[10px] font-extrabold tracking-[0.14em] uppercase mb-2" style={{ color: 'hsl(var(--accent))' }}>Expert Research</p>
                <p className="font-display text-base font-bold text-white leading-snug mb-4">Need a pharma market research for your team?</p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-1.5 py-2.5 text-[13px] font-bold rounded-md w-full transition-all hover:-translate-y-0.5"
                  style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
                >
                  Request a briefing
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
                </Link>
              </div>
            </aside>

          </div>

          {/* ── RELATED POSTS (full width below grid) ─────────────────── */}
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
