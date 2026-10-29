/**
 * Hardcoded SEO blog post: /blog/diabetes-market-research-uae-2026-price-cuts
 * Research-led article for "diabetes market research UAE"
 * after EDE Decision 12 of 2026.
 * Links /blog/uae-drug-pricing-ede-takeover-launch-research and
 * /blog/oral-glp-1-uae-market-research once each.
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

export const DIABETES_UAE_CUTS_SLUG = 'diabetes-market-research-uae-2026-price-cuts';

export const DIABETES_UAE_CUTS_PATH = `/blog/${DIABETES_UAE_CUTS_SLUG}`;

export const DIABETES_UAE_CUTS_URL = `https://www.bionixus.com${DIABETES_UAE_CUTS_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Martha DeVito is the assigned Global Research Manager for this article.
 */
export const DIABETES_UAE_CUTS_AUTHOR_NAME: string | undefined = 'Martha DeVito';

export const DIABETES_UAE_CUTS_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const DIABETES_UAE_CUTS_COVER_IMAGE =
  '/images/blog/diabetes-market-research-uae-2026-price-cuts-cover.jpg';

export const DIABETES_UAE_CUTS_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover for diabetes market research UAE after the 2026 EDE price cuts';

export const DIABETES_UAE_CUTS_HERO_IMAGE =
  '/images/blog/diabetes-market-research-uae-2026-price-cuts-hero.jpg';

export const DIABETES_UAE_CUTS_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for diabetes market research in the UAE after the 2026 list-price cuts';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const DIABETES_UAE_CUTS_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/diabetes-market-research-uae-2026-price-cuts-timeline.webp',
    alt: 'Timeline of Emirates Drug Establishment dates a UAE diabetes brief must keep separate in 2026',
    caption:
      'Dates a diabetes market research UAE file must split: Decree-Law 28/2023, Decree-Law 38/2024 in force 2 January 2025, MOHAP’s 44-service transfer on 5 January 2026, and Decision 12/2026.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/diabetes-market-research-uae-2026-price-cuts-amaryl.webp',
    alt: 'Illustration that Gulf News published separate examples from the 2026 price list, including Amaryl',
    caption:
      'Gulf News, 26 May 2026, is the source for dirham pairs on Amaryl 1 mg, 2 mg and 3 mg, and for cuts of about 59.5 percent on Zocor 40 mg and about 51.7 percent on Xalatan. Do not turn those examples into one diabetes-class cut.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/diabetes-market-research-uae-2026-price-cuts-prevalence.webp',
    alt: 'Comparison of published UAE diabetes prevalence methods that a launch model must not average',
    caption:
      'Four methods, not one count: IDF 20.7% (20–79, 2024); MOHAP NHS 11.8% (adults 18+, 2017–18); NHNS 12.5% elevated glucose (2024–25); Dubai 2019 19.3% Emirati versus 12.4% expatriate.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/diabetes-market-research-uae-2026-price-cuts-layers.webp',
    alt: 'Three UAE diabetes access layers after the 2026 list cut: federal price, emirate listing and wallet',
    caption:
      'Three layers after Decision 12: the federal list price EDE now sets; DHA, DOH and insurer listing, including Thiqa enrolment; and the wallet that funds the script.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/diabetes-market-research-uae-2026-price-cuts-brief.webp',
    alt: 'Checklist of seven diabetes market research UAE workstreams after the 2026 price cuts',
    caption:
      'Seven diabetes market research UAE workstreams after Decision 12: analog map, treated share, switching, pharmacy, payer listing, budget impact, and oral GLP-1 as a separate brief.',
    width: 800,
    height: 760,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const DIABETES_UAE_CUTS_META_TITLE = 'Diabetes Market Research UAE After 2026 Price Cuts';

export const DIABETES_UAE_CUTS_META_DESCRIPTION =
  'Diabetes market research UAE after the 2026 EDE list cuts: what brand teams should commission on price, switching, pharmacy behaviour and payer listing.';

export const DIABETES_UAE_CUTS_DISPLAY_TITLE =
  'A list-price cut is not a change in prescriptions';

export const DIABETES_UAE_CUTS_DISPLAY_SUBTITLE =
  'Diabetes market research UAE after the 2026 price cuts';

export const DIABETES_UAE_CUTS_BREADCRUMB_LABEL = 'UAE diabetes after 2026 price cuts';

export const DIABETES_UAE_CUTS_EXCERPT =
  'A plain guide to the 2026 UAE list-price news, the diabetes figures that must not be averaged, and the questions a study still has to ask.';

export const DIABETES_UAE_CUTS_PUBLISHED_ISO = '2026-10-17T12:00:00.000Z';
export const DIABETES_UAE_CUTS_UPDATED_ISO = '2026-10-17T12:00:00.000Z';

export const DIABETES_UAE_CUTS_CATEGORY = 'Market Research';

export const DIABETES_UAE_CUTS_TAGS = [
  'Diabetes Market Research UAE',
  'Emirates Drug Establishment',
  'UAE Drug Pricing',
  'Type 2 Diabetes',
  'Market Access',
  'Primary Research',
  'United Arab Emirates',
  'Pharmaceutical Pricing',
];

const ACCESSED = 'accessed 17 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'gulf-news-168',
    label:
      'Gulf News (Abdulla Rasheed). UAE cuts prices of 168 medicines for chronic diseases by up to 60 per cent. 26 May 2026. Decision 12/2026; Amaryl 1/2/3 mg AED pairs; Zocor ~59.5%; Xalatan ~51.7%.',
    url: 'https://gulfnews.com/uae/health/uae-cuts-prices-of-168-medicines-for-chronic-diseases-by-up-to-60-per-cent-1.500553642',
  },
  {
    id: 'eastlaws-12-2026',
    label:
      'Eastlaws. Decision of the Chairman of the Board of the Emirates Drug Establishment No. 12 | 2026. Issued 22 April 2026; Official Gazette No. 822, 30 April 2026; in force 12 June 2026.',
    url: 'https://www.eastlaws.com/legislation-full-text/en/uae/30-04-2026/no-12?id=5638582&type=1',
  },
  {
    id: 'mohap-44-2026',
    label:
      'MOHAP. Ministry of Health and Prevention transfer key services to Emirates Drug Establishment. 5 January 2026. 44 core services, including individual-product re-pricing and price-list publication.',
    url: 'https://mohap.gov.ae/en/w/ministry-of-health-and-prevention-transfer-key-services-to-emirates-drug-establishment',
  },
  {
    id: 'mohap-mte',
    label:
      'MOHAP. Transfer of services to the Emirates Drug Establishment (service list). Directs transferred-category applications to the EDE portal.',
    url: 'https://mohap.gov.ae/en/mte',
  },
  {
    id: 'uae-leg-28-2023',
    label:
      'UAE Legislation. Federal Decree-Law No. 28 of 2023 on the UAE Drug Corporation. Issued 25 September 2023; Gazette 29 September 2023, No. 760; effective 30 September 2023.',
    url: 'https://uaelegislation.gov.ae/en/legislations/2122',
  },
  {
    id: 'lexis-28-2023',
    label:
      'Lexis Middle East. Federal Decree-Law No. 28/2023 On the Establishment of the UAE Drug Corporation. Issued 25 September 2023.',
    url: 'https://www.lexismiddleeast.com/law/UnitedArabEmirates/DecreeLaw_28_2023/en',
  },
  {
    id: 'uae-leg-38-2024',
    label:
      'UAE Legislation. Federal Decree-Law No. 38 of 2024 Governing Medical Products, Pharmacists and Pharmaceutical Establishments. Issued 1 October 2024; effective 2 January 2025.',
    url: 'https://uaelegislation.gov.ae/en/legislations/2751',
  },
  {
    id: 'faolex-38-2024',
    label:
      'FAOLEX English text. Federal Decree-Law No. (38) of 2024. Article 20 (Board pricing); Article 22 (at least two licensed importers); Article 7 (five-year marketing approval).',
    url: 'https://faolex.fao.org/docs/pdf/uae240011E.pdf',
  },
  {
    id: 'baker-mckenzie-2025',
    label:
      'Baker McKenzie. UAE: Enacts New Medical Products Law. 14 January 2025. In force 2 January 2025, with a one-year grace period, to facilitate EDE’s take-over from MOHAP.',
    url: 'https://healthcarelifesciences.bakermckenzie.com/2025/01/14/uae-enacts-new-pharma-law-to-boost-pharmaceutical-innovation/',
  },
  {
    id: 'wam-h1-2026',
    label:
      'WAM. Emirates Drug Establishment boosts pharmaceutical readiness in H1 2026. 22 September 2026. To 30 June: 2,030 visits; 20 pricing decisions; 942 approvals. Names Foundayo and Inpefa.',
    url: 'https://www.wam.ae/en/article/17ft72p-emirates-drug-establishment-boosts-pharmaceutical',
  },
  {
    id: 'wam-foundayo',
    label:
      'WAM. Emirates Drug Establishment approves new oral obesity treatment. 3 April 2026. Foundayo (orforglipron) for chronic weight management; expected availability from May 2026; 12.4% mean trial weight loss.',
    url: 'https://www.wam.ae/en/article/bzj40cj-emirates-drug-establishment-approves-oral-obesity',
  },
  {
    id: 'ede-repricing',
    label:
      'Emirates Drug Establishment. Re-Pricing of a Single Medical Product. Country-of-origin certificate, justifications, Gulf plus European references; AED 1,000 plus AED 500 for a new certificate.',
    url: 'https://ede.gov.ae/documents/61005/62137/Re-Pricing+of+a+Medicine+-+Re-Pricing+of+a+Single+Medical+Product/588a7982-adb3-bdaf-2b58-55d88e473d11?t=1727317729860',
  },
  {
    id: 'ede-legislations',
    label:
      'Emirates Drug Establishment. Legislations. Decree-Law 28/2023 (25 September 2023) and Chairman Decision 47/2025 adopting the NEML (19 June 2025).',
    url: 'https://www.ede.gov.ae/legislations',
  },
  {
    id: 'chambers-2026',
    label:
      'Chambers, Life Sciences 2026 (UAE). EDE sets prices; Cabinet Decision 90/2021 bars unauthorised discounts; Decision 140/2013 CIF mark-ups +15% then +28/24/20%.',
    url: 'https://practiceguides.chambers.com/practice-guides/comparison/1070/18741/29423-29427-29434-29442-29445-29447-29450-29456',
  },
  {
    id: 'reallaw-49-2025',
    label:
      'realLaw AI. EDE Chairman Decision No. 49 of 2025 on pricing of certain medical products. Recital still cites Ministerial Decision 140/2013.',
    url: 'https://app.reallaw.ai/en/legal-table/doc/decision-of-the-chairman-of-the-board-of-directors-of-the-emirates-drug-2557',
  },
  {
    id: 'fda-amaryl',
    label:
      'U.S. FDA. AMARYL (glimepiride) tablets prescribing information. Identifies Amaryl as originator glimepiride; not a UAE label or price.',
    url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/020496s029lbl.pdf',
  },
  {
    id: 'idf-atlas-uae',
    label:
      'IDF Diabetes Atlas, 11th edition, United Arab Emirates. 2024 adults 20–79: 1,274.2 thousand; age-standardised prevalence 20.7%; undiagnosed 64.0%. 2011: 768.0 thousand / 18.8%. 2050: 1,876.5 thousand / 22.7%.',
    url: 'https://diabetesatlas.org/data-by-location/country/united-arab-emirates/',
  },
  {
    id: 'mohap-nhs',
    label:
      'MOHAP. National Health Survey results. 2017–2018; 10,000 families, 94% response. Diabetes among adults 18+ (high glucose or diabetes medication) 11.8%, from 18.9% in 2010.',
    url: 'https://mohap.gov.ae/en/w/national-health-survey-results-officially-announced',
  },
  {
    id: 'mohap-nhns-2025',
    label:
      'MOHAP. National Health and Nutrition Survey 2024–2025, adults 18+: obesity 22.4%; high blood pressure 25.9%; elevated blood glucose 12.5%; high cholesterol 54.2%.',
    url: 'https://mohap.gov.ae/en/w/mohap-publishes-landmark-national-health-survey-showing-population-health-progress-and-guiding-stronger-preventive-care',
  },
  {
    id: 'gulf-news-nhns-2026',
    label:
      'Gulf News (Huda Ata). High cholesterol affects more than half of UAE adults. 17 October 2026. NHNS 2024–2025 (9,997 households): 12.5% elevated glucose; 18.3% never tested; 90.4% of diagnosed taking medication; private OP 67.8%.',
    url: 'https://gulfnews.com/uae/health/high-cholesterol-affects-more-than-half-of-uae-adults-1.500713997',
  },
  {
    id: 'alawadi-2017',
    label:
      'Alawadi F, et al. Dubai Household Health Surveys 2014 and 2017. Dubai Diabetes Endocrinol J. 2020;26(2):78–86. Diabetes 19% nationals, 14.7% expatriates, 15.2% overall (HbA1c).',
    url: 'https://karger.com/dde/article/26/2/78/93526/The-Prevalence-of-Diabetes-and-Pre-Diabetes-among',
  },
  {
    id: 'alawadi-2019',
    label:
      'Al Awadi F, et al. Dubai Household Survey 2019. Dubai Diabetes Endocrinol J. 2020;26(4):164–173. 9,630 adults: total diabetes 13.7%; Emirati 19.3% versus expatriate 12.4%.',
    url: 'https://karger.com/dde/article/26/4/164/93661/Prevalence-of-Diabetes-and-Associated-Health-Risk',
  },
  {
    id: 'fcsc-2024',
    label:
      'FCSC. Unified UAE Numbers (English), December 2025. Population about 11.29 million in 2024, up 5.7% from 10.68 million in 2023.',
    url: 'https://fcsc.gov.ae/wp-content/uploads/2025/12/UAE-Unified-Numbers-En.pdf',
  },
  {
    id: 'doh-188-2025',
    label:
      'Department of Health — Abu Dhabi. Circular 188/2025, Diabetes Disease Management Program. Thiqa adults 18+ with two diabetes outpatient visits and HbA1c ≥6.5%; 12-month coordinated care.',
    url: 'https://www.doh.gov.ae/-/media/Feature/Resources/Circulars/2025/188--2025.ashx',
  },
  {
    id: 'dha-t2dm-2024',
    label:
      'Dubai Health Authority. Clinical Guidelines for Virtual Management of Type 2 Diabetes Mellitus, DHA/HRS/HPSD/CG-41 Issue 2. 21 February 2024; effective 21 April 2024.',
    url: 'https://www.dha.gov.ae/uploads/032024/30%20-%20DHA%20Telehealth%20Clinical%20Guidelines%20for%20Virtual%20Management%20of%20Type%202%20Diabetes2024322535.pdf',
  },
  {
    id: 'dubai-law-11-2013',
    label:
      'Government of Dubai. Law No. (11) of 2013 Concerning Health Insurance in the Emirate of Dubai, including special development zones and DIFC.',
    url: 'https://dlp.dubai.gov.ae/Legislation%20Reference/2013/Law%20No.%20%2811%29%20of%202013.html',
  },
  {
    id: 'dubai-ae-insurance',
    label:
      'Dubai.ae. Health Insurance. Law 11/2013 makes cover mandatory; Dubai employers, including free zones, must insure employees; sponsors cover dependents.',
    url: 'https://www.dubai.ae/living/healthcare/health-insurance',
  },
  {
    id: 'undp-ncd',
    label:
      'UNDP / Gulf Health Council. UAE NCD investment case. 2017–2018 STEPS diabetes 11.8% (adults 18+); Thiqa (Abu Dhabi nationals); Saada (Dubai); employer cover in both emirates.',
    url: 'https://www.undp.org/sites/g/files/zskgke326/files/2024-02/uae_ncd_ic_report_eng.pdf',
  },
  {
    id: 'ddc-2018',
    label:
      'DHA / ISAHD. eClaimLink GC 12/2018, Dubai Drug Code List. Each registered drug carries a DDC code including pack size, price, manufacturer and source.',
    url: 'https://www.isahd.ae/content/docs/GC%2012-2018%20The%20Dubai%20Drug%20Code%20(DDC)%20List%20and%20eClaimLink%20System.pdf',
  },
  {
    id: 'who-neml-2025',
    label:
      'WHO. United Arab Emirates: National Essential Medicine List 2025 (English). Repository date 3 June 2026.',
    url: 'https://www.who.int/publications/m/item/united-arab-emirates--national-essential-medicine-list-2025-(english)',
  },
  {
    id: 'dha-neml-pdf',
    label:
      'DHA-hosted EDE Chairman Decision No. (47) of 2025 adopting the NEML, signed 19 June 2025 by Dr Thani Ahmed Al Zeyoudi.',
    url: 'https://dha.gov.ae/uploads/092025/%D9%85%D8%B1%D9%81%D9%82%D9%82%D9%80%D9%80%D8%B1%D8%A7%D8%B1%20%D8%B1%D8%A6%D9%8A%D8%B3%20%D9%85%D8%AC%D9%84%D8%B3%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%85%D8%A4%D8%B3%D8%B3%D8%A9%20%D8%A7%D9%84%D8%A5%D9%85%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%84%D9%84%D8%AF%D9%88%D8%A7%D8%A1%20%D8%B1%D9%82%D9%80%D9%80%D9%85%2047%20%D9%84%D8%B3%D9%86%D8%A9%20%202025%20%D9%81%D9%8A%20%D8%B4%D8%A3%D9%86%20%20%D8%A5%D8%B9%D8%AA%D9%85%D8%A7%D8%AF%20%D8%A7%D9%84%D9%82%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9%20%D9%84%D9%84%D8%A3%D8%AF%D9%88%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B3%D8%A7%D8%B3%D9%8A%D8%A92025941962.pdf',
  },
  {
    id: 'enterprise-am-2026',
    label:
      'EnterpriseAM UAE. Health Ministry transfers licensing and medicines registration to EDE. 6 January 2026. Narcotics and some high-sensitivity controlled substances remain with the ministry.',
    url: 'https://enterpriseam.com/uae/2026/01/06/this-morning-health-ministry-transfers-licensing-meds-registration-services-to-emirates-drug-establishment-emirates-skycargo-eyes-boosting-capacity-in-2026/',
  },
  {
    id: 'ede-gov',
    label:
      'Emirates Drug Establishment portal. Search copy states the Establishment was founded on 29 September. Published contacts: 800 33784 and info@ede.gov.ae.',
    url: 'https://www.ede.gov.ae/search',
  },
  {
    id: 'grand-view',
    label:
      'Grand View Research. UAE antidiabetics and pharmaceutical outlook pages. Syndicated sizing, not a Decision 12 diabetes SKU, switching or listing file.',
    vendor: true,
  },
  {
    id: 'imarc',
    label:
      'IMARC Group. UAE pharmaceutical market report pages. Syndicated market-size commentary that often occupies this query.',
    vendor: true,
  },
  {
    id: 'iqvia',
    label:
      'IQVIA. UAE and Middle East pharmaceutical audit commentary. National audit context; not a substitute for EDE pricing-committee or payer-listing fieldwork.',
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

export const DIABETES_UAE_CUTS_WORKSTREAMS: Workstream[] = [
  {
    name: 'Decision 12 analog map',
    researchType: 'Dose-level SKU reconstruction',
    question: 'Which named diabetes SKUs moved, and which analogs were not published?',
    description:
      'Start from the published Amaryl 1 mg, 2 mg and 3 mg AED pairs. Do not invent GLP-1, SGLT2, DPP-4 or insulin cuts that are not on the press list.',
  },
  {
    name: 'Treated-patient share',
    researchType: 'Anonymous physician PRFs',
    question: 'What share of treated patients sits on each class after the cut?',
    description:
      'A 24% list cut on Amaryl 1 mg is not a 24% share shift. Measure new starts and continuing patients by specialty and emirate.',
  },
  {
    name: 'Physician switching',
    researchType: 'Endocrinologist, internist and GP interviews plus PRFs',
    question: 'Did the SU cut change intensification, or only the pack price?',
    description:
      'Ask what happens at the next intensification step: stay on sulfonylurea, move to DPP-4, SGLT2, GLP-1 or insulin, and whether that differs in Dubai, Abu Dhabi and the northern emirates.',
  },
  {
    name: 'Pharmacy behaviour',
    researchType: 'Community and hospital pharmacy interviews',
    question: 'What did the pharmacy do with old-price stock, substitution and co-pay?',
    description:
      'Cabinet Decision 90/2021 bars unauthorised discounts. Research substitution, pack-level stock and how a DDC price field is updated after a federal cut.',
  },
  {
    name: 'Payer listing after the federal price',
    researchType: 'DHA, DOH, Thiqa and insurer interviews',
    question: 'Which wallet still funds the script after EDE has cut the public price?',
    description:
      'Federal list price is not DHA, DOH or private-insurer listing. Thiqa’s diabetes disease-management programme is a care pathway, not a formulary cut.',
  },
  {
    name: 'Budget impact after a list cut',
    researchType: 'Payer BIA with local uptake',
    question: 'What does the payer already spend on the class, and what changes if only SUs moved?',
    description:
      'A budget-impact that prices a GLP-1 invoice against an Amaryl cut answers the wrong question. Keep class-level spend and the published SKU cut on separate rows.',
  },
  {
    name: 'Oral GLP-1 overlap as a separate brief',
    researchType: 'Prescriber and payer research, not a Decision 12 row',
    question: 'Is the next diabetes conversation obesity-labelled oral GLP-1, or a list-cut analog?',
    description:
      'Foundayo was approved on 3 April 2026 for chronic weight management. That is not a published Decision 12 diabetes price. Keep the briefs apart.',
  },
];

const WORKSTREAM_TABLE_HTML = `<table>
<thead><tr><th>Workstream</th><th>Decision it answers</th><th>What the published record already shows</th><th>What to commission</th></tr></thead>
<tbody>
<tr><td>Analog map</td><td>Which diabetes SKU actually moved</td><td>Decision 12 named 168 products; the published diabetes examples are Amaryl 1 mg, 2 mg and 3 mg (${cite('gulf-news-168', 'Gulf News, 26 May 2026')})</td><td>Dose-level map of named SKUs; do not fill gaps with unpublished GLP-1 or SGLT2 rows</td></tr>
<tr><td>Treated-patient share</td><td>What happens after the cut</td><td>Dubai 2019 total diabetes was 13.7%, of which 11.5% known and 2.1% newly diagnosed (${cite('alawadi-2019', 'Al Awadi et al., 2020')})</td><td>Anonymous PRFs, new versus continuing, by class and emirate</td></tr>
<tr><td>Physician switching</td><td>Whether intensification changed</td><td>DHA’s 2024 telehealth Type 2 guideline still walks initiating and re-prescribing drug treatment as a clinical sequence (${cite('dha-t2dm-2024', 'DHA CG-41')})</td><td>Endocrinologist, internist and GP interviews in Dubai, Abu Dhabi and at least one northern emirate</td></tr>
<tr><td>Pharmacy behaviour</td><td>What the counter did</td><td>Cabinet Decision 90/2021 bars unauthorised discounts; DDC codes already carry a price field (${cite('chambers-2026', 'Chambers')}; ${cite('ddc-2018', 'GC 12/2018')})</td><td>Community and hospital pharmacy interviews on stock, substitution and co-pay</td></tr>
<tr><td>Payer listing</td><td>Who funds the script</td><td>DoH launched a Thiqa diabetes disease-management pilot for adults 18+ with two outpatient visits and HbA1c ≥6.5% (${cite('doh-188-2025', 'DoH Circular 188/2025')})</td><td>Separate DHA, DOH and insurer interviews — see <a href="/uae-pricing-reimbursement-strategy">UAE pricing and reimbursement strategy</a></td></tr>
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

export const DIABETES_UAE_CUTS_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  {
    heading: 'What this study is',
    anchor: 'what-is-diabetes-market-research-uae-after-the-2026-price-cuts',
  },
  {
    heading: 'What Decision 12 cut in diabetes',
    anchor: 'what-did-decision-12-actually-cut-in-diabetes',
  },
  {
    heading: 'A prevalence is not a treated share',
    anchor: 'why-a-national-prevalence-is-not-a-treated-share',
  },
  {
    heading: 'What changes on price',
    anchor: 'what-changes-for-brand-teams-on-price',
  },
  {
    heading: 'How physicians and pharmacies may respond',
    anchor: 'how-might-physicians-and-pharmacies-respond',
  },
  {
    heading: 'A list cut is not a payer listing',
    anchor: 'why-a-federal-list-cut-is-not-a-payer-listing',
  },
  {
    heading: 'What the study should measure',
    anchor: 'what-should-diabetes-market-research-uae-measure',
  },
  { heading: 'How to commission the study', anchor: 'how-to-commission' },
  { heading: 'How to brief BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const DIABETES_UAE_CUTS_EXECUTIVE_SUMMARY_HTML = `<p>Diabetes market research UAE after the 2026 price cuts is commissioned work on list prices, analog risk, switching, pharmacy behaviour and payer listing. The published cut covered 168 products, including Amaryl 1 mg, 2 mg and 3 mg. A prevalence slide is not that file. Do not treat a survey rate as demand.</p>`;

const NARRATIVE_HTML = `<p>Diabetes market research UAE after the 2026 price cuts is commissioned work on named packs, not a prevalence slide. Read it with the <a href="/healthcare-market-research">healthcare market research</a> hub. The federal handover sits on the <a href="/blog/uae-drug-pricing-ede-takeover-launch-research">EDE takeover briefing</a>.</p>

<h2 id="what-is-diabetes-market-research-uae-after-the-2026-price-cuts">What this study is</h2>
<p>It asks which named pack moved, who still writes it, what the pharmacy did, and which wallet pays. ${cite('grand-view', 'Grand View Research')}, ${cite('imarc', 'IMARC')} and ${cite('iqvia', 'IQVIA')} sell national outlooks. They do not name the pack or the payer. See <a href="/diabetes-market-research-uae">diabetes market research in the UAE</a>.</p>
${figureHtml(DIABETES_UAE_CUTS_FIGURES[0])}

<h2 id="what-did-decision-12-actually-cut-in-diabetes">What Decision 12 cut in diabetes</h2>
<p>Gulf News, writing on 26 May 2026, reported that the Emirates Drug Establishment cut retail prices of 168 products used for chronic disease. The published range was about 5% to nearly 60%. The named diabetes examples were Amaryl 1 mg, from AED 25 to AED 19; Amaryl 2 mg, from AED 39.50 to AED 32; and Amaryl 3 mg, from AED 57.50 to AED 47.50 (${cite('gulf-news-168', 'Gulf News')}).</p>
<p>Amaryl is the originator glimepiride tablet (${cite('fda-amaryl', 'FDA Amaryl label')}). Gulf News described the diabetes group as glipizide, alone or with metformin, and then listed those three Amaryl strengths. That molecule wording is not a confirmed glipizide cut. The confirmed facts are the brand, the three strengths and the three dirham pairs.</p>
<p>The same report’s cholesterol and glaucoma examples are not diabetes cuts. Zocor 40 mg fell about 59.5%. Xalatan fell about 51.7% (${cite('gulf-news-168', 'Gulf News')}). Do not load those cuts into a diabetes profit-and-loss.</p>
<p>Gulf News, on 26 May 2026, said pharmacies were already showing new prices, and that the cut would take effect on 30 May 2026 (${cite('gulf-news-168', 'Gulf News')}). A legal listing records issuance on 22 April 2026, Official Gazette No. 822 on 30 April 2026, and entry into force on 12 June 2026 (${cite('eastlaws-12-2026', 'Eastlaws')}). Keep both dates. Do not collapse them.</p>
${figureHtml(DIABETES_UAE_CUTS_FIGURES[1])}

<h2 id="why-a-national-prevalence-is-not-a-treated-share">A prevalence is not a treated share</h2>
<p>The IDF Atlas, 11th edition, puts 1,274.2 thousand adults aged 20–79 with diabetes in 2024, an age-standardised prevalence of 20.7%, and an undiagnosed share of 64.0% (815.5 thousand). The same table records 768.0 thousand and 18.8% in 2011, and a 2050 projection of 1,876.5 thousand and 22.7% (${cite('idf-atlas-uae', 'IDF Atlas')}). Those are modelled estimates, not a count of patients on one class.</p>
<p>MOHAP’s 2017–2018 survey of 10,000 families, with a 94% response, put adult diabetes at 11.8%, down from 18.9% in 2010 (${cite('mohap-nhs', 'MOHAP NHS')}; ${cite('undp-ncd', 'UNDP')}). The 2024–2025 nutrition survey reported elevated blood glucose of 12.5%, obesity of 22.4%, high blood pressure of 25.9% and high cholesterol of 54.2% (${cite('mohap-nhns-2025', 'MOHAP NHNS')}). Do not average 20.7%, 11.8% and 12.5%.</p>
<p>Gulf News, on the same 9,997-household survey, wrote that 18.3% of adults had never had blood sugar tested, and that 90.4% of those diagnosed had taken medication in the previous two weeks. Private outpatient visits were 67.8%, against 31.9% in government (${cite('gulf-news-nhns-2026', 'Gulf News')}). That medication line is a survey answer. It is not national demand for one pack.</p>
<p>Dubai household surveys are not a national treated share. The 2014 and 2017 rounds found diabetes of 19% among nationals, 14.7% among expatriates and 15.2% overall (${cite('alawadi-2017', 'Alawadi et al.')}). The 2019 survey of 9,630 adults in 2,496 households found total diabetes of 13.7% (11.5% known, 2.1% newly diagnosed), 19.3% among Emiratis and 12.4% among expatriates (${cite('alawadi-2019', 'Al Awadi et al.')}).</p>
<p>FCSC puts the 2024 population at 11.29 million, up 5.7% from 10.68 million (${cite('fcsc-2024', 'FCSC')}). Do not apply 20.7% or 11.8% to 11.29 million and call the result demand for Amaryl.</p>
${figureHtml(DIABETES_UAE_CUTS_FIGURES[2])}

<h2 id="what-changes-for-brand-teams-on-price">What changes on price</h2>
<p>Article 20 of Federal Decree-Law No. 38 of 2024 requires a Board-set price before marketing. Article 22 requires at least two licensed importers (${cite('faolex-38-2024', 'Article 20 and Article 22')}). The law took effect on 2 January 2025, with a one-year grace (${cite('uae-leg-38-2024', 'UAE Legislation')}; ${cite('baker-mckenzie-2025', 'Baker McKenzie')}).</p>
<p>Federal Decree-Law No. 28 of 2023 was issued on 25 September 2023 and took effect on 30 September 2023 (${cite('uae-leg-28-2023', 'UAE Legislation')}; ${cite('lexis-28-2023', 'Lexis')}). On 5 January 2026, MOHAP transferred 44 services, including re-pricing and price lists (${cite('mohap-44-2026', 'MOHAP')}; ${cite('mohap-mte', 'MOHAP service list')}). The portal says the Establishment was founded on 29 September (${cite('ede-gov', 'EDE portal')}). That is not the decree date.</p>
<p>Decision 140 of 2013 still sits in the mark-up path Chambers describes: import price plus 15%, then 28%, 24% or 20% by band. Cabinet Decision 90 of 2021 bars unauthorised discounts (${cite('chambers-2026', 'Chambers')}). Decision 49 of 2025 still recites Decision 140/2013 (${cite('reallaw-49-2025', 'Decision 49/2025')}). Re-pricing fees are AED 1,000 plus AED 500 (${cite('ede-repricing', 'EDE re-pricing')}).</p>
<p>WAM’s first-half note, to 30 June 2026, counts 942 approvals, 20 pricing decisions and 2,030 inspection visits. It also reports a multi-importer mechanism in February 2026 (${cite('wam-h1-2026', 'WAM')}). Decision 12 is one of those 20 pricing decisions. It is not a class-wide analog cut.</p>
<p>Foundayo (orforglipron) was approved on 3 April 2026 for weight management, expected from May 2026, with 12.4% mean trial weight loss (${cite('wam-foundayo', 'WAM, 3 April 2026')}). That is not a Decision 12 diabetes price. See the <a href="/blog/oral-glp-1-uae-market-research">oral GLP-1 UAE market research</a> brief. Inpefa (sotagliflozin), named in the same half-year note, is not a Decision 12 diabetes price either (${cite('wam-h1-2026', 'WAM')}). Decision No. 47 of 2025 adopted the national essential-medicines list (${cite('ede-legislations', 'EDE legislations')}; ${cite('dha-neml-pdf', 'Decision 47/2025')}; ${cite('who-neml-2025', 'WHO')}).</p>

<h2 id="how-might-physicians-and-pharmacies-respond">How physicians and pharmacies may respond</h2>
<p>DHA’s virtual Type 2 guideline, CG-41 Issue 2, is dated 21 February 2024 and took effect on 21 April 2024. It still treats drug treatment as a clinical sequence (${cite('dha-t2dm-2024', 'DHA CG-41')}). A lower Amaryl list price does not publish a switch to another class. Anonymous diaries, new versus continuing, are how a team finds out what prescribers did.</p>
<p>Ask pharmacies separately. Cabinet Decision 90 of 2021 bars unauthorised discounts (${cite('chambers-2026', 'Chambers')}). The Dubai code already carries a price field (${cite('ddc-2018', 'GC 12/2018')}). A federal cut and a code update are two changes. EnterpriseAM reported on 6 January 2026 that narcotics stay with the ministry (${cite('enterprise-am-2026', 'EnterpriseAM')}).</p>
${figureHtml(DIABETES_UAE_CUTS_FIGURES[3])}

<h2 id="why-a-federal-list-cut-is-not-a-payer-listing">A list cut is not a payer listing</h2>
<p>Dubai Law No. 11 of 2013 makes cover mandatory, including free zones such as DIFC (${cite('dubai-law-11-2013', 'Law 11/2013')}; ${cite('dubai-ae-insurance', 'Dubai.ae')}). The UNDP case describes Thiqa for Abu Dhabi nationals, Saada in Dubai, and employer cover for expatriates (${cite('undp-ncd', 'UNDP')}). A public price can still sit outside a basic plan.</p>
<p>DoH Circular 188 of 2025 launched a Thiqa diabetes programme for adults 18 and older, with two outpatient visits and HbA1c of 6.5% or higher, as 12 months of coordinated care (${cite('doh-188-2025', 'Circular 188/2025')}). That is an enrolment pathway. It is not a decision to list or drop Amaryl after Decision 12.</p>

<h2 id="what-should-diabetes-market-research-uae-measure">What the study should measure</h2>
<p>Keep the named dirham pairs, the treated-patient share, the prescriber, the pharmacy and the payer on separate rows.</p>
${WORKSTREAM_TABLE_HTML}
${figureHtml(DIABETES_UAE_CUTS_FIGURES[4])}
<p>Do not fill unpublished GLP-1, SGLT2, DPP-4 or insulin cuts into the Decision 12 row. Do not price a GLP-1 invoice against an Amaryl pair and call it one class effect.</p>

<h2 id="how-to-commission">How to commission the study</h2>
<p>Name the three Amaryl strengths, the date you are using for “in force,” and the emirates in the sample. Field physicians in Dubai, Abu Dhabi and at least one northern emirate. Separate DHA, Department of Health and insurer interviews. See <a href="/uae-pricing-reimbursement-strategy">UAE pricing and reimbursement strategy</a>.</p>

<h2 id="why-bionixus">How to brief BioNixus</h2>
<p>BioNixus is a primary market research firm for pharmaceutical, medical device and healthcare companies. It was founded in 2012. It has served 118 clients in 48 countries. It has run 127 studies so far in 2026. It works with a network of 82,000+ physicians globally and about 3,200 physicians in the Middle East. Custom studies are usually priced at $10k–$60k. Leadership offices are in Sheridan, Wyoming, London EC1V 2NX, and Sheikh Zayed, Giza. There are field offices in Dubai, Al Khobar and Salmiya, Kuwait. São Paulo is a field office for LATAM. Work in Latin America is covered today from the US office with local consultants.</p>
<p>The line “Guaranteed in writing” covers scope, timing, replacement of respondents who do not qualify, the minimum sample, re-fielding if that sample is missed, and a credited pilot. It does not cover what the interviews will find. BioNixus has 40 client reviews.</p>
<p>Use the <a href="/contact">contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const DIABETES_UAE_CUTS_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const DIABETES_UAE_CUTS_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is diabetes market research UAE after the 2026 price cuts?',
    answer:
      'Commissioned work on the published list prices, analog risk, switching, pharmacy behaviour and payer listing. A prevalence slide is not that file.',
  },
  {
    question: 'Did the Emirates Drug Establishment cut diabetes medicine prices in 2026?',
    answer:
      'Gulf News reported that Decision 12 of 2026 cut prices of 168 products. The named diabetes examples were Amaryl 1 mg (AED 25 to AED 19), 2 mg (AED 39.50 to AED 32) and 3 mg (AED 57.50 to AED 47.50). Amaryl is glimepiride. GLP-1, SGLT2, DPP-4 and insulin cuts were not published as diabetes examples.',
  },
  {
    question: 'How large were the published diabetes list cuts compared with other products?',
    answer:
      'The press range for the 168 products was about 5% to nearly 60%. In the same report, Zocor 40 mg fell about 59.5% and Xalatan about 51.7%. Those are not diabetes cuts. Use the three Amaryl dirham pairs for the diabetes examples. Do not turn the headline range into a class cut.',
  },
  {
    question: 'Is IDF’s 20.7% the right UAE diabetes figure for a 2026 forecast?',
    answer:
      'It is one modelled 2024 figure for adults aged 20–79. The 2017–2018 survey reported 11.8%. The 2024–2025 survey reported elevated glucose of 12.5%. Do not average them. Do not apply any of them to 11.29 million residents as demand for Amaryl.',
  },
  {
    question: 'Does a federal EDE price cut mean DHA or Thiqa will fund the product?',
    answer:
      'No. Article 20 requires a Board-set price before marketing. Dubai Law 11 of 2013 and Abu Dhabi’s Thiqa rules still decide who pays. Circular 188/2025 is a Thiqa care pathway for adults 18 and older with two outpatient visits and HbA1c of 6.5% or higher. It is not a formulary listing.',
  },
  {
    question: 'What should a brand team commission after Decision 12?',
    answer:
      'A dose-level map of the named packs, physician diaries for new and continuing patients, pharmacy interviews on substitution, and separate DHA, Department of Health and insurer interviews. Decision 12 is one of 20 pricing decisions in the first half of 2026. Keep oral GLP-1 obesity research as a separate brief.',
  },
  {
    question: 'Why commission BioNixus for diabetes market research UAE?',
    answer:
      'Custom studies run from the Dubai field office, with a network of 82,000+ physicians globally and about 3,200 physicians in the Middle East, usually at $10k–$60k. Guaranteed in writing covers scope and sample. It does not cover what the interviews will find.',
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

const FAQ_WORD_COUNT = DIABETES_UAE_CUTS_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const DIABETES_UAE_CUTS_WORD_COUNT =
  countWords(DIABETES_UAE_CUTS_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const DIABETES_UAE_CUTS_READING_TIME = Math.ceil(
  (countWords(DIABETES_UAE_CUTS_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const DIABETES_UAE_CUTS_ORGANIZATION: Record<string, unknown> = {
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
    'Diabetes market research UAE',
    'Emirates Drug Establishment',
    'UAE drug pricing',
    'Type 2 diabetes market access',
    'Healthcare market research',
    'Pharmaceutical market research',
    'United Arab Emirates market access',
  ],
};

export type DiabetesUaeCutsAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveDiabetesUaeCutsAuthor(
  name: string | undefined,
  profileUrl?: string,
): DiabetesUaeCutsAuthor {
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

const AUTHOR = resolveDiabetesUaeCutsAuthor(
  DIABETES_UAE_CUTS_AUTHOR_NAME,
  DIABETES_UAE_CUTS_AUTHOR_PROFILE_URL,
);

export const DIABETES_UAE_CUTS_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-diabetes-market-research-uae-2026-price-cuts',
  slug: DIABETES_UAE_CUTS_SLUG,
  title: DIABETES_UAE_CUTS_DISPLAY_TITLE,
  excerpt: DIABETES_UAE_CUTS_EXCERPT,
  date: '17 Oct 2026',
  category: DIABETES_UAE_CUTS_CATEGORY,
  country: 'United Arab Emirates',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: DIABETES_UAE_CUTS_READING_TIME,
  wordCount: DIABETES_UAE_CUTS_WORD_COUNT,
  breadcrumbLabel: DIABETES_UAE_CUTS_BREADCRUMB_LABEL,
  displaySubtitle: DIABETES_UAE_CUTS_DISPLAY_SUBTITLE,
  tags: [...DIABETES_UAE_CUTS_TAGS],
  coverImage: DIABETES_UAE_CUTS_HERO_IMAGE,
  coverImageAlt: DIABETES_UAE_CUTS_HERO_IMAGE_ALT,
  ogImage: DIABETES_UAE_CUTS_COVER_IMAGE,
  ogImageAlt: DIABETES_UAE_CUTS_COVER_IMAGE_ALT,
  ogTitle: DIABETES_UAE_CUTS_META_TITLE,
  ogDescription: DIABETES_UAE_CUTS_META_DESCRIPTION,
  seoMetaTitle: DIABETES_UAE_CUTS_META_TITLE,
  seoMetaDescription: DIABETES_UAE_CUTS_META_DESCRIPTION,
  seoCanonicalUrl: DIABETES_UAE_CUTS_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: DIABETES_UAE_CUTS_PUBLISHED_ISO,
  updatedAtIso: DIABETES_UAE_CUTS_UPDATED_ISO,
  tableOfContents: DIABETES_UAE_CUTS_TABLE_OF_CONTENTS,
  executiveSummary: DIABETES_UAE_CUTS_EXECUTIVE_SUMMARY_HTML,
  faq: [...DIABETES_UAE_CUTS_FAQ],
  ctaSection: {
    title: 'Planning diabetes pricing or post-cut listing research in the UAE?',
    description:
      'Tell us the diabetes decision you need to make. BioNixus scopes the study around that decision. Custom work is usually $10k–$60k.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: DIABETES_UAE_CUTS_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'MedicalCondition', name: 'Type 2 Diabetes Mellitus' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Organization', name: 'Emirates Drug Establishment' },
    ],
    itemList: {
      name: 'What diabetes market research UAE should measure after the 2026 price cuts',
      description:
        'Seven workstreams for a UAE diabetes brief after EDE Decision 12 of 2026.',
      items: DIABETES_UAE_CUTS_WORKSTREAMS.map(({ name, description }) => ({ name, description })),
    },
    contentImages: DIABETES_UAE_CUTS_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: DIABETES_UAE_CUTS_BODY_HTML,
};
