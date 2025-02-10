import { ApiProperty } from '@nestjs/swagger';
import { ProductsEntity } from '../../products/entities/products.entity';

export class ProductCategoriesEntity {
  @ApiProperty({
    type: 'string',
  })
  id: string;
  @ApiProperty({
    type: 'string',
  })
  title: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  position: number;
  @ApiProperty({
    type: 'string',
  })
  image_url: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  created_at: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  updated_at: Date;
  @ApiProperty({
    type: () => ProductsEntity,
    isArray: true,
    required: false,
  })
  products?: ProductsEntity[];
}
