import { Injectable } from '@angular/core'
import { IList } from './listInterface'

@Injectable()
export class ListService{

    getList(): IList[]{
        return [
            {'gender': 'Male', 'dob': '1992/09/03', 'code': 1, 'name': 'Arivan', 'Age': 25},
            {'gender': 'Male', 'dob': '1992/09/03', 'code': 2, 'name': 'S Arivan', 'Age': 25},
            {'gender': 'Female', 'dob': '1992/09/03', 'code': 3, 'name': 'Arivan S', 'Age': 25},
            {'gender': 'Female', 'dob': '1992/09/03', 'code': 4, 'name': 'Arivan SS', 'Age': 25},
            {'gender': 'Male', 'dob': '1992/09/03', 'code': 5, 'name': 'SS Arivan', 'Age': 25}
        ];
    }

}