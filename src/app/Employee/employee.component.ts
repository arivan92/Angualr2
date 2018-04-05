import { Component } from '@angular/core'

@Component({
    selector: 'emp-details',
    templateUrl: 'app/Employee/employee.component.html',
    styles: [ 'h1{ color: blue; }', 'a{ color: red; }' ],
    styleUrls: [ 'app/Employee/employee.component.css' ]
})

export class EmployeeComponent{
    public firstname:string = 'Test name';
    public clickText:string = 'Click Me';
    public colSpan:number = 2;
    public myClass:string = 'bind';
    public apply:boolean = false;
    public applyCls:boolean = true;
    public isBold:boolean = false;
    public fontSize:number = 25;
    public showHide:boolean = true;;

    addClass(){
        let className = {
            next: this.apply,
            bind: this.applyCls
        }
        return className;
    }

    clickBtn(): void{
        this.showHide = !this.showHide;
    }
}