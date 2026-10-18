/**
 * Hardcoded SEO blog post: /blog/china-biotech-export-controls-pharma-deals-2026
 * Research-led article for "China biotech export controls".
 * Reads the 16 October 2026 MOFCOM/MOST draft catalogue for BD,
 * licensing and Gulf market-access teams. Every numeric claim has an
 * inline source. This is a draft, not final law, and is not legal advice.
 */
import type { BlogPost, BlogPostItemListEntry } from '@/types/blog';
import { WESTERN_AUTHORS, personAuthorJsonLd } from '@/data/editorialAuthors';
import { GOOGLE_OFFICES, officeRoleLabel } from '@/data/googleLocations';
import { ORG_ID, ORG_LOGO, ORG_NAME, ORG_SAME_AS } from '@/lib/seo/organization';

export const CHINA_BIOTECH_EXPORT_SLUG = 'china-biotech-export-controls-pharma-deals-2026';

export const CHINA_BIOTECH_EXPORT_PATH = `/blog/${CHINA_BIOTECH_EXPORT_SLUG}`;

export const CHINA_BIOTECH_EXPORT_URL = `https://www.bionixus.com${CHINA_BIOTECH_EXPORT_PATH}`;

/**
 * Byline. A name from the Sanity roster in src/data/editorialAuthors.ts.
 * Ivona Gunjova is the assigned Global Research Manager for this article.
 */
export const CHINA_BIOTECH_EXPORT_AUTHOR_NAME: string | undefined = 'Ivona Gunjova';

export const CHINA_BIOTECH_EXPORT_AUTHOR_PROFILE_URL: string | undefined = undefined;

export const CHINA_BIOTECH_EXPORT_COVER_IMAGE =
  '/images/blog/china-biotech-export-controls-pharma-deals-2026-cover.jpg';

export const CHINA_BIOTECH_EXPORT_COVER_IMAGE_ALT =
  'BioNixus navy and gold cover for China biotech export controls and pharma deal planning, 2026';

export const CHINA_BIOTECH_EXPORT_HERO_IMAGE =
  '/images/blog/china-biotech-export-controls-pharma-deals-2026-hero.jpg';

export const CHINA_BIOTECH_EXPORT_HERO_IMAGE_ALT =
  'Navy and gold BioNixus artwork for China biotech export controls: catalogue layers, licence route and Gulf access';

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const CHINA_BIOTECH_EXPORT_FIGURES: ArticleFigure[] = [
  {
    src: '/images/blog/china-biotech-export-controls-pharma-deals-2026-split.webp',
    alt: 'Bar chart of the 40 draft catalogue items: 23 AI, 5 biotech and 12 solar technologies',
    caption:
      'The 16 October 2026 draft would add 40 technologies: 23 in AI, 5 in biomedicine and 12 in photovoltaics (MOFCOM/MOST Announcement No. 48). This is a draft list, not a final catalogue.',
    width: 800,
    height: 580,
  },
  {
    src: '/images/blog/china-biotech-export-controls-pharma-deals-2026-routes.webp',
    alt: 'Three deal routes under the draft: platform ownership transfer, outbound licence without ownership change, and contract research or manufacturing',
    caption:
      'Three published routes a 2026 BD screen should keep separate: a whole-platform ownership transfer, an outbound licence that keeps ownership in China, and contract research or manufacturing. Licensing without an ownership transfer is the route the draft says can use automatic-licence facilitation.',
    width: 800,
    height: 640,
  },
  {
    src: '/images/blog/china-biotech-export-controls-pharma-deals-2026-timeline.webp',
    alt: 'Timeline of the draft: 16 October 2026 publication and interim registration, 15 November comment close, final catalogue date not yet published',
    caption:
      'Published calendar only: the draft and the interim pre-export registration began on 16 October 2026; comments close on 15 November 2026. A final catalogue date has not been published.',
    width: 800,
    height: 580,
  },
  {
    src: '/images/blog/china-biotech-export-controls-pharma-deals-2026-deals.webp',
    alt: 'Bar chart of 121 China biopharma out-licensing deals to 1 July 2026, of which five involved an ownership transfer',
    caption:
      'Fierce Biotech, citing PharmCube, reported that only five of 121 cross-border Chinese biopharma out-licensing deals to 1 July 2026 involved an ownership transfer. That is a deal-mix fact, not a forecast of the draft’s effect.',
    width: 800,
    height: 580,
  },
  {
    src: '/images/blog/china-biotech-export-controls-pharma-deals-2026-brief.webp',
    alt: 'Checklist of seven China biotech export controls research workstreams for deal, licence and Gulf access teams',
    caption:
      'Seven workstreams a 2026 China biotech export controls brief should cover: catalogue mapping, deal-structure screen, interim registration, the 15 November comment window, a single-platform backup, Gulf payer and physician evidence, and partner selection.',
    width: 800,
    height: 760,
  },
];

function figureHtml(figure: ArticleFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

export const CHINA_BIOTECH_EXPORT_META_TITLE = 'China Biotech Export Controls: Pharma Deal Guide 2026';

export const CHINA_BIOTECH_EXPORT_META_DESCRIPTION =
  'China biotech export controls in the 16 Oct 2026 draft: 40 AI, biotech and solar items. What BD, licensing and Gulf access teams should do before 15 Nov.';

export const CHINA_BIOTECH_EXPORT_DISPLAY_TITLE =
  'China Biotech Export Controls: What Pharma Deal, Licensing and Gulf Access Teams Should Do';

export const CHINA_BIOTECH_EXPORT_DISPLAY_SUBTITLE =
  "China's 16 October 2026 draft catalogue, read for BD and market access";

export const CHINA_BIOTECH_EXPORT_BREADCRUMB_LABEL = 'China biotech export controls';

export const CHINA_BIOTECH_EXPORT_EXCERPT =
  'A sourced 2026 briefing on China biotech export controls in the 16 October MOFCOM/MOST draft: what the 40-item list actually says, how a platform sale differs from a licence, and what BD and Gulf access teams should commission before 15 November.';

export const CHINA_BIOTECH_EXPORT_PUBLISHED_ISO = '2026-10-18T12:00:00.000Z';
export const CHINA_BIOTECH_EXPORT_UPDATED_ISO = '2026-10-18T12:00:00.000Z';

export const CHINA_BIOTECH_EXPORT_CATEGORY = 'Market Research';

export const CHINA_BIOTECH_EXPORT_TAGS = [
  'China Biotech Export Controls',
  'MOFCOM',
  'Cell and Gene Therapy',
  'siRNA',
  'Licensing',
  'Market Access',
  'China',
  'Primary Research',
];

const ACCESSED = 'accessed 18 October 2026';

type Reference = { id: string; label: string; url?: string; vendor?: boolean };

const REFERENCES: Reference[] = [
  {
    id: 'mofcom-48',
    label:
      'Ministry of Commerce and Ministry of Science and Technology. Announcement No. 48 of 2026 (16 October 2026). Draft revision of the Catalogue of Technologies Prohibited or Restricted from Export, adding AI, biomedicine and photovoltaic technologies, with interim pre-export registration. 40 items: 23 AI, 5 biomedicine, 12 photovoltaic. Comments 16 October–15 November 2026.',
    url: 'https://www.mofcom.gov.cn/zcfb/blgg/art/2026/art_1666fcaa24424766afe0683498ff0908.html',
  },
  {
    id: 'mofcom-48-gkml',
    label:
      'MOFCOM government-information disclosure copy of Announcement No. 48 of 2026. Same text as the 16 October 2026 bulletin: 40 technologies, comment window, and interim registration on the unified business platform.',
    url: 'https://www.mofcom.gov.cn/zfxxgk/gkml/art/2026/art_ccd0391072a94c809ae7e820abe2536b.html',
  },
  {
    id: 'reuters-yahoo',
    label:
      'Reuters, via Yahoo News. China proposes adding 40 AI, biotech, solar technologies to export control list (16 October 2026). Public comment until 15 November; interim pre-export registration. Ministry said the move is routine and does not target any specific country, region or entity.',
    url: 'https://www.yahoo.com/news/world/articles/china-proposes-adding-40-ai-084246835.html',
  },
  {
    id: 'fierce',
    label:
      'Liu A. China looks to ban foreign acquisitions of critical biopharma platforms. Fierce Biotech. 16 October 2026. $120 billion in foreign transactions of Chinese biotech assets as of August 2026, up 36% year on year (China’s drug regulators). Five of 121 out-licensing deals to 1 July 2026 involved ownership transfer (PharmCube). AstraZeneca–Gracell “would likely not have been possible.”',
    url: 'https://www.fiercebiotech.com/biotech/china-looks-ban-foreign-acquisitions-critical-biopharma-platforms',
  },
  {
    id: 'china-daily',
    label:
      'Zhang C. Draft revision aims to better streamline tech exports. China Daily. 17 October 2026. Draft covers 40 technologies: prohibits 14 and restricts 26; automatic licensing in specified cases; 23 AI, 5 biomedicine, 12 photovoltaic. Spokesperson: routine; does not target any specific country, region or entity; most AI remains freely exportable.',
    url: 'https://www.chinadaily.com.cn/a/202610/17/WS6ad2e154e4b06d4aa0563587.html',
  },
  {
    id: 'ecomp',
    label:
      'MOFCOM Unified Business Platform, Technology Trade Management Information application. Announcement No. 48 requires pre-export registration here from 16 October 2026 until the revised catalogue takes effect.',
    url: 'https://ecomp.mofcom.gov.cn',
  },
  {
    id: 'ftl-2025',
    label:
      'Foreign Trade Law of the People’s Republic of China (2025 revision). Adopted 27 December 2025; in force 1 March 2026. Article 20: the State Council foreign-trade authority, with other departments, formulates and publishes catalogues of goods and technologies prohibited or restricted from import or export. Named as a legal basis in Announcement No. 48.',
    url: 'https://scjss.mofcom.gov.cn/wmypzhx/qghd/art/2026/art_ff27f654a22e47d7ba2a74338f780f9e.html',
  },
  {
    id: 'ftl-policy',
    label:
      'MOFCOM Policy Law database. Foreign Trade Law (2025 revision), Presidential Order No. 67, in force 1 March 2026. Same statute named in Announcement No. 48.',
    url: 'https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=104354',
  },
  {
    id: 'tech-ord-gov',
    label:
      'State Council. Regulations on the Administration of Technology Import and Export. State Council Order No. 331 (2001), as amended. Official gazette reprint. Named with the Foreign Trade Law as a legal basis in Announcement No. 48. Restricted technology exports are licensed; prohibited technology may not be exported.',
    url: 'https://www.gov.cn/gongbao/content/2019/content_5468926.htm',
  },
  {
    id: 'tech-ord-mofcom',
    label:
      'MOFCOM Treaty and Law Department copy of the Regulations on the Administration of Technology Import and Export. Technology export includes patent assignment, patent licensing, know-how transfer and technical services.',
    url: 'https://fms.mofcom.gov.cn/zcfg/jsjckzcfg/art/2005/art_c95ea117c3d54363b1af78ae52c8ebf4.html',
  },
  {
    id: 'az-gracell-2023',
    label:
      'AstraZeneca. AstraZeneca to acquire Gracell, furthering cell therapy ambition across oncology and autoimmune diseases. 26 December 2023. Upfront value about $1.0 billion; about $1.2 billion if a contingent value right is paid. Includes GC012F and the FasTCAR manufacturing platform.',
    url: 'https://www.astrazeneca.com/media-centre/press-releases/2023/astrazeneca-to-acquire-gracell-furthering-cell-therapy-ambition-across-oncology-and-autoimmune-diseases.html',
  },
  {
    id: 'az-gracell-2024',
    label:
      'AstraZeneca. Acquisition of Gracell completed. 22 February 2024. Confirms close of the merger; Gracell became a wholly owned subsidiary with operations in China and the US. Upfront about $1.0 billion; about $1.2 billion with the contingent value right.',
    url: 'https://www.astrazeneca.com/media-centre/press-releases/2024/acquisition-of-gracell-completed.html',
  },
  {
    id: 'sec-6k-2023',
    label:
      'AstraZeneca PLC. Form 6-K, 26 December 2023. SEC file of the Gracell announcement: about $1.0 billion upfront and about $1.2 billion including the contingent value right; FasTCAR platform and GC012F.',
    url: 'https://www.sec.gov/Archives/edgar/data/901832/000110465923129281/tm2332933d9_6k.htm',
  },
  {
    id: 'sec-6k-2024',
    label:
      'AstraZeneca PLC. Form 6-K, 22 February 2024. SEC file of the completion announcement: Gracell acquisition closed; same upfront and contingent values as the December 2023 release.',
    url: 'https://www.sec.gov/Archives/edgar/data/901832/000110465924026359/tm246981d1_6k.htm',
  },
  {
    id: 'gracell-complete',
    label:
      'Gracell Biotechnologies. Gracell Biotechnologies Acquisition Completed. 22 February 2024. Company notice that the 23 December 2023 merger agreement closed and Gracell ceased to be a public company.',
    url: 'https://www.gracellbio.com/html/media/117.html',
  },
  {
    id: 'tech-ord-2020',
    label:
      'Zhejiang Provincial Department of Commerce reprint. Regulations on the Administration of Technology Import and Export, including the 29 November 2020 third revision. Restricted technology exports are licensed; prohibited technology may not be exported.',
    url: 'http://zcom.zj.gov.cn/art/2025/6/19/art_1229562310_2557071.html',
  },
  {
    id: 'iqvia',
    label:
      'IQVIA. China and cross-border biopharma deal commentary and audit products. Useful for national audit context; it does not replace a primary-research file that maps a named asset onto the draft catalogue and a Gulf launch plan.',
    vendor: true,
  },
  {
    id: 'evaluate',
    label:
      'Evaluate. Syndicated biopharma deal and forecast products covering China-origin assets. A deal database is not a MOFCOM-catalogue screen or a KSA/UAE payer file.',
    vendor: true,
  },
  {
    id: 'clarivate',
    label:
      'Clarivate. Syndicated pipeline and deal intelligence used on “China biotech BD” queries. It does not say whether a platform sale, a licence or a Gulf treated-share study is the next piece of work.',
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

export const CHINA_BIOTECH_EXPORT_WORKSTREAMS: Workstream[] = [
  {
    name: 'Catalogue mapping',
    researchType: 'Desk reconstruction of the published draft',
    question: 'Does this asset sit on the five biomedicine items, the 23 AI items, or neither?',
    description:
      'Map the molecule, platform and any AI tool onto Announcement No. 48 before you write “in scope” or “out of scope”. The public notice names classes, not your asset.',
  },
  {
    name: 'Deal-structure screen',
    researchType: 'Term-sheet reconstruction with counsel',
    question: 'Is the live term sheet a platform sale, a licence that keeps ownership in China, or a service contract?',
    description:
      'The draft treats ownership transfer, outbound licensing and a change of actual control as different facts. Commission a one-page structure map before the next IC.',
  },
  {
    name: 'Interim registration file',
    researchType: 'ecomp.mofcom.gov.cn reconstruction',
    question: 'Has the Chinese counterpart already registered this export on the unified platform?',
    description:
      'From 16 October 2026 until a revised catalogue takes effect, listed technology exports — including unfinished ones — must be registered before they leave.',
  },
  {
    name: 'Comment-window timing',
    researchType: 'Calendar and counterpart interviews',
    question: 'What, if anything, will change between 15 November 2026 and a final catalogue?',
    description:
      'Comments close on 15 November 2026. The final list, thresholds and facilitation rules can still move. Do not treat the draft annex as the last word.',
  },
  {
    name: 'Single-platform backup',
    researchType: 'CMC and supply-option interviews',
    question: 'If one Chinese platform cannot be bought or transferred, what is the backup for supply and know-how?',
    description:
      'A launch that depends on one reusable manufacturing engine needs a named alternative — another licence, a second site, or a redesigned CMC plan.',
  },
  {
    name: 'Gulf payer and physician evidence',
    researchType: 'Anonymous PRFs and payer interviews in KSA and the UAE',
    question: 'What share of treated patients in Saudi Arabia and the UAE would start a China-origin cell, gene or siRNA product, and which wallet would pay?',
    description:
      'A China HCP tracker is not a Gulf treated-share. Interview Saudi and UAE physicians and payers as separate samples.',
  },
  {
    name: 'Partner and centre selection',
    researchType: 'Hospital, CMO and local-affiliate interviews',
    question: 'Which Gulf centre, importer or local partner can actually receive and use the licensed product?',
    description:
      'Cell and gene therapy and siRNA launches in the Gulf fail at the centre and the partner, not on a China deal slide. Name the sites before you name the peak year.',
  },
];

const WORKSTREAM_TABLE_HTML = `<table>
<thead><tr><th>Workstream</th><th>Decision it answers</th><th>What the published record already shows</th><th>What to commission</th></tr></thead>
<tbody>
<tr><td>Catalogue mapping</td><td>Whether the asset is even on the draft list</td><td>40 items: 23 AI, 5 biomedicine, 12 photovoltaic; public-domain AI is out of scope (${cite('mofcom-48', 'Announcement No. 48')})</td><td>A named-asset map, not a sector headline</td></tr>
<tr><td>Deal-structure screen</td><td>Sale versus licence versus service</td><td>Licensing without ownership transfer can use automatic-licence facilitation; a platform sale is the harder route (${cite('mofcom-48', 'MOFCOM')}; ${cite('fierce', 'Fierce Biotech')})</td><td>One-page structure map signed by BD and counsel</td></tr>
<tr><td>Interim registration</td><td>Whether the export can move now</td><td>Registration on the unified platform from 16 October 2026, including unfinished exports (${cite('mofcom-48', 'Announcement No. 48')}; ${cite('ecomp', 'ecomp.mofcom.gov.cn')})</td><td>Counterpart filing status and document list</td></tr>
<tr><td>Comment window</td><td>What can still change</td><td>Comments close 15 November 2026; the list is still a draft (${cite('mofcom-48', 'MOFCOM')}; ${cite('reuters-yahoo', 'Reuters')})</td><td>A dated scenario, not a frozen annex</td></tr>
<tr><td>Gulf evidence</td><td>Whether a China-origin asset will be used and paid for in KSA or the UAE</td><td>This briefing does not invent a Gulf treated-share. The research question is local (${cite('fierce', 'Fierce')} on China deal value; Gulf use is a separate file)</td><td>Physician PRFs and payer interviews in each country</td></tr>
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

export const CHINA_BIOTECH_EXPORT_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  {
    heading: 'What are China biotech export controls in the 16 October 2026 draft?',
    anchor: 'what-are-china-biotech-export-controls-in-the-16-october-2026-draft',
  },
  {
    heading: 'Which 40 technologies sit on the draft list?',
    anchor: 'which-40-technologies-sit-on-the-draft-list',
  },
  {
    heading: 'What does the draft do to a platform sale versus a licence?',
    anchor: 'what-does-the-draft-do-to-a-platform-sale-versus-a-licence',
  },
  {
    heading: 'Why the 2023 Gracell acquisition is the cautionary example',
    anchor: 'why-the-2023-gracell-acquisition-is-the-cautionary-example',
  },
  {
    heading: 'What is already required before the catalogue is final?',
    anchor: 'what-is-already-required-before-the-catalogue-is-final',
  },
  {
    heading: 'What should China biotech export controls change in a BD workplan?',
    anchor: 'what-should-china-biotech-export-controls-change-in-a-bd-workplan',
  },
  {
    heading: 'What does this mean for a China-origin cell, gene or siRNA launch in the Gulf?',
    anchor: 'what-does-this-mean-for-a-china-origin-cell-gene-or-sirna-launch-in-the-gulf',
  },
  {
    heading: 'What should a 2026 deal-and-access brief measure?',
    anchor: 'what-should-a-2026-deal-and-access-brief-measure',
  },
  { heading: 'How should you commission the study?', anchor: 'how-to-commission' },
  { heading: 'Why BioNixus', anchor: 'why-bionixus' },
  { heading: 'References', anchor: 'references' },
];

export const CHINA_BIOTECH_EXPORT_EXECUTIVE_SUMMARY_HTML = `<p><strong>Short answer:</strong> China biotech export controls in the 16 October 2026 draft are not yet final law. The catalogue would add 40 items, including five biotech technologies, and would treat a whole-platform sale differently from a licence. Commission <a href="/healthcare-market-research">healthcare market research</a> on the asset and on any Gulf launch file before you lock a structure. Comments close on 15 November 2026.</p>`;

const NARRATIVE_HTML = `<p>China biotech export controls became a live deal question on 16 October 2026, when China’s Ministry of Commerce and Ministry of Science and Technology published a draft update to the Catalogue of Technologies Prohibited or Restricted from Export. The draft would add 40 technologies in artificial intelligence, biomedicine and photovoltaics. It is a consultation, not a finished statute. Comments are open until 15 November 2026, and an interim registration rule already applies to listed technology exports. This briefing uses only published sources. It sits alongside our <a href="/healthcare-market-research">healthcare market research company</a> hub and the China-to-MEA desk on <a href="/market-research/china">Middle East market research for Chinese companies</a>.</p>

<div class="value-box">
<p><strong>Quick facts: the 16 October 2026 draft, not final law</strong></p>
<ul>
<li><strong>Announcement No. 48 of 2026</strong> is a joint MOFCOM and MOST notice. It proposes adding 40 technologies and starts interim pre-export registration the same day (${cite('mofcom-48', 'MOFCOM bulletin')}; ${cite('mofcom-48-gkml', 'MOFCOM disclosure copy')}).</li>
<li><strong>23 / 5 / 12:</strong> 23 items in AI (large models, intelligent agents, computing clusters and information processing), 5 in biomedicine (cell and gene therapy, small nucleic-acid drugs, pathogenic microorganisms), 12 in photovoltaics (${cite('mofcom-48', 'Announcement No. 48')}; ${cite('china-daily', 'China Daily')})</li>
<li><strong>14 prohibited, 26 restricted</strong> across those three sectors, with automatic licensing and other facilitation in specified cases (${cite('china-daily', 'China Daily, 17 October 2026')}).</li>
<li><strong>Licensing without an ownership transfer</strong> is the biomedicine route the notice says can use automatic-licence facilitation (${cite('mofcom-48', 'MOFCOM')}). Fierce Biotech’s reading is “regulating transfers while leaving licensing unconstrained” (${cite('fierce', 'Fierce Biotech')}).</li>
<li><strong>Comments close 15 November 2026.</strong> Email, fax and post addresses are on the notice (${cite('mofcom-48', 'MOFCOM')}; ${cite('reuters-yahoo', 'Reuters')})</li>
<li><strong>Interim registration is already live</strong> on the unified business platform, including unfinished exports (${cite('mofcom-48', 'Announcement No. 48')}; ${cite('ecomp', 'ecomp.mofcom.gov.cn')})</li>
<li><strong>$120 billion</strong> in foreign transactions of Chinese biotech assets as of August 2026, up 36% year on year, according to China’s drug regulators as reported by Fierce (${cite('fierce', 'Fierce Biotech')})</li>
<li><strong>This page is not legal advice.</strong> Counsel should read the official notice, the annex and the current catalogue. BioNixus commissions research around the deal and the launch, not a legal opinion.</li>
</ul>
</div>

<h2 id="what-are-china-biotech-export-controls-in-the-16-october-2026-draft">What are China biotech export controls in the 16 October 2026 draft?</h2>

<p>They are a proposed addition to an existing Chinese catalogue, not a new standalone biotech law. Announcement No. 48 says MOFCOM and MOST intend to revise the Catalogue of Technologies Prohibited or Restricted from Export and, until that revision is issued and takes effect, to register listed technology exports in advance (${cite('mofcom-48', 'Announcement No. 48')}). The notice names two existing instruments as its legal basis: the Foreign Trade Law and the Regulations on the Administration of Technology Import and Export (${cite('mofcom-48', 'MOFCOM')}; ${cite('ftl-2025', 'Foreign Trade Law, 2025 revision')}; ${cite('tech-ord-gov', 'Technology Import and Export Regulations')}).</p>

<p>The Foreign Trade Law, revised in December 2025 and in force from 1 March 2026, already lets the State Council foreign-trade authority write catalogues of technologies that may not leave, or that leave only with a licence (${cite('ftl-2025', 'Foreign Trade Law art. 20–21')}; ${cite('ftl-policy', 'MOFCOM policy database')}). The technology-import-and-export regulations treat a technology export as a transfer from inside China to outside China by trade, investment or cooperation, including patent assignment, licensing, know-how and technical services. Restricted technology is licensed. Prohibited technology may not be exported (${cite('tech-ord-gov', 'State Council regulations')}; ${cite('tech-ord-mofcom', 'MOFCOM copy')}; ${cite('tech-ord-2020', '2020 third revision reprint')}). Reuters reported the same 16 October facts: 40 technologies, comment until 15 November, interim registration already live, and a ministry statement that the revision is routine and does not target any specific country, region or entity (${cite('reuters-yahoo', 'Reuters / Yahoo')})</p>

<p>${cite('iqvia', 'IQVIA')}, ${cite('evaluate', 'Evaluate')} and ${cite('clarivate', 'Clarivate')} sell China biopharma deal and pipeline products that often occupy this query. They do not say whether your asset sits on the five biomedicine items, whether the live term sheet is a platform sale, or whether a Saudi or UAE payer will fund the licensed product. Country context for a China-origin team that will launch in the Gulf sits on <a href="/market-research/china">Middle East market research for Chinese companies</a> and, for the mainland sample, on <a href="/insights/top-healthcare-market-research-companies-china-2026">top healthcare market research companies in China</a>.</p>

<p>A usable China biotech export controls file is therefore a research problem before it is a portal upload. It asks which published class the asset belongs to, which deal structure the parties actually signed, whether the Chinese counterpart has already registered the export, and what evidence a Gulf payer or treating physician will still need after the licence is signed. Domestic China regulatory timing for devices is a different job; that file sits on <a href="/blog/nmpa-class-iii-registration-timeline-2026">NMPA Class III registration timelines</a>.</p>

<h2 id="which-40-technologies-sit-on-the-draft-list">Which 40 technologies sit on the draft list?</h2>

<p>The public notice gives classes and counts. It does not reprint every technical threshold in the HTML bulletin. Annex 1 is a separate file. Until you have read that annex against a named asset, “in scope” is a hypothesis.</p>

<p><strong>Artificial intelligence, 23 items.</strong> The notice lists large models, intelligent agents, computing clusters and information-processing technologies. Public-domain AI — open source or academic papers — is out of scope (${cite('mofcom-48', 'Announcement No. 48')}). China Daily, reporting the ministry spokesperson, said the AI controls are narrowly defined and that most AI would remain freely exportable once a revision takes effect (${cite('china-daily', 'China Daily')}). Reuters named the same three building blocks (${cite('reuters-yahoo', 'Reuters')}).</p>

<p><strong>Biomedicine, 5 items.</strong> The notice lists cell and gene therapy, small nucleic-acid drugs (the Chinese term covers siRNA and related oligonucleotide medicines) and pathogenic-microorganism technologies. For outbound authorisations that do not transfer ownership, the notice says automatic licensing and other facilitation measures apply (${cite('mofcom-48', 'MOFCOM')}). Fierce Biotech’s operational reading is that the draft would block or tightly control foreign acquisitions of proprietary cell and gene therapy, siRNA and pathogen gain-of-function <em>platforms</em> — reusable technology that can support more than one drug — and would restrict a full transfer of proprietary target-identification and verification technology in those fields (${cite('fierce', 'Fierce Biotech')}).</p>

<p><strong>Photovoltaics, 12 items.</strong> The notice lists technologies used in polysilicon, wafer and cell manufacturing, and says the managed scope also covers key and core equipment that carries those technologies (${cite('mofcom-48', 'Announcement No. 48')}; ${cite('china-daily', 'China Daily')}). A pharma BD file does not need a solar forecast. It does need to know that the 40-item headline is not “40 biotech items”.</p>

${figureHtml(CHINA_BIOTECH_EXPORT_FIGURES[0])}

<p>China Daily adds a split the HTML bulletin does not put in the same sentence: 14 of the 40 technologies would be prohibited and 26 restricted, with automatic licensing in specified cases (${cite('china-daily', 'China Daily')}). Treat that as a China Daily report of the draft, not as a substitute for Annex 1. Two exclusions still matter. Public-domain AI is out of scope. And the biomedicine facilitation language is about authorisations that do not transfer ownership, not about “any biotech deal”. A share sale that moves actual control of the platform overseas is a different fact on the same notice (${cite('mofcom-48', 'Announcement No. 48, section 3')}).</p>

<h2 id="what-does-the-draft-do-to-a-platform-sale-versus-a-licence">What does the draft do to a platform sale versus a licence?</h2>

<p>This is the paragraph pharma should read twice. The draft is not a blanket ban on Chinese biotech leaving the country. It is a ban-or-licence rule aimed at the reusable engine, with an easier published route for a licence that leaves ownership at home.</p>

<p>Announcement No. 48 says outbound authorisations that do not transfer ownership can use automatic licensing and other facilitation (${cite('mofcom-48', 'MOFCOM')}). China Daily, citing the ministry, adds streamlined procedures for outbound licensing of specified novel drug-target discovery and validation technologies (${cite('china-daily', 'China Daily')}). Fierce Biotech quoted Aaron Gu of Han Kun as “regulating transfers while leaving licensing unconstrained,” and reported a MOFCOM spokesperson saying that out-licensing and the use of know-how for outsourced research and manufacturing do not fall under the ban. As of 1 July 2026, only five of 121 cross-border Chinese biopharma out-licensing deals that year involved an ownership transfer, according to PharmCube as cited by Fierce (${cite('fierce', 'Fierce Biotech')})</p>

${figureHtml(CHINA_BIOTECH_EXPORT_FIGURES[1])}

<p>Three points sit inside that split. “Licence” on a slide is not enough if the contract is in substance a sale or a change of actual control — that is its own registration case (${cite('mofcom-48', 'Announcement No. 48, section 3')}). A CRO or CMO contract is not a platform acquisition; Fierce’s report of the spokesperson puts those service contracts outside the ban (${cite('fierce', 'Fierce')}). And even an open licence still has paperwork: during the interim period, outbound licensing of listed technology is one of the four registration cases (${cite('mofcom-48', 'MOFCOM')}; ${cite('ecomp', 'unified platform')}). Ask counsel to label the live term sheet. Then commission the research around that label: counterpart capacity, backup supply, and the Gulf evidence file if the product is meant to launch in Saudi Arabia or the UAE. This is not a recommendation for tax, IP or antitrust structure.</p>

<h2 id="why-the-2023-gracell-acquisition-is-the-cautionary-example">Why the 2023 Gracell acquisition is the cautionary example</h2>

<p>On 26 December 2023 AstraZeneca agreed to acquire Gracell Biotechnologies for about $1.0 billion upfront, or about $1.2 billion if a contingent value right is paid. The assets included GC012F, a FasTCAR-enabled BCMA/CD19 autologous CAR-T candidate, and Gracell’s FasTCAR manufacturing platform. The 2023 release treated FasTCAR as a reusable engine, not only as one candidate (${cite('az-gracell-2023', 'AstraZeneca, 26 December 2023')}; ${cite('sec-6k-2023', 'AstraZeneca Form 6-K')}). The deal closed on 22 February 2024. Gracell became a wholly owned subsidiary with operations in China and the United States (${cite('az-gracell-2024', 'AstraZeneca, 22 February 2024')}; ${cite('sec-6k-2024', 'AstraZeneca Form 6-K')}; ${cite('gracell-complete', 'Gracell, 22 February 2024')})</p>

<p>Fierce Biotech said that purchase “would likely not have been possible under the proposed new rule,” and called it the first full acquisition of a Chinese biotech by Big Pharma (${cite('fierce', 'Fierce Biotech')}). That is Fierce’s judgement, not a MOFCOM ruling on a closed merger. A whole-company purchase that moves a proprietary cell-therapy platform overseas is the hard case in both the draft and that report. A licence of a named candidate, or a service contract that uses the platform without selling it, is the open case (${cite('mofcom-48', 'MOFCOM')}; ${cite('fierce', 'Fierce')}). If the live deal looks more like Gracell than like a molecule licence, the research question is what structure still moves the asset — and what the backup is if it does not.</p>

<h2 id="what-is-already-required-before-the-catalogue-is-final">What is already required before the catalogue is final?</h2>

<p>Two clocks are running. Only one of them is a comment clock.</p>

<p><strong>The comment clock</strong> runs from 16 October to 15 November 2026. The notice asks for comments on the new technology scope, indicators, control policy and facilitation measures. Submissions go to <a href="mailto:jinxianmulu@mofcom.gov.cn">jinxianmulu@mofcom.gov.cn</a>, to fax 010-65197565, or by post to the MOFCOM Bureau of Security and Control, 2 East Chang’an Avenue, Beijing 100731. The subject line must name the catalogue consultation. An organisation must stamp its comments (${cite('mofcom-48', 'Announcement No. 48')})</p>

<p><strong>The registration clock</strong> started the day the notice was published and runs until the revised catalogue is formally issued and takes effect. In that window, a technology-export operator must register a listed export on the Technology Trade Management Information application of the MOFCOM unified business platform before the export. Exports that have already started but have not finished are in scope (${cite('mofcom-48', 'MOFCOM')}; ${cite('ecomp', 'ecomp.mofcom.gov.cn')}; ${cite('reuters-yahoo', 'Reuters')})</p>

${figureHtml(CHINA_BIOTECH_EXPORT_FIGURES[2])}

<p>Section 3 lists the registration cases: ownership transfer, including IP assignment; outbound licensing; a change of owner or actual controller to an overseas party; and any other case MOFCOM names by notice. The filing asks for the exporter, the overseas recipient, the destination, the technology and use, and the expected value (${cite('mofcom-48', 'Announcement No. 48')}). Fierce, reporting counsel, said any export in the regulated scope must register before the revised catalogue is enacted (${cite('fierce', 'Fierce Biotech')}). A team that waits for 15 November before opening that file is already late. The comment window can still change the list. The registration duty is not waiting. A ministry spokesperson called the revision routine and said it does not target any specific country, region or entity (${cite('reuters-yahoo', 'Reuters')}; ${cite('china-daily', 'China Daily')}). That is context, not a comfort letter for a named asset.</p>

<h2 id="what-should-china-biotech-export-controls-change-in-a-bd-workplan">What should China biotech export controls change in a BD workplan?</h2>

<p>They should change the order of work, not the existence of China-origin innovation. Fierce reported $120 billion in foreign transactions of Chinese biotech assets as of August 2026, up 36% year on year, citing China’s drug regulators, and noted that most of those deals were licences or product purchases rather than platform sales (${cite('fierce', 'Fierce Biotech')}). The draft is written against that mix. China will still share a medicine. It wants to keep more of the machine that makes the next one.</p>

${figureHtml(CHINA_BIOTECH_EXPORT_FIGURES[3])}

<p>A practical BD workplan after 16 October 2026 has five published facts to respect and two research jobs the notice will not do.</p>

<p><strong>Favour a licence or a co-development that keeps ownership in China</strong> when the asset looks like a platform. That is the open route in both the notice and the Fierce report (${cite('mofcom-48', 'MOFCOM')}; ${cite('fierce', 'Fierce')}). It is not a finding that every licence will be approved. Counsel still has to read the annex against the term sheet.</p>

<p><strong>Put extra months in the timeline for China’s sign-off and for registration.</strong> The technology regulations already give working-day clocks on a restricted-technology review (${cite('tech-ord-gov', 'State Council regulations')}). The 2026 notice adds interim registration, including unfinished exports (${cite('mofcom-48', 'MOFCOM')}).</p>

<p><strong>Write a backup for any launch that sits on one Chinese platform</strong> — another licence, a second site, or a redesigned CMC plan. Gracell is the published example of a platform moving with the company (${cite('az-gracell-2023', 'AstraZeneca')}; ${cite('fierce', 'Fierce')}).</p>

<p><strong>Do not freeze the annex on 16 October.</strong> Comments close on 15 November 2026. The list and the facilitation rules can still move (${cite('mofcom-48', 'MOFCOM')}; ${cite('reuters-yahoo', 'Reuters')}). Date every IC paper.</p>

<p><strong>Diligence the asset, not the sector headline.</strong> Cell and gene therapy, small nucleic-acid drugs and pathogenic-microorganism technologies are catalogue classes. “China biotech” is not. Fierce noted that an earlier rumour had included ADCs, multispecifics and protein degraders, and that the published draft is narrower (${cite('fierce', 'Fierce Biotech')}). Do not import the rumour back into the brief.</p>

<p>The two jobs the notice will not do are counterpart behaviour and the Gulf launch file. Ask the Chinese licensor what it has registered, what it will not sell, and what it will licence. Ask Saudi and UAE physicians and payers whether they will use and fund the product.</p>

<h2 id="what-does-this-mean-for-a-china-origin-cell-gene-or-sirna-launch-in-the-gulf">What does this mean for a China-origin cell, gene or siRNA launch in the Gulf?</h2>

<p>It means the deal structure and the launch file are now two linked problems. A licence that keeps the platform in China can still put a named cell, gene or siRNA product into a Gulf plan. A platform sale that cannot close can break that plan if the CMC or the next-generation pipeline sat inside the company you meant to buy. The Gulf file does not wait for Beijing, and it is not written from a China HCP tracker.</p>

<p>Physician and payer evidence in Riyadh is not evidence in Dubai. Egypt is a third sample when the same brand owns North Africa. See <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a>, <a href="/healthcare-market-research/uae">healthcare market research in the UAE</a> and <a href="/healthcare-market-research/egypt">healthcare market research in Egypt</a>. The China-to-MEA desk that books that fieldwork sits on <a href="/market-research/china">Middle East market research for Chinese companies</a>.</p>

<p>For cell and gene therapy, the published Saudi tertiary-centre record is already a different article. <a href="/blog/car-t-saudi-arabia-market-research">CAR-T Saudi Arabia market research</a> covers treated-patient series and centre gates. <a href="/blog/hematology-market-research-saudi-arabia">Hematology market research in Saudi Arabia</a> covers sickle cell, thalassemia and gene-therapy access layers. This page does not repeat those series. What it adds is the China-side constraint: if the product or the manufacturing engine is China-origin, the BD structure and the MOFCOM registration status belong in the same brief as the Saudi centre map.</p>

<p>For siRNA and other small nucleic-acid drugs, the notice puts the class on the five-item biomedicine list (${cite('mofcom-48', 'Announcement No. 48')}). That is a China export-control fact, not a Gulf reimbursement fact. A Saudi or UAE payer still asks who is already treated, which wallet pays, and what local evidence sits beside the global trial. Partner selection is the third Gulf job: a named treatment centre or specialty account, a named importer, and a named plan for supply and follow-up. Those names come from hospital and affiliate interviews, not from the MOFCOM annex. Mainland context behind the origin story sits on the <a href="/china-healthcare-market-report">China healthcare market report</a>. Do not average a China HCP tracker with a Gulf physician survey, and do not treat a signed licence as proof that a Gulf wallet will pay.</p>

<h2 id="what-should-a-2026-deal-and-access-brief-measure">What should a 2026 deal-and-access brief measure?</h2>

<p>Design the study backwards from the decision — a term-sheet structure, a registration filing, a Gulf first-wave country, or a named treatment centre.</p>

${WORKSTREAM_TABLE_HTML}

${figureHtml(CHINA_BIOTECH_EXPORT_FIGURES[4])}

<ul>
<li><strong>Catalogue mapping.</strong> Name the biomedicine, AI or photovoltaic class, or state that the asset is not on the public list (${cite('mofcom-48', 'Announcement No. 48')}).</li>
<li><strong>Deal-structure screen.</strong> Ownership transfer, outbound licence, change of actual control, or service contract (${cite('mofcom-48', 'MOFCOM section 3')}; ${cite('fierce', 'Fierce')})</li>
<li><strong>Interim registration file.</strong> Counterpart status on the unified platform, including unfinished exports (${cite('ecomp', 'ecomp.mofcom.gov.cn')})</li>
<li><strong>Comment-window timing.</strong> What the team will do if the 15 November text moves the annex (${cite('reuters-yahoo', 'Reuters')})</li>
<li><strong>Single-platform backup.</strong> A named alternative if the reusable engine cannot be bought or transferred (${cite('az-gracell-2023', 'AstraZeneca on FasTCAR')})</li>
<li><strong>Gulf payer and physician evidence.</strong> Treated-patient share and wallet in Saudi Arabia and the UAE, collected as separate samples.</li>
<li><strong>Partner and centre selection.</strong> Which Gulf site and which local partner can receive the licensed product.</li>
</ul>

<p>A KSA answer is not a UAE answer and is not a China HCP mean. See <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a> and <a href="/healthcare-market-research/uae">the UAE</a>.</p>

<h2 id="how-to-commission">How should you commission the study?</h2>

<ul>
<li>Which named asset, platform or AI tool is in the brief, and which sentence of Announcement No. 48 do you think it sits under?</li>
<li>Is the live term sheet a sale, a licence, a change of control or a service contract, and has counsel already labelled it?</li>
<li>Has the Chinese counterpart registered the export, and will they share the filing list?</li>
<li>Which Gulf countries are in the first wave, and will you split Saudi Arabia from the UAE?</li>
<li>How many physicians, payers and hospital pharmacists will you recruit in each country, and will results be reported as share of treated patients?</li>
<li>Are discussion guides available in English and, for Gulf fieldwork, Arabic?</li>
<li>Who owns the data, and can it be re-cut if the final catalogue moves after 15 November 2026?</li>
</ul>

<p>IQVIA, Evaluate and Clarivate publish China biopharma deal pages that often appear for this query. Use them to triangulate announced deal value. Do not take them to an IC as the evidence pack for China biotech export controls, and do not take them to a Riyadh or Dubai payer meeting as the Gulf launch file.</p>

<p>A China-to-MEA design sits on <a href="/market-research/china">Middle East market research for Chinese companies</a>. For the mainland agency shortlist this page does not repeat, use <a href="/insights/top-healthcare-market-research-companies-china-2026">top healthcare market research companies in China</a>. For Saudi cell-therapy centres, use the CAR-T briefing already linked. For the access-process map in the UAE, start from the UAE country hub already linked.</p>

<h2 id="why-bionixus">Why BioNixus</h2>

<p>BioNixus is a primary market research and market access consultancy for pharmaceutical, medical device and healthcare companies, founded in 2012. It has served 118 clients in 48 countries, has run 127 studies so far in 2026 and works with a network of about 3,200 physicians. Custom study pricing is typically $10k–$60k. Regional leadership offices are in Sheridan, Wyoming (US headquarters), London EC1V 2NX and Cairo (Sheikh Zayed, Giza). Dubai, Al Khobar and Salmiya, Kuwait (Olympia Mall) are field offices, and it is in the process of opening a São Paulo office by the end of 2026. LATAM work is covered from the US office with a strong local consultant network. APAC work, including China-origin briefs, is delivered from the US, UK, Dubai and Cairo offices. BioNixus does not have a China office.</p>

<p>Choose BioNixus when the decision depends on why Chinese licensors, Gulf payers and treating physicians act as they do, rather than on a China biotech deal-value total. Each study is built around one decision — a catalogue map, a licence-versus-sale screen, a Gulf treated-share — and is reported as share of treated patients or as a named structure. The delivery commitment is Guaranteed in writing. That guarantee covers the agreed scope and timeline, not the accuracy of findings. Where reviews are relevant, BioNixus has 40 client reviews.</p>

<p>See also <a href="/market-research/china">Middle East market research for Chinese companies</a>, <a href="/healthcare-market-research/saudi-arabia">healthcare market research in Saudi Arabia</a> and <a href="/insights/top-healthcare-market-research-companies-china-2026">top healthcare market research companies in China</a>.</p>

<p>To brief a China biotech export controls study, use the <a href="/contact">BioNixus contact form</a> or email <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>.</p>`;

const REFERENCES_SECTION_HTML = `<h2 id="references">References</h2>

${REFERENCES_HTML}`;

export const CHINA_BIOTECH_EXPORT_BODY_HTML = `${NARRATIVE_HTML}

${REFERENCES_SECTION_HTML}`;

export const CHINA_BIOTECH_EXPORT_FAQ: { question: string; answer: string }[] = [
  {
    question: 'What are China biotech export controls in the 16 October 2026 draft?',
    answer:
      'They are a proposed addition of 40 technologies — 23 in AI, 5 in biomedicine and 12 in photovoltaics — to China’s Catalogue of Technologies Prohibited or Restricted from Export. MOFCOM and MOST published the draft on 16 October 2026. It is a consultation, not final law. This briefing is not legal advice.',
  },
  {
    question: 'Does the draft ban all foreign deals for Chinese biotech?',
    answer:
      'No. The public notice says outbound authorisations that do not transfer ownership can use automatic licensing and other facilitation. Fierce Biotech reported that out-licensing and contract research or manufacturing sit outside the ban, while a whole-platform sale is the hard case. Most 2026 cross-border deals in the PharmCube cut Fierce cited were licences, not ownership transfers.',
  },
  {
    question: 'When do public comments close?',
    answer:
      '15 November 2026. The notice accepts comments by email, fax or post from 16 October to 15 November 2026. An organisation must stamp its submission. The list, thresholds and facilitation rules can still change after that date.',
  },
  {
    question: 'Is registration already required?',
    answer:
      'Yes, for technology listed in the announcement’s annex. From 16 October 2026 until a revised catalogue takes effect, exporters must register listed exports — including unfinished ones — on MOFCOM’s unified business platform. Registration cases include ownership transfers, outbound licences and a change of actual control.',
  },
  {
    question: 'Would the 2023 AstraZeneca–Gracell deal still have been possible?',
    answer:
      'Fierce Biotech said it likely would not have been possible under the proposed rule, because it was a full acquisition of a company that owned a reusable CAR-T manufacturing platform. AstraZeneca announced about $1.0 billion upfront on 26 December 2023 and closed the deal on 22 February 2024. That is Fierce’s reading of a draft, not a MOFCOM ruling on a closed merger.',
  },
  {
    question: 'What should Gulf launch teams do with a China-origin cell, gene or siRNA asset?',
    answer:
      'Keep the China deal file and the Gulf access file separate, then join them in one brief. Confirm the licence structure and MOFCOM registration status. Then commission Saudi and UAE physician and payer interviews as separate samples, and name the treatment centre or local partner. A China HCP tracker is not a Gulf treated-share.',
  },
  {
    question: 'Why commission BioNixus for this brief?',
    answer:
      'BioNixus runs custom primary research from US, UK, Dubai and Cairo offices, with a network of about 3,200 physicians, and prices typical custom studies at $10k–$60k. The work is designed around one decision — a catalogue map, a licence-versus-sale screen, or a Gulf treated-share — and reported as share of treated patients. The delivery commitment is Guaranteed in writing. That guarantee covers scope and timeline, not findings. BioNixus does not have a China office.',
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

const FAQ_WORD_COUNT = CHINA_BIOTECH_EXPORT_FAQ.reduce(
  (sum, item) => sum + countWords(item.question) + countWords(item.answer),
  0,
);

export const CHINA_BIOTECH_EXPORT_WORD_COUNT =
  countWords(CHINA_BIOTECH_EXPORT_EXECUTIVE_SUMMARY_HTML) +
  countWords(CHINA_BIOTECH_EXPORT_BODY_HTML) +
  FAQ_WORD_COUNT;

const READING_WORDS_PER_MINUTE = 225;

export const CHINA_BIOTECH_EXPORT_READING_TIME = Math.ceil(
  (countWords(CHINA_BIOTECH_EXPORT_EXECUTIVE_SUMMARY_HTML) +
    countWords(NARRATIVE_HTML) +
    FAQ_WORD_COUNT) /
    READING_WORDS_PER_MINUTE,
);

export const CHINA_BIOTECH_EXPORT_ORGANIZATION: Record<string, unknown> = {
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
    'China biotech export controls',
    'China pharmaceutical licensing',
    'Cell and gene therapy market access',
    'siRNA market access',
    'Healthcare market research',
    'Pharmaceutical market research',
    'Gulf market access',
  ],
};

export type ChinaBiotechExportAuthor = Pick<BlogPost, 'authorName' | 'authorTitle' | 'authorLinkedIn'> & {
  schema?: Record<string, unknown>;
};

export function resolveChinaBiotechExportAuthor(
  name: string | undefined,
  profileUrl?: string,
): ChinaBiotechExportAuthor {
  if (!name) return {};
  const roster = WESTERN_AUTHORS.find((author) => author.name === name);
  const person = roster
    ? personAuthorJsonLd(roster)
    : {
        '@type': 'Person',
        name,
        worksFor: { '@type': 'Organization', '@id': ORG_ID, name: ORG_NAME },
      };
  return {
    authorName: name,
    authorTitle: roster?.jobTitle,
    authorLinkedIn: profileUrl,
    schema: { ...person, ...(profileUrl ? { url: profileUrl, sameAs: [profileUrl] } : {}) },
  };
}

const AUTHOR = resolveChinaBiotechExportAuthor(
  CHINA_BIOTECH_EXPORT_AUTHOR_NAME,
  CHINA_BIOTECH_EXPORT_AUTHOR_PROFILE_URL,
);

export const CHINA_BIOTECH_EXPORT_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-china-biotech-export-controls-pharma-deals-2026',
  slug: CHINA_BIOTECH_EXPORT_SLUG,
  title: CHINA_BIOTECH_EXPORT_DISPLAY_TITLE,
  excerpt: CHINA_BIOTECH_EXPORT_EXCERPT,
  date: '18 Oct 2026',
  category: CHINA_BIOTECH_EXPORT_CATEGORY,
  country: 'China',
  language: 'en',
  contentSilo: 'healthcare',
  readingTime: CHINA_BIOTECH_EXPORT_READING_TIME,
  wordCount: CHINA_BIOTECH_EXPORT_WORD_COUNT,
  breadcrumbLabel: CHINA_BIOTECH_EXPORT_BREADCRUMB_LABEL,
  displaySubtitle: CHINA_BIOTECH_EXPORT_DISPLAY_SUBTITLE,
  tags: [...CHINA_BIOTECH_EXPORT_TAGS],
  coverImage: CHINA_BIOTECH_EXPORT_HERO_IMAGE,
  coverImageAlt: CHINA_BIOTECH_EXPORT_HERO_IMAGE_ALT,
  ogImage: CHINA_BIOTECH_EXPORT_COVER_IMAGE,
  ogImageAlt: CHINA_BIOTECH_EXPORT_COVER_IMAGE_ALT,
  ogTitle: CHINA_BIOTECH_EXPORT_META_TITLE,
  ogDescription: CHINA_BIOTECH_EXPORT_META_DESCRIPTION,
  seoMetaTitle: CHINA_BIOTECH_EXPORT_META_TITLE,
  seoMetaDescription: CHINA_BIOTECH_EXPORT_META_DESCRIPTION,
  seoCanonicalUrl: CHINA_BIOTECH_EXPORT_URL,
  seoNoIndex: false,
  authorName: AUTHOR.authorName,
  authorTitle: AUTHOR.authorTitle,
  authorLinkedIn: AUTHOR.authorLinkedIn,
  publishedAtIso: CHINA_BIOTECH_EXPORT_PUBLISHED_ISO,
  updatedAtIso: CHINA_BIOTECH_EXPORT_UPDATED_ISO,
  tableOfContents: CHINA_BIOTECH_EXPORT_TABLE_OF_CONTENTS,
  executiveSummary: CHINA_BIOTECH_EXPORT_EXECUTIVE_SUMMARY_HTML,
  faq: [...CHINA_BIOTECH_EXPORT_FAQ],
  ctaSection: {
    title: 'Planning a China-origin licence or Gulf launch after the draft catalogue?',
    description:
      'Tell us the decision you need to make. BioNixus scopes BD-structure, physician and payer research around it, from US, UK, Dubai and Cairo offices and a network of about 3,200 physicians.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  schemaExtras: {
    emitWebPage: true,
    organization: CHINA_BIOTECH_EXPORT_ORGANIZATION,
    author: AUTHOR.schema,
    about: [
      { '@type': 'Thing', name: 'China biotech export controls' },
      { '@type': 'Thing', name: 'Cell and gene therapy licensing' },
      { '@type': 'Country', name: 'China' },
    ],
    itemList: {
      name: 'What a China biotech export controls brief should measure',
      description:
        'Seven workstreams for a catalogue map, licence-versus-sale screen or Gulf launch file.',
      items: CHINA_BIOTECH_EXPORT_WORKSTREAMS.map(({ name, description }) => ({ name, description })),
    },
    contentImages: CHINA_BIOTECH_EXPORT_FIGURES.map((figure) => ({
      url: `https://www.bionixus.com${figure.src}`,
      width: figure.width,
      height: figure.height,
      caption: figure.caption,
    })),
  },
  body: CHINA_BIOTECH_EXPORT_BODY_HTML,
};
