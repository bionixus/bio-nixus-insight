/**
 * AudienceMosaic — a clustered set of abstract duotone avatars representing the
 * real audiences BioNixus researches (HCPs, KOLs, patients, payers,
 * pharmacists, consumers). Used in the staging hero/"who we reach" section and,
 * in compact form, inside the exit-intent popup.
 */
import DuotoneAvatar from './DuotoneAvatar';

export type AudienceItem = { label: string; seed: number };

const DEFAULT_AUDIENCES: AudienceItem[] = [
  { label: 'Physicians & HCPs', seed: 3 },
  { label: 'KOLs', seed: 7 },
  { label: 'Patients', seed: 11 },
  { label: 'Payers', seed: 5 },
  { label: 'Pharmacists', seed: 9 },
  { label: 'Consumers', seed: 13 },
];

type AudienceMosaicProps = {
  audiences?: AudienceItem[];
  /** Compact = overlapping avatar stack with no labels (popup). */
  variant?: 'grid' | 'compact';
  className?: string;
  avatarSize?: number;
};

export default function AudienceMosaic({
  audiences = DEFAULT_AUDIENCES,
  variant = 'grid',
  className = '',
  avatarSize = 72,
}: AudienceMosaicProps) {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center ${className}`} aria-label="Audiences we research">
        {audiences.slice(0, 5).map((a, i) => (
          <div
            key={a.label}
            className="rounded-full ring-2 ring-navy-deep"
            style={{ marginLeft: i === 0 ? 0 : -avatarSize * 0.32 }}
          >
            <DuotoneAvatar seed={a.seed} size={avatarSize} accent={i % 2 === 0 ? 'gold' : 'light'} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-6 ${className}`}
      aria-label="Audiences we research"
    >
      {audiences.map((a, i) => (
        <div key={a.label} className="flex flex-col items-center text-center">
          <DuotoneAvatar seed={a.seed} size={avatarSize} accent={i % 2 === 0 ? 'gold' : 'light'} />
          <span className="mt-2 text-xs font-medium text-muted-foreground">{a.label}</span>
        </div>
      ))}
    </div>
  );
}
