import React from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import PortfolioSections from '../components/PortfolioSections';

beforeEach(() => {
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue();
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('Portfolio sections', () => {
  it('fills the Building Digital Experiences media box with the supplied laptop photo', () => {
    render(React.createElement(MemoryRouter, null, React.createElement(PortfolioSections)));
    const photo = screen.getByRole('img', {
      name: 'Laptop displaying code and a website interface at a workstation',
    });

    expect(photo.getAttribute('loading')).toBe('lazy');
    expect(photo.className).toContain('object-cover');
    expect(photo.closest('figure').querySelector('h3').textContent).toBe('Building Digital Experiences');
  });
  it('requests muted autoplay and retries playback when the page becomes visible', () => {
    render(React.createElement(MemoryRouter, null, React.createElement(PortfolioSections)));
    const play = HTMLMediaElement.prototype.play;

    expect(play).toHaveBeenCalledTimes(1);
    expect(play.mock.contexts[0].muted).toBe(true);
    expect(play.mock.contexts[0].defaultMuted).toBe(true);

    fireEvent(document, new Event('visibilitychange'));
    expect(play).toHaveBeenCalledTimes(2);
  });

  it('renders the supplied video in the Website previews card and shows a fallback on playback errors', () => {
    const { container } = render(React.createElement(MemoryRouter, null, React.createElement(PortfolioSections)));
    const video = container.querySelector('video[aria-label="Website preview video"]');

    expect(video).toBeTruthy();
    expect(video.getAttribute('preload')).toBe('metadata');
    expect(video.hasAttribute('playsinline')).toBe(true);
    expect(video.hasAttribute('autoplay')).toBe(true);
    expect(video.hasAttribute('loop')).toBe(true);
    expect(video.muted).toBe(true);
    expect(video.hasAttribute('controls')).toBe(false);
    expect(video.querySelector('source').getAttribute('src')).toBe('/videos/website-preview.mp4');

    fireEvent.error(video);
    expect(screen.getByText('The website preview video could not be played.')).toBeTruthy();
  });

  it('crossfades from the supplied CCTV camera image to footage and supports pausing', () => {
    vi.useFakeTimers();
    const { container } = render(React.createElement(MemoryRouter, null, React.createElement(PortfolioSections)));
    const cameraFigure = container.querySelector('#story-odyssey article:first-of-type figure img[alt^="CCTV cameras"]').parentElement;
    const footageFigure = container.querySelector('#story-odyssey article:first-of-type figure img[alt^="Security footage"]').parentElement;

    expect(cameraFigure.className).toContain('opacity-100');
    expect(footageFigure.className).toContain('opacity-0');

    act(() => vi.advanceTimersByTime(5000));
    expect(cameraFigure.className).toContain('opacity-0');
    expect(footageFigure.className).toContain('opacity-100');

    fireEvent.click(screen.getByRole('button', { name: 'Pause CCTV photo slideshow' }));
    act(() => vi.advanceTimersByTime(5000));
    expect(footageFigure.className).toContain('opacity-100');
  });

  it('crossfades between the supplied Project notes photos and supports pausing', () => {
    vi.useFakeTimers();
    const { container } = render(React.createElement(MemoryRouter, null, React.createElement(PortfolioSections)));
    const photos = container.querySelector('[aria-label="Project notes photos"]');
    const [firstPhoto, secondPhoto] = photos.querySelectorAll('figure');

    expect(firstPhoto.querySelector('img').alt).toBe('Black desktop PC with RGB fans and a GeForce RTX graphics card');
    expect(firstPhoto.className).toContain('opacity-100');
    expect(secondPhoto.className).toContain('opacity-0');

    act(() => vi.advanceTimersByTime(5000));
    expect(firstPhoto.className).toContain('opacity-0');
    expect(secondPhoto.className).toContain('opacity-100');

    fireEvent.click(screen.getByRole('button', { name: 'Pause Project notes photo slideshow' }));
    act(() => vi.advanceTimersByTime(5000));
    expect(secondPhoto.className).toContain('opacity-100');
  });

  it('crossfades between the supplied Engineering & Hardware photos and supports pausing', () => {
    vi.useFakeTimers();
    const { container } = render(React.createElement(MemoryRouter, null, React.createElement(PortfolioSections)));
    const photos = container.querySelector('[aria-label="Engineering & Hardware photos"]');
    const [firstPhoto, secondPhoto] = photos.querySelectorAll('figure');

    expect(firstPhoto.querySelector('img').alt).toBe('Dusty dual-fan graphics card cooling assembly');
    expect(firstPhoto.className).toContain('opacity-100');
    expect(secondPhoto.className).toContain('opacity-0');

    act(() => vi.advanceTimersByTime(5000));
    expect(firstPhoto.className).toContain('opacity-0');
    expect(secondPhoto.className).toContain('opacity-100');

    fireEvent.click(screen.getByRole('button', { name: 'Pause hardware photo slideshow' }));
    act(() => vi.advanceTimersByTime(5000));
    expect(secondPhoto.className).toContain('opacity-100');
  });

  it('crossfades between the supplied Security & Surveillance photos and supports pausing', () => {
    vi.useFakeTimers();
    const { container } = render(React.createElement(MemoryRouter, null, React.createElement(PortfolioSections)));
    const photos = container.querySelector('[aria-label="Security & Surveillance photos"]');
    const [firstPhoto, secondPhoto] = photos.querySelectorAll('figure');

    expect(firstPhoto.querySelector('img').alt).toBe('Two dome security cameras mounted near a ceiling');
    expect(firstPhoto.className).toContain('opacity-100');
    expect(secondPhoto.className).toContain('opacity-0');

    act(() => vi.advanceTimersByTime(5000));
    expect(firstPhoto.className).toContain('opacity-0');
    expect(secondPhoto.className).toContain('opacity-100');

    fireEvent.click(screen.getByRole('button', { name: 'Pause security photo slideshow' }));
    act(() => vi.advanceTimersByTime(5000));
    expect(secondPhoto.className).toContain('opacity-100');
  });

  it('updates the empty project state when a category filter is selected', () => {
    const { container } = render(React.createElement(MemoryRouter, null, React.createElement(PortfolioSections)));

    const filter = container.querySelector('#story-odyssey [aria-label="Filter projects by category"] button:nth-child(2)');
    fireEvent.click(filter);

    expect(filter.getAttribute('aria-pressed')).toBe('true');
    expect(screen.getByRole('status').textContent).toContain(
      'No verified Web Development project previews are available yet.'
    );
  });
});
