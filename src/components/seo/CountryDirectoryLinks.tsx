import { Link } from 'react-router-dom';
import { FolderOpen } from 'lucide-react';
import { DirectoryLinkTile } from '@/components/seo/DirectoryPremium';
import {
  DIRECTORY_COUNTRIES,
  DIRECTORY_ENTITIES,
  DIRECTORY_MASTER_HUB_PATH,
  countryHubPath,
  getDirectoriesForCountry,
  hasCountryHub,
  type DirectoryCountrySlug,
} from '@/data/companyDirectories';

type Props = {
  country: DirectoryCountrySlug;
  /** Path of the current page, omitted from the list. */
  excludePath?: string;
  /** Optional heading override. */
  heading?: string;
  className?: string;
  /** Render as a compact inline list (for hand-written pharma pages). */
  compact?: boolean;
};

/**
 * "Other company directories for {country}" — the shared cross-link block that
 * turns 46 isolated directory pages into a hub-and-spoke cluster. Fed by the
 * registry so new spokes appear on every sibling automatically.
 */
export function CountryDirectoryLinks({ country, excludePath, heading, className = '', compact = false }: Props) {
  const meta = DIRECTORY_COUNTRIES[country];
  if (!meta) return null;
  const items = getDirectoriesForCountry(country).filter((d) => d.path !== excludePath);
  if (items.length === 0) return null;

  const title = heading ?? `More company directories for ${meta.display}`;
  const hubTo = hasCountryHub(country) ? countryHubPath(country) : DIRECTORY_MASTER_HUB_PATH;
  const hubLabel = hasCountryHub(country)
    ? `All ${meta.display} directories`
    : 'All company directories';

  if (compact) {
    return (
      <div className={className} data-country-directory-links>
        <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
          <FolderOpen className="w-4 h-4 text-primary" aria-hidden />
          {title}
        </p>
        <ul className="flex flex-wrap gap-2 text-sm">
          {items.map((d) => (
            <li key={d.path}>
              <Link
                to={d.path}
                className="inline-flex min-h-11 items-center rounded-full border border-[#EDE9E3] bg-[#FFFEFB] px-3.5 py-1.5 text-foreground hover:border-[#C9A84C] hover:text-[#8A6A12] transition-colors"
              >
                {DIRECTORY_ENTITIES[d.entity].labelPlural}
              </Link>
            </li>
          ))}
          <li>
            <Link to={hubTo} className="inline-flex rounded-full bg-primary/10 px-3 py-1 font-medium text-primary hover:underline">
              {hubLabel} &rarr;
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className={className} data-country-directory-links>
      <h3 className="text-xl font-display font-semibold text-foreground mb-2 flex items-center gap-2">
        <FolderOpen className="w-5 h-5 text-[#C9A84C]" aria-hidden />
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 max-w-3xl">
        The other named-account lists BioNixus maintains for {meta.display}. Each one links to the matching proposal
        form and research brief.
      </p>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((d) => (
          <li key={d.path}>
            <DirectoryLinkTile to={d.path} title={DIRECTORY_ENTITIES[d.entity].labelPlural} />
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <Link to={hubTo} className="text-primary font-medium hover:underline">
          {hubLabel} &rarr;
        </Link>
      </p>
    </div>
  );
}
