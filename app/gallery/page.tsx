'use client';

import { useState } from 'react';
import { galleryItems } from '@/data/gallery';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import type { GalleryItem } from '@/types';
import { assetPath } from '@/lib/utils';

const STREAM_BASE = 'https://customer-w6h9o08eg118alny.cloudflarestream.com';

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentItem: GalleryItem | null = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="GALLERY" subtitle="Memories from past festivals" />
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <ScrollReveal key={item.id} animation="fadeUp" delay={(i % 12) * 0.05}>
              <button onClick={() => setLightboxIndex(i)} className="w-full group relative rounded-2xl overflow-hidden bg-lake-100 break-inside-avoid block">
                {item.type === 'video' ? (
                  <div className="w-full bg-gradient-to-br from-lake-800 to-lake-950 transition-transform duration-500 group-hover:scale-105" style={{ aspectRatio: '16/9' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors">
                        <Play size={28} className="text-white ml-1" fill="white" />
                      </div>
                      <p className="text-white/80 text-sm font-semibold">{item.alt}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <img
                      src={assetPath(item.src!)}
                      alt={item.alt}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </>
                )}
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && currentItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setLightboxIndex(null)}>
          <button onClick={() => setLightboxIndex(null)} className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"><X size={32} /></button>
          <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length); }} className="absolute left-4 text-white/70 hover:text-white p-2 z-10"><ChevronLeft size={40} /></button>
          <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % galleryItems.length); }} className="absolute right-4 text-white/70 hover:text-white p-2 z-10"><ChevronRight size={40} /></button>
          <div className="max-w-5xl w-full max-h-[85vh] mx-4" onClick={(e) => e.stopPropagation()}>
            {currentItem.type === 'video' ? (
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src={`${STREAM_BASE}/${currentItem.videoId}/iframe`}
                  className="w-full h-full"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                src={assetPath(currentItem.src!)}
                alt={currentItem.alt}
                className="max-w-full max-h-[85vh] mx-auto rounded-2xl object-contain"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
