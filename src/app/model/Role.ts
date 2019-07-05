export class Role{
    role:string
    grants:Grant
}

export class Grant{
    office:PermissionWrapper
    role:PermissionWrapper
    user:PermissionWrapper
    place:PermissionWrapper
    placerequest:PermissionWrapper
}

export class PermissionWrapper {permission:number}