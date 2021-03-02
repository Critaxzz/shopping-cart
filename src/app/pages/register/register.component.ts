import { Router } from '@angular/router';
import { AuthServiceService } from './../../service/auth-service.service';
import { User } from './../class/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../class/passwordChecker';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide=true
  registerForm:FormGroup


  constructor(private fb:FormBuilder, private authService:AuthServiceService,private router:Router) { 
    this.registerForm=this.fb.group({
      Name: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.email,Validators.required,]),
      PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(10),Validators.pattern('[0-9]*')]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),]),
      password2: new FormControl('',[Validators.required,passwordMatchValidator]),
      
      });
      this.registerForm.controls.password.valueChanges
  .subscribe(x => this.registerForm.controls.password2.updateValueAndValidity())


   }

  ngOnInit(): void {
  }

  onRegister(data:User){
    if(this.registerForm.valid){
      console.log(data)
          this.authService.signUp(data.Name,data.Email,data.PhoneNumber,data.password).then(()=>{
            this.router.navigate(["login"])
          })
    }

  }

}
