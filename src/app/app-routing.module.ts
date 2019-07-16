import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllplacesComponent} from './components/allplaces/allplaces.component';
import {LoginComponent} from './components/login/login.component';
import {RequestedplaceComponent} from './components/requestedplace/requestedplace.component';
import {UserplacerequestComponent} from './components/userplacerequest/userplacerequest.component';
import {UserLoggedInGuardService} from './services/guards/route-guard.service';
import {UserIsAnnoymousService} from './services/guards/user-is-annoymous.service';
import {LogoutComponent} from './components/logout/logout.component';
import {UsersComponent} from './components/users/users.component';
import {RolesComponent} from './components/roles/roles.component';


const routes: Routes = [
  {path: 'places', component: AllplacesComponent, canActivate: [UserLoggedInGuardService]},

  {path: 'requestedplace', component: RequestedplaceComponent, canActivate: [UserLoggedInGuardService]},

  {path: 'userplacerequest', component: UserplacerequestComponent, canActivate: [UserLoggedInGuardService]},

  {path: 'users', component: UsersComponent, canActivate: [UserLoggedInGuardService]},

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
