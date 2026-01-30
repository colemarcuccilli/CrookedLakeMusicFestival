import { MapPin, Waves, Music, Anchor } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

const highlights = [
  { icon: Waves, title: 'On the Water', description: 'Boat up to the sandbar for a unique festival experience' },
  { icon: Music, title: 'Two Stages', description: 'Main Stage and Sandbar Stage with non-stop music' },
  { icon: Anchor, title: 'Boat Friendly', description: 'Anchor up and enjoy from your boat or on the sandbar' },
  { icon: MapPin, title: 'Angola, Indiana', description: 'Located on beautiful Crooked Lake in Steuben County' },
];

export default function VenuePreview() {
  return (
    <section className="py-24 bg-lake-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="THE SANDBAR" subtitle="A festival venue like no other" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <ScrollReveal animation="slideLeft">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-lake-200 to-lake-300 shadow-soft">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-lake-700">
                  <MapPin size={48} className="mx-auto mb-3 opacity-50" />
                  <p className="font-display font-semibold">Crooked Lake</p>
                  <p className="text-sm opacity-70">Angola, Indiana</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, i) => (
                <ScrollReveal key={item.title} animation="fadeUp" delay={i * 0.1}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-lake/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-lake" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lake-950 mb-1">{item.title}</h3>
                      <p className="text-sm text-sand-800/70">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/venue" variant="secondary">Explore the Venue</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
