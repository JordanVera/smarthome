import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // Get all categories with product counts
    const categories = await prisma.product.groupBy({
      by: ['category'],
      _count: {
        category: true,
      },
      orderBy: {
        category: 'asc',
      },
    });

    // Get total product count
    const totalProducts = await prisma.product.count();

    // Get manufacturers with counts
    const manufacturers = await prisma.product.groupBy({
      by: ['manufacturer'],
      _count: {
        manufacturer: true,
      },
      where: {
        manufacturer: {
          not: null,
        },
      },
      orderBy: {
        _count: {
          manufacturer: 'desc',
        },
      },
    });

    const response = {
      categories: categories.map((cat) => ({
        name: cat.category,
        count: cat._count.category,
      })),
      manufacturers: manufacturers.map((man) => ({
        name: man.manufacturer,
        count: man._count.manufacturer,
      })),
      summary: {
        totalCategories: categories.length,
        totalProducts,
        totalManufacturers: manufacturers.length,
      },
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
