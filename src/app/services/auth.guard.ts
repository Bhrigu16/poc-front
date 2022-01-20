import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private loginService:LoginService,
            private router:Router){

}

  canActivate() {
    //alert('canActivate'+sessionStorage.getItem('user'))
    if(sessionStorage.getItem('user')){
      console.log("User session Exist"+sessionStorage.getItem('user'))
      return true;
    }
    
    //alert("Not Logged In")
    this.router.navigate(['home'])
    return false;
    
  }
  
}
