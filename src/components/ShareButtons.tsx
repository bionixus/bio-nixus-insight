import { useState } from 'react';
import { Linkedin, Facebook, Twitter, Copy, Check, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import type { BlogArticleLocale } from '@/lib/blogPostUiStrings';
import { getBlogPostUiStrings } from '@/lib/blogPostUiStrings';

interface ShareButtonsProps {
  url: string;
  title: string;
  contentType: 'blog' | 'case-study' | 'guide' | 'press-release';
  slug: string;
  locale?: BlogArticleLocale;
}

const platforms = [
  {
    id: 'linkedin' as const,
    label: 'LinkedIn',
    icon: Linkedin,
    getUrl: (url: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    id: 'twitter' as const,
    label: 'X',
    icon: Twitter,
    getUrl: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    id: 'facebook' as const,
    label: 'Facebook',
    icon: Facebook,
    getUrl: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    id: 'whatsapp' as const,
    label: 'WhatsApp',
    icon: MessageCircle,
    getUrl: (url: string, title: string) =>
      `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
] as const;

type PlatformId = (typeof platforms)[number]['id'] | 'copy';

function trackShare(
  platform: PlatformId,
  contentType: string,
  slug: string,
  title: string,
) {
  try {
    const body = JSON.stringify({ platform, contentType, contentSlug: slug, contentTitle: title });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        '/api/admin?action=track-share',
        new Blob([body], { type: 'application/json' }),
      );
    } else {
      fetch('/api/admin?action=track-share', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // tracking is best-effort
  }
}

export default function ShareButtons({ url, title, contentType, slug, locale = 'en' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const ui = getBlogPostUiStrings(locale);

  const handleShare = (platform: (typeof platforms)[number]) => {
    trackShare(platform.id, contentType, slug, title);
    window.open(platform.getUrl(url, title), '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      trackShare('copy', contentType, slug, title);
      toast.success(ui.linkCopied);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(ui.linkCopyFailed);
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm font-medium text-muted-foreground mr-1">{ui.shareLabel}</span>

      {platforms.map((p) => (
        <button
          key={p.id}
          onClick={() => handleShare(p)}
          aria-label={ui.shareOn(p.label)}
          title={ui.shareOn(p.label)}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
        >
          <p.icon className="w-4 h-4" />
        </button>
      ))}

      <button
        onClick={handleCopy}
        aria-label={ui.copyLink}
        title={ui.copyLink}
        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
      >
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
}
