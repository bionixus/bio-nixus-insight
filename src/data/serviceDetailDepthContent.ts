export type ServiceDepthSection = {
  heading: string;
  paragraphs: string[];
};

export const SERVICE_DETAIL_DEPTH: Partial<Record<string, ServiceDepthSection[]>> = {
  'quantitative-research': [
    {
      heading: 'When quantitative healthcare research is the right tool',
      paragraphs: [
        'Quantitative physician and payer surveys answer questions that qualitative depth cannot resolve at scale: market sizing, adoption rates, share-of-voice, conjoint trade-offs, and statistically defensible segment profiles. BioNixus designs studies with explicit sample frames — specialty, setting, geography, and tenure quotas — so results survive medical affairs and access committee scrutiny.',
        'GCC programmes often require bilingual Arabic–English fieldwork with separate validation for medical terminology. We run CATI for senior consultants who do not respond online, CAWI for large HCP panels, and mixed-mode designs when hospital access rules require on-site CAPI for certain wards or departments.',
        'For launch teams comparing syndicated Rx audits with custom primary research, BioNixus scopes incremental value: syndicated data shows what happened; primary research explains why committees, payers, and prescribers will behave differently in the next tender or formulary cycle.',
      ],
    },
    {
      heading: 'Geographic depth across EMEA',
      paragraphs: [
        'BioNixus field networks cover UK NHS trusts, EU5 hospital systems, and all six GCC countries with verified HCP recruitment — not panel aggregators that cannot reach hospital-based specialists. Egypt, Morocco, and Jordan cells integrate with MENA harmonized instruments when regional leadership needs comparable readouts.',
        'US and Brazil modules are available for global programmes requiring Americas coverage alongside EMEA fieldwork, with single governance and reporting templates.',
      ],
    },
  ],
  'competitive-intelligence': [
    {
      heading: 'Pharma competitive intelligence that supports decisions',
      paragraphs: [
        'BioNixus competitive intelligence combines primary physician and payer research with structured pipeline monitoring — not scraped news alerts alone. Landscape assessments map where your brand can realistically win given formulary status, tender timing, and prescriber switching barriers in each target market.',
        'Biosimilar and patent-expiry modules quantify substitution risk by hospital type and procurement channel. Launch-readiness scorecards align medical, access, and commercial milestones so teams do not discover committee objections after SFDA or MOH submission.',
        'Conference intelligence, publication tracking, and KOL sentiment layers complement quantitative share tracking — giving brand teams a forward view of competitive narratives before they appear in tender defence documents.',
      ],
    },
    {
      heading: 'IQVIA alternatives and agile CI delivery',
      paragraphs: [
        'Teams searching for IQVIA competitors or companies like IQVIA often need faster, region-specific primary research rather than global syndicated subscriptions. BioNixus delivers scoped competitive modules — prescriber perception, payer objection libraries, tender win-loss — within weeks, with GCC and EU5 field depth that global vendors dilute across average panels.',
      ],
    },
  ],
  'market-access': [
    {
      heading: 'EMEA and GCC market access research integration',
      paragraphs: [
        'Market access consulting at BioNixus links HTA dossier preparation (NICE, G-BA, HAS) with Gulf-specific SFDA, MOHAP, and NUPCO strategy. Payer willingness-to-pay studies and budget impact models use locally observed treatment pathways — not imported EU denominators unchanged.',
        'SFDA Economic Evaluation System requirements from July 2025 raise the evidence bar for high-cost therapies at registration. BioNixus HEOR and payer research modules anticipate EES pharmacoeconomic expectations before dossier lock, reducing rework at scientific advice meetings.',
        'Hospital formulary committee research surfaces the questions committees ask that clinical trial endpoints do not answer — dosing convenience, nurse administration burden, comparator budget impact, and real-world adherence assumptions.',
      ],
    },
    {
      heading: 'Pricing, tenders, and private payer pathways',
      paragraphs: [
        'GCC pricing uses external reference baskets that differ by country — Saudi Arabia benchmarks 14 reference markets while UAE emirates apply distinct insurance formularies. Research must map confidential negotiation dynamics alongside published price corridors.',
        'NUPCO central tenders in Saudi Arabia and hospital-group frameworks in UAE determine large-volume public sector access. BioNixus tender intelligence tracks evaluation criteria, incumbent contracts, and localization preferences that affect award probability.',
      ],
    },
  ],
};
