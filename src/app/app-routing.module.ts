import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:slug', component: ShopComponent }, // <~~ category slug
  { path: 'product/:slug', component: ProductComponent },
  { path: '**', redirectTo : '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
