export enum UserRole {
  superAdmin = 'superAdmin',
  admin = 'admin',
  coordinator = 'coordinator',
  projectManager = 'projectManager',
  assistantProjectManager = 'assistantProjectManager',
  technician = 'technician',
  procurement = 'procurement',
  buildingManager = 'buildingManager',
  officeManager = 'officeManager',
  chatParticipant = 'chatParticipant',
  chatOwner = 'chatOwner',
  chatAdmin = 'chatAdministrator',
}

export enum UserRoleTitles {
  superAdmin = 'Super Admin',
  admin = 'Administrator',
  coordinator = 'Coordinator',
  projectManager = 'Project Manager',
  assistantProjectManager = 'Assistant Project Manager',
  technician = 'Technician',
  procurement = 'Procurement',
  buildingManager = 'Building Manager',
  officeManager = 'Office Manager',
  chatParticipant = 'chatParticipant',
  chatOwner = 'chatOwner',
  chatAdmin = 'chatAdministrator',
}

export const ProviderOrgRoles = [
  UserRole.admin,
  UserRole.coordinator,
  UserRole.projectManager,
  UserRole.assistantProjectManager,
];

export const ProviderOrgWithTechnicianRoles = [
  UserRole.admin,
  UserRole.coordinator,
  UserRole.projectManager,
  UserRole.assistantProjectManager,
  UserRole.technician,
];

export const ProviderOrgRolesAll = [
  UserRole.admin,
  UserRole.coordinator,
  UserRole.projectManager,
  UserRole.assistantProjectManager,
  UserRole.technician,
  UserRole.procurement,
];

export const ProviderOrgManagementRoles = [
  UserRole.admin,
  UserRole.coordinator,
  UserRole.projectManager,
  UserRole.assistantProjectManager,
];

export const BeneficiaryOrgRoles = [UserRole.buildingManager];
export const TenantOrgRoles = [UserRole.officeManager];

export const ChatRoles = [
  UserRole.chatAdmin,
  UserRole.chatOwner,
  UserRole.chatParticipant,
];

export const InventoryStandardRoles = [
  UserRole.admin,
  UserRole.coordinator,
  UserRole.procurement,
  UserRole.projectManager,
  UserRole.assistantProjectManager,
];

export const InventoryPowerRoles = [
  UserRole.admin,
  UserRole.coordinator,
  UserRole.procurement,
];
