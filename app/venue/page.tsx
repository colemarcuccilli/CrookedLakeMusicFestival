import { MapPin, Car, Anchor, Sun, Droplets, Music, ShieldCheck, UtensilsCrossed } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const venueHighlights = [
  { icon: Anchor, title: 'Boat Access', desc: 'Boat directly to the sandbar from any Crooked Lake launch' },
  { icon: Music, title: 'Two Stages', desc: 'Main Stage and Sandbar Stage running all weekend' },
  { icon: Sun, title: 'Sun & Sand', desc: 'Natural sandbar setting with shallow water perfect for wading' },
  { icon: ShieldCheck, title: 'Safety First', desc: 'On-water safety patrol and first aid on site' },
  { icon: UtensilsCrossed, title: 'Food & Drinks', desc: 'Food vendors and refreshments available on the sandbar' },
  { icon: Droplets, title: 'Lake Life', desc: 'Swim, float, and enjoy the water between sets' },
];

const accommodations = [
  { name: 'Potawatomi Inn', type: 'Hotel', note: 'Inside Pokagon State Park' },
  { name: 'Pokagon State Park', type: 'Camping', note: 'Tent & RV sites available' },
  { name: 'Holiday Inn Express Angola', type: 'Hotel', note: '15 min from the lake' },
  { name: 'Lake area vacation rentals', type: 'Rental', note: 'Check Airbnb/VRBO for lake houses' },
];

export default function VenuePage() {
  return (
    <div className="pt-24 pb-16">
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-lake-900 to-lake-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-lake-950/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">THE SANDBAR</h1>
          <p className="text-white/70 text-xl flex items-center justify-center gap-2"><MapPin size={20} />Crooked Lake, Angola, Indiana</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16">
          <ScrollReveal animation="fadeUp">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-lake-100 to-lake-200 shadow-soft">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-lake-700">
                  <MapPin size={64} className="mx-auto mb-4 opacity-40" />
                  <p className="font-display text-2xl font-bold">Interactive Map Coming Soon</p>
                  <p className="text-sm opacity-60 mt-2">Crooked Lake Sandbar, Angola, IN</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
        <section className="py-16">
          <SectionHeading title="VENUE HIGHLIGHTS" subtitle="Everything you need to know about the sandbar" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {venueHighlights.map((item, i) => (
              <ScrollReveal key={item.title} animation="fadeUp" delay={i * 0.1}>
                <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-lake/10 flex items-center justify-center flex-shrink-0"><item.icon size={24} className="text-lake" /></div>
                  <div><h3 className="font-display font-bold text-lake-950 mb-1">{item.title}</h3><p className="text-sm text-sand-800/70">{item.desc}</p></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
        <section className="py-16">
          <SectionHeading title="GETTING THERE" />
          <div className="max-w-2xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <div className="bg-white rounded-3xl p-8 shadow-soft space-y-6">
                <div className="flex items-start gap-4"><MapPin size={24} className="text-lake flex-shrink-0 mt-1" /><div><h3 className="font-display font-bold text-lake-950 mb-1">Address</h3><p className="text-sand-800/70">The Sandbar, Crooked Lake<br />Angola, Indiana 46703</p></div></div>
                <div className="flex items-start gap-4"><Car size={24} className="text-lake flex-shrink-0 mt-1" /><div><h3 className="font-display font-bold text-lake-950 mb-1">By Boat</h3><p className="text-sand-800/70">Access the sandbar by boat from any public launch on Crooked Lake. The sandbar is located in the center of the lake.</p></div></div>
              </div>
            </ScrollReveal>
          </div>
        </section>
        <section className="py-16">
          <SectionHeading title="WHERE TO STAY" subtitle="Nearby accommodations for the weekend" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mt-8">
            {accommodations.map((acc, i) => (
              <ScrollReveal key={acc.name} animation="fadeUp" delay={i * 0.1}>
                <div className="bg-white rounded-xl p-5 shadow-soft">
                  <span className="text-xs font-semibold text-lake uppercase tracking-wider">{acc.type}</span>
                  <h3 className="font-display font-bold text-lake-950 mt-1">{acc.name}</h3>
                  <p className="text-sm text-sand-800/60 mt-1">{acc.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
