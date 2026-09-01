import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import {
  ArrowRight,
  BarChart3,
  Building2,
  Globe2,
  ShieldCheck,
  Sparkles,
  Users,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';

const CANONICAL = 'https://www.bionixus.com/zh/strategic-portfolio';
const EN_CANONICAL = 'https://www.bionixus.com/strategic-portfolio';
const AR_CANONICAL = 'https://www.bionixus.com/ar/strategic-portfolio';
const FR_CANONICAL = 'https://www.bionixus.com/fr/strategic-portfolio';

const capabilityPillars = [
  {
    title: '一手药品市场研究',
    description:
      '面向欧洲、中东和北非（EMEA/MENA）医生、药剂师、支付方及患者的定制化定量与定性研究。我们围绕客户的商业决策——上市、市场准入、生命周期管理、竞争重新定位——量身设计每一份问卷与访谈提纲，而不是将同一份通用模板套用到多个国家。',
    icon: BarChart3,
  },
  {
    title: '市场准入与卫生经济学（HEOR）',
    description:
      '支付方地图、法国 HAS/CEPS 报销通道、德国 G-BA/IQWiG 附加价值评估、意大利 AIFA 议价、英国 NICE 评估以及海湾各国（SFDA、DHA、MOHAP）的准入路径。我们同步开发预算影响模型、成本效用分析和患者层面卫生经济模型，让准入团队直接使用。',
    icon: ShieldCheck,
  },
  {
    title: 'KOL 图谱与学术互动',
    description:
      '国家级和地区级意见领袖识别与深度画像：学会主席、法国大学附属医院（CHU）和海湾大学医院科室主任、指南编辑、临床试验主要研究者。我们输出结构化影响力地图、丰富画像和关系网络分析，可以直接用于医学事务和商务团队的 KOL 互动计划。',
    icon: Users,
  },
  {
    title: '真实世界证据（RWE）',
    description:
      '观察性研究、数据库分析（法国 SNDS/PMSI、海湾支付方数据库、企业内部数据）、病历审计和临床实践研究。我们生成的真实世界证据可以用来支持报销申请、上市后监测和条件性准入合同（例如按疗效付费）的谈判。',
    icon: Globe2,
  },
  {
    title: '竞争情报',
    description:
      '系统化跟踪竞品上市、管线绘制、推广信息分析、学术会议情报审计（ESMO、ASCO、ESC、EHA、EULAR、中华医学会各专业分会）以及按国家评估声量份额（SoV）。我们把散乱信号转化为商务团队可直接采取行动的仪表板。',
    icon: Sparkles,
  },
  {
    title: '品牌追踪与治理',
    description:
      '品牌追踪、使用与态度（U&A）研究、处方医生满意度和患者旅程程序，按季度或半年一次的波次部署，配套严格的治理框架——核心测量批次保持稳定、控制问卷漂移、透明加权。目标：让管理层看到市场真实的动向，而不是问卷噪声。',
    icon: BookOpen,
  },
];

const regionalCoverage = [
  {
    region: '海湾（GCC）',
    countries: ['沙特阿拉伯', '阿联酋', '卡塔尔', '科威特', '阿曼', '巴林'],
    highlights:
      '覆盖所有酋长国和省份的经过验证的医生（HCP）小组，双语（阿拉伯语-英语）招募，深入了解沙特"2030 愿景"相关改革（Saudi FDA、NUPCO、CBAHI、卫生部招标）以及阿联酋医疗体系（DHA、MOHAP、阿布扎比 DoH、Malaffi）。我们的区域办事处按照当地治理框架和跨国药企的上市时间表执行复杂项目。',
  },
  {
    region: '扩展中东',
    countries: ['埃及', '土耳其', '约旦', '黎巴嫩', '伊拉克', '摩洛哥', '突尼斯'],
    highlights:
      '面向大人口规模、独特价格结构市场的定制化执行。在埃及，我们通过双语（阿拉伯语-英语）团队覆盖开罗、亚历山大和上埃及地区；在土耳其，我们与伊斯坦布尔、安卡拉、伊兹密尔的大学医院和大型综合医院合作，同时考虑到 SGK 报销体系和仿制药市场动态。',
  },
  {
    region: '欧洲（G5 与英国）',
    countries: ['法国', '德国', '意大利', '西班牙', '英国'],
    highlights:
      '严格对齐当地评估机构（法国 HAS、德国 G-BA/IQWiG、意大利 AIFA、西班牙 AEMPS、英国 NICE 和 SMC）的欧洲药品研究。我们的医生小组覆盖大学医院、私立诊所和专科中心（居里研究所、古斯塔夫·鲁西研究所、柏林 Charité、卡罗琳斯卡医学院、皇家马斯登医院）。',
  },
  {
    region: '全球主要成熟市场',
    countries: ['美国', '加拿大', '日本', '韩国', '新加坡', '巴西'],
    highlights:
      '对于构建全球战略的客户，我们把区域项目扩展到主要成熟市场，使用可比对的问卷与研究架构。这让 EMEA/MENA 与美国或日本的基准可以在同一段定义、同一批关键问题、同一套分析框架下进行比较，而不是被工具差异掩盖。',
  },
];

const therapyAreas = [
  '肿瘤与血液肿瘤（免疫疗法、靶向治疗、CAR-T、罕见癌症）',
  '免疫与炎症（风湿病、皮肤科、消化科、生物制剂）',
  '糖尿病、心血管代谢与肥胖（GLP-1 类似物、SGLT2 抑制剂、心力衰竭）',
  '神经病学与神经退行性疾病（多发性硬化、帕金森、阿尔茨海默、癫痫、偏头痛）',
  '罕见病与孤儿药（患者寻找、专科中心图谱）',
  '疫苗与公共卫生（成人、儿童、旅行者、区域性接种计划）',
  '医院专科（抗感染、止血、重症监护、肾科）',
  '医疗器械与伴随诊断',
  '女性健康与生殖健康',
  '眼科与视网膜治疗',
];

const methodologies = [
  {
    title: '定性研究',
    body:
      '深度访谈（IDI）、线下与线上混合式焦点小组、跨国专家咨询委员会、民族志与临床观察工作坊、药店"safari"观察。我们的多语言主持人（英语、法语、阿拉伯语、德语、意大利语、西班牙语、普通话）确保语言层次不流失，跨文化洞察不因翻译而稀释。',
  },
  {
    title: '定量研究',
    body:
      '线上问卷（CAWI）、电话（CATI）、面对面（CAPI）以及混合模式。分层抽样按专科、执业类型和地区划分；针对低发病率专科启动"发病率感知型"配额；多层验证（逻辑检查、答题速度、语义一致性、AI 辅助异常检测配合人工裁决）。',
  },
  {
    title: '高级建模',
    body:
      '潜在类分组（LCA）、联合分析（choice-based、adaptive）、多元驱动因素分析、切换倾向模型、TURF、MaxDiff。这些方法把陈述偏好和权衡转化为战略投资组合与市场沟通可以直接执行的场景。',
  },
  {
    title: '二手数据分析',
    body:
      '商业数据库（IQVIA MIDAS、Symphony、处方分发数据）、公共数据库（法国 SNDS/PMSI、意大利国家卫生系统数据、部分海湾国家医保数据）与客户内部数据的融合分析。我们输出患者队列、治疗路径与国家消费基准。',
  },
];

const differentiators = [
  {
    title: '一个合作伙伴，一种方法，多个国家',
    body:
      '许多多国项目因为把每个国家外包给不同的本地代理而丧失一致性。BioNixus 由一名资深项目负责人统筹所有国家，使用统一的调研工具和分析治理，最终交付的是"苹果对苹果"的对比，而不是"苹果对梨子"。',
  },
  {
    title: '把制药级严谨性应用到每一个项目',
    body:
      '我们的招募和质量控制流程按照制药法规和市场准入团队的要求设计：医师执照验证、雇佣验证、重复检测、完整可审计追踪。这一严谨性能保护您的商业决策在被监管机构或内部审计挑战时依然站得住脚。',
  },
  {
    title: '每个项目都由资深团队亲自执行',
    body:
      'BioNixus 项目由 10-20 年制药经验的资深顾问领衔，而不是由远程督导的初级人员执行。这带来更聪明的问卷设计、更精准的战略解读，以及可以直接被董事会与执行委员会采纳的建议。',
  },
  {
    title: 'MENA ↔ 全球桥梁',
    body:
      '我们是少数同时具备海湾/埃及深度执行能力与欧美跨大西洋项目能力的合作伙伴。全球战略团队因此可以用同一套调研工具比较 EMEA/MENA 与 G5 的基准，避免多个供应商之间常见的定义漂移。',
  },
];

const caseSnapshots = [
  {
    title: '肿瘤药物多市场上市项目',
    body:
      '为一家前十强制药公司即将上市的第二代免疫疗法，我们在法国、德国、意大利、西班牙、英国、沙特阿拉伯和阿联酋执行了一项整合项目：320 场肿瘤医师与支付方定性访谈、1,200 份定量样本、四聚类潜在分组、以及测试六种价格-报销方案的联合分析模型。客户据此确定了两个快速上市重点市场，并调整了 HAS 报销资料。',
  },
  {
    title: '沙特"2030 愿景"支付方研究',
    body:
      '为一家医疗器械制造商评估 NUPCO 改革与医疗私有化背景下的准入机会，我们在利雅得、吉达和达曼对 45 位机构采购者、医院科室主任和准入顾问进行了深入访谈。最终交付了一份带定量情景的进入决策地图，按医院集群细分。',
  },
  {
    title: '欧洲 KOL 认知追踪',
    body:
      '为一家生物技术公司即将上市的进展型多发性硬化症治疗，我们在法国、德国、意大利、西班牙和英国的 80 位神经病学 KOL 中启动了半年一次的追踪项目，历经四个波次跟踪机制感知、疗效画像信心，以及相对于竞品的定位。',
  },
];

const faqItems = [
  {
    q: 'BioNixus 的战略产品组合是什么？',
    a: 'BioNixus 的战略产品组合涵盖一手研究、市场准入、卫生经济与结果研究（HEOR）、KOL 图谱、真实世界证据、竞争情报和品牌追踪等能力。它代表着 15 年以上制药与医疗健康领域的实战经验，横跨 EMEA、MENA、北美、拉丁美洲和亚太地区，尤其在海湾、法国和埃及扎根最深。',
  },
  {
    q: 'BioNixus 可以在哪些国家执行医药研究？',
    a: '我们在超过 48 个国家执行一手项目。主要优势地区包括海湾六国（沙特、阿联酋、卡塔尔、科威特、阿曼、巴林）、埃及、土耳其、法国、德国、意大利、西班牙、英国、美国、加拿大、巴西和日本。每一个国家都有经过验证的医师小组、本地实地合作方以及一套集中式项目治理，保证问卷工具的一致性。',
  },
  {
    q: 'BioNixus 相比 IQVIA、Kantar Health 等全球巨头的差异化是什么？',
    a: '我们把自己定位为 IQVIA 和 Kantar Health 的敏捷、区域专家型替代方案。项目由资深顾问领衔，MENA-EMEA 深度是许多竞争对手难以匹敌的。相比大型多国机构，我们的交付周期更短、洞察解读更深入、定价模式更透明，也没有大型组织的间接成本。',
  },
  {
    q: 'BioNixus 战略项目的典型预算是多少？',
    a: '预算取决于国家数量、方法学与交付深度。单一海湾国家或法国的定性项目通常在 4 万至 9 万欧元之间。多国、多方法（定性 + 定量 + 高级建模）项目常常超过 20 万欧元。为了保证方法学质量，我们的最低承接门槛为 2 万美元。',
  },
  {
    q: 'BioNixus 可以提供中文报告吗？',
    a: '可以。我们的核心交付语言包括英语、法语、阿拉伯语、德语、意大利语、西班牙语与普通话。中国及跨中国区项目可以用中英双语交付，方便您内部的中国团队和全球总部同时使用。',
  },
  {
    q: '一个项目需要多长时间启动？',
    a: '一个聚焦式定性项目可以在 2-3 周内启动。多国定量项目通常需要 4-6 周准备时间才能进入实地阶段。我们坚持给准备阶段留出充足时间，避免样本质量或问卷稳健性被压缩——速度不应以战略决策的可靠性为代价。',
  },
  {
    q: '战略产品组合是否也涵盖医疗器械与诊断产品？',
    a: '涵盖。我们经常为医疗器械制造商、伴随诊断和生物标志物公司服务，方法学根据这些市场的独特性调整——机构化采购周期、审批流程、器械报销与操作费用的分离、以及技术型 KOL 的角色。',
  },
  {
    q: '你们如何保证伦理合规与监管符合性？',
    a: '所有研究都遵循 EphMRA 与 ESOMAR 原则，以及当地法规（欧洲 GDPR、中东各国数据保护法）。我们完整保留招募程序、访谈脚本、原始数据和质量控制日志，可随时应客户或监管机构要求提交审计。',
  },
];

export default function ZhStrategicPortfolio() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: 'https://www.bionixus.com/zh' },
      { '@type': 'ListItem', position: 2, name: '战略产品组合', item: CANONICAL },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.bionixus.com/#organization',
    name: 'BioNixus',
    url: 'https://www.bionixus.com',
    logo: 'https://www.bionixus.com/bionixus-logo.webp',
    description:
      'BioNixus 是一家专注于一手研究、市场准入与卫生经济学（HEOR）的制药与医疗健康研究咨询公司，在 MENA 与 EMEA 拥有深厚执行能力。',
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'BioNixus 战略产品组合能力',
    numberOfItems: capabilityPillars.length,
    itemListElement: capabilityPillars.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.title,
      description: c.description,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <html lang="zh-Hans" />
        <title>BioNixus 战略产品组合 | EMEA 与 MENA 制药研究能力</title>
        <meta
          name="description"
          content="BioNixus 战略产品组合：一手研究、市场准入、HEOR、KOL 图谱、真实世界证据与竞争情报，覆盖欧洲、中东和北非。"
        />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hrefLang="zh-Hans" href={CANONICAL} />
        <link rel="alternate" hrefLang="en" href={EN_CANONICAL} />
        <link rel="alternate" hrefLang="fr" href={FR_CANONICAL} />
        <link rel="alternate" hrefLang="ar" href={AR_CANONICAL} />
        <link rel="alternate" hrefLang="x-default" href={EN_CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title="BioNixus 战略产品组合 | EMEA 与 MENA 制药研究能力"
        description="BioNixus 战略产品组合概览：一手研究、市场准入、HEOR、KOL 图谱、真实世界证据与竞争情报——扎根于 EMEA 与 MENA。"
        image="https://www.bionixus.com/og-image.png"
        url={CANONICAL}
        type="website"
        locale="zh_CN"
        alternateLocales={['en_US', 'fr_FR', 'ar_SA']}
      />
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/zh" className="hover:text-primary transition-colors">首页</Link>
              <span>/</span>
              <span className="text-foreground">战略产品组合</span>
            </div>
          </div>
        </div>

        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              BioNixus 战略产品组合
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              战略产品组合：贯穿 EMEA 与 MENA 的制药研究与市场准入能力
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              BioNixus 战略产品组合汇集了我们的一手研究、市场准入、HEOR、KOL 图谱、真实世界证据、竞争情报与品牌追踪能力——由拥有 15 年以上医药与生命科学经验的资深团队设计与执行，尤其在法国、海湾与埃及深耕已久。本文档描述我们如何把每一项商业或准入决策，转化为一份结构化、可辩护、可落地的证据方案。
            </p>
            <p className="text-sm text-muted-foreground">
              简体中文版本 · 也可阅读{' '}
              <Link to="/strategic-portfolio" className="text-primary hover:underline font-medium">
                英文版战略产品组合
              </Link>
              、{' '}
              <Link to="/fr/strategic-portfolio" className="text-primary hover:underline font-medium">
                法语版本
              </Link>
              {' '}或{' '}
              <Link to="/ar/strategic-portfolio" className="text-primary hover:underline font-medium">
                阿拉伯语版本
              </Link>
              。
            </p>
          </div>
        </section>

        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">38</p>
                <p className="text-primary-foreground/80 text-sm mt-1">执行覆盖国家</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">127+</p>
                <p className="text-primary-foreground/80 text-sm mt-1">医药项目</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">118</p>
                <p className="text-primary-foreground/80 text-sm mt-1">药企与医械客户</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">15+</p>
                <p className="text-primary-foreground/80 text-sm mt-1">年行业经验</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="capabilities">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              六大能力支柱构建我们的战略组合
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              BioNixus 的每一个项目都由下列一个或多个支柱组合而成。我们不出售可互换的交付物——而是围绕客户必须做出的具体商业决策，量身设计一套证据方案，通过最能提高决策清晰度和可辩护性的方法组合来实现目标。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {capabilityPillars.map((pillar) => (
                <div key={pillar.title} className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="regional-coverage">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              区域覆盖：我们真正落地的地方
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              许多机构宣称"覆盖所有市场"，我们更愿意透明说明自己真正拥有执行深度的地区——经过验证的医师小组、本地团队、对监管与支付方框架的深入了解。以下是构成我们组合的四大区域板块。
            </p>
            <div className="space-y-6">
              {regionalCoverage.map((region) => (
                <div key={region.region} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <h3 className="text-xl font-display font-semibold text-foreground">{region.region}</h3>
                    <div className="flex flex-wrap gap-2">
                      {region.countries.map((c) => (
                        <span key={c} className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{region.highlights}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="therapy-areas">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              覆盖治疗领域
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
              我们的团队在所有主要治疗领域都有实战经验，尤其在肿瘤、免疫、罕见病、糖尿病—心血管代谢与医院专科方向上有深厚积累。我们始终根据每个领域的临床语言、招募逻辑与决策链，量身调整调研工具。
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {therapyAreas.map((area) => (
                <div key={area} className="flex items-start gap-2 bg-card border border-border rounded-lg p-4">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="methodologies">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              方法学：从定性 IDI 到联合选择模型
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              我们拒绝"一刀切"的做法。每项商业决策都值得配上最能以合理成本、在业务时间内提供最可靠证据的方法。我们的资深顾问会在以下几大方法族里挑选——常常是组合使用。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {methodologies.map((m) => (
                <div key={m.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="differentiators">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              BioNixus 组合的差异化优势
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              我们把自己定位为大型全球机构（IQVIA、Kantar Health、Ipsos）的敏捷区域专家型替代方案。以下是客户在选择我们做跨国项目时最常提到的四个差异化点。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {differentiators.map((d) => (
                <div key={d.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="case-snapshots">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              项目速览
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              以下三个匿名化案例展示了战略组合在实际项目中的落地方式。
            </p>
            <div className="space-y-6">
              {caseSnapshots.map((c) => (
                <div key={c.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="governance">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              治理、伦理与数据安全
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                我们的项目遵守 EphMRA 与 ESOMAR 的准则，以及当地数据保护法规——欧洲 GDPR、沙特 PDPL、阿联酋数据保护法，以及组合中其他国家的等效框架。每一份合同都明确定义数据采集范围、保留期限、访问权限，以及项目结束后的销毁流程。
              </p>
              <p>
                伦理层面，每个项目的招募脚本和访谈提纲都要通过内部合规审查，包含中立性检查、初级 HCP 问题的推广偏见排除，以及对各国医师报酬规则的遵守。例如在法国，我们严格遵守"反礼品法"及 EphMRA 法国分会的道德准则；在中东，我们尊重各国卫生部对医师参与调研的相关约束。
              </p>
              <p>
                技术层面，我们的数据采集平台部署在符合 SOC 2 的基础设施上，全部数据在传输和存储时加密。身份信息在数据入库时就与作答内容分离，每个项目都保留完整审计跟踪——让客户在被监管机构或内部审计挑战时能证明合规性。
              </p>
              <p>
                最后，我们系统化记录方法学假设（样本定义、排除阈值、加权方案、统计检验），确保结果可复现、可辩护。对 HAS/CEPS 报销资料、G-BA/IQWiG 评估或海湾各国准入申请而言，这份纪律尤其宝贵。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="engagement">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              我们如何与客户团队协作
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                每一个 BioNixus 项目都从一次范围界定工作坊开始——线上或线下 60 到 90 分钟——在这里我们把客户提出的商业问题与最可能给出可靠证据的方法学正面对齐。这次工作坊常常是整个项目最"值钱"的一步：它能避免走错方向，并把客户内部利益相关者对成功标准的理解统一起来。
              </p>
              <p>
                接下来，我们把项目分成三个阶段：设计（2-4 周）、实地执行（根据方法与国家数量 4-8 周）、战略解读（2-3 周）。我们更偏好每周节点式治理，而不是长时间沉默后一次性交付"惊喜"式最终报告——这样可以在过程中调整方向，并提前帮客户内部准备接收结果。
              </p>
              <p>
                最终交付通常包含：一份 30-60 页的战略执行报告、一套可直接在董事会汇报的幻灯片、一份完整的方法学附录，以及匿名化的原始数据。我们还会为客户的本地和全球团队提供一场现场解读会议，并在最终交付后 60 天内保持开放状态，回答业务决策临近时才浮现的新问题。
              </p>
              <p>
                对于跨国药企客户，我们还提供年度合作模式（retainer）：包含多波次追踪、优先接入资深顾问，以及针对临时项目的优惠费率。这一模式特别适合希望把品牌或治疗领域的市场情报建成"制度化能力"的医学与市场准入负责人。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="faq">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">
              关于战略产品组合的常见问题
            </h2>
            <div className="space-y-4">
              {faqItems.map((f) => (
                <details key={f.q} className="group bg-card border border-border rounded-xl p-6">
                  <summary className="cursor-pointer list-none text-lg font-display font-semibold text-foreground flex items-center justify-between gap-4">
                    <span>{f.q}</span>
                    <span className="text-primary text-sm group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-4">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">相关资源</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { to: '/strategic-portfolio', label: 'Strategic portfolio (English)', desc: '阅读英文版战略产品组合。' },
                { to: '/fr/strategic-portfolio', label: 'Portefeuille stratégique (Français)', desc: '法语版战略产品组合。' },
                { to: '/ar/strategic-portfolio', label: 'الملف الاستراتيجي (العربية)', desc: '阿拉伯语版战略产品组合。' },
                { to: '/healthcare-market-research', label: 'Healthcare market research hub', desc: '英文版医疗市场研究总入口。' },
                { to: '/quantitative-healthcare-market-research', label: 'Quantitative healthcare research', desc: '英文版定量方法学指南。' },
                { to: '/contact', label: '联系我们', desc: '与资深顾问讨论定制化项目。' },
              ].map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-foreground mb-1">{r.label}</h3>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              让我们聊聊您下一个制药研究项目
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              BioNixus 资深顾问将耐心了解您的商业决策、时间表与约束条件，并为您量身设计一份结构化、可量化、可辩护的证据方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                索取项目建议 <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:mosama@bionixus.com?subject=BioNixus%20Strategic%20Portfolio%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors"
              >
                邮件联系团队
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
