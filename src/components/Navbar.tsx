import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe2, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages } from '@/lib/i18n';
import {
  getLocalizedPathForLanguage,
  languagePaths,
  localizedContactPath,
  resolveLanguageSwitchPath,
} from '@/lib/seo';
import { formatTemplate } from '@/lib/uiChromeStrings';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const ui = t.ui;
  const basePath = languagePaths[language] || '/';
  const contactPath = localizedContactPath(language);
  const globalSitesHref = getLocalizedPathForLanguage('/healthcare-market-research', language);

  const normalizedPathname = pathname.split('?')[0].replace(/\/$/, '') || '/';

  const isActiveHref = (href: string) => {
    const h = href.replace(/\/$/, '') || '/';
    return normalizedPathname === h;
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleLogoClick = () => {
    const isHome =
      pathname === '/' ||
      pathname === '/de' ||
      pathname === '/fr' ||
      pathname === '/es' ||
      pathname === '/zh' ||
      pathname === '/ar' ||
      pathname.startsWith('/zh/');
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (code: typeof language) => {
    setLanguage(code);
    navigate(resolveLanguageSwitchPath(pathname, code));
    setIsOpen(false);
  };

  const currentLang = languages.find(l => l.code === language);

  // Every entry resolves through the localized route groups so navigating never drops the
  // language prefix — LanguageContext derives the UI language from the URL, so a bare
  // /about link silently flips the whole site back to English.
  const navItems = [
    { key: 'home', href: basePath, label: t.nav.home },
    { key: 'about', href: getLocalizedPathForLanguage('/about', language), label: t.nav.about },
    { key: 'services', href: getLocalizedPathForLanguage('/services', language), label: t.nav.services },
    {
      key: 'industries',
      href: getLocalizedPathForLanguage('/bionixus-industries', language),
      label: t.nav.industries,
    },
    { key: 'insights', href: getLocalizedPathForLanguage('/blog', language), label: t.nav.insights },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-wide section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo – links to home, scrolls to hero when already on home */}
          <Link to={basePath} className="flex items-center gap-3" onClick={handleLogoClick}>
            <img
              src="/bionixus-logo.webp"
              alt="BioNixus — Global Market Research for Pharma, Healthcare & Industries"
              className="h-9 w-auto object-contain"
              width={126}
              height={36}
              decoding="async"
              fetchPriority="low"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`nav-link hover:text-foreground ${
                  isActiveHref(item.href) ? 'text-foreground font-medium' : 'text-foreground/80'
                }`}
                aria-current={isActiveHref(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to={globalSitesHref}
              aria-label={ui.nav.globalSites}
              className="group relative p-2 rounded-lg border border-border bg-background text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
            >
              <Globe2 className="w-4 h-4" />
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                {ui.nav.globalSites}
              </span>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`${ui.nav.language}: ${currentLang?.name ?? 'English'}`}
              >
                <span aria-hidden>{currentLang?.flag}</span>
                <span className="text-foreground/80">{currentLang?.code.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[150px]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`cursor-pointer ${language === lang.code ? 'bg-muted' : ''}`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to={contactPath}
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              aria-current={isActiveHref(contactPath) ? 'page' : undefined}
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            {...(isOpen ? { 'aria-controls': 'mobile-primary-nav' } : {})}
            aria-label={isOpen ? ui.nav.closeMenu : ui.nav.openMenu}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="mobile-primary-nav"
            className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`font-medium hover:text-foreground ${
                    isActiveHref(item.href) ? 'text-foreground' : 'text-foreground/80'
                  }`}
                  aria-current={isActiveHref(item.href) ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to={globalSitesHref}
                className="text-foreground/80 hover:text-foreground font-medium"
                onClick={() => setIsOpen(false)}
              >
                {ui.nav.globalSites}
              </Link>
              <Link
                to={contactPath}
                className="px-5 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm text-center hover:opacity-90 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.contact}
              </Link>
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground w-full sm:w-auto">{ui.nav.language}</span>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleLanguageChange(lang.code)}
                    aria-label={formatTemplate(
                      language === lang.code ? ui.nav.languageCurrent : ui.nav.languageSwitchTo,
                      { language: lang.name },
                    )}
                    aria-pressed={language === lang.code}
                    className={`px-3 py-2 rounded-lg text-sm ${
                      language === lang.code
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <span aria-hidden>{lang.flag}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
