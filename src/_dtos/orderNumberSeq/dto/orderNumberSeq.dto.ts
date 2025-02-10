import { ApiProperty } from '@nestjs/swagger';

export class OrderNumberSeqDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  orderId: number;
}
