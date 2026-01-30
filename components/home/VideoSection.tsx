'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-24 bg-lake-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-lake-950 via-lake-900 to-lake-950 opacity-50" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Experience the Sandbar</h2>
            <p className="text-white/60 text-lg">See what makes our festival unlike any other</p>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-lake-900 shadow-elevated">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-lake-800 to-lake-950">
                <div className="text-center">
                  <button onClick={() => setIsPlaying(true)} className="group w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-glow-md">
                    <Play size={40} className="text-white ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                  <p className="text-white/50 mt-4 text-sm">Watch Highlight Reel</p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-black">
                <p className="text-white/50">Video player placeholder - Add YouTube/Vimeo embed URL</p>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
