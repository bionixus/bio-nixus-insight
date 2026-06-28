import type { BlogPostCtaSection } from '@/types/blog';

const EN_CTA_MARKERS =
  /\b(Scope your|Request a commercial briefing|Germany|AMNOG|GKV|NHS|Europe briefing)\b/i;

export function looksLikeEnglishCta(cta: BlogPostCtaSection | undefined | null): boolean {
  if (!cta) return true;
  const blob = [cta.title, cta.description, cta.buttonText].filter(Boolean).join(' ');
  if (!blob.trim()) return true;
  return EN_CTA_MARKERS.test(blob);
}

export const DEFAULT_ARABIC_BLOG_CTA: BlogPostCtaSection = {
  title: 'اطلب إحاطة للوصول إلى السوق في السعودية والخليج',
  description:
    'BioNixus تدعم SFDA وCHI وNUPCO، أبحاث الأطباء والدافعين، برامج KOL، وتحليلات تنافسية في السعودية والإمارات ومصر وMENA — لقرارات الوصول والإطلاق الاستراتيجية.',
  buttonText: 'اطلب إحاطة',
  buttonUrl: 'https://www.bionixus.com/ar/contact',
};

const ARABIC_BLOG_CTA_BY_SLUG: Record<string, BlogPostCtaSection> = {
  'gcc-pharmaceuticals-market-arabic-2026': {
    title: 'سوق الأدوية في الخليج — إحاطة مع BioNixus',
    description:
      'تحليل SFDA وNUPCO وCHI، استبيانات أطباء، KOL، وRWE عبر السعودية والإمارات ومصر — لفرق Commercial وAccess.',
    buttonText: 'تواصل معنا',
    buttonUrl: 'https://www.bionixus.com/ar/contact',
  },
  'saudi-healthcare-market-research-firms-ar': {
    title: 'أبحاث السوق الصحي في السعودية مع BioNixus',
    description:
      'شبكات أطباء سعوديين، KOL، امتثال PDPL، وبرامج كمية ونوعية مصممة لـ SFDA وCHI وNUPCO.',
    buttonText: 'اطلب عرضاً',
    buttonUrl: 'https://www.bionixus.com/ar/contact',
  },
  'pharmaceutical-market-research-middle-east-gcc': {
    title: 'أبحاث السوق الدوائية في MENA — إحاطة BioNixus',
    description:
      'من SFDA إلى MOHAP وEgypt MOH — رؤى ميدانية وتحليل وصول عبر الشرق الأوسط ودول الخليج.',
    buttonText: 'اطلب إحاطة',
    buttonUrl: 'https://www.bionixus.com/ar/contact',
  },
  'saudi-pharma-market-2026': {
    title: 'سوق الدواء السعودي 2026 — استشارة BioNixus',
    description:
      'Vision 2030، التحول الرقمي، وبرامج MR وAccess للإطلاق والتسعير في المملكة.',
    buttonText: 'تواصل مع BioNixus',
    buttonUrl: 'https://www.bionixus.com/ar/contact',
  },
  'quantitative-market-research-and-market-access': {
    title: 'البحث الكمي والوصول إلى السوق في MENA',
    description:
      'BioNixus تدمج استبيانات الأطباء، تحليل الدافعين، ونماذج الوصول لـ SFDA وCHI في السعودية والخليج.',
    buttonText: 'اطلب إحاطة',
    buttonUrl: 'https://www.bionixus.com/ar/contact',
  },
  'saudi-healthcare-market-research-guide-ar-2026': {
    title: 'دليل أبحاث السوق الصحي في السعودية — BioNixus',
    description: 'SFDA وCHI وNUPCO، KOL، وبرامج MR ميدانية للفرق الدوائية في المملكة.',
    buttonText: 'تواصل معنا',
    buttonUrl: 'https://www.bionixus.com/ar/contact',
  },
  'heor-consulting-saudi-arabia-ar-2026': {
    title: 'استشارات HEOR في السعودية',
    description: 'نمذجة اقتصاد صحي، RWE، ودعم dossiers لـ SFDA وCHI — بالعربية والإنجليزية.',
    buttonText: 'اطلب إحاطة',
    buttonUrl: 'https://www.bionixus.com/ar/contact',
  },
  'saudi-arabia-pharmaceutical-market-research-2026-ar': {
    title: 'أبحاث السوق الدوائي في السعودية 2026',
    description: 'Vision 2030، SFDA، وبرامج insight للإطلاق والتسعير في المملكة.',
    buttonText: 'تواصل مع BioNixus',
    buttonUrl: 'https://www.bionixus.com/ar/contact',
  },
};

export function getArabicBlogCta(
  slug: string | undefined,
  sanityCta: BlogPostCtaSection | undefined | null,
): BlogPostCtaSection {
  if (slug && ARABIC_BLOG_CTA_BY_SLUG[slug]) {
    return ARABIC_BLOG_CTA_BY_SLUG[slug];
  }
  if (sanityCta && !looksLikeEnglishCta(sanityCta)) {
    return {
      ...DEFAULT_ARABIC_BLOG_CTA,
      ...sanityCta,
      buttonUrl: sanityCta.buttonUrl || DEFAULT_ARABIC_BLOG_CTA.buttonUrl,
      buttonText: sanityCta.buttonText || DEFAULT_ARABIC_BLOG_CTA.buttonText,
    };
  }
  return DEFAULT_ARABIC_BLOG_CTA;
}
