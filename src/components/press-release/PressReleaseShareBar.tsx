import ShareButtons from '@/components/ShareButtons'

type PressReleaseShareBarProps = {
  url: string
  title: string
  slug: string
  className?: string
  variant?: 'light' | 'dark'
}

export function PressReleaseShareBar({
  url,
  title,
  slug,
  className = '',
  variant = 'light',
}: PressReleaseShareBarProps) {
  const isDark = variant === 'dark'

  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ${className}`}
      aria-label="Share this press release"
    >
      <p
        className={`text-[11px] font-bold uppercase tracking-[0.18em] m-0 ${
          isDark ? 'text-[#C9A84C]/90' : 'text-muted-foreground'
        }`}
      >
        Share this release
      </p>
      <div
        className={
          isDark
            ? '[&_span]:text-white/50 [&_button]:border-white/15 [&_button]:bg-white/5 [&_button]:text-white/70 [&_button:hover]:bg-white/10 [&_button:hover]:text-[#E4CC7A] [&_button:hover]:border-[#C9A84C]/40'
            : ''
        }
      >
        <ShareButtons url={url} title={title} contentType="press-release" slug={slug} />
      </div>
    </div>
  )
}
