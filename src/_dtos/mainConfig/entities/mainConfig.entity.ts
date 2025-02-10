import { ApiProperty } from '@nestjs/swagger';

export class MainConfigEntity {
  @ApiProperty({
    type: 'string',
  })
  id: string;
  @ApiProperty({
    type: 'string',
  })
  config_key: string;
  @ApiProperty({
    type: 'string',
  })
  config_value: string;
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
