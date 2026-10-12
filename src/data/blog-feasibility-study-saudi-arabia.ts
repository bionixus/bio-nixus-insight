/**
 * Hardcoded industries insight: /bionixus-industries/insights/feasibility-study-company-saudi-arabia
 * Topic: GCC/MENA #3 — Feasibility Studies in Saudi Arabia: What the Market Section Must Prove.
 * Target keyword: feasibility study company Saudi Arabia.
 * Every statistic is cited inline to an official source. Claims that could not be verified are omitted.
 *
 * Cover/hero JPEGs must be created with a Gemini image model
 * (scripts/generate-saudi-feasibility-gemini-cover.mjs). Do not substitute another generator.
 */
import type { BlogPost } from '@/types/blog';
import { WESTERN_AUTHORS, personAuthorJsonLd } from '@/data/editorialAuthors';
import { GOOGLE_OFFICES, officeRoleLabel } from '@/data/googleLocations';
import { ORG_ID, ORG_LOGO, ORG_NAME, ORG_SAME_AS } from '@/lib/seo/organization';

export const SAUDI_FEASIBILITY_SLUG = 'feasibility-study-company-saudi-arabia';

export const SAUDI_FEASIBILITY_PATH = `/bionixus-industries/insights/${SAUDI_FEASIBILITY_SLUG}`;

export const SAUDI_FEASIBILITY_URL = `https://www.bionixus.com${SAUDI_FEASIBILITY_PATH}`;

export const SAUDI_FEASIBILITY_AUTHOR_NAME = 'Laura McConaughey';

export const SAUDI_FEASIBILITY_COVER_IMAGE =
  '/images/blog/feasibility-study-company-saudi-arabia-cover.jpg';

export const SAUDI_FEASIBILITY_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover: feasibility study company Saudi Arabia — what the market section must prove in 2026';

export const SAUDI_FEASIBILITY_HERO_IMAGE =
  '/images/blog/feasibility-study-company-saudi-arabia-hero.jpg';

export const SAUDI_FEASIBILITY_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for a Saudi Arabia feasibility-study market section: demand, price, channel and competition checks';

/** Flip to false only after a Gemini image model writes the 1200×630 cover and hero JPEGs. */
export const SAUDI_FEASIBILITY_GEMINI_COVER_PENDING = true;

export const SAUDI_FEASIBILITY_META_TITLE = 'Feasibility Study Company Saudi Arabia (2026 Guide)';

export const SAUDI_FEASIBILITY_META_DESCRIPTION =
  'Feasibility study company Saudi Arabia: what the 2026 market section must prove — demand, price, channels, competition and SIDF-ready primary evidence.';

export const SAUDI_FEASIBILITY_DISPLAY_TITLE =
  'Feasibility Studies in Saudi Arabia: What the Market Section Must Prove';

export const SAUDI_FEASIBILITY_DISPLAY_SUBTITLE =
  'How a feasibility study company in Saudi Arabia should evidence demand';

export const SAUDI_FEASIBILITY_BREADCRUMB_LABEL = 'Saudi feasibility study market section';

export const SAUDI_FEASIBILITY_EXCERPT =
  'A sourced 2026 guide to what the market section of a Saudi feasibility study must prove — demand, price, city mix, channels and competition — and how primary research makes the chapter bankable for SIDF and other lenders.';

export const SAUDI_FEASIBILITY_PUBLISHED_ISO = '2026-10-12T12:00:00.000Z';
export const SAUDI_FEASIBILITY_UPDATED_ISO = '2026-10-12T12:00:00.000Z';

export const SAUDI_FEASIBILITY_CATEGORY = 'B2B Market Research';

export const SAUDI_FEASIBILITY_TAGS = [
  'Feasibility Study',
  'Saudi Arabia',
  'Market Research',
  'SIDF',
  'Ministry of Investment',
  'Vision 2030',
  'Primary Research',
  'B2B',
];

const ACCESSED = 'accessed 12 October 2026';

type Reference = { id: string; label: string; url?: string };

const REFERENCES: Reference[] = [
  {
    id: 'gastat-pop-2024',
    label:
      'General Authority for Statistics (GASTAT). Population Estimates Publication 2024. Mid-2024 estimate.',
    url: 'https://www.stats.gov.sa/documents/20117/2435273/Population+Estimates+Statistics+2024+EN.pdf/9b71e303-5fd9-19cb-9913-850a9d521639',
  },
  {
    id: 'mygov-stats',
    label:
      'National Platform (my.gov.sa). Reports and Statistics: population in 2024 listed as 35,300,280.',
    url: 'https://my.gov.sa/en/content/reports-statistics',
  },
  {
    id: 'gastat-fdi-2024',
    label:
      'GASTAT. Foreign Direct Investment 2024. Annual series calculated from register-based Ministry of Investment data.',
    url: 'https://www.stats.gov.sa/documents/20117/2435267/Foreign%2BDirect%2BInvestment%2B2024%2BEN.pdf/b4ded07c-d433-6503-abc7-6b1dccf3bcb8',
  },
  {
    id: 'gastat-fdi-q4-2025',
    label: 'GASTAT. Foreign Direct Investment, Quarter 4 2025.',
    url: 'https://www.stats.gov.sa/documents/20117/2435267/Foreign+Direct+Investment%2C+Quarter+4+2025-++EN.pdf',
  },
  {
    id: 'misa-nis',
    label: 'Ministry of Investment (MISA). National Investment Strategy.',
    url: 'https://misa.gov.sa/activities/national-investment-strategy/',
  },
  {
    id: 'investsaudi-nis',
    label:
      'Invest Saudi. Saudi Arabia’s National Investment Strategy (PDF). FDI and GFCF 2030 objectives.',
    url: 'https://www.investsaudi.sa/documents/national-strategies/national-investment-strategy.pdf',
  },
  {
    id: 'misa-investor-guide',
    label: 'MISA. Investor Guide (English), uploaded May 2025.',
    url: 'https://misa.gov.sa/app/uploads/2025/05/Investor-Guide-12-03en.pdf',
  },
  {
    id: 'vision-housing',
    label:
      'Saudi Vision 2030. Housing Program page. Last update 14 July 2026, 11:16 AM.',
    url: 'https://www.vision2030.gov.sa/en/explore/programs/housing-program',
  },
  {
    id: 'vision-2025-ar',
    label: 'Saudi Vision 2030. Annual Report 2025 (English PDF).',
    url: 'https://www.vision2030.gov.sa/media/ecdjfopq/vision2030_annual_report_2025_en.pdf',
  },
  {
    id: 'housing-2024-ar',
    label: 'Saudi Vision 2030. Housing Program Annual Report 2024 (English PDF).',
    url: 'https://www.vision2030.gov.sa/media/vvyplaue/housing_program_annual_report_2024_en.pdf',
  },
  {
    id: 'mof-news-2026',
    label:
      'Ministry of Finance. Pre-Budget Statement for FY 2026 announced 30 September 2025.',
    url: 'https://www.mof.gov.sa/en/MediaCenter/news/Pages/News_3092025.aspx',
  },
  {
    id: 'mof-prebudget-2026',
    label: 'Ministry of Finance. Pre-Budget Statement, Fiscal Year 2026 (English PDF).',
    url: 'https://www.mof.gov.sa/en/budget/Documents/BTM-Bud-E-FY2026-250930C%20-V12%20FINAL.pdf',
  },
  {
    id: 'mof-midyear-2026',
    label: 'Ministry of Finance. Mid-Year Fiscal and Economic Report FY 2026 (English PDF).',
    url: 'https://mof.gov.sa/en/financialreport/2026/Documents/Mid-Bud-2026-EN.pdf',
  },
  {
    id: 'sidf-project',
    label: 'Saudi Industrial Development Fund (SIDF). Project Financing service page.',
    url: 'https://www.sidf.gov.sa/FinancialSolutions/financialSolutionsServices/ProjectFinancing',
  },
  {
    id: 'sidf-req',
    label:
      'SIDF. General Requirements for Loan Application. Projects costing less than one billion Saudi riyals. States that submitting a feasibility study is mandatory.',
    url: 'https://www.sidf.gov.sa/-/media/PDFs/LoanFiles/General-Requirements-for-Loan-Application.pdf',
  },
  {
    id: 'sidf-promising',
    label:
      'SIDF. Promising Factories Initiative (Soft Loans). Last modified 14 July 2026, 6:41 PM Saudi Arabia Time.',
    url: 'https://www.sidf.gov.sa/Initiatives/Industrial-Sector-Support-Initiative/Promising-Factories',
  },
  {
    id: 'sdaia-guide',
    label: 'Saudi Data & Artificial Intelligence Authority (SDAIA). Guide to the Saudi Personal Data Protection Law.',
    url: 'https://dgp.sdaia.gov.sa/wps/wcm/connect/f579bc32-fda8-47bd-bc6f-66b8cb77985c/ENG-Guide+to+the+saudi+PDP+law+for+controllersprocessors.pdf?MOD=AJPERES',
  },
  {
    id: 'pdpl-text',
    label: 'SDAIA. Personal Data Protection Law (English translation).',
    url: 'https://sdaia.gov.sa/en/SDAIA/about/Documents/PersonalDataProtectionLaw.pdf',
  },
];

export const SAUDI_FEASIBILITY_REFERENCES = REFERENCES;

const REFERENCE_BY_ID = new Map(REFERENCES.map((ref) => [ref.id, ref]));

function cite(id: string, text: string): string {
  const ref = REFERENCE_BY_ID.get(id);
  if (!ref) throw new Error(`Unknown reference: ${id}`);
  if (!ref.url) return text;
  return `<a href="${ref.url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
}

export function countWords(html: string): number {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;
}

export const SAUDI_FEASIBILITY_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'What a feasibility study company in Saudi Arabia must deliver', anchor: 'what-the-company-delivers' },
  { heading: 'Why lenders stress-test the market section', anchor: 'why-the-market-section' },
  { heading: 'What the market section must prove', anchor: 'five-tests' },
  { heading: 'Official numbers a 2026 market section should start from', anchor: 'official-numbers' },
  { heading: 'Primary research versus desktop sizing', anchor: 'primary-versus-desktop' },
  { heading: 'How the proof changes by sector', anchor: 'sector-notes' },
  { heading: 'How to choose a feasibility study company in Saudi Arabia', anchor: 'how-to-choose' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const SAUDI_FEASIBILITY_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> A feasibility study company in Saudi Arabia must prove who will buy, in which cities, at what price, through which channel and against which competitors. SIDF treats a feasibility study as mandatory on loan files under SAR 1 billion and then reviews financial, technical and marketing aspects. Primary evidence, not a national TAM slide, makes the market section bankable.</p>`;

const NARRATIVE_HTML = `<p>A feasibility study company in Saudi Arabia is hired to answer one question before capital is committed: will this project sell, at a price that services the debt, in the cities where you plan to build? That is a market question. The technical and financial chapters cannot rescue a market section that was copied from a generic MENA report. This guide sets out what that chapter must prove in 2026, using only official statistics, and how BioNixus’s primary research fills it. It sits on the <a href="/bionixus-industries/insights">industry insights hub</a> and is written for sponsors, lenders and development-fund applicants — not for pharmaceutical briefs.</p>

<p>Search results for “feasibility study company Saudi Arabia” are full of Riyadh consultancies that write bankable reports. Few of those pages say how demand was measured. BioNixus is a primary market research firm, founded in 2012, with 118 clients in 48 countries and 127 studies so far in 2026. Custom work is priced from $10,000 to $60,000. The delivery scope is guaranteed in writing. Findings are not. For the wider non-pharma practice see the <a href="/bionixus-industries">industries hub</a> and <a href="/b2b-industries">B2B market research</a>.</p>

<div class="value-box">
<p><strong>Quick facts a Saudi market section can cite in October 2026</strong></p>
<ul>
<li><strong>35.3 million</strong> people at mid-2024, or 35,300,280 on the national statistics portal: 19.6 million Saudis (55.6%) and about 15.7 million non-Saudis (44.4%), growing 4.7% from mid-2023 (${cite('gastat-pop-2024', 'GASTAT')}; ${cite('mygov-stats', 'my.gov.sa')}).</li>
<li><strong>SAR 119 billion</strong> of FDI inflows in 2024, up 24% from SAR 96 billion in 2023, with an FDI stock of SAR 977 billion. Manufacturing took SAR 35 billion of 2024 inflows (29%); wholesale and retail and construction each took SAR 18 billion (15%) (${cite('gastat-fdi-2024', 'GASTAT')}).</li>
<li><strong>SAR 48.4 billion</strong> net FDI inflows in Q4 2025, up 90% from SAR 25.5 billion in Q4 2024; gross inflows that quarter were about SAR 50.6 billion (${cite('gastat-fdi-q4-2025', 'GASTAT')}). Quarterly and annual FDI series use different methods — do not add them together.</li>
<li><strong>SAR 17 billion to SAR 388 billion:</strong> the National Investment Strategy aims to raise annual FDI more than twenty-fold from 2019 to 2030, and to lift investment (gross fixed capital formation) from 22% of GDP to 30% (${cite('misa-nis', 'MISA')}; ${cite('investsaudi-nis', 'Invest Saudi')}). Vision 2030’s 2025 annual report says FDI reached 2.8% of GDP in 2025 and remained below the target (${cite('vision-2025-ar', 'Vision 2030 Annual Report 2025')}).</li>
<li><strong>55.6%</strong> of real GDP came from non-oil activities in the first half of 2025, against 45.4% in 2016 (${cite('mof-prebudget-2026', 'Ministry of Finance')}).</li>
<li><strong>66.24%</strong> Saudi-family homeownership at the end of 2025, from a 47% baseline, against a 70% Vision 2030 target (${cite('vision-housing', 'Vision 2030 Housing Program')}; ${cite('vision-2025-ar', 'Vision 2030 Annual Report 2025')}).</li>
</ul>
</div>

<h2 id="what-the-company-delivers">What does a feasibility study company in Saudi Arabia actually deliver?</h2>

<p>A complete study still has four chapters: market, technical, financial and legal. Sponsors often buy the financial model and treat the market chapter as a literature review. That is the wrong split for a Saudi credit file. SIDF’s loan-requirements PDF, written for projects costing less than SAR 1 billion, says its purpose is to clarify “project scope, justification, technical, marketing, legal, financial aspects, and ownership.” It states, in those words, that “Submitting a feasibility study is mandatory,” and it warns that submitting the file “does not necessarily guarantee loan approval” (${cite('sidf-req', 'SIDF')}).</p>

<p>On the Project Financing page, SIDF describes medium- to long-term factory loans of up to 20 years. After the initial portal application, the next stages exist so SIDF can assess the project’s “financial, technical, and marketing aspects” before it decides. The published service time is four months if every document arrives on time (${cite('sidf-project', 'SIDF')}). The Promising Factories soft-loan window, last updated on 14 July 2026, again lists a “feasibility study along with project implementation plan” among the eligibility tests, and it funds up to 50% of project cost (${cite('sidf-promising', 'SIDF')}).</p>

<p>The Ministry of Investment’s Investor Guide (English file uploaded in May 2025) is stricter than many consultancy pages imply. The general registration checklist asks for a certified foreign commercial register, identity documents, authenticated financial statements and activity-specific papers. It does <em>not</em> list a full feasibility study as a universal MISA registration document. The one place the guide requires market feasibility work is the technical-liaison-office activity: that office “shall perform market feasibility studies on the type of the company’s activity” and send an annual summary to the ministry (${cite('misa-investor-guide', 'MISA')}). If a consultant tells you MISA always wants a 200-page study, ask which activity code they mean.</p>

<h2 id="why-the-market-section">Why do lenders stress-test the market section?</h2>

<p>A plant can be engineered and still fail if no one buys the output at the modelled price. SIDF’s own language puts marketing on the same plane as technical and financial review (${cite('sidf-project', 'SIDF')}; ${cite('sidf-req', 'SIDF')}). That is why the market section has to be a proof, not a brochure. It has to show demand that is:</p>
<ul>
<li>located — named cities or regions, not “the Kingdom”;</li>
<li>priced — a willingness-to-pay range, not a single optimistic ASP;</li>
<li>channelled — who specifies, who pays, who can switch;</li>
<li>dated — a year and a method on every figure;</li>
<li>auditable — a sample, a source table or a named official series.</li>
</ul>
<p>Desktop TAM built on a single syndicated report cannot carry those five tests. Primary interviews and surveys can. That is the gap a feasibility study company in Saudi Arabia should close before the financial model is frozen.</p>

<h2 id="five-tests">What must the market section prove?</h2>

<table>
<thead><tr><th>Proof the chapter owes the lender</th><th>What “proven” looks like</th><th>What fails the file</th></tr></thead>
<tbody>
<tr><td>Addressable demand</td><td>A defined buyer, a unit of demand and a geography that matches the plant or site</td><td>A national market-size figure with no city split</td></tr>
<tr><td>Who pays, and at what price</td><td>Paid-for willingness-to-pay or current invoice evidence, by segment</td><td>A single average selling price copied from another GCC market</td></tr>
<tr><td>Where demand sits</td><td>City or region volumes that respect Saudi versus non-Saudi age structure</td><td>A Riyadh-only sample presented as a Kingdom forecast</td></tr>
<tr><td>Channel and substitution</td><td>Who specifies, who distributes, what the buyer switches to if you miss</td><td>A channel map with no interviews</td></tr>
<tr><td>Competition and local content</td><td>Named alternatives, import versus local supply, and a Saudization or local-content implication where the licence requires it</td><td>A logo slide of “competitors” with no share or switching evidence</td></tr>
</tbody>
</table>

<p>Those five tests are the market section. Everything else in the chapter — PESTLE pages, Vision 2030 quotations, photographs of giga-projects — is context. Context does not repay a loan.</p>

<h3>1. Addressable demand, not national TAM</h3>

<p>GASTAT’s mid-2024 population is 35.3 million, with Saudis at 55.6% and non-Saudis at 44.4%. Among Saudis, 62.7% were of working age (15–64); among non-Saudis, 89.9% were (${cite('gastat-pop-2024', 'GASTAT')}). A consumer product, a clinic, a school and a factory selling into contractors do not share one “per capita” math. Write the buyer first, then the headcount that could become that buyer, then the share you can defend.</p>

<h3>2. Price and who writes the cheque</h3>

<p>Housing demand is a worked example. Vision 2030’s Housing Program says homeownership among Saudi families rose from 47% to more than 66.24% by the end of 2025, on the way to a 70% target by 2030. Sakani has supported over a million families, “with a third now living in their dream home.” Ejar has registered more than 4.5 million leases (${cite('vision-housing', 'Vision 2030 Housing Program')}). The 2024 Housing Program report says the rate reached 65.4% in 2024 and that the original 2020 stepping-stone of 60% was already met, which is why the 2030 bar was raised to 70% (${cite('housing-2024-ar', 'Housing Program Annual Report 2024')}). A residential feasibility that ignores Sakani eligibility, REDF/SRC mortgages and Ejar tenure is not a Saudi market section. It is a Dubai instrument with Arabic labels.</p>

<h3>3. City and region, not “KSA”</h3>

<p>The same GASTAT release attributes 70.8% of the 2023–2024 population increase to males and 75.6% of the increase to non-Saudis (${cite('gastat-pop-2024', 'GASTAT')}). Labour-heavy formats (camps, quick-service food, some industrial catchments) move with that in-flow. Family housing and school places move with the Saudi age pyramid. If the site is in Riyadh, Jeddah or the Eastern Province, say so, and do not borrow a national average.</p>

<h3>4. Channel and substitution</h3>

<p>SIDF will read the marketing chapter against the technical one: the same tonnes have to be sold through a named route. For industrial files that means offtake, distributor or contractor interviews, not a brochure claim that “Vision 2030 will create demand.” For retail and hospitality it means a catchment, a competing set and a substitution product. Write the question the interviewer asked.</p>

<h3>5. Competition and local content</h3>

<p>Manufacturing already holds the largest FDI stock in the official 2024 register series — SAR 277 billion, 28% of the SAR 977 billion total — and it took the largest 2024 inflow (${cite('gastat-fdi-2024', 'GASTAT')}). A new line that cannot say who already supplies the same SKU, from where, and at what landed cost is not ready for that chapter. Where a licence or a SIDF window asks for local content, the market section has to show that the buyer will actually pay for the local product.</p>

<h2 id="official-numbers">Which official numbers should a 2026 market section start from?</h2>

<p>Use official series as the frame, then replace the frame with primary evidence for the SKU. Do not invent giga-project revenues. The figures below are the ones this article could verify.</p>

<h3>The investment frame</h3>

<p>MISA’s National Investment Strategy is explicit: triple investment between 2019 and 2030; raise FDI from SAR 17 billion in 2019 to SAR 388 billion in 2030; raise GFCF from 22% of GDP to 30% (${cite('misa-nis', 'MISA')}). Invest Saudi’s strategy PDF restates the 2030 FDI objective as about 5.7% of GDP and a GFCF volume of SAR 2 trillion (${cite('investsaudi-nis', 'Invest Saudi')}). Vision 2030’s 2025 annual report then records the gap: FDI was 2.8% of GDP in 2025, “remaining below the target despite higher inflows” (${cite('vision-2025-ar', 'Vision 2030 Annual Report 2025')}). A market section that quotes only the 2030 target, and not the 2025 out-turn, is selling a slogan.</p>

<p>On the official annual register series, 2024 inflows were SAR 119 billion and the stock was SAR 977 billion, with the United Arab Emirates holding the largest stock (SAR 161 billion) and the United States the largest net inflow (SAR 11 billion) (${cite('gastat-fdi-2024', 'GASTAT')}). GASTAT’s Q4 2025 release is a different, later cut: net inflows of SAR 48.4 billion that quarter (${cite('gastat-fdi-q4-2025', 'GASTAT')}). Keep the two series labelled. A model that mixes them will be sent back.</p>

<h3>The growth frame — and the mid-2026 revision</h3>

<p>The Ministry of Finance’s Pre-Budget Statement for FY 2026, published on 30 September 2025, put 2025 real GDP growth at about 4.4% and 2026 at about 4.6%, with non-oil activity growing about 5.0% in 2025. It projected 2026 expenditure of about SAR 1,313 billion, revenue of about SAR 1,147 billion and a deficit of 3.3% of GDP. Saudi unemployment was 6.8% in the second quarter of 2025, down from 12.3% in 2016. Private-sector Saudi employment was about 2.5 million by the end of that quarter. First-quarter 2025 international tourists were about 9.6 million (${cite('mof-news-2026', 'Ministry of Finance')}; ${cite('mof-prebudget-2026', 'Ministry of Finance Pre-Budget PDF')}).</p>

<p>The mid-year FY 2026 fiscal report then updated the year: real GDP in the first half of 2026 was 0.9% lower than a year earlier, because oil activity fell about 11.4% while non-oil activity rose 1.8%. Non-oil activity for 2026 was then expected to grow 3.2%. The overall unemployment rate was 3.0% in the second quarter of 2026, and the Saudi unemployment rate was 6.5% (${cite('mof-midyear-2026', 'Ministry of Finance mid-year report')}). A feasibility dated after that report that still uses the September 2025 pre-budget 4.6% 2026 growth line, with no footnote, will look stale. State the date of every macro input.</p>

<h3>The 100% ownership reform — without over-claiming</h3>

<p>Vision 2030’s 2025 annual report says more than 1,000 reforms and 1,200 measures have been implemented, “including allowing 100% foreign ownership in most sectors,” and that digital platforms reduced requirements for investment licences by 54% (${cite('vision-2025-ar', 'Vision 2030 Annual Report 2025')}). That is the right way to write it: “most sectors,” not “every activity.” Restricted activities still carry the extra papers in Section 05.00 of the Investor Guide (${cite('misa-investor-guide', 'MISA')}).</p>

<h2 id="primary-versus-desktop">When is primary research the market section, and when is a desktop file enough?</h2>

<p>A desktop file is enough when the decision is “is this category growing?” and you only need an official or syndicated frame. It is not enough when the decision is “will these buyers pay this price at this site?” SIDF’s marketing review is the second kind of decision (${cite('sidf-project', 'SIDF')}).</p>

<p>Primary work for a Saudi market section is usually a short, named programme:</p>
<ul>
<li>structured interviews with the people who specify or pay — contractors, distributors, procurement leads, household decision-makers, hotel buyers;</li>
<li>a quantitative check on price, substitution and catchment, in Arabic and English;</li>
<li>a documented sample, with city quotas that match the site, not a convenience panel in one mall;</li>
<li>a source table that separates official series, supplier quotations and fieldwork.</li>
</ul>

<p>If the study interviews residents or employees, Saudi Arabia’s Personal Data Protection Law applies to personal data processed in the Kingdom. It came into force on 14 September 2023, with a one-year grace period to 14 September 2024 (${cite('sdaia-guide', 'SDAIA')}; ${cite('pdpl-text', 'PDPL text')}). Write the legal basis into the method note.</p>

<p>BioNixus prices that custom work between $10,000 and $60,000, depending on sample, cities and whether the output is a chapter inside your study or a stand-alone demand file. The scope, timing and deliverables are guaranteed in writing. Accuracy of findings is not a claim we make. Adjacent country pages for the same industrial questions include <a href="/saudi-arabia-real-estate-market-research">real estate market research in Saudi Arabia</a>, <a href="/saudi-arabia-energy-market-research">energy market research in Saudi Arabia</a> and <a href="/saudi-arabia-hospitality-market-research">hospitality market research in Saudi Arabia</a>.</p>

<h2 id="sector-notes">How does the proof change by sector?</h2>

<h3>Industrial and SIDF files</h3>

<p>Start from the official FDI mix — manufacturing, then trade, then construction (${cite('gastat-fdi-2024', 'GASTAT')}) — then replace it with offtake evidence. SIDF’s Promising Factories window also asks whether the project raises local content (${cite('sidf-promising', 'SIDF')}). The market section has to show a buyer for that local content, not only a policy target. NIS priority sectors on the ministry’s own page are green energy, technology, healthcare and biotechnology, mobility and logistics (${cite('misa-nis', 'MISA')}). Name the sector you are actually in.</p>

<h3>Housing and real estate</h3>

<p>Use the Housing Program’s own numbers: 66.24% homeownership at end-2025, 70% by 2030, Sakani support for over a million families, more than 4.5 million Ejar leases (${cite('vision-housing', 'Vision 2030 Housing Program')}). Then prove the catchment. A Riyadh villa file and a Jeddah apartment file do not share a demand curve. Cross-check the method against <a href="/uae-real-estate-market-research">real estate market research in the UAE</a> and <a href="/egypt-real-estate-market-research">real estate market research in Egypt</a> if the same sponsor is comparing GCC and North African sites — the instruments are not interchangeable.</p>

<h3>Hospitality and visitor catchments</h3>

<p>The Ministry of Finance recorded about 9.6 million international tourists in the first quarter of 2025 and said the Kingdom ranked third worldwide for international-tourist growth in that snapshot (${cite('mof-prebudget-2026', 'Ministry of Finance')}). That is a national arrivals figure, not a hotel-level occupancy proof. A hospitality market section still needs a competitive set, a length-of-stay assumption and a source for corporate versus leisure mix. See <a href="/saudi-arabia-hospitality-market-research">hospitality market research in Saudi Arabia</a>.</p>

<h3>B2B services and financial services</h3>

<p>Financial and insurance activities held SAR 126 billion of the 2024 FDI stock (13%) (${cite('gastat-fdi-2024', 'GASTAT')}). A B2B feasibility — a warehouse, a B2B brand, a payments node — has to recruit the actual buyer committee, not a consumer panel. That discipline is the same one we use on <a href="/saudi-arabia-financial-services-market-research">financial services market research in Saudi Arabia</a>.</p>

<h2 id="how-to-choose">How should you choose a feasibility study company in Saudi Arabia?</h2>

<p>Ask every firm, including BioNixus, to answer these questions in writing before you sign:</p>
<ol>
<li>Which official series will you use for population, FDI and growth, and what is the date of each series?</li>
<li>Will the market chapter report by city, or only as “Saudi Arabia”?</li>
<li>How many interviews or surveys will you complete, in which language, and with which quotas?</li>
<li>How will you separate official statistics, supplier quotations and fieldwork in the source table?</li>
<li>If this file goes to SIDF, who writes the marketing chapter that SIDF will score against the technical one?</li>
<li>What is guaranteed in writing — scope and timing, or the findings themselves?</li>
<li>How will personal data from respondents be processed under the PDPL (${cite('pdpl-text', 'PDPL')})?</li>
</ol>

<p>Local feasibility consultancies that rank for the keyword are often strong at financial modelling and Arabic submission format. They are not automatically strong at demand evidence. A primary-research firm is the reverse. Many bankable files need both: a modeller who can speak SIDF’s templates, and a fieldwork team that can prove the tonnes. BioNixus does the second job and will work alongside your existing modeller.</p>

<h2 id="why-bionixus">Why brief BioNixus for the market section?</h2>

<p>BioNixus is not a general feasibility house. It is a primary market research firm that writes the chapter lenders actually send back. Founded in 2012, it has served 118 clients in 48 countries and has run 127 studies so far in 2026. Custom pricing is $10,000 to $60,000. Forty client reviews sit on the firm’s public profiles. Regional leadership offices are the US headquarters in Sheridan, Wyoming; London EC1V 2NX; and Cairo in Sheikh Zayed, the largest Middle East and Africa office. Dubai, Al Khobar and Salmiya, Kuwait, are field offices. BioNixus is in the process of opening a São Paulo office by the end of 2026; Latin America is covered today from the US office with a local consultant network. The tagline is “Guaranteed in writing.” That guarantee is the scope, not the accuracy of a forecast.</p>

<p>Use this article with the <a href="/insights/top-real-estate-market-research-companies-saudi-arabia-2026">2026 ranking of real estate market research companies in Saudi Arabia</a>, the matching <a href="/insights/top-real-estate-market-research-companies-uae-2026">UAE real estate ranking</a>, and the other industry notes on the <a href="/bionixus-industries/insights">industry insights hub</a> — including <a href="/bionixus-industries/insights/financial-services-market-research-egypt-2026">financial services research in Egypt</a> and <a href="/bionixus-industries/insights/mdf-wood-manufacturing-market-research-trackers-mea">wood-boards trackers in the Middle East and Africa</a>. Browse country entry points on <a href="/market-research-by-industry">market research by industry</a>.</p>

<p>To brief a Saudi feasibility market section, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>. In the Kingdom you can also call the Al Khobar field office on <a href="tel:+966501825336">+966 50 182 5336</a>.</p>`;

const REFERENCES_HTML = `<ol>
${REFERENCES.map((ref) => {
  const source = ref.url
    ? ` <a href="${ref.url}" target="_blank" rel="noopener noreferrer">Source</a>`
    : '';
  return `<li id="ref-${ref.id}">${ref.label}${source} (${ACCESSED}).</li>`;
}).join('\n')}
</ol>`;

export const SAUDI_FEASIBILITY_BODY_HTML = `${NARRATIVE_HTML}

<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const SAUDI_FEASIBILITY_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What does a feasibility study company in Saudi Arabia have to prove in the market section?',
    answer:
      'It has to prove addressable demand, price, city or region, channel and competition with dated, auditable evidence. SIDF treats a feasibility study as mandatory on loan files under SAR 1 billion and then reviews financial, technical and marketing aspects. A national TAM slide is not a market section.',
  },
  {
    question: 'Does the Ministry of Investment require a feasibility study for every licence?',
    answer:
      'The May 2025 MISA Investor Guide does not list a full feasibility study as a universal registration document. It does require technical liaison offices to perform market feasibility studies on the parent company’s activity and to file an annual summary. Activity-specific papers in Section 05.00 still apply. Ask which ISIC activity you are registering.',
  },
  {
    question: 'Is a feasibility study mandatory for SIDF financing?',
    answer:
      'Yes, for the loan files SIDF describes in its General Requirements PDF (projects costing less than SAR 1 billion). The Promising Factories soft-loan window also lists a feasibility study and implementation plan. Submission does not guarantee approval.',
  },
  {
    question: 'Which official numbers should a 2026 Saudi market section use?',
    answer:
      'Start from GASTAT’s mid-2024 population of 35.3 million, GASTAT’s 2024 FDI inflows of SAR 119 billion, MISA’s NIS targets (FDI from SAR 17 billion in 2019 to SAR 388 billion in 2030), Vision 2030’s 2.8% of GDP FDI out-turn in 2025, the Housing Program’s 66.24% homeownership at end-2025, and the Ministry of Finance growth series — including the mid-2026 revision. Label annual versus quarterly FDI. Do not invent giga-project revenues.',
  },
  {
    question: 'When do you need primary research instead of a desktop feasibility?',
    answer:
      'When a lender or investment committee must believe that named buyers will pay a named price at a named site. Desktop work can frame the official series. Primary interviews and surveys prove the SKU. BioNixus prices that custom work from $10,000 to $60,000.',
  },
  {
    question: 'How does BioNixus work with an existing feasibility consultant?',
    answer:
      'BioNixus writes or rebuilds the market chapter — sample, bilingual fieldwork, source table — and your modeller keeps the SIDF or bank template. The scope, timing and deliverables are guaranteed in writing. Findings are not guaranteed.',
  },
  {
    question: 'Where does BioNixus publish non-pharma feasibility and industry research?',
    answer:
      'On /bionixus-industries/insights. Healthcare and pharmaceutical articles stay on the healthcare blog. Country industry pages such as Saudi real estate, energy and hospitality market research sit in the industries silo.',
  },
];

const FAQ_WORD_COUNT = SAUDI_FEASIBILITY_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const SAUDI_FEASIBILITY_WORD_COUNT =
  countWords(SAUDI_FEASIBILITY_EXECUTIVE_SUMMARY_HTML) +
  countWords(SAUDI_FEASIBILITY_BODY_HTML) +
  FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const SAUDI_FEASIBILITY_READING_TIME = Math.ceil(
  (countWords(SAUDI_FEASIBILITY_EXECUTIVE_SUMMARY_HTML) + countWords(NARRATIVE_HTML) + FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const SAUDI_FEASIBILITY_ORGANIZATION: Record<string, unknown> = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG_NAME,
  url: 'https://www.bionixus.com',
  logo: { '@type': 'ImageObject', url: ORG_LOGO, width: 512, height: 512 },
  foundingDate: '2012',
  slogan: 'Guaranteed in writing.',
  description:
    'BioNixus is a primary market research consultancy founded in 2012. It has served 118 clients in 48 countries and has run 127 studies so far in 2026, with custom pricing from $10,000 to $60,000. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London (EC1V 2NX) and Sheikh Zayed, Giza. Field offices are in Dubai, Al Khobar and Salmiya, Kuwait. It is in the process of opening a São Paulo office by the end of 2026. Latin America is covered from the US office with a local consultant network.',
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
    'Feasibility study market research',
    'Saudi Arabia market research',
    'SIDF feasibility studies',
    'B2B market research',
    'Real estate market research',
    'Industrial market research',
    'Primary research',
  ],
};

const AUTHOR = WESTERN_AUTHORS.find((author) => author.name === SAUDI_FEASIBILITY_AUTHOR_NAME);
if (!AUTHOR) throw new Error('Laura McConaughey is missing from WESTERN_AUTHORS');

const AUTHOR_SCHEMA = personAuthorJsonLd(AUTHOR);

export const SAUDI_FEASIBILITY_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-feasibility-study-company-saudi-arabia',
  slug: SAUDI_FEASIBILITY_SLUG,
  title: SAUDI_FEASIBILITY_DISPLAY_TITLE,
  excerpt: SAUDI_FEASIBILITY_EXCERPT,
  date: '12 Oct 2026',
  category: SAUDI_FEASIBILITY_CATEGORY,
  country: 'Saudi Arabia',
  language: 'en',
  contentSilo: 'industries',
  industrySegment: 'b2b',
  industrySlug: 'real-estate',
  readingTime: SAUDI_FEASIBILITY_READING_TIME,
  wordCount: SAUDI_FEASIBILITY_WORD_COUNT,
  breadcrumbLabel: SAUDI_FEASIBILITY_BREADCRUMB_LABEL,
  displaySubtitle: SAUDI_FEASIBILITY_DISPLAY_SUBTITLE,
  tags: [...SAUDI_FEASIBILITY_TAGS],
  coverImage: SAUDI_FEASIBILITY_HERO_IMAGE,
  coverImageAlt: SAUDI_FEASIBILITY_HERO_IMAGE_ALT,
  ogTitle: SAUDI_FEASIBILITY_META_TITLE,
  ogDescription: SAUDI_FEASIBILITY_META_DESCRIPTION,
  ogImage: SAUDI_FEASIBILITY_COVER_IMAGE,
  ogImageAlt: SAUDI_FEASIBILITY_COVER_IMAGE_ALT,
  seoMetaTitle: SAUDI_FEASIBILITY_META_TITLE,
  seoMetaDescription: SAUDI_FEASIBILITY_META_DESCRIPTION,
  seoCanonicalUrl: SAUDI_FEASIBILITY_URL,
  seoNoIndex: false,
  authorName: AUTHOR.name,
  authorTitle: AUTHOR.jobTitle,
  publishedAtIso: SAUDI_FEASIBILITY_PUBLISHED_ISO,
  updatedAtIso: SAUDI_FEASIBILITY_UPDATED_ISO,
  tableOfContents: SAUDI_FEASIBILITY_TABLE_OF_CONTENTS,
  executiveSummary: SAUDI_FEASIBILITY_EXECUTIVE_SUMMARY_HTML,
  faq: [...SAUDI_FEASIBILITY_FAQ],
  ctaSection: {
    title: 'Need the market section of a Saudi feasibility study proven?',
    description:
      'BioNixus scopes primary demand research for SIDF-ready and investor-ready market chapters. Custom work is $10,000–$60,000. The scope is guaranteed in writing.',
    buttonText: 'Request a proposal',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: SAUDI_FEASIBILITY_ORGANIZATION,
    author: AUTHOR_SCHEMA,
    about: [
      { '@type': 'Thing', name: 'Feasibility study' },
      { '@type': 'Thing', name: 'Market research' },
      { '@type': 'Country', name: 'Saudi Arabia' },
    ],
  },
  body: SAUDI_FEASIBILITY_BODY_HTML,
};
