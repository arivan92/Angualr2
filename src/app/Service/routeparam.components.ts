import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'route-param',
    template: '<h1>{{name}}</h1>'
})

export class RouteparamComponent {

    public name: string;

    constructor(public _route: ActivatedRoute){
        this.name = this._route.snapshot.params['code'];
    }

}

