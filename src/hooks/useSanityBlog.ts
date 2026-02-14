import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchSanityPosts } from '@/lib/sanity-blog';
import { isSanityConfigured } from '@/lib/sanity';
import { useLanguage } from '@/contexts/LanguageContext';

/** Returns posts filtered by current site language. Posts with no language set are shown in all locales. */
export function useSanityBlog() {
  const { language } = useLanguage();

  const query = useQuery({
    queryKey: ['sanity-blog', language],
    queryFn: fetchSanityPosts,
    enabled: isSanityConfigured(),
    staleTime: 60 * 1000, // 1 minute
  });

  // Filter by language, then ensure sorted by publish date (newest first)
  const data = useMemo(() => {
    const posts = query.data ?? [];
    return posts
      .filter((p) => !p.language || p.language === language)
      .sort((a, b) => {
        const da = a.date ? new Date(a.date).getTime() : 0;
        const db = b.date ? new Date(b.date).getTime() : 0;
        return db - da; // newest first
      });
  }, [query.data, language]);

  return { ...query, data };
}
