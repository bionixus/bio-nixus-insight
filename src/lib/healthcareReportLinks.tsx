import { Fragment, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { fixBrokenInternalHref } from '@/lib/fixBrokenInternalHrefs';

/** Matches an inline markdown link [label](href) anywhere in a string. */
const INLINE_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Renders a sentence that may contain inline markdown links — `[label](/path)` — anywhere
 * in free-flowing prose, as well as the legacy `•`-separated pure-link list format.
 * Inline tokenization (rather than whole-chunk matching) means links render correctly
 * whether the copy is a bullet list or a full sentence with embedded links.
 */
export function CrossLinkSentence({ markdown }: { markdown: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  // Render plain text between links; convert legacy "•" separators to a styled middot.
  const pushText = (text: string) => {
    if (!text) return;
    const parts = text.split(/\s*•\s*/);
    parts.forEach((part, i) => {
      if (i > 0) {
        nodes.push(
          <span key={`sep-${key++}`} aria-hidden className="text-border">
            {' '}·{' '}
          </span>,
        );
      }
      if (part) nodes.push(<Fragment key={`txt-${key++}`}>{part}</Fragment>);
    });
  };

  INLINE_LINK.lastIndex = 0;
  while ((match = INLINE_LINK.exec(markdown)) !== null) {
    if (match.index > lastIndex) {
      pushText(markdown.slice(lastIndex, match.index));
    }
    const label = match[1];
    const href = match[2];
    nodes.push(
      href.startsWith('http') ? (
        <a key={`lnk-${key++}`} href={href} className="font-medium text-primary hover:underline">
          {label}
        </a>
      ) : (
        <Link key={`lnk-${key++}`} to={fixBrokenInternalHref(href)} className="font-medium text-primary hover:underline">
          {label}
        </Link>
      ),
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < markdown.length) {
    pushText(markdown.slice(lastIndex));
  }

  return <span className="text-muted-foreground leading-relaxed">{nodes}</span>;
}
