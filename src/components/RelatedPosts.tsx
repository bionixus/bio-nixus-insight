import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { fetchRelatedPosts } from '@/lib/sanity-blog';
import { isSanityConfigured } from '@/lib/sanity';
import { optimizeSanityImage } from '@/lib/image-utils';
import type { BlogPost } from '@/types/blog';

interface RelatedPostsProps {
  currentSlug: string;
  category: string;
  date: string;
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block rounded-lg border border-border bg-card p-4 hover:border-primary/40 transition-colors"
    >
      {post.coverImage && (
        <div className="aspect-[16/10] rounded-md overflow-hidden mb-3 bg-muted">
          <img
            src={optimizeSanityImage(post.coverImage, 400, 250)}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
            width={400}
            height={250}
          />
        </div>
      )}
      <span className="text-xs text-primary font-semibold">{post.category}</span>
      <h4 className="text-sm font-semibold text-foreground mt-1 line-clamp-2 group-hover:text-primary transition-colors">
        {post.title}
      </h4>
      {post.date && (
        <span className="text-xs text-muted-foreground mt-1 block">{post.date}</span>
      )}
    </Link>
  );
}

const RelatedPosts = ({ currentSlug, category, date }: RelatedPostsProps) => {
  const { data } = useQuery({
    queryKey: ['related-posts', currentSlug, category],
    queryFn: () => fetchRelatedPosts(currentSlug, category, date),
    enabled: isSanityConfigured() && Boolean(currentSlug),
    staleTime: 5 * 60 * 1000, // 5 min
  });

  if (!data) return null;

  const { related, prev, next } = data;
  const hasRelated = related.length > 0;
  const hasNav = prev || next;

  if (!hasRelated && !hasNav) return null;

  return (
    <div className="mt-16 border-t border-border pt-10">
      {/* Prev / Next navigation */}
      {hasNav && (
        <nav className="flex justify-between items-stretch gap-4 mb-10" aria-label="Post navigation">
          {prev ? (
            <Link
              to={`/blog/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors max-w-[45%]"
            >
              <ArrowLeft className="w-4 h-4 flex-shrink-0" />
              <span className="line-clamp-1">{prev.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/blog/${next.slug}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors text-right max-w-[45%]"
            >
              <span className="line-clamp-1">{next.title}</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      )}

      {/* Related posts */}
      {hasRelated && (
        <section aria-label="Related articles">
          <h3 className="text-lg font-display font-semibold text-foreground mb-5">
            Related articles
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default RelatedPosts;
