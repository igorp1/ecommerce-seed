import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragScrollModule } from 'ngx-drag-scroll';

import { RoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    DragScrollModule
  ],
  declarations: [
    HeaderComponent,
    ModalComponent,
    SidePanelComponent,
    ImageCarouselComponent,
    AddToCartComponent,
  ],
  exports:[ // TODO: Don't forget to export declared modules
    HeaderComponent,
    ModalComponent,
    SidePanelComponent,
    DragScrollModule,
    ImageCarouselComponent,
    AddToCartComponent
  ]
})
export class ComponentsModule { }
