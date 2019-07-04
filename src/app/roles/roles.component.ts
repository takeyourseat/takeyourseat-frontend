import { Component, OnInit } from '@angular/core';
import { RolesService } from '../services/roles.service';
import { Role } from '../model/Role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles : Role[]

  constructor(
    private rolesService : RolesService,
  ) { }

  ngOnInit() {
    
    this.rolesService.getAllRoles().subscribe(
      data => {
        this.roles = data
      }
    )
  }

}
