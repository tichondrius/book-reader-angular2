import {Component} from '@angular/core'
import {UserService} from '../../user/user.service'
import {IUser} from '../../user/user'

@Component({
    selector: 'profile-cpn',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
    public user: IUser;
    constructor(private userService: UserService){
       this.userService.getInfo()
           .subscribe(user => this.user = user, error => {
           console.log(error);
       })
    }
}