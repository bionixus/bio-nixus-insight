import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileSpreadsheet,
  FlaskConical,
  Globe2,
  LineChart,
  ShieldCheck,
  Users2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';

const pageUrl = 'https://www.bionixus.com/zh/bionixus-market-research-middle-east';
const englishSiblingUrl = 'https://www.bionixus.com/bionixus-market-research-middle-east';
const pageImage = 'https://www.bionixus.com/images/quant-hcp-survey-executive.png';
const lastUpdated = '2026-03-17';
const editorialLead = 'Dr. Mohammad Alsaadany';
const contactHref = '/zh/contact';

const proofCards = [
  {
    metric: '< 15 天',
    title: '首轮洞察快速交付',
    description: '在重大预算承诺前提供试点证据,以降低上市决策不确定性。',
  },
  {
    metric: '7 个重点市场',
    title: '国家级深度覆盖',
    description: '针对沙特、阿联酋、科威特、埃及、卡塔尔、巴林与阿曼的定制执行模型。',
  },
  {
    metric: '跨职能交付物',
    title: '决策可信度',
    description: '商务、医学与市场准入团队围绕同一证据叙事对齐。',
  },
  {
    metric: '受控质量的田野研究',
    title: '数据完整性',
    description: '招募验证、受访者质量核查与透明的抽样治理。',
  },
];

const countryCards = [
  {
    country: '沙特阿拉伯',
    regulator: 'SFDA',
    marketReality: '通过 NUPCO 集中采购的大规模机构招标,以及公私路径混合的复杂性。',
    researchImplication: '深度的付费方与采购方图谱,以及分层的客户战略。',
  },
  {
    country: '阿拉伯联合酋长国',
    regulator: 'DHA、DOH、MOHAP',
    marketReality: '各酋长国之间存在运营差异,私营医疗机构影响力显著。',
    researchImplication: '按渠道的需求建模,以及各酋长国医生诊疗路径对比。',
  },
  {
    country: '科威特',
    regulator: 'MOH Kuwait',
    marketReality: '医院处方集流程敏感,决策影响力高度集中。',
    researchImplication: '早期利益相关方排序与机构反对意见图谱。',
  },
  {
    country: '埃及',
    regulator: 'EDA',
    marketReality: '规模机会显著,但可负担性与渠道分层压力并存。',
    researchImplication: '价格敏感度框架与采纳障碍诊断。',
  },
  {
    country: '卡塔尔',
    regulator: 'MOPH',
    marketReality: '机构质量要求极高,需求高度集中于 HMC 与 PHCC 等中心。',
    researchImplication: '聚焦 KOL 与医院影响力架构,以加速上市启动。',
  },
  {
    country: '巴林',
    regulator: 'NHRA',
    marketReality: '市场规模较小,但在区域可比性上具备高战略价值。',
    researchImplication: '精准抽样并进行跨市场基准对标,指导复制策略。',
  },
  {
    country: '阿曼',
    regulator: 'MOH Oman',
    marketReality: '公共部门主导,不同地区存在运营准入约束。',
    researchImplication: '本地化的田野规划与务实的落地情景设计。',
  },
];

const useCases = [
  {
    title: '上市前市场塑造',
    icon: Compass,
    summary: '在设计上市方案前,验证未满足需求、细分市场机会与利益相关方影响力。',
    outputs: ['上市就绪评分卡', '利益相关方优先级图', '国家启动排序'],
  },
  {
    title: '市场准入与价值证据',
    icon: ClipboardCheck,
    summary: '评估付费方证据门槛与委员会预期,提升报销策略质量。',
    outputs: ['价值信息测试', '准入障碍矩阵', 'HTA 与付费方影响简报'],
  },
  {
    title: '上市后优化',
    icon: LineChart,
    summary: '跟踪上市后采纳阻力、信息共鸣度以及客户层面的转化障碍。',
    outputs: ['采纳诊断', '细分调整建议', '90 天优化计划'],
  },
];

const methodologyComparison = [
  {
    model: '定性研究',
    bestFor: '早期假设塑造与利益相关方叙事诊断。',
    strength: '在各国决策路径上具备极高情境深度。',
    risk: '仅凭定性方向明确但不具备统计推断能力。',
    gccFit: '最适合上市前或证据构建的短周期冲刺。',
  },
  {
    model: '定量研究',
    bestFor: '市场规模测算、细分优先级排序与采纳度衡量。',
    strength: '具备统计置信度以及波次间的可比性。',
    risk: '抽样治理薄弱会造成虚假的精确度。',
    gccFit: '最适合上市排序与准入证据决策。',
  },
  {
    model: '混合方法',
    bestFor: '将行为深度与决策规模上的统计置信度相结合。',
    strength: '为跨职能团队兼顾确定性与情境。',
    risk: '对治理与研究工具纪律要求更严格。',
    gccFit: '最适合海湾多国上市与准入并行的项目。',
  },
];

const executionBlueprint = [
  {
    tier: '第 1–30 天',
    focus: '决策框架与风险图谱',
    output: '重点市场假设 + 利益相关方架构',
  },
  {
    tier: '第 31–60 天',
    focus: '田野执行与验证',
    output: '阶段性证据包 + 准入阻力诊断',
  },
  {
    tier: '第 61–90 天',
    focus: '激活与优化',
    output: '国家行动计划 + KPI 联动的执行路线图',
  },
];

const caseSnapshots = [
  {
    title: '海湾肿瘤药物上市排序项目',
    result: '上市优先级不确定性下降 31%',
    detail: '跨国利益相关方证据揭示付费方与医院阻力在何处最先具备可操作性。',
  },
  {
    title: '阿联酋跨酋长国准入研究',
    result: '准入信息匹配度提升 22%',
    detail: '按酋长国差异化医生路径假设,避免过度概化的市场规划。',
  },
  {
    title: '沙特机构需求诊断项目',
    result: '试点到决策周期缩短至 14 天',
    detail: '将定量与定性证据整合为一份治理叙事,服务商务与市场准入团队。',
  },
];

const faqItems = [
  {
    question: '中东制药市场研究与全球模板化研究有什么本质不同?',
    answer:
      '中东项目需要按国家定制的利益相关方逻辑、付费方路径解读以及运营可行性测试。单一的全球模板通常无法捕捉这些动态,因此 BioNixus 会根据当地决策现实调整方法论,同时保持跨市场的可比性。',
  },
  {
    question: '首个合作阶段通常包括哪些内容?',
    answer:
      '在前两周,团队通常会获得目标对齐、利益相关方架构、试点假设框架以及一份以决策为导向的证据路线图。目的是快速从意图过渡到可执行的优先事项。',
  },
  {
    question: '交付物是否可以同时供商务与医学团队使用?',
    answer:
      '可以。我们将分析层次结构化,使商务、医学与市场准入部门能够基于同一证据基础工作,同时保留各自角色相关的洞见与决策优先级。',
  },
  {
    question: 'BioNixus 启动中东多国项目通常需要多久?',
    answer:
      '大多数项目以短期发现冲刺开启,一旦范围与合规要求对齐,即可迅速进入田野阶段。整体时间取决于国家组合与利益相关方复杂度,但清晰的决策问题可以支持快速启动。',
  },
  {
    question: '海湾地区制药研究采用哪些样本质量控制措施?',
    answer:
      '项目会在最终分析前实施基于角色的资格核查、招募验证、重复识别以及质量审阅治理。这些措施可防止样本构成薄弱,并提升决策可信度。',
  },
  {
    question: 'BioNixus 能否在海湾地区同时开展定性与定量研究?',
    answer:
      '可以。混合方法项目专为需要在同一决策周期内兼顾情境洞察与统计置信度的团队而设计,尤其适用于上市与准入规划。',
  },
  {
    question: '洞察交付之后,BioNixus 如何支持领导团队?',
    answer:
      '每次项目都包含实践性激活阶段,将研究发现转化为 30、60、90 天的行动计划,并配以责任归属和可衡量的检查节点,服务于商务执行与市场准入落地。',
  },
  {
    question: '沙特 SFDA 与 NUPCO 集中采购下的制药研究有何独特之处?',
    answer:
      '沙特将 SFDA(沙特食品药品监督管理局)审批与 NUPCO(国家统一采购公司)集中采购结合。研究必须同时建模 SFDA 合规要求、NUPCO 招标窗口逻辑以及卫生部医院集团、武装部队医疗服务等系统内的医院处方集动态。BioNixus 将这三层结构整合为一份可执行的证据。',
  },
];

const methodologySteps = [
  {
    name: '发现',
    icon: Globe2,
    detail: '定义决策问题、市场假设,并绘制各国利益相关方架构。',
  },
  {
    name: '验证',
    icon: FlaskConical,
    detail: '以质量控制的方式执行混合方法研究,并将假设与田野证据进行对照检验。',
  },
  {
    name: '激活',
    icon: BarChart3,
    detail: '将发现转化为上市、准入与增长的行动,并配以可衡量的实施路线图。',
  },
];

const first14DaysDeliverables = [
  '决策优先级研讨会与目标层级',
  '按国家与职能的利益相关方影响力图',
  '初步细分与需求假设',
  '研究工具架构草稿',
  '田野研究风险登记册与缓解措施',
  '面向决策层的证据路线图与即时行动',
];

const faqSchema = buildFAQSchema(faqItems, { pageUrl });
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: '首页', href: '/zh' },
  { name: '医疗市场研究', href: '/zh/healthcare-market-research' },
  { name: '中东市场研究', href: '/zh/bionixus-market-research-middle-east' },
]);

const pageJsonLd: object[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '中东制药市场研究 | BioNixus',
    url: pageUrl,
    description:
      '面向海湾国家上市、市场准入与商业增长决策的中东制药市场研究项目。',
    primaryImageOfPage: pageImage,
    dateModified: lastUpdated,
    inLanguage: 'zh-CN',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'BioNixus 中东制药市场研究',
    description:
      '面向海湾国家与北非的制药与医疗市场研究项目,支持上市、市场准入与增长决策。',
    areaServed: ['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Egypt', 'Qatar', 'Bahrain', 'Oman'],
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
      logo: 'https://www.bionixus.com/favicon.ico',
    },
    image: pageImage,
    url: pageUrl,
  },
  faqSchema,
  breadcrumbSchema,
];

function trackCtaClick(ctaName: string, ctaPlacement: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'middle_east_cta_click', {
      cta_name: ctaName,
      cta_placement: ctaPlacement,
      page_path: '/zh/bionixus-market-research-middle-east',
    });
  }
}

const ZhBionixusMarketResearchMiddleEast = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="中东制药市场研究 | 海湾国家证据项目 | BioNixus"
        description="BioNixus 中东制药市场研究:面向海湾国家上市、市场准入与增长决策,覆盖沙特、阿联酋、科威特、卡塔尔、巴林与阿曼的国家级证据项目。"
        canonical={pageUrl}
        ogImage={pageImage}
        jsonLd={pageJsonLd}
      />

      <Navbar />

      <main className="pb-20 md:pb-0">
        <BreadcrumbNav
          items={[
            { name: '首页', href: '/zh' },
            { name: '医疗市场研究', href: '/zh/healthcare-market-research' },
            { name: '中东市场研究', href: '/zh/bionixus-market-research-middle-east' },
          ]}
        />

        <section className="section-padding pt-14 pb-12 bg-gradient-to-br from-navy-deep via-navy-medium to-navy-deep text-primary-foreground relative overflow-hidden">
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold-warm/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-gold-light/10 blur-3xl"
            aria-hidden
          />
          <div className="container-wide max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative">
            <div>
              <p className="inline-flex items-center rounded-full border border-gold-warm/40 bg-gold-warm/10 text-gold-light text-sm px-3 py-1 mb-4">
                中东制药市场研究
              </p>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-white/5 text-primary-foreground/80 text-xs px-3 py-1 mb-4 ml-2">
                <CalendarDays className="w-3.5 h-3.5 text-gold-warm" />
                最后更新:2026 年 3 月
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-5 leading-tight">
                加速海湾国家上市决策的中东制药市场研究
              </h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed mb-6">
                BioNixus 为服务海湾国家与更广泛中东地区的团队,构建可直接用于决策的制药与医疗市场研究项目。请先浏览我们的{' '}
                <Link
                  to="/healthcare-market-research"
                  className="text-gold-light underline underline-offset-4 hover:text-gold-warm"
                >
                  医疗市场研究总览页
                </Link>
                ,再以本页面进行国家层面的执行深度。
              </p>
              <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
                如果您正在评估中东医疗市场研究公司,本页面介绍 BioNixus 如何将区域情报转化为团队可迅速执行的上市就绪与市场准入决策。英文版可访问:{' '}
                <Link
                  to="/bionixus-market-research-middle-east"
                  className="text-gold-light underline underline-offset-4 hover:text-gold-warm"
                >
                  BioNixus Market Research — Middle East
                </Link>
                。
              </p>
              <ul className="space-y-2 mb-7">
                <li className="flex items-start gap-2 text-sm text-primary-foreground/85">
                  <CheckCircle2 className="w-4 h-4 text-gold-warm mt-0.5 shrink-0" />
                  以国家级利益相关方与付费方证据降低上市风险。
                </li>
                <li className="flex items-start gap-2 text-sm text-primary-foreground/85">
                  <CheckCircle2 className="w-4 h-4 text-gold-warm mt-0.5 shrink-0" />
                  让商务、医学与市场准入团队围绕同一证据框架对齐。
                </li>
                <li className="flex items-start gap-2 text-sm text-primary-foreground/85">
                  <CheckCircle2 className="w-4 h-4 text-gold-warm mt-0.5 shrink-0" />
                  将洞察转化为 30、60、90 天可执行的行动计划。
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={contactHref}
                  onClick={() => trackCtaClick('book_strategy_call', 'hero_primary')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gold-warm text-navy-deep font-semibold hover:bg-gold-light transition-colors"
                >
                  预约 20 分钟战略沟通
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#proof-band"
                  onClick={() => trackCtaClick('see_proof', 'hero_secondary')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-white/10 transition-colors"
                >
                  查看区域证据要点
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-gold-warm/30 bg-white/5 backdrop-blur p-5 md:p-6 text-primary-foreground">
              <h2 className="text-xl font-display font-semibold mb-4 text-gold-light">区域情报驾驶舱</h2>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="rounded-lg border border-primary-foreground/10 p-3 bg-white/5">
                  <p className="text-xs text-primary-foreground/70">覆盖市场</p>
                  <p className="text-xl font-semibold">7+</p>
                </div>
                <div className="rounded-lg border border-primary-foreground/10 p-3 bg-white/5">
                  <p className="text-xs text-primary-foreground/70">研究模式</p>
                  <p className="text-xl font-semibold">定性 + 定量</p>
                </div>
                <div className="rounded-lg border border-primary-foreground/10 p-3 bg-white/5">
                  <p className="text-xs text-primary-foreground/70">核心成果</p>
                  <p className="text-xl font-semibold">执行清晰度</p>
                </div>
                <div className="rounded-lg border border-primary-foreground/10 p-3 bg-white/5">
                  <p className="text-xs text-primary-foreground/70">优先用途</p>
                  <p className="text-xl font-semibold">上市与准入</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-primary-foreground/85">
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-warm" />
                  符合 GDPR 的田野治理
                </p>
                <p className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-gold-warm" />
                  结构化的可决策交付物
                </p>
                <p className="flex items-center gap-2">
                  <Users2 className="w-4 h-4 text-gold-warm" />
                  付费方与医疗提供方全景图谱
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              中东制药市场研究与全球联合数据有何不同
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
              <p>
                全球联合制药数据集很难捕捉决定海湾国家上市结果的账户级动态:沙特 NUPCO 招标批次结构、阿联酋 DHA 与 DOH 之间的处方集差异、卡塔尔哈马德医疗集团(HMC)的采购周期,以及埃及全民健康保险改革对开罗医院覆盖人群的重塑。BioNixus 中东项目围绕这些运营现实设计,而不是套用来自美欧市场的模板。
              </p>
              <p>
                一个典型的 BioNixus 中东项目会从决策图开始:选择哪种国家排序、聚焦哪一层利益相关方(处方医生、药剂师、付费方、采购方),以及准入委员会所要求的证据门槛。田野阶段则将医生或医院层面的定量调研与定性深访结合起来,尤其针对信息传递、异议应对或 KOL 影响力尚未厘清的部分。交付物包括国家级激活排序、利益相关方优先级图,以及 30/60/90 天行动计划,而不是脱离上市日历的幻灯片。
              </p>
              <p>
                对已经在全球使用 IQVIA 或 Kantar 的团队,BioNixus 通常作为中东与北非(MENA)专家伙伴运作:面向全球报表的 KPI 保持一致,而阿拉伯语调研、田野执行与医院访问,则由开罗与海湾办公室统筹管理。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-10 bg-muted/5">
          <div className="container-wide max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                如何评估中东地区的医疗市场研究公司
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                选择中东医疗市场研究合作伙伴时,建议围绕四个维度审查候选供应商:首先是国家级监管理解——供应商是否清楚 SFDA 的稳定性研究要求、MOHAP 药物警戒规则以及埃及 EDA 定价通道?其次是招募能力——是否拥有可验证的沙特与阿联酋医生小组、专科覆盖度以及在阿拉伯语环境下进行主持的经验?第三是数据治理——是否具备符合 ESOMAR 与 GDPR 的样本核查流程、去重机制与音频记录管理?第四是交付形式——供应商是提供报告,还是提供可以让上市委员会当天做出决策的证据结构与行动计划?
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                BioNixus 在这四个维度上均具备完整案例记录,并可在提案阶段直接展示招募证明、方法论章程以及以往交付物脱敏节选。
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                为什么中国与亚洲制药团队选择在中东深耕
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                过去数年,中国、日本、韩国与新加坡的制药与生物技术公司持续将海湾国家视为国际化战略的关键跳板。原因包括:海湾国家人均医疗支出高、监管路径可预期(尤其是 SFDA 采用 SAP 快速通道后)、面向 MENA 与非洲的分销枢纽属性,以及公立采购(以 NUPCO 为代表)对创新药与创新医疗器械的开放态度。同时,阿联酋和沙特都在积极推动本地化生产与本地临床数据要求,这意味着市场研究不仅要回答“规模有多大”,更要回答“在本地建立什么样的证据组合最能推动准入”。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                BioNixus 的服务模式尤其适配这些团队:总部级英文交付、区域内阿拉伯语田野执行,以及可对接中国、日本或韩国总部时区的项目管理节奏。
              </p>
            </article>
          </div>
        </section>

        <section id="proof-band" className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">团队为何选择 BioNixus</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              {proofCards.map((card) => (
                <article key={card.title} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-sm text-primary font-semibold">{card.metric}</p>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="executive-overview" className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-4">决策层概览</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                中东并非一个单一市场,而是一个由不同监管期望、机构采购逻辑、报销体系成熟度与利益相关方影响力构成的健康系统组合。战略成功依赖本地化证据,而非笼统假设。
              </p>
              <p>
                BioNixus 帮助制药团队回答上市前、上市中与增长阶段中的关键问题:需求集中在哪里、什么阻碍了采纳、哪些利益相关方拥有真正的影响力,以及证据应如何构建才能加速商务与准入决策。
              </p>
              <p>
                我们的模式将定量的确定性与定性的深度结合,并将两者转化为切实可行的实施计划。目标不是产出更多报告,而是在真实的时间压力下改善真实的市场决策。
              </p>
              <p>
                每个项目由资深负责人直接主导,而非初级项目经理,并在交付前通过独立方法论评审。此治理机制保护面向投资委员会、准入委员会与区域最高管理层的证据可信度。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
              海湾国家需求与准入复杂性一览
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              海湾国家的制药决策由非统一的付费方路径、机构层面的采购控制,以及按城市与医疗网络分布的专科集中度共同塑造。对战略团队而言,这意味着研究设计必须从第一天起就是国家原生的,以避免虚假的可比性。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">监管异质性</h3>
                <p className="text-sm text-muted-foreground">
                  SFDA、DHA/DOH/MOHAP、EDA、MOPH 与 NHRA 对审批与证据的要求各不相同。
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">机构采购差异</h3>
                <p className="text-sm text-muted-foreground">
                  NUPCO 集中采购与各国医院处方集之间的采购动态因国家和诊疗场景而异。
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">利益相关方影响力不对称</h3>
                <p className="text-sm text-muted-foreground">
                  在不同市场,医生、付费方与 KOL 对上市与准入决策的权重各不相同。
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
              在海湾国家何时使用定性、定量或混合方法
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border bg-card">
              <table className="min-w-full text-sm">
                <thead className="bg-muted/40">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">方法</th>
                    <th className="text-left p-3 font-semibold text-foreground">最佳用途</th>
                    <th className="text-left p-3 font-semibold text-foreground">优势</th>
                    <th className="text-left p-3 font-semibold text-foreground">风险</th>
                    <th className="text-left p-3 font-semibold text-foreground">海湾最佳场景</th>
                  </tr>
                </thead>
                <tbody>
                  {methodologyComparison.map((row) => (
                    <tr key={row.model} className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">{row.model}</td>
                      <td className="p-3 text-muted-foreground">{row.bestFor}</td>
                      <td className="p-3 text-muted-foreground">{row.strength}</td>
                      <td className="p-3 text-muted-foreground">{row.risk}</td>
                      <td className="p-3 text-muted-foreground">{row.gccFit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="country-depth" className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-3">国家级执行深度</h2>
            <p className="text-muted-foreground mb-6">
              每个市场都有不同的研究优先级。我们采用国家级规划,以保留本地相关性,同时保持可比的区域主干。
            </p>
            <div className="overflow-x-auto rounded-xl border border-border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="text-left p-3 font-semibold text-foreground">国家</th>
                    <th className="text-left p-3 font-semibold text-foreground">监管环境</th>
                    <th className="text-left p-3 font-semibold text-foreground">市场现实</th>
                    <th className="text-left p-3 font-semibold text-foreground">研究含义</th>
                  </tr>
                </thead>
                <tbody>
                  {countryCards.map((row) => (
                    <tr key={row.country} className="border-b border-border last:border-b-0">
                      <td className="p-3 text-foreground font-medium">{row.country}</td>
                      <td className="p-3 text-muted-foreground">{row.regulator}</td>
                      <td className="p-3 text-muted-foreground">{row.marketReality}</td>
                      <td className="p-3 text-muted-foreground">{row.researchImplication}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/10">
          <div className="container-wide max-w-5xl mx-auto">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              迪拜与阿联酋:中东北非增长最快的制药市场
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
              阿联酋——尤其是迪拜——是海湾地区人均制药支出最高的市场,每年约 45 亿美元。随着众多全球制药公司在迪拜设立区域总部,对符合 DHA 与 MOHAP 要求的市场研究需求持续加速。BioNixus 在迪拜、阿布扎比及七个酋长国范围内提供医生调研、KOL 图谱、竞争情报以及市场准入研究。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/healthcare-market-research"
                className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                医疗市场研究总览
              </Link>
              <Link
                to="/bionixus-market-research-middle-east"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors text-sm"
              >
                查看英文版
              </Link>
            </div>
          </div>
        </section>

        <section id="decision-ecosystem" className="section-padding py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-3">决策者生态</h2>
            <p className="text-muted-foreground mb-6">
              我们将每个项目结构化,不仅捕捉处方行为,也包含影响最终采纳的机构与准入约束。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: '医生',
                  icon: Users2,
                  text: '治疗偏好、证据接受度与用药切换逻辑。',
                },
                {
                  title: '付费方',
                  icon: ClipboardCheck,
                  text: '价值门槛、预算约束与准入触发条件。',
                },
                {
                  title: '医院',
                  icon: Building2,
                  text: '处方集动态、采购路径与账户级障碍。',
                },
                {
                  title: 'KOL',
                  icon: Globe2,
                  text: '影响力架构、叙事共鸣与临床可信度驱动因素。',
                },
              ].map((item) => (
                <article key={item.title} className="rounded-xl border border-border bg-card p-5">
                  <item.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-6xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-navy-deep to-navy-medium text-primary-foreground p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold mb-3">下季度需要可执行证据?</h2>
              <p className="text-primary-foreground/90 mb-5">
                我们可以为您重点市场问题划定范围,并将其转化为一份包含清晰责任人与时间节点的研究路线图。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={contactHref}
                  onClick={() => trackCtaClick('request_research_scope', 'mid_scroll')}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-warm text-navy-deep px-5 py-3 font-semibold hover:bg-gold-light transition-colors"
                >
                  申请研究范围建议
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/healthcare-market-research"
                  onClick={() => trackCtaClick('explore_market_research_hub', 'mid_scroll')}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-primary-foreground font-semibold hover:bg-white/10 transition-colors"
                >
                  了解服务体系
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="methodology-framework" className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">方法论框架</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {methodologySteps.map((step) => (
                <article key={step.name} className="rounded-xl border border-border bg-card p-5">
                  <step.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{step.name}</h3>
                  <p className="text-sm text-muted-foreground">{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="section-padding py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">应用场景手册</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {useCases.map((useCase) => (
                <article key={useCase.title} className="rounded-xl border border-border bg-card p-5">
                  <useCase.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{useCase.summary}</p>
                  <ul className="space-y-1">
                    {useCase.outputs.map((output) => (
                      <li
                        key={output}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        {output}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">前 14 天你将获得什么</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {first14DaysDeliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground flex gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
              按市场成熟度的 90 天执行蓝图
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {executionBlueprint.map((step) => (
                <article key={step.tier} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-sm font-semibold text-primary mb-2">{step.tier}</p>
                  <h3 className="font-semibold text-foreground mb-2">{step.focus}</h3>
                  <p className="text-sm text-muted-foreground">{step.output}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">近期项目摘要</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {caseSnapshots.map((snapshot) => (
                <article key={snapshot.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground mb-2">{snapshot.title}</h3>
                  <p className="text-sm font-medium text-primary mb-2">{snapshot.result}</p>
                  <p className="text-sm text-muted-foreground">{snapshot.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                编辑与方法论督导
              </p>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-2">
                {editorialLead}
              </h2>
              <p className="text-sm text-primary font-medium mb-3">
                BioNixus 医疗市场研究顾问
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                本页面已对照海湾地区当前的制药市场条件与执行约束进行审阅。最新审阅日期:{lastUpdated}。督导内容包含方法论一致性、利益相关方逻辑校验,以及将发现转化为可执行的上市与准入产出。
              </p>
            </article>
          </div>
        </section>

        <section id="faq" className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">常见问题</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-5">
                  <summary className="cursor-pointer font-semibold text-foreground">
                    {item.question}
                  </summary>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <div className="rounded-2xl border border-gold-warm/30 bg-gradient-to-br from-navy-deep to-navy-medium text-primary-foreground p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-3">
                构建您的中东证据路线图
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-4">
                与资深项目负责人讨论您的下一次上市或准入决策。您将获得清晰的项目范围、可行的时间安排,以及推荐的第一阶段交付物。
              </p>
              <p className="text-sm text-primary-foreground/80 mb-6">
                响应 SLA:一个工作日内。咨询由战略负责人直接处理,而非普通客服。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={contactHref}
                  onClick={() => trackCtaClick('book_strategy_call', 'final_cta')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gold-warm text-navy-deep font-semibold hover:bg-gold-light transition-colors"
                >
                  预约战略沟通
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/healthcare-market-research"
                  onClick={() => trackCtaClick('visit_healthcare_hub', 'final_cta')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/30 text-primary-foreground font-semibold hover:bg-white/10 transition-colors"
                >
                  浏览医疗市场研究总览
                </Link>
              </div>
              <p className="text-xs text-primary-foreground/60 mt-6">
                英文原版页面地址:{' '}
                <a
                  href={englishSiblingUrl}
                  className="underline hover:text-gold-light"
                >
                  {englishSiblingUrl}
                </a>
                。
              </p>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur p-3 md:hidden">
        <Link
          to={contactHref}
          onClick={() => trackCtaClick('book_strategy_call', 'sticky_mobile')}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
        >
          与战略负责人对话
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ZhBionixusMarketResearchMiddleEast;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
