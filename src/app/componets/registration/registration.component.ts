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
  register:any|null;
  registerForm!:FormGroup;
  constructor(private api:ApiService,private router:Router) {
    
   }
  onsubmit(){
    
    console.log(this.registerForm.get('password'))
    this.api.register(this.registerForm.value).subscribe(res=>{
      this.register=res;
      if(this.register.access){
          this.router.navigate(["login"]);

      }
      else{
        alert(this.register.successMessage)
      }
    
    })
  }

  ngOnInit(): void {
    this.registerForm= new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      phoneNumber:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      jobTitle:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  
}

export function passwordMatchValidator(form: FormGroup) {
  const password =form.get('password')!.value;
  const confirmPassword = form.get('confirmPassword')!.value;

  if (password !== confirmPassword) {
     form.get('confirmPassword')!.setErrors({ passwordMismatch: true });
  } else {
      form.get('confirmPassword')!.setErrors(null);
  }
}