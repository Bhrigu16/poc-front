import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  

  public loggedIn=false;
  
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn()
  }

  ngOnChanges(){
    console.log("The value for logged In value changed"+this.loggedIn);
  }

  checkLogIn(){
    console.log("In checked In"+this.loggedIn)
    this.loggedIn=this.loginService.isLoggedIn()
   
    //$("#step1Content").load();
    
    console.log("after setting checked In"+this.loggedIn)
  }
  setLogIn(){
    console.log("In setLogin"+this.loggedIn)
    this.loggedIn=true;
    console.log("after setting "+this.loggedIn)
  }

  ResetLogIn(){
    this.loggedIn=false;
  }


  logoutUser(){
    this.loginService.logout();
    location.reload();
  }                                                                                                        

}
