import {Component} from '@angular/core'
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'
import IRegister from './register'
@Component({
    selector: 'login-cpt',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    public model: IRegister;
    public success: boolean = false;
    public messages: string[];

    constructor(private router: Router, private _authService: AuthService){
        console.log(this._authService.getAuth());
        this.model = {username: '', name: '', password: '', repassword: ''}
    }
    Login(): void{
        this.messages = [];
        this._authService.register(this.model)
        .subscribe(data => {
            this.success = true;
            setTimeout(()=>{this.router.navigate(['/login'])}, 2000);
        }, err => {
            this.messages = err.lstMessErr;
        });
    }
   
    
}