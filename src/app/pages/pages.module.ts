import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    ComponentsModule
  ],
  declarations: [
    HomeComponent, 
    AboutComponent,
  ]
})
export class PagesModule { }
