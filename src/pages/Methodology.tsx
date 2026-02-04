import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MethodologySection from '@/components/MethodologySection';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';

const Methodology = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';

  return (
    <div className="min-h-screen bg-background">
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
        <MethodologySection />
      </main>
      <Footer />
    </div>
  );
};

export default Methodology;
