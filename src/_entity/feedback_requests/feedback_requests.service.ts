import { Injectable } from '@nestjs/common';
import { CreateFeedbackRequestsDto } from '_dtos/feedbackRequests/dto';
import { UpdateFeedbackRequestsDto } from '_dtos/feedbackRequests/dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class FeedbackRequestsService {
  constructor(private prisma: PrismaService) {}

  create(createProductCategoriesDto: CreateFeedbackRequestsDto) {
    return this.prisma.feedback_requests.create({
      data: createProductCategoriesDto,
    });
  }

  findAll() {
    return this.prisma.feedback_requests.findMany();
  }

  findOne(id: string) {
    return this.prisma.feedback_requests.findUnique({ where: { id } });
  }

  update(id: string, updateProductCategoriesDto: UpdateFeedbackRequestsDto) {
    return this.prisma.feedback_requests.update({
      where: { id },
      data: updateProductCategoriesDto,
    });
  }
}
