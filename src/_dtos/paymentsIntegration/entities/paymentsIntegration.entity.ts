import { ApiProperty } from '@nestjs/swagger';

export class PaymentsIntegrationEntity {
  @ApiProperty({
    type: 'string',
  })
  id: string;
  @ApiProperty({
    type: 'string',
  })
  payment_type: string;
  @ApiProperty({
    type: 'string',
  })
  payment_secret: string;
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
