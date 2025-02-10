import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateMainConfigDto } from '_dtos/mainConfig/dto';
import { UpdateMainConfigDto } from '_dtos/mainConfig/dto';
import { PrismaService } from 'prisma/prisma.service';
import { mainConfigKeysType, mainConfigValuesType } from './dtos';

@Injectable()
export class MainConfigService implements OnModuleInit {
  private cache = new Map<mainConfigKeysType, mainConfigValuesType>();

  constructor(private prisma: PrismaService) {}

  async onModuleInit() {
    await this.loadConfig();
  }

  private async loadConfig() {
    const configs = await this.prisma.main_config.findMany();
    configs.forEach(({ config_key, config_value }) => {
      this.cache.set(
        config_key as mainConfigKeysType,
        config_value as mainConfigValuesType,
      );
    });
  }

  async refreshCache() {
    this.cache.clear();
    await this.loadConfig();
  }

  async create(createProductDto: CreateMainConfigDto) {
    const result = await this.prisma.main_config.create({
      data: createProductDto,
    });

    this.refreshCache();

    return result;
  }

  async update(id: string, updateProductDto: UpdateMainConfigDto) {
    const result = this.prisma.main_config.update({
      where: { id },
      data: updateProductDto,
    });

    this.refreshCache();

    return result;
  }

  findMany() {
    return this.prisma.main_config.findMany();
  }

  findOne(id: string) {
    return this.prisma.main_config.findUnique({ where: { id } });
  }

  findBusinessContacts() {
    return this.prisma.main_config.findMany({
      where: {
        config_key: {
          startsWith: 'business_',
        },
      },
    });
  }

  findByKey(config_key: string) {
    return this.prisma.main_config.findFirst({
      where: {
        config_key,
      },
    });
  }

  findByKeys(config_keys: string[]) {
    return this.prisma.main_config.findMany({
      where: { config_key: { in: config_keys } },
    });
  }

  getConfig(
    keys: mainConfigKeysType[],
  ): Record<mainConfigKeysType, mainConfigValuesType | undefined> {
    return keys.reduce(
      (acc, key) => {
        return {
          ...acc,
          [key]: this.cache.get(key),
        };
      },
      {} as Record<mainConfigKeysType, mainConfigValuesType | undefined>,
    );
  }
}
