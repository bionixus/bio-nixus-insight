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
    alt: 'Bar chart of published Decision 12 Amaryl list cuts versus Zocor 40 mg',
    caption:
      'Decision 12/2026 AED pairs (Gulf News, 26 May 2026): Amaryl 1 mg 24%, 2 mg about 19%, 3 mg about 17%. Zocor 40 mg about 59.5%. Do not average an SU cut into a class cut.',
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
  'Diabetes Market Research in the UAE After the 2026 Price Cuts';

export const DIABETES_UAE_CUTS_DISPLAY_SUBTITLE =
  'Diabetes market research UAE after the EDE Decision 12 list cuts';

export const DIABETES_UAE_CUTS_BREADCRUMB_LABEL = 'UAE diabetes after 2026 price cuts';

export const DIABETES_UAE_CUTS_EXCERPT =
  'A sourced 2026 briefing on diabetes market research UAE after EDE Decision 12 of 2026: what the 168-product list cut actually named in diabetes, what that changes for price, switching, pharmacy and payer listing, and what brand teams still have to commission.';

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
    heading: 'What is diabetes market research UAE after the 2026 price cuts?',
    anchor: 'what-is-diabetes-market-research-uae-after-the-2026-price-cuts',
  },
  {
    heading: 'What did Decision 12 of 2026 actually cut in diabetes?',
    anchor: 'what-did-decision-12-actually-cut-in-diabetes',
  },
  {
    heading: 'Why a national prevalence is not a treated-share',
    anchor: 'why-a-national-prevalence-is-not-a-treated-share',
  },
  {
    heading: 'What changes for brand teams on price and analog risk?',
    anchor: 'what-changes-for-brand-teams-on-price',
  },
  {
    heading: 'How might physicians and pharmacies respond?',
    anchor: 'how-might-physicians-and-pharmacies-respond',
  },
  {
    heading: 'Why a federal list cut is not a payer listing',
    anchor: 'why-a-federal-list-cut-is-not-a-payer-listing',
  },
  {
    heading: 'What should diabetes market research UAE measure after Decision 12?',
    anchor: 'what-should-diabetes-market-research-uae-measure',
  },
  { heading: 'How should you commission the study?', anchor: 'how-to-commission' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const DIABETES_UAE_CUTS_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Diabetes market research UAE after the 2026 price cuts is commissioned work on how EDE Decision 12 changed list prices, analog risk, switching, pharmacy behaviour and payer listing. The published cut covered 168 products, including Amaryl 1 mg, 2 mg and 3 mg. A prevalence slide is not that file.</p>`;

const NARRATIVE_HTML = `<p>Diabetes market research UAE is a pricing, switching and listing problem again, not only an epidemiology slide. On 5 January 2026 the Ministry of Health and Prevention transferred 44 core services to the Emirates Drug Establishment, including the re-pricing of individual medical products and the publication of regulated-medicine price lists (${cite('mohap-44-2026', 'MOHAP, 5 January 2026')}). In May 2026 the same authority cut the retail prices of 168 chronic- and critical-care products, and diabetes was one of the named therapeutic groups (${cite('gulf-news-168', 'Gulf News, 26 May 2026')}). What a brand, HEOR or market-access team still cannot buy off the shelf is which diabetes SKU actually moved, whether physicians or pharmacies changed behaviour, and which DHA, DOH or insurer wallet still funds the script. This briefing uses only published sources. It sits alongside our <a href="/healthcare-market-research">healthcare market research company</a> hub for Saudi Arabia, the UAE and the GCC, and the country page for <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a>.</p>

<div class="value-box">
<p><strong>Quick facts: diabetes market research UAE after the 2026 price cuts, October 2026</strong></p>
<ul>
<li><strong>5 January 2026:</strong> MOHAP transferred 44 core services in full to EDE, including individual-product re-pricing and publication of regulated-medicine price lists (${cite('mohap-44-2026', 'MOHAP')}).</li>
<li><strong>168 products</strong> had retail prices cut under EDE Decision No. 12 of 2026; published reductions ran from about 5% to nearly 60% (${cite('gulf-news-168', 'Gulf News')}).</li>
<li><strong>Named diabetes SKUs:</strong> Amaryl 1 mg AED 25 to AED 19; Amaryl 2 mg AED 39.50 to AED 32; Amaryl 3 mg AED 57.50 to AED 47.50 (${cite('gulf-news-168', 'Gulf News')}). Amaryl is the originator glimepiride brand (${cite('fda-amaryl', 'FDA Amaryl label')}).</li>
<li><strong>Two dates, one decision:</strong> Gulf News reported a 30 May 2026 pharmacy date; a legal-database listing records issuance on 22 April 2026, Official Gazette No. 822 on 30 April 2026, and entry into force on 12 June 2026 (${cite('gulf-news-168', 'Gulf News')}; ${cite('eastlaws-12-2026', 'Eastlaws listing')}).</li>
<li><strong>20 pricing decisions</strong> in the first half of 2026, inside 942 product approvals and 2,030 inspection visits (${cite('wam-h1-2026', 'WAM, 22 September 2026')}).</li>
<li><strong>1,274.2 thousand</strong> adults 20–79 with diabetes in the IDF Atlas 11th edition 2024 estimate; age-standardised prevalence 20.7%; undiagnosed share 64.0% (${cite('idf-atlas-uae', 'IDF Atlas UAE')}).</li>
<li><strong>11.8%</strong> of adults 18+ in the 2017–2018 MOHAP National Health Survey; <strong>12.5%</strong> elevated blood glucose in the 2024–2025 National Health and Nutrition Survey (${cite('mohap-nhs', 'MOHAP NHS')}; ${cite('mohap-nhns-2025', 'MOHAP NHNS 2024–2025')}).</li>
<li><strong>11.29 million</strong> residents in 2024, up 5.7% from 10.68 million in 2023 (${cite('fcsc-2024', 'FCSC Unified UAE Numbers')}).</li>
</ul>
</div>

<h2 id="what-is-diabetes-market-research-uae-after-the-2026-price-cuts">What is diabetes market research UAE after the 2026 price cuts?</h2>

<p>It is commissioned primary research on how Type 2 diabetes — and, where the brief requires it, Type 1 and gestational diabetes — is treated, priced, dispensed and funded in the Emirates after EDE Decision 12 of 2026. For a 2026 brand team the unit of observation is the SKU, the prescription and the payer committee, not a vial forecast and not an IDF headcount.</p>

<p>Report publishers such as Grand View Research, IMARC and IQVIA sell UAE antidiabetic and pharmaceutical outlooks. Those pages often occupy the query “diabetes market research UAE”. ${cite('grand-view', 'Grand View Research')}, ${cite('imarc', 'IMARC Group')} and ${cite('iqvia', 'IQVIA')} are useful for a first cut of national audit context. They do not say which analog on the 168-product list sits next to your brand, whether a community pharmacy substituted after 30 May, or whether a Dubai Drug Code or a Thiqa wallet still carries the product after the list moved. Those answers require a custom brief. Therapy-area context sits on <a href="/diabetes-market-research-uae">diabetes market research in the UAE</a> and <a href="/uae-pharmaceutical-market-research">UAE pharmaceutical market research</a>.</p>

<p>A usable diabetes study after Decision 12 needs a dose-level map of the SKUs the public record named (${cite('gulf-news-168', 'Gulf News')}); anonymous PRFs from endocrinologists, internists and GPs, with new and continuing cases kept separate; pharmacy interviews that split community retail, hospital outpatient and insurance-network counters (${cite('gulf-news-nhns-2026', 'Gulf News on the 2024–2025 survey')}); and payer interviews that treat DHA, DOH / Thiqa and private insurers as different decisions — the process map is on <a href="/uae-pricing-reimbursement-strategy">UAE pricing and reimbursement strategy</a>. Field in Arabic and English, in Dubai, Abu Dhabi and at least one northern emirate. Compare <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a> rather than importing an SFDA price into an EDE diabetes file.</p>

<h2 id="what-did-decision-12-actually-cut-in-diabetes">What did Decision 12 of 2026 actually cut in diabetes?</h2>

<p>Decision No. (12) of 2026 is the first large, named EDE list-cut a 2026 diabetes team can put in a slide. ${cite('gulf-news-168', 'Gulf News, updating on 26 May 2026')} reported that EDE had reduced the retail prices of 168 products, including diabetes, in multiple dosages, and that pharmacies had already begun showing the revised prices. Discounts ran from about 5% to nearly 60% for some high-cost medicines, with Zocor 40 mg about 59.5% and Xalatan about 51.7%.</p>

${figureHtml(DIABETES_UAE_CUTS_FIGURES[0])}

<p>The establishment statute is Federal Decree-Law No. 28 of 2023 (${cite('uae-leg-28-2023', 'UAE Legislation')}; ${cite('lexis-28-2023', 'Lexis')}). The medical-products statute is Federal Decree-Law No. 38 of 2024 (${cite('uae-leg-38-2024', 'UAE Legislation')}). Contact and portal copy sit on the EDE site (${cite('ede-gov', 'EDE portal')}). The diabetes examples in the May 2026 report are specific. They are not a class average.</p>

<ul>
<li><strong>Amaryl 1 mg</strong> from AED 25 to AED 19 — a 24% reduction on the published pair (${cite('gulf-news-168', 'Gulf News')}).</li>
<li><strong>Amaryl 2 mg</strong> from AED 39.50 to AED 32 — about 19% (${cite('gulf-news-168', 'Gulf News')}).</li>
<li><strong>Amaryl 3 mg</strong> from AED 57.50 to AED 47.50 — about 17% (${cite('gulf-news-168', 'Gulf News')}).</li>
</ul>

<p>Amaryl is Sanofi’s originator glimepiride tablet (${cite('fda-amaryl', 'FDA Amaryl prescribing information')}). Gulf News described the diabetes group as “glipizide alone or combined with metformin” and then listed those three Amaryl strengths. This briefing does not treat that molecule wording as a confirmed glipizide cut. The confirmed facts are the brand, the three strengths and the three AED pairs. Reconstruct the rest of the diabetes rows from the Arabic decision, not from a press example list.</p>

${figureHtml(DIABETES_UAE_CUTS_FIGURES[1])}

<p>Those SU reductions are modest next to the same decision’s cholesterol and glaucoma examples. Zocor 10 mg, 20 mg and 40 mg were unified at AED 67.50, from AED 83.50, AED 91.50 and AED 166.50. Xalatan 0.005% fell from AED 89 to AED 43 (${cite('gulf-news-168', 'Gulf News')}). Converting “UAE cut diabetes prices by up to 60%” into a GLP-1 net-price assumption mixes a sulfonylurea pair with a simvastatin pair. The 60% figure is the top of a published range, not the Amaryl cut.</p>

<p>Two dates sit on the same decision. Gulf News, writing on 26 May 2026, said the decision “will come into effect at the end of the current month (May 30)” and that pharmacies had already reflected the new prices (${cite('gulf-news-168', 'Gulf News')}). A legal-database listing records issuance on 22 April 2026, Official Gazette No. 822 on 30 April 2026, and entry into force on 12 June 2026 (${cite('eastlaws-12-2026', 'Eastlaws listing')}). This briefing has not inspected the Arabic Gazette page. Ask the agency which date it used for “list in force.”</p>

<p>Decision 12 is not the whole 2026 pricing programme. WAM’s H1 count is 20 pricing decisions, covering adjustments as well as reductions (${cite('wam-h1-2026', 'WAM')}). A forecast that treats the 168-product cut as a one-off, and does not watch the next Chairman’s table, will be sent back the first time an analog moves again. A glimepiride tablet and an oncology biologic now sit in the same federal list-cut machine. They are not in the same payer committee.</p>

<p>What the public record does <em>not</em> yet give a diabetes brand team:</p>

<ul>
<li>A published, complete diabetes extract of all 168 SKUs. Only Amaryl 1 mg, 2 mg and 3 mg were named as Type 2 examples in the Gulf News report (${cite('gulf-news-168', 'Gulf News')}).</li>
<li>A published cut on a DPP-4, SGLT2, GLP-1 or insulin SKU inside Decision 12. Absence from a press example list is not proof those classes were spared. It is proof they were not published there.</li>
<li>A published treated-patient share before and after 30 May 2026.</li>
<li>A published pharmacy substitution rate, a published DDC update log, or a published insurer co-pay change tied to the new public prices.</li>
</ul>

<p>Those four gaps are the research brief. The federal pricing takeover that created the new owner of the list is sourced separately on <a href="/blog/uae-drug-pricing-ede-takeover-launch-research">UAE drug pricing after the EDE takeover</a>. This page does not repeat that legal walkthrough. It starts from the diabetes SKUs that decision put on the shelf.</p>

<h2 id="why-a-national-prevalence-is-not-a-treated-share">Why a national prevalence is not a treated-share</h2>

<p>Ask every provider which baseline it uses. IDF Atlas modelled adults 20–79 are not MOHAP survey adults 18+, and neither is a Dubai household HbA1c sample. They are different methods. They are not a 2026 treated-share tracker.</p>

<p>The IDF Diabetes Atlas 11th edition puts 1,274.2 thousand adults aged 20–79 with diabetes in 2024, age-standardised prevalence 20.7%, and an undiagnosed share of 64.0% (815.5 thousand). The same table records 768.0 thousand and 18.8% in 2011, and a 2050 projection of 1,876.5 thousand and 22.7% (${cite('idf-atlas-uae', 'IDF Atlas UAE')}). Those are modelled national estimates, not a census of patients on Amaryl, a DPP-4, an SGLT2, a GLP-1 or insulin.</p>

<p>MOHAP’s 2017–2018 National Health Survey of 10,000 families (94% response) put diabetes among adults over 18 — high blood glucose or taking diabetes medication on the survey day — at 11.8%, down from 18.9% in 2010 (${cite('mohap-nhs', 'MOHAP NHS')}; ${cite('undp-ncd', 'UNDP NCD investment case')}). The 2024–2025 National Health and Nutrition Survey reported elevated blood glucose of 12.5% among adults 18+, with obesity 22.4%, high blood pressure 25.9% and high cholesterol 54.2% (${cite('mohap-nhns-2025', 'MOHAP NHNS 2024–2025')}). Gulf News, on the same 9,997-household survey, wrote that 18.3% of adults had never had blood sugar tested and that 90.4% of those diagnosed reported taking medication in the previous two weeks (${cite('gulf-news-nhns-2026', 'Gulf News')}). Elevated blood glucose is not IDF diabetes. Do not average 20.7%, 11.8% and 12.5%.</p>

${figureHtml(DIABETES_UAE_CUTS_FIGURES[2])}

<p>Emirate samples add a third method. Dubai’s 2014 and 2017 household surveys, with HbA1c screening, found diabetes of 19% among UAE nationals, 14.7% among expatriates and 15.2% overall (${cite('alawadi-2017', 'Alawadi et al., 2020')}). The 2019 Dubai Household Survey of 9,630 participants in 2,496 households found total diabetes of 13.7% (11.5% known, 2.1% newly diagnosed) and 19.3% among Emiratis versus 12.4% among expatriates (${cite('alawadi-2019', 'Al Awadi et al., 2020')}). That is a demographic warning, not a 2026 national treated-share.</p>

<p>FCSC’s 2024 estimate is 11.29 million residents, up 5.7% from 10.68 million in 2023 (${cite('fcsc-2024', 'FCSC')}). Applying 20.7% or 11.8% to 11.29 million and calling the product “demand for Amaryl” is arithmetic, not research. The 90.4% of diagnosed patients who said they had taken diabetes medication in the previous two weeks is a treated-cohort fact (${cite('gulf-news-nhns-2026', 'Gulf News reporting of MOHAP')}). A list cut on three sulfonylurea packs is a change inside that cohort, not a new diagnosed-patient wave. IDF’s 64% undiagnosed share is a modelled national gap, not a Dubai clinic rate (${cite('idf-atlas-uae', 'IDF')}; ${cite('alawadi-2019', 'Al Awadi et al.')}).</p>

<h2 id="what-changes-for-brand-teams-on-price">What changes for brand teams on price and analog risk?</h2>

<p>Article 20 of Federal Decree-Law No. 38 of 2024 requires a specific price, set under EDE Board rules, before a medicine with marketing approval can be marketed (${cite('faolex-38-2024', 'FAOLEX English text, Article 20')}). The 5 January 2026 transfer put individual-product re-pricing and price-list publication in EDE’s 44 fully transferred services (${cite('mohap-44-2026', 'MOHAP')}; ${cite('mohap-mte', 'MOHAP service-list page')}). The next public diabetes price, and the next cut, is an EDE Chairman’s decision.</p>

<p>The mark-up path 2025 decisions still recite is older. Decision 140 of 2013 unified the factory import price on a CIF USD basis. Chambers describes pharmacy price as import price plus 15%, then a public-sale add-on of 28%, 24% or 20% by import-price band (${cite('chambers-2026', 'Chambers Life Sciences 2026')}). Decision 49 of 2025 still lists Decision 140/2013 in its recitals (${cite('reallaw-49-2025', 'EDE Decision 49/2025 listing')}). The EDE re-pricing card still asks for a country-of-origin certificate, justifications, and Gulf plus European reference prices; fees are AED 1,000 plus AED 500 for a new certificate (${cite('ede-repricing', 'EDE re-pricing card')}). Cabinet Decision 90/2021 bars unauthorised discounts (${cite('chambers-2026', 'Chambers')}). A “discount to defend Amaryl at the counter” is not a published UAE plan.</p>

<p>Article 22 requires at least two licensed importers who actually import during the calendar year (${cite('faolex-38-2024', 'Article 22')}; ${cite('baker-mckenzie-2025', 'Baker McKenzie')}). WAM says EDE approved a multi-importer mechanism in February 2026 (${cite('wam-h1-2026', 'WAM')}). A diabetes analog the second importer cannot land is a stock-out story, not a share story. A 17–24% cut on three glimepiride packs can pull a generic SU net, an originator SU net, or nothing if intensification has already left the class. It does not, on the published record, pull a GLP-1 or SGLT2 public price. Those classes may still sit among the other 19 H1 pricing decisions (${cite('wam-h1-2026', 'WAM')}). Do not load a 59.5% Zocor cut into a diabetes P&amp;L.</p>

<h2 id="how-might-physicians-and-pharmacies-respond">How might physicians and pharmacies respond?</h2>

<p>The published cut is a list-price event. Prescribing is a clinical sequence. DHA’s Clinical Guidelines for Virtual Management of Type 2 Diabetes Mellitus (DHA/HRS/HPSD/CG-41, Issue 2, 21 February 2024, effective 21 April 2024) cover initiating or re-prescribing drug treatment (${cite('dha-t2dm-2024', 'DHA CG-41')}). Intensification is still a physician decision, not an automatic response to a federal price list. A modest Amaryl cut can keep a stable patient on a sulfonylurea, move share at the counter, or change nothing because the next step is an SGLT2, a GLP-1 or insulin. None of those outcomes is published as a 2026 UAE fact. Anonymous PRFs — new versus continuing, by specialty, emirate and channel — are how a brand team finds out which happened.</p>

<p>Quota the sample. Dubai 2019 already split Emirati diabetes at 19.3% against 12.4% in expatriates (${cite('alawadi-2019', 'Al Awadi et al.')}). A GP panel that is mostly expatriate primary care will not reproduce an Emirati endocrinology clinic.</p>

<p>Pharmacy behaviour is a separate instrument. The 2024–2025 survey, as reported by Gulf News, put private hospitals at 67.8% of outpatient visits against 31.9% government (${cite('gulf-news-nhns-2026', 'Gulf News')}). A list cut that lands in a private retail pharmacy, a private hospital outpatient pharmacy and a government hospital pharmacy is three stocking decisions. Cabinet Decision 90/2021 still bars unauthorised discounts (${cite('chambers-2026', 'Chambers')}). Ask when the shelf label changed, what happened to old-price stock, whether a glimepiride generic was substituted, and how the co-pay printed. In Dubai, GC 12/2018 already puts pack size and price on the DDC code (${cite('ddc-2018', 'GC 12/2018')}). A federal cut and a DDC price field are two updates. Residual ministry functions remain for some services (${cite('enterprise-am-2026', 'EnterpriseAM, 6 January 2026')}); ordinary oral antidiabetics are not that residual list.</p>

<h2 id="why-a-federal-list-cut-is-not-a-payer-listing">Why a federal list cut is not a payer listing</h2>

<p>EDE can cut 168 public prices and still leave the funding question open. The federal list price is one layer. Emirate payer listing is another. The hospital or insurer wallet is a third. The process map sits on <a href="/uae-pricing-reimbursement-strategy">UAE pricing and reimbursement strategy</a> and <a href="/uae-market-access-research">UAE market access research</a>. What the 2026 diabetes record adds is a new owner of the first layer, a 168-SKU cut, and three named sulfonylurea packs.</p>

${figureHtml(DIABETES_UAE_CUTS_FIGURES[3])}

<p>Insurance remains an emirate statute. Dubai Law No. 11 of 2013 makes health insurance mandatory, including free zones such as DIFC (${cite('dubai-law-11-2013', 'Law 11/2013')}; ${cite('dubai-ae-insurance', 'Dubai.ae')}). The UNDP NCD investment case describes Abu Dhabi’s Thiqa programme for UAE nationals, Dubai’s Saada programme, and employer-mandated cover for expatriate employees (${cite('undp-ncd', 'UNDP NCD investment case')}). A product can have an EDE public price and still sit outside a basic plan.</p>

<p>Abu Dhabi has also published a diabetes care pathway that is easy to confuse with a formulary listing. DoH Circular 188 of 2025 launched a pilot Diabetes Disease Management Program for eligible Thiqa members aged 18+, with at least two outpatient visits in one year and HbA1c of 6.5% or higher, as 12 months of coordinated care (${cite('doh-188-2025', 'DoH Circular 188/2025')}). That is an enrolment pathway. It is not a published decision to list or de-list Amaryl after Decision 12.</p>

<p>EDE Chairman Decision No. 47 of 2025 adopted the UAE National Essential Medicines List (${cite('ede-legislations', 'EDE legislations page')}; ${cite('dha-neml-pdf', 'Decision 47/2025 PDF')}; ${cite('who-neml-2025', 'WHO')}). A glimepiride pack can be priced by EDE, coded in DDC, present or absent on NEML, and listed or restricted on a private insurer. Say which list the forecast uses.</p>

<p>The oral GLP-1 story is a fourth layer, and it is not Decision 12. WAM reported that EDE approved Foundayo (orforglipron) on 3 April 2026 for chronic weight management, with expected availability from May 2026 and 12.4% mean weight loss at the highest trial dose (${cite('wam-foundayo', 'WAM, 3 April 2026')}; ${cite('wam-h1-2026', 'WAM H1 note')}). None of that is a published public price on the 168-product diabetes list. Open the separate <a href="/blog/oral-glp-1-uae-market-research">oral GLP-1 UAE market research</a> brief rather than folding Foundayo into an Amaryl analog table. WAM’s H1 wrap also names Inpefa (sotagliflozin) as a second-country heart-failure approval (${cite('wam-h1-2026', 'WAM')}). That is not a published Decision 12 SGLT2 diabetes cut.</p>

<h2 id="what-should-diabetes-market-research-uae-measure">What should diabetes market research UAE measure after Decision 12?</h2>

<p>Design the study backwards from the decision — a first-price filing, a re-pricing request, a DHA or DOH listing, a private-insurer prior-authorisation rule, or a defence of sulfonylurea share after a list cut — not from a national market-size slide.</p>

${WORKSTREAM_TABLE_HTML}

${figureHtml(DIABETES_UAE_CUTS_FIGURES[4])}

<p>The table and the seven-workstream figure are the brief. IDF, MOHAP and Dubai figures are baselines to state, not numbers to average (${cite('idf-atlas-uae', 'IDF')}; ${cite('mohap-nhs', 'MOHAP')}; ${cite('alawadi-2019', 'Al Awadi et al.')}). HEOR design sits on <a href="/blog/gcc-pharmacoeconomics">GCC pharmacoeconomics</a>.</p>

<h2 id="how-to-commission">How should you commission the study?</h2>

<ul>
<li>How many endocrinologists, internists, general practitioners and pharmacists will you recruit, and from which emirates — Dubai, Abu Dhabi and at least one northern emirate?</li>
<li>Will results be reported by public versus private channel, by nationality, and by new versus current treated patients?</li>
<li>Which Decision 12 diabetes SKUs, and which of the other H1 2026 pricing decisions, sit in the discussion guide?</li>
<li>Will the discussion guide treat sulfonylureas, DPP-4s, SGLT2s, GLP-1s and insulin as five layers, not one “diabetes” share?</li>
<li>Will the first-price or analog reconstruction show the country-of-origin certificate, the Gulf/Europe basket, and the Decision 140/2013 path as three workings, not one “UAE price”?</li>
<li>Are questionnaires available in Arabic and English?</li>
<li>Who owns the data, and can it be re-cut after the next Chairman’s pricing table?</li>
</ul>

<p>Syndicated UAE pharmaceutical pages remain useful for audit context. Do not take them to an EDE pricing committee or a DHA listing meeting as the evidence pack for a sulfonylurea cut. Keep Saudi and UAE physician samples separate. For the vendor comparison, see <a href="/insights/top-healthcare-market-research-companies-uae-2026">top healthcare market research companies in the UAE 2026</a> and <a href="/pharmaceutical-companies-uae">pharmaceutical companies in the UAE</a>.</p>

<h2 id="why-bionixus">Why choose BioNixus for diabetes market research UAE after the 2026 price cuts?</h2>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians. Custom study pricing is typically $10k–$60k. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London EC1V 2NX and Cairo (Sheikh Zayed, Giza). Dubai, Al Khobar and Salmiya, Kuwait (Olympia Mall) are field offices, and it is in the process of opening a São Paulo office by the end of 2026. LATAM work is covered from the US office with a strong local consultant network.</p>

<p>Choose BioNixus when the decision depends on why UAE endocrinologists, pharmacists and payers act as they do after a federal list cut, rather than on a syndicated antidiabetics total. Each study is built around one decision — a pricing certificate, a re-pricing request, a listing or a share defence — and is reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers the agreed scope and timeline, not the accuracy of findings. Where reviews are relevant, BioNixus has 40 client reviews. The written guarantees are: replace non-qualifying respondents at no charge; a minimum sample; re-field at our cost if agreed quotas are missed; and a pilot fee credited to the main field.</p>

<p>See also <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a>, <a href="/diabetes-market-research-uae">diabetes market research in the UAE</a>, <a href="/uae-pricing-reimbursement-strategy">UAE pricing and reimbursement strategy</a> and the <a href="/insights/top-healthcare-market-research-companies-uae-2026">2026 UAE healthcare market research ranking</a>.</p>

<p>To brief a UAE diabetes pricing, switching or post-cut listing study, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const DIABETES_UAE_CUTS_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const DIABETES_UAE_CUTS_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is diabetes market research UAE after the 2026 price cuts?',
    answer:
      'Diabetes market research UAE after the 2026 price cuts is commissioned primary research on how EDE Decision 12 of 2026 changed list prices, analog risk, physician switching, pharmacy behaviour and payer listing for diabetes brands. It is not a syndicated antidiabetics market-size report, and it is not an IDF prevalence slide.',
  },
  {
    question: 'Did the Emirates Drug Establishment cut diabetes medicine prices in 2026?',
    answer:
      'Yes, as part of a wider list. Gulf News reported that EDE Decision No. 12 of 2026 reduced retail prices of 168 pharmaceutical products used for chronic and critical illnesses, including diabetes. The named Type 2 examples were Amaryl 1 mg (AED 25 to AED 19), Amaryl 2 mg (AED 39.50 to AED 32) and Amaryl 3 mg (AED 57.50 to AED 47.50). Amaryl is glimepiride. The report did not publish GLP-1, SGLT2, DPP-4 or insulin cuts as diabetes examples.',
  },
  {
    question: 'How large were the published diabetes list cuts compared with other products?',
    answer:
      'On the published AED pairs, Amaryl 1 mg fell 24%, 2 mg about 19% and 3 mg about 17%. In the same decision, Zocor 40 mg fell about 59.5% and Xalatan about 51.7%, and the press range for the 168 products was about 5% to nearly 60%. Do not convert that headline range into a diabetes class cut.',
  },
  {
    question: 'Is IDF’s 20.7% the right UAE diabetes figure for a 2026 forecast?',
    answer:
      'It is one published method, not the only one. The IDF Atlas 11th edition estimates 1,274.2 thousand adults 20–79 with diabetes in 2024 and a 20.7% age-standardised prevalence, with 64% undiagnosed. MOHAP’s 2017–2018 survey put diabetes among adults 18+ at 11.8%. The 2024–2025 MOHAP survey reported 12.5% elevated blood glucose. Dubai’s 2019 household survey found 19.3% among Emiratis and 12.4% among expatriates. Do not average them.',
  },
  {
    question: 'Does a federal EDE price cut mean DHA or Thiqa will fund the product?',
    answer:
      'No. Article 20 of Decree-Law 38/2024 requires a specific EDE-set price before marketing. Dubai Law 11 of 2013 and Abu Dhabi’s Thiqa / employer rules still decide who pays. DoH Circular 188/2025 launched a Thiqa diabetes disease-management pilot for adults 18+ with two outpatient visits and HbA1c of 6.5% or higher. That is a care pathway, not a formulary listing. Commission payer interviews separately.',
  },
  {
    question: 'What should a brand team commission after Decision 12?',
    answer:
      'A dose-level analog map of the named SKUs, anonymous physician PRFs for new versus continuing patients by class, pharmacy interviews on substitution and DDC price-field timing, and separate DHA, DOH and insurer interviews. Watch the other H1 2026 pricing decisions. Keep oral GLP-1 obesity research as a separate brief.',
  },
  {
    question: 'Why commission BioNixus for diabetes market research UAE?',
    answer:
      'BioNixus runs custom primary research from a Dubai field office, with a network of about 3,200 physicians, and prices typical custom studies at $10k–$60k. The work is designed around one decision — a pricing certificate, a listing or a share defence — and reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers scope and timeline, not findings.',
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
  countWords(DIABETES_UAE_CUTS_EXECUTIVE_SUMMARY_HTML) +
  countWords(DIABETES_UAE_CUTS_BODY_HTML) +
  FAQ_WORD_COUNT;

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
      'Tell us the decision you need to make. BioNixus scopes endocrinologist, pharmacy and payer research around it, from a Dubai field office and a network of about 3,200 physicians.',
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
