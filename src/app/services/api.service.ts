import { Injectable } from '@angular/core';
import { RegisterUser } from '../classes/register';
import { HttpClient } from '@angular/common/http';
import { Login } from '../classes/login';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string="http://localhost:8080"
  constructor(private http:HttpClient,private token:TokenService) { }
  register(user:RegisterUser){
   return this.http.post(`${this.url}/auth/register`,user);
  }
  loginUser(loginUser:Login){
    return this.http.post(`${this.url}/auth/login`,loginUser);
  }
  getAllCourse(){
    return this.http.get(`${this.url}/api/all-courses`,{headers:{"Authorization":`Bearer ${this.token.getToken()}`}})
  }
  dummyReviews(){
    return this.http.get("https://dummyjson.com/comments");
  }
}
