import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent }  from './app.component';
import { FirstComponent } from  './first/first.component'
import { EmployeeComponent } from './Employee/employee.component'
import { ListComponent } from './list/list.component'
import { ListSamplePipe } from './list/listSample.pipe'
import { CountComponent } from './Count/count.component'
import { HooksComponent } from './Hooks/hooks.components'
import { ServiceComponent } from './Service/service.component'
import { RouteparamComponent } from './Service/routeparam.components'
import { AnotherComponent } from './Service/another.component'
import { NewComponent } from './Service/new.components'
import { GetComment } from './Service/get.comments'
import { sameOne } from './Same/one.components'
import { sameTwo } from './Same/two.component'

const myRoute: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'emp', component: EmployeeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'service/:code', component: RouteparamComponent },
  { path: 'another/:code', component: AnotherComponent },
  { path: 'new', component: NewComponent },
  { path: 'comment/:id', component: GetComment },
  { path: 'one', component: sameOne },
  { path: 'two', component: sameTwo }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(myRoute, {useHash:true}) ],
  declarations: [ AppComponent, FirstComponent, EmployeeComponent, ListComponent, ListSamplePipe, CountComponent, HooksComponent, ServiceComponent, RouteparamComponent, AnotherComponent, NewComponent, GetComment, sameOne, sameTwo ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
