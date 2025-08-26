import ServiceTemplate from '@/components/templates/ServiceTemplate';
import { servicesData } from '@/data/services';

export default function SmartThermostatsPage() {
  return <ServiceTemplate serviceData={servicesData['smart-thermostats']} />;
}

export const metadata = {
  title: 'Smart Thermostats | Seamless Smart Solutions',
  description:
    "Optimize your home's temperature and energy usage with learning thermostats that adapt to your schedule.",
};
