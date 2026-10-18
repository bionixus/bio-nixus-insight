import {
  ESG_ABU_DHABI,
  FACTS,
  GUARANTEES,
  INTL_DATE_MODIFIED,
  JETRO_MEA_REPORTS,
  MFA_CHINA_KSA,
  OFFICES,
  DELIVERY,
  INTL_HREFLANG_BY_PATH,
  PATHS,
  SPA_CHINESE_KSA,
  WAM_CHINESE_UAE,
} from './shared';
import type { IntlMoneyPage } from './types';

export const USA_INTL_PAGE: IntlMoneyPage = {
  id: 'usa',
  path: PATHS.usa,
  lang: 'en',
  htmlLang: 'en',
  nativeReviewRequired: false,
  title: 'MENA Market Research Company USA: Pharma Fieldwork',
  description:
    'Work is delivered from the BioNixus US office. MENA research for US pharma: GCC physician surveys, Saudi and UAE entry, plus US market entry. $10k–$60k.',
  h1: 'MENA Market Research Company USA',
  primaryKeyword: 'MENA market research company USA',
  quickAnswer:
    'BioNixus is a MENA market research company, headquartered in Sheridan, Wyoming, for US pharma and medtech teams that need primary fieldwork in Saudi Arabia, the UAE, Egypt and the wider Gulf. Work is delivered from the BioNixus US office. Al Khobar, Dubai and Kuwait field teams run Saudi, UAE and Kuwait interviews. Custom studies run $10,000–$60,000. Scope is guaranteed in writing, not findings.',
  breadcrumbLabel: 'USA',
  dateModified: INTL_DATE_MODIFIED,
  coverImage: '/images/intl-outbound/usa-cover.jpg',
  heroImage: '/images/intl-outbound/usa-hero.jpg',
  coverAlt:
    'BioNixus navy and gold cover: MENA market research company USA — GCC physician surveys from Sheridan, Wyoming',
  heroAlt:
    'Navy and gold BioNixus artwork for USA to Middle East and Africa market research, with the BioNixus logo and no stock photograph',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'Place', name: 'MENA' },
  ],
  proofPoints: [
    {
      title: 'US headquarters, Gulf fieldwork',
      description:
        'Brief the Sheridan headquarters. Arabic–English fieldwork runs from Al Khobar, Dubai and Kuwait, with Cairo leadership for Egypt and North Africa.',
    },
    {
      title: 'Physician and account-level cuts',
      description:
        'About 3,200 physicians across 48 countries, used when a syndicated US or GCC audit stops at the national average.',
    },
    {
      title: 'Written scope, not a forecast promise',
      description:
        'Custom work is $10,000–$60,000. The tagline is “Guaranteed in writing.” That guarantee is sample, replacement and re-field — not accuracy of findings.',
    },
  ],
  sections: [
    {
      id: 'who-this-is-for',
      heading: 'Who briefs a MENA market research company from the USA?',
      paragraphs: [
        `US brand, insights and market-access teams use a {link:/healthcare-market-research|healthcare market research} partner when the decision is in the Middle East or Africa and the report they already buy does not name the buyer. The person who briefs the work is usually a US brand or insights lead who has to take a Saudi, UAE, or Egypt question to a US committee. This page is for that brief. It is not a list of US research firms. That list is on {link:/insights/top-healthcare-market-research-companies-usa-2026|top healthcare market research companies in the USA} and {link:/healthcare-market-research-usa|healthcare market research USA}.`,
        `Two other buyers use the same page. First, foreign firms entering the United States — Gulf, European and Brazilian sponsors who need US market-entry research before they remit capital. Second, US consumer, automotive and B2B teams that need the same GCC fieldwork the pharma practice already runs. Start from the {link:/bionixus-industries|industries hub} when the brief is not a physician or payer file.`,
        `BioNixus was founded in ${FACTS.founded} and is headquartered in ${FACTS.hq}. Leadership offices are ${OFFICES.leadership}. Field offices are ${OFFICES.field}. The firm has served ${FACTS.clients} clients in ${FACTS.countries} countries and has run ${FACTS.studies2026} studies in 2026 year-to-date (${FACTS.studies2025} in 2025). Custom pricing is ${FACTS.priceLow}–${FACTS.priceHigh}. ${FACTS.reviews} client reviews sit on public profiles. ${DELIVERY.usa} ${DELIVERY.latam}`,
      ],
    },
    {
      id: 'why-outbound-mea',
      heading: 'Why US teams commission Middle East healthcare market research',
      paragraphs: [
        `A US syndicated audit can size a national Rx or retail category. It rarely answers who will prescribe, tender or stock a product in Riyadh, Jeddah, Dubai, Abu Dhabi or Cairo. Middle East healthcare market research for US pharma is the commissioned work that names the physician, the hospital account, the payer and the Arabic instrument. Keep IQVIA or NielsenIQ for the US national cut. Brief BioNixus when the question moves to {link:/healthcare-market-research/saudi-arabia|healthcare market research in Saudi Arabia}, {link:/healthcare-market-research/uae|the UAE} or {link:/healthcare-market-research/egypt|Egypt}.`,
        `Saudi Arabia market research for US companies is not a translated US discussion guide. SFDA, NUPCO and CHI are separate decisions. A US brand team that pastes a US ATU onto an Arabic sample will get polite answers and an unusable launch file. The same is true in the UAE, where MOHAP, DHA and DOH do not share one formulary. See {link:/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia|how to choose a healthcare market research agency in Saudi Arabia} and {link:/blog/iqvia-alternative-uae-primary-research|IQVIA alternative UAE primary research}.`,
        `GCC physician survey work is the most common US-to-MEA healthcare brief: oncologists, endocrinologists, cardiologists, rare-disease specialists and hospital pharmacists, recruited in Arabic and English, with quotas by country and sector. BioNixus fields those samples from the Al Khobar, Dubai and Kuwait offices. The US project office in Sheridan writes the protocol, the quality plan and the steering-committee readout so the file can be defended in a US compliance review.`,
      ],
    },
    {
      id: 'what-we-field',
      heading: 'What a US-to-MEA study actually fields',
      paragraphs: [
        `A typical US-to-MEA programme is one decision, not a region-wide encyclopedia. The first page of the proposal names the decision, the countries, the respondents and the language. Healthcare briefs usually mix a quantitative GCC physician survey with qualitative payers or procurement interviews. Non-pharma briefs use the same field offices for buyers, distributors and consumers. {link:/hcp-atu-study|HCP ATU studies} and {link:/pharmacy-mystery-shopper|pharmacy mystery shopping} are the two healthcare products US teams already recognise.`,
        `Saudi Arabia and the UAE are two samples. Do not brief “the GCC” as one cell unless the decision is truly regional and the instrument is designed that way. Egypt is a third sample when the US affiliate also owns North Africa. Qatar, Kuwait, Oman and Bahrain join when the brand already has a tender or a private-hospital list in those markets. Cross-links from this page go to {link:/market-research/japan|Japan-to-MEA research}, {link:/market-research/china|China-to-MEA research} and {link:/market-research/singapore|Singapore-to-MEA research} when the same US global team is coordinating several outbound corridors.`,
        `Chinese and Japanese sponsors already leave a public trail in the Gulf that a US competitor should not ignore. The Saudi Press Agency recorded more than 750 Chinese companies in the Kingdom and Chinese investment above SAR 31 billion ({ext:${SPA_CHINESE_KSA}|Saudi Press Agency, 25 September 2025}). The Abu Dhabi Chamber, via WAM, put the UAE figures at more than 400,000 Chinese residents and over 17,000 Chinese companies ({ext:${WAM_CHINESE_UAE}|WAM, 11 June 2026}). MFA China publishes the bilateral trade pages a US strategy team should date, not paraphrase ({ext:${MFA_CHINA_KSA}|MFA China on Saudi Arabia}). Those series describe stock and trade. They are not a demand curve for a US brand. Primary interviews still have to name the buyer.`,
      ],
    },
    {
      id: 'us-market-entry',
      heading: 'US market entry research for foreign companies',
      paragraphs: [
        `The second job on this page is research for companies entering the United States. That file is for a committee in Riyadh, Dubai, London, or São Paulo that needs to know the US buyer, the state, the channel, and the tax or import step before it funds a US company, a distributor, or a product launch. The questions are not the same as a Gulf physician survey. The checklist is the {link:/bionixus-industries/insights/us-market-entry-research-for-foreign-companies|US market entry research guide}. This page is where you ask BioNixus to do the interviews.`,
        `Gulf sponsors often arrive with a free-zone company and a US warehouse plan. That is not a demand file. European sponsors brief the USA and UK offices; ${DELIVERY.europe} Brazilian and other LATAM sponsors brief Sheridan with local field teams; ${DELIVERY.latam} The United States is fifty state tax regimes, a federal import stack, and commercial payers that do not behave like NUPCO or NICE. BioNixus scopes the research from Sheridan. It does not file the licence. Counsel and a registered agent do that. The research names the customer, the price and the channel the committee can interrogate.`,
        `Inbound US work still uses the same written guarantees as outbound MEA work. Scope, timing, replacement of non-qualifying respondents, a minimum sample, re-field at our cost, and a pilot fee credited to the main field. The tagline remains “${FACTS.slogan}” Findings are not guaranteed. Never read that sentence as guaranteed accuracy.`,
      ],
    },
    {
      id: 'brief-and-timeline',
      heading: 'What a US-to-MEA brief must name, and how long field takes',
      paragraphs: [
        `A usable brief is one page. It names the decision, the countries, the respondents, and the language. “Gulf physicians” is not a brief. “Oncologists in Riyadh, Jeddah, and Dubai, interviewed in Arabic and English, before a named US brand review” is a brief. When those items are missing, Sheridan sends questions, not a price.`,
        `The proposal states the sample and the timing after the protocol is signed. Interviews with payers and hospital buyers usually take longer than interviews with pharmacists. A small set of interviews is a different study from a large physician survey. BioNixus will not promise a national study in one week.`,
        `The written quality gates are the same on every US-contracted file: replacement of non-qualifying respondents, a minimum sample, re-field at our cost if agreed quotas are missed, and a pilot fee credited to the main field. Those gates are why the slogan is “${FACTS.slogan}” They are not a claim that the findings are guaranteed, that a forecast will hit, or that a competitor share will match a later audit. US legal and compliance reviewers should read the protocol, not the homepage tagline, before they sign.`,
      ],
    },
    {
      id: 'how-we-work',
      heading: 'How the US office and the MEA field offices split the work',
      paragraphs: [
        `Sheridan writes the protocol, the sample plan, the quality gates and the readout. London joins when the same brand team sits in the UK. Cairo joins when Egypt or wider North Africa is in the sample. Al Khobar, Dubai and Kuwait recruit and moderate. Arabic instruments are written for the market, not machine-translated from a US English master and left untested. A Mandarin or Japanese cell is added only when the respondent is itself a Chinese or Japanese firm in the Gulf — not as a substitute for Arabic.`,
        `US teams already comparing physician-survey companies in the United States should keep that vendor for physicians in the United States. A survey that stays inside the United States is a different page: {link:/healthcare-market-research-usa|healthcare market research USA} and {link:/pharmaceutical-market-research-usa|pharmaceutical market research USA}. This page is for the brief that leaves the US sample and enters the Middle East or Africa, or the brief that enters the US from abroad.`,
        `Japanese affiliates that sit in the US and also own a Gulf P&amp;L should read {link:/market-research/japan|Middle East market research for Japanese companies}. APAC regional HQs that happen to book the work from a US cost centre should also see {link:/market-research/singapore|Middle East market research for Singapore companies}. JETRO’s Middle East report shelf is useful context for those affiliates ({ext:${JETRO_MEA_REPORTS}|JETRO Middle East reports}); it is not a substitute for a named physician or buyer sample. Enterprise Singapore’s Abu Dhabi discovery programme is the matching public programme for Singapore tech firms ({ext:${ESG_ABU_DHABI}|Enterprise Singapore}).`,
      ],
    },
    {
      id: 'pricing-guarantees',
      heading: 'Pricing, guarantees and what we will not claim',
      paragraphs: [
        `Custom studies typically run from ${FACTS.priceLow} to ${FACTS.priceHigh}. The price moves with the countries, how hard the respondents are to reach, the method, and the sample size. The written guarantees are: ${GUARANTEES}. The slogan is “${FACTS.slogan}” That is a scope guarantee. It is not a claim of guaranteed accuracy, guaranteed findings, or a guaranteed forecast.`,
        `${DELIVERY.usa} Al Khobar, Dubai and Kuwait field teams run Saudi, UAE and Kuwait interviews. A study whose respondents are in Japan, China, or Singapore is a different brief from Gulf fieldwork.`,
        `To brief a MENA market research company USA programme, use the {link:/contact|contact form} or email {ext:mailto:admin@bionixus.com|admin@bionixus.com}. In the United States call {ext:tel:+18884655557|+1-888-465-5557}. In the United Kingdom call {ext:tel:+447727666682|+44 7727 666682}. In the Kingdom call the Al Khobar field office on {ext:tel:+966501825336|+966 50 182 5336}.`,
      ],
    },
  ],
  faqs: [
    {
      question: 'Is BioNixus a MENA market research company the US can contract?',
      answer:
        'Yes. BioNixus is a primary research firm headquartered in Sheridan, Wyoming. Work is delivered from the BioNixus US office. Al Khobar, Dubai and Kuwait field teams run Saudi, UAE and Kuwait interviews. US pharma and medtech teams contract Sheridan and receive Arabic and English fieldwork in the Gulf and Egypt. Custom work is $10,000–$60,000.',
    },
    {
      question: 'What is Middle East healthcare market research for US pharma?',
      answer:
        'It is commissioned physician, payer, hospital and pharmacy fieldwork in Saudi Arabia, the UAE, Egypt and the wider GCC, designed so a US brand or access team can defend a launch, tender or pricing decision. It is not a translated US ATU and it is not a syndicated national audit. Keep IQVIA for the audit. Brief BioNixus for the account-level cut.',
    },
    {
      question: 'Do you run Saudi Arabia market research for US companies outside healthcare?',
      answer:
        'Yes. The same Al Khobar and Dubai field offices run buyer, distributor and consumer interviews for FMCG, automotive, energy and B2B briefs. Start from the industries hub and the Chinese-companies and Australia–GCC playbooks when the file is not a physician sample.',
    },
    {
      question: 'What does a GCC physician survey include?',
      answer:
        'A named specialty, country quotas, Arabic and English instruments, recruitment from the Gulf field offices, and a readout the US project office can take to a steering committee. Typical programmes sit inside the $10,000–$60,000 custom band. Low-incidence specialists and payers cost more than a GP sample.',
    },
    {
      question: 'Do you also do US market entry research for foreign companies?',
      answer:
        'Yes. Gulf sponsors brief Sheridan. European sponsors: work is delivered from the USA and UK offices. Brazilian and LATAM sponsors: work is delivered from the USA offices and our field teams in Brazil and LATAM. BioNixus does the research. It does not file the licence or replace US counsel. Scope is guaranteed in writing. Findings are not.',
    },
    {
      question: 'Are you an HCP survey company USA for domestic US physicians?',
      answer:
        'Physician surveys that stay inside the United States sit on the healthcare market research USA and pharmaceutical market research USA pages. This page is for US teams whose sample is in the Middle East or Africa, and for foreign firms entering the US. Do not treat the two briefs as one questionnaire.',
    },
    {
      question: 'Do you guarantee the accuracy of the findings?',
      answer:
        'No. BioNixus never claims guaranteed accuracy. The written guarantees are replacement of non-qualifying respondents, a minimum sample, re-field at our cost if agreed quotas are missed, and a pilot fee credited to the main field. The tagline is “Guaranteed in writing.”',
    },
  ],
  relatedLinks: [
    { to: PATHS.japan, label: 'Middle East market research for Japanese companies' },
    { to: PATHS.china, label: 'Middle East market research for Chinese companies' },
    { to: PATHS.singapore, label: 'Middle East market research for Singapore companies' },
    { to: '/healthcare-market-research', label: 'Healthcare market research hub' },
    { to: '/bionixus-industries', label: 'Industries hub' },
    {
      to: '/bionixus-industries/insights/us-market-entry-research-for-foreign-companies',
      label: 'US market entry research for foreign companies',
    },
    {
      to: '/bionixus-industries/insights/chinese-companies-entering-saudi-arabia-and-the-uae',
      label: 'Chinese companies entering Saudi Arabia and the UAE',
    },
    {
      to: '/bionixus-industries/insights/australia-gcc-market-entry-research',
      label: 'Australia–GCC market entry research',
    },
  ],
  hreflang: INTL_HREFLANG_BY_PATH[PATHS.usa],
};
