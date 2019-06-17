import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllplacesComponent } from './components/allplaces/allplaces.component';

const routes: Routes = [
  { path: 'places', component: AllplacesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
