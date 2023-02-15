import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';
import { AppConfig } from '../configuration/configuration.service';
import { checkForRoles } from '../../util/roles';
import { UserRole } from './enums/user-roles.enum';

@Injectable()
export class AuthenticationService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private config: AppConfig,
  ) {}


  async login(user: any) {
    const payload = {
      email: user.email,
      id: user.id,
      roles: user.roles,
      organizationId: user.organization ? user.organization.id : 0,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
