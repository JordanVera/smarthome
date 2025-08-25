import { PrismaClient } from '@prisma/client';
import PRODUCTS from '../src/constants/PRODUCTS';
import chalk from 'chalk';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  try {
    // Clear existing products
    console.log(chalk.blue('🗑️  Clearing existing products...'));
    await prisma.product.deleteMany();

    // Seed products
    console.log(chalk.bgMagenta('📦 Seeding products...'));

    const createdProducts = [];

    for (const product of PRODUCTS) {
      const createdProduct = await prisma.product.create({
        data: {
          name: product.name,
          brand: product.manufacturer,
          manufacturer: product.manufacturer,
          category: product.category,
          price: product.price,
          imageUrl: product.image,
          description: product.description,
          purchaseLink: product.purchaseLink,
          isCompatible: true, // Set default compatibility
        },
      });

      createdProducts.push(createdProduct);
      console.log(
        chalk.green(`✅ Created product: ${product.name} (${product.category})`)
      );
    }

    console.log(
      chalk.bgGreen.black(
        `🎉 Successfully seeded ${createdProducts.length} products!`
      )
    );

    // Display summary by category
    const categoryCounts = createdProducts.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    console.log('\n📊 Products by category:');
    Object.entries(categoryCounts).forEach(([category, count]) => {
      console.log(`  ${category}: ${count} products`);
    });
  } catch (error) {
    console.error('❌ Error during seeding:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error('❌ Fatal error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log(chalk.bgGreen.black('🔌 Disconnected from database'));
  });
