import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><first-app></first-app>`,
})
export class AppComponent  { name = 'Arivan S'; }
