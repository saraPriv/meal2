import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {headComponent} from './head';

@NgModule({
  declarations: [
    headComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    headComponent
  ],
  bootstrap: [headComponent]
})
export class HeadModule { }
