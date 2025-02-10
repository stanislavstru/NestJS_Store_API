import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from './file-upload.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'auth/roles/roles.guard';
import { Roles } from 'auth/roles/roles.decorator';
import { Role } from 'auth/roles/roles.enum';
import {
  memoryStorage,
  //  diskStorage
} from 'multer';

@ApiBearerAuth()
@Controller('file')
@ApiTags('Upload File')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  // @Post('upload-to-home-server')
  // @ApiConsumes('multipart/form-data')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: './uploads',
  //       filename: (_, file, cb) => {
  //         const filename = `${Date.now()}-${file.originalname}`;
  //         cb(null, filename);
  //       },
  //     }),
  //   }),
  // )
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       file: {
  //         type: 'string',
  //         format: 'binary',
  //       },
  //     },
  //   },
  // })
  // @Roles(Role.ADMIN)
  // @UseGuards(AuthGuard('jwt'), RolesGuard)
  // uploadFileToHomeServer(@UploadedFile() file: Express.Multer.File) {
  //   return this.fileUploadService.fileUploadToHomeServer(file);
  // }

  @Post('upload-to-vercel-blob')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
    }),
  )
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  uploadFileToVercelBlob(@UploadedFile() file: Express.Multer.File) {
    if (!file || !file.buffer) {
      throw new Error('No file or buffer provided');
    }

    const { originalname, buffer, size } = file;
    return this.fileUploadService.fileUploadToVercelBlob(
      originalname,
      buffer,
      size,
    );
  }
}
