import { Injectable } from '@nestjs/common';
import { CreateOrdersDto } from '@/_dtos/orders/dto/create-orders.dto';
import { UpdateOrdersDto } from '@/_dtos/orders/dto/update-orders.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateOrdersDto) {
    return this.prisma.orders.create({
      data: createProductDto,
    });
  }

  findAll() {
    return this.prisma.orders.findMany();
  }

  findOne(id: string) {
    return this.prisma.orders.findUnique({ where: { id } });
  }

  findByIds(ids: string[]) {
    return this.prisma.orders.findMany({ where: { id: { in: ids } } });
  }

  findByPaymentId(paymentId: string) {
    return this.prisma.orders.findUnique({ where: { payment_id: paymentId } });
  }

  update(id: string, updateProductDto: UpdateOrdersDto) {
    return this.prisma.orders.update({
      where: { id },
      data: updateProductDto,
    });
  }
}
