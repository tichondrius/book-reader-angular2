import {Injectable} from '@angular/core'
import {IUser} from './user'
import {Http, Response, Headers} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import {AuthService} from '../auth/auth.service'
import {AppConfig} from '../codes/secrect'

@Injectable()
export class UserService{
    private _hostApi: string;
    constructor(private _http: Http, private authService: AuthService){
        this._hostApi = AppConfig.hostApi;

    }
    getInfo(): Observable<IUser>{
        let headers = new Headers();
        headers.append('authorization', 'Bear ' + this.authService.getAuth().token);
        return this._http.get(this._hostApi + 'user/getinfo', {headers: headers})
            .map((response: Response) => <IUser> response.json())
            .catch(this.handleError);
    }
  
    private handleError(error: Response)
    {
        return Observable.throw(error.json() || 'Server error');
    }
}