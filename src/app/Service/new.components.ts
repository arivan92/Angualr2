import { Component, OnInit } from '@angular/core'
import { IService } from './service.interface'
import { NewService } from './new.service'

@Component({
    selector: 'new',
    templateUrl: 'app/Service/new.html',
    providers: [NewService]
})

export class NewComponent implements OnInit {

    public post:IService[];

    constructor(public _service: NewService){}

    ngOnInit(){
        this._service.getList()
            .subscribe(res => this.post = res, error => {
                console.log(error);
            });
    }

}