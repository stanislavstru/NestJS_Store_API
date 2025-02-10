import { ApiProperty } from '@nestjs/swagger';

export class ConnectPreOrdersDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
}
