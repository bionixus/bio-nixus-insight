import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import CookieConsent from '@/components/CookieConsent';

function renderBanner() {
  return render(
    <MemoryRouter>
      <LanguageProvider>
        <CookieConsent />
      </LanguageProvider>
    </MemoryRouter>,
  );
}

describe('CookieConsent Consent Mode update', () => {
  beforeEach(() => {
    localStorage.removeItem('bionixus-cookie-consent');
    window.dataLayer = [];
    window.gtag = vi.fn();
  });

  it('grants all four storage types when the visitor accepts', async () => {
    renderBanner();
    fireEvent.click(await screen.findByRole('button', { name: 'Accept' }));
    expect(localStorage.getItem('bionixus-cookie-consent')).toBe('accepted');
    expect(window.gtag).toHaveBeenCalledWith('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
    expect(window.dataLayer).toContainEqual({ event: 'consent_update', consent_choice: 'accepted' });
  });

  it('keeps storage denied when the visitor declines', async () => {
    renderBanner();
    fireEvent.click(await screen.findByRole('button', { name: 'Decline' }));
    expect(localStorage.getItem('bionixus-cookie-consent')).toBe('declined');
    expect(window.gtag).toHaveBeenCalledWith('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    expect(window.dataLayer).toContainEqual({ event: 'consent_update', consent_choice: 'declined' });
    expect(window.dataLayer?.some((entry) => entry.consent_choice === 'accepted')).toBe(false);
  });
});
