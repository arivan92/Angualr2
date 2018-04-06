import { Component, OnInit } from '@angular/core'
import { IService } from './service.interface'
import { ServiceService } from './service.service'

@Component({
    selector: 'service',
    templateUrl: 'app/service/service.html',
    providers: [ServiceService],
    styles: ['.postTable,th,td{border: 1px solid black;}', 'th,td{padding: 5px;}']
})

export class ServiceComponent implements OnInit {

    public post: IService[];

    constructor(public _service: ServiceService) {

    }

    ngOnInit(){
        this._service.getPost()
            .subscribe((res) => this.post = res, (error) => {
                console.log(error);
            });
    }

}