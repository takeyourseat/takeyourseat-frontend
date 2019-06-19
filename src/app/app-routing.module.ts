import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllplacesComponent} from './components/allplaces/allplaces.component';
import {RequestedplaceComponent} from './components/requestedplace/requestedplace.component';

const routes: Routes = [
  {path: 'places', component: AllplacesComponent},
  {path: 'requestedplace', component: RequestedplaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
