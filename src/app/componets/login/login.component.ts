import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:ApiService,private token:TokenService,private router:Router) { }
  loginForm!:FormGroup;
  response!:any;
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl(""),
      password:new FormControl("")
    })
  }
  onsubmit(){
    this.api.loginUser(this.loginForm.value).subscribe(data=>{
      this.response=data;
     this.token.setToken(data);
     this.router.navigate(['']);
     localStorage.setItem("user",JSON.stringify(data));
      this.response.user.roles.forEach((role: { name: string; })=>{
        if(role.name=="ROLE_USER"){
          this.router.navigate([""]);
        }
        else{
          this.router.navigate(["admin"])
        }
      })
    },err=>{
      alert(err.error.accessToken)
    })
  }
}
