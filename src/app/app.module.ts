import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AllplacesComponent } from './components/allplaces/allplaces.component';
import { PlacetableComponent } from './components/placetable/placetable.component';
import { PlacemarkerComponent } from './components/placemarker/placemarker.component';
import { ModalComponent } from './components/modal/modal.component';
import { PlaceformComponent } from './components/placeform/placeform.component';
import { PlacerequestformComponent } from './components/placerequestform/placerequestform.component';
import { HeaderComponent } from './components/header/header.component';
import { RequestedplaceComponent } from './components/requestedplace/requestedplace.component';
import { UserplacerequestComponent } from './components/userplacerequest/userplacerequest.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertsComponent,
    AllplacesComponent,
    PlacetableComponent,
    PlacemarkerComponent,
    ModalComponent,
    PlaceformComponent,
    PlacerequestformComponent,
    HeaderComponent,
    RequestedplaceComponent,
    UserplacerequestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
