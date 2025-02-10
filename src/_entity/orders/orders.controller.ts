import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'auth/roles/roles.guard';
import { Roles } from 'auth/roles/roles.decorator';
import { Role } from 'auth/roles/roles.enum';
import { OrdersService } from './orders.service';
import { CreateOrdersDto } from '@/_dtos';
// import { UpdateOrdersDto } from '@/_dtos';
import { OrdersEntity } from '@/_dtos';

@Controller('orders')
@ApiTags('Orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiCreatedResponse({ type: CreateOrdersDto })
  create(@Body() createOrderDto: CreateOrdersDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiOkResponse({ type: OrdersEntity, isArray: true })
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiOkResponse({ type: OrdersEntity })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }
}
