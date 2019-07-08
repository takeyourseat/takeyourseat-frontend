import {Component, OnInit, Input, ViewRef} from '@angular/core';
import { Place } from 'src/app/model/Place';
import { PlacerequestService } from '../../services/placerequest.service';
import { PlaceRequests } from '../../model/PlaceRequests';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../login/login.component';
import {PlaceformComponent} from '../placeform/placeform.component';
import {PlacerequestformComponent} from '../placerequestform/placerequestform.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title;
  @Input() dismiss;

  constructor(){
  }

  ngOnInit() {
  }



}
