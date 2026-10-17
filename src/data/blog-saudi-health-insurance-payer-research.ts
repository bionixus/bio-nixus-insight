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
    alt: 'CHI Q3 2025 private-insurance beneficiaries: 4.5 million Saudi and 9.5 million non-Saudi of more than 14 million',
    caption:
      'CHI, 27 October 2025: more than 14 million private-insurance beneficiaries in Q3 2025 — 10 million primary and 4 million dependents; 4.5 million Saudi and 9.5 million non-Saudi. Insured private wallet, not MOH or military.',
    width: 800,
    height: 620,
  },
  {
    src: '/images/blog/saudi-health-insurance-payer-research-gwp.webp',
    alt: 'Bar chart of Saudi health-insurance gross written premiums 2020 to 2024 from the Insurance Authority',
    caption:
      'Health GWP in the Insurance Authority 2024 report (SAR million): 22,836.8 (2020); 25,109.3 (2021); 31,829.8 (2022); 38,625.6 (2023); 42,248.5 (2024). Health was 55.5% of all-lines GWP.',
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
    alt: 'Insurance Authority 2024 concentration: top eight companies 82 percent of all-lines gross written premium',
    caption:
      'Insurance Authority 2024: the top eight companies generated 82% of all-lines GWP; the other 19 in the report held 18%. Market structure, not a health-line share or a formulary vote.',
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
  'Private Insurance Payer Research in Saudi Arabia: CHI, Insurers and Formulary Decisions';

export const CHI_PAYER_DISPLAY_SUBTITLE = 'Saudi health insurance payer research for a 2026 launch';

export const CHI_PAYER_BREADCRUMB_LABEL = 'Saudi health insurance payer research';

export const CHI_PAYER_EXCERPT =
  'A sourced 2026 briefing on Saudi health insurance payer research: what CHI’s 14 million beneficiaries, the Dhaman formulary and insurer medical policies already show, and what a launch team still has to commission before a private claim pays.';

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
  { heading: 'What is Saudi health insurance payer research?', anchor: 'what-is-saudi-health-insurance-payer-research' },
  { heading: 'How large is the CHI-regulated private market?', anchor: 'how-large-is-the-chi-regulated-private-market' },
  { heading: 'Who is CHI, and who is the Insurance Authority?', anchor: 'who-is-chi-and-who-is-the-insurance-authority' },
  { heading: 'What does the Cooperative Health Insurance Law actually cover?', anchor: 'what-the-cooperative-health-insurance-law-covers' },
  { heading: 'What is the Dhaman formulary, and what is it not?', anchor: 'what-is-the-dhaman-formulary' },
  { heading: 'What do insurer formularies still decide?', anchor: 'what-insurer-formularies-still-decide' },
  { heading: 'What should Saudi health insurance payer research measure?', anchor: 'what-should-saudi-health-insurance-payer-research-measure' },
  { heading: 'How should you commission the study?', anchor: 'how-to-commission' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const CHI_PAYER_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> Saudi health insurance payer research is the commissioned work that tells a brand team who sits on a CHI policy, whether the Dhaman formulary lists the molecule for that indication, and which insurer still applies prior authorisation, a copay or a network rule before a private claim pays.</p>`;

const NARRATIVE_HTML = `<p>Saudi health insurance payer research is a private-market access problem before it is an insurance-market-size problem. It sits on our <a href="/healthcare-market-research">healthcare market research hub</a>, next to <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a> and our directory of <a href="/health-insurers-saudi-arabia">health insurers in Saudi Arabia</a>. The Council of Health Insurance counted more than 14 million private-insurance beneficiaries in the third quarter of 2025, and the Insurance Authority’s 2024 market report put health at SAR 42,248.5 million of written premium — 55.5 percent of the entire insurance market (${cite('chi-14m', 'CHI, 27 October 2025')}; ${cite('ia-2024', 'IA 2024')}). What a brand, HEOR or market-access team still cannot buy off the shelf is which of those beneficiaries sit on a CHI essential policy versus an optional add-on, whether the Dhaman formulary lists the molecule for the labelled indication, and which insurer still applies prior authorisation before a claim pays. This briefing uses only published official sources.</p>

<div class="value-box">
<p><strong>Quick facts: CHI, Dhaman and private insurers in Saudi Arabia, October 2026</strong></p>
<ul>
<li><strong>More than 14 million</strong> CHI private-insurance beneficiaries in Q3 2025 — 10 million primary, 4 million dependents; 4.5 million Saudi, 9.5 million non-Saudi (${cite('chi-14m', 'CHI, 27 October 2025')}).</li>
<li><strong>SAR 42,248.5 million</strong> health GWP in 2024, up 9.4 percent, or 55.5 percent of all-lines GWP (${cite('ia-2024', 'IA 2024')}).</li>
<li><strong>SAR 84.3 billion</strong> all-lines GWP in 2025 (+10.7 percent); health contributed about 68 percent of that growth (${cite('spa-2025', 'SPA / IA, 31 July 2026')}).</li>
<li><strong>23</strong> licensed health writers (MOH / IA, 27 October 2025); top eight companies held 82 percent of all-lines GWP in 2024 (${cite('moh-ia-2025', 'Ministry of Health / IA')}; ${cite('ia-2024', 'IA 2024')}).</li>
<li><strong>SAR 18,394 million</strong> medical-only GWP at Bupa Arabia in 2024 (${cite('bupa-fy24', 'Bupa Arabia FY24')}).</li>
<li><strong>35.3 million</strong> residents in mid-2024 — not the same as 14 million privately insured (${cite('gastat-pop-2024', 'GASTAT 2024')}; ${cite('mygov-stats', 'my.gov.sa')}).</li>
<li><strong>516</strong> hospitals in 2024 — 115 in Riyadh Region, 99 in Makkah Region (${cite('gastat-health-2024', 'GASTAT 2024')}).</li>
<li><strong>1 October 2022:</strong> CHI’s updated Essential Benefit Package took effect; Dhaman is the medicines list under it (${cite('chi-policy', 'CHI policy page')}; ${cite('chi-dhaman', 'CHI Dhaman')}).</li>
</ul>
</div>

<h2 id="what-is-saudi-health-insurance-payer-research">What is Saudi health insurance payer research?</h2>

<p>It is commissioned primary research on how a medicine or device is listed, authorised, billed and paid inside the CHI-regulated private system — as distinct from Ministry of Health clusters, military and National Guard hospitals, and King Faisal Specialist Hospital. For a 2026 private-market launch, the unit of observation is the CHI policy, the Dhaman indication row and the insurer medical-policy edit, not a vial and not an all-lines premium total.</p>

<p>Report publishers such as ${cite('grand-view', 'Grand View Research')} and ${cite('imarc', 'IMARC Group')} sell Saudi healthcare and insurance outlooks that often occupy neighbouring queries. Those pages can triangulate category spend. They cannot tell a brand team whether Bupa Arabia will still send a specialty product through prior authorisation, whether a Tawuniya SME book bought only the essential package, or why a non-Saudi internist in Jeddah will not start the drug. Those answers require a custom brief. Country context sits on <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a>. The writers themselves are mapped on <a href="/health-insurers-saudi-arabia">health insurers in Saudi Arabia</a>.</p>

<p>A usable study needs CHI’s beneficiary file as the sampling frame (${cite('chi-14m', 'CHI')}), a current Dhaman extract for the labelled ICD-10-AM indication (${cite('chi-dhaman', 'CHI Dhaman')}; ${cite('chi-ddf-guide', 'DDF user guide')}), medical-director and TPA interviews that treat each insurer as a different decision (${cite('ppri-2024', 'PPRI 2024')}), hospital-billing interviews on NPHIES rejection codes (${cite('chi-nphies-en', 'CHI NPHIES')}; ${cite('nphies-ig', 'NPHIES IG')}), and Arabic plus English instruments in Riyadh, Jeddah and Dammam/Khobar — not a Gulf average.</p>

<p>The government supply file is a different brief. NUPCO is the Public Investment Fund company that runs unified procurement for government health entities (${cite('nupco-overview', 'NUPCO overview')}). A NUPCO award does not automatically fill a CHI claim. That split is the subject of our <a href="/blog/nupco-tender-market-research-saudi-arabia">NUPCO tender market research</a> briefing. SFDA marketing authorisation is a third decision (${cite('sfda-home', 'SFDA')}). Hospital Pharmacy and Therapeutics is a fourth (${cite('ppri-2024', 'PPRI 2024')}).</p>

<h2 id="how-large-is-the-chi-regulated-private-market">How large is the CHI-regulated private market?</h2>

<p>Ask every provider which official print it is using. CHI publishes a beneficiary headcount. The Insurance Authority publishes premium. They are not interchangeable, and neither is a treated-patient count.</p>

<p>On 27 October 2025 CHI announced that private-insurance beneficiaries had exceeded 14 million in the third quarter of 2025: 10 million primary subscribers and 4 million dependents, of whom 4.5 million were Saudi and 9.5 million were non-Saudi (${cite('chi-14m', 'CHI, 27 October 2025')}). Nine months earlier, on 7 January 2025, the same council had printed more than 13 million, with 2 million Saudi primary subscribers and 2.4 million Saudi dependents (${cite('chi-13m', 'CHI, 7 January 2025')}). Those two releases are a time series of official CHI prints. They are not a forecast, and they are not a disease prevalence.</p>

${figureHtml(CHI_PAYER_FIGURES[0])}

<p>The addressable population is also split by nationality. GASTAT’s mid-2024 estimate is 35.3 million residents; the national platform repeats 35,300,280 (${cite('gastat-pop-2024', 'GASTAT 2024')}; ${cite('mygov-stats', 'my.gov.sa')}). CHI’s Q3 2025 insurance file is more skewed than the resident file: 4.5 million Saudi and 9.5 million non-Saudi inside a private-insurance total of more than 14 million (${cite('chi-14m', 'CHI')}). A model that applies an Eastern premarital rate, or a Riyadh clinic rate, to 14 million beneficiaries and calls it demand will be sent back. Entitlement, hospital channel and out-of-pocket exposure still have to be researched by nationality. See also <a href="/physician-survey-saudi-arabia">physician surveys in Saudi Arabia</a>.</p>

<p>Premium is the second official file, and it belongs to the Insurance Authority, not to CHI. The Authority’s 2024 market report — based on 27 insurance and reinsurance companies and foreign branches — put health GWP at SAR 42,248.5 million, up 9.4 percent from SAR 38,625.6 million in 2023. Health remained the largest line, at 55.5 percent of total GWP, down from 59.0 percent as other lines grew faster. Corporates represented 70.1 percent of health GWP. Health retention was 98 percent. Total market GWP was SAR 76.1 billion. Health claims paid rose 12.1 percent (${cite('ia-2024', 'IA 2024')}). The 7 May 2025 news note is the public pointer to that report (${cite('ia-2024-news', 'IA news')}).</p>

${figureHtml(CHI_PAYER_FIGURES[1])}

<p>The 2025 Authority report is listed on the annual-publications page (${cite('ia-annual', 'IA annual reports')}). The official Saudi Press Agency summary, dated 31 July 2026, is the print a launch team can take into a meeting without inventing a 2025 health-GWP riyal total the SPA text does not give. All-lines GWP rose 10.7 percent to SAR 84.3 billion. Health alone contributed about 68 percent of that growth. Health-insurance beneficiaries rose to more than 14 million — the same official floor CHI had already printed for Q3 2025. Total claims paid reached SAR 53 billion. The Authority named inflation in health-insurance claims costs as one of four 2026 themes (${cite('spa-2025', 'SPA / IA')}).</p>

<p>Do not convert those premium totals into treated patients. A SAR 42.2 billion health book is a written-premium total. It does not say how many riyals sat in hospital medical, outpatient pharmacy, maternity or dental, and it does not say how many patients started a named specialty product. That gap is the research question. CHI’s research library lists a Beneficiaries Report last updated 24 September 2025, and its statistics page publishes nationality and Nafis-claim views; neither page published a brand-level treated-patient count on the dates we checked (${cite('chi-library', 'CHI Research Library')}; ${cite('chi-stats', 'CHI statistics')}).</p>

<h2 id="who-is-chi-and-who-is-the-insurance-authority">Who is CHI, and who is the Insurance Authority?</h2>

<p>“Talk to payers” is an incomplete brief in this market. Two regulators sit on the private file, and they do different jobs.</p>

<p>CHI — the Council of Health Insurance, still called CCHI or the Council of Cooperative Health Insurance in older contracts and in the 2024 PPRI note — writes the cooperative health-insurance product rules. The Cooperative Health Insurance Law of 1999 created the Council, chaired by the Minister of Health, and gave it the power to qualify cooperative insurers for this field, accredit facilities, set family-member and contribution rules, and oversee the policy (${cite('chi-law', 'CHI Law, Articles 4–5')}). CHI today publishes the Essential Benefit Package, the Dhaman formulary, provider accreditation rules and the NPHIES exchange (${cite('chi-policy', 'CHI policy')}; ${cite('chi-dhaman', 'CHI Dhaman')}; ${cite('chi-nphies-en', 'CHI NPHIES')}).</p>

<p>The Insurance Authority is the prudential and conduct regulator for the insurance industry as a whole. It was established by Council of Ministers Resolution No. 85 dated 15 August 2023 (28/1/1445 H) and, from 23 November 2023, became the authorised regulator of the insurance industry in the Kingdom (${cite('ia-faq', 'IA FAQ')}; ${cite('ia-about', 'IA About')}). Its 2024 market report is the official premium, claims, retention and concentration file. It is not a formulary. It does not say whether a molecule is on Dhaman.</p>

<p>SAMA previously published insurance-market reports. For 2024 and 2025 the official print a launch team should cite is the Insurance Authority’s, not a leftover SAMA table. This briefing does not re-use SAMA-era totals.</p>

<p>PPRI’s 2024 country note is the independent description a team can take into a governance meeting: the SFDA cost-insurance-freight price is the ceiling; NUPCO runs national group purchasing; each hospital Pharmacy and Therapeutics committee still sets inclusion against a budget; private reimbursement sits under the Council of Cooperative Health Insurance and depends on copayment, insurer policy and prescriber behaviour (${cite('ppri-2024', 'PPRI 2024')}). That is four decisions. A single “payer n=8” line collapses them.</p>

<h2 id="what-the-cooperative-health-insurance-law-covers">What does the Cooperative Health Insurance Law actually cover?</h2>

<p>The Law is older than Vision 2030, and it is still the statute. Royal Decree No. M/10 of 12 August 1999 (1 Jumada I 1420) and Council of Ministers Resolution No. 71 of 9 August 1999 created cooperative health insurance and the Council that supervises it (${cite('chi-law', 'CHI Law')}).</p>

<p>Article 1 states the aim: providing and regulating health care for non-Saudi residents. It “may be applied to Saudi citizens and others” by a Council of Ministers resolution (${cite('chi-law', 'Article 1')}). That is why CHI’s 2025 file is majority non-Saudi, and why a model that treats “Saudi patients” as automatically CHI-insured is wrong. Public-sector Saudis still receive government care outside this product. Private-sector Saudis appear when the mandate and the employer policy put them there — 4.5 million in Q3 2025, against 9.5 million non-Saudis (${cite('chi-14m', 'CHI')}).</p>

<p>Article 3 ties residence to the policy: a residence permit may not be granted or renewed except after obtaining a cooperative health-insurance policy that covers the duration of the permit (${cite('chi-law', 'Article 3')}). Article 2 extends cover to family members as defined under Article 5. Article 14 fines an employer that does not subscribe, and it fines an insurer that breaches the policy, at up to SAR 5,000 per covered individual (${cite('chi-law', 'Article 14')}).</p>

<p>Article 7 is the statutory benefit floor: medical examination, outpatient treatment and medication; vaccinations, maternity and pediatric care; laboratory tests and radiology; hospitalisation including delivery and operations; and dental and gum disease, excluding orthodontics and dentures (${cite('chi-law', 'Article 7')}). Article 8 lets an employer expand that floor with addendums (${cite('chi-law', 'Article 8')}). CHI’s 2022 Essential Benefit Package is the current operational version, with optional Gold and Platinum guidance (${cite('chi-ebp', 'CHI EBP')}; ${cite('chi-policy', 'CHI policy page')}).</p>

<p>The Law also says who may write the risk. Article 17 requires qualified Saudi cooperative insurance companies, operating in the manner of the National Company for Cooperative Insurance and in accordance with Senior Ulema Commission Resolution No. 51 dated 4/4/1397 H (${cite('chi-law', 'Article 17')}). That is why the live writers on <a href="/health-insurers-saudi-arabia">health insurers in Saudi Arabia</a> are cooperative and takaful companies on a Saudi licence, not a foreign freedom-of-services passport.</p>

<p>Article 5(d) accredits the facilities that may treat CHI beneficiaries. CHI’s current service requires a final Ministry of Health licence, CBAHI accreditation or registration, and NPHIES integration (${cite('chi-accredit', 'CHI accreditation')}). A hospital that is not on that list is not a CHI claim, whatever its NUPCO or cluster status.</p>

<h2 id="what-is-the-dhaman-formulary">What is the Dhaman formulary, and what is it not?</h2>

<p>Dhaman — CHI’s own English page also writes Daman and “CHI Drug Formulary” — is the medicines list under the cooperative policy. It is not an insurer brand, and it is not Kuwait’s DHAMAN or Abu Dhabi’s Daman. CHI’s English formulary page asks, “What is the Council of Health Insurance Medication Guide ‘Dhaman’?” and answers that it is a regulatory framework: a list of essential medications, prescription and over-the-counter, developed and updated by the Formulary Governance Committee in collaboration with the Pharmacy and Therapeutics Committee, limited to drugs registered with SFDA (${cite('chi-dhaman', 'CHI Dhaman')}). The Arabic page, دليل ضمان للأدوية, is the same programme (${cite('chi-dhaman-ar', 'CHI Arabic Dhaman')}).</p>

<p>The Insurance Drug Formulary programme page repeats the definition: an evidence-based, disease-focused open formulary of essential drugs for a given disease, updated by the FGC and PTC against current guidelines (${cite('chi-idf', 'CHI IDF')}). The March 2025 Master Excel user guide uses the abbreviation DDF — Daman Drug Formulary (${cite('chi-ddf-guide', 'DDF user guide')}).</p>

<p>That language matters. “Open” and “all SFDA drugs” describe CHI’s intent for the essential list. They do not mean every SFDA-registered specialty product is paid on every policy the day after marketing authorisation. CHI’s own policy page tells manufacturers how to ask for an addition: complete the pharmaceutical-company submission form and send it to IDF@chi.gov.sa. Providers and insurers have a parallel form (${cite('chi-policy', 'CHI policy page')}; ${cite('chi-idf', 'CHI IDF')}). A launch brief that skips that path, or that treats a hospital P&amp;T minute as a CHI listing, will be sent back.</p>

<p>The published DDF is an Excel file. Users filter by indication, ICD-10-AM, class, scientific name, form and ATC code (${cite('chi-dhaman', 'CHI Dhaman')}; ${cite('chi-ddf-guide', 'DDF user guide')}). The mapped-DDF-to-SFDA sheet carries trade name, registration number, GTIN, public price and marketing status. Appendices hold protocols and step-therapy tables. Extract those columns before writing a discussion guide.</p>

<p>Coverage rules are more specific than “it is listed.” Medications should be covered if they sit in the indication’s ICD-10-AM row. Prescribing is by scientific name, with automatic substitution except where SFDA marks a product non-substitutable. Further Daman rules sit in the Essential Benefit Package (${cite('chi-ddf-guide', 'DDF coverage essentials')}).</p>

<p>Prescribing edits are the CHI-published gates a specialty launch will actually feel. The user guide lists age, concurrent-use, gender, physician-specialty, prior-authorisation, quantity-limit, step-therapy, emergency-use-only and protocol edits (${cite('chi-ddf-guide', 'Table 1')}). Those edits are CHI’s. They are not a substitute for an insurer’s own medical policy. A product can sit on Dhaman with a PA flag and still pick up a second PA at Bupa or a network restriction at a mid-tier writer. That is why the CHI Dhaman formulary and the insurer list are two workstreams.</p>

${figureHtml(CHI_PAYER_FIGURES[2])}

<p>The EBP itself is dated. CHI’s policy page still hosted the 1 October 2022 file when we checked (${cite('chi-policy', 'CHI policy page')}; ${cite('chi-ebp', 'CHI EBP')}). Optional Gold and Platinum packages remain employer add-ons. Our <a href="/blog/who-does-obesity-market-research-saudi-arabia">obesity market-research shortlist</a> records one published consequence: the 2022 EBP marks anti-obesity pharmacotherapy as not covered while covering approved bariatric surgery. A 2026 specialty brief should pull the current EBP row for its own indication.</p>

<h2 id="what-insurer-formularies-still-decide">What do insurer formularies still decide?</h2>

<p>CHI writes the floor. The writer still decides how a claim moves. PPRI’s 2024 sentence is the one to keep on the slide: for the private sector, a medicine approved by SFDA “can be reimbursed depends on the copayment percentage and the policy of health insurance companies and prescriber’s behavior, the whole process is under controlled by” CCHI (${cite('ppri-2024', 'PPRI 2024')}). That is insurer policy plus copay plus prescriber, under CHI — not CHI instead of the insurer.</p>

<p>The Insurance Authority’s 2024 concentration table is the reason those interviews cannot be a single “private payer” bucket. The top eight insurance companies generated 82 percent of all-lines GWP; the remaining 19 companies in the report held 18 percent. The company chart prints Bupa and Tawuniya first (${cite('ia-2024', 'IA 2024')}). That 82 percent figure is all lines, not health alone. Do not relabel it as a health-formulary vote.</p>

${figureHtml(CHI_PAYER_FIGURES[3])}

<p>Bupa Arabia’s FY24 statements are the one company-level medical number this briefing can cite without guessing. The company “underwrites medical insurance only.” Gross written premium for 2024 was SAR 18,394,132 thousand, against SAR 16,668,744 thousand in 2023 (${cite('bupa-fy24', 'Bupa Arabia FY24')}). Set that beside the Authority’s health-line total of SAR 42,248.5 million and the scale of one writer is obvious. It is still not a CHI listing. Tawuniya is a composite cooperative writer; this briefing does not assign it a health-only riyal total the Authority did not print.</p>

<p>The Authority’s spokesperson, quoted by the Ministry of Health on 27 October 2025, said 23 licensed companies operate in the health-insurance market (${cite('moh-ia-2025', 'Ministry of Health / IA')}). The 2024 market report itself was built from 27 insurance and reinsurance companies and foreign branches across all lines (${cite('ia-2024', 'IA 2024')}). Those two official counts answer different questions. Use 23 when the brief is “who writes health.” Use 27 when the brief is “whose numbers sit in the 2024 Authority report.”</p>

<p>Corporates already dominate the health book: 70.1 percent of health GWP in 2024 (${cite('ia-2024', 'IA 2024')}). That is why employer-broker interviews belong with medical-director interviews. A molecule can be on Dhaman and still sit outside the essential package an SME actually bought. Article 8 and CHI’s Gold / Platinum guidance are why that gap exists (${cite('chi-law', 'Article 8')}; ${cite('chi-ebp', 'CHI EBP')}).</p>

<p>NPHIES is the pipe those decisions travel through. CHI launched the National Platform for Health and Insurance Exchange Services with the National Center for Health Information (${cite('chi-nphies-en', 'CHI NPHIES')}; ${cite('chi-nphies-ar', 'CHI نفيس')}). The NPHIES implementation guide describes a single gateway for providers, insurers and TPAs to exchange eligibility, prior authorisation, claims and payment (${cite('nphies-ig', 'NPHIES IG')}). CHI accreditation now requires that integration (${cite('chi-accredit', 'CHI accreditation')}). A hospital-billing interview that cannot talk in NPHIES rejection codes is not yet a payer interview.</p>

<p>The provider file is large enough that a Riyadh-only sample will miss it. GASTAT counted 516 hospitals in 2024, 115 of them in Riyadh Region and 99 in Makkah Region, plus 5,779 primary healthcare centres and medical complexes, and 129,772 physicians (${cite('gastat-health-2024', 'GASTAT 2024')}). CHI members are treated in the accredited subset of that estate, not in every public ward. Vision 2030’s Health Sector Transformation Program is changing how public clusters buy care; it does not repeal the CHI policy number on an expatriate claim (${cite('vision-hstp', 'Health Sector Transformation Program')}).</p>

<h2 id="what-should-saudi-health-insurance-payer-research-measure">What should Saudi health insurance payer research measure?</h2>

<p>Design the study backwards from the decision — a CHI addition to Dhaman, an insurer medical-policy change, a hospital P&amp;T listing that will actually be billed to CHI, or a first-year private-market forecast.</p>

${WORKSTREAM_TABLE_HTML}

${figureHtml(CHI_PAYER_FIGURES[4])}

<ul>
<li><strong>Eligible insured population.</strong> Start from CHI’s Q3 2025 print and do not apply a clinic prevalence to 14 million (${cite('chi-14m', 'CHI')}).</li>
<li><strong>Dhaman listing and indication.</strong> Extract the scientific name, ICD-10-AM row, ATC code and edits. If the row is missing, the question is IDF@chi.gov.sa, not “the insurer said no” (${cite('chi-dhaman', 'CHI Dhaman')}; ${cite('chi-policy', 'CHI policy')}).</li>
<li><strong>Insurer medical policy.</strong> Interview Bupa Arabia and Tawuniya first, then at least one mid-tier writer (${cite('ia-2024', 'IA 2024')}; ${cite('ppri-2024', 'PPRI 2024')}; ${cite('bupa-fy24', 'Bupa Arabia FY24')}).</li>
<li><strong>Benefit tier.</strong> Separate essential-package books from Gold / Platinum and other Article 8 addendums (${cite('chi-ebp', 'CHI EBP')}; ${cite('chi-law', 'Article 8')}).</li>
<li><strong>Network and NPHIES friction.</strong> Collect eligibility, prior-authorisation and rejection codes from CHI-accredited billing offices (${cite('chi-accredit', 'CHI accreditation')}; ${cite('nphies-ig', 'NPHIES IG')}).</li>
<li><strong>Copay and substitution.</strong> Ask what the patient pays and which generic is auto-substituted (${cite('chi-ddf-guide', 'DDF user guide')}).</li>
<li><strong>Share of treated privately insured patients.</strong> Anonymous physician record forms, bannered by CHI versus MOH versus military versus self-pay. See <a href="/insights/top-healthcare-market-research-companies-saudi-arabia-2026">top healthcare market research companies in Saudi Arabia 2026</a>.</li>
</ul>

<p>For neighbouring systems do not import a Gulf average. Compare <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a>, <a href="/healthcare-market-research/kuwait">Kuwait</a> and <a href="/healthcare-market-research/egypt">Egypt</a>. A Saudi CHI or Dhaman answer is not a Thiqa, DHAMAN or UHIA answer. The buyer checklist for the agency itself is <a href="/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia">how to choose a healthcare market research agency in Saudi Arabia</a>.</p>

<h2 id="how-to-commission">How should you commission the study?</h2>

<ul>
<li>How many CHI-facing medical directors, TPA clinicians, hospital billing leads and treating specialists will you recruit, and from which cities — Riyadh, Jeddah and Dammam/Khobar at minimum?</li>
<li>Will results be reported by nationality, by primary versus dependent, by essential package versus optional add-on, and by new versus current cases?</li>
<li>Which CHI beneficiary print will you use as the frame — January 2025 or Q3 2025 — and why?</li>
<li>Will the discussion guide treat Dhaman listing, insurer medical policy, hospital P&amp;T and NUPCO as four layers, not one “payer” share?</li>
<li>Will you extract the current DDF row for the labelled ICD-10-AM indication before fieldwork, including PA, ST and QL flags?</li>
<li>Are questionnaires available in Arabic and English?</li>
<li>Who owns the data, and can it be re-cut after a medical director changes the question?</li>
</ul>

<p>Desk-research insurance outlooks remain useful for a first cut of premium. ${cite('grand-view', 'Grand View Research')} and ${cite('imarc', 'IMARC Group')} publish Saudi healthcare pages that often appear for this query. Use them to triangulate category spend. Do not take them to a CHI or insurer meeting as the evidence pack for a specialty listing. For the access dossier, see <a href="/sfda-market-access-strategy-saudi-arabia">SFDA market access strategy</a>, <a href="/heor-consulting-saudi-arabia">HEOR consulting in Saudi Arabia</a> and <a href="/budget-impact-model-saudi-arabia">budget-impact modelling in Saudi Arabia</a>. A hematology or oncology product that will also need government supply still needs the <a href="/blog/nupco-tender-market-research-saudi-arabia">NUPCO tender briefing</a> as a second file, not as a substitute.</p>

<h2 id="why-bionixus">Why choose BioNixus for Saudi health insurance payer research?</h2>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians. Custom study pricing is typically $10k–$60k. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London EC1V 2NX and Cairo (Sheikh Zayed, Giza). Dubai, Al Khobar and Salmiya, Kuwait (Olympia Mall) are field offices, and it is in the process of opening a São Paulo office by the end of 2026. LATAM work is covered from the US office with a strong local consultant network.</p>

<p>Choose BioNixus when the decision depends on why CHI, a named insurer and a hospital billing office act as they do, rather than on an all-lines premium total. Each study is built around one decision — a Dhaman addition, an insurer medical-policy change, a CHI-billed hospital listing — and is reported as share of treated privately insured patients. The delivery commitment is Guaranteed in writing. That guarantee covers the agreed scope and timeline, not the accuracy of findings. Guarantees are to replace non-qualifying respondents free, to meet the minimum sample, to re-field at our cost, and to credit the pilot fee. Where reviews are relevant, BioNixus has 40 client reviews.</p>

<p>See also <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a>, <a href="/health-insurers-saudi-arabia">health insurers in Saudi Arabia</a>, <a href="/pharmaceutical-companies-saudi-arabia">pharmaceutical companies in Saudi Arabia</a>, <a href="/blog/top-healthcare-market-research-firms-saudi-arabia">top healthcare market research firms in Saudi Arabia</a> and the <a href="/insights/top-healthcare-market-research-companies-saudi-arabia-2026">2026 Saudi healthcare ranking</a>.</p>

<p>To brief a CHI, Dhaman or insurer-formulary study, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const CHI_PAYER_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const CHI_PAYER_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What is Saudi health insurance payer research?',
    answer:
      'Saudi health insurance payer research is commissioned primary research on how a medicine is listed, authorised, billed and paid inside the CHI-regulated private system. It covers the Dhaman formulary, insurer medical policies, benefit tiers, NPHIES claims friction and share of treated privately insured patients. It is not a syndicated insurance-market-size report and it is not a NUPCO tender study.',
  },
  {
    question: 'How many people have private health insurance in Saudi Arabia?',
    answer:
      'CHI counted more than 14 million private-insurance beneficiaries in the third quarter of 2025: 10 million primary subscribers and 4 million dependents, including 4.5 million Saudi and 9.5 million non-Saudi. In January 2025 the same council had printed more than 13 million. Those official CHI prints are not 35.3 million residents and not a treated-patient count.',
  },
  {
    question: 'What is the CHI Dhaman formulary?',
    answer:
      'Dhaman is CHI’s drug formulary — an evidence-based, disease-focused open list of SFDA-registered essential medicines, prescription and OTC, governed by the Formulary Governance Committee and the Pharmacy and Therapeutics Committee. CHI publishes it as a filterable Excel file by indication, ICD-10-AM and ATC code. Listing is not the same as payment on every insurer policy.',
  },
  {
    question: 'How do you add a medicine to the CHI formulary?',
    answer:
      'CHI’s policy page tells pharmaceutical companies to complete the addition form and submit it to IDF@chi.gov.sa. Providers and insurers have a parallel form. The Formulary Governance Committee and Pharmacy and Therapeutics Committee update the list. A hospital P&T minute is a different decision and does not replace that CHI path.',
  },
  {
    question: 'Is CHI the same as the Insurance Authority?',
    answer:
      'No. CHI writes the cooperative health-insurance product, the Essential Benefit Package, the Dhaman formulary, provider accreditation and NPHIES. The Insurance Authority, authorised from 23 November 2023, regulates the insurance industry’s solvency, conduct and market reporting. Its 2024 report is the official premium file. It is not a formulary.',
  },
  {
    question: 'Do private insurers still decide anything once a drug is on Dhaman?',
    answer:
      'Yes. PPRI’s 2024 note says private reimbursement still depends on copayment, the insurer’s policy and prescriber behaviour, under CHI. CHI’s own user guide adds prior-authorisation, step-therapy and quantity-limit edits on the Dhaman row. Employer Gold and Platinum add-ons sit above the essential package. Interview named writers separately.',
  },
  {
    question: 'Why commission BioNixus for Saudi health insurance payer research?',
    answer:
      'BioNixus runs custom primary research from an Al Khobar field office, with a network of about 3,200 physicians, and prices typical custom studies at $10k–$60k. The work is designed around one decision — a Dhaman addition, an insurer medical policy or a CHI-billed hospital listing — and reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers scope and timeline, not findings.',
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
      'Tell us the decision you need to make. BioNixus scopes CHI, insurer and hospital-billing research around it, from an Al Khobar field office and a network of about 3,200 physicians.',
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
