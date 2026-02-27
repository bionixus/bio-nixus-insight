import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages } from '@/lib/i18n';
import { languagePaths } from '@/lib/seo';
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

  const navItems = [
    { href: basePath, label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/blog', label: t.nav.insights },
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
                key={item.href}
                to={item.href}
                className="nav-link text-foreground/80 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
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
              <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                <span>{currentLang?.flag}</span>
                <span className="text-foreground/80">{currentLang?.code.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
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
              to={`${basePath === '/' ? '' : basePath}/contact`}
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
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
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-foreground/80 hover:text-foreground font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/global-websites"
                className="text-foreground/80 hover:text-foreground font-medium"
                onClick={() => setIsOpen(false)}
              >
                Global Sites
              </Link>
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`px-3 py-2 rounded-lg text-sm ${
                      language === lang.code
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {lang.flag}
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
