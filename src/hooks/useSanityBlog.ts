import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchSanityLatestInsights, fetchSanityPosts, fetchIndustriesInsights } from '@/lib/sanity-blog';
import { isSanityConfigured } from '@/lib/sanity';
import { useLanguage } from '@/contexts/LanguageContext';
import type { BlogPost } from '@/types/blog';

/** Returns posts filtered by current site language. Posts with no language set are shown in all locales. */
export function useSanityBlog(ssrPosts?: BlogPost[] | null) {
  const { language } = useLanguage();
  const hasSsrIndex = Array.isArray(ssrPosts);

  const query = useQuery({
    queryKey: ['sanity-blog', language, 'healthcare'],
    queryFn: () => fetchSanityPosts({ silo: 'healthcare' }),
    enabled: isSanityConfigured() || hasSsrIndex,
    staleTime: 60 * 1000, // 1 minute
    initialData: hasSsrIndex ? ssrPosts! : undefined,
  });

  // Filter by language, then ensure sorted by publish date (newest first)
  const data = useMemo(() => {
    const posts = query.data ?? [];
    return posts
      .filter((p) => !p.language || p.language === language)
      .sort((a, b) => {
        const da = a.publishedAtIso || a.date;
        const db = b.publishedAtIso || b.date;
        const ta = da ? new Date(da).getTime() : 0;
        const tb = db ? new Date(db).getTime() : 0;
        return (Number.isNaN(tb) ? 0 : tb) - (Number.isNaN(ta) ? 0 : ta);
      });
  }, [query.data, language]);

  return { ...query, data };
}

/** Optimized hook for homepage Latest Insights (returns latest 3 posts). */
export function useSanityLatestInsights(limit = 3, ssrPosts?: BlogPost[] | null) {
  const { language } = useLanguage();
  const hasSsr = Array.isArray(ssrPosts) && ssrPosts.length > 0;

  return useQuery({
    queryKey: ['sanity-latest-insights', language, limit],
    queryFn: () => fetchSanityLatestInsights(language, limit),
    enabled: isSanityConfigured(),
    initialData: hasSsr ? ssrPosts! : undefined,
    staleTime: 2 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}

/** Industries insights hub — B2B/B2C posts for /bionixus-industries/insights */
export function useIndustriesInsights(ssrPosts?: BlogPost[] | null) {
  const hasSsrIndex = Array.isArray(ssrPosts);

  const query = useQuery({
    queryKey: ['industries-insights'],
    queryFn: () => fetchIndustriesInsights(),
    enabled: isSanityConfigured() || hasSsrIndex,
    staleTime: 60 * 1000,
    initialData: hasSsrIndex ? ssrPosts! : undefined,
  });

  const data = useMemo(() => {
    const posts = query.data ?? [];
    return posts.sort((a, b) => {
      const da = a.publishedAtIso || a.date;
      const db = b.publishedAtIso || b.date;
      const ta = da ? new Date(da).getTime() : 0;
      const tb = db ? new Date(db).getTime() : 0;
      return (Number.isNaN(tb) ? 0 : tb) - (Number.isNaN(ta) ? 0 : ta);
    });
  }, [query.data]);

  return { ...query, data };
}
