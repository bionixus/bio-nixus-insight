import {
  FACTS,
  GUARANTEES,
  INTL_DATE_MODIFIED,
  MFA_CHINA_KSA,
  MFA_CHINA_UAE,
  OFFICES,
  DELIVERY,
  INTL_HREFLANG_BY_PATH,
  PATHS,
  SPA_CHINESE_KSA,
  WAM_CHINESE_UAE,
} from './shared';
import type { IntlMoneyPage } from './types';

export const CHINA_EN_INTL_PAGE: IntlMoneyPage = {
  id: 'china',
  path: PATHS.china,
  lang: 'en',
  htmlLang: 'en',
  nativeReviewRequired: false,
  title: 'Middle East Market Research, Chinese Companies 2026',
  description:
    'China-to-MEA research for Chinese brands: who will buy in Saudi Arabia, the UAE, and Egypt. Delivered from the US, UK, Dubai and Cairo offices. $10k–$60k.',
  h1: 'Middle East Market Research for Chinese Companies',
  primaryKeyword: 'Middle East market research for Chinese companies',
  quickAnswer:
    'BioNixus runs China-to-MEA market research for Chinese companies. Work is delivered from the US, UK, Dubai and Cairo offices. Al Khobar, Dubai and Kuwait field teams run Saudi, UAE and Kuwait interviews. The Saudi and UAE article and the Egypt article sit next to this page. Custom work is $10,000–$60,000. Scope is guaranteed in writing, not findings.',
  breadcrumbLabel: 'China',
  dateModified: INTL_DATE_MODIFIED,
  coverImage: '/images/intl-outbound/china-cover.jpg',
  heroImage: '/images/intl-outbound/china-hero.jpg',
  coverAlt:
    'BioNixus navy and gold cover: Middle East market research for Chinese companies — China to GCC and Egypt',
  heroAlt:
    'Navy and gold BioNixus artwork for China to Middle East and Africa market research, with the BioNixus logo and no stock photograph',
  areaServed: [
    { '@type': 'Country', name: 'China' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'Place', name: 'MENA' },
  ],
  proofPoints: [
    {
      title: 'China-to-MEA, not a mainland panel',
      description:
        'Mainland HQs brief the US, UK, Dubai and Cairo offices. Al Khobar, Dubai and Kuwait field teams run Saudi, UAE and Kuwait interviews.',
    },
    {
      title: 'Two live playbooks already exist',
      description:
        'The Saudi and UAE article, the Egypt article, and the Chinese EV article are live. This page is where you ask for the interviews.',
    },
    {
      title: 'Arabic first, Mandarin only when needed',
      description:
        'A Mandarin cell is added when the Gulf buyer is itself a Chinese firm. It does not replace Arabic with physicians, payers or Saudi consumers.',
    },
  ],
  sections: [
    {
      id: 'who-this-is-for',
      heading: 'Who inside a Chinese company briefs Middle East research?',
      paragraphs: [
        `Middle East market research for Chinese companies is the study a Shenzhen, Shanghai, Beijing or Suzhou headquarters needs before it sends money to Saudi Arabia, the UAE, Egypt or a wider Africa plan. The buyer is usually an overseas-investment, international-business or brand team, not the research firm used inside China. This English page is where you ask for the interviews. Briefs can be written in Mandarin or English. The questionnaire and the committee readout stay in English. Start from the {link:/healthcare-market-research|healthcare market research} hub for physician and payer work, and from the {link:/bionixus-industries|industries hub} for other briefs.`,
        `The article {link:/bionixus-industries/insights/chinese-companies-entering-saudi-arabia-and-the-uae|Chinese companies entering Saudi Arabia and the UAE} is the Saudi and UAE checklist. The article {link:/bionixus-industries/insights/chinese-ev-brands-saudi-uae-consumer-research|Chinese EV brands in the Gulf} is the consumer checklist for cars. The article {link:/bionixus-industries/insights/chinese-companies-egypt-market-research|Chinese companies in Egypt} is the Egypt checklist. This page is where you ask BioNixus to do the interviews. It does not repeat those checklists.`,
        `BioNixus was founded in ${FACTS.founded} and is headquartered in ${FACTS.hq}. Leadership offices are ${OFFICES.leadership}. Field offices are ${OFFICES.field}. ${FACTS.clients} clients, ${FACTS.countries} countries, ${FACTS.studies2026} studies in 2026 year-to-date (${FACTS.studies2025} in 2025), ${FACTS.physicians} physicians, ${FACTS.priceLow}–${FACTS.priceHigh} custom pricing. ${DELIVERY.apac}`,
      ],
    },
    {
      id: 'ksa-uae-facts',
      heading: 'What official China–Gulf series a brief may cite',
      paragraphs: [
        `Use dated official series. Do not invent a TAM. MFA China publishes the bilateral pages for Saudi Arabia and the UAE ({ext:${MFA_CHINA_KSA}|MFA China — Saudi Arabia}; {ext:${MFA_CHINA_UAE}|MFA China — UAE}). The Saudi Press Agency recorded more than 750 Chinese companies in the Kingdom and Chinese investment above SAR 31 billion ({ext:${SPA_CHINESE_KSA}|SPA, 25 September 2025}). The Abu Dhabi Chamber, via WAM, put the UAE figures at more than 400,000 Chinese residents and over 17,000 Chinese companies ({ext:${WAM_CHINESE_UAE}|WAM, 11 June 2026}). Those figures describe stock. They do not prove that a second excavator brand, a second EV badge or a second OTC SKU will sell.`,
        `A Saudi study and a UAE study are not the same study. The two countries have different licences, different VAT rates, and different Arabic questionnaires. A headquarters in China that files one Gulf total will be asked which city, which seller, and which outbound-investment path. The Saudi and UAE checklist walks through those questions. This page is where the team asks for the interviews.`,
        `Healthcare research for Chinese companies in the Middle East uses Gulf physicians and payers, not a China physician tracker. See {link:/healthcare-market-research/saudi-arabia|Saudi Arabia}, {link:/healthcare-market-research/uae|the UAE} and {link:/healthcare-market-research/egypt|Egypt}. Research inside China already has {link:/healthcare-market-research/china|healthcare market research in China} and {link:/insights/top-healthcare-market-research-companies-china-2026|top healthcare market research companies in China}. Those pages stay on the China job. This page stays on the Middle East job.`,
      ],
    },
    {
      id: 'egypt-africa',
      heading: 'Egypt and Africa are a different file from the Gulf',
      paragraphs: [
        `Chinese companies in Egypt need a Cairo file. The Cairo leadership office is in Sheikh Zayed. Egypt has its own VAT, its own investment licence, and its own drug regulator. Do not copy a Dubai free-zone plan onto a Cairo factory. Read {link:/bionixus-industries/insights/chinese-companies-egypt-market-research|the Egypt checklist} before you send money.`,
        `Sibling outbound pages help a global Chinese HQ that also books work from a US or Singapore cost centre: {link:/market-research/usa|MENA market research company USA}, {link:/market-research/japan|Middle East market research for Japanese companies} and {link:/market-research/singapore|Middle East market research for Singapore companies}. Australian exporters using the same Gulf seats should read {link:/bionixus-industries/insights/australia-gcc-market-entry-research|Australia–GCC market entry research}.`,
        `A Mandarin cell is correct when the Gulf counterparty is a Chinese SOE, a Chinese contractor or a Chinese distributor. It is incorrect when the prescriber is a Saudi oncologist or the shopper is an Emirati household. Write the language plan into the protocol before the first interview is booked.`,
      ],
    },
    {
      id: 'design-errors',
      heading: 'Design errors we see on China-to-MEA briefs',
      paragraphs: [
        `The first error is filing one “GCC TAM” and asking the committee to pick a city later. Saudi Arabia and the UAE are two licence stacks, two VAT rates and two Arabic instruments. Egypt is a third. A Shenzhen or Shanghai HQ that pastes a China discussion guide onto an English-only Gulf sample will get polite answers and an unusable launch file. Name the city, the channel and the ODI path before the first interview is booked.`,
        `The second error is treating MFA, SPA and WAM stock figures as demand. Those series are official and dated. They describe how many Chinese firms and residents are already in the Kingdom or the UAE. They do not prove that a second excavator brand, a second EV badge or a second OTC SKU will sell. Primary interviews still have to name the buyer. Cite the series; do not multiply them.`,
        `The third error is a Mandarin-only Gulf cell. Mandarin is correct when the counterparty is a Chinese SOE, a Chinese contractor or a Chinese distributor. It is incorrect when the prescriber is a Saudi oncologist or the shopper is an Emirati household. Write the language plan into the protocol. Arabic first, English second, Mandarin only when the respondent is itself Chinese.`,
      ],
    },
    {
      id: 'sample-timeline',
      heading: 'Sample, timeline and how this page sits next to the live playbooks',
      paragraphs: [
        `A China-to-Middle East healthcare file names the specialty, the country quotas, and an Arabic and English questionnaire. Car, industrial, and consumer files use the same Gulf field offices for buyers and households. The proposal states the timing after the protocol is signed. A small set of interviews is a different study from a large physician survey. BioNixus will not promise a national study in one week.`,
        `The Saudi and UAE checklist and the Chinese EV article remain the supporting pages. This page is where those readers request the interviews. For Egypt, use {link:/bionixus-industries/insights/chinese-companies-egypt-market-research|the Egypt checklist} and say Egypt in the first sentence of the form. These pages answer different questions.`,
        `Custom work is ${FACTS.priceLow}–${FACTS.priceHigh}. A proposal is written after the brief names the decision, the countries, the respondents, and the language. Mainland teams brief the US, UK, Dubai and Cairo offices. Al Khobar, Dubai and Kuwait field teams run Saudi, UAE and Kuwait interviews. ${DELIVERY.apac}`,
      ],
    },
    {
      id: 'how-we-work',
      heading: 'How a mainland HQ briefs BioNixus',
      paragraphs: [
        `Mainland teams brief Sheridan or London in English or Mandarin. Fieldwork is designed with the Dubai and Al Khobar offices in Arabic and English. Cairo joins for Egypt. The first deliverable is a written proposal once the brief is usable. Custom work is ${FACTS.priceLow}–${FACTS.priceHigh}. The written guarantees are: ${GUARANTEES}. The slogan is “${FACTS.slogan}” BioNixus never claims guaranteed accuracy.`,
        `A Simplified Chinese page is in native review and is not live on this site yet. Until it publishes, this English URL is the conversion page. Baidu visibility depends on Baidu Webmaster Tools, not Google; that sign-up is a measurement task, not a claim that a Chinese URL already ranks on Baidu.`,
        `To brief China-to-MEA research, use the {link:/contact|contact form} or email {ext:mailto:admin@bionixus.com|admin@bionixus.com}. United States {ext:tel:+18884655557|+1-888-465-5557}. United Kingdom {ext:tel:+447727666682|+44 7727 666682}. Al Khobar {ext:tel:+966501825336|+966 50 182 5336}.`,
        `A Chinese headquarters that also books work from the United States or Singapore should keep each country on its own page: {link:/market-research/usa|MENA market research company USA}, {link:/market-research/japan|Middle East market research for Japanese companies} and {link:/market-research/singapore|Middle East market research for Singapore companies}. Healthcare pages for the same brief are {link:/healthcare-market-research/saudi-arabia|Saudi Arabia}, {link:/healthcare-market-research/uae|the UAE} and {link:/healthcare-market-research/egypt|Egypt}.`,
        `A China domestic healthcare tracker is a different job. Keep {link:/healthcare-market-research/china|healthcare market research in China} and {link:/insights/top-healthcare-market-research-companies-china-2026|top healthcare market research companies in China} for the mainland sample. Do not merge a China HCP tracker and a Gulf physician survey into one mean. If a Shanghai committee asks for that average, write the refusal into the proposal. The usable file is a set of country cuts.`,
        `ODI paperwork, MISA activity lists and free-zone incorporation are counsel jobs. BioNixus names the buyer, the city, the channel and the price the committee can interrogate. We do not file the licence. ${DELIVERY.apac} We do not claim guaranteed accuracy of findings. The written guarantees stay on scope, replacement, minimum sample, re-field and the pilot credit.`,
        `If the same headquarters also owns an Egypt factory, a North Africa distributor, or an Africa price file, say so in the first sentence. Cairo leadership in Sheikh Zayed owns that sample. Do not copy a Dubai free-zone plan onto a Cairo plant. Do not average Egypt into a Gulf cell. Use {link:/bionixus-industries/insights/chinese-companies-egypt-market-research|the Egypt checklist}. Car, industrial, and consumer files use the same Gulf field offices. Keep the Saudi and UAE checklist and the EV article as supporting pages. Do not average China and Saudi Arabia into one number.`,
      ],
    },
    {
      id: 'odi-vs-demand',
      heading: 'ODI paperwork is not a demand file',
      paragraphs: [
        `Mainland investment committees often arrive with an outbound-direct-investment file, a free-zone quote and a bilateral trade printout. Those documents are real. They do not name the buyer. MFA China’s Saudi and UAE pages, the SPA stock count and the WAM resident count are the same class of evidence: dated, official, and silent on whether a second brand will sell. BioNixus will cite them. It will not multiply them into a TAM.`,
        `A China-to-Middle East brief that starts with the licence instead of the customer will waste a cycle. Write the city, the channel, and the respondent first. Counsel files the Saudi investment registration, the free zone, and the outbound-investment path. BioNixus fields the interviews. The two jobs stay separate on the proposal. Custom work remains ${FACTS.priceLow}–${FACTS.priceHigh}. A proposal is written after the brief is usable. Scope is guaranteed in writing. Findings are not. ${DELIVERY.apac}`,
      ],
    },
  ],
  faqs: [
    {
      question: 'Where is China-to-MEA research delivered from?',
      answer:
        'Work is delivered from the US, UK, Dubai and Cairo offices. Al Khobar, Dubai and Kuwait field teams run Saudi, UAE and Kuwait interviews. Mainland teams brief those offices for Middle East and Africa fieldwork.',
    },
    {
      question: 'Is this the same page as Chinese companies entering Saudi Arabia and the UAE?',
      answer:
        'No. That article is the checklist. This page is where you ask for the interviews. Use both. They answer different questions.',
    },
    {
      question: 'Can Saudi Arabia and the UAE be one study?',
      answer:
        'Only if the decision is truly regional and the instrument is designed that way. Otherwise they are two samples — two licences, two VAT rates, two city lists. Most mainland investment committees need the split.',
    },
    {
      question: 'Do you cover Chinese companies Egypt market research?',
      answer:
        'Yes, from the Cairo leadership office. Read the checklist for Chinese companies in Egypt, then say Egypt in the first sentence of the form.',
    },
    {
      question: 'Do you run Chinese EV Gulf consumer research?',
      answer:
        'Yes. The article on Chinese EV brands in the Gulf is the checklist. This page is where you ask for the interviews. Car fieldwork uses the same Dubai and Al Khobar offices.',
    },
    {
      question: 'Is there a Simplified Chinese page?',
      answer:
        'Not yet. A Simplified Chinese page is in native review. Until it publishes, brief this English page. Do not treat an unpublished Chinese URL as live.',
    },
    {
      question: 'Do you guarantee the accuracy of the findings?',
      answer:
        'No. BioNixus never claims guaranteed accuracy. The written guarantees are replacement of non-qualifying respondents, a minimum sample, re-field at our cost, and a pilot fee credited to the main field.',
    },
  ],
  relatedLinks: [
    { to: PATHS.usa, label: 'MENA market research company USA' },
    { to: PATHS.japan, label: 'Middle East market research for Japanese companies' },
    { to: PATHS.singapore, label: 'Middle East market research for Singapore companies' },
    { to: '/healthcare-market-research', label: 'Healthcare market research hub' },
    {
      to: '/bionixus-industries/insights/chinese-companies-entering-saudi-arabia-and-the-uae',
      label: 'Chinese companies entering Saudi Arabia and the UAE',
    },
    {
      to: '/bionixus-industries/insights/chinese-ev-brands-saudi-uae-consumer-research',
      label: 'Chinese EV brands in the Gulf',
    },
    {
      to: '/bionixus-industries/insights/chinese-companies-egypt-market-research',
      label: 'Chinese companies in Egypt',
    },
  ],
  hreflang: INTL_HREFLANG_BY_PATH[PATHS.china],
};
