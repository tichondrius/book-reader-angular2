import {Injectable} from '@angular/core'
import {Http, Response, Headers} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {AppConfig} from '../codes/secrect'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';


import IAuthentication from './authentication'
import {ITokenResult} from './authentication'
import  IRegister from './register.component/register'

@Injectable()
export class AuthService{
    public auth: IAuthentication;
    public hostApi: string = AppConfig.backend;
    public headers: Headers;
    constructor(private http: Http){
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        let authLS: string = localStorage.getItem('auth');
        if (authLS){
            this.auth = JSON.parse(authLS);
        }
        else
        {
            this.auth = {isAuth: false, name: '', username: '', token: ''};
        }
    }
    login(username: string, password: string): Observable<ITokenResult>{
       return this.http.post(`${this.hostApi}token`, {username: username, password: password}, {headers: this.headers})
          .map((response: Response) => <ITokenResult>response.json())
          .catch((this.handleError));
    }
    register(model: IRegister): Observable<Response>{
        return this.http.post(`${this.hostApi}api/auth/register`, model)
            .map((response: Response) => response)
            .catch((this.handleError));
    }
    private handleError(error: Response)
    {
        return Observable.throw(error.json() || 'Server error');
    }
    public getAuth() : IAuthentication{
        return this.auth;
    }
    public setAuth(data: ITokenResult){
        this.auth.isAuth = true;
        this.auth.name = data.name;
        this.auth.username = data.username;
        this.auth.token = data.token;
        localStorage.setItem('auth', JSON.stringify(this.auth));
    }
    public logOut(): void{
         this.auth.isAuth = false;
         this.auth.name = '';
         this.auth.username = '';
         this.auth.token = '';
         localStorage.removeItem('auth');
    }
}