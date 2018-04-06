import { Component } from '@angular/core'
import { IList } from './listInterface'
import { ListService } from './list.service'

@Component({
    selector: 'list',
    templateUrl: 'app/list/list.html',
    providers: [ListService]
})

export class ListComponent{
    
    public list:IList[];

    public rSelVal:string = 'All';
    
    constructor(public listService: ListService){
        this.list = this.listService.getList();
    }

    trackByCode(idx:number, obj:any){
        return obj.code;
    }

    allCount(): number{
        return this.list.length;
    }

    maleCount(): number{
        return this.list.filter(e => e.gender == 'Male').length;
    }

    femaleCount(): number{
        return this.list.filter(e => e.gender == 'Female').length;
    }

    receiveSelVal(value:string): void{
        this.rSelVal = value;
        console.log(value);
    }

}