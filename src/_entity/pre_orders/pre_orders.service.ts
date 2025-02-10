import { Injectable } from '@nestjs/common';
import { CreatePreOrdersDto } from '@/_dtos';
import { UpdatePreOrdersDto } from '@/_dtos';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PreOrdersService {
  constructor(private prisma: PrismaService) {}

  create(createPreOrderDto: CreatePreOrdersDto) {
    return this.prisma.pre_orders.create({
      data: createPreOrderDto,
    });
  }

  findAll() {
    return this.prisma.pre_orders.findMany();
  }

  findOne(id: string) {
    return this.prisma.pre_orders.findUnique({ where: { id } });
  }

  update(id: string, updatePreOrderDtoDto: UpdatePreOrdersDto) {
    return this.prisma.pre_orders.update({
      where: { id },
      data: updatePreOrderDtoDto,
    });
  }
}
