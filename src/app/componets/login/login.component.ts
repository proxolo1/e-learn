import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginForm!:FormGroup;
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl(""),
      password:new FormControl("")
    })
  }
  onsubmit(){
    console.log(this.loginForm.value)
  }
}
