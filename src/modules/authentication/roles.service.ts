import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { In, Repository } from 'typeorm';
import {
  BeneficiaryOrgRoles,
  ProviderOrgRoles,
  ProviderOrgRolesAll,
  TenantOrgRoles,
  UserRole,
  UserRoleTitles,
} from './enums/user-roles.enum';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}


  async createRoles() {
    const roleKeys = Object.keys(UserRole);
    for (const roleKey of roleKeys) {
      let roleDB = await this.rolesRepository.findOne({
        where: { name: UserRole[roleKey] },
      });
      if (!roleDB) {
        roleDB = new Role();
        roleDB.name = UserRole[roleKey];
        roleDB.title = UserRoleTitles[roleKey];
        await this.rolesRepository.save(roleDB);
      }
    }
  }
}
