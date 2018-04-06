import { Component, OnInit } from '@angular/core'
import { IComment } from './new.interface'
import { NewService } from './new.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'comment',
    template: `<span *ngIf="showCmnt">{{comment.body}}</span>
                <span *ngIf="!showCmnt">No Comments</span>`,
    providers: [NewService]
})

export class GetComment implements OnInit {

    constructor(
        public _service: NewService,
        public _route: ActivatedRoute
    ){}

    public comment: IComment;
    public showCmnt: boolean = false;

    ngOnInit(){
        let postId = this._route.snapshot.params['id'];
        this._service.getComment(postId)
            .then(res => this.completed(res))
            .catch((error) => {
                console.log(error);
                this.showCmnt = false;
            })
    }

    completed(value: IComment){
        this.showCmnt = true;
        this.comment = value; 
    }

}