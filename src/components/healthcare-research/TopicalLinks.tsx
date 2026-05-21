import { Link } from 'react-router-dom';

interface TopicalLink {
  to: string;
  title: string;
  description: string;
}

interface TopicalLinksProps {
  title: string;
  links: TopicalLink[];
  variant?: 'card' | 'pill';
}

export function TopicalLinks({ title, links, variant = 'card' }: TopicalLinksProps) {
  if (links.length === 0) return null;

  if (variant === 'pill') {
    return (
      <section className="py-10 bg-muted/20">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-xl font-display font-semibold text-foreground mb-4">{title}</h2>
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-full border border-border bg-background text-sm text-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-muted/30">
      <div className="container-wide max-w-6xl mx-auto">
        <h2 className="text-2xl font-display font-semibold text-foreground mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">{link.title}</h3>
              <p className="text-sm text-muted-foreground">{link.description}</p>
              <span className="text-primary text-sm font-medium mt-3 inline-block">
                Read more
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
