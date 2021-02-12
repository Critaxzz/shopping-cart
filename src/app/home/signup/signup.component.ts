import { SignupService } from './../../services/signup.service';
import { User } from './../user'; 
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup,} from '@angular/forms';
import { passwordMatchValidator } from './passwordcheck'; 


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit { 
  model=new User()
  hide = true;

  form:FormGroup

  constructor(private fb:FormBuilder,private service:SignupService) {
    this.form=this.fb.group({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email,Validators.required,]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10),Validators.pattern('[0-9]*')]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),]),
    password2: new FormControl('',[Validators.required,passwordMatchValidator]),
    
    });
    this.form.controls.password.valueChanges
  .subscribe(x => this.form.controls.password2.updateValueAndValidity())
   }

  ngOnInit(): void {
  }
  onsubmit(){
    console.log("working...")
    this.service.saveUser(this.model)
  }

}
