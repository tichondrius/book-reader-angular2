import {Component} from '@angular/core'
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'

@Component({
    selector: 'login-cpt',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public username: string;
    public password: string;
    public message: string;
    public success: boolean = false;
   

    constructor(private router: Router, private _authService: AuthService){
        
        console.log(this._authService.getAuth());
    }
    Login(): void{
        this.message = undefined;
        this._authService.login(this.username, this.password)
        .subscribe(data => {
            this._authService.setAuth(data);
            this.success = true;
            setTimeout(()=>{this.router.navigate(['/home'])}, 2000);
        }, err => {
            this.message = err.message;
        });
    }
    RedirectHome(): void{
       
    }
    
}