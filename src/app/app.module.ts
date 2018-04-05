import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { FirstComponent } from  './first/first.component'
import { EmployeeComponent } from './Employee/employee.component'
import { ListComponent } from './list/list.component'
import { ListSamplePipe } from './list/listSample.pipe'
import { CountComponent } from './Count/count.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FirstComponent, EmployeeComponent, ListComponent, ListSamplePipe, CountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
