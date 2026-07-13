import {
  BarChart3,
  Users,
  Landmark,
  Search,
  Microscope,
  Map,
  Phone,
  Monitor,
  UserCheck,
  Eye,
  TrendingUp,
  MessageCircle,
  MousePointerClick,
  Layers,
  LineChart,
  Stethoscope,
  Building2,
  ShoppingBag,
  Cpu,
  type LucideIcon,
} from 'lucide-react';
import type { Language } from '@/lib/i18n';
import {
  DE_COMMERCIAL_OFFERINGS,
  DE_HEALTHCARE_SERVICES,
  DE_HERO_METRICS,
  DE_HUB_LINKS,
  DE_METHODOLOGY_SERVICES,
  DE_RECOVERY_LINK_LABELS,
  DE_SERVICE_FAQ,
  DE_SERVICES_HUB_COPY,
} from './servicesHubContent.de';

export type HealthcareService = {
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  tags: string[];
};

export type MethodologyService = {
  id: string;
  title: string;
  abbr?: string;
  summary: string;
  icon: LucideIcon;
  industries: string;
  href: string;
};

export type CommercialOffering = {
  to: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  examples: string;
};

export const HEALTHCARE_SERVICES: HealthcareService[] = [
  {
    slug: 'quantitative-research',
    title: 'Quantitative research & physician surveys',
    summary:
      'Statistically powered surveys with physicians, payers, and healthcare professionals across 38 countries — online, telephone, and face-to-face fieldwork at defined sample sizes (n=50 to 500+), with quotas and significance testing your governance team can defend.',
    icon: BarChart3,
    tags: ['Pharma', 'MedTech', 'Payers'],
  },
  {
    slug: 'qualitative-research',
    title: 'Qualitative research & expert insights',
    summary:
      'In-depth interviews, focus groups, and advisory boards with KOLs, treating physicians, payers, and hospital decision-makers — designed to explain the why behind adoption and access, not just the what.',
    icon: Users,
    tags: ['KOL', 'Advisory boards', 'Pathways'],
  },
  {
    slug: 'market-access',
    title: 'Market access & HTA strategy',
    summary:
      'Evidence-led pricing, payer engagement, and value-story testing for the US, EU5, UK, and GCC — with HTA, cost-effectiveness, budget impact, and market access strategy support mapped to NICE, G-BA, HAS, CMS, SFDA, and Gulf health authority expectations.',
    icon: Landmark,
    tags: ['HTA', 'CEA', 'BIA', 'Market Access'],
  },
  {
    slug: 'competitive-intelligence',
    title: 'Competitive intelligence',
    summary:
      'Competitor monitoring, pipeline and landscape assessments, launch-readiness reviews, and biosimilar impact studies — turned into a clear read on where your brand can realistically win.',
    icon: Search,
    tags: ['Landscape', 'Launch prep', 'Biosimilars'],
  },
  {
    slug: 'clinical-trial-support',
    title: 'Clinical trial support',
    summary:
      'Site identification, investigator profiling, patient-recruitment feasibility, protocol feedback from treating physicians, and real-world evidence planning across the Americas, Europe, and MENA.',
    icon: Microscope,
    tags: ['Feasibility', 'RWE', 'Investigators'],
  },
  {
    slug: 'kol-stakeholder-mapping',
    title: 'KOL & stakeholder mapping',
    summary:
      'Identification of the opinion leaders, committees, and procurement voices that shape decisions — with ethnographic research, patient-journey mapping, and treatment-pathway analysis where clinical context matters.',
    icon: Map,
    tags: ['Stakeholders', 'Journey mapping', 'Influence'],
  },
];

export const METHODOLOGY_SERVICES: MethodologyService[] = [
  {
    id: 'cati',
    title: 'CATI — telephone interviewing',
    abbr: 'CATI',
    summary:
      'Computer-assisted telephone interviewing for hard-to-reach B2B buyers, HCP panels, and senior decision-makers — with live supervision, quota management, and bilingual Arabic–English field teams across MENA.',
    icon: Phone,
    industries: 'Pharma · B2B · Financial services',
    href: '/services/quantitative-research',
  },
  {
    id: 'cawi',
    title: 'CAWI — online surveys',
    abbr: 'CAWI',
    summary:
      'Computer-assisted web interviewing at scale — physician trackers, brand health, employee pulse, and consumer panels with mobile-first design, fraud screening, and multi-country harmonisation.',
    icon: Monitor,
    industries: 'All industries · Global panels',
    href: '/services/quantitative-research',
  },
  {
    id: 'capi',
    title: 'CAPI — face-to-face fieldwork',
    abbr: 'CAPI',
    summary:
      'Computer-assisted personal interviewing for hospital audits, retail audits, and on-site B2B interviews — with offline-capable devices, GPS verification, and supervisor QC in GCC, LATAM, and Europe.',
    icon: UserCheck,
    industries: 'Healthcare · Retail · FMCG',
    href: '/services/quantitative-research',
  },
  {
    id: 'focus-groups',
    title: 'Focus groups & mini-groups',
    summary:
      'Moderated group discussions — in-person, virtual, or hybrid — for concept testing, message refinement, and category exploration with simultaneous translation in Arabic, French, German, and Portuguese.',
    icon: MessageCircle,
    industries: 'Pharma · B2C · Tourism',
    href: '/services/qualitative-research',
  },
  {
    id: 'mystery-shopping',
    title: 'Mystery shopping & audit programmes',
    summary:
      'Structured mystery shopper and service-audit programmes for banking branches, hospitality, retail, and healthcare front-of-house — scored against your service standards with photo and audio evidence where permitted.',
    icon: Eye,
    industries: 'Banking · Retail · Hospitality',
    href: '/contact',
  },
  {
    id: 'price-elasticity',
    title: 'Price elasticity & conjoint',
    summary:
      'Van Westendorp, Gabor-Granger, and discrete choice experiments (DCE) to model price sensitivity, pack-size trade-offs, and willingness-to-pay — for pharma launches, FMCG, and financial product pricing.',
    icon: TrendingUp,
    industries: 'Pharma · FMCG · Insurance',
    href: '/contact',
  },
  {
    id: 'online-behaviour',
    title: 'Online behaviour tracking',
    summary:
      'Digital journey analysis, click-stream studies, and passive metering modules — combined with survey data to connect stated preference with observed behaviour across e-commerce, banking, and health portals.',
    icon: MousePointerClick,
    industries: 'B2C · E-commerce · Health-tech',
    href: '/contact',
  },
  {
    id: 'brand-tracking',
    title: 'Brand tracking & awareness',
    summary:
      'Continuous or pulse trackers for aided and unaided awareness, consideration, NPS, and competitive share-of-voice — fielded CAWI or CATI with dashboards your marketing team can act on weekly.',
    icon: LineChart,
    industries: 'FMCG · Telecom · Pharma OTC',
    href: '/services/competitive-intelligence',
  },
  {
    id: 'segmentation',
    title: 'Segmentation & MaxDiff',
    summary:
      'Needs-based segmentation, latent class analysis, and MaxDiff prioritisation to rank features, messages, or product attributes — feeding targeting and portfolio decisions in B2B and B2C categories.',
    icon: Layers,
    industries: 'B2B · Technology · Consumer',
    href: '/services/quantitative-research',
  },
];

export const COMMERCIAL_OFFERINGS: CommercialOffering[] = [
  {
    to: '/pharma-healthcare-industries',
    title: 'Pharma, biotech & MedTech',
    summary:
      'The discipline BioNixus was founded on — drug launch, market access, MedTech, diagnostics, biotech, and consumer health evidence with the sampling and compliance standards regulated categories require.',
    icon: Stethoscope,
    examples: 'Oncology · rare disease · devices · OTC · vaccines',
  },
  {
    to: '/b2b-industries',
    title: 'B2B & enterprise research',
    summary:
      'Buyer-committee mapping, market sizing, and competitive intelligence for technology, energy, real estate, public sector, education, and industrial manufacturing — including wood products and engineered materials.',
    icon: Building2,
    examples: 'Technology · real estate · energy · manufacturing',
  },
  {
    to: '/b2c-industries',
    title: 'B2C & consumer research',
    summary:
      'Brand tracking, shopper insight, segmentation, and demand studies for FMCG, retail, financial services, telecom, automotive, hospitality, and tourism — where mass-market behaviour drives the decision.',
    icon: ShoppingBag,
    examples: 'Banking · retail · tourism · FMCG · telecom',
  },
  {
    to: '/bionixus-industries',
    title: 'AI, IT & growth-stage ventures',
    summary:
      'Win-loss analysis, buyer persona research, and GTM validation for B2B software, cybersecurity, health-tech AI, and IT services — combining enterprise buyer depth with the speed growth teams need.',
    icon: Cpu,
    examples: 'SaaS · AI startups · IT services · health-tech',
  },
];

export const HUB_LINKS = [
  { to: '/healthcare-market-research', label: 'Healthcare market research hub' },
  { to: '/bionixus-industries', label: 'BioNixus across industries' },
  { to: '/market-research-by-industry', label: 'Market research by industry (global index)' },
  { to: '/market-research', label: 'Market research services overview' },
  { to: '/methodology', label: 'Research methodology & compliance' },
  { to: '/case-studies', label: 'Client case studies' },
] as const;

export const SERVICE_FAQ = [
  {
    question: 'Does BioNixus only work in pharmaceutical and healthcare markets?',
    answer:
      'No. Pharmaceutical and healthcare research is where BioNixus leads — but the same senior-led methodology extends to B2B and B2C programmes: financial services, real estate, tourism and hospitality, manufacturing, technology, AI startups, retail, and FMCG. Explore the commercial sections below or the BioNixus industries hub for category-specific scope.',
  },
  {
    question: 'Which fieldwork mode fits our study — CATI, CAWI, or CAPI?',
    answer:
      'CAWI suits large-scale online panels and trackers. CATI reaches senior B2B buyers and HCPs who do not respond online. CAPI is essential for on-site audits, hospital visits, and retail mystery programmes. We recommend the mode — or a mixed-mode design — during scoping based on your audience, geography, and timeline.',
  },
  {
    question: 'Which service fits a pre-launch pharmaceutical programme?',
    answer:
      'Most launch teams combine quantitative physician surveys with qualitative KOL depth and market access support. We scope modules to your phase — feasibility, positioning, pricing, or HTA — and sequence fieldwork to match your governance calendar across the US, Europe, and MENA.',
  },
  {
    question: 'Can we commission one module or an integrated global programme?',
    answer:
      'Both. Each healthcare card links to a dedicated scope page. You can run a standalone CATI wave, a focus-group programme, a mystery-shopping audit, a price-elasticity study, or a multi-country programme where modules share sampling logic and reporting templates.',
  },
  {
    question: 'Which geographies do these services cover?',
    answer:
      'BioNixus executes across 38 countries in the Americas, Europe, MENA, Africa, and Asia-Pacific priority markets — with offices and field networks in the US, UK, Egypt, Saudi Arabia, UAE, Kuwait, and Brazil.',
  },
  {
    question: 'How quickly can we receive a proposal?',
    answer:
      'Share your objective, audience, industry, and timeline via the contact form. We typically return a tailored methodology outline within one business day.',
  },
] as const;

export const HERO_METRICS = [
  { value: '38', label: 'Countries fielded' },
  { value: '16', label: 'Industry verticals' },
  { value: '6', label: 'Core pharma modules' },
  { value: '9+', label: 'Fieldwork modes' },
] as const;

export function getServicesHubBundle(language: Language) {
  if (language === 'de') {
    return {
      copy: DE_SERVICES_HUB_COPY,
      heroMetrics: DE_HERO_METRICS,
      healthcareServices: DE_HEALTHCARE_SERVICES,
      methodologyServices: DE_METHODOLOGY_SERVICES,
      commercialOfferings: DE_COMMERCIAL_OFFERINGS,
      hubLinks: DE_HUB_LINKS,
      serviceFaq: DE_SERVICE_FAQ,
      recoveryLabels: DE_RECOVERY_LINK_LABELS,
    };
  }
  return {
    copy: null,
    heroMetrics: HERO_METRICS,
    healthcareServices: HEALTHCARE_SERVICES,
    methodologyServices: METHODOLOGY_SERVICES,
    commercialOfferings: COMMERCIAL_OFFERINGS,
    hubLinks: HUB_LINKS,
    serviceFaq: SERVICE_FAQ,
    recoveryLabels: {} as Record<string, string>,
  };
}
