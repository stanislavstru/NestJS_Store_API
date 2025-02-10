import { ApiProperty } from '@nestjs/swagger';

export class ConnectUsersDto {
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  id?: string;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  email?: string;
}
