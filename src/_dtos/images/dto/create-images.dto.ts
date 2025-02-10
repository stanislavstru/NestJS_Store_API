import { ApiProperty } from '@nestjs/swagger';

export class CreateImagesDto {
  @ApiProperty({
    type: 'string',
  })
  image_url: string;
  @ApiProperty({
    type: 'string',
  })
  image_type: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  image_size: number;
}
