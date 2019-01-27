

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlipModule } from 'ngxflip/public_api';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlipModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
