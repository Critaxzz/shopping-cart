import { User } from './../class/user.model';
import { AuthServiceService } from './../../service/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide=true
  loginForm:FormGroup

  constructor(private fb:FormBuilder,private authService:AuthServiceService,private router:Router) {
    this.loginForm=this.fb.group({
      email: new FormControl('', [Validators.email,Validators.required,]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),]),    
      });
  }

  ngOnInit(): void {
  }

  login(data:User){
    if(this.loginForm.valid){
      // console.log(data)
      this.authService.login(this.loginForm.get("email")?.value , this.loginForm.get("password")?.value).then
      (result =>{
        if(result){  
          this.authService.myId=result.user?.uid
          console.log(this.authService.myId)

          
          this.router.navigate(["products"])
        }
        else{
          console.log("unable to login",{ duration :4000})
        }
      }).catch(err =>{
          console.log("unable to login",err,{ duration :4000})

      });

    }
    

  }

}
