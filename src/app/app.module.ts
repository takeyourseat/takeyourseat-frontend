import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AllplacesComponent } from './components/allplaces/allplaces.component';
import { PlacetableComponent } from './components/placetable/placetable.component';
import { PlacemarkerComponent } from './components/placemarker/placemarker.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './components/modal/modal.component';
import { PlaceformComponent } from './components/placeform/placeform.component';
import { PlacerequestformComponent } from './components/placerequestform/placerequestform.component';
import { HeaderComponent } from './components/header/header.component';
import { RequestedplaceComponent } from './components/requestedplace/requestedplace.component';

@NgModule({
  declarations: [
    AppComponent,
    AllplacesComponent,
    PlacetableComponent,
    PlacemarkerComponent,
    ModalComponent,
    PlaceformComponent,
    PlacerequestformComponent,
    HeaderComponent,
    RequestedplaceComponent
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
