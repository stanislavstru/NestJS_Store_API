import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderNumberSeqDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  orderId?: number;
}
