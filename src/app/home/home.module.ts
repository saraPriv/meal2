import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HomeComponent} from './home';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    HomeComponent
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
