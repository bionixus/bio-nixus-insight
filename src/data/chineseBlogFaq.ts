import type { PortableTextBlock } from '@portabletext/types';

export type BlogFaqItem = { question: string; answer: string };

const EN_FAQ_MARKERS =
  /\b(Who is this|Scope your|SFDA|MOHAP|Request a commercial|Executive summary|market access and healthcare)\b/i;

export function looksLikeEnglishFaq(items: BlogFaqItem[]): boolean {
  if (!items.length) return true;
  return items.some((item) => EN_FAQ_MARKERS.test(item.question) || EN_FAQ_MARKERS.test(item.answer));
}

export const BLOG_INDEX_FAQ_ZH: BlogFaqItem[] = [
  {
    question: 'BioNixus 博客涵盖哪些主题？',
    answer:
      '文章涵盖医生定量研究、KOL 定性项目、中国及亚太市场准入、欧洲与全球 HTA、医院采纳、监管更新与上市策略 — 面向 commercial、medical 与 access 团队。',
  },
  {
    question: '多久发布新洞察？',
    answer:
      '我们在项目完成与市场变化时发布实践导向文章。订阅页脚通讯获取每月医药市场研究要点。',
  },
  {
    question: '能否请求特定国家或主题深度分析？',
    answer:
      '可以。通过联系表单说明治疗领域、地理范围与决策时间 — 通常在一个工作日内回复定制方法概要。',
  },
];

export const GENERIC_CHINESE_BLOG_FAQ: BlogFaqItem[] = [
  {
    question: '本指南适合谁？',
    answer:
      '面向中国、亚太及国际团队的 commercial、market access 与 medical affairs 负责人。支持报销与洞察规划 — 不替代产品医学建议。',
  },
  {
    question: '如何验证市场规模估计？',
    answer:
      '多源交叉 — NMPA 摘要、本地流行病学与支付方访谈。BioNixus 建议与 NRDL/医保谈判时间线一致的保守建模。',
  },
  {
    question: '何时选择定制研究而非汇总数据？',
    answer:
      '汇总数据回答量级；定制研究解释处方与报销差异。混合设计常见于准入与上市决策。',
  },
  {
    question: 'BioNixus 如何支持制药团队？',
    answer:
      '医疗健康市场研究、市场准入、HTA/NMPA 分析、KOL 映射与竞争模拟 — 覆盖中国与全球。联系 BioNixus 获取简报。',
  },
  {
    question: '是否包含治疗建议？',
    answer: '否。仅涵盖商业、准入与研究运营。',
  },
];

const CHINESE_BLOG_FAQ_BY_SLUG: Record<string, BlogFaqItem[]> = {
  'pharmaceutical-market-research-china-2026': [
    {
      question: '2026 年中国医药市场研究的关键驱动因素是什么？',
      answer:
        'NMPA 改革、NRDL 医保谈判、带量采购与真实世界证据（RWE）要求共同推动证据规划 — 全球药企需在亚太设计 primary research。',
    },
    {
      question: 'NMPA 注册路径如何影响研究设计？',
      answer:
        '注册类别与临床要求决定 endpoints 与对照选择；MR 应尽早对齐 NMPA 指南与本地 prescriber 行为。',
    },
    {
      question: '医保谈判（NRDL）对 launch 策略有何影响？',
      answer:
        'NRDL 纳入决定医院准入与价格天花板；需结合 physician survey 与 hospital listing 数据建模。',
    },
    {
      question: 'BioNixus 在中国提供哪些服务？',
      answer:
        '医生调研、KOL 映射、RWE 设计、竞争情报与亚太 launch 监测 — 支持 global teams 本地化决策。',
    },
  ],
  'nmpa-pharmaceutical-market-research-china-2026': [
    {
      question: 'NMPA 与 FDA/EMA 审批流程有何主要差异？',
      answer:
        'NMPA 强调本地临床与 CDE 沟通；global dossier 需补充中国人群数据与 RWE 计划。',
    },
    {
      question: '如何进行符合 NMPA 要求的 RWE 研究？',
      answer:
        '利用医院 HIS、医保数据库与前瞻性 registry — 需伦理与数据合规审批。',
    },
    {
      question: 'BioNixus 如何支持 NMPA 相关 MR？',
      answer:
        'Gap 分析、prescriber 研究、KOL 网络与 launch 监测，衔接 global 与 China teams。',
    },
  ],
  'healthcare-overview-china-market-2026': [
    {
      question: '2026 年中国医疗市场概览应关注什么？',
      answer:
        '分级诊疗、数字化、创新药审批加速与支付方压力 — 影响 commercial 与 access 优先级。',
    },
    {
      question: '全球团队如何本地化 China insight？',
      answer:
        '结合 NMPA/NRDL 时间线与 primary research，避免单一 global forecast。',
    },
  ],
};

const EN_SUMMARY_MARKERS =
  /\b(market access and healthcare market research|Executive summary|Scope your|without substituting clinical)\b/i;

const CHINESE_EXECUTIVE_SUMMARY_BY_SLUG: Record<string, string> = {
  'pharmaceutical-market-research-china-2026':
    '2026 年医药市场研究指南：全球药企亚太证据策略、NMPA、NRDL 与 primary research — BioNixus 汇总监管与支付方要点，不替代临床建议。',
  'nmpa-pharmaceutical-market-research-china-2026':
    'NMPA 与中国医药市场研究：注册路径、CDE 沟通、RWE 与 physician insight — 面向 global pharma commercial 与 access 团队。',
};

export function getChineseExecutiveSummary(title: string | undefined, slug: string | undefined): string {
  if (slug && CHINESE_EXECUTIVE_SUMMARY_BY_SLUG[slug]) return CHINESE_EXECUTIVE_SUMMARY_BY_SLUG[slug];
  const focus = title?.split(':')[0]?.trim() || title?.split('：')[0]?.trim() || '本文';
  return `${focus}：中国及亚太医药市场研究与市场准入要点，面向制药与 MedTech 商业团队。BioNixus 汇总 NMPA、NRDL 与洞察 — 不替代临床建议。`;
}

const TOC_HEADING_ZH_BY_ANCHOR: Record<string, string> = {
  'key-insights': '核心洞察',
  'detailed-analysis': '详细分析',
  'apac-overview': '亚太医药市场概览',
  nmpa: 'NMPA 与中国注册路径',
  'nrdl-access': '医保谈判与医院准入',
  'methodology-zh': '医药市场研究方法论',
  'rwe-apac': '真实世界证据在亚太的应用',
  'bionixus-apac': 'BioNixus 亚太支持',
  'bionixus-advisory': 'BioNixus 咨询',
  'related-reading': '延伸阅读',
  faq: '常见问题',
};

export function localizeTocForChinese<T extends { heading?: string; anchor?: string }>(
  items: T[] | null | undefined,
): T[] | null {
  if (!items?.length) return null;
  return items.map((item) => {
    const anchor = item.anchor?.replace(/^#/, '') ?? '';
    const zh = anchor ? TOC_HEADING_ZH_BY_ANCHOR[anchor] : undefined;
    return zh ? { ...item, heading: zh } : item;
  });
}

function portableTextToPlainText(blocks: unknown): string {
  if (!Array.isArray(blocks)) return '';
  return blocks
    .flatMap((block) => {
      if (block && typeof block === 'object' && 'children' in block && Array.isArray(block.children)) {
        return block.children.map((child: { text?: string }) => child.text ?? '');
      }
      return [];
    })
    .join(' ')
    .trim();
}

export function resolveChineseExecutiveSummary(
  title: string | undefined,
  slug: string | undefined,
  summary: string | PortableTextBlock[] | null,
): string | PortableTextBlock[] | null {
  if (!summary) return getChineseExecutiveSummary(title, slug);
  const plain = typeof summary === 'string' ? summary : portableTextToPlainText(summary);
  if (!plain || EN_SUMMARY_MARKERS.test(plain)) return getChineseExecutiveSummary(title, slug);
  return summary;
}

export function getChineseBlogFaqItems(
  slug: string | undefined,
  title: string | undefined,
  sanityFaq: BlogFaqItem[] = [],
): BlogFaqItem[] {
  if (slug && CHINESE_BLOG_FAQ_BY_SLUG[slug]) return CHINESE_BLOG_FAQ_BY_SLUG[slug];
  if (sanityFaq.length > 0 && !looksLikeEnglishFaq(sanityFaq)) return sanityFaq;
  return GENERIC_CHINESE_BLOG_FAQ;
}
