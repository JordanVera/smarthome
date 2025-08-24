import ServiceTemplate from '@/components/templates/ServiceTemplate';
import { servicesData } from '@/data/services';

export default function SmartLightingPage() {
  return <ServiceTemplate serviceData={servicesData['smart-lighting']} />;
}

export const metadata = {
  title: 'Smart Lighting Solutions | NexusHome',
  description:
    'Create the perfect ambiance with smart lighting that adapts to your lifestyle and saves energy.',
};
