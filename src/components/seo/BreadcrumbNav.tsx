import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbNav({ items, className }: { items: BreadcrumbItem[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn('py-3 px-4 text-sm text-muted-foreground', className)}>
      <ol className="flex items-center flex-wrap gap-y-1">
        {items.map((item, index) => (
          <li key={`${item.href}-${item.name}`} className="flex items-center">
            {index > 0 ? <span className="mx-2 text-border">/</span> : null}
            {index === items.length - 1 ? (
              <span className="text-foreground font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link to={item.href} className="hover:text-primary transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

