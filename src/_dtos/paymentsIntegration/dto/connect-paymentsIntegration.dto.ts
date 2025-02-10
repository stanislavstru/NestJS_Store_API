import { ApiProperty } from '@nestjs/swagger';

export class ConnectPaymentsIntegrationDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
}
