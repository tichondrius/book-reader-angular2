import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AuthService} from './auth/auth.service'
import IAuthentication from './auth/authentication'

@Injectable()
export class HttpClient {
    private auth: IAuthentication;
    constructor(private http: Http, private authService: AuthService) {
        this.auth = authService.getAuth();
    }

    createAuthorizationHeader(headers: Headers) {
        if (this.auth && this.auth.isAuth == true)
        {
             headers.append('Authorization', `Bear ${this.auth.token}`);
        }
       
    }
    get(Url: string) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(Url, {headers: headers})
    }

    post(url:string , data: any) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
        headers: headers
        });
    }
    putData(url: string, data: any)
    {
        var headers = new Headers();
        headers.append('enctype', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        this.createAuthorizationHeader(headers);
        return this.http.put(url, data, {headers: headers});

    }
    put(url: string, data: any){
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.put(url, data, {
        headers: headers
        });
    }
}