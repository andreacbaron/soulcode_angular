import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ReactiveComponent } from '../app/reactive/reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
