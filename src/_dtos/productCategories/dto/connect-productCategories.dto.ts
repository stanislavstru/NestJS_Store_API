import { ApiProperty } from '@nestjs/swagger';

export class ConnectProductCategoriesDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
}
