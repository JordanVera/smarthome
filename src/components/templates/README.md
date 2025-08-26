# Service Template System

This directory contains the reusable template system for creating service pages.

## How to Add a New Service

1. **Add service data** to `/src/data/services.ts`:

```typescript
export const servicesData: Record<string, ServiceData> = {
  // existing services...
  'new-service': {
    title: 'Your Service Title',
    subtitle: 'Service Subtitle',
    description: 'Service description...',
    heroImage: '/path/to/image.jpg',
    features: [
      {
        title: 'Feature Name',
        description: 'Feature description',
        icon: '🔥',
      },
    ],
    benefits: [
      {
        title: 'Benefit Title',
        description: 'Benefit description',
      },
    ],
    products: [
      {
        name: 'Product Name',
        description: 'Product description',
        image: '/path/to/product-image.jpg',
        price: 'Starting at $199',
        features: ['Feature 1', 'Feature 2'],
      },
    ],
    ctaTitle: 'Call to Action Title',
    ctaDescription: 'CTA description',
  },
};
```

2. **Create the page** at `/src/app/residential/new-service/page.tsx`:

```typescript
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import { servicesData } from '@/data/services';

export default function NewServicePage() {
  return <ServiceTemplate serviceData={servicesData['new-service']} />;
}

export const metadata = {
  title: 'Your Service Title | Seamless Smart Solutions',
  description: 'Service description for SEO',
};
```

3. **Update navigation** in `/src/components/Navbar.tsx` to include your new service.

## Benefits

- **No code duplication**: All service pages use the same layout
- **Consistent design**: Every service page looks and feels the same
- **Easy maintenance**: Update the template once, all pages update
- **Type safety**: TypeScript ensures data structure consistency
- **SEO friendly**: Each page has proper metadata
- **Responsive**: Works perfectly on all devices

## Customization

To customize the template for specific services, you can:

- Add optional fields to the `ServiceData` interface
- Conditionally render sections based on data availability
- Create service-specific components that extend the base template
