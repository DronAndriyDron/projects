import { Role } from '../modules/authentication/entities/role.entity';
import { UserRole } from '../modules/authentication/enums/user-roles.enum';

export const checkForRole = (role: UserRole, roles: Role[]) => {
  for (const roleAllocated of roles) {
    if (roleAllocated.name === role) return true;
  }
  return false;
};

export const checkForRoles = (rolesToCheck: UserRole[], roles: Role[]) => {
  for (const roleAllocated of rolesToCheck) {
    if (checkForRole(roleAllocated, roles)) return true;
  }
  return false;
};
