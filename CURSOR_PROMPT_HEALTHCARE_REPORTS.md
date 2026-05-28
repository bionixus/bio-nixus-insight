# Cursor AI Task: Build Data-Driven Healthcare Market Report Pages

## Project Context

This is a React + Vite + TypeScript SPA (React Router DOM v6, Tailwind CSS) for **BioNixus**, a healthcare market research company specialising in GCC and MENA pharmaceutical and medical device markets. The project is at `/Users/selim/Documents/bio-nixus-insight`.

**Do not modify:** Navbar, Footer, Index (home page), or any existing page files.
**Do not add comments** to any file unless the WHY is non-obvious.
**Run `npx tsc --noEmit` after all file changes** to verify zero TypeScript errors.

---

## What You Are Building

A **data-driven programmatic SEO system** that generates individual healthcare market report pages from a shared dataset. Each page must:
- Be **2,000+ words** of genuine, authoritative content
- Have **5+ internal links pointing TO it** (inbound links from hub and category pages)
- Be SEO-optimised with proper title, meta description, canonical URL, and JSON-LD schema
- Follow the exact same component structure as existing pages (see template below)

The system has **4 parts**:
1. A data file with all report entries (`src/data/healthcareReportData.ts`)
2. A shared content library (`src/data/healthcareReportContent.ts`)
3. A template page component (`src/pages/HealthcareReportPage.tsx`) — the single component that renders any report
4. Hub and category pages that provide the 5+ inbound links per report

---

## Existing Page Pattern — MUST follow this exactly

Every page in this project follows this structure. Here is the **exact pattern** from `src/pages/SaudiArabiaHealthcareMarketReport.tsx`:

```tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { ArrowRight } from 'lucide-react';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Saudi Arabia Healthcare Market Report', href: '/saudi-arabia-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the Saudi Arabia healthcare market in 2026?',
    answer: 'The Saudi Arabia healthcare market is estimated at USD 55–65 billion in 2026...',
  },
  // 5 more items...
];

const FAQ_SECTION_ID = 'saudi-arabia-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Saudi Arabia Healthcare Market Report 2026',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' } },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/saudi-arabia-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/saudi-arabia-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
];

const SaudiArabiaHealthcareMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title="Saudi Arabia Healthcare Market Report 2026 | SFDA, NUPCO & Vision 2030 | BioNixus"
      description="Saudi Arabia healthcare market at USD 60B in 2026..."
      canonical="https://www.bionixus.com/saudi-arabia-healthcare-market-report"
      jsonLd={jsonLd}
    />
    <main>
      <div className="section-padding pt-24 pb-4">
        <div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div>
      </div>
      <section className="section-padding pb-10">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
            Published by BioNixus · Updated May 2026 · Open access
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Saudi Arabia Healthcare Market Report 2026
          </h1>
          <p className="text-muted-foreground leading-relaxed">Intro paragraph...</p>
        </div>
      </section>
      <section className="section-padding bg-cream-dark" id="executive-summary">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div><p className="text-3xl font-display font-bold text-primary">~$60B</p><p className="text-xs text-muted-foreground mt-1">Healthcare market 2026</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">~$100B</p><p className="text-xs text-muted-foreground mt-1">Forecast 2030</p></div>
              <div><p className="text-3xl font-display font-bold text-primary">12%</p><p className="text-xs text-muted-foreground mt-1">CAGR 2026–2030</p></div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Summary paragraph 1...</p>
          <p className="text-muted-foreground leading-relaxed">Summary paragraph 2 with internal links...</p>
        </div>
      </section>
      <FAQSection
        sectionId={FAQ_SECTION_ID}
        title="FAQ title"
        items={REPORT_FAQ_ITEMS}
        className="bg-muted/30"
      />
      <section className="section-padding bg-primary/5" id="contact-cta">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">CTA headline</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">CTA body...</p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors">
            Request a briefing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default SaudiArabiaHealthcareMarketReport;
```

---

## Part 1: Data File — `src/data/healthcareReportData.ts`

Create this file with TypeScript interfaces and an exported `REPORT_ENTRIES` array.

### TypeScript interfaces:

```typescript
export interface ReportFAQ {
  question: string;
  answer: string;
}

export interface ReportEntry {
  slug: string;                  // URL slug, e.g. "gcc-oncology-market-report"
  title: string;                 // Display title
  metaTitle: string;             // <title> tag (max 65 chars)
  metaDescription: string;       // meta description (max 165 chars)
  market: string;                // Display name, e.g. "Saudi Arabia"
  marketSlug: string;            // e.g. "saudi-arabia"
  region: string;                // e.g. "GCC", "MENA", "Europe"
  therapyArea: string;           // e.g. "Oncology"
  therapyAreaSlug: string;       // e.g. "oncology"
  stat1Value: string;            // e.g. "~$1.2B"
  stat1Label: string;            // e.g. "Market size 2026"
  stat2Value: string;            // e.g. "~$2.1B"
  stat2Label: string;            // e.g. "Forecast 2030"
  stat3Value: string;            // e.g. "11.8%"
  stat3Label: string;            // e.g. "CAGR 2026–2030"
  summaryPara1: string;          // 80–120 word market overview paragraph
  summaryPara2: string;          // 60–90 word paragraph with 2–3 internal links to related pages
  faqs: ReportFAQ[];             // Exactly 6 FAQs, each answer 100–160 words
  relatedSlugs: string[];        // 3–5 slugs of related reports in REPORT_ENTRIES
  publishedDate: string;         // "2026-05-27"
  modifiedDate: string;          // "2026-05-27"
}
```

### Reports to create — MINIMUM 60 entries:

Use real, authoritative data. All market sizes must be plausible and internally consistent. Do not invent implausible numbers.

#### GCC + Egypt — Oncology (8 reports):
| slug | market | therapyArea |
|---|---|---|
| `gcc-oncology-market-report` | GCC | Oncology |
| `saudi-arabia-oncology-market-report` | Saudi Arabia | Oncology |
| `uae-oncology-market-report` | UAE | Oncology |
| `kuwait-oncology-market-report` | Kuwait | Oncology |
| `qatar-oncology-market-report` | Qatar | Oncology |
| `bahrain-oncology-market-report` | Bahrain | Oncology |
| `oman-oncology-market-report` | Oman | Oncology |
| `egypt-oncology-market-report` | Egypt | Oncology |

#### GCC + Egypt — Diabetes & Metabolic (8 reports):
| slug | market | therapyArea |
|---|---|---|
| `gcc-diabetes-market-report` | GCC | Diabetes & Metabolic |
| `saudi-arabia-diabetes-market-report` | Saudi Arabia | Diabetes & Metabolic |
| `uae-diabetes-market-report` | UAE | Diabetes & Metabolic |
| `kuwait-diabetes-market-report` | Kuwait | Diabetes & Metabolic |
| `qatar-diabetes-market-report` | Qatar | Diabetes & Metabolic |
| `bahrain-diabetes-market-report` | Bahrain | Diabetes & Metabolic |
| `oman-diabetes-market-report` | Oman | Diabetes & Metabolic |
| `egypt-diabetes-market-report` | Egypt | Diabetes & Metabolic |

#### GCC + Egypt — Cardiovascular (8 reports):
| slug | market | therapyArea |
|---|---|---|
| `gcc-cardiovascular-market-report` | GCC | Cardiovascular |
| `saudi-arabia-cardiovascular-market-report` | Saudi Arabia | Cardiovascular |
| `uae-cardiovascular-market-report` | UAE | Cardiovascular |
| `kuwait-cardiovascular-market-report` | Kuwait | Cardiovascular |
| `qatar-cardiovascular-market-report` | Qatar | Cardiovascular |
| `bahrain-cardiovascular-market-report` | Bahrain | Cardiovascular |
| `oman-cardiovascular-market-report` | Oman | Cardiovascular |
| `egypt-cardiovascular-market-report` | Egypt | Cardiovascular |

#### GCC + Egypt — Immunology & Biologics (8 reports):
| slug | market | therapyArea |
|---|---|---|
| `gcc-immunology-biologics-market-report` | GCC | Immunology & Biologics |
| `saudi-arabia-immunology-biologics-market-report` | Saudi Arabia | Immunology & Biologics |
| `uae-immunology-biologics-market-report` | UAE | Immunology & Biologics |
| `kuwait-immunology-biologics-market-report` | Kuwait | Immunology & Biologics |
| `qatar-immunology-biologics-market-report` | Qatar | Immunology & Biologics |
| `bahrain-immunology-biologics-market-report` | Bahrain | Immunology & Biologics |
| `oman-immunology-biologics-market-report` | Oman | Immunology & Biologics |
| `egypt-immunology-biologics-market-report` | Egypt | Immunology & Biologics |

#### GCC + Egypt — Respiratory (6 reports):
| slug | market | therapyArea |
|---|---|---|
| `gcc-respiratory-market-report` | GCC | Respiratory |
| `saudi-arabia-respiratory-market-report` | Saudi Arabia | Respiratory |
| `uae-respiratory-market-report` | UAE | Respiratory |
| `kuwait-respiratory-market-report` | Kuwait | Respiratory |
| `qatar-respiratory-market-report` | Qatar | Respiratory |
| `egypt-respiratory-market-report` | Egypt | Respiratory |

#### GCC — Rare Diseases (4 reports):
| slug | market | therapyArea |
|---|---|---|
| `gcc-rare-diseases-market-report` | GCC | Rare Diseases |
| `saudi-arabia-rare-diseases-market-report` | Saudi Arabia | Rare Diseases |
| `uae-rare-diseases-market-report` | UAE | Rare Diseases |
| `qatar-rare-diseases-market-report` | Qatar | Rare Diseases |

#### GCC — Neurology & CNS (4 reports):
| slug | market | therapyArea |
|---|---|---|
| `gcc-neurology-cns-market-report` | GCC | Neurology & CNS |
| `saudi-arabia-neurology-cns-market-report` | Saudi Arabia | Neurology & CNS |
| `uae-neurology-cns-market-report` | UAE | Neurology & CNS |
| `egypt-neurology-cns-market-report` | Egypt | Neurology & CNS |

#### Specialty Reports (8 reports):
| slug | market | therapyArea |
|---|---|---|
| `gcc-biosimilars-market-report` | GCC | Biosimilars |
| `saudi-arabia-biosimilars-market-report` | Saudi Arabia | Biosimilars |
| `gcc-digital-health-market-report` | GCC | Digital Health & AI |
| `saudi-arabia-digital-health-market-report` | Saudi Arabia | Digital Health & AI |
| `gcc-vaccines-market-report` | GCC | Vaccines |
| `gcc-dermatology-market-report` | GCC | Dermatology |
| `turkey-oncology-market-report` | Turkey | Oncology |
| `turkey-diabetes-market-report` | Turkey | Diabetes & Metabolic |

---

### FAQ content requirements per report:

Each report's 6 FAQs must follow this **question pattern** (adapt for market and therapy area):

1. **Market size**: "How big is the [Market] [Therapy Area] market in 2026?"
   - Answer: market size estimate, growth rate, key drivers, comparison to regional context. Include real institutions/regulators.

2. **Regulatory pathway**: "How are [Therapy Area] drugs registered in [Market]?"
   - Answer: name the specific regulatory authority (SFDA for Saudi, MOHAP/DHA/DOH for UAE, MOPH/HMC for Qatar, MOH for Kuwait, NHRA for Bahrain, MOCI for Oman, EDA for Egypt), dossier requirements, timeline, key pathway features.

3. **Reimbursement**: "How does [Market] reimburse [Therapy Area] treatments?"
   - Answer: payer landscape (NUPCO for Saudi, DHA/DoH/insurance for UAE, HMC formulary for Qatar, MOH formulary for Kuwait, etc.), criteria, formulary process, private vs. public channel.

4. **Therapy area specifics**: "What are the leading [Therapy Area] treatment categories in [Market]?"
   - Answer: specific drug classes relevant to this therapy area (e.g., for oncology: PD-1 inhibitors, CDK4/6, CAR-T; for diabetes: GLP-1, SGLT-2, insulin; for immunology: TNF inhibitors, IL-17/23, JAK inhibitors), adoption rates, key prescribing institutions.

5. **Market dynamics / trends**: "What are the key growth drivers for [Therapy Area] in [Market]?"
   - Answer: 4–5 specific factors relevant to this market (e.g., Vision 2030 for Saudi, Expo legacy / tourism for UAE, Qatar World Cup health investment legacy, etc.), epidemiological data, private sector growth.

6. **BioNixus value prop**: "How does BioNixus support companies entering the [Market] [Therapy Area] market?"
   - Answer: describe specific BioNixus services relevant to this market/therapy area: KOL mapping, NUPCO tender intelligence, physician panel surveys, regulatory tracking, formulary committee access, hospital procurement data.

### FAQ answer quality rules:
- Each answer must be **100–160 words**
- Include real institution names (KFSHRC, Cleveland Clinic Abu Dhabi, Hamad Medical Corporation, 57357, etc.)
- Include real drug names/classes where relevant (pembrolizumab, semaglutide, adalimumab, etc.)
- Include specific numbers where justified (prevalence rates, market share, bed counts, etc.)
- Never use vague language like "various companies" — name the key players

---

## Part 2: Shared Content Library — `src/data/healthcareReportContent.ts`

Create this file with two exported objects providing reusable content blocks. These blocks are used by the template to fill the "Market Context" and "Regulatory Landscape" sections (these sections make the pages reach 2000+ words).

```typescript
export interface TherapyAreaContent {
  name: string;
  slug: string;
  overviewParagraph: string;    // 180–220 words: global/regional clinical overview of this therapy area
  clinicalLandscape: string;    // 180–220 words: key drug classes, mechanisms, leading products
  menaMarketDynamics: string;   // 150–180 words: MENA/GCC-specific therapy area trends
}

export interface MarketContent {
  name: string;
  slug: string;
  region: string;
  regulatoryBody: string;       // Short: "SFDA" or "MOHAP / DHA / DOH"
  regulatoryOverview: string;   // 180–220 words: registration process, pathways, timelines
  payerLandscape: string;       // 180–220 words: reimbursement system, key payers, procurement channels
  marketContext: string;        // 120–160 words: population, healthcare system summary, Vision/national strategy
}

export const THERAPY_AREA_CONTENT: Record<string, TherapyAreaContent> = { ... };
export const MARKET_CONTENT: Record<string, MarketContent> = { ... };
```

### Therapy areas to include in `THERAPY_AREA_CONTENT` (key = therapyAreaSlug):
- `oncology`
- `diabetes-metabolic`
- `cardiovascular`
- `immunology-biologics`
- `respiratory`
- `rare-diseases`
- `neurology-cns`
- `biosimilars`
- `digital-health`
- `vaccines`
- `dermatology`

### Markets to include in `MARKET_CONTENT` (key = marketSlug):
- `gcc` (GCC regional — mention all 6 countries)
- `saudi-arabia`
- `uae`
- `kuwait`
- `qatar`
- `bahrain`
- `oman`
- `egypt`
- `turkey`

### Content quality rules:
- All content must be real, accurate, and authoritative
- Use specific institution names, policy names, regulatory frameworks
- Saudi Arabia: SFDA, NUPCO, MOH, NGHA, KFSHRC, Vision 2030, Saudi Genome Program
- UAE: MOHAP (federal), DHA (Dubai Health Authority), DoH (Department of Health Abu Dhabi), Thiqa/Daman insurance, Emirates Health Services
- Qatar: MOPH (Ministry of Public Health), HMC (Hamad Medical Corporation), Sidra Medicine, NCCCR
- Kuwait: MOH Kuwait, KMDA, Kuwait Cancer Control Centre, Al Sabah Hospital network
- Bahrain: NHRA (National Health Regulatory Authority), MOH Bahrain, Salmaniya Medical Complex
- Oman: MOCI (Ministry of Commerce), MOH Oman, SQUH (Sultan Qaboos University Hospital), National Oncology Centre
- Egypt: EDA (Egyptian Drug Authority), MOH Egypt, NCI (National Cancer Institute Cairo), CCHE (57357 Hospital), VACSERA

---

## Part 3: Template Component — `src/pages/HealthcareReportPage.tsx`

This is a **single React component** rendered for every report at `/market-reports/:slug`. It receives the slug from React Router, looks up the report in `REPORT_ENTRIES`, and renders the full page.

### Required sections (must produce 2000+ words total across the rendered page):

1. **Breadcrumb + Hero** (~120 words)
   - BreadcrumbNav: Home > Market Reports > [Therapy Area] > [Title]
   - Published badge: `Published by BioNixus · Updated May 2026 · Open access`
   - H1: report title
   - Intro paragraph (from a short intro generated from market + therapyArea data)

2. **Executive Summary with stats** (~280 words)
   - 3-stat grid (stat1, stat2, stat3 from report entry)
   - summaryPara1 and summaryPara2 (from report entry, summaryPara2 must include internal links)
   - Internal link to: the market's standalone page (e.g. `/saudi-arabia-healthcare-market-report`) and the GCC overview (`/gcc-pharma-market-report-2026`)

3. **Section: "[Therapy Area] Market Context in [Market]"** (~400 words)
   - Pull `THERAPY_AREA_CONTENT[therapyAreaSlug].overviewParagraph`
   - Pull `THERAPY_AREA_CONTENT[therapyAreaSlug].clinicalLandscape`
   - Pull `THERAPY_AREA_CONTENT[therapyAreaSlug].menaMarketDynamics`
   - Render as styled prose with H2 heading

4. **Section: "Regulatory & Reimbursement Landscape"** (~400 words)
   - Pull `MARKET_CONTENT[marketSlug].regulatoryOverview`
   - Pull `MARKET_CONTENT[marketSlug].payerLandscape`
   - Pull `MARKET_CONTENT[marketSlug].marketContext`
   - Render as styled prose with H2 heading

5. **Section: "Key Market Access Intelligence"** (~150 words)
   - Bullet list of 4–5 market access considerations specific to this report
   - Derive these programmatically from the market + therapy area combination
   - E.g. for Saudi Oncology: NUPCO submission, SFDA oncology accelerated pathway, KFSHRC formulary, Vision 2030 oncology investment

6. **FAQ Section** (~720 words)
   - Use `<FAQSection>` component with `sectionId`, `title`, and `items` props
   - Title: "[Market] [Therapy Area] market 2026 — regulatory, reimbursement, and commercial intelligence FAQ"

7. **Related Reports** (~120 words)
   - H2: "Related Healthcare Market Research Reports"
   - Grid of 4–6 linked cards to related reports (from `relatedSlugs`)
   - Each card: title + "Read report →" link

8. **CTA Section** (~100 words)
   - Matching style to all other pages (bg-primary/5, centered, Link to /contact)

### Template technical requirements:
- Use `useParams` from `react-router-dom` to get the slug
- If slug not found in REPORT_ENTRIES, return a `<NotFound />` or redirect
- The component must be a default export named `HealthcareReportPage`
- Breadcrumb: `[{ name: 'Home', href: '/' }, { name: 'Market Reports', href: '/market-reports' }, { name: report.therapyArea, href: '/market-reports/therapy/' + report.therapyAreaSlug }, { name: report.title, href: '/market-reports/' + report.slug }]`
- JSON-LD: BreadcrumbList + Article + FAQPage schemas (exactly like all other pages)
- Canonical: `https://www.bionixus.com/market-reports/${report.slug}`

---

## Part 4: Hub Page — `src/pages/HealthcareReportsHub.tsx`

URL: `/market-reports`

This is the main listing page that links to ALL reports. It provides the primary source of inbound links to every report page.

### Required sections:

1. **Hero**
   - H1: "Healthcare Market Research Reports 2026 — GCC, MENA & Global Intelligence"
   - 2-paragraph intro about BioNixus's market research coverage

2. **Filter/nav by therapy area** (links to category pages)
   - Oncology, Diabetes & Metabolic, Cardiovascular, Immunology & Biologics, Respiratory, Rare Diseases, Neurology & CNS, Biosimilars, Digital Health, Vaccines, Dermatology
   - Each links to `/market-reports/therapy/[therapyAreaSlug]`

3. **Filter/nav by geography** (links to geography category pages)
   - GCC, Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, Egypt, Turkey
   - Each links to `/market-reports/country/[marketSlug]`

4. **Report grid** — list ALL reports from REPORT_ENTRIES
   - Card for each report: title, market + therapy area chips, "Read report →" link
   - Grouped by region: GCC & MENA first, then other regions

5. **SEO**: proper title, meta description, breadcrumb, Article JSON-LD
   - Title: "Healthcare Market Research Reports 2026 | GCC, MENA, Global | BioNixus"
   - Description: "BioNixus healthcare market research reports covering GCC, MENA, Europe, and Asia-Pacific. Oncology, cardiovascular, diabetes, immunology, rare diseases — regulatory, reimbursement, and commercial intelligence."
   - Canonical: `https://www.bionixus.com/market-reports`

---

## Part 5: Therapy Area Category Pages — `src/pages/HealthcareReportsByTherapy.tsx`

URL pattern: `/market-reports/therapy/:therapyAreaSlug`

Single component that:
- Reads the `therapyAreaSlug` param
- Filters `REPORT_ENTRIES` to matching therapy area
- H1: "[Therapy Area] Market Research Reports 2026 — GCC & MENA Intelligence"
- Shows therapy area overview from `THERAPY_AREA_CONTENT[therapyAreaSlug].overviewParagraph`
- Lists all reports for this therapy area as cards with links
- Links back to `/market-reports` hub
- JSON-LD: Article schema + BreadcrumbList
- Canonical: `https://www.bionixus.com/market-reports/therapy/${therapyAreaSlug}`

---

## Part 6: Country Category Pages — `src/pages/HealthcareReportsByCountry.tsx`

URL pattern: `/market-reports/country/:marketSlug`

Single component that:
- Reads the `marketSlug` param
- Filters `REPORT_ENTRIES` to matching market
- H1: "[Market] Healthcare Market Research Reports 2026"
- Shows market regulatory body + brief overview from `MARKET_CONTENT[marketSlug]`
- Lists all reports for this market as cards with links
- Links to the market's standalone pages (e.g. `/saudi-arabia-healthcare-market-report`, `/saudi-arabia-medical-devices-market-report`)
- Links back to `/market-reports` hub
- JSON-LD: Article schema + BreadcrumbList
- Canonical: `https://www.bionixus.com/market-reports/country/${marketSlug}`

---

## Part 7: Update `src/routes.tsx`

Add these imports (after existing market report imports, before the `const AdminDashboard` line):

```tsx
import HealthcareReportPage from '@/pages/HealthcareReportPage';
import HealthcareReportsHub from '@/pages/HealthcareReportsHub';
import HealthcareReportsByTherapy from '@/pages/HealthcareReportsByTherapy';
import HealthcareReportsByCountry from '@/pages/HealthcareReportsByCountry';
```

Add these route entries (before the `{ path: '/blog', ... }` route):

```tsx
{ path: '/market-reports', element: <HealthcareReportsHub /> },
{ path: '/market-reports/therapy/:therapyAreaSlug', element: <HealthcareReportsByTherapy /> },
{ path: '/market-reports/country/:marketSlug', element: <HealthcareReportsByCountry /> },
{ path: '/market-reports/:slug', element: <HealthcareReportPage /> },
```

---

## Part 8: Update `src/pages/SiteMapPage.tsx`

In `SiteMapPage.tsx`, find the `marketReportLinks` array and add at the end (before the closing `]`):

```tsx
{ to: '/market-reports', label: 'Healthcare Market Research Reports Hub' },
{ to: '/market-reports/therapy/oncology', label: 'Oncology Market Research Reports' },
{ to: '/market-reports/therapy/diabetes-metabolic', label: 'Diabetes & Metabolic Market Research Reports' },
{ to: '/market-reports/therapy/cardiovascular', label: 'Cardiovascular Market Research Reports' },
{ to: '/market-reports/therapy/immunology-biologics', label: 'Immunology & Biologics Market Research Reports' },
{ to: '/market-reports/therapy/respiratory', label: 'Respiratory Market Research Reports' },
{ to: '/market-reports/therapy/rare-diseases', label: 'Rare Diseases Market Research Reports' },
{ to: '/market-reports/country/saudi-arabia', label: 'Saudi Arabia Healthcare Reports' },
{ to: '/market-reports/country/uae', label: 'UAE Healthcare Reports' },
{ to: '/market-reports/country/gcc', label: 'GCC Healthcare Reports' },
{ to: '/market-reports/country/egypt', label: 'Egypt Healthcare Reports' },
```

---

## Internal Linking Strategy — How Each Report Gets 5+ Inbound Links

Every report page at `/market-reports/[slug]` will automatically receive inbound links from:

1. `/market-reports` (hub page lists ALL reports) ← **Link 1**
2. `/market-reports/therapy/[therapyAreaSlug]` (therapy area page lists all reports in that area) ← **Link 2**
3. `/market-reports/country/[marketSlug]` (country page lists all reports for that market) ← **Link 3**
4. `/sitemap` (SiteMapPage via marketReportLinks hub entries) ← **Link 4**
5. Related report pages (summaryPara2 of related reports includes cross-links) ← **Link 5**
6. Existing standalone pages (e.g. SaudiArabiaHealthcareMarketReport links to Saudi oncology report) ← **Link 6**

This guarantees every report has 5+ genuine inbound links.

---

## Existing pages to add internal links to (do NOT restructure these pages — only add 1–2 links in the existing `summaryPara2` or `Executive Summary` section):

After creating the report pages, add one internal link from each matching existing page to its corresponding new report pages:

- `src/pages/SaudiArabiaHealthcareMarketReport.tsx` → add links to `saudi-arabia-oncology-market-report`, `saudi-arabia-diabetes-market-report`
- `src/pages/UaeHealthcareMarketReport.tsx` → add links to `uae-oncology-market-report`, `uae-diabetes-market-report`
- `src/pages/GccPharmaMarketReport2026.tsx` → add links to `gcc-oncology-market-report`, `gcc-diabetes-market-report`
- `src/pages/EgyptHealthcareMarketReport.tsx` → add links to `egypt-oncology-market-report`, `egypt-diabetes-market-report`

---

## Quality Requirements Summary

| Requirement | Target |
|---|---|
| Words per report page | 2,000+ |
| FAQs per report | Exactly 6 |
| FAQ answer length | 100–160 words each |
| Inbound links per page | 5+ |
| Shared content blocks (therapy areas) | 11 |
| Shared content blocks (markets) | 9 |
| Initial report entries | 60+ |
| TypeScript errors after all changes | 0 |
| New files created | 6 |
| Pages modified | 4 existing pages (add 2 links each) |

---

## File Creation Order (to avoid import errors)

1. `src/data/healthcareReportTypes.ts` — interfaces only (no imports needed)
2. `src/data/healthcareReportContent.ts` — imports types, exports THERAPY_AREA_CONTENT + MARKET_CONTENT
3. `src/data/healthcareReportData.ts` — imports types + content, exports REPORT_ENTRIES
4. `src/pages/HealthcareReportPage.tsx` — imports data + content + all standard components
5. `src/pages/HealthcareReportsHub.tsx` — imports data
6. `src/pages/HealthcareReportsByTherapy.tsx` — imports data + content
7. `src/pages/HealthcareReportsByCountry.tsx` — imports data + content
8. Update `src/routes.tsx` — add 4 imports + 4 routes
9. Update `src/pages/SiteMapPage.tsx` — add 11 entries to marketReportLinks
10. Update 4 existing pages with internal links
11. Run `npx tsc --noEmit` — must show zero errors

---

## Styling Reference (use these Tailwind classes consistently)

All content prose: `text-muted-foreground leading-relaxed`
All H2 headings: `text-2xl md:text-3xl font-display font-semibold text-foreground mb-6`
All H3 headings: `text-xl font-display font-semibold text-foreground mb-4`
Primary stat values: `text-3xl font-display font-bold text-primary`
Section backgrounds (alternating): `bg-background` / `bg-cream-dark` / `bg-muted/30` / `bg-primary/5`
All sections: `section-padding`
Max content width: `container-wide max-w-4xl mx-auto`
Card style: `bg-white rounded-xl border border-border p-6 shadow-sm`
Report grid cards: `bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow`
Chip/tag: `inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary`
Internal text link: `text-primary hover:underline font-medium`

The `bg-cream-dark` class already exists in the project's Tailwind config — do not change it.

---

## BioNixus Brand Voice

- Professional, authoritative, and commercial (not academic)
- Target audience: VP Commercial, Market Access Directors, Regional Business Development Managers at pharmaceutical and medical device companies
- Tone: data-driven, specific, GCC/MENA expert
- Always position BioNixus as the intelligence partner for GCC/MENA commercial strategy
- Never use vague language — always cite specific institutions, drug names, regulatory frameworks, market sizes
