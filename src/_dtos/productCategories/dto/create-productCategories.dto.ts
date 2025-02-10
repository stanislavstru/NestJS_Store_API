import { ApiProperty } from '@nestjs/swagger';

export class CreateProductCategoriesDto {
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
}
