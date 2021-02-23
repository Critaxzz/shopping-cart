import { AuthService } from './../auth.service';
import { FormGroup, FormBuilder,FormControl , Validators} from '@angular/forms';
import { User } from './user.model';
import { UserService } from './../user.service';
 import { Component, OnInit} from '@angular/core'; 
import { passwordMatchValidator } from './passwordChecker';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  hide=true
  registerForm:FormGroup


  constructor(private UserService:UserService,private fb:FormBuilder,) { 
    this.registerForm=this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email,Validators.required,]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10),Validators.pattern('[0-9]*')]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),]),
      password2: new FormControl('',[Validators.required,passwordMatchValidator]),
      
      });
      this.registerForm.controls.password.valueChanges
  .subscribe(x => this.registerForm.controls.password2.updateValueAndValidity())


   }

  ngOnInit(): void {
    this.UserService.getUser().subscribe((data) =>{ 

      this.UserService.userList= data.map((doc)=>{
        return{
          id:doc.payload.doc.id,
          ...doc.payload.doc.data() as {} 
        } as User 
        
        
      })
      console.log(this.UserService.userList)
      // this.user= this.UserService.userList
      // console.log(this.user) 
    });

  }
  onRegister(data:User){
    if(this.registerForm.valid){ 
    this.UserService.register(data)
    // this.UserService.signup(data.email ,data.password);
    // data.email = data.password = '';
    }
    
  } 

 

}
