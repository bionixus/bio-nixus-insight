import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { SEGMENTS, SEGMENT_ORDER, type SegmentSlug } from '@/data/bionixusIndustrySegments';
import { COMPANY_BOILERPLATE_SHORT } from '@/data/companyStory';
import { PREMIUM_INDUSTRIES_CSS } from './premiumIndustriesCss';

const HUB_PATH = '/bionixus-industries';

const HUB_TITLE = 'Market Research Across Industries | BioNixus';
const HUB_DESCRIPTION = COMPANY_BOILERPLATE_SHORT;

/** Per-segment accent used to colour the cards and markers. */
const SEGMENT_ACCENT: Record<SegmentSlug, string> = {
  'pharma-healthcare': 'teal',
  b2b: 'gold',
  b2c: 'coral',
};

const TRUST_STATS = [
  { value: '2012', label: 'Founded in London', sub: 'UK pharmaceutical research roots' },
  { value: '127+', label: 'Projects delivered', sub: 'across 38 countries' },
  { value: '48', label: 'Clients served', sub: 'pharma to consumer' },
  { value: '16', label: 'Industry verticals', sub: 'and growing' },
];

const NEXT_STEP_LINKS = [
  {
    to: '/bionixus-industries/insights',
    label: 'Industry insights — B2B & B2C',
    description: 'Articles on FMCG, technology, retail, and enterprise research across MENA.',
  },
  {
    to: '/market-research-by-industry',
    label: 'Industries index — GCC & MENA (7 markets)',
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
      'No. Healthcare and pharmaceutical research is where BioNixus was founded in London in 2012 and where it leads, but the same sampling discipline and senior-led analysis now extend to B2B and B2C categories through the B2B industries and B2C industries sections.',
  },
  {
    question: 'Where is BioNixus based and which regions does it cover?',
    answer:
      'BioNixus was founded in London in 2012, is US-headquartered in Sheridan, Wyoming, and runs MENA programmes from a regional office in Greater Cairo. That footprint supports programmes across the Americas, Europe, and the GCC under one evidence framework, with bilingual Arabic–English fieldwork in MENA.',
  },
  {
    question: 'How are the three industry segments connected?',
    answer:
      'This hub is the deliberate bridge between them. The pharma & healthcare silo links to deep country and therapy coverage, while the B2B and B2C sections apply the same standards to non-healthcare categories. Use the segment cards above to enter the section you need.',
  },
];


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
      <style dangerouslySetInnerHTML={{ __html: PREMIUM_INDUSTRIES_CSS }} />
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
                One research firm <em>guiding every industry we serve</em>
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
                  <strong>Since 2012</strong> · <strong>127+</strong> projects · <strong>48</strong> clients · <strong>38</strong> countries
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
            <div className="bx-ribbon-item"><span className="bx-ic" aria-hidden="true">◆</span> Asia-Pacific</div>
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
