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

  const data = useMemo(() => {
    const posts = query.data ?? [];
    return posts.filter((p) => !p.language || p.language === language);
  }, [query.data, language]);

  return { ...query, data };
}
