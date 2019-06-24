import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllplacesComponent} from './components/allplaces/allplaces.component';
import {RequestedplaceComponent} from './components/requestedplace/requestedplace.component';
import {UserplacerequestComponent} from './components/userplacerequest/userplacerequest.component';

const routes: Routes = [
  {path: 'places', component: AllplacesComponent},
  {path: 'requestedplace', component: RequestedplaceComponent},
  {path: 'userplacerequest', component: UserplacerequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
