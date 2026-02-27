import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { BlogPost } from '@/types/blog';

import { optimizeSanityImage } from '@/lib/image-utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';

import blogImage1 from '@/assets/blog-insight-1.png';
import blogImage2 from '@/assets/blog-insight-2.png';
import blogImage3 from '@/assets/blog-insight-3.png';

interface BlogSectionProps {
  posts?: BlogPost[];
  /** When true, shows skeleton cards instead of fallback content */
  isLoading?: boolean;
}

const DEFAULT_COVER_IMAGES = [blogImage1, blogImage2, blogImage3];

function getImageSrc(url: string | undefined, index: number): string {
  if (url?.startsWith('http')) return optimizeSanityImage(url, 400, 250);
  return DEFAULT_COVER_IMAGES[index % DEFAULT_COVER_IMAGES.length];
}

function getImageSrcSet(url: string | undefined): string | undefined {
  if (!url?.startsWith('http') || !url.includes('cdn.sanity.io')) return undefined;
  return `${optimizeSanityImage(url, 400, 250)} 400w, ${optimizeSanityImage(url, 640, 400)} 640w, ${optimizeSanityImage(url, 768, 480)} 768w`;
}

const BlogSection = ({ posts, isLoading }: BlogSectionProps) => {
  const { t } = useLanguage();

  const fallbackItems = t.blog.items.map((item, i) => ({
    id: `fallback-${i}`,
    slug: `fallback-${i}`,
    title: item.title,
    excerpt: item.excerpt,
    date: item.date,
    category: item.category,
    country: item.country,
    coverImage: 'coverImage' in item && typeof item.coverImage === 'string' ? item.coverImage : undefined,
  }));

  // Show real posts if available; only fall back to hardcoded items when NOT loading and no posts returned
  const list = (posts && posts.length > 0 ? posts : (isLoading ? [] : fallbackItems)) as BlogPost[];
  const revealKey = `${isLoading ? 'loading' : 'ready'}-${Array.isArray(posts) ? posts.length : 0}-${list.length}`;
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 120, key: revealKey });

  const filteredPosts = useMemo(() => list, [list]);

  return (
    <section id="insights" className="section-padding bg-background" ref={sectionRef}>
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 sr sr-up sr-line sr-line-center">
            {t.blog.title}
          </h2>
          <p className="text-lg text-muted-foreground sr sr-up">
            {t.blog.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skeleton loading cards */}
          {isLoading && filteredPosts.length === 0 && [0, 1, 2].map((i) => (
            <div key={`skeleton-${i}`} className="animate-pulse sr sr-scale-up" style={{ opacity: 1 }}>
              <div className="aspect-[16/10] rounded-xl bg-muted/50 mb-6" />
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="h-5 w-20 bg-muted/40 rounded-full" />
                  <div className="h-5 w-16 bg-muted/30 rounded" />
                </div>
                <div className="h-6 w-full bg-muted/50 rounded" />
                <div className="h-4 w-5/6 bg-muted/30 rounded" />
                <div className="h-4 w-2/3 bg-muted/20 rounded" />
              </div>
            </div>
          ))}

          {filteredPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block sr sr-scale-up sr-spring hover-lift"
            >
              <article className="cursor-pointer">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-primary via-primary/95 to-navy-medium">
                  <img
                    src={getImageSrc(post.coverImage, index)}
                    srcSet={getImageSrcSet(post.coverImage)}
                    sizes="(max-width: 1024px) 90vw, 33vw"
                    alt={post.title || 'Blog post cover'}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={250}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{post.country}</span>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium pt-2 group-hover:gap-3 transition-all">
                    {t.blog.readMore}
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && !isLoading && (
          <p className="text-center text-muted-foreground py-12 animate-fade-up">
            No articles match the selected filters.
          </p>
        )}

        <div className="text-center mt-12 sr sr-up">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/90 transition-colors"
          >
            {t.blog.readMoreArticles}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
