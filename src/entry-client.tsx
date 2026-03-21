import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import App from './App';
import './index.css';

declare global {
  interface Window {
    __INITIAL_DATA__?: Record<string, unknown>;
  }
}

// Prevent react-helmet-async from crashing when it tries to remove
// SSR-rendered <head> tags that the browser may have already moved or removed.
// This is a known issue with SSR + createRoot: Helmet's internal tracking
// of data-rh nodes can become stale, causing removeChild to throw.
const origRemoveChild = Node.prototype.removeChild;
Node.prototype.removeChild = function <T extends Node>(child: T): T {
  if (child.parentNode !== this) {
    return child;
  }
  return origRemoveChild.call(this, child) as T;
};

const origInsertBefore = Node.prototype.insertBefore;
Node.prototype.insertBefore = function <T extends Node>(newNode: T, refNode: Node | null): T {
  if (refNode && refNode.parentNode !== this) {
    return newNode;
  }
  return origInsertBefore.call(this, newNode, refNode) as T;
};

// Recover from stale client bundles after deploys.
// If a lazy chunk URL no longer exists, force a single hard refresh.
function installChunkLoadRecovery() {
  if (typeof window === 'undefined') return;
  const RELOAD_KEY = 'bionixus-chunk-recovery-reloaded';

  const shouldRecover = (message: string) => {
    const normalized = message.toLowerCase();
    return (
      normalized.includes('failed to fetch dynamically imported module') ||
      normalized.includes('loading chunk') ||
      normalized.includes('chunkloaderror')
    );
  };

  const recover = () => {
    if (window.sessionStorage.getItem(RELOAD_KEY) === '1') return;
    window.sessionStorage.setItem(RELOAD_KEY, '1');
    window.location.reload();
  };

  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason as { message?: string } | undefined;
    const message = reason?.message || String(reason || '');
    if (shouldRecover(message)) recover();
  });

  window.addEventListener('error', (event) => {
    const message = event.message || '';
    if (shouldRecover(message)) recover();
  });
}

const root = document.getElementById('root');
const initialData = window.__INITIAL_DATA__ || {};

if (root) {
  installChunkLoadRecovery();
  root.innerHTML = '';
  createRoot(root).render(
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <App initialData={initialData} />
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>,
  );
}
