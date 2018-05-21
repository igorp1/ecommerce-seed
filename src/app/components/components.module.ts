import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DragScrollModule } from 'ngx-drag-scroll';
import { MomentModule } from 'angular2-moment';

import { RoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { SearchComponent } from './search/search.component';
import { RangePickerComponent } from './range-picker/range-picker.component';
import { OptionsPickerComponent } from './options-picker/options-picker.component';
import { LoaderComponent } from './loader/loader.component';
import { ProductWindowComponent } from './product-window/product-window.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { TableComponent } from './table/table.component';
import { EditableValueComponent } from './editable-value/editable-value.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    DragScrollModule,
    FormsModule,
    MomentModule
  ],
  declarations: [
    HeaderComponent,
    ModalComponent,
    SidePanelComponent,
    ImageCarouselComponent,
    AddToCartComponent,
    SearchComponent,
    RangePickerComponent,
    OptionsPickerComponent,
    LoaderComponent,
    ProductWindowComponent,
    ContextMenuComponent,
    TableComponent,
    EditableValueComponent,
    
  ],
  exports:[ // TODO: Don't forget to export declared modules
    FormsModule,
    DragScrollModule,
    HeaderComponent,
    ModalComponent,
    SidePanelComponent,
    ImageCarouselComponent,
    AddToCartComponent,
    RangePickerComponent,
    SearchComponent,
    OptionsPickerComponent,
    LoaderComponent,
    ProductWindowComponent,
    ContextMenuComponent,
    TableComponent,
    EditableValueComponent
  ]
})
export class ComponentsModule { }
