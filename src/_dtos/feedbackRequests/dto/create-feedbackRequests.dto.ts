import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedbackRequestsDto {
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  title?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  content?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  hide_content?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  user_full_name?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  user_email?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  user_address?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  user_phone?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  from_path?: string | null;
}
