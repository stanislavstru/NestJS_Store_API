import { Module } from '@nestjs/common';
import { PreOrdersService } from './pre_orders.service';
import { PreOrdersController } from './pre_orders.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { EmailsService } from '@/_services/emails/emails.service';
import { MainConfigService } from '@/_entity/main_config/main_config.service';
import { TelegramService } from '@/_services/telegram/telegram.service';

@Module({
  imports: [PrismaModule],
  controllers: [PreOrdersController],
  providers: [
    PreOrdersService,
    MainConfigService,
    EmailsService,
    TelegramService,
  ],
})
export class PreOrdersModule {}
