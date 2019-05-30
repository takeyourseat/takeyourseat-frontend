import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllplacesComponent } from './components/allplaces/allplaces.component';
import { PlacetableComponent } from './components/utils/placetable/placetable.component';
import { PlacemarkerComponent } from './components/utils/placemarker/placemarker.component';

@NgModule({
  declarations: [
    AppComponent,
    AllplacesComponent,
    PlacetableComponent,
    PlacemarkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
