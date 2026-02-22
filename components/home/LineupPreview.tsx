import { Music } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function LineupPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="2026 LINEUP" subtitle="Two days of incredible live music on the water" />
        <ScrollReveal animation="fadeUp">
          <div className="mt-12 flex flex-col items-center justify-center text-center py-16">
            <div className="w-20 h-20 rounded-full bg-lake/10 flex items-center justify-center mb-6">
              <Music size={40} className="text-lake" />
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-lake-950 mb-3">Coming Soon</h3>
            <p className="text-sand-800/70 text-lg max-w-md">Lineup announcement dropping April 1st, 2026. Stay tuned!</p>
          </div>
        </ScrollReveal>
        <div className="text-center mt-4">
          <Button href="/schedule" variant="secondary" size="lg">View Schedule</Button>
        </div>
      </div>
    </section>
  );
}
