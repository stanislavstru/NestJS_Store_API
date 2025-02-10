import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderNumberSeqDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  orderId: number;
}
