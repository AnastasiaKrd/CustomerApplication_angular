import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting'
import {  DbLogger, BaseLogger, ConsoleLogger } from '../Utility/CustomerApp.Logger';

var providersClollection: any = [];
// http call get this from server
providersClollection.push({ provide: "1", useClass: DbLogger })
providersClollection.push({ provide: "2", useClass: ConsoleLogger })
providersClollection.push({ provide: BaseLogger, useClass: ConsoleLogger })

@NgModule({
  declarations: [
     MasterPageComponent, HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(MainRoutes)
  ],
  providers: [providersClollection],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
