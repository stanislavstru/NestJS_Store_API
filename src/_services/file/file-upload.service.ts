import {
  // BadRequestException,
  Injectable,
} from '@nestjs/common';
import { put } from '@vercel/blob';
import { ImagesService } from '_entity/images/images.service';

@Injectable()
export class FileUploadService {
  constructor(private readonly imagesService: ImagesService) {}

  // fileUploadToHomeServer(file: Express.Multer.File) {
  //   if (!file) {
  //     throw new BadRequestException('no file uploaded');
  //   }

  //   const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  //   if (!allowedMimeTypes.includes(file.mimetype)) {
  //     throw new BadRequestException('invalid file type');
  //   }

  //   const maxSize = 5 * 1024 * 1024;
  //   if (file.size > maxSize) {
  //     throw new BadRequestException('file is too large!');
  //   }

  //   return { message: 'File uploaded successfully', filePath: file.path };
  // }

  async fileUploadToVercelBlob(
    filename: string,
    fileBuffer: Buffer,
    size: number,
  ) {
    try {
      const blob = await put(
        process.env.BLOB_FOLDER ? process.env.BLOB_FOLDER + '/' : '' + filename,
        fileBuffer,
        {
          access: 'public',
        },
      );

      if (blob) {
        await this.imagesService.create({
          image_url: blob.url,
          image_type: blob.contentType,
          image_size: size,
        });
        return blob;
      } else {
        throw new Error('Error uploading to Vercel Blob');
      }
    } catch (error) {
      console.error('Error uploading to Vercel Blob:', error);
      throw error;
    }
  }
}
