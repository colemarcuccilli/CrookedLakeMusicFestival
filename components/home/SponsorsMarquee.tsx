import { sponsors } from '@/data/sponsors';
import SectionHeading from '@/components/ui/SectionHeading';
import Marquee from '@/components/ui/Marquee';
import Button from '@/components/ui/Button';

export default function SponsorsMarquee() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="OUR SPONSORS" subtitle="Making the music possible" />
      </div>
      <Marquee className="mt-12" pauseOnHover>
        {sponsors.map((sponsor) => (
          <a key={sponsor.id} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="mx-8 flex-shrink-0 group">
            <div className="w-40 h-20 rounded-xl bg-lake-50 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 group-hover:shadow-soft">
              <span className="font-display font-bold text-lake-950/40 group-hover:text-lake-950 transition-colors">{sponsor.name}</span>
            </div>
          </a>
        ))}
      </Marquee>
      <div className="text-center mt-12">
        <Button href="/sponsors" variant="ghost">Become a Sponsor</Button>
      </div>
    </section>
  );
}
