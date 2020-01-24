import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VenkatModule } from './venkat/venkat.module';
import { HiComponent } from './hi/hi.component';

@NgModule({
  declarations: [
    AppComponent,
    HiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VenkatModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
