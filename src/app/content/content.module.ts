import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';


@NgModule({
  declarations: [
    ContentComponent,
    DashboardComponent,
    Dashboard2Component
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
  ],
  exports: [
    ContentComponent,
  ]
})
export class ContentModule { }
