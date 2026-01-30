'use client';

import { useState } from 'react';
import { faqItems } from '@/data/faq';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type Category = 'all' | 'general' | 'venue' | 'lodging';

export default function FAQPage() {
  const [category, setCategory] = useState<Category>('all');
  const filtered = faqItems.filter((item) => category === 'all' || item.category === category);
  const categories: { label: string; value: Category }[] = [
    { label: 'All', value: 'all' },
    { label: 'General', value: 'general' },
    { label: 'Venue', value: 'venue' },
    { label: 'Lodging', value: 'lodging' },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="FAQ" subtitle="Frequently asked questions about the festival" />
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button key={cat.value} onClick={() => setCategory(cat.value)} className={cn('px-5 py-2 rounded-full text-sm font-semibold transition-all', category === cat.value ? 'bg-lake text-white shadow-glow-sm' : 'bg-lake-50 text-lake-950 hover:bg-lake-100')}>
              {cat.label}
            </button>
          ))}
        </div>
        <Accordion items={filtered.map((item) => ({ id: item.id, question: item.question, answer: item.answer }))} />
        <div className="text-center mt-16">
          <p className="text-sand-800/60 mb-4">Still have questions?</p>
          <Button href="/contact" variant="secondary">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}
