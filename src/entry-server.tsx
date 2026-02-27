import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type FilledContext } from 'react-helmet-async';
import App from './App';

interface RenderResult {
  html: string;
  helmetData: FilledContext['helmet'];
}

export function render(url: string, initialData?: Record<string, unknown>): RenderResult {
  const helmetContext: Partial<FilledContext> = {};

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

