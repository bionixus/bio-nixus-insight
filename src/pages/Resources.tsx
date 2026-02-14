import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, BarChart3, Globe, Microscope } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';

interface Resource {
  title: string;
  description: string;
  type: string;
  icon: React.ReactNode;
  comingSoon?: boolean;
}

const resources: Resource[] = [
  {
    title: 'MENA Pharmaceutical Market Guide 2026',
    description: 'Comprehensive overview of the pharmaceutical landscape across UAE, Saudi Arabia, Egypt, Kuwait, and Qatar — regulatory frameworks, market sizing, and key trends.',
    type: 'Market Guide',
    icon: <Globe className="w-6 h-6" />,
    comingSoon: true,
  },
  {
    title: 'Physician Survey Methodology Whitepaper',
    description: 'Our approach to large-scale quantitative physician surveys across EMEA — sample design, recruitment strategies, quality assurance, and statistical analysis.',
    type: 'Whitepaper',
    icon: <FileText className="w-6 h-6" />,
    comingSoon: true,
  },
  {
    title: 'Market Access in the GCC — A Practical Guide',
    description: 'Navigate pricing, reimbursement, and formulary access across Saudi Arabia, UAE, Kuwait, and Qatar. Regulatory bodies, submission processes, and timelines.',
    type: 'Guide',
    icon: <BarChart3 className="w-6 h-6" />,
    comingSoon: true,
  },
  {
    title: 'KOL Mapping Best Practices in EMEA',
    description: 'How to identify, tier, and engage Key Opinion Leaders across European and MENA markets for pharmaceutical launch and medical affairs programmes.',
    type: 'Best Practices',
    icon: <Microscope className="w-6 h-6" />,
    comingSoon: true,
  },
];

const Resources = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Resources | BioNixus — Healthcare Market Research Guides & Whitepapers</title>
        <meta
          name="description"
          content="Download healthcare market research resources from BioNixus: MENA pharmaceutical market guides, physician survey methodology whitepapers, GCC market access guides, and KOL mapping best practices."
        />
        <link rel="canonical" href="https://www.bionixus.com/resources" />
      </Helmet>
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <Link
              to={basePath}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>
          </div>
        </div>

        <section className="section-padding pt-4 pb-16">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Resources
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              Guides, Whitepapers & Market Intelligence
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
              Practical resources from our healthcare market research practice. Download guides, whitepapers, and market intelligence reports to inform your pharmaceutical strategy.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((res, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-8 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {res.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded">
                      {res.type}
                    </span>
                  </div>
                  <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                    {res.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {res.description}
                  </p>
                  {res.comingSoon ? (
                    <span className="inline-flex items-center gap-2 text-muted-foreground text-sm font-medium">
                      Coming Soon
                    </span>
                  ) : (
                    <button className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline">
                      <Download className="w-4 h-4" /> Download PDF
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center p-8 bg-cream-dark rounded-xl">
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                Need a custom report?
              </h2>
              <p className="text-muted-foreground mb-6">
                We create bespoke research reports and market intelligence for pharmaceutical companies. Tell us what you need.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Request a Proposal
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
