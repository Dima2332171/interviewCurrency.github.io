import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConversionComponent } from './conversion/conversion.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent
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
