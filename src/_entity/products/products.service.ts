import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateProductsDto } from '_dtos/products/dto/create-products.dto';
import { UpdateProductsDto } from '_dtos/products/dto/update-products.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductsDto) {
    return this.prisma.products.create({ data: createProductDto });
  }

  findAll() {
    return this.prisma.products.findMany();
  }

  findOne(id: string) {
    return this.prisma.products.findUnique({ where: { id } });
  }

  findByIds(ids: string[]) {
    return this.prisma.products.findMany({ where: { id: { in: ids } } });
  }

  findOneBySlug(slug: string) {
    return this.prisma.products.findUnique({ where: { slug } });
  }

  update(id: string, updateProductDto: UpdateProductsDto) {
    return this.prisma.products.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async changeQuantity(id: string, purchasedQuantity: number) {
    const product = await this.prisma.products.findUnique({ where: { id } });

    if (!product) throw new BadRequestException('Product not found');

    if (product.quantity === 0)
      throw new BadRequestException('Product is out of stock');

    if (product.quantity < purchasedQuantity)
      throw new BadRequestException('Insufficient quantity');

    if (product) {
      return this.prisma.products.update({
        where: { id },
        data: { quantity: product.quantity - purchasedQuantity },
      });
    }

    return null;
  }

  remove(id: string) {
    return this.prisma.products.update({
      where: { id },
      data: { is_deleted: true },
    });
  }
}
