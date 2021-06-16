import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";


import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';






@NgModule({
  declarations: [
    AppComponent,
    
    TemplateDrivenComponent,
         ReactiveFormComponent,
        
         
        
        
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
