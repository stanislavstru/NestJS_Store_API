import { ApiProperty } from '@nestjs/swagger';

export class CreateMainConfigDto {
  @ApiProperty({
    type: 'string',
  })
  config_key: string;
  @ApiProperty({
    type: 'string',
  })
  config_value: string;
}
