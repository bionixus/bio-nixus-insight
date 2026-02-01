import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';

/**
 * Case Studies page – ready for external content integration.
 * Links to case studies content (e.g. Notion, PDF, or external URL).
 */
const CaseStudies = () => {
  const { t, language } = useLanguage();
  const basePath = languagePaths[language] || '/';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="section-padding">
          <div className="container-wide">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
              {t.footer.caseStudies}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              European case studies and project examples. Content coming soon.
            </p>
            <Link
              to={basePath}
              className="inline-flex text-primary font-medium hover:underline"
            >
              Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
