import React from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../pages/Contact';

function renderContact() {
  return render(React.createElement(MemoryRouter, null, React.createElement(Contact)));
}

function fillRequiredFields() {
  fireEvent.change(screen.getByLabelText('Full Name *'), { target: { value: 'Asha Mehta' } });
  fireEvent.change(screen.getByLabelText('Phone Number *'), { target: { value: '9876543210' } });
  fireEvent.change(screen.getByLabelText('Premise / Area *'), { target: { value: 'Ulwe' } });
  fireEvent.change(screen.getByLabelText('Subject *'), { target: { value: 'Website enquiry' } });
  fireEvent.change(screen.getByLabelText('Message *'), { target: { value: 'I would like to discuss a website.' } });
}

describe('Contact page', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('keeps the service cards and form selection synchronized and reversible', () => {
    renderContact();
    const select = screen.getByLabelText('Service Selection *');
    const webCard = screen.getByRole('button', { name: /Web Development/, exact: false });

    fireEvent.click(webCard);
    expect(select.value).toBe('web-development');
    expect(webCard.getAttribute('aria-pressed')).toBe('true');

    fireEvent.change(select, { target: { value: 'digital-design' } });
    expect(screen.getByRole('button', { name: /Digital Design/ }).getAttribute('aria-pressed')).toBe('true');
    expect(webCard.getAttribute('aria-pressed')).toBe('false');
  });

  it('uses the verified address for Google Maps directions', () => {
    renderContact();
    const directionsLink = screen.getByRole('link', { name: 'Get Directions' });

    expect(directionsLink.href).toContain('https://www.google.com/maps/dir/?api=1&destination=');
    expect(decodeURIComponent(directionsLink.href)).toContain('Shop No-3, Hari Om Shagun, Plot No 8, Sector 20, Ulwe, Navi Mumbai 410206, Maharashtra, India');
  });

  it('keeps only Contact FAQs 2, 3, and 4', () => {
    renderContact();

    expect(screen.getByRole('button', { name: /Can I visit your office in Ulwe/ })).toBeTruthy();
    expect(screen.getByRole('button', { name: /What are your business opening hours/ })).toBeTruthy();
    expect(screen.getByRole('button', { name: /Do you provide emergency support on weekends/ })).toBeTruthy();
    expect(screen.queryByRole('button', { name: /What is the quickest way to reach your team/ })).toBeNull();
    expect(screen.queryByRole('button', { name: /Can I request a free on-site visit/ })).toBeNull();
    expect(screen.queryByRole('button', { name: /How do I send photos or details/ })).toBeNull();
    expect(screen.queryByRole('heading', { name: /Have a specific question not covered here/ })).toBeNull();
  });

  it('rejects invalid phone numbers before contacting the existing API', async () => {
    renderContact();
    fillRequiredFields();
    fireEvent.change(screen.getByLabelText('Phone Number *'), { target: { value: '12345' } });
    fireEvent.submit(document.getElementById('contact-enquiry'));

    expect((await screen.findByRole('alert')).textContent).toContain('valid 10-digit phone number');
    expect(fetch).not.toHaveBeenCalled();
  });

  it('submits the existing API payload once and reports successful delivery', async () => {
    let finishRequest;
    fetch.mockReturnValue(new Promise((resolve) => {
      finishRequest = resolve;
    }));

    renderContact();
    fillRequiredFields();
    fireEvent.click(screen.getByRole('button', { name: /CCTV & Security Cameras/ }));
    fireEvent.submit(document.getElementById('contact-enquiry'));
    fireEvent.submit(document.getElementById('contact-enquiry'));

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    const [url, request] = fetch.mock.calls[0];
    expect(url).toBe('http://localhost:5000/api/contact');
    expect(Object.keys(JSON.parse(request.body)).sort()).toEqual(['email', 'message', 'name', 'phone']);
    expect(JSON.parse(request.body).message).toContain('Category: CCTV & Security');

    finishRequest({ ok: true, json: async () => ({}) });
    expect(await screen.findByText('Enquiry submitted successfully')).toBeTruthy();
  });

  it('shows an API error instead of a success confirmation when submission fails', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    fetch.mockResolvedValue({ ok: false, json: async () => ({ message: 'Please try again later.' }) });

    renderContact();
    fillRequiredFields();
    fireEvent.submit(document.getElementById('contact-enquiry'));

    expect((await screen.findByRole('alert')).textContent).toContain('Please try again later.');
    expect(screen.queryByText('Enquiry submitted successfully')).toBeNull();
  });
});
