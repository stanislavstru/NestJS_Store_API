import { ApiProperty } from '@nestjs/swagger';

export class UpdatePaymentsIntegrationDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  payment_type?: string;
  @ApiProperty({
    type: 'string',
    required: false,
  })
  payment_secret?: string;
}
