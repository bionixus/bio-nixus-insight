import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type FilledContext } from 'react-helmet-async';
import App from './App';
import { preloadRouteChunk } from './lib/preloadRouteChunk';

interface RenderResult {
  html: string;
  helmetData: FilledContext['helmet'];
}

function pathnameFromUrl(url: string): string {
  try {
    return new URL(url, 'https://www.bionixus.com').pathname;
  } catch {
    const path = url.split('?')[0]?.split('#')[0] ?? '/';
    return path.startsWith('/') ? path : `/${path}`;
  }
}

export async function render(
  url: string,
  initialData?: Record<string, unknown>,
): Promise<RenderResult> {
  const helmetContext: Partial<FilledContext> = {};
  const pathname = pathnameFromUrl(url);

  // Lazy route components suspend during renderToString unless their chunk is
  // resolved first — without preload, SEO-critical pages ship ~17 words of fallback.
  await preloadRouteChunk(pathname);

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App initialData={initialData} />
      </StaticRouter>
    </HelmetProvider>,
  );

  return {
    html,
    helmetData: helmetContext.helmet,
  };
}

