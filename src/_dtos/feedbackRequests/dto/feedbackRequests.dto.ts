import { ApiProperty } from '@nestjs/swagger';

export class FeedbackRequestsDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  title: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  content: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  hide_content: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  user_full_name: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  user_email: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  user_address: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  user_phone: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  from_path: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  created_at: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  update_at: Date;
  @ApiProperty({
    type: 'boolean',
  })
  processed: boolean;
}
