import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor(private router: Router) { }

  private static alertsPrimary: string[]
  private static alertsSuccess: string[]
  public static alertsDanger: string[]
  private static alertsWarning: string[]
  private static alertsLight: string[]
  private static alertsDark: string[]

  public static displayPrimary(alertMessage) {
    AlertsComponent.alertsPrimary.push(alertMessage);
  }

  public static displaySuccess(alertMessage) {
    AlertsComponent.alertsSuccess.push(alertMessage)
  }

  public static displayDanger(alertMessage) {
    AlertsComponent.alertsDanger.push(alertMessage)
  }

  public static displayWarning(alertMessage) {
    AlertsComponent.alertsWarning.push(alertMessage)
  }
  public static displayLight(alertMessage) {
    AlertsComponent.alertsLight.push(alertMessage)
  }
  public static displayDark(alertMessage) {
    AlertsComponent.alertsDark.push(alertMessage)
  }

  get getAlertsPrimary(){
    return AlertsComponent.alertsPrimary
  }

  get getAlertsSuccess(){
    return AlertsComponent.alertsSuccess
  }
  get getAlertsDanger(){
    return AlertsComponent.alertsDanger
  }

  get getAlertsWarning(){
    return AlertsComponent.alertsWarning
  }

  get getAlertsLight(){
    return AlertsComponent.alertsLight
  }

  get getAlertsDark(){
    return AlertsComponent.alertsDark
  }
  

  public static clearMessages() {
    AlertsComponent.alertsPrimary = [];
    AlertsComponent.alertsSuccess = [];
    AlertsComponent.alertsDanger = [];
    AlertsComponent.alertsWarning = [];
    AlertsComponent.alertsLight = [];
    AlertsComponent.alertsDark = [];
  }

  ngOnInit() {
    this.router.events.subscribe(
      x => AlertsComponent.clearMessages()
    )

  }

}
