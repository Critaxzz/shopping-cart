import { UserService } from './../../user.service';
import { User } from './../user.model';
import { FormGroup, FormBuilder ,Validators ,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  hide=true
  Form:FormGroup

  constructor(private fb:FormBuilder,private UserService:UserService) {
    this.Form=this.fb.group({
      email: new FormControl('', [Validators.email,Validators.required,]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),]),    
      });} 

  ngOnInit(): void {

  }
  onsubmit(data:User){ 
    console.log(data)
    this.UserService.login(data)
    
  }

}
