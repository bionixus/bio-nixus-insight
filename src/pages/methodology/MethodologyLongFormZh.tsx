import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import type { Language } from '@/lib/i18n';
import { methodologyLocalizedPath as loc } from './methodologyLocalizedPath';

type Props = { lang: Language };

export function MethodologyLongFormZh({ lang }: Props): JSX.Element {
  const p = (path: string) => loc(lang, path);
  return (
    <>
      <section className="section-padding bg-background" id="research-design">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">1. 研究设计原则</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            每项研究在研究设计阶段就会把商业议题转化为可检验的研究框架；我们与品牌、医学事务与市场准入团队协作，界定既足够具体、又可随项目进展校正的研究目标。
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">定量研究</strong>
            使用结构化问卷及经过验证的量表；在需要权衡比较时辅以联合分析或 MaxDiff。问卷在正式实施前会进行认知预测试（至少 5 名受访者），并结合跳题逻辑、随机化与注意力检测题以保障起始数据质量。进一步了解我们的{' '}
            <Link to={p('/services/quantitative-research')} className="text-primary hover:underline font-medium">
              医疗健康定量研究实践
            </Link>
            。
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">定性研究</strong>
            采用半结构化、含决策分叉逻辑的深度访谈提纲；无论在门诊还是医院场景中开展一对一访谈、付费方顾问会或观察研究，我们都在内部试点后迭代提纲。对治疗领域复杂的项目，启用具备临床医学背景的主持人，以降低诱导受访者的风险。请参阅{' '}
            <Link to={p('/services/qualitative-research')} className="text-primary hover:underline font-medium">
              制药定性研究能力与流程
            </Link>
            。
          </p>
          <p className="text-muted-foreground leading-relaxed">
            若需要「可推广统计结论 + 行为解释」，我们采用定量与定性融合的混合式设计，例如上市后准备度研究同时覆盖 200 名医生定量样本与约 20 位高处方专家的深访。
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream" id="sampling-frameworks">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">2. 抽样与样本治理</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            抽样质量直接影响结论可信度。BioNixus 自运营覆盖欧洲、中东、非洲及海湾地区十几个市场的医疗专业人士样本网络，并与符合 ESOMAR / BHBIA 标准的合规供应商合作补充；受访者来自经核验的医生库、院内登记或专科协会名册，不使用开放互联网的随意注册样本池。
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            定量项目的样本量在启动前对齐统计功效假设；对每个可报告的细分受众，我们常规划在 95% 置信区间内约 ±5% 的误差带宽。罕见病或极小总体则采用穷尽式配额并相应调整分析方法。
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            配额同时控制专科、执业场景（院内/社区）、处方强度与地域；多国研究中按国别设配额，避免单一国家在汇总数据中占比过高。
          </p>
          <p className="text-muted-foreground leading-relaxed">
            定性项目的筛选问卷由项目组与客户共同终审；我们会在二次核验中比对面板信息与筛选答案，以确保背景真实一致。
          </p>
        </div>
      </section>

      <section className="section-padding bg-background" id="fieldwork-governance">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">3. 现场执行与质量控制</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            方法论必须在现场制度化。每份工单都配套执行备忘录：招募周期、与当地行业守则一致的受访者激励、访谈排期窗口，以及配额短缺的升级路径。
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            定量在线调查配置实时监控面板，追踪完成率、中位完成时长、卡点位置与平直作答信号；远低于合理中位作答时间的答卷会标记复核并在未通过质量控制时剔除。
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            定性访谈（在取得同意前提下）录音并完成逐字转录；主持人在每场结束 24 小时内撰写纪要，捕获仍在新鲜的假设与议题。在多市场研究中，项目经理与各地团队同步站会，第一时间发现翻译措辞或招募偏差。
          </p>
          <p className="text-muted-foreground leading-relaxed">
            我们也以同一治理框架承接{' '}
            <Link to={p('/services/clinical-trial-support')} className="text-primary hover:underline font-medium">
              临床试验支持类现场研究
            </Link>
            ，并增设中心可行性及研究者画像的补充质控要点。
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream" id="data-validation">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">4. 数据验证与 AI 辅助质控</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            在进入分析以前，原始数据必须经过多层验证：自动规则识别重复 ID、不可能的组合答案以及统计异常的答题模式。
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            第二层由研究员主导，将告警记录与原招募信息进行比对，必要时回访受访者澄清；未能验证的记录会从终版数据库排除并记录剔除原因。
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            AI 辅助质控构成第三层：自然语言模型检查开放题的连贯性与有效篇幅；定性转录可先经主题建模发现潜在脉络，再由分析团队人工复核——加速模式识别，但最终结论均需人工签署。
          </p>
          <p className="text-muted-foreground leading-relaxed">
            借由上述链路，客户获得既可以支撑内部决策、也可在必要时用于递交 HTA / 监管资料的数据基础。延伸阅读我们如何把证据并入{' '}
            <Link to={p('/services/market-access')} className="text-primary hover:underline font-medium">
              市场准入及价值沟通策略流程
            </Link>
            。
          </p>
        </div>
      </section>

      <section className="section-padding bg-background" id="ethics-compliance">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">5. 伦理、GDPR 与监管对齐</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            所有项目运行在涵盖 GDPR、《英国数据保护法》、ESOMAR、BHBIA 法律伦理指南以及 EphMRA 行为守则的合规框架之内；在海湾地区同时遵守沙特阿拉伯 PDPL、阿联酋联邦数据保护法、科威特 CITRA 等本地要求。
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            数据采集前取得受访者同意；文件提供其母语版本并说明用途与保留期限。个人信息在采集端即伪匿名化，存放在欧盟加密环境中；如需向客户提供可识别资料，须在单独授权下执行。
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            牵涉患者相关信息（哪怕是经由医生描述的间接情景）时会按国家规定启动伦理复核及更严格的脱敏策略；项目组在开始前即培训 AE 上报路径，并保持 24 小时升级到客户药物警戒团队的通道。
          </p>
          <p className="text-muted-foreground leading-relaxed">
            激励费用通过可追溯渠道支付并对照制药行业协会发布的合理市场价值准则，以降低透明度与反腐败风险。
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream" id="reporting-standards">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">6. 交付物结构与报告规范</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            洞察若无法触动决策者便没有价值，因此报告采用「先结论」的叙事顺序：开篇总结 3–5 条关键发现与对应行动建议，再在后续章节铺设支撑图表。
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            定量成果附带方法论附录——样本构成、加权方案、置信区间以及问卷存档；定性成果以匿名化 verbatim 佐证主题脉络。
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            交付组合通常包括长期追踪项目的可视化面板、管理层演示文稿，以及可用于监管或 HTA 团队的技术附录。针对{' '}
            <Link to={p('/services/competitive-intelligence')} className="text-primary hover:underline font-medium">
              竞品情报追踪项目
            </Link>
            ，我们可提供事件驱动的实时监控更新。
          </p>
          <p className="text-muted-foreground leading-relaxed">
            每份交付在发出前均需通过「分析师自检 + 合伙人战略校对」两道流程；{' '}
            <Link to={p('/services/kol-stakeholder-mapping')} className="text-primary hover:underline font-medium">
              KOL 与利益相关方洞察图谱
            </Link>
            亦遵循同级规范，并提供影响力网络可视化层。
          </p>
        </div>
      </section>
    </>
  );
}
