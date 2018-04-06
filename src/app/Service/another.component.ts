import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import 'rxjs/add/operator/switchMap'

@Component({
    selector: 'another',
    template: '<h1>{{name}}</h1><input type="button" value="Back" (click)="onClickRoute()">'
})

export class AnotherComponent implements OnInit {
    public name:string;

    constructor(
        public _router: Router,
        public _actRoute: ActivatedRoute
    ){}

    ngOnInit(){
        this._actRoute.paramMap
            .switchMap((param: ParamMap) => this.name = param.get('code'));
    }

    onClickRoute(){
        this._router.navigate(['/list']);
    }

}