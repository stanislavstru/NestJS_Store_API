import { Injectable } from '@nestjs/common';
import { CreateProductCategoriesDto } from '_dtos/productCategories/dto';
import { UpdateProductCategoriesDto } from '_dtos/productCategories/dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProductCategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createProductCategoriesDto: CreateProductCategoriesDto) {
    return this.prisma.product_categories.create({
      data: createProductCategoriesDto,
    });
  }

  findAll() {
    return this.prisma.product_categories.findMany();
  }

  findOne(id: string) {
    return this.prisma.product_categories.findUnique({ where: { id } });
  }

  update(id: string, updateProductCategoriesDto: UpdateProductCategoriesDto) {
    return this.prisma.product_categories.update({
      where: { id },
      data: updateProductCategoriesDto,
    });
  }

  // remove(id: string) {
  //   return this.prisma.product_categories.update({
  //     where: { id },
  //     data: { deleted: true, deleted_at: new Date() },
  //   });
  // }
}
