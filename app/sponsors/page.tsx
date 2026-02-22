import { sponsors } from '@/data/sponsors';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { cn, assetPath } from '@/lib/utils';

const tierConfig = {
  title: { heading: 'Title Sponsors', cols: 'grid-cols-1 sm:grid-cols-2', size: 'h-32' },
  gold: { heading: 'Gold Sponsors', cols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', size: 'h-28' },
  silver: { heading: 'Silver Sponsors', cols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5', size: 'h-24' },
  community: { heading: 'Community Partners', cols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', size: 'h-20' },
};

export default function SponsorsPage() {
  const tiers = ['title', 'gold', 'silver', 'community'] as const;

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="OUR SPONSORS" subtitle="Making the music possible" />
        {tiers.map((tier) => {
          const tierSponsors = sponsors.filter((s) => s.tier === tier);
          if (tierSponsors.length === 0) return null;
          const config = tierConfig[tier];
          return (
            <section key={tier} className="mb-16">
              <h3 className="font-display text-xl font-bold text-lake-950 text-center mb-8">{config.heading}</h3>
              <div className={cn('grid gap-6 max-w-5xl mx-auto', config.cols)}>
                {tierSponsors.map((sponsor, i) => (
                  <ScrollReveal key={sponsor.id} animation="fadeUp" delay={i * 0.1}>
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className={cn('flex items-center justify-center rounded-2xl bg-white p-4 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1', config.size)}>
                      <img src={assetPath(sponsor.logo)} alt={sponsor.name} className="max-h-full max-w-full object-contain" />
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          );
        })}
        <section className="mt-20">
          <ScrollReveal animation="fadeUp">
            <div className="bg-gradient-to-br from-lake-950 to-lake-900 rounded-3xl p-12 text-center">
              <h3 className="font-display text-3xl font-bold text-white mb-4">Become a Sponsor</h3>
              <p className="text-white/70 max-w-xl mx-auto mb-8">Partner with the Crooked Lake Sandbar Music Festival and support live music for charity.</p>
              <Button href="/contact" variant="secondary" className="border-white/30 text-white hover:bg-white/10 hover:text-white">Get Sponsorship Info</Button>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
