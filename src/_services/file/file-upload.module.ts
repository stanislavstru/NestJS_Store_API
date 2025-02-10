import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { ImagesService } from '_entity/images/images.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FileUploadController],
  providers: [FileUploadService, ImagesService],
})
export class FileUploadModule {}
