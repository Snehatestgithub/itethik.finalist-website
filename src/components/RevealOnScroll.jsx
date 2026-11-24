import React, { useEffect, useRef, useState } from 'react';

/**
 * RevealOnScroll Component
 * Utilizes the native Intersection Observer API to trigger smooth, premium
 * 'animate-fade-in-up' reveal animations on scroll for feature blocks and grid sections.
 *
 * @param {React.ReactNode} children - Child content or elements to reveal
 * @param {string} className - Optional additional CSS class names
 * @param {number} delay - Animation delay in milliseconds (useful for staggered cards)
 * @param {number} threshold - Intersection observer threshold (default: 0.12)
 * @param {string} rootMargin - Intersection observer root margin (default: '0px 0px -40px 0px')
 * @param {string} as - HTML tag to render (default: 'div')
 * @param {boolean} disabled - If true, renders immediately without scroll animation
 */
export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  as: Component = 'div',
  ...props
}) {
  const [hasAppeared, setHasAppeared] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !('IntersectionObserver' in window);
  });
  const ref = useRef(null);

  useEffect(() => {
    // If already triggered or observer unsupported, skip
    if (hasAppeared) return;
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAppeared(true);
          observer.unobserve(target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(target);

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [hasAppeared, threshold, rootMargin]);

  const style = delay > 0 ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <Component
      ref={ref}
      style={style}
      className={`${className} ${
        hasAppeared
          ? 'animate-fade-in-up opacity-100 will-change-transform'
          : 'opacity-0 translate-y-4'
      }`}
      {...props}
    >
      {children}
    </Component>
  );
}
