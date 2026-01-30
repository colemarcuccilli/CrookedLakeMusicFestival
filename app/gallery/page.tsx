'use client';

import { useState } from 'react';
import { galleryImages } from '@/data/gallery';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type YearFilter = 'all' | number;

export default function GalleryPage() {
  const [yearFilter, setYearFilter] = useState<YearFilter>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const years = Array.from(new Set(galleryImages.map((img) => img.year))).sort((a, b) => b - a);
  const filtered = galleryImages.filter((img) => yearFilter === 'all' || img.year === yearFilter);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="GALLERY" subtitle="Memories from past festivals" />
        <div className="flex justify-center gap-2 mb-12">
          <button onClick={() => setYearFilter('all')} className={cn('px-5 py-2 rounded-full text-sm font-semibold transition-all', yearFilter === 'all' ? 'bg-lake text-white' : 'bg-lake-50 text-lake-950 hover:bg-lake-100')}>All Years</button>
          {years.map((year) => (
            <button key={year} onClick={() => setYearFilter(year)} className={cn('px-5 py-2 rounded-full text-sm font-semibold transition-all', yearFilter === year ? 'bg-lake text-white' : 'bg-lake-50 text-lake-950 hover:bg-lake-100')}>{year}</button>
          ))}
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <ScrollReveal key={img.id} animation="fadeUp" delay={i * 0.05}>
              <button onClick={() => setLightboxIndex(i)} className="w-full group relative rounded-2xl overflow-hidden bg-lake-100 break-inside-avoid block">
                <div className="w-full bg-gradient-to-br from-lake-200 to-lake-300 transition-transform duration-500 group-hover:scale-105" style={{ aspectRatio: `${img.width}/${img.height}` }}>
                  <div className="absolute inset-0 flex items-center justify-center text-lake/30 font-display text-sm">{img.alt}</div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            </ScrollReveal>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-center text-sand-800/50 py-12">No photos for this year yet.</p>}
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setLightboxIndex(null)}>
          <button onClick={() => setLightboxIndex(null)} className="absolute top-4 right-4 text-white/70 hover:text-white p-2"><X size={32} /></button>
          <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length); }} className="absolute left-4 text-white/70 hover:text-white p-2"><ChevronLeft size={40} /></button>
          <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % filtered.length); }} className="absolute right-4 text-white/70 hover:text-white p-2"><ChevronRight size={40} /></button>
          <div className="max-w-4xl max-h-[80vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-br from-lake-800 to-lake-950 rounded-2xl flex items-center justify-center p-12 min-h-[300px]">
              <p className="text-white/50 font-display">{filtered[lightboxIndex].alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
