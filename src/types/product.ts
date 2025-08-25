export interface Product {
  id: string;
  name: string;
  brand: string | null;
  manufacturer: string | null;
  category: string;
  price: number | null;
  imageUrl: string | null;
  description: string | null;
  purchaseLink: string | null;
  isCompatible: boolean;
  createdAt: Date;
  updatedAt: Date;
}
