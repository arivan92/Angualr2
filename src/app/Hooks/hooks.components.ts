import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'

@Component({
    selector: 'hook',
    template: '<br>{{name}}'
})

export class HooksComponent implements OnChanges{
    
    @Input()
    public name: string;

    ngOnChanges(value: SimpleChanges){
        for(let val in value){
            let change = value[val];
            let cur = change.currentValue;
            let pre = change.previousValue;
        }
    }

}