import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [
    HeaderComponent,
    ModalComponent,
    SidePanelComponent,
  ],
  exports:[ // TODO: Don't forget to export declared modules
    HeaderComponent,
    ModalComponent,
    SidePanelComponent
  ]
})
export class ComponentsModule { }
