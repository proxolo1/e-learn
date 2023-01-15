import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  courseForm!:FormGroup;
  constructor(private api:ApiService) { }
  courses:any;
  ngOnInit(): void {
    this.api.getAllCourse().subscribe(res=>{
      console.log(res)
      this.courses=res;
    })
    this.courseForm=new FormGroup({
      name:new FormControl(""),
      description:new FormControl(""),
      trainer:new FormControl(""),
      duration:new FormControl("")
    })
  }
  addCourse(){
    this.api.addCourse(this.courseForm.value).subscribe(res=>{
      console.log(res);
      location.reload();
    })
  }
  updateCourse(courseName:string){

  }
  viewCourse(courseName:string){
    this.api.viewCourse(courseName).subscribe(res=>{
      console.log(res)
    })
  }
  deleteCourse(courseName:string){
    this.api.deleteCourse(courseName).subscribe(res=>{
      console.log(res)
      location.reload();
    })
  }
}
