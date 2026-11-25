import { beforeEach, describe, expect, it } from 'vitest';
import {
  trackCtaClick,
  trackFormStart,
  trackFormView,
  trackLeadSubmitted,
  trackMeetingBooked,
  trackMeetingLinkClicked,
} from '@/lib/analytics';

describe('trackGaEvent dataLayer', () => {
  beforeEach(() => {
    window.dataLayer = [];
    window.history.pushState({}, '', '/reports?utm_source=test');
  });

  it('pushes lead_submitted with form_id and the live page path', () => {
    delete window.gtag;
    trackLeadSubmitted({ formId: 'x' });
    expect(window.dataLayer).toEqual([
      {
        event: 'lead_submitted',
        form_id: 'x',
        page_path: '/reports?utm_source=test',
      },
    ]);
  });

  it('pushes the named events and drops empty params', () => {
    trackCtaClick({ ctaId: 'book', ctaLocation: 'hero', targetUrl: '/contact' });
    trackFormView({ formId: 'gate' });
    trackFormStart({ formId: 'gate' });
    trackMeetingBooked({ formId: 'scoping', need: '', budget: undefined, sourceContext: 'home' });
    trackMeetingLinkClicked({ formId: 'scoping', targetUrl: 'https://research.bionixus.co.uk/widget/bookings/bionixus' });

    expect(window.dataLayer).toEqual([
      {
        event: 'cta_click',
        cta_id: 'book',
        cta_location: 'hero',
        target_url: '/contact',
        page_path: '/reports?utm_source=test',
      },
      { event: 'form_view', form_id: 'gate' },
      { event: 'form_start', form_id: 'gate' },
      {
        event: 'meeting_booked',
        form_id: 'scoping',
        source_context: 'home',
        page_path: '/reports?utm_source=test',
      },
      {
        event: 'meeting_link_clicked',
        form_id: 'scoping',
        target_url: 'https://research.bionixus.co.uk/widget/bookings/bionixus',
        page_path: '/reports?utm_source=test',
      },
    ]);
  });
});
