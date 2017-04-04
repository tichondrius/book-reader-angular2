import {Injectable} from '@angular/core'
import {IType} from './type'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import {AppConfig} from '../codes/secrect'

@Injectable()
export class TypeService{
    private _hostApi: string;
    constructor(private _http: Http){
        this._hostApi = AppConfig.hostApi;
    }
    getListForNav(): Observable<IType[]>{
        return this._http.get(`${this._hostApi}types`)
            .map((response: Response) => <IType[]> response.json())
            .catch(this.handleError);
    }

    getInfoByID(typeID: string): Observable<IType>{
        return this._http.get(`${this._hostApi}types/GetStoryByTypeId/${typeID}`)
               .map((response: Response) => <IType> response.json())
               .catch(this.handleError);
    }

    private handleError(error: Response)
    {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}