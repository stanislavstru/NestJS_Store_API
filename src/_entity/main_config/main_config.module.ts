import { Module } from '@nestjs/common';
import { MainConfigService } from './main_config.service';
import { MainConfigController } from './main_config.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MainConfigController],
  providers: [MainConfigService],
})
export class MainConfigModule {}
