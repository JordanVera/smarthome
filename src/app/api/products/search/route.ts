import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Search parameters
    const query = searchParams.get('q') || '';
    const category = searchParams.get('category');
    const manufacturer = searchParams.get('manufacturer');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const isCompatible = searchParams.get('isCompatible');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const sortBy = searchParams.get('sortBy') || 'name';
    const sortOrder = searchParams.get('sortOrder') || 'asc';

    // Build where clause
    const where: any = {};

    // Text search across multiple fields
    if (query) {
      where.OR = [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { manufacturer: { contains: query, mode: 'insensitive' } },
        { brand: { contains: query, mode: 'insensitive' } },
        { category: { contains: query, mode: 'insensitive' } },
      ];
    }

    // Category filter
    if (category) {
      where.category = category;
    }

    // Manufacturer filter
    if (manufacturer) {
      where.OR = [
        { manufacturer: { contains: manufacturer, mode: 'insensitive' } },
        { brand: { contains: manufacturer, mode: 'insensitive' } },
      ];
    }

    // Price range filter
    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) {
        where.price.gte = parseFloat(minPrice);
      }
      if (maxPrice) {
        where.price.lte = parseFloat(maxPrice);
      }
    }

    // Compatibility filter
    if (isCompatible !== null && isCompatible !== undefined) {
      where.isCompatible = isCompatible === 'true';
    }

    // Pagination
    const skip = (page - 1) * limit;

    // Build orderBy clause
    let orderBy: any = {};
    if (sortBy === 'price') {
      orderBy.price = sortOrder;
    } else if (sortBy === 'category') {
      orderBy.category = sortOrder;
    } else if (sortBy === 'manufacturer') {
      orderBy.manufacturer = sortOrder;
    } else {
      orderBy.name = sortOrder;
    }

    // Execute search
    const [products, totalCount] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: [orderBy, { name: 'asc' }], // Secondary sort by name
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

    // Get search suggestions for autocomplete
    const suggestions = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { category: { contains: query, mode: 'insensitive' } },
          { manufacturer: { contains: query, mode: 'insensitive' } },
        ],
      },
      take: 5,
      select: {
        name: true,
        category: true,
        manufacturer: true,
      },
    });

    const response = {
      query,
      products,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
        hasNextPage,
        hasPreviousPage,
      },
      filters: {
        category,
        manufacturer,
        minPrice: minPrice ? parseFloat(minPrice) : null,
        maxPrice: maxPrice ? parseFloat(maxPrice) : null,
        isCompatible: isCompatible ? isCompatible === 'true' : null,
      },
      sorting: {
        sortBy,
        sortOrder,
      },
      suggestions: suggestions.map((s) => ({
        text: s.name,
        category: s.category,
        manufacturer: s.manufacturer,
      })),
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error searching products:', error);
    return NextResponse.json(
      { error: 'Failed to search products' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
