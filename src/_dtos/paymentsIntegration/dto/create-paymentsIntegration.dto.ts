import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentsIntegrationDto {
  @ApiProperty({
    type: 'string',
  })
  payment_type: string;
  @ApiProperty({
    type: 'string',
  })
  payment_secret: string;
}
