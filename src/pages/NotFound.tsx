import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();
  const { t, language } = useLanguage();
  const basePath = languagePaths[language] || '/';

  useEffect(() => {
    document.title = `404 - ${t.notFound.message} | BioNixus`;
  }, [t.notFound.message]);

  useEffect(() => {
    console.error('404: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center section-padding">
        <div className="text-center max-w-md">
          <h1 className="text-8xl md:text-9xl font-display font-bold text-primary/20 mb-4">
            {(t as { notFound?: { title: string } }).notFound?.title ?? '404'}
          </h1>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
            {(t as { notFound?: { message: string } }).notFound?.message ?? 'Page not found'}
          </h2>
          <p className="text-muted-foreground mb-8">
            {(t as { notFound?: { description: string } }).notFound?.description ??
              'The page you are looking for does not exist or has been moved.'}
          </p>
          <Link
            to={basePath}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Home className="w-5 h-5" />
            {(t as { notFound?: { backHome: string } }).notFound?.backHome ?? 'Return to Home'}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
