import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  LoginUrl="http://localhost:9090/api/users/login"
  RegisterUrl="http://localhost:9090/api/users/register"
  constructor(private http:HttpClient) { }

  //calling the server

  //generateToken --- doLogin
  doLogin(credentials:any){
    //token generate
    return this.http.post(`${this.LoginUrl}`,credentials)
  }

  doregister(credentials:any){
    return this.http.post(`${this.RegisterUrl}`,credentials)
  }

  //For Logged In User
  loginUser(token:any){
    sessionStorage.setItem('user',token)
    return true;
  }


  //To check whether user logged in
  isLoggedIn(){
    let token=sessionStorage.getItem('user')
    //alert(token)
    if(token==undefined || token=='' || token==null){
      return false;
    }
    else{
      return true;
    }
  }


  //For Log out user
  logout(){
    //sessionStorage.clear();
    sessionStorage.removeItem('user');
    return true;
  }

  
  //for getting the token
  getToken(){
    return sessionStorage.getItem('user');
  }
}
