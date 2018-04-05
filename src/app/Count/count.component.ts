import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'count',
    templateUrl: 'app/Count/count.html'
})

export class CountComponent{

    public selVal: string = 'All';

    @Output()
    public countEmit: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    public all:number;

    @Input()
    public male:number;

    onRadio(){
        this.countEmit.emit(this.selVal);
    }

    @Input()
    public female:number;

}