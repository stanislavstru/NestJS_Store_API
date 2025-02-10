import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { PrismaModule } from 'prisma/prisma.module';
import { MainConfigService } from '_entity/main_config/main_config.service';
import { ProductsService } from '@/_entity/products/products.service';

@Module({
  imports: [PrismaModule],
  controllers: [CartController],
  providers: [ProductsService, MainConfigService, CartService],
})
export class CartModule {}
