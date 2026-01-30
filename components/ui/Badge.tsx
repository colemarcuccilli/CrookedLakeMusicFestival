import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'pink' | 'sunset' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-lake/10 text-lake',
    pink: 'bg-pink/10 text-pink',
    sunset: 'bg-sunset/20 text-sunset-dark',
    outline: 'border border-lake/30 text-lake',
  };

  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold', variants[variant], className)}>
      {children}
    </span>
  );
}
