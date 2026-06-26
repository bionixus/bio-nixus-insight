import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Writable } from 'stream';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type FilledContext } from 'react-helmet-async';
import App from './App';

interface RenderResult {
  html: string;
  helmetData: FilledContext['helmet'];
}

export function render(url: string, initialData?: Record<string, unknown>): Promise<RenderResult> {
  return new Promise((resolve, reject) => {
    const helmetContext: Partial<FilledContext> = {};

    const { pipe } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App initialData={initialData} />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          const chunks: Buffer[] = [];
          const writable = new Writable({
            write(chunk, _encoding, callback) {
              chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
              callback();
            },
            final(callback) {
              const html = Buffer.concat(chunks).toString('utf-8');
              resolve({
                html,
                helmetData: (helmetContext as FilledContext).helmet,
              });
              callback();
            },
          });
          pipe(writable);
        },
        onError(error) {
          reject(error);
        },
      },
    );
  });
}
