import { Module } from '@nestjs/common';
import { FeedbackRequestsService } from './feedback_requests.service';
import { FeedbackRequestsController } from './feedback_requests.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { EmailsService } from '@/_services/emails/emails.service';
import { TelegramService } from '@/_services/telegram/telegram.service';
import { MainConfigService } from '../main_config/main_config.service';

@Module({
  imports: [PrismaModule],
  controllers: [FeedbackRequestsController],
  providers: [
    FeedbackRequestsService,
    MainConfigService,
    EmailsService,
    TelegramService,
  ],
})
export class FeedbackRequestsModule {}
