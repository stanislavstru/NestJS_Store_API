import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ProductCategoriesService } from './product_categories.service';
import { CreateProductCategoriesDto } from '_dtos/productCategories/dto';
import { UpdateProductCategoriesDto } from '_dtos/productCategories/dto';
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
import { ProductCategoriesEntity } from '_dtos/productCategories/entities';
import { ResponseInterceptor } from 'interceptors/response.interceptor';

@Controller('product-categories')
@ApiTags('Product Categories')
export class ProductCategoriesController {
  constructor(
    private readonly productCategoriesService: ProductCategoriesService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiCreatedResponse({ type: ProductCategoriesEntity })
  create(@Body() createProductCategoryDto: CreateProductCategoriesDto) {
    return this.productCategoriesService.create(createProductCategoryDto);
  }

  @Get()
  @ApiOkResponse({ type: ProductCategoriesEntity, isArray: true })
  @UseInterceptors(ResponseInterceptor)
  findAll() {
    return this.productCategoriesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ProductCategoriesEntity })
  findOne(@Param('id') id: string) {
    return this.productCategoriesService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiOkResponse({ type: ProductCategoriesEntity })
  update(
    @Param('id') id: string,
    @Body() updateProductCategoryDto: UpdateProductCategoriesDto,
  ) {
    return this.productCategoriesService.update(id, updateProductCategoryDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productCategoriesService.remove(id);
  // }
}
