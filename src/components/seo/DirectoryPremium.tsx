import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import type { DirectoryCompanyEntry, DirectoryCompanyType } from '@/data/companyDirectories';

export type DirectoryJumpItem = { href: string; label: string };

export type DirectoryBreadcrumb = { name: string; href: string };

export const TYPE_BADGE: Record<DirectoryCompanyType, string> = {
  Local: 'bg-[#E8F3EE] text-[#1B5E45]',
  MNC: 'bg-[#E8EDF5] text-[#14233E]',
  Regional: 'bg-[#FBF3E0] text-[#8A6A12]',
  Distributor: 'bg-[#F3EEF7] text-[#5B3A75]',
  Retailer: 'bg-[#F3EEF7] text-[#5B3A75]',
  Developer: 'bg-[#F3EEF7] text-[#5B3A75]',
  Operator: 'bg-[#F3EEF7] text-[#5B3A75]',
  Government: 'bg-[#EEECE8] text-[#3D3A34]',
};

export function formatDirectoryDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function DirectoryHero({
  breadcrumbs,
  kicker,
  h1,
  lead,
  rest,
  stats,
  metaLine,
  actions,
}: {
  breadcrumbs: DirectoryBreadcrumb[];
  kicker: string;
  h1: string;
  lead: ReactNode;
  rest?: ReactNode;
  stats: { value: string; label: string }[];
  metaLine?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="directory-hero pt-28 md:pt-32 pb-14 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="directory-hero-inner container-wide max-w-6xl mx-auto">
        <BreadcrumbNav items={breadcrumbs} className="px-0 mb-8" tone="on-dark" />
        <p className="directory-kicker mb-5">{kicker}</p>
        <h1 className="text-3xl md:text-4xl lg:text-[3.25rem] font-display font-semibold tracking-tight text-white mb-6 max-w-4xl text-balance leading-[1.12]">
          {h1}
        </h1>
        <div className="text-lg md:text-xl text-white/78 leading-relaxed max-w-3xl mb-4 [&_a]:text-[#E8C56A] [&_a]:underline">{lead}</div>
        {rest ? <div className="text-[15px] text-white/62 leading-relaxed max-w-3xl mb-6 [&_a]:text-[#E8C56A] [&_a]:underline">{rest}</div> : null}
        {metaLine ? <p className="text-xs tracking-wide text-white/45 mb-8">{metaLine}</p> : null}
        {actions ? <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">{actions}</div> : null}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="directory-stat">
              <p className="directory-stat-value">{stat.value}</p>
              <p className="directory-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DirectoryJumpNav({ items }: { items: DirectoryJumpItem[] }) {
  if (items.length === 0) return null;
  return (
    <nav className="directory-jump" aria-label="On this page">
      <div className="container-wide max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="directory-jump-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function DirectorySection({
  id,
  eyebrow,
  title,
  body,
  children,
  surface = 'ivory',
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  body?: ReactNode;
  children: ReactNode;
  surface?: 'ivory' | 'cream';
}) {
  return (
    <section
      className={`section-padding py-16 md:py-20 scroll-mt-28 ${surface === 'cream' ? 'directory-cream' : 'directory-ivory'}`}
      id={id}
    >
      <div className="container-wide max-w-6xl mx-auto">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C9A84C] mb-3">{eyebrow}</p>
        ) : null}
        {title ? (
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3 max-w-3xl text-balance">
            {title}
          </h2>
        ) : null}
        {body ? <div className="text-muted-foreground mb-10 max-w-3xl leading-relaxed">{body}</div> : null}
        {children}
      </div>
    </section>
  );
}

export function DirectoryLinkTile({ to, title, sub }: { to: string; title: string; sub?: string }) {
  return (
    <Link to={to} className="directory-tile group">
      <span className="min-w-0">
        <span className="block font-semibold text-foreground">{title}</span>
        {sub ? <span className="block text-xs text-muted-foreground mt-0.5">{sub}</span> : null}
      </span>
      <ArrowRight
        className="w-4 h-4 shrink-0 text-[#C9A84C] transition-transform group-hover:translate-x-1"
        aria-hidden
      />
    </Link>
  );
}

export function DirectoryGoldLink({ to, children }: { to: string; children: ReactNode }) {
  if (to.startsWith('#')) {
    return (
      <a href={to} className="premium-gold-btn">
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className="premium-gold-btn">
      {children}
    </Link>
  );
}

export function DirectoryOutlineLink({ href, children }: { href: string; children: ReactNode }) {
  const className =
    'inline-flex items-center justify-center gap-2 min-h-11 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/8 transition-colors';
  if (href.startsWith('#')) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

export function DirectoryCompanyTable({
  companies,
  focusColumn,
}: {
  companies: DirectoryCompanyEntry[];
  focusColumn: string;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[#EDE9E3] shadow-[0_16px_50px_rgba(6,16,31,0.05)]">
      <table className="directory-table">
        <thead>
          <tr>
            <th scope="col" className="w-12">
              #
            </th>
            <th scope="col">Company</th>
            <th scope="col">HQ</th>
            <th scope="col" className="hidden md:table-cell">
              Type
            </th>
            <th scope="col" className="hidden lg:table-cell">
              {focusColumn}
            </th>
            <th scope="col" className="hidden xl:table-cell">
              Notes
            </th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={company.name}>
              <td className="directory-rank">{String(index + 1).padStart(2, '0')}</td>
              <td className="font-semibold text-foreground">{company.name}</td>
              <td className="text-muted-foreground">{company.hq}</td>
              <td className="hidden md:table-cell">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${TYPE_BADGE[company.type]}`}
                >
                  {company.type}
                </span>
              </td>
              <td className="text-muted-foreground hidden lg:table-cell">{company.focus}</td>
              <td className="text-muted-foreground text-xs hidden xl:table-cell">{company.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DirectoryCategoryCard({
  title,
  icon,
  blurb,
  names,
}: {
  title: string;
  icon: ReactNode;
  blurb: string;
  names: string[];
}) {
  return (
    <div className="premium-card p-6 md:p-7">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-xl bg-[#F4F2ED] border border-[#EDE9E3] flex items-center justify-center text-[#C9A84C]">
          {icon}
        </div>
        <h3 className="text-lg font-display font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{blurb}</p>
      {names.length > 0 ? (
        <ul className="space-y-2 text-sm text-foreground">
          {names.map((name) => (
            <li key={name} className="flex items-start gap-2">
              <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A84C]" aria-hidden />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function DirectoryDriverCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="premium-card p-6 md:p-7">
      <h3 className="text-lg font-display font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

export function DirectoryFaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="premium-faq space-y-3">
      {items.map((faq) => (
        <details key={faq.q} className="group">
          <summary className="flex items-center justify-between cursor-pointer gap-4 text-left text-[15px] font-semibold text-foreground hover:text-[#8A6A12] list-none [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <span>{faq.q}</span>
            <span className="text-[#C9A84C] shrink-0" aria-hidden>
              ▾
            </span>
          </summary>
          <p className="text-sm text-muted-foreground leading-relaxed px-6 pb-5 border-t border-[#EDE9E3] pt-4">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
