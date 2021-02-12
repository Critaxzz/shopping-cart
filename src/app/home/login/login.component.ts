import { User, login } from './../user';
import { SignupService } from './../../services/signup.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup,} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model= new login()
  hide = true;

  form:FormGroup

  constructor(private fb:FormBuilder,private service:SignupService) {
    this.form=this.fb.group({
    email: new FormControl('', [Validators.email,Validators.required,]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),]),    
    });}

  ngOnInit(): void {
    this.service.readUser().subscribe(data=>{
      console.log(data)
      this.service.userList= data.map((doc)=>{
        return{
          id:doc.payload.doc.id,
          ...doc.payload.doc.data() as {} 
        } as User
        
      })
      
    }) 
  }
  onsubmit(){
    console.log("WORKING..",this.model)
    this.service.logincheck(this.model.email,this.model.password)
    console.log(this.service.access)
  }

}
