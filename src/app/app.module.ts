import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ecommerce-seed'}),
    RoutingModule,
    PagesModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(
    @Inject(PLATFORM_ID) private  platformId : Object,
    @Inject(APP_ID) private appId : string
  ){ 
    const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
    console.info(`Running ${platform} with appId=${appId}`);
  }

}
