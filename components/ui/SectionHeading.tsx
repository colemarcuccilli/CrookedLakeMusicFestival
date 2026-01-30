'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({ title, subtitle, align = 'center', light = false, className }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    observer.observe(el);

    const fallback = setTimeout(() => setIsVisible(true), 3000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const alignClasses = { left: 'text-left', center: 'text-center', right: 'text-right' };

  return (
    <div
      ref={ref}
      className={cn('mb-12 transition-all duration-700 ease-out', alignClasses[align], className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(32px)',
      }}
    >
      <h2 className={cn('font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4', light ? 'text-white' : 'text-lake-950')}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-lg md:text-xl max-w-2xl', align === 'center' && 'mx-auto', light ? 'text-white/70' : 'text-sand-800/70')}>
          {subtitle}
        </p>
      )}
      <div className={cn('mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-lake to-pink', align === 'center' && 'mx-auto', align === 'right' && 'ml-auto')} />
    </div>
  );
}
