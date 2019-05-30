import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http'
import { AlertsComponent } from './components/includes/alerts/alerts.component';
import { AllplacesComponent } from './components/allplaces/allplaces.component';
import { PlacetableComponent } from './components/utils/placetable/placetable.component';
import { PlacemarkerComponent } from './components/utils/placemarker/placemarker.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertsComponent,
    AllplacesComponent,
    PlacetableComponent,
    PlacemarkerComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
