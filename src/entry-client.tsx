import React from 'react';
import { hydrateRoot } from 'react-dom/client';
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

const root = document.getElementById('root');
const initialData = window.__INITIAL_DATA__ || {};

if (root) {
  hydrateRoot(
    root,
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <App initialData={initialData} />
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>,
  );
}

