import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { SEGMENTS, SEGMENT_ORDER, type SegmentSlug } from '@/data/bionixusIndustrySegments';

const HUB_PATH = '/bionixus-industries';

const HUB_TITLE = 'Market Research Across Industries | BioNixus';
const HUB_DESCRIPTION =
  'BioNixus runs market research across pharma & healthcare, B2B, and B2C industries — US-headquartered, with research teams in London and Cairo and bilingual fieldwork across the Americas, EMEA, and the GCC.';

/** Per-segment accent used to colour the cards and markers. */
const SEGMENT_ACCENT: Record<SegmentSlug, string> = {
  'pharma-healthcare': 'teal',
  b2b: 'gold',
  b2c: 'coral',
};

const TRUST_STATS = [
  { value: '2012', label: 'Operating since', sub: 'more than a decade' },
  { value: '127+', label: 'Projects delivered', sub: 'across 17+ countries' },
  { value: '48', label: 'Clients served', sub: 'pharma to consumer' },
  { value: '14+', label: 'Therapeutic areas', sub: 'and growing' },
];

const NEXT_STEP_LINKS = [
  {
    to: '/market-research-by-industry',
    label: 'Industries index — Saudi Arabia, UAE & Egypt',
    description: 'Every published country-by-industry page in one place.',
  },
  {
    to: '/healthcare-market-research',
    label: 'Healthcare market research hub',
    description: 'The country-by-country pharma and healthcare silo.',
  },
  {
    to: '/market-research',
    label: 'Market research services overview',
    description: 'Quantitative, qualitative, and mixed-method capabilities.',
  },
  {
    to: '/bionixus-market-research-middle-east',
    label: 'Middle East market research pillar',
    description: 'How we field and govern research across MENA.',
  },
  {
    to: '/about',
    label: 'About BioNixus',
    description: 'Who we are, where we operate, and how we work.',
  },
];

const HUB_FAQ = [
  {
    question: 'What industries does BioNixus cover?',
    answer:
      'BioNixus organises its work into three segments: pharma & healthcare (pharma, MedTech, hospitals, biotech, and consumer health), B2B (technology, energy, real estate, public sector, and education), and B2C (FMCG, retail, automotive, hospitality, media, telecom, and financial services).',
  },
  {
    question: 'Does BioNixus only do healthcare market research?',
    answer:
      'No. Healthcare and pharmaceutical research is where BioNixus was founded and where it leads, but the same sampling discipline and senior-led analysis now extend to B2B and B2C categories through the B2B industries and B2C industries sections.',
  },
  {
    question: 'Where is BioNixus based and which regions does it cover?',
    answer:
      'BioNixus is US-headquartered in Sheridan, Wyoming, with research operations in London and Cairo. That footprint supports programmes across the Americas, Europe, and the GCC under one evidence framework, with bilingual Arabic–English fieldwork in MENA.',
  },
  {
    question: 'How are the three industry segments connected?',
    answer:
      'This hub is the deliberate bridge between them. The pharma & healthcare silo links to deep country and therapy coverage, while the B2B and B2C sections apply the same standards to non-healthcare categories. Use the segment cards above to enter the section you need.',
  },
];

const PREMIUM_CSS = `
.bx-ind {
  --bx-midnight: #06101F;
  --bx-navy: #0C1B33;
  --bx-navy-light: #12284A;
  --bx-slate: #1B3254;
  --bx-gold: #C9A84C;
  --bx-gold-light: #E4CC7A;
  --bx-teal: #0EA5A0;
  --bx-teal-light: #14CFC8;
  --bx-coral: #E06852;
  --bx-warm-white: #FFFEFB;
  --bx-cream: #F4F2ED;
  --bx-gray-100: #EDE9E3;
  --bx-gray-200: #D6D0C7;
  --bx-gray-500: #7A7267;
  --bx-gray-700: #3D3830;
  --bx-font-display: 'Cormorant Garamond', 'Georgia', serif;
  --bx-max-w: 1180px;
  --bx-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  font-family: 'Outfit', system-ui, sans-serif;
  color: var(--bx-gray-700);
  background: var(--bx-warm-white);
  line-height: 1.7;
}
.bx-ind *, .bx-ind *::before, .bx-ind *::after { box-sizing: border-box; }
.bx-ind .bx-inner { max-width: var(--bx-max-w); margin: 0 auto; padding: 0 40px; }
.bx-ind .bx-display { font-family: var(--bx-font-display); }

@keyframes bxindFadeUp { from { opacity: 0; transform: translateY(36px); } to { opacity: 1; transform: translateY(0); } }
@keyframes bxindScaleIn { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
@keyframes bxindDrawLine { from { stroke-dashoffset: 900; } to { stroke-dashoffset: 0; } }
@keyframes bxindBreathe { 0%,100% { opacity: 0.4; } 50% { opacity: 0.85; } }
@keyframes bxindOrbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes bxindFadeIn { from { opacity: 0; } to { opacity: 1; } }

/* ===== HERO ===== */
.bx-ind .bx-hero {
  position: relative; background: var(--bx-midnight); overflow: hidden;
  padding-top: 132px; padding-bottom: 96px;
}
.bx-ind .bx-hero-bg {
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 70% 55% at 70% 40%, rgba(12,27,51,1) 0%, transparent 70%),
    radial-gradient(ellipse 50% 45% at 18% 85%, rgba(14,165,160,0.10) 0%, transparent 50%),
    radial-gradient(ellipse 35% 30% at 88% 12%, rgba(201,168,76,0.08) 0%, transparent 40%),
    linear-gradient(180deg, var(--bx-midnight) 0%, #081628 100%);
}
.bx-ind .bx-hero-grid { position: absolute; inset: 0; overflow: hidden; opacity: 0.05; }
.bx-ind .bx-hero-grid svg { width: 100%; height: 100%; }
.bx-ind .bx-orbital {
  position: absolute; width: 640px; height: 640px; top: 46%; left: 72%;
  transform: translate(-50%, -50%); pointer-events: none;
}
.bx-ind .bx-ring {
  position: absolute; inset: 0; border: 1px solid rgba(201,168,76,0.07);
  border-radius: 50%; animation: bxindOrbit 60s linear infinite;
}
.bx-ind .bx-ring:nth-child(2) { inset: 56px; border-color: rgba(14,165,160,0.06); animation-duration: 46s; animation-direction: reverse; }
.bx-ind .bx-ring:nth-child(3) { inset: 130px; border-color: rgba(201,168,76,0.05); animation-duration: 88s; }
.bx-ind .bx-ring .bx-node { position: absolute; width: 6px; height: 6px; border-radius: 50%; background: var(--bx-gold); opacity: 0.5; animation: bxindBreathe 3s ease-in-out infinite; }
.bx-ind .bx-ring:nth-child(1) .bx-node { top: 0; left: 50%; transform: translate(-50%, -50%); }
.bx-ind .bx-ring:nth-child(2) .bx-node { bottom: 0; right: 0; transform: translate(50%, 50%); background: var(--bx-teal); }
.bx-ind .bx-ring:nth-child(3) .bx-node { top: 50%; left: 0; transform: translate(-50%, -50%); }
.bx-ind .bx-hero-inner {
  position: relative; z-index: 2; display: grid; grid-template-columns: 1.05fr 0.95fr;
  gap: 64px; align-items: center;
}
.bx-ind .bx-hero-copy { animation: bxindFadeUp 1s var(--bx-ease-out); }
.bx-ind .bx-breadcrumb { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 26px; font-size: 12.5px; color: rgba(255,255,255,0.4); }
.bx-ind .bx-breadcrumb a { color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s; }
.bx-ind .bx-breadcrumb a:hover { color: var(--bx-gold-light); }
.bx-ind .bx-breadcrumb span[aria-current] { color: var(--bx-gold); }
.bx-ind .bx-eyebrow {
  display: inline-flex; align-items: center; gap: 10px; margin-bottom: 26px;
  font-size: 11.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 3px; color: var(--bx-gold);
}
.bx-ind .bx-eyebrow .bx-line { width: 30px; height: 1px; background: var(--bx-gold); opacity: 0.4; }
.bx-ind .bx-hero h1 {
  font-family: var(--bx-font-display); font-size: clamp(2.6rem, 4.2vw, 4rem); font-weight: 300;
  color: var(--bx-warm-white); line-height: 1.12; letter-spacing: -0.5px; margin: 0 0 24px;
}
.bx-ind .bx-hero h1 em {
  font-weight: 500; font-style: italic;
  background: linear-gradient(135deg, var(--bx-gold), var(--bx-gold-light));
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
}
.bx-ind .bx-hero-sub { font-size: 17px; line-height: 1.8; color: rgba(255,255,255,0.5); margin: 0 0 24px; max-width: 520px; font-weight: 300; }
.bx-ind .bx-hero-sub strong { color: rgba(255,255,255,0.78); font-weight: 500; }
.bx-ind .bx-hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 36px; }
.bx-ind .bx-btn-gold {
  background: linear-gradient(135deg, var(--bx-gold), #B8933E); color: var(--bx-midnight);
  padding: 16px 32px; border-radius: 12px; font-size: 14px; font-weight: 600; text-decoration: none;
  display: inline-flex; align-items: center; gap: 9px; letter-spacing: 0.4px; transition: all 0.35s;
  box-shadow: 0 4px 20px rgba(201,168,76,0.25);
}
.bx-ind .bx-btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 40px rgba(201,168,76,0.35); }
.bx-ind .bx-btn-ghost {
  color: rgba(255,255,255,0.62); padding: 16px 28px; border-radius: 12px; font-size: 14px; font-weight: 400;
  text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid rgba(255,255,255,0.12); transition: all 0.35s;
}
.bx-ind .bx-btn-ghost:hover { border-color: rgba(255,255,255,0.3); color: var(--bx-warm-white); }

/* Hero dashboard card */
.bx-ind .bx-hero-visual { animation: bxindScaleIn 1s var(--bx-ease-out) 0.2s both; }
.bx-ind .bx-card {
  background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
  border-radius: 22px; padding: 32px; position: relative; backdrop-filter: blur(12px);
  box-shadow: 0 40px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04);
}
.bx-ind .bx-card::before {
  content: ''; position: absolute; top: -1px; left: 56px; right: 56px; height: 1px;
  background: linear-gradient(90deg, transparent, var(--bx-gold), transparent); opacity: 0.4;
}
.bx-ind .bx-card-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px; }
.bx-ind .bx-card-head h2 { font-family: var(--bx-font-display); font-size: 18px; color: rgba(255,255,255,0.82); font-weight: 400; letter-spacing: 0.4px; margin: 0; }
.bx-ind .bx-live { display: flex; align-items: center; gap: 6px; font-size: 11px; color: var(--bx-teal); font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase; }
.bx-ind .bx-live .bx-pulse { width: 6px; height: 6px; background: var(--bx-teal); border-radius: 50%; animation: bxindBreathe 2s ease-in-out infinite; box-shadow: 0 0 8px var(--bx-teal); }
.bx-ind .bx-chart { height: 132px; margin-bottom: 22px; }
.bx-ind .bx-chart svg { width: 100%; height: 100%; }
.bx-ind .bx-seg-rows { display: flex; flex-direction: column; gap: 10px; }
.bx-ind .bx-seg-row {
  display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 12px;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);
}
.bx-ind .bx-seg-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
.bx-ind .bx-seg-dot.teal { background: var(--bx-teal); box-shadow: 0 0 8px rgba(14,165,160,0.6); }
.bx-ind .bx-seg-dot.gold { background: var(--bx-gold); box-shadow: 0 0 8px rgba(201,168,76,0.6); }
.bx-ind .bx-seg-dot.coral { background: var(--bx-coral); box-shadow: 0 0 8px rgba(224,104,82,0.6); }
.bx-ind .bx-seg-row-name { font-size: 13.5px; color: rgba(255,255,255,0.82); font-weight: 500; }
.bx-ind .bx-seg-row-tag { font-size: 11.5px; color: rgba(255,255,255,0.4); margin-top: 1px; }
.bx-ind .bx-card-foot { margin-top: 20px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 11.5px; color: rgba(255,255,255,0.4); letter-spacing: 0.4px; text-align: center; }
.bx-ind .bx-card-foot strong { color: rgba(255,255,255,0.7); font-weight: 600; }

/* ===== REGION RIBBON ===== */
.bx-ind .bx-ribbon { background: var(--bx-navy); padding: 18px 40px; border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); }
.bx-ind .bx-ribbon-inner { max-width: var(--bx-max-w); margin: 0 auto; display: flex; justify-content: center; gap: 44px; flex-wrap: wrap; }
.bx-ind .bx-ribbon-item { display: flex; align-items: center; gap: 8px; font-size: 12px; color: rgba(255,255,255,0.4); font-weight: 400; letter-spacing: 0.5px; }
.bx-ind .bx-ribbon-item .bx-ic { color: var(--bx-gold); font-size: 12px; opacity: 0.8; }

/* ===== STATS ===== */
.bx-ind .bx-stats { background: var(--bx-warm-white); padding: 64px 40px; border-bottom: 1px solid var(--bx-gray-100); }
.bx-ind .bx-stats-inner { max-width: var(--bx-max-w); margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); }
.bx-ind .bx-stat { text-align: center; padding: 16px 28px; position: relative; }
.bx-ind .bx-stat:not(:last-child)::after { content: ''; position: absolute; right: 0; top: 15%; height: 70%; width: 1px; background: linear-gradient(180deg, transparent, var(--bx-gray-200), transparent); }
.bx-ind .bx-stat-num { font-family: var(--bx-font-display); font-size: 52px; font-weight: 300; color: var(--bx-navy); line-height: 1; margin-bottom: 8px; letter-spacing: -1.5px; }
.bx-ind .bx-stat-label { font-size: 13px; color: var(--bx-gray-700); font-weight: 500; }
.bx-ind .bx-stat-sub { font-size: 12px; color: var(--bx-gray-500); font-weight: 300; margin-top: 2px; }

/* ===== SECTION PRIMITIVES ===== */
.bx-ind .bx-section { padding: clamp(72px, 9vw, 116px) 40px; }
.bx-ind .bx-section.cream { background: var(--bx-cream); }
.bx-ind .bx-section.dark { background: var(--bx-midnight); position: relative; overflow: hidden; }
.bx-ind .bx-section-head { margin-bottom: 56px; }
.bx-ind .bx-section-head.center { text-align: center; }
.bx-ind .bx-eyebrow.gold { color: var(--bx-gold); }
.bx-ind .bx-eyebrow.gold .bx-line { background: var(--bx-gold); opacity: 0.35; }
.bx-ind .bx-eyebrow.teal { color: var(--bx-teal); }
.bx-ind .bx-eyebrow.teal .bx-line { background: var(--bx-teal); opacity: 0.35; }
.bx-ind .bx-h2 { font-family: var(--bx-font-display); font-size: clamp(2rem, 3.1vw, 2.9rem); font-weight: 300; color: var(--bx-navy); line-height: 1.15; letter-spacing: -0.3px; margin: 0; }
.bx-ind .bx-h2 em { font-weight: 500; font-style: italic; }
.bx-ind .bx-h2.light { color: var(--bx-warm-white); }
.bx-ind .bx-lead { font-size: 17px; color: var(--bx-gray-500); max-width: 620px; margin-top: 16px; font-weight: 300; line-height: 1.8; }
.bx-ind .bx-lead.center { margin-left: auto; margin-right: auto; }
.bx-ind .bx-lead.light { color: rgba(255,255,255,0.5); }

/* ===== SEGMENT CARDS ===== */
.bx-ind .bx-seg-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
.bx-ind .bx-seg-card {
  background: var(--bx-warm-white); border-radius: 20px; padding: 40px 36px;
  border: 1px solid var(--bx-gray-100); transition: all 0.45s var(--bx-ease-out);
  position: relative; overflow: hidden; text-decoration: none; display: flex; flex-direction: column;
}
.bx-ind .bx-seg-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; opacity: 0; transition: opacity 0.4s; }
.bx-ind .bx-seg-card.teal::before { background: linear-gradient(90deg, var(--bx-teal), var(--bx-teal-light)); }
.bx-ind .bx-seg-card.gold::before { background: linear-gradient(90deg, var(--bx-gold), var(--bx-gold-light)); }
.bx-ind .bx-seg-card.coral::before { background: linear-gradient(90deg, var(--bx-coral), #F08A77); }
.bx-ind .bx-seg-card:hover { border-color: transparent; box-shadow: 0 24px 70px rgba(6,16,31,0.10); transform: translateY(-6px); }
.bx-ind .bx-seg-card:hover::before { opacity: 1; }
.bx-ind .bx-seg-icon { width: 52px; height: 52px; border-radius: 15px; display: flex; align-items: center; justify-content: center; margin-bottom: 22px; }
.bx-ind .bx-seg-icon.teal { background: linear-gradient(135deg, #E6FAF8, #C0F0EC); color: var(--bx-teal); }
.bx-ind .bx-seg-icon.gold { background: linear-gradient(135deg, #FDF6E3, #F5E8C4); color: #A8872E; }
.bx-ind .bx-seg-icon.coral { background: linear-gradient(135deg, #FFF0ED, #FDDDD6); color: var(--bx-coral); }
.bx-ind .bx-seg-card h3 { font-family: var(--bx-font-display); font-size: 23px; font-weight: 500; color: var(--bx-navy); margin: 0 0 6px; letter-spacing: -0.3px; }
.bx-ind .bx-seg-card .bx-seg-tag { font-size: 13px; font-weight: 600; margin-bottom: 14px; }
.bx-ind .bx-seg-card.teal .bx-seg-tag { color: var(--bx-teal); }
.bx-ind .bx-seg-card.gold .bx-seg-tag { color: #A8872E; }
.bx-ind .bx-seg-card.coral .bx-seg-tag { color: var(--bx-coral); }
.bx-ind .bx-seg-card p { font-size: 14.5px; color: var(--bx-gray-500); line-height: 1.75; font-weight: 300; margin: 0 0 22px; flex: 1; }
.bx-ind .bx-seg-go { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; letter-spacing: 0.4px; transition: gap 0.3s; }
.bx-ind .bx-seg-card.teal .bx-seg-go { color: var(--bx-teal); }
.bx-ind .bx-seg-card.gold .bx-seg-go { color: #A8872E; }
.bx-ind .bx-seg-card.coral .bx-seg-go { color: var(--bx-coral); }
.bx-ind .bx-seg-card:hover .bx-seg-go { gap: 14px; }

/* ===== DARK NARRATIVE ===== */
.bx-ind .bx-section.dark .bx-dark-bg { position: absolute; inset: 0; pointer-events: none; background: radial-gradient(ellipse 60% 50% at 25% 70%, rgba(14,165,160,0.07), transparent), radial-gradient(ellipse 40% 40% at 82% 18%, rgba(201,168,76,0.05), transparent); }
.bx-ind .bx-narrative { position: relative; z-index: 2; max-width: 760px; }
.bx-ind .bx-narrative p { font-size: 16.5px; line-height: 1.85; color: rgba(255,255,255,0.55); font-weight: 300; margin: 0 0 18px; }
.bx-ind .bx-narrative a { color: var(--bx-gold-light); text-decoration: none; border-bottom: 1px solid rgba(228,204,122,0.3); transition: border-color 0.3s; font-weight: 400; }
.bx-ind .bx-narrative a:hover { border-color: var(--bx-gold-light); }

/* ===== NEXT STEPS ===== */
.bx-ind .bx-next-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.bx-ind .bx-next-card { background: var(--bx-warm-white); border: 1px solid var(--bx-gray-100); border-radius: 16px; padding: 24px 26px; text-decoration: none; transition: all 0.35s var(--bx-ease-out); display: block; }
.bx-ind .bx-next-card:hover { border-color: var(--bx-gold); transform: translateY(-3px); box-shadow: 0 16px 40px rgba(6,16,31,0.07); }
.bx-ind .bx-next-card .bx-next-label { display: flex; align-items: center; gap: 8px; font-family: var(--bx-font-display); font-size: 18px; font-weight: 500; color: var(--bx-navy); }
.bx-ind .bx-next-card .bx-next-arrow { color: var(--bx-gold); transition: transform 0.3s; }
.bx-ind .bx-next-card:hover .bx-next-arrow { transform: translateX(4px); }
.bx-ind .bx-next-card .bx-next-desc { font-size: 13.5px; color: var(--bx-gray-500); font-weight: 300; margin-top: 6px; line-height: 1.6; }

/* ===== FAQ ===== */
.bx-ind .bx-faq-wrap { max-width: 800px; margin: 0 auto; }
.bx-ind .bx-faq { border-bottom: 1px solid var(--bx-gray-100); }
.bx-ind .bx-faq > summary {
  list-style: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 24px;
  padding: 26px 0; font-family: var(--bx-font-display); font-size: 19px; font-weight: 400; color: var(--bx-navy);
  transition: color 0.3s; letter-spacing: -0.2px;
}
.bx-ind .bx-faq > summary::-webkit-details-marker { display: none; }
.bx-ind .bx-faq > summary:hover { color: var(--bx-gold); }
.bx-ind .bx-faq > summary .bx-faq-icon { font-size: 22px; color: var(--bx-gray-200); font-weight: 300; transition: transform 0.35s, color 0.35s; flex-shrink: 0; }
.bx-ind .bx-faq[open] > summary .bx-faq-icon { transform: rotate(45deg); color: var(--bx-gold); }
.bx-ind .bx-faq-a { font-size: 15px; color: var(--bx-gray-500); line-height: 1.8; font-weight: 300; padding: 0 0 26px; max-width: 700px; }

/* ===== FINAL CTA ===== */
.bx-ind .bx-cta-section { background: var(--bx-warm-white); padding: clamp(64px, 8vw, 100px) 40px; }
.bx-ind .bx-cta-card {
  max-width: 840px; margin: 0 auto; text-align: center; background: var(--bx-midnight);
  border-radius: 26px; padding: clamp(48px, 6vw, 76px) 48px; position: relative; overflow: hidden;
  box-shadow: 0 40px 100px rgba(6,16,31,0.3);
}
.bx-ind .bx-cta-card::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 50% at 50% 130%, rgba(201,168,76,0.10), transparent); }
.bx-ind .bx-cta-card::after { content: ''; position: absolute; top: -1px; left: 80px; right: 80px; height: 1px; background: linear-gradient(90deg, transparent, var(--bx-gold), transparent); opacity: 0.35; }
.bx-ind .bx-cta-card h2 { font-family: var(--bx-font-display); font-size: clamp(2rem, 3vw, 2.6rem); font-weight: 300; color: var(--bx-warm-white); margin: 0 0 14px; position: relative; letter-spacing: -0.5px; }
.bx-ind .bx-cta-card p { font-size: 17px; color: rgba(255,255,255,0.5); margin: 0 0 34px; position: relative; font-weight: 300; }
.bx-ind .bx-cta-actions { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; position: relative; }

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .bx-ind .bx-hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .bx-ind .bx-hero-visual { display: none; }
  .bx-ind .bx-seg-grid { grid-template-columns: 1fr; }
  .bx-ind .bx-next-grid { grid-template-columns: 1fr; }
}
@media (max-width: 720px) {
  .bx-ind .bx-inner, .bx-ind .bx-section, .bx-ind .bx-stats, .bx-ind .bx-ribbon, .bx-ind .bx-cta-section { padding-left: 22px; padding-right: 22px; }
  .bx-ind .bx-hero { padding-top: 112px; }
  .bx-ind .bx-stats-inner { grid-template-columns: 1fr 1fr; gap: 28px 0; }
  .bx-ind .bx-stat:not(:last-child)::after { display: none; }
  .bx-ind .bx-stat-num { font-size: 42px; }
  .bx-ind .bx-ribbon-inner { gap: 18px; }
  .bx-ind .bx-hero-actions .bx-btn-gold, .bx-ind .bx-hero-actions .bx-btn-ghost { width: 100%; justify-content: center; }
}
`;

export default function BionixusIndustries() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Market Research Across Industries',
      url: `https://www.bionixus.com${HUB_PATH}`,
      description: HUB_DESCRIPTION,
      about: SEGMENT_ORDER.map((slug) => SEGMENTS[slug].label),
      isPartOf: {
        '@type': 'WebSite',
        name: 'BioNixus',
        url: 'https://www.bionixus.com',
      },
      hasPart: SEGMENT_ORDER.map((slug) => ({
        '@type': 'WebPage',
        name: SEGMENTS[slug].label,
        url: `https://www.bionixus.com${SEGMENTS[slug].path}`,
      })),
    },
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Industries', href: HUB_PATH },
    ]),
    buildFAQSchema(HUB_FAQ, { pageUrl: `https://www.bionixus.com${HUB_PATH}` }),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={HUB_TITLE} description={HUB_DESCRIPTION} canonical={HUB_PATH} jsonLd={jsonLd} />
      <style dangerouslySetInnerHTML={{ __html: PREMIUM_CSS }} />
      <Navbar />
      <main className="bx-ind">
        {/* ===== HERO ===== */}
        <section className="bx-hero">
          <div className="bx-hero-bg" aria-hidden="true" />
          <div className="bx-hero-grid" aria-hidden="true">
            <svg viewBox="0 0 1440 700" preserveAspectRatio="none">
              <defs>
                <pattern id="bxHexGrid" width="60" height="52" patternUnits="userSpaceOnUse">
                  <path d="M30 0 L60 15 L60 37 L30 52 L0 37 L0 15 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#bxHexGrid)" />
            </svg>
          </div>
          <div className="bx-orbital" aria-hidden="true">
            <div className="bx-ring"><div className="bx-node" /></div>
            <div className="bx-ring"><div className="bx-node" /></div>
            <div className="bx-ring"><div className="bx-node" /></div>
          </div>

          <div className="bx-inner bx-hero-inner">
            <div className="bx-hero-copy">
              <nav className="bx-breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Industries</span>
              </nav>
              <div className="bx-eyebrow">
                <span className="bx-line" /> Market research across industries
              </div>
              <h1>
                One research firm, <em>every industry that briefs us</em>
              </h1>
              <p className="bx-hero-sub">
                BioNixus began in <strong>pharmaceutical and healthcare research in 2012</strong> and still leads there.
                The same sampling discipline and senior-led analysis now run across three connected segments — pharma
                &amp; healthcare, B2B, and B2C — for clients across the Americas, EMEA, and the GCC.
              </p>
              <p className="bx-hero-sub">
                The site is built as two linked silos: a regulated healthcare silo and a non-healthcare industries silo.
                This hub is the bridge between them.
              </p>
              <div className="bx-hero-actions">
                <Link to="/market-research-by-industry" className="bx-btn-gold">
                  Explore the industries index →
                </Link>
                <Link to="/market-research" className="bx-btn-ghost">
                  <span aria-hidden="true">◈</span> Our research services
                </Link>
              </div>
            </div>

            {/* Dashboard-style visual */}
            <div className="bx-hero-visual">
              <div className="bx-card">
                <div className="bx-card-head">
                  <h2>Coverage at a glance</h2>
                  <div className="bx-live"><span className="bx-pulse" /> Live</div>
                </div>

                <div className="bx-chart" aria-hidden="true">
                  <svg viewBox="0 0 500 132" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="bxGoldGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(201,168,76,0.22)" />
                        <stop offset="100%" stopColor="rgba(201,168,76,0)" />
                      </linearGradient>
                      <linearGradient id="bxTealGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(14,165,160,0.14)" />
                        <stop offset="100%" stopColor="rgba(14,165,160,0)" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="33" x2="500" y2="33" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    <line x1="0" y1="66" x2="500" y2="66" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    <line x1="0" y1="99" x2="500" y2="99" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    {/* Teal — healthcare silo */}
                    <path d="M20,96 C60,92 100,86 140,80 C180,74 220,70 260,62 C300,54 340,48 380,42 C420,36 460,30 490,26 L490,124 L20,124 Z" fill="url(#bxTealGrad)" />
                    <path d="M20,96 C60,92 100,86 140,80 C180,74 220,70 260,62 C300,54 340,48 380,42 C420,36 460,30 490,26" fill="none" stroke="var(--bx-teal)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
                    {/* Gold — non-healthcare silo */}
                    <path d="M20,110 C60,105 100,98 140,90 C180,80 220,70 260,60 C300,48 340,38 380,30 C420,22 460,16 490,12 L490,124 L20,124 Z" fill="url(#bxGoldGrad)" style={{ opacity: 0, animation: 'bxindFadeIn 1s ease-out 1.4s forwards' }} />
                    <path
                      d="M20,110 C60,105 100,98 140,90 C180,80 220,70 260,60 C300,48 340,38 380,30 C420,22 460,16 490,12"
                      fill="none"
                      stroke="var(--bx-gold)"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="900"
                      strokeDashoffset="900"
                      style={{ animation: 'bxindDrawLine 2.4s ease-out 0.4s forwards' }}
                    />
                    <circle cx="490" cy="12" r="4" fill="var(--bx-gold)" style={{ opacity: 0, animation: 'bxindFadeIn 0.5s ease-out 2.4s forwards' }} />
                    <circle cx="490" cy="26" r="3.4" fill="var(--bx-teal)" style={{ opacity: 0, animation: 'bxindFadeIn 0.5s ease-out 2.4s forwards' }} />
                    <line x1="20" y1="8" x2="36" y2="8" stroke="rgba(201,168,76,0.8)" strokeWidth="2" />
                    <text x="40" y="12" fontSize="10" fill="rgba(255,255,255,0.4)" fontFamily="Outfit, sans-serif">Non-healthcare silo</text>
                    <line x1="170" y1="8" x2="186" y2="8" stroke="rgba(14,165,160,0.6)" strokeWidth="2" />
                    <text x="190" y="12" fontSize="10" fill="rgba(255,255,255,0.4)" fontFamily="Outfit, sans-serif">Healthcare silo</text>
                  </svg>
                </div>

                <div className="bx-seg-rows">
                  {SEGMENT_ORDER.map((slug) => {
                    const segment = SEGMENTS[slug];
                    return (
                      <div className="bx-seg-row" key={slug}>
                        <span className={`bx-seg-dot ${SEGMENT_ACCENT[slug]}`} aria-hidden="true" />
                        <span>
                          <span className="bx-seg-row-name">{segment.label}</span>
                          <span className="bx-seg-row-tag" style={{ display: 'block' }}>{segment.tagline}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="bx-card-foot">
                  <strong>Since 2012</strong> · <strong>127+</strong> projects · <strong>48</strong> clients · <strong>17+</strong> countries
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== REGION RIBBON ===== */}
        <div className="bx-ribbon">
          <div className="bx-ribbon-inner">
            <div className="bx-ribbon-item"><span className="bx-ic" aria-hidden="true">◆</span> Americas</div>
            <div className="bx-ribbon-item"><span className="bx-ic" aria-hidden="true">◆</span> Europe &amp; UK</div>
            <div className="bx-ribbon-item"><span className="bx-ic" aria-hidden="true">◆</span> GCC &amp; MENA</div>
            <div className="bx-ribbon-item"><span className="bx-ic" aria-hidden="true">◆</span> Bilingual Arabic–English fieldwork</div>
            <div className="bx-ribbon-item"><span className="bx-ic" aria-hidden="true">◆</span> One evidence framework</div>
          </div>
        </div>

        {/* ===== STATS ===== */}
        <section className="bx-stats" aria-label="BioNixus at a glance">
          <div className="bx-stats-inner">
            {TRUST_STATS.map((stat) => (
              <div className="bx-stat" key={stat.label}>
                <div className="bx-stat-num bx-display">{stat.value}</div>
                <div className="bx-stat-label">{stat.label}</div>
                <div className="bx-stat-sub">{stat.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SEGMENTS ===== */}
        <section className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head center">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> Choose your segment <span className="bx-line" />
              </div>
              <h2 className="bx-h2">
                Three connected <em>research segments</em>
              </h2>
              <p className="bx-lead center">
                Pick the segment that matches your decision and go straight to the depth you need. Each one runs to the
                same standard BioNixus built in healthcare.
              </p>
            </div>
            <div className="bx-seg-grid">
              {SEGMENT_ORDER.map((slug) => {
                const segment = SEGMENTS[slug];
                const accent = SEGMENT_ACCENT[slug];
                return (
                  <Link key={slug} to={segment.path} className={`bx-seg-card ${accent}`}>
                    <span className={`bx-seg-icon ${accent}`} aria-hidden="true">
                      {accent === 'teal' ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.35-9.5-8.5C1 9.5 3 6 6.5 6 9 6 11 8 12 9.5 13 8 15 6 17.5 6 21 6 23 9.5 21.5 12.5 19 16.65 12 21 12 21Z" /></svg>
                      ) : accent === 'gold' ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="9" width="7" height="11" rx="1" /><rect x="14" y="4" width="7" height="16" rx="1" /></svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M2 3h3l2.2 12.4a1 1 0 0 0 1 0.8h8.6a1 1 0 0 0 1-0.8L21 7H6" /></svg>
                      )}
                    </span>
                    <h3>{segment.label}</h3>
                    <span className="bx-seg-tag">{segment.tagline}</span>
                    <p>{segment.intro}</p>
                    <span className="bx-seg-go">
                      Enter {segment.navLabel} →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== DARK NARRATIVE ===== */}
        <section className="bx-section dark">
          <div className="bx-dark-bg" aria-hidden="true" />
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className="bx-eyebrow teal">
                <span className="bx-line" /> One firm, three regions
              </div>
              <h2 className="bx-h2 light">
                The Americas, EMEA, and the GCC — under <em>one evidence framework</em>
              </h2>
            </div>
            <div className="bx-narrative">
              <p>
                BioNixus is US-headquartered in Sheridan, Wyoming, with research operations in London and Cairo. That
                structure lets us run American and European programmes to the same standard as our MENA fieldwork — and
                benchmark a launch or a brand across all three regions inside a single evidence framework.
              </p>
              <p>
                In the United States and the wider Americas, our healthcare heritage means studies are held to
                clinical-grade governance: verified respondents, defensible sampling, and analysis built for a decision
                rather than a slide library. Those same standards now carry into our{' '}
                <Link to="/b2b-industries">B2B industries</Link> and{' '}
                <Link to="/b2c-industries">B2C industries</Link> work, and connect back to the{' '}
                <Link to="/healthcare-market-research">healthcare market research hub</Link> where the firm began.
              </p>
            </div>
          </div>
        </section>

        {/* ===== NEXT STEPS ===== */}
        <section className="bx-section">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> Where to go next
              </div>
              <h2 className="bx-h2">
                Keep <em>exploring</em>
              </h2>
            </div>
            <div className="bx-next-grid">
              {NEXT_STEP_LINKS.map((link) => (
                <Link key={link.to} to={link.to} className="bx-next-card">
                  <span className="bx-next-label">
                    {link.label} <span className="bx-next-arrow" aria-hidden="true">→</span>
                  </span>
                  <span className="bx-next-desc">{link.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head center">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> Questions <span className="bx-line" />
              </div>
              <h2 className="bx-h2">
                Frequently asked <em>questions</em>
              </h2>
            </div>
            <div className="bx-faq-wrap">
              {HUB_FAQ.map((item) => (
                <details className="bx-faq" key={item.question}>
                  <summary>
                    {item.question}
                    <span className="bx-faq-icon" aria-hidden="true">+</span>
                  </summary>
                  <p className="bx-faq-a">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="bx-cta-section">
          <div className="bx-cta-card">
            <h2>Plan your next study with BioNixus</h2>
            <p>Tell us the decision in front of you. We will scope the evidence to match it.</p>
            <div className="bx-cta-actions">
              <Link to="/contact" className="bx-btn-gold">Book a discovery call →</Link>
              <Link to="/market-research" className="bx-btn-ghost">See how we work</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
