import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home page', () => {
  it('renders the testimonials section and review CTA', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText('What Our Clients Say')).toBeTruthy();
    expect(screen.getByRole('button', { name: /write a review/i })).toBeTruthy();
  });
});
