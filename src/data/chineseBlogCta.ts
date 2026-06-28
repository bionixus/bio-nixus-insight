import type { BlogPostCtaSection } from '@/types/blog';

const EN_CTA_MARKERS =
  /\b(Scope your|Request a commercial|SFDA|Germany|AMNOG|GCC briefing)\b/i;

export const DEFAULT_CHINESE_BLOG_CTA: BlogPostCtaSection = {
  title: '中国与亚太市场准入简报',
  description:
    'BioNixus 支持 NMPA 与 NRDL 路径、医生与支付方研究、KOL 项目及竞争分析 — 覆盖中国、亚太与全球 launch 决策。',
  buttonText: '申请简报',
  buttonUrl: 'https://www.bionixus.com/zh/contact',
};

const CHINESE_BLOG_CTA_BY_SLUG: Record<string, BlogPostCtaSection> = {
  'pharmaceutical-market-research-china-2026': {
    title: '2026 中国医药市场研究 — BioNixus 简报',
    description:
      'NMPA、NRDL、医生调研与 RWE 设计 — 帮助 global teams 制定亚太 evidence 与 launch 策略。',
    buttonText: '联系 BioNixus',
    buttonUrl: 'https://www.bionixus.com/zh/contact',
  },
  'nmpa-pharmaceutical-market-research-china-2026': {
    title: 'NMPA 与中国医药 MR — BioNixus 咨询',
    description:
      '注册 gap 分析、prescriber 研究、KOL 网络与 hospital listing 监测 — 衔接 global 与 China access。',
    buttonText: '申请咨询',
    buttonUrl: 'https://www.bionixus.com/zh/contact',
  },
  'healthcare-overview-china-market-2026': {
    title: '中国医疗市场 2026 — BioNixus 洞察',
    description:
      '分级诊疗、数字化与支付方动态 — 定制 MR 支持 commercial 与 access 团队。',
    buttonText: '申请简报',
    buttonUrl: 'https://www.bionixus.com/zh/contact',
  },
};

export function getChineseBlogCta(
  slug: string | undefined,
  sanityCta: BlogPostCtaSection | undefined | null,
): BlogPostCtaSection {
  if (slug && CHINESE_BLOG_CTA_BY_SLUG[slug]) return CHINESE_BLOG_CTA_BY_SLUG[slug];
  const blob = [sanityCta?.title, sanityCta?.description, sanityCta?.buttonText].filter(Boolean).join(' ');
  if (sanityCta && blob && !EN_CTA_MARKERS.test(blob)) {
    return {
      ...DEFAULT_CHINESE_BLOG_CTA,
      ...sanityCta,
      buttonUrl: sanityCta.buttonUrl || DEFAULT_CHINESE_BLOG_CTA.buttonUrl,
    };
  }
  return DEFAULT_CHINESE_BLOG_CTA;
}
