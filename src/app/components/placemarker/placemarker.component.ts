import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placemarker',
  templateUrl: './placemarker.component.html',
  styleUrls: ['./placemarker.component.css']
})
export class PlacemarkerComponent implements OnInit {

  @Input()
  place: any;

  constructor() { }

  ngOnInit() {
  }

}
