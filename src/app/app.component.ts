import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<a routerLink="list">List</a>
            <a routerLink="service">Service</a>
            <a routerLink="emp">Employee</a>
            <a routerLink="new">New</a>
            <router-outlet></router-outlet>`
})

export class AppComponent {
  public name:string = 'Arivan';
  public lname:string = 'Arivan';
}