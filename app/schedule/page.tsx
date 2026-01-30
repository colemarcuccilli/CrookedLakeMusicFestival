'use client';

import { useState } from 'react';
import { schedule } from '@/data/schedule';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Clock, Star } from 'lucide-react';
import { cn, formatTime } from '@/lib/utils';

type DayFilter = 'friday' | 'saturday';
type StageFilter = 'all' | 'main' | 'sandbar' | 'general';

const stageColors: Record<string, string> = {
  main: 'bg-lake text-white',
  sandbar: 'bg-pink text-white',
  general: 'bg-sunset text-lake-950',
};

export default function SchedulePage() {
  const [day, setDay] = useState<DayFilter>('friday');
  const [stage, setStage] = useState<StageFilter>('all');

  const filtered = schedule
    .filter((e) => e.day === day)
    .filter((e) => stage === 'all' || e.stage === stage)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="FESTIVAL SCHEDULE" subtitle="Two days of non-stop music on the water" />

        <div className="flex justify-center gap-2 mb-6">
          <button onClick={() => setDay('friday')} className={cn('px-6 py-3 rounded-full font-bold text-sm transition-all', day === 'friday' ? 'bg-lake text-white shadow-glow-sm' : 'bg-lake-50 text-lake-950 hover:bg-lake-100')}>Friday, July 24</button>
          <button onClick={() => setDay('saturday')} className={cn('px-6 py-3 rounded-full font-bold text-sm transition-all', day === 'saturday' ? 'bg-lake text-white shadow-glow-sm' : 'bg-lake-50 text-lake-950 hover:bg-lake-100')}>Saturday, July 25</button>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {(['all', 'main', 'sandbar'] as StageFilter[]).map((s) => (
            <button key={s} onClick={() => setStage(s)} className={cn('px-4 py-2 rounded-full text-xs font-semibold transition-all capitalize', stage === s ? 'bg-lake-950 text-white' : 'bg-lake-50 text-lake-950 hover:bg-lake-100')}>
              {s === 'all' ? 'All Stages' : `${s} Stage`}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-lake-100" />
          <div className="space-y-6">
            {filtered.map((event, i) => (
              <ScrollReveal key={event.id} animation="fadeUp" delay={i * 0.05}>
                <div className={cn('relative pl-20 pr-4', event.isHeadliner && 'scale-[1.02]')}>
                  <div className={cn('absolute left-6 w-5 h-5 rounded-full border-4 border-white', event.isHeadliner ? 'bg-pink' : 'bg-lake')} />
                  <div className="absolute left-0 top-0 text-xs font-mono text-sand-800/60 w-16 text-right pr-4 pt-1">{formatTime(event.startTime)}</div>
                  <div className={cn('bg-white rounded-2xl p-5 shadow-soft border-2 transition-all hover:shadow-elevated', event.isHeadliner ? 'border-pink/30' : 'border-transparent')}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {event.isHeadliner && <Star size={16} className="text-pink fill-pink" />}
                          <h3 className={cn('font-display font-bold text-lg', event.isHeadliner ? 'text-pink' : 'text-lake-950')}>{event.title}</h3>
                        </div>
                        {event.description && <p className="text-sm text-sand-800/60 mb-2">{event.description}</p>}
                        <div className="flex items-center gap-3 text-xs text-sand-800/50">
                          <span className="flex items-center gap-1"><Clock size={12} />{formatTime(event.startTime)} - {formatTime(event.endTime)}</span>
                          {event.stage !== 'general' && <span className={cn('px-2 py-0.5 rounded-full text-xs font-semibold capitalize', stageColors[event.stage])}>{event.stage} Stage</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
