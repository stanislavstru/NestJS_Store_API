import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { MainConfigService } from './main_config.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'auth/roles/roles.guard';
import { Roles } from 'auth/roles/roles.decorator';
import { Role } from 'auth/roles/roles.enum';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import {
  MainConfigDto,
  CreateMainConfigDto,
  UpdateMainConfigDto,
} from './dtos';

@Controller('main-config')
@ApiTags('Main Config')
export class MainConfigController {
  constructor(private readonly mainConfigService: MainConfigService) {}

  @Post()
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiOkResponse({ type: MainConfigDto })
  create(@Body() createMainConfigDto: CreateMainConfigDto) {
    return this.mainConfigService.create(createMainConfigDto);
  }

  @Get()
  @ApiOkResponse({ type: MainConfigDto, isArray: true })
  findMany() {
    return this.mainConfigService.findMany();
  }

  @Get(':id')
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiOkResponse({ type: MainConfigDto })
  findOne(@Param('id') id: string) {
    return this.mainConfigService.findOne(id);
  }

  @Get('/key/:config_key')
  @ApiOkResponse({ type: MainConfigDto, isArray: true })
  findByKey(@Param('config_key') config_key: string) {
    return this.mainConfigService.findByKey(config_key);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiCreatedResponse({ type: MainConfigDto })
  update(
    @Param('id') id: string,
    @Body() updateMainConfigDto: UpdateMainConfigDto,
  ) {
    return this.mainConfigService.update(id, updateMainConfigDto);
  }
}
