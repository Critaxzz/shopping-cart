import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  userList:any;
  access:boolean=false

  constructor(private fire:AngularFirestore) { }

  saveUser(data:any){
    this.fire.collection("shopping-cart").add({...data})
    console.log("added",data)
  }
  readUser(){
    return this.fire.collection("shopping-cart").snapshotChanges()
  }
  logincheck(e:string,p:string){
    for( let i of this.userList){
      if(i.email==e && i.password==p){  
         
        // this.currentUser=i.firstName
        this.access=true 
      }
    } 
    if(this.access!=true){
      console.log("wrong")
      this.access=false
      alert("check password and username")
    }
  }
}
