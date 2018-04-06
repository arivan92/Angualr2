import { Injectable } from '@angular/core'
import { IService } from './service.interface'
import { IComment } from './new.interface'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class NewService {

    constructor(private _http:Http){}   
    
    getList():Observable<IService[]>{
        return this._http.get('http://localhost:4000/posts')
                    .map((res: Response) => <IService[]>res.json())
                    .catch(this.handle);
    }

    getComment(postId: number):Promise<IComment>{
        return this._http.get('http://localhost:4000/comments/' + postId)
                    .map((res: Response) => res.json())
                    .toPromise()
                    .catch(this.handlePromise);
    }

    handlePromise(error: Response){
        throw(error);
    }

    handle(error: Response){
        return Observable.throw(error);
    }
    
}