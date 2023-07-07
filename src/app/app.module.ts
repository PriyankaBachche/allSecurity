import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { CarInsuranceModule } from './car-insurance/car-insurance.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterOutlet,
    HttpClientModule,
    CarInsuranceModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports:[
RouterOutlet,RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
