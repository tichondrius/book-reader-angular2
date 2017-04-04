import {Component} from '@angular/core'
import {AuthService} from '../auth/auth.service'
import IAuthencation from '../auth/authentication'
import {Router} from '@angular/router'
@Component({
    selector: '[login-info-nav]',
    templateUrl: './login-info.component.html',
    styleUrls: ['./login-info.component.css']
})
export class LoginInfoComponent{
    public auth: IAuthencation;
    constructor(private _authService: AuthService
            , private _router: Router){
        this.auth = this._authService.getAuth();
    }
    logOut(): void{
        this._authService.logOut();
        this._router.navigate(['/home']);
    }
}