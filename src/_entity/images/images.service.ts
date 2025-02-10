import { Injectable } from '@nestjs/common';
import { CreateImagesDto } from '_dtos/images/dto';
import { UpdateImagesDto } from '_dtos/images/dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ImagesService {
  constructor(private prisma: PrismaService) {}

  create(createImagesDto: CreateImagesDto) {
    return this.prisma.images.create({ data: createImagesDto });
  }

  findAll() {
    return this.prisma.images.findMany();
  }

  findOne(id: string) {
    return this.prisma.images.findUnique({ where: { id } });
  }

  update(id: string, updateImagesDto: UpdateImagesDto) {
    return this.prisma.images.update({
      where: { id },
      data: updateImagesDto,
    });
  }

  // remove(id: string) {
  //   return this.prisma.images.update({
  //     where: { id },
  //     data: { deleted: true, deleted_at: new Date() },
  //   });
  // }
}
