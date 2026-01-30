'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRef, useState } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
  glow?: boolean;
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  magnetic = false,
  glow = false,
  href,
  children,
  onClick,
  disabled = false,
  loading = false,
  className,
  type = 'button',
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTransform(`translate(${x * 0.15}px, ${y * 0.15}px)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
  };

  const baseStyles = 'inline-flex items-center justify-center font-display font-semibold transition-all duration-300 rounded-pill cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-lake to-lake-light text-white hover:shadow-glow-md active:scale-95',
    secondary: 'border-2 border-lake text-lake hover:bg-lake hover:text-white active:scale-95',
    ghost: 'text-lake hover:bg-lake/10 active:scale-95',
    link: 'text-lake underline-offset-4 hover:underline',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], glow && 'animate-glow-pulse', className);

  if (href) {
    return (
      <Link href={href} ref={ref as React.Ref<HTMLAnchorElement>} className={classes} style={{ transform }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        {loading ? <span className="animate-spin mr-2">&#x27F3;</span> : null}
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} type={type} className={classes} onClick={onClick} disabled={disabled || loading} style={{ transform }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {loading ? <span className="animate-spin mr-2">&#x27F3;</span> : null}
      {children}
    </button>
  );
}
