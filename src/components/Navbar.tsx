import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages } from '@/lib/i18n';
import { getLocalizedPathForLanguage, languagePaths } from '@/lib/seo';
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
  const basePath = languagePaths[language] || '/';
  const localizedContactPath =
    language === 'fr' ? '/fr/contacts' : language === 'ar' ? '/ar/contacts' : `${basePath === '/' ? '' : basePath}/contact`;

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
    const path = languagePaths[code] || '/';
    navigate(path);
    setIsOpen(false);
  };

  const currentLang = languages.find(l => l.code === language);

  const insightsHref = getLocalizedPathForLanguage('/blog', language);

  const navItems = [
    { key: 'home', href: basePath, label: t.nav.home },
    { key: 'about', href: '/about', label: t.nav.about },
    { key: 'services', href: '/services', label: t.nav.services },
    { key: 'insights', href: insightsHref, label: t.nav.insights },
  ];

  const healthcareMarketCountries = [
    { label: 'Europe', href: '/healthcare-market-research/europe' },
    { label: 'UK', href: '/healthcare-market-research/uk' },
    { label: 'Saudi Arabia', href: '/healthcare-market-research/saudi-arabia' },
    { label: 'UAE', href: '/healthcare-market-research/uae' },
    { label: 'Kuwait', href: '/healthcare-market-research/kuwait' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-wide section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo – links to home, scrolls to hero when already on home */}
          <Link to={basePath} className="flex items-center gap-3" onClick={handleLogoClick}>
            <img
              src="/bionixus-logo.webp"
              alt="BioNixus"
              className="h-9 w-auto object-contain"
              width={126}
              height={36}
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
            <DropdownMenu>
              <DropdownMenuTrigger
                type="button"
                className="nav-link text-foreground/80 hover:text-foreground inline-flex items-center gap-1 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Healthcare market research regions and hub"
              >
                Healthcare Market Research
                <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="min-w-[240px]">
                <DropdownMenuItem asChild>
                  <Link to="/healthcare-market-research" className="cursor-pointer">
                    EMEA Healthcare Research Hub
                  </Link>
                </DropdownMenuItem>
                {healthcareMarketCountries.map((country) => (
                  <DropdownMenuItem key={country.href} asChild>
                    <Link to={country.href} className="cursor-pointer">
                      {country.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/global-websites"
              aria-label="Global Sites"
              className="group relative p-2 rounded-lg border border-border bg-background text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
            >
              <Globe2 className="w-4 h-4" />
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                Global Sites
              </span>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`Language: ${currentLang?.name ?? 'English'}`}
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
              to={localizedContactPath}
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              aria-current={isActiveHref(localizedContactPath) ? 'page' : undefined}
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
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
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
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                  Healthcare market research
                </p>
                <Link
                  to="/healthcare-market-research"
                  className="text-foreground/80 hover:text-foreground font-medium block mb-3"
                  onClick={() => setIsOpen(false)}
                >
                  EMEA Healthcare Research Hub
                </Link>
                <div className="pl-3 border-l border-border space-y-2">
                  {healthcareMarketCountries.map((country) => (
                    <Link
                      key={country.href}
                      to={country.href}
                      className="block text-sm text-foreground/70 hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {country.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/global-websites"
                className="text-foreground/80 hover:text-foreground font-medium"
                onClick={() => setIsOpen(false)}
              >
                Global Sites
              </Link>
              <Link
                to={localizedContactPath}
                className="px-5 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm text-center hover:opacity-90 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.contact}
              </Link>
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground w-full sm:w-auto">Language</span>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleLanguageChange(lang.code)}
                    aria-label={
                      language === lang.code ? `${lang.name}, current language` : `Switch language to ${lang.name}`
                    }
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
