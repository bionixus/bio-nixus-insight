import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/lib/i18n';

const EMPTY_COPY: Record<Language, { title: string; body: string; link: string }> = {
  en: {
    title: 'No insights for this filter yet',
    body: 'No published articles match this country, region, or topic. The filter stays available for new articles.',
    link: 'Browse all insights',
  },
  de: {
    title: 'Noch keine Insights für diesen Filter',
    body: 'Für dieses Land, diese Region oder dieses Thema sind noch keine Artikel veröffentlicht.',
    link: 'Alle Insights anzeigen',
  },
  fr: {
    title: "Pas encore d'insight pour ce filtre",
    body: 'Aucun article publié ne correspond à ce pays, cette région ou ce thème.',
    link: 'Voir tous les insights',
  },
  es: {
    title: 'Todavía no hay insights para este filtro',
    body: 'No hay artículos publicados para este país, región o tema.',
    link: 'Ver todos los insights',
  },
  pt: {
    title: 'Ainda não há insights para este filtro',
    body: 'Nenhum artigo publicado corresponde a este país, região ou tema.',
    link: 'Ver todos os insights',
  },
  ru: {
    title: 'Пока нет материалов по этому фильтру',
    body: 'Для этой страны, региона или темы пока нет опубликованных статей.',
    link: 'Все материалы',
  },
  zh: {
    title: '此筛选条件下暂无洞察',
    body: '目前没有与该国家、地区或主题匹配的已发布文章。',
    link: '浏览全部洞察',
  },
  ar: {
    title: 'لا توجد تحليلات لهذا الفلتر بعد',
    body: 'لا توجد مقالات منشورة لهذا البلد أو المنطقة أو الموضوع.',
    link: 'تصفح كل التحليلات',
  },
};

export function BlogFilterEmptyState({ href }: { href: string }) {
  const { language } = useLanguage();
  const copy = EMPTY_COPY[language] ?? EMPTY_COPY.en;

  return (
    <div
      className="premium-card mx-auto max-w-2xl p-8 text-center md:p-10"
      data-testid="blog-filter-empty"
    >
      <h2 className="font-display text-2xl font-light tracking-tight text-[#0C1B33] md:text-3xl">
        {copy.title}
      </h2>
      <p className="mx-auto mt-4 max-w-md text-[15px] font-light leading-relaxed text-[#7A7267]">
        {copy.body}
      </p>
      <Link
        to={href}
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#0C1B33] px-5 py-3 text-sm font-semibold text-[#FFFEFB] transition-colors hover:bg-[#0C1B33]/90"
      >
        {copy.link}
      </Link>
    </div>
  );
}
