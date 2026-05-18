import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const StickyCTA = () => {
  const { pathname } = useLocation();
  const hidden =
    pathname === '/contact' ||
    pathname === '/de/contact' ||
    pathname === '/fr/contacts' ||
    pathname === '/ar/contacts';

  if (hidden) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary/95 backdrop-blur-sm border-t border-primary-foreground/10 px-4 py-3 safe-area-bottom">
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2 w-full rounded-lg bg-white text-primary font-semibold py-3 text-sm hover:bg-white/90 transition-colors"
      >
        Request a proposal <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default StickyCTA;
