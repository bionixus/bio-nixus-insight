import { alsaadanyProfileUrl } from '@/data/editorialAuthors';

/**
 * Renders a person's name. Mohammad Alsaadany's name (and the Arabic form)
 * is a followed link to his profile. Other names stay plain text.
 */
export function PersonNameLink({
  name,
  className,
  byline = true,
}: {
  name: string;
  className?: string;
  /** Author bylines and author bio names use rel="author". */
  byline?: boolean;
}) {
  const href = alsaadanyProfileUrl(name);
  if (!href) {
    return className ? <span className={className}>{name}</span> : <>{name}</>;
  }
  return (
    <a href={href} rel={byline ? 'author' : undefined} className={className}>
      {name}
    </a>
  );
}
