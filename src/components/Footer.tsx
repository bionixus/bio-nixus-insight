import { useState } from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { ClientPortalDialog } from '@/components/ClientPortalDialog';

const Footer = () => {
  const { pathname } = useLocation();
  const { t, language, isRTL } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const [portalOpen, setPortalOpen] = useState(false);

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
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to={basePath} className="flex items-center gap-3 mb-6" onClick={handleLogoClick}>
              <img
                src="/bionixus-logo-footer.png"
                alt="BioNixus"
                className="h-10 w-auto object-contain [filter:brightness(0)_invert(1)]"
              />
            </Link>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/bionixus/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="https://www.facebook.com/Bionixus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="https://www.instagram.com/bionixus_?igsh=MWhuZnAycms3Nm13bQ==&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-6 uppercase tracking-wide text-sm">
              {t.footer.companyHeading}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to={`${basePath}#about`}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}#services`}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  {t.footer.services}
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}#insights`}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  {t.footer.insights}
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
                  to="/case-studies"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  {t.footer.caseStudies}
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
