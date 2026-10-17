/**
 * Hardcoded SEO blog post: /blog/uae-drug-pricing-ede-takeover-launch-research
 * Research-led article for "UAE drug pricing Emirates Drug Establishment"
 * and "UAE launch research 2026".
 * Links to /uae-pricing-reimbursement-strategy rather than repeating that page.
 * Every numeric claim has an inline source.
 */
import type { BlogPost, BlogPostItemListEntry } from '@/types/blog';
import {
  ALSAADANY_AUTHOR,
  MENA_AUTHORS,
  WESTERN_AUTHORS,
  personAuthorJsonLd,
  withAlsaadanyPersonJsonLd,
} from '@/data/editorialAuthors';
import { GOOGLE_OFFICES, officeRoleLabel } from '@/data/googleLocations';
import { ORG_ID, ORG_LOGO, ORG_NAME, ORG_SAME_AS } from '@/lib/seo/organization';

export const UAE_EDE_SLUG = 'uae-drug-pricing-ede-takeover-launch-research';

export const UAE_EDE_PATH = `/blog/${UAE_EDE_SLUG}`;

export const UAE_EDE_URL = `https://www.bionixus.com${UAE_EDE_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Martha DeVito is the assigned Global Research Manager for this article.
 */
export const UAE_EDE_AUTHOR_NAME: string | undefined = 'Martha DeVito';

export const UAE_EDE_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const UAE_EDE_COVER_IMAGE = '/images/blog/uae-drug-pricing-ede-takeover-launch-research-cover.jpg';

export const UAE_EDE_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover for UAE drug pricing after the Emirates Drug Establishment takeover, 2026';

export const UAE_EDE_HERO_IMAGE = '/images/blog/uae-drug-pricing-ede-takeover-launch-research-hero.jpg';

export const UAE_EDE_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for UAE drug pricing and launch research after the Emirates Drug Establishment change';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const UAE_EDE_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/uae-drug-pricing-ede-takeover-launch-research-timeline.webp',
    alt: 'Timeline of Emirates Drug Establishment legal and service transfer dates from 2023 to 2026',
    caption:
      'Published dates a 2026 UAE launch file has to keep separate: Federal Decree-Law 28/2023 (25–30 September 2023), Federal Decree-Law 38/2024 in force 2 January 2025, MOHAP’s transfer of 44 services on 5 January 2026, and EDE Decision 12/2026 on the 168-product list.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/uae-drug-pricing-ede-takeover-launch-research-cuts.webp',
    alt: 'Bar chart of published May 2026 UAE list-price cuts for Zocor 40 mg, Xalatan, Invega 9 mg and Alunbrig 180 mg',
    caption:
      'Gulf News (26 May 2026) examples from EDE Decision 12/2026: Zocor 40 mg fell from AED 166.50 to AED 67.50 (about 59.5%); Xalatan from AED 89 to AED 43 (about 51.7%); Invega 9 mg from AED 843 to AED 416; Alunbrig 180 mg from AED 26,433 to AED 21,108. Do not average them into one “UAE cut”.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/uae-drug-pricing-ede-takeover-launch-research-h1.webp',
    alt: 'Four published Emirates Drug Establishment activity counts for the first half of 2026',
    caption:
      'WAM, 22 September 2026, on EDE’s first-half 2026 record: 942 product approvals, 20 pricing decisions, 2,030 inspection visits and 828 non-compliant advertisements. Decision 12/2026 is one pricing decision inside that count, not the whole programme.',
    width: 800,
    height: 580,
  },
  {
    src: '/images/blog/uae-drug-pricing-ede-takeover-launch-research-layers.webp',
    alt: 'Three UAE access layers after the EDE takeover: federal list price, emirate payer listing and hospital or insurer funding',
    caption:
      'Three published layers a launch brief has to keep separate after the EDE takeover: the federal list price EDE now sets and can cut; DHA, DOH and insurer listing; and the hospital or wallet that actually funds the script. A priced marketing authorisation is not a listing.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/uae-drug-pricing-ede-takeover-launch-research-brief.webp',
    alt: 'Checklist of seven UAE launch research workstreams after the Emirates Drug Establishment change',
    caption:
      'Seven workstreams UAE launch research should cover after the EDE takeover: first-price file, list-cut exposure, dual-importer supply, payer listing after the federal price, treated-patient share, budget impact after a cut, and NEML or essential-list position.',
    width: 800,
    height: 760,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const UAE_EDE_META_TITLE = 'UAE Drug Pricing After EDE Takeover: Launch Research';

export const UAE_EDE_META_DESCRIPTION =
  'UAE drug pricing after the Emirates Drug Establishment takeover: what launch research must prove for first price, May 2026 repricing and payer listing.';

export const UAE_EDE_DISPLAY_TITLE =
  'Launching a drug in the UAE after the EDE takeover: pricing, repricing and the research behind them';

export const UAE_EDE_DISPLAY_SUBTITLE =
  'UAE drug pricing and UAE launch research after the Emirates Drug Establishment change';

export const UAE_EDE_BREADCRUMB_LABEL = 'UAE drug pricing after EDE';

export const UAE_EDE_EXCERPT =
  'A sourced 2026 briefing on UAE drug pricing after the Emirates Drug Establishment takeover: what the January 2026 service transfer moved, what Decision 12 of 2026 cut, and what launch research still has to prove before first price and after a list cut.';

export const UAE_EDE_PUBLISHED_ISO = '2026-10-16T12:00:00.000Z';
export const UAE_EDE_UPDATED_ISO = '2026-10-16T12:00:00.000Z';

export const UAE_EDE_CATEGORY = 'Market Research';

export const UAE_EDE_TAGS = [
  'UAE Drug Pricing',
  'Emirates Drug Establishment',
  'UAE Launch Research',
  'Market Access',
  'Reimbursement',
  'Primary Research',
  'United Arab Emirates',
  'Pharmaceutical Pricing',
];

const ACCESSED = 'accessed 16 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'mohap-44-2026',
    label:
      'Ministry of Health and Prevention (MoHAP). Ministry of Health and Prevention transfer key services to Emirates Drug Establishment. 5 January 2026. Full transfer of 44 core services to EDE, including individual-product re-pricing and publication of regulated-medicine price lists.',
    url: 'https://mohap.gov.ae/en/w/ministry-of-health-and-prevention-transfer-key-services-to-emirates-drug-establishment',
  },
  {
    id: 'mohap-mte',
    label:
      'Ministry of Health and Prevention (MoHAP). Transfer of services to the Emirates Drug Establishment (service list page). States that customers should now submit the transferred-category applications through the EDE portal at www.ede.gov.ae.',
    url: 'https://mohap.gov.ae/en/mte',
  },
  {
    id: 'uae-leg-28-2023',
    label:
      'UAE Legislation portal. Federal Decree-Law On the Establishment of the UAE Drug Corporation (Federal Decree-Law No. 28 of 2023). Issued 25 September 2023; Official Gazette 29 September 2023, No. 760; effective 30 September 2023; status Active.',
    url: 'https://uaelegislation.gov.ae/en/legislations/2122',
  },
  {
    id: 'lexis-28-2023',
    label:
      'Lexis Middle East. Federal Decree-Law No. 28/2023 On the Establishment of the UAE Drug Corporation. Issued 25 September 2023 (10 Rabi Al-Awwal 1445 H). Recites Federal Law No. 8/2019 on medical products and the pharmacy profession as one of the instruments considered.',
    url: 'https://www.lexismiddleeast.com/law/UnitedArabEmirates/DecreeLaw_28_2023/en',
  },
  {
    id: 'uae-leg-38-2024',
    label:
      'UAE Legislation portal. Federal Decree-Law Governing Medical Products, Pharmacists and Pharmaceutical Establishments (Federal Decree-Law No. 38 of 2024). Issued 1 October 2024; effective 2 January 2025; status Active.',
    url: 'https://uaelegislation.gov.ae/en/legislations/2751',
  },
  {
    id: 'faolex-38-2024',
    label:
      'FAOLEX / official English text. Federal Decree-Law No. (38) of 2024 Governing Medical Products, Pharmacists and Pharmaceutical Establishments. Article 20 (Board pricing rules); Article 22 (at least two licensed importers); Article 7 (marketing approval five years; renew 90 days before expiry); Article 36 (Pharmaceutical Policy Committee).',
    url: 'https://faolex.fao.org/docs/pdf/uae240011E.pdf',
  },
  {
    id: 'baker-mckenzie-2025',
    label:
      'Baker McKenzie Healthcare & Life Sciences. United Arab Emirates: Enacts New Medical Products Law to Boost Innovation in Pharmaceuticals and Medical Devices. 14 January 2025. In force 2 January 2025, with a one-year grace period; written to facilitate EDE’s take-over of responsibilities from MOHAP.',
    url: 'https://healthcarelifesciences.bakermckenzie.com/2025/01/14/uae-enacts-new-pharma-law-to-boost-pharmaceutical-innovation/',
  },
  {
    id: 'enterprise-am-2026',
    label:
      'EnterpriseAM UAE. THIS MORNING: Health Ministry transfers licensing, meds registration services to Emirates Drug Establishment. 6 January 2026. Reports that EDE is now responsible for around 44 services previously in the ministry’s remit, that some services are only partially transferred (facility licensing, advertising and emergency-drug approval described as co-managed), and that narcotics and high-sensitivity controlled substances remain under the ministry.',
    url: 'https://enterpriseam.com/uae/2026/01/06/this-morning-health-ministry-transfers-licensing-meds-registration-services-to-emirates-drug-establishment-emirates-skycargo-eyes-boosting-capacity-in-2026/',
  },
  {
    id: 'navlin-2026',
    label:
      'NAVLIN Daily. UAE Realigns Drug Regulation Responsibilities to EDE. 12 January 2026. Summarises the shift of 44 pharmaceutical and regulatory services to EDE, including re-pricing, manufacturer registration, export certificates and drug quality control, and reports that the ministry keeps control of five key areas, including issuing prescription books for controlled medicine and approving narcotics for private hospitals.',
    url: 'https://www.navlindaily.com/article/29106/uae-realigns-drug-regulation-responsibilities-to-ede',
  },
  {
    id: 'gulf-news-168',
    label:
      'Gulf News (Abdulla Rasheed). UAE cuts prices of 168 medicines for chronic diseases by up to 60 per cent. Last updated 26 May 2026. EDE Decision No. (12) of 2026; press-reported pharmacy date 30 May 2026; cuts about 5–60%; Zocor 40 mg about 59.5% and Xalatan about 51.7%; source of the AED pairs quoted in this article.',
    url: 'https://gulfnews.com/uae/health/uae-cuts-prices-of-168-medicines-for-chronic-diseases-by-up-to-60-per-cent-1.500553642',
  },
  {
    id: 'eastlaws-12-2026',
    label:
      'Eastlaws legal-database listing. Decision of the Chairman of the Board of the Emirates Drug Establishment No. 12 | 2026. Issued 22 April 2026; published 30 April 2026 in Official Gazette No. 822 (fifty-sixth year); date of entry into force listed as 12 June 2026. This listing is cited for the Gazette metadata; it is not a substitute for the Arabic Official Gazette text.',
    url: 'https://www.eastlaws.com/legislation-full-text/en/uae/30-04-2026/no-12?id=5638582&type=1',
  },
  {
    id: 'wam-h1-2026',
    label:
      'Emirates News Agency (WAM). Emirates Drug Establishment boosts pharmaceutical readiness in H1 2026. 22 September 2026. Official data to 30 June 2026: 2,030 inspection visits; 828 non-compliant advertisements; 20 pricing decisions; 942 product approvals (420 conventional/biological including 63 innovator); 247 UAE-made products. Records the February multi-importer mechanism and names Foundayo, Inpefa, Baxfendy and EURneffy.',
    url: 'https://www.wam.ae/en/article/17ft72p-emirates-drug-establishment-boosts-pharmaceutical',
  },
  {
    id: 'wam-foundayo',
    label:
      'Emirates News Agency (WAM). Emirates Drug Establishment approves new oral obesity treatment, positioning UAE as second country globally. 3 April 2026. EDE approved Foundayo (orforglipron), an oral GLP-1 receptor agonist for chronic weight management, making the UAE the second country to register it; expected availability from May 2026. Director-General Dr Fatima Al Kaabi is quoted on obesity as an EDE priority associated with more than 200 diseases and at least 13 cancers. The release states that participants receiving the highest dose in clinical trials recorded an average weight loss of 12.4%.',
    url: 'https://www.wam.ae/en/article/bzj40cj-emirates-drug-establishment-approves-oral-obesity',
  },
  {
    id: 'ede-repricing',
    label:
      'Emirates Drug Establishment. Re-Pricing of a Single Medical Product (service card). Requires a country-of-origin pricing certificate, justifications, and Gulf plus European reference prices. Drugs Pricing Committee approval. Fees: AED 1,000 plus AED 500 for a new certificate.',
    url: 'https://ede.gov.ae/documents/61005/62137/Re-Pricing+of+a+Medicine+-+Re-Pricing+of+a+Single+Medical+Product/588a7982-adb3-bdaf-2b58-55d88e473d11?t=1727317729860',
  },
  {
    id: 'chambers-2026',
    label:
      'Chambers and Partners, Life Sciences 2026 (United Arab Emirates comparison). EDE controls pharmaceutical and medical-device prices; Cabinet Decision 90/2021 bars unauthorised discounts. Recites Decision 140/2013 CIF USD mark-ups: pharmacy +15%, then sale +28/24/20% by import-price band.',
    url: 'https://practiceguides.chambers.com/practice-guides/comparison/1070/18741/29423-29427-29434-29442-29445-29447-29450-29456',
  },
  {
    id: 'reallaw-49-2025',
    label:
      'realLaw AI listing of Decision of the Chairman of the Board of Directors of the Emirates Drug Establishment No. 49 of 2025 Regarding the Pricing of Certain Medical Products. The recital still cites Ministerial Decision No. 140 of 2013 regarding the mechanism for determining the sale prices of medicines and calculating new prices for foreign-currency exchange, together with Federal Decree-Law No. 28 of 2023 and Federal Decree-Law No. 38 of 2024. Used here as evidence that Decision 140/2013 remained a cited instrument in 2025 EDE pricing decisions.',
    url: 'https://app.reallaw.ai/en/legal-table/doc/decision-of-the-chairman-of-the-board-of-directors-of-the-emirates-drug-2557',
  },
  {
    id: 'national-2013',
    label:
      'The National. Price of medicine in UAE cut by up to 40%. Reports that retail prices of more than 6,600 medicines would be cut by up to 40% under a new system unifying the cost of imported medicines in US dollars and reducing agent and pharmacy margins. Contemporary coverage of the 2013 unification that Ministerial Decision 140 of 2013 implemented.',
    url: 'https://www.thenationalnews.com/uae/health/price-of-medicine-in-uae-cut-by-up-to-40-1.298712',
  },
  {
    id: 'ede-legislations',
    label:
      'Emirates Drug Establishment. Legislations page. Lists Federal Decree-Law No. 28 of 2023 on the establishment of EDE (25 September 2023) and Decision of the Chairman of the Board No. (47) of 2025 on adoption of the National Essential Medicines List (NEML), published Thursday 19 June 2025.',
    url: 'https://www.ede.gov.ae/legislations',
  },
  {
    id: 'who-neml-2025',
    label:
      'World Health Organization. United Arab Emirates: National Essential Medicine List 2025 (English). Publication dated 3 June 2026 in the WHO repository.',
    url: 'https://www.who.int/publications/m/item/united-arab-emirates--national-essential-medicine-list-2025-(english)',
  },
  {
    id: 'dha-neml-pdf',
    label:
      'Dubai Health Authority hosted copy of EDE Chairman Decision No. (47) of 2025 adopting the National Essential Medicines List (NEML), signed by Dr Thani Ahmed Al Zeyoudi, Minister of State for Foreign Trade and Chairman of the Board of the Emirates Drug Establishment, dated 19 June 2025, with the 2025 UAE NEML attached.',
    url: 'https://dha.gov.ae/uploads/092025/%D9%85%D8%B1%D9%81%D9%82%D9%82%D9%80%D9%80%D8%B1%D8%A7%D8%B1%20%D8%B1%D8%A6%D9%8A%D8%B3%20%D9%85%D8%AC%D9%84%D8%B3%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%85%D8%A4%D8%B3%D8%B3%D8%A9%20%D8%A7%D9%84%D8%A5%D9%85%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%84%D9%84%D8%AF%D9%88%D8%A7%D8%A1%20%D8%B1%D9%82%D9%80%D9%80%D9%85%2047%20%D9%84%D8%B3%D9%86%D8%A9%20%202025%20%D9%81%D9%8A%20%D8%B4%D8%A3%D9%86%20%20%D8%A5%D8%B9%D8%AA%D9%85%D8%A7%D8%AF%20%D8%A7%D9%84%D9%82%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9%20%D9%84%D9%84%D8%A3%D8%AF%D9%88%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B3%D8%A7%D8%B3%D9%8A%D8%A92025941962.pdf',
  },
  {
    id: 'fcsc-2024',
    label:
      'Federal Competitiveness and Statistics Centre (FCSC). Unified UAE Numbers (English), December 2025. Official statistics: UAE population approximately 11.29 million in 2024, a 5.7% increase from 10.68 million in 2023; about 200 nationalities reside and work in the UAE.',
    url: 'https://fcsc.gov.ae/wp-content/uploads/2025/12/UAE-Unified-Numbers-En.pdf',
  },
  {
    id: 'mohap-nhs',
    label:
      'Ministry of Health and Prevention. National Health Survey results officially announced. Survey started October 2017; 10,000 families (residents and locals) participated, response rate 94%. Diabetes prevalence among adults over 18 (high blood glucose or taking diabetes medication on the survey day) was 11.8%, down from 18.9% in 2010. This is the last official published STEPS-style national figure cited here; it is not a 2026 prevalence.',
    url: 'https://mohap.gov.ae/en/w/national-health-survey-results-officially-announced',
  },
  {
    id: 'undp-ncd',
    label:
      'UNDP / Gulf Health Council. United Arab Emirates NCD investment case (English). Notes the 2017–2018 STEPS diabetes finding of 11.8% among adults 18+; describes Abu Dhabi’s Thiqa programme for UAE nationals and Dubai’s Saada programme; and states that in Abu Dhabi and Dubai employers are required to provide coverage to employees, with national rules also mandating coverage for expatriates who work in the UAE and their dependents.',
    url: 'https://www.undp.org/sites/g/files/zskgke326/files/2024-02/uae_ncd_ic_report_eng.pdf',
  },
  {
    id: 'dubai-law-11-2013',
    label:
      'Government of Dubai. Law No. (11) of 2013 Concerning Health Insurance in the Emirate of Dubai. Applies to all areas of the Emirate including special development zones and free zones such as the Dubai International Financial Centre. Requires the entities determined in Article 9 to enrol UAE nationals, residents and visitors in health insurance in accordance with the Law.',
    url: 'https://dlp.dubai.gov.ae/Legislation%20Reference/2013/Law%20No.%20%2811%29%20of%202013.html',
  },
  {
    id: 'dubai-ae-insurance',
    label:
      'Dubai.ae. Health Insurance. States that under Law No. 11 of 2013 health insurance in Dubai is mandatory; employers in Dubai, including free zones, must provide health insurance to employees; sponsors must extend coverage to dependents; Dubai citizens and government employees are eligible under the Enaya programme.',
    url: 'https://www.dubai.ae/living/healthcare/health-insurance',
  },
  {
    id: 'ddc-2018',
    label:
      'Dubai Health Authority / ISAHD. eClaimLink General Circular Number 12 of 2018 (GC 12/2018), The Dubai Drug Code (DDC) List and eClaimLink System. Defines the DDC List as a comprehensive list of all drugs registered with DHA’s Pharmacy Services department; each registered drug is assigned a unique DDC code that includes route, dosage, form, pack size, price, manufacturer, registered owner and source (MOH, DHA or private hospital).',
    url: 'https://www.isahd.ae/content/docs/GC%2012-2018%20The%20Dubai%20Drug%20Code%20(DDC)%20List%20and%20eClaimLink%20System.pdf',
  },
  {
    id: 'ede-gov',
    label:
      'Emirates Drug Establishment portal. Home / search copy states that the Establishment was founded on 29 September (Arabic: تأسست مؤسسة الإمارات للدواء في 29 سبتمبر). Contact details published on the portal include toll-free 800 33784 and info@ede.gov.ae. The legislation dates on the UAE Legislation portal remain the citation for legal effect.',
    url: 'https://www.ede.gov.ae/search',
  },
  {
    id: 'grand-view',
    label:
      'Grand View Research. United Arab Emirates pharmaceutical market outlook pages. Syndicated category sizing, not a primary-research file on EDE first price, list cuts or payer listing.',
    vendor: true,
  },
  {
    id: 'imarc',
    label:
      'IMARC Group. UAE pharmaceutical market report pages. Syndicated market-size commentary that often occupies “UAE pharmaceutical market” queries.',
    vendor: true,
  },
  {
    id: 'iqvia',
    label:
      'IQVIA. UAE and Middle East pharmaceutical audit and market commentary. Useful for national audit context; it does not replace EDE pricing-committee or payer-listing primary research.',
    vendor: true,
  },
];

const REFERENCE_BY_ID = new Map(REFERENCES.map((ref) => [ref.id, ref]));

function cite(id: string, text: string): string {
  const ref = REFERENCE_BY_ID.get(id);
  if (!ref) throw new Error(`Unknown reference: ${id}`);
  if (ref.vendor || !ref.url) return text;
  return `<a href="${ref.url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
}

type Workstream = BlogPostItemListEntry & {
  researchType: string;
  question: string;
};

export const UAE_EDE_WORKSTREAMS: Workstream[] = [
  {
    name: 'First-price file',
    researchType: 'Country-of-origin and reference-price reconstruction',
    question: 'What CIF, Gulf and European anchors will the Drugs Pricing Committee see?',
    description:
      'Rebuild the country-of-origin certificate, the Gulf and European comparators, and the Decision 140/2013 mark-up path before you file the first UAE price.',
  },
  {
    name: 'List-cut and analog exposure',
    researchType: 'Decision 12/2026 and subsequent pricing decisions',
    question: 'Which analog on the 168-product list, or the next cut, moves your net?',
    description:
      'Map every analog and dose on the published 168-product cut, then ask which later pricing decision can pull your brand with it.',
  },
  {
    name: 'Dual-importer and supply',
    researchType: 'Importer, warehouse and stock interviews',
    question: 'Who are the two importers, and can both actually import this year?',
    description:
      'Article 22 and the February 2026 EDE mechanism require more than one importer. Research who is appointed and whether both move volume.',
  },
  {
    name: 'Payer listing after the federal price',
    researchType: 'DHA, DOH and insurer interviews',
    question: 'Which wallet lists the product after EDE has set the public price?',
    description:
      'Federal list price is not DHA, DOH or private-insurer listing. Interview those committees separately and keep the pricing-strategy page for the process.',
  },
  {
    name: 'Treated-patient and analog share',
    researchType: 'Anonymous physician PRFs',
    question: 'What share of treated patients sits on each analog after the cut?',
    description:
      'A 59% list cut on an analog is not a 59% share shift. Measure new starts and continuing patients by specialty and emirate.',
  },
  {
    name: 'Budget impact after a list cut',
    researchType: 'Payer BIA with local uptake',
    question: 'What does the payer already spend on the class, and what changes if the list moves?',
    description:
      'A budget-impact that prices only the new invoice, and ignores a published class cut, answers the wrong question.',
  },
  {
    name: 'NEML and essential-list position',
    researchType: 'Desk plus formulary interviews',
    question: 'Is the molecule on the 2025 NEML, a DDC code, or only a federal price list?',
    description:
      'EDE adopted a National Essential Medicines List in June 2025. That is a different list from a commercial launch price.',
  },
];

const WORKSTREAM_TABLE_HTML = `<table>
<thead><tr><th>Workstream</th><th>Decision it answers</th><th>What the published record already shows</th><th>What to commission</th></tr></thead>
<tbody>
<tr><td>First-price file</td><td>What the committee can accept</td><td>Article 20 ties the price to EDE Board rules; the EDE re-pricing card still asks for a country-of-origin certificate plus Gulf and European references (${cite('faolex-38-2024', 'Decree-Law 38/2024')}; ${cite('ede-repricing', 'EDE re-pricing card')})</td><td>Rebuild the certificate and the comparator basket before first filing</td></tr>
<tr><td>List-cut exposure</td><td>Which analog can pull the net</td><td>Decision 12/2026 cut 168 products; Zocor 40 mg about 59.5% and Xalatan about 51.7% (${cite('gulf-news-168', 'Gulf News, 26 May 2026')})</td><td>Dose-level analog map plus a watch on the other 19 H1 pricing decisions</td></tr>
<tr><td>Dual importer</td><td>Who can land the stock</td><td>Article 22 requires at least two importers; WAM says EDE approved a multi-importer mechanism in February 2026 (${cite('faolex-38-2024', 'Article 22')}; ${cite('wam-h1-2026', 'WAM')})</td><td>Name both importers and test whether both imported in the last calendar year</td></tr>
<tr><td>Payer listing</td><td>Who funds the script</td><td>Dubai Law 11/2013 makes insurance mandatory in Dubai, including free zones; DDC codes carry a price field (${cite('dubai-law-11-2013', 'Law 11/2013')}; ${cite('ddc-2018', 'GC 12/2018')})</td><td>Separate DHA, DOH and insurer interviews — see <a href="/uae-pricing-reimbursement-strategy">UAE pricing and reimbursement strategy</a></td></tr>
<tr><td>Treated-patient share</td><td>What happens after the cut</td><td>Diabetes in the last published national survey was 11.8% of adults 18+ — a prevalence, not a treated share (${cite('mohap-nhs', 'MOHAP National Health Survey')})</td><td>Anonymous PRFs, new versus continuing, by emirate and specialty</td></tr>
</tbody>
</table>`;

const REFERENCES_HTML = `<ol>
${REFERENCES.map((ref) => {
  const source = ref.url
    ? ` <a href="${ref.url}" target="_blank" rel="noopener noreferrer">Source</a>`
    : '';
  return `<li id="ref-${ref.id}">${ref.label}${source} (${ACCESSED}).</li>`;
}).join('\n')}
</ol>`;

export const UAE_EDE_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'What is UAE drug pricing after the EDE takeover?', anchor: 'what-is-uae-drug-pricing-after-the-ede-takeover' },
  { heading: 'What did the EDE takeover actually move?', anchor: 'what-did-the-ede-takeover-actually-move' },
  { heading: 'How does UAE drug pricing get set and reset?', anchor: 'how-does-uae-drug-pricing-get-set-and-reset' },
  { heading: 'What did Decision 12 of 2026 change on the shelf?', anchor: 'what-did-decision-12-of-2026-change' },
  { heading: 'Why a priced marketing authorisation is not access', anchor: 'why-a-priced-marketing-authorisation-is-not-access' },
  { heading: 'What should UAE launch research measure after EDE?', anchor: 'what-should-uae-launch-research-measure-after-ede' },
  { heading: 'How should you commission the study?', anchor: 'how-to-commission' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const UAE_EDE_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> UAE drug pricing after the Emirates Drug Establishment takeover is the federal list price EDE now sets and can cut, plus the separate payer listing that still sits with DHA, DOH and insurers. UAE launch research has to measure first price, repricing risk and who will fund the product after a list cut.</p>`;

const NARRATIVE_HTML = `<p>UAE drug pricing is a research problem again, not only a regulatory filing. On 5 January 2026 the Ministry of Health and Prevention transferred 44 core services to the Emirates Drug Establishment, including the re-pricing of individual medical products and the publication of regulated-medicine price lists (${cite('mohap-44-2026', 'MOHAP, 5 January 2026')}). In May 2026 the same authority cut the retail prices of 168 chronic- and critical-care products (${cite('gulf-news-168', 'Gulf News, 26 May 2026')}). What a brand, HEOR or market-access team still cannot buy off the shelf is the first-price file the Drugs Pricing Committee will accept, which analog on that 168-product list can pull a net price, and which DHA, DOH or insurer wallet will fund the script after the list moves. This briefing uses only published sources. It sits alongside our <a href="/healthcare-market-research">healthcare market research hub</a> and, for the payer-process map this page does not repeat, our <a href="/uae-pricing-reimbursement-strategy">UAE pricing and reimbursement strategy</a> page.</p>

<div class="value-box">
<p><strong>Quick facts: UAE drug pricing and the EDE takeover, October 2026</strong></p>
<ul>
<li><strong>25–30 September 2023:</strong> Federal Decree-Law No. 28 of 2023 established the UAE Drug Corporation / Emirates Drug Establishment — issued 25 September, Official Gazette 29 September No. 760, effective 30 September (${cite('uae-leg-28-2023', 'UAE Legislation')}).</li>
<li><strong>2 January 2025:</strong> Federal Decree-Law No. 38 of 2024 on medical products, pharmacists and pharmaceutical establishments came into force (${cite('uae-leg-38-2024', 'UAE Legislation')}; ${cite('baker-mckenzie-2025', 'Baker McKenzie, 14 January 2025')}).</li>
<li><strong>5 January 2026:</strong> MOHAP transferred 44 core services in full to EDE, including individual-product re-pricing and publication of regulated-medicine price lists (${cite('mohap-44-2026', 'MOHAP')}).</li>
<li><strong>168 products</strong> had retail prices cut under EDE Decision No. 12 of 2026; published reductions ran from about 5% to nearly 60%, with Zocor 40 mg about 59.5% and Xalatan about 51.7% (${cite('gulf-news-168', 'Gulf News')}).</li>
<li><strong>Two dates, one decision:</strong> Gulf News reported a 30 May 2026 pharmacy effective date; a legal-database listing of the same Decision 12 records issuance on 22 April 2026, Official Gazette No. 822 on 30 April 2026, and entry into force on 12 June 2026 (${cite('gulf-news-168', 'Gulf News')}; ${cite('eastlaws-12-2026', 'Eastlaws listing')}).</li>
<li><strong>20 pricing decisions</strong> in the first half of 2026, inside a half-year in which EDE approved 942 products and carried out 2,030 inspection visits (${cite('wam-h1-2026', 'WAM, 22 September 2026')}).</li>
<li><strong>11.29 million</strong> residents in 2024, up 5.7% from 10.68 million in 2023 (${cite('fcsc-2024', 'FCSC Unified UAE Numbers')}).</li>
<li><strong>11.8%</strong> of adults 18+ had diabetes or were on diabetes medication in the last official published national health survey — a 2017–2018 figure, not a 2026 treated-share (${cite('mohap-nhs', 'MOHAP National Health Survey')}).</li>
</ul>
</div>

<h2 id="what-is-uae-drug-pricing-after-the-ede-takeover">What is UAE drug pricing after the EDE takeover?</h2>

<p>It is the federal public price the Emirates Drug Establishment now sets for a medicine that has marketing approval, the later decisions that can cut that price, and the commissioned work that tells a launch team whether a DHA, DOH or insurer committee will still fund the product after the list moves. It is not a syndicated UAE pharmaceutical market-size slide.</p>

<p>Report publishers such as Grand View Research, IMARC and IQVIA sell UAE pharmaceutical outlooks and audits. Those pages often occupy the query “UAE drug pricing”. ${cite('grand-view', 'Grand View Research')}, ${cite('imarc', 'IMARC Group')} and ${cite('iqvia', 'IQVIA')} are useful for a first cut of national audit context. They do not say what country-of-origin certificate the Drugs Pricing Committee will accept, which analog on the 168-product list sits next to your brand, or whether a Dubai Drug Code or an Abu Dhabi wallet will carry the product after a cut. Those answers require a custom brief. Country context sits on <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a> and <a href="/uae-pharmaceutical-market-research">UAE pharmaceutical market research</a>.</p>

<p>A usable UAE launch research file after EDE usually needs:</p>

<ul>
<li>A reconstructed first-price pack: country-of-origin certificate, Gulf and European reference prices, and the Decision 140/2013 mark-up path the committee still cites (${cite('ede-repricing', 'EDE re-pricing card')}; ${cite('chambers-2026', 'Chambers Life Sciences 2026')}).</li>
<li>A dose-level map of every analog on Decision 12/2026 and a watch on the other published pricing decisions in the same half-year (${cite('gulf-news-168', 'Gulf News')}; ${cite('wam-h1-2026', 'WAM')}).</li>
<li>Payer and Pharmacy and Therapeutics interviews that treat DHA, DOH and private insurers as different decisions — the process map is on <a href="/uae-pricing-reimbursement-strategy">UAE pricing and reimbursement strategy</a>, not in this briefing.</li>
<li>Arabic and English instruments, and sites in Dubai, Abu Dhabi and at least one northern emirate — not a Gulf average.</li>
</ul>

<p>The unit of observation is the price certificate and the payer committee, not a vial forecast. Neighbouring systems are not a substitute. Compare <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a> and <a href="/healthcare-market-research/kuwait">Kuwait</a> rather than importing an SFDA or MOH price into an EDE file.</p>

<h2 id="what-did-the-ede-takeover-actually-move">What did the EDE takeover actually move?</h2>

<p>The Establishment is older than the January 2026 service transfer. Federal Decree-Law No. 28 of 2023 created the UAE Drug Corporation — the English legislation title — on 25 September 2023, with Official Gazette publication on 29 September 2023 (No. 760) and legal effect on 30 September 2023 (${cite('uae-leg-28-2023', 'UAE Legislation')}; ${cite('lexis-28-2023', 'Lexis Middle East')}). The EDE portal’s own Arabic copy says the Establishment was founded on 29 September (${cite('ede-gov', 'EDE portal')}). Use the legislation dates for legal effect. Use 5 January 2026 for the service transfer a launch team will feel in the filing queue.</p>

<p>Federal Decree-Law No. 38 of 2024 then replaced Federal Law No. 8 of 2019 on medical products, the pharmacy profession and pharmaceutical establishments. The UAE Legislation portal lists issuance on 1 October 2024 and effect on 2 January 2025 (${cite('uae-leg-38-2024', 'UAE Legislation')}). Baker McKenzie’s 14 January 2025 note records a one-year grace period from that effective date and says the law was written to facilitate EDE’s take-over of responsibilities from MOHAP (${cite('baker-mckenzie-2025', 'Baker McKenzie')}).</p>

<p>The take-over that changed the filing address is the 5 January 2026 MOHAP statement. MOHAP wrote that it had transferred a set of services to EDE “to unify mandates, clarify institutional roles, and strengthen integration,” and that the restructuring included the <em>full</em> transfer of 44 core services, with EDE now solely responsible for their administration, regulation and oversight (${cite('mohap-44-2026', 'MOHAP, 5 January 2026')}). The services named on that page include:</p>

<ul>
<li>re-pricing of individual medical products;</li>
<li>registration and renewal of manufacturers of medical products;</li>
<li>certificates for pharmaceutical products intended for export;</li>
<li>renewal of registration for pharmaceutical products derived from natural sources;</li>
<li>publication of price lists for regulated medicines;</li>
<li>accreditation certificates for clinical studies or bioequivalence centres; and</li>
<li>certificates reflecting amendments to registered pharmaceutical products (${cite('mohap-44-2026', 'MOHAP')}).</li>
</ul>

<p>MOHAP’s companion list page tells applicants to submit the transferred-category requests through the EDE portal at www.ede.gov.ae (${cite('mohap-mte', 'MOHAP service-list page')}). That is the operational meaning of “takeover” for a 2026 launch team: the price-list and re-pricing queue now sits at EDE, not at the ministry desk that used to issue the ministerial pricing decision.</p>

${figureHtml(UAE_EDE_FIGURES[0])}

<p>Not everything moved. EnterpriseAM, reporting the ministry statement the next morning, wrote that some services were only “partially” transferred — facility licensing, advertising and emergency-drug approval described as still co-managed — and that narcotics and high-sensitivity controlled substances remained under the ministry (${cite('enterprise-am-2026', 'EnterpriseAM, 6 January 2026')}). NAVLIN Daily, on 12 January 2026, reported that the ministry keeps control of five key areas, including issuing prescription books for controlled medicine and approving narcotics for private hospitals (${cite('navlin-2026', 'NAVLIN Daily')}). A launch brief that treats “EDE now owns all drug regulation” as a fact will mis-state a controlled-drug or advertising file. Split the 44 fully transferred services from the residual ministry list before you write the regulatory workplan.</p>

<p>EDE’s own first-half 2026 record, issued through WAM on 22 September 2026, is the first official activity count after that transfer: 2,030 inspection and regulatory visits by 30 June 2026, 828 non-compliant advertisements, 20 pricing decisions, 38 circulars, and 942 product approvals, of which 420 were conventional or biological medicines (63 of them innovator products), 376 healthcare products and 146 medical devices. Local manufacturing accounted for 247 UAE-made products — WAM’s phrase is “more than a quarter of the total” (${cite('wam-h1-2026', 'WAM, 22 September 2026')}). Those are regulator activity counts. They are not a demand forecast.</p>

${figureHtml(UAE_EDE_FIGURES[2])}

<p>The same WAM note is also the public record that EDE is now approving first-in-region and second-in-world products on compressed clocks. Foundayo (orforglipron) was approved on 3 April 2026, making the UAE the second country to register Eli Lilly’s oral GLP-1 for chronic weight management, with expected availability from May 2026 (${cite('wam-foundayo', 'WAM, 3 April 2026')}; ${cite('wam-h1-2026', 'WAM H1 note')}). WAM’s H1 wrap also names Inpefa (sotagliflozin) as a second-country approval, Baxfendy (baxdrostat) as a first-country approval, and EURneffy as the region’s first epinephrine nasal spray (${cite('wam-h1-2026', 'WAM')}). Approval speed is not the same as a published public price, and a published public price is not the same as a payer listing. That gap is the research question.</p>

<h2 id="how-does-uae-drug-pricing-get-set-and-reset">How does UAE drug pricing get set and reset?</h2>

<p>Article 20 of Federal Decree-Law No. 38 of 2024 is the current statutory sentence: marketing a medical product that has marketing approval requires a specific price, “determined in accordance with the general rules issued by a decision of the BOD” — the EDE Board of Directors (${cite('faolex-38-2024', 'FAOLEX English text, Article 20')}). Article 36 creates a Pharmaceutical Policy Committee, reporting to the President, to propose policies on circulation, pricing and monitoring; the Cabinet is to decide its formation and working system (${cite('faolex-38-2024', 'Article 36')}). Chambers’ 2026 UAE Life Sciences chapter repeats that EDE controls pharmaceutical and medical-device prices and that this committee is the dedicated policy body (${cite('chambers-2026', 'Chambers')}).</p>

<p>The mark-up path that 2025 EDE pricing decisions still recite is older than EDE. Ministerial Decision No. 140 of 2013 unified the factory import price on a CIF basis in US dollars. Chambers describes Pharmacy Price as Import Price + 15%, then a public sale add-on of 28%, 24% or 20% of Import Price according to whether that import price is below AED 250, AED 250–500, or above AED 500, with EDE retaining discretion (${cite('chambers-2026', 'Chambers Life Sciences 2026')}). Chairman’s Decision No. 49 of 2025 still lists Decision 140/2013 in its recitals (${cite('reallaw-49-2025', 'EDE Decision 49/2025 listing')}). The National’s 2013 report said retail prices of more than 6,600 medicines would be cut by up to 40% under that unification (${cite('national-2013', 'The National')}). A first-price model still has to show that working. It is not a 2026 circular that republishes the arithmetic in English.</p>

<p>Re-pricing is a separate service with a published evidence list. The EDE card for “Re-Pricing of a Single Medical Product” tells the company to attach a country-of-origin pricing certificate that includes the proposed UAE price, to explain the justifications, and to supply reference prices from Gulf and European countries. The price is determined on the approval of the Drugs Pricing Committee. Fees are AED 1,000 for the re-pricing request and AED 500 for a new pricing certificate (${cite('ede-repricing', 'EDE re-pricing card')}). Two research points sit inside that card. First, the comparator basket the committee is told to look at is Gulf plus Europe, not a global lowest-price screen the company invents. Second, the card still says a “ministerial decision” will then be issued. After 5 January 2026 the public price decisions in this briefing are Chairman-of-the-Board decisions, not ministry decisions (${cite('gulf-news-168', 'Decision 12/2026')}; ${cite('reallaw-49-2025', 'Decision 49/2025')}). A launch file that still addresses the cover letter to the old ministry pricing desk is already out of date.</p>

<p>Chambers also records Cabinet Decision No. 90 of 2021 — the implementing regulation of the 2019 law, still in force to the extent it does not contradict Decree-Law 38/2024 — as providing that prices set by EDE or MOHAP may not be discounted or altered except by EDE or MOHAP themselves (${cite('chambers-2026', 'Chambers')}; ${cite('baker-mckenzie-2025', 'Baker McKenzie on residual 2019 regulations')}). That is why a “discount to win a tender” story is not a UAE private-pharmacy plan. The published lever after the takeover is an EDE pricing decision, not an off-invoice pharmacy cut.</p>

<p>Supply rules now sit in the same statute as the price. Article 22 requires the marketing-right holder to appoint at least two EDE-licensed pharmaceutical establishments as importers, to appoint one or more licensed distributors, to designate one main establishment for licensing, pharmacovigilance and lifecycle management, and to have all designated establishments actually carry out import operations during the calendar year (${cite('faolex-38-2024', 'Article 22')}). Baker McKenzie notes that this continues the two-importer rule introduced by Law No. 11 of 2023 amending the 2019 law (${cite('baker-mckenzie-2025', 'Baker McKenzie')}). WAM’s H1 2026 wrap says that in February EDE approved a mechanism requiring companies to appoint more than one importer for each medical product marketed in the UAE (${cite('wam-h1-2026', 'WAM')}). Marketing approval itself is valid for five years, with the renewal request due 90 days before expiry (${cite('faolex-38-2024', 'Article 7')}). UAE launch research that stops at the price certificate, and never names the two importers or tests whether both imported last year, has not finished the access file.</p>

<h2 id="what-did-decision-12-of-2026-change">What did Decision 12 of 2026 change on the shelf?</h2>

<p>Decision No. (12) of 2026 is the first large, named EDE list-cut a 2026 launch team can put in a slide. Gulf News, updating on 26 May 2026, reported that EDE had reduced the retail prices of 168 pharmaceutical products across the UAE, covering cardiovascular disease, diabetes, hypertension, cancer, thrombosis and stroke, cholesterol disorders, gastrointestinal disease, psychological and neurological disorders, eye disease and asthma, in multiple dosages, and that pharmacies had already begun showing the revised prices. The same report said discounts ranged from approximately 5% to nearly 60% for some high-cost vital and biologic medicines, with Zocor 40 mg about 59.5% and Xalatan about 51.7% (${cite('gulf-news-168', 'Gulf News, 26 May 2026')}).</p>

<p>The published AED pairs in that report are the numbers a launch model can use. They are not a class average.</p>

<ul>
<li><strong>Cholesterol.</strong> Zocor 10 mg, 20 mg and 40 mg were unified at AED 67.50, from AED 83.50, AED 91.50 and AED 166.50 (${cite('gulf-news-168', 'Gulf News')}).</li>
<li><strong>Glaucoma.</strong> Xalatan 0.005% fell from AED 89 to AED 43; GANFORT from AED 114 to AED 99.50; Combigan from AED 94 to AED 78.50 (${cite('gulf-news-168', 'Gulf News')}).</li>
<li><strong>Oncology.</strong> Alunbrig 180 mg from AED 26,433 to AED 21,108; Alunbrig 90 mg from AED 19,824 to AED 12,520; Alunbrig 30 mg from AED 6,608 to AED 4,173; Xeloda 150 mg from AED 347 to AED 241 (${cite('gulf-news-168', 'Gulf News')}).</li>
<li><strong>Heart failure.</strong> Verquvo 2.5 mg from AED 257 to AED 244; Verquvo 10 mg from AED 499.50 to AED 474.50 (${cite('gulf-news-168', 'Gulf News')}).</li>
<li><strong>Type 2 diabetes.</strong> Amaryl 1 mg from AED 25 to AED 19; Amaryl 2 mg from AED 39.50 to AED 32; Amaryl 3 mg from AED 57.50 to AED 47.50 (${cite('gulf-news-168', 'Gulf News')}).</li>
<li><strong>Hypertension.</strong> Renitec 10 mg from AED 64 to AED 48; Renitec 20 mg from AED 83 to AED 62; Aprovel 150 mg from AED 99.50 to AED 63.50; Aprovel 300 mg from AED 117 to AED 85 (${cite('gulf-news-168', 'Gulf News')}).</li>
<li><strong>Anticoagulation.</strong> Pradaxa 110 mg from AED 220 to AED 198; Pradaxa 150 mg from AED 438.50 to AED 394.50 (${cite('gulf-news-168', 'Gulf News')}).</li>
<li><strong>Psychiatry.</strong> Invega 3 mg from AED 449.50 to AED 381.50; Invega 6 mg from AED 562 to AED 381.50; Invega 9 mg from AED 843 to AED 416 (${cite('gulf-news-168', 'Gulf News')}).</li>
<li><strong>Severe eosinophilic asthma.</strong> Nucala 100 mg vial and pre-filled syringe unified at AED 5,142, from AED 6,212.50 (${cite('gulf-news-168', 'Gulf News')}).</li>
</ul>

${figureHtml(UAE_EDE_FIGURES[1])}

<p>Two dates now sit on the same decision, and a launch file should keep both. Gulf News, writing on 26 May 2026, said the decision “will come into effect at the end of the current month (May 30)” and that pharmacies had already reflected the new prices (${cite('gulf-news-168', 'Gulf News')}). A commercial legal-database listing of Decision of the Chairman of the Board No. 12 of 2026 records issuance on 22 April 2026, publication on 30 April 2026 in Official Gazette No. 822, and a date of entry into force of 12 June 2026 (${cite('eastlaws-12-2026', 'Eastlaws listing')}). This briefing has not inspected the Arabic Official Gazette page itself. The research instruction is: do not collapse a press-reported pharmacy date and a Gazette entry-into-force date into one cell. Ask the agency which date it used for “list in force,” and put the other date in the footnote.</p>

<p>Decision 12 is also not the whole 2026 pricing programme. WAM’s official H1 count is 20 pricing decisions, covering adjustments as well as reductions (${cite('wam-h1-2026', 'WAM')}). A forecast that treats the 168-product cut as a one-off event, and does not watch the next Chairman’s pricing table, will be sent back the first time an analog moves again. The therapeutic spread in Decision 12 — diabetes tablets next to a lung-cancer TKI next to an asthma biologic — is the other warning. A chronic-care launch and an oncology launch are now in the same federal list-cut machine. They are not in the same payer committee.</p>

<h2 id="why-a-priced-marketing-authorisation-is-not-access">Why a priced marketing authorisation is not access</h2>

<p>EDE can approve a product quickly and still leave the funding question open. Foundayo is the clean example. WAM reported the 3 April 2026 approval, second-country status, expected May 2026 availability, and a 12.4% mean weight-loss figure at the highest trial dose (${cite('wam-foundayo', 'WAM, 3 April 2026')}). The same release quotes Director-General Dr Fatima Al Kaabi on obesity as an EDE priority because it is associated with more than 200 diseases and at least 13 cancers (${cite('wam-foundayo', 'WAM')}). None of that is a published public price, a Dubai Drug Code, or an insurer prior-authorisation rule. A launch model that converts “second country to approve” into “funded in May” has skipped the research.</p>

${figureHtml(UAE_EDE_FIGURES[3])}

<p>The federal list price is one layer. Emirate payer listing is another. The hospital or insurer wallet is a third. This page does not repeat the DHA / DOH / MOHAP formulary walkthrough — that sits on <a href="/uae-pricing-reimbursement-strategy">UAE pricing and reimbursement strategy</a> and on <a href="/uae-market-access-research">UAE market access research</a>. What the published 2026 record adds is that the first layer has a new owner and a demonstrated willingness to cut 168 SKUs at once.</p>

<p>Insurance remains an emirate statute, not an EDE circular. Dubai Law No. 11 of 2013 makes health insurance mandatory in the emirate, including special development zones and free zones such as DIFC, and requires the entities named in Article 9 to enrol UAE nationals, residents and visitors (${cite('dubai-law-11-2013', 'Law 11/2013')}). Dubai.ae states that employers, including free-zone employers, must cover employees, that sponsors must cover dependents, and that Dubai citizens and government employees are eligible under Enaya (${cite('dubai-ae-insurance', 'Dubai.ae')}). The UNDP / Gulf Health Council NCD investment case describes Abu Dhabi’s Thiqa programme for UAE nationals, Dubai’s Saada programme, and employer-mandated cover for expatriate employees in both emirates (${cite('undp-ncd', 'UNDP NCD investment case')}). A product can have an EDE public price and still sit outside the benefit design of a basic plan. That is a payer-research question, not a pricing-certificate question.</p>

<p>Two published lists now sit beside the EDE price list, and they are not the same list. EDE Chairman Decision No. 47 of 2025, dated 19 June 2025 and signed by Dr Thani Ahmed Al Zeyoudi as Chairman, adopted the UAE National Essential Medicines List (${cite('ede-legislations', 'EDE legislations page')}; ${cite('dha-neml-pdf', 'Decision 47/2025 PDF')}). WHO posted an English 2025 NEML file dated 3 June 2026 (${cite('who-neml-2025', 'WHO')}). In Dubai, General Circular 12/2018 defines the Dubai Drug Code list as every drug registered with DHA Pharmacy Services, with a unique code that already includes pack size and price (${cite('ddc-2018', 'GC 12/2018')}). A molecule can be priced by EDE, coded in DDC, absent from NEML, or the reverse. UAE launch research has to say which list the forecast is using.</p>

<p>The treated population is also not the resident population. FCSC’s 2024 official estimate is 11.29 million residents, up 5.7% from 10.68 million in 2023, with about 200 nationalities (${cite('fcsc-2024', 'FCSC')}). The last official published national diabetes figure is 11.8% of adults 18+ from the 2017–2018 National Health Survey of 10,000 families, down from 18.9% in 2010 (${cite('mohap-nhs', 'MOHAP')}; ${cite('undp-ncd', 'UNDP')}). Decision 12 cut Amaryl 1 mg, 2 mg and 3 mg (${cite('gulf-news-168', 'Gulf News')}). That is not a 2026 treated-diabetes count, and it is not a DPP-4 or SGLT2 share. A diabetes or obesity launch that applies 11.8% to 11.29 million and calls it demand will be sent back. For the therapy-area design, see <a href="/diabetes-market-research-uae">diabetes market research in the UAE</a> and the 2026 context on <a href="/blog/uae-healthcare-market-trends-2026">UAE healthcare market trends 2026</a>.</p>

<h2 id="what-should-uae-launch-research-measure-after-ede">What should UAE launch research measure after EDE?</h2>

<p>Design the study backwards from the decision — a first-price filing, a re-pricing request, a DHA or DOH listing, or a private-insurer prior-authorisation rule — not from a national market-size slide.</p>

${WORKSTREAM_TABLE_HTML}

${figureHtml(UAE_EDE_FIGURES[4])}

<p>The table and the seven-workstream figure are the brief. Two extra research notes sit outside the rows. First, WAM’s note that Novo Nordisk will put a regional distribution centre in the UAE to serve up to 70 countries is a logistics fact, not a substitute for the two named Article 22 importers (${cite('wam-h1-2026', 'WAM')}; ${cite('faolex-38-2024', 'Article 22')}). Second, Foundayo’s second-country approval on 3 April 2026 and May 2026 availability statement are published (${cite('wam-foundayo', 'WAM')}); an oral-GLP-1 file still has to produce a first-price pack, a dual-importer map and plan-specific obesity-cover interviews. It should not invent an EDE public price that is not on a current list. HEOR design for a class-level budget impact sits on <a href="/blog/gcc-pharmacoeconomics">GCC pharmacoeconomics</a> and <a href="/real-world-evidence-gcc">real-world evidence in the GCC</a>.</p>

<h2 id="how-to-commission">How should you commission the study?</h2>

<ul>
<li>How many pricing-committee-adjacent, DHA, DOH and insurer respondents will you recruit, and from which emirates — Dubai, Abu Dhabi and at least one northern emirate?</li>
<li>Will results be reported by public versus private channel, by nationality, and by new versus current treated patients?</li>
<li>Which Decision 12 analogs, and which of the other H1 2026 pricing decisions, sit in the discussion guide?</li>
<li>Will the first-price reconstruction show the country-of-origin certificate, the Gulf/Europe basket, and the Decision 140/2013 path as three workings, not one “UAE price”?</li>
<li>Are questionnaires available in Arabic and English?</li>
<li>Who owns the data, and can it be re-cut after the next Chairman’s pricing table?</li>
</ul>

<p>Desk-research market-size reports remain useful for a first cut of audit context. Grand View Research, IMARC and IQVIA publish UAE pharmaceutical pages that often appear for this query. Use them to triangulate national spend. Do not take them to an EDE pricing committee or a DHA listing meeting as the evidence pack for a first price or a list-cut response.</p>

<p>A physician-survey design that is siblinged to Saudi work should still keep the samples separate — see <a href="/blog/glp-1-physician-survey-saudi-arabia">GLP-1 physician survey methods in Saudi Arabia</a> for the instrument discipline, not for the UAE price. For the vendor comparison, see <a href="/insights/top-healthcare-market-research-companies-uae-2026">top healthcare market research companies in the UAE 2026</a> and <a href="/pharmaceutical-companies-uae">pharmaceutical companies in the UAE</a>.</p>

<h2 id="why-bionixus">Why choose BioNixus for UAE launch research after the EDE takeover?</h2>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians. Custom study pricing is typically $10k–$60k. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London EC1V 2NX and Cairo (Sheikh Zayed, Giza). Dubai, Al Khobar and Salmiya, Kuwait (Olympia Mall) are field offices, and it is in the process of opening a São Paulo office by the end of 2026. LATAM work is covered from the US office with a strong local consultant network.</p>

<p>Choose BioNixus when the decision depends on why EDE, DHA, DOH and insurer medical directors will accept a first price or absorb a list cut, rather than on a syndicated UAE pharmaceutical total. Each study is built around one decision — a pricing certificate, a re-pricing request, a listing or a prior-authorisation rule — and is reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers the agreed scope and timeline, not the accuracy of findings. Where reviews are relevant, BioNixus has 40 client reviews. The written guarantees are: replace non-qualifying respondents at no charge; a minimum sample; re-field at our cost if agreed quotas are missed; and a pilot fee credited to the main field.</p>

<p>See also <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a>, <a href="/uae-pricing-reimbursement-strategy">UAE pricing and reimbursement strategy</a>, <a href="/uae-market-access-research">UAE market access research</a> and the <a href="/insights/top-healthcare-market-research-companies-uae-2026">2026 UAE healthcare market research ranking</a>.</p>

<p>To brief a UAE first-price, re-pricing or post-cut listing study, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const UAE_EDE_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const UAE_EDE_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is UAE drug pricing after the EDE takeover?',
    answer:
      'UAE drug pricing after the EDE takeover is the federal public price the Emirates Drug Establishment now sets for a medicine that has marketing approval, plus the later decisions that can cut that price. MOHAP transferred 44 core services, including individual-product re-pricing and publication of regulated-medicine price lists, to EDE on 5 January 2026. A priced marketing authorisation is not DHA, DOH or insurer listing.',
  },
  {
    question: 'When did the Emirates Drug Establishment take over drug pricing from MOHAP?',
    answer:
      'EDE was established by Federal Decree-Law No. 28 of 2023 (issued 25 September 2023, effective 30 September 2023). Federal Decree-Law No. 38 of 2024, in force on 2 January 2025, gave the EDE Board the power to set the pricing rules. The filing-address change is the 5 January 2026 MOHAP transfer of 44 services, including re-pricing and price-list publication.',
  },
  {
    question: 'What did EDE Decision 12 of 2026 change?',
    answer:
      'Decision No. 12 of 2026 reduced retail prices of 168 pharmaceutical products used for chronic and critical illnesses. Gulf News reported reductions from about 5% to nearly 60%, with Zocor 40 mg about 59.5% and Xalatan about 51.7%, and a pharmacy effective date of 30 May 2026. A legal-database listing of the same decision records Official Gazette publication on 30 April 2026 and entry into force on 12 June 2026. Keep both dates in the file.',
  },
  {
    question: 'Is a UAE EDE price the same as reimbursement?',
    answer:
      'No. Article 20 of Decree-Law 38/2024 requires a specific EDE-set price before marketing. Dubai Law 11 of 2013 and Abu Dhabi’s Thiqa / employer rules still decide who pays. DHA’s Dubai Drug Code and EDE’s 2025 National Essential Medicines List are separate lists. Commission payer interviews; do not treat the federal list price as a listing.',
  },
  {
    question: 'What evidence does EDE ask for to re-price a medicine?',
    answer:
      'The published EDE re-pricing card asks for a country-of-origin pricing certificate that includes the proposed UAE price, written justifications, and reference prices from Gulf and European countries. The Drugs Pricing Committee approves the price. Fees are AED 1,000 for the request and AED 500 for a new pricing certificate. After January 2026 the public decision is an EDE Chairman’s decision, even if older cards still say “ministerial”.',
  },
  {
    question: 'What should UAE launch research measure in 2026?',
    answer:
      'UAE launch research should reconstruct the first-price file, map Decision 12 analogs and later pricing decisions, name the two Article 22 importers, interview DHA, DOH and insurer medical directors separately, measure treated-patient share rather than census prevalence, and test budget impact after a list cut. A syndicated UAE pharmaceutical market-size report does not answer those questions.',
  },
  {
    question: 'Why commission BioNixus for UAE launch research after the EDE takeover?',
    answer:
      'BioNixus runs custom primary research from a Dubai field office, with a network of about 3,200 physicians, and prices typical custom studies at $10k–$60k. The work is designed around one decision — a pricing certificate, a re-pricing request or a listing — and reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers scope and timeline, not findings.',
  },
];

function visibleText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function countWords(htmlOrText: string): number {
  return visibleText(htmlOrText)
    .split(' ')
    .filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

const FAQ_WORD_COUNT = UAE_EDE_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const UAE_EDE_WORD_COUNT =
  countWords(UAE_EDE_EXECUTIVE_SUMMARY_HTML) + countWords(UAE_EDE_BODY_HTML) + FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const UAE_EDE_READING_TIME = Math.ceil(
  (countWords(UAE_EDE_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const UAE_EDE_ORGANIZATION: Record<string, unknown> = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG_NAME,
  url: 'https://www.bionixus.com',
  logo: { '@type': 'ImageObject', url: ORG_LOGO, width: 512, height: 512 },
  foundingDate: '2012',
  description:
    'BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians, with healthcare and pharmaceutical market research across the Middle East and North Africa. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London and Sheikh Zayed, Giza. Field offices are in Dubai, Al Khobar and Salmiya, Kuwait. It is in the process of opening a São Paulo office by the end of 2026.',
  address: GOOGLE_OFFICES.map((office) => ({
    '@type': 'PostalAddress',
    ...office.address,
  })),
  location: GOOGLE_OFFICES.map((office) => ({
    '@type': 'Place',
    '@id': office.schemaId,
    name: office.name,
    description: officeRoleLabel(office),
    address: {
      '@type': 'PostalAddress',
      ...office.address,
    },
  })),
  sameAs: ORG_SAME_AS,
  knowsAbout: [
    'UAE drug pricing',
    'Emirates Drug Establishment',
    'UAE launch research',
    'Pharmaceutical market access',
    'Healthcare market research',
    'Pharmaceutical market research',
    'United Arab Emirates market access',
  ],
};

export type UaeEdeAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveUaeEdeAuthor(name: string | undefined, profileUrl?: string): UaeEdeAuthor {
  if (!name) return {};
  const roster = [...MENA_AUTHORS, ...WESTERN_AUTHORS, ALSAADANY_AUTHOR].find((author) => author.name === name);
  const person = roster
    ? personAuthorJsonLd(roster)
    : withAlsaadanyPersonJsonLd({
        '@type': 'Person',
        name,
        worksFor: { '@type': 'Organization', '@id': ORG_ID, name: ORG_NAME },
      });
  return {
    authorName: name,
    authorTitle: roster?.jobTitle,
    authorLinkedIn: profileUrl,
    schema: { ...person, ...(profileUrl ? { url: profileUrl, sameAs: [profileUrl] } : {}) },
  };
}

const AUTHOR = resolveUaeEdeAuthor(UAE_EDE_AUTHOR_NAME, UAE_EDE_AUTHOR_PROFILE_URL);

export const UAE_EDE_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-uae-drug-pricing-ede-takeover-launch-research',
  slug: UAE_EDE_SLUG,
  title: UAE_EDE_DISPLAY_TITLE,
  excerpt: UAE_EDE_EXCERPT,
  date: '16 Oct 2026',
  category: UAE_EDE_CATEGORY,
  country: 'United Arab Emirates',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: UAE_EDE_READING_TIME,
  wordCount: UAE_EDE_WORD_COUNT,
  breadcrumbLabel: UAE_EDE_BREADCRUMB_LABEL,
  displaySubtitle: UAE_EDE_DISPLAY_SUBTITLE,
  tags: [...UAE_EDE_TAGS],
  coverImage: UAE_EDE_HERO_IMAGE,
  coverImageAlt: UAE_EDE_HERO_IMAGE_ALT,
  ogImage: UAE_EDE_COVER_IMAGE,
  ogImageAlt: UAE_EDE_COVER_IMAGE_ALT,
  ogTitle: UAE_EDE_META_TITLE,
  ogDescription: UAE_EDE_META_DESCRIPTION,
  seoMetaTitle: UAE_EDE_META_TITLE,
  seoMetaDescription: UAE_EDE_META_DESCRIPTION,
  seoCanonicalUrl: UAE_EDE_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: UAE_EDE_PUBLISHED_ISO,
  updatedAtIso: UAE_EDE_UPDATED_ISO,
  tableOfContents: UAE_EDE_TABLE_OF_CONTENTS,
  executiveSummary: UAE_EDE_EXECUTIVE_SUMMARY_HTML,
  faq: [...UAE_EDE_FAQ],
  ctaSection: {
    title: 'Planning first-price or post-cut listing research in the UAE?',
    description:
      'Tell us the decision you need to make. BioNixus scopes EDE pricing, physician and payer research around it, from a Dubai field office and a network of about 3,200 physicians.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: UAE_EDE_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'Organization', name: 'Emirates Drug Establishment' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Thing', name: 'Pharmaceutical pricing' },
    ],
    itemList: {
      name: 'What UAE launch research should measure after the EDE takeover',
      description:
        'Seven workstreams for a UAE first-price, re-pricing or post-cut listing brief.',
      items: UAE_EDE_WORKSTREAMS.map(({ name, description }) => ({ name, description })),
    },
    contentImages: UAE_EDE_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: UAE_EDE_BODY_HTML,
};
