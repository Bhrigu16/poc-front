import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService,
              private router:Router,
              private navBar:NavBarComponent
              ) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    
    if((this.credentials.username!='' && this.credentials.password!='')&&(this.credentials.username!=null && this.credentials.password!=null)){
      console.log("Submit form to server");

      //Token generation 
      this.loginService.doLogin(this.credentials).subscribe(
        (response:any)=>{
          if(response==="SUCCESS"){
          alert("Login Successful")
          
          //Token success
          console.log("-------------------------------------------------------success------------------------------------------");
          //console.log(response.token)
          //Storing the value in the localstorage
          sessionStorage.setItem('user',this.credentials.username);
          console.log("In login Service function"+sessionStorage.getItem('user'))
          //console.log("Nav bar loggedIn "+this.navBar.loggedIn);
          //this.navBar.loggedIn=true
          //this.navBar.loggedIn=true;
          
          //this.navBar.checkLogIn()
          this.navBar.setLogIn();

          this.router.navigate(['/dashboard']);

          

          }
          else{
            alert("Login Unsuccessful Try Again")
            this.router.navigate(['/login']);
          }
        },
        error=>{

          //Token error
          alert("Error in sending request")
          console.log("In error of log-in failed ");
          console.log(error);
          this.router.navigate(['/signup']);
        }
      )

    }else{
      console.log("Fields are empty");
    }
  }
}
