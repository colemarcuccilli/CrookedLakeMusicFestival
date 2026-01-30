'use client';

import { useCountdown } from '@/hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: Date;
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[90px] border border-white/10">
        <span className="font-mono text-3xl sm:text-5xl font-bold text-white tabular-nums">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-white/50 text-xs sm:text-sm font-semibold uppercase tracking-wider mt-2">{label}</span>
    </div>
  );
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return (
      <div className="text-center">
        <p className="text-2xl font-display font-bold text-sunset animate-pulse">The Festival is Live!</p>
      </div>
    );
  }

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      <TimeBlock value={days} label="Days" />
      <div className="flex items-center text-white/30 text-2xl sm:text-4xl font-bold self-start mt-4 sm:mt-5">:</div>
      <TimeBlock value={hours} label="Hours" />
      <div className="flex items-center text-white/30 text-2xl sm:text-4xl font-bold self-start mt-4 sm:mt-5">:</div>
      <TimeBlock value={minutes} label="Min" />
      <div className="hidden sm:flex items-center text-white/30 text-2xl sm:text-4xl font-bold self-start mt-4 sm:mt-5">:</div>
      <div className="hidden sm:block"><TimeBlock value={seconds} label="Sec" /></div>
    </div>
  );
}
