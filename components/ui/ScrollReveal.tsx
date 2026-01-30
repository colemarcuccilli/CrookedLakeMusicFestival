'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({ children, animation = 'fadeUp', delay = 0, duration = 700, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: if element is already in viewport on mount, reveal it
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(() => setIsVisible(true), delay * 1000);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay * 1000);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.05, rootMargin: '50px' }
    );
    observer.observe(el);

    // Safety fallback: reveal after 3 seconds no matter what
    const fallbackTimer = setTimeout(() => setIsVisible(true), 3000 + delay * 1000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [delay]);

  const baseStyles: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    transitionProperty: 'opacity, transform',
  };

  const hiddenStyles: Record<string, React.CSSProperties> = {
    fadeUp: { opacity: 0, transform: 'translateY(40px)' },
    fadeIn: { opacity: 0 },
    scaleIn: { opacity: 0, transform: 'scale(0.9)' },
    slideLeft: { opacity: 0, transform: 'translateX(-40px)' },
    slideRight: { opacity: 0, transform: 'translateX(40px)' },
  };

  const visibleStyles: React.CSSProperties = { opacity: 1, transform: 'none' };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseStyles,
        ...(isVisible ? visibleStyles : hiddenStyles[animation]),
      }}
    >
      {children}
    </div>
  );
}
