import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [
    HeaderComponent,
    ModalComponent,
  ],
  exports:[ // TODO: Don't forget to export declared modules
    HeaderComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
