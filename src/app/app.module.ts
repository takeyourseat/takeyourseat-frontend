import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { FooterComponent } from './components/footer/footer.component';
import { InterceptorService } from './services/http/HttpTokenInterceptor.service';
import { LogoutComponent } from './components/logout/logout.component';
import {TabModule} from 'angular-tabs-component';
import { ShowAllUsersComponent } from './components/users/show-all-users/show-all-users.component';
import { UserCreatorComponent } from './components/users/user-creator/user-creator.component';
import { SearhUsersComponent } from './components/users/searh-users/searh-users.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RolesComponent } from './components/roles/roles.component';
import { PermissionSelectorComponent } from './components/permission-selector/permission-selector.component';

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
    UserplacerequestComponent,
    FooterComponent,
    LogoutComponent,
<<<<<<< HEAD
    ShowAllUsersComponent,
    UserCreatorComponent,
    SearhUsersComponent,
=======
    UsersComponent,
    RolesComponent,
    PermissionSelectorComponent,
>>>>>>> b19c5866ee8bdcce6d2b152bb1968349024f5df7
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

    AppRoutingModule,
    TabModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
