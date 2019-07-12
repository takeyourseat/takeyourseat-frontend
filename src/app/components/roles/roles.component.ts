import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../services/roles.service';
import { Role, Grant } from '../../model/Role';
import { AlertsComponent } from '../alerts/alerts.component';
import {DataTypesService} from '../../services/datatypes.service';
import {DataType} from '../../model/DataType';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Role[];
  dataTypes: DataType[];
  newRoleName: string;

  constructor(
    private rolesService: RolesService,
    private dataTypeSerive: DataTypesService,
  ) { }

  ngOnInit() {
    this.getAllDataTypes();
    this.getAllRoles();
  }

  getAllRoles() {
    this.rolesService.getAllRoles().subscribe(
      data => {
        this.roles = data;
      },
      exception => this.displayExceptionMessages(exception),
    );
  }

  createRole() {
    this.rolesService.createRole(this.newRoleName).subscribe(
      data => {
        AlertsComponent.clearMessages();
        AlertsComponent.display('success', `Role ${this.newRoleName} has been successfully created`, 5000);
        this.getAllRoles();
      },
      exception => this.displayExceptionMessages(exception),
    );
  }

  updateGrants(role: Role, datatype: string) {
    this.rolesService.grantPermissionToRole(role.role, datatype, role.grants[datatype.toLowerCase()].permission).subscribe(
      data => {
        AlertsComponent.clearMessages();
        AlertsComponent.display('success', `Permission level for Role <strong> ${role.role} </strong> on domain
                                                          <strong>${datatype.toLowerCase()}</strong> has been successfully updated`, 5000);
    },
    exception => this.displayExceptionMessages(exception),
    );
  }

  deleteRole(role: Role) {
    this.rolesService.deleteRole(role.role).subscribe(
      () => {
        AlertsComponent.display('success', `Role ${role.role} has been successfully deactivated`);
        this.getAllRoles();
      },
      exception => this.displayExceptionMessages(exception),
    );
  }

  displayExceptionMessages(exception) {
        if (exception.status === 0) {
          AlertsComponent.display('danger', `Could not contact Authorization Server, please try again`);
          return;
        }
        if (exception.status === 403) {
          AlertsComponent.clearMessages();
          AlertsComponent.display('danger', 'Error 403: You are not authorized to execute this request')
          return;
        }if (exception.status === 401) {
          AlertsComponent.clearMessages();
          AlertsComponent.display('danger', 'Error 401: You are not authenticated')
          return;
    }
        AlertsComponent.display('danger', `${exception.error.error ? exception.error.error : ''} ${exception.error.message ? exception.error.message : ''}`);
      }


  getAllDataTypes() {
    this.dataTypeSerive.getAllDatatypes().subscribe(
      data => {
        this.dataTypes = data;
      },
      exception => {
        this.displayExceptionMessages(exception);
      }
    );
  }
}
