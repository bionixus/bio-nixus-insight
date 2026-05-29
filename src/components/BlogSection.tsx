import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  /** default = 3-col grid; home/index = featured + grid magazine layout */
  variant?: 'default' | 'home' | 'index';
  /** Hide centered section title (blog page provides its own hero) */
  showHeader?: boolean;
  /** Hide footer link to /blog (redundant on blog index) */
  showViewAllLink?: boolean;
}

const DEFAULT_COVER_IMAGES = [blogImage1, blogImage2, blogImage3];

function getImageSrc(url: string | undefined, index: number): string {
  if (url?.startsWith('http')) return optimizeSanityImage(url, 400, 250);
  return DEFAULT_COVER_IMAGES[index % DEFAULT_COVER_IMAGES.length];
}

function getFeaturedImageSrc(url: string | undefined): string {
  if (url?.startsWith('http')) return optimizeSanityImage(url, 960, 540);
  return DEFAULT_COVER_IMAGES[0];
}

function getImageSrcSet(url: string | undefined): string | undefined {
  if (!url?.startsWith('http') || !url.includes('cdn.sanity.io')) return undefined;
  return `${optimizeSanityImage(url, 400, 250)} 400w, ${optimizeSanityImage(url, 640, 400)} 640w, ${optimizeSanityImage(url, 768, 480)} 768w`;
}

function getFeaturedSrcSet(url: string | undefined): string | undefined {
  if (!url?.startsWith('http') || !url.includes('cdn.sanity.io')) return undefined;
  return `${optimizeSanityImage(url, 640, 360)} 640w, ${optimizeSanityImage(url, 960, 540)} 960w, ${optimizeSanityImage(url, 1200, 675)} 1200w`;
}

type CardPost = BlogPost & { id: string };

function BlogCardMeta({
  post,
  featured = false,
}: {
  post: CardPost;
  featured?: boolean;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
          {post.category}
        </span>
        {post.country ? (
          <span className="text-sm text-muted-foreground">{post.country}</span>
        ) : null}
        <span className="text-sm text-muted-foreground">{post.date}</span>
      </div>
      <h3
        className={`font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-200 leading-tight ${
          featured ? 'text-2xl md:text-3xl' : 'text-xl'
        }`}
      >
        {post.title}
      </h3>
      <p className={`text-muted-foreground leading-relaxed ${featured ? 'text-base md:text-lg' : ''}`}>
        {post.excerpt}
      </p>
    </div>
  );
}

function BlogCardImage({
  post,
  index,
  featured = false,
  readMoreLabel,
}: {
  post: CardPost;
  index: number;
  featured?: boolean;
  readMoreLabel: string;
}) {
  const src = featured ? getFeaturedImageSrc(post.coverImage) : getImageSrc(post.coverImage, index);
  const srcSet = featured ? getFeaturedSrcSet(post.coverImage) : getImageSrcSet(post.coverImage);
  const sizes = featured
    ? '(max-width: 768px) 100vw, 50vw'
    : '(max-width: 1024px) 90vw, 33vw';

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-navy-medium ${
        featured ? 'aspect-[16/10] md:aspect-auto md:min-h-[280px] md:h-full rounded-xl' : 'aspect-[16/10] rounded-xl mb-6'
      }`}
    >
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={post.title || 'Blog post cover'}
        className="absolute inset-0 w-full h-full object-cover blog-card-image"
        loading={featured ? 'eager' : 'lazy'}
        decoding="async"
        width={featured ? 960 : 400}
        height={featured ? 540 : 250}
      />
      <div className="absolute inset-0 blog-card-overlay" aria-hidden />
      {featured ? (
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-primary-foreground font-medium opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
          <span>{readMoreLabel}</span>
          <ArrowUpRight className="w-4 h-4" aria-hidden />
        </div>
      ) : null}
    </div>
  );
}

const BlogSection = ({
  posts,
  isLoading,
  variant = 'default',
  showHeader = true,
  showViewAllLink = true,
}: BlogSectionProps) => {
  const { t, language } = useLanguage();
  const { pathname } = useLocation();
  const blogBasePath = pathname.startsWith('/ar/blog')
    ? '/ar/blog'
    : pathname.startsWith('/de/')
      ? '/de/blog'
      : pathname.startsWith('/fr/')
        ? '/fr/blog'
        : '/blog';

  const isPlaceholderSlug = (slug: string) => slug.startsWith('fallback-');
  const isMagazineLayout = variant === 'index' || variant === 'home';
  const isHomeLayout = variant === 'home';

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

  const list = (posts && posts.length > 0 ? posts : isLoading ? [] : fallbackItems) as CardPost[];
  const revealKey = `${isLoading ? 'loading' : 'ready'}-${variant}-${Array.isArray(posts) ? posts.length : 0}-${list.length}`;
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: isMagazineLayout ? 90 : 120, key: revealKey });

  const filteredPosts = useMemo(() => list, [list]);
  const [featuredPost, ...gridPosts] =
    isMagazineLayout && filteredPosts.length > 0 ? filteredPosts : [null, ...filteredPosts];
  const gridOnlyPosts = isMagazineLayout ? gridPosts : filteredPosts;

  const skeletonGridCount = isHomeLayout ? 2 : isMagazineLayout ? 6 : 3;

  return (
    <section
      id="insights"
      className={`section-padding ${
        variant === 'index' ? 'py-12 bg-cream-dark' : 'bg-background'
      }`}
      ref={sectionRef}
    >
      <div className="container-wide">
        {showHeader ? (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 sr sr-up sr-line sr-line-center">
              {t.blog.title}
            </h2>
            <p className="text-lg text-muted-foreground sr sr-up">{t.blog.subtitle}</p>
          </div>
        ) : null}

        {isLoading && filteredPosts.length === 0 ? (
          <div className={isMagazineLayout ? 'space-y-8' : ''}>
            {isMagazineLayout ? (
              <div className="rounded-2xl border border-border bg-card overflow-hidden sr sr-scale-up">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-[16/10] md:min-h-[280px] blog-skeleton-shimmer" />
                  <div className="p-8 space-y-4">
                    <div className="h-5 w-24 blog-skeleton-shimmer rounded-full" />
                    <div className="h-8 w-full blog-skeleton-shimmer rounded" />
                    <div className="h-4 w-full blog-skeleton-shimmer rounded" />
                    <div className="h-4 w-4/5 blog-skeleton-shimmer rounded" />
                  </div>
                </div>
              </div>
            ) : null}
            <div
              className={`grid ${
                isMagazineLayout ? 'md:grid-cols-2 lg:grid-cols-3' : 'lg:grid-cols-3'
              } gap-8`}
            >
              {Array.from({ length: skeletonGridCount }, (_, i) => (
                <div key={`skeleton-${i}`} className="sr sr-scale-up sr-spring">
                  <div className="aspect-[16/10] rounded-xl blog-skeleton-shimmer mb-6" />
                  <div className="space-y-3">
                    <div className="h-5 w-20 blog-skeleton-shimmer rounded-full" />
                    <div className="h-6 w-full blog-skeleton-shimmer rounded" />
                    <div className="h-4 w-5/6 blog-skeleton-shimmer rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
        {isMagazineLayout && featuredPost ? (
          isPlaceholderSlug(featuredPost.slug) ? (
            <div className="group block mb-10 sr sr-scale-up sr-spring rounded-2xl border border-border bg-card overflow-hidden">
              <article className="grid md:grid-cols-2 gap-0">
                <BlogCardImage
                  post={featuredPost}
                  index={0}
                  featured
                  readMoreLabel={t.blog.readMore}
                />
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="inline-flex w-fit px-3 py-1 mb-4 rounded-full bg-accent/15 text-accent-foreground text-xs font-semibold uppercase tracking-wide">
                    {isHomeLayout ? 'Featured insight' : 'Latest insight'}
                  </span>
                  <BlogCardMeta post={featuredPost} featured />
                </div>
              </article>
            </div>
          ) : (
          <Link
            to={`${blogBasePath}/${featuredPost.slug}`}
            className="group block mb-10 sr sr-scale-up sr-spring hover-lift rounded-2xl border border-border bg-card overflow-hidden cursor-pointer"
          >
            <article className="grid md:grid-cols-2 gap-0">
              <BlogCardImage
                post={featuredPost}
                index={0}
                featured
                readMoreLabel={t.blog.readMore}
              />
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-flex w-fit px-3 py-1 mb-4 rounded-full bg-accent/15 text-accent-foreground text-xs font-semibold uppercase tracking-wide">
                  {isHomeLayout ? 'Featured insight' : 'Latest insight'}
                </span>
                <BlogCardMeta post={featuredPost} featured />
                <div className="flex items-center gap-2 text-primary font-medium pt-4 mt-auto group-hover:gap-3 transition-all duration-200">
                  {t.blog.readMore}
                  <ArrowUpRight className="w-4 h-4" aria-hidden />
                </div>
              </div>
            </article>
          </Link>
          )
        ) : null}

        <div
          className={
            isMagazineLayout
              ? `grid gap-8 ${
                  isHomeLayout ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'
                }`
              : 'grid lg:grid-cols-3 gap-8'
          }
        >
          {gridOnlyPosts.map((post, index) =>
            isPlaceholderSlug(post.slug) ? (
              <div
                key={post.id}
                className={`group block sr sr-scale-up sr-spring ${
                  isMagazineLayout ? 'rounded-xl border border-border bg-card p-6' : ''
                }`}
              >
                <article>
                  <BlogCardImage
                    post={post}
                    index={isMagazineLayout ? index + 1 : index}
                    readMoreLabel={t.blog.readMore}
                  />
                  <BlogCardMeta post={post} />
                </article>
              </div>
            ) : (
              <Link
                key={post.id}
                to={`${blogBasePath}/${post.slug}`}
                className={`group block sr sr-scale-up sr-spring hover-lift cursor-pointer ${
                  isMagazineLayout ? 'rounded-xl border border-border bg-card p-6' : ''
                }`}
              >
                <article>
                  <BlogCardImage
                    post={post}
                    index={isMagazineLayout ? index + 1 : index}
                    readMoreLabel={t.blog.readMore}
                  />
                  <BlogCardMeta post={post} />
                  <div className="flex items-center gap-2 text-primary font-medium pt-2 group-hover:gap-3 transition-all duration-200">
                    {t.blog.readMore}
                    <ArrowUpRight className="w-4 h-4" aria-hidden />
                  </div>
                </article>
              </Link>
            ),
          )}
        </div>
          </>
        )}

        {filteredPosts.length === 0 && !isLoading ? (
          <p className="text-center text-muted-foreground py-12 animate-fade-up">
            No articles match the selected filters.
          </p>
        ) : null}

        {showViewAllLink ? (
          <div className="text-center mt-12 sr sr-up">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors duration-200 cursor-pointer shimmer"
            >
              {t.blog.readMoreArticles}
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default BlogSection;
