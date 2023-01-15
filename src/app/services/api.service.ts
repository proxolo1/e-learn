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
  addCourse(course:any){
    return this.http.post(`${this.url}/api/add-course`,course,{headers:{"Authorization":`Bearer ${this.token.getToken()}`}})
  }
  enrollCourse(email:string,courseName:string){
    return this.http.get(`${this.url}/api/enroll-course?email=${email}&course=${courseName}`,{headers:{"Authorization":`Bearer ${this.token.getToken()}`}})
  }
  viewCourse(courseName:string){
    return this.http.get(`${this.url}/api/get-course?course-name=${courseName}`,{headers:{"Authorization":`Bearer ${this.token.getToken()}`}})

  }
  updateCourse(courseName:string,course:any){
    return this.http.put(`${this.url}/api/update-course?course-name=${courseName}`,course,{headers:{"Authorization":`Bearer ${this.token.getToken()}`}})
  }
  deleteCourse(courseName:string){
    return this.http.delete(`${this.url}/api/delete-course?course-name=${courseName}`,{headers:{"Authorization":`Bearer ${this.token.getToken()}`}})
  }
}
