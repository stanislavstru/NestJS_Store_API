import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleAuthStrategy } from './google/google.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt-strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from '_entity/users/users.service';
// import { APP_GUARD } from '@nestjs/core';
// import { RolesGuard } from './roles/roles.guard';

@Module({
  imports: [PassportModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    PrismaService,
    AuthService,
    UsersService,
    GoogleAuthStrategy,
    JwtStrategy,
  ],
})
export class AuthModule {}
