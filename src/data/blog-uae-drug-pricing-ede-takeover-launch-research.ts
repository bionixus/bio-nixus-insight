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
      'Keep the legal dates apart: Decree-Law 28 of 2023, Decree-Law 38 of 2024 in force on 2 January 2025, and the transfer of 44 services on 5 January 2026. Decision 12 of 2026 has its own press date and its own Gazette dates.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/uae-drug-pricing-ede-takeover-launch-research-cuts.webp',
    alt: 'Illustration that Gulf News reported different percentage cuts on a 168-medicine list',
    caption:
      'Gulf News, last updated 26 May 2026, reported cuts of about 5–60 percent, including about 59.5 percent for Zocor 40 mg and about 51.7 percent for Xalatan. Those figures are the newspaper’s. This page has not inspected the Arabic Gazette.',
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
  'A new regulator does not collapse four dates into one';

export const UAE_EDE_DISPLAY_SUBTITLE =
  'UAE drug pricing after the Emirates Drug Establishment change';

export const UAE_EDE_BREADCRUMB_LABEL = 'UAE drug pricing after EDE';

export const UAE_EDE_EXCERPT =
  'A plain guide to who now sets a UAE medicine price, which 2026 dates must stay apart, and what a launch study still has to ask.';

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
  { heading: 'Who the Establishment is', anchor: 'who-ede-is' },
  { heading: 'What moved in January 2026', anchor: 'what-moved' },
  { heading: 'Four dates for one price list', anchor: 'four-dates' },
  { heading: 'How a single price is filed', anchor: 'how-a-price-is-filed' },
  { heading: 'A price is not a paid prescription', anchor: 'not-a-prescription' },
  { heading: 'Questions to put in the brief', anchor: 'questions' },
  { heading: 'How to brief BioNixus', anchor: 'how-to-brief' },
  { heading: 'References', anchor: 'references' },
];

export const UAE_EDE_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> UAE drug pricing is now a job of the Emirates Drug Establishment, the federal body that took over medicine regulation. A launch file has to keep the legal dates, the press dates and the Gazette dates apart. This briefing has not read the Arabic Gazette text of the 2026 price decision.</p>`;

const NARRATIVE_HTML = `<p>UAE drug pricing is a federal rule plus an emirate decision about who pays. This page sits on the <a href="/healthcare-market-research">healthcare market research</a> hub and next to the <a href="/uae-pricing-reimbursement-strategy">UAE pricing and reimbursement</a> guide. UAE launch research asks what price the Establishment set, and then whether a named payer will fund the pack. Those are two questions.</p>

<h2 id="who-ede-is">Who the Establishment is</h2>
<p>The Emirates Drug Establishment is the federal body for medicines. People also call it the UAE Drug Corporation. Federal Decree-Law No. 28 of 2023 set it up. The law was issued on 25 September 2023, published in Official Gazette No. 760 on 29 September 2023, and took effect on 30 September 2023 (${cite('uae-leg-28-2023', 'UAE Legislation')}). A Lexis Middle East note of the same decree records the Hijri date and says the decree considered Federal Law No. 8 of 2019 on medical products and the pharmacy profession (${cite('lexis-28-2023', 'Lexis Middle East')}). The Establishment’s own site says it was founded on 29 September. Its published contacts are the toll-free number <a href="tel:80033784">800 33784</a> and <a href="mailto:info@ede.gov.ae">info@ede.gov.ae</a>. The legal dates still come from the legislation portal, not from that search line (${cite('ede-gov', 'Emirates Drug Establishment portal')}).</p>
<p>Federal Decree-Law No. 38 of 2024 now governs medical products, pharmacists and pharmaceutical establishments. It was issued on 1 October 2024 and took effect on 2 January 2025 (${cite('uae-leg-38-2024', 'UAE Legislation, Decree-Law 38 of 2024')}). The English text on FAOLEX is the place to read the duties. Article 20 is about Board pricing rules. Article 22 requires at least two licensed importers. Article 7 gives a marketing approval of five years and says renewal is filed 90 days before expiry. Article 36 names a Pharmaceutical Policy Committee (${cite('faolex-38-2024', 'FAOLEX English text')}). Marketing approval means the product may be sold. It is not a promise that an insurer will pay.</p>
<p>Baker McKenzie, writing on 14 January 2025, said the law was in force on 2 January 2025, with a one-year grace period, and that it was written to help the Establishment take responsibilities from the Ministry of Health and Prevention (${cite('baker-mckenzie-2025', 'Baker McKenzie, 14 January 2025')}). That sentence is the law firm’s description of the grace period. It is not a later status report.</p>
${figureHtml(UAE_EDE_FIGURES[0])}

<h2 id="what-moved">What moved in January 2026</h2>
<p>On 5 January 2026 the ministry said it had fully transferred 44 core services to the Establishment. The list includes re-pricing of an individual product and publication of regulated-medicine price lists (${cite('mohap-44-2026', 'Ministry of Health and Prevention, 5 January 2026')}). The service-list page tells applicants to file transferred-category applications on the Establishment’s portal (${cite('mohap-mte', 'ministry service list')}).</p>
<p>Do not turn “44 services” into “every health service”. EnterpriseAM, on 6 January 2026, reported that some services were only partly transferred. It described facility licensing, advertising and emergency-drug approval as co-managed, and said narcotics and high-sensitivity controlled substances stayed with the ministry (${cite('enterprise-am-2026', 'EnterpriseAM, 6 January 2026')}). NAVLIN Daily, on 12 January 2026, summarised the same shift, including re-pricing, manufacturer registration, export certificates and drug quality control. It reported that the ministry keeps five areas, including prescription books for controlled medicine and narcotics approval for private hospitals (${cite('navlin-2026', 'NAVLIN, 12 January 2026')}). Quote each report for what it actually lists. Do not merge them into one unofficial leftover list.</p>
${figureHtml(UAE_EDE_FIGURES[2])}
<p>On 22 September 2026 the Emirates News Agency published the Establishment’s record to 30 June 2026. The figures are 2,030 inspection visits, 828 non-compliant advertisements, 20 pricing decisions, and 942 product approvals. Of those approvals, 420 were conventional or biological products, including 63 innovator products, and 247 were UAE-made. The same release records a February multi-importer mechanism and names Foundayo, Inpefa, Baxfendy and EURneffy (${cite('wam-h1-2026', 'Emirates News Agency, 22 September 2026')}). Twenty pricing decisions is a count of decisions. It is not a count of patients.</p>
<p>A separate release, on 3 April 2026, said the Establishment had approved Foundayo (orforglipron), an oral GLP-1 receptor agonist for chronic weight management, and that the UAE was the second country to register it. GLP-1 here means a medicine that acts on a gut-hormone receptor. The release said availability was expected from May 2026. That expectation belongs to the April release. This page does not report later sales. Director-General Dr Fatima Al Kaabi is quoted on obesity as a priority associated with more than 200 diseases and at least 13 cancers. The release states that people on the highest dose in the trials recorded an average weight loss of 12.4 percent (${cite('wam-foundayo', 'Emirates News Agency, 3 April 2026')}). That 12.4 percent is the release’s statement about the trial dose. It is not a UAE pharmacy audit, and it is not a result for the other products named in the half-year note.</p>

<h2 id="four-dates">Four dates for one price list</h2>
<p>Gulf News, in an article last updated on 26 May 2026, reported Emirates Drug Establishment Decision No. 12 of 2026. It reported a pharmacy date of 30 May 2026, cuts of about 5 to 60 percent, and examples of about 59.5 percent for Zocor 40 mg and about 51.7 percent for Xalatan. The newspaper is also the source of the dirham pairs quoted around that decision (${cite('gulf-news-168', 'Gulf News, 26 May 2026')}). Treat those percentages as the newspaper’s account. Do not average them into one national cut.</p>
${figureHtml(UAE_EDE_FIGURES[1])}
<p>An Eastlaws listing of Decision No. 12 of 2026 gives different dates. It lists issuance on 22 April 2026, publication on 30 April 2026 in Official Gazette No. 822, and entry into force on 12 June 2026. This briefing has not inspected the Arabic Official Gazette page. The Eastlaws listing is cited for the Gazette metadata. It is not a substitute for the Arabic Official Gazette text (${cite('eastlaws-12-2026', 'Eastlaws listing')}). The 30 May pharmacy date in Gulf News and the 12 June in-force date on the listing are not the same sentence. Keep them apart. Do not describe either date as still ahead. Both dates are earlier than October 2026.</p>

<h2 id="how-a-price-is-filed">How a single price is filed</h2>
<p>The Establishment’s service card for re-pricing one medical product asks for a country-of-origin pricing certificate, justifications, and Gulf plus European reference prices. The Drugs Pricing Committee approves the file. The published fees are AED 1,000 plus AED 500 for a new certificate (${cite('ede-repricing', 're-pricing service card')}). A fee is the cost of the application. It is not the future list price.</p>
<p>Chambers, in its 2026 life-sciences comparison, says the Establishment controls pharmaceutical and medical-device prices, and that Cabinet Decision 90 of 2021 bars unauthorised discounts. It recites Decision 140 of 2013 on CIF mark-ups in US dollars: 15 percent at the pharmacy step, then a sale mark-up of 28, 24 or 20 percent depending on the import-price band (${cite('chambers-2026', 'Chambers, Life Sciences 2026')}). CIF means the import price including cost, insurance and freight. A 2025 decision on the pricing of certain products, listed by realLaw, still cites Ministerial Decision 140 of 2013 in its recital, along with Decree-Laws 28 of 2023 and 38 of 2024 (${cite('reallaw-49-2025', 'Decision 49 of 2025 listing')}). The recital shows that the 2013 instrument was still being cited in 2025. It does not reprint the 2013 table.</p>
<p>The National’s contemporary report of the 2013 change said retail prices of more than 6,600 medicines would be cut by up to 40 percent, under a system that put imported medicines on a US-dollar cost and reduced agent and pharmacy margins (${cite('national-2013', 'The National, 2013 coverage')}). That is a 2013 news report. It is not Decision 12 of 2026.</p>
<p>The Establishment’s legislations page lists Decree-Law 28 of 2023 and Chairman Decision No. 47 of 2025, which adopted the National Essential Medicines List and was published on Thursday 19 June 2025 (${cite('ede-legislations', 'Establishment legislations page')}). A Dubai Health Authority copy of that decision is signed by Dr Thani Ahmed Al Zeyoudi and dated 19 June 2025, with the 2025 list attached (${cite('dha-neml-pdf', 'Dubai Health Authority copy')}). The World Health Organization’s English copy of the same national list is dated 3 June 2026 in its repository (${cite('who-neml-2025', 'World Health Organization repository')}). Being on an essential list is not the same fact as a 2026 percentage cut.</p>

<h2 id="not-a-prescription">A price is not a paid prescription</h2>
<p>The country is large enough that a national price is still not a local prescription. The statistics centre’s December 2025 file puts the 2024 population at about 11.29 million, up 5.7 percent from 10.68 million in 2023, with about 200 nationalities (${cite('fcsc-2024', 'Federal Competitiveness and Statistics Centre')}). The ministry’s National Health Survey, which started in October 2017 and covered 10,000 families with a 94 percent response, found diabetes in 11.8 percent of adults over 18, down from 18.9 percent in 2010. Diabetes there means high blood glucose or taking diabetes medication on the survey day. The ministry’s note is the last official STEPS-style national figure cited here. It is not a 2026 prevalence, and it is not the volume of any priced brand (${cite('mohap-nhs', 'National Health Survey')}).</p>
<p>A United Nations Development Programme investment case repeats the 11.8 percent figure. It describes Abu Dhabi’s Thiqa programme for UAE nationals and Dubai’s Saada programme, and it says employers in both emirates must cover employees, with national rules also requiring cover for expatriate workers and their dependents (${cite('undp-ncd', 'UNDP investment case')}). Thiqa is Abu Dhabi’s government scheme for nationals. Saada is the Dubai programme named in that case. Neither programme is the Establishment’s price list.</p>
${figureHtml(UAE_EDE_FIGURES[3])}
<p>Dubai has its own insurance law. Law No. 11 of 2013 covers the emirate, including special development zones and free zones such as the Dubai International Financial Centre. Article 9’s entities must enrol nationals, residents and visitors as the law requires (${cite('dubai-law-11-2013', 'Dubai Law 11 of 2013')}). The dubai.ae page says that cover is mandatory, that employers including free zones must insure employees, that sponsors must cover dependents, and that Dubai citizens and government employees are eligible under Enaya (${cite('dubai-ae-insurance', 'dubai.ae')}). Enaya is that government scheme. It is not a federal price.</p>
<p>Inside Dubai claims, the Dubai Drug Code is the list of drugs registered with the pharmacy department. A 2018 circular defines it as a comprehensive list. Each registered drug gets a code that includes route, dosage, form, pack size, price, manufacturer, registered owner and source (${cite('ddc-2018', 'General Circular 12 of 2018')}). A code is how a claim names a pack. It is not proof that Decision 12 changed that pack.</p>
${figureHtml(UAE_EDE_FIGURES[4])}
<p>${cite('grand-view', 'Grand View Research')}, ${cite('imarc', 'IMARC')} and ${cite('iqvia', 'IQVIA')} publish UAE market outlooks or audit commentary. Use them as category context. They do not replace the pricing-committee file or a payer interview.</p>

<h2 id="questions">Questions to put in the brief</h2>
<p>Write the decision in one line. It might be the first price of a named pack, or what happens to prescribing after a named cut.</p>
<ul>
<li><strong>Which date.</strong> Issuance on 22 April 2026, Gazette publication on 30 April 2026, the press pharmacy date of 30 May 2026, and the listed in-force date of 12 June 2026 stay in separate cells.</li>
<li><strong>Which text.</strong> Gulf News percentages stay labelled as Gulf News. This briefing has not inspected the Arabic Official Gazette page.</li>
<li><strong>Which service.</strong> Re-pricing moved on 5 January 2026. EnterpriseAM and NAVLIN both say some controlled-medicine work stayed with the ministry. Quote the report you are using.</li>
<li><strong>Which payer.</strong> A Board price, a Thiqa or Saada benefit, and a Dubai Drug Code are three records.</li>
<li><strong>Which number you will not call demand.</strong> Population, the 11.8 percent diabetes survey, 942 approvals and 20 pricing decisions are not prescription counts.</li>
</ul>
<p>Report the result as a share of the patients the study defined, at named sites. Ask for Arabic and English instruments. Ask the agency to attach the clause or the news paragraph it is using.</p>

<h2 id="how-to-brief">How to brief BioNixus</h2>
<p>BioNixus is a primary market research firm for pharmaceutical, medical device and healthcare companies. It was founded in 2012. Custom studies are usually priced at $10k–$60k. The firm has 40 client reviews on its public profiles. The line “Guaranteed in writing” covers the agreed scope and timeline. It does not cover what the interviews will find.</p>
<p>Leadership offices are in Sheridan, Wyoming, London, and Sheikh Zayed, Giza. Field offices are in Dubai, Al Khobar, and Salmiya, Kuwait. São Paulo is a field office for LATAM.</p>
<p>To brief a pricing study, use the <a href="/contact">contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>. Name the pack, the date you are treating as the price event, and the payer.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const UAE_EDE_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const UAE_EDE_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is UAE drug pricing after the EDE takeover?',
    answer:
      'It is the set of rules for a medicine’s price after the Emirates Drug Establishment took on pricing work from the Ministry of Health and Prevention. The Establishment was created by Decree-Law 28 of 2023. Decree-Law 38 of 2024, in force on 2 January 2025, gives the Board a pricing role. A federal price is not an insurer’s decision to pay.',
  },
  {
    question: 'When did the ministry transfer pricing services?',
    answer:
      'On 5 January 2026 the ministry said 44 core services had moved, including individual-product re-pricing and price-list publication. Later news reports said some controlled-medicine work stayed with the ministry. Quote the report rather than treating 44 as every service.',
  },
  {
    question: 'What did Decision 12 of 2026 change?',
    answer:
      'Gulf News, last updated 26 May 2026, reported a 168-medicine cut of about 5 to 60 percent, a pharmacy date of 30 May 2026, and examples of about 59.5 percent for Zocor 40 mg and about 51.7 percent for Xalatan. An Eastlaws listing gives issuance on 22 April 2026, Gazette No. 822 on 30 April 2026, and in-force on 12 June 2026. This briefing has not inspected the Arabic Official Gazette page.',
  },
  {
    question: 'Does a marketing approval set the reimbursed price?',
    answer:
      'No. Article 7 of Decree-Law 38 of 2024 is about a five-year marketing approval. Article 20 is about Board pricing. Dubai insurance and the Dubai Drug Code are further records. Approval, list price and a paid claim are three steps.',
  },
  {
    question: 'What does the re-pricing service ask for?',
    answer:
      'The Establishment’s service card asks for a country-of-origin certificate, justifications, and Gulf and European reference prices. The published fees are AED 1,000 plus AED 500 for a new certificate. The fee is not the list price.',
  },
  {
    question: 'Is the 11.8 percent diabetes figure current demand?',
    answer:
      'No. It is the National Health Survey result for adults over 18 in a survey that started in 2017: 11.8 percent, down from 18.9 percent in 2010. It is not a 2026 treated share and it is not the volume of a priced brand.',
  },
  {
    question: 'What does a BioNixus study cost, and what is guaranteed?',
    answer:
      'Custom studies are usually $10k–$60k. Guaranteed in writing covers the agreed scope and timeline. It does not cover what the interviews will find. The firm has 40 client reviews on its public profiles.',
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
    'BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of 82,000+ physicians globally and about 3,200 physicians in the Middle East, with healthcare and pharmaceutical market research across the Middle East and North Africa. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London and Sheikh Zayed, Giza. Field offices are in Dubai, Al Khobar and Salmiya, Kuwait. São Paulo is a field office for LATAM.',
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
      'Tell us the pricing decision you need to make. BioNixus scopes the study around that decision. Custom work is usually $10k–$60k.',
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
