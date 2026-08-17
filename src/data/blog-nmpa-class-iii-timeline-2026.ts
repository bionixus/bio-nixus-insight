/**
 * Supporting satellite for /china-medical-devices-market-report
 * Slug: /blog/nmpa-class-iii-registration-timeline-2026
 */
import type { BlogPost } from '@/types/blog';

export const NMPA_CLASS_III_TIMELINE_SLUG = 'nmpa-class-iii-registration-timeline-2026';

export const NMPA_CLASS_III_TIMELINE_COVER_IMAGE =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&h=900&fit=crop&q=85';

export const NMPA_CLASS_III_TIMELINE_META_TITLE =
  'NMPA Class III Registration Timeline 2026 | CMDE Guide';

export const NMPA_CLASS_III_TIMELINE_META_DESCRIPTION =
  'NMPA Class III medical device registration in China 2026: CMDE review steps, clinical evaluation options, Resident Agent duties, and 18–36 month planning benchmarks.';

export const NMPA_CLASS_III_TIMELINE_DISPLAY_TITLE =
  'NMPA Class III Registration Timeline 2026: CMDE Review, Clinical Evidence & Resident Agent';

export const NMPA_CLASS_III_TIMELINE_PUBLISHED_ISO = '2026-08-18T09:00:00.000Z';
export const NMPA_CLASS_III_TIMELINE_UPDATED_ISO = '2026-08-18T09:00:00.000Z';

export const NMPA_CLASS_III_TIMELINE_TAGS = [
  'NMPA',
  'Class III',
  'CMDE',
  'China',
  'Medical Devices',
  'Regulatory Affairs',
] as const;

export const NMPA_CLASS_III_TIMELINE_TABLE_OF_CONTENTS: { heading: string; anchor: string }[] = [
  { heading: 'Why Class III drives China launch sequencing', anchor: 'why-class-iii' },
  { heading: 'CMDE pathway and clinical evaluation options', anchor: 'cmde-pathway' },
  { heading: 'Innovative device priority review', anchor: 'priority-review' },
  { heading: 'Planning benchmarks for 2026 portfolios', anchor: 'planning-benchmarks' },
];

export const NMPA_CLASS_III_TIMELINE_EXECUTIVE_SUMMARY_HTML = `<p><strong>What commercial and RA teams need for Class III China filings in 2026</strong></p>
<ul>
<li><strong>Timeline band</strong> — plan 18–36 months from pre-submission CMDE communication through national approval for most Class III implants and life-sustaining systems.</li>
<li><strong>Evidence</strong> — China clinical trial, overseas data with bridging, or literature/equivalence for well-established types; class and novelty decide which path is realistic.</li>
<li><strong>Resident Agent</strong> — imported devices without a Chinese legal entity need a 代理人 for registration maintenance and vigilance.</li>
<li><strong>Canonical market context</strong> — size, VBP, and localization sit in the <a href="/china-medical-devices-market-report">China Medical Devices Market Report</a>; this article focuses on Class III timing only.</li>
</ul>`;

export const NMPA_CLASS_III_TIMELINE_SCHEMA_FAQ: { question: string; answer: string }[] = [
  {
    question: 'How long does NMPA Class III medical device registration take in 2026?',
    answer:
      'Most Class III devices reviewed nationally by CMDE under NMPA take approximately 18–36 months from pre-submission communication through approval, depending on clinical evidence strategy, dossier completeness, and whether Innovative Device Special Review priority queuing applies.',
  },
  {
    question: 'Does every Class III device need a clinical trial in China?',
    answer:
      'Not always. Clinical evaluation can use a China clinical trial, accepted overseas clinical data with supplementary Chinese bridging, or a literature-and-equivalence pathway for well-established device types. Novel implants and first-in-class systems more often need China-generated clinical evidence.',
  },
  {
    question: 'What is the Innovative Device Special Review procedure?',
    answer:
      'NMPA’s 创新医疗器械特别审查程序 gives priority CMDE queuing to devices with core domestic intellectual property and demonstrable clinical advantage. It shortens queue time versus standard Class III review but does not remove the need for a complete technical and clinical dossier.',
  },
];

export const NMPA_CLASS_III_TIMELINE_BODY_HTML = `<p>Class III is the highest-risk NMPA medical device class in China. National review by the Center for Medical Device Evaluation (CMDE) is the default gate for implants, cardiac devices, orthopedic hardware, and other life-sustaining or implantable technology. For portfolio sequencing, Class III timelines — not Class II provincial filings — usually set the critical path into public hospitals.</p>

<p>For market size, NHSA VBP, and import-substitution context, use the canonical <a href="/china-medical-devices-market-report">China Medical Devices Market Report 2026</a>. This guide isolates registration timing and evidence choices.</p>

<h2 id="why-class-iii">Why Class III drives China launch sequencing</h2>
<p>Class I filings are local and fast; Class II provincial registrations typically clear in about 6–12 months with predicate equivalence. Class III national CMDE review commonly spans 18–36 months. Launch calendars that treat “China registration” as a single average therefore mis-sequence multi-SKU portfolios: a Class II accessory may be tender-ready years before a Class III implant in the same therapy franchise.</p>

<h2 id="cmde-pathway">CMDE pathway and clinical evaluation options</h2>
<p>Typical Class III workstreams include pre-submission communication with CMDE, technical file preparation in Chinese, clinical evaluation strategy selection, and post-approval vigilance via a Resident Agent for imported products. Clinical evaluation options include:</p>
<ul>
<li>A clinical trial conducted in China</li>
<li>Overseas clinical data with supplementary Chinese bridging evidence</li>
<li>Literature and equivalence for well-established device types already represented on the Chinese market</li>
</ul>
<p>Imported manufacturers without a Chinese legal entity must appoint a Resident Agent (代理人) who holds regulatory responsibility for registration maintenance, adverse-event reporting, and correspondence with NMPA/CMDE.</p>

<h2 id="priority-review">Innovative device priority review</h2>
<p>The Special Review Procedure for Innovative Medical Devices (创新医疗器械特别审查程序) can compress queue time for applicants with core domestic IP and a clear clinical advantage. Multinationals without China-origin IP should not treat priority review as an import shortcut; standard CMDE timelines plus localization strategy for post-approval tender scoring remain the realistic base case.</p>

<h2 id="planning-benchmarks">Planning benchmarks for 2026 portfolios</h2>
<p>Use Class II ≈ 6–12 months and Class III ≈ 18–36 months as planning bands, then overlay NHSA VBP and Grade III hospital procurement — registration alone does not guarantee public-channel volume. Compare China against other APAC pathways via the <a href="/japan-medical-devices-market-report">Japan medical devices market report</a> and <a href="/india-medical-devices-market-report">India medical devices market report</a>, or start from the <a href="/healthcare-market-research">healthcare market research hub</a>.</p>
<p>Related: <a href="/blog/china-device-vbp-rounds-explained">China device VBP rounds explained</a>.</p>`;

export const NMPA_CLASS_III_TIMELINE_HARDCODED_POST: BlogPost = {
  id: 'hardcoded-nmpa-class-iii-timeline-2026',
  slug: NMPA_CLASS_III_TIMELINE_SLUG,
  title: NMPA_CLASS_III_TIMELINE_DISPLAY_TITLE,
  excerpt:
    'NMPA Class III medical device registration timeline 2026: CMDE review, clinical evaluation options, Resident Agent duties, and 18–36 month planning bands for China launch sequencing.',
  date: '18 Aug 2026',
  category: 'Regulatory & Policy',
  country: 'China',
  language: 'en',
  readingTime: 7,
  tags: [...NMPA_CLASS_III_TIMELINE_TAGS],
  coverImage: NMPA_CLASS_III_TIMELINE_COVER_IMAGE,
  ogImage: NMPA_CLASS_III_TIMELINE_COVER_IMAGE,
  ogTitle: NMPA_CLASS_III_TIMELINE_META_TITLE,
  ogDescription: NMPA_CLASS_III_TIMELINE_META_DESCRIPTION,
  seoMetaTitle: NMPA_CLASS_III_TIMELINE_META_TITLE,
  seoMetaDescription: NMPA_CLASS_III_TIMELINE_META_DESCRIPTION,
  seoCanonicalUrl: `https://www.bionixus.com/blog/${NMPA_CLASS_III_TIMELINE_SLUG}`,
  authorName: 'Laura Williams',
  authorTitle: 'Research Director, BioNixus Healthcare Market Research',
  publishedAtIso: NMPA_CLASS_III_TIMELINE_PUBLISHED_ISO,
  updatedAtIso: NMPA_CLASS_III_TIMELINE_UPDATED_ISO,
  tableOfContents: NMPA_CLASS_III_TIMELINE_TABLE_OF_CONTENTS,
  executiveSummary: NMPA_CLASS_III_TIMELINE_EXECUTIVE_SUMMARY_HTML,
  faq: [...NMPA_CLASS_III_TIMELINE_SCHEMA_FAQ],
  ctaSection: {
    title: 'Need China device registration and GCC comparator intelligence?',
    description:
      'BioNixus maps NMPA/CMDE pathways alongside SFDA and GCC hospital procurement for medtech teams sequencing China and Gulf launches.',
    buttonText: 'Talk to BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  body: NMPA_CLASS_III_TIMELINE_BODY_HTML,
};
