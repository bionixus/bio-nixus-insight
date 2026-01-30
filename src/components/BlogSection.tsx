import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { BlogPost } from '@/types/blog';

interface BlogSectionProps {
  /** When provided (e.g. from Notion API), use these posts instead of i18n. */
  posts?: BlogPost[];
}

const BlogSection = ({ posts: postsProp }: BlogSectionProps) => {
  const { t } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  // Use Notion/external posts if provided; otherwise use i18n blog items
  const postsFromI18n = useMemo(
    () =>
      t.blog.items.map((item, index) => ({
        id: `i18n-${index}`,
        slug: `article-${index + 1}`,
        title: item.title,
        excerpt: item.excerpt,
        date: item.date,
        category: item.category,
        country: item.country,
      })),
    [t.blog.items]
  );

  const posts = postsProp ?? postsFromI18n;

  // Unique topics (categories) and countries for filter options
  const topics = useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))).sort(),
    [posts]
  );
  const countries = useMemo(
    () => Array.from(new Set(posts.map((p) => p.country))).sort(),
    [posts]
  );

  // Filter posts by selected topic and country
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchTopic = !selectedTopic || post.category === selectedTopic;
      const matchCountry = !selectedCountry || post.country === selectedCountry;
      return matchTopic && matchCountry;
    });
  }, [posts, selectedTopic, selectedCountry]);

  return (
    <section id="insights" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 animate-fade-up">
            {t.blog.title}
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up animation-delay-200">
            {t.blog.subtitle}
          </p>
        </div>

        {/* Filters: Topic & Country */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {t.blog.filterByTopic}:
            </span>
            <Select
              value={selectedTopic || 'all'}
              onValueChange={(v) => setSelectedTopic(v === 'all' ? '' : v)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t.blog.filterAllTopics} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.blog.filterAllTopics}</SelectItem>
                {topics.map((topic) => (
                  <SelectItem key={topic} value={topic}>
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {t.blog.filterByCountry}:
            </span>
            <Select
              value={selectedCountry || 'all'}
              onValueChange={(v) => setSelectedCountry(v === 'all' ? '' : v)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t.blog.filterAllCountries} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.blog.filterAllCountries}</SelectItem>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Blog Grid - same design as home */}
        <div className="grid lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Cover: use image if from Notion, else placeholder */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-navy-deep to-navy-medium">
                {post.coverImage ? (
                  <img
                    src={post.coverImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-2xl font-display font-bold text-white/80">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>

              {/* Content */}
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
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-muted-foreground py-12 animate-fade-up">
            No articles match the selected filters.
          </p>
        )}

        {/* Read more articles – links to blog page */}
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
