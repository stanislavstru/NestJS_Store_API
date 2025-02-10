import { ApiProperty } from '@nestjs/swagger';

export class ConnectMainConfigDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
}
