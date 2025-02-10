import { ApiProperty } from '@nestjs/swagger';

export class UpdateMainConfigDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  config_key?: string;
  @ApiProperty({
    type: 'string',
    required: false,
  })
  config_value?: string;
}
