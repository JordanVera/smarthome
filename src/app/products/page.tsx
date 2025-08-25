'use client';

import { useState, useEffect } from 'react';
import AdminOnly from '@/components/AdminOnly';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { productsApi } from '@/lib/api';
import { RefreshCw } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ProductsTable } from '@/components/tables/ProductsTable';
import { ProductsTableSkeleton } from '@/components/tables/ProductsTableSkeleton';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(25);

  const fetchProducts = async (page = 1, newLimit?: number) => {
    setLoading(true);
    setError(null);

    const currentLimit = newLimit || limit;
    if (newLimit) {
      setLimit(newLimit);
    }

    try {
      const response = await productsApi.getAll({ page, limit: currentLimit });
      setProducts(response.products);
      setTotalProducts(response.pagination.totalCount);
      setTotalPages(response.pagination.totalPages);
      setCurrentPage(page);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchProducts(currentPage);
  };

  const handleLimitChange = (newLimit: string) => {
    const limitNumber = parseInt(newLimit);
    fetchProducts(1, limitNumber); // Reset to page 1 when changing limit
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading && products.length === 0) {
    return (
      <AdminOnly>
        <div className="container mx-auto py-10">
          <div className="flex items-center justify-between mb-8 mt-20">
            <h1 className="text-4xl font-bold gradient-header">
              Products Management
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-6">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-8 w-24" />
              </div>
              <Skeleton className="h-8 w-20" />
            </div>
          </div>
          <ProductsTableSkeleton />
        </div>
      </AdminOnly>
    );
  }

  if (error) {
    return (
      <AdminOnly>
        <div className="container mx-auto py-10">
          <h1 className="text-4xl font-bold gradient-header">
            Products Management
          </h1>
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <p className="text-red-600 mb-4">Error: {error}</p>
              <Button onClick={handleRefresh} variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </AdminOnly>
    );
  }

  return (
    <AdminOnly>
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-between mb-8 mt-20">
          <h1 className="text-4xl font-bold gradient-header">
            Products Management
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-6">
              {/* Results Count */}
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {products.length}
                </span>{' '}
                of {totalProducts} products
                {loading && products.length > 0 && (
                  <span className="ml-2 inline-flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    Updating...
                  </span>
                )}
              </div>

              {/* Page Info */}
              <div className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </div>

              {/* Limit Selector */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Show:</span>
                <Select
                  value={limit.toString()}
                  onValueChange={handleLimitChange}
                >
                  <SelectTrigger className="w-20 h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={handleRefresh}
              variant="outline"
              size="sm"
              disabled={loading}
            >
              <RefreshCw
                className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`}
              />
              {loading ? 'Refreshing...' : 'Refresh'}
            </Button>
          </div>
        </div>

        <ProductsTable products={products} loading={loading} />

        {/* Results Summary */}
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <span>
                Showing{' '}
                <span className="font-medium text-foreground">
                  {products.length}
                </span>{' '}
                of{' '}
                <span className="font-medium text-foreground">
                  {totalProducts}
                </span>{' '}
                products
              </span>
              <span>
                Page{' '}
                <span className="font-medium text-foreground">
                  {currentPage}
                </span>{' '}
                of{' '}
                <span className="font-medium text-foreground">
                  {totalPages}
                </span>
              </span>
              <span>
                Items per page:{' '}
                <span className="font-medium text-foreground">{limit}</span>
              </span>
            </div>
            <div className="text-xs">
              {loading && (
                <span className="inline-flex items-center gap-1 text-blue-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  Loading...
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => fetchProducts(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="px-4 py-2 text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => fetchProducts(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </AdminOnly>
  );
}
