import { Injectable } from '@angular/core'
import { IService } from './service.interface'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class ServiceService {

    constructor(private _http: Http){

    }

    getPost(): Observable<IService[]>{
        return this._http.get('http://localhost:3000/db.json')
            .map((response: Response) => <IService[]>response.json())
            .catch(this.handle);
    }

    handle(error: Response){
        return Observable.throw(error);
    }

}