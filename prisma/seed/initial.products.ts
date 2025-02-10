import { PrismaClient } from '@prisma/client';
import { CreateProductsDto } from '_dtos/products/dto/create-products.dto';
import Decimal from 'decimal.js';

const productsList: Exclude<CreateProductsDto, 'id'>[] = [
  {
    position: 2,
    slug: 'product-title-1',
    images: [
      'https://picsum.photos/1000/1000',
      'https://picsum.photos/1000/1000',
    ],
    social_media_links: null,
    title: 'Product Title 1',
    short_description: 'Short description for product 1',
    description: `Description for product 1`,
    category_id: null,
    quantity: 0,
    item_weight_primary: 3,
    item_weight_secondary: 3,
    item_length: 3,
    item_width: 3,
    item_height: 3,
    price: new Decimal(100),
  },
  {
    position: 2,
    slug: 'product-title-2',
    images: [
      'https://picsum.photos/1000/1000',
      'https://picsum.photos/1000/1000',
    ],
    social_media_links: null,
    title: 'Product Title 2',
    short_description: 'Short description for product 2',
    description: `Description for product 2`,
    category_id: null,
    quantity: 0,
    item_weight_primary: 3,
    item_weight_secondary: 3,
    item_length: 3,
    item_width: 3,
    item_height: 3,
    price: new Decimal(101),
  },
];

const prisma = new PrismaClient();

export async function seedProducts() {
  for (const product of productsList) {
    const existing = await prisma.products.findFirst({
      where: {
        title: product.title,
      },
    });

    if (existing) {
      console.log(`Main config with key ${product.title} already exists`);
      continue;
    }

    const result = await prisma.products.create({
      data: product,
    });

    console.log(result);
  }
}
