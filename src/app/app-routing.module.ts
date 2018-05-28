import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AdminComponent } from './pages/admin/admin.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ManageProductComponent } from './pages/manage-product/manage-product.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:slug', component: ShopComponent }, // <~~ category slug
  { path: 'product/:slug', component: ProductComponent }, // <~~ product slug
  { path: 'my-dashboard', component: UserDashboardComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin/inventory', component: InventoryComponent},
  { path: 'admin/inventory/:slug', component: ManageProductComponent}, // <~~ product slug
  { path: 'oops', component: ErrorComponent  },
  { path: 'oops/:code', component: ErrorComponent  }, // < ~~ error code
  { path: '**', redirectTo : 'oops/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
