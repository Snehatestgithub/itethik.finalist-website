import React from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ConsultationInquiry from '../pages/ConsultationInquiry';

vi.mock('../components/CanvasParticleField', () => ({ default: () => null }));
vi.mock('../components/ui/retro-grid', () => ({ default: () => null }));
vi.mock('../components/FaqSection', () => ({ default: () => null }));
vi.mock('../components/ChatAssistant', () => ({ default: () => null }));

function renderConsultation() {
  return render(
    React.createElement(
      MemoryRouter,
      { initialEntries: ['/consultation?service=web-development'] },
      React.createElement(ConsultationInquiry)
    )
  );
}

function fillRequiredFields(container) {
  fireEvent.change(container.querySelector('[name="name"]'), {
    target: { value: 'Asha Mehta' },
  });
  fireEvent.change(container.querySelector('[name="phone"]'), {
    target: { value: '987-654-3210' },
  });
}

describe('Consultation inquiry submission', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('sends the submitted details and reports success only after an accepted response', async () => {
    fetch.mockResolvedValue({ ok: true, json: async () => ({ message: 'Received' }) });
    const { container } = renderConsultation();
    fillRequiredFields(container);

    fireEvent.submit(container.querySelector('form'));

    expect(await screen.findByRole('heading', { name: 'Consultation Request Received!' })).toBeTruthy();
    expect(fetch).toHaveBeenCalledTimes(1);
    const [url, request] = fetch.mock.calls[0];
    expect(url).toBe('http://localhost:5000/api/contact');
    const body = JSON.parse(request.body);
    expect(body.name).toBe('Asha Mehta');
    expect(body.phone).toBe('9876543210');
    expect(body.message).toContain('[CONSULTATION INQUIRY - ITE-');
    expect(body.message).toContain('Service: Custom Web Development');
    expect(body.message).toContain('Premise: residential');
    expect(body.message).toContain('Timeline: Within 2-3 Days');
  });

  it('does not report success when the API rejects the inquiry', async () => {
    fetch.mockResolvedValue({
      ok: false,
      json: async () => ({ message: 'Submission service unavailable.' }),
    });
    const { container } = renderConsultation();
    fillRequiredFields(container);

    fireEvent.submit(container.querySelector('form'));

    await waitFor(() => expect(container.textContent).toContain('Submission service unavailable.'));
    expect(screen.queryByRole('heading', { name: 'Consultation Request Received!' })).toBeNull();
  });
});
