'use client';

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
import PRODUCTS from '@/constants/PRODUCTS';
import { Product } from '@/types/product';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function ProductsPage() {
  return (
    <AdminOnly>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8 mt-20">Products Management</h1>
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
              {PRODUCTS.map((product: Product, index: number) => (
                <TableRow
                  key={product.id}
                  className={index % 2 === 0 ? 'bg-muted/70' : ''}
                >
                  <TableCell className="w-24">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium max-w-[200px]">
                    {product.name}
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.manufacturer}</TableCell>
                  <TableCell className="max-w-[300px]">
                    <p className="line-clamp-2">{product.description}</p>
                  </TableCell>
                  <TableCell className="text-right">
                    ${product.price.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open(product.purchaseLink, '_blank')
                      }
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
      </div>
    </AdminOnly>
  );
}
