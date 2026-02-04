import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { fetchSanityPostBySlug } from '@/lib/sanity-blog';

/** Detect if string looks like HTML (contains tags). */
function isHtmlString(s: string): boolean {
  const t = s.trim();
  return t.length > 0 && /<[a-z\d\/]/i.test(t);
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
import { ArrowLeft } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { BlogPost as BlogPostType } from '@/types/blog';

/** Portable text block renderers – match McKinsey prose-body styles */
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
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-base font-display font-semibold text-primary mt-0 mb-3">
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
  const { t } = useLanguage();

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

  return (
    <div className="min-h-screen bg-background">
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

            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
              {post.title}
            </h1>

            {post.coverImage && (
              <div className="aspect-[16/10] rounded-xl overflow-hidden mb-8 bg-muted">
                <img
                  src={post.coverImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )}

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

            {Array.isArray(post.executiveSummary) && post.executiveSummary.length > 0 && (
              <section className="mb-8 p-5 rounded-lg border border-primary/20 bg-primary/5">
                <h2 className="text-lg font-display font-semibold text-primary mb-3">
                  Executive summary
                </h2>
                <div className="prose-body text-foreground leading-relaxed">
                  <PortableText
                    value={post.executiveSummary as PortableTextBlock[]}
                    components={portableTextComponents}
                  />
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
                      <a
                        href={post.ctaSection!.buttonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {post.ctaSection!.buttonText}
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

export default BlogPost;
