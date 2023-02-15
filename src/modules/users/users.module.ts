import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from '../authentication/entities/role.entity';
import { AppConfigModule } from '../configuration/configuration.module';
import { File } from '../files/entities/file.entity';

@Module({
  imports: [
    AppConfigModule,
    TypeOrmModule.forFeature([
      User,
      Role,
      File,
    ]),

  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
