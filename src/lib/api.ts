import { Product } from '@/types/product';

// Base API URL
const API_BASE = '/api';

// Types for API responses
export interface ProductsResponse {
  products: Product[];
  pagination: {
    page: number;
    limit: number;
    totalCount: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  summary: {
    totalProducts: number;
    categories: Array<{ category: string; count: number }>;
  };
}

export interface SearchResponse {
  query: string;
  products: Product[];
  pagination: {
    page: number;
    limit: number;
    totalCount: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  filters: {
    category: string | null;
    manufacturer: string | null;
    minPrice: number | null;
    maxPrice: number | null;
    isCompatible: boolean | null;
  };
  sorting: {
    sortBy: string;
    sortOrder: string;
  };
  suggestions: Array<{
    text: string;
    category: string;
    manufacturer: string;
  }>;
}

export interface CategoriesResponse {
  categories: Array<{ name: string; count: number }>;
  manufacturers: Array<{ name: string; count: number }>;
  summary: {
    totalCategories: number;
    totalProducts: number;
    totalManufacturers: number;
  };
}

// Generic API call function
async function apiCall<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ error: 'Unknown error' }));
    throw new Error(error.error || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

// Products API functions
export const productsApi = {
  // Get all products with optional filters
  getAll: async (params?: {
    page?: number;
    limit?: number;
    category?: string;
    manufacturer?: string;
    search?: string;
  }): Promise<ProductsResponse> => {
    const searchParams = new URLSearchParams();

    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());
    if (params?.category) searchParams.append('category', params.category);
    if (params?.manufacturer)
      searchParams.append('manufacturer', params.manufacturer);
    if (params?.search) searchParams.append('search', params.search);

    const queryString = searchParams.toString();
    const endpoint = `/products${queryString ? `?${queryString}` : ''}`;

    return apiCall<ProductsResponse>(endpoint);
  },

  // Get a single product by ID
  getById: async (id: string): Promise<Product> => {
    return apiCall<Product>(`/products/${id}`);
  },

  // Search products with advanced filters
  search: async (params: {
    query?: string;
    category?: string;
    manufacturer?: string;
    minPrice?: number;
    maxPrice?: number;
    isCompatible?: boolean;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: string;
  }): Promise<SearchResponse> => {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, value.toString());
      }
    });

    return apiCall<SearchResponse>(
      `/products/search?${searchParams.toString()}`
    );
  },

  // Get categories and manufacturers
  getCategories: async (): Promise<CategoriesResponse> => {
    return apiCall<CategoriesResponse>('/products/categories');
  },

  // Create a new product
  create: async (
    product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Product> => {
    return apiCall<Product>('/products', {
      method: 'POST',
      body: JSON.stringify(product),
    });
  },

  // Update an existing product
  update: async (
    id: string,
    product: Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>
  ): Promise<Product> => {
    return apiCall<Product>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(product),
    });
  },

  // Delete a product
  delete: async (id: string): Promise<{ message: string }> => {
    return apiCall<{ message: string }>(`/products/${id}`, {
      method: 'DELETE',
    });
  },
};

// Utility function to format price
export const formatPrice = (price: number | null): string => {
  if (price === null) return 'Price not available';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

// Utility function to get product image with fallback
export const getProductImage = (
  imageUrl: string | null,
  productName: string
): string => {
  if (imageUrl) return imageUrl;

  // Return a placeholder image or generate one based on product name
  return `https://via.placeholder.com/300x300/6b7280/ffffff?text=${encodeURIComponent(
    productName
  )}`;
};

// Utility function to check if product is compatible
export const isProductCompatible = (product: Product): boolean => {
  return product.isCompatible;
};

// Utility function to get product category color
export const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    Switches: 'bg-blue-100 text-blue-800',
    Outlets: 'bg-green-100 text-green-800',
    Thermostats: 'bg-purple-100 text-purple-800',
    Lights: 'bg-yellow-100 text-yellow-800',
    Locks: 'bg-red-100 text-red-800',
    Sensors: 'bg-indigo-100 text-indigo-800',
    Cameras: 'bg-pink-100 text-pink-800',
    Speakers: 'bg-orange-100 text-orange-800',
  };

  return colors[category] || 'bg-gray-100 text-gray-800';
};
