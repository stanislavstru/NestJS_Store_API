import { ApiProperty } from '@nestjs/swagger';

export class ImagesDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
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
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  created_at: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  update_at: Date;
}
