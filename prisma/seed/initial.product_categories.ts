import { PrismaClient } from '@prisma/client';
import { CreateProductCategoriesDto } from '_dtos/productCategories/dto';

const productCategoryList: Exclude<CreateProductCategoriesDto, 'id'>[] = [
  {
    title: 'Item 1',
    position: 1,
    image_url: 'https://picsum.photos/200/300',
  },
  {
    title: 'Item 2',
    position: 2,
    image_url: 'https://picsum.photos/200/300',
  },
];

const prisma = new PrismaClient();

export async function seedProductCategories() {
  for (const productCategory of productCategoryList) {
    const existing = await prisma.product_categories.findFirst({
      where: {
        title: productCategory.title,
      },
    });

    if (existing) {
      console.log(
        `Main config with key ${productCategory.title} already exists`,
      );
      continue;
    }

    const result = await prisma.product_categories.create({
      data: productCategory,
    });

    console.log(result);
  }
}
