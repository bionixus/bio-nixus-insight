import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { ArrowRight, Zap, Globe, FileCheck } from 'lucide-react';

type ContactPageCopy = {
  heroTitle?: string;
  heroSubtitle?: string;
  statLine?: string;
  badges?: string[];
};

const Contact = () => {
  const { t, language, isRTL } = useLanguage();
  const cp = (t as { contactPage?: ContactPageCopy }).contactPage;
  const heroTitle = cp?.heroTitle ?? t.contact.title;
  const heroSubtitle = cp?.heroSubtitle ?? t.contact.subtitle;
  const statLine = cp?.statLine ?? '';
  const badges = cp?.badges ?? [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Catchy hero for pharma – encourage get in touch */}
        <section className="relative section-padding pt-28 pb-16 bg-gradient-to-b from-primary/5 to-background border-b border-border">
          <div className="container-wide max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Get in touch
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4 text-balance">
              {heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              {heroSubtitle}
            </p>
            {statLine && (
              <p className="text-sm text-muted-foreground mb-8">
                {statLine}
              </p>
            )}
            {badges.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3">
                {badges.map((badge, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-foreground/90 text-sm font-medium"
                  >
                    {i === 0 && <Zap className="w-4 h-4 text-primary" />}
                    {i === 1 && <Globe className="w-4 h-4 text-primary" />}
                    {i === 2 && <FileCheck className="w-4 h-4 text-primary" />}
                    {badge}
                  </span>
                ))}
              </div>
            )}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity group"
            >
              Request a proposal
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'rtl:scale-x-[-1] group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </a>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
