/**
 * Hardcoded SEO blog post: /blog/biosimilar-market-entry-research-saudi-arabia
 * Series article 2 (after /blog/who-does-obesity-market-research-saudi-arabia) for the query
 * "biosimilar market entry research Saudi Arabia". Feeds:
 * - /biosimilar-market-entry-saudi-arabia (entry guide)
 * - /market-reports/saudi-arabia-biosimilars-market-report
 * Every regulatory, procurement, company and study statement is taken from the cited document
 * (all accessed 2026-10-11). Arabic-only sources (SFDA substitution mechanism, NUPCO booklet)
 * are summarised in English.
 */
import type { BlogPost } from '@/types/blog';
import {
  ALSAADANY_AUTHOR,
  MENA_AUTHORS,
  WESTERN_AUTHORS,
  personAuthorJsonLd,
  withAlsaadanyPersonJsonLd,
} from '@/data/editorialAuthors';
import { GOOGLE_OFFICES } from '@/data/googleLocations';
import { ORG_ID, ORG_LOGO, ORG_NAME, ORG_SAME_AS } from '@/lib/seo/organization';

export const SAUDI_BIOSIMILAR_ENTRY_SLUG = 'biosimilar-market-entry-research-saudi-arabia';

export const SAUDI_BIOSIMILAR_ENTRY_PATH = `/blog/${SAUDI_BIOSIMILAR_ENTRY_SLUG}`;

export const SAUDI_BIOSIMILAR_ENTRY_URL = `https://www.bionixus.com${SAUDI_BIOSIMILAR_ENTRY_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts, which supplies the job
 * title. Undefined keeps the template default ("BioNixus Research Team") in JSON-LD and
 * article:author, with no visible byline.
 */
export const SAUDI_BIOSIMILAR_ENTRY_AUTHOR_NAME: string | undefined = 'Martha DeVito';

/** Optional public profile (e.g. LinkedIn) for that author; becomes the Person url and sameAs. */
export const SAUDI_BIOSIMILAR_ENTRY_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const SAUDI_BIOSIMILAR_ENTRY_COVER_IMAGE =
  '/images/blog/biosimilar-market-entry-research-saudi-arabia-cover.jpg';

export const SAUDI_BIOSIMILAR_ENTRY_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover: biosimilar entry in Saudi Arabia after the SFDA’s 2026 guideline, with the SFDA price caps for biosimilars';

/** Text-free version of the cover for the on-page hero and blog cards, where the h1 sits over the image. */
export const SAUDI_BIOSIMILAR_ENTRY_HERO_IMAGE =
  '/images/blog/biosimilar-market-entry-research-saudi-arabia-hero.jpg';

export const SAUDI_BIOSIMILAR_ENTRY_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for the Saudi biosimilar market entry research guide: unlabelled bars stepping down like the SFDA biosimilar price caps';

export const SAUDI_BIOSIMILAR_ENTRY_META_TITLE = 'Biosimilar Market Entry Research Saudi Arabia: SFDA 2026';

export const SAUDI_BIOSIMILAR_ENTRY_META_DESCRIPTION =
  'Biosimilar market entry research Saudi Arabia: what the SFDA 2026 guideline changes, how price caps and NUPCO tenders work, and what to research first.';

export const SAUDI_BIOSIMILAR_ENTRY_DISPLAY_TITLE = 'Biosimilar Entry in Saudi Arabia After the SFDA’s 2026 Guideline';

/** Rendered inside the <h1> under the title. */
export const SAUDI_BIOSIMILAR_ENTRY_DISPLAY_SUBTITLE =
  'Biosimilar market entry research Saudi Arabia: what to study before the tender';

export const SAUDI_BIOSIMILAR_ENTRY_BREADCRUMB_LABEL = 'Saudi biosimilar entry research';

export const SAUDI_BIOSIMILAR_ENTRY_EXCERPT =
  'What the SFDA’s June 2026 biosimilar guideline changes, how SFDA price caps, NUPCO tenders and CHI insurance rules shape a launch, what published Saudi evidence shows, and the research to commission before the tender.';

export const SAUDI_BIOSIMILAR_ENTRY_PUBLISHED_ISO = '2026-10-11T12:00:00.000Z';
export const SAUDI_BIOSIMILAR_ENTRY_UPDATED_ISO = '2026-10-11T12:00:00.000Z';

export const SAUDI_BIOSIMILAR_ENTRY_CATEGORY = 'Market Access';

export const SAUDI_BIOSIMILAR_ENTRY_TAGS = [
  'Biosimilars',
  'Saudi Arabia',
  'SFDA',
  'Market Entry',
  'Market Access',
  'NUPCO',
  'Drug Pricing',
  'Primary Research',
];

const ACCESSED = 'accessed 11 October 2026';

type Reference = { id: string; label: string; url: string; scholarly?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'sfda-guideline',
    label: 'Saudi Food and Drug Authority (SFDA). General Guideline on Regulatory and Scientific Requirements for Development and Approval of Biosimilars, version 1.0 (DS-G-138-V01/260510). Issued 10 June 2026; implemented 10 July 2026.',
    url: 'https://sfda.gov.sa/sites/default/files/2026-08/GGRSRBA_1.pdf',
  },
  {
    id: 'sfda-quality-2025',
    label: 'SFDA. Guidelines on Quality Considerations for Development and Comparability Assessment of Biosimilars, version 2.0 (DS-G-042-V02). Updated 17 June 2025; implemented 17 August 2025. Sections 4.3 and 5.2.6.',
    url: 'https://www.sfda.gov.sa/sites/default/files/2025-06/Guideline%20on%20Quality%20Considerations%20for%20Development%20and%20Comparability%20Assessment%20of%20Biosimilars_.pdf',
  },
  {
    id: 'sfda-clinical-2023',
    label: 'SFDA. Clinical Considerations for Efficacy and Safety Assessment, version 1.0 (DS-G-097-V01). Published 10 July 2023; implemented 10 August 2023. Section 5.1.4, Biosimilar.',
    url: 'https://www.sfda.gov.sa/sites/default/files/2023-07/Clinical_Considerations_forEfficacy_andSafety_final.pdf',
  },
  {
    id: 'sfda-substitution-2023',
    label: 'SFDA. Mechanism for the substitution and replacement of medicines registered with the SFDA (آلية الاستبدال والإحلال للأدوية المسجلة في الهيئة العامة للغذاء والدواء), version 2.0 (DS-G-056-V02), updated 26 February 2023. In Arabic; general recommendations and the section on biological medicines.',
    url: 'https://www.sfda.gov.sa/sites/default/files/2023-02/SFDADDD.pdf',
  },
  {
    id: 'sfda-framework',
    label: 'SFDA. Regulatory Framework for Drugs Approval, version 6.4 (DS-G-001-V6.4), 11 June 2024. Glossary and section 3.5, registration performance targets.',
    url: 'https://www.sfda.gov.sa/sites/default/files/2024-06/RegulatoryFramework_0.pdf',
  },
  {
    id: 'sfda-priority',
    label: 'SFDA. Guidance for Priority Review of Product Registration, version 5.3 (DS-G-003-V5.3), updated 11 February 2024. Sections II.B, III.B and IV.B.',
    url: 'https://www.sfda.gov.sa/sites/default/files/2024-02/ProrityReviewGuidanceV52_0.pdf',
  },
  {
    id: 'sfda-verification',
    label: 'SFDA. Verification and Abridged Pathways, version 3.0 (DS-G-020-V03), 20 October 2025; implemented 20 January 2026. Sections 1.3 and 3 and FAQ 8.1.',
    url: 'https://sfda.gov.sa/sites/default/files/2025-10/VerificationAbridgedPathways3.pdf',
  },
  {
    id: 'sfda-pricing',
    label: 'SFDA. Pricing Rules for Pharmaceutical Products (DS-REQ-082-V03/210114), approved by SFDA Board of Directors resolution 12-26-1442; effective 14 January 2021. Articles 4 to 7, 9, 12, 15, 23 and 26 and Attachment 1.',
    url: 'https://www.sfda.gov.sa/sites/default/files/2022-10/PharmaceuticalPricingRulesE.pdf',
  },
  {
    id: 'nupco-oncology-booklet',
    label: 'National Unified Procurement Company (NUPCO). Terms and conditions of the open framework agreement for oncology medicines, tender NPT0047/25. In Arabic; clauses 1.1, 2.7, 2.9, 5.2 and 7.6.',
    url: 'https://www.nupco.com/wp-content/uploads/2025/12/%D9%83%D8%B1%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%88%D8%B7-NPT0047-25.pdf',
  },
  {
    id: 'nupco-oncology-list',
    label: 'NUPCO. Tender NPT0047/25 final item list, 25 December 2025.',
    url: 'https://www.nupco.com/wp-content/uploads/2025/12/NPT0047-25-FINAL-LIST.pdf',
  },
  {
    id: 'lc-regulation',
    label: 'Regulations on Preference for Local Content and Local SMEs and Companies Listed on the Capital Market in Business and Procurement Transactions, Council of Ministers Resolution No. 245, 26 November 2019 (Ministry of Finance English translation). Articles 9 to 11.',
    url: 'https://www.mof.gov.sa/en/docslibrary/RegulationsInstructions/Documents/Regulations%20on%20Preference%20for%20Local%20Content%20and%20Local%20SMEs%20and%20Companies%20Listed%20on%20the%20Capital%20Market%20in%20Business%20and%20Procurement%20Transactions2.pdf',
  },
  {
    id: 'chi-ebp',
    label: 'Council of Health Insurance (CHI). Basic Health Insurance Policy: Updated Essential Benefit Package (effective 1 October 2022), medication copayment.',
    url: 'https://www.chi.gov.sa/en/knowledge-center/health-insurance-policies/unified%20policy/Updated%20Essential%20Benefit%20Package%20%20(%20effective%201%20October%202022).pdf',
  },
  {
    id: 'chi-udf-guide',
    label: 'CHI. CHI Drug Formulary Master Excel Sheet User Guide (Unified Drug Formulary), June 2023. Field definitions, drug type.',
    url: 'https://www.chi.gov.sa/Style%20Library/IDF_Branding/CHI%20Drug%20Formulary%20Master%20Excel%20Sheet%20User%20Guide.pdf',
  },
  {
    id: 'chi-ddf-webinar',
    label: 'CHI. DDF Educational Webinar 3: Guiding Biologics Prescribing, Dispensing and Coverage in the Saudi Private Healthcare Sector. Slide deck, undated (its sources run to June 2025).',
    url: 'https://www.chi.gov.sa/knowledge-center/health-insurance-policies/Documents/DDF%20Webinar%203_BiologicsPrescribing%20Dispensing%20and%20Coverage_ed7.pdf',
  },
  {
    id: 'biotech-strategy',
    label: 'Saudi Vision 2030. The National Biotechnology Strategy, January 2024. Page 11, Biomanufacturing and Localization.',
    url: 'https://www.vision2030.gov.sa/media/5hqj4m1t/national-biotech-strategy-en.pdf',
  },
  {
    id: 'pif-lifera',
    label: 'Public Investment Fund (PIF). PIF Makes Major Health Sector Investment with the Establishment of “Lifera”, a Pharmaceutical Manufacturing Company. Press release, 18 June 2023.',
    url: 'https://www.pif.gov.sa/en/news-and-insights/press-releases/2023/lifera/',
  },
  {
    id: 'tadawul-jamjoom-2025',
    label: 'Jamjoom Pharmaceuticals Factory Co. Signing of a non-binding term sheet with Pharmaceutical Investment Company in relation to a potential strategic partnership. Saudi Exchange announcement, 27 October 2025.',
    url: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/newsandreports/issuer-news/issuer-announcements/issuer-announcements-details/?anCat=1&anId=90973&cs=4015&locale=en',
  },
  {
    id: 'tadawul-jamjoom-2026',
    label: 'Jamjoom Pharmaceuticals Factory Co. Latest developments on the non-binding term sheet with Pharmaceutical Investment Company. Saudi Exchange announcement, 23 July 2026.',
    url: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/newsandreports/issuer-news/issuer-announcements/issuer-announcements-details/?anCat=1&anId=96958&cs=4015&locale=en',
  },
  {
    id: 'tadawul-spimaco-bio',
    label: 'Saudi Pharmaceutical Industries and Medical Appliances Corporation (SPIMACO). Establishment of a fully owned subsidiary, SPIMACO Bio. Saudi Exchange announcement, 4 January 2026.',
    url: 'https://www.saudiexchange.sa/wps/portal/saudiexchange/newsandreports/issuer-news/issuer-announcements/issuer-announcements-details/?anCat=1&anId=92433&cs=2070&locale=en',
  },
  {
    id: 'tabuk-biothera',
    label: 'Tabuk Pharmaceuticals. Tabuk Pharmaceuticals Partners with Bio-Thera Solutions for Rights to Manufacture and Commercialize BAT2206, a Stelara (Ustekinumab) Biosimilar in Saudi Arabia. Press release, 17 December 2024.',
    url: 'https://www.tabukpharmaceuticals.com/tabuk-pharmaceuticals-partners-with-bio-thera-solutions-forrights-to-manufacture-and-commercialize-bat2206a-stelara-ustekinumab-biosimilar-in-saudi-arabia/',
  },
  {
    id: 'mabwell-tabuk',
    label: 'Mabwell. Mabwell Announces Strategic Partnership with TABUK to Launch Biosimilars in the MENA Region. News release, 11 December 2024.',
    url: 'https://mabwell.com/en/news_info/id-166.html',
  },
  {
    id: 'hikma-celltrion',
    label: 'Hikma Pharmaceuticals. Hikma and Celltrion strengthen partnership to expand biosimilar access in MENA. Press release, 6 October 2025.',
    url: 'https://www.hikma.com/news/hikma-and-celltrion-strengthen-partnership-to-expand-biosimilar-access-in-mena/',
  },
  {
    id: 'aljahili-2025',
    label: 'Aljahili SS, Alshuwairikh SS, AlKhaldi A, Althiban A, Hafiz R, Korayem GB, Alkofide H. Safety of Switching from a Reference Biologic to Its Biosimilar: A Systematic Review and Meta-Analysis. Biologics. 2025;5(1):6. doi:10.3390/biologics5010006.',
    url: 'https://doi.org/10.3390/biologics5010006',
    scholarly: true,
  },
  {
    id: 'omair-2022',
    label: 'Omair MA, et al. Perception of Biosimilar Biologics and Non-Medical Prescription Switching among Rheumatologists: A Saudi Society for Rheumatology Initiative. Saudi Pharm J. 2022;30(1):39–44. doi:10.1016/j.jsps.2021.10.012.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8802094/',
    scholarly: true,
  },
  {
    id: 'alqahtani-2025',
    label: 'Alqahtani S, Almanasef M. Knowledge and Attitude of Aseer Region Pharmacists Toward Biosimilar Medicines: A Descriptive Study. Healthcare (Basel). 2025;13(24):3295. doi:10.3390/healthcare13243295.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12732877/',
    scholarly: true,
  },
  {
    id: 'khan-2020',
    label: 'Khan MA, et al. Emerging Role of Biosimilars in Oncology-Hematology in Saudi Arabia: A Practical Perspective. Glob J Qual Saf Healthc. 2020;3(1):22–29. doi:10.4103/JQSH.JQSH_15_19.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10335781/',
    scholarly: true,
  },
  {
    id: 'alruthia-2022',
    label: 'AlRuthia Y, et al. Real-World Impact of Switching From Insulin Glargine (Lantus) to Basaglar and Potential Cost Saving in a Large Public Healthcare System in Saudi Arabia. Front Public Health. 2022;10:852721. doi:10.3389/fpubh.2022.852721.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9234164/',
    scholarly: true,
  },
  {
    id: 'najjar-2026',
    label: 'Najjar RH, et al. Safety and Efficacy of Adalimumab Biosimilar in Psoriasis and Hidradenitis Suppurativa: A Clinical Experience. Saudi Med J. 2026;47(7):1196–1201. doi:10.15537/1658-3175.8808.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13264143/',
    scholarly: true,
  },
  {
    id: 'almandeel-2025',
    label: 'Almandeel T, et al. Real-World Evidence Assessing the Safety of Administering Intravenous Rituximab Biosimilar in the First Cycle and Subcutaneous Rituximab in Subsequent Cycles. Pharmacy (Basel). 2025;13(3):83. doi:10.3390/pharmacy13030083.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12196662/',
    scholarly: true,
  },
  {
    id: 'alshammri-2026',
    label: 'Alshammri NT, Alluwaymi WS, Assiri GA, Alshammari TM. Biologics and biosimilars medication errors in Saudi Arabia: a nationwide retrospective observational real-world study. Front Med (Lausanne). 2026;13:1795867. doi:10.3389/fmed.2026.1795867.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13096075/',
    scholarly: true,
  },
  {
    id: 'sdaia-guide',
    label: 'Saudi Data & Artificial Intelligence Authority (SDAIA). Guide to the Saudi Personal Data Protection Law.',
    url: 'https://dgp.sdaia.gov.sa/wps/wcm/connect/f579bc32-fda8-47bd-bc6f-66b8cb77985c/ENG-Guide+to+the+saudi+PDP+law+for+controllersprocessors.pdf?MOD=AJPERES',
  },
  {
    id: 'pdpl-text',
    label: 'SDAIA. Personal Data Protection Law (English translation), Articles 1, 2 and 23.',
    url: 'https://sdaia.gov.sa/en/SDAIA/about/Documents/PersonalDataProtectionLaw.pdf',
  },
];

export const SAUDI_BIOSIMILAR_ENTRY_REFERENCES: readonly Reference[] = REFERENCES;

const REFERENCE_BY_ID = new Map(REFERENCES.map((ref) => [ref.id, ref]));

function escapeAttr(url: string): string {
  return url.replace(/&/g, '&amp;');
}

function cite(id: string, text: string): string {
  const ref = REFERENCE_BY_ID.get(id);
  if (!ref) throw new Error(`Unknown reference: ${id}`);
  return `<a href="${escapeAttr(ref.url)}" target="_blank" rel="noopener noreferrer">${text}</a>`;
}

const REFERENCES_HTML = `<ol>
${REFERENCES.map(
  (ref) =>
    `<li id="ref-${ref.id}">${ref.label} <a href="${escapeAttr(ref.url)}" target="_blank" rel="noopener noreferrer">Source</a> (${ACCESSED}).</li>`,
).join('\n')}
</ol>`;

export const SAUDI_BIOSIMILAR_ENTRY_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'What the 2026 guideline changed', anchor: 'what-changed' },
  { heading: 'How registration works now', anchor: 'registration-path' },
  { heading: 'How biosimilars are priced', anchor: 'pricing' },
  { heading: 'Who buys: NUPCO and insurers', anchor: 'who-buys' },
  { heading: 'What the Saudi evidence shows', anchor: 'saudi-evidence' },
  { heading: 'Who is building local capacity', anchor: 'local-manufacturing' },
  { heading: 'What a market entry study should answer', anchor: 'biosimilar-market-entry-research-saudi-arabia' },
  { heading: 'Which method answers which question', anchor: 'research-methods' },
  { heading: 'Questions to ask before you commission', anchor: 'briefing-questions' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const SAUDI_BIOSIMILAR_ENTRY_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Biosimilar market entry research Saudi Arabia teams need in 2026 starts where the SFDA’s June 2026 guideline stops. The guideline lets some biosimilars skip comparative efficacy trials and treats approved biosimilars as interchangeable. Research must show whether prescribers, pharmacists and hospital buyers act on that, and what each molecule earns under SFDA price caps and NUPCO tenders.</p>`;

const CHANGES_TABLE_HTML = `<table>
<thead><tr><th>Topic</th><th>Earlier SFDA position</th><th>2026 guideline</th></tr></thead>
<tbody>
<tr><td>Comparative efficacy trials</td><td>Clinical comparability “needs to be established using a well conducted clinical trial” (2023 clinical guidance)</td><td>Requested case by case; quality data plus a comparative pharmacokinetic study can prove biosimilarity in most cases</td></tr>
<tr><td>Interchangeability</td><td>Registered biosimilars can be substituted within their approved indications, with patient monitoring (2023 substitution mechanism)</td><td>Approved biosimilars are “considered interchangeable”, with no extra switching studies</td></tr>
<tr><td>Reference product</td><td>Same source as the product registered with the SFDA, or bridging data (2023 clinical guidance)</td><td>From the Saudi market or a stringent-regulator market; one single-sourced main comparator; never another biosimilar</td></tr>
<tr><td>Batches in the quality comparison</td><td>Number to be justified (2025 quality guideline)</td><td>At least 15 reference product and 10 biosimilar batches</td></tr>
<tr><td>Extrapolation to other indications</td><td>Only indications the SFDA approved for the reference product (2023 clinical guidance)</td><td>Accepted with scientific justification, subject to patents</td></tr>
</tbody>
</table>`;

const PRICING_TABLE_HTML = `<table>
<thead><tr><th>Event</th><th>SFDA rule</th><th>Article</th></tr></thead>
<tbody>
<tr><td>First biosimilar registered</td><td>Reference biologic’s price cut by 20% in all strengths and pack sizes</td><td>6</td></tr>
<tr><td>First biosimilar</td><td>No more than 75% of the reference biologic’s price before that cut</td><td>7A</td></tr>
<tr><td>Second biosimilar</td><td>No more than 65% of that price</td><td>7B</td></tr>
<tr><td>Third biosimilar and later</td><td>No more than 55% of that price</td><td>7C</td></tr>
<tr><td>Reference biologic re-priced at renewal</td><td>Biosimilar prices reviewed to keep a gap of at least 15%</td><td>12C</td></tr>
<tr><td>Generics, for comparison</td><td>Innovator cut by 25%; generics capped at 70%, 65% and 60%</td><td>4 and 5</td></tr>
</tbody>
</table>`;

const METHODS_TABLE_HTML = `<table>
<thead><tr><th>Entry question</th><th>Who to ask</th><th>Method</th></tr></thead>
<tbody>
<tr><td>Will physicians initiate and switch?</td><td>Rheumatologists, gastroenterologists, dermatologists, oncologists, haematologists and endocrinologists in public and private practice</td><td>Quantitative survey with specialty quotas, plus in-depth interviews</td></tr>
<tr><td>Will pharmacies substitute?</td><td>Hospital and community pharmacists</td><td>Survey with dispensing scenarios</td></tr>
<tr><td>What will hospitals list and buy?</td><td>Formulary and pharmacy and therapeutics committee members, pharmacy directors</td><td>In-depth interviews and account mapping</td></tr>
<tr><td>What price wins a tender line?</td><td>Procurement and supply specialists, hospital pharmacy directors</td><td>Interviews and price-sensitivity modelling against the SFDA caps</td></tr>
<tr><td>How will insurers tier the product?</td><td>Insurer pharmacy and medical directors</td><td>Payer interviews</td></tr>
<tr><td>What do patients need to accept a switch?</td><td>Patients on biologics and the nurses and educators who support them</td><td>Patient interviews and surveys</td></tr>
</tbody>
</table>`;

const NARRATIVE_HTML = `<p>On 10 June 2026 the Saudi Food and Drug Authority (SFDA) issued a General Guideline on Regulatory and Scientific Requirements for Development and Approval of Biosimilars, which took effect on 10 July 2026 (${cite('sfda-guideline', 'SFDA, 2026')}). It lets developers ask to skip comparative efficacy trials when quality and pharmacokinetic data are strong, and it states that a biosimilar approved to the SFDA’s standards “is considered interchangeable” with its reference product. For brand, access and commercial teams, that moves the hard questions from the dossier to the market: which hospitals will switch, how far the reference product’s price will fall, and what NUPCO and private insurers will pay for. This guide sets out what changed, how pricing and procurement work, what published Saudi evidence shows and which research answers each question. It sits alongside our <a href="/healthcare-market-research">healthcare market research hub</a> and our <a href="/biosimilar-market-entry-saudi-arabia">Saudi Arabia biosimilar market entry guide</a>.</p>

<div class="value-box">
<p><strong>Quick facts: biosimilar entry in Saudi Arabia, October 2026</strong></p>
<ul>
<li><strong>10 July 2026:</strong> the SFDA’s biosimilar guideline, issued on 10 June 2026, took effect (${cite('sfda-guideline', 'SFDA')}).</li>
<li><strong>15 and 10 batches:</strong> the minimum numbers of reference product and biosimilar batches in the comparative quality exercise, with case-by-case flexibility for orphan medicines (${cite('sfda-guideline', 'SFDA')}).</li>
<li><strong>6 months:</strong> how far ahead of submission the SFDA asks applicants to share an outline of their biosimilarity protocol (${cite('sfda-guideline', 'SFDA')}).</li>
<li><strong>60 working days:</strong> the SFDA’s response time for a request to waive comparative clinical studies (${cite('sfda-guideline', 'SFDA')}).</li>
<li><strong>20%, then 75%, 65% and 55%:</strong> registering the first biosimilar cuts the reference biologic’s price by 20%, and the first, second and later biosimilars are capped at 75%, 65% and 55% of its original price (${cite('sfda-pricing', 'SFDA Pricing Rules')}).</li>
<li><strong>280 and 405 working days:</strong> the SFDA’s performance targets for human biologics registered, or not registered, with a stringent regulatory authority; priority review, open to a first biosimilar, cuts them by 40% (${cite('sfda-framework', 'SFDA')}; ${cite('sfda-priority', 'SFDA')}).</li>
<li><strong>24 molecules, 56 trade names:</strong> SFDA-approved biosimilars as of January 2025, in a Council of Health Insurance count drawn from the SFDA drugs list (${cite('chi-ddf-webinar', 'CHI')}).</li>
<li><strong>&gt;60%:</strong> the biosimilar adoption goal in the National Biotechnology Strategy of January 2024 (${cite('biotech-strategy', 'Vision 2030')}).</li>
</ul>
</div>

<h2 id="what-changed">What did the SFDA’s 2026 biosimilar guideline change?</h2>

<p>The guideline, version 1.0, sets out the SFDA’s general scientific and regulatory requirements for developing and approving biosimilars. It covers well-characterised proteins and polypeptides made by biotechnology, excludes blood products, vaccines, advanced therapies and synthetic peptides, and is meant to be read with the SFDA’s quality, clinical and registration guidance and its pricing rules (${cite('sfda-guideline', 'SFDA, 2026')}). The table compares its main positions with earlier SFDA documents.</p>

${CHANGES_TABLE_HTML}

<p>Sources: ${cite('sfda-clinical-2023', 'SFDA clinical guidance, 2023')}; ${cite('sfda-substitution-2023', 'SFDA substitution mechanism, 2023')}; ${cite('sfda-quality-2025', 'SFDA quality guideline, 2025')}; ${cite('sfda-guideline', 'SFDA guideline, 2026')}.</p>

<h3>Comparative efficacy trials become case by case</h3>

<p>The guideline says comparative efficacy studies in patients are less sensitive than quality data, so they should be requested case by case, and that in most cases structural and functional comparison together with a comparative pharmacokinetic (and, where relevant, pharmacodynamic) study “could serve as proof of biosimilarity”. It reports that an SFDA internal analysis of all approved and rejected biosimilar applications found no product with a positive quality comparison and a negative clinical trial. Efficacy studies are still required when the reference product’s mechanism of action is unknown or poorly understood, when its structure cannot be sufficiently characterised, when differences in critical quality attributes cannot be justified, or when safety and immunogenicity cannot be shown in pharmacokinetic studies, for example for highly immunogenic or locally administered products. Without an efficacy study, the pharmacokinetic work must include immunogenicity testing, and a single-dose study may not be enough where anti-drug antibodies affect efficacy or safety over time (${cite('sfda-guideline', 'SFDA, 2026')}).</p>

<h3>Interchangeability is now stated outright</h3>

<p>The SFDA’s substitution mechanism, updated in February 2023, already treated any SFDA-registered biosimilar as a counterpart of its reference product that can be substituted within its approved indications. It left substitution to hospitals and healthcare providers and asked purchasers to weigh hospitals’ capacity to monitor patients and to avoid repeated replacements over short periods (${cite('sfda-substitution-2023', 'SFDA, 2023')}). The 2026 guideline goes further. It says a biosimilar approved to the SFDA’s standards “is considered interchangeable”, that no systematic switching studies are needed after authorisation, and that an internal SFDA analysis of switching studies for SFDA-approved biosimilars found no significant differences in anti-drug or neutralising antibodies. It separates switching, which the prescriber controls, from automatic substitution at the pharmacy, which it describes as mainly practised in tender-based systems, and it asks that interchange take account of differences such as excipients (${cite('sfda-guideline', 'SFDA, 2026')}). It also cites a 2025 meta-analysis of 12 randomised trials with 2,502 participants, five of whose seven authors are affiliated with the SFDA, which found no significant difference in adverse events, serious adverse events or treatment-related adverse events between patients who stayed on the reference product and those who switched (${cite('aljahili-2025', 'Aljahili et al., 2025')}).</p>

<h3>Stricter rules on the reference product</h3>

<p>The reference product must have expired patent and data exclusivity when the biosimilar is authorised, hold a full marketing authorisation from the SFDA or a stringent regulatory authority, and be sourced from the Saudi market or a stringent-regulator market. Developers should use one single-sourced reference product as the main comparator; lots from other markets need a three-way bridging comparison, and the reference product “must not be another biosimilar” (${cite('sfda-guideline', 'SFDA, 2026')}). The SFDA lists its stringent regulatory authorities for human medicines as the US FDA, the EMA, the MHRA, Swissmedic, Health Canada, Australia’s TGA and Japan’s PMDA (${cite('sfda-framework', 'SFDA Regulatory Framework')}).</p>

<h3>Minimum batch numbers and earlier engagement</h3>

<p>The comparative quality exercise should include at least 15 reference product batches of different ages and at least 10 biosimilar batches made with the intended commercial process and scale, considered case by case for biosimilars of orphan medicines. By comparison, the SFDA’s 2025 quality guideline asks that batch numbers be justified without setting a minimum (${cite('sfda-quality-2025', 'SFDA, 2025')}). Applicants are “strongly recommended” to send an outline of their biosimilarity protocol at least six months before submission, a step the SFDA says is not a pre-assessment of data. A request to waive comparative clinical studies goes in on a set form with a justification letter; the applicant receives an official response within 60 working days, and the SFDA’s recommendation is not legally binding on either side. Comparative animal studies are “normally not required” and, under the 3Rs principle, “not recommended” (${cite('sfda-guideline', 'SFDA, 2026')}).</p>

<h3>Wider extrapolation</h3>

<p>Once biosimilarity is shown for one indication, extrapolation to the reference product’s other indications “should be accepted with proper scientific justification” and in line with the SFDA’s patent policy. Extra functional data, such as Fc receptor binding and antibody-dependent cytotoxicity assays, are needed where the mechanism of action differs between indications (${cite('sfda-guideline', 'SFDA, 2026')}). The 2023 clinical guidance had said only indications the SFDA approved for the reference product would be considered (${cite('sfda-clinical-2023', 'SFDA, 2023')}).</p>

<h2 id="registration-path">How does a biosimilar get registered in Saudi Arabia in 2026?</h2>

<p>For a recombinant protein biosimilar, the path now runs as follows. Our <a href="/blog/sfda-drug-registration-guide">SFDA drug registration guide</a> covers the general process.</p>

<ol>
<li><strong>Check patents and exclusivity.</strong> The reference product’s patent and data exclusivity must have expired by the time the biosimilar is authorised, under the SFDA’s patent policy (${cite('sfda-guideline', 'SFDA, 2026')}).</li>
<li><strong>Source the reference product</strong> from the Saudi market or a stringent-regulator market, as described above.</li>
<li><strong>Agree the biosimilarity protocol early.</strong> The SFDA invites developers to seek scientific advice through formal meetings and asks for a protocol outline at least six months before submission.</li>
<li><strong>Decide whether to request a waiver</strong> of comparative clinical studies. The marketing authorisation holder applies with a justification letter and supporting data, and the SFDA replies within 60 working days.</li>
<li><strong>File a complete dossier</strong> in eCTD format: stand-alone quality data in Module 3, plus comparative quality, non-clinical and clinical data in Modules 3, 4 and 5 (${cite('sfda-guideline', 'SFDA, 2026')}).</li>
<li><strong>Request priority review if you are first.</strong> The SFDA’s priority review route covers “the first biosimilar to the innovative product” already registered with the SFDA or a stringent regulatory authority. It is requested in the eSDR application and cuts the performance target by 40% (${cite('sfda-priority', 'SFDA')}).</li>
<li><strong>Pass pricing and licensing.</strong> After evaluation and inspection, the SFDA prices the product under its pricing rules before the Registration Committee decides; marketing authorisations are renewed every five years (${cite('sfda-framework', 'SFDA')}).</li>
<li><strong>Plan pharmacovigilance and the product lifecycle.</strong> Once approved, a biosimilar is an independent product: it follows the SFDA’s pharmacovigilance rules, and later manufacturing changes are compared with its own earlier version rather than with the reference product (${cite('sfda-guideline', 'SFDA, 2026')}).</li>
</ol>

<p>The SFDA’s regulatory framework has no separate timeline for biosimilars. Its performance targets for human biologics are 280 working days when the product is registered with a stringent regulatory authority and 405 when it is not, including 20 days for pricing. They exclude business validation and pause whenever the SFDA waits for the applicant’s answers; under priority review they fall to 168 and 243 working days (${cite('sfda-framework', 'SFDA')}). The SFDA’s verification (30 working days) and abridged (60 working days) pathways rely on FDA and EMA assessment reports and, according to their guidance, accept “only new products (NCE) and biological products”; the guidance does not mention biosimilars by name. It requires filing within two years of the reference agency’s approval and, for biologicals, requires the biological substance and finished product to be made in one of 20 listed countries, a list that does not include South Korea, India or China (${cite('sfda-verification', 'SFDA')}).</p>

<p>Companies planning to make biosimilars in the Kingdom should note the SFDA’s definition: a biosimilar counts as locally manufactured only if the full biomanufacturing process, upstream and downstream, takes place in Saudi Arabia, and secondary packaging alone does not qualify. Where only drug substance or drug product steps move to a Saudi site, the main comparator should come from the market of one of the SFDA’s reference agencies, and the dossier needs a technology transfer plan with a process comparability study. A dossier that leans on the processes described in another approved biosimilar’s application is not accepted (${cite('sfda-quality-2025', 'SFDA, 2025')}).</p>

<h2 id="pricing">How are biosimilars priced in Saudi Arabia?</h2>

<p>The SFDA sets a maximum price for every registered medicine. Its Pricing Rules, effective since 14 January 2021 and listed in the 2026 guideline among the documents to read with it, give biosimilars their own price ladder (${cite('sfda-pricing', 'SFDA Pricing Rules')}; ${cite('sfda-guideline', 'SFDA, 2026')}).</p>

${PRICING_TABLE_HTML}

<p>Other rules shape the business case. The price the SFDA sets is a maximum, and companies may sell below it (Article 23). Re-pricing cuts are limited to 30% of the price (Article 9). For originators, the price of an innovative or biological product registered for a foreign company can be fixed for up to seven years once all manufacturing phases are fully transferred to the Kingdom and marketing starts (Article 15). Companies can apply for a price before registration, and the proposed price stands if the product is registered within nine months (Article 26). The price certificate form asks for prices in 16 reference countries, from Australia to the United Kingdom (Attachment 1) (${cite('sfda-pricing', 'SFDA Pricing Rules')}). Confirm with the SFDA which version of the rules applies when you file.</p>

<p>List prices are ceilings, and tender prices can sit far below them. In a study at National Guard Health Affairs, the gap between Lantus and its biosimilar Basaglar was 35.32% at SFDA public prices (US$15.81 against US$10.23 per pen), but the authors, citing expert opinion, put the lowest public tender offers at US$5.56 and US$5.15, only 7.37% apart (${cite('alruthia-2022', 'AlRuthia et al., 2022')}). In the same health system, Neupogen fell from SAR 450 to SAR 225 per vial after biosimilar filgrastim, priced at SAR 96, joined the formulary in February 2014 (${cite('khan-2020', 'Khan et al., 2020')}). Reference products respond on price, so a biosimilar forecast has to model the originator’s defence as well as the caps. Our note on <a href="/insights/saudi-arabia-biosimilar-market-size-methodology-2026">Saudi biosimilar market size methodology</a> explains why published market figures differ.</p>

<h2 id="who-buys">Who buys biosimilars in Saudi Arabia, and how do NUPCO tenders work?</h2>

<p>NUPCO, the National Unified Procurement Company, runs national tenders that serve government health entities across the Kingdom. Its tender booklets describe it as founded in 2008 and wholly owned by the Public Investment Fund, and define the entities it buys for as NUPCO itself or government health entities. Its open framework agreement for oncology medicines, tender NPT0047/25, shows how a biosimilar competes (${cite('nupco-oncology-booklet', 'NUPCO booklet')}; ${cite('nupco-oncology-list', 'NUPCO item list')}):</p>

<ul>
<li><strong>Lines are written by molecule, not brand.</strong> The item list, dated 25 December 2025, specifies each line by molecule, strength and presentation, and includes trastuzumab, bevacizumab, rituximab, filgrastim and pegfilgrastim.</li>
<li><strong>The lowest compliant offer wins.</strong> Awards go to the lowest financial offer that meets the specifications, for a product registered with the SFDA or past the technical evaluation stage of registration. Unregistered products are considered only when no registered offer exists, and then with conditions such as an SFDA-registered manufacturer or approval by Health Canada, the PMDA, the MHRA, the EMA, the TGA or the US FDA.</li>
<li><strong>NUPCO can split, negotiate and auction.</strong> It may divide one line between suppliers, negotiate with the best bidder or others, and use reverse auctions or agreements based on value or cost. Bidders commit that their price is among the lowest offered in the Kingdom and must tell NUPCO about any lower price they offer elsewhere during the tender, which then applies.</li>
<li><strong>The framework reopens.</strong> It is updated every six months for offers that earlier lacked SFDA or local content certificates and for products whose manufacture has been localised in Saudi Arabia, and yearly for other new products on lines NUPCO chooses to reopen. Awarded suppliers may update prices, but not above the agreed framework prices.</li>
<li><strong>Local content counts.</strong> The booklet applies the Regulations on Preference for Local Content and asks manufacturers of pharmaceutical products on the mandatory list for a local content baseline certificate. Under those regulations, a national product not on the mandatory list is compared as if foreign bids were 10% more expensive (${cite('lc-regulation', 'Local Content Regulations, Article 10')}).</li>
<li><strong>Market entry agreements apply.</strong> The booklet states that “pharmaceutical market entry agreements”, subject to special terms agreed with the stakeholders concerned, apply to its items.</li>
</ul>

<p>In private insurance, the rules come from the Council of Health Insurance (CHI). Its formulary guide classes an SFDA biosimilar as a generic and an originator biologic as a brand (${cite('chi-udf-guide', 'CHI, 2023')}). Under the Essential Benefit Package, a generic carries 20% co-insurance capped at SAR 30, while an innovative medicine with a generic alternative carries 0–50% (${cite('chi-ebp', 'CHI')}). A CHI webinar deck on its Daman Drug Formulary describes a two-tier model for biologics: biosimilars, and biologics with no alternative, at 20% co-insurance capped at SAR 30 per prescription, and originator biologics with approved and reimbursed biosimilars at 50% with no cap. Patients already on a biologic can request the lower tier with prior authorisation (${cite('chi-ddf-webinar', 'CHI')}). For the access side, see our <a href="/saudi-payer-market-access-research">Saudi payer and market access research</a>, our <a href="/blog/nupco-saudi-arabia-tendering-guide">NUPCO tendering guide</a> and the <a href="/nupco-tender-calendar-events-2026">NUPCO tender calendar for 2026</a>.</p>

<h2 id="saudi-evidence">What does published evidence say about biosimilar use in Saudi Arabia?</h2>

<p>Published Saudi evidence is mostly from single hospitals or single regions, and much of it comes from National Guard Health Affairs. We found no national data on biosimilar uptake by molecule. For market context, see the <a href="/market-reports/saudi-arabia-biosimilars-market-report">Saudi Arabia biosimilars market report</a> and our page on the <a href="/saudi-arabia-biologics-market">Saudi Arabia biologics market</a>.</p>

<h3>Hospitals switch by formulary decision</h3>

<ul>
<li><strong>Filgrastim:</strong> National Guard Health Affairs added biosimilar filgrastim to its formulary in February 2014. Between August 2017 and July 2018 it accounted for 26,908 of 34,806 G-CSF injections (77%), which the authors estimate saved SAR 3.47 million a year at the reduced originator price (${cite('khan-2020', 'Khan et al., 2020')}).</li>
<li><strong>Adalimumab:</strong> at King Abdulaziz Medical City in Riyadh, 57 patients with psoriasis or hidradenitis suppurativa were switched from Humira to Amgevita “following a hospital policy change regarding biologic therapies, primarily driven by cost considerations” (${cite('najjar-2026', 'Najjar et al., 2026')}).</li>
<li><strong>Rituximab:</strong> at the Princess Nourah Oncology Center in Jeddah, the authors report that their organisation replaced intravenous MabThera with the biosimilar Truxima in 2021 (${cite('almandeel-2025', 'Almandeel et al., 2025')}).</li>
<li><strong>Insulin glargine:</strong> a single-centre review of 100 National Guard patients switched from Lantus to Basaglar found no significant change in HbA1c (${cite('alruthia-2022', 'AlRuthia et al., 2022')}).</li>
</ul>

<h3>Rheumatologists are willing but divided</h3>

<p>In a November 2020 survey of the Saudi Society for Rheumatology, 143 of 249 members responded. 30.07% had prescribed a biosimilar and 18.18% had performed a non-medical switch; 60.8% were willing to prescribe a biosimilar and 56.6% to perform a non-medical switch. Yet 60.1% believed such switching might harm patients, 61.5% believed it could bring significant cost savings, and only 48.25% reported adequate knowledge of biosimilars (${cite('omair-2022', 'Omair et al., 2022')}).</p>

<h3>Pharmacists’ knowledge tests predate the new rules</h3>

<p>In a January to February 2024 survey of 298 pharmacists in the Aseer region, 45.3% showed good knowledge of biosimilars. The questionnaire scored “biosimilar drugs are not interchangeable with the biological reference drugs” as the correct answer, which only 26.2% gave (${cite('alqahtani-2025', 'Alqahtani and Almanasef, 2025')}). Under the SFDA’s 2026 guideline that statement is no longer the regulator’s position, so knowledge tests and training written before June 2026 may now mark the SFDA’s own view as wrong.</p>

<h3>Errors cluster where policies are missing</h3>

<p>Of 63,817 medication error reports involving biologics or biosimilars made to the Ministry of Health between 2020 and 2023, 846 (1%) concerned biosimilars, most often adalimumab (481) and teriparatide (232). The authors attribute the vulnerabilities with these two medicines mainly to a lack of clear policies, procedures and protocols (${cite('alshammri-2026', 'Alshammri et al., 2026')}).</p>

<h2 id="local-manufacturing">Who is building biosimilar capacity in Saudi Arabia?</h2>

<p>National policy points toward local production and wider use. The National Biotechnology Strategy, launched in January 2024, aims to build a domestic biomanufacturing platform able to export biologics and biosimilars, and to promote “the widespread adoption of biosimilars (&gt;60%)” to reduce medical expenses; it does not define the base for that percentage (${cite('biotech-strategy', 'National Biotechnology Strategy')}). Recent company disclosures show how the market is organising:</p>

<ul>
<li><strong>Lifera:</strong> the Public Investment Fund set up Lifera (Pharmaceutical Investment Company) in June 2023 as a contract development and manufacturing organisation for products including insulins, vaccines, plasma therapeutics and monoclonal antibodies (${cite('pif-lifera', 'PIF')}).</li>
<li><strong>Jamjoom Pharma and Lifera:</strong> after a non-binding term sheet in October 2025, Jamjoom signed binding share subscription and shareholders’ agreements on 22 July 2026 for a Lifera-incorporated company that will build, own and operate a Saudi facility to manufacture and commercialise vaccines, biologics and biosimilars. On completion, which is subject to conditions, Lifera will hold 51% and Jamjoom 49% (${cite('tadawul-jamjoom-2025', 'Saudi Exchange, October 2025')}; ${cite('tadawul-jamjoom-2026', 'Saudi Exchange, July 2026')}).</li>
<li><strong>SPIMACO:</strong> on 4 January 2026 SPIMACO announced a wholly owned subsidiary, SPIMACO Bio, to develop and manufacture biopharmaceuticals, which will start operating once regulatory approvals are in place (${cite('tadawul-spimaco-bio', 'Saudi Exchange, January 2026')}).</li>
<li><strong>Tabuk Pharmaceuticals:</strong> in December 2024 Tabuk took exclusive Saudi rights to Bio-Thera’s proposed ustekinumab biosimilar BAT2206, holding the marketing authorisation while Bio-Thera develops and supplies it from Guangzhou (${cite('tabuk-biothera', 'Tabuk Pharmaceuticals')}), and agreed with Mabwell to register and commercialise two biosimilars across the Middle East and North Africa (${cite('mabwell-tabuk', 'Mabwell')}).</li>
<li><strong>Hikma and Celltrion:</strong> in October 2025 the companies signed exclusive licensing agreements for six biosimilars across the Middle East and North Africa, with Hikma commercialising them and Celltrion developing, manufacturing and supplying them (${cite('hikma-celltrion', 'Hikma')}).</li>
</ul>

<p>Three rules connect these moves to the market: the SFDA’s definition of a locally manufactured biosimilar, NUPCO’s six-monthly window for localised products and the 10% price preference for national products in government tenders. For regional sizing, see our <a href="/market-reports/gcc-biosimilars-market-report">GCC biosimilars market report</a>.</p>

<h2 id="biosimilar-market-entry-research-saudi-arabia">Biosimilar market entry research Saudi Arabia: what should a study answer?</h2>

<p>The guideline settles how to get approved. It does not tell you who will switch, at what price or how fast. Based on the evidence above, most briefs should cover eight questions:</p>

<ol>
<li><strong>Do prescribers and pharmacists accept interchangeability?</strong> Measure awareness of the SFDA’s 2026 position and willingness to start new patients, switch stable patients and substitute at the pharmacy, by specialty. Rheumatologists were divided in 2020, and a 2024 pharmacist survey scored the opposite of the SFDA’s current position as correct.</li>
<li><strong>Who decides the switch in each channel?</strong> Map formulary and pharmacy and therapeutics committees, NUPCO line awards and insurer tiers; every published Saudi switch above followed an institutional decision.</li>
<li><strong>What price wins, and how will the originator respond?</strong> Start from the 20% cut and the 75%, 65% and 55% caps, then test tender expectations; the insulin glargine and filgrastim cases show tender and formulary prices well below list prices.</li>
<li><strong>When can you bid?</strong> Align SFDA registration with NUPCO cycles: registered products, or products past technical evaluation, compete in the base tender, while framework updates come every six months for some products and yearly for others.</li>
<li><strong>How much does localisation matter?</strong> Test how committees weigh national products under the 10% price preference and the mandatory list, and what a local manufacturing or licensing partner would change.</li>
<li><strong>How will private insurers tier the product?</strong> Interview insurers on CHI’s treatment of biosimilars as generics, the co-payment tiers and prior authorisation.</li>
<li><strong>What evidence do committees and clinicians ask for?</strong> Test demand for Saudi real-world data, immunogenicity monitoring and pharmacovigilance plans, especially where a comparative efficacy study was waived.</li>
<li><strong>Where do errors and confusion arise?</strong> Medication error reports point to missing policies for some biosimilars; ask pharmacists and nurses which protocols they need.</li>
</ol>

<p>For fieldwork design, see our guide to <a href="/physician-survey-saudi-arabia">physician surveys in Saudi Arabia</a> and our <a href="/healthcare-market-research/services/kol-mapping">KOL mapping service</a>.</p>

<h2 id="research-methods">Which research method answers which entry question?</h2>

${METHODS_TABLE_HTML}

<p>Commissioned research complements syndicated data rather than replacing it; if you are weighing an independent partner against a data provider, see our <a href="/iqvia-alternative-saudi-arabia">IQVIA alternative in Saudi Arabia</a> page.</p>

<h2 id="briefing-questions">What should you ask before commissioning biosimilar research in Saudi Arabia?</h2>

<ul>
<li>Which specialties and settings will you recruit (Ministry of Health, National Guard, military, university and private hospitals), and how many respondents per cell?</li>
<li>Will results separate starting new patients from switching stable patients, and prescriber-led switching from pharmacy substitution?</li>
<li>Does the questionnaire reflect the SFDA’s 2026 position on interchangeability, or an older one?</li>
<li>How will you model price: from the SFDA caps, from tender expectations, or both?</li>
<li>Will you interview procurement specialists and private insurers, not just clinicians?</li>
<li>How will you handle health data? Saudi Arabia’s Personal Data Protection Law applies to processing of personal data in the Kingdom and classes health data as sensitive data. It came into force on 14 September 2023, with a one-year grace period to 14 September 2024 (${cite('sdaia-guide', 'SDAIA')}; ${cite('pdpl-text', 'PDPL text')}).</li>
<li>Are questionnaires and discussion guides available in both Arabic and English?</li>
<li>Who owns the data, and can it be re-cut after delivery?</li>
</ul>

<h2 id="why-bionixus">Why choose BioNixus for biosimilar research in Saudi Arabia?</h2>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians. It covers the Middle East and Africa from offices in Cairo, its largest in the region, and Dubai, alongside an office in London and US headquarters in Sheridan, Wyoming. It is fully operational in Latin America, covered from the US office with a network of local consultants, and is in the process of opening a São Paulo office by the end of 2026. BioNixus positions itself as the agile, region-specialist alternative to global syndicated providers. For biosimilars, it builds each study around one launch or defence decision and reports it in a form brand, medical and access teams can use. See our <a href="/healthcare-market-research/therapy/biosimilars">biosimilars market research</a> page, <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a> and our <a href="/market-research-saudi-arabia-pharmaceutical">pharmaceutical market research company in Saudi Arabia</a> page.</p>

<p>Related reading: <a href="/insights/leading-biologics-biosimilars-market-research-companies-2026">leading biologics and biosimilars market research companies (2026)</a>, <a href="/blog/hta-dossier-saudi-arabia-market-access">HTA dossiers for Saudi market access</a> and the first article in this series, <a href="/blog/who-does-obesity-market-research-saudi-arabia">who does obesity market research in Saudi Arabia</a>.</p>

<p>To brief a Saudi biosimilar study, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const SAUDI_BIOSIMILAR_ENTRY_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const SAUDI_BIOSIMILAR_ENTRY_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is biosimilar market entry research in Saudi Arabia?',
    answer:
      'It is primary research that tests whether a biosimilar can win use and revenue in Saudi Arabia once it is approved. It combines surveys and interviews with prescribers, pharmacists, hospital formulary committees, procurement specialists and insurers with price modelling under the SFDA’s pricing rules and NUPCO’s tender terms.',
  },
  {
    question: 'What did the SFDA’s 2026 biosimilar guideline change?',
    answer:
      'Issued on 10 June 2026 and in force from 10 July 2026, the guideline makes comparative efficacy trials a case-by-case requirement and states that approved biosimilars are considered interchangeable with their reference products. It requires at least 15 reference product and 10 biosimilar batches in the comparative quality exercise, asks applicants to share an outline of their biosimilarity protocol at least six months before submission, and sets out a waiver request process with a 60-working-day response.',
  },
  {
    question: 'Does the SFDA still require comparative efficacy trials for biosimilars?',
    answer:
      'Not by default. The guideline says such trials should be requested case by case and that, in most cases, structural and functional comparison with a comparative pharmacokinetic study could prove biosimilarity. Trials remain necessary when the reference product’s mechanism of action is unknown or poorly understood, its structure cannot be sufficiently characterised, quality differences cannot be justified, or safety and immunogenicity cannot be shown in pharmacokinetic studies.',
  },
  {
    question: 'Are biosimilars interchangeable in Saudi Arabia?',
    answer:
      'According to the SFDA, yes. Its 2026 guideline says a biosimilar approved to its standards is considered interchangeable with its reference product, with no extra switching studies required, while differences such as excipients should be taken into account. Since February 2023 the SFDA’s substitution mechanism had already treated registered biosimilars as substitutable within their approved indications. Whether hospitals, prescribers, pharmacists and payers act on this is a question for research.',
  },
  {
    question: 'How are biosimilars priced in Saudi Arabia?',
    answer:
      'Under the SFDA’s Pricing Rules, effective since 14 January 2021, registering the first biosimilar cuts the reference biologic’s price by 20%. The first biosimilar may cost no more than 75% of the reference product’s original price, the second 65% and the third and later 55%. These are maximum prices: tenders and hospital contracts can settle well below them.',
  },
  {
    question: 'How long does SFDA registration of a biosimilar take?',
    answer:
      'The SFDA’s regulatory framework sets no separate timeline for biosimilars. Its performance targets for human biologics are 280 working days when the product is registered with a stringent regulatory authority and 405 when it is not, with the clock paused while the SFDA waits for the applicant. Priority review, available to the first biosimilar of a reference product, cuts these targets by 40%.',
  },
  {
    question: 'Do NUPCO tenders require SFDA registration?',
    answer:
      'NUPCO’s oncology medicines framework awards each line to the lowest compliant offer for a product registered with the SFDA or past the technical evaluation stage of registration. It considers unregistered products only when no registered offer exists, and then with conditions such as approval by a recognised regulator. The framework reopens every six months for offers that earlier lacked SFDA or local content certificates.',
  },
  {
    question: 'Does Saudi data protection law apply to biosimilar market research?',
    answer:
      'Saudi Arabia’s Personal Data Protection Law applies to the processing of personal data in the Kingdom and classes health data as sensitive data. It came into force on 14 September 2023, with a one-year grace period to 14 September 2024. Ask any provider how consent, storage and transfer of physician and patient data will be handled.',
  },
];

function visibleText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Counts word tokens (anything containing a letter or digit) in HTML or plain text. */
export function countWords(htmlOrText: string): number {
  return visibleText(htmlOrText)
    .split(' ')
    .filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

const FAQ_WORD_COUNT = SAUDI_BIOSIMILAR_ENTRY_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

/** Summary + body (including references) + visible FAQ: the article text a reader sees. */
export const SAUDI_BIOSIMILAR_ENTRY_WORD_COUNT =
  countWords(SAUDI_BIOSIMILAR_ENTRY_EXECUTIVE_SUMMARY_HTML) + countWords(SAUDI_BIOSIMILAR_ENTRY_BODY_HTML) + FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

/** Reading time leaves out the reference list. */
export const SAUDI_BIOSIMILAR_ENTRY_READING_TIME = Math.ceil(
  (countWords(SAUDI_BIOSIMILAR_ENTRY_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

/** Offices in the verified fact set; Al Khobar and Kuwait stay out of this page. */
const ARTICLE_OFFICE_IDS = new Set(['us', 'uk', 'eg', 'ae']);

const ARTICLE_SAME_AS = ORG_SAME_AS.filter(
  (url) => !GOOGLE_OFFICES.some((office) => !ARTICLE_OFFICE_IDS.has(office.id) && office.mapsUrl === url),
);

export const SAUDI_BIOSIMILAR_ENTRY_ORGANIZATION: Record<string, unknown> = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG_NAME,
  url: 'https://www.bionixus.com',
  logo: { '@type': 'ImageObject', url: ORG_LOGO, width: 512, height: 512 },
  foundingDate: '2012',
  description:
    'BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians. It has offices in London, Cairo and Dubai and US headquarters in Sheridan, Wyoming, covers Latin America from the US office with a network of local consultants, and is in the process of opening a São Paulo office by the end of 2026.',
  address: GOOGLE_OFFICES.filter((office) => ARTICLE_OFFICE_IDS.has(office.id)).map((office) => ({
    '@type': 'PostalAddress',
    ...office.address,
  })),
  sameAs: ARTICLE_SAME_AS,
  knowsAbout: [
    'Biosimilar market research',
    'Market access research',
    'Pharmaceutical market research',
    'Healthcare market research',
    'Pricing and tender research',
  ],
};

export type BiosimilarEntryAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

/** Byline fields and Person JSON-LD for a roster name. Unknown names still get a Person node. */
export function resolveBiosimilarEntryAuthor(name: string | undefined, profileUrl?: string): BiosimilarEntryAuthor {
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

const AUTHOR = resolveBiosimilarEntryAuthor(SAUDI_BIOSIMILAR_ENTRY_AUTHOR_NAME, SAUDI_BIOSIMILAR_ENTRY_AUTHOR_PROFILE_URL);

const SFDA_ENTITY = {
  '@type': 'GovernmentOrganization',
  name: 'Saudi Food and Drug Authority',
  alternateName: 'SFDA',
  url: 'https://www.sfda.gov.sa/en',
};

export const SAUDI_BIOSIMILAR_ENTRY_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-saudi-biosimilar-market-entry-research',
  slug: SAUDI_BIOSIMILAR_ENTRY_SLUG,
  title: SAUDI_BIOSIMILAR_ENTRY_DISPLAY_TITLE,
  excerpt: SAUDI_BIOSIMILAR_ENTRY_EXCERPT,
  date: '11 Oct 2026',
  category: SAUDI_BIOSIMILAR_ENTRY_CATEGORY,
  country: 'Saudi Arabia',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: SAUDI_BIOSIMILAR_ENTRY_READING_TIME,
  wordCount: SAUDI_BIOSIMILAR_ENTRY_WORD_COUNT,
  breadcrumbLabel: SAUDI_BIOSIMILAR_ENTRY_BREADCRUMB_LABEL,
  displaySubtitle: SAUDI_BIOSIMILAR_ENTRY_DISPLAY_SUBTITLE,
  tags: [...SAUDI_BIOSIMILAR_ENTRY_TAGS],
  coverImage: SAUDI_BIOSIMILAR_ENTRY_HERO_IMAGE,
  coverImageAlt: SAUDI_BIOSIMILAR_ENTRY_HERO_IMAGE_ALT,
  ogImage: SAUDI_BIOSIMILAR_ENTRY_COVER_IMAGE,
  ogImageAlt: SAUDI_BIOSIMILAR_ENTRY_COVER_IMAGE_ALT,
  ogTitle: SAUDI_BIOSIMILAR_ENTRY_META_TITLE,
  ogDescription: SAUDI_BIOSIMILAR_ENTRY_META_DESCRIPTION,
  seoMetaTitle: SAUDI_BIOSIMILAR_ENTRY_META_TITLE,
  seoMetaDescription: SAUDI_BIOSIMILAR_ENTRY_META_DESCRIPTION,
  seoCanonicalUrl: SAUDI_BIOSIMILAR_ENTRY_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: SAUDI_BIOSIMILAR_ENTRY_PUBLISHED_ISO,
  updatedAtIso: SAUDI_BIOSIMILAR_ENTRY_UPDATED_ISO,
  tableOfContents: SAUDI_BIOSIMILAR_ENTRY_TABLE_OF_CONTENTS,
  executiveSummary: SAUDI_BIOSIMILAR_ENTRY_EXECUTIVE_SUMMARY_HTML,
  faq: [...SAUDI_BIOSIMILAR_ENTRY_FAQ],
  ctaSection: {
    title: 'Planning a biosimilar launch in Saudi Arabia?',
    description:
      'Tell us the molecule and the decision you need to make. BioNixus scopes prescriber, pharmacist, hospital and payer research around it, from a network of about 3,200 physicians.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: SAUDI_BIOSIMILAR_ENTRY_ORGANIZATION,
    author: AUTHOR.schema,
    alternativeHeadline: SAUDI_BIOSIMILAR_ENTRY_DISPLAY_SUBTITLE,
    timeRequired: `PT${SAUDI_BIOSIMILAR_ENTRY_READING_TIME}M`,
    copyrightYear: 2026,
    about: [
      { '@type': 'DrugClass', name: 'Biosimilars' },
      { '@type': 'Country', name: 'Saudi Arabia', sameAs: 'https://www.wikidata.org/wiki/Q851' },
      {
        '@type': 'CreativeWork',
        name: 'General Guideline on Regulatory and Scientific Requirements for Development and Approval of Biosimilars',
        version: '1.0',
        identifier: 'DS-G-138-V01/260510',
        datePublished: '2026-06-10',
        url: 'https://sfda.gov.sa/sites/default/files/2026-08/GGRSRBA_1.pdf',
        publisher: SFDA_ENTITY,
      },
    ],
    mentions: [
      SFDA_ENTITY,
      { '@type': 'Organization', name: 'National Unified Procurement Company', alternateName: 'NUPCO', url: 'https://www.nupco.com' },
      { '@type': 'GovernmentOrganization', name: 'Council of Health Insurance', alternateName: 'CHI', url: 'https://www.chi.gov.sa' },
      { '@type': 'GovernmentOrganization', name: 'Local Content and Government Procurement Authority', alternateName: 'LCGPA' },
      { '@type': 'Organization', name: 'Lifera', alternateName: 'Pharmaceutical Investment Company', url: 'https://lifera.com' },
    ],
    citation: REFERENCES.map((ref) => ({
      '@type': ref.scholarly ? 'ScholarlyArticle' : 'CreativeWork',
      name: ref.label,
      url: ref.url,
    })),
  },
  body: SAUDI_BIOSIMILAR_ENTRY_BODY_HTML,
};
