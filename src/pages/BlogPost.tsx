import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';

/** Sanitize HTML for blog body: allow common content tags and class/style so Sanity HTML renders fully */
function sanitizeBodyHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ADD_ATTR: ['class', 'style'],
    ALLOWED_TAGS: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'br', 'hr',
      'ul', 'ol', 'li', 'strong', 'em', 'b', 'i', 'a', 'blockquote',
      'table', 'thead', 'tbody', 'tr', 'th', 'td', 'sub', 'sup',
    ],
    ALLOW_DATA_ATTR: false,
  });
}
import { fetchSanityPostBySlug } from '@/lib/sanity-blog';
import { isSanityConfigured } from '@/lib/sanity';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import type { BlogPost as BlogPostType } from '@/types/blog';

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
            <div className="flex flex-wrap gap-3 mb-4">
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

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {post.body ? (
                <div
                  className="prose-body text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: sanitizeBodyHtml(post.body) }}
                />
              ) : (
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {post.excerpt}
                </p>
              )}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
