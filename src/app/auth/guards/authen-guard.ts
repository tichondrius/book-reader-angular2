import {Injectable} from '@angular/core'
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router'
import {AuthService} from '../auth.service'

//Chặn nếu đăng nhập rồi
@Injectable()
export class UnAuthenGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot): boolean{
        let auth = this.authService.getAuth();
        if (auth && auth.isAuth){
              this.router.navigate(['/home']);
            return false;
        }
        else
        {
            return true;
        }
    }
}

@Injectable()
export class AuthenGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot): boolean{
        let auth = this.authService.getAuth();
        if (auth && auth.isAuth){
            return true;
        }
        else
        {
            this.router.navigate(['/login']);
            return false;
        }
    }
}