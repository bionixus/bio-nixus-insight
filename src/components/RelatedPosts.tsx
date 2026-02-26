import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { fetchRelatedPosts } from '@/lib/sanity-blog';
import { isSanityConfigured } from '@/lib/sanity';
import { optimizeSanityImage } from '@/lib/image-utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { BlogPost } from '@/types/blog';

import blogImage1 from '@/assets/blog-insight-1.png';
import blogImage2 from '@/assets/blog-insight-2.png';
import blogImage3 from '@/assets/blog-insight-3.png';

const DEFAULT_COVERS = [blogImage1, blogImage2, blogImage3];

function getCover(url: string | undefined, i: number): string {
  if (url?.startsWith('http')) return optimizeSanityImage(url, 480, 300);
  return DEFAULT_COVERS[i % DEFAULT_COVERS.length];
}

function getCoverSrcSet(url: string | undefined): string | undefined {
  if (!url?.startsWith('http') || !url.includes('cdn.sanity.io')) return undefined;
  return `${optimizeSanityImage(url, 400, 250)} 400w, ${optimizeSanityImage(url, 640, 400)} 640w`;
}

interface RelatedPostsProps {
  currentSlug: string;
  category: string;
  date: string;
  country?: string;
  tags?: string[];
}

/* ─── Single related-post card ─── */
function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block sr sr-scale-up sr-spring hover-lift rounded-xl overflow-hidden border border-border bg-card"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-navy-medium">
        <img
          src={getCover(post.coverImage, index)}
          srcSet={getCoverSrcSet(post.coverImage)}
          sizes="(max-width: 768px) 90vw, 33vw"
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width={480}
          height={300}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Category badge */}
        {post.category && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full shadow-sm">
            {post.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {post.country && <span>{post.country}</span>}
          {post.country && post.date && <span className="w-1 h-1 rounded-full bg-border" />}
          {post.date && <span>{post.date}</span>}
        </div>
        <h4 className="text-base font-display font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h4>
        {post.excerpt && (
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        )}
        <div className="flex items-center gap-1.5 text-primary text-sm font-medium pt-1 group-hover:gap-2.5 transition-all">
          Read article
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}

/* ─── Main component ─── */
const RelatedPosts = ({ currentSlug, category, date, country, tags }: RelatedPostsProps) => {
  const { data } = useQuery({
    queryKey: ['related-posts', currentSlug, category, country, tags?.join('|') || ''],
    queryFn: () => fetchRelatedPosts(currentSlug, category, date, country, tags || []),
    enabled: isSanityConfigured() && Boolean(currentSlug),
    staleTime: 60 * 1000,
  });

  // Pass data length as key so the observer re-runs when async content loads
  const sectionRef = useScrollReveal<HTMLDivElement>({
    stagger: 100,
    key: data ? data.related.length : 0,
  });

  if (!data) return null;

  const { related, prev, next } = data;
  const hasRelated = related.length > 0;
  const hasNav = prev || next;

  if (!hasRelated && !hasNav) return null;

  return (
    <div className="mt-20 pt-12 border-t border-border" ref={sectionRef}>
      {/* Prev / Next navigation */}
      {hasNav && (
        <nav
          className="flex justify-between items-stretch gap-6 mb-14"
          aria-label="Post navigation"
        >
          {prev ? (
            <Link
              to={`/blog/${prev.slug}`}
              className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all max-w-[48%] sr sr-left"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <ArrowLeft className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Previous</span>
                <p className="text-sm font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/blog/${next.slug}`}
              className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all max-w-[48%] text-right sr sr-right"
            >
              <div className="min-w-0">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Next</span>
                <p className="text-sm font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                  {next.title}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      )}

      {/* Related posts */}
      {hasRelated && (
        <section aria-label="Related articles">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground sr sr-up sr-line">
              Related Articles
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default RelatedPosts;
