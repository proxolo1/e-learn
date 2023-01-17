import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  courseForm!:FormGroup;
  access:any;
  updateTemp:any;
  users:any;
  constructor(private api:ApiService) { 
   JSON.parse(localStorage.getItem("user")||"").user.roles.forEach((role: { name: any; })=>{
    console.log(role.name)
    if(role.name=="ROLE_USER"){
      this.access=false;
    }
    else{
      this.access=true;
    }
   })
  }
  courses:any;
  ngOnInit(): void {
    if(this.access){
      this.api.getAllCourse().subscribe(res=>{
      console.log(res)
      this.courses=res;
    })
    this.courseForm=new FormGroup({
      name:new FormControl("",[Validators.required]),
      description:new FormControl("",[Validators.required]),
      trainer:new FormControl("",[Validators.required]),
      duration:new FormControl("",[Validators.required]),
      max_registrations:new FormControl("",[Validators.required])
    })
    }
    else{
      alert("access denied");
      let main=<HTMLDivElement>document.querySelector(".main")
      main.innerHTML="<code>ACCESS DENIED<code><br><a href=''>home</a>"
    }
  }
  addCourse(){
    this.api.addCourse(this.courseForm.value).subscribe(res=>{
      console.log(res);
      location.reload();;
    })
  }
  updateCourse(courseName:string){
    this.api.viewCourse(courseName).subscribe(res=>{
      this.updateTemp=res;
     let update=<HTMLDivElement>document.querySelector(".update");
     let name=<HTMLInputElement>document.getElementById("name");
     let description=<HTMLInputElement>document.getElementById("description")
     let duration=<HTMLInputElement>document.getElementById("duration")
     let trainer=<HTMLInputElement>document.getElementById("trainer");
     let max_registrations=<HTMLInputElement>document.getElementById("max_registrations")
    //  update.style.display="block";
     name.value=this.updateTemp.name;
     description.value=this.updateTemp.description;
     trainer.value=this.updateTemp.trainer;
     duration.value=this.updateTemp.duration;
     max_registrations.value=this.updateTemp.max_registrations;
    })
  }
  viewCourse(courseName:string){
    this.api.viewCourse(courseName).subscribe(res=>{
      console.log(res);
      this.usersFn(res);
    //  let myWindow= window.open('',
    //                 '_blank',
    //                 'width=400,height=400 top=200,left=600');
    //                myWindow?.document.write(JSON.stringify(res))
    })
  }
  deleteCourse(courseName:string){
    this.api.deleteCourse(courseName).subscribe(res=>{
      console.log(res)
      window.location.reload();
    })
  }
  saveUpdate(){
    let update=<HTMLDivElement>document.querySelector(".update");
    let name=<HTMLInputElement>document.getElementById("name");
    let description=<HTMLInputElement>document.getElementById("description")
    let duration=<HTMLInputElement>document.getElementById("duration")
    let trainer=<HTMLInputElement>document.getElementById("trainer");
    let max_registrations=<HTMLInputElement>document.getElementById("max_registrations")
    this.api.updateCourse(name.value,{name:name.value,description:description.value,duration:duration.value,trainer:trainer.value,max_registrations:max_registrations.value}).subscribe(res=>{
      console.log(res)
      alert("updated successfully")
      location.reload();
    })
  }
  usersFn(user:any){
    if(user.users.length==0){
      this.users=[{
        id:0,firstName:"NA",lastName:"NA",jobTitle:"NA",phoneNumber:"NA"
      }]
    }
    else{
        this.users=user.users;
    }
  
   
  }
}
