import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI Chatbots for Pharma Insight and Lead Generation',
    publisher: { '@type': 'Organization', name: 'BioNixus' },
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    {
      name: 'AI Chatbots Increase Sales and Lead Generation',
      href: '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
    },
  ]),
];

export default function AiChatbotsLeadGeneration() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="AI Chatbots in Pharmaceutical Market Research | BioNixus"
        description="How AI chatbots support lead qualification, stakeholder insight capture, and faster evidence workflows in healthcare market research."
        canonical="/bionixus-ai-chatbots-increase-sales-and-lead-generation"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            {
              name: 'AI Chatbots Increase Sales and Lead Generation',
              href: '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
            },
          ]}
        />
        <section className="py-16">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-4xl font-display font-semibold text-foreground mb-4">
              AI Chatbots for Healthcare Market Research and Lead Generation
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AI chat interfaces can improve intake quality, route leads more intelligently, and surface recurring
              decision questions from healthcare stakeholders.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At BioNixus, this topic is most valuable when tied to practical pharmaceutical research outcomes, such as
              better qualification logic, stronger triage of inquiry themes, and faster conversion from first contact to
              proposal.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If your priority is core market intelligence, visit our{' '}
              <Link to="/market-research" className="text-primary underline">
                market research services hub
              </Link>
              .
            </p>
          </div>
        </section>
        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
}
