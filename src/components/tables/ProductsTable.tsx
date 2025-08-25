'use client';

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
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface ProductsTableProps {
  products: Product[];
  loading?: boolean;
}

export function ProductsTable({
  products,
  loading = false,
}: ProductsTableProps) {
  return (
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
              className={`${index % 2 === 0 ? 'bg-muted/70' : ''} ${
                loading ? 'opacity-60' : ''
              }`}
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
                {product.price ? `$${Number(product.price).toFixed(2)}` : 'N/A'}
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
  );
}
