import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table' 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { RemportComponent } from './remport/remport.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    RemportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
