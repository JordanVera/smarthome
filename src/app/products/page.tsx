'use client';

import { useState, useEffect } from 'react';
import AdminOnly from '@/components/AdminOnly';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { productsApi } from '@/lib/api';
import Image from 'next/image';
import { ExternalLink, Loader2, RefreshCw } from 'lucide-react';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (page = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await productsApi.getAll({ page, limit: 25 });
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

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading && products.length === 0) {
    return (
      <AdminOnly>
        <div className="container mx-auto py-10">
          <h1 className="mb-8 mt-20 gradient-header">Products Management</h1>
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin" />
            <span className="ml-2">Loading products...</span>
          </div>
        </div>
      </AdminOnly>
    );
  }

  if (error) {
    return (
      <AdminOnly>
        <div className="container mx-auto py-10">
          <h1 className="mb-8 mt-20 gradient-header">Products Management</h1>
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
            <span className="text-sm text-muted-foreground">
              {totalProducts} products • Page {currentPage} of {totalPages}
            </span>
            <Button onClick={handleRefresh} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Manufacturer</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product, index) => (
                <TableRow
                  key={product.id}
                  className={index % 2 === 0 ? 'bg-muted/70' : ''}
                >
                  <TableCell className="w-24">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      {product.imageUrl ? (
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center text-xs text-muted-foreground">
                          No Image
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium max-w-[200px]">
                    {product.name}
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    {product.manufacturer || product.brand || 'N/A'}
                  </TableCell>
                  <TableCell className="max-w-[300px]">
                    <p className="line-clamp-2">
                      {product.description || 'No description available'}
                    </p>
                  </TableCell>
                  <TableCell className="text-right">
                    {product.price
                      ? `$${Number(product.price).toFixed(2)}`
                      : 'N/A'}
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (product.purchaseLink) {
                          window.open(product.purchaseLink, '_blank');
                        }
                      }}
                      disabled={!product.purchaseLink}
                      className="inline-flex items-center gap-2"
                    >
                      View <ExternalLink className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
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
