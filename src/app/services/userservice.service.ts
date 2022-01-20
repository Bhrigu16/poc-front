import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  baseUrl='http://localhost:9090/api'
  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(`${this.baseUrl}/test`)
  }
}

