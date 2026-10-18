import {
  ESG_ABU_DHABI,
  FACTS,
  GUARANTEES,
  INTL_DATE_MODIFIED,
  JETRO_MEA_REPORTS,
  OFFICES,
  DELIVERY,
  INTL_HREFLANG_BY_PATH,
  PATHS,
} from './shared';
import type { IntlMoneyPage } from './types';

export const SINGAPORE_INTL_PAGE: IntlMoneyPage = {
  id: 'singapore',
  path: PATHS.singapore,
  lang: 'en',
  htmlLang: 'en',
  nativeReviewRequired: false,
  title: 'Singapore MEA Market Research Company | 2026 Guide',
  description:
    'Middle East research for Singapore and APAC HQs: who buys in the Gulf. Delivered from the US, UK, Dubai and Cairo offices. Custom studies are $10k–$60k.',
  h1: 'Middle East Market Research for Singapore Companies',
  primaryKeyword: 'Middle East market research for Singapore companies',
  quickAnswer:
    'BioNixus runs Middle East market research for Singapore companies and APAC regional HQs. Work is delivered from the US, UK, Dubai and Cairo offices. Al Khobar, Dubai and Kuwait field teams run Saudi, UAE and Kuwait interviews. The same team can add a Southeast Asia entry module. Custom work is $10,000–$60,000. Scope is guaranteed in writing.',
  breadcrumbLabel: 'Singapore',
  dateModified: INTL_DATE_MODIFIED,
  coverImage: '/images/intl-outbound/singapore-cover.jpg',
  heroImage: '/images/intl-outbound/singapore-hero.jpg',
  coverAlt:
    'BioNixus navy and gold cover: Middle East market research for Singapore companies — APAC HQ to GCC',
  heroAlt:
    'Navy and gold BioNixus artwork for Singapore and APAC to Middle East and Africa market research, with the BioNixus logo and no stock photograph',
  areaServed: [
    { '@type': 'Country', name: 'Singapore' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'Place', name: 'Southeast Asia' },
    { '@type': 'Place', name: 'MENA' },
  ],
  proofPoints: [
    {
      title: 'APAC HQ, MEA fieldwork',
      description:
        'Singapore regional HQs brief the US, UK, Dubai and Cairo offices. Al Khobar, Dubai and Kuwait field teams run Saudi, UAE and Kuwait interviews.',
    },
    {
      title: 'SEA hub that also covers MEA',
      description:
        'A Southeast Asia entry study can be added as a separate scope when the regional headquarters owns both corridors.',
    },
    {
      title: 'Public Singapore programmes are context',
      description:
        'Enterprise Singapore’s Abu Dhabi discovery programme is a public gateway. It is not a physician or buyer sample.',
    },
  ],
  sections: [
    {
      id: 'who-this-is-for',
      heading: 'Who in Singapore briefs Middle East or SEA entry research?',
      paragraphs: [
        `Middle East market research for Singapore companies is commissioned by regional headquarters of pharma, medtech, consumer and industrial firms that sit in Singapore and own a Gulf or Africa business. The second buyer is a Singapore company using an Enterprise Singapore programme to test the UAE or Saudi Arabia. This page is the English page for both. Start from the {link:/healthcare-market-research|healthcare market research} hub for physician and payer work, and from the {link:/bionixus-industries|industries hub} for other briefs.`,
        `Pages about research companies in Singapore already exist: {link:/healthcare-market-research/singapore|healthcare market research in Singapore}, {link:/insights/top-healthcare-market-research-companies-singapore-2026|top healthcare market research companies in Singapore} and {link:/insights/top-market-research-companies-singapore-2026|top market research companies in Singapore}. Those pages stay on work inside Singapore. This page stays on Gulf research booked from Singapore, and on a separate Southeast Asia study when you ask for one.`,
        `BioNixus was founded in ${FACTS.founded} and is headquartered in ${FACTS.hq}. Leadership offices are ${OFFICES.leadership}. Field offices are ${OFFICES.field}. ${FACTS.clients} clients, ${FACTS.countries} countries, ${FACTS.studies2026} studies in 2026 year-to-date (${FACTS.studies2025} in 2025), ${FACTS.physicians} physicians, ${FACTS.priceLow}–${FACTS.priceHigh}. ${DELIVERY.apac}`,
      ],
    },
    {
      id: 'apac-to-gcc',
      heading: 'APAC to GCC market entry is a city-and-licence file',
      paragraphs: [
        `APAC to GCC market entry from a Singapore HQ fails when the team treats “the Middle East” as one English-speaking market and pastes an ASEAN discussion guide onto a Gulf sample. Saudi Arabia and the UAE are two licences and two Arabic instruments. Egypt is a third. A Singapore free-zone or regional HQ does not replace a MISA activity, an SFDA file or a UAE mainland versus free-zone choice.`,
        `Enterprise Singapore publishes a GIA Abu Dhabi Discovery Programme for eligible Singapore tech firms that want a UAE readiness read ({ext:${ESG_ABU_DHABI}|Enterprise Singapore — GIA Abu Dhabi}). That programme is official and useful. It is not a custom physician survey, a hospital-account cut, or a consumer price file. BioNixus does not resell the programme. It fields the primary interviews a board pack still needs after the public gateway.`,
        `A Japanese or Chinese headquarters that also sits in Singapore should open {link:/market-research/japan|Middle East market research for Japanese companies} and {link:/market-research/china|Middle East market research for Chinese companies}. This page does not describe a BioNixus office in Japan, China, or Singapore. JETRO’s Middle East report shelf is the matching public desk source for Japanese affiliates ({ext:${JETRO_MEA_REPORTS}|JETRO Middle East reports}). Australian exporters using the same Gulf seats should read {link:/bionixus-industries/insights/australia-gcc-market-entry-research|Australia–GCC market entry research}. US teams that own the same Gulf work should read {link:/market-research/usa|MENA market research company USA}. Write the Gulf countries in the first sentence. The interviews still take place with people in Riyadh, Jeddah, Dubai, Abu Dhabi, or Cairo.`,
      ],
    },
    {
      id: 'sea-entry',
      heading: 'When the same HQ also needs Southeast Asia market entry research',
      paragraphs: [
        `Research booked in Singapore often means two different jobs. The first is Singapore as the place where the product is sold: the health regulator, public-hospital tenders, and a city-state sample. That job already has the Singapore healthcare pages named above. The second is Singapore as the place that books research in Malaysia, Indonesia, Thailand, Vietnam, or the Philippines. That second job is a separate scope. BioNixus does not sell one panel that covers all of Southeast Asia.`,
        `Southeast Asia market entry research and Middle East market research for Singapore companies should not share one questionnaire. Languages, regulators and channel maps differ. A single protocol office can still run both modules so the APAC HQ reads one method note. Say in the first sentence of the brief which corridor is in scope.`,
        `Healthcare APAC-to-GCC briefs use the Gulf physician and payer panels. See {link:/healthcare-market-research/saudi-arabia|Saudi Arabia}, {link:/healthcare-market-research/uae|the UAE} and {link:/healthcare-market-research/egypt|Egypt}. Non-pharma briefs use the same field offices for buyers and consumers.`,
      ],
    },
    {
      id: 'design-errors',
      heading: 'Design errors we see on Singapore-booked MEA briefs',
      paragraphs: [
        `The first error is pasting an ASEAN discussion guide onto a Gulf sample. Bahasa, Thai and Vietnamese instruments do not become Arabic by translation memory. Saudi Arabia and the UAE still need their own licences and city lists. Egypt is a third file. A Singapore regional HQ that briefs “the Middle East, same as ASEAN wave two” will get a polite English sample and an unusable board pack.`,
        `The second error is treating Enterprise Singapore’s Abu Dhabi discovery programme as the demand file. The programme is official and useful for eligible tech firms ({ext:${ESG_ABU_DHABI}|Enterprise Singapore — GIA Abu Dhabi}). It is not a physician survey, a hospital-account cut, or a consumer price file. Keep the programme. Brief BioNixus for the interviews the investment committee still asks for after the public gateway.`,
        `The third error is merging SEA and GCC into one questionnaire to save a week. Languages, regulators and channel maps differ. A single protocol office can still run both modules so the APAC HQ reads one method note. Say in the first sentence which corridor is in scope. Do not average Jakarta and Jeddah.`,
      ],
    },
    {
      id: 'sample-timeline',
      heading: 'Sample, timeline and what a Singapore HQ should keep in-country',
      paragraphs: [
        `A healthcare file booked from Singapore names the specialty, the country quotas, and an Arabic and English questionnaire. Consumer and industrial files use the same Gulf field offices. The proposal states the timing after the protocol is signed. A small set of interviews is a different study from a large physician survey. A Southeast Asia module, if you ask for one, is a separate questionnaire.`,
        `Work inside Singapore — the health regulator, public-hospital tenders, and a city-state sample — already has {link:/healthcare-market-research/singapore|healthcare market research in Singapore} and the 2026 Singapore company lists. Keep those pages for work inside Singapore. This page is for Gulf research booked from Singapore, and for a separate Southeast Asia study when you ask for one.`,
        `Custom work is ${FACTS.priceLow}–${FACTS.priceHigh}. A proposal is written after the brief names the decision, the countries, the respondents, and the language. A Japanese or Chinese headquarters that also sits in Singapore should open the Japan and China pages, so each country has its own page.`,
      ],
    },
    {
      id: 'how-we-work',
      heading: 'How a Singapore HQ briefs BioNixus',
      paragraphs: [
        `The regional headquarters writes the commercial question. Sheridan or London writes the protocol. Al Khobar, Dubai and Kuwait recruit. Cairo joins for Egypt. A written proposal follows once the brief is usable. Custom work is ${FACTS.priceLow}–${FACTS.priceHigh}. The written guarantees are: ${GUARANTEES}. The slogan is “${FACTS.slogan}” BioNixus never claims guaranteed accuracy.`,
        `English is the page language because that is how Singapore regional HQs brief. There is no /sg/ twin in this release. Japanese and Simplified Chinese twins for the Japan and China corridors are in native review and are not live yet.`,
        `To brief Middle East market research for Singapore companies, use the {link:/contact|contact form} or email {ext:mailto:admin@bionixus.com|admin@bionixus.com}. United States {ext:tel:+18884655557|+1-888-465-5557}. United Kingdom {ext:tel:+447727666682|+44 7727 666682}. Al Khobar {ext:tel:+966501825336|+966 50 182 5336}.`,
        `Singapore HQs that also own a Japan or China outbound P&amp;L should open {link:/market-research/japan|Middle East market research for Japanese companies} and {link:/market-research/china|Middle East market research for Chinese companies}. US cost centres that share the same Gulf seats should open {link:/market-research/usa|MENA market research company USA}. Healthcare country hubs under the same brief are {link:/healthcare-market-research/saudi-arabia|Saudi Arabia}, {link:/healthcare-market-research/uae|the UAE} and {link:/healthcare-market-research/egypt|Egypt}.`,
        `A Singapore domestic HSA or public-hospital file is a different job. Keep {link:/healthcare-market-research/singapore|healthcare market research in Singapore} and the 2026 Singapore listicles for that sample. Do not merge a city-state HCP tracker and a Gulf physician survey into one mean. If an APAC committee asks for that average, write the refusal into the proposal.`,
        `Enterprise Singapore programmes, JETRO desks and Austrade pages are useful public context. They are not a named physician or buyer sample. BioNixus does not resell those programmes. ${DELIVERY.apac} The written guarantees stay on scope, replacement, minimum sample, re-field and the pilot credit. Findings are not guaranteed.`,
        `When the same HQ wants a Malaysia, Indonesia or Vietnam module beside the Gulf file, say so in the first sentence. The protocol office can run both. The instruments stay separate. Languages, regulators and channel maps differ. A single method note is fine. A single questionnaire is not.`,
        `Healthcare briefs from Singapore to the Gulf still use Gulf physicians and payers, not a Singapore health-regulator sample. Non-pharma briefs use the same Al Khobar, Dubai, and Kuwait offices for buyers and consumers. Cairo joins for Egypt. Custom work stays inside ${FACTS.priceLow}–${FACTS.priceHigh}. A proposal is written after the brief is usable. BioNixus never claims guaranteed accuracy. Do not average Southeast Asia and the Gulf into one number. Keep Enterprise Singapore programmes as public context. A Japanese or Chinese headquarters that also sits in Singapore should open its own page.`,
      ],
    },
    {
      id: 'booking-centre',
      heading: 'Singapore is a booking centre, not a Gulf sample',
      paragraphs: [
        `A Singapore headquarters can book the work. It is not a substitute for Arabic fieldwork. The physicians, payers, and buyers still sit in Riyadh, Jeddah, Dubai, Abu Dhabi, or Cairo. Booking the work from Singapore does not make the sample Singaporean. Keep the health-regulator and public-hospital file on the Singapore healthcare pages. Keep the Gulf file here.`,
        `The same is true of a Southeast Asia module. Malaysia, Indonesia, Thailand, Vietnam, and the Philippines are a separate scope. They are not one panel for the region. Write which countries are in scope in the first sentence. If the committee wants one average across Jakarta and Jeddah, report each country on its own.`,
        `Custom work is ${FACTS.priceLow}–${FACTS.priceHigh}. A proposal is written after the brief is usable. Enterprise Singapore programmes remain public context. ${DELIVERY.apac} Scope is guaranteed in writing. Findings are not.`,
      ],
    },
  ],
  faqs: [
    {
      question: 'Where is Singapore-booked MEA research delivered from?',
      answer:
        'Work is delivered from the US, UK, Dubai and Cairo offices. Al Khobar, Dubai and Kuwait field teams run Saudi, UAE and Kuwait interviews. Singapore HQs brief those offices.',
    },
    {
      question: 'What is Middle East market research for Singapore companies?',
      answer:
        'It is commissioned primary research in Saudi Arabia, the UAE, Egypt and the wider GCC, booked by an APAC regional HQ or a Singapore firm. It is not a Singapore domestic HSA study. Those pages already exist under healthcare market research in Singapore.',
    },
    {
      question: 'Do you also do Southeast Asia market entry research?',
      answer:
        'A Southeast Asia study can be scoped as a separate module. It uses a different questionnaire from a Gulf study. BioNixus does not sell one panel for all of Southeast Asia.',
    },
    {
      question: 'Is Enterprise Singapore’s Abu Dhabi programme enough?',
      answer:
        'It is useful public context for eligible tech firms. It is not a custom physician, payer or buyer sample. Keep the programme. Brief BioNixus for the interviews the board pack still needs.',
    },
    {
      question: 'Can a Singapore HQ book Japan or China outbound research too?',
      answer:
        'Yes. Open the Japan page or the China page for that country. The same team can still run the study.',
    },
    {
      question: 'How much does a Singapore-booked MEA study cost?',
      answer:
        'Custom work is $10,000–$60,000. The price moves with the countries, the respondents, the method, and the sample.',
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
    { to: PATHS.china, label: 'Middle East market research for Chinese companies' },
    { to: '/healthcare-market-research', label: 'Healthcare market research hub' },
    { to: '/healthcare-market-research/singapore', label: 'Healthcare market research in Singapore' },
    { to: '/bionixus-industries', label: 'Industries hub' },
    {
      to: '/bionixus-industries/insights/australia-gcc-market-entry-research',
      label: 'Australia–GCC market entry research',
    },
  ],
  hreflang: INTL_HREFLANG_BY_PATH[PATHS.singapore],
};
