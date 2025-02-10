import { ApiProperty } from '@nestjs/swagger';
import { UsersEntity } from '../../users/entities/users.entity';

export class OauthSessionsEntity {
  @ApiProperty({
    type: 'string',
  })
  id: string;
  @ApiProperty({
    type: 'string',
  })
  user_id: string;
  @ApiProperty({
    type: () => UsersEntity,
    required: false,
  })
  users?: UsersEntity;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  session_id: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  provider_type: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  access_token: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  access_expires_at: Date | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  refresh_token: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  created_at: Date;
}
