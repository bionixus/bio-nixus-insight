import { Linkedin, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { pathname } = useLocation();
  const { t } = useLanguage();

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary section-padding py-16">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6" onClick={handleLogoClick}>
              <img
                src="/bionixus-logo.png"
                alt="BioNixus"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              {t.footer.tagline}. Delivering evidence-based insights to pharmaceutical and biotech leaders worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/#insights" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.insights}
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-6">{t.nav.contact}</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>{t.contact.email}</li>
              <li>+44 7727 666682</li>
              <li>{t.contact.headquarters}</li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            {t.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
