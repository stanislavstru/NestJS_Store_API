import { Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PreOrdersDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
  @ApiProperty({
    type: () => Object,
  })
  product: Prisma.JsonValue;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  product_quantity: number;
  @ApiProperty({
    type: 'string',
  })
  user_address: string;
  @ApiProperty({
    type: 'string',
  })
  user_full_name: string;
  @ApiProperty({
    type: 'string',
  })
  user_email: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  content: string | null;
}
