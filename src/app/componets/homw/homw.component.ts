import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-homw',
  templateUrl: './homw.component.html',
  styleUrls: ['./homw.component.css']
})
export class HomwComponent implements OnInit {
  fakeComments:any|null
  avatar:any|null
  dark:boolean=false;
  isLogin!:any
  constructor(private api: ApiService,private tokenService:TokenService,private auth:AuthService,private router:Router) { }
  courses: any | null;
  ngOnInit(): void {
    this.api.getAllCourse().subscribe(res => {
      console.log(res)
      this.courses=res;
    })

    this.api.dummyReviews().subscribe(data=>{
      console.log(data)
      this.fakeComments=data;
    })
    this.isLogin=this.tokenService.getToken()
  }
  darkModeToggle(){
    let background=<HTMLDivElement>document.querySelector(".background");
    let main=<HTMLDivElement>document.querySelector(".main");
    if(!this.dark){
      background.style.backgroundColor="black";
      main.style.color="red";
    }
    else{
      background.style.backgroundColor="white";
      main.style.color="black";
    }
    this.dark=!this.dark;

  }
  enrollCourse(courseName:string){
    this.api.enrollCourse(JSON.parse(localStorage.getItem("user")||"").user.email,courseName).subscribe(res=>{
      console.log(res)
      alert("enrolled successfully")
    })
  }
  logOut(){
    this.auth.logout();
    this.router.navigate(['login'])
  }
}
