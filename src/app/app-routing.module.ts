import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'circuits', loadChildren: () => import('./circuits/circuits.module').then(m => m.CircuitsModule) },
  { path: 'drivers', loadChildren: () => import('./drivers/drivers.module').then(m => m.DriversModule) },
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
