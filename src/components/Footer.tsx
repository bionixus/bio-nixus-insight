import { useState } from 'react';
import { Linkedin, Facebook, Instagram, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { ClientPortalDialog } from '@/components/ClientPortalDialog';
import {
  INTERNAL_LINK_EXTENDED_GAP_TARGETS,
  INTERNAL_LINK_PRIORITY_TARGETS,
} from '@/lib/internalLinkAmplificationTargets';

const Footer = () => {
  const { pathname } = useLocation();
  const { t, language, isRTL } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const [portalOpen, setPortalOpen] = useState(false);
  const [nlName, setNlName] = useState('');
  const [nlEmail, setNlEmail] = useState('');
  const [nlConsent, setNlConsent] = useState(false);
  const [nlLoading, setNlLoading] = useState(false);
  const [nlStatus, setNlStatus] = useState<'idle' | 'success' | 'already' | 'error'>('idle');
  const f = t.footer as Record<string, string>;

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nlName.trim() || !nlEmail.trim() || !nlConsent) return;
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

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-5">
            <Link to={basePath} className="flex items-center gap-3 mb-6" onClick={handleLogoClick}>
              <img
                src="/bionixus-logo-footer.webp"
                alt="BioNixus — Healthcare Market Research Company"
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
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2">
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
                      disabled={nlLoading || !nlConsent}
                      className="px-4 py-2 rounded-lg bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {nlLoading
                        ? (f.newsletterSubscribing || 'Subscribing...')
                        : (f.newsletterButton || 'Subscribe')}
                    </button>
                  </div>
                  <label className="flex items-start gap-2 text-xs text-primary-foreground/60 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={nlConsent}
                      onChange={(e) => setNlConsent(e.target.checked)}
                      required
                      className="mt-0.5 rounded border-white/30"
                    />
                    <span>
                      I would like to receive monthly EMEA pharma research insights from BioNixus. I can unsubscribe anytime.{' '}
                      <Link to="/privacy" className="text-primary-foreground/80 underline hover:no-underline">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
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

          {/* Company & Offerings — paired with amplification links for crawl completeness */}
          <div className="lg:col-span-4 lg:grid lg:grid-cols-2 gap-10">
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
                  to="/healthcare-market-research/saudi-arabia"
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
                  to="/global-websites"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  Global Websites
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
                  to="/case-studies/cns-case-study"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  CNS and brain health market research case study
                </Link>
              </li>
              <li>
                <Link
                  to="/real-world-evidence"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  Real World Evidence (RWE) for pharma
                </Link>
              </li>
              <li>
                <Link
                  to="/strategic-portfolio"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  Strategic Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  BioNixus Insights Hub
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
                <Link
                  to="/ar/arabic-blog-alsawdyh"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  Arabic guide: Saudi pharmaceutical market research
                </Link>
              </li>
              <li>
                <Link
                  to="/healthcare-market-research/uae"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  Market Research in UAE
                </Link>
              </li>
              <li>
                <Link
                  to="/healthcare-market-research/uae"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  UAE Pharmaceutical Market Research
                </Link>
              </li>
              <li>
                <Link
                  to="/healthcare-market-research-agency-gcc"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  Healthcare Market Research Agency GCC
                </Link>
              </li>
              <li>
                <Link
                  to="/healthcare-market-research/uae"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                >
                  Dubai · UAE
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

            <div>
              <h4 className="font-semibold text-primary-foreground mb-6 uppercase tracking-wide text-sm">
                Regional hubs & methodology
              </h4>
              <ul className="space-y-3">
                {INTERNAL_LINK_PRIORITY_TARGETS.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.95rem]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <details className="mt-5 group">
                <summary className="cursor-pointer text-primary-foreground/85 text-[0.9rem] font-medium underline-offset-4 hover:underline list-none flex items-center gap-2 [&::-webkit-details-marker]:hidden">
                  <span>
                    Expanded index — {INTERNAL_LINK_EXTENDED_GAP_TARGETS.length} additional pages needing inbound links
                  </span>
                  <span className="text-primary-foreground/50 group-open:rotate-90 transition-transform">›</span>
                </summary>
                <p className="text-primary-foreground/55 text-[0.82rem] leading-snug mt-3 mb-3">
                  These routes come from crawler gap reports (&lt;5 inbound internal links). Each appears sitewide in the
                  footer so search engines consistently discover GCC healthcare research, pharma blog articles, localized
                  entry points, and company directory URLs.
                </p>
                <ul className="mt-3 max-h-48 overflow-y-auto pr-1 md:columns-2 md:gap-6 md:column-fill-auto space-y-2">
                  {INTERNAL_LINK_EXTENDED_GAP_TARGETS.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-[0.85rem] break-words inline-block py-0.5"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
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
              to="/terms"
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
