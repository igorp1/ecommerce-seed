import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { AdminComponent } from './admin/admin.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    ComponentsModule
  ],
  declarations: [
    HomeComponent, 
    AboutComponent, 
    ProductComponent, 
    ShopComponent,
    AdminComponent,
    InventoryComponent,
    ManageProductComponent,
    UserDashboardComponent,
    ErrorComponent,
  ]
})
export class PagesModule { }
