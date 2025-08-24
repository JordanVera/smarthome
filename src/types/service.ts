export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceProduct {
  name: string;
  description: string;
  image: string;
  price?: string;
  features: string[];
}

export interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  products: ServiceProduct[];
  ctaTitle: string;
  ctaDescription: string;
}
