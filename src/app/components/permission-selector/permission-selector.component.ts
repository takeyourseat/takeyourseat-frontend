import { Component, OnInit, Input } from '@angular/core';
import { Grant, PermissionWrapper } from 'src/app/model/Role';

@Component({
  selector: 'app-permission-selector',
  templateUrl: './permission-selector.component.html',
  styleUrls: ['./permission-selector.component.css']
})
export class PermissionSelectorComponent implements OnInit {

  @Input()
  grant :PermissionWrapper

  constructor() { }

  ngOnInit() {
  }

}
