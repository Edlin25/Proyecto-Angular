import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from 'selenium-webdriver/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HttpClientModule } from '@angular/common/http';
import { IntegrantesService } from './services/integrantes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   

  ],
  providers: [IntegrantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
