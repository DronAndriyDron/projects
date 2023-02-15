import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Connection,
  DeepPartial,
  getConnection,
  ILike,
  In,
  IsNull,
  Not,
  Repository,
} from 'typeorm';
import { Role } from '../authentication/entities/role.entity';
import {
  BeneficiaryOrgRoles,
  ProviderOrgRoles,
  TenantOrgRoles,
  UserRole,
} from '../authentication/enums/user-roles.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { AppConfig } from '../configuration/configuration.service';
import { buildPaginationObject } from '../../util/pagination';
import { checkForRole, checkForRoles } from '../../util/roles';
import { File } from '../files/entities/file.entity';
import { ErrorTypes } from '../error/enums/errorTypes.enum';
import * as dayjs from 'dayjs';
import { buildOrderObject } from '../../util/order';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
    @InjectRepository(File)
    private filesRepository: Repository<File>,
    private config: AppConfig,
    private connection: Connection,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userData = new User();
    const user = this.usersRepository.create(userData);
    await this.usersRepository.save(user);

    return user;
  }


}
