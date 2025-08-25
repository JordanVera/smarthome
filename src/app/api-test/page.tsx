'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Product {
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
}

interface ApiResponse {
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

export default function ApiTestPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = async (page = 1, category = '', search = '') => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      if (page > 1) params.append('page', page.toString());
      if (category) params.append('category', category);
      if (search) params.append('search', search);

      const response = await fetch(`/api/products?${params.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch products');

      const data: ApiResponse = await response.json();
      setProducts(data.products);
      setApiResponse(data);
      setCurrentPage(page);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const categoryFilter = selectedCategory === 'all' ? '' : selectedCategory;
    fetchProducts(1, categoryFilter, searchQuery);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // If "all" is selected, pass empty string to fetch all categories
    const categoryFilter = category === 'all' ? '' : category;
    fetchProducts(1, categoryFilter, searchQuery);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">API Test Page</h1>
        <p className="text-muted-foreground">
          Test the products API endpoints and view database data
        </p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="search">Search Products</Label>
              <Input
                id="search"
                placeholder="Search by name, description, manufacturer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <div className="w-48">
              <Label htmlFor="category">Category</Label>
              <Select
                value={selectedCategory}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {apiResponse?.summary.categories.map((cat) => (
                    <SelectItem key={cat.category} value={cat.category}>
                      {cat.category} ({cat.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button onClick={handleSearch} disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API Response Summary */}
      {apiResponse && (
        <Card>
          <CardHeader>
            <CardTitle>API Response Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {apiResponse.summary.totalProducts}
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Products
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {apiResponse.summary.categories.length}
                </div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {apiResponse.pagination.totalPages}
                </div>
                <div className="text-sm text-muted-foreground">Total Pages</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Products List */}
      <Card>
        <CardHeader>
          <CardTitle>
            Products ({products.length} of{' '}
            {apiResponse?.pagination.totalCount || 0})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
              <p className="mt-2">Loading products...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-600">
              <p>Error: {error}</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>No products found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {product.manufacturer || product.brand} •{' '}
                        {product.category}
                      </p>
                      {product.description && (
                        <p className="text-sm mb-2">{product.description}</p>
                      )}
                      <div className="flex items-center gap-4 text-sm">
                        {product.price && (
                          <span className="font-medium text-green-600">
                            ${Number(product.price).toFixed(2)}
                          </span>
                        )}
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            product.isCompatible
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {product.isCompatible
                            ? 'Compatible'
                            : 'Not Compatible'}
                        </span>
                      </div>
                    </div>
                    {product.imageUrl && (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg ml-4"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pagination */}
      {apiResponse && apiResponse.pagination.totalPages > 1 && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Page {currentPage} of {apiResponse.pagination.totalPages}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    const categoryFilter =
                      selectedCategory === 'all' ? '' : selectedCategory;
                    fetchProducts(currentPage - 1, categoryFilter, searchQuery);
                  }}
                  disabled={!apiResponse.pagination.hasPreviousPage}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const categoryFilter =
                      selectedCategory === 'all' ? '' : selectedCategory;
                    fetchProducts(currentPage + 1, categoryFilter, searchQuery);
                  }}
                  disabled={!apiResponse.pagination.hasNextPage}
                >
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* API Endpoints Info */}
      <Card>
        <CardHeader>
          <CardTitle>Available API Endpoints</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div>
              <strong>GET /api/products</strong> - Get all products with
              pagination and filters
            </div>
            <div>
              <strong>GET /api/products/[id]</strong> - Get a specific product
              by ID
            </div>
            <div>
              <strong>GET /api/products/categories</strong> - Get all categories
              and manufacturers
            </div>
            <div>
              <strong>GET /api/products/search</strong> - Advanced search with
              multiple filters
            </div>
            <div>
              <strong>POST /api/products</strong> - Create a new product
            </div>
            <div>
              <strong>PUT /api/products/[id]</strong> - Update a product
            </div>
            <div>
              <strong>DELETE /api/products/[id]</strong> - Delete a product
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
