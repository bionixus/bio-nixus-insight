import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbNav({
  items,
  className,
  tone = 'light',
}: {
  items: BreadcrumbItem[];
  className?: string;
  /** Use on midnight heroes so crumbs stay readable. */
  tone?: 'light' | 'on-dark';
}) {
  const onDark = tone === 'on-dark';
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('py-3 px-4 text-sm', onDark ? 'text-white/55' : 'text-muted-foreground', className)}
    >
      <ol className="flex items-center flex-wrap gap-y-1">
        {items.map((item, index) => (
          <li key={`${item.href}-${item.name}`} className="flex items-center">
            {index > 0 ? <span className={cn('mx-2', onDark ? 'text-white/25' : 'text-border')}>/</span> : null}
            {index === items.length - 1 ? (
              <span className={cn('font-medium', onDark ? 'text-white' : 'text-foreground')} aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                to={item.href}
                className={cn(
                  'transition-colors',
                  onDark ? 'hover:text-[#E8C56A]' : 'hover:text-primary',
                )}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

