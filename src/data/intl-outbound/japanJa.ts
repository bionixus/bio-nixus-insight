/**
 * Japanese money page. Native-quality draft. NATIVE_REVIEW_REQUIRED before publish.
 */
import {
  FACTS,
  INTL_DATE_MODIFIED,
  INTL_HREFLANG_BY_PATH,
  JETRO_MEA_REPORTS,
  PATHS,
} from './shared';
import type { IntlMoneyPage } from './types';

const JA_HQ = '米国ワイオミング州シェリダン';
const JA_LEADERSHIP = '米国（シェリダン）、英国ロンドン、カイロ（シェイク・ザイード）';
const JA_FIELD = 'アルコバール、ドバイ、クウェート';
const JA_SAO_PAULO = '2026年末までにサンパウロ事務所を開設する過程にあります';
const JA_GUARANTEES =
  '不適格回答者の無償置換、最低サンプル、合意クォータ未達時の当社負担による再実査、パイロット費用の本調査充当';
const JA_PRICE = '1万〜6万米ドル';

export const JAPAN_JA_INTL_PAGE: IntlMoneyPage = {
  id: 'japan-ja',
  path: PATHS.japanJa,
  lang: 'ja',
  htmlLang: 'ja',
  nativeReviewRequired: true,
  title: '日本企業向け中東市場調査｜サウジ・UAE・エジプト｜BioNixus',
  description:
    '日本企業向け中東市場調査。サウジ市場参入、UAE医薬品調査、エジプト調査をアラビア語と英語で実施。米国・英国・カイロ統括と湾岸実査チームが担当。カスタム1万〜6万米ドル。範囲は書面保証、結果の正確さは保証しません。実査はアルコバール、ドバイ、クウェート。48時間で提案。日本の現地法人が対象です。英語版あり。',
  h1: '日本企業向け中東市場調査',
  primaryKeyword: '中東 市場調査',
  quickAnswer:
    'BioNixusは、日本企業向けに中東・アフリカの一次調査を実施します。統括は米国ワイオミング州シェリダン、英国ロンドン、カイロ（シェイク・ザイード）。現地実査はアルコバール、ドバイ、クウェート、カイロです。サウジアラビア市場参入、UAE医薬品調査、エジプト調査が中心です。カスタム調査は1万〜6万米ドル。保証するのは範囲であり、結果の正確さではありません。',
  breadcrumbLabel: '日本',
  dateModified: INTL_DATE_MODIFIED,
  coverImage: '/images/intl-outbound/japan-ja-cover.jpg',
  heroImage: '/images/intl-outbound/japan-ja-hero.jpg',
  coverAlt: 'BioNixusの紺と金のカバー：日本企業向け中東市場調査 — サウジ・UAE・エジプト',
  heroAlt: '日本から中東・アフリカへの市場調査を示す紺と金のBioNixusアート。ロゴのみ。ストック写真なし',
  areaServed: [
    { '@type': 'Country', name: 'Japan' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'Place', name: 'MENA' },
  ],
  proofPoints: [
    {
      title: '日本から中東へ、東京パネルではない',
      description:
        '日本の現地法人はシェリダンまたはロンドンに依頼します。実査は米国・英国・カイロの統括拠点と湾岸チームが担います。',
    },
    {
      title: 'アラビア語の調査票、日本語で読める報告',
      description:
        'リクルートとモデレーションはアラビア語と英語。投資委員会向けの報告は英語で作成できます。',
    },
    {
      title: 'インテージとマクロミルは日本側に残す',
      description:
        '国内調査は従来の日本サプライヤーへ。サウジ、UAE、エジプトのサンプルはBioNixusへ。',
    },
  ],
  sections: [
    {
      id: 'who-ja',
      heading: '中東市場調査を依頼するのは、どの部署か',
      paragraphs: [
        `日本企業向け中東市場調査は、サウジアラビア、UAE、エジプト、あるいはGCC全体の損益を持つ海外事業部や現地法人が依頼します。国内インサイト部がすでにインテージやマクロミルと契約している場合でも、湾岸の一次調査はその延長ではありません。英語版は {link:/market-research/japan|Middle East market research for Japanese companies} です。医師・支払者の案件は {link:/healthcare-market-research|ヘルスケア市場調査ハブ} から入ってください。`,
        `サウジアラビア市場調査、UAE市場調査、中東医薬品市場調査、エジプト市場調査は、それぞれ別サンプルです。「GCC」を一つのセルにして日本のディスカッショングイドを英訳しただけでは、投資委員会は通りません。ジェトロは中東レポートを公開しており、机上の文脈として使えます（{ext:${JETRO_MEA_REPORTS}|ジェトロ 中東レポート}）。それは医師サンプルでも、病院アカウント別の切断でもありません。`,
        `BioNixusは${FACTS.founded}年設立。本社は${JA_HQ}。統括拠点は${JA_LEADERSHIP}。実査拠点は${JA_FIELD}。顧客${FACTS.clients}社、${FACTS.countries}カ国、2026年累計${FACTS.studies2026}件（2025年は${FACTS.studies2025}件）。カスタム価格は${JA_PRICE}。${JA_SAO_PAULO}。日本から中東への案件は、これらの統括拠点と湾岸実査チームが届けます。`,
      ],
    },
    {
      id: 'saudi-ja',
      heading: 'サウジアラビア市場参入は、UAEとは別の許認可です',
      paragraphs: [
        `サウジアラビア市場参入を日本から検討する場合、ドバイのフリーゾーン法人があることと、MISAの事業やSFDAの経路があることは別です。研究が答えなければならないのは、王国のどの都市の、誰が、どのチャネルで買うかです。日本語の調査票をアラビア語に機械翻訳しただけでは使えません。`,
        `ヘルスケアのサウジ案件は {link:/healthcare-market-research/saudi-arabia|サウジアラビアのヘルスケア市場調査} と {link:/bionixus-industries/insights/market-entry-research-saudi-arabia|サウジ市場参入リサーチ} に接続します。非ヘルスケアは {link:/bionixus-industries|インダストリーハブ} です。中国企業向けの湾岸ページ {link:/market-research/china|Chinese companies} も、競合密度の文脈として併読してください。`,
        `UAE市場調査はドバイとアブダビを分け、MOHAP、DHA、DOHを混同しません。エジプト市場調査はシェイク・ザイードのカイロ統括が持ちます。EDAとGAFIは湾岸の写しではありません。{link:/healthcare-market-research/egypt|エジプトのヘルスケア市場調査} を参照してください。`,
      ],
    },
    {
      id: 'errors-ja',
      heading: '日本から中東へ出す依頼で、よく見る設計ミス',
      paragraphs: [
        `一つ目は、GCCを英語一つのセルにすることです。サウジアラビア、UAE、エジプトは許認可も入札もアラビア語の方言も共有しません。リヤド、ドバイ、カイロを「MENA平均」にすると、東京の投資委員会は使えません。サンプルを分けるか、本当に地域決定である理由を1ページ目に書いてください。`,
        `二つ目は、日本のディスカッショングイドを機械翻訳して湾岸に出すことです。敬語、疾患名、ブランド名は、湾岸のモデレーターがパイロットしない限りアラビア語の逆翻訳に耐えません。BioNixusは市場向けのアラビア語票を書き、日本語または英語の報告用マスターを別に持ちます。貼り付けではありません。`,
        `三つ目は、アラビア語の代わりに日本語セルを置くことです。日本語セルが適切なのは、回答者が日系企業、日本人の病院訪問者、ドバイの日本人駐在購買である場合です。サウジの腫瘍医やエジプトの世帯に日本語セルを置くことはしません。言語計画は、最初のリクルートの前にプロトコルへ書いてください。`,
      ],
    },
    {
      id: 'sample-ja',
      heading: 'サンプル、期間、インテージとマクロミルの残し方',
      paragraphs: [
        `典型的な日本発の中東ヘルスケア案件は、診療科を特定し、国別クォータを置き、アラビア語と英語の調査票を使います。腫瘍、内分泌、循環器、病院薬剤師が多いです。プロトコル合意後、実査は4〜8週が普通です。支払者やNUPCOに近い調達ヒアリングは長い側です。小さな質的セルは短くできます。300人のATUはできません。`,
        `インテージとマクロミルには、日本側のトラッカー、国内医師パネル、国内消費者調査を残してください。BioNixusは中東・アフリカの一次サンプルを持ちます。役割は補完です。日本のトラッカーを止めて湾岸調査の予算に回す、あるいは日本票に「サウジを1行足す」よう依頼すると、どちらの委員会も通りません。`,
        `カスタムは${JA_PRICE}。48時間の提案時計は、決定、国、対象者、言語、委員会日程が揃った時点で始まります。ジェトロの中東レポートは机上の文脈として使えます（{ext:${JETRO_MEA_REPORTS}|ジェトロ 中東レポート}）。医師や購買者の実査の代わりにはなりません。実査は米国・英国・カイロの統括と湾岸チームが担います。`,
      ],
    },
    {
      id: 'how-ja',
      heading: '日本の現地法人がBioNixusに依頼する流れ',
      paragraphs: [
        `東京または大阪が商業上の問いを日本語または英語で書きます。シェリダンまたはロンドンがプロトコルに落とします。アルコバール、ドバイ、クウェートがリクルートします。エジプトはカイロが入ります。使えるブリーフから48時間以内に提案書を返します。カスタム調査は${JA_PRICE}。書面の保証は次のとおりです。${JA_GUARANTEES}。英語の標語は “Guaranteed in writing.”（範囲を書面で保証する、という意味）です。結果の正確さを保証する、とは言いません。`,
        `湾岸調査の中に日本語セルを置くのは、回答者が日系企業、日本人駐在員、日本人の購買担当である場合に限ります。サウジの処方医やエジプトの消費者の代わりに日本語セルを置くことはしません。`,
        `姉妹ページは {link:/market-research/usa|米国からのMENA調査} と {link:/market-research/singapore|シンガポール企業向け中東調査} です。依頼は {link:/contact|問い合わせフォーム} または {ext:mailto:admin@bionixus.com|admin@bionixus.com}。米国 {ext:tel:+18884655557|+1-888-465-5557}。英国 {ext:tel:+447727666682|+44 7727 666682}。アルコバール {ext:tel:+966501825336|+966 50 182 5336}。`,
        `日本国内の医師調査は、湾岸の医師調査とは別案件です。国内パネルは従来の日本サプライヤーへ。サウジ、UAE、エジプトのサンプルはBioNixusへ。東京の委員会が「グローバル平均」として日本とサウジを混ぜるよう求めた場合、提案書に拒否を書きます。使えるファイルは国別の切断であり、湾岸を隠す平均ではありません。`,
        `ヘルスケアの国別ハブは {link:/healthcare-market-research/saudi-arabia|サウジアラビア}、{link:/healthcare-market-research/uae|UAE}、{link:/healthcare-market-research/egypt|エジプト} です。中国企業向けの湾岸ページ {link:/market-research/china|Chinese companies} は競合密度の文脈です。案件は米国・英国・カイロの統括と湾岸実査チームが届けます。結果の正確さは保証しません。`,
        `自動車、食品、産業機械の日本企業も同じ切り分けです。日本国内の調査は従来のサプライヤー。中東・アフリカの一次調査はBioNixus。ジェトロの机上レポートは文脈であり、実査の代わりではありません。使えるブリーフには、決定、国、対象者、言語、委員会日程を書いてください。それから48時間で提案します。日本とサウジを一つの平均にしたい委員会には、提案書で拒否を書きます。使える成果物は英語で読める国別の切断です。保証するのは範囲であり、結果の正確さではありません。国内の「日本 市場調査会社」はインテージやマクロミルの領域です。このページの主語は日本から中東へ出す一次調査です。`,
      ],
    },
    {
      id: 'native-review-ja',
      heading: 'この日本語原稿について',
      paragraphs: [
        `このページはネイティブ品質を目指して起草し、公開前のネイティブレビュー対象です。英語版とhreflangで対になります。国内の「日本 市場調査会社」はインテージやマクロミルの領域であり、このページの主語ではありません。`,
        `保証するのは範囲、最低サンプル、不適格回答者の無償置換、再実査、パイロット費用の本調査充当です。調査結果の正確さ（accuracy of findings）は保証しません。`,
      ],
    },
    {
      id: 'brief-ja',
      heading: '最初の依頼に書く五つの項目',
      paragraphs: [
        `使えるブリーフは1ページです。決めること、国、対象者、言語、委員会の日付。「GCCの医師、第1波」はブリーフではありません。「過去12か月にこのクラスで5例以上を治療したリヤド、ジェッダ、ドバイの腫瘍医。アラビア語と英語。11月12日の東京ブランド会議の前に報告」がブリーフです。この5項目が揃った時点で、48時間の提案時計が始まります。揃う前は、シェリダンは価格ではなくスコープメモを返します。`,
        `プロトコル合意後の実査は4〜8週が普通です。支払者と病院調達は長い側です。小さな質的セルは短くできます。300人の全国ATUは1週ではできません。提案で1週の全国調査を約束することはしません。10日で数字が必要な場合、正直な製品は小さな質的セルです。カスタムは${JA_PRICE}です。実査は米国・英国・カイロの統括と湾岸チームが担います。結果の正確さは保証しません。`,
      ],
    },
  ],
  faqs: [
    {
      question: '実査はどこから実施しますか。',
      answer:
        '米国（シェリダン）、英国ロンドン、カイロ（シェイク・ザイード）の統括拠点と、アルコバール、ドバイ、クウェートの湾岸実査チームから実施します。日本の現地法人はこれらの拠点に依頼します。',
    },
    {
      question: '中東市場調査とは何ですか。',
      answer:
        '日本企業がサウジアラビア、UAE、エジプト、広域GCCで医師、支払者、購買者、消費者に行う一次調査です。ジェトロの机上レポートの代替ではありません。ジェトロは文脈、BioNixusは実査です。',
    },
    {
      question: 'サウジアラビア市場参入を支援できますか。',
      answer:
        'できます。王国の買い手、都市、許認可、チャネルを資本送金前に特定します。ドバイ法人はMISAやSFDAの代わりになりません。費用は1万〜6万米ドルです。',
    },
    {
      question: 'インテージやマクロミルは残すべきですか。',
      answer:
        '日本国内の仕事は残してください。中東・アフリカのサンプルはBioNixusへ。役割は補完です。',
    },
    {
      question: 'UAE市場調査とエジプト市場調査は分けますか。',
      answer:
        '分けます。UAEはドバイとアブダビ、MOHAP／DHA／DOH。エジプトはカイロ統括。地域平均にしないでください。',
    },
    {
      question: '英語ページはありますか。',
      answer: 'あります。/market-research/japan です。hreflangで対になります。',
    },
    {
      question: '結果の正確さを保証しますか。',
      answer:
        'しません。保証するのは不適格回答者の置換、最低サンプル、再実査、パイロット費用の充当です。標語は Guaranteed in writing. です。',
    },
  ],
  relatedLinks: [
    { to: PATHS.japan, label: 'English: Middle East research for Japanese companies' },
    { to: PATHS.usa, label: 'MENA market research company USA' },
    { to: PATHS.china, label: 'Chinese companies' },
    { to: PATHS.singapore, label: 'Singapore companies' },
    { to: '/healthcare-market-research', label: 'ヘルスケア市場調査ハブ' },
    { to: '/healthcare-market-research/japan', label: '日本のヘルスケア市場調査' },
  ],
  hreflang: INTL_HREFLANG_BY_PATH[PATHS.japanJa],
};
