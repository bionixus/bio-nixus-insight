import { useState } from 'react';
import { Linkedin, Facebook, Instagram, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { ClientPortalDialog } from '@/components/ClientPortalDialog';

const Footer = () => {
  const { pathname } = useLocation();
  const { t, language, isRTL } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const [portalOpen, setPortalOpen] = useState(false);
  const [nlName, setNlName] = useState('');
  const [nlEmail, setNlEmail] = useState('');
  const [nlLoading, setNlLoading] = useState(false);
  const [nlStatus, setNlStatus] = useState<'idle' | 'success' | 'already' | 'error'>('idle');
  const f = t.footer as Record<string, string>;

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nlName.trim() || !nlEmail.trim()) return;
    setNlLoading(true);
    setNlStatus('idle');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: nlName.trim(), email: nlEmail.trim(), language }),
      });
      const data = await res.json();
      if (data.success && data.alreadySubscribed) {
        setNlStatus('already');
      } else if (data.success) {
        setNlStatus('success');
        setNlName('');
        setNlEmail('');
      } else {
        setNlStatus('error');
      }
    } catch {
      setNlStatus('error');
    } finally {
      setNlLoading(false);
    }
  };

  const handleLogoClick = () => {
    const isHome =
      pathname === '/' ||
      pathname === '/de' ||
      pathname === '/ar' ||
      pathname === '/fr' ||
      pathname === '/es' ||
      pathname === '/zh' ||
      pathname.startsWith('/zh/');
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      className={`bg-primary section-padding py-16 ${isRTL ? 'text-right' : ''}`}
      data-lang={language}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container-wide">
        {/* Tagline */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <p className="text-primary-foreground/70 text-base leading-relaxed max-w-[900px]">
            {t.footer.tagline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-2">
            <Link to={basePath} className="flex items-center gap-3 mb-6" onClick={handleLogoClick}>
              <img
                src="/bionixus-logo-footer.webp"
                alt="BioNixus"
                className="h-10 w-auto object-contain [filter:brightness(0)_invert(1)]"
                width={200}
                height={80}
                loading="lazy"
                decoding="async"
              />
            </Link>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold text-primary-foreground mb-2 uppercase tracking-wide text-sm flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {f.newsletterHeading || 'Newsletter'}
              </h4>
              <p className="text-primary-foreground/60 text-sm mb-3">
                {f.newsletterDesc || 'Get healthcare insights delivered to your inbox.'}
              </p>
              {nlStatus === 'already' ? (
                <p className="text-amber-300 text-sm font-medium">
                  ✉ {f.newsletterAlready || 'You are already subscribed — check your email for our latest updates!'}
                </p>
              ) : nlStatus === 'success' ? (
                <p className="text-green-300 text-sm font-medium">
                  ✓ {f.newsletterSuccess || 'Check your email to verify!'}
                </p>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={nlName}
                    onChange={(e) => setNlName(e.target.value)}
                    placeholder={f.newsletterPlaceholder || 'Your name'}
                    required
                    className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-white/40 transition-colors"
                  />
                  <input
                    type="email"
                    value={nlEmail}
                    onChange={(e) => setNlEmail(e.target.value)}
                    placeholder={f.newsletterEmailPlaceholder || 'Work email'}
                    required
                    className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-white/40 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={nlLoading}
                    className="px-4 py-2 rounded-lg bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {nlLoading
                      ? (f.newsletterSubscribing || 'Subscribing...')
                      : (f.newsletterButton || 'Subscribe')}
                  </button>
                </form>
              )}
              {nlStatus === 'error' && (
                <p className="text-red-300 text-sm mt-1">
                  {f.newsletterError || 'Something went wrong. Try again.'}
                </p>
              )}
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/bionixus/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BioNixus on LinkedIn"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="https://www.facebook.com/Bionixus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BioNixus on Facebook"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="https://www.instagram.com/bionixus_?igsh=MWhuZnAycms3Nm13bQ==&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BioNixus on Instagram"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Company & Offerings */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-6 uppercase tracking-wide text-sm">
              {t.footer.companyHeading || 'Company & Offerings'}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/market-research"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  Market Research Hub
                </Link>
              </li>
              <li>
                <Link
                  to="/market-research-saudi-arabia-pharmaceutical"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  Saudi Pharma Market Research
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  {t.footer.services}
                </Link>
              </li>
              <li>
                <Link
                  to="/healthcare-market-research"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  Healthcare Market Research Hub
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  {t.footer.caseStudies}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  Insights & Blog
                </Link>
              </li>
              <li>
                <a
                  href="https://careers.bionixus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  {t.footer.careers}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setPortalOpen(true)}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem] text-left"
                >
                  {t.footer.clientsPortal}
                </button>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-6 uppercase tracking-wide text-sm">
              {t.footer.contactHeading}
            </h4>
            <ul className="space-y-3 text-primary-foreground/70 text-[0.95rem]">
              <li>
                <a
                  href="mailto:admin@bionixus.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  admin@bionixus.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/cqLtV7gy8jGxq4JV8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  {t.footer.locationUs}
                </a>
              </li>
              <li>
                <a
                  href="tel:+18884655557"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +1 888 465 5557
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=128+City+Road,+London,+England+EC1V+2NX,+GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="128 City Road, London, England EC1V 2NX, GB"
                  className="hover:text-primary-foreground transition-colors"
                >
                  {t.footer.locationUk}
                </a>
              </li>
              <li>
                <a
                  href="tel:+447727666682"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +44 7727 666682
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}
        >
          <p className="text-primary-foreground/60 text-sm m-0">{t.footer.copyright}</p>
          <div className={`flex gap-8 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link
              to="/privacy"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              to="/privacy#terms"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
      <ClientPortalDialog open={portalOpen} onOpenChange={setPortalOpen} />
    </footer>
  );
};

export default Footer;
