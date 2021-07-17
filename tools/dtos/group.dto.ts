import { RoleDto } from './role.dto';

export class GroupCreatedDto {
    name: string;
}

export class GroupRolesDto {
    roles: RoleDto[];
}