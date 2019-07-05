import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../services/roles.service';
import { Role, Grant } from '../../model/Role';
import { AlertsComponent } from '../alerts/alerts.component';

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
      data=> {
        AlertsComponent.display("success",`Role ${this.newRoleName} has been successfully created`)
        this.getAllRoles()
      }
    )
  }

  updateGrants(role:Role, datatype:string){
    this.rolesService.grantPermissionToRole(role.role, datatype, role.grants[datatype].permission).subscribe(
      data=>{
        AlertsComponent.display("success",`Permission level for Role <strong> ${role.role} </strong> on domain <strong>${datatype}</strong> has been successfully updated`)
        
    })
  }

}
