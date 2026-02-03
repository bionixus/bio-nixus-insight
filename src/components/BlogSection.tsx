import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { BlogPost } from '@/types/blog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import blogImage1 from '@/assets/blog-insight-1.png';
import blogImage2 from '@/assets/blog-insight-2.png';
import blogImage3 from '@/assets/blog-insight-3.png';

interface BlogSectionProps {
  posts?: BlogPost[];
}

const DEFAULT_COVER_IMAGES = [blogImage1, blogImage2, blogImage3];

function getImageSrc(url: string | undefined, index: number): string {
  if (url?.startsWith('http')) return url;
  return DEFAULT_COVER_IMAGES[index % DEFAULT_COVER_IMAGES.length];
}

const BlogSection = ({ posts }: BlogSectionProps) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');

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

  const list = (posts && posts.length > 0 ? posts : fallbackItems) as BlogPost[];

  const categories = useMemo(() => {
    const set = new Set(list.map((p) => p.category).filter(Boolean));
    return Array.from(set).sort();
  }, [list]);

  const countries = useMemo(() => {
    const set = new Set(list.map((p) => p.country).filter(Boolean));
    return Array.from(set).sort();
  }, [list]);

  const filteredPosts = useMemo(() => {
    return list.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (selectedCountry && p.country !== selectedCountry) return false;
      return true;
    });
  }, [list, selectedCategory, selectedCountry]);

  return (
    <section id="insights" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 animate-fade-up">
            {t.blog.title}
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up animation-delay-200">
            {t.blog.subtitle}
          </p>
        </div>

        {list.length > 0 && (categories.length > 1 || countries.length > 1) && (
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up">
            {categories.length > 1 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground whitespace-nowrap">{t.blog.filterByTopic}</span>
                <Select value={selectedCategory || 'all'} onValueChange={(v) => setSelectedCategory(v === 'all' ? '' : v)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={t.blog.filterAllTopics} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.blog.filterAllTopics}</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            {countries.length > 1 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground whitespace-nowrap">{t.blog.filterByCountry}</span>
                <Select value={selectedCountry || 'all'} onValueChange={(v) => setSelectedCountry(v === 'all' ? '' : v)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={t.blog.filterAllCountries} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.blog.filterAllCountries}</SelectItem>
                    {countries.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <article className="cursor-pointer">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-primary via-primary/95 to-navy-medium">
                  <img
                    src={getImageSrc(post.coverImage, index)}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
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

        {filteredPosts.length === 0 && (
          <p className="text-center text-muted-foreground py-12 animate-fade-up">
            No articles match the selected filters.
          </p>
        )}

        <div className="text-center mt-12 animate-fade-up">
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
