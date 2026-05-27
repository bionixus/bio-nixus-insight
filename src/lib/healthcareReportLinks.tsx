import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const LINK_CHUNK = /^\[([^\]]+)\]\(([^)]+)\)$/;

export function CrossLinkSentence({ markdown }: { markdown: string }) {
  const phrases = markdown
    .split(/\s*[•]\s*/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <span className="text-muted-foreground leading-relaxed">
      {phrases.map((phrase, idx) => {
        const lm = LINK_CHUNK.exec(phrase);
        return (
          <Fragment key={`${phrase}-${idx}`}>
            {idx > 0 ? (
              <>
                {' '}
                <span aria-hidden className="text-border">
                  ·
                </span>{' '}
              </>
            ) : null}
            {lm ? (
              lm[2].startsWith('http') ? (
                <a href={lm[2]} className="font-medium text-primary hover:underline">
                  {lm[1]}
                </a>
              ) : (
                <Link to={lm[2]} className="font-medium text-primary hover:underline">
                  {lm[1]}
                </Link>
              )
            ) : (
              phrase
            )}
          </Fragment>
        );
      })}
    </span>
  );
}
