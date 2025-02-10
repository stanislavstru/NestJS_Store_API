import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from '_dtos/products/dto/create-products.dto';
import { UpdateProductsDto } from '_dtos/products/dto/update-products.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'auth/roles/roles.guard';
import { Roles } from 'auth/roles/roles.decorator';
import { Role } from 'auth/roles/roles.enum';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ProductsEntity } from '_dtos/products/entities/products.entity';
import { ValidationPipe } from 'validation/validation.pipe';
import { ResponseInterceptor } from 'interceptors/response.interceptor';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiCreatedResponse({ type: ProductsEntity })
  create(@Body(new ValidationPipe()) createProductDto: CreateProductsDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOkResponse({ type: ProductsEntity, isArray: true })
  @UseInterceptors(ResponseInterceptor)
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ProductsEntity })
  findOneById(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Get('slug/:slug')
  @ApiOkResponse({ type: ProductsEntity })
  findOneBySlug(@Param('slug') slug: string) {
    return this.productsService.findOneBySlug(slug);
  }

  @Post('find')
  @ApiOkResponse({ type: ProductsEntity, isArray: true })
  findByIds(@Body() ids: string[]) {
    return this.productsService.findByIds(ids);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiOkResponse({ type: ProductsEntity })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductsDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiOkResponse({ type: ProductsEntity })
  delete(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
