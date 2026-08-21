import {
  BarChart3,
  Users,
  Landmark,
  Search,
  Microscope,
  Map,
  Phone,
  Monitor,
  UserCheck,
  Eye,
  TrendingUp,
  MessageCircle,
  MousePointerClick,
  Layers,
  LineChart,
  Stethoscope,
  Building2,
  ShoppingBag,
  Cpu,
  Globe2,
} from 'lucide-react';
import type {
  CommercialOffering,
  HealthcareService,
  MethodologyService,
} from './servicesHubContent';

export const ZH_HERO_METRICS = [
  { value: '中国+亚太', label: '核心市场国别深度' },
  { value: '六', label: '医药核心模块' },
  { value: 'NMPA/NRDL', label: '注册与准入合规调研' },
  { value: '九+', label: '实地调研方法' },
] as const;

export const ZH_HEALTHCARE_SERVICES: HealthcareService[] = [
  {
    slug: 'quantitative-research',
    title: '定量市场研究与医生调研',
    summary:
      '在中国大陆及亚太核心市场开展统计功效充足的医生、支付方与医院调研——线上、电话（CATI）与面访（CAPI）并行，样本量、配额与显著性检验均可界定，可直接支撑 NMPA 注册申报、NRDL 国家医保谈判与省级挂网准入决策。',
    icon: BarChart3,
    tags: ['中国', '亚太', '支付方'],
  },
  {
    slug: 'qualitative-research',
    title: '定性研究与专家洞察',
    summary:
      '与 KOL、临床科室主任、药事委员会成员及医院管理者开展深度访谈、焦点小组与专家顾问会——解释中国与亚太市场中药品采纳、处方路径与准入阻力背后的原因，而不只是测量结果。',
    icon: Users,
    tags: ['KOL', '专家顾问会', '诊疗路径'],
  },
  {
    slug: 'market-access',
    title: '市场准入、HTA 与医保报销策略',
    summary:
      '以证据驱动的定价、支付方沟通与价值故事测试，服务中国（NMPA/CDE 注册、NRDL 国家医保谈判、省级挂网与带量采购）以及日本、韩国、新加坡等亚太市场——并与 NICE、G-BA、HAS 的 HTA 逻辑保持可比性。',
    icon: Landmark,
    tags: ['HTA', 'NRDL', '带量采购'],
  },
  {
    slug: 'competitive-intelligence',
    title: '竞争情报',
    summary:
      '在研管线与竞争格局评估、上市准备度审视、生物类似药与仿制药影响测算——形成对本土企业与跨国企业竞争态势的清晰判断，作为产品组合与上市决策的可靠依据。',
    icon: Search,
    tags: ['管线', '上市准备', '生物类似药'],
  },
  {
    slug: 'clinical-trial-support',
    title: '临床试验支持',
    summary:
      '研究中心筛选与研究者画像、患者招募可行性评估、来自临床医生的方案反馈，以及真实世界证据（RWE）规划，覆盖中国大陆、亚太与邻近市场。',
    icon: Microscope,
    tags: ['可行性', 'RWE', '研究者'],
  },
  {
    slug: 'kol-stakeholder-mapping',
    title: 'KOL 与利益相关方图谱',
    summary:
      '识别真正影响决策的意见领袖、指南制定者、药事委员会与集中采购话语方——覆盖中国三甲医院、学会指南体系与省级医保部门，并结合患者旅程与诊疗路径分析。',
    icon: Map,
    tags: ['利益相关方', '患者旅程', '影响力'],
  },
];

export const ZH_METHODOLOGY_SERVICES: MethodologyService[] = [
  {
    id: 'cati',
    title: 'CATI — 计算机辅助电话访问',
    abbr: 'CATI',
    summary:
      '计算机辅助电话访问，触达难以接触的医生、支付方与 B2B 决策者——配备实时督导、配额管理以及中英双语访问团队，覆盖中国大陆与亚太市场。',
    icon: Phone,
    industries: '医药 · B2B · 金融服务',
    href: '/services/quantitative-research',
  },
  {
    id: 'cawi',
    title: 'CAWI — 在线问卷调研',
    abbr: 'CAWI',
    summary:
      '可规模化的在线问卷，用于医生追踪研究、品牌健康度与消费者样本库——移动端优先设计、作弊筛查，并实现亚太多国数据口径统一。',
    icon: Monitor,
    industries: '医疗健康 · 全行业',
    href: '/services/quantitative-research',
  },
  {
    id: 'capi',
    title: 'CAPI — 面对面实地调研',
    abbr: 'CAPI',
    summary:
      '面对面访问，用于医院审计、药店与零售终端审计以及现场 B2B 访谈——配备可离线作业设备与督导质控，覆盖中国大陆、海湾地区与欧洲。',
    icon: UserCheck,
    industries: '医疗健康 · 零售 · 快消',
    href: '/services/quantitative-research',
  },
  {
    id: 'focus-groups',
    title: '焦点小组与小型座谈',
    summary:
      '线下、线上或混合形式的主持式小组讨论，用于概念测试与信息优化——可提供中文、英文与日语同声传译。',
    icon: MessageCircle,
    industries: '医药 · B2C · 旅游',
    href: '/services/qualitative-research',
  },
  {
    id: 'mystery-shopping',
    title: '神秘顾客与服务审计项目',
    summary:
      '结构化的服务审计项目，覆盖银行网点、酒店、药店与医疗机构前台服务——严格按照您的服务标准评分。',
    icon: Eye,
    industries: '银行 · 零售 · 酒店',
    href: '/contact',
  },
  {
    id: 'price-elasticity',
    title: '价格弹性与联合分析',
    summary:
      'Van Westendorp、Gabor-Granger 与离散选择实验模型，测算价格敏感度与支付意愿——适用于新药上市、带量采购报价情景、快消与保险产品定价。',
    icon: TrendingUp,
    industries: '医药 · 快消 · 保险',
    href: '/contact',
  },
  {
    id: 'online-behaviour',
    title: '线上行为追踪',
    summary:
      '数字旅程分析与点击流研究——与问卷数据结合，覆盖电商、银行与互联网医疗平台。',
    icon: MousePointerClick,
    industries: 'B2C · 电商 · 数字医疗',
    href: '/contact',
  },
  {
    id: 'brand-tracking',
    title: '品牌追踪与知名度研究',
    summary:
      '连续式或脉冲式追踪，衡量提示前后知名度、考虑度、NPS 与竞争声量份额——以 CAWI 或 CATI 执行，并配套市场团队可直接使用的数据看板。',
    icon: LineChart,
    industries: '快消 · 电信 · OTC',
    href: '/services/competitive-intelligence',
  },
  {
    id: 'segmentation',
    title: '市场细分与 MaxDiff',
    summary:
      '基于需求的市场细分、潜类别分析与 MaxDiff 优先级排序，服务 B2B 与 B2C 的定位与产品组合决策。',
    icon: Layers,
    industries: 'B2B · 科技 · 消费',
    href: '/services/quantitative-research',
  },
];

export const ZH_COMMERCIAL_OFFERINGS: CommercialOffering[] = [
  {
    to: '/services/cross-industry',
    title: '跨行业市场研究',
    summary:
      '面向非医疗健康客户的 B 线专属落地页——覆盖亚太、中东与北非及欧洲的多国定量与定性研究，服务快消、金融服务、科技、工业与公共部门。',
    icon: Globe2,
    examples: '快消 · 银行 · 科技 · 工业 · 公共部门',
  },
  {
    to: '/pharma-healthcare-industries',
    title: '医药、生物技术与医疗器械',
    summary:
      '这是 BioNixus 的立身之本——新药上市、市场准入、医疗器械、体外诊断、生物技术与消费者健康研究，采用受监管品类所要求的抽样与合规标准。',
    icon: Stethoscope,
    examples: '肿瘤 · 罕见病 · 医疗器械 · OTC · 疫苗',
  },
  {
    to: '/b2b-industries',
    title: 'B2B 与企业研究',
    summary:
      '采购决策委员会图谱、市场规模测算与竞争情报，服务科技、能源、房地产、公共部门与工业制造——在中国大陆与亚太具备扎实的落地执行能力。',
    icon: Building2,
    examples: '科技 · 房地产 · 能源 · 制造',
  },
  {
    to: '/b2c-industries',
    title: 'B2C 与消费者研究',
    summary:
      '品牌追踪、购物者洞察、市场细分与需求研究，服务快消、零售、金融服务、电信与汽车行业，覆盖中国大陆及亚太主要市场。',
    icon: ShoppingBag,
    examples: '银行 · 零售 · 旅游 · 快消 · 电信',
  },
  {
    to: '/bionixus-industries',
    title: '人工智能、IT 与成长期企业',
    summary:
      '赢单失单分析、买方画像研究与市场进入策略验证，服务 B2B 软件、网络安全、数字医疗人工智能与 IT 服务。',
    icon: Cpu,
    examples: 'SaaS · 人工智能初创 · IT 服务 · 数字医疗',
  },
];

export const ZH_HUB_LINKS = [
  { to: '/healthcare-market-research', label: '医疗健康市场研究枢纽' },
  { to: '/services/cross-industry', label: '跨行业市场研究（B 线）' },
  { to: '/bionixus-industries', label: 'BioNixus 全行业能力总览' },
  { to: '/market-research-by-industry', label: '按行业划分的市场研究（全球索引）' },
  { to: '/market-research', label: '市场研究服务总览' },
  { to: '/methodology', label: '研究方法论与合规' },
  { to: '/case-studies', label: '客户案例研究' },
] as const;

export const ZH_SERVICE_FAQ = [
  {
    question: 'BioNixus 除中国大陆以外还覆盖哪些市场？',
    answer:
      '我们以中国大陆为重点，并延伸至日本、韩国、新加坡、马来西亚等亚太市场，同时可衔接美国、欧洲与中东项目。BioNixus 在三十八个国家执行调研，覆盖十六个行业垂直领域，累计交付一百二十七+项目。同一套方法论同样适用于 B2B 与 B2C 品类，具体范围请见行业枢纽。',
  },
  {
    question: 'CATI、CAWI 还是 CAPI 更适合我们的研究？',
    answer:
      'CAWI 适合大规模在线样本与追踪研究；CATI 用于触达线上难以覆盖的医生与支付方；医院审计与终端现场访问则必须采用 CAPI。我们会在立项阶段根据目标人群、地域与时间表，推荐单一模式或混合模式设计。',
  },
  {
    question: '中国上市前项目应该选择哪些服务？',
    answer:
      '典型组合是定量医生调研、定性 KOL 深访，以及围绕 NMPA/CDE 注册与 NRDL 国家医保谈判的市场准入支持。模块会按您所处阶段裁剪——可行性、定位、定价或 HTA——并与您在中国大陆及亚太的内部决策日历对齐。',
  },
  {
    question: '可以只委托单个模块，还是必须整体项目？',
    answer:
      '两者皆可。每张服务卡片都链接至独立的服务范围页面。您可以只做一轮 CATI、一组焦点小组、一次价格弹性研究，也可以委托多国项目，让各模块共享抽样逻辑与报告模板。',
  },
  {
    question: '你们在中国大陆与亚太的覆盖情况如何？',
    answer:
      '我们在中国大陆及亚太主要市场执行实地调研，并可扩展至全球三十八个国家；在美国、英国、埃及、沙特阿拉伯、阿联酋、科威特与巴西设有办公室与实地网络。',
  },
  {
    question: '多久可以拿到方案？',
    answer:
      '请通过联系表单提供研究目标、目标人群、所属行业与时间要求。我们通常在一个工作日内返回定制化的方法论方案。',
  },
] as const;

export const ZH_RECOVERY_LINK_LABELS: Record<string, string> = {
  '/blog/healthcare-market-research-europe-2026': '欧洲医疗健康市场研究（二〇二六年指南）',
  '/blog/pharmaceutical-market-research-uk-2026': '英国医药市场研究（二〇二六年指南）',
  '/blog/quantitative-market-research-and-market-access': '定量市场研究与市场准入',
  '/blog/hospital-market-research': '面向医药企业的医院市场研究',
  '/healthcare-market-research/germany': '德国医疗健康市场研究',
  '/healthcare-market-research/france': '法国医疗健康市场研究',
  '/healthcare-market-research/uk': '英国医疗健康市场研究',
};

export const ZH_SERVICES_HUB_COPY = {
  seo: {
    title: '中国与亚太医药市场研究 | BioNixus',
    description:
      '聚焦中国大陆与亚太的医药及医疗健康市场研究——定量与定性医生调研、NMPA/CDE 注册与 NRDL 医保准入支持、KOL 图谱与合规实地调研。',
    canonical: 'https://www.bionixus.com/zh/services',
  },
  breadcrumb: { home: '首页', services: '服务' },
  hero: {
    eyebrow: '中国与亚太',
    h1: '面向中国与亚太市场的医药及医疗健康市场研究',
    subtitle:
      'BioNixus 由资深团队在中国大陆与亚太主要市场执行研究项目——从医生调研与 HTA、医保准入策略，到 CATI、CAWI、CAPI 实地调研、焦点小组与价格弹性研究。一套方法论、一支资深团队，围绕您真正需要做出的上市或准入决策来设计。',
    ctaProposal: '索取方案',
    ctaMethodology: '研究方法论',
  },
  intro: {
    h2: '三大相互衔接的研究组合',
    columns: [
      {
        h3: '医药与医疗健康',
        body: '受监管品类需要经核验的 HCP 与支付方样本、具备 HTA 视角的分析，以及能够支撑上市决策的证据——覆盖中国大陆、日本、韩国及亚太邻近市场。',
      },
      {
        h3: '方法论与实地调研',
        body: 'CATI、CAWI、CAPI、焦点小组、神秘顾客、价格弹性、品牌追踪与数字行为模块——可组合为同一项目，共享质控标准与报告体系。',
      },
      {
        h3: '商业与跨行业',
        body: '面向企业采购方、机构决策者与消费市场的非医药项目——请通过',
      },
    ],
  },
  healthcare: {
    h2: '医药与医疗健康研究模块',
    intro:
      '定量与定性方法、市场准入、竞争情报、临床试验支持与利益相关方图谱——可组合为一个覆盖中国大陆与亚太的整体项目。',
    viewScope: '查看服务范围',
  },
  methodology: {
    eyebrow: '实地调研与分析',
    h2: '面向医药与各行业的研究方法',
    intro:
      '同一支资深团队为医生样本库与 B2B 项目执行 CATI、CAWI 与 CAPI 实地调研——并在您的品类需要时，补充神秘顾客、价格弹性、焦点小组与线上行为追踪。',
    learnMore: '了解更多',
  },
  commercial: {
    h2: '商业与跨行业研究',
    intro:
      '面向企业采购方、机构决策者与消费市场的非医药项目——重点覆盖中国大陆、亚太与欧洲。',
    explore: '探索该板块',
  },
  links: {
    h2: '相关研究枢纽与行业',
    intro:
      '您可以从医疗健康枢纽、某个行业板块或国别索引开始——取决于您的品类与目标地域。',
    moreGuides: '更多研究指南',
    linksCount: '个链接',
  },
  faq: { h2: '常见问题' },
  jsonLd: {
    collectionName: '中国与亚太医药市场研究',
    collectionDescription:
      '聚焦中国大陆与亚太的医药及医疗健康市场研究——定量与定性方法、NMPA/CDE 注册与 NRDL 医保准入支持，以及合规实地调研。',
  },
} as const;
