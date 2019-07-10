import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {AlertsComponent} from './components/alerts/alerts.component';
import {AllplacesComponent} from './components/allplaces/allplaces.component';
import {PlacetableComponent} from './components/placetable/placetable.component';
import {PlacemarkerComponent} from './components/placemarker/placemarker.component';
import {ModalComponent} from './components/modal/modal.component';
import {PlaceformComponent} from './components/placeform/placeform.component';
import {PlacerequestformComponent} from './components/placerequestform/placerequestform.component';
import {HeaderComponent} from './components/header/header.component';
import {RequestedplaceComponent} from './components/requestedplace/requestedplace.component';
import {UserplacerequestComponent} from './components/userplacerequest/userplacerequest.component';
import {FooterComponent} from './components/footer/footer.component';
import {InterceptorService} from './services/http/HttpTokenInterceptor.service';
import {LogoutComponent} from './components/logout/logout.component';
import {UsersComponent} from './components/users/users.component';
import {TabModule} from 'angular-tabs-component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RolesComponent} from './components/roles/roles.component';
import {PermissionSelectorComponent} from './components/permission-selector/permission-selector.component';
import {ServiceWorkerModule, SwPush} from '@angular/service-worker';
import {environment} from '../environments/environment';

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
    UsersComponent,
    RolesComponent,
    PermissionSelectorComponent,
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
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.notifications || environment.production}),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
  constructor(push: SwPush) {
    push.messages.subscribe(msg => {
      console.log(msg);
    })

    const key = 'BIo4B1bsWsS3fDQZJjFo3k_M9C5sMm929H5EJMbqcYicjCiseaYeCDsE6dIB5NNw4u6rlW8YUWhs-evYAwa2mOM';
    const privateKey = 'dw1-Fz9_bD1aX9OAZ8uRt8c5p-CNNczirkGBiMYTUVM';
    push.requestSubscription({serverPublicKey: key})
      .then(pushSubscription => {
        console.log(pushSubscription.toJSON());
      });
  }
}
