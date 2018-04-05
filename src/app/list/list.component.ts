import { Component } from '@angular/core'

@Component({
    selector: 'list',
    templateUrl: 'app/list/list.html'
})

export class ListComponent{
    
    public list:any[] = [
        {'gender': 'Male', 'dob': '1992/09/03', 'code': 1, 'name': 'Arivan', 'Age': 25},
        {'gender': 'Male', 'dob': '1992/09/03', 'code': 2, 'name': 'S Arivan', 'Age': 25},
        {'gender': 'Female', 'dob': '1992/09/03', 'code': 3, 'name': 'Arivan S', 'Age': 25},
        {'gender': 'Female', 'dob': '1992/09/03', 'code': 4, 'name': 'Arivan SS', 'Age': 25},
        {'gender': 'Male', 'dob': '1992/09/03', 'code': 5, 'name': 'SS Arivan', 'Age': 25}
    ]

    public rSelVal:string = 'All';


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