import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:ApiService,private token:TokenService) { }
  loginForm!:FormGroup;
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl(""),
      password:new FormControl("")
    })
  }
  onsubmit(){
    console.log(this.loginForm.value)
    this.api.loginUser(this.loginForm.value).subscribe(data=>{
     this.token.setToken(data);
    })
  }
}
