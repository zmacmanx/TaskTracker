import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHomeModule } from './modules/my-home/my-home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
