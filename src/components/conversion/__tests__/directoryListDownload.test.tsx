import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DirectoryListDownload } from '@/components/conversion/DirectoryListDownload';
import { describeColumns } from '@/lib/directoryListCsv';
import { HIGHLEVEL_LEAD_ENDPOINT } from '@/lib/submitLeadDual';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '@/contexts/LanguageContext';
import CompanyDirectoryPage from '@/pages/templates/CompanyDirectoryPage';
import EgyptPharmaCompanies from '@/pages/EgyptPharmaCompanies';
import UaePharmaCompanies from '@/pages/UaePharmaCompanies';

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

function mockChannels() {
  const fetchMock = vi.fn((input: RequestInfo) => {
    const url = String(input);
    if (url === HIGHLEVEL_LEAD_ENDPOINT) return Promise.resolve(json({ success: true, contactId: 'c1' }));
    return Promise.resolve(json({ ok: true }));
  });
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

function highLevelBody(fetchMock: ReturnType<typeof mockChannels>) {
  const call = fetchMock.mock.calls.find((c) => String(c[0]) === HIGHLEVEL_LEAD_ENDPOINT);
  return JSON.parse(String((call as unknown as [string, RequestInit])?.[1]?.body));
}

type ObserverCallback = (entries: { isIntersecting: boolean }[]) => void;
let observerCallback: ObserverCallback | null = null;

class Observer {
  constructor(cb: ObserverCallback) {
    observerCallback = cb;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

const downloads: string[] = [];
let csvBlob: Blob | null = null;

function readBlob(blob: Blob): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.readAsText(blob);
  });
}

beforeEach(() => {
  downloads.length = 0;
  csvBlob = null;
  observerCallback = null;
  HTMLElement.prototype.scrollIntoView = vi.fn();
  vi.stubGlobal('IntersectionObserver', Observer);
  vi.spyOn(console, 'warn').mockImplementation(() => {});
  URL.createObjectURL = vi.fn((blob: Blob) => {
    csvBlob = blob;
    return 'blob:directory-list';
  });
  URL.revokeObjectURL = vi.fn();
  vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function (this: HTMLAnchorElement) {
    downloads.push(this.download);
  });
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

const ROWS = [
  ['EIPICO', 'Egypt', 'Local Manufacturer', 'Generics, OTC', 'Largest private pharma'],
  ['Pfizer Egypt', 'Cairo', 'MNC Office', 'Vaccines', 'MNC office'],
];

function renderBlock() {
  return render(
    <MemoryRouter>
      <DirectoryListDownload
        path="/pharmaceutical-companies-egypt"
        labelLower="pharmaceutical companies"
        countryDisplay="Egypt"
        market="Egypt"
        headers={['Company', 'HQ', 'Type', 'Therapeutic areas', 'Notes']}
        rows={ROWS}
        asOf="February 2026"
      />
    </MemoryRouter>,
  );
}

function fill(use: string) {
  fireEvent.change(screen.getByLabelText(/^email/i), { target: { value: 'analyst@pfizer.com' } });
  fireEvent.change(screen.getByLabelText(/company or organisation/i), { target: { value: 'Pfizer' } });
  fireEvent.change(screen.getByLabelText(/what is the list for/i), { target: { value: use } });
  fireEvent.click(screen.getByRole('button', { name: /download the list/i }));
}

describe('DirectoryListDownload', () => {
  it('describes the columns in plain English', () => {
    expect(describeColumns(['Company', 'HQ', 'Type', 'Device categories', 'Notes'])).toBe(
      'HQ, type, device categories and notes',
    );
  });

  it('requires email, company and intended use before anything is sent', () => {
    const fetchMock = mockChannels();
    renderBlock();
    fireEvent.click(screen.getByRole('button', { name: /download the list/i }));
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Company or organisation is required')).toBeInTheDocument();
    expect(screen.getByText('Please choose one')).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
    expect(downloads).toEqual([]);
  });

  it('saves a Directory List Download lead, downloads the CSV and offers the scoping call to research buyers', async () => {
    const fetchMock = mockChannels();
    renderBlock();
    fill('Market research or commercial planning');

    expect(await screen.findByText('Your download has started')).toBeInTheDocument();
    const body = highLevelBody(fetchMock);
    expect(body.requestType).toBe('Directory List Download');
    expect(body.formVariant).toBe('directory-list-pharmaceutical-companies-egypt');
    expect(body.listUse).toBe('Market research or commercial planning');
    expect(body.country).toBe('Egypt');
    expect(body.company).toBe('Pfizer');
    expect(downloads).toEqual(['bionixus-pharmaceutical-companies-egypt.csv']);
    expect(csvBlob?.type).toBe('text/csv;charset=utf-8');
    const csvText = await readBlob(csvBlob!);
    expect(csvText).toContain('Source: https://www.bionixus.com/pharmaceutical-companies-egypt (last reviewed February 2026)');
    expect(csvText).toContain('1,EIPICO,Egypt,Local Manufacturer,"Generics, OTC",Largest private pharma');
    expect(csvText).toContain('2,Pfizer Egypt,Cairo,MNC Office,Vaccines,MNC office');
    expect(screen.getByRole('button', { name: /book a 30-minute scoping call/i })).toBeInTheDocument();
  });

  it('points job seekers elsewhere instead of offering a sales call', async () => {
    mockChannels();
    renderBlock();
    fill('Job search');
    expect(await screen.findByText(/not a recruiter/i)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /book a 30-minute scoping call/i })).not.toBeInTheDocument();
    expect(downloads).toEqual(['bionixus-pharmaceutical-companies-egypt.csv']);
  });

  it('shows the mobile download bar after first paint and hides it while the form is on screen', () => {
    vi.useFakeTimers();
    renderBlock();
    expect(screen.queryByTestId('directory-list-sticky-bar')).not.toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(2600);
    });
    const bar = screen.getByTestId('directory-list-sticky-bar');
    expect(bar.querySelector('a')).toHaveAttribute('href', '#download-list');
    act(() => observerCallback?.([{ isIntersecting: true }]));
    expect(screen.queryByTestId('directory-list-sticky-bar')).not.toBeInTheDocument();
  });
});

describe('directory pages server-render the download block', () => {
  // Client routes load CompanyDirectoryPage with React.lazy (the SSR build swaps in lazySeoPages.ssr.ts), so
  // render the page components themselves to check the block is in the server HTML.
  function ssr(node: React.ReactNode) {
    return renderToString(
      <HelmetProvider>
        <StaticRouter location="/">
          <LanguageProvider>{node}</LanguageProvider>
        </StaticRouter>
      </HelmetProvider>,
    );
  }

  it.each(['/fmcg-companies-pakistan', '/health-insurers-saudi-arabia', '/medical-device-companies-egypt'])(
    'template %s',
    (path) => {
      const html = ssr(<CompanyDirectoryPage path={path} />);
      expect(html).toContain('id="download-list"');
      expect(html).toContain('Download this list as an Excel file');
      expect((html.match(/<h1[\s>]/g) || []).length).toBe(1);
    },
  );

  it.each([
    ['/pharmaceutical-companies-egypt', EgyptPharmaCompanies],
    ['/pharmaceutical-companies-uae', UaePharmaCompanies],
  ] as const)('hand-written %s', (_path, Page) => {
    const html = ssr(<Page />);
    expect(html).toContain('id="download-list"');
    expect(html).toContain('Download this list as an Excel file');
    expect((html.match(/<h1[\s>]/g) || []).length).toBe(1);
  });
});
