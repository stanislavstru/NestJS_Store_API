import { Controller, Get, Param } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { ImagesEntity } from '_dtos/images/entities';

@Controller('images')
@ApiTags('Images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  // @Post()
  // @ApiBearerAuth()
  // @Roles(Role.ADMIN)
  // @UseGuards(AuthGuard('jwt'), RolesGuard)
  // @ApiCreatedResponse({ type: ImagesEntity })
  // create(@Body() createImageDto: CreateImagesDto) {
  //   return this.imagesService.create(createImageDto);
  // }

  @Get()
  @ApiOkResponse({ type: ImagesEntity, isArray: true })
  findAll() {
    return this.imagesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ImagesEntity })
  findOne(@Param('id') id: string) {
    return this.imagesService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateImageDto: UpdateImagesDto) {
  //   return this.imagesService.update(id, updateImageDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.imagesService.remove(+id);
  // }
}
