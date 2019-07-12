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

    static clearMessages() {
    AlertsComponent.alerts = []
  }

   static expire(alert: Alert) {
     if(AlertsComponent.alerts.indexOf(alert)!=-1)
    AlertsComponent.alerts.splice(AlertsComponent.alerts.indexOf(alert), 1);
  }

   close(alert: Alert) {
   AlertsComponent.alerts.splice(AlertsComponent.alerts.indexOf(alert), 1);
 }

   static display(type:string, message:string, dismissIn:number = 0){
    let alert = {type,message}
    AlertsComponent.alerts.push(alert)    
    if(dismissIn!=0)
      setTimeout(()=>{this.expire(alert)},dismissIn)
  }

  ngOnInit() {
    this.router.events.subscribe(
      x => AlertsComponent.clearMessages()
    )
  }
}
