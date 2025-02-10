import { Injectable } from '@nestjs/common';
import { users, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(where: Prisma.usersWhereUniqueInput): Promise<users | null> {
    return this.prisma.users.findUnique({
      where,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.usersWhereUniqueInput;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput;
  }): Promise<users[]> {
    const { skip, take, cursor, where, orderBy } = params;
    const result = this.prisma.users.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });

    console.log('result', result);

    return result;
  }

  async findUnique(params: {
    where: Prisma.usersWhereUniqueInput;
  }): Promise<users | null> {
    const { where } = params;
    return this.prisma.users.findUnique({ where });
  }

  async createUser(data: Prisma.usersCreateInput): Promise<users> {
    return this.prisma.users.create({ data });
  }

  async updateUser(params: {
    where: Prisma.usersWhereUniqueInput;
    data: Prisma.usersUpdateInput;
  }): Promise<users> {
    const { where, data } = params;
    return this.prisma.users.update({
      data,
      where,
    });
  }

  async removeUser(where: Prisma.usersWhereUniqueInput): Promise<users> {
    return this.prisma.users.delete({ where });
  }
}
