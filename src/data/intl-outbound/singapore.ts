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
    'Middle East research for Singapore and APAC HQs: GCC entry and SEA hub work. Delivered from the US, UK, Dubai and Cairo offices. $10k–$60k. 48-hour proposal.',
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
    'Navy and gold BioNixus artwork for Singapore and APAC to Middle East and Africa market research, with the repo logo and no stock photograph',
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
        'The same protocol office can add a Southeast Asia entry module when the APAC HQ owns both corridors.',
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
        `Middle East market research for Singapore companies is commissioned by APAC regional headquarters of pharma, medtech, consumer and industrial firms that sit in Singapore and own a Gulf or Africa P&amp;L. The second buyer is a Singapore SME or scale-up using an Enterprise Singapore programme to test the UAE or Saudi Arabia. This page is the English money page for both. Start from the {link:/healthcare-market-research|healthcare market research} hub for physician and payer work, and from the {link:/bionixus-industries|industries hub} for non-pharma briefs.`,
        `Domestic Singapore head terms — healthcare market research Singapore, market research companies Singapore — already have pages: {link:/healthcare-market-research/singapore|healthcare market research in Singapore}, {link:/insights/top-healthcare-market-research-companies-singapore-2026|top healthcare market research companies in Singapore} and {link:/insights/top-market-research-companies-singapore-2026|top market research companies in Singapore}. Those pages stay on the Singapore-side job. This money page stays on APAC-to-GCC and, where scoped, Southeast Asia market entry research.`,
        `BioNixus was founded in ${FACTS.founded} and is headquartered in ${FACTS.hq}. Leadership offices are ${OFFICES.leadership}. Field offices are ${OFFICES.field}. ${FACTS.clients} clients, ${FACTS.countries} countries, ${FACTS.studies2026} studies in 2026 year-to-date (${FACTS.studies2025} in 2025), ${FACTS.physicians} physicians, ${FACTS.priceLow}–${FACTS.priceHigh}. ${DELIVERY.apac}`,
      ],
    },
    {
      id: 'apac-to-gcc',
      heading: 'APAC to GCC market entry is a city-and-licence file',
      paragraphs: [
        `APAC to GCC market entry from a Singapore HQ fails when the team treats “the Middle East” as one English-speaking market and pastes an ASEAN discussion guide onto a Gulf sample. Saudi Arabia and the UAE are two licences and two Arabic instruments. Egypt is a third. A Singapore free-zone or regional HQ does not replace a MISA activity, an SFDA file or a UAE mainland versus free-zone choice.`,
        `Enterprise Singapore publishes a GIA Abu Dhabi Discovery Programme for eligible Singapore tech firms that want a UAE readiness read ({ext:${ESG_ABU_DHABI}|Enterprise Singapore — GIA Abu Dhabi}). That programme is official and useful. It is not a custom physician survey, a hospital-account cut, or a consumer price file. BioNixus does not resell the programme. It fields the primary interviews a board pack still needs after the public gateway.`,
        `Japanese and Chinese sister HQs that share the Singapore office should also open {link:/market-research/japan|Middle East market research for Japanese companies} and {link:/market-research/china|Middle East market research for Chinese companies}. JETRO’s Middle East report shelf is the matching public desk source for Japanese affiliates ({ext:${JETRO_MEA_REPORTS}|JETRO Middle East reports}). Australian exporters using the same Gulf seats should read {link:/bionixus-industries/insights/australia-gcc-market-entry-research|Australia–GCC market entry research}. US cost centres that own the same P&amp;L should read {link:/market-research/usa|MENA market research company USA}.`,
      ],
    },
    {
      id: 'sea-entry',
      heading: 'When the same HQ also needs Southeast Asia market entry research',
      paragraphs: [
        `Market entry research Singapore often means two different jobs. The first is Singapore as a destination — HSA, public-hospital tenders, a city-state sample. That job already has the Singapore healthcare pages named above. The second is Singapore as a booking centre for Malaysia, Indonesia, Thailand, Vietnam or the Philippines. BioNixus can scope that second job from Sheridan with local partners. It does not sell a guaranteed ASEAN panel.`,
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
        `A typical Singapore-booked MEA healthcare file is a named specialty, country quotas, and an Arabic–English instrument. Consumer and industrial files use the same Gulf field offices. Four to eight weeks is normal once the protocol is signed. A small qualitative cell can be faster. A 300-interview ATU cannot. SEA modules, when scoped, use local partners working with the Sheridan protocol office. BioNixus does not sell a guaranteed ASEAN panel.`,
        `Domestic Singapore work — HSA, public-hospital tenders, a city-state sample — already has {link:/healthcare-market-research/singapore|healthcare market research in Singapore} and the 2026 Singapore listicles. Keep those pages for the in-country job. This money page is for APAC-to-GCC and, where scoped, Southeast Asia market entry research booked from Singapore.`,
        `Custom work is ${FACTS.priceLow}–${FACTS.priceHigh}. The 48-hour proposal clock starts when the decision, countries, respondents, language and committee date are named. Japanese and Chinese sister HQs that share the Singapore office should open the Japan and China money pages so the keyword and the hreflang stay clean.`,
      ],
    },
    {
      id: 'how-we-work',
      heading: 'How a Singapore HQ briefs BioNixus',
      paragraphs: [
        `The APAC HQ writes the commercial question. Sheridan or London writes the protocol. Al Khobar, Dubai and Kuwait recruit. Cairo joins for Egypt. A written proposal follows within 48 hours of a usable brief. Custom work is ${FACTS.priceLow}–${FACTS.priceHigh}. The written guarantees are: ${GUARANTEES}. The slogan is “${FACTS.slogan}” BioNixus never claims guaranteed accuracy.`,
        `English is the page language because that is how Singapore regional HQs brief. There is no /sg/ twin in this release. Japanese and Chinese twins exist only for the Japan and China money pages.`,
        `To brief Middle East market research for Singapore companies, use the {link:/contact|contact form} or email {ext:mailto:admin@bionixus.com|admin@bionixus.com}. United States {ext:tel:+18884655557|+1-888-465-5557}. United Kingdom {ext:tel:+447727666682|+44 7727 666682}. Al Khobar {ext:tel:+966501825336|+966 50 182 5336}.`,
        `Singapore HQs that also own a Japan or China outbound P&amp;L should open {link:/market-research/japan|Middle East market research for Japanese companies} and {link:/market-research/china|Middle East market research for Chinese companies}. US cost centres that share the same Gulf seats should open {link:/market-research/usa|MENA market research company USA}. Healthcare country hubs under the same brief are {link:/healthcare-market-research/saudi-arabia|Saudi Arabia}, {link:/healthcare-market-research/uae|the UAE} and {link:/healthcare-market-research/egypt|Egypt}.`,
        `A Singapore domestic HSA or public-hospital file is a different job. Keep {link:/healthcare-market-research/singapore|healthcare market research in Singapore} and the 2026 Singapore listicles for that sample. Do not merge a city-state HCP tracker and a Gulf physician survey into one mean. If an APAC committee asks for that average, write the refusal into the proposal.`,
        `Enterprise Singapore programmes, JETRO desks and Austrade pages are useful public context. They are not a named physician or buyer sample. BioNixus does not resell those programmes. ${DELIVERY.apac} The written guarantees stay on scope, replacement, minimum sample, re-field and the pilot credit. Findings are not guaranteed.`,
        `When the same HQ wants a Malaysia, Indonesia or Vietnam module beside the Gulf file, say so in the first sentence. The protocol office can run both. The instruments stay separate. Languages, regulators and channel maps differ. A single method note is fine. A single questionnaire is not.`,
        `Healthcare APAC-to-GCC briefs still use the Gulf physician and payer panels, not a Singapore HSA sample. Non-pharma briefs use the same Al Khobar, Dubai and Kuwait offices for buyers and consumers. Cairo joins for Egypt. Custom work stays inside ${FACTS.priceLow}–${FACTS.priceHigh}. A written proposal follows within 48 hours of a usable brief. BioNixus never claims guaranteed accuracy. A Singapore HQ that wants one mean across ASEAN and GCC cells will get a written refusal. Keep Enterprise Singapore programmes as public context. Keep this page as the fieldwork request. Japanese and Chinese sister HQs that share the Singapore office should still open their own money pages so the keyword and the hreflang stay clean.`,
      ],
    },
    {
      id: 'booking-centre',
      heading: 'Singapore is a booking centre, not a Gulf sample',
      paragraphs: [
        `A Singapore HQ is a cost centre and a protocol office, not a substitute for Arabic fieldwork. The physicians, payers and buyers still sit in Riyadh, Jeddah, Dubai, Abu Dhabi or Cairo. Booking the work from Marina Bay or one-north does not make the sample Singaporean. Keep the HSA and public-hospital file on the Singapore healthcare pages. Keep the Gulf file here.`,
        `The same is true of a Southeast Asia module. Malaysia, Indonesia, Thailand, Vietnam and the Philippines are local-partner jobs scoped from Sheridan. They are not a guaranteed ASEAN panel. Write which corridor is in scope in the first sentence. If the APAC committee wants one mean across Jakarta and Jeddah, the proposal will refuse that average in writing.`,
        `Custom work is ${FACTS.priceLow}–${FACTS.priceHigh}. A written proposal follows within 48 hours of a usable brief. Enterprise Singapore programmes remain public context. ${DELIVERY.apac} Scope is guaranteed in writing. Findings are not.`,
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
        'Yes, as a scoped module from the same protocol office, using local partners. It is a different instrument from a GCC study. Do not merge ASEAN and GCC samples unless the decision is truly multi-region.',
    },
    {
      question: 'Is Enterprise Singapore’s Abu Dhabi programme enough?',
      answer:
        'It is useful public context for eligible tech firms. It is not a custom physician, payer or buyer sample. Keep the programme. Brief BioNixus for the interviews the board pack still needs.',
    },
    {
      question: 'Can a Singapore HQ book Japan or China outbound research too?',
      answer:
        'Yes. Use the Japan and China money pages for those corridors so the keyword and the hreflang stay clean. One protocol office can still run the operations.',
    },
    {
      question: 'How much does a Singapore-booked MEA study cost?',
      answer:
        'Custom work is $10,000–$60,000. The price moves with countries, respondents, method and sample. A written proposal follows within 48 hours of a brief.',
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
