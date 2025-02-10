import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { users as UsersModel } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'auth/roles/roles.guard';
import { Roles } from 'auth/roles/roles.decorator';
import { Role } from 'auth/roles/roles.enum';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles(Role.CUSTOMER)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async findAll(): Promise<UsersModel[]> {
    return this.usersService.users({});
  }

  @Get(':id')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async findById(@Param('id') id: string): Promise<UsersModel> {
    return this.usersService.user({ id });
  }
}
