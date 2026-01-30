import HeroSection from '@/components/home/HeroSection';
import LineupPreview from '@/components/home/LineupPreview';
import VideoSection from '@/components/home/VideoSection';
import VenuePreview from '@/components/home/VenuePreview';
import SponsorsMarquee from '@/components/home/SponsorsMarquee';
import NewsletterSignup from '@/components/home/NewsletterSignup';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LineupPreview />
      <VideoSection />
      <VenuePreview />
      <SponsorsMarquee />
      <NewsletterSignup />
    </>
  );
}
