import { ApiProperty } from '@nestjs/swagger';

export class ConnectOauthSessionsDto {
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
  user_id?: string;
}
