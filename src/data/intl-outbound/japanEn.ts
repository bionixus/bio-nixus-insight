import {
  FACTS,
  GUARANTEES,
  INTL_DATE_MODIFIED,
  JETRO_MEA_REPORTS,
  OFFICES,
  DELIVERY,
  INTL_HREFLANG_BY_PATH,
  PATHS,
  SPA_CHINESE_KSA,
  WAM_CHINESE_UAE,
} from './shared';
import type { IntlMoneyPage } from './types';

export const JAPAN_EN_INTL_PAGE: IntlMoneyPage = {
  id: 'japan',
  path: PATHS.japan,
  lang: 'en',
  htmlLang: 'en',
  nativeReviewRequired: false,
  title: 'Middle East Market Research for Japanese Companies',
  description:
    'Japan-to-GCC research for Japanese affiliates: Saudi and UAE physician surveys, Egypt entry. Delivered from the US, UK, Dubai and Cairo offices. $10k–$60k.',
  h1: 'Middle East Market Research for Japanese Companies',
  primaryKeyword: 'Middle East market research for Japanese companies',
  quickAnswer:
    'BioNixus runs Middle East market research for Japanese companies. Work is delivered from the US, UK, Dubai and Cairo offices. Al Khobar, Dubai and Kuwait field teams run Saudi, UAE and Kuwait interviews. Japanese affiliates brief those offices for Saudi market entry, UAE physician surveys and Egypt studies. Custom work is $10,000–$60,000. Scope is guaranteed in writing.',
  breadcrumbLabel: 'Japan',
  dateModified: INTL_DATE_MODIFIED,
  coverImage: '/images/intl-outbound/japan-cover.jpg',
  heroImage: '/images/intl-outbound/japan-hero.jpg',
  coverAlt:
    'BioNixus navy and gold cover: Middle East market research for Japanese companies — Japan to GCC fieldwork',
  heroAlt:
    'Navy and gold BioNixus artwork for Japan to Middle East and Africa market research, with the BioNixus logo and no stock photograph',
  areaServed: [
    { '@type': 'Country', name: 'Japan' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'Place', name: 'MENA' },
  ],
  proofPoints: [
    {
      title: 'Japan-to-MEA, not a Tokyo panel',
      description:
        'Japanese affiliates brief the US, UK, Dubai and Cairo offices. Al Khobar, Dubai and Kuwait field teams run Saudi, UAE and Kuwait interviews.',
    },
    {
      title: 'Arabic instruments, Japanese readout',
      description:
        'Recruitment and moderation run in Arabic and English. The steering-committee pack can be written for a Tokyo or Osaka affiliate in English.',
    },
    {
      title: 'Intage and Macromill stay in Japan',
      description:
        'Keep domestic Japan suppliers for Japan-side work. Brief BioNixus when the sample is in Saudi Arabia, the UAE or Egypt.',
    },
  ],
  sections: [
    {
      id: 'who-this-is-for',
      heading: 'Who inside a Japanese company briefs Middle East research?',
      paragraphs: [
        `Middle East market research for Japanese companies is commissioned by the affiliate that owns Saudi Arabia, the UAE, Egypt, or a wider Gulf business — not by the Japan team that already has Intage or Macromill on contract. Typical buyers sit in Tokyo, Osaka, or a US or European regional office and must take a Gulf question to a Japanese investment committee. This page is the English page for that brief. Briefs can be written in Japanese or English. The questionnaire and the committee readout stay in English. Start from the {link:/healthcare-market-research|healthcare market research} hub when the study is about physicians or payers.`,
        `A Japanese company that already buys research in Japan still needs a separate file when the decision is a Saudi drug registration, a NUPCO tender, a Dubai or Abu Dhabi formulary, or an Egypt price. The same split applies to automotive, energy, food, and industrial equipment. Pages about research companies in Japan are a different job. See {link:/insights/top-market-research-companies-japan-2026|top market research companies in Japan} and {link:/healthcare-market-research/japan|healthcare market research in Japan}.`,
        `BioNixus was founded in ${FACTS.founded}. Headquarters are in ${FACTS.hq}. Leadership offices are ${OFFICES.leadership}. Field offices are ${OFFICES.field}. The firm has served ${FACTS.clients} clients in ${FACTS.countries} countries and has run ${FACTS.studies2026} studies in 2026 year-to-date (${FACTS.studies2025} in 2025), with ${FACTS.physicians} physicians in the wider network. Custom pricing is ${FACTS.priceLow}–${FACTS.priceHigh}. ${DELIVERY.apac}`,
      ],
    },
    {
      id: 'saudi-entry',
      heading: 'Saudi market entry from Japan is a two-licence problem',
      paragraphs: [
        `Saudi market entry Japan briefs fail when the affiliate treats “the GCC” as one market and pastes a Japan discussion guide onto an English-only Gulf sample. Saudi Arabia is a separate licence, a separate tender stack and a separate Arabic instrument from the UAE. A Japanese team that has a Dubai free-zone entity still needs a MISA activity and, for medicines, an SFDA path. The research has to name the buyer, the city and the channel in the Kingdom before Tokyo remits capital.`,
        `JETRO already publishes a Middle East report shelf that Japanese affiliates use for desk context, including the annual survey of Japanese firms in the Middle East ({ext:${JETRO_MEA_REPORTS}|JETRO Middle East reports}). Those reports are useful and official. They are not a named physician sample, a hospital-account cut, or a consumer price file. BioNixus does not resell JETRO. It fields the primary interviews JETRO cannot sell.`,
        `Healthcare Saudi briefs sit next to {link:/healthcare-market-research/saudi-arabia|healthcare market research in Saudi Arabia}, {link:/blog/hematology-market-research-saudi-arabia|hematology market research in Saudi Arabia} and {link:/bionixus-industries/insights/market-entry-research-saudi-arabia|market entry research for Saudi Arabia}. Non-pharma Saudi briefs sit on the {link:/bionixus-industries|industries hub}. Japanese teams that also own a China-to-Gulf file should read {link:/market-research/china|Middle East market research for Chinese companies} and the live playbook on {link:/bionixus-industries/insights/chinese-companies-entering-saudi-arabia-and-the-uae|Chinese companies entering Saudi Arabia and the UAE}. The Saudi Press Agency’s public count of more than 750 Chinese companies in the Kingdom ({ext:${SPA_CHINESE_KSA}|SPA, 25 September 2025}) is context for competitive density, not a Japanese TAM.`,
      ],
    },
    {
      id: 'uae-egypt',
      heading: 'UAE and Egypt are separate samples, not a GCC average',
      paragraphs: [
        `UAE market research for a Japanese affiliate has to split Dubai and Abu Dhabi, and it has to say whether the first vehicle is mainland, free zone or a regional HQ that cannot take commercial revenue. MOHAP, DHA and DOH do not share one formulary. A Japanese consumer or automotive brief has the same city split. WAM’s public UAE figures for the Chinese installed base — more than 400,000 residents and over 17,000 companies ({ext:${WAM_CHINESE_UAE}|WAM, 11 June 2026}) — are a reminder that the Gulf is already crowded. They are not a Japanese demand curve.`,
        `Egypt market research is the North Africa chapter Japanese affiliates often add after the Gulf. Cairo leadership in Sheikh Zayed is the BioNixus office that owns that sample. EDA pricing, GAFI licensing and Arabic Egyptian instruments are not a copy of a Gulf guide. See {link:/healthcare-market-research/egypt|healthcare market research in Egypt} and {link:/insights/top-market-research-companies-egypt-2026|top market research companies in Egypt}.`,
        `A search for an Intage alternative in the Middle East, or for Macromill versus custom Middle East research, is a different question from a Japan domestic panel. This page states the split: keep Intage or Macromill for Japan, and brief BioNixus for primary work in the Middle East and Africa. Related pages are {link:/market-research/usa|MENA market research company USA} and {link:/market-research/singapore|Middle East market research for Singapore companies}.`,
      ],
    },
    {
      id: 'design-errors',
      heading: 'Design errors we see on Japan-to-MEA briefs',
      paragraphs: [
        `The first error is treating the GCC as one English-speaking cell. Saudi Arabia, the UAE and Egypt do not share a licence, a tender stack or an Arabic dialect that can be copy-pasted. A Japanese affiliate that averages Riyadh, Dubai and Cairo into one “MENA” mean will take an unusable number to Tokyo. Split the sample, or write on page one why the decision is truly regional.`,
        `The second error is a machine-translated Japan discussion guide. Honorifics, disease labels and brand names that work in a Tokyo interview do not survive an Arabic back-translation unless a Gulf moderator has piloted them. BioNixus writes the Arabic instrument for the market and keeps an English master for the Japanese readout. The two files are twins, not a paste.`,
        `The third error is substituting a Japanese-language cell for Arabic. A Japanese cell is correct when the respondent is a Japanese firm, a Japanese hospital visitor, or a Japanese expatriate buyer in Dubai. It is incorrect when the prescriber is a Saudi oncologist or the shopper is an Egyptian household. Write the language plan into the protocol before the first recruit is called.`,
      ],
    },
    {
      id: 'sample-timeline',
      heading: 'Sample, timeline and what Intage or Macromill should keep',
      paragraphs: [
        `A Japan-to-Middle East healthcare file names the specialty, the country quotas, and an Arabic and English questionnaire. The proposal states the timing after the protocol is signed. Interviews with payers and procurement teams usually take longer than a physician sample. A small set of interviews is a different study from a large physician survey.`,
        `Intage and Macromill should keep the Japan-side tracker, the domestic HCP panel and the Japan consumer work. BioNixus should take the MEA primary sample. The two jobs are complements. A Japanese insights lead who cancels the Japan tracker to fund a Gulf study, or who asks Intage to “add Saudi” as a line on a Japan questionnaire, will get a file that satisfies neither committee.`,
        `Custom work is ${FACTS.priceLow}–${FACTS.priceHigh}. A proposal is written after the brief names the decision, the countries, the respondents, and the language. JETRO reports remain useful desk context ({ext:${JETRO_MEA_REPORTS}|JETRO Middle East reports}). They do not replace a named physician or buyer sample. BioNixus does not resell JETRO. ${DELIVERY.apac}`,
      ],
    },
    {
      id: 'how-we-work',
      heading: 'How a Japanese affiliate briefs BioNixus',
      paragraphs: [
        `Tokyo or Osaka writes the commercial question in Japanese or English. Sheridan or London turns it into a protocol. Al Khobar, Dubai and Kuwait recruit. Cairo joins for Egypt. The first deliverable is a written proposal once the brief is usable. The second is a fieldwork plan that names countries, quotas, language, and the quality checks. The third is a readout a Japanese investment committee can read in English. A Japanese-language page is in native review and is not live on this site yet.`,
        `A Japanese-language cell inside a Gulf study is appropriate when the respondent is a Japanese firm, a Japanese hospital visitor, or a Japanese expatriate buyer. It is not a substitute for Arabic when the prescriber, the tender committee or the consumer is Saudi, Emirati or Egyptian. That is the most common design error we see on Japan-to-MEA briefs.`,
        `Custom work is ${FACTS.priceLow}–${FACTS.priceHigh}. The written guarantees are: ${GUARANTEES}. The slogan is “${FACTS.slogan}” BioNixus never claims guaranteed accuracy. To brief Middle East market research for Japanese companies, use the {link:/contact|contact form} or email {ext:mailto:admin@bionixus.com|admin@bionixus.com}. United States {ext:tel:+18884655557|+1-888-465-5557}. United Kingdom {ext:tel:+447727666682|+44 7727 666682}. Al Khobar {ext:tel:+966501825336|+966 50 182 5336}.`,
        `Japanese teams that also own a US cost centre should read {link:/market-research/usa|MENA market research company USA}. APAC HQs booking from Singapore should read {link:/market-research/singapore|Middle East market research for Singapore companies}. Healthcare country hubs that sit under the same brief are {link:/healthcare-market-research/saudi-arabia|Saudi Arabia}, {link:/healthcare-market-research/uae|the UAE} and {link:/healthcare-market-research/egypt|Egypt}. ${DELIVERY.apac}`,
        `When the Japan affiliate is comparing physician-survey vendors in Japan, keep the Japan panel for physicians in Japan. A survey that stays inside Japan is a different job from a Gulf physician survey. The two questionnaires should not share one sample. If a Tokyo committee asks for one average that mixes Japan and Saudi Arabia, report each country on its own. Japanese consumer, automotive, and industrial briefs follow the same split.`,
        `A usable brief names one decision, the countries, the respondents, and the language. Saudi Arabia, the UAE, and Egypt stay in separate samples unless the decision really is regional. Arabic is the language for local physicians, payers, and shoppers. Japanese is added only when the person being interviewed works for a Japanese company. Name the city and the date of the committee in the same brief. Write that decision in one sentence before you name the sample. The written guarantee covers the agreed scope, the timing, and the deliverables. It does not cover what the interviews will find.`,
      ],
    },
  ],
  faqs: [
    {
      question: 'Where is Japan-to-MEA research delivered from?',
      answer:
        'Work is delivered from the US, UK, Dubai and Cairo offices. Al Khobar, Dubai and Kuwait field teams run Saudi, UAE and Kuwait interviews. Japanese affiliates brief those offices for Middle East and Africa fieldwork.',
    },
    {
      question: 'What is Middle East market research for Japanese companies?',
      answer:
        'It is commissioned primary research in Saudi Arabia, the UAE, Egypt and the wider GCC for a Japanese affiliate or corporate, covering physicians, payers, buyers or consumers. It is not a Japan domestic study and it is not a JETRO desk report. JETRO remains useful context. BioNixus fields the interviews.',
    },
    {
      question: 'Can you support Saudi market entry from Japan?',
      answer:
        'Yes. The brief has to name the Saudi buyer, city, licence path and channel before Tokyo remits capital. A Dubai free-zone company does not replace a MISA activity or an SFDA file. Custom work is $10,000–$60,000. Scope is guaranteed in writing.',
    },
    {
      question: 'Should we keep Intage or Macromill?',
      answer:
        'Keep them for work in Japan. Brief BioNixus when the people being interviewed are in the Middle East or Africa. The two jobs sit side by side.',
    },
    {
      question: 'Do you run UAE and Egypt studies for Japanese affiliates?',
      answer:
        'Yes. UAE work splits Dubai and Abu Dhabi and respects MOHAP, DHA and DOH. Egypt work is run with the Cairo leadership office. Do not average the two countries into one “MENA” cell unless the decision is truly regional.',
    },
    {
      question: 'Is there a Japanese-language page?',
      answer:
        'Not yet. A Japanese-language page is in native review. Until it publishes, brief this English page. Do not treat an unpublished Japanese URL as live.',
    },
    {
      question: 'Do you guarantee the accuracy of the findings?',
      answer:
        'No. BioNixus never claims guaranteed accuracy. The written guarantees are replacement of non-qualifying respondents, a minimum sample, re-field at our cost, and a pilot fee credited to the main field.',
    },
  ],
  relatedLinks: [
    { to: PATHS.usa, label: 'MENA market research company USA' },
    { to: PATHS.china, label: 'Middle East market research for Chinese companies' },
    { to: PATHS.singapore, label: 'Middle East market research for Singapore companies' },
    { to: '/healthcare-market-research', label: 'Healthcare market research hub' },
    { to: '/healthcare-market-research/japan', label: 'Healthcare market research in Japan' },
    { to: '/bionixus-industries', label: 'Industries hub' },
  ],
  hreflang: INTL_HREFLANG_BY_PATH[PATHS.japan],
};
