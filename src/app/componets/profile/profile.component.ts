import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  admin:boolean=false;
  courses:any;
  user_course!:any[]
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    let arr: any[]=[{
      name:"NA",
      description:"NA",
      duration:"NA",
      trainer:"NA"
    }];
    this.profile=JSON.parse(localStorage.getItem("user")||'{}');
    console.log(this.profile)
   this.profile.user.roles.forEach((data: { name: string; })=>{
    if(data.name=="ROLE_ADMIN"){
      this.admin=true;
    }
    });
    this.api.getAllCourse().subscribe(res=>{
      console.log(res)
      this.courses=res;
      this.courses.forEach((course: { users: any[]; })=>{
        course.users.forEach(user=>{
          if(user.email==this.profile.user.email){
            arr.push(course)
          }
        })
      })
    }) 
    this.user_course=arr;
  }
  
}


