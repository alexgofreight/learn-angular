import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { A1Component } from './@components/a1/a1.component';
import { A2Component } from './@components/a2/a2.component';
import { A3Component } from './@components/a3/a3.component';

@NgModule({
  declarations: [
    AppComponent,
    A1Component,
    A2Component,
    A3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
