import { Module } from '@nestjs/common';

import { PaymentsController } from './payments.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { MainConfigService } from '_entity/main_config/main_config.service';
import { StripeService } from './stripe/stripe.service';
import { UsersService } from '@/_entity/users/users.service';
import { OrdersService } from '@/_entity/orders/orders.service';
import { ProductsService } from '@/_entity/products/products.service';
import { TelegramService } from '../telegram/telegram.service';
import { EmailsService } from '../emails/emails.service';

@Module({
  imports: [PrismaModule],
  controllers: [PaymentsController],
  providers: [
    MainConfigService,
    StripeService,
    UsersService,
    OrdersService,
    ProductsService,
    TelegramService,
    EmailsService,
  ],
})
export class PaymentsModule {}
