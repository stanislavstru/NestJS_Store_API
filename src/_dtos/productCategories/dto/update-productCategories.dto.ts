import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductCategoriesDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  title?: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  position?: number;
  @ApiProperty({
    type: 'string',
    required: false,
  })
  image_url?: string;
}
