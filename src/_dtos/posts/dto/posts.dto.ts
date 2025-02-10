import { ApiProperty } from '@nestjs/swagger';

export class PostsDto {
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
    type: 'boolean',
  })
  published: boolean;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  created_at: Date;
}
