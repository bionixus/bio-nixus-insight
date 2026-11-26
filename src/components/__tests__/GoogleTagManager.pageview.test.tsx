import { fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import GoogleTagManager from '@/components/GoogleTagManager';

function Go({ to }: { to: string }) {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate(to)}>
      Go
    </button>
  );
}

describe('GoogleTagManager page_view', () => {
  beforeEach(() => {
    window.dataLayer = [];
  });

  it('pushes one page_view for the first route, including the query string', () => {
    render(
      <MemoryRouter initialEntries={['/pricing?utm_source=email']}>
        <GoogleTagManager />
      </MemoryRouter>,
    );
    expect(window.dataLayer?.filter((entry) => entry.event === 'page_view')).toEqual([
      expect.objectContaining({
        event: 'page_view',
        page_path: '/pricing?utm_source=email',
      }),
    ]);
  });

  it('pushes one more page_view when the route changes', async () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="*" element={<GoogleTagManager />} />
        </Routes>
        <Go to="/contact" />
      </MemoryRouter>,
    );
    expect(window.dataLayer?.filter((entry) => entry.event === 'page_view')).toHaveLength(1);
    fireEvent.click(getByRole('button', { name: 'Go' }));
    await waitFor(() => {
      const views = window.dataLayer?.filter((entry) => entry.event === 'page_view') ?? [];
      expect(views.map((entry) => entry.page_path)).toEqual(['/', '/contact']);
    });
  });
});
