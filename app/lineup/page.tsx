'use client';

import { useState } from 'react';
import { artists } from '@/data/artists';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Badge from '@/components/ui/Badge';
import Modal from '@/components/ui/Modal';
import { Music, ExternalLink } from 'lucide-react';
import type { Artist } from '@/types';

type DayFilter = 'all' | 'friday' | 'saturday';

export default function LineupPage() {
  const [dayFilter, setDayFilter] = useState<DayFilter>('all');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const filtered = artists.filter((a) => dayFilter === 'all' || a.day === dayFilter || a.day === 'both');
  const headliners = filtered.filter((a) => a.tier === 'headliner');
  const supporting = filtered.filter((a) => a.tier === 'supporting');
  const local = filtered.filter((a) => a.tier === 'local');

  const filters: { label: string; value: DayFilter }[] = [
    { label: 'All Artists', value: 'all' },
    { label: 'Friday', value: 'friday' },
    { label: 'Saturday', value: 'saturday' },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="2026 LINEUP" subtitle="Two days of incredible live music on the sandbar" />

        <div className="flex justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button key={f.value} onClick={() => setDayFilter(f.value)} className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${dayFilter === f.value ? 'bg-lake text-white shadow-glow-sm' : 'bg-lake-50 text-lake-950 hover:bg-lake-100'}`}>
              {f.label}
            </button>
          ))}
        </div>

        {headliners.length > 0 && (
          <div className="mb-16">
            <h3 className="font-display text-2xl font-bold text-lake-950 mb-6 text-center">Headliners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {headliners.map((artist, i) => (
                <ScrollReveal key={artist.id} animation="fadeUp" delay={i * 0.1}>
                  <button onClick={() => setSelectedArtist(artist)} className="w-full text-left group relative bg-lake-950 rounded-3xl overflow-hidden aspect-[16/9] transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated">
                    <div className="absolute inset-0 bg-gradient-to-br from-lake-800 via-pink/20 to-lake-950" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <Badge variant="pink" className="mb-3">Headliner</Badge>
                      <h4 className="font-display text-3xl font-bold text-white mb-2 group-hover:text-lake-light transition-colors">{artist.name}</h4>
                      <p className="text-white/60 text-sm capitalize">{artist.genre} &bull; {artist.day} &bull; {artist.stage} Stage</p>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {supporting.length > 0 && (
          <div className="mb-16">
            <h3 className="font-display text-2xl font-bold text-lake-950 mb-6 text-center">Featured Artists</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supporting.map((artist, i) => (
                <ScrollReveal key={artist.id} animation="fadeUp" delay={i * 0.08}>
                  <button onClick={() => setSelectedArtist(artist)} className="w-full text-left group relative bg-lake-950 rounded-2xl overflow-hidden aspect-[3/4] transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated">
                    <div className="absolute inset-0 bg-gradient-to-br from-lake-700 to-lake-950" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <Badge className="mb-2">{artist.genre}</Badge>
                      <h4 className="font-display text-xl font-bold text-white group-hover:text-lake-light transition-colors">{artist.name}</h4>
                      <p className="text-white/60 text-xs capitalize mt-1">{artist.day} &bull; {artist.stage} Stage</p>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {local.length > 0 && (
          <div className="mb-16">
            <h3 className="font-display text-2xl font-bold text-lake-950 mb-6 text-center">Local Artists</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {local.map((artist, i) => (
                <ScrollReveal key={artist.id} animation="fadeUp" delay={i * 0.05}>
                  <button onClick={() => setSelectedArtist(artist)} className="w-full text-left group bg-lake-50 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:bg-white">
                    <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-lake-200 to-lake-300 mb-3 flex items-center justify-center">
                      <Music size={24} className="text-lake/40" />
                    </div>
                    <h4 className="font-display text-sm font-bold text-lake-950 group-hover:text-lake transition-colors">{artist.name}</h4>
                    <p className="text-xs text-sand-800/60 capitalize">{artist.genre}</p>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        <div className="text-center py-12">
          <p className="font-display text-xl text-lake-950/50 font-semibold">More artists coming soon...</p>
        </div>
      </div>

      <Modal isOpen={!!selectedArtist} onClose={() => setSelectedArtist(null)}>
        {selectedArtist && (
          <div>
            <div className="h-48 bg-gradient-to-br from-lake-800 to-lake-950 relative">
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <Badge variant={selectedArtist.tier === 'headliner' ? 'pink' : 'default'} className="mb-2">{selectedArtist.genre}</Badge>
                <h3 className="font-display text-3xl font-bold text-white">{selectedArtist.name}</h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {selectedArtist.bio && <p className="text-sand-800/80 leading-relaxed">{selectedArtist.bio}</p>}
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 bg-lake-50 rounded-full text-lake-950 capitalize">{selectedArtist.day === 'both' ? 'Both Days' : selectedArtist.day}</span>
                {selectedArtist.stage && <span className="px-3 py-1 bg-lake-50 rounded-full text-lake-950 capitalize">{selectedArtist.stage} Stage</span>}
                {selectedArtist.performanceTime && <span className="px-3 py-1 bg-lake-50 rounded-full text-lake-950">{selectedArtist.performanceTime}</span>}
              </div>
              {selectedArtist.socialLinks && (
                <div className="flex gap-3 pt-2">
                  {selectedArtist.socialLinks.spotify && <a href={selectedArtist.socialLinks.spotify} target="_blank" rel="noopener noreferrer" className="text-lake hover:text-lake-dark flex items-center gap-1 text-sm"><ExternalLink size={14} /> Spotify</a>}
                  {selectedArtist.socialLinks.instagram && <a href={selectedArtist.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-lake hover:text-lake-dark flex items-center gap-1 text-sm"><ExternalLink size={14} /> Instagram</a>}
                  {selectedArtist.socialLinks.website && <a href={selectedArtist.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-lake hover:text-lake-dark flex items-center gap-1 text-sm"><ExternalLink size={14} /> Website</a>}
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
