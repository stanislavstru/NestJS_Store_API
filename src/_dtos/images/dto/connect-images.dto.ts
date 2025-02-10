import { ApiProperty } from '@nestjs/swagger';

export class ConnectImagesDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
}
