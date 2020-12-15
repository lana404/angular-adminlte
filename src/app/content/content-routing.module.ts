import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard2', component: Dashboard2Component },
  { path: '', redirectTo: 'dashboard', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
