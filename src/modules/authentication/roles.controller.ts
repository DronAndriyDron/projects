import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';

@Controller('api/roles')
@ApiTags('api/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

}
