import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Alert {
  type: string;
  message: string;
}


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor(private router: Router) { }
  
  private static alerts: Alert[] 

  get getAlerts():Alert[]{
    return AlertsComponent.alerts;
  }

    clearMessages() {
    AlertsComponent.alerts = []
  }

   close(alert: Alert) {
    AlertsComponent.alerts.splice(AlertsComponent.alerts.indexOf(alert), 1);
  }

   static display(type:string, message:string){
    AlertsComponent.alerts.push({type,message})    
  }

  ngOnInit() {
    this.router.events.subscribe(
      x => this.clearMessages()
    )
  }
}
