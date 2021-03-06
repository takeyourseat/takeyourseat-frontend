import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllplacesComponent} from './components/allplaces/allplaces.component';
import {LoginComponent} from './components/login/login.component';
import {RequestedplaceComponent} from './components/requestedplace/requestedplace.component';
import {UserplacerequestComponent} from './components/userplacerequest/userplacerequest.component';
import {UserLoggedInGuardService} from './services/guards/route-guard.service';
import {UserIsAnnoymousService} from './services/guards/user-is-annoymous.service';
import {LogoutComponent} from './components/logout/logout.component';
import {ShowAllUsersComponent} from './components/users/show-all-users/show-all-users.component';
import {UserCreatorComponent} from './components/users/user-creator/user-creator.component';
import {SearhUsersComponent} from './components/users/searh-users/searh-users.component';
import {RolesComponent} from './components/roles/roles.component';
import {PlacerequestNotificationHandlerComponent} from './components/placerequest-notification-handler/placerequest-notification-handler.component';


const routes: Routes = [
  {path: 'places', component: AllplacesComponent, canActivate: [UserLoggedInGuardService]},
  {path: 'requestedplace', component: RequestedplaceComponent, canActivate: [UserLoggedInGuardService]},
  {path: 'userplacerequest', component: UserplacerequestComponent, canActivate: [UserLoggedInGuardService]},
  {path: 'requestedplace/:id/:action', component: PlacerequestNotificationHandlerComponent, canActivate: [UserLoggedInGuardService]},
  {path: 'showallusers', component: ShowAllUsersComponent, canActivate: [UserLoggedInGuardService]},
  {path: 'usercreator', component: UserCreatorComponent, canActivate: [UserLoggedInGuardService]},
  {path: 'searchusers', component: SearhUsersComponent, canActivate: [UserLoggedInGuardService]},
  {path: 'roles', component: RolesComponent, canActivate: [UserLoggedInGuardService]},
  {path: 'login', component: LoginComponent, canActivate: [UserIsAnnoymousService]},
  {path: 'logout', component: LogoutComponent},

  {path: '**', component: AllplacesComponent, canActivate: [UserLoggedInGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
