import { describe, expect, it } from 'vitest';
import { applyGtmContainerId, GTM_CONTAINER_FALLBACK_ID } from '../lib/gtmConsentHtml.mjs';

describe('applyGtmContainerId', () => {
  it('fills a placeholder or empty container id and leaves a real id alone', () => {
    const placeholder = `<script>)(window,document,'script','dataLayer','%VITE_GTM_ID%');</script><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=%VITE_GTM_ID%"></iframe></noscript>`;
    const filled = applyGtmContainerId(placeholder, GTM_CONTAINER_FALLBACK_ID);
    expect(filled).toContain(`dataLayer','${GTM_CONTAINER_FALLBACK_ID}'`);
    expect(filled).toContain(`ns.html?id=${GTM_CONTAINER_FALLBACK_ID}`);
    expect(filled).not.toContain('%VITE_GTM_ID%');

    const empty = `<script>)(window,document,'script','dataLayer','');</script><iframe src="https://www.googletagmanager.com/ns.html?id=""></iframe>`;
    expect(applyGtmContainerId(empty, GTM_CONTAINER_FALLBACK_ID)).toContain(GTM_CONTAINER_FALLBACK_ID);

    const staging = applyGtmContainerId(
      `<script>)(window,document,'script','dataLayer','GTM-STAGING');</script>`,
      GTM_CONTAINER_FALLBACK_ID,
    );
    expect(staging).toContain('GTM-STAGING');
    expect(staging).not.toContain(GTM_CONTAINER_FALLBACK_ID);
  });
});