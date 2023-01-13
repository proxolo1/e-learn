import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-homw',
  templateUrl: './homw.component.html',
  styleUrls: ['./homw.component.css']
})
export class HomwComponent implements OnInit {
  fakeComments:any|null
  avatar:any|null
  constructor(private api: ApiService) { }
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
  }

}
