import { Injectable } from '@angular/core';
import { RegisterUser } from '../classes/register';
import { HttpClient } from '@angular/common/http';
import { Login } from '../classes/login';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  register(user:RegisterUser){
   return this.http.post("http://localhost:8080/auth/register",user);
  }
  loginUser(loginUser:Login){
    return this.http.post("http://localhost:8080/auth/login",loginUser);
  }
}
