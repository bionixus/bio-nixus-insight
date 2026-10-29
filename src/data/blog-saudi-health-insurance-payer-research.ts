/**
 * Hardcoded SEO blog post: /blog/saudi-health-insurance-payer-research
 * Research-led article for "Saudi health insurance payer research"
 * and "CHI Dhaman formulary" / insurer formulary decisions.
 * Links to /healthcare-market-research/saudi-arabia and /health-insurers-saudi-arabia.
 * Every numeric claim has an inline source. Unverified ideas-file figures are omitted.
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

export const CHI_PAYER_SLUG = 'saudi-health-insurance-payer-research';

export const CHI_PAYER_PATH = `/blog/${CHI_PAYER_SLUG}`;

export const CHI_PAYER_URL = `https://www.bionixus.com${CHI_PAYER_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Armela Belba is the assigned Global Research Manager for this article.
 */
export const CHI_PAYER_AUTHOR_NAME: string | undefined = 'Armela Belba';

export const CHI_PAYER_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const CHI_PAYER_COVER_IMAGE = '/images/blog/saudi-health-insurance-payer-research-cover.jpg';

export const CHI_PAYER_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover for Saudi health insurance payer research, CHI and Dhaman, 2026';

export const CHI_PAYER_HERO_IMAGE = '/images/blog/saudi-health-insurance-payer-research-hero.jpg';

export const CHI_PAYER_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for Saudi health insurance payer research: CHI, Dhaman formulary and insurer layers';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const CHI_PAYER_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/saudi-health-insurance-payer-research-beneficiaries.webp',
    alt: 'Chart of CHI private-insurance beneficiaries reported for the third quarter of 2025',
    caption:
      'On 27 October 2025, CHI said private insurance covered 14 million beneficiaries in the third quarter of 2025. An earlier note, on 7 January 2025, said more than 13 million. Those are two dates, not one demand figure.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/saudi-health-insurance-payer-research-gwp.webp',
    alt: 'Bar chart of Saudi health-insurance gross written premiums 2020 to 2024 from the Insurance Authority',
    caption:
      'The Insurance Authority’s 2024 market report puts health gross written premium at SAR 42,248.5 million. That is the health line in that report. It is not a vote on one drug.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/saudi-health-insurance-payer-research-layers.webp',
    alt: 'Three published private-access layers: CHI Dhaman formulary, insurer medical policy, and hospital Pharmacy and Therapeutics',
    caption:
      'Three private-access layers a 2026 brief must keep separate: the CHI Dhaman / Insurance Drug Formulary, each insurer’s medical policy, and hospital Pharmacy and Therapeutics. They are not one committee.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/saudi-health-insurance-payer-research-concentration.webp',
    alt: 'Insurance Authority market report as a structure file, separate from a hospital formulary vote',
    caption:
      'The Insurance Authority’s 2024 report describes the insurance market. It is not a hospital formulary vote and it is not a count of patients on one drug.',
    width: 800,
    height: 580,
  },
  {
    src: '/images/blog/saudi-health-insurance-payer-research-brief.webp',
    alt: 'Checklist of seven Saudi health insurance payer research workstreams for a CHI or insurer formulary brief',
    caption:
      'Seven workstreams for Saudi health insurance payer research: insured population, Dhaman listing, insurer medical policy, benefit tier, NPHIES friction, copay and substitution, and share of treated privately insured patients.',
    width: 800,
    height: 760,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const CHI_PAYER_META_TITLE = 'Saudi Health Insurance Payer Research: CHI Formularies';

export const CHI_PAYER_META_DESCRIPTION =
  'Saudi health insurance payer research on CHI, the Dhaman formulary and insurer lists: what a 2026 launch team must commission before a private claim pays.';

export const CHI_PAYER_DISPLAY_TITLE =
  'Who pays for a private prescription in Saudi Arabia?';

export const CHI_PAYER_DISPLAY_SUBTITLE = 'Saudi health insurance payer research before a claim is approved';

export const CHI_PAYER_BREADCRUMB_LABEL = 'Saudi health insurance payer research';

export const CHI_PAYER_EXCERPT =
  'A plain guide to the Council of Health Insurance, the Dhaman drug list, and the insurer rules a launch team still has to ask about before a private claim pays.';

export const CHI_PAYER_PUBLISHED_ISO = '2026-10-17T12:00:00.000Z';
export const CHI_PAYER_UPDATED_ISO = '2026-10-17T12:00:00.000Z';

export const CHI_PAYER_CATEGORY = 'Market Research';

export const CHI_PAYER_TAGS = [
  'Saudi Arabia',
  'Health Insurance',
  'CHI',
  'Dhaman Formulary',
  'Market Access',
  'Payer Research',
  'Primary Research',
  'Private Insurance',
];

const ACCESSED = 'accessed 17 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'chi-14m',
    label: 'CHI. 14 million private-insurance beneficiaries in Q3 2025. News, 27 October 2025.',
    url: 'https://www.chi.gov.sa/MediaCenter/NEWS/Pages/27-10-2025.aspx',
  },
  {
    id: 'chi-13m',
    label: 'CHI. More than 13 million private-insurance beneficiaries. News, 7 January 2025.',
    url: 'https://www.chi.gov.sa/MediaCenter/NEWS/Pages/2025-1-7.aspx',
  },
  {
    id: 'chi-dhaman',
    label: 'CHI. CHI Drug Formulary (Dhaman). Open SFDA-registered essential-drug list.',
    url: 'https://www.chi.gov.sa/en/Rules/Pages/DamanDrugFormulary.aspx',
  },
  {
    id: 'chi-dhaman-ar',
    label: 'CHI. دليل ضمان للأدوية. Arabic Dhaman formulary page.',
    url: 'https://www.chi.gov.sa/Rules/Pages/DamanDrugFormulary.aspx',
  },
  {
    id: 'chi-idf',
    label: 'CHI. Insurance Drug Formulary (IDF) programme. Addition requests to IDF@chi.gov.sa.',
    url: 'https://www.chi.gov.sa/en/aboutchi/cchiprograms/Pages/IDF.aspx',
  },
  {
    id: 'chi-ddf-guide',
    label: 'CHI. Daman Drug Formulary Master Excel Sheet User Guide, 24 March 2025.',
    url: 'https://www.chi.gov.sa/Style%20Library/IDF_Branding/CHI%20Daman%20Drug%20Formulary%20Master%20Excel%20Sheet%20User%20Guide%20ed5_24Mar2025.pdf',
  },
  {
    id: 'chi-policy',
    label: 'CHI. Cooperative Health Insurance Policy page. Essential Benefit Package from 1 October 2022.',
    url: 'https://www.chi.gov.sa/en/Rules/Pages/document1-7.aspx',
  },
  {
    id: 'chi-ebp',
    label: 'CHI. Updated Essential Benefit Package, effective 1 October 2022.',
    url: 'https://www.chi.gov.sa/en/knowledge-center/health-insurance-policies/unified%20policy/Updated%20Essential%20Benefit%20Package%20%20(%20effective%201%20October%202022).pdf',
  },
  {
    id: 'chi-law',
    label: 'CHI. Cooperative Health Insurance Law. Royal Decree M/10, 12 August 1999.',
    url: 'https://www.chi.gov.sa/en/Rules/lawsregulations/Council%20of%20health%20Insurance%20Law.pdf',
  },
  {
    id: 'chi-accredit',
    label: 'CHI. Request for accreditation of a health-service provider. NPHIES integration required.',
    url: 'https://www.chi.gov.sa/ServicesDirectory/Pages/RequestForAccreditationOfHealth.aspx',
  },
  {
    id: 'chi-nphies-en',
    label: 'CHI. NPHIES. Unified health-insurance exchange with the National Center for Health Information.',
    url: 'https://www.chi.gov.sa/en/Uniplat/Pages/default3.aspx',
  },
  {
    id: 'chi-nphies-ar',
    label: 'CHI. منصة نفيس. Arabic NPHIES programme page.',
    url: 'https://www.chi.gov.sa/Uniplat/Pages/default.aspx',
  },
  {
    id: 'nphies-ig',
    label: 'NPHIES. Healthcare Financial Services Implementation Guide. Eligibility, prior authorisation, claims.',
    url: 'https://portal.nphies.sa/ig/introduction.html',
  },
  {
    id: 'chi-library',
    label: 'CHI. Research Library. Beneficiaries Report last updated 24 September 2025.',
    url: 'https://www.chi.gov.sa/en/knowledge-center/Pages/research-library.aspx',
  },
  {
    id: 'chi-stats',
    label: 'CHI. Statistics & Indicators. Insured-individual and Nafis-claim views. Updated 10 August 2025.',
    url: 'https://www.chi.gov.sa/en/open-data/Pages/Indicators-and-statistics.aspx',
  },
  {
    id: 'ia-2024',
    label: 'Insurance Authority. The Saudi Insurance Market Report 2024. Health GWP SAR 42,248.5 million.',
    url: 'https://www.ia.gov.sa/SectorReports/The%20Saudi%20Insurance%20Market%20Report%202024.pdf',
  },
  {
    id: 'ia-2024-news',
    label: 'IA. Insurance Authority Issues the Saudi Insurance Market Report of 2024. News, 7 May 2025.',
    url: 'https://www.ia.gov.sa/en/Pages/news-details.aspx/65',
  },
  {
    id: 'ia-annual',
    label: 'IA. Annual publications. Lists the 2025 and 2024 insurance-market reports.',
    url: 'https://www.ia.gov.sa/en/information-center/reports/annual-publications',
  },
  {
    id: 'spa-2025',
    label: 'Saudi Press Agency. Insurance Authority: GWP exceed SAR 84 billion. 31 July 2026.',
    url: 'https://spa.gov.sa/en/N2645006',
  },
  {
    id: 'ia-faq',
    label: 'IA. FAQs. Authorised insurance regulator from 23 November 2023 (CM Resolution 85, 15 August 2023).',
    url: 'https://www.ia.gov.sa/en/help-and-supports/faqs',
  },
  {
    id: 'ia-about',
    label: 'IA. About the Authority. Established by Council of Ministers Resolution No. 85, 28/1/1445 H.',
    url: 'https://www.ia.gov.sa/ar/about-ia/about',
  },
  {
    id: 'moh-ia-2025',
    label: 'Ministry of Health. Insurance Authority at the Global Health Exhibition 2025. 23 licensed health writers.',
    url: 'https://www.moh.gov.sa/en/ministry/mediacenter/news/pages/news-2025-10-27-004.aspx',
  },
  {
    id: 'bupa-fy24',
    label: 'Bupa Arabia. Consolidated financial statements, year ended 31 December 2024. Medical-only GWP.',
    url: 'https://buy.bupa.com.sa/docs/default-source/annual-and-finance-reports/2024/bupa-arabia-fy24.pdf',
  },
  {
    id: 'ppri-2024',
    label: 'PPRI. Healthcare system and pharmaceutical pricing in Saudi Arabia (2024).',
    url: 'https://ppri.goeg.at/system/files/inline-files/Saudi_Arabia_Pharmaceutical_pricing_and_reimbursement_policies_2024.pdf',
  },
  {
    id: 'gastat-pop-2024',
    label: 'GASTAT. Population Estimates Statistics 2024. Mid-2024 residents: 35.3 million.',
    url: 'https://www.stats.gov.sa/documents/20117/2435273/Population+Estimates+Statistics+2024+EN.pdf/9b71e303-5fd9-19cb-9913-850a9d521639',
  },
  {
    id: 'mygov-stats',
    label: 'National Platform (my.gov.sa). Reports and Statistics. Population in 2024: 35,300,280.',
    url: 'https://my.gov.sa/en/content/reports-statistics',
  },
  {
    id: 'gastat-health-2024',
    label: 'GASTAT. Healthcare Establishments and Workforce Statistics 2024. 516 hospitals.',
    url: 'https://www.stats.gov.sa/documents/20117/2435273/Healthcare+Establishments+and+Workforce+Statistics+Publication+2024+EN+%281%29.pdf/a9775b6f-5333-c2d7-4f32-dcb5d8c549b0',
  },
  {
    id: 'nupco-overview',
    label: 'NUPCO. Overview. Founded 2009; fully owned by the Public Investment Fund.',
    url: 'https://www.nupco.com/about-nupco/overview/',
  },
  {
    id: 'sfda-home',
    label: 'Saudi Food and Drug Authority. Home. Marketing-authorisation authority for medicines.',
    url: 'https://www.sfda.gov.sa/en',
  },
  {
    id: 'vision-hstp',
    label: 'Saudi Vision 2030. Health Sector Transformation Program.',
    url: 'https://www.vision2030.gov.sa/en/explore/programs/health-sector-transformation-program',
  },
  {
    id: 'grand-view',
    label: 'Grand View Research. Saudi Arabia healthcare / pharmaceutical outlook pages. Syndicated sizing.',
    vendor: true,
  },
  {
    id: 'imarc',
    label: 'IMARC Group. Saudi Arabia healthcare / insurance market report pages. Syndicated outlooks.',
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

export const CHI_PAYER_WORKSTREAMS: Workstream[] = [
  {
    name: 'Eligible insured population',
    researchType: 'CHI file plus employer and nationality banners',
    question: 'Which of the 14 million CHI beneficiaries could actually present this indication?',
    description:
      'Split CHI’s Q3 2025 file by Saudi versus non-Saudi and by primary versus dependent before applying an epidemiology rate.',
  },
  {
    name: 'Dhaman listing and indication',
    researchType: 'CHI DDF / IDF extract plus addition-form review',
    question: 'Is the scientific name listed for this ICD-10-AM indication, and with which edits?',
    description:
      'CHI’s Dhaman formulary is an open SFDA-registered essential list. Listing is not automatic reimbursement on every policy.',
  },
  {
    name: 'Insurer medical policy and prior authorisation',
    researchType: 'Medical-director and TPA interviews',
    question: 'Which writer still applies PA, step therapy or a specialty-network rule?',
    description:
      'PPRI 2024 puts private reimbursement under insurer policy, copayment and prescriber behaviour, under CHI.',
  },
  {
    name: 'Benefit tier',
    researchType: 'Broker and benefits-manager interviews',
    question: 'Is the product on the essential package, or only on an optional Gold or Platinum add-on?',
    description:
      'CHI’s Essential Benefit Package is the mandatory floor from 1 October 2022. Employers may buy richer addendums.',
  },
  {
    name: 'Network and NPHIES friction',
    researchType: 'Hospital-billing and TPA interviews',
    question: 'Where does the claim fail — eligibility, prior authorisation, coding or payment?',
    description:
      'CHI accreditation now requires NPHIES integration. Rejection codes are a research file, not a footnote.',
  },
  {
    name: 'Copay and substitution',
    researchType: 'Pharmacy and claims interviews',
    question: 'What does the patient pay, and which generic is auto-substituted?',
    description:
      'CHI’s DDF user guide requires scientific-name prescribing and automatic substitution except where SFDA marks a product non-substitutable.',
  },
  {
    name: 'Share of treated privately insured patients',
    researchType: 'Anonymous physician PRFs',
    question: 'What share of new starts and continuing patients is CHI-insured versus public or self-pay?',
    description:
      'Report as share of treated patients, not as a share of 14 million beneficiaries and not as a share of health GWP.',
  },
];

const WORKSTREAM_TABLE_HTML = `<table>
<thead><tr><th>Workstream</th><th>Decision it answers</th><th>What the published record already shows</th><th>What to commission</th></tr></thead>
<tbody>
<tr><td>Eligible insured population</td><td>Which headcount goes into the model</td><td>CHI Q3 2025: more than 14 million; 4.5 million Saudi and 9.5 million non-Saudi (${cite('chi-14m', 'CHI, 27 October 2025')})</td><td>Indication, age, nationality and primary-versus-dependent banners</td></tr>
<tr><td>Dhaman listing</td><td>Whether the molecule is on the CHI essential list for this ICD-10-AM code</td><td>Dhaman is an open SFDA-registered essential list governed by FGC and PTC (${cite('chi-dhaman', 'CHI Dhaman')})</td><td>Current DDF extract plus the addition-form path to IDF@chi.gov.sa</td></tr>
<tr><td>Insurer medical policy</td><td>Who still applies PA or step therapy</td><td>Private reimbursement depends on copayment, insurer policy and prescriber behaviour, under CHI (${cite('ppri-2024', 'PPRI 2024')})</td><td>Separate interviews at Bupa Arabia, Tawuniya and at least one mid-tier writer</td></tr>
<tr><td>Benefit tier</td><td>Essential package versus optional add-on</td><td>EBP effective 1 October 2022; Law Article 8 lets employers buy addendums (${cite('chi-ebp', 'CHI EBP')}; ${cite('chi-law', 'CHI Law')})</td><td>Broker interviews on which employer books actually bought the rider</td></tr>
<tr><td>NPHIES friction</td><td>Where the claim stops</td><td>CHI accreditation requires NPHIES integration (${cite('chi-accredit', 'CHI accreditation')})</td><td>Hospital-billing interviews on eligibility, PA and rejection codes</td></tr>
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

export const CHI_PAYER_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'Two councils, two jobs', anchor: 'two-councils' },
  { heading: 'How many people are insured', anchor: 'how-many-insured' },
  { heading: 'What the drug list is', anchor: 'drug-list' },
  { heading: 'What happens when a claim is sent', anchor: 'claims' },
  { heading: 'Premiums are not prescriptions', anchor: 'premiums' },
  { heading: 'Questions to put in the brief', anchor: 'questions' },
  { heading: 'How to brief BioNixus', anchor: 'how-to-brief' },
  { heading: 'References', anchor: 'references' },
];

export const CHI_PAYER_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Saudi health insurance payer research asks which private insurer will pay, on which drug list, and after which approval. The Council of Health Insurance publishes the beneficiary count and the Dhaman list. The Insurance Authority publishes premiums. Neither file is a count of patients on one medicine.</p>`;

const NARRATIVE_HTML = `<p>A launch team that needs Saudi health insurance payer research is asking who will pay a private prescription. This page sits on <a href="/healthcare-market-research">healthcare market research</a>, next to <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a> and the directory of <a href="/health-insurers-saudi-arabia">health insurers in Saudi Arabia</a>. The Council of Health Insurance, CHI, runs the private-insurance rules. The Insurance Authority watches the insurance companies. Those are different offices. A premium total does not tell you whether a named drug will be paid.</p>

<h2 id="two-councils">Two councils, two jobs</h2>
<p>CHI’s own law is the Cooperative Health Insurance Law, issued by Royal Decree M/10 on 12 August 1999 (${cite('chi-law', 'Royal Decree M/10')}). The policy page says the Essential Benefit Package has applied from 1 October 2022 (${cite('chi-policy', 'CHI policy page')}). The updated package itself is dated to that same day (${cite('chi-ebp', 'Essential Benefit Package')}). The package is the minimum cover. It is not a promise that every new medicine is included.</p>
<p>The Insurance Authority is a different body. Its FAQ says it has been the authorised insurance regulator from 23 November 2023, under Council of Ministers Resolution 85 of 15 August 2023 (${cite('ia-faq', 'Insurance Authority FAQ')}). The Authority’s about page dates the same resolution as 28/1/1445 H (${cite('ia-about', 'Insurance Authority')}). Quote each page’s date as that page prints it. Do not merge the two lines into a third date. The Ministry of Health, writing about the Authority’s stand at the Global Health Exhibition 2025, mentioned 23 licensed health writers (${cite('moh-ia-2025', 'Ministry of Health, 2025')}). That is an exhibition note. It is not a list of who pays for one drug.</p>
<p>A 2024 country note from the Pharmaceutical Pricing and Reimbursement Information network describes the health system and how medicines are priced (${cite('ppri-2024', 'PPRI 2024')}). Read it for the public pricing path. Do not read it as a CHI enrolment file. The Saudi Food and Drug Authority is the marketing-authorisation authority for medicines (${cite('sfda-home', 'SFDA')}). Registration means the product may be sold. It does not mean a private insurer will pay. NUPCO, the National Unified Procurement Company, was founded in 2009 and is fully owned by the Public Investment Fund (${cite('nupco-overview', 'NUPCO')}). NUPCO buys for government hospitals. A NUPCO award is not a CHI claim.</p>
<p>Saudi Vision 2030’s Health Sector Transformation Program is the reform frame (${cite('vision-hstp', 'Vision 2030 health programme')}). The programme page does not name which insurer will list a new medicine. ${cite('grand-view', 'Grand View Research')} and ${cite('imarc', 'IMARC')} sell syndicated outlooks for Saudi healthcare and insurance. Use them as background. They are not a formulary interview.</p>

<h2 id="how-many-insured">How many people are insured</h2>
<p>Keep the beneficiary notes in the order CHI published them. On 7 January 2025, CHI said more than 13 million people had private health insurance (${cite('chi-13m', 'CHI, 7 January 2025')}). On 27 October 2025, CHI said 14 million people had private health insurance in the third quarter of 2025 (${cite('chi-14m', 'CHI, 27 October 2025')}). Those are two dates. Do not average them, and do not turn either number into the number of people who will start one drug.</p>
${figureHtml(CHI_PAYER_FIGURES[0])}
<p>CHI’s research library lists a beneficiaries report last updated on 24 September 2025 (${cite('chi-library', 'CHI research library')}). Its statistics page, with views of insured people and Nafis claims, was updated on 10 August 2025 (${cite('chi-stats', 'CHI statistics')}). Nafis, or NPHIES, is the exchange those claims move through. Use the library date and the statistics date as freshness checks. They are not a second headcount.</p>
<p>The resident population is a different file again. The General Authority for Statistics put mid-2024 residents at 35.3 million (${cite('gastat-pop-2024', 'GASTAT, 2024')}). The national platform prints the same estimate as 35,300,280 (${cite('mygov-stats', 'my.gov.sa')}). That is one population figure from two pages, not two populations. It is also larger than the insured count, because not every resident is in private insurance. GASTAT counted 516 hospitals in 2024 (${cite('gastat-health-2024', 'GASTAT hospitals, 2024')}). A hospital count is not an insured-patient count.</p>

<h2 id="drug-list">What the drug list is</h2>
<p>The CHI Dhaman formulary is the Council’s drug list. CHI describes it as an open list of essential medicines that the SFDA has registered (${cite('chi-dhaman', 'CHI Dhaman formulary')}). An Arabic page of the same list is published as دليل ضمان للأدوية (${cite('chi-dhaman-ar', 'Arabic Dhaman page')}). Open, here, means the list is built from registered medicines. It does not mean every registered medicine is paid at every hospital without a further rule.</p>
<p>CHI also runs an Insurance Drug Formulary programme. Requests to add a product go to IDF@chi.gov.sa (${cite('chi-idf', 'CHI addition requests')}). A user guide for the Daman Drug Formulary master spreadsheet is dated 24 March 2025 (${cite('chi-ddf-guide', 'CHI spreadsheet guide, 24 March 2025')}). Daman, in this label, is the CHI spelling of the same formulary programme. Read the guide for how the sheet is organised. Do not treat a row in the sheet as proof that a claim was paid last month.</p>
<p>An insurer can still have its own medical rules after a drug is on the CHI list. Bupa Arabia’s financial statements for the year ended 31 December 2024 report medical-only gross written premium (${cite('bupa-fy24', 'Bupa Arabia, 2024')}). That line tells you Bupa reports medical business on its own. It does not tell you Bupa’s rule for a named molecule. Ask the insurer. The CHI list, the insurer’s rule and the hospital committee are three questions.</p>
${figureHtml(CHI_PAYER_FIGURES[2])}

<h2 id="claims">What happens when a claim is sent</h2>
<p>NPHIES is the unified health-insurance exchange CHI runs with the National Center for Health Information (${cite('chi-nphies-en', 'NPHIES')}). CHI also publishes an Arabic page for the same programme, منصة نفيس (${cite('chi-nphies-ar', 'Arabic NPHIES page')}). The implementation guide covers eligibility, prior authorisation and claims (${cite('nphies-ig', 'NPHIES guide')}). Prior authorisation means the insurer is asked to approve a treatment before it is given. A hospital that wants CHI accreditation has to connect to NPHIES (${cite('chi-accredit', 'CHI accreditation')}).</p>
<p>A failed claim can fail at eligibility, at authorisation, or at payment. The guide names those steps. It does not say which step stops a particular drug. That is what payer interviews are for. Ask which code the hospital sends, who answers, and how long the answer takes. Do not infer the answer from a premium table.</p>

<h2 id="premiums">Premiums are not prescriptions</h2>
<p>The Insurance Authority’s Saudi Insurance Market Report 2024 puts health gross written premium at SAR 42,248.5 million (${cite('ia-2024', 'Insurance Authority, 2024 report')}). Gross written premium is the premium insurers recorded. It is not the amount paid to hospitals for one medicine, and it is not a patient count. The Authority’s news note of 7 May 2025 is the public pointer to that report (${cite('ia-2024-news', 'Insurance Authority, 7 May 2025')}). The annual-publications page lists both the 2025 and the 2024 market reports (${cite('ia-annual', 'Insurance Authority publications')}). Use the report that matches the year you cite.</p>
${figureHtml(CHI_PAYER_FIGURES[1])}
<p>On 31 July 2026 the Saudi Press Agency reported the Insurance Authority saying gross written premium exceeded SAR 84 billion (${cite('spa-2025', 'Saudi Press Agency, 31 July 2026')}). The agency note does not label that 84 billion as health only. Do not subtract it from the 2024 health figure and call the gap a forecast. They are different statements, on different dates.</p>
${figureHtml(CHI_PAYER_FIGURES[3])}
<p>A model that starts from 14 million beneficiaries, or from SAR 42,248.5 million, and ends at “patients on our drug” has skipped the list, the insurer rule and the claim. Those three are the study.</p>

<h2 id="questions">Questions to put in the brief</h2>
<p>Write the decision in one line before you pick a sample. The decision might be a Dhaman addition, a change to an insurer’s medical rule, or a listing at a hospital that bills CHI.</p>
${figureHtml(CHI_PAYER_FIGURES[4])}
<ul>
<li><strong>Which people.</strong> Say whether you mean the January 2025 note, the October 2025 note, or both. Do not call either note the whole population of 35.3 million.</li>
<li><strong>Which list.</strong> Ask if the scientific name is on the CHI Dhaman formulary, and which edition of the spreadsheet the payer is using.</li>
<li><strong>Which insurer rule.</strong> A place on the CHI list is not the same as a Bupa medical rule, or any other writer’s rule. The exhibition note’s 23 writers are not that rule.</li>
<li><strong>Which claim step.</strong> Ask where the NPHIES transaction stops: eligibility, prior authorisation, or payment.</li>
<li><strong>Which hospital.</strong> The 516 hospitals are not the sampling frame. Name the hospitals that bill the insurers in the brief.</li>
<li><strong>Which public path you will leave out.</strong> NUPCO and SFDA registration are real gates. They are not a private claim.</li>
</ul>
<p>Report the result as a share of treated patients who are privately insured, at named hospitals. Ask for Arabic and English instruments. Ask which CHI page and which date the agency will quote.</p>

<h2 id="how-to-brief">How to brief BioNixus</h2>
<p>BioNixus is a primary market research firm for pharmaceutical, medical device and healthcare companies. It was founded in 2012. Custom studies are usually priced at $10k–$60k. The firm has 40 client reviews on its public profiles. The line “Guaranteed in writing” covers the agreed scope and timeline. It does not cover what the interviews will find.</p>
<p>Leadership offices are in Sheridan, Wyoming, London, and Sheikh Zayed, Giza. Field offices are in Dubai, Al Khobar, and Salmiya, Kuwait. São Paulo is a field office for LATAM.</p>
<p>To brief a payer study, use the <a href="/contact">contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>. Say which insurer, which list and which decision the study has to answer.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const CHI_PAYER_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const CHI_PAYER_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is Saudi health insurance payer research?',
    answer:
      'It is commissioned research on which private insurer will pay for a medicine, on which list, and after which approval. A premium total and a beneficiary count do not answer that.',
  },
  {
    question: 'How many people have private health insurance in Saudi Arabia?',
    answer:
      'CHI said more than 13 million on 7 January 2025, and 14 million for the third quarter of 2025 on 27 October 2025. Those are two official notes. They are not the 35.3 million residents, and they are not patients on one drug.',
  },
  {
    question: 'What is the CHI Dhaman formulary?',
    answer:
      'It is the Council of Health Insurance drug list, described as an open list of essential medicines the Saudi Food and Drug Authority has registered. A place on the list is not the same as a paid claim.',
  },
  {
    question: 'How do you add a medicine to the CHI list?',
    answer:
      'CHI’s Insurance Drug Formulary programme takes addition requests at IDF@chi.gov.sa. A spreadsheet guide is dated 24 March 2025. Sending a request is not proof the claim will be paid.',
  },
  {
    question: 'Is CHI the same as the Insurance Authority?',
    answer:
      'No. CHI runs the private health-insurance benefits and the Dhaman list. The Insurance Authority has been the insurance regulator since 23 November 2023 and publishes market premiums, including health gross written premium of SAR 42,248.5 million in its 2024 report.',
  },
  {
    question: 'Does a drug on Dhaman get paid automatically?',
    answer:
      'The sources here do not say that. The Essential Benefit Package dates from 1 October 2022. Claims still move through NPHIES, which covers eligibility, prior authorisation and payment. Ask the named insurer what rule it still applies.',
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

const FAQ_WORD_COUNT = CHI_PAYER_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const CHI_PAYER_WORD_COUNT =
  countWords(CHI_PAYER_EXECUTIVE_SUMMARY_HTML) + countWords(CHI_PAYER_BODY_HTML) + FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const CHI_PAYER_READING_TIME = Math.ceil(
  (countWords(CHI_PAYER_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const CHI_PAYER_ORGANIZATION: Record<string, unknown> = {
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
    'Saudi health insurance payer research',
    'CHI Dhaman formulary',
    'Private health insurance Saudi Arabia',
    'Healthcare market research',
    'Pharmaceutical market research',
    'Saudi Arabia market access',
    'NPHIES claims research',
  ],
};

export type ChiPayerAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveChiPayerAuthor(name: string | undefined, profileUrl?: string): ChiPayerAuthor {
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

const AUTHOR = resolveChiPayerAuthor(CHI_PAYER_AUTHOR_NAME, CHI_PAYER_AUTHOR_PROFILE_URL);

export const CHI_PAYER_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-saudi-health-insurance-payer-research',
  slug: CHI_PAYER_SLUG,
  title: CHI_PAYER_DISPLAY_TITLE,
  excerpt: CHI_PAYER_EXCERPT,
  date: '17 Oct 2026',
  category: CHI_PAYER_CATEGORY,
  country: 'Saudi Arabia',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: CHI_PAYER_READING_TIME,
  wordCount: CHI_PAYER_WORD_COUNT,
  breadcrumbLabel: CHI_PAYER_BREADCRUMB_LABEL,
  displaySubtitle: CHI_PAYER_DISPLAY_SUBTITLE,
  tags: [...CHI_PAYER_TAGS],
  coverImage: CHI_PAYER_HERO_IMAGE,
  coverImageAlt: CHI_PAYER_HERO_IMAGE_ALT,
  ogImage: CHI_PAYER_COVER_IMAGE,
  ogImageAlt: CHI_PAYER_COVER_IMAGE_ALT,
  ogTitle: CHI_PAYER_META_TITLE,
  ogDescription: CHI_PAYER_META_DESCRIPTION,
  seoMetaTitle: CHI_PAYER_META_TITLE,
  seoMetaDescription: CHI_PAYER_META_DESCRIPTION,
  seoCanonicalUrl: CHI_PAYER_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: CHI_PAYER_PUBLISHED_ISO,
  updatedAtIso: CHI_PAYER_UPDATED_ISO,
  tableOfContents: CHI_PAYER_TABLE_OF_CONTENTS,
  executiveSummary: CHI_PAYER_EXECUTIVE_SUMMARY_HTML,
  faq: [...CHI_PAYER_FAQ],
  ctaSection: {
    title: 'Planning Saudi health insurance payer research for a CHI or insurer listing?',
    description:
      'Tell us the payer decision you need to make. BioNixus scopes the study around that decision. Custom work is usually $10k–$60k.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: CHI_PAYER_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'Organization', name: 'Council of Health Insurance', alternateName: 'CHI' },
      { '@type': 'Organization', name: 'Insurance Authority' },
      { '@type': 'Country', name: 'Saudi Arabia' },
    ],
    itemList: {
      name: 'What Saudi health insurance payer research should measure',
      description:
        'Seven workstreams for a CHI Dhaman, insurer-formulary or private-market launch brief.',
      items: CHI_PAYER_WORKSTREAMS.map(({ name, description }) => ({ name, description })),
    },
    contentImages: CHI_PAYER_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: CHI_PAYER_BODY_HTML,
};
