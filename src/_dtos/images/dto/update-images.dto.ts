import { ApiProperty } from '@nestjs/swagger';

export class UpdateImagesDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  image_url?: string;
  @ApiProperty({
    type: 'string',
    required: false,
  })
  image_type?: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  image_size?: number;
}
