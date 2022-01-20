import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  credentials={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    companyname:'',
    state:''
  }

  constructor(
              private loginService:LoginService,
              private router:Router
              ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    
    if((this.credentials.username!='' && this.credentials.password!='')&&(this.credentials.username!=null && this.credentials.password!=null)){
      console.log("Submit form to server");

      //Token generation 
      this.loginService.doregister(this.credentials).subscribe(
        (response:any)=>{
          //Token success

          if(response==="SUCCESS"){
            alert("Registration Successful")
            
            //Token success
            console.log("-----------------------------------------------Register Success------------------------------------------");
            
            
            
            //Storing the value in the sessionstorage
            //sessionStorage.setItem('user',this.credentials.username);
            console.log("Registration Success")
            
            this.router.navigate(['/login']);
  
            }
            else{
              alert("Registration Unsuccessful Try Again")
              this.router.navigate(['/signup']);
            }
          },
        error=>{
          //Token error
          console.log("In error of log-in failed ");
          console.log(error);
        }
      )

    }else{
      console.log("Fields are empty");
    }
  }
}
