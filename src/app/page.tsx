import HomepageHero from '@/components/heroes/HomepageHero';
import FeaturesSection from '@/components/FeaturesSection';
import ProductLogos from '@/components/ProductLogos';
import ProductsShowcase from '@/components/ProductsShowcase';
import CompatibleDevices from '@/components/carousels/CompatibleDevices';
import HomePageCta from '@/components/ctas/HomePageCta';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <HomepageHero />
      <FeaturesSection />
      <ProductsShowcase />
      <CompatibleDevices />
      <ProductLogos />
      <HomePageCta />
    </div>
  );
}
