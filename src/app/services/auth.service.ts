import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  logout(){
    localStorage.clear();
  }
  isLoggedIn(){
    return localStorage.getItem("user")
  }
}
