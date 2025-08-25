import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // Get query parameters for filtering and pagination
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const manufacturer = searchParams.get('manufacturer');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const search = searchParams.get('search');

    // Build where clause for filtering
    const where: any = {};

    if (category) {
      where.category = category;
    }

    if (manufacturer) {
      where.OR = [
        { manufacturer: { contains: manufacturer, mode: 'insensitive' } },
        { brand: { contains: manufacturer, mode: 'insensitive' } },
      ];
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { manufacturer: { contains: search, mode: 'insensitive' } },
        { brand: { contains: search, mode: 'insensitive' } },
      ];
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Get products with pagination
    const [products, totalCount] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ category: 'asc' }, { name: 'asc' }],
        select: {
          id: true,
          name: true,
          brand: true,
          manufacturer: true,
          category: true,
          price: true,
          imageUrl: true,
          description: true,
          purchaseLink: true,
          isCompatible: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      prisma.product.count({ where }),
    ]);

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPreviousPage = page > 1;

    // Get category counts for summary
    const categoryCounts = await prisma.product.groupBy({
      by: ['category'],
      _count: {
        category: true,
      },
    });

    const response = {
      products,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
        hasNextPage,
        hasPreviousPage,
      },
      summary: {
        totalProducts: totalCount,
        categories: categoryCounts.map((cat) => ({
          category: cat.category,
          count: cat._count.category,
        })),
      },
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.category) {
      return NextResponse.json(
        { error: 'Name and category are required' },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        name: body.name,
        brand: body.brand,
        manufacturer: body.manufacturer,
        category: body.category,
        price: body.price ? parseFloat(body.price) : null,
        imageUrl: body.imageUrl,
        description: body.description,
        purchaseLink: body.purchaseLink,
        isCompatible: body.isCompatible ?? true,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
