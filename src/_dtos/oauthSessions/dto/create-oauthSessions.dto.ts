import { ApiProperty } from '@nestjs/swagger';

export class CreateOauthSessionsDto {
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  session_id?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  provider_type?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  access_token?: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  access_expires_at?: Date | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  refresh_token?: string | null;
}
