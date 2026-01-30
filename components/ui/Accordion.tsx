'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-soft transition-all duration-300">
          <button
            className="w-full flex items-center justify-between p-6 text-left font-display font-semibold text-lake-950 hover:text-lake transition-colors"
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            aria-expanded={openId === item.id}
          >
            <span className="pr-4">{item.question}</span>
            <ChevronDown size={20} className={cn('flex-shrink-0 transition-transform duration-300', openId === item.id && 'rotate-180')} />
          </button>
          <div className={cn('overflow-hidden transition-all duration-300', openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}>
            <p className="px-6 pb-6 text-sand-800/70 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
