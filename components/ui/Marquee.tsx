import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({ children, direction = 'left', speed = 'normal', pauseOnHover = true, className }: MarqueeProps) {
  const speeds = { slow: '60s', normal: '30s', fast: '15s' };

  return (
    <div className={cn('overflow-hidden', pauseOnHover && 'group', className)}>
      <div
        className={cn('flex w-max', direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse', pauseOnHover && 'group-hover:[animation-play-state:paused]')}
        style={{ animationDuration: speeds[speed] }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
