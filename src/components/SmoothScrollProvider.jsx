import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/**
 * SmoothScrollProvider
 * Provides high-performance inertial smooth scrolling across the entire site
 * using the industry-standard Lenis engine.
 * - Handles route changes smoothly by resetting to top
 * - Intercepts anchor # links for silky smooth scrolling to sections
 * - Supports prefers-reduced-motion
 */
export default function SmoothScrollProvider({ children }) {
  const lenisInstanceRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisInstanceRef.current = lenis;

    // Connect RAF loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global click handler for anchor links (#section)
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: -80, duration: 0.8 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstanceRef.current = null;
    };
  }, []);

  // When route changes, scroll immediately to top smoothly
  useEffect(() => {
    if (lenisInstanceRef.current) {
      lenisInstanceRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return children;
}
