import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm!:FormGroup;
  constructor(private api:ApiService,private router:Router) {
    
   }
  onsubmit(){
    this.api.register(this.registerForm.value);
    this.router.navigate(["/login"]);
  }

  ngOnInit(): void {
    this.registerForm= new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email:new FormControl(''),
      phoneNumber:new FormControl(''),
      jobCategory:new FormControl(''),
      password:new FormControl('')
    });
  }

}
