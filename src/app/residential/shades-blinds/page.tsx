import ServiceTemplate from '@/components/templates/ServiceTemplate';
import { servicesData } from '@/data/services';

export default function ShadesBlindsPage() {
  return <ServiceTemplate serviceData={servicesData['shades-blinds']} />;
}

export const metadata = {
  title: 'Smart Shades & Blinds | NexusHome',
  description:
    'Transform your home with intelligent window treatments that respond to light, temperature, and your daily routine.',
};
