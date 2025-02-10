import { ApiProperty } from '@nestjs/swagger';

export class ConnectOrderNumberSeqDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
}
