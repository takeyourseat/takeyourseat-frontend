import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../services/roles.service';
import { Role, Grant } from '../../model/Role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles : Role[]
  newRoleName:string;

  constructor(
    private rolesService : RolesService,
  ) { }

  ngOnInit() {
    this.getAllRoles()
  }

  getAllRoles(){
    this.rolesService.getAllRoles().subscribe(
      data => {        
        this.roles = data
      }
    )
  }

  createRole(){
    this.rolesService.createRole(this.newRoleName).subscribe(
      data=> this.getAllRoles()
    )
  }

  updateGrants(role:Role, datatype:string){
    this.rolesService.grantPermissionToRole(role.role, datatype, role.grants[datatype].permission).subscribe(data=>{})
  }

}
