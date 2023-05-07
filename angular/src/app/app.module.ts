import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
