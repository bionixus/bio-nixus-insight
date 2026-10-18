/**
 * Simplified Chinese money page. Native-quality draft. NATIVE_REVIEW_REQUIRED before publish.
 */
import {
  FACTS,
  INTL_DATE_MODIFIED,
  MFA_CHINA_KSA,
  MFA_CHINA_UAE,
  INTL_HREFLANG_BY_PATH,
  PATHS,
  SPA_CHINESE_KSA,
  WAM_CHINESE_UAE,
} from './shared';
import type { IntlMoneyPage } from './types';

const ZH_HQ = '美国怀俄明州谢里登';
const ZH_LEADERSHIP = '美国（谢里登）、英国伦敦、开罗（谢赫扎耶德）';
const ZH_FIELD = '胡拜尔、迪拜、科威特';
const ZH_SAO_PAULO = '正在推进于2026年底前开设圣保罗办公室';
const ZH_GUARANTEES =
  '无偿替换不合格受访者、最低样本、约定配额未达成时由我方承担重新实地、试点费用计入正式项目';
const ZH_PRICE = '1万至6万美元';

export const CHINA_ZH_INTL_PAGE: IntlMoneyPage = {
  id: 'china-zh',
  path: PATHS.chinaZh,
  lang: 'zh-Hans',
  htmlLang: 'zh-Hans',
  nativeReviewRequired: true,
  title: '中国企业中东市场调研｜沙特·阿联酋·埃及｜BioNixus',
  description:
    '中国企业中东市场调研：沙特、阿联酋、埃及阿拉伯语实地，由美国、英国、开罗管理办公室与海湾实地团队交付。定制1万至6万美元。书面保证范围，不保证结论准确。总部美国谢里登。实地胡拜尔、迪拜、科威特。面向内地药企与出海品牌。沙特与阿联酋须拆开。埃及由开罗执行。48小时书面提案。英文对照页已上线。',
  h1: '中国企业中东市场调研',
  primaryKeyword: '中东 市场调研 公司',
  quickAnswer:
    'BioNixus为中国企业提供中东与非洲的委托式市场调研。管理办公室在美国怀俄明州谢里登、英国伦敦与开罗（谢赫扎耶德）。实地执行在胡拜尔、迪拜、科威特与开罗。沙特、阿联酋与埃及是三个样本，不是一个“海合会”平均数。定制项目1万至6万美元。书面保证的是范围，不是结论的准确性。',
  breadcrumbLabel: '中国',
  dateModified: INTL_DATE_MODIFIED,
  coverImage: '/images/intl-outbound/china-zh-cover.jpg',
  heroImage: '/images/intl-outbound/china-zh-hero.jpg',
  coverAlt: 'BioNixus藏青与金色封面：中国企业中东市场调研 — 沙特、阿联酋、埃及',
  heroAlt: '中国至中东与非洲市场调研的藏青金色图形，仅有品牌标志，无图库照片',
  areaServed: [
    { '@type': 'Country', name: 'China' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'Place', name: 'MENA' },
  ],
  proofPoints: [
    {
      title: '中国出发、海湾执行',
      description: '内地总部对接谢里登或伦敦。实地由美国、英国、开罗管理办公室与海湾团队交付。',
    },
    {
      title: '两篇已上线的专题',
      description: '中国企业进入沙特与阿联酋、以及海湾中国电动车消费者研究，已经上线。本页是转化页。',
    },
    {
      title: '先阿拉伯语，必要时才加普通话',
      description: '海湾买方本身是中资时才加普通话单元。不能用普通话替代沙特医生或阿联酋消费者。',
    },
  ],
  sections: [
    {
      id: 'who-zh',
      heading: '谁在中国企业里提出中东市场调研',
      paragraphs: [
        `中东市场调研公司对内地总部而言，是资本汇出前必须写清的委托研究：谁买、在哪一座城市、什么价格、哪条渠道、哪一张牌照。买方通常是海外投资、国际业务或品牌团队，而不是国内调研供应商。英文版见 {link:/market-research/china|Middle East market research for Chinese companies}。医生与支付方项目从 {link:/healthcare-market-research|医疗市场研究中心} 进入；非医药从 {link:/bionixus-industries|行业中心} 进入。`,
        `已上线的 {link:/bionixus-industries/insights/chinese-companies-entering-saudi-arabia-and-the-uae|中国企业进入沙特与阿联酋} 承接 “Chinese companies Saudi market entry”。{link:/bionixus-industries/insights/chinese-ev-brands-saudi-uae-consumer-research|海湾中国电动车消费者研究} 承接电动车专项。埃及专题截至2026年10月18日仍在草稿拉取请求中。本页不重复那些长文，而是它们应对接的服务页。`,
        `BioNixus创立于${FACTS.founded}年，总部在${ZH_HQ}。管理办公室在${ZH_LEADERSHIP}。实地办公室在${ZH_FIELD}。${FACTS.clients}家客户、${FACTS.countries}个国家、2026年迄今${FACTS.studies2026}项（2025年为${FACTS.studies2025}项），医师约3200人，定制价格${ZH_PRICE}。${ZH_SAO_PAULO}。中国出发的中东项目由这些管理办公室与海湾实地团队交付。`,
      ],
    },
    {
      id: 'facts-zh',
      heading: '沙特市场调研与阿联酋市场调研必须分开写',
      paragraphs: [
        `只引用标明日期的官方序列，不要编造市场规模。中国外交部发布沙特与阿联酋双边页面（{ext:${MFA_CHINA_KSA}|外交部 — 沙特}；{ext:${MFA_CHINA_UAE}|外交部 — 阿联酋}）。沙特通讯社记录王国境内逾750家中国企业、中国投资超过310亿里亚尔（{ext:${SPA_CHINESE_KSA}|沙特通讯社，2025年9月25日}）。阿布扎比商会经WAM公布阿联酋逾40万中国居民、逾1.7万家中国企业（{ext:${WAM_CHINESE_UAE}|WAM，2026年6月11日}）。这些数字描述存量，不能证明第二个品牌还能卖出去。`,
        `沙特市场调研和阿联酋市场调研是两套牌照、两种增值税、两套阿拉伯语问卷。把“海合会”写成一个TAM，委员会会追问城市、渠道和对外投资路径。中东医药市场调研使用海湾医师与支付方面板，而不是中国国内的医生追踪。国内中国医疗研究见 {link:/healthcare-market-research/china|中国医疗市场研究}。`,
        `埃及市场调研是开罗档案。优势是谢赫扎耶德的开罗管理办公室与海湾实地团队。不要把迪拜自贸区方案复制到开罗工厂或北非经销。姐妹页面：{link:/market-research/usa|美国出发的中东研究}、{link:/market-research/japan|日本企业}、{link:/market-research/singapore|新加坡企业}。`,
      ],
    },
    {
      id: 'errors-zh',
      heading: '中国出发的中东委托里，常见的三种设计错误',
      paragraphs: [
        `第一种错误，是先交一份“海合会TAM”，再让委员会以后选城市。沙特与阿联酋是两套牌照、两种增值税、两套阿拉伯语问卷。埃及是第三份档案。把中国国内的讨论提纲贴到只讲英语的海湾样本上，得到的是客气的回答和不能用的上市文件。第一场访问之前，就要写清城市、渠道和对外投资路径。`,
        `第二种错误，是把外交部、沙特通讯社和WAM的存量数字当成需求。这些序列是官方的、有日期的。它们描述已经在王国或阿联酋的中国企业和居民有多少，不能证明第二台挖掘机、第二个电动车品牌或第二个OTC单品还能卖出去。引用这些序列，不要去乘它们。买方仍要靠一次访问点名。`,
        `第三种错误，是只用普通话做海湾单元。普通话适用于对手本身是中国央企、中资承包商或中资经销商的时候。沙特肿瘤科医生或阿联酋家庭购物者不能用普通话替代。语言计划必须写进方案：先阿拉伯语，再英语，只有受访者本身是中资时才加普通话。`,
      ],
    },
    {
      id: 'sample-zh',
      heading: '样本、周期，以及本页和已上线专题怎么分工',
      paragraphs: [
        `典型的中东医药市场调研会点名专科、按国配额，并用阿拉伯语与英语问卷。汽车、工业和消费品项目使用同一批海湾实地办公室访问买方和家庭。方案签字后，四到八周是常态。小型定性单元可以更快。三百人的上市ATU做不到。我们不会为了赢标而编造一周完成的全国研究。`,
        `已上线的沙特与阿联酋专题、以及海湾中国电动车消费者研究，仍是支持文章。本页是读者应提出实地委托的转化页。中国企业埃及专题截至2026年10月18日仍在草稿。上线前，请在表单第一句写明埃及。不要把专题和本页当成重复网址。`,
        `定制项目${ZH_PRICE}。48小时提案时钟从决定、国家、受访者、语言和委员会日期写清时起算。内地团队对接谢里登或伦敦。实地由美国、英国、开罗管理办公室与胡拜尔、迪拜、科威特的海湾团队交付。`,
      ],
    },
    {
      id: 'how-zh',
      heading: '内地总部如何向BioNixus下委托',
      paragraphs: [
        `内地团队用中文或英文对接谢里登或伦敦。实地由迪拜与胡拜尔办公室用阿拉伯语和英语设计。埃及由开罗加入。可用简报后48小时内出具书面方案。定制项目${ZH_PRICE}。书面保证：${ZH_GUARANTEES}。英语口号是 “Guaranteed in writing.”（书面保证范围，不是保证结论准确）。我们从不声称保证结论准确。`,
        `本简体中文页面向内地阅读起草，发布前需母语审校。与英文页做 hreflang 配对。百度可见度取决于百度站长工具，不取决于谷歌；完成登记是测量任务，不是已经在百度排名的声明。`,
        `委托请用 {link:/contact|联系表} 或 {ext:mailto:admin@bionixus.com|admin@bionixus.com}。美国 {ext:tel:+18884655557|+1-888-465-5557}。英国 {ext:tel:+447727666682|+44 7727 666682}。胡拜尔 {ext:tel:+966501825336|+966 50 182 5336}。`,
        `内地总部若同时从美国或新加坡成本中心下单，请把走廊留在各自的转化页：{link:/market-research/usa|美国出发的中东研究}、{link:/market-research/japan|日本企业}、{link:/market-research/singapore|新加坡企业}。医疗国别页是 {link:/healthcare-market-research/saudi-arabia|沙特}、{link:/healthcare-market-research/uae|阿联酋}、{link:/healthcare-market-research/egypt|埃及}。`,
        `中国国内的医生追踪是另一项工作。国内样本见 {link:/healthcare-market-research/china|中国医疗市场研究}。不要把国内医生追踪和海湾医师调查合成一个平均数。如果上海的委员会要求这样的平均，请把拒绝写进方案。能用的文件是按国切开的结果。`,
        `对外投资材料、MISA 经营范围和自贸区注册是律师的工作。BioNixus 点名买方、城市、渠道和委员会可以追问的价格。我们不代为申办牌照。项目由美国、英国、开罗管理办公室与海湾实地团队交付。我们不宣称保证结论准确。书面保证仍是范围、替换、最低样本、重新实地和试点费用计入正式项目。`,
        `已上线的 {link:/bionixus-industries/insights/chinese-companies-entering-saudi-arabia-and-the-uae|中国企业进入沙特与阿联酋} 与 {link:/bionixus-industries/insights/chinese-ev-brands-saudi-uae-consumer-research|海湾中国电动车消费者研究} 是支持文章，不是本页的副本。埃及专题仍在草稿。上线前，请在表单第一句写明埃及。`,
        `汽车、工程机械、消费品的内地总部也适用同一套拆分：国内追踪留给国内供应商，海湾与埃及的一次调查交给BioNixus。外交部、沙特通讯社和WAM的存量数字可以引用，不能当成需求曲线。可用简报必须写清决定、国家、受访者、语言和委员会日期。写清之后，48小时内出具书面方案。定制仍在1万至6万美元。我们从不声称保证结论准确。`,
        `如果同一总部还要开罗工厂、北非经销或非洲定价，请写在第一句。开罗管理办公室在谢赫扎耶德。不要把迪拜自贸区方案复制到开罗工厂，也不要把埃及平均进海合会单元格。在埃及专题合并之前，本页是上线的转化网址。如果委员会要把国内样本和海湾样本合成一个平均数，请把拒绝写进方案。能用的交付是按国切开、可用英语或中文阅读的结果。保证的是范围，不是结论准确。汽车、工程机械和消费品项目使用同一批海湾实地办公室。国内“中国市场调研公司”是另一项工作，见中国医疗研究页。上海委员会如果要把中国国内样本和沙特样本合成一个平均数，也会在方案里被拒绝。`,
      ],
    },
    {
      id: 'native-review-zh',
      heading: '关于这篇中文稿',
      paragraphs: [
        `本稿按书面语起草，供母语审校后发布。不使用机器直译腔。项目由美国、英国、开罗管理办公室与海湾实地团队交付。不宣称保证调研结论准确。`,
        `保证范围、最低样本、不合格受访者无偿替换、按约定配额重新实地、试点费用计入正式项目。不保证 findings 的准确性。`,
      ],
    },
    {
      id: 'odi-zh',
      heading: '对外投资材料不是需求文件',
      paragraphs: [
        `内地投资委员会常常带着对外直接投资材料、自贸区报价和双边贸易打印件来开会。这些文件是真的。它们没有点名买方。外交部的沙特与阿联酋页面、沙特通讯社的存量数字、WAM的居民数字，属于同一类证据：有日期、官方、但沉默于第二个品牌还能不能卖出去。BioNixus会引用它们，不会把它们乘成市场规模。`,
        `先写牌照、后写客户的中东委托，会空转一轮。先写城市、渠道和受访者。律师办MISA、自贸区和对外投资路径。BioNixus做访问。两件事在方案里分开写。定制仍是${ZH_PRICE}。书面保证的是范围，不是结论准确。项目由美国、英国、开罗管理办公室与海湾实地团队交付。`,
        `可用简报必须写清决定、国家、受访者、语言和委员会日期。写清之后，48小时内出具书面方案。协议签字后的实地通常是四到八周。小型定性可以更快。三百人的全国ATU做不到一周。如果委员会要十天里的一个全国数字，诚实的产品是小型定性单元，不是虚构的一周全国研究。国内“中国市场调研公司”是另一项工作，见中国医疗研究页。本页只承接中国出发、中东与非洲落地的一次调查。`,
      ],
    },
  ],
  faqs: [
    {
      question: '项目从哪里交付？',
      answer:
        '由美国（谢里登）、英国伦敦、开罗（谢赫扎耶德）的管理办公室，以及胡拜尔、迪拜、科威特的海湾实地团队交付。内地总部对接这些办公室。',
    },
    {
      question: '这和“中国企业进入沙特与阿联酋”那篇文章是同一页吗？',
      answer: '不是。那是支持文章。本页是服务转化页。两页一起用，不要当成重复网址。',
    },
    {
      question: '沙特市场调研和阿联酋市场调研能合成一个项目吗？',
      answer:
        '只有决策本身是区域级、并且问卷按区域设计时才可以。否则应是两个样本。多数投资委员会需要拆开。',
    },
    {
      question: '做不做埃及市场调研？',
      answer: '做，由开罗管理办公室执行。埃及专题文章尚在草稿。在上线前，请在本页表单第一句写明埃及。',
    },
    {
      question: '中东医药市场调研怎么做？',
      answer:
        '使用海湾医师与支付方面板，不用中国国内医生追踪。参见沙特、阿联酋与埃及的医疗研究页。',
    },
    {
      question: '有没有英文页？',
      answer: '有。/market-research/china。hreflang 与本页配对。',
    },
    {
      question: '你们保证结论准确吗？',
      answer:
        '不保证。BioNixus从不声称 guaranteed accuracy。书面保证是替换不合格受访者、最低样本、重新实地、试点费用计入正式项目。',
    },
  ],
  relatedLinks: [
    { to: PATHS.china, label: 'English: Middle East research for Chinese companies' },
    { to: PATHS.usa, label: '美国出发的中东研究' },
    { to: PATHS.japan, label: '日本企业' },
    { to: PATHS.singapore, label: '新加坡企业' },
    { to: '/healthcare-market-research', label: '医疗市场研究中心' },
    {
      to: '/bionixus-industries/insights/chinese-companies-entering-saudi-arabia-and-the-uae',
      label: '中国企业进入沙特与阿联酋',
    },
  ],
  hreflang: INTL_HREFLANG_BY_PATH[PATHS.chinaZh],
};
