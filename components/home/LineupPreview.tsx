'use client';

import { artists } from '@/data/artists';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function LineupPreview() {
  const featuredArtists = artists.filter((a) => a.featured).slice(0, 6);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="2026 LINEUP" subtitle="Two days of incredible live music on the water" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featuredArtists.map((artist, i) => (
            <ScrollReveal key={artist.id} animation="fadeUp" delay={i * 0.1}>
              <div className="group relative bg-lake-950 rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated">
                <div className="absolute inset-0 bg-gradient-to-br from-lake-800 to-lake-950" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge variant={artist.tier === 'headliner' ? 'pink' : 'default'} className="mb-3">{artist.genre}</Badge>
                  <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-lake-light transition-colors">{artist.name}</h3>
                  <p className="text-white/60 text-sm capitalize">{artist.day === 'both' ? 'Both Days' : artist.day} &bull; {artist.stage} Stage</p>
                </div>
                {artist.tier === 'headliner' && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-pink/90 text-white text-xs font-bold uppercase">Headliner</span>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/lineup" variant="secondary" size="lg">View Full Lineup</Button>
        </div>
      </div>
    </section>
  );
}
