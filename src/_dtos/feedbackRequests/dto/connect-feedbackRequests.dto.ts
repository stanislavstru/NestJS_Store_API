import { ApiProperty } from '@nestjs/swagger';

export class ConnectFeedbackRequestsDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;
}
