import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MomentModule } from 'angular2-moment';

import { RoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { SearchComponent } from './search/search.component';
import { RangePickerComponent } from './range-picker/range-picker.component';
import { OptionsPickerComponent } from './options-picker/options-picker.component';
import { LoaderComponent } from './loader/loader.component';
import { ProductWindowComponent } from './product-window/product-window.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { TableComponent } from './table/table.component';
import { EditableValueComponent } from './editable-value/editable-value.component';
import { TextSectionDisplayComponent } from './text-section-display/text-section-display.component';
import { FooterComponent } from './footer/footer.component';
import { OnFireComponent } from './on-fire/on-fire.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ImagesDisplayComponent } from './images-display/images-display.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    MomentModule
  ],
  declarations: [
    HeaderComponent,
    ModalComponent,
    SidePanelComponent,
    AddToCartComponent,
    SearchComponent,
    RangePickerComponent,
    OptionsPickerComponent,
    LoaderComponent,
    ProductWindowComponent,
    ContextMenuComponent,
    TableComponent,
    EditableValueComponent,
    TextSectionDisplayComponent,
    FooterComponent,
    OnFireComponent,
    PriceDisplayComponent,
    ImagesDisplayComponent,
    
  ],
  exports:[ // TODO: Don't forget to export declared modules
    FormsModule,
    HeaderComponent,
    ModalComponent,
    SidePanelComponent,
    AddToCartComponent,
    RangePickerComponent,
    SearchComponent,
    OptionsPickerComponent,
    LoaderComponent,
    ProductWindowComponent,
    ContextMenuComponent,
    TableComponent,
    EditableValueComponent,
    TextSectionDisplayComponent,
    FooterComponent,
    OnFireComponent,
    PriceDisplayComponent,
    ImagesDisplayComponent
  ]
})
export class ComponentsModule { }
