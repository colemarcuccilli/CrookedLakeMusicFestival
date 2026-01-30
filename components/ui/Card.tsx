import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={cn('bg-white rounded-2xl overflow-hidden shadow-soft', hover && 'transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated', className)}>
      {children}
    </div>
  );
}
